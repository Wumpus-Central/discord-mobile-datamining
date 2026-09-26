// === Module 17191: MultiAccountManagerNative ===

// Module 17191 (MultiAccountManagerNative)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1091 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import Constants2 from "Constants" /* 11907 */;
import _modDef17194 from "module_17194" /* 17194 */;
import Constants from "Constants" /* 1074 */;
import MultiAccountManager from "MultiAccountManager" /* 17193 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants2.SWITCH_ACCOUNTS_MODAL_KEY;
({ ComponentActions: closure_4, Routes: hasOwnProperty } = Constants);
const logger = new LoggerDefault("MultiAccountManagerNative");
let c7 = "switch-accounts-spinner-modal";
let closure_8 = 15 * DurationsDefault.Millis.SECOND;
let c9 = null;
let obj = Object.create(function MultiAccountModalManagerImpl() {
  obj = Object.create(new.target.prototype);
  obj.cancelled = false;
  obj.push = function push() {
    obj = ModalActionCreatorsDefault;
    obj.pushLazy(obj(1981)(17192, dependencyMap.paths), {}, c7);
    if (obj.cancelled) {
      ModalActionCreatorsDefault.popWithKey(c7);
      const tmpResult = ModalActionCreatorsDefault;
    }
  };
  obj.enqueue = function enqueue() {
    obj.cancelled = false;
    obj = obj(4693);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        arr.push();
      }
    }
    const ComponentDispatch = obj(1110).ComponentDispatch;
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
  obj.pushLazy(obj(1981)(17192, dependencyMap.paths), {}, c7);
  if (obj.cancelled) {
    ModalActionCreatorsDefault.popWithKey(c7);
    const tmpResult = ModalActionCreatorsDefault;
  }
};
obj.enqueue = function enqueue() {
  obj.cancelled = false;
  obj = obj(4693);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      arr.push();
    }
  }
  const ComponentDispatch = obj(1110).ComponentDispatch;
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
    user(1101).transitionTo(constants2.ME, { navigationReplace: true });
    const MobileHomeDrawerExperiment = user(4698).MobileHomeDrawerExperiment;
    if (MobileHomeDrawerExperiment.getConfig({ location: "multi-account" }).enableHome) {
      tmp(4692).setHomeDrawerState(false);
      const tmpResult = tmp(4692);
    }
    obj = user(1101);
    tmp = user;
  }
  const timerId = setTimeout(() => {
    obj = ToastActionCreatorsDefault;
    const obj2 = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS", content: null, icon: null };
    const intl = obj(1115).intl;
    obj2.content = intl.formatToPlainString(obj(1115).t.wx7O3L, { username: user.username });
    obj2.icon = _modDef17194;
    obj.open(obj2);
  }, 100);
};
prototype["onSwitchError"] = function onSwitchError() {
  obj = ToastActionCreatorsDefault;
  const obj2 = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR", content: null, icon: null };
  const intl = obj(1115).intl;
  obj2.content = intl.string(obj(1115).t.pqvKWA);
  obj2.icon = _modDef17194;
  obj.open(obj2);
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