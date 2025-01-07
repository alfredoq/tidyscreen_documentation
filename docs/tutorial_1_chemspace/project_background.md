---
sidebar_position: 0
---

# Project background and objectives

For any given scientific problem, the best way to learn is by tackling real and concrete problems, since they lay the scenario of technical issues and concerns that needs to be addresses both from the experimental and theoretical point of view.

In this tutorial we will be working using as example the development of Cruzipain (CZP) targeted covalent inhibitors as potential antichagasic agents. This research line is currently active at MedChemLab, and if you want to know more on it please consult the following sources:

- PhD Thesis - Dr. Juan Pablo Cerutti (jpcerutti@unc.edu.ar) ***"Design, synthesis and evaluation of new 1,2,3-triazol derivatives as potential antichagasic agents"***

- J. P. Cerutti, L. A. Diniz, V. C. Santos, S. C. Vilchez Larrea, G. D. Alonso, R. S. Ferreira,
W. Dehaen, and M. A. Quevedo, ***“Structure-aided computational design of triazole-based
targeted covalent inhibitors of cruzipain,”*** Molecules, vol. 29, no. 17, p. 4224, 2024.

-  J. P. Cerutti, L. A. Diniz, V. Corrêa Santos, S. C. Vilchez Larrea, G. D. Alonso, R. S.
Ferreira, M. A. Quevedo, and W. Dehaen, ***“Discovery of a potent triazole-based reversible
targeted covalent inhibitor of cruzipain,”*** ACS Medicinal Chemistry Letters, 2024

## Cruzipain (CZP) as a target for antichagasic agents

Chagas disease (CD), also known as American trypanosomiasis, is defined by
the WHO as a potentially life-threatening infectious systemic disease, which
is caused by the protozoan parasite Trypanosoma cruzi **(T. cruzi)**. The impact of CD extends beyond its epidemiological consequences, profoundly affecting the social conditions of patients.

Despite thorough grounding in the clinical manifestations, CD continues to
raise substantial challenges in terms of its therapeutic management, with only 2 nonspecific drugs being currently available of its treatment. These two drugs, namely benznidazole  (BZN) and nifurtimox (NFX) have been used for about 50 years.

![](/img/BNZ_NFX.png)

In the context described, and despite the enormous challenge, it is essential to recognise the need to develop new treatment options to manage CD. 

CZP is part of the papain (C1) family, constituting a stable endoprotease that is active over a wide pH range. CZP is expressed as a pre-proenzyme (zymogen), consisting of a pro-sequence, a catalytic domain, and an extensive and highly glycosylated C-terminal (C-T) domain.  It is responsible for its self-activation, as maturation of the proenzyme would occur through an autocatalytic process. CZP contains a catalytic domain is responsible of CZP proteolytic activity. Currently, more than 31 crystallographic structures of CZP have been reported and are readily accessible, making it feasible to apply modern structure-aided drug discovery technique for the search of new inhibitor candidadtes.

![](/img/CZP_monomer.png)

### Structure of CZP catalytic site

An adequate description of the structure and the identification of the constituent amino acids of CZP active site, as well as the analysis of its substrates, provides key information for the development of new antichagasic agents that could exhibit high inhibitory potency and selectivity against the enzyme.

Four main subsites for CZP are described in the literature, named S1’, S1, S2 and S3, which accommodate the P1’, P1, P2 and P3 amino acids of the polypeptide substrates, respectively:

![](/img/CZP_catalytic_site.png)


A key structural component of the catalytic subsite of CZP is the presence of a catalytic triad, which is formed by Cys25, His162 and Asn182 located at the interface between S1 and S1’

![](/img/CZP_catalytic_triad.png)

The overall catalytic mechanism as proposed to date is depicted in the figure below:

![](/img/CZP_catalytic_mechanism.png)

### Design and development of CZP inhibitors

A broad chemical-structural diversity has been described as CZP inhibitors. Also, varied inhibitory mechanisms have been reported, with examples of both non-covalent and covalent inhibitors found in literature. Since covalent bonds are stronger than non-covalent interactions, covalent inhibitors offer the opportunity to achieve higher potency than non-covalent ones, together with a longer action time,

The most frequently used strategy to obtain CZP inhibitors has historically been based on the design of peptide derivatives y closely related peptidomimetic drugs. However, this type of molecules posses  drug-like features are often poor and challenging. In this context, several strategies have been developed to optimize the suboptimal biopharmaceutical properties,  including the use of non-natural amino acids, cyclisations and/or sterically hindering modifications to the labile bond, or replacement of the amide bond by bioisosteric groups. Among this last strategy, the use of the  triazole heterocycle has gained popularity in drug discovery due to its outstanding properties:

![](/img/triazole_bioisoster.png)

In particular, the 1,4-disubstituted 1,2,3-triazole moiety presents remarkable physicochemical similarities to the trans-peptide bond. 

Among the numerous synthetic options to obtain 1,2,3-triazoles with different substitution patterns, the 1,3-dipolar cycloaddition (CuAAC) between an azide (1,3-dipole) and a terminal alkyne (1,3-dipolarophile) stands out.

![](/img/CuAAC.png)

Based on the vast evidence of the efficacy of 1,2,3-triazole-based peptidomimetics as protease inhibitors, the extensive knowledge of the features and properties of CZP, the available reports of triazole derivatives with excellent potency against CZP and the chemosynthetic versatility for their synthesis, it can be concluded that an exciting oportunity for the design and development of new antichagasic drugs based on the 1,2,3-triazole scaffold stands ahead. A wide chemical space remains to be explored and a variety of identification strategies can be applied. In this context, structure-aided computational techniques stands out as important tools to screen and discover new potential CZP inhibitors.

### Structure-based drug design
The continuous advance and development of technological and computational methodologies contributes significantly to make this process more efficient, reducing costs, time and resource consumption. Among them, virtual high-throughput screening (vHTS) undoubtedly stands out. 

Tipically, a computational workflow dealing with a vHTS initiate with an informed campign towards the construction of a synthetically feasible chemical space, which afterwards explored by using the varied toolbox offered by modern molecular modeling techniques.

In this respect, TidyScreen offers the possibility to manage in a systematic and organized way the conceptualization and obtention of such chemical space, as will be explained in detail in the following section.