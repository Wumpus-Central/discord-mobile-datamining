// _runtime/01491_Link.js
import _mod1588 from "metro/01588__.js";
import _mod1589 from "metro/01589__.js";
import get_options from "01590_get_options.js";
import _mod1592 from "metro/01592__.js";
import _mod1593 from "metro/01593__.js";
import DefaultTheme from "01594_DefaultTheme.js";
import _mod1601 from "metro/01601__.js";
import _mod1602 from "metro/01602__.js";
import clone from "01603_clone.js";
import ServerContainer from "01605_ServerContainer.js";
import DarkTheme from "01607_DarkTheme.js";
import _mod1608 from "metro/01608__.js";
import _mod1609 from "metro/01609__.js";
import _mod1610 from "metro/01610__.js";
import _mod1611 from "metro/01611__.js";
import _mod1612 from "metro/01612__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01492__.js")) {
  arg5[key10013] = require("metro/01492__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1588.createStandardNavigationFactories;
export const createStaticNavigation = _mod1592.createStaticNavigation;
export const Link = _mod1602.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1601.LocaleDirContext;
export const NavigationContainer = _mod1593.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1608.UnhandledLinkingContext;
export const useLinkBuilder = _mod1589.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1609.useLinkTo;
export const useLocale = _mod1610.useLocale;
export const useRoutePath = _mod1611.useRoutePath;
export const useScrollToTop = _mod1612.useScrollToTop;
