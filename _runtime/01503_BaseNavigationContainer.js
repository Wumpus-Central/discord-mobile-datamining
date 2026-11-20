// === Module 1503: BaseNavigationContainer ===

// Module 1503 (BaseNavigationContainer)
import _mod1516 from "module_1516" /* 1516 */;
import _mod1518 from "module_1518" /* 1518 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1526 */;
import findFocusedRoute from "findFocusedRoute" /* 1527 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1531 */;
import ThemeProvider from "ThemeProvider" /* 1536 */;
import _mod1537 from "module_1537" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import context1 from "context1" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import NavigationContext from "NavigationContext" /* 1544 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1549 */;
import _mod1550 from "module_1550" /* 1550 */;
import CHILD_STATE from "CHILD_STATE" /* 1551 */;
import serializeParamValue from "serializeParamValue" /* 1554 */;
import prepareConfigResources from "prepareConfigResources" /* 1562 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1566 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1567 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1569 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1570 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1571 */;
import _mod1572 from "module_1572" /* 1572 */;
import _mod1573 from "module_1573" /* 1573 */;
import _mod1574 from "module_1574" /* 1574 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1592 */;
import _mod1593 from "module_1593" /* 1593 */;
import _mod1594 from "module_1594" /* 1594 */;
import _mod1595 from "module_1595" /* 1595 */;
import _mod1596 from "module_1596" /* 1596 */;
import _mod1597 from "module_1597" /* 1597 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1516.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1538.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1550.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1541.NavigationProvider;
export const NavigationRouteContext = _mod1541.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1539.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1539.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1539.createScreenFactory;
export const ThemeContext = _mod1537.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1572.useTheme;
export const useFocusEffect = _mod1573.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1543.useNavigation;
export const useNavigationBuilder = _mod1574.useNavigationBuilder;
export const useNavigationContainerRef = _mod1593.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1518.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1594.usePreventRemove;
export const usePreventRemoveContext = _mod1595.usePreventRemoveContext;
export const useRoute = _mod1540.useRoute;
export const useStateForPath = _mod1596.useStateForPath;
export const validatePathConfig = _mod1597.validatePathConfig;