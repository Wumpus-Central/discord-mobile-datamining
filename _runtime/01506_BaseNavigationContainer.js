// _runtime/01506_BaseNavigationContainer.js
import _mod1519 from "metro/01519__.js";
import _mod1521 from "metro/01521__.js";
import NOT_INITIALIZED_ERROR from "01529_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01530_findFocusedRoute.js";
import NavigationContainerRefContext from "01534_NavigationContainerRefContext.js";
import ThemeProvider from "01539_ThemeProvider.js";
import _mod1540 from "metro/01540__.js";
import _mod1541 from "metro/01541__.js";
import _mod1542 from "metro/01542__.js";
import _mod1543 from "metro/01543__.js";
import _mod1544 from "metro/01544__.js";
import context1 from "01545_context1.js";
import _mod1546 from "metro/01546__.js";
import NavigationContext from "01547_NavigationContext.js";
import CurrentRenderContext from "01552_CurrentRenderContext.js";
import _mod1553 from "metro/01553__.js";
import CHILD_STATE from "01554_CHILD_STATE.js";
import serializeParamValue from "01557_serializeParamValue.js";
import prepareConfigResources from "01565_prepareConfigResources.js";
import NavigationHelpersContext from "01569_NavigationHelpersContext.js";
import NavigationIndependentTree from "01570_NavigationIndependentTree.js";
import NavigationMetaContext from "01572_NavigationMetaContext.js";
import PreventRemoveContext from "01573_PreventRemoveContext.js";
import transformPreventedRoutes from "01574_transformPreventedRoutes.js";
import _mod1575 from "metro/01575__.js";
import _mod1576 from "metro/01576__.js";
import _mod1577 from "metro/01577__.js";
import NavigationStateListenerProvider from "01595_NavigationStateListenerProvider.js";
import _mod1596 from "metro/01596__.js";
import _mod1597 from "metro/01597__.js";
import _mod1598 from "metro/01598__.js";
import _mod1599 from "metro/01599__.js";
import _mod1600 from "metro/01600__.js";

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
