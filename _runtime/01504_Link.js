// _runtime/01504_Link.js
import _mod1601 from "metro/01601__.js";
import _mod1602 from "metro/01602__.js";
import get_options from "01603_get_options.js";
import _mod1605 from "metro/01605__.js";
import _mod1606 from "metro/01606__.js";
import DefaultTheme from "01607_DefaultTheme.js";
import _mod1614 from "metro/01614__.js";
import _mod1615 from "metro/01615__.js";
import clone from "01616_clone.js";
import ServerContainer from "01618_ServerContainer.js";
import DarkTheme from "01620_DarkTheme.js";
import _mod1621 from "metro/01621__.js";
import _mod1622 from "metro/01622__.js";
import _mod1623 from "metro/01623__.js";
import _mod1624 from "metro/01624__.js";
import _mod1625 from "metro/01625__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01505__.js")) {
  arg5[key10013] = require("metro/01505__.js")[key10013];
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
