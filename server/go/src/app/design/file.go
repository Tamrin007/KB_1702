package design

import (
	. "github.com/goadesign/goa/design/apidsl"
)

var _ = Resource("swaggerui", func() {
	Origin("*", func() {
		Methods("GET")
	})
	Files("/swaggerui/*filepath", "swaggerui/")
})

var _ = Resource("swagger", func() {
	Files("/swagger.json", "swagger/swagger.json")
})

var _ = Resource("front", func() {
	Files("/", "public/index.html")
	Files("/rooms", "public/create.html")
	Files("/rooms/*", "public/index1.html")
	Files("/fb", "public/fb.html")
})