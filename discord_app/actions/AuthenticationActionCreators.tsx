// === Module 6593: AuthenticationActionCreators ===

// Module 6593 (AuthenticationActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TokenManagerAll from "TokenManager" /* 1099 */;
import router_utils from "router_utils" /* 1100 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4461 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4554 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConsentStore from "ConsentStore" /* 6595 */;

require = fn;
function handleLogout(source) {
  let DEFAULT_LOGGED_OUT = CHANNELResult;
  if (CHANNELResult === undefined) {
    DEFAULT_LOGGED_OUT = constants2.DEFAULT_LOGGED_OUT;
  }
  obj = CrossPlatformNativeUtilsDefault;
  const result = obj.clearNavigationHistory();
  const id = AuthenticationStore.getId();
  obj = { type: "LOGOUT", userId: id };
  const merged = Object.assign(undefined);
  let tmp2Result = DispatcherDefault;
  tmp2Result.dispatch(obj).catch((error) => {
    logger.error("Error while dispatching LOGOUT", error);
    if (DiscordErrors != null) {
      DiscordErrors.softCrash(error);
    }
    throw error;
  });
  if (null != DEFAULT_LOGGED_OUT) {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      tmp2Result = ModalActionCreatorsDefault;
      tmp2Result.popAll();
      obj = { index: 0, routes: null };
      const items = [{ name: "auth" }];
      obj.routes = items;
      rootNavigationRef.reset(obj);
    } else {
      const obj1 = { source };
      router_utils.transitionTo(DEFAULT_LOGGED_OUT, obj1);
      const tmp12Result = router_utils;
    }
  }
  const dispatchResult = tmp2Result.dispatch(obj);
}
const setPromoEmailConsentState = fn(6594).setPromoEmailConsentState;
const Constants = fn(1074);
({ Endpoints: closure_9, DEVICE_TOKEN: c10, DEVICE_VOIP_TOKEN: closure_11, AbortCodes: closure_12, Routes: map1 } = Constants);
const PushNotificationConstants = fn(6596);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_14, getDevicePushProvider: closure_15 } = PushNotificationConstants);
const logger = new LoggerDefault("AuthenticationActionCreators");
let PasswordResetResult = { MFA: "MFA", SUCCESS: "SUCCESS" };
PasswordResetResult = {
  startSession(token) {
    DispatcherDefault.wait(() => {
      obj = { type: "START_SESSION", token };
      obj.dispatch(obj);
    });
  },
  login(self) {
    self = this;
    const login = self.login;
    const password = self.password;
    ({ invite, isMultiAccount } = self);
    ({ undelete, source, giftCodeSKUId } = self);
    let trackedActionData = login(self[8]);
    trackedActionData.dispatch({ type: "LOGIN", isPasswordAttempt: true });
    let obj1 = login(self[12]);
    const request = { url: closure_9.LOGIN, body: { login, password, undelete, login_source: source, gift_code_sku_id: giftCodeSKUId }, retries: 2, oldFormErrors: true, trackedActionData: null };
    trackedActionData = { event: isMultiAccount(self[13]).NetworkActionNames.USER_LOGIN, properties: null };
    let code;
    if (invite != null) {
      code = invite.code;
    }
    trackedActionData.properties = { invite_code: code, is_multi_account: isMultiAccount };
    request.trackedActionData = trackedActionData;
    if (isMultiAccount) {
      trackedActionData = { headers: { authorization: "" } };
      obj1 = trackedActionData;
    } else {
      obj1 = {};
    }
    const merged = Object.assign(obj1);
    request.rejectWithError = isMultiAccount(self[14]).rejectWithMigratedError();
    const tmp3Result = isMultiAccount(self[14]);
    return obj1.post(request).then((body) => {
      body = body.body;
      const token = body.token;
      ({ mfa, sms, webauthn, ticket, backup, user_id, required_actions, totp, login_instance_id } = body);
      obj = DispatcherDefault;
      obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
      if (mfa) {
        let tmpResult = DispatcherDefault;
        obj = { type: "LOGIN_MFA_STEP", ticket, sms, webauthn, totp, backup, loginInstanceId: login_instance_id };
        tmpResult.dispatch(obj);
      } else if (isMultiAccount) {
        self.switchAccountToken(token);
      } else {
        tmpResult = DispatcherDefault;
        obj = { type: "LOGIN_SUCCESS", token };
        tmpResult.dispatch(obj);
      }
    }, (body) => {
      const v6OrEarlierAPIError = new V6OrEarlierAPIError.V6OrEarlierAPIError(body);
      if (null != body.body) {
        body = body.body;
        let suspended_user_token;
        if (body != null) {
          suspended_user_token = body.suspended_user_token;
        }
        if (null != suspended_user_token) {
          const body3 = body.body;
          let suspended_user_token1;
          if (body3 != null) {
            suspended_user_token1 = body3.suspended_user_token;
          }
          obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: suspended_user_token1 };
          DispatcherDefault.dispatch(obj);
          throw v6OrEarlierAPIError;
        }
      }
      const body2 = body.body;
      let code;
      if (body2 != null) {
        code = body2.code;
      }
      if (code === constants.ACCOUNT_SCHEDULED_FOR_DELETION) {
        if (null != password) {
          if ("" !== password) {
            obj = { type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", credentials: null };
            const obj1 = { login, password };
            obj.credentials = obj1;
            DispatcherDefault.dispatch(obj);
          }
          throw v6OrEarlierAPIError;
        }
      }
      if (code === constants.ACCOUNT_DISABLED) {
        if (null != password) {
          if ("" !== password) {
            let obj5 = DispatcherDefault;
            let obj2 = { type: "LOGIN_ACCOUNT_DISABLED", credentials: null };
            const obj3 = { login, password };
            obj2.credentials = obj3;
            obj5.dispatch(obj2);
          }
        }
      }
      if (code === constants.PHONE_VERIFICATION_REQUIRED) {
        obj2 = DispatcherDefault;
        const obj4 = { type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED", credentials: null };
        obj5 = { login, password };
        obj4.credentials = obj5;
        obj2.dispatch(obj4);
      } else {
        obj = DispatcherDefault;
        const obj6 = { type: "LOGIN_FAILURE", error: v6OrEarlierAPIError };
        obj.dispatch(obj6);
      }
    });
  },
  loginMFAv2(arg0) {
    const self = this;
    ({ isMultiAccount: require, loginInstanceId } = arg0);
    ({ code, ticket, source, giftCodeSKUId, mfaType } = arg0);
    self(4753);
    const request = { url: closure_9.LOGIN_MFA(mfaType), body: null, retries: 2, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
    let trackedActionData = { code, ticket, login_source: source, gift_code_sku_id: giftCodeSKUId, login_instance_id: null };
    if (loginInstanceId == null) {
      loginInstanceId = AuthenticationStore.getLoginInstanceId();
    }
    trackedActionData.login_instance_id = loginInstanceId;
    request.body = trackedActionData;
    trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_LOGIN_MFA };
    request.trackedActionData = trackedActionData;
    const postResult = trackedActionData.post(request);
    return trackedActionData.post(request).then((body) => {
      if (_require) {
        self.switchAccountToken(body.body.token);
      } else {
        obj = { type: "LOGIN_SUCCESS", token: body.body.token };
        obj.dispatch(obj);
      }
    }).catch((error) => {
      if (null != error.body) {
        if (null != error.body.suspended_user_token) {
          self(dependencyMap[8]);
          obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: error.body.suspended_user_token };
          obj.dispatch(obj);
        }
      }
      const body = error.body;
      let code;
      if (body != null) {
        code = body.code;
      }
      if (code === constants.MFA_INVALID_CODE) {
        const _Error = Error;
        error = new Error(error.body.message);
        throw error;
      } else {
        throw error;
      }
    });
  },
  authenticatePasswordless(arg0) {
    ({ authenticateFunc: require, conditionalMediationAbortController: importDefault, source: importAll, giftCodeSKUId: dependencyMap, isMultiAccount: closure_4 } = arg0);
    const self = this;
    return self(function*() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp8;
              closure_128_0 = undefined;
              let challenge;
              let ticket;
              closure_128_3 = undefined;
              if (importDefault != null) {
                importDefault.abort("Starting non-conditional mediation");
              }
              tmp3(573).dispatch({ type: "PASSWORDLESS_START" });
              dependencyMap = 1;
              const obj12 = tmp3(573);
              c4 = 2;
              c5 = 1;
              const obj1 = { value: closure_0(6597).fetchWebAuthnPasswordlessChallenge(), done: false };
              return obj1;
            }
          } else if (1 === tmp8) {
            dependencyMap = 0;
            closure_128_5 = closure_2;
            let obj9 = tmp3(573);
            let obj2 = { type: "PASSWORDLESS_FAILURE", error: closure_128_5 };
            obj9.dispatch(obj2);
            throw closure_128_5;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = value;
              challenge = closure_128_0.challenge;
              ticket = closure_128_0.ticket;
              c4 = 3;
              c5 = 1;
              const obj4 = { value: closure_129_0(challenge), done: false };
              return obj4;
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_128_3 = value;
              dependencyMap = 2;
              const obj6 = { ticket, credential: closure_128_3, source: closure_129_2, giftCodeSKUId: closure_129_3, isMultiAccount: closure_129_4 };
              c4 = 5;
              c5 = 1;
              const obj7 = { value: closure_129_5.loginWebAuthn(obj6), done: false };
              return obj7;
            }
          } else {
            if (4 === tmp8) {
              dependencyMap = 1;
              closure_128_4 = closure_2;
              let tmp16 = closure_128_4 instanceof closure_0(4461).APIError;
              if (tmp16) {
                tmp16 = null != closure_128_4.status;
              }
              if (tmp16) {
                tmp16 = closure_128_4.status >= 400;
              }
              if (tmp16) {
                tmp16 = closure_128_4.status < 500;
              }
              if (tmp16) {
                obj2 = tmp3(6598);
                c4 = 6;
                c5 = 1;
                const obj8 = { value: obj2.signalUnknownCredential(closure_128_3), done: false };
                return obj8;
              }
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c5 = 3;
                obj9 = { value, done: true };
                return obj9;
              } else {
                dependencyMap = 0;
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            }
            throw closure_128_4;
          }
        } catch (tmp59) {
          closure_2 = tmp59;
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp59;
          } else if (tmp === tmp61) {
            c4 = tmp;
          } else {
            c4 = tmp5;
          }
        }
      }
    })();
  },
  loginWebAuthn(isMultiAccount) {
    const self = this;
    isMultiAccount = isMultiAccount.isMultiAccount;
    ({ ticket, credential, source, giftCodeSKUId } = isMultiAccount);
    self(4753);
    const request = { url: closure_9.WEBAUTHN_CONDITIONAL_UI_LOGIN, body: { credential, ticket, source, giftCodeSKUId }, retries: 1, trackedActionData: null, rejectWithError: true };
    const trackedActionData = { event: isMultiAccount(1250).NetworkActionNames.USER_LOGIN_PASSWORDLESS };
    request.trackedActionData = trackedActionData;
    const postResult = trackedActionData.post(request);
    return trackedActionData.post(request).then((body) => {
      body = body.body;
      const token = body.token;
      ({ user_id, required_actions } = body);
      obj = DispatcherDefault;
      obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
      if (isMultiAccount) {
        self.switchAccountToken(token);
      } else {
        obj = { type: "LOGIN_SUCCESS", token };
        DispatcherDefault.dispatch(obj);
        const tmpResult = DispatcherDefault;
      }
    }).catch((error) => {
      let aPIError = error;
      if (error instanceof isMultiAccount(dependencyMap[14]).HTTPResponseError) {
        if (null != error.body.suspended_user_token) {
          self(dependencyMap[8]);
          obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: error.body.suspended_user_token };
          obj.dispatch(obj);
        } else {
          aPIError = new isMultiAccount(dependencyMap[15]).APIError(error);
        }
      }
      throw aPIError;
    });
  },
  loginToken(token, arg1) {
    const self = this;
    importDefault = token;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    DispatcherDefault.dispatch({ type: "LOGIN" });
    return new Promise((arg0) => {
      closure_0 = arg0;
      setImmediate(() => {
        obj = { type: "LOGIN_SUCCESS", token };
        obj.dispatch(obj);
        if (flag) {
          self.startSession(token);
        }
        closure_0();
      });
    });
  },
  oneTimeLogin(arg0) {
    closure_0 = arg0;
    const self = this;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const ticket = tmp7;
              let token;
              tmp3(573).dispatch({ type: "LOGIN" });
              dependencyMap = 1;
              const obj10 = tmp3(573);
              const request = { url: constants.ONE_TIME_LOGIN, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
              const obj1 = { ticket };
              request.body = obj1;
              const obj2 = { event: ticket(1250).NetworkActionNames.USER_ONE_TIME_LOGIN };
              request.trackedActionData = obj2;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: tmp3(4753).post(request), done: false };
              return obj3;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = closure_2;
            let obj4 = tmp3(573);
            obj4 = { type: "LOGIN_FAILURE", error: null };
            const v6OrEarlierAPIError = new ticket(4461).V6OrEarlierAPIError(closure_128_1);
            obj4.error = v6OrEarlierAPIError;
            obj4.dispatch(obj4);
            throw closure_128_1;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              token = value.body.token;
              if (token) {
                c4 = 3;
                c5 = 1;
                const obj6 = { value: closure_129_1.loginToken(token, false), done: false };
                return obj6;
              } else {
                const _Error = Error;
                const error = new Error("No token in response");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            dependencyMap = 0;
            c5 = 3;
            obj = { value: token, done: true };
            return obj;
          }
        } catch (tmp34) {
          closure_2 = tmp34;
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp34;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  loginReset(isMultiAccount) {
    obj = { type: "LOGIN_RESET", isMultiAccount };
    obj.dispatch(obj);
  },
  loginStatusReset() {
    DispatcherDefault.dispatch({ type: "LOGIN_STATUS_RESET" });
  },
  logoutInternal(arg0) {
    obj = CrossPlatformNativeUtilsDefault;
    const result = obj.clearNavigationHistory();
    const id = AuthenticationStore.getId();
    obj = { type: "LOGOUT", userId: id };
    const merged = Object.assign(arg0);
    const tmpResult = DispatcherDefault;
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("Error while dispatching LOGOUT", error);
      if (DiscordErrors != null) {
        DiscordErrors.softCrash(error);
      }
      throw error;
    });
    const dispatchResult = DispatcherDefault.dispatch(obj);
  },
  logout(TTI_test) {
    _require = TTI_test;
    let DEFAULT_LOGGED_OUT = LOGIN;
    if (LOGIN === undefined) {
      DEFAULT_LOGGED_OUT = constants2.DEFAULT_LOGGED_OUT;
    }
    importAll = id;
    DEFAULT_LOGGED_OUT(4753);
    const request = { url: closure_9.LOGOUT, body: null, oldFormErrors: true, trackedActionData: null };
    let trackedActionData = { provider: closure_15(), token: null, voip_provider: null, voip_token: null };
    const Storage = require("Storage").Storage;
    trackedActionData.token = Storage.get(closure_10);
    trackedActionData.voip_provider = voip_provider;
    const Storage2 = require("Storage").Storage;
    trackedActionData.voip_token = Storage2.get(closure_11);
    request.body = trackedActionData;
    trackedActionData = { event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_LOGOUT, properties: { logout_source: TTI_test } };
    request.trackedActionData = trackedActionData;
    let tmp4 = null != id;
    if (tmp4) {
      let str = TokenManagerAll.getToken(id);
      if (str == null) {
        str = "";
      }
      const obj1 = { headers: null };
      const obj2 = { authorization: str };
      obj1.headers = obj2;
      tmp4 = obj1;
    }
    const merged = Object.assign(tmp4);
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const tmp3Result = require("HTTPUtils");
    return trackedActionData.post(request).finally(() => {
      let tmp2 = null != closure_2;
      if (tmp2) {
        tmp2 = tmp !== AuthenticationStore.getId();
      }
      if (!tmp2) {
        handleLogout(closure_0, DEFAULT_LOGGED_OUT);
      }
    });
  },
  switchAccountToken(token) {
    closure_0 = token;
    let flag = switchSynchronously;
    if (switchSynchronously === undefined) {
      flag = true;
    }
    token = AuthenticationStore.getToken();
    obj = { wasLoggedIn: null != token, tokenHasChanged: token !== token };
    logger.log("Switching accounts", obj);
    obj = { isSwitchingAccount: true, goHomeAfterSwitching: flag };
    const result = CrossPlatformNativeUtilsDefault.clearNavigationHistory();
    const id = AuthenticationStore.getId();
    obj = { type: "LOGOUT", userId: id };
    const merged = Object.assign(obj);
    const tmp3Result = DispatcherDefault;
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("Error while dispatching LOGOUT", error);
      if (DiscordErrors != null) {
        DiscordErrors.softCrash(error);
      }
      throw error;
    });
    const dispatchResult = DispatcherDefault.dispatch(obj);
    return this.loginToken(token, true).then(() => {
      const tmp = closure_0 === AuthenticationStore.getToken();
      logger.log("Switched accounts finished", { isCorrectToken: tmp });
      return tmp;
    });
  },
  verifySSOToken(arg0) {
    _require = arg0;
    let DEFAULT_LOGGED_OUT = arg1;
    if (arg1 === undefined) {
      DEFAULT_LOGGED_OUT = constants2.DEFAULT_LOGGED_OUT;
    }
    const HTTP = require("HTTPUtils").HTTP;
    value = HTTP.get({ url: closure_9.ME, oldFormErrors: true, rejectWithError: true });
    return value.catch(() => {
      handleLogout(closure_0, DEFAULT_LOGGED_OUT);
    });
  },
  verify(arg0) {
    closure_0 = arg0;
    return (async () => {
      const token = tmp5;
      const request = { url: constants.VERIFY, body: { token }, trackedActionData: { event: token(1250).NetworkActionNames.USER_VERIFY }, rejectWithError: null };
      { event: token(1250).NetworkActionNames.USER_VERIFY };
      request.rejectWithError = token(1272).rejectWithMigratedError();
      await tmp2(4753).post(request);
      closure_128_0 = value;
      tmp2(573).dispatch({ type: "LOGIN_SUCCESS", token: closure_128_0.body.token });
      return closure_128_0.body.user_id;
    })();
  },
  authorizePayment(token) {
    const request = { url: React7.AUTHORIZE_PAYMENT, body: null, trackedActionData: null, rejectWithError: true };
    let trackedActionData = { token };
    request.body = trackedActionData;
    trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.AUTHORIZE_PAYMENT };
    request.trackedActionData = trackedActionData;
    return trackedActionData.post(request);
  },
  authorizeIPAddress(token) {
    const request = { url: React7.AUTHORIZE_IP, body: null, trackedActionData: null, rejectWithError: true };
    let trackedActionData = { token };
    request.body = trackedActionData;
    trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.AUTHORIZE_IP };
    request.trackedActionData = trackedActionData;
    return trackedActionData.post(request);
  },
  verifyResend() {
    let trackedActionData = { url: React7.VERIFY_RESEND, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY_RESEND };
    trackedActionData.trackedActionData = trackedActionData;
    trackedActionData.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return trackedActionData.post(trackedActionData);
  },
  resetPassword(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const password = tmp3;
              const token = tmp7;
              let body;
              let mfa;
              let sms;
              let webauthn;
              let ticket;
              let token2;
              let backup;
              let totp;
              closure_128_8 = undefined;
              password(573).dispatch({ type: "LOGIN" });
              const obj1 = { token, password, source };
              const Storage2 = token(510).Storage;
              value = Storage2.get(closure_1_10);
              const tmp74 = closure_1_15();
              let tmp31 = null != tmp74;
              if (tmp31) {
                tmp31 = null != value;
              }
              if (tmp31) {
                obj1.push_provider = tmp74;
                obj1.push_token = value;
              }
              const Storage = token(510).Storage;
              value = Storage.get(closure_1_11);
              let tmp37 = null != push_voip_provider;
              if (tmp37) {
                tmp37 = null != value;
              }
              if (tmp37) {
                obj1.push_voip_provider = push_voip_provider;
                obj1.push_voip_token = value;
              }
              dependencyMap = 1;
              let obj4 = password(4753);
              const request = { url: constants.RESET_PASSWORD, body: obj1, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
              let obj2 = { event: token(1250).NetworkActionNames.USER_RESET_PASSWORD };
              request.trackedActionData = obj2;
              const obj12 = password(573);
              request.rejectWithError = token(1272).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj3 = { value: obj4.post(request), done: false };
              return obj3;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_9 = source;
            const v6OrEarlierAPIError = new token(4461).V6OrEarlierAPIError(closure_128_9);
            closure_128_8 = v6OrEarlierAPIError;
            obj2 = password(573);
            obj4 = { type: "LOGIN_FAILURE", error: closure_128_8 };
            obj2.dispatch(obj4);
            throw closure_128_8;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            body = value.body;
            mfa = body.mfa;
            sms = body.sms;
            webauthn = body.webauthn;
            ticket = body.ticket;
            token2 = body.token;
            backup = body.backup;
            totp = body.totp;
            let tmp14 = closure_1_18;
            if (mfa) {
              let SUCCESS = tmp14.MFA;
            } else {
              SUCCESS = tmp14.SUCCESS;
            }
            obj = { result: SUCCESS, sms, webauthn, ticket, token: token2, backup, totp: null };
            tmp14 = totp;
            obj.totp = totp;
            dependencyMap = 0;
            c5 = 3;
          }
        } catch (tmp45) {
          source = tmp45;
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp45;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  resetPasswordMFAv2(arg0) {
    ({ method: require, code: importDefault, ticket: importAll, password: dependencyMap, token: closure_4, source: asyncGeneratorStep } = arg0);
    return (async () => {
      v1(573).dispatch({ type: "LOGIN_MFA" });
      const request = { url: constants.RESET_PASSWORD, body: { code, ticket, password, token, source, method }, oldFormErrors: true, trackedActionData: { event: v3(1250).NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: true } }, rejectWithError: true };
      await v1(4753).post(request);
      return value.body.token;
    })();
  },
  forgotPassword(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const login = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              tmp3(573).dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
              dependencyMap = 1;
              const obj12 = tmp3(573);
              const request = { url: constants.FORGOT_PASSWORD, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
              const obj1 = { login };
              request.body = obj1;
              const obj2 = { event: login(1250).NetworkActionNames.FORGOT_PASSWORD };
              request.trackedActionData = obj2;
              const obj13 = tmp3(4753);
              request.rejectWithError = login(1272).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              let obj3 = { value: obj13.post(request), done: false };
              return obj3;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_2 = closure_2;
            const v6OrEarlierAPIError = new login(4461).V6OrEarlierAPIError(closure_128_2);
            closure_128_1 = v6OrEarlierAPIError;
            if (closure_128_1.code === constants2.PHONE_VERIFICATION_REQUIRED) {
              let obj5 = tmp3(573);
              const obj4 = { type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION", credentials: null };
              obj5 = { login: closure_129_0 };
              obj4.credentials = obj5;
              obj5.dispatch(obj4);
              c5 = 3;
              return { value: false, done: true };
            } else {
              obj3 = tmp3(573);
              const obj6 = { type: "LOGIN_FAILURE", error: closure_128_1 };
              obj3.dispatch(obj6);
              throw closure_128_1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = value;
            obj = tmp3(573);
            obj.dispatch({ type: "FORGOT_PASSWORD_SENT" });
            dependencyMap = 0;
            c5 = 3;
            const obj8 = { value: closure_128_0.body.method, done: true };
            return obj8;
          }
        } catch (tmp39) {
          closure_2 = tmp39;
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp39;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  setFingerprint(fingerprint) {
    obj = { type: "FINGERPRINT", fingerprint };
    obj.dispatch(obj);
  },
  getExperiments(withGuildExperiments) {
    obj = { type: "EXPERIMENTS_FETCH", withGuildExperiments };
    obj.dispatch(obj);
  },
  getLocationMetadata() {
    if (null == nextPromise) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        DispatcherDefault.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: true });
      }, 5000);
      const HTTP = HTTPUtils.HTTP;
      obj = { url: React7.AUTH_LOCATION_METADATA, retries: 2, oldFormErrors: true, rejectWithError: true };
      value = HTTP.get(obj);
      nextPromise = value.then((body) => {
        clearTimeout(closure_1_4);
        if (null == authenticationConsentRequired.getAuthenticationConsentRequired()) {
          let flag;
          if (body != null) {
            body = body.body;
            if (body != null) {
              flag = body.consent_required;
            }
          }
          if (flag == null) {
            flag = true;
          }
          obj = { type: "SET_CONSENT_REQUIRED", consentRequired: flag };
          obj.dispatch(obj);
        }
        let country_code;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            country_code = body2.country_code;
          }
        }
        DispatcherDefault.dispatch({ type: "SET_LOCATION_METADATA", countryCode: country_code });
        c17 = null;
        let prop;
        if (body != null) {
          const body3 = body.body;
          if (body3 != null) {
            prop = body3.promotional_email_opt_in;
          }
        }
        if (null != prop) {
          obj = { required: null, checked: null, preChecked: null };
          ({ required: obj4.required, pre_checked: obj4.checked, pre_checked: obj4.preChecked } = body.body.promotional_email_opt_in);
          setPromoEmailConsentState(obj);
        }
      }, () => {
        clearTimeout(closure_1_4);
        DispatcherDefault.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: true });
        c17 = null;
      });
    }
    return nextPromise;
  },
  closeSuspendedUser() {
    DispatcherDefault.dispatch({ type: "CLOSE_SUSPENDED_USER" });
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("actions/AuthenticationActionCreators.tsx");

export default PasswordResetResult;
export { PasswordResetResult };