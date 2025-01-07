---
sidebar_position: 1
---

# TidyScreen projects

Usually a user would like to manage multiple vHTS campaings in a same local computer. Each campaing will encompass specific information, such as a particular chemical space to be explored, a target receptor and data generated during the simulation and analysis stages.

In this context, TidyScreen organizes each campaign as a `project` which stored in a specific location of the local computer and comprises a structure of folders that stores all the information associated to the project. In this way, if you want to share a whole project with a colleague of make it available to support scientific publications reproducibility, it is possible to compress the project folder.

The creation of `project` is the first step in using TidyScreen, with all posterior work being associated to actions performed on the currently active project.

Projects are stored in the main database of TidyScreen which is created upon the installation of the package. In order to create a project, the following actions are required:

```python
from tidyscreen import config as ts_cfg
from tidyscreen import projects_management as proj_mg
import tidyscreen_dbs

## This will create a brand new project and the corresponding files.
ts_cfg.CreateProject()
```

When creating a new project, a `project_name` will be asked, and is the identifier that will be afterwards used to interaction with it. Also a `based_directory` will be requested in order to create the folders structure and store all the information associated to the project. It is suggested that all projects are stored within a common `based_directory`. Please consider that sometimed projects can store plenty of information, especially if large chemical libraries are to be screened and molecular docking or molecular dynamics simulations are programed. Consequently, use a disk unit that is intended to store large ammounts of information. Also a project description will be requested, be as detailed as necessary to include this description since this will be your guide (and for your collabotors) long after the project has been created and growed.

Projects available in the locall computer can be searched (and afterwards activated) as follows:

```python
from tidyscreen import config as ts_cfg
import tidyscreen_dbs

# List projects available locally
main_database = ts_cfg.MainDbConfigs()
main_database.list_projects()
```

Upon execution, the following info is presented:

```bash
Project: 
  test1 
 	 located at /home/fredy/Desktop/test_tidyscreen/test1 
 	 Description: first test project
```

As can be seen, all the info related to the project is presented.

In order to interact with the project (i.e. add information, etc) the project must be instantiated using the corresponding `project_name`:

```python
from tidyscreen import config as ts_cfg
from tidyscreen import projects_management as proj_mg
import tidyscreen_dbs

### Activate a project to perform actions
test1_proj = proj_mg.ActivateProject("test1")
```

Once the project `test1` has been instantiated, different actions related to three research domains (`ChemSpace`, `Docking` and `MD`) can be executed.

For example, in order to activate the `ChemSpace` actions on `test1` the following actions are required:

```python
### Once activated, initialize ChemSpace actions on the project
test1_proj_CS = proj_mg.ChemSpaceActions(test1_proj)
```

All `ChemSpace` actions will be invoked on the  `test1_proj_CS` object. For details on such actions y rationale behind their execution please revise the dedicated tutorial.

A central phylosophy of TidyScreen is the storage of information in a consisten folder structure, which is create at the moment of project creation. Consequently, it is higly recommendable that the user is familiarized with the directories tree, for which you can consult the section dealing with 