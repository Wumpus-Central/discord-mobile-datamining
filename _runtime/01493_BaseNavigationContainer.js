// _runtime/01493_BaseNavigationContainer.js
import _mod1506 from "metro/01506__.js";
import _mod1508 from "metro/01508__.js";
import NOT_INITIALIZED_ERROR from "01516_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01517_findFocusedRoute.js";
import NavigationContainerRefContext from "01521_NavigationContainerRefContext.js";
import ThemeProvider from "01526_ThemeProvider.js";
import _mod1527 from "metro/01527__.js";
import _mod1528 from "metro/01528__.js";
import _mod1529 from "metro/01529__.js";
import _mod1530 from "metro/01530__.js";
import _mod1531 from "metro/01531__.js";
import context1 from "01532_context1.js";
import _mod1533 from "metro/01533__.js";
import NavigationContext from "01534_NavigationContext.js";
import CurrentRenderContext from "01539_CurrentRenderContext.js";
import _mod1540 from "metro/01540__.js";
import CHILD_STATE from "01541_CHILD_STATE.js";
import serializeParamValue from "01544_serializeParamValue.js";
import prepareConfigResources from "01552_prepareConfigResources.js";
import NavigationHelpersContext from "01556_NavigationHelpersContext.js";
import NavigationIndependentTree from "01557_NavigationIndependentTree.js";
import NavigationMetaContext from "01559_NavigationMetaContext.js";
import PreventRemoveContext from "01560_PreventRemoveContext.js";
import transformPreventedRoutes from "01561_transformPreventedRoutes.js";
import _mod1562 from "metro/01562__.js";
import _mod1563 from "metro/01563__.js";
import _mod1564 from "metro/01564__.js";
import NavigationStateListenerProvider from "01582_NavigationStateListenerProvider.js";
import _mod1583 from "metro/01583__.js";
import _mod1584 from "metro/01584__.js";
import _mod1585 from "metro/01585__.js";
import _mod1586 from "metro/01586__.js";
import _mod1587 from "metro/01587__.js";

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
