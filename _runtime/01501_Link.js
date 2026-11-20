// === Module 1501: Link ===

// Module 1501 (Link)
import _mod1598 from "module_1598" /* 1598 */;
import _mod1599 from "module_1599" /* 1599 */;
import get_options from "get options" /* 1600 */;
import _mod1602 from "module_1602" /* 1602 */;
import _mod1603 from "module_1603" /* 1603 */;
import DefaultTheme from "DefaultTheme" /* 1604 */;
import _mod1611 from "module_1611" /* 1611 */;
import _mod1612 from "module_1612" /* 1612 */;
import clone from "clone" /* 1613 */;
import ServerContainer from "ServerContainer" /* 1615 */;
import DarkTheme from "DarkTheme" /* 1617 */;
import _mod1618 from "module_1618" /* 1618 */;
import _mod1619 from "module_1619" /* 1619 */;
import _mod1620 from "module_1620" /* 1620 */;
import _mod1621 from "module_1621" /* 1621 */;
import _mod1622 from "module_1622" /* 1622 */;

const require = globalThis.__r;

for (const key10013 in require("module_1502")) {
  arg5[key10013] = require("module_1502")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1598.createStandardNavigationFactories;
export const createStaticNavigation = _mod1602.createStaticNavigation;
export const Link = _mod1612.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1611.LocaleDirContext;
export const NavigationContainer = _mod1603.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1618.UnhandledLinkingContext;
export const useLinkBuilder = _mod1599.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1619.useLinkTo;
export const useLocale = _mod1620.useLocale;
export const useRoutePath = _mod1621.useRoutePath;
export const useScrollToTop = _mod1622.useScrollToTop;