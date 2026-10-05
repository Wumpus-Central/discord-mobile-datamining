// discord_app/actions/ModalActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import NavigationRouteUtils from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import Types from "../modules/main_tabs_v2/Types.tsx";
import uniqueIdDefault from "../../_runtime/05094_uniqueId.js";
import getDeprecatedModalDataDefault from "../utils/getDeprecatedModalData.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const AppContext = Constants.AppContext;
let obj = {
  push(modal, props) {
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = uniqueIdDefault("modal");
    }
    let APP = arg4;
    if (arg4 === undefined) {
      APP = AppContext.APP;
    }
    const pushModal = NavigationRouteUtils.pushModal;
    const obj = {
      modal: getDeprecatedModalDataDefault(modal, {}, props, tmp),
      trigger: Types.ModalOpenTrigger.AUTOMATIC,
    };
    const merged = Object.assign(arg3);
    pushModal(obj);
    const element = { type: "MODAL_PUSH", modal, props, key: tmp, appContext: APP };
    const obj2 = DispatcherDefault;
    obj2.dispatch(element);
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
    let closure_3 = tmp;
    _require = navigationParams;
    let obj = require("RootNavigationRef");
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      let nextPromise1;
      if (rootNavigationRef.isReady()) {
        let nextPromise;
        if (promise instanceof Promise) {
          nextPromise = promise.then((result) => result.default);
        } else {
          nextPromise = promise();
        }
        nextPromise1 = nextPromise.then((result) => self.push(result, merged, closure_3, navigationParams));
      }
      return nextPromise1;
    }
    nextPromise1 = new Promise((arg0) => {
      let closure_0 = arg0;
      const obj = promise(merged[7]);
      return obj.enqueue(() => closure_0(self.pushLazy(promise, merged, closure_3, closure_0)));
    });
  },
  updateAnimation(key, SLIDE_IN_OUT) {
    const element = { type: "MODAL_UPDATE", key, props: {}, partial: true, animation: SLIDE_IN_OUT };
    const obj = DispatcherDefault;
    obj.dispatch(element);
  },
  pop() {
    const obj = NavigationRouteUtils;
    obj.popModal();
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "MODAL_POP" });
  },
  popWithKey(PREMIUM_KEY, onExited) {
    const obj = NavigationRouteUtils;
    obj.popModal(PREMIUM_KEY, onExited);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "MODAL_POP", key: PREMIUM_KEY, onExited };
    obj2.dispatch(obj3);
  },
  popAboveKey(voiceChannelKey) {
    const obj = NavigationRouteUtils;
    return obj.popModalsAboveKey(voiceChannelKey);
  },
  popAll() {
    const obj = NavigationRouteUtils;
    obj.popAllModals();
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "MODAL_POP_ALL" });
    const obj3 = DispatcherDefault;
    obj3.dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" });
    const obj4 = DispatcherDefault;
    obj4.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
    const obj5 = DispatcherDefault;
    obj5.dispatch({ type: "HIDE_ACTION_SHEET" });
    const obj6 = DispatcherDefault;
    obj6.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
    const obj7 = DispatcherDefault;
    obj7.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    const obj8 = DispatcherDefault;
    obj8.dispatch({ type: "QUICKSWITCHER_HIDE" });
    const obj9 = DispatcherDefault;
    obj9.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    const obj10 = DispatcherDefault;
    obj10.dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" });
    const obj11 = DispatcherDefault;
    obj11.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
  },
};
const result = size.fileFinishedImporting("actions/ModalActionCreators.tsx");

export default obj;
