// === Module 20152: MultiAccountManagerNative ===

// Module 20152 (MultiAccountManagerNative)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1089 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import Constants2 from "Constants" /* 14717 */;
import Constants from "Constants" /* 1072 */;
import MultiAccountManager from "MultiAccountManager" /* 20154 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants2.SWITCH_ACCOUNTS_MODAL_KEY;
({ ComponentActions: closure_4, ME: hasOwnProperty } = Constants);
const logger = new LoggerDefault("MultiAccountManagerNative");
let c7 = "switch-accounts-spinner-modal";
let closure_8 = 15 * DurationsDefault.Millis.SECOND;
let c9 = null;
let obj = Object.create(function MultiAccountModalManagerImpl() {
  obj = Object.create(new.target.prototype);
  obj.cancelled = false;
  obj.push = function push() {
    obj = ModalActionCreatorsDefault;
    obj.pushLazy(obj(2118)(20153, dependencyMap.paths), {}, c7);
    if (obj.cancelled) {
      ModalActionCreatorsDefault.popWithKey(c7);
      const tmpResult = ModalActionCreatorsDefault;
    }
  };
  obj.enqueue = function enqueue() {
    obj.cancelled = false;
    obj = obj(5430);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        arr.push();
      }
    }
    const ComponentDispatch = obj(1108).ComponentDispatch;
    ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
      if (!cancelled.cancelled) {
        cancelled.push();
      }
    });
    arr = obj;
  };
  obj.pop = function pop() {
    obj.cancelled = true;
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(c7);
  };
  return obj;
}.prototype.prototype);
obj.cancelled = false;
obj.push = function push() {
  obj = ModalActionCreatorsDefault;
  obj.pushLazy(obj(2118)(20153, dependencyMap.paths), {}, c7);
  if (obj.cancelled) {
    ModalActionCreatorsDefault.popWithKey(c7);
    const tmpResult = ModalActionCreatorsDefault;
  }
};
obj.enqueue = function enqueue() {
  obj.cancelled = false;
  obj = obj(5430);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      arr.push();
    }
  }
  const ComponentDispatch = obj(1108).ComponentDispatch;
  ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
    if (!cancelled.cancelled) {
      cancelled.push();
    }
  });
  arr = obj;
};
obj.pop = function pop() {
  obj.cancelled = true;
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(c7);
};
class MultiAccountManagerNative extends tmp5 {
}
const prototype = MultiAccountManagerNative.prototype;
prototype["onSwitchStart"] = function onSwitchStart() {
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(SWITCH_ACCOUNTS_MODAL_KEY);
  logger.info("Closing fast-connect socket because of account switch logout");
  let result = obj(15).closeFastConnectSocket();
  obj.enqueue();
  if (null !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    closure_1_10.pop();
    const result = closure_1_0(dependencyMap[11]).reportAccountSwitchTimeout();
  }, closure_8);
};
prototype["onSwitchSuccess"] = function onSwitchSuccess(currentUser, navigateHome) {
  const user = currentUser;
  if (navigateHome) {
    const self = this;
    if (!this.transitionToLastChannel(currentUser.id)) {
      user(7168).transitionToGuild(closure_5);
      obj = user(7168);
    }
    const MobileHomeDrawerExperiment = user(5435).MobileHomeDrawerExperiment;
    if (MobileHomeDrawerExperiment.getConfig({ location: "multi-account" }).enableHome) {
      tmp5(5429).setHomeDrawerState(false);
      const tmp5Result = tmp5(5429);
    }
    tmp5 = user;
  }
  const timerId = setTimeout(() => {
    obj = ToastActionCreatorsDefault;
    const obj2 = { text: null, icon: null };
    const intl = obj(1113).intl;
    obj2.text = intl.formatToPlainString(obj(1113).t.wx7O3L, { username: user.username });
    obj2.icon = obj(20155).ArrowsLeftRightIcon;
    obj.open("SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS", obj2);
  }, 100);
};
prototype["onSwitchError"] = function onSwitchError() {
  obj = ToastActionCreatorsDefault;
  const obj2 = { text: null, icon: null };
  const intl = obj(1113).intl;
  obj2.text = intl.string(obj(1113).t.pqvKWA);
  obj2.icon = obj(20155).ArrowsLeftRightIcon;
  obj.open("SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR", obj2);
};
prototype["onSwitchComplete"] = function onSwitchComplete() {
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(SWITCH_ACCOUNTS_MODAL_KEY);
  obj.pop();
  if (null !== c9) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c9);
    c9 = null;
  }
};
const multiAccountManagerNative = new MultiAccountManagerNative();
let result = size.fileFinishedImporting("modules/multi_account/native/MultiAccountManagerNative.tsx");

export default multiAccountManagerNative;