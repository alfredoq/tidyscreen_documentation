---
sidebar_position: 2
---

# Interacting with a project

A typical vHTS project is comprised by four stages:

- Setting of a working chemical space;
- Molecular docking of selected candidates;
- Molecular dynamics of hits;
- Overall data analysis.

TidyScreen assists in the configuration and execution of each of the stages, based on the philosophy that indexing and storing data in SQL databases can be functional no only to the organization of each working stage, but also favoring the feedback between them.

## Setting up of a working chemical space

This stage is related to the definition of the *type of chemistry* that is going to be applied, both virtually and experimentally, during the seach of bioactive compounds. Tipically, in this stage there is a close communication between the scientist performing the virtual studies and the organic chemist that is going to synthesize the proposed candidates.

The focus is centered on one or more synthetic route/s towards the desired candidates, which in turn defined the type and number of reactants involved in each synthetic step and also in the whole workflow. Sometimes, even the reactants are obtained through specific synthetic protocols, which further expands the experimental network towards the compounds in study.

Chemical reactions can be simulated in silico by using the [SMARTS](https://www.daylight.com/dayhtml/doc/theory/theory.smarts.html) reaction notation, which is implemented in the Python package [RDKit](https://www.rdkit.org/docs/RDKit_Book.html).

When TidyScreen is first installed, a custom set of reactions are already provided as part of the default database, which can be listed by instatiating a `main_database` object and aftwerwards use the `list_available_single_reaction` method as follows:

```python
from tidyscreen import config as ts_cfg
import tidyscreen_dbs

main_database = ts_cfg.MainDbConfigs()
main_database.list_available_single_reactions()

```
Upon execution this script, the following output will be provided:

```bash
These are the rections available in the main database

1: Azide_from_alpha_aminoacid - [NX3;H2:1][CX4:2][CX3,H0:3]>>[N-]=[N+]=[NX2;H0:1][CX4:2][CX3,H0:3]
2: Acylation - [CX3:1](=[O:2])[OX2H,OX1-:3].[C:4][O]>>[C:1](=[O:2])[O:3][C:4]
3: CuAAC - [NX1-:1]=[NX2+:2]=[NX2:3].[CX2H1:4]#[CX2H0:5]>>[NX2+0:1]1=[NX2+0:2][N:3]-[C:4]=[C:5]1
4: A3Coupling - [N:1].[CX3H1:2](=[O:3])>>[N:1][C:2][C:4]#[C:5]
5: DIBAL - [CX3:1](=[O:2])[OX2H,OX1-:3]>>[CX3H1:1](=[O:2])
6: Thiolation - [CX3:1](=[O:2])[OX2H,OX1-:3]>>[CX4:1][SX2H]
...
```

As can be seen , each reaction contains a `reaction_id` associated to a `reaction_name` and `reaction_smarts`. 

New reaction types can be added to the default ones included in the default database by using the `add_single_reactions_from_file` method, which will read a `csv` file containing the following information:

- Field_1: `reaction_name`
- Field_2: `reaction_smarts`
- Field_3: `user_name`

It should be noted that sometimes the creation of a reaction SMARTS can be tricky in terms of it matching the correct chemical groups and leading to the desired reaction product. The user should check the correctness of the SMARTS notation to be included in the database. The [SMARTS PLUS](https://smarts.plus/) is a very usefull web application to create, view and check SMARTS pattern and matching.

## Filtering of building blocks

Since the construction of working chemical space is closely related to the selection of specific building blocks involved in the above mentioned synthetic pathways, it is frequently requiered to search and filter commercially available reactants form databases such as [ZINC](https://zinc.docking.org/) or [Emolecules](https://search.emolecules.com/). In this respect, the filtering can be also performed by using [SMARTS](https://www.daylight.com/dayhtml/doc/theory/theory.smarts.html) notation, and also TidyScreen provides a set of custom filters used to match typical reactants. The list of available filters can be que queried as follows:

```python
from tidyscreen import config as ts_cfg
import tidyscreen_dbs

main_database = ts_cfg.MainDbConfigs()
main_database.list_available_chem_filter()

```

which will output the following:

```bash
1: Aminoacids - [NX3H2,NX4+H3][CX4H]([*])[CX3H0](=[OX1])[OX2H,OX1-]
2: Boron - B
3: Silicon - [Si]
4: Azide - N=[N+]=[N-]
5: Terminal_alkyne - C#[CH]
6: Deuterium - [2H]
...
```

A was the case for the chemical reactions, each chemical filter is identified by a `filter_id` followed by a `filter_name`and `filter_smarts`. The use of the filter in production is performed by spcifing the corresponding `filter_id` which is unique to each filter.

Also custom filters can be added to the default ones provided upon installation of TidyScreen. To perform this, the used should use the `add_chem_filters_from_file` , which will read a `csv` file containing the following information:

- Field_1: `filter_name`
- Field_2: `filter_smarts`
- Field_3: `user_name`

It should be noted that actions related to listing or adding chemical reactions and/or filters are associated to the `main_database`of TidyScreen and not restricted to a single project. A such, the new SMARTS added will be available for all projects managed by TidyScreen in the local computer.