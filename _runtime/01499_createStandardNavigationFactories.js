// _runtime/01499_createStandardNavigationFactories.js
import createStandardNavigationFactories from "01596_createStandardNavigationFactories.js";
import useBuildHref from "01597_useBuildHref.js";
import get_options from "01598_get_options.js";
import createStaticNavigation from "01600_createStaticNavigation.js";
import weakMap from "01601_weakMap.js";
import fonts from "01602_fonts.js";
import context from "01609_context.js";
import Link from "01610_Link.js";
import clone from "01611_clone.js";
import ServerContainer from "01613_ServerContainer.js";
import fonts2 from "01615_fonts.js";
import setLastUnhandledLink from "01616_setLastUnhandledLink.js";
import useLinkTo from "01617_useLinkTo.js";
import useLocale from "01618_useLocale.js";
import useRoutePath from "01619_useRoutePath.js";
import useScrollToTop from "01620_useScrollToTop.js";

for (const key10013 in require("metro/01500__.js")) {
  let tmp2 = key10013;
  arg5[key10013] = require("metro/01500__.js")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  let tmp3 = key10017;
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = createStandardNavigationFactories.createStandardNavigationFactories;
export const createStaticNavigation = createStaticNavigation.createStaticNavigation;
export const Link = Link.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = context.LocaleDirContext;
export const NavigationContainer = weakMap.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = fonts2.DarkTheme;
export const DefaultTheme = fonts.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = setLastUnhandledLink.UnhandledLinkingContext;
export const useLinkBuilder = useBuildHref.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = useLinkTo.useLinkTo;
export const useLocale = useLocale.useLocale;
export const useRoutePath = useRoutePath.useRoutePath;
export const useScrollToTop = useScrollToTop.useScrollToTop;
