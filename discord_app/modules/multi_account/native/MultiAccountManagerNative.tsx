// discord_app/modules/multi_account/native/MultiAccountManagerNative.tsx
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";
import ME from "ME";
import "_initialize";

let c4;
let c5;
let obj = require;
({ ComponentActions: c4, Routes: c5 } = ME);
let closure_6 = new require("set")("MultiAccountManagerNative");
let c7 = "switch-accounts-spinner-modal";
let closure_8 = 15 * require("set").Millis.SECOND;
let c9 = null;
obj = Object.create(function MultiAccountModalManagerImpl() {
  let obj = Object.create(new.target.prototype);
  obj.cancelled = false;
  obj.push = function push() {
    const obj = outer1_1(outer1_2[4]);
    obj.pushLazy(obj(outer1_2[6])(outer1_2[5], outer1_2.paths), {}, outer1_7);
    if (obj.cancelled) {
      outer1_1(outer1_2[4]).popWithKey(outer1_7);
      const tmpResult = outer1_1(outer1_2[4]);
    }
  };
  obj.enqueue = function enqueue() {
    let arr = obj;
    obj.cancelled = false;
    obj = obj(outer1_2[7]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        arr = arr.push();
      }
    }
    const ComponentDispatch = obj(outer1_2[8]).ComponentDispatch;
    ComponentDispatch.subscribeOnce(outer1_4.NAVIGATOR_READY, () => {
      let arr = cancelled;
      if (!cancelled.cancelled) {
        arr = arr.push();
      }
    });
  };
  obj.pop = function pop() {
    obj.cancelled = true;
    obj = outer1_1(outer1_2[4]);
    obj.popWithKey(outer1_7);
  };
  return obj;
}.prototype.prototype);
obj.cancelled = false;
obj.push = function push() {
  const obj = outer1_1(outer1_2[4]);
  obj.pushLazy(obj(outer1_2[6])(outer1_2[5], outer1_2.paths), {}, outer1_7);
  if (obj.cancelled) {
    outer1_1(outer1_2[4]).popWithKey(outer1_7);
    const tmpResult = outer1_1(outer1_2[4]);
  }
};
obj.enqueue = function enqueue() {
  let arr = obj;
  obj.cancelled = false;
  obj = obj(outer1_2[7]);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      arr = arr.push();
    }
  }
  const ComponentDispatch = obj(outer1_2[8]).ComponentDispatch;
  ComponentDispatch.subscribeOnce(outer1_4.NAVIGATOR_READY, () => {
    let arr = cancelled;
    if (!cancelled.cancelled) {
      arr = arr.push();
    }
  });
};
obj.pop = function pop() {
  obj.cancelled = true;
  obj = outer1_1(outer1_2[4]);
  obj.popWithKey(outer1_7);
};
class MultiAccountManagerNative extends tmp5 {
}
const prototype = MultiAccountManagerNative.prototype;
prototype["onSwitchStart"] = function onSwitchStart() {
  const obj = importDefault(4399);
  obj.popWithKey(SWITCH_ACCOUNTS_MODAL_KEY);
  tmp3.info("Closing fast-connect socket because of account switch logout");
  let result = obj(15).closeFastConnectSocket();
  obj.enqueue();
  if (null !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    arr = arr.pop();
    const result = callback(table[11]).reportAccountSwitchTimeout();
  }, closure_8);
};
prototype["onSwitchSuccess"] = function onSwitchSuccess(currentUser, navigateHome) {
  let obj = currentUser;
  if (navigateHome) {
    obj = obj(1222);
    obj.transitionTo(constants.ME, { navigationReplace: true });
    const MobileHomeDrawerExperiment = obj(4050).MobileHomeDrawerExperiment;
    if (MobileHomeDrawerExperiment.getConfig({ location: "multi-account" }).enableHome) {
      tmp(4044).setHomeDrawerState(false);
      const tmpResult = tmp(4044);
    }
    tmp = obj;
  }
  const timerId = setTimeout(() => {
    let obj = outer1_1(outer1_2[15]);
    obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS", content: null, icon: null };
    const intl = currentUser(outer1_2[16]).intl;
    obj = { username: currentUser.username };
    obj[1] = intl.formatToPlainString(currentUser(outer1_2[16]).t.wx7O3L, obj);
    obj[2] = outer1_1(outer1_2[17]);
    obj.open(obj);
  }, 100);
};
prototype["onSwitchError"] = function onSwitchError(currentUser) {
  let obj = importDefault(3894);
  obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR", content: null, icon: null };
  const intl = obj(1236).intl;
  obj[1] = intl.string(obj(1236).t.pqvKWA);
  obj[2] = importDefault(16277);
  obj.open(obj);
};
prototype["onSwitchComplete"] = function onSwitchComplete() {
  const obj = importDefault(4399);
  obj.popWithKey(SWITCH_ACCOUNTS_MODAL_KEY);
  obj.pop();
  if (null !== c9) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c9);
    c9 = null;
  }
};
const multiAccountManagerNative = new MultiAccountManagerNative();
const tmp3 = new require("set")("MultiAccountManagerNative");
let result = require("timestamp").fileFinishedImporting("modules/multi_account/native/MultiAccountManagerNative.tsx");

export default multiAccountManagerNative;