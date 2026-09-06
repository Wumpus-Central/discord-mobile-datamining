// === Module 1484: Link ===

// Module 1484 (Link)
import _mod1581 from "module_1581" /* 1581 */;
import _mod1582 from "module_1582" /* 1582 */;
import get_options from "get options" /* 1583 */;
import _mod1585 from "module_1585" /* 1585 */;
import _mod1586 from "module_1586" /* 1586 */;
import DefaultTheme from "DefaultTheme" /* 1587 */;
import _mod1594 from "module_1594" /* 1594 */;
import _mod1595 from "module_1595" /* 1595 */;
import clone from "clone" /* 1596 */;
import ServerContainer from "ServerContainer" /* 1598 */;
import DarkTheme from "DarkTheme" /* 1600 */;
import _mod1601 from "module_1601" /* 1601 */;
import _mod1602 from "module_1602" /* 1602 */;
import _mod1603 from "module_1603" /* 1603 */;
import _mod1604 from "module_1604" /* 1604 */;
import _mod1605 from "module_1605" /* 1605 */;

for (const key10013 in require("module_1485")) {
  arg5[key10013] = require("module_1485")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1581.createStandardNavigationFactories;
export const createStaticNavigation = _mod1585.createStaticNavigation;
export const Link = _mod1595.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1594.LocaleDirContext;
export const NavigationContainer = _mod1586.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1601.UnhandledLinkingContext;
export const useLinkBuilder = _mod1582.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1602.useLinkTo;
export const useLocale = _mod1603.useLocale;
export const useRoutePath = _mod1604.useRoutePath;
export const useScrollToTop = _mod1605.useScrollToTop;