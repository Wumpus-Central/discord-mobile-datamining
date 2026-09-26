// _runtime/01488_BaseNavigationContainer.js
import _mod1501 from "metro/01501__.js";
import _mod1503 from "metro/01503__.js";
import NOT_INITIALIZED_ERROR from "01511_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01512_findFocusedRoute.js";
import NavigationContainerRefContext from "01516_NavigationContainerRefContext.js";
import ThemeProvider from "01521_ThemeProvider.js";
import _mod1522 from "metro/01522__.js";
import _mod1523 from "metro/01523__.js";
import _mod1524 from "metro/01524__.js";
import _mod1525 from "metro/01525__.js";
import _mod1526 from "metro/01526__.js";
import context1 from "01527_context1.js";
import _mod1528 from "metro/01528__.js";
import NavigationContext from "01529_NavigationContext.js";
import CurrentRenderContext from "01534_CurrentRenderContext.js";
import _mod1535 from "metro/01535__.js";
import CHILD_STATE from "01536_CHILD_STATE.js";
import serializeParamValue from "01539_serializeParamValue.js";
import prepareConfigResources from "01547_prepareConfigResources.js";
import NavigationHelpersContext from "01551_NavigationHelpersContext.js";
import NavigationIndependentTree from "01552_NavigationIndependentTree.js";
import NavigationMetaContext from "01554_NavigationMetaContext.js";
import PreventRemoveContext from "01555_PreventRemoveContext.js";
import transformPreventedRoutes from "01556_transformPreventedRoutes.js";
import _mod1557 from "metro/01557__.js";
import _mod1558 from "metro/01558__.js";
import _mod1559 from "metro/01559__.js";
import NavigationStateListenerProvider from "01577_NavigationStateListenerProvider.js";
import _mod1578 from "metro/01578__.js";
import _mod1579 from "metro/01579__.js";
import _mod1580 from "metro/01580__.js";
import _mod1581 from "metro/01581__.js";
import _mod1582 from "metro/01582__.js";

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1501.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1523.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1535.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1526.NavigationProvider;
export const NavigationRouteContext = _mod1526.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1524.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1524.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1524.createScreenFactory;
export const ThemeContext = _mod1522.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1557.useTheme;
export const useFocusEffect = _mod1558.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1528.useNavigation;
export const useNavigationBuilder = _mod1559.useNavigationBuilder;
export const useNavigationContainerRef = _mod1578.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1503.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1579.usePreventRemove;
export const usePreventRemoveContext = _mod1580.usePreventRemoveContext;
export const useRoute = _mod1525.useRoute;
export const useStateForPath = _mod1581.useStateForPath;
export const validatePathConfig = _mod1582.validatePathConfig;
