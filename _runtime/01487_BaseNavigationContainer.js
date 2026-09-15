// _runtime/01487_BaseNavigationContainer.js
import _mod1500 from "metro/01500__.js";
import _mod1502 from "metro/01502__.js";
import NOT_INITIALIZED_ERROR from "01510_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "01511_findFocusedRoute.js";
import NavigationContainerRefContext from "01515_NavigationContainerRefContext.js";
import ThemeProvider from "01520_ThemeProvider.js";
import _mod1521 from "metro/01521__.js";
import _mod1522 from "metro/01522__.js";
import _mod1523 from "metro/01523__.js";
import _mod1524 from "metro/01524__.js";
import _mod1525 from "metro/01525__.js";
import context1 from "01526_context1.js";
import _mod1527 from "metro/01527__.js";
import NavigationContext from "01528_NavigationContext.js";
import CurrentRenderContext from "01533_CurrentRenderContext.js";
import _mod1534 from "metro/01534__.js";
import CHILD_STATE from "01535_CHILD_STATE.js";
import serializeParamValue from "01538_serializeParamValue.js";
import prepareConfigResources from "01546_prepareConfigResources.js";
import NavigationHelpersContext from "01550_NavigationHelpersContext.js";
import NavigationIndependentTree from "01551_NavigationIndependentTree.js";
import NavigationMetaContext from "01553_NavigationMetaContext.js";
import PreventRemoveContext from "01554_PreventRemoveContext.js";
import transformPreventedRoutes from "01555_transformPreventedRoutes.js";
import _mod1556 from "metro/01556__.js";
import _mod1557 from "metro/01557__.js";
import _mod1558 from "metro/01558__.js";
import NavigationStateListenerProvider from "01576_NavigationStateListenerProvider.js";
import _mod1577 from "metro/01577__.js";
import _mod1578 from "metro/01578__.js";
import _mod1579 from "metro/01579__.js";
import _mod1580 from "metro/01580__.js";
import _mod1581 from "metro/01581__.js";

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1500.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1522.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1534.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1525.NavigationProvider;
export const NavigationRouteContext = _mod1525.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1523.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1523.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1523.createScreenFactory;
export const ThemeContext = _mod1521.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1556.useTheme;
export const useFocusEffect = _mod1557.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1527.useNavigation;
export const useNavigationBuilder = _mod1558.useNavigationBuilder;
export const useNavigationContainerRef = _mod1577.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1502.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1578.usePreventRemove;
export const usePreventRemoveContext = _mod1579.usePreventRemoveContext;
export const useRoute = _mod1524.useRoute;
export const useStateForPath = _mod1580.useStateForPath;
export const validatePathConfig = _mod1581.validatePathConfig;
