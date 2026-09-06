// === Module 1484: createStandardNavigationFactories ===

// Module 1484 (createStandardNavigationFactories)
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1581 */;
import useBuildHref from "useBuildHref" /* 1582 */;
import get_options from "get options" /* 1583 */;
import createStaticNavigation from "createStaticNavigation" /* 1585 */;
import weakMap from "weakMap" /* 1586 */;
import fonts from "fonts" /* 1587 */;
import context from "context" /* 1594 */;
import Link from "Link" /* 1595 */;
import clone from "clone" /* 1596 */;
import ServerContainer from "ServerContainer" /* 1598 */;
import fonts2 from "fonts" /* 1600 */;
import setLastUnhandledLink from "setLastUnhandledLink" /* 1601 */;
import useLinkTo from "useLinkTo" /* 1602 */;
import useLocale from "useLocale" /* 1603 */;
import useRoutePath from "useRoutePath" /* 1604 */;
import useScrollToTop from "useScrollToTop" /* 1605 */;

for (const key10013 in require("module_1485")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1485")[key10013];
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