// === Module 18705: MultiAccountManagerNative ===

// Module 18705 (MultiAccountManagerNative)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1104 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5645 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import Constants2 from "Constants" /* 13198 */;
import Constants from "Constants" /* 1087 */;
import MultiAccountManager from "MultiAccountManager" /* 18707 */;
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
    obj.pushLazy(obj(2002)(18706, dependencyMap.paths), {}, c7);
    if (obj.cancelled) {
      ModalActionCreatorsDefault.popWithKey(c7);
      const tmpResult = ModalActionCreatorsDefault;
    }
  };
  obj.enqueue = function enqueue() {
    obj.cancelled = false;
    obj = obj(5133);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        arr.push();
      }
    }
    const ComponentDispatch = obj(1123).ComponentDispatch;
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
  obj.pushLazy(obj(2002)(18706, dependencyMap.paths), {}, c7);
  if (obj.cancelled) {
    ModalActionCreatorsDefault.popWithKey(c7);
    const tmpResult = ModalActionCreatorsDefault;
  }
};
obj.enqueue = function enqueue() {
  obj.cancelled = false;
  obj = obj(5133);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      arr.push();
    }
  }
  const ComponentDispatch = obj(1123).ComponentDispatch;
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
    user(1114).transitionTo(constants2.ME, { navigationReplace: true });
    const MobileHomeDrawerExperiment = user(5138).MobileHomeDrawerExperiment;
    if (MobileHomeDrawerExperiment.getConfig({ location: "multi-account" }).enableHome) {
      tmp(5132).setHomeDrawerState(false);
      const tmpResult = tmp(5132);
    }
    obj = user(1114);
    tmp = user;
  }
  const timerId = setTimeout(() => {
    obj = ToastActionCreatorsDefault;
    const obj2 = { text: null, icon: null };
    const intl = obj(1128).intl;
    obj2.text = intl.formatToPlainString(obj(1128).t.wx7O3L, { username: user.username });
    obj2.icon = obj(18708).ArrowsLeftRightIcon;
    obj.open("SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS", obj2);
  }, 100);
};
prototype["onSwitchError"] = function onSwitchError() {
  obj = ToastActionCreatorsDefault;
  const obj2 = { text: null, icon: null };
  const intl = obj(1128).intl;
  obj2.text = intl.string(obj(1128).t.pqvKWA);
  obj2.icon = obj(18708).ArrowsLeftRightIcon;
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