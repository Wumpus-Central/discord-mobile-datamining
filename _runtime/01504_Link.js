// === Module 1504: Link ===

// Module 1504 (Link)
import _mod1601 from "module_1601" /* 1601 */;
import _mod1602 from "module_1602" /* 1602 */;
import get_options from "get options" /* 1603 */;
import _mod1605 from "module_1605" /* 1605 */;
import _mod1606 from "module_1606" /* 1606 */;
import DefaultTheme from "DefaultTheme" /* 1607 */;
import _mod1614 from "module_1614" /* 1614 */;
import _mod1615 from "module_1615" /* 1615 */;
import clone from "clone" /* 1616 */;
import ServerContainer from "ServerContainer" /* 1618 */;
import DarkTheme from "DarkTheme" /* 1620 */;
import _mod1621 from "module_1621" /* 1621 */;
import _mod1622 from "module_1622" /* 1622 */;
import _mod1623 from "module_1623" /* 1623 */;
import _mod1624 from "module_1624" /* 1624 */;
import _mod1625 from "module_1625" /* 1625 */;

const require = globalThis.__r;

for (const key10013 in require("module_1505")) {
  arg5[key10013] = require("module_1505")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1601.createStandardNavigationFactories;
export const createStaticNavigation = _mod1605.createStaticNavigation;
export const Link = _mod1615.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1614.LocaleDirContext;
export const NavigationContainer = _mod1606.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1621.UnhandledLinkingContext;
export const useLinkBuilder = _mod1602.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1622.useLinkTo;
export const useLocale = _mod1623.useLocale;
export const useRoutePath = _mod1624.useRoutePath;
export const useScrollToTop = _mod1625.useScrollToTop;