// === Module 1501: BaseNavigationContainer ===

// Module 1501 (BaseNavigationContainer)
import _mod1514 from "module_1514" /* 1514 */;
import _mod1516 from "module_1516" /* 1516 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1524 */;
import findFocusedRoute from "findFocusedRoute" /* 1525 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1529 */;
import ThemeProvider from "ThemeProvider" /* 1534 */;
import _mod1535 from "module_1535" /* 1535 */;
import _mod1536 from "module_1536" /* 1536 */;
import _mod1537 from "module_1537" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import context1 from "context1" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import NavigationContext from "NavigationContext" /* 1542 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1547 */;
import _mod1548 from "module_1548" /* 1548 */;
import CHILD_STATE from "CHILD_STATE" /* 1549 */;
import serializeParamValue from "serializeParamValue" /* 1552 */;
import prepareConfigResources from "prepareConfigResources" /* 1560 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1564 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1565 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1567 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1568 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1569 */;
import _mod1570 from "module_1570" /* 1570 */;
import _mod1571 from "module_1571" /* 1571 */;
import _mod1572 from "module_1572" /* 1572 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1590 */;
import _mod1591 from "module_1591" /* 1591 */;
import _mod1592 from "module_1592" /* 1592 */;
import _mod1593 from "module_1593" /* 1593 */;
import _mod1594 from "module_1594" /* 1594 */;
import _mod1595 from "module_1595" /* 1595 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1514.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1536.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1548.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1539.NavigationProvider;
export const NavigationRouteContext = _mod1539.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1537.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1537.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1537.createScreenFactory;
export const ThemeContext = _mod1535.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1570.useTheme;
export const useFocusEffect = _mod1571.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1541.useNavigation;
export const useNavigationBuilder = _mod1572.useNavigationBuilder;
export const useNavigationContainerRef = _mod1591.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1516.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1592.usePreventRemove;
export const usePreventRemoveContext = _mod1593.usePreventRemoveContext;
export const useRoute = _mod1538.useRoute;
export const useStateForPath = _mod1594.useStateForPath;
export const validatePathConfig = _mod1595.validatePathConfig;