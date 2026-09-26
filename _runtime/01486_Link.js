// _runtime/01486_Link.js
import _mod1583 from "metro/01583__.js";
import _mod1584 from "metro/01584__.js";
import get_options from "01585_get_options.js";
import _mod1587 from "metro/01587__.js";
import _mod1588 from "metro/01588__.js";
import DefaultTheme from "01589_DefaultTheme.js";
import _mod1596 from "metro/01596__.js";
import _mod1597 from "metro/01597__.js";
import clone from "01598_clone.js";
import ServerContainer from "01600_ServerContainer.js";
import DarkTheme from "01602_DarkTheme.js";
import _mod1603 from "metro/01603__.js";
import _mod1604 from "metro/01604__.js";
import _mod1605 from "metro/01605__.js";
import _mod1606 from "metro/01606__.js";
import _mod1607 from "metro/01607__.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01487__.js")) {
  arg5[key10013] = require("metro/01487__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1583.createStandardNavigationFactories;
export const createStaticNavigation = _mod1587.createStaticNavigation;
export const Link = _mod1597.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1596.LocaleDirContext;
export const NavigationContainer = _mod1588.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1603.UnhandledLinkingContext;
export const useLinkBuilder = _mod1584.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1604.useLinkTo;
export const useLocale = _mod1605.useLocale;
export const useRoutePath = _mod1606.useRoutePath;
export const useScrollToTop = _mod1607.useScrollToTop;
