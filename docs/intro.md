---
sidebar_position: 0
---

# Introduction to TidyScreen

TidyScreen is a Python package developed at the Medicinal Chemistry Laboratory (MedChemLab), which is part of the Department of Pharmaceutical Sciences, [Faculty of Chemical Sciences](https://www.fcq.unc.edu.ar/), National University of Córdoba, Argentina. 

At MedChemLab we have been working for several years in the execution of virtual screening campaigns (VSC) in the search of new chemical entities that may constitute candidate as potentially usefull bioactive therapeutic compounds.

In our experience, while VSC constitutes fascinating scientific endevors, they can sometimes become overwhelming in respect to the ammount of information generated, requiring dedicated strategies for data management, analysis and storage. Also, VSC constitutes highly multidisciplinary research efforts, in which different scientific domains "talks" to each other as the campaing advances. Computational chemists usually form part of one of such domains, thus establishing an effective communication and results presentation strategy to colleagues forming part of other domains constitutes a very important issue towards the success of the research.

For all these reasons, information related to a VSC needs to be generated in an easy and organized way. This is the **main objective behind the development of TidyScreen**, and we hope you find the package usefull and meeting your research objectives.

For comments or suggestion respect to the project, please contact:

Alfredo Quevedo<br />
aquevedo@unc.edu.ar<br />
Head of MedChemLab

We will kingly appreaciate them!

## Installation

In order to install TidyScreen you need to have the [Conda](https://anaconda.org/) environment manager installed in your computer. It is highly recommendable to create a separate environment to install the package so as to isole its requirements. A dedicated TidyScreen environment can be created as:

```bash
# Create a dedicated environment 
$ conda create -n tidyscreen python=3.10

# Activate the environment prior to installing the package
$ conda activate tidyscreen

# Install the package from the project GitHub repository
$ pip install git+https://github.com/MedChemLab/TidyScreen_revised

```

If the above commands runs successfully, all the packages and dependencies required to run TidyScreen functions will be available in the environment, and thus can be accessed as indicated in the following sections.