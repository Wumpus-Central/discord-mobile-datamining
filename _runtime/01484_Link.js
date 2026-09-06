// _runtime/01484_Link.js
import _mod1581 from "metro/01581__.js";
import _mod1582 from "metro/01582__.js";
import get_options from "01583_get_options.js";
import _mod1585 from "metro/01585__.js";
import _mod1586 from "metro/01586__.js";
import DefaultTheme from "01587_DefaultTheme.js";
import _mod1594 from "metro/01594__.js";
import _mod1595 from "metro/01595__.js";
import clone from "01596_clone.js";
import ServerContainer from "01598_ServerContainer.js";
import DarkTheme from "01600_DarkTheme.js";
import _mod1601 from "metro/01601__.js";
import _mod1602 from "metro/01602__.js";
import _mod1603 from "metro/01603__.js";
import _mod1604 from "metro/01604__.js";
import _mod1605 from "metro/01605__.js";

for (const key10013 in require("metro/01485__.js")) {
  arg5[key10013] = require("metro/01485__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1581.createStandardNavigationFactories;
export const createStaticNavigation = _mod1585.createStaticNavigation;
export const Link = _mod1595.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1594.LocaleDirContext;
export const NavigationContainer = _mod1586.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1601.UnhandledLinkingContext;
export const useLinkBuilder = _mod1582.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1602.useLinkTo;
export const useLocale = _mod1603.useLocale;
export const useRoutePath = _mod1604.useRoutePath;
export const useScrollToTop = _mod1605.useScrollToTop;
