export default class SkyWay
{
  constructor(stream, option) {
    this.peer = new Peer(option)
    this.stream = stream
    this.otherStreams = []
    this.joinMember = () => {}
    this.leaveMember = () => {}
  }

  send(type, data) {
    this.room.send({
      type,
      data
    })
  }

  joinRoom(roomName) {
    this.room = this.peer.joinRoom(roomName, {stream: this.stream })

    this.room.on('stream', (stream) => {
      this.otherStreams.push(stream)
      //CallBack
      this.joinOther(stream)
    })

    this.room.on('peerLeave', (id) => {
      let idx = this.otherStreams.indexOf((stream) => {
        return stream.peerId == id
      })
      this.otherStreams.splice(idx, 1)

      this.leaveMember(id)
    })
  }

  endCall() {
    this.otherStreams = []
    this.room.close()
  }
}
