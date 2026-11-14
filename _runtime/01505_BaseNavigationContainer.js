// _runtime/01505_BaseNavigationContainer.js
import _mod1518 from "metro/01518__.js";
import _mod1520 from "metro/01520__.js";
import NOT_INITIALIZED_ERROR from "01528_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01529_findFocusedRoute.js";
import NavigationContainerRefContext from "01533_NavigationContainerRefContext.js";
import ThemeProvider from "01538_ThemeProvider.js";
import _mod1539 from "metro/01539__.js";
import _mod1540 from "metro/01540__.js";
import _mod1541 from "metro/01541__.js";
import _mod1542 from "metro/01542__.js";
import _mod1543 from "metro/01543__.js";
import context1 from "01544_context1.js";
import _mod1545 from "metro/01545__.js";
import NavigationContext from "01546_NavigationContext.js";
import CurrentRenderContext from "01551_CurrentRenderContext.js";
import _mod1552 from "metro/01552__.js";
import CHILD_STATE from "01553_CHILD_STATE.js";
import serializeParamValue from "01556_serializeParamValue.js";
import prepareConfigResources from "01564_prepareConfigResources.js";
import NavigationHelpersContext from "01568_NavigationHelpersContext.js";
import NavigationIndependentTree from "01569_NavigationIndependentTree.js";
import NavigationMetaContext from "01571_NavigationMetaContext.js";
import PreventRemoveContext from "01572_PreventRemoveContext.js";
import transformPreventedRoutes from "01573_transformPreventedRoutes.js";
import _mod1574 from "metro/01574__.js";
import _mod1575 from "metro/01575__.js";
import _mod1576 from "metro/01576__.js";
import NavigationStateListenerProvider from "01594_NavigationStateListenerProvider.js";
import _mod1595 from "metro/01595__.js";
import _mod1596 from "metro/01596__.js";
import _mod1597 from "metro/01597__.js";
import _mod1598 from "metro/01598__.js";
import _mod1599 from "metro/01599__.js";

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1518.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1540.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1552.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1543.NavigationProvider;
export const NavigationRouteContext = _mod1543.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1541.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1541.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1541.createScreenFactory;
export const ThemeContext = _mod1539.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1574.useTheme;
export const useFocusEffect = _mod1575.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1545.useNavigation;
export const useNavigationBuilder = _mod1576.useNavigationBuilder;
export const useNavigationContainerRef = _mod1595.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1520.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1596.usePreventRemove;
export const usePreventRemoveContext = _mod1597.usePreventRemoveContext;
export const useRoute = _mod1542.useRoute;
export const useStateForPath = _mod1598.useStateForPath;
export const validatePathConfig = _mod1599.validatePathConfig;
