// _runtime/01503_BaseNavigationContainer.js
import _mod1516 from "metro/01516__.js";
import _mod1518 from "metro/01518__.js";
import NOT_INITIALIZED_ERROR from "01526_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01527_findFocusedRoute.js";
import NavigationContainerRefContext from "01531_NavigationContainerRefContext.js";
import ThemeProvider from "01536_ThemeProvider.js";
import _mod1537 from "metro/01537__.js";
import _mod1538 from "metro/01538__.js";
import _mod1539 from "metro/01539__.js";
import _mod1540 from "metro/01540__.js";
import _mod1541 from "metro/01541__.js";
import context1 from "01542_context1.js";
import _mod1543 from "metro/01543__.js";
import NavigationContext from "01544_NavigationContext.js";
import CurrentRenderContext from "01549_CurrentRenderContext.js";
import _mod1550 from "metro/01550__.js";
import CHILD_STATE from "01551_CHILD_STATE.js";
import serializeParamValue from "01554_serializeParamValue.js";
import prepareConfigResources from "01562_prepareConfigResources.js";
import NavigationHelpersContext from "01566_NavigationHelpersContext.js";
import NavigationIndependentTree from "01567_NavigationIndependentTree.js";
import NavigationMetaContext from "01569_NavigationMetaContext.js";
import PreventRemoveContext from "01570_PreventRemoveContext.js";
import transformPreventedRoutes from "01571_transformPreventedRoutes.js";
import _mod1572 from "metro/01572__.js";
import _mod1573 from "metro/01573__.js";
import _mod1574 from "metro/01574__.js";
import NavigationStateListenerProvider from "01592_NavigationStateListenerProvider.js";
import _mod1593 from "metro/01593__.js";
import _mod1594 from "metro/01594__.js";
import _mod1595 from "metro/01595__.js";
import _mod1596 from "metro/01596__.js";
import _mod1597 from "metro/01597__.js";

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1516.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1538.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1550.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1541.NavigationProvider;
export const NavigationRouteContext = _mod1541.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1539.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1539.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1539.createScreenFactory;
export const ThemeContext = _mod1537.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1572.useTheme;
export const useFocusEffect = _mod1573.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1543.useNavigation;
export const useNavigationBuilder = _mod1574.useNavigationBuilder;
export const useNavigationContainerRef = _mod1593.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1518.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1594.usePreventRemove;
export const usePreventRemoveContext = _mod1595.usePreventRemoveContext;
export const useRoute = _mod1540.useRoute;
export const useStateForPath = _mod1596.useStateForPath;
export const validatePathConfig = _mod1597.validatePathConfig;
