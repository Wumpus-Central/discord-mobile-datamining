// === Module 1503: BaseNavigationContainer ===

// Module 1503 (BaseNavigationContainer)
import getPartialState from "getPartialState" /* 1516 */;
import useNavigationIndependentTree from "useNavigationIndependentTree" /* 1518 */;
import createNavigationContainerRef from "createNavigationContainerRef" /* 1526 */;
import findFocusedRoute from "findFocusedRoute" /* 1527 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1531 */;
import ThemeProvider from "ThemeProvider" /* 1536 */;
import context from "context" /* 1537 */;
import createNavigatorFactory from "createNavigatorFactory" /* 1538 */;
import getItemsFromScreens from "getItemsFromScreens" /* 1539 */;
import useRoute from "useRoute" /* 1540 */;
import context2 from "context" /* 1541 */;
import context1 from "context1" /* 1542 */;
import useNavigation from "useNavigation" /* 1543 */;
import NavigationContext from "NavigationContext" /* 1544 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1549 */;
import weakMap from "weakMap" /* 1550 */;
import getFocusedRouteNameFromRoute from "getFocusedRouteNameFromRoute" /* 1551 */;
import serializeParamValue from "serializeParamValue" /* 1554 */;
import prepareConfigResources from "prepareConfigResources" /* 1562 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1566 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1567 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1569 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1570 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1571 */;
import useTheme from "useTheme" /* 1572 */;
import useFocusEffect from "useFocusEffect" /* 1573 */;
import isNavigationState from "isNavigationState" /* 1574 */;
import useNavigationState from "useNavigationState" /* 1592 */;
import useNavigationContainerRef from "useNavigationContainerRef" /* 1593 */;
import usePreventRemove from "usePreventRemove" /* 1594 */;
import usePreventRemoveContext from "usePreventRemoveContext" /* 1595 */;
import useStateForPath from "useStateForPath" /* 1596 */;
import formatToList from "formatToList" /* 1597 */;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
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