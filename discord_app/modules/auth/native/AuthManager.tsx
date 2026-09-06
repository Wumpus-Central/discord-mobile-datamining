// discord_app/modules/auth/native/AuthManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import SentMessageIntentsHandlerDefault from "../../messages/SentMessageIntentsHandler.android.tsx";
import PushNotificationActionCreators from "../../../actions/native/PushNotificationActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules: closure_4, Keyboard: hasOwnProperty } = get_ActivityIndicator);
const PermissionStateType = fn(12409).PermissionStateType;
const ME = fn(1074).ME;
let closure_8 = fn(4770).NotificationAuthorizationStatus;
const NewUserTypes = fn(12705).NewUserTypes;
let closure_10 = { REGISTER: "register", LOGIN: "login" };
let c11 = null;
class AuthManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleRegister = function handleRegister() {
      LOGIN = constants2.REGISTER;
    };
    applyArgumentsResult.handleLogin = function handleLogin() {
      LOGIN = constants2.LOGIN;
    };
    closure_129_0 = undefined;
    closure_129_0 = closure_3(async (arg0, value) => {
      if (DCDShortcutManager === 2) {
        DCDShortcutManager = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          DCDShortcutManager = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              DCDShortcutManager = 3;
              throw value;
            } else if (arg0 === 2) {
              DCDShortcutManager = 3;
              obj = { value, done: true };
              return obj;
            } else {
              dependencyMap = 0;
              closure_129_0 = applyArgumentsResult;
              closure_1_5.dismiss();
              if (tmp2(1953)()) {
                tmp24();
                DCDShortcutManager = 3;
              } else {
                const NativePermissionManager = DCDShortcutManager.NativePermissionManager;
                c3 = 1;
                DCDShortcutManager = 1;
                const obj1 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
                return obj1;
              }
              tmp24 = applyArgumentsResult;
            }
          } else if (arg0 === 1) {
            DCDShortcutManager = 3;
            throw value;
          } else if (arg0 === 2) {
            DCDShortcutManager = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else if (value !== constants.UNDETERMINED) {
            closure_129_0();
          }
          obj = applyArgumentsResult(15998);
          const obj3 = { onComplete: closure_129_0 };
          const result = obj.showPushNotificationPromptModal(obj3);
        } catch (tmp19) {
          DCDShortcutManager = tmp;
          throw tmp19;
        }
      }
    });
    applyArgumentsResult.handlePushNotificationOptIn = function () {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult.handleRegisterWithConnection = function handleRegisterWithConnection() {
      if (obj.isIOS()) {
        const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
        const tmpResult = PushNotificationActionCreators;
      }
      const result1 = applyArgumentsResult.handleRegisterComplete();
    };
    applyArgumentsResult.handleRegisterComplete = function handleRegisterComplete() {
      if (!obj.hasDeferredInvite()) {
        let tmpResult = tmp(12746);
        tmpResult.setNewUser(constants.ORGANIC_REGISTERED);
      }
      tmpResult = tmp(12704);
      tmpResult.startOnboarding();
    };
    applyArgumentsResult.handleLoginWithConnection = function handleLoginWithConnection() {
      const result = applyArgumentsResult.handlePushNotificationOptIn(() => {
        closure_1_0(7342).transitionToGuild(closure_1_7);
        const obj = closure_1_0(7342);
        closure_1_1(573).dispatch({ type: "DEFERRED_INVITE_SHOW" });
      });
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (constants2.REGISTER === c11) {
        const result = applyArgumentsResult.handleRegisterWithConnection();
        const DCDSKAdNetworkManager2 = React4.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager2 != null) {
          const result1 = DCDSKAdNetworkManager2.updateConversionValue(1);
        }
      } else if (tmp2.LOGIN === tmp) {
        const result2 = applyArgumentsResult.handleLoginWithConnection();
        const DCDSKAdNetworkManager = React4.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager != null) {
          const result3 = DCDSKAdNetworkManager.updateConversionValue(10);
        }
      } else {
        transitionToGuild.transitionToGuild(ME);
      }
      c11 = null;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const result = SentMessageIntentsHandlerDefault.deleteAllInteractions();
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
  const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  const subscription1 = DispatcherDefault.subscribe("LOGIN_SUCCESS", this.handleLogin);
  const subscription2 = DispatcherDefault.subscribe("REGISTER_SUCCESS", this.handleRegister);
  const subscription3 = DispatcherDefault.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  DispatcherDefault.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
  DispatcherDefault.unsubscribe("REGISTER_SUCCESS", this.handleRegister);
  DispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const authManager = new AuthManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/AuthManager.tsx");

export default authManager;
