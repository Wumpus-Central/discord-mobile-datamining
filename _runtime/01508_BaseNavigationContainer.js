// _runtime/01508_BaseNavigationContainer.js
import _mod1521 from "metro/01521__.js";
import _mod1523 from "metro/01523__.js";
import NOT_INITIALIZED_ERROR from "01531_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01532_findFocusedRoute.js";
import NavigationContainerRefContext from "01536_NavigationContainerRefContext.js";
import ThemeProvider from "01541_ThemeProvider.js";
import _mod1542 from "metro/01542__.js";
import _mod1543 from "metro/01543__.js";
import _mod1544 from "metro/01544__.js";
import _mod1545 from "metro/01545__.js";
import _mod1546 from "metro/01546__.js";
import context1 from "01547_context1.js";
import _mod1548 from "metro/01548__.js";
import NavigationContext from "01549_NavigationContext.js";
import CurrentRenderContext from "01554_CurrentRenderContext.js";
import _mod1555 from "metro/01555__.js";
import CHILD_STATE from "01556_CHILD_STATE.js";
import serializeParamValue from "01559_serializeParamValue.js";
import prepareConfigResources from "01567_prepareConfigResources.js";
import NavigationHelpersContext from "01571_NavigationHelpersContext.js";
import NavigationIndependentTree from "01572_NavigationIndependentTree.js";
import NavigationMetaContext from "01574_NavigationMetaContext.js";
import PreventRemoveContext from "01575_PreventRemoveContext.js";
import transformPreventedRoutes from "01576_transformPreventedRoutes.js";
import _mod1577 from "metro/01577__.js";
import _mod1578 from "metro/01578__.js";
import _mod1579 from "metro/01579__.js";
import NavigationStateListenerProvider from "01597_NavigationStateListenerProvider.js";
import _mod1598 from "metro/01598__.js";
import _mod1599 from "metro/01599__.js";
import _mod1600 from "metro/01600__.js";
import _mod1601 from "metro/01601__.js";
import _mod1602 from "metro/01602__.js";

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1521.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1543.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1555.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1546.NavigationProvider;
export const NavigationRouteContext = _mod1546.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1544.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1544.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1544.createScreenFactory;
export const ThemeContext = _mod1542.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1577.useTheme;
export const useFocusEffect = _mod1578.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1548.useNavigation;
export const useNavigationBuilder = _mod1579.useNavigationBuilder;
export const useNavigationContainerRef = _mod1598.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1523.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1599.usePreventRemove;
export const usePreventRemoveContext = _mod1600.usePreventRemoveContext;
export const useRoute = _mod1545.useRoute;
export const useStateForPath = _mod1601.useStateForPath;
export const validatePathConfig = _mod1602.validatePathConfig;
