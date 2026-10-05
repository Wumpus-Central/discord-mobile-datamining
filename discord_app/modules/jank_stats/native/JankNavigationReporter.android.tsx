// discord_app/modules/jank_stats/native/JankNavigationReporter.android.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import useChatLayout from "../../chat/native/useChatLayout.tsx";
import getJankScreenName from "getJankScreenName.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx";
import getJankSurfaceName from "getJankSurfaceName.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const getJankScreenNameDefault = getJankScreenName;

class JankNavigationReporter {
  constructor() {
    return Object.assign({ _isAttached: false, _routeKeyAtDispatch: "a" });
  }
  attach() {
    const self = this;
    if (!this._isAttached) {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
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
  }
  handleDispatch(noop) {
    const tmp = noop;
    if (!tmp) {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
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
      const obj2 = react_nativeDefault;
      if (obj2 != null) {
        const result = obj2.beginScreenTransition();
      }
    }
  }
  handleStateSettled() {
    let expectedScreenIds;
    let focusedRoute;
    const tmp3 = getJankScreenNameDefault();
    const screen = tmp3.screen;
    ({ expectedScreenIds, focusedRoute } = tmp3);
    const obj = getJankSurfaceName;
    const result = obj.composeJankSurfaceName(() => screen);
    const obj2 = react_nativeDefault;
    if (obj2 != null) {
      obj2.nameCurrentScreen(result, expectedScreenIds);
    }
    if (this.shouldSettleInJS(focusedRoute)) {
      const tmpResult = react_nativeDefault;
      if (tmpResult != null) {
        tmpResult.settleCurrentScreen();
      }
    }
  }
  shouldSettleInJS(focusedRoute) {
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
        const tmp4Result = useChatLayout;
        isChatLockedOpen = tmp4Result.getChatLayout().isChatLockedOpen;
      }
      tmp2 = isChatLockedOpen;
    }
    return tmp2;
  }
}
const prototype = JankNavigationReporter.prototype;
const prototype2 = JankNavigationReporter.prototype;
let result = size.fileFinishedImporting("modules/jank_stats/native/JankNavigationReporter.android.tsx");

export default Object.assign({ _isAttached: false, _routeKeyAtDispatch: "a" });
