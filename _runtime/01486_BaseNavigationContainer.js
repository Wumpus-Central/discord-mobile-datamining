// === Module 1486: BaseNavigationContainer ===

// Module 1486 (BaseNavigationContainer)
import getPartialState from "getPartialState" /* 1499 */;
import useNavigationIndependentTree from "useNavigationIndependentTree" /* 1501 */;
import createNavigationContainerRef from "createNavigationContainerRef" /* 1509 */;
import findFocusedRoute from "findFocusedRoute" /* 1510 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1514 */;
import ThemeProvider from "ThemeProvider" /* 1519 */;
import context from "context" /* 1520 */;
import createNavigatorFactory from "createNavigatorFactory" /* 1521 */;
import getItemsFromScreens from "getItemsFromScreens" /* 1522 */;
import useRoute from "useRoute" /* 1523 */;
import context2 from "context" /* 1524 */;
import context1 from "context1" /* 1525 */;
import useNavigation from "useNavigation" /* 1526 */;
import NavigationContext from "NavigationContext" /* 1527 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1532 */;
import weakMap from "weakMap" /* 1533 */;
import getFocusedRouteNameFromRoute from "getFocusedRouteNameFromRoute" /* 1534 */;
import serializeParamValue from "serializeParamValue" /* 1537 */;
import prepareConfigResources from "prepareConfigResources" /* 1545 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1549 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1550 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1552 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1553 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1554 */;
import useTheme from "useTheme" /* 1555 */;
import useFocusEffect from "useFocusEffect" /* 1556 */;
import isNavigationState from "isNavigationState" /* 1557 */;
import useNavigationState from "useNavigationState" /* 1575 */;
import useNavigationContainerRef from "useNavigationContainerRef" /* 1576 */;
import usePreventRemove from "usePreventRemove" /* 1577 */;
import usePreventRemoveContext from "usePreventRemoveContext" /* 1578 */;
import useStateForPath from "useStateForPath" /* 1579 */;
import formatToList from "formatToList" /* 1580 */;

for (const key10013 in require("PrivateValueStore")) {
  let tmp2 = key10013;
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  let tmp3 = key10017;
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = getPartialState.BaseNavigationContainer;
export const createNavigationContainerRef = createNavigationContainerRef.createNavigationContainerRef;
export const createNavigatorFactory = createNavigatorFactory.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = weakMap.getActionFromState;
export const getFocusedRouteNameFromRoute = getFocusedRouteNameFromRoute.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = context2.NavigationProvider;
export const NavigationRouteContext = context2.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = getItemsFromScreens.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = getItemsFromScreens.createPathConfigForStaticNavigation;
export const createScreenFactory = getItemsFromScreens.createScreenFactory;
export const ThemeContext = context.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = useTheme.useTheme;
export const useFocusEffect = useFocusEffect.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = useNavigation.useNavigation;
export const useNavigationBuilder = isNavigationState.useNavigationBuilder;
export const useNavigationContainerRef = useNavigationContainerRef.useNavigationContainerRef;
export const useNavigationIndependentTree = useNavigationIndependentTree.useNavigationIndependentTree;
export const useNavigationState = useNavigationState.useNavigationState;
export const usePreventRemove = usePreventRemove.usePreventRemove;
export const usePreventRemoveContext = usePreventRemoveContext.usePreventRemoveContext;
export const useRoute = useRoute.useRoute;
export const useStateForPath = useStateForPath.useStateForPath;
export const validatePathConfig = formatToList.validatePathConfig;