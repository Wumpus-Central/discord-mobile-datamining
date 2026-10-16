// === Module 1506: Link ===

// Module 1506 (Link)
import _mod1603 from "module_1603" /* 1603 */;
import _mod1604 from "module_1604" /* 1604 */;
import get_options from "get options" /* 1605 */;
import _mod1607 from "module_1607" /* 1607 */;
import _mod1608 from "module_1608" /* 1608 */;
import DefaultTheme from "DefaultTheme" /* 1609 */;
import _mod1616 from "module_1616" /* 1616 */;
import _mod1617 from "module_1617" /* 1617 */;
import clone from "clone" /* 1618 */;
import ServerContainer from "ServerContainer" /* 1620 */;
import DarkTheme from "DarkTheme" /* 1622 */;
import _mod1623 from "module_1623" /* 1623 */;
import _mod1624 from "module_1624" /* 1624 */;
import _mod1625 from "module_1625" /* 1625 */;
import _mod1626 from "module_1626" /* 1626 */;
import _mod1627 from "module_1627" /* 1627 */;

const require = globalThis.__r;

for (const key10013 in require("module_1507")) {
  arg5[key10013] = require("module_1507")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1603.createStandardNavigationFactories;
export const createStaticNavigation = _mod1607.createStaticNavigation;
export const Link = _mod1617.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1616.LocaleDirContext;
export const NavigationContainer = _mod1608.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1623.UnhandledLinkingContext;
export const useLinkBuilder = _mod1604.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1624.useLinkTo;
export const useLocale = _mod1625.useLocale;
export const useRoutePath = _mod1626.useRoutePath;
export const useScrollToTop = _mod1627.useScrollToTop;