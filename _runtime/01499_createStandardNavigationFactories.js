// === Module 1499: createStandardNavigationFactories ===

// Module 1499 (createStandardNavigationFactories)
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1596 */;
import useBuildHref from "useBuildHref" /* 1597 */;
import get_options from "get options" /* 1598 */;
import createStaticNavigation from "createStaticNavigation" /* 1600 */;
import weakMap from "weakMap" /* 1601 */;
import fonts from "fonts" /* 1602 */;
import context from "context" /* 1609 */;
import Link from "Link" /* 1610 */;
import clone from "clone" /* 1611 */;
import ServerContainer from "ServerContainer" /* 1613 */;
import fonts2 from "fonts" /* 1615 */;
import setLastUnhandledLink from "setLastUnhandledLink" /* 1616 */;
import useLinkTo from "useLinkTo" /* 1617 */;
import useLocale from "useLocale" /* 1618 */;
import useRoutePath from "useRoutePath" /* 1619 */;
import useScrollToTop from "useScrollToTop" /* 1620 */;

for (const key10013 in require("module_1500")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1500")[key10013];
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