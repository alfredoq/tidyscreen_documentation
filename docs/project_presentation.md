---
sidebar_position: 1
---

# TidyScreen projects

Usually a user would like to manage multiple viirtual high throughput screening (vHTS) campaings in a same local computer. Each campaing will encompass specific information, such as a particular chemical space to be explored, a unique target receptor and specific data generated during the simulation and analysis stages.

In this context, TidyScreen organizes each campaign as a unique `project`, which is stored in a specific path of the local computer. The project itself comprises a main folder containing a defined structure of subfolders that stores all the information associated to the project. In this way, if you want to share a whole project with a colleague, or maybe make it available to support the reproducibility of a scientific publication, it is possible to compress the main project folder and all the data will be included in a single file.

## Project creation	

The creation of `project` is the first step required to use TidyScreen, with all posterior work being associated to `actions` performed on the currently active project. Upon creation, projects are stored in TidyScreen `main_database`, which is initially created the package is installed. In order to create a new project, the following actions are required:

```python
from tidyscreen import config as ts_cfg
from tidyscreen import projects_management as proj_mg
import tidyscreen_dbs

## This will create a brand new project and the corresponding folders structure.
ts_cfg.CreateProject()
```

When this script is executed a `project_name` will be required (take as example name: *'test1'* ), which constitutes the project identifier that will be afterwards used for all kind if interactions with the project. Also a `base_directory` will be requested in order to create the folders structure and store all the information associated to the project. It is suggested that all projects are stored within a common `base_directory`. Please consider that sometimes projects can store large ammounts of information, especially if massive chemical libraries are to be screened or molecular docking and molecular dynamics simulations are programmed for the screening campaign. Consequently, it is recommended that `base_directory` is pointed to storage device with sufficient space to store the project as it progressess. Finally, a `project_description` will be requested to setup the project. Be as detailed as necessary to provide this description, since this will be your guide (and also for your collaborators) long after the project has been created and growed.

## Listing available projects

Projects available in the local computer can be searched (and afterwards activated) as follows:

```python
...
# List projects available locally
main_database = ts_cfg.MainDbConfigs()
main_database.list_projects()
```

Upon execution of this script, the following info will be presented:

```bash
Project: 
  test1 
 	 located at /$base_directory/test1 
 	 Description: first test project
```

As can be seen, all the info related to the project is outputed to the terminal. 

As expected, if more than one project is being managed by TidyScreen in the local computer, all of them will be listed in the terminal as shown below:

```bash
Project: 
  test1 
 	 located at /$base_directory/test1 
 	 Description: first test project
Project: 
  test2 
 	 located at /$base_directory/test2 
 	 Description: second test project

```

## Activating a project

In order to interact with a given project (i.e. add information, process molecules, etc) it must be activated (i.e. instantiated) by using the corresponding `project_name`. The script below shows how this is accomplished.

```python
...
### Activate project 'test1' in order to perform actions on it
test1_proj = proj_mg.ActivateProject("test1")
```

Once the project `test1` has been instantiated, different actions related to three research domains (`ChemSpace`, `Docking` and `MD`) can be executed.

For example, in order to activate `ChemSpace` actions on `test1`, the following script is executed:

```python
...
### Once activated, initialize ChemSpace actions on the project
test1_proj_CS = proj_mg.ChemSpaceActions(test1_proj)
```

From this point on, all `ChemSpace` actions will be invoked on the  `test1_proj_CS` object. For details on such actions y rationale behind their execution please revise the [dedicated tutorial](tutorial_1_chemspace/project_background).

A central phylosophy of TidyScreen is the **storage of information in a consistent folder structure**, which is created at the moment of project creation. In order to get familiar with the inner workings of TidyScreen, it is higly recommendable that the user knows how the directories tree and associated hierarchy works, which is presented in the following section. 