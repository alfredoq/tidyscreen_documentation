"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[624],{3376:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"project_presentation","title":"TidyScreen projects","description":"Usually a user would like to manage multiple viirtual high throughput screening (vHTS) campaings in a same local computer. Each campaing will encompass specific information, such as a particular chemical space to be explored, a unique target receptor and specific data generated during the simulation and analysis stages.","source":"@site/docs/project_presentation.md","sourceDirName":".","slug":"/project_presentation","permalink":"/tidyscreen_documentation/docs/project_presentation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/project_presentation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction to TidyScreen","permalink":"/tidyscreen_documentation/docs/intro"},"next":{"title":"Projects structure","permalink":"/tidyscreen_documentation/docs/projects_structure"}}');var r=i(4848),o=i(8453);const s={sidebar_position:1},a="TidyScreen projects",c={},l=[{value:"Project creation",id:"project-creation",level:2},{value:"Listing available projects",id:"listing-available-projects",level:2},{value:"Activating a project",id:"activating-a-project",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"tidyscreen-projects",children:"TidyScreen projects"})}),"\n",(0,r.jsx)(t.p,{children:"Usually a user would like to manage multiple viirtual high throughput screening (vHTS) campaings in a same local computer. Each campaing will encompass specific information, such as a particular chemical space to be explored, a unique target receptor and specific data generated during the simulation and analysis stages."}),"\n",(0,r.jsxs)(t.p,{children:["In this context, TidyScreen organizes each campaign as a unique ",(0,r.jsx)(t.code,{children:"project"}),", which is stored in a specific path of the local computer. The project itself comprises a main folder containing a defined structure of subfolders that stores all the information associated to the project. In this way, if you want to share a whole project with a colleague, or maybe make it available to support the reproducibility of a scientific publication, it is possible to compress the main project folder and all the data will be included in a single file."]}),"\n",(0,r.jsx)(t.h2,{id:"project-creation",children:"Project creation"}),"\n",(0,r.jsxs)(t.p,{children:["The creation of ",(0,r.jsx)(t.code,{children:"project"})," is the first step required to use TidyScreen, with all posterior work being associated to ",(0,r.jsx)(t.code,{children:"actions"})," performed on the currently active project. Upon creation, projects are stored in TidyScreen ",(0,r.jsx)(t.code,{children:"main_database"}),", which is initially created the package is installed. In order to create a new project, the following actions are required:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from tidyscreen import config as ts_cfg\nfrom tidyscreen import projects_management as proj_mg\nimport tidyscreen_dbs\n\n## This will create a brand new project and the corresponding folders structure.\nts_cfg.CreateProject()\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When this script is executed a ",(0,r.jsx)(t.code,{children:"project_name"})," will be required (take as example name: ",(0,r.jsx)(t.em,{children:"'test1'"})," ), which constitutes the project identifier that will be afterwards used for all kind if interactions with the project. Also a ",(0,r.jsx)(t.code,{children:"base_directory"})," will be requested in order to create the folders structure and store all the information associated to the project. It is suggested that all projects are stored within a common ",(0,r.jsx)(t.code,{children:"base_directory"}),". Please consider that sometimes projects can store large ammounts of information, especially if massive chemical libraries are to be screened or molecular docking and molecular dynamics simulations are programmed for the screening campaign. Consequently, it is recommended that ",(0,r.jsx)(t.code,{children:"base_directory"})," is pointed to storage device with sufficient space to store the project as it progressess. Finally, a ",(0,r.jsx)(t.code,{children:"project_description"})," will be requested to setup the project. Be as detailed as necessary to provide this description, since this will be your guide (and also for your collaborators) long after the project has been created and growed."]}),"\n",(0,r.jsx)(t.h2,{id:"listing-available-projects",children:"Listing available projects"}),"\n",(0,r.jsx)(t.p,{children:"Projects available in the local computer can be searched (and afterwards activated) as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"...\n# List projects available locally\nmain_database = ts_cfg.MainDbConfigs()\nmain_database.list_projects()\n"})}),"\n",(0,r.jsx)(t.p,{children:"Upon execution of this script, the following info will be presented:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"Project: \n  test1 \n \t located at /$base_directory/test1 \n \t Description: first test project\n"})}),"\n",(0,r.jsx)(t.p,{children:"As can be seen, all the info related to the project is outputed to the terminal."}),"\n",(0,r.jsx)(t.p,{children:"As expected, if more than one project is being managed by TidyScreen in the local computer, all of them will be listed in the terminal as shown below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"Project: \n  test1 \n \t located at /$base_directory/test1 \n \t Description: first test project\nProject: \n  test2 \n \t located at /$base_directory/test2 \n \t Description: second test project\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"activating-a-project",children:"Activating a project"}),"\n",(0,r.jsxs)(t.p,{children:["In order to interact with a given project (i.e. add information, process molecules, etc) it must be activated (i.e. instantiated) by using the corresponding ",(0,r.jsx)(t.code,{children:"project_name"}),". The script below shows how this is accomplished."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"...\n### Activate project 'test1' in order to perform actions on it\ntest1_proj = proj_mg.ActivateProject(\"test1\")\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once the project ",(0,r.jsx)(t.code,{children:"test1"})," has been instantiated, different actions related to three research domains (",(0,r.jsx)(t.code,{children:"ChemSpace"}),", ",(0,r.jsx)(t.code,{children:"Docking"})," and ",(0,r.jsx)(t.code,{children:"MD"}),") can be executed."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, in order to activate ",(0,r.jsx)(t.code,{children:"ChemSpace"})," actions on ",(0,r.jsx)(t.code,{children:"test1"}),", the following script is executed:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"...\n### Once activated, initialize ChemSpace actions on the project\ntest1_proj_CS = proj_mg.ChemSpaceActions(test1_proj)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["From this point on, all ",(0,r.jsx)(t.code,{children:"ChemSpace"})," actions will be invoked on the  ",(0,r.jsx)(t.code,{children:"test1_proj_CS"})," object. For details on such actions y rationale behind their execution please revise the ",(0,r.jsx)(t.a,{href:"tutorial_1_chemspace/project_background",children:"dedicated tutorial"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["A central phylosophy of TidyScreen is the ",(0,r.jsx)(t.strong,{children:"storage of information in a consistent folder structure"}),", which is created at the moment of project creation. In order to get familiar with the inner workings of TidyScreen, it is higly recommendable that the knows how the directories tree and associated hierarchy works, which is presented in the following section."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);