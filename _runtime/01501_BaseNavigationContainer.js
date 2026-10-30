// _runtime/01501_BaseNavigationContainer.js
import _mod1514 from "metro/01514__.js";
import _mod1516 from "metro/01516__.js";
import NOT_INITIALIZED_ERROR from "01524_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01525_findFocusedRoute.js";
import NavigationContainerRefContext from "01529_NavigationContainerRefContext.js";
import ThemeProvider from "01534_ThemeProvider.js";
import _mod1535 from "metro/01535__.js";
import _mod1536 from "metro/01536__.js";
import _mod1537 from "metro/01537__.js";
import _mod1538 from "metro/01538__.js";
import _mod1539 from "metro/01539__.js";
import context1 from "01540_context1.js";
import _mod1541 from "metro/01541__.js";
import NavigationContext from "01542_NavigationContext.js";
import CurrentRenderContext from "01547_CurrentRenderContext.js";
import _mod1548 from "metro/01548__.js";
import CHILD_STATE from "01549_CHILD_STATE.js";
import serializeParamValue from "01552_serializeParamValue.js";
import prepareConfigResources from "01560_prepareConfigResources.js";
import NavigationHelpersContext from "01564_NavigationHelpersContext.js";
import NavigationIndependentTree from "01565_NavigationIndependentTree.js";
import NavigationMetaContext from "01567_NavigationMetaContext.js";
import PreventRemoveContext from "01568_PreventRemoveContext.js";
import transformPreventedRoutes from "01569_transformPreventedRoutes.js";
import _mod1570 from "metro/01570__.js";
import _mod1571 from "metro/01571__.js";
import _mod1572 from "metro/01572__.js";
import NavigationStateListenerProvider from "01590_NavigationStateListenerProvider.js";
import _mod1591 from "metro/01591__.js";
import _mod1592 from "metro/01592__.js";
import _mod1593 from "metro/01593__.js";
import _mod1594 from "metro/01594__.js";
import _mod1595 from "metro/01595__.js";

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1514.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1536.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1548.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1539.NavigationProvider;
export const NavigationRouteContext = _mod1539.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1537.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1537.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1537.createScreenFactory;
export const ThemeContext = _mod1535.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1570.useTheme;
export const useFocusEffect = _mod1571.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1541.useNavigation;
export const useNavigationBuilder = _mod1572.useNavigationBuilder;
export const useNavigationContainerRef = _mod1591.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1516.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1592.usePreventRemove;
export const usePreventRemoveContext = _mod1593.usePreventRemoveContext;
export const useRoute = _mod1538.useRoute;
export const useStateForPath = _mod1594.useStateForPath;
export const validatePathConfig = _mod1595.validatePathConfig;
