// discord_app/modules/multi_account/native/MultiAccountManagerNative.tsx
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import _modDef5260 from "module_5260" /* 5260 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 11586 */;
import _initializeDefault from "_initialize" /* 16640 */;
import registerAssetDefault from "registerAsset" /* 16641 */;
import ME from "ME" /* 676 */;

let obj = require;
const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
({ ComponentActions: c4, Routes: c5 } = ME);
let closure_6 = new timestampDefault("MultiAccountManagerNative");
let c7 = "switch-accounts-spinner-modal";
let closure_8 = 15 * setDefault.Millis.SECOND;
let c9 = null;
obj = Object.create(function MultiAccountModalManagerImpl() {
  obj = Object.create(new.target.prototype);
  obj.cancelled = false;
  obj.push = function push() {
    obj = closure_1_1(closure_1_2[4]);
    obj.pushLazy(obj(closure_1_2[6])(closure_1_2[5], closure_1_2.paths), {}, closure_1_7);
    if (obj.cancelled) {
      closure_1_1(closure_1_2[4]).popWithKey(closure_1_7);
      const tmpResult = closure_1_1(closure_1_2[4]);
    }
  };
  obj.enqueue = function enqueue() {
    let arr = obj;
    obj.cancelled = false;
    obj = obj(closure_1_2[7]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        arr = arr.push();
      }
    }
    const ComponentDispatch = obj(closure_1_2[8]).ComponentDispatch;
    ComponentDispatch.subscribeOnce(closure_1_4.NAVIGATOR_READY, () => {
      let arr = cancelled;
      if (!cancelled.cancelled) {
        arr = arr.push();
      }
    });
  };
  obj.pop = function pop() {
    obj.cancelled = true;
    obj = closure_1_1(closure_1_2[4]);
    obj.popWithKey(closure_1_7);
  };
  return obj;
}.prototype.prototype);
obj.cancelled = false;
obj.push = function push() {
  obj = closure_1_1(closure_1_2[4]);
  obj.pushLazy(obj(closure_1_2[6])(closure_1_2[5], closure_1_2.paths), {}, closure_1_7);
  if (obj.cancelled) {
    closure_1_1(closure_1_2[4]).popWithKey(closure_1_7);
    const tmpResult = closure_1_1(closure_1_2[4]);
  }
};
obj.enqueue = function enqueue() {
  let arr = obj;
  obj.cancelled = false;
  obj = obj(closure_1_2[7]);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      arr = arr.push();
    }
  }
  const ComponentDispatch = obj(closure_1_2[8]).ComponentDispatch;
  ComponentDispatch.subscribeOnce(closure_1_4.NAVIGATOR_READY, () => {
    let arr = cancelled;
    if (!cancelled.cancelled) {
      arr = arr.push();
    }
  });
};
obj.pop = function pop() {
  obj.cancelled = true;
  obj = closure_1_1(closure_1_2[4]);
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
    obj = closure_1_1(closure_1_2[15]);
    obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS", content: null, icon: null };
    const intl = currentUser(closure_1_2[16]).intl;
    obj = { username: currentUser.username };
    obj[1] = intl.formatToPlainString(currentUser(closure_1_2[16]).t.wx7O3L, obj);
    obj[2] = closure_1_1(closure_1_2[17]);
    obj.open(obj);
  }, 100);
};
prototype["onSwitchError"] = function onSwitchError(currentUser) {
  obj = dispatcherDefault;
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
let result = set.fileFinishedImporting("modules/multi_account/native/MultiAccountManagerNative.tsx");

export default multiAccountManagerNative;