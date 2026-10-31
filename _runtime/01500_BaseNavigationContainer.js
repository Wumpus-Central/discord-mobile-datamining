// _runtime/01500_BaseNavigationContainer.js
import _mod1513 from "metro/01513__.js";
import _mod1515 from "metro/01515__.js";
import NOT_INITIALIZED_ERROR from "01523_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01524_findFocusedRoute.js";
import NavigationContainerRefContext from "01528_NavigationContainerRefContext.js";
import ThemeProvider from "01533_ThemeProvider.js";
import _mod1534 from "metro/01534__.js";
import _mod1535 from "metro/01535__.js";
import _mod1536 from "metro/01536__.js";
import _mod1537 from "metro/01537__.js";
import _mod1538 from "metro/01538__.js";
import context1 from "01539_context1.js";
import _mod1540 from "metro/01540__.js";
import NavigationContext from "01541_NavigationContext.js";
import CurrentRenderContext from "01546_CurrentRenderContext.js";
import _mod1547 from "metro/01547__.js";
import CHILD_STATE from "01548_CHILD_STATE.js";
import serializeParamValue from "01551_serializeParamValue.js";
import prepareConfigResources from "01559_prepareConfigResources.js";
import NavigationHelpersContext from "01563_NavigationHelpersContext.js";
import NavigationIndependentTree from "01564_NavigationIndependentTree.js";
import NavigationMetaContext from "01566_NavigationMetaContext.js";
import PreventRemoveContext from "01567_PreventRemoveContext.js";
import transformPreventedRoutes from "01568_transformPreventedRoutes.js";
import _mod1569 from "metro/01569__.js";
import _mod1570 from "metro/01570__.js";
import _mod1571 from "metro/01571__.js";
import NavigationStateListenerProvider from "01589_NavigationStateListenerProvider.js";
import _mod1590 from "metro/01590__.js";
import _mod1591 from "metro/01591__.js";
import _mod1592 from "metro/01592__.js";
import _mod1593 from "metro/01593__.js";
import _mod1594 from "metro/01594__.js";

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
