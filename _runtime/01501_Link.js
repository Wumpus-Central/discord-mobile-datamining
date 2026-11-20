// _runtime/01501_Link.js
import _mod1598 from "metro/01598__.js";
import _mod1599 from "metro/01599__.js";
import get_options from "01600_get_options.js";
import _mod1602 from "metro/01602__.js";
import _mod1603 from "metro/01603__.js";
import DefaultTheme from "01604_DefaultTheme.js";
import _mod1611 from "metro/01611__.js";
import _mod1612 from "metro/01612__.js";
import clone from "01613_clone.js";
import ServerContainer from "01615_ServerContainer.js";
import DarkTheme from "01617_DarkTheme.js";
import _mod1618 from "metro/01618__.js";
import _mod1619 from "metro/01619__.js";
import _mod1620 from "metro/01620__.js";
import _mod1621 from "metro/01621__.js";
import _mod1622 from "metro/01622__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01502__.js")) {
  arg5[key10013] = require("metro/01502__.js")[key10013];
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
