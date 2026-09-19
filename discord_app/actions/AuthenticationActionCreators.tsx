// === Module 6829: AuthenticationActionCreators ===

// Module 6829 (AuthenticationActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TokenManagerAll from "TokenManager" /* 1100 */;
import router_utils from "router_utils" /* 1101 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import RootNavigationRef from "RootNavigationRef" /* 4614 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4656 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4750 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4949 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConsentStore from "ConsentStore" /* 6831 */;

const require = globalThis.__r;

require = fn;
function handleLogout(source) {
  let DEFAULT_LOGGED_OUT = CHANNELResult;
  if (CHANNELResult === undefined) {
    DEFAULT_LOGGED_OUT = constants2.DEFAULT_LOGGED_OUT;
  }
  const result = CrossPlatformNativeUtilsDefault.clearNavigationHistory();
  const id = AuthenticationStore.getId();
  const merged = Object.assign(undefined);
  const obj2 = { type: "LOGOUT", userId: id };
  const tmp2Result = DispatcherDefault;
  DispatcherDefault.dispatch(obj2).catch((error) => {
    logger.error("Error while dispatching LOGOUT", error);
    if (DiscordErrors != null) {
      DiscordErrors.softCrash(error);
    }
    throw error;
  });
  if (null != DEFAULT_LOGGED_OUT) {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      ModalActionCreatorsDefault.popAll();
      const obj3 = { index: 0, routes: null };
      const items = [{ name: "auth" }];
      obj3.routes = items;
      rootNavigationRef.reset(obj3);
      const tmp2Result2 = ModalActionCreatorsDefault;
    } else {
      const obj4 = { source };
      router_utils.transitionTo(DEFAULT_LOGGED_OUT, obj4);
      const tmp12Result = router_utils;
    }
  }
  const dispatchResult = DispatcherDefault.dispatch(obj2);
}
const setPromoEmailConsentState = fn(6830).setPromoEmailConsentState;
const Constants = fn(1074);
({ Endpoints: closure_9, DEVICE_TOKEN: c10, DEVICE_VOIP_TOKEN: closure_11, AbortCodes: closure_12, Routes: map1 } = Constants);
const PushNotificationConstants = fn(6832);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_14, getDevicePushProvider: closure_15 } = PushNotificationConstants);
const logger = new LoggerDefault("AuthenticationActionCreators");
const PasswordResetResult = { MFA: "MFA", SUCCESS: "SUCCESS" };
const size = fn(2);
let result = size.fileFinishedImporting("actions/AuthenticationActionCreators.tsx");

