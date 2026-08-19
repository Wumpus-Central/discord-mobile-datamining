// === Module 16638: push ===

// Module 16638 (push)
import obj132 from "obj132" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import _modDef5260 from "module_5260" /* 5260 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 11586 */;
import _initializeDefault from "_initialize" /* 16640 */;
import registerAssetDefault from "registerAsset" /* 16641 */;
import ME from "ME" /* 676 */;

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
({ ComponentActions: c4, Routes: c5 } = ME);
let closure_6 = new timestampDefault("MultiAccountManagerNative");
let c7 = "switch-accounts-spinner-modal";
let closure_8 = 15 * obj132Default.Millis.SECOND;
let c9 = null;
let obj = Object.create(function MultiAccountModalManagerImpl() {
  obj = Object.create(new.target.prototype);
  obj.cancelled = false;
  obj.push = function push() {
    obj = _modDef5260;
    obj.pushLazy(obj(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), {}, closure_1_7);
    if (obj.cancelled) {
      _modDef5260.popWithKey(closure_1_7);
      const tmpResult = _modDef5260;
    }
  };
  obj.enqueue = function enqueue() {
    let arr = obj;
    obj.cancelled = false;
    obj = obj(dependencyMap[7]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        arr = arr.push();
      }
    }
    const ComponentDispatch = obj(dependencyMap[8]).ComponentDispatch;
    ComponentDispatch.subscribeOnce(closure_1_4.NAVIGATOR_READY, () => {
      let arr = cancelled;
      if (!cancelled.cancelled) {
        arr = arr.push();
      }
    });
  };
  obj.pop = function pop() {
    obj.cancelled = true;
    obj = _modDef5260;
    obj.popWithKey(closure_1_7);
  };
  return obj;
}.prototype.prototype);
obj.cancelled = false;
obj.push = function push() {
  obj = _modDef5260;
  obj.pushLazy(obj(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), {}, closure_1_7);
  if (obj.cancelled) {
    _modDef5260.popWithKey(closure_1_7);
    const tmpResult = _modDef5260;
  }
};
obj.enqueue = function enqueue() {
  let arr = obj;
  obj.cancelled = false;
  obj = obj(dependencyMap[7]);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      arr = arr.push();
    }
  }
  const ComponentDispatch = obj(dependencyMap[8]).ComponentDispatch;
  ComponentDispatch.subscribeOnce(closure_1_4.NAVIGATOR_READY, () => {
    let arr = cancelled;
    if (!cancelled.cancelled) {
      arr = arr.push();
    }
  });
};
obj.pop = function pop() {
  obj.cancelled = true;
  obj = _modDef5260;
  obj.popWithKey(closure_1_7);
};
_initializeDefault;
class MultiAccountManagerNative extends tmp5 {
}
const prototype = MultiAccountManagerNative.prototype;
prototype["onSwitchStart"] = function onSwitchStart() {
  obj = _modDef5260;
  obj.popWithKey(SWITCH_ACCOUNTS_MODAL_KEY);
  logger.info("Closing fast-connect socket because of account switch logout");
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
  obj = currentUser;
  if (navigateHome) {
    obj = obj(1222);
    obj.transitionTo(constants.ME, { navigationReplace: true });
    const MobileHomeDrawerExperiment = obj(4235).MobileHomeDrawerExperiment;
    if (MobileHomeDrawerExperiment.getConfig({ location: "multi-account" }).enableHome) {
      tmp(4229).setHomeDrawerState(false);
      const tmpResult = tmp(4229);
    }
    tmp = obj;
  }
  const timerId = setTimeout(() => {
    const intl = currentUser(dependencyMap[16]).intl;
    obj = { username: currentUser.username };
    obj[1] = intl.formatToPlainString(currentUser(dependencyMap[16]).t.wx7O3L, obj);
    obj[2] = registerAssetDefault;
    obj.open(obj);
  }, 100);
};
prototype["onSwitchError"] = function onSwitchError(currentUser) {
  obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR", content: null, icon: null };
  const intl = obj(1236).intl;
  obj[1] = intl.string(obj(1236).t.pqvKWA);
  obj[2] = registerAssetDefault;
  obj.open(obj);
};
prototype["onSwitchComplete"] = function onSwitchComplete() {
  obj = _modDef5260;
  obj.popWithKey(SWITCH_ACCOUNTS_MODAL_KEY);
  obj.pop();
  if (null !== c9) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c9);
    c9 = null;
  }
};
const multiAccountManagerNative = new MultiAccountManagerNative();
const tmp3 = new timestampDefault("MultiAccountManagerNative");
let result = obj132.fileFinishedImporting("modules/multi_account/native/MultiAccountManagerNative.tsx");

export default multiAccountManagerNative;