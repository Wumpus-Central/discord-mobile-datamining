// _runtime/01484_createStandardNavigationFactories.js
import createStandardNavigationFactories from "01581_createStandardNavigationFactories.js";
import useBuildHref from "01582_useBuildHref.js";
import get_options from "01583_get_options.js";
import createStaticNavigation from "01585_createStaticNavigation.js";
import weakMap from "01586_weakMap.js";
import fonts from "01587_fonts.js";
import context from "01594_context.js";
import Link from "01595_Link.js";
import clone from "01596_clone.js";
import ServerContainer from "01598_ServerContainer.js";
import fonts2 from "01600_fonts.js";
import setLastUnhandledLink from "01601_setLastUnhandledLink.js";
import useLinkTo from "01602_useLinkTo.js";
import useLocale from "01603_useLocale.js";
import useRoutePath from "01604_useRoutePath.js";
import useScrollToTop from "01605_useScrollToTop.js";

for (const key10013 in require("metro/01485__.js")) {
  let tmp2 = key10013;
  arg5[key10013] = require("metro/01485__.js")[key10013];
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
