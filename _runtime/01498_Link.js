// === Module 1498: Link ===

// Module 1498 (Link)
import _mod1595 from "module_1595" /* 1595 */;
import _mod1596 from "module_1596" /* 1596 */;
import get_options from "get options" /* 1597 */;
import _mod1599 from "module_1599" /* 1599 */;
import _mod1600 from "module_1600" /* 1600 */;
import DefaultTheme from "DefaultTheme" /* 1601 */;
import _mod1608 from "module_1608" /* 1608 */;
import _mod1609 from "module_1609" /* 1609 */;
import clone from "clone" /* 1610 */;
import ServerContainer from "ServerContainer" /* 1612 */;
import DarkTheme from "DarkTheme" /* 1614 */;
import _mod1615 from "module_1615" /* 1615 */;
import _mod1616 from "module_1616" /* 1616 */;
import _mod1617 from "module_1617" /* 1617 */;
import _mod1618 from "module_1618" /* 1618 */;
import _mod1619 from "module_1619" /* 1619 */;

const require = globalThis.__r;

for (const key10013 in require("module_1499")) {
  arg5[key10013] = require("module_1499")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1595.createStandardNavigationFactories;
export const createStaticNavigation = _mod1599.createStaticNavigation;
export const Link = _mod1609.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1608.LocaleDirContext;
export const NavigationContainer = _mod1600.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1615.UnhandledLinkingContext;
export const useLinkBuilder = _mod1596.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1616.useLinkTo;
export const useLocale = _mod1617.useLocale;
export const useRoutePath = _mod1618.useRoutePath;
export const useScrollToTop = _mod1619.useScrollToTop;