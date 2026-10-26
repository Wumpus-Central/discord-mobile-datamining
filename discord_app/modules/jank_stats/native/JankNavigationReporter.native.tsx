// === Module 18851: JankNavigationReporter ===

// Module 18851 (JankNavigationReporter)
import RootNavigationRef from "RootNavigationRef" /* 5151 */;
import useChatLayout from "useChatLayout" /* 5153 */;
import getJankScreenName from "getJankScreenName" /* 17432 */;
import NativeJankSessionModuleDefault from "NativeJankSessionModule" /* 17436 */;
import getJankSurfaceName from "getJankSurfaceName" /* 17437 */;
import size from "module_2" /* 2 */;

const getJankScreenNameDefault = getJankScreenName;

class JankNavigationReporter {
  constructor() {
    return Object.assign({ _isAttached: false, _routeKeyAtDispatch: "Boolean", _screensBeforeDispatch: "ix" });
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
    const self = this;
    if (null == this._screensBeforeDispatch) {
      const obj = { expectedScreenIds: null, chatScreens: null };
      ({ expectedScreenIds: obj.expectedScreenIds, chatScreens: obj.chatScreens } = getJankScreenNameDefault());
      self._screensBeforeDispatch = obj;
      const tmp4 = getJankScreenNameDefault();
    }
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
    self._routeKeyAtDispatch = key;
    const result = NativeJankSessionModuleDefault.beginScreenTransition();
  }
};
prototype["handleStateSettled"] = function handleStateSettled() {
  this._screensBeforeDispatch = undefined;
  const tmp3 = getJankScreenNameDefault();
  ({ screen: require, expectedScreenIds } = tmp3);
  ({ focusedRoute, chatScreens } = tmp3);
  const result = getJankSurfaceName.composeJankSurfaceName(() => require);
  NativeJankSessionModuleDefault.nameCurrentScreen(result, expectedScreenIds);
  if (this.shouldSettleInJS(focusedRoute, this._screensBeforeDispatch, { expectedScreenIds, chatScreens })) {
    NativeJankSessionModuleDefault.settleCurrentScreen();
    const tmpResult = NativeJankSessionModuleDefault;
  }
};
prototype["shouldSettleInJS"] = function shouldSettleInJS(focusedRoute, _screensBeforeDispatch, chatScreens2) {
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
    let tmp6 = name === getJankScreenName.CHAT_PANEL_ROUTE;
    if (tmp6) {
      let chatScreens;
      if (_screensBeforeDispatch != null) {
        chatScreens = _screensBeforeDispatch.chatScreens;
      }
      let isChatLockedOpen = null != chatScreens && _screensBeforeDispatch.chatScreens === chatScreens2.chatScreens && _screensBeforeDispatch.expectedScreenIds === chatScreens2.expectedScreenIds;
      if (!isChatLockedOpen) {
        isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
        const tmp4Result = useChatLayout;
      }
      tmp6 = isChatLockedOpen;
      const tmp10 = null != chatScreens && _screensBeforeDispatch.chatScreens === chatScreens2.chatScreens && _screensBeforeDispatch.expectedScreenIds === chatScreens2.expectedScreenIds;
    }
    tmp2 = tmp6;
  }
  return tmp2;
};
let result = size.fileFinishedImporting("modules/jank_stats/native/JankNavigationReporter.native.tsx");

export default Object.assign({ _isAttached: false, _routeKeyAtDispatch: "Boolean", _screensBeforeDispatch: "ix" });