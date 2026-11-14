// === Module 1505: BaseNavigationContainer ===

// Module 1505 (BaseNavigationContainer)
import _mod1518 from "module_1518" /* 1518 */;
import _mod1520 from "module_1520" /* 1520 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1528 */;
import findFocusedRoute from "findFocusedRoute" /* 1529 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1533 */;
import ThemeProvider from "ThemeProvider" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import context1 from "context1" /* 1544 */;
import _mod1545 from "module_1545" /* 1545 */;
import NavigationContext from "NavigationContext" /* 1546 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1551 */;
import _mod1552 from "module_1552" /* 1552 */;
import CHILD_STATE from "CHILD_STATE" /* 1553 */;
import serializeParamValue from "serializeParamValue" /* 1556 */;
import prepareConfigResources from "prepareConfigResources" /* 1564 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1568 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1569 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1571 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1572 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1573 */;
import _mod1574 from "module_1574" /* 1574 */;
import _mod1575 from "module_1575" /* 1575 */;
import _mod1576 from "module_1576" /* 1576 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1594 */;
import _mod1595 from "module_1595" /* 1595 */;
import _mod1596 from "module_1596" /* 1596 */;
import _mod1597 from "module_1597" /* 1597 */;
import _mod1598 from "module_1598" /* 1598 */;
import _mod1599 from "module_1599" /* 1599 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1518.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1540.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1552.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1543.NavigationProvider;
export const NavigationRouteContext = _mod1543.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1541.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1541.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1541.createScreenFactory;
export const ThemeContext = _mod1539.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1574.useTheme;
export const useFocusEffect = _mod1575.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1545.useNavigation;
export const useNavigationBuilder = _mod1576.useNavigationBuilder;
export const useNavigationContainerRef = _mod1595.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1520.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1596.usePreventRemove;
export const usePreventRemoveContext = _mod1597.usePreventRemoveContext;
export const useRoute = _mod1542.useRoute;
export const useStateForPath = _mod1598.useStateForPath;
export const validatePathConfig = _mod1599.validatePathConfig;