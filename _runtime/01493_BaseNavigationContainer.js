// === Module 1493: BaseNavigationContainer ===

// Module 1493 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1494 */;
import CommonActions from "CommonActions" /* 1495 */;
import _mod1506 from "module_1506" /* 1506 */;
import react from "react" /* 1508 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1516 */;
import findFocusedRoute from "findFocusedRoute" /* 1517 */;
import react2 from "react" /* 1521 */;
import ThemeProvider from "ThemeProvider" /* 1526 */;
import react3 from "react" /* 1527 */;
import _mod1528 from "module_1528" /* 1528 */;
import _mod1529 from "module_1529" /* 1529 */;
import react4 from "react" /* 1530 */;
import _mod1531 from "module_1531" /* 1531 */;
import _mod1532 from "module_1532" /* 1532 */;
import _mod1533 from "module_1533" /* 1533 */;
import react5 from "react" /* 1534 */;
import react6 from "react" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import CHILD_STATE from "CHILD_STATE" /* 1541 */;
import _mod1544 from "module_1544" /* 1544 */;
import _mod1552 from "module_1552" /* 1552 */;
import react7 from "react" /* 1556 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1557 */;
import react8 from "react" /* 1559 */;
import react9 from "react" /* 1560 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1561 */;
import react10 from "react" /* 1562 */;
import react11 from "react" /* 1563 */;
import _mod1564 from "module_1564" /* 1564 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1582 */;
import react12 from "react" /* 1583 */;
import _mod1584 from "module_1584" /* 1584 */;
import react13 from "react" /* 1585 */;
import react14 from "react" /* 1586 */;
import validatePathConfig from "validatePathConfig" /* 1587 */;

for (const key10013 in _createClass) {
  exports[key10013] = _createClass[key10013];
  continue;
}
for (const key10017 in CommonActions) {
  exports[key10017] = CommonActions[key10017];
  continue;
}
const findFocusedRoute_export = findFocusedRoute.findFocusedRoute;
const NavigationIndependentTree_export = NavigationIndependentTree.NavigationIndependentTree;
const PreventRemoveProvider_export = PreventRemoveProvider.PreventRemoveProvider;
const ThemeProvider_export = ThemeProvider.ThemeProvider;
const validatePathConfig_export = validatePathConfig.validatePathConfig;

export const BaseNavigationContainer = _mod1506.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1528.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1540.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1544.getPathFromState;
export const getStateFromPath = _mod1552.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1531.NavigationProvider;
export const NavigationRouteContext = _mod1531.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1529.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1529.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1529.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1532.useIsFocused;
export const useNavigation = _mod1533.useNavigation;
export const useNavigationBuilder = _mod1564.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1584.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };