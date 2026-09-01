// discord_app/actions/ModalActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import ME from "../Constants.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import coerceMainRoute from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import uniqueIdDefault from "../../_runtime/04724_uniqueId.js";
import getDeprecatedModalDataDefault from "../utils/getDeprecatedModalData.tsx";
import { getRootNavigationRef } from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";

const AppContext = ME.AppContext;
const result = set.fileFinishedImporting("actions/ModalActionCreators.tsx");

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
    let obj = coerceMainRoute;
    obj = { modal: getDeprecatedModalDataDefault(modal, {}, props, tmp) };
    const merged = Object.assign(arg3);
    obj.pushModal(obj);
    obj = { type: "MODAL_PUSH", modal, props, key: tmp, appContext: APP };
    dispatcherDefault.dispatch(obj);
    return tmp;
  },
  pushLazy(closure_1_1, closure_0, c3, navigationParams) {
    const self = this;
    importDefault = closure_1_1;
    dependencyMap = closure_0;
    let tmp = c3;
    if (c3 === undefined) {
      tmp = uniqueIdDefault("modal");
    }
    closure_3 = tmp;
    const _require = navigationParams;
    const rootNavigationRef = require("../modules/main_tabs_v2/RootNavigationRef.native.tsx").getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        if (closure_1_1 instanceof Promise) {
          let nextPromise = closure_1_1.then((arg0) => arg0.default);
        } else {
          nextPromise = closure_1_1();
        }
        nextPromise.then((arg0) => self.push(arg0, closure_2, closure_3, closure_0));
      }
    }
    const obj = getRootNavigationRef;
    return new Promise((arg0) => {
      closure_0 = arg0;
      return callback(table[6]).enqueue(() =>
        callback(closure_1_4.pushLazy(closure_1_1, closure_1_2, closure_1_3, callback)),
      );
    });
  },
  updateAnimation(key, SLIDE_IN_OUT) {
    let obj = dispatcherDefault;
    obj = { type: "MODAL_UPDATE", key, props: {}, partial: true, animation: SLIDE_IN_OUT };
    obj.dispatch(obj);
  },
  pop() {
    coerceMainRoute.popModal();
    const obj = coerceMainRoute;
    dispatcherDefault.dispatch({ type: "MODAL_POP" });
  },
  popWithKey(c3, onExited) {
    let obj = coerceMainRoute;
    obj.popModal(c3, onExited);
    obj = { type: "MODAL_POP", key: c3, onExited };
    dispatcherDefault.dispatch(obj);
  },
  popAboveKey(voiceChannelKey) {
    return coerceMainRoute.popModalsAboveKey(voiceChannelKey);
  },
  popAll() {
    coerceMainRoute.popAllModals();
    const obj = coerceMainRoute;
    dispatcherDefault.dispatch({ type: "MODAL_POP_ALL" });
    const obj2 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" });
    const obj3 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
    const obj4 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "HIDE_ACTION_SHEET" });
    const obj5 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
    const obj6 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    const obj7 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
    const obj8 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    const obj9 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" });
    const obj10 = dispatcherDefault;
    dispatcherDefault.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
  },
};
