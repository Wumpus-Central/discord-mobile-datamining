// _runtime/01485_Link.js
import _mod1582 from "metro/01582__.js";
import _mod1583 from "metro/01583__.js";
import get_options from "01584_get_options.js";
import _mod1586 from "metro/01586__.js";
import _mod1587 from "metro/01587__.js";
import DefaultTheme from "01588_DefaultTheme.js";
import _mod1595 from "metro/01595__.js";
import _mod1596 from "metro/01596__.js";
import clone from "01597_clone.js";
import ServerContainer from "01599_ServerContainer.js";
import DarkTheme from "01601_DarkTheme.js";
import _mod1602 from "metro/01602__.js";
import _mod1603 from "metro/01603__.js";
import _mod1604 from "metro/01604__.js";
import _mod1605 from "metro/01605__.js";
import _mod1606 from "metro/01606__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01486__.js")) {
  arg5[key10013] = require("metro/01486__.js")[key10013];
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
