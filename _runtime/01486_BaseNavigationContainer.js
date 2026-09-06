// === Module 1486: BaseNavigationContainer ===

// Module 1486 (BaseNavigationContainer)
import _mod1499 from "module_1499" /* 1499 */;
import _mod1501 from "module_1501" /* 1501 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1509 */;
import findFocusedRoute from "findFocusedRoute" /* 1510 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1514 */;
import ThemeProvider from "ThemeProvider" /* 1519 */;
import _mod1520 from "module_1520" /* 1520 */;
import _mod1521 from "module_1521" /* 1521 */;
import _mod1522 from "module_1522" /* 1522 */;
import _mod1523 from "module_1523" /* 1523 */;
import _mod1524 from "module_1524" /* 1524 */;
import context1 from "context1" /* 1525 */;
import _mod1526 from "module_1526" /* 1526 */;
import NavigationContext from "NavigationContext" /* 1527 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1532 */;
import _mod1533 from "module_1533" /* 1533 */;
import CHILD_STATE from "CHILD_STATE" /* 1534 */;
import serializeParamValue from "serializeParamValue" /* 1537 */;
import prepareConfigResources from "prepareConfigResources" /* 1545 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1549 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1550 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1552 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1553 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1554 */;
import _mod1555 from "module_1555" /* 1555 */;
import _mod1556 from "module_1556" /* 1556 */;
import _mod1557 from "module_1557" /* 1557 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1575 */;
import _mod1576 from "module_1576" /* 1576 */;
import _mod1577 from "module_1577" /* 1577 */;
import _mod1578 from "module_1578" /* 1578 */;
import _mod1579 from "module_1579" /* 1579 */;
import _mod1580 from "module_1580" /* 1580 */;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1499.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1521.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1533.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1524.NavigationProvider;
export const NavigationRouteContext = _mod1524.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1522.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1522.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1522.createScreenFactory;
export const ThemeContext = _mod1520.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1555.useTheme;
export const useFocusEffect = _mod1556.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1526.useNavigation;
export const useNavigationBuilder = _mod1557.useNavigationBuilder;
export const useNavigationContainerRef = _mod1576.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1501.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1577.usePreventRemove;
export const usePreventRemoveContext = _mod1578.usePreventRemoveContext;
export const useRoute = _mod1523.useRoute;
export const useStateForPath = _mod1579.useStateForPath;
export const validatePathConfig = _mod1580.validatePathConfig;