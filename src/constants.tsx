import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'About',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Rent calculator', path: '/resources/rent-calculator' },
      { title: 'Investment calculator', path: '/resources/investment-calculator' },
    ],
  },
  {
    title: 'Case Studies',
    path: '/case-studies',
    icon: <Icon icon="lucide:align-end-horizontal" width="24" height="24" />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
];
