// === Module 4763: ModalActionCreators ===

// Module 4763 (ModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import uniqueIdDefault from "uniqueId" /* 4764 */;
import getDeprecatedModalDataDefault from "getDeprecatedModalData" /* 4765 */;
import size from "module_2" /* 2 */;

const AppContext = Constants.AppContext;
const result = size.fileFinishedImporting("actions/ModalActionCreators.tsx");

export default {
  push(modal, props) {
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = uniqueIdDefault("modal");
    }
    let APP = arg4;
    if (arg4 === undefined) {
      APP = AppContext.APP;
    }
    const obj = { modal: getDeprecatedModalDataDefault(modal, {}, props, tmp) };
    const merged = Object.assign(arg3);
    obj.pushModal(obj);
    const element = { type: "MODAL_PUSH", modal, props, key: tmp, appContext: APP };
    DispatcherDefault.dispatch(element);
    return tmp;
  },
  pushLazy(promise, merged) {
    const self = this;
    importDefault = promise;
    dependencyMap = merged;
    let tmp = c3;
    if (c3 === undefined) {
      tmp = uniqueIdDefault("modal");
    }
    closure_3 = tmp;
    _require = navigationParams;
    const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        if (promise instanceof Promise) {
          let nextPromise = promise.then((result) => result.default);
        } else {
          nextPromise = promise();
        }
        nextPromise.then((result) => self.push(result, closure_2, closure_3, closure_0));
      }
    }
    promise = new Promise((arg0) => {
      closure_0 = arg0;
      return promise(merged[6]).enqueue(() => closure_0(self.pushLazy(closure_1, closure_2, closure_3, closure_0)));
    });
    return promise;
  },
  updateAnimation(key, SLIDE_IN_OUT) {
    const element = { type: "MODAL_UPDATE", key, props: {}, partial: true, animation: SLIDE_IN_OUT };
    DispatcherDefault.dispatch(element);
  },
  pop() {
    NavigationRouteUtils.popModal();
    DispatcherDefault.dispatch({ type: "MODAL_POP" });
  },
  popWithKey(c3, onExited) {
    let obj = NavigationRouteUtils;
    obj.popModal(key, onExited);
    obj = { type: "MODAL_POP", key, onExited };
    DispatcherDefault.dispatch(obj);
  },
  popAboveKey(voiceChannelKey) {
    return NavigationRouteUtils.popModalsAboveKey(voiceChannelKey);
  },
  popAll() {
    NavigationRouteUtils.popAllModals();
    DispatcherDefault.dispatch({ type: "MODAL_POP_ALL" });
    DispatcherDefault.dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" });
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
    DispatcherDefault.dispatch({ type: "HIDE_ACTION_SHEET" });
    DispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
    DispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    DispatcherDefault.dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" });
    DispatcherDefault.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
  }
};