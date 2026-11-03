// _runtime/01500_Link.js
import _mod1597 from "metro/01597__.js";
import _mod1598 from "metro/01598__.js";
import get_options from "01599_get_options.js";
import _mod1601 from "metro/01601__.js";
import _mod1602 from "metro/01602__.js";
import DefaultTheme from "01603_DefaultTheme.js";
import _mod1610 from "metro/01610__.js";
import _mod1611 from "metro/01611__.js";
import clone from "01612_clone.js";
import ServerContainer from "01614_ServerContainer.js";
import DarkTheme from "01616_DarkTheme.js";
import _mod1617 from "metro/01617__.js";
import _mod1618 from "metro/01618__.js";
import _mod1619 from "metro/01619__.js";
import _mod1620 from "metro/01620__.js";
import _mod1621 from "metro/01621__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01501__.js")) {
  arg5[key10013] = require("metro/01501__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1597.createStandardNavigationFactories;
export const createStaticNavigation = _mod1601.createStaticNavigation;
export const Link = _mod1611.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1610.LocaleDirContext;
export const NavigationContainer = _mod1602.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1617.UnhandledLinkingContext;
export const useLinkBuilder = _mod1598.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1618.useLinkTo;
export const useLocale = _mod1619.useLocale;
export const useRoutePath = _mod1620.useRoutePath;
export const useScrollToTop = _mod1621.useScrollToTop;
