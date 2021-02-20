(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{454:function(e,t,s){"use strict";s.r(t);var a=s(40),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"lab-1-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lab-1-example"}},[e._v("#")]),e._v(" Lab 1 Example")]),e._v(" "),s("p",[e._v("Here's a short example of another system designed in a similar way as described in Lab 1. The system here is a simple Ping Pong game (each user is expected to have their own instance of the system) users can play either against each other (over Bluetooth) or the computer . There's also a highscore system for playing against the computer, and there should exists three different level of difficulties (easy, medium and hard) on the computer.")]),e._v(" "),s("h2",{attrs:{id:"actors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actors"}},[e._v("#")]),e._v(" Actors")]),e._v(" "),s("ul",[s("li",[e._v("User (Primary)")])]),e._v(" "),s("h2",{attrs:{id:"goals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goals"}},[e._v("#")]),e._v(" Goals")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Actor")]),e._v(" "),s("th",[e._v("Goal")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("User")]),e._v(" "),s("td",[e._v("Play VS Computer")])]),e._v(" "),s("tr",[s("td",[e._v("User")]),e._v(" "),s("td",[e._v("Submit Highscore")])]),e._v(" "),s("tr",[s("td",[e._v("User")]),e._v(" "),s("td",[e._v("View Highscores")])]),e._v(" "),s("tr",[s("td",[e._v("User")]),e._v(" "),s("td",[e._v("Play VS Player as Host")])]),e._v(" "),s("tr",[s("td",[e._v("User")]),e._v(" "),s("td",[e._v("Play VS Player as Joiner")])])])]),e._v(" "),s("h2",{attrs:{id:"use-case-diagram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-case-diagram"}},[e._v("#")]),e._v(" Use-Case Diagram")]),e._v(" "),s("FigureNumber"),e._v(" below shows a use-case diagram of the Ping Pong Game (System under Design).\n"),s("Figure",{attrs:{caption:"Use-case diagram of the Ping Pong Game (System under Design)."}},[s("img",{attrs:{src:"static-files/lab-1/use-case-diagram.jpeg",alt:"Use-case diagram of the Ping Pong Game (System under Design)."}})]),e._v(" "),s("h2",{attrs:{id:"brief-descriptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brief-descriptions"}},[e._v("#")]),e._v(" Brief Descriptions")]),e._v(" "),s("p",[e._v("Below are brief descriptions of all use-cases.")]),e._v(" "),s("h3",{attrs:{id:"play-vs-computer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#play-vs-computer"}},[e._v("#")]),e._v(" Play VS Computer")]),e._v(" "),s("p",[e._v("The user selects the option to play VS the computer. The user selects the game difficulty, and then the game starts.")]),e._v(" "),s("h3",{attrs:{id:"submit-highscore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submit-highscore"}},[e._v("#")]),e._v(" Submit Highscore")]),e._v(" "),s("p",[e._v("The user "),s("u",[e._v("Play VS Computer")]),e._v(". After the game the user tells the system she wants to add her score to the highscore list together with her name (which she enters).")]),e._v(" "),s("h3",{attrs:{id:"view-highscore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-highscore"}},[e._v("#")]),e._v(" View Highscore")]),e._v(" "),s("p",[e._v("The user selects the option to view the highscore. The user is then presented the top 10 highscores and names in the game.")]),e._v(" "),s("h3",{attrs:{id:"play-vs-player-as-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#play-vs-player-as-host"}},[e._v("#")]),e._v(" Play VS Player as Host")]),e._v(" "),s("p",[e._v("The user selects the option to play VS another player as the host. The user sees a list of nearby devices that want to "),s("u",[e._v("Play VS Player as Joiner")]),e._v(". The user selects one of them, and then the game starts.")]),e._v(" "),s("h3",{attrs:{id:"play-vs-player-as-joiner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#play-vs-player-as-joiner"}},[e._v("#")]),e._v(" Play VS Player as Joiner")]),e._v(" "),s("p",[e._v("The user selects the option to join a "),s("u",[e._v("Play VS Player as Host")]),e._v(" game. The system waits till another device hosting a game accepts playing against this user, then the game starts.")]),e._v(" "),s("h2",{attrs:{id:"fully-dressed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fully-dressed"}},[e._v("#")]),e._v(" Fully Dressed")]),e._v(" "),s("table",[s("tr",[s("th",[e._v("Use-Case Name")]),e._v(" "),s("td",[e._v("Play VS Player as Host")])]),e._v(" "),s("tr",[s("th",[e._v("Scope")]),e._v(" "),s("td",[e._v("The Ping Pong Game")])]),e._v(" "),s("tr",[s("th",[e._v("Level")]),e._v(" "),s("td",[e._v("User-goal")])]),e._v(" "),s("tr",[s("th",[e._v("Primary Actor")]),e._v(" "),s("td",[e._v("User")])]),e._v(" "),s("tr",[s("th",[e._v("Stakeholders and Interests")]),e._v(" "),s("td",[s("ul",[s("li",[s("b",[e._v("User")]),e._v(", wants to play the game against another user.")])])])]),e._v(" "),s("tr",[s("th",[e._v("Preconditions")]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Two different devices running the system.")]),e._v(" "),s("li",[e._v("Both devices must support Bluetooth.")]),e._v(" "),s("li",[e._v("Both devices must be close to each other.")]),e._v(" "),s("li",[e._v("Bluetooth may not be used for anything else on the devices.")])])])]),e._v(" "),s("tr",[s("th",[e._v("Success Guarantee")]),e._v(" "),s("td",[e._v("The game has been played on both systems over Bluetooth.")])]),e._v(" "),s("tr",[s("th",[e._v("Main Success Scenario")]),e._v(" "),s("td",[s("ol",[s("li",[e._v("The user selects the option to play against another player as the host.")]),e._v(" "),s("li",[e._v("The system tells the user to turn on Bluetooth on the device.")]),e._v(" "),s("li",[e._v("The user turns on Bluetooth on the device.")]),e._v(" "),s("li",[e._v("The system shows a list to the user of nearby Bluetooth devices that are trying to "),s("u",[e._v("Play VS Player as Joiner")]),e._v(" (updated continuously).")]),e._v(" "),s("li",[e._v("The user selects the Bluetooth device she wants to play against.")]),e._v(" "),s("li",[e._v("The device connects to the selected device using Bluetooth.")]),e._v(" "),s("li",[e._v("The game starts.")])])])]),e._v(" "),s("tr",[s("th",[e._v("Extentions")]),e._v(" "),s("td",[s("ul",{staticStyle:{"list-style-type":"none","padding-left":"0"}},[s("li",[e._v("\n                    2a. Bluetooth is already turned on.\n                    "),s("ol",{staticStyle:{"margin-left":"16px"}},[s("li",[e._v("Continue to 4.")])])]),e._v(" "),s("li",[e._v("\n                    4a. No nearby devices found.\n                    "),s("ol",{staticStyle:{"margin-left":"16px"}},[s("li",[e._v("Don't show an empty list, tell the user the system is searching for nearby devices, show the list when at least 1 device has been found.")])])]),e._v(" "),s("li",[e._v("\n                    6a. Can't connect to selected device.\n                    "),s("ol",{staticStyle:{"margin-left":"16px"}},[s("li",[e._v("Show an error message to the user.")]),e._v(" "),s("li",[e._v("Take the user back to 4.")])])])])])]),e._v(" "),s("tr",[s("th",[e._v("Special Requirements")]),e._v(" "),s("td",[e._v("The devices must support Bluetooth")])]),e._v(" "),s("tr",[s("th",[e._v("Technology and Data Variations List")]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Bluetooth")]),e._v(" "),s("li",[e._v("The protocol PPP (the Ping Pong Protocol) specifies which commands that are sent between the devices.")])])])]),e._v(" "),s("tr",[s("th",[e._v("Frequency of Occurrence")]),e._v(" "),s("td",[e._v("At most one at a time.")])]),e._v(" "),s("tr",[s("th",[e._v("Miscellaneous")]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Need to specify which Bluetooth version to support.")]),e._v(" "),s("li",[e._v("Strong connection to the use-case "),s("u",[e._v("Play VS Player as Joiner")])])])])])]),e._v(" "),s("h2",{attrs:{id:"sequence-diagram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sequence-diagram"}},[e._v("#")]),e._v(" Sequence Diagram")]),e._v(" "),s("p",[e._v("A sequence diagram for "),s("u",[e._v("Play VS Player as Host")]),e._v(" is found in "),s("FigureNumber"),e._v(" below.")],1),e._v(" "),s("Figure",{attrs:{caption:"Sequence diagram for Play VS Player as Host."}},[s("mermaid",[e._v("\nsequenceDiagram\n  participant User\n  participant Device\n  User->>Device: Play Bluetooth game as host\n  Device->>User: Please turn on Bluetooth\n  User->>Device: Turn on Bluetooth\n  loop Until the user selects device\n    Device->>Device: Search for devices\n    Device->>User: Found devices\n  end\n  User->>Device: Selected device\n  Device->>Device: Connect to selected device\n  Device->>User: Play!\n")])],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);