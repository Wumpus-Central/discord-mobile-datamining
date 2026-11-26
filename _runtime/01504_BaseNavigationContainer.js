// === Module 1504: BaseNavigationContainer ===

// Module 1504 (BaseNavigationContainer)
import _mod1517 from "module_1517" /* 1517 */;
import _mod1519 from "module_1519" /* 1519 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1527 */;
import findFocusedRoute from "findFocusedRoute" /* 1528 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1532 */;
import ThemeProvider from "ThemeProvider" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import context1 from "context1" /* 1543 */;
import _mod1544 from "module_1544" /* 1544 */;
import NavigationContext from "NavigationContext" /* 1545 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1550 */;
import _mod1551 from "module_1551" /* 1551 */;
import CHILD_STATE from "CHILD_STATE" /* 1552 */;
import serializeParamValue from "serializeParamValue" /* 1555 */;
import prepareConfigResources from "prepareConfigResources" /* 1563 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1567 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1568 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1570 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1571 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1572 */;
import _mod1573 from "module_1573" /* 1573 */;
import _mod1574 from "module_1574" /* 1574 */;
import _mod1575 from "module_1575" /* 1575 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1593 */;
import _mod1594 from "module_1594" /* 1594 */;
import _mod1595 from "module_1595" /* 1595 */;
import _mod1596 from "module_1596" /* 1596 */;
import _mod1597 from "module_1597" /* 1597 */;
import _mod1598 from "module_1598" /* 1598 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1517.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1539.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1551.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1542.NavigationProvider;
export const NavigationRouteContext = _mod1542.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1540.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1540.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1540.createScreenFactory;
export const ThemeContext = _mod1538.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1573.useTheme;
export const useFocusEffect = _mod1574.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1544.useNavigation;
export const useNavigationBuilder = _mod1575.useNavigationBuilder;
export const useNavigationContainerRef = _mod1594.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1519.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1595.usePreventRemove;
export const usePreventRemoveContext = _mod1596.usePreventRemoveContext;
export const useRoute = _mod1541.useRoute;
export const useStateForPath = _mod1597.useStateForPath;
export const validatePathConfig = _mod1598.validatePathConfig;