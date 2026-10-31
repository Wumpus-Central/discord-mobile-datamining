// _runtime/01498_Link.js
import _mod1595 from "metro/01595__.js";
import _mod1596 from "metro/01596__.js";
import get_options from "01597_get_options.js";
import _mod1599 from "metro/01599__.js";
import _mod1600 from "metro/01600__.js";
import DefaultTheme from "01601_DefaultTheme.js";
import _mod1608 from "metro/01608__.js";
import _mod1609 from "metro/01609__.js";
import clone from "01610_clone.js";
import ServerContainer from "01612_ServerContainer.js";
import DarkTheme from "01614_DarkTheme.js";
import _mod1615 from "metro/01615__.js";
import _mod1616 from "metro/01616__.js";
import _mod1617 from "metro/01617__.js";
import _mod1618 from "metro/01618__.js";
import _mod1619 from "metro/01619__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01499__.js")) {
  arg5[key10013] = require("metro/01499__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1595.createStandardNavigationFactories;
export const createStaticNavigation = _mod1599.createStaticNavigation;
export const Link = _mod1609.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1608.LocaleDirContext;
export const NavigationContainer = _mod1600.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1615.UnhandledLinkingContext;
export const useLinkBuilder = _mod1596.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1616.useLinkTo;
export const useLocale = _mod1617.useLocale;
export const useRoutePath = _mod1618.useRoutePath;
export const useScrollToTop = _mod1619.useScrollToTop;