export default {
  startSession(token) {
    DispatcherDefault.wait(() => {
      DispatcherDefault.dispatch({ type: "START_SESSION", token });
    });
  },
  login(self) {
    self = this;
    const login = self.login;
    const password = self.password;
    ({ invite, isMultiAccount } = self);
    ({ undelete, source, giftCodeSKUId } = self);
    login(self[8]).dispatch({ type: "LOGIN", isPasswordAttempt: true });
    let obj = login(self[8]);
    const tmp = self;
    const request = { url: closure_9.LOGIN, body: { login, password, undelete, login_source: source, gift_code_sku_id: giftCodeSKUId }, retries: 2, oldFormErrors: true, trackedActionData: null };
    let obj3 = { event: isMultiAccount(self[13]).NetworkActionNames.USER_LOGIN, properties: null };
    let code;
    if (invite != null) {
      code = invite.code;
    }
    obj3.properties = { invite_code: code, is_multi_account: isMultiAccount };
    request.trackedActionData = obj3;
    if (isMultiAccount) {
      let obj4 = { headers: { authorization: "" } };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    let merged = Object.assign(obj5);
    let obj2 = login(self[12]);
    request.rejectWithError = isMultiAccount(tmp[14]).rejectWithMigratedError();
    const tmp3Result = isMultiAccount(tmp[14]);
    return obj2.post(request).then((body) => {
      body = body.body;
      const token = body.token;
      ({ mfa, sms, webauthn, ticket, backup, user_id, required_actions, totp, login_instance_id } = body);
      DispatcherDefault.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
      if (mfa) {
        const obj2 = { type: "LOGIN_MFA_STEP", ticket, sms, webauthn, totp, backup, loginInstanceId: login_instance_id };
        DispatcherDefault.dispatch(obj2);
        const tmpResult = DispatcherDefault;
      } else if (isMultiAccount) {
        self.switchAccountToken(token);
      } else {
        const obj3 = { type: "LOGIN_SUCCESS", token };
        DispatcherDefault.dispatch(obj3);
        const tmpResult2 = DispatcherDefault;
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
          if (isMultiAccount) {
            const result = CrossPlatformNativeUtilsDefault.clearNavigationHistory();
            const id = AuthenticationStore.getId();
            const obj2 = { type: "LOGOUT", userId: id };
            const merged = Object.assign({ isSwitchingAccount: true });
            const tmp21Result = DispatcherDefault;
            DispatcherDefault.dispatch(obj2).catch((error) => {
              logger.error("Error while dispatching LOGOUT", error);
              if (DiscordErrors != null) {
                DiscordErrors.softCrash(error);
              }
              throw error;
            });
            const dispatchResult = DispatcherDefault.dispatch(obj2);
          }
          const body3 = body.body;
          let suspended_user_token1;
          if (body3 != null) {
            suspended_user_token1 = body3.suspended_user_token;
          }
          const obj4 = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: suspended_user_token1 };
          DispatcherDefault.dispatch(obj4);
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
            const obj5 = { type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", credentials: null };
            const obj7 = { login, password };
            obj5.credentials = obj7;
            DispatcherDefault.dispatch(obj5);
          }
          throw v6OrEarlierAPIError;
        }
      }
      if (code === constants.ACCOUNT_DISABLED) {
        if (null != password) {
          if ("" !== password) {
            const obj8 = { type: "LOGIN_ACCOUNT_DISABLED", credentials: null };
            const obj10 = { login, password };
            obj8.credentials = obj10;
            DispatcherDefault.dispatch(obj8);
          }
        }
      }
      if (code === constants.PHONE_VERIFICATION_REQUIRED) {
        const obj11 = { type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED", credentials: null };
        const obj13 = { login, password };
        obj11.credentials = obj13;
        DispatcherDefault.dispatch(obj11);
      } else {
        const obj14 = { type: "LOGIN_FAILURE", error: v6OrEarlierAPIError };
        DispatcherDefault.dispatch(obj14);
      }
    });
  },
  loginMFAv2(arg0) {
    const self = this;
    ({ isMultiAccount: require, loginInstanceId } = arg0);
    ({ code, ticket, source, giftCodeSKUId, mfaType } = arg0);
    const request = { url: closure_9.LOGIN_MFA(mfaType), body: null, retries: 2, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
    let obj2 = { code, ticket, login_source: source, gift_code_sku_id: giftCodeSKUId, login_instance_id: null };
    if (loginInstanceId == null) {
      loginInstanceId = AuthenticationStore.getLoginInstanceId();
    }
    obj2.login_instance_id = loginInstanceId;
    request.body = obj2;
    let obj = self(4949);
    request.trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_LOGIN_MFA };
    const obj3 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_LOGIN_MFA };
    const postResult = obj.post(request);
    return obj.post(request).then((body) => {
      if (_require) {
        self.switchAccountToken(body.body.token);
      } else {
        const obj2 = { type: "LOGIN_SUCCESS", token: body.body.token };
        DispatcherDefault.dispatch(obj2);
      }
    }).catch((error) => {
      if (null != error.body) {
        if (null != error.body.suspended_user_token) {
          const obj2 = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: error.body.suspended_user_token };
          self(dependencyMap[8]).dispatch(obj2);
          const obj = self(dependencyMap[8]);
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
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
              const obj5 = { value: closure_0(6833).fetchWebAuthnPasswordlessChallenge(), done: false };
              return obj5;
            }
          } else if (1 === tmp8) {
            dependencyMap = 0;
            closure_128_5 = closure_2;
            const obj6 = { type: "PASSWORDLESS_FAILURE", error: closure_128_5 };
            tmp3(573).dispatch(obj6);
            throw closure_128_5;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_0 = value;
              challenge = closure_128_0.challenge;
              ticket = closure_128_0.ticket;
              c4 = 3;
              c5 = 1;
              const obj8 = { value: closure_129_0(challenge), done: false };
              return obj8;
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_128_3 = value;
              dependencyMap = 2;
              const obj11 = { ticket, credential: closure_128_3, source: closure_129_2, giftCodeSKUId: closure_129_3, isMultiAccount: closure_129_4 };
              c4 = 5;
              c5 = 1;
              const obj14 = { value: closure_129_5.loginWebAuthn(obj11), done: false };
              return obj14;
            }
          } else {
            if (4 === tmp8) {
              dependencyMap = 1;
              closure_128_4 = closure_2;
              let tmp16 = closure_128_4 instanceof closure_0(4656).APIError;
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
                c4 = 6;
                c5 = 1;
                const obj15 = { value: tmp3(6834).signalUnknownCredential(closure_128_3), done: false };
                return obj15;
              }
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c5 = 3;
                const obj16 = { value, done: true };
                return obj16;
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
              const obj = { value, done: true };
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
    const request = { url: closure_9.WEBAUTHN_CONDITIONAL_UI_LOGIN, body: { credential, ticket, source, giftCodeSKUId }, retries: 1, trackedActionData: null, rejectWithError: true };
    let obj = self(4949);
    request.trackedActionData = { event: isMultiAccount(1249).NetworkActionNames.USER_LOGIN_PASSWORDLESS };
    let obj2 = { event: isMultiAccount(1249).NetworkActionNames.USER_LOGIN_PASSWORDLESS };
    const postResult = obj.post(request);
    return obj.post(request).then((body) => {
      body = body.body;
      const token = body.token;
      ({ user_id, required_actions } = body);
      DispatcherDefault.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
      if (isMultiAccount) {
        self.switchAccountToken(token);
      } else {
        const obj2 = { type: "LOGIN_SUCCESS", token };
        DispatcherDefault.dispatch(obj2);
        const tmpResult = DispatcherDefault;
      }
    }).catch((error) => {
      let aPIError = error;
      if (error instanceof isMultiAccount(dependencyMap[14]).HTTPResponseError) {
        if (null != error.body.suspended_user_token) {
          const obj2 = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: error.body.suspended_user_token };
          self(dependencyMap[8]).dispatch(obj2);
          const obj = self(dependencyMap[8]);
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
        DispatcherDefault.dispatch({ type: "LOGIN_SUCCESS", token });
        if (flag) {
          self.startSession(token);
        }
        closure_0();
        const obj2 = { type: "LOGIN_SUCCESS", token };
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const ticket = tmp7;
              let token;
              tmp3(573).dispatch({ type: "LOGIN" });
              dependencyMap = 1;
              const obj10 = tmp3(573);
              const request = { url: constants.ONE_TIME_LOGIN, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
              const obj4 = { ticket };
              request.body = obj4;
              const obj6 = { event: ticket(1249).NetworkActionNames.USER_ONE_TIME_LOGIN };
              request.trackedActionData = obj6;
              c4 = 2;
              c5 = 1;
              const obj7 = { value: tmp3(4949).post(request), done: false };
              return obj7;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = closure_2;
            const obj8 = { type: "LOGIN_FAILURE", error: null };
            const v6OrEarlierAPIError = new ticket(4656).V6OrEarlierAPIError(closure_128_1);
            obj8.error = v6OrEarlierAPIError;
            tmp3(573).dispatch(obj8);
            throw closure_128_1;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              token = value.body.token;
              if (token) {
                c4 = 3;
                c5 = 1;
                const obj12 = { value: closure_129_1.loginToken(token, false), done: false };
                return obj12;
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
            const obj13 = { value, done: true };
            return obj13;
          } else {
            dependencyMap = 0;
            c5 = 3;
            const obj = { value: token, done: true };
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
    DispatcherDefault.dispatch({ type: "LOGIN_RESET", isMultiAccount });
  },
  loginStatusReset() {
    DispatcherDefault.dispatch({ type: "LOGIN_STATUS_RESET" });
  },
  logoutInternal(arg0) {
    const result = CrossPlatformNativeUtilsDefault.clearNavigationHistory();
    const id = AuthenticationStore.getId();
    const merged = Object.assign(arg0);
    const obj2 = { type: "LOGOUT", userId: id };
    const tmpResult = DispatcherDefault;
    DispatcherDefault.dispatch(obj2).catch((error) => {
      logger.error("Error while dispatching LOGOUT", error);
      if (DiscordErrors != null) {
        DiscordErrors.softCrash(error);
      }
      throw error;
    });
    const dispatchResult = DispatcherDefault.dispatch(obj2);
  },
  logout(TTI_test) {
    _require = TTI_test;
    let DEFAULT_LOGGED_OUT = LOGIN;
    if (LOGIN === undefined) {
      DEFAULT_LOGGED_OUT = constants2.DEFAULT_LOGGED_OUT;
    }
    importAll = id;
    const request = { url: closure_9.LOGOUT, body: null, oldFormErrors: true, trackedActionData: null };
    const obj2 = { provider: closure_15(), token: null, voip_provider: null, voip_token: null };
    const Storage = require("Storage").Storage;
    obj2.token = Storage.get(closure_10);
    obj2.voip_provider = voip_provider;
    const Storage2 = require("Storage").Storage;
    obj2.voip_token = Storage2.get(closure_11);
    request.body = obj2;
    const obj = DEFAULT_LOGGED_OUT(4949);
    const tmp3 = _require;
    request.trackedActionData = { event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_LOGOUT, properties: { logout_source: TTI_test } };
    let tmp4 = null != id;
    if (tmp4) {
      let str = TokenManagerAll.getToken(id);
      if (str == null) {
        str = "";
      }
      const obj4 = { headers: null };
      const obj6 = { authorization: str };
      obj4.headers = obj6;
      tmp4 = obj4;
    }
    const merged = Object.assign(tmp4);
    const obj3 = { event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_LOGOUT, properties: { logout_source: TTI_test } };
    request.rejectWithError = tmp3(1271).rejectWithMigratedError();
    const tmp3Result = tmp3(1271);
    return obj.post(request).finally(() => {
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
    logger.log("Switching accounts", { wasLoggedIn: null != token, tokenHasChanged: token !== token });
    const result = CrossPlatformNativeUtilsDefault.clearNavigationHistory();
    const id = AuthenticationStore.getId();
    const merged = Object.assign({ isSwitchingAccount: true, goHomeAfterSwitching: flag });
    const obj = { wasLoggedIn: null != token, tokenHasChanged: token !== token };
    const obj2 = { isSwitchingAccount: true, goHomeAfterSwitching: flag };
    const obj4 = { type: "LOGOUT", userId: id };
    const tmp3Result = DispatcherDefault;
    DispatcherDefault.dispatch(obj4).catch((error) => {
      logger.error("Error while dispatching LOGOUT", error);
      if (DiscordErrors != null) {
        DiscordErrors.softCrash(error);
      }
      throw error;
    });
    const dispatchResult = DispatcherDefault.dispatch(obj4);
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
      const request = { url: constants.VERIFY, body: { token }, trackedActionData: { event: token(1249).NetworkActionNames.USER_VERIFY }, rejectWithError: null };
      { event: token(1249).NetworkActionNames.USER_VERIFY };
      request.rejectWithError = token(1271).rejectWithMigratedError();
      await tmp2(4949).post(request);
      closure_128_0 = value;
      tmp2(573).dispatch({ type: "LOGIN_SUCCESS", token: closure_128_0.body.token });
      return closure_128_0.body.user_id;
    })();
  },
  authorizePayment(token) {
    const request = { url: React7.AUTHORIZE_PAYMENT, body: { token }, trackedActionData: null, rejectWithError: true };
    const obj = TrackedHTTPUtilsDefault;
    const obj2 = { token };
    request.trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.AUTHORIZE_PAYMENT };
    return obj.post(request);
  },
  authorizeIPAddress(token) {
    const request = { url: React7.AUTHORIZE_IP, body: { token }, trackedActionData: null, rejectWithError: true };
    const obj = TrackedHTTPUtilsDefault;
    const obj2 = { token };
    request.trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.AUTHORIZE_IP };
    return obj.post(request);
  },
  verifyResend() {
    const obj2 = { url: React7.VERIFY_RESEND, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const obj = TrackedHTTPUtilsDefault;
    obj2.trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY_RESEND };
    const obj3 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY_RESEND };
    obj2.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.post(obj2);
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
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
              const obj6 = { token, password, source };
              const Storage2 = token(510).Storage;
              value = Storage2.get(closure_1_10);
              const tmp74 = closure_1_15();
              let tmp31 = null != tmp74;
              if (tmp31) {
                tmp31 = null != value;
              }
              if (tmp31) {
                obj6.push_provider = tmp74;
                obj6.push_token = value;
              }
              const Storage = token(510).Storage;
              value2 = Storage.get(closure_1_11);
              let tmp37 = null != push_voip_provider;
              if (tmp37) {
                tmp37 = null != value2;
              }
              if (tmp37) {
                obj6.push_voip_provider = push_voip_provider;
                obj6.push_voip_token = value2;
              }
              dependencyMap = 1;
              const obj12 = password(573);
              const request = { url: constants.RESET_PASSWORD, body: obj6, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
              const obj7 = { event: token(1249).NetworkActionNames.USER_RESET_PASSWORD };
              request.trackedActionData = obj7;
              const obj5 = password(4949);
              request.rejectWithError = token(1271).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj9 = { value: obj5.post(request), done: false };
              return obj9;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_9 = source;
            const v6OrEarlierAPIError = new token(4656).V6OrEarlierAPIError(closure_128_9);
            closure_128_8 = v6OrEarlierAPIError;
            const obj10 = { type: "LOGIN_FAILURE", error: closure_128_8 };
            password(573).dispatch(obj10);
            throw closure_128_8;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
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
            const obj = { result: SUCCESS, sms, webauthn, ticket, token: token2, backup, totp: null };
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
      const request = { url: constants.RESET_PASSWORD, body: { code, ticket, password, token, source, method }, oldFormErrors: true, trackedActionData: { event: v3(1249).NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: true } }, rejectWithError: true };
      await v1(4949).post(request);
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const login = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              tmp3(573).dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
              dependencyMap = 1;
              const obj12 = tmp3(573);
              const request = { url: constants.FORGOT_PASSWORD, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
              const obj5 = { login };
              request.body = obj5;
              const obj7 = { event: login(1249).NetworkActionNames.FORGOT_PASSWORD };
              request.trackedActionData = obj7;
              const obj13 = tmp3(4949);
              request.rejectWithError = login(1271).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj8 = { value: obj13.post(request), done: false };
              return obj8;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_2 = closure_2;
            const v6OrEarlierAPIError = new login(4656).V6OrEarlierAPIError(closure_128_2);
            closure_128_1 = v6OrEarlierAPIError;
            if (closure_128_1.code === constants2.PHONE_VERIFICATION_REQUIRED) {
              const obj9 = { type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION", credentials: null };
              const obj10 = { login: closure_129_0 };
              obj9.credentials = obj10;
              tmp3(573).dispatch(obj9);
              c5 = 3;
              return { value: false, done: true };
            } else {
              const obj11 = { type: "LOGIN_FAILURE", error: closure_128_1 };
              tmp3(573).dispatch(obj11);
              throw closure_128_1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            closure_128_0 = value;
            tmp3(573).dispatch({ type: "FORGOT_PASSWORD_SENT" });
            dependencyMap = 0;
            c5 = 3;
            const obj15 = { value: closure_128_0.body.method, done: true };
            return obj15;
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
    DispatcherDefault.dispatch({ type: "FINGERPRINT", fingerprint });
  },
  getExperiments(withGuildExperiments) {
    DispatcherDefault.dispatch({ type: "EXPERIMENTS_FETCH", withGuildExperiments });
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
      let obj = { url: React7.AUTH_LOCATION_METADATA, retries: 2, oldFormErrors: true, rejectWithError: true };
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
          const obj2 = { type: "SET_CONSENT_REQUIRED", consentRequired: flag };
          DispatcherDefault.dispatch(obj2);
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
          ({ required: obj4.required, pre_checked: obj4.checked, pre_checked: obj4.preChecked } = body.body.promotional_email_opt_in);
          setPromoEmailConsentState({ required: null, checked: null, preChecked: null });
          const obj6 = { required: null, checked: null, preChecked: null };
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
export { PasswordResetResult };