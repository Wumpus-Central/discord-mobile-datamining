// === Module 1501: BaseNavigationContainer ===

// Module 1501 (BaseNavigationContainer)
import getPartialState from "getPartialState" /* 1514 */;
import useNavigationIndependentTree from "useNavigationIndependentTree" /* 1516 */;
import createNavigationContainerRef from "createNavigationContainerRef" /* 1524 */;
import findFocusedRoute from "findFocusedRoute" /* 1525 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1529 */;
import ThemeProvider from "ThemeProvider" /* 1534 */;
import context from "context" /* 1535 */;
import createNavigatorFactory from "createNavigatorFactory" /* 1536 */;
import getItemsFromScreens from "getItemsFromScreens" /* 1537 */;
import useRoute from "useRoute" /* 1538 */;
import context2 from "context" /* 1539 */;
import context1 from "context1" /* 1540 */;
import useNavigation from "useNavigation" /* 1541 */;
import NavigationContext from "NavigationContext" /* 1542 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1547 */;
import weakMap from "weakMap" /* 1548 */;
import getFocusedRouteNameFromRoute from "getFocusedRouteNameFromRoute" /* 1549 */;
import serializeParamValue from "serializeParamValue" /* 1552 */;
import prepareConfigResources from "prepareConfigResources" /* 1560 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1564 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1565 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1567 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1568 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1569 */;
import useTheme from "useTheme" /* 1570 */;
import useFocusEffect from "useFocusEffect" /* 1571 */;
import isNavigationState from "isNavigationState" /* 1572 */;
import useNavigationState from "useNavigationState" /* 1590 */;
import useNavigationContainerRef from "useNavigationContainerRef" /* 1591 */;
import usePreventRemove from "usePreventRemove" /* 1592 */;
import usePreventRemoveContext from "usePreventRemoveContext" /* 1593 */;
import useStateForPath from "useStateForPath" /* 1594 */;
import formatToList from "formatToList" /* 1595 */;

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