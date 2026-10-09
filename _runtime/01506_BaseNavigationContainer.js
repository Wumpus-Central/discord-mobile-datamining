// === Module 1506: BaseNavigationContainer ===

// Module 1506 (BaseNavigationContainer)
import _mod1519 from "module_1519" /* 1519 */;
import _mod1521 from "module_1521" /* 1521 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1529 */;
import findFocusedRoute from "findFocusedRoute" /* 1530 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1534 */;
import ThemeProvider from "ThemeProvider" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import _mod1544 from "module_1544" /* 1544 */;
import context1 from "context1" /* 1545 */;
import _mod1546 from "module_1546" /* 1546 */;
import NavigationContext from "NavigationContext" /* 1547 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1552 */;
import _mod1553 from "module_1553" /* 1553 */;
import CHILD_STATE from "CHILD_STATE" /* 1554 */;
import serializeParamValue from "serializeParamValue" /* 1557 */;
import prepareConfigResources from "prepareConfigResources" /* 1565 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1569 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1570 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1572 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1573 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1574 */;
import _mod1575 from "module_1575" /* 1575 */;
import _mod1576 from "module_1576" /* 1576 */;
import _mod1577 from "module_1577" /* 1577 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1595 */;
import _mod1596 from "module_1596" /* 1596 */;
import _mod1597 from "module_1597" /* 1597 */;
import _mod1598 from "module_1598" /* 1598 */;
import _mod1599 from "module_1599" /* 1599 */;
import _mod1600 from "module_1600" /* 1600 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1519.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1541.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1553.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1544.NavigationProvider;
export const NavigationRouteContext = _mod1544.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1542.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1542.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1542.createScreenFactory;
export const ThemeContext = _mod1540.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1575.useTheme;
export const useFocusEffect = _mod1576.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1546.useNavigation;
export const useNavigationBuilder = _mod1577.useNavigationBuilder;
export const useNavigationContainerRef = _mod1596.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1521.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1597.usePreventRemove;
export const usePreventRemoveContext = _mod1598.usePreventRemoveContext;
export const useRoute = _mod1543.useRoute;
export const useStateForPath = _mod1599.useStateForPath;
export const validatePathConfig = _mod1600.validatePathConfig;