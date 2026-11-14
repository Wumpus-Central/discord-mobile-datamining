// === Module 1503: Link ===

// Module 1503 (Link)
import _mod1600 from "module_1600" /* 1600 */;
import _mod1601 from "module_1601" /* 1601 */;
import get_options from "get options" /* 1602 */;
import _mod1604 from "module_1604" /* 1604 */;
import _mod1605 from "module_1605" /* 1605 */;
import DefaultTheme from "DefaultTheme" /* 1606 */;
import _mod1613 from "module_1613" /* 1613 */;
import _mod1614 from "module_1614" /* 1614 */;
import clone from "clone" /* 1615 */;
import ServerContainer from "ServerContainer" /* 1617 */;
import DarkTheme from "DarkTheme" /* 1619 */;
import _mod1620 from "module_1620" /* 1620 */;
import _mod1621 from "module_1621" /* 1621 */;
import _mod1622 from "module_1622" /* 1622 */;
import _mod1623 from "module_1623" /* 1623 */;
import _mod1624 from "module_1624" /* 1624 */;

const require = globalThis.__r;

for (const key10013 in require("module_1504")) {
  arg5[key10013] = require("module_1504")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1600.createStandardNavigationFactories;
export const createStaticNavigation = _mod1604.createStaticNavigation;
export const Link = _mod1614.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1613.LocaleDirContext;
export const NavigationContainer = _mod1605.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1620.UnhandledLinkingContext;
export const useLinkBuilder = _mod1601.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1621.useLinkTo;
export const useLocale = _mod1622.useLocale;
export const useRoutePath = _mod1623.useRoutePath;
export const useScrollToTop = _mod1624.useScrollToTop;