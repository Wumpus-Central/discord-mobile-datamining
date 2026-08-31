// === Module 1502: BaseNavigationContainer ===

// Module 1502 (BaseNavigationContainer)
import getPartialState from "getPartialState" /* 1515 */;
import useNavigationIndependentTree from "useNavigationIndependentTree" /* 1517 */;
import createNavigationContainerRef from "createNavigationContainerRef" /* 1525 */;
import findFocusedRoute from "findFocusedRoute" /* 1526 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1530 */;
import ThemeProvider from "ThemeProvider" /* 1535 */;
import context from "context" /* 1536 */;
import createNavigatorFactory from "createNavigatorFactory" /* 1537 */;
import getItemsFromScreens from "getItemsFromScreens" /* 1538 */;
import useRoute from "useRoute" /* 1539 */;
import context2 from "context" /* 1540 */;
import context1 from "context1" /* 1541 */;
import useNavigation from "useNavigation" /* 1542 */;
import NavigationContext from "NavigationContext" /* 1543 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1548 */;
import weakMap from "weakMap" /* 1549 */;
import getFocusedRouteNameFromRoute from "getFocusedRouteNameFromRoute" /* 1550 */;
import serializeParamValue from "serializeParamValue" /* 1553 */;
import prepareConfigResources from "prepareConfigResources" /* 1561 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1565 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1566 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1568 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1569 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1570 */;
import useTheme from "useTheme" /* 1571 */;
import useFocusEffect from "useFocusEffect" /* 1572 */;
import isNavigationState from "isNavigationState" /* 1573 */;
import useNavigationState from "useNavigationState" /* 1591 */;
import useNavigationContainerRef from "useNavigationContainerRef" /* 1592 */;
import usePreventRemove from "usePreventRemove" /* 1593 */;
import usePreventRemoveContext from "usePreventRemoveContext" /* 1594 */;
import useStateForPath from "useStateForPath" /* 1595 */;
import formatToList from "formatToList" /* 1596 */;

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