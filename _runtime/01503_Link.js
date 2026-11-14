// _runtime/01503_Link.js
import _mod1600 from "metro/01600__.js";
import _mod1601 from "metro/01601__.js";
import get_options from "01602_get_options.js";
import _mod1604 from "metro/01604__.js";
import _mod1605 from "metro/01605__.js";
import DefaultTheme from "01606_DefaultTheme.js";
import _mod1613 from "metro/01613__.js";
import _mod1614 from "metro/01614__.js";
import clone from "01615_clone.js";
import ServerContainer from "01617_ServerContainer.js";
import DarkTheme from "01619_DarkTheme.js";
import _mod1620 from "metro/01620__.js";
import _mod1621 from "metro/01621__.js";
import _mod1622 from "metro/01622__.js";
import _mod1623 from "metro/01623__.js";
import _mod1624 from "metro/01624__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01504__.js")) {
  arg5[key10013] = require("metro/01504__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1600.createStandardNavigationFactories;
export const createStaticNavigation = _mod1604.createStaticNavigation;
export const Link = _mod1614.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1613.LocaleDirContext;
export const NavigationContainer = _mod1605.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1620.UnhandledLinkingContext;
export const useLinkBuilder = _mod1601.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1621.useLinkTo;
export const useLocale = _mod1622.useLocale;
export const useRoutePath = _mod1623.useRoutePath;
export const useScrollToTop = _mod1624.useScrollToTop;
