// _runtime/01502_Link.js
import _mod1599 from "metro/01599__.js";
import _mod1600 from "metro/01600__.js";
import get_options from "01601_get_options.js";
import _mod1603 from "metro/01603__.js";
import _mod1604 from "metro/01604__.js";
import DefaultTheme from "01605_DefaultTheme.js";
import _mod1612 from "metro/01612__.js";
import _mod1613 from "metro/01613__.js";
import clone from "01614_clone.js";
import ServerContainer from "01616_ServerContainer.js";
import DarkTheme from "01618_DarkTheme.js";
import _mod1619 from "metro/01619__.js";
import _mod1620 from "metro/01620__.js";
import _mod1621 from "metro/01621__.js";
import _mod1622 from "metro/01622__.js";
import _mod1623 from "metro/01623__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01503__.js")) {
  arg5[key10013] = require("metro/01503__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1599.createStandardNavigationFactories;
export const createStaticNavigation = _mod1603.createStaticNavigation;
export const Link = _mod1613.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1612.LocaleDirContext;
export const NavigationContainer = _mod1604.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1619.UnhandledLinkingContext;
export const useLinkBuilder = _mod1600.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1620.useLinkTo;
export const useLocale = _mod1621.useLocale;
export const useRoutePath = _mod1622.useRoutePath;
export const useScrollToTop = _mod1623.useScrollToTop;
