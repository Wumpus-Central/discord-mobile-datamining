// === Module 4461: ? ===

// Module 4461
import { AppContext } from "ME";

const result = require("navigationToRootTabHelper").fileFinishedImporting("actions/ModalActionCreators.tsx");

export default {
  push(modal, props) {
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = importDefault(4462)("modal");
    }
    let APP = arg4;
    if (arg4 === undefined) {
      APP = AppContext.APP;
    }
    let obj = require(4106) /* navigationToRootTabHelper */;
    obj = { key: tmp, modal: importDefault(4463)(modal, {}, props, tmp) };
    const merged = Object.assign(arg3);
    obj.pushModal(obj);
    obj = { type: "MODAL_PUSH", modal, props, key: tmp, appContext: APP };
    importDefault(709).dispatch(obj);
    return tmp;
  },
  pushLazy(outer1_1, closure_0, closure_4, navigationParams) {
    const self = this;
    const importDefault = outer1_1;
    const dependencyMap = closure_0;
    let tmp = closure_4;
    if (closure_4 === undefined) {
      tmp = importDefault(4462)("modal");
    }
    const AppContext = tmp;
    const _require = navigationParams;
    const rootNavigationRef = _require(4107).getRootNavigationRef();
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
    const obj = _require(4107);
    return new Promise((arg0) => {
      let closure_0 = arg0;
      return outer1_1(table[6]).enqueue(() => callback(outer1_4.pushLazy(outer1_1, outer1_2, outer1_3, callback)));
    });
  },
  updateAnimation(key, SLIDE_IN_OUT) {
    let obj = importDefault(709);
    obj = { type: "MODAL_UPDATE", key, props: {}, partial: true, animation: SLIDE_IN_OUT };
    obj.dispatch(obj);
  },
  pop() {
    require(4106) /* navigationToRootTabHelper */.popModal();
    const obj = require(4106) /* navigationToRootTabHelper */;
    importDefault(709).dispatch({ type: "MODAL_POP" });
  },
  popWithKey(c3, onExited) {
    let obj = require(4106) /* navigationToRootTabHelper */;
    obj.popModal(c3, onExited);
    obj = { type: "MODAL_POP", key: c3, onExited };
    importDefault(709).dispatch(obj);
  },
  popAboveKey(voiceChannelKey) {
    return require(4106) /* navigationToRootTabHelper */.popModalsAboveKey(voiceChannelKey);
  },
  popAll() {
    require(4106) /* navigationToRootTabHelper */.popAllModals();
    const obj = require(4106) /* navigationToRootTabHelper */;
    importDefault(709).dispatch({ type: "MODAL_POP_ALL" });
    const obj2 = importDefault(709);
    importDefault(709).dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" });
    const obj3 = importDefault(709);
    importDefault(709).dispatch({ type: "GUILD_SETTINGS_CLOSE" });
    const obj4 = importDefault(709);
    importDefault(709).dispatch({ type: "HIDE_ACTION_SHEET" });
    const obj5 = importDefault(709);
    importDefault(709).dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
    const obj6 = importDefault(709);
    importDefault(709).dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    const obj7 = importDefault(709);
    importDefault(709).dispatch({ type: "QUICKSWITCHER_HIDE" });
    const obj8 = importDefault(709);
    importDefault(709).dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    const obj9 = importDefault(709);
    importDefault(709).dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" });
    const obj10 = importDefault(709);
    importDefault(709).dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
  }
};