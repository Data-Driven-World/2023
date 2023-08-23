"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[2714],{3624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),i=(a(1694),a(3707),a(6533)),r=a(505);const o={sidebar_position:5},s="Mini Project 2: Math Quiz App",p={unversionedId:"calculator",id:"calculator",title:"Mini Project 2: Math Quiz App",description:"Learning Objectives",source:"@site/projects/02-calculator.md",sourceDirName:".",slug:"/calculator",permalink:"/2023/projects/calculator",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Mini-Project 1: Sorting App",permalink:"/2023/projects/sorting-app"},next:{title:"Advanced",permalink:"/2023/projects/category/advanced"}},u={},m=[{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Setup",id:"setup",level:2},{value:"Install Git",id:"install-git",level:3},{value:"Downloading Repository",id:"downloading-repository",level:3},{value:"Go to Mini Project 2 Folder",id:"go-to-mini-project-2-folder",level:3},{value:"Create Virtual Environment",id:"create-virtual-environment",level:2},{value:"Brief Overview of Flask Project Structure",id:"brief-overview-of-flask-project-structure",level:2},{value:"Exercise 1",id:"exercise-1",level:2},{value:"Exercise 1 - Task 1",id:"exercise-1---task-1",level:3},{value:"Exercise 1 - Task 2",id:"exercise-1---task-2",level:3},{value:"Exercise 1 - Task 3",id:"exercise-1---task-3",level:3},{value:"Running on Vocareum",id:"running-on-vocareum",level:3},{value:"Local Computer",id:"local-computer",level:3},{value:"Exercise 1 - Task 4",id:"exercise-1---task-4",level:3},{value:"Exercise 2",id:"exercise-2",level:2},{value:"Exercise 2 - Task 1",id:"exercise-2---task-1",level:3},{value:"Exercise 2 - Task 2",id:"exercise-2---task-2",level:3},{value:"Exercise 2 - Task 3",id:"exercise-2---task-3",level:3},{value:"Exercise 2 - Task 4",id:"exercise-2---task-4",level:3},{value:"Final Task",id:"final-task",level:2},{value:"Expected Output",id:"expected-output",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"References",id:"references",level:2}],d={toc:m},c="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mini-project-2-math-quiz-app"},"Mini Project 2: Math Quiz App"),(0,l.kt)(r.Z,{mdxType:"ChatBaseBubble"}),(0,l.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,l.kt)("p",null,"In this mini project, you will develop a web app to create and play math quiz for integer arithmetic. By the end of this assignment, you should be able to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a web app using Flask web framework"),(0,l.kt)("li",{parentName:"ul"},"Implement mergesort for server application library"),(0,l.kt)("li",{parentName:"ul"},"Use Stack to evaluate integer expressions"),(0,l.kt)("li",{parentName:"ul"},"Use database to store and retrieve data")),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("h3",{id:"install-git"},"Install Git"),(0,l.kt)("p",null,"You need to have Git to do the project. Download and install the software according to your OS:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows: ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"Git for Windows")),(0,l.kt)("li",{parentName:"ul"},"Mac OS: ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/download/mac"},"Git for MacOS"))),(0,l.kt)("h3",{id:"downloading-repository"},"Downloading Repository"),(0,l.kt)("p",null,"Clone the mini project repository from Github. On your terminal or Git Bash, type the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd Downloads\ngit clone https://github.com/Data-Driven-World/d2w_mini_projects\n")),(0,l.kt)("h3",{id:"go-to-mini-project-2-folder"},"Go to Mini Project 2 Folder"),(0,l.kt)("p",null,"Once you have downloaded the repository, you can go to the repository and to the folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"mp_calc")," for this mini project."),(0,l.kt)("p",null,"Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},"cd d2w_mini_projects\\mp_calc\ndir\n")),(0,l.kt)("p",null,"Unix/MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd d2w_mini_projects/mp_calc\nls\n")),(0,l.kt)("p",null,"The last command should output the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"app\napplication.py\nmp2_exercises.ipynb\nrequirements.txt\n")),(0,l.kt)("p",null,"This handout can be found in the file ",(0,l.kt)("inlineCode",{parentName:"p"},"Readme.md"),"."),(0,l.kt)("h2",{id:"create-virtual-environment"},"Create Virtual Environment"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You should open Anaconda Prompt to do the following steps.")),(0,l.kt)("p",null,"In the following steps, whenever there is a different between the OS commands, the ",(0,l.kt)("strong",{parentName:"p"},"Windows")," prompt will be represented by:"),(0,l.kt)("p",null,"Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},">\n")),(0,l.kt)("p",null,"while the MacOS/Linux prompt will be represented by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$\n")),(0,l.kt)("p",null,"Go to the root folder ",(0,l.kt)("inlineCode",{parentName:"p"},"mp_calc"),".\nWindows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},"> cd %USERPROFILE%\\Downloads\\d2w_mini_projects\\mp_calc\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/Downloads/d2w_mini_projects/mp_calc\n\n")),(0,l.kt)("p",null,"First make sure that you have installed ",(0,l.kt)("inlineCode",{parentName:"p"},"pipenv")," package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install --user pipenv\n")),(0,l.kt)("p",null,"We will call ",(0,l.kt)("inlineCode",{parentName:"p"},"mp_calc")," folder as the ",(0,l.kt)("strong",{parentName:"p"},"root")," folder of our application."),(0,l.kt)("p",null,"From the root folder, install the packages specified in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Pipfile"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pipenv install\n")),(0,l.kt)("p",null,"The above steps will install the following packages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flask"),(0,l.kt)("li",{parentName:"ul"},"Transcrypt"),(0,l.kt)("li",{parentName:"ul"},"Flask-SQLAlchemy"),(0,l.kt)("li",{parentName:"ul"},"Flask-Migration"),(0,l.kt)("li",{parentName:"ul"},"Bootstrap-Flask"),(0,l.kt)("li",{parentName:"ul"},"and some other packages")),(0,l.kt)("p",null,"To activate the virtualenv, run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pipenv shell\n")),(0,l.kt)("p",null,"Alternatively, you can choose everytime you run a command to prepend that command with the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pipenv run\n")),(0,l.kt)("p",null,"Ok, so let's enter into the shell by typing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pipenv shell\n")),(0,l.kt)("p",null,"You should see the word ",(0,l.kt)("inlineCode",{parentName:"p"},"(mp_calc)")," in your prompt something like:"),(0,l.kt)("p",null,"Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},"(mp_calc) folder >\n")),(0,l.kt)("p",null,"Unix/MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(mp_calc) user $\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"To exit the virtual environment at the end of this mini project, simply type:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,l.kt)("p",null,"All the subsequent exercises assumes you are in the virtualenv shell."),(0,l.kt)("h2",{id:"brief-overview-of-flask-project-structure"},"Brief Overview of Flask Project Structure"),(0,l.kt)("p",null,"We are using Flask web framework to create this web app. There are more files in this mini project as compared to the first one. You should revise your first mini project before proceeding to this mini project. In this notes, we will highlight only those parts which differ from the previous mini project."),(0,l.kt)("p",null,"The first file you need to take a look is ",(0,l.kt)("inlineCode",{parentName:"p"},"application.py")," in the root folder. Open that file using a text editor. You should see these ",(0,l.kt)("em",{parentName:"p"},"additional")," lines in that file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from app import application, db\nfrom app.models import User, Question, Challenge, TimeRecord\n\n@application.shell_context_processor\ndef make_shell_context():\n    return {'db': db, 'User': User, 'Question': Question,\n            'Challenge': Challenge,\n            'TimeRecord': TimeRecord}\n")),(0,l.kt)("p",null,"The other lines not shown above have been explained in your previous mini project. We will focus more on those lines above."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The first change is that we import ",(0,l.kt)("inlineCode",{parentName:"li"},"db")," which is the object that we will use to work with our SQL database."),(0,l.kt)("li",{parentName:"ul"},"The second line of imports took from the file ",(0,l.kt)("inlineCode",{parentName:"li"},"app/models.py")," the classes definitions called ",(0,l.kt)("inlineCode",{parentName:"li"},"User"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Question"),", etc. These classes represent your database tables."),(0,l.kt)("li",{parentName:"ul"},"The decorator ",(0,l.kt)("inlineCode",{parentName:"li"},"@application.shell_context_processor")," and the following lines is to allow you to run a python shell by typing ",(0,l.kt)("inlineCode",{parentName:"li"},"flask shell")," where all those names in the dictionary will be added to the shell as an object instance.")),(0,l.kt)("p",null,"Just to recall, both ",(0,l.kt)("inlineCode",{parentName:"p"},"application")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"db")," imported from ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," are defined inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"__init__.py")," file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mp_calc/\n  app/\n    __init__.py\n    forms.py\n    models.py\n    routes.py\n    serverlibrary.py\n    static\n    templates\n")),(0,l.kt)("p",null,"The file ",(0,l.kt)("inlineCode",{parentName:"p"},"__init__.py")," contains the line that creates the ",(0,l.kt)("inlineCode",{parentName:"p"},"db")," object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"application = Flask(__name__)\napplication.config.from_object(Config)\ndb = SQLAlchemy(application)\nmigrate = Migrate(application, db)\nlogin = LoginManager(application)\nlogin.login_view = 'login'\nbootstrap = Bootstrap5(application)\n\nfrom app import routes, models\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After the line that defines ",(0,l.kt)("inlineCode",{parentName:"li"},"application")," we have the command to load the database configuration from ",(0,l.kt)("inlineCode",{parentName:"li"},"Config")," which is defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"config.py")," in the root folder."),(0,l.kt)("li",{parentName:"ul"},"The third line defines ",(0,l.kt)("inlineCode",{parentName:"li"},"db")," as an object instance of ",(0,l.kt)("inlineCode",{parentName:"li"},"SQLAlchemy")),(0,l.kt)("li",{parentName:"ul"},"We also define ",(0,l.kt)("inlineCode",{parentName:"li"},"migrate")," that is used to migrate the database whenever we make changes to the tables or the models."),(0,l.kt)("li",{parentName:"ul"},"Next, we have two lines to create our login page. ",(0,l.kt)("inlineCode",{parentName:"li"},"login.login_view")," directs the URL and route it to ",(0,l.kt)("inlineCode",{parentName:"li"},"login()")," defined in the ",(0,l.kt)("inlineCode",{parentName:"li"},"routes.py"),"."),(0,l.kt)("li",{parentName:"ul"},"Lastly, we defined ",(0,l.kt)("inlineCode",{parentName:"li"},"bootstrap")," which allow us to use some predefined CSS from ",(0,l.kt)("a",{parentName:"li",href:"https://bootstrap-flask.readthedocs.io/en/stable/"},"Bootstrap-Flask"),".")),(0,l.kt)("p",null,"This file also import the file ",(0,l.kt)("inlineCode",{parentName:"p"},"routes.py")," which defines the URL routing. Open ",(0,l.kt)("inlineCode",{parentName:"p"},"app/routes.py")," to see the whole file. We will focus on the first few lines for the first exercise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from app.serverlibrary import mergesort, EvaluateExpression, get_smallest_three\n\n@application.route('/')\n@application.route('/index')\n@login_required\ndef index():\n    return render_template('index.html', title='Home')\n\n@application.route('/users')\n@login_required\ndef users():\n    users = User.query.all()\n    mergesort(users, lambda item: item.username)\n    usernames = [u.username for u in users]\n    return render_template('users.html', title='Users',\n                            users=usernames)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The only change to the ",(0,l.kt)("inlineCode",{parentName:"li"},"index")," route is the line ",(0,l.kt)("inlineCode",{parentName:"li"},"@login_required"),". This decorator ensures that when a user tries to enter ",(0,l.kt)("inlineCode",{parentName:"li"},"/index")," page, they must login to the page first. If they have not, Flask will redirect them to the login page. The ",(0,l.kt)("inlineCode",{parentName:"li"},"login()")," route is also defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"routes.py"),"."),(0,l.kt)("li",{parentName:"ul"},"The second route is when the user go to ",(0,l.kt)("inlineCode",{parentName:"li"},"/users"),' either by entering the URL or by clicking "Users" in the navigation bar.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"users = User.query.all()")," retrieves all users from the database in ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," table (",(0,l.kt)("inlineCode",{parentName:"li"},"User")," is defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"models.py"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mergesort(users, lambda item: item.username)")," calls the sorting function to sort the list of users using its ",(0,l.kt)("inlineCode",{parentName:"li"},"username")," attribute. Note that the ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," table has other attributes besides ",(0,l.kt)("inlineCode",{parentName:"li"},"username"),". Refer to ",(0,l.kt)("inlineCode",{parentName:"li"},"models.py")," for all the attributes of ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," table. It should sort the ",(0,l.kt)("inlineCode",{parentName:"li"},"users")," in place. You need to modify your ",(0,l.kt)("inlineCode",{parentName:"li"},"mergesort()")," function as described in ",(0,l.kt)("strong",{parentName:"li"},"Q1")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"mp2_exercises.ipynb")," to complete this."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"usernames = [u.username for u in users]")," creates a list of usernames from the list of sorted users."),(0,l.kt)("li",{parentName:"ul"},"In the last line, ",(0,l.kt)("inlineCode",{parentName:"li"},"render_template('users.html', title='Users', users=usernames)"),", we pass the variable ",(0,l.kt)("inlineCode",{parentName:"li"},"usernames")," to be used in the ",(0,l.kt)("inlineCode",{parentName:"li"},"users.html")," using some jinja templating under the name ",(0,l.kt)("inlineCode",{parentName:"li"},"users"),".")),(0,l.kt)("p",null,"This file ",(0,l.kt)("inlineCode",{parentName:"p"},"users.html")," can be found inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"templates")," folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mp_calc/\n  app/\n    __init__.py\n    forms.py\n    models.py\n    routes.py\n    serverlibrary.py\n    static\n    templates/\n      base.html\n      challenges.html\n      halloffame.html\n      index.html\n      login.html\n      questions.html\n      register.html\n      users.html\n")),(0,l.kt)("p",null,"For Exercise 1, you may want to look into the following files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"users.html"),": the HTML file to display the list of users."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"serverlibrary.py"),": the python module where you need to implement your ",(0,l.kt)("inlineCode",{parentName:"li"},"mergesort()")," function.")),(0,l.kt)("h2",{id:"exercise-1"},"Exercise 1"),(0,l.kt)("p",null,"Let's open ",(0,l.kt)("inlineCode",{parentName:"p"},"users.html"),". The first few lines are shown here."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'{% extends "base.html" %} {% block app_content %}\n<h1>This Platform\'s Users</h1>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The first line ",(0,l.kt)("inlineCode",{parentName:"li"},'{% extends "base.html" %}')," inherits the ",(0,l.kt)("inlineCode",{parentName:"li"},"base.html")," for some of the common elements such as the navigation bar, importing certain scripts, and CSS files. The javascript which we will translate from the file ",(0,l.kt)("inlineCode",{parentName:"li"},"serverlibrary.py")," is imported in the last few lines of ",(0,l.kt)("inlineCode",{parentName:"li"},"base.html"),"."),(0,l.kt)("li",{parentName:"ul"},"The second line indicates the block ",(0,l.kt)("inlineCode",{parentName:"li"},"app_content"),". Each html file templates we have will modify this block ",(0,l.kt)("inlineCode",{parentName:"li"},"app_content"),".")),(0,l.kt)("p",null,"This file basically iterates over all users and create rows of users in a table. The table body code is shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<tbody>\n  {% for idx in range(users|length) %}\n  <tr>\n    <th scope="row" class="lead">{{ idx+1 }}</th>\n    <td class="lead">#Replace Me#</td>\n  </tr>\n  {% endfor %}\n</tbody>\n')),(0,l.kt)("h3",{id:"exercise-1---task-1"},"Exercise 1 - Task 1"),(0,l.kt)("p",null,"You need to replace the text ",(0,l.kt)("inlineCode",{parentName:"p"},"#Replace Me#")," with some jinja templating code such that it displays the items inside ",(0,l.kt)("inlineCode",{parentName:"p"},"users"),"."),(0,l.kt)("h3",{id:"exercise-1---task-2"},"Exercise 1 - Task 2"),(0,l.kt)("p",null,"You need to do ",(0,l.kt)("strong",{parentName:"p"},"Q1")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"mp2_exercises.ipynb")," before completing this part. Once you finish with Q1, open ",(0,l.kt)("inlineCode",{parentName:"p"},"serverlibrary.py")," and copy your modified ",(0,l.kt)("inlineCode",{parentName:"p"},"mergesort()")," function inside."),(0,l.kt)("h3",{id:"exercise-1---task-3"},"Exercise 1 - Task 3"),(0,l.kt)("p",null,"This web application makes use of some client javascript library which is translated from ",(0,l.kt)("inlineCode",{parentName:"p"},"clientlibrary.py")," under ",(0,l.kt)("inlineCode",{parentName:"p"},"app/static/")," folder. To be able to run the web application, you need to go to that folder and compile ",(0,l.kt)("inlineCode",{parentName:"p"},"clientlibrary.py")," using Transcrypt. You also need to setup the database. So in this task we do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"compile ",(0,l.kt)("inlineCode",{parentName:"li"},"clientlibrary.py")," into a javascript file"),(0,l.kt)("li",{parentName:"ul"},"create database")),(0,l.kt)("p",null,"First, make sure that you have done the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"actiate your virtual environment"),(0,l.kt)("li",{parentName:"ul"},"install all the required packages (see the instructions above)")),(0,l.kt)("p",null,"Go to your root folder.\nWindows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},"> cd %USERPROFILE\\d2w_mini_projects\\mp_calc\n")),(0,l.kt)("p",null,"Unix/MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/d2w_mini_projects/mp_calc\n")),(0,l.kt)("p",null,"Now, we can go to the location of ",(0,l.kt)("inlineCode",{parentName:"p"},"clientlibrary.py")," under ",(0,l.kt)("inlineCode",{parentName:"p"},"app/static/"),"."),(0,l.kt)("p",null,"Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},"> cd app\\static\n")),(0,l.kt)("p",null,"Unix/MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd app/static\n")),(0,l.kt)("p",null,"Type the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"python -m transcrypt -b -n clientlibrary\n")),(0,l.kt)("p",null,"Make sure you see the the ",(0,l.kt)("inlineCode",{parentName:"p"},"__target__")," folder created successfully. You can check by typing:"),(0,l.kt)("p",null,"Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},"> dir\n")),(0,l.kt)("p",null,"Unix/MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ls\n")),(0,l.kt)("p",null,"Now you are ready to run your web app in your local computer or in Vocareum. To do so, you need to go back to the root directory. This can be done with the following:"),(0,l.kt)("p",null,"Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},"> cd ..\\..\n")),(0,l.kt)("p",null,"Unix/MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ../..\n")),(0,l.kt)("p",null,"which means go up the folder two times. Or, you can also type the following."),(0,l.kt)("p",null,"Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dos"},"> cd %USERPROFILE\\d2w_mini_projects\\mp_calc\n")),(0,l.kt)("p",null,"Unix/MacOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/d2w_mini_projects/mp_calc/\n")),(0,l.kt)("p",null,"You should see ",(0,l.kt)("inlineCode",{parentName:"p"},"application.py")," in this root folder. Run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flask db init\nflask db migrate\nflask db upgrade\n")),(0,l.kt)("p",null,"You should see a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"app.db")," and a folder ",(0,l.kt)("inlineCode",{parentName:"p"},"migrations"),"."),(0,l.kt)("p",null,"Once this is done, you can run Flask depending on whether you use Vocareum or your local computer."),(0,l.kt)("h3",{id:"running-on-vocareum"},"Running on Vocareum"),(0,l.kt)("p",null,"If you use Vocareum terminal to run your Flask application, you can do so by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"runflaskvoc.sh")," script. Before running this script, make sure the ",(0,l.kt)("inlineCode",{parentName:"p"},"voc=True")," is set true in the following line inside ",(0,l.kt)("inlineCode",{parentName:"p"},"mp_calc/app/__init__.py"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# set voc=False if you run on local computer\napplication.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=True)\n")),(0,l.kt)("p",null,"Now, make sure you are inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"mp_calc")," folder by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"pwd")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pwd\n")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"ls")," to ensure that you see the ",(0,l.kt)("inlineCode",{parentName:"p"},"runflaskvoc.sh")," in the current folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ls\n")),(0,l.kt)("p",null,"Make sure that the script is executable by running the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"chmod a+x ./runflaskvoc.sh\n")),(0,l.kt)("p",null,"The above script is to change the file to be executable for all users, group and owner."),(0,l.kt)("p",null,"To run the script, type the following."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./runflaskvoc.sh\n")),(0,l.kt)("p",null,"Once it is running, you can open another tab in your browser and type the following url: ",(0,l.kt)("a",{parentName:"p",href:"https://myserver.vocareum.com/"},(0,l.kt)("inlineCode",{parentName:"a"},"https://myserver.vocareum.com/")),"."),(0,l.kt)("p",null,"To stop the web app type ",(0,l.kt)("inlineCode",{parentName:"p"},"CTRL+C"),"."),(0,l.kt)("h3",{id:"local-computer"},"Local Computer"),(0,l.kt)("p",null,"If you are using your own computer, make sure to change the flag ",(0,l.kt)("inlineCode",{parentName:"p"},"voc=False")," in the following line inside ",(0,l.kt)("inlineCode",{parentName:"p"},"mp_calc/app/__init__.py"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# set voc=False if you run on local computer\napplication.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=False)\n")),(0,l.kt)("p",null,"Now, you can run Flask by typing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flask run\n")),(0,l.kt)("p",null,"You should see that some output will be thrown out, which one of them would be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)\n")),(0,l.kt)("p",null,"Now you can open your browser at ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:5000/")," to see the web app. You should see something like the following:"),(0,l.kt)(i.Z,{path:"https://www.dropbox.com/s/nra8ltsjltlylp1/mp2_login.png?raw=1",widthPercentage:"70%",mdxType:"ImageCard"}),(0,l.kt)("p",null,"To stop the web app type ",(0,l.kt)("inlineCode",{parentName:"p"},"CTRL+C"),"."),(0,l.kt)("h3",{id:"exercise-1---task-4"},"Exercise 1 - Task 4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create several users. More than three users are recommended."),(0,l.kt)("li",{parentName:"ul"},"Login using one of the user account."),(0,l.kt)("li",{parentName:"ul"},'Navigate to the "Users" page using the navigation bar on the top.')),(0,l.kt)("p",null,"You should see all the users you have created sorted according to their usernames. An example is as shown below."),(0,l.kt)(i.Z,{path:"https://www.dropbox.com/s/o2w51fb3w0k8ibv/mp2_ex1.png?raw=1",widthPercentage:"70%",mdxType:"ImageCard"}),(0,l.kt)("h2",{id:"exercise-2"},"Exercise 2"),(0,l.kt)("p",null,"In this exercise, you will work with ",(0,l.kt)("inlineCode",{parentName:"p"},"serverlibrary.py")," under the ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," folder. In order to do this, you need to complete ",(0,l.kt)("strong",{parentName:"p"},"Week 4")," Exercises in ",(0,l.kt)("inlineCode",{parentName:"p"},"mp2_exercises.ipynb"),", particularly ",(0,l.kt)("strong",{parentName:"p"},"Q2")," onwards."),(0,l.kt)("h3",{id:"exercise-2---task-1"},"Exercise 2 - Task 1"),(0,l.kt)("p",null,"Implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"Stack")," class inside ",(0,l.kt)("inlineCode",{parentName:"p"},"serverlibrary.py"),"."),(0,l.kt)("h3",{id:"exercise-2---task-2"},"Exercise 2 - Task 2"),(0,l.kt)("p",null,"Implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"EvaluateExpression")," class inside ",(0,l.kt)("inlineCode",{parentName:"p"},"serverlibrary.py"),"."),(0,l.kt)("h3",{id:"exercise-2---task-3"},"Exercise 2 - Task 3"),(0,l.kt)("p",null,"Test your implementation by doing the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Navigate to "Questions" page.'),(0,l.kt)("li",{parentName:"ul"},"Create several integer arithmetic expressions and assign it to different users. Note that you can assign more than one users for the same question.")),(0,l.kt)("p",null,"If your ",(0,l.kt)("inlineCode",{parentName:"p"},"EvaluateExpression")," is correct, you will see the correct ",(0,l.kt)("strong",{parentName:"p"},"answer")," displayed in the table as shown below."),(0,l.kt)(i.Z,{path:"https://www.dropbox.com/s/4u61v1hylndkcfl/mp2_questions.png?raw=1",widthPercentage:"70%",mdxType:"ImageCard"}),(0,l.kt)("h3",{id:"exercise-2---task-4"},"Exercise 2 - Task 4"),(0,l.kt)("p",null,"Test also the other pages and see if they are working fine:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Logout from your current user and login to one of the users you have assigned a challenge."),(0,l.kt)("li",{parentName:"ul"},'After login, navigate to "Challenge" page and click "Show/Hide" to reveal the question. A timer starts when you click the button to reveal the question.'),(0,l.kt)("li",{parentName:"ul"},'Put the answer in the provided input box, and click "Submit". If your answer is correct, the elapsed time will be displayed on the last column. Otherwise, nothing will be displayed in the last column.'),(0,l.kt)("li",{parentName:"ul"},'Answer several challenges with different users, then navigate to "Hall of Fame" page. If your ',(0,l.kt)("inlineCode",{parentName:"li"},"mergesort()")," implementation is correct, you will see a table listing all the challenges with the fastest top three users for each of them.")),(0,l.kt)("h2",{id:"final-task"},"Final Task"),(0,l.kt)("p",null,"Read the following notes to understand how to use the database and Bootstrap for styling."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/projects/advanced/database"},"Using SQLAlchemy and Flask in this Mini Project 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/projects/advanced/bootstrap"},"Using Bootstrap in this Mini Project 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/projects/advanced/forms"},"Using Web Forms in this Mini Project 2"))),(0,l.kt)("h2",{id:"expected-output"},"Expected Output"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://web.microsoftstream.com/video/1392234b-aa8a-412d-92c7-e2cf2b803175"},"The expected output for both exercises 1 and 2 can be found in this video"),"."),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"I got, ",(0,l.kt)("inlineCode",{parentName:"p"},"ModuleNotFoundError: No module named ''?")),(0,l.kt)("p",{parentName:"li"},"Make sure you have activated your Python's virtual environment:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Go to the folder or directory of your root project, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"cd %USERPROFILE\\Downloads\\d2w_mini_projects\\mp_calc")," (Win), or ",(0,l.kt)("inlineCode",{parentName:"li"},"cd ~/Downloads/d2w_mini_projects/mp_calc")," (Mac OS)"),(0,l.kt)("li",{parentName:"ul"},"Actiate the virtual environment, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"pipenv shell"),"."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"I can't run flask/use transcrypt?"),(0,l.kt)("p",{parentName:"li"},"See the solution above.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The app doesn't change even though I make changes to the code."),(0,l.kt)("p",{parentName:"li"},"If you make changes to your ",(0,l.kt)("inlineCode",{parentName:"p"},"clientlibrary.py"),", you need to transpile it again to produce its javascript version, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"python -m transcrypt -b clientlibrary.py"),". You need to do this in the folder or directory where ",(0,l.kt)("inlineCode",{parentName:"p"},"clientlibrary.py")," is."),(0,l.kt)("p",{parentName:"li"},"In many cases, you may need to do a ",(0,l.kt)("a",{parentName:"p",href:"https://www.getfilecloud.com/blog/2015/03/tech-tip-how-to-do-hard-refresh-in-browsers/#.XuwVw2ozaJs"},(0,l.kt)("em",{parentName:"a"},"hard refresh"))," of your browser. Another way is to reload when running flask. Do either one of the following :"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export FLASK_ENV=development")," and then ",(0,l.kt)("inlineCode",{parentName:"li"},"flask run"),"."),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"flask run --reload --debugger"))))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates"},"Flask Tutorial using Templates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iv-database"},"Flask Tutorial using Database")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iii-web-forms"},"Flask Tutorial using Webforms")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-v-user-logins"},"Flask Tutorial for Login Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/5.0/getting-started/introduction/"},"Bootstrap Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/13/orm/basic_relationships.html"},"SQLAlchemy Basic Relationship"))))}k.isMDXComponent=!0}}]);