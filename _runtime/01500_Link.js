// === Module 1500: Link ===

// Module 1500 (Link)
import _mod1597 from "module_1597" /* 1597 */;
import _mod1598 from "module_1598" /* 1598 */;
import get_options from "get options" /* 1599 */;
import _mod1601 from "module_1601" /* 1601 */;
import _mod1602 from "module_1602" /* 1602 */;
import DefaultTheme from "DefaultTheme" /* 1603 */;
import _mod1610 from "module_1610" /* 1610 */;
import _mod1611 from "module_1611" /* 1611 */;
import clone from "clone" /* 1612 */;
import ServerContainer from "ServerContainer" /* 1614 */;
import DarkTheme from "DarkTheme" /* 1616 */;
import _mod1617 from "module_1617" /* 1617 */;
import _mod1618 from "module_1618" /* 1618 */;
import _mod1619 from "module_1619" /* 1619 */;
import _mod1620 from "module_1620" /* 1620 */;
import _mod1621 from "module_1621" /* 1621 */;

const require = globalThis.__r;

for (const key10013 in require("module_1501")) {
  arg5[key10013] = require("module_1501")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1597.createStandardNavigationFactories;
export const createStaticNavigation = _mod1601.createStaticNavigation;
export const Link = _mod1611.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1610.LocaleDirContext;
export const NavigationContainer = _mod1602.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1617.UnhandledLinkingContext;
export const useLinkBuilder = _mod1598.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1618.useLinkTo;
export const useLocale = _mod1619.useLocale;
export const useRoutePath = _mod1620.useRoutePath;
export const useScrollToTop = _mod1621.useScrollToTop;