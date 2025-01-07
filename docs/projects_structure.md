---
sidebar_position: 2
title: Projects structure
---

# Projects folders structure 

As presented before, the main objective of TidyScreen is to **organize and store** data associated to the vHTS campaing, facilitating its execution. Thus, it is not surprising that much of this organization relies on the use of a hierachical structure of folders that is mantained for every single project. This organization allows an easy interaction with the project.

The folders structure is presented below:

```bash
project_name
├── chemspace
│   └── pages
│       └── processed_data
│           ├── chemspace.db
│       └── raw_data
│       └── misc
├── docking
├── dynamics
├── .project_vars
.
```

As expected the the main folders: `chemspace`, `docking` and `dynamics` will store all data associated to each actions domain, as follows:

    - `chemspace`: stores everything having to do with the reading, filtering, reaction and preparation of libraries of molecules intended to be included in the vHTS.
    - `docking`: stores all the information required for the execution of molecular docking assays using the [AutoDock-GPU](https://github.com/ccsb-scripps/AutoDock-GPU) engine. This info includes docking assays themself and also receptor models available for the screening purposes.
    - `dynamics`: stores all the information associated to the execution of molecular dynamics studies usign the [Amber](https://ambermd.org/) software package. 
    - `.project_vars`: this folder contains configuration variables that are required for the execution of diverse actions and should not be modified by the user.