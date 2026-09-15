// === Module 1487: BaseNavigationContainer ===

// Module 1487 (BaseNavigationContainer)
import _mod1500 from "module_1500" /* 1500 */;
import _mod1502 from "module_1502" /* 1502 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1510 */;
import findFocusedRoute from "findFocusedRoute" /* 1511 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1515 */;
import ThemeProvider from "ThemeProvider" /* 1520 */;
import _mod1521 from "module_1521" /* 1521 */;
import _mod1522 from "module_1522" /* 1522 */;
import _mod1523 from "module_1523" /* 1523 */;
import _mod1524 from "module_1524" /* 1524 */;
import _mod1525 from "module_1525" /* 1525 */;
import context1 from "context1" /* 1526 */;
import _mod1527 from "module_1527" /* 1527 */;
import NavigationContext from "NavigationContext" /* 1528 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1533 */;
import _mod1534 from "module_1534" /* 1534 */;
import CHILD_STATE from "CHILD_STATE" /* 1535 */;
import serializeParamValue from "serializeParamValue" /* 1538 */;
import prepareConfigResources from "prepareConfigResources" /* 1546 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1550 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1551 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1553 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1554 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1555 */;
import _mod1556 from "module_1556" /* 1556 */;
import _mod1557 from "module_1557" /* 1557 */;
import _mod1558 from "module_1558" /* 1558 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1576 */;
import _mod1577 from "module_1577" /* 1577 */;
import _mod1578 from "module_1578" /* 1578 */;
import _mod1579 from "module_1579" /* 1579 */;
import _mod1580 from "module_1580" /* 1580 */;
import _mod1581 from "module_1581" /* 1581 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1500.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1522.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1534.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1525.NavigationProvider;
export const NavigationRouteContext = _mod1525.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1523.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1523.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1523.createScreenFactory;
export const ThemeContext = _mod1521.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1556.useTheme;
export const useFocusEffect = _mod1557.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1527.useNavigation;
export const useNavigationBuilder = _mod1558.useNavigationBuilder;
export const useNavigationContainerRef = _mod1577.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1502.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1578.usePreventRemove;
export const usePreventRemoveContext = _mod1579.usePreventRemoveContext;
export const useRoute = _mod1524.useRoute;
export const useStateForPath = _mod1580.useStateForPath;
export const validatePathConfig = _mod1581.validatePathConfig;