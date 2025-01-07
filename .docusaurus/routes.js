import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tidyscreen_documentation/helloMarkdown',
    component: ComponentCreator('/tidyscreen_documentation/helloMarkdown', '3fd'),
    exact: true
  },
  {
    path: '/tidyscreen_documentation/markdown-page',
    component: ComponentCreator('/tidyscreen_documentation/markdown-page', '15c'),
    exact: true
  },
  {
    path: '/tidyscreen_documentation/docs',
    component: ComponentCreator('/tidyscreen_documentation/docs', '0d2'),
    routes: [
      {
        path: '/tidyscreen_documentation/docs',
        component: ComponentCreator('/tidyscreen_documentation/docs', '36d'),
        routes: [
          {
            path: '/tidyscreen_documentation/docs',
            component: ComponentCreator('/tidyscreen_documentation/docs', 'eb2'),
            routes: [
              {
                path: '/tidyscreen_documentation/docs/category/tutorial-1---chemical-space-exploration',
                component: ComponentCreator('/tidyscreen_documentation/docs/category/tutorial-1---chemical-space-exploration', '8fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tidyscreen_documentation/docs/interaction_with_project',
                component: ComponentCreator('/tidyscreen_documentation/docs/interaction_with_project', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tidyscreen_documentation/docs/intro',
                component: ComponentCreator('/tidyscreen_documentation/docs/intro', '573'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tidyscreen_documentation/docs/project_presentation',
                component: ComponentCreator('/tidyscreen_documentation/docs/project_presentation', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tidyscreen_documentation/docs/projects_structure',
                component: ComponentCreator('/tidyscreen_documentation/docs/projects_structure', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tidyscreen_documentation/docs/tutorial_1_chemspace/construction_of_chemical_space',
                component: ComponentCreator('/tidyscreen_documentation/docs/tutorial_1_chemspace/construction_of_chemical_space', 'e9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tidyscreen_documentation/docs/tutorial_1_chemspace/project_background',
                component: ComponentCreator('/tidyscreen_documentation/docs/tutorial_1_chemspace/project_background', 'a72'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/tidyscreen_documentation/',
    component: ComponentCreator('/tidyscreen_documentation/', 'b6d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
