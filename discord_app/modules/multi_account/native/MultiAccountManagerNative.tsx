// discord_app/modules/multi_account/native/MultiAccountManagerNative.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import Constants2 from "../Constants.tsx";
import _modDef17429 from "../../../../_runtime/metro/17429__.js";
import Constants from "../../../Constants.tsx";
import MultiAccountManager from "../MultiAccountManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SWITCH_ACCOUNTS_MODAL_KEY = Constants2.SWITCH_ACCOUNTS_MODAL_KEY;
({ ComponentActions: closure_4, Routes: hasOwnProperty } = Constants);
const logger = new LoggerDefault("MultiAccountManagerNative");
let c7 = "switch-accounts-spinner-modal";
let closure_8 = 15 * DurationsDefault.Millis.SECOND;
let c9 = null;
let obj = Object.create(
  function MultiAccountModalManagerImpl() {
    obj = Object.create(new.target.prototype);
    obj.cancelled = false;
    obj.push = function push() {
      obj = ModalActionCreatorsDefault;
      obj.pushLazy(obj(1896)(17427, dependencyMap.paths), {}, c7);
      if (obj.cancelled) {
        ModalActionCreatorsDefault.popWithKey(c7);
        const tmpResult = ModalActionCreatorsDefault;
      }
    };
    obj.enqueue = function enqueue() {
      let arr = obj;
      obj.cancelled = false;
      obj = obj(4418);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          arr = arr.push();
        }
      }
      const ComponentDispatch = obj(1109).ComponentDispatch;
      ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
        let arr = cancelled;
        if (!cancelled.cancelled) {
          arr = arr.push();
        }
      });
    };
    obj.pop = function pop() {
      obj.cancelled = true;
      obj = ModalActionCreatorsDefault;
      obj.popWithKey(c7);
    };
    return obj;
  }.prototype.prototype,
);
obj.cancelled = false;
obj.push = function push() {
  obj = ModalActionCreatorsDefault;
  obj.pushLazy(obj(1896)(17427, dependencyMap.paths), {}, c7);
  if (obj.cancelled) {
    ModalActionCreatorsDefault.popWithKey(c7);
    const tmpResult = ModalActionCreatorsDefault;
  }
};
obj.enqueue = function enqueue() {
  let arr = obj;
  obj.cancelled = false;
  obj = obj(4418);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      arr = arr.push();
    }
  }
  const ComponentDispatch = obj(1109).ComponentDispatch;
  ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
    let arr = cancelled;
    if (!cancelled.cancelled) {
      arr = arr.push();
    }
  });
};
obj.pop = function pop() {
  obj.cancelled = true;
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(c7);
};
class MultiAccountManagerNative extends tmp5 {}
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
    user(1100).transitionTo(constants2.ME, { navigationReplace: true });
    const MobileHomeDrawerExperiment = user(4423).MobileHomeDrawerExperiment;
    if (MobileHomeDrawerExperiment.getConfig({ location: "multi-account" }).enableHome) {
      tmp(4417).setHomeDrawerState(false);
      const tmpResult = tmp(4417);
    }
    obj = user(1100);
    tmp = user;
  }
  const timerId = setTimeout(() => {
    obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS", content: null, icon: null };
    const intl = obj(1114).intl;
    obj = { username: user.username };
    obj.content = intl.formatToPlainString(obj(1114).t.wx7O3L, obj);
    obj.icon = _modDef17429;
    obj.open(obj);
  }, 100);
};
prototype["onSwitchError"] = function onSwitchError() {
  obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR", content: null, icon: null };
  const intl = obj(1114).intl;
  obj.content = intl.string(obj(1114).t.pqvKWA);
  obj.icon = _modDef17429;
  obj.open(obj);
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
