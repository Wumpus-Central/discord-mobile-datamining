// === Module 1501: createStandardNavigationFactories ===

// Module 1501 (createStandardNavigationFactories)
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1598 */;
import useBuildHref from "useBuildHref" /* 1599 */;
import get_options from "get options" /* 1600 */;
import createStaticNavigation from "createStaticNavigation" /* 1602 */;
import weakMap from "weakMap" /* 1603 */;
import fonts from "fonts" /* 1604 */;
import context from "context" /* 1611 */;
import Link from "Link" /* 1612 */;
import clone from "clone" /* 1613 */;
import ServerContainer from "ServerContainer" /* 1615 */;
import fonts2 from "fonts" /* 1617 */;
import setLastUnhandledLink from "setLastUnhandledLink" /* 1618 */;
import useLinkTo from "useLinkTo" /* 1619 */;
import useLocale from "useLocale" /* 1620 */;
import useRoutePath from "useRoutePath" /* 1621 */;
import useScrollToTop from "useScrollToTop" /* 1622 */;

for (const key10013 in require("module_1502")) {
  arg5[key10013] = require("module_1502")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
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