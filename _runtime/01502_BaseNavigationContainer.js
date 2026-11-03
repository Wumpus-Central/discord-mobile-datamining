// _runtime/01502_BaseNavigationContainer.js
import _mod1515 from "metro/01515__.js";
import _mod1517 from "metro/01517__.js";
import NOT_INITIALIZED_ERROR from "01525_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01526_findFocusedRoute.js";
import NavigationContainerRefContext from "01530_NavigationContainerRefContext.js";
import ThemeProvider from "01535_ThemeProvider.js";
import _mod1536 from "metro/01536__.js";
import _mod1537 from "metro/01537__.js";
import _mod1538 from "metro/01538__.js";
import _mod1539 from "metro/01539__.js";
import _mod1540 from "metro/01540__.js";
import context1 from "01541_context1.js";
import _mod1542 from "metro/01542__.js";
import NavigationContext from "01543_NavigationContext.js";
import CurrentRenderContext from "01548_CurrentRenderContext.js";
import _mod1549 from "metro/01549__.js";
import CHILD_STATE from "01550_CHILD_STATE.js";
import serializeParamValue from "01553_serializeParamValue.js";
import prepareConfigResources from "01561_prepareConfigResources.js";
import NavigationHelpersContext from "01565_NavigationHelpersContext.js";
import NavigationIndependentTree from "01566_NavigationIndependentTree.js";
import NavigationMetaContext from "01568_NavigationMetaContext.js";
import PreventRemoveContext from "01569_PreventRemoveContext.js";
import transformPreventedRoutes from "01570_transformPreventedRoutes.js";
import _mod1571 from "metro/01571__.js";
import _mod1572 from "metro/01572__.js";
import _mod1573 from "metro/01573__.js";
import NavigationStateListenerProvider from "01591_NavigationStateListenerProvider.js";
import _mod1592 from "metro/01592__.js";
import _mod1593 from "metro/01593__.js";
import _mod1594 from "metro/01594__.js";
import _mod1595 from "metro/01595__.js";
import _mod1596 from "metro/01596__.js";

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
