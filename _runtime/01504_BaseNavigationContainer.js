// _runtime/01504_BaseNavigationContainer.js
import _mod1517 from "metro/01517__.js";
import _mod1519 from "metro/01519__.js";
import NOT_INITIALIZED_ERROR from "01527_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01528_findFocusedRoute.js";
import NavigationContainerRefContext from "01532_NavigationContainerRefContext.js";
import ThemeProvider from "01537_ThemeProvider.js";
import _mod1538 from "metro/01538__.js";
import _mod1539 from "metro/01539__.js";
import _mod1540 from "metro/01540__.js";
import _mod1541 from "metro/01541__.js";
import _mod1542 from "metro/01542__.js";
import context1 from "01543_context1.js";
import _mod1544 from "metro/01544__.js";
import NavigationContext from "01545_NavigationContext.js";
import CurrentRenderContext from "01550_CurrentRenderContext.js";
import _mod1551 from "metro/01551__.js";
import CHILD_STATE from "01552_CHILD_STATE.js";
import serializeParamValue from "01555_serializeParamValue.js";
import prepareConfigResources from "01563_prepareConfigResources.js";
import NavigationHelpersContext from "01567_NavigationHelpersContext.js";
import NavigationIndependentTree from "01568_NavigationIndependentTree.js";
import NavigationMetaContext from "01570_NavigationMetaContext.js";
import PreventRemoveContext from "01571_PreventRemoveContext.js";
import transformPreventedRoutes from "01572_transformPreventedRoutes.js";
import _mod1573 from "metro/01573__.js";
import _mod1574 from "metro/01574__.js";
import _mod1575 from "metro/01575__.js";
import NavigationStateListenerProvider from "01593_NavigationStateListenerProvider.js";
import _mod1594 from "metro/01594__.js";
import _mod1595 from "metro/01595__.js";
import _mod1596 from "metro/01596__.js";
import _mod1597 from "metro/01597__.js";
import _mod1598 from "metro/01598__.js";

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
