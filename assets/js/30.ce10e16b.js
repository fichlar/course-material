(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{431:function(e,t,o){"use strict";o.r(t);var a=o(40),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"project-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#project-work"}},[e._v("#")]),e._v(" Project Work")]),e._v(" "),o("p",[e._v("On this page you find information about the examination test "),o("code",[e._v("Project Work")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"general-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general-information"}},[e._v("#")]),e._v(" General information")]),e._v(" "),o("CompactInfo",{attrs:{infoPieces:{"Number of credits":"6",Grades:["Fail","3","4","5"],"How to work":"In groups of three.",Goal:"To learn how to implement an advanced Android application.",Instructions:"Complete the different parts the project work consists of described on this page. You will implement an Android application, write a report describing your implementation and present your application to the rest of the class at the end of the course.","Grading guidelines":"Available on the Project Grading Guidelines page.","Re-examination":"Special presentation sessions will be available at the re-exam periods in June and in August. Contact the course coordinator for more details. Your work can also be graded at these re-exam period, but it will only be graded Fail/3.",Help:"Ask the teacher for help at the lab sessions."}}}),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("As project work, you should create a non-elementary Android application for smartphones & tablets by completing the instructions in this document. The instructions have been divided into different parts that should be completed in order. We recommend you read through all the parts before you start working on the project.")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/courses/android-development/project-grading-guidelines/"}},[e._v("Project Grading Guidelines")]),e._v(" page contains some guidelines for how your work will be graded. We recommend you read through it every now and then to double check that you fulfill the requirements for the grade you are aiming for.")],1),e._v(" "),o("p",[e._v("In your work you should also write a report explaining how your application is implemented. The report will be a living document throughout the course, meaning that you will continuously improve and add content to it as the course proceeds. The Word file "),o("a",{attrs:{href:"static-files/project-report-template.docx"}},[e._v("project-report-template.docx")]),e._v(" contains more information about what the report should cover.")]),e._v(" "),o("h2",{attrs:{id:"part-1-joining-a-project-group"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-1-joining-a-project-group"}},[e._v("#")]),e._v(" Part 1: Joining a project group")]),e._v(" "),o("p",[e._v("The project work should be carried out in groups of 3 students each. Let the examiner know who you are working with by joining one of the "),o("a",{attrs:{href:"https://ju.instructure.com/courses/3421/groups#tab-3281",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project Groups"),o("OutboundLink")],1),e._v(" on Canvas.")]),e._v(" "),o("p",[e._v("If you can't find someone to work with, send the course coordinator an email at "),o("a",{attrs:{href:"mailto:Peter.Larsson-Green@ju.se"}},[e._v("Peter.Larsson-Green@ju.se")]),e._v(" using the template shown in "),o("FigureNumber"),e._v(" below (you just need to replace "),o("code",[e._v("XXX")]),e._v(" with your specific values).")],1),e._v(" "),o("Figure",{attrs:{caption:"Template of message to be sent to the course coordinator if you can't find a partner to work with on your own. "}},[o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Hi!\n\nI need you to match me with a student for the project work in the course Android Development.\n\nMy name: XXX\nMy JU email: XXX@student.ju.se\nI'm an international student: XXX\nThe grade I'm aiming for in this course: XXX\nI got the following grades in the following pre-requisite courses (or similar):\n - Introduction to Programming: XXX\n - Data Structures and Algorithms: XXX\n - Object-Oriented Programming: XXX\n - Object-Oriented Software Development (with Design Patterns): XXX\n")])])])]),e._v(" "),o("p",[e._v("If you don't care about who you are matched with, you just need to enter your name and JU email in the template. The course coordinator will then try to match you with a student with similar ambitions and skills as you.")]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("To the Swedish students")]),e._v(" "),o("p",[e._v("After you have joined a Project Group you should each day you work with the project write an entry in your diary. Do not only write about what you have done, but also write about what discussions you had, which disagreement you had, how the work was divided, how you felt about your project partners, what you think is fair/not fair etc.")])]),e._v(" "),o("h2",{attrs:{id:"part-2-specifying-the-application-idea"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-2-specifying-the-application-idea"}},[e._v("#")]),e._v(" Part 2: Specifying the application idea")]),e._v(" "),o("p",[e._v("The next thing you should do is to decide what the application you want to create should do. Try to be creative and come up with an application someone wants to use, i.e. an application that solves a real-world problem of some kind. You could for example create an application for an organization you are member of (e.g. a football organization that needs to keep track of members, leaders, teams, training sessions, etc.), or simply an application you would like to use yourself. You can also try asking your family and friends if they need an Android application with some functionality that doesn't exist today.")]),e._v(" "),o("p",[e._v("Another way to come up with an application is to think of something you find boring/dangerous/time consuming, and then try to make it fun/safe/avoid it completely by using an Android application. For example, most people find it boring to wait in line. Maybe you can create an application that makes it fun to wait in line? Or an application that entirely eliminates the need to wait in line?")]),e._v(" "),o("h3",{attrs:{id:"suggestions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#suggestions"}},[e._v("#")]),e._v(" Suggestions")]),e._v(" "),o("p",[e._v("At the bottom of this page you find the chapter "),o("em",[e._v("Project idea: Flee Market Manager")]),e._v(' that describes a real-world problem you can try to solve by creating an Android application. It can also be used as a guideline for how "complicated"/"complex" the application you create needs to be.')]),e._v(" "),o("p",[e._v("Another idea is to create an application that can control an embedded system of some kind (dish washer, microwave, robot vacuum cleaner, etc.), for example using Bluetooth. Feel free to create your own embedded system. It can for example be a simple prototype used as a proof of concept. For example, your application might be about controlling a smart lock on a door (a lock that can be locked/unlocked with a smartphone using Bluetooth), but you don't have any smart lock, so then you create your own embedded system that simulates one, e.g. one that consists of a Bluetooth module and a LED lamp that is turned on/off to indicate if the door is locked or not. The embedded system can also be simulated as another Android application running on another Android device, e.g. an application showing a red/green circle indicating if the smart lock is locked or not.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("You will not get any credits for doing things not related to the intended learning outcomes in this course. To build an embedded system is out of scope for this course, so only do that if you are willing to spend your own spare time on it.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Robots")]),e._v(" "),o("p",[e._v("The course coordinator has 6 "),o("a",{attrs:{href:"http://osoyoo.com/2017/08/06/osoyoo-robot-car-diy-introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Robot Car Starter Kit"),o("OutboundLink")],1),e._v("s he can borrow to the Project Groups who want to build an Android application they can use to control a robot with. Note that just controlling the robot using Bluetooth is not enough, but some additional functionality is required, such as recording how the robot has been driving, re-play how the robot has been driving, manage logs, etc.")])]),e._v(" "),o("p",[e._v("If you need some special equipment (such as Beacons, modules for an embedded system, some smart devices, etc.), the school might be able to provide you with it (must be returned to the school at the end of the course). Email your needs to the course coordinator at "),o("a",{attrs:{href:"Peter.Larsson-Green@ju.se"}},[e._v("Peter.Larsson-Green@ju.se")]),e._v(" and he will look into it and get back to you.")]),e._v(" "),o("h3",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("The application you create must make use of at least one other device in addition to the Android device your application is running on. This could be:")]),e._v(" "),o("ul",[o("li",[e._v("Any other device you can communicate with using Bluetooth.")]),e._v(" "),o("li",[e._v("Bluetooth beacons.")]),e._v(" "),o("li",[e._v("Another Android device running the same application, e.g. using Bluetooth to sync data.")]),e._v(" "),o("li",[e._v("A server on the Internet, such as:\n"),o("ul",[o("li",[e._v("A "),o("a",{attrs:{href:"https://firebase.google.com/docs/firestore/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Firestore"),o("OutboundLink")],1),e._v(" database (or any Backend-as-a-Service you want).")])])])]),e._v(" "),o("p",[e._v("The application may also not be too simple. For example, creating the simplest possible all-to-all chat application synchronizing chat messages using Firestore will not be accepted. But often ideas like this one can quite easily be made more complex by adding functionalities to it. For example, in this case one could also add support for one-to-one chats, group chats, friends chat, etc.")]),e._v(" "),o("p",[e._v("Describe your application by starting to write on "),o("a",{attrs:{href:"static-files/project-report-template.docx"}},[e._v("the project report")]),e._v(". Especially, visualize which components your solution consists of (android device running your application + at least one other device) and how they make use of each other. You should especially write as much as possible for now in the Introduction chapter and the Overview chapter.")]),e._v(" "),o("p",[e._v("Note that your report is a living document throughout the course. What you write now will most likely be changed later when you come up with ideas for improvements, so do not spend too much time on details now. Just write it detailed enough so the reader gets a rough understanding of everything, e.g. start out simple. But write it properly (sentences, upper/lower case characters, etc.), of course!")]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("To the Swedish students")]),e._v(" "),o("p",[e._v("Do not forget to write an entry in your diary each day you have done some work on your project. Do not only write about what you have done, but also write about what discussions you had, which disagreement you had, how the work was divided, how you felt about your project partners, what you think is fair/not fair etc.")])]),e._v(" "),o("h2",{attrs:{id:"part-3-creating-mockups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-3-creating-mockups"}},[e._v("#")]),e._v(" Part 3: Creating Mockups")]),e._v(" "),o("p",[e._v("Start with this part of the Project Work when Martin Lindh has had his first lecture with you about Material Design and prototyping in Adobe XD.")]),e._v(" "),o("p",[e._v("Create mockups of the graphical user interface. When you are done, show your mockups to a lab assistant at one of the lab sessions. If the lab assistant can't understand how your application will work in the end on his own jut by looking at your mockups, they or the graphical user interface is not good enough and needs to be improved.")]),e._v(" "),o("p",[e._v("When your mockups are good enough for the lab assistant to understand how the application will work in the end, go to "),o("a",{attrs:{href:"https://doodle.com/mm/peterlarssongreen719/android-development",target:"_blank",rel:"noopener noreferrer"}},[e._v("the examiner's Bookable Doodle Calendar"),o("OutboundLink")],1),e._v(" and choose a meeting slot you can meet him. At the meeting, present what you have written in the report so far, and what your mockups look like. You only have 15 minutes to do this, so be sure to come prepared and present it in an efficient way. Before the meeting, submit the assignment "),o("a",{attrs:{href:"https://ju.instructure.com/courses/3421/assignments/12890?module_item_id=75653",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Idea"),o("OutboundLink")],1),e._v(" on Canvas with the current version of your report and your mockups.")]),e._v(" "),o("p",[e._v("The examiner will either approve or disapprove your application idea. If he approves it, he will approve you on the assignment "),o("a",{attrs:{href:"https://ju.instructure.com/courses/3421/assignments/12890?module_item_id=75653",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Idea"),o("OutboundLink")],1),e._v(" on Canvas. If he disapproves it, you need to come back another time (use the examiner's Bookable Doodle Calendar again) after you have changed it according to the examiner's feedback. If you haven't been approved on it after the second meeting, you can still pass the project work, but the examiner won't have any more time trying to estimate if the application you create will be advanced enough for this course until you submit the final version of it at the end of the course.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note!")]),e._v(" "),o("p",[e._v("It may take some time before you manage to get a meeting with the examiner. If you want, you can start implementing the application (continue on next part of the project work) before the examiner has approved your application idea. If he disapproves it, it is most likely because your application is a bit too simple to implement, so the changes you need to do will most likely be to add (and not change existing) functionality.")])]),e._v(" "),o("h2",{attrs:{id:"part-4-implementing-the-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-4-implementing-the-application"}},[e._v("#")]),e._v(" Part 4: Implementing the Application")]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("Note!")]),e._v(" "),o("p",[o("strong",[e._v("Before you start implementing the application you must complete and present the "),o("RouterLink",{attrs:{to:"/courses/android-development/laboratory-work/"}},[e._v("Laboratory Work")]),e._v(" to a teacher!")],1)]),e._v(" "),o("p",[e._v("If a student hasn't passed the "),o("code",[e._v("Laboratory Work")]),e._v(" when you submit your project work for grading at the end of the course, that student will be taken out of the group and forced to do her own project work from scratch.")]),e._v(" "),o("p",[e._v("If a student presents her laboratory work at the end of the course, she will not get any credits for her contribution to the project work up until that point in time, which most likely means she won't pass the project work.")]),e._v(" "),o("p",[e._v("PLEASE make this easy for all of us: complete and present your "),o("code",[e._v("Laboratory Work")]),e._v(" before continuing past this point. "),o("strong",[e._v("The examiner has no problem failing students that can't follow this simple instruction.")])])]),e._v(" "),o("p",[e._v("Start implementing your application using Android Studio. We recommend you to version control your code using a version control system, such as Git. Using a version control system is not a requirement for the project work, but it will make it much easier for you to share the code with each other. Use private repositories if possible. Both "),o("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://gitlab.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitLab"),o("OutboundLink")],1),e._v(" offers free private repositories.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Learn Git")]),e._v(" "),o("p",[e._v("There's a small "),o("RouterLink",{attrs:{to:"/courses/git/"}},[e._v("Git course")]),e._v(" available on this website teaching you the basics you need to know about Git to use it. The book "),o("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pro Git"),o("OutboundLink")],1),e._v(" is excellent reading for those who want to learn more about Git.")],1)]),e._v(" "),o("p",[e._v("The first Android lectures will primarily focus on how to implement the graphical user interface in Android applications, so you are recommended to start by implementing that part of your application. Learning how to properly implement the graphical user interface (properly handling runtime configuration changes) is also the most difficult part of learning Android development.")]),e._v(" "),o("p",[e._v("Initially, see it as you are creating a prototype of your application,  where you only bother to implement the GUI. This is quite common to do for bigger applications, where the GUI/user experience needs to be evaluated before the actual application is implemented.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),o("p",[e._v("If a user should be able to login to your application (which could be the case if you use Cloud Firestore), you need to have text boxes where the user can enter her credentials (i.e. her username and password) and a Login-button, but for the prototype you do not have to actually login the user when she presses the Login-button (you don't need to use Firebase at all). Instead, hardcode the correct credentials for a specific user in the prototype, and verify the entered credentials directly in your application.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),o("p",[e._v("If you need to fetch data from a REST API, hardcode the data directly in the Android application.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),o("p",[e._v("If you need to communicate with an embedded system using Bluetooth, emulate the communication with the embedded system without using Bluetooth at all.")])]),e._v(" "),o("p",[e._v("As more Android features are covered at the lectures in the course, start to use them in your Android application, so your prototype application slowly turns into the final version of your application. For example, the first version of your prototype might note care about runtime configuration changes at all, but when those have been covered in the course, improve your activities by starting to handle them. Or maybe some of you code should run in a service instead of an activity? Then you can initially put that code in an activity, and then refactor it to a service when those have been covered in the course.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Lectures won't cover everything")]),e._v(" "),o("p",[e._v("The lectures in the course about Android will not necessarily cover everything you need to know to implement your specific Android application; you might need to learn some things on your own. Skipping the Android lectures in the course and learn everything on your own (e.g. form the course book or from the Google's Android developers guides/documentation) is OK too. The Android lectures aim at teaching you the most common parts of Android most applications have use of.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Divide and Conquer!")]),e._v(" "),o("p",[e._v("You are three students in the group. To be efficient you somehow need to distribute the work among you. You all need to learn the basics of Android development, and you should all have an excellent understanding of how your entire application works at the end of the course (including the parts of the application the other two have done), but you are recommended to specialize in different parts of Android, and then combine your skills to create an excellent application. For example, one of you might choose to become an expert in how to handle runtime configuration changes, another one might choose to become an expert in how to handle Bluetooth communication, and the third one might choose to become an expert in how to store your data in a database, or how to properly use fragments, etc..")]),e._v(" "),o("p",[e._v("Sitting three students at one computer and only one writing the code is not efficient and will most likely prevent you from finishing your work on time.")])]),e._v(" "),o("p",[e._v("We recommend you to not start too advanced. To pass the course, it is more important that the functionality you implement works properly than that the graphical user interface looks beautiful. Therefore, it is probably better to start with a simple graphical user interface and then improve it at the end of the course if you have time for it.")]),e._v(" "),o("p",[e._v("If you want to get grade 4 or 5, you must come and see the examiner for another meeting to discuss your progress. Your work will not be graded, but this is an extra chance for you to get some feedback on your work before the final submission at the end of the course. If you are aiming for grade 3 you are welcome to book one of these meetings as well, but it is only mandatory for grade 4 and 5. The meeting should take place week 9 or 10. Use "),o("a",{attrs:{href:"https://doodle.com/mm/peterlarssongreen719/android-development",target:"_blank",rel:"noopener noreferrer"}},[e._v("the examiner's Bookable Doodle Calendar"),o("OutboundLink")],1),e._v(" again the same way as before. After the meeting, the examiner will approve you on the assignment "),o("a",{attrs:{href:"https://ju.instructure.com/courses/3421/assignments/12893?module_item_id=75672",target:"_blank",rel:"noopener noreferrer"}},[e._v("Halfway Meeting"),o("OutboundLink")],1),e._v(" on Canvas.")]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("Remember!")]),e._v(" "),o("p",[e._v("Just implementing your application idea is not good enough to pass the project work. As you can read on the "),o("a",{attrs:{href:"./project-grading-guidelines"}},[e._v("Project Grading Guidelines")]),e._v(' page, you must also gather some points by implementing "extra functionalities" to pass.')])]),e._v(" "),o("h2",{attrs:{id:"part-5-presentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-5-presentation"}},[e._v("#")]),e._v(" Part 5: Presentation")]),e._v(" "),o("p",[e._v('Your work should be presented to "the rest" of the class (in smaller groups) at the end of course. All members in the group need to be present at the presentation. At the presentation, you should:')]),e._v(" "),o("ul",[o("li",[e._v("Explain the problem you have tried to solve with your application.")]),e._v(" "),o("li",[e._v("Explain how users can use your application to solve the problem.")]),e._v(" "),o("li",[e._v("Show how users will use the application (a demonstration of its features).")])]),e._v(" "),o("p",[e._v("You may structure your presentation however you want, as long as you present it in a good way Showing pictures of the figures you have in your report is an excellent idea.")]),e._v(" "),o("p",[e._v("The presentation is preferably carried out by having one person interacting with the application (shown on a big screen), and another one explaining what the first person is doing/telling the first person what to do.")]),e._v(" "),o("p",[e._v("The presentation should take at most 15 minutes. There should be a short time for questions from the audience at the end (included in the 15 minutes). Plan and rehearse your presentation in advance, so no time is wasted on "),o("em",[e._v("Oh, what can I show you next? Hmm...")]),e._v(" or "),o("em",[e._v("Oh, that should not have happened. It has never happened before. Hmm...")]),e._v(".")]),e._v(" "),o("p",[e._v("The reasons you should present your application to the rest of the class are two-folded:")]),e._v(" "),o("ul",[o("li",[e._v("To learn what type of Android applications you can create (you have all taken the same course, so you should all be able to create the applications the other students have created).")]),e._v(" "),o("li",[e._v("To practice your presentation technique. This is not limited to improving your speaking skills, but also includes improving your skills to explain how something works to others, and to prepare and carry out presentations (your future customers will appreciate such skills).")])]),e._v(" "),o("p",[e._v("Join one of the "),o("a",{attrs:{href:"https://ju.instructure.com/courses/3421/groups#tab-3283",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project Presentation Groups"),o("OutboundLink")],1),e._v(" on Canvas to let the examiner know which project presentation session you want to attend to. Only one in your Project Group should do this.")]),e._v(" "),o("p",[e._v("After you have presented your work the teacher will mark you as approved on the assignment "),o("a",{attrs:{href:"https://ju.instructure.com/courses/3421/assignments/12891",target:"_blank",rel:"noopener noreferrer"}},[e._v("Presentation"),o("OutboundLink")],1),e._v(" on Canvas.")]),e._v(" "),o("h2",{attrs:{id:"part-6-final-submission"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-6-final-submission"}},[e._v("#")]),e._v(" Part 6: Final Submission")]),e._v(" "),o("p",[e._v("When you are done with your project work, upload it to Canvas for grading by submitting the assignment "),o("a",{attrs:{href:"https://ju.instructure.com/courses/3421/assignments/12892",target:"_blank",rel:"noopener noreferrer"}},[e._v("Final Submission"),o("OutboundLink")],1),e._v(". Submit your work per the instructions on that page (read them in advance!).")]),e._v(" "),o("h2",{attrs:{id:"project-idea-flee-market-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#project-idea-flee-market-manager"}},[e._v("#")]),e._v(" Project idea: Flee Market Manager")]),e._v(" "),o("p",[e._v("A Flee Market is a marketplace where people can sell things. These exists in different variations, but things that usually are sold at a flea market includes:")]),e._v(" "),o("ul",[o("li",[e._v("Used things")]),e._v(" "),o("li",[e._v("Cheap things")]),e._v(" "),o("li",[e._v("Home made things")])]),e._v(" "),o("p",[e._v("The people who sell things at the flea market usually need to pay the flea market organizer some money for selling their things at the market. There exist different pricing models for this, such as:")]),e._v(" "),o("ul",[o("li",[e._v("A fixed amount of money (e.g. 5 SEK/sold item or 5 SEK/month).")]),e._v(" "),o("li",[e._v("A percentage of what they sell for (e.g. 5% of the price of each sold item).")])]),e._v(" "),o("p",[e._v('An example of a flea market in Sweden is a Klädbytardag ("exchanging of clothes day"). Those work like this:')]),e._v(" "),o("ol",[o("li",[e._v("A parent that wishes to sell her children's outgrown clothes at the Klädbytardagen register itself at the flea market organizer.")]),e._v(" "),o("li",[e._v("The flea market organizer gives the parent a unique parent number (such as 1, 2, 3, and so on).")]),e._v(" "),o("li",[e._v("The parent puts notes on the children's clothes that should be sold at the flea market containing the unique parent number and the price the clothes should be sold for (whole SEK such as 5, 10, 22, and similar).")]),e._v(" "),o("li",[e._v("The parent hands over the children's clothes to the flea market organizer.")]),e._v(" "),o("li",[e._v("At the flea market day, customers (other parents) can come to organizer's facility to browse and buy clothes other parents have handed over.")]),e._v(" "),o("li",[e._v("At the checkout, the flea market organizer looks at the notes on the clothes the customer wants to buy to compute what the customer needs to pay and to remember how much each parent has sold their clothes for.")]),e._v(" "),o("li",[e._v("At the end of the day, each parent can come to the flea market and collect their clothes that weren't sold and the money they have earned for their clothes that was sold. The flea market organizer keeps 20% of the money, so the parent only gets back 80% of what her clothes was sold for.")])]),e._v(" "),o("p",[e._v("At the checkout, an Android app could be used to keep track of which clothes (and for how much) a parent has sold clothes for, and how much each customer should pay. At the end of the day, an Android app could also be used to compute how much each parent should get back for the sold clothes. To do this in a good way, the Android app could also be responsible for keeping track of which parents that are selling things, and which their unique parent numbers are.")]),e._v(" "),o("h3",{attrs:{id:"challenges-opportunities"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#challenges-opportunities"}},[e._v("#")]),e._v(' Challenges / "Opportunities"')]),e._v(" "),o("h4",{attrs:{id:"synchronizing-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#synchronizing-data"}},[e._v("#")]),e._v(" Synchronizing data")]),e._v(" "),o("p",[e._v("Their usually exists multiple checkouts at the market place, and each checkout will have one device running the Android application. At the end of the day, when computing how much each parent has sold, all data about the selling needs to be accessible from a single device. This means that the data either:")]),e._v(" "),o("ul",[o("li",[e._v("Needs to be stored at a centralized place, such as a Firestore database. As you understand, it is important that the Android application still can function and register which clothes that has been sold without an Internet connection.")]),e._v(" "),o("li",[e._v("Needs to be synchronized across multiple devices running the application at the end of the day (Bluetooth?).")])]),e._v(" "),o("h4",{attrs:{id:"using-the-camera"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-camera"}},[e._v("#")]),e._v(" Using the camera")]),e._v(" "),o("p",[e._v("One possibility is to not only store the name of the parent in the application/Firebase, but also a picture of the parent taken with the camera on the device. This could be useful for the organizers to identify parents.")]),e._v(" "),o("p",[e._v("Another possibility might be to replace the unique parent numbers with QR codes. This could speed up the checkout process (scanning the QR code with a camera instead of entering the seller number manually). Maybe the price for the clothes could be read by the camera as well somehow?")]),e._v(" "),o("h4",{attrs:{id:"using-tags"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-tags"}},[e._v("#")]),e._v(" Using Tags")]),e._v(" "),o("p",[e._v("Instead of using QR codes, maybe RFID/Bluetooth tags can be used to speed up the checkout process?")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);