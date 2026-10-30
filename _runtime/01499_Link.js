// _runtime/01499_Link.js
import _mod1596 from "metro/01596__.js";
import _mod1597 from "metro/01597__.js";
import get_options from "01598_get_options.js";
import _mod1600 from "metro/01600__.js";
import _mod1601 from "metro/01601__.js";
import DefaultTheme from "01602_DefaultTheme.js";
import _mod1609 from "metro/01609__.js";
import _mod1610 from "metro/01610__.js";
import clone from "01611_clone.js";
import ServerContainer from "01613_ServerContainer.js";
import DarkTheme from "01615_DarkTheme.js";
import _mod1616 from "metro/01616__.js";
import _mod1617 from "metro/01617__.js";
import _mod1618 from "metro/01618__.js";
import _mod1619 from "metro/01619__.js";
import _mod1620 from "metro/01620__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01500__.js")) {
  arg5[key10013] = require("metro/01500__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1596.createStandardNavigationFactories;
export const createStaticNavigation = _mod1600.createStaticNavigation;
export const Link = _mod1610.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1609.LocaleDirContext;
export const NavigationContainer = _mod1601.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1616.UnhandledLinkingContext;
export const useLinkBuilder = _mod1597.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1617.useLinkTo;
export const useLocale = _mod1618.useLocale;
export const useRoutePath = _mod1619.useRoutePath;
export const useScrollToTop = _mod1620.useScrollToTop;
