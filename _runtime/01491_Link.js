// === Module 1491: Link ===

// Module 1491 (Link)
import _mod1588 from "module_1588" /* 1588 */;
import _mod1589 from "module_1589" /* 1589 */;
import get_options from "get options" /* 1590 */;
import _mod1592 from "module_1592" /* 1592 */;
import _mod1593 from "module_1593" /* 1593 */;
import DefaultTheme from "DefaultTheme" /* 1594 */;
import _mod1601 from "module_1601" /* 1601 */;
import _mod1602 from "module_1602" /* 1602 */;
import clone from "clone" /* 1603 */;
import ServerContainer from "ServerContainer" /* 1605 */;
import DarkTheme from "DarkTheme" /* 1607 */;
import _mod1608 from "module_1608" /* 1608 */;
import _mod1609 from "module_1609" /* 1609 */;
import _mod1610 from "module_1610" /* 1610 */;
import _mod1611 from "module_1611" /* 1611 */;
import _mod1612 from "module_1612" /* 1612 */;

const require = globalThis.__r;

for (const key10013 in require("module_1492")) {
  arg5[key10013] = require("module_1492")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1588.createStandardNavigationFactories;
export const createStaticNavigation = _mod1592.createStaticNavigation;
export const Link = _mod1602.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1601.LocaleDirContext;
export const NavigationContainer = _mod1593.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1608.UnhandledLinkingContext;
export const useLinkBuilder = _mod1589.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1609.useLinkTo;
export const useLocale = _mod1610.useLocale;
export const useRoutePath = _mod1611.useRoutePath;
export const useScrollToTop = _mod1612.useScrollToTop;