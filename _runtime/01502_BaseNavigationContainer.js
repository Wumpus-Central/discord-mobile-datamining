// === Module 1502: BaseNavigationContainer ===

// Module 1502 (BaseNavigationContainer)
import _mod1515 from "module_1515" /* 1515 */;
import _mod1517 from "module_1517" /* 1517 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1525 */;
import findFocusedRoute from "findFocusedRoute" /* 1526 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1530 */;
import ThemeProvider from "ThemeProvider" /* 1535 */;
import _mod1536 from "module_1536" /* 1536 */;
import _mod1537 from "module_1537" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import context1 from "context1" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import NavigationContext from "NavigationContext" /* 1543 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1548 */;
import _mod1549 from "module_1549" /* 1549 */;
import CHILD_STATE from "CHILD_STATE" /* 1550 */;
import serializeParamValue from "serializeParamValue" /* 1553 */;
import prepareConfigResources from "prepareConfigResources" /* 1561 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1565 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1566 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1568 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1569 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1570 */;
import _mod1571 from "module_1571" /* 1571 */;
import _mod1572 from "module_1572" /* 1572 */;
import _mod1573 from "module_1573" /* 1573 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1591 */;
import _mod1592 from "module_1592" /* 1592 */;
import _mod1593 from "module_1593" /* 1593 */;
import _mod1594 from "module_1594" /* 1594 */;
import _mod1595 from "module_1595" /* 1595 */;
import _mod1596 from "module_1596" /* 1596 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1515.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1537.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1549.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1540.NavigationProvider;
export const NavigationRouteContext = _mod1540.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1538.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1538.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1538.createScreenFactory;
export const ThemeContext = _mod1536.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1571.useTheme;
export const useFocusEffect = _mod1572.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1542.useNavigation;
export const useNavigationBuilder = _mod1573.useNavigationBuilder;
export const useNavigationContainerRef = _mod1592.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1517.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1593.usePreventRemove;
export const usePreventRemoveContext = _mod1594.usePreventRemoveContext;
export const useRoute = _mod1539.useRoute;
export const useStateForPath = _mod1595.useStateForPath;
export const validatePathConfig = _mod1596.validatePathConfig;