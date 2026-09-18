// === Module 17724: JankNavigationReporter ===

// Module 17724 (JankNavigationReporter)
import RootNavigationRef from "RootNavigationRef" /* 4580 */;
import useChatLayout from "useChatLayout" /* 4582 */;
import getJankScreenName from "getJankScreenName" /* 16262 */;
import NativeJankStatsModuleDefault from "NativeJankStatsModule" /* 16266 */;
import getJankSurfaceName from "getJankSurfaceName" /* 16267 */;
import size from "module_2" /* 2 */;

const getJankScreenNameDefault = getJankScreenName;

class JankNavigationReporter {
  constructor() {
    return Object.assign({ _isAttached: false, _routeKeyAtDispatch: "PX_16" });
  }
}
const prototype = JankNavigationReporter.prototype;
prototype["attach"] = function attach() {
  const self = this;
  if (!this._isAttached) {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("__unsafe_action__", (data) => {
        self.handleDispatch(data.data.noop);
      });
      rootNavigationRef.addListener("state", () => {
        self.handleStateSettled();
      });
      tmp._isAttached = true;
    }
  }
};
prototype["handleDispatch"] = function handleDispatch(noop) {
  if (!noop) {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let key;
    if (rootNavigationRef != null) {
      const getCurrentRoute = rootNavigationRef.getCurrentRoute;
      if (getCurrentRoute != null) {
        const currentRoute = getCurrentRoute();
        if (currentRoute != null) {
          key = currentRoute.key;
        }
      }
    }
    const self = this;
    this._routeKeyAtDispatch = key;
    const obj2 = NativeJankStatsModuleDefault;
    if (obj2 != null) {
      const result = obj2.beginScreenTransition();
    }
  }
};
prototype["handleStateSettled"] = function handleStateSettled() {
  const tmp3 = getJankScreenNameDefault();
  const screen = tmp3.screen;
  ({ expectedScreenIds, focusedRoute } = tmp3);
  const result = getJankSurfaceName.composeJankSurfaceName(() => screen);
  const obj2 = NativeJankStatsModuleDefault;
  if (obj2 != null) {
    obj2.nameCurrentScreen(result, expectedScreenIds);
  }
  if (this.shouldSettleInJS(focusedRoute)) {
    const tmpResult = NativeJankStatsModuleDefault;
    if (tmpResult != null) {
      tmpResult.settleCurrentScreen();
    }
  }
};
prototype["shouldSettleInJS"] = function shouldSettleInJS(focusedRoute) {
  let key;
  if (focusedRoute != null) {
    key = focusedRoute.key;
  }
  let tmp2 = null != key;
  if (tmp2) {
    const self = this;
    tmp2 = focusedRoute.key === this._routeKeyAtDispatch;
  }
  if (!tmp2) {
    let name;
    if (focusedRoute != null) {
      name = focusedRoute.name;
    }
    let isChatLockedOpen = name === getJankScreenName.CHAT_PANEL_ROUTE;
    if (isChatLockedOpen) {
      isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
      const tmp4Result = useChatLayout;
    }
    tmp2 = isChatLockedOpen;
  }
  return tmp2;
};
let result = size.fileFinishedImporting("modules/jank_stats/native/JankNavigationReporter.android.tsx");

export default Object.assign({ _isAttached: false, _routeKeyAtDispatch: "PX_16" });