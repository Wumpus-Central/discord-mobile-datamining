// discord_app/modules/auth/native/AuthManager.tsx
import NewUserTypes from "NewUserTypes";
import get_ActivityIndicator from "set";
import { PermissionStateType } from "set";
import { ME } from "ME";
import { NotificationAuthorizationStatus as closure_8 } from "NativePermissionStatus";
import { NewUserTypes } from "NewUserTypes";
import "initialize";
import { dispatcher } from "../../../Dispatcher.tsx";

let c4;
let c5;
const require = arg1;
({ NativeModules: c4, Keyboard: c5 } = get_ActivityIndicator);
let closure_10 = { REGISTER: "register", LOGIN: "login" };
let c11 = null;
class AuthManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    f111532 = applyArgumentsResult;
    applyArgumentsResult.handleRegister = function handleRegister() {
      const REGISTER = constants2.REGISTER;
    };
    applyArgumentsResult.handleLogin = function handleLogin() {
      const LOGIN = constants2.LOGIN;
    };
    f111532 = undefined;
    f111532 = NewUserTypes((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
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
            return { value: "HermesInternal", done: null };
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
                let c2 = 0;
                let closure_1 = tmp2;
                outer1_5.dismiss();
                if (outer1_1(outer1_2[8])()) {
                  tmp25();
                  obj = 3;
                } else {
                  const NativePermissionManager = obj.NativePermissionManager;
                  c3 = 1;
                  obj = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
                  return obj1;
                }
                tmp25 = callback;
              }
            } else if (arg0 === 1) {
              obj = 3;
              throw arg1;
            } else if (arg0 === 2) {
              obj = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (arg1 !== outer1_8.UNDETERMINED) {
              callback();
            }
            obj = callback(outer1_2[9]);
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
        const result = lib(outer1_2[11]).setPushPermissionState(outer1_6.PROMPT_SEEN);
        const tmpResult = lib(outer1_2[11]);
      }
      const result1 = lib.handleRegisterComplete();
    };
    applyArgumentsResult.handleRegisterComplete = function handleRegisterComplete() {
      if (!obj.hasDeferredInvite()) {
        let tmpResult = tmp(12100);
        tmpResult.setNewUser(constants.ORGANIC_REGISTERED);
      }
      tmpResult = tmp(12058);
      tmpResult.startOnboarding();
    };
    applyArgumentsResult.handleLoginWithConnection = function handleLoginWithConnection() {
      const result = lib.handlePushNotificationOptIn(() => {
        callback(5957).transitionToGuild(closure_7);
        const obj = callback(5957);
        callback2(709).dispatch({ type: "DEFERRED_INVITE_SHOW" });
      });
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (outer1_10.REGISTER === outer1_11) {
        const result = lib.handleRegisterWithConnection();
        const DCDSKAdNetworkManager2 = outer1_4.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager2 != null) {
          const result1 = DCDSKAdNetworkManager2.updateConversionValue(1);
        }
      } else if (tmp2.LOGIN === tmp) {
        const result2 = lib.handleLoginWithConnection();
        const DCDSKAdNetworkManager = outer1_4.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager != null) {
          const result3 = DCDSKAdNetworkManager.updateConversionValue(10);
        }
      } else {
        lib(outer1_2[15]).transitionToGuild(outer1_7);
        const obj = lib(outer1_2[15]);
      }
      outer1_11 = null;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const result = callback(7219).deleteAllInteractions();
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
  const subscription = dispatcher.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  const obj = dispatcher;
  const subscription1 = dispatcher.subscribe("LOGIN_SUCCESS", this.handleLogin);
  const obj2 = dispatcher;
  const subscription2 = dispatcher.subscribe("REGISTER_SUCCESS", this.handleRegister);
  const obj3 = dispatcher;
  const subscription3 = dispatcher.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  dispatcher.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  const obj = dispatcher;
  dispatcher.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
  const obj2 = dispatcher;
  dispatcher.unsubscribe("REGISTER_SUCCESS", this.handleRegister);
  const obj3 = dispatcher;
  dispatcher.unsubscribe("LOGOUT", this.handleLogout);
};
const authManager = new AuthManager();
let result = require("set").fileFinishedImporting("modules/auth/native/AuthManager.tsx");

export default authManager;