// _runtime/01481_createStandardNavigationFactories.js
for (const key10013 in require("module_1482")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1482")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  let tmp3 = key10017;
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = require("createStandardNavigationFactories").createStandardNavigationFactories;
export const createStaticNavigation = require("createStaticNavigation").createStaticNavigation;
export const Link = require("Link").Link;
export const LinkingContext = require("get options").LinkingContext;
export const LocaleDirContext = require("context").LocaleDirContext;
export const NavigationContainer = require("weakMap").NavigationContainer;
export const ServerContainer = require("ServerContainer").ServerContainer;
export const DarkTheme = require("fonts").DarkTheme;
export const DefaultTheme = require("fonts").DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = require("setLastUnhandledLink").UnhandledLinkingContext;
export const useLinkBuilder = require("useBuildHref").useLinkBuilder;
export const useLinkProps = require("clone").useLinkProps;
export const useLinkTo = require("useLinkTo").useLinkTo;
export const useLocale = require("useLocale").useLocale;
export const useRoutePath = require("useRoutePath").useRoutePath;
export const useScrollToTop = require("useScrollToTop").useScrollToTop;