// === Module 15263: _initialize ===

// Module 15263 (_initialize)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4720 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { PermissionStateType } from "set" /* 11578 */;
import { ME } from "ME" /* 676 */;
import { NotificationAuthorizationStatus as closure_8 } from "NativePermissionStatus" /* 4839 */;
import { NewUserTypes } from "NewUserTypes" /* 11878 */;

const require = fn;
({ NativeModules: c4, Keyboard: c5 } = get_ActivityIndicator);
let closure_10 = { REGISTER: "register", LOGIN: "login" };
let c11 = null;
initializeDefault;
class AuthManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleRegister = function handleRegister() {
      const REGISTER = constants2.REGISTER;
    };
    applyArgumentsResult.handleLogin = function handleLogin() {
      const LOGIN = constants2.LOGIN;
    };
    closure_0 = undefined;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (obj === 2) {
          obj = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            obj = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                obj = 3;
                throw arg1;
              } else if (arg0 === 2) {
                obj = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = 0;
                closure_1 = tmp2;
                closure_1_5.dismiss();
                if (closure_1_1(closure_1_2[8])()) {
                  callback();
                  obj = 3;
                } else {
                  const NativePermissionManager = obj.NativePermissionManager;
                  c3 = 1;
                  obj = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              obj = 3;
              throw arg1;
            } else if (arg0 === 2) {
              obj = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (arg1 !== closure_1_8.UNDETERMINED) {
              callback();
            }
            obj = callback(closure_1_2[9]);
            const obj3 = { onComplete: null };
            obj3[0] = callback;
            const result = obj.showPushNotificationPromptModal(obj3);
          } catch (tmp19) {
            obj = tmp;
            throw tmp19;
          }
        }
      })();
    });
    applyArgumentsResult.handlePushNotificationOptIn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult.handleRegisterWithConnection = function handleRegisterWithConnection() {
      if (obj.isIOS()) {
        const result = lib(dependencyMap[11]).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
        const tmpResult = lib(dependencyMap[11]);
      }
      const result1 = lib.handleRegisterComplete();
      obj = lib(dependencyMap[10]);
    };
    applyArgumentsResult.handleRegisterComplete = function handleRegisterComplete() {
      if (!obj.hasDeferredInvite()) {
        let tmpResult = lib(11925);
        tmpResult.setNewUser(constants.ORGANIC_REGISTERED);
      }
      tmpResult = lib(11877);
      tmpResult.startOnboarding();
      obj = lib(8918);
    };
    applyArgumentsResult.handleLoginWithConnection = function handleLoginWithConnection() {
      const result = lib.handlePushNotificationOptIn(() => {
        callback(7302).transitionToGuild(closure_7);
        const obj = callback(7302);
        callback2(709).dispatch({ type: "DEFERRED_INVITE_SHOW" });
      });
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (closure_1_10.REGISTER === c11) {
        const result = lib.handleRegisterWithConnection();
        const DCDSKAdNetworkManager2 = closure_1_4.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager2 != null) {
          const result1 = DCDSKAdNetworkManager2.updateConversionValue(1);
        }
      } else if (tmp2.LOGIN === tmp) {
        const result2 = lib.handleLoginWithConnection();
        const DCDSKAdNetworkManager = closure_1_4.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager != null) {
          const result3 = DCDSKAdNetworkManager.updateConversionValue(10);
        }
      } else {
        lib(dependencyMap[15]).transitionToGuild(ME);
        const obj = lib(dependencyMap[15]);
      }
      c11 = null;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const result = callback(7507).deleteAllInteractions();
      DCDShortcutManager = DCDShortcutManager.DCDShortcutManager;
      if (DCDShortcutManager != null) {
        DCDShortcutManager.handleLogout();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = AuthManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  const subscription1 = dispatcherDefault.subscribe("LOGIN_SUCCESS", this.handleLogin);
  const subscription2 = dispatcherDefault.subscribe("REGISTER_SUCCESS", this.handleRegister);
  const subscription3 = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  dispatcherDefault.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
  dispatcherDefault.unsubscribe("REGISTER_SUCCESS", this.handleRegister);
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const authManager = new AuthManager();
let result = require("obj132").fileFinishedImporting("modules/auth/native/AuthManager.tsx");

export default authManager;