---
sidebar_position: 2
title: Projects structure
---

# Projects folders structure 

## Directories hierarchy

As presented before, the main objective of TidyScreen is to **organize and store** data associated to the vHTS campaign, thus facilitating its execution and data analysis. In this way, it is not surprising that much of this organization relies on the use of a hierachical structure of folders that is mantained for every single project managed by TidyScreen. This organization allows an easy interaction with the project and if required, a straightforward retrieval of information from the user.

The main folder (i.e. `project_name`) and the corresponding subfolders structure corresponds to the following architecture:

```bash
project_name
├── chemspace
│     └── processed_data
│         ├── chemspace.db
│     └── raw_data
│     └── misc
├── docking
│     └── docking_assays
│     └── docking_registers
│     └── params
│     └── raw_data
│     └── receptors
├── dynamics
│     └── md_assays
│     └── md_registers
│     └── md_params
├── .project_vars
.
```
## Organization of working domains

We have mentioned that the execution of the vHTS campaing as managed by TidyScreen is organized in three main activities `domains`, which corresponds to:

    - `chemspace`
    - `docking`
    - `dynamics`

As expected, the main project is divided into subfolders that are consistant with these three so-called  `domains`, each one storing all the data associated to the specific actions inherent to them. A general overview of the actions associated to each subfolder is:

    - `chemspace`: stores all the information having to do with the reading, filtering, reaction and preparation of libraries of molecules intended to be included in the vHTS. In few words, the management of the **working chemical space** associated to the project relies on this subfolder.
    - `docking`: stores all the information required for the execution of molecular docking assays. As will be presented in later sections and tutorials, TidyScreen has been designed to work in conjunction with the [AutoDock-GPU](https://github.com/ccsb-scripps/AutoDock-GPU) docking engine. In this way, this subfolder stores the information related to the setting up of docking assays, the corresponding results and their registers, as well as the different receptor models involved in the molecular docking assays.
    - `dynamics`: stores all the information associated to the execution of molecular dynamics studies. TidyScreen has been design to specifically use the [Amber](https://ambermd.org/) software package, which is freely available for non-comercial/academic users. 
    - `.project_vars`: this folder contains configuration variables that are required for the execution of diverse actions and should not be modified by the user.