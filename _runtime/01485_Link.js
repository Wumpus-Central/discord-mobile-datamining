// === Module 1485: Link ===

// Module 1485 (Link)
import _mod1582 from "module_1582" /* 1582 */;
import _mod1583 from "module_1583" /* 1583 */;
import get_options from "get options" /* 1584 */;
import _mod1586 from "module_1586" /* 1586 */;
import _mod1587 from "module_1587" /* 1587 */;
import DefaultTheme from "DefaultTheme" /* 1588 */;
import _mod1595 from "module_1595" /* 1595 */;
import _mod1596 from "module_1596" /* 1596 */;
import clone from "clone" /* 1597 */;
import ServerContainer from "ServerContainer" /* 1599 */;
import DarkTheme from "DarkTheme" /* 1601 */;
import _mod1602 from "module_1602" /* 1602 */;
import _mod1603 from "module_1603" /* 1603 */;
import _mod1604 from "module_1604" /* 1604 */;
import _mod1605 from "module_1605" /* 1605 */;
import _mod1606 from "module_1606" /* 1606 */;

const require = globalThis.__r;

for (const key10013 in require("module_1486")) {
  arg5[key10013] = require("module_1486")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1582.createStandardNavigationFactories;
export const createStaticNavigation = _mod1586.createStaticNavigation;
export const Link = _mod1596.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1595.LocaleDirContext;
export const NavigationContainer = _mod1587.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1602.UnhandledLinkingContext;
export const useLinkBuilder = _mod1583.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1603.useLinkTo;
export const useLocale = _mod1604.useLocale;
export const useRoutePath = _mod1605.useRoutePath;
export const useScrollToTop = _mod1606.useScrollToTop;