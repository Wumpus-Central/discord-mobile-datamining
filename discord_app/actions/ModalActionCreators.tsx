// === Module 5260: ? ===

// Module 5260
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import uniqueIdDefault from "uniqueId" /* 5261 */;
import getDeprecatedModalDataDefault from "getDeprecatedModalData" /* 5262 */;

const AppContext = ME.AppContext;
const result = obj132.fileFinishedImporting("actions/ModalActionCreators.tsx");

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
    let obj = { modal: getDeprecatedModalDataDefault(modal, {}, props, tmp) };
    const merged = Object.assign(arg3);
    obj.pushModal(obj);
    obj = { type: "MODAL_PUSH", modal, props, key: tmp, appContext: APP };
    dispatcherDefault.dispatch(obj);
    return tmp;
  },
  pushLazy(closure_1_1, closure_0, closure_4, navigationParams) {
    const self = this;
    importDefault = closure_1_1;
    dependencyMap = closure_0;
    let tmp = closure_4;
    if (closure_4 === undefined) {
      tmp = uniqueIdDefault("modal");
    }
    closure_3 = tmp;
    const _require = navigationParams;
    const rootNavigationRef = _require(4230).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        if (closure_1_1 instanceof Promise) {
          let nextPromise = closure_1_1.then((result) => result.default);
        } else {
          nextPromise = closure_1_1();
        }
        nextPromise.then((result) => self.push(result, closure_2, closure_3, closure_0));
      }
    }
    const obj = _require(4230);
    return new Promise((arg0) => {
      closure_0 = arg0;
      return callback(table[6]).enqueue(() => callback(self.pushLazy(closure_1_1, closure_1_2, closure_1_3, callback)));
    });
  },
  updateAnimation(closure_1_20, SLIDE_IN_OUT) {
    const obj = { type: "MODAL_UPDATE", key: closure_1_20, props: {}, partial: true, animation: SLIDE_IN_OUT };
    obj.dispatch(obj);
  },
  pop() {
    coerceMainRoute.popModal();
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
    dispatcherDefault.dispatch({ type: "MODAL_POP_ALL" });
    dispatcherDefault.dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" });
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
    dispatcherDefault.dispatch({ type: "HIDE_ACTION_SHEET" });
    dispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
    dispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    dispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
    dispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    dispatcherDefault.dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" });
    dispatcherDefault.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
  }
};