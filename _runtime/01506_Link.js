// _runtime/01506_Link.js
import _mod1603 from "metro/01603__.js";
import _mod1604 from "metro/01604__.js";
import get_options from "01605_get_options.js";
import _mod1607 from "metro/01607__.js";
import _mod1608 from "metro/01608__.js";
import DefaultTheme from "01609_DefaultTheme.js";
import _mod1616 from "metro/01616__.js";
import _mod1617 from "metro/01617__.js";
import clone from "01618_clone.js";
import ServerContainer from "01620_ServerContainer.js";
import DarkTheme from "01622_DarkTheme.js";
import _mod1623 from "metro/01623__.js";
import _mod1624 from "metro/01624__.js";
import _mod1625 from "metro/01625__.js";
import _mod1626 from "metro/01626__.js";
import _mod1627 from "metro/01627__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01507__.js")) {
  arg5[key10013] = require("metro/01507__.js")[key10013];
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
