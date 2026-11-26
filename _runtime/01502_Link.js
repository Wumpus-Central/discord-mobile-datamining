// === Module 1502: Link ===

// Module 1502 (Link)
import _mod1599 from "module_1599" /* 1599 */;
import _mod1600 from "module_1600" /* 1600 */;
import get_options from "get options" /* 1601 */;
import _mod1603 from "module_1603" /* 1603 */;
import _mod1604 from "module_1604" /* 1604 */;
import DefaultTheme from "DefaultTheme" /* 1605 */;
import _mod1612 from "module_1612" /* 1612 */;
import _mod1613 from "module_1613" /* 1613 */;
import clone from "clone" /* 1614 */;
import ServerContainer from "ServerContainer" /* 1616 */;
import DarkTheme from "DarkTheme" /* 1618 */;
import _mod1619 from "module_1619" /* 1619 */;
import _mod1620 from "module_1620" /* 1620 */;
import _mod1621 from "module_1621" /* 1621 */;
import _mod1622 from "module_1622" /* 1622 */;
import _mod1623 from "module_1623" /* 1623 */;

const require = globalThis.__r;

for (const key10013 in require("module_1503")) {
  arg5[key10013] = require("module_1503")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1599.createStandardNavigationFactories;
export const createStaticNavigation = _mod1603.createStaticNavigation;
export const Link = _mod1613.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1612.LocaleDirContext;
export const NavigationContainer = _mod1604.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1619.UnhandledLinkingContext;
export const useLinkBuilder = _mod1600.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1620.useLinkTo;
export const useLocale = _mod1621.useLocale;
export const useRoutePath = _mod1622.useRoutePath;
export const useScrollToTop = _mod1623.useScrollToTop;