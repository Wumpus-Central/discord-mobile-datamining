// === Module 1508: BaseNavigationContainer ===

// Module 1508 (BaseNavigationContainer)
import _mod1521 from "module_1521" /* 1521 */;
import _mod1523 from "module_1523" /* 1523 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1531 */;
import findFocusedRoute from "findFocusedRoute" /* 1532 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1536 */;
import ThemeProvider from "ThemeProvider" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import _mod1544 from "module_1544" /* 1544 */;
import _mod1545 from "module_1545" /* 1545 */;
import _mod1546 from "module_1546" /* 1546 */;
import context1 from "context1" /* 1547 */;
import _mod1548 from "module_1548" /* 1548 */;
import NavigationContext from "NavigationContext" /* 1549 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1554 */;
import _mod1555 from "module_1555" /* 1555 */;
import CHILD_STATE from "CHILD_STATE" /* 1556 */;
import serializeParamValue from "serializeParamValue" /* 1559 */;
import prepareConfigResources from "prepareConfigResources" /* 1567 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1571 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1572 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1574 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1575 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1576 */;
import _mod1577 from "module_1577" /* 1577 */;
import _mod1578 from "module_1578" /* 1578 */;
import _mod1579 from "module_1579" /* 1579 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1597 */;
import _mod1598 from "module_1598" /* 1598 */;
import _mod1599 from "module_1599" /* 1599 */;
import _mod1600 from "module_1600" /* 1600 */;
import _mod1601 from "module_1601" /* 1601 */;
import _mod1602 from "module_1602" /* 1602 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1521.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1543.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1555.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1546.NavigationProvider;
export const NavigationRouteContext = _mod1546.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1544.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1544.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1544.createScreenFactory;
export const ThemeContext = _mod1542.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1577.useTheme;
export const useFocusEffect = _mod1578.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1548.useNavigation;
export const useNavigationBuilder = _mod1579.useNavigationBuilder;
export const useNavigationContainerRef = _mod1598.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1523.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1599.usePreventRemove;
export const usePreventRemoveContext = _mod1600.usePreventRemoveContext;
export const useRoute = _mod1545.useRoute;
export const useStateForPath = _mod1601.useStateForPath;
export const validatePathConfig = _mod1602.validatePathConfig;