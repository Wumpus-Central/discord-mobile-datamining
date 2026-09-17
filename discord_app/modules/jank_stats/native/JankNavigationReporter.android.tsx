// discord_app/modules/jank_stats/native/JankNavigationReporter.android.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import useChatLayout from "../../chat/native/useChatLayout.tsx";
import getJankScreenName from "getJankScreenName.tsx";
import NativeJankStatsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx";
import getJankSurfaceName from "getJankSurfaceName.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
