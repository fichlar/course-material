(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{433:function(t,e,a){"use strict";a.r(e);var i=a(40),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tutorials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorials"}},[t._v("#")]),t._v(" Tutorials")]),t._v(" "),a("p",[t._v("Here you will find material from the different tutorials.")]),t._v(" "),a("h2",{attrs:{id:"tutorial-0-android-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-0-android-studio"}},[t._v("#")]),t._v(" Tutorial 0 (Android Studio)")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645",target:"_blank",rel:"noopener noreferrer"}},[t._v("Recording"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"tutorial-1-activities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-1-activities"}},[t._v("#")]),t._v(" Tutorial 1 (Activities)")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645",target:"_blank",rel:"noopener noreferrer"}},[t._v("Recording"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"./static-files/tutorials/tutorial-01-app.zip"}},[t._v("tutorial-01-app.zip")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("code",[t._v("aView.postRunnable()")]),t._v(" did auto-cancel the runnable when the activity was destroyed, but the code has been updated to use "),a("code",[t._v("aHandler.postRunnable()")]),t._v(" instead, and that one does not auto-cancel the runnable when the activity is destroyed, so with this version of the app you can see that the countdown continues even after the activity is destroyed unless you cancel the runnable with "),a("code",[t._v("aHandler.removeCallbacks()")]),t._v(" in "),a("code",[t._v("onDestroy()")]),t._v(".")]),t._v(" "),a("p",[t._v("I've hard coded strings at some places, but should of course have used string resources instead. Don't do the same mistake as me!")]),t._v(" "),a("p",[a("code",[t._v("activity_login.xml")]),t._v(" has been updated to more nicely position the views in the ConstraintLayout.")])]),t._v(" "),a("h2",{attrs:{id:"tutorial-2-fragments-and-runtime-configuration-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-2-fragments-and-runtime-configuration-changes"}},[t._v("#")]),t._v(" Tutorial 2 (Fragments and Runtime Configuration Changes)")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645",target:"_blank",rel:"noopener noreferrer"}},[t._v("Recording"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"./static-files/tutorials/tutorial-02-app.zip"}},[t._v("tutorial-02-app.zip")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Do not hardcode text shown to the user as I have done in the app, use string resources!")])]),t._v(" "),a("h2",{attrs:{id:"tutorial-3-runtime-configuration-changes-long-running-operations-and-panes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-3-runtime-configuration-changes-long-running-operations-and-panes"}},[t._v("#")]),t._v(" Tutorial 3 (Runtime Configuration Changes, Long Running Operations and Panes)")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645",target:"_blank",rel:"noopener noreferrer"}},[t._v("Recording"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"./static-files/tutorials/tutorial-03-app.zip"}},[t._v("tutorial-03-app.zip")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Extra info")]),t._v(" "),a("p",[t._v("The view binding problem I had with layouts with the same name and different qualifiers was because one and the same id was used on different type of views in the different layouts. View binding works fine as long as views in the different layouts with the same id are of the same type (e.g. both are "),a("code",[t._v("Button")]),t._v(").")]),t._v(" "),a("p",[t._v("In the final solution, the "),a("code",[t._v("ListToDosFragment")]),t._v(" communicates with the "),a("code",[t._v("MainActivity")]),t._v(" through the "),a("code",[t._v("MainActivity")]),t._v("'s ViewModel, which makes the implementation quite straight forward compared to the template one can use in Android Studio. A drawback is that the fragment is dependent on the MainActivity, and can't easily be re-used in other activities.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);