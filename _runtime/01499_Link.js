// === Module 1499: Link ===

// Module 1499 (Link)
import _mod1596 from "module_1596" /* 1596 */;
import _mod1597 from "module_1597" /* 1597 */;
import get_options from "get options" /* 1598 */;
import _mod1600 from "module_1600" /* 1600 */;
import _mod1601 from "module_1601" /* 1601 */;
import DefaultTheme from "DefaultTheme" /* 1602 */;
import _mod1609 from "module_1609" /* 1609 */;
import _mod1610 from "module_1610" /* 1610 */;
import clone from "clone" /* 1611 */;
import ServerContainer from "ServerContainer" /* 1613 */;
import DarkTheme from "DarkTheme" /* 1615 */;
import _mod1616 from "module_1616" /* 1616 */;
import _mod1617 from "module_1617" /* 1617 */;
import _mod1618 from "module_1618" /* 1618 */;
import _mod1619 from "module_1619" /* 1619 */;
import _mod1620 from "module_1620" /* 1620 */;

const require = globalThis.__r;

for (const key10013 in require("module_1500")) {
  arg5[key10013] = require("module_1500")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1596.createStandardNavigationFactories;
export const createStaticNavigation = _mod1600.createStaticNavigation;
export const Link = _mod1610.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1609.LocaleDirContext;
export const NavigationContainer = _mod1601.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1616.UnhandledLinkingContext;
export const useLinkBuilder = _mod1597.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1617.useLinkTo;
export const useLocale = _mod1618.useLocale;
export const useRoutePath = _mod1619.useRoutePath;
export const useScrollToTop = _mod1620.useScrollToTop;