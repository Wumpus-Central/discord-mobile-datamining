// _runtime/01483_BaseNavigationContainer.js
for (const key10013 in require("PrivateValueStore")) {
  let tmp2 = key10013;
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  let tmp3 = key10017;
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = require("getPartialState");
export const createNavigationContainerRef = require("createNavigationContainerRef");
export const createNavigatorFactory = require("createNavigatorFactory");
export const CurrentRenderContext = require("noop");
export const findFocusedRoute = require("findFocusedRoute");
export const getActionFromState = require("createNormalizedConfigItem");
export const getFocusedRouteNameFromRoute = require("getFocusedRouteNameFromRoute");
export const getPathFromState = require("getActiveRoute");
export const getStateFromPath = require("joinPaths");
export const NavigationContainerRefContext = require("noop");
export const NavigationContext = require("noop");
export const NavigationHelpersContext = require("noop");
export const NavigationRouteContext = require("noop");
export const PreventRemoveContext = require("noop");
export const PreventRemoveProvider = require("transformPreventedRoutes");
export const useFocusEffect = require("useFocusEffect");
export const useIsFocused = require("useIsFocused");
export const useNavigation = require("useNavigation");
export const useNavigationBuilder = require("isValidKey");
export const useNavigationContainerRef = require("useNavigationContainerRef");
export const useNavigationState = require("useNavigationState");
export const UNSTABLE_usePreventRemove = require("usePreventRemove");
export const usePreventRemoveContext = require("usePreventRemoveContext");
export const useRoute = require("useRoute");
export const validatePathConfig = require("formatToList");