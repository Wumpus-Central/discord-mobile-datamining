// === Module 1493: BaseNavigationContainer ===

// Module 1493 (BaseNavigationContainer)
import _mod1506 from "module_1506" /* 1506 */;
import _mod1508 from "module_1508" /* 1508 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1516 */;
import findFocusedRoute from "findFocusedRoute" /* 1517 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1521 */;
import ThemeProvider from "ThemeProvider" /* 1526 */;
import _mod1527 from "module_1527" /* 1527 */;
import _mod1528 from "module_1528" /* 1528 */;
import _mod1529 from "module_1529" /* 1529 */;
import _mod1530 from "module_1530" /* 1530 */;
import _mod1531 from "module_1531" /* 1531 */;
import context1 from "context1" /* 1532 */;
import _mod1533 from "module_1533" /* 1533 */;
import NavigationContext from "NavigationContext" /* 1534 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import CHILD_STATE from "CHILD_STATE" /* 1541 */;
import serializeParamValue from "serializeParamValue" /* 1544 */;
import prepareConfigResources from "prepareConfigResources" /* 1552 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1556 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1557 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1559 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1560 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1561 */;
import _mod1562 from "module_1562" /* 1562 */;
import _mod1563 from "module_1563" /* 1563 */;
import _mod1564 from "module_1564" /* 1564 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1582 */;
import _mod1583 from "module_1583" /* 1583 */;
import _mod1584 from "module_1584" /* 1584 */;
import _mod1585 from "module_1585" /* 1585 */;
import _mod1586 from "module_1586" /* 1586 */;
import _mod1587 from "module_1587" /* 1587 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1506.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1528.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1540.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1531.NavigationProvider;
export const NavigationRouteContext = _mod1531.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1529.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1529.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1529.createScreenFactory;
export const ThemeContext = _mod1527.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1562.useTheme;
export const useFocusEffect = _mod1563.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1533.useNavigation;
export const useNavigationBuilder = _mod1564.useNavigationBuilder;
export const useNavigationContainerRef = _mod1583.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1508.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1584.usePreventRemove;
export const usePreventRemoveContext = _mod1585.usePreventRemoveContext;
export const useRoute = _mod1530.useRoute;
export const useStateForPath = _mod1586.useStateForPath;
export const validatePathConfig = _mod1587.validatePathConfig;