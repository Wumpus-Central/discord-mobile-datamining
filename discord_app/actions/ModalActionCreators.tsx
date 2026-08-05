// discord_app/actions/ModalActionCreators.tsx
import { AppContext } from "ME";
import { uniqueId } from "../../_runtime/04491_uniqueId.js";
import { dispatcher } from "../Dispatcher.tsx";
import { navigationToRootTabHelper } from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import { getRootNavigationRef } from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import { getDeprecatedModalData } from "../utils/getDeprecatedModalData.tsx";

const result = require("navigationToRootTabHelper").fileFinishedImporting("actions/ModalActionCreators.tsx");

export default {
  push(modal, props) {
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = uniqueId("modal");
    }
    let APP = arg4;
    if (arg4 === undefined) {
      APP = AppContext.APP;
    }
    let obj = navigationToRootTabHelper /* navigationToRootTabHelper */;
    obj = { key: tmp, modal: getDeprecatedModalData(modal, {}, props, tmp) };
    const merged = Object.assign(arg3);
    obj.pushModal(obj);
    obj = { type: "MODAL_PUSH", modal, props, key: tmp, appContext: APP };
    dispatcher.dispatch(obj);
    return tmp;
  },
  pushLazy(outer1_1, closure_0, closure_4, navigationParams) {
    const self = this;
    const importDefault = outer1_1;
    const dependencyMap = closure_0;
    let tmp = closure_4;
    if (closure_4 === undefined) {
      tmp = uniqueId("modal");
    }
    const AppContext = tmp;
    const _require = navigationParams;
    const rootNavigationRef = _getRootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        if (outer1_1 instanceof Promise) {
          let nextPromise = outer1_1.then((arg0) => arg0.default);
        } else {
          nextPromise = outer1_1();
        }
        nextPromise.then((arg0) => self.push(arg0, closure_2, closure_3, closure_0));
      }
    }
    const obj = _getRootNavigationRef;
    return new Promise((arg0) => {
      let closure_0 = arg0;
      return outer1_1(table[6]).enqueue(() => callback(outer1_4.pushLazy(outer1_1, outer1_2, outer1_3, callback)));
    });
  },
  updateAnimation(key, SLIDE_IN_OUT) {
    let obj = dispatcher;
    obj = { type: "MODAL_UPDATE", key, props: {}, partial: true, animation: SLIDE_IN_OUT };
    obj.dispatch(obj);
  },
  pop() {
    navigationToRootTabHelper /* navigationToRootTabHelper */.popModal();
    const obj = navigationToRootTabHelper /* navigationToRootTabHelper */;
    dispatcher.dispatch({ type: "MODAL_POP" });
  },
  popWithKey(c3, onExited) {
    let obj = navigationToRootTabHelper /* navigationToRootTabHelper */;
    obj.popModal(c3, onExited);
    obj = { type: "MODAL_POP", key: c3, onExited };
    dispatcher.dispatch(obj);
  },
  popAboveKey(voiceChannelKey) {
    return navigationToRootTabHelper /* navigationToRootTabHelper */.popModalsAboveKey(voiceChannelKey);
  },
  popAll() {
    navigationToRootTabHelper /* navigationToRootTabHelper */.popAllModals();
    const obj = navigationToRootTabHelper /* navigationToRootTabHelper */;
    dispatcher.dispatch({ type: "MODAL_POP_ALL" });
    const obj2 = dispatcher;
    dispatcher.dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" });
    const obj3 = dispatcher;
    dispatcher.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
    const obj4 = dispatcher;
    dispatcher.dispatch({ type: "HIDE_ACTION_SHEET" });
    const obj5 = dispatcher;
    dispatcher.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
    const obj6 = dispatcher;
    dispatcher.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    const obj7 = dispatcher;
    dispatcher.dispatch({ type: "QUICKSWITCHER_HIDE" });
    const obj8 = dispatcher;
    dispatcher.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    const obj9 = dispatcher;
    dispatcher.dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" });
    const obj10 = dispatcher;
    dispatcher.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
  }
};