// === Module 1500: BaseNavigationContainer ===

// Module 1500 (BaseNavigationContainer)
import _mod1513 from "module_1513" /* 1513 */;
import _mod1515 from "module_1515" /* 1515 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1523 */;
import findFocusedRoute from "findFocusedRoute" /* 1524 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1528 */;
import ThemeProvider from "ThemeProvider" /* 1533 */;
import _mod1534 from "module_1534" /* 1534 */;
import _mod1535 from "module_1535" /* 1535 */;
import _mod1536 from "module_1536" /* 1536 */;
import _mod1537 from "module_1537" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import context1 from "context1" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import NavigationContext from "NavigationContext" /* 1541 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1546 */;
import _mod1547 from "module_1547" /* 1547 */;
import CHILD_STATE from "CHILD_STATE" /* 1548 */;
import serializeParamValue from "serializeParamValue" /* 1551 */;
import prepareConfigResources from "prepareConfigResources" /* 1559 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1563 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1564 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1566 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1567 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1568 */;
import _mod1569 from "module_1569" /* 1569 */;
import _mod1570 from "module_1570" /* 1570 */;
import _mod1571 from "module_1571" /* 1571 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1589 */;
import _mod1590 from "module_1590" /* 1590 */;
import _mod1591 from "module_1591" /* 1591 */;
import _mod1592 from "module_1592" /* 1592 */;
import _mod1593 from "module_1593" /* 1593 */;
import _mod1594 from "module_1594" /* 1594 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1513.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1535.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1547.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1538.NavigationProvider;
export const NavigationRouteContext = _mod1538.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1536.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1536.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1536.createScreenFactory;
export const ThemeContext = _mod1534.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1569.useTheme;
export const useFocusEffect = _mod1570.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1540.useNavigation;
export const useNavigationBuilder = _mod1571.useNavigationBuilder;
export const useNavigationContainerRef = _mod1590.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1515.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1591.usePreventRemove;
export const usePreventRemoveContext = _mod1592.usePreventRemoveContext;
export const useRoute = _mod1537.useRoute;
export const useStateForPath = _mod1593.useStateForPath;
export const validatePathConfig = _mod1594.validatePathConfig;