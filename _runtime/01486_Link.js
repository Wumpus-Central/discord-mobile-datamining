// === Module 1486: Link ===

// Module 1486 (Link)
import _mod1583 from "module_1583" /* 1583 */;
import _mod1584 from "module_1584" /* 1584 */;
import get_options from "get options" /* 1585 */;
import _mod1587 from "module_1587" /* 1587 */;
import _mod1588 from "module_1588" /* 1588 */;
import DefaultTheme from "DefaultTheme" /* 1589 */;
import _mod1596 from "module_1596" /* 1596 */;
import _mod1597 from "module_1597" /* 1597 */;
import clone from "clone" /* 1598 */;
import ServerContainer from "ServerContainer" /* 1600 */;
import DarkTheme from "DarkTheme" /* 1602 */;
import _mod1603 from "module_1603" /* 1603 */;
import _mod1604 from "module_1604" /* 1604 */;
import _mod1605 from "module_1605" /* 1605 */;
import _mod1606 from "module_1606" /* 1606 */;
import _mod1607 from "module_1607" /* 1607 */;

const require = globalThis.__r;

for (const key10013 in require("module_1487")) {
  arg5[key10013] = require("module_1487")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1583.createStandardNavigationFactories;
export const createStaticNavigation = _mod1587.createStaticNavigation;
export const Link = _mod1597.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1596.LocaleDirContext;
export const NavigationContainer = _mod1588.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1603.UnhandledLinkingContext;
export const useLinkBuilder = _mod1584.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1604.useLinkTo;
export const useLocale = _mod1605.useLocale;
export const useRoutePath = _mod1606.useRoutePath;
export const useScrollToTop = _mod1607.useScrollToTop;