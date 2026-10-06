// discord_app/actions/AuthenticationActionCreators.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import TokenManagerAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import discord_common_AnalyticsUtils from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import RootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import CrossPlatformNativeUtilsDefault from "../utils/CrossPlatformNativeUtils.native.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import ModalActionCreatorsDefault from "ModalActionCreators.tsx";
import V6OrEarlierAPIError from "../errors/index.tsx";
import PromoEmailConsentStore from "../modules/auth/PromoEmailConsentStore.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ConsentStore from "../stores/ConsentStore.tsx";
import Constants from "../Constants.tsx";
import PushNotificationConstants from "../modules/push_notifications/PushNotificationConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c17, c3, c4, c5, closure_4, importAll, importDefault, obj;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
const f91455 = (error) => {
  logger.error("Error while dispatching LOGOUT", error);
  if (DiscordErrors != null) {
    DiscordErrors.softCrash(error);
  }
  throw error;
};
function handleLogout(source) {
  let items;
  let DEFAULT_LOGGED_OUT = Routes;
  if (Routes === undefined) {
    DEFAULT_LOGGED_OUT = map1.DEFAULT_LOGGED_OUT;
  }
  obj = CrossPlatformNativeUtilsDefault;
  const result = obj.clearNavigationHistory();
  const id = AuthenticationStore.getId();
  const obj2 = { type: "LOGOUT", userId: id };
  const merged = Object.assign(undefined);
  const tmp2Result = DispatcherDefault;
  const dispatchResult = tmp2Result.dispatch(obj2);
  dispatchResult.catch(f91455);
  if (null != DEFAULT_LOGGED_OUT) {
    const obj8 = RootNavigationRef;
    const rootNavigationRef = obj8.getRootNavigationRef();
    if (null != rootNavigationRef) {
      const tmp2Result2 = ModalActionCreatorsDefault;
      tmp2Result2.popAll();
      const obj3 = { index: 0, routes: items };
      items = [{ name: "auth" }];
      rootNavigationRef.reset(obj3);
    } else {
      const obj4 = { source };
      const tmp12Result = router_utils;
      tmp12Result.transitionTo(DEFAULT_LOGGED_OUT, obj4);
    }
  }
}
const setPromoEmailConsentState = PromoEmailConsentStore.setPromoEmailConsentState;
({
  Endpoints: c9,
  DEVICE_TOKEN: c10,
  DEVICE_VOIP_TOKEN: unpackModuleId,
  AbortCodes: closure_12,
  Routes: map1,
} = Constants);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_14, getDevicePushProvider: closure_15 } = PushNotificationConstants);
let tmp4 = new LoggerDefault("AuthenticationActionCreators");
const logger = tmp4;
let nextPromise = null;
let obj2 = {
  startSession(token) {
    obj = DispatcherDefault;
    obj.wait(() => {
      obj = DispatcherDefault;
      const obj2 = { type: "START_SESSION", token };
      obj.dispatch(obj2);
    });
  },
  login(self) {
    let code;
    let giftCodeSKUId;
    let invite;
    let isMultiAccount;
    let obj2;
    let obj4;
    let source;
    let tmp4Result;
    let undelete;
    self = this;
    const login = self.login;
    const password = self.password;
    ({ invite, isMultiAccount } = self);
    ({ undelete, source, giftCodeSKUId } = self);
    obj = login(self[8]);
    let dispatchResult = obj.dispatch({ type: "LOGIN", isPasswordAttempt: true });
    const request = {
      url: closure_9.LOGIN,
      body: { login, password, undelete, login_source: source, gift_code_sku_id: giftCodeSKUId },
      retries: 2,
      oldFormErrors: true,
      trackedActionData: obj2,
      rejectWithError: tmp4Result.rejectWithMigratedError(),
    };
    const tmp3 = login(self[12]);
    obj2 = {
      event: isMultiAccount(self[13]).NetworkActionNames.USER_LOGIN,
      properties: { invite_code: code, is_multi_account: isMultiAccount },
    };
    const post = tmp3.post;
    code = undefined;
    const tmp = self;
    const tmp4 = isMultiAccount;
    if (invite != null) {
      code = invite.code;
    }
    if (isMultiAccount) {
      let obj3 = { headers: { authorization: "" } };
      obj4 = obj3;
    } else {
      obj4 = {};
    }
    let merged = Object.assign(obj4);
    tmp4Result = tmp4(tmp[14]);
    const postResult = post(request);
    return postResult.then(
      (body) => {
        let backup;
        let login_instance_id;
        let mfa;
        let required_actions;
        let sms;
        let ticket;
        let totp;
        let user_id;
        let webauthn;
        body = body.body;
        const token = body.token;
        ({ mfa, sms, webauthn, ticket, backup, user_id, required_actions, totp, login_instance_id } = body);
        obj = DispatcherDefault;
        obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
        if (mfa) {
          const obj2 = {
            type: "LOGIN_MFA_STEP",
            ticket,
            sms,
            webauthn,
            totp,
            backup,
            loginInstanceId: login_instance_id,
          };
          const tmpResult = DispatcherDefault;
          tmpResult.dispatch(obj2);
        } else if (isMultiAccount) {
          self.switchAccountToken(token);
        } else {
          const obj3 = { type: "LOGIN_SUCCESS", token };
          const tmpResult2 = DispatcherDefault;
          tmpResult2.dispatch(obj3);
        }
      },
      (body) => {
        let obj10;
        let obj13;
        let obj7;
        const v6OrEarlierAPIError = new V6OrEarlierAPIError.V6OrEarlierAPIError(body);
        if (null != body.body) {
          body = body.body;
          let suspended_user_token;
          if (body != null) {
            suspended_user_token = body.suspended_user_token;
          }
          if (null != suspended_user_token) {
            if (isMultiAccount) {
              const obj12 = CrossPlatformNativeUtilsDefault;
              const result = obj12.clearNavigationHistory();
              const id = AuthenticationStore.getId();
              const obj2 = { type: "LOGOUT", userId: id };
              const merged = Object.assign({ isSwitchingAccount: true });
              const tmp21Result = DispatcherDefault;
              const dispatchResult = tmp21Result.dispatch(obj2);
              dispatchResult.catch(f91455);
            }
            const body3 = body.body;
            let suspended_user_token1;
            const dispatch = DispatcherDefault.dispatch;
            DispatcherDefault;
            if (body3 != null) {
              suspended_user_token1 = body3.suspended_user_token;
            }
            const obj4 = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: suspended_user_token1 };
            dispatch(obj4);
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
              const obj5 = { type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", credentials: obj7 };
              obj7 = { login, password };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
            }
            throw v6OrEarlierAPIError;
          }
        }
        if (code === constants.ACCOUNT_DISABLED) {
          if (null != password) {
            if ("" !== password) {
              const obj8 = { type: "LOGIN_ACCOUNT_DISABLED", credentials: obj10 };
              obj10 = { login, password };
              const obj6 = DispatcherDefault;
              obj6.dispatch(obj8);
            }
          }
        }
        if (code === constants.PHONE_VERIFICATION_REQUIRED) {
          const obj11 = { type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED", credentials: obj13 };
          obj13 = { login, password };
          const obj3 = DispatcherDefault;
          obj3.dispatch(obj11);
        } else {
          const obj14 = { type: "LOGIN_FAILURE", error: v6OrEarlierAPIError };
          obj = DispatcherDefault;
          obj.dispatch(obj14);
        }
      },
    );
  },
  loginMFAv2(arg0) {
    let body;
    let code;
    let giftCodeSKUId;
    let loginInstanceId;
    let mfaType;
    let obj2;
    let require;
    let source;
    let ticket;
    let self = this;
    ({ isMultiAccount: require, loginInstanceId } = arg0);
    ({ code, ticket, source, giftCodeSKUId, mfaType } = arg0);
    const tmp2 = self(5089);
    const request = {
      url: closure_9.LOGIN_MFA(mfaType),
      body,
      retries: 2,
      oldFormErrors: true,
      trackedActionData: obj2,
      rejectWithError: true,
    };
    const post = tmp2.post;
    body = { code, ticket, login_source: source, gift_code_sku_id: giftCodeSKUId, login_instance_id: loginInstanceId };
    if (loginInstanceId == null) {
      loginInstanceId = AuthenticationStore.getLoginInstanceId();
    }
    obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_LOGIN_MFA };
    const postResult = post(request);
    nextPromise = postResult.then((body) => {
      if (_require) {
        self.switchAccountToken(body.body.token);
      } else {
        const obj2 = { type: "LOGIN_SUCCESS", token: body.body.token };
        obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
    });
    return nextPromise.catch(function (error) {
      if (null != error.body) {
        if (null != error.body.suspended_user_token) {
          const obj2 = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: error.body.suspended_user_token };
          obj = self(dependencyMap[8]);
          obj.dispatch(obj2);
        }
      }
      const body = error.body;
      let code;
      if (body != null) {
        code = body.code;
      }
      if (code === constants.MFA_INVALID_CODE) {
        const _Error = Error;
        self = this;
        const self2 = this;
        error = new Error(error.body.message);
        throw error;
      } else {
        throw error;
      }
    });
  },
  authenticatePasswordless(arg0) {
    let require;
    ({
      authenticateFunc: require,
      conditionalMediationAbortController: importDefault,
      source: importAll,
      giftCodeSKUId: dependencyMap,
      isMultiAccount: closure_4,
    } = arg0);
    const self = this;
    return self(function* () {
      let closure_1;
      let obj13;
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let credential;
        try {
          let closure_0;
          let challenge;
          let ticket;
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
              closure_0 = undefined;
              challenge = undefined;
              ticket = undefined;
              credential = undefined;
              if (importDefault != null) {
                importDefault.abort("Starting non-conditional mediation");
              }
              const obj12 = tmp(credential[8]);
              obj12.dispatch({ type: "PASSWORDLESS_START" });
              credential = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj13.fetchWebAuthnPasswordlessChallenge(), done: false };
              obj13 = closure_0(credential[16]);
              return obj5;
            }
          } else if (1 === c4) {
            credential = 0;
            const error = closure_2;
            const obj6 = { type: "PASSWORDLESS_FAILURE", error };
            const obj10 = tmp(credential[8]);
            obj10.dispatch(obj6);
            throw error;
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              credential = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_0 = value;
              challenge = closure_0.challenge;
              ticket = closure_0.ticket;
              c4 = 3;
              c5 = 1;
              const obj8 = { value: closure_129_0(challenge), done: false };
              return obj8;
            }
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              credential = 0;
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              credential = 2;
              const obj11 = {
                ticket,
                credential,
                source: closure_129_2,
                giftCodeSKUId: closure_129_3,
                isMultiAccount: closure_129_4,
              };
              c4 = 5;
              c5 = 1;
              const obj14 = { value: closure_129_5.loginWebAuthn(obj11), done: false };
              return obj14;
            }
          } else {
            if (4 === c4) {
              credential = 1;
              closure_4 = closure_2;
              const tmp12 =
                closure_4 instanceof closure_0(credential[15]).APIError &&
                null != closure_4.status &&
                closure_4.status >= 400 &&
                closure_4.status < 500;
              if (tmp12) {
                c4 = 6;
                c5 = 1;
                const obj15 = { value: obj3.signalUnknownCredential(credential), done: false };
                obj3 = tmp(credential[17]);
                return obj15;
              }
            } else if (5 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                credential = 0;
                c5 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                credential = 0;
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              credential = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            }
            throw closure_4;
          }
        } catch (tmp55) {
          closure_2 = tmp55;
          if (0 === credential) {
            c5 = 3;
            throw tmp55;
          } else if (1 === tmp57) {
            c4 = 1;
          } else {
            c4 = 4;
          }
        }
      }
    })();
  },
  loginWebAuthn(isMultiAccount) {
    let credential;
    let giftCodeSKUId;
    let obj2;
    let source;
    let ticket;
    let self = this;
    isMultiAccount = isMultiAccount.isMultiAccount;
    ({ ticket, credential, source, giftCodeSKUId } = isMultiAccount);
    obj = self(5089);
    const request = {
      url: closure_9.WEBAUTHN_CONDITIONAL_UI_LOGIN,
      body: { credential, ticket, source, giftCodeSKUId },
      retries: 1,
      trackedActionData: obj2,
      rejectWithError: true,
    };
    obj2 = { event: isMultiAccount(1260).NetworkActionNames.USER_LOGIN_PASSWORDLESS };
    const postResult = obj.post(request);
    nextPromise = postResult.then((body) => {
      let required_actions;
      let user_id;
      body = body.body;
      const token = body.token;
      ({ user_id, required_actions } = body);
      obj = DispatcherDefault;
      obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
      if (isMultiAccount) {
        self.switchAccountToken(token);
      } else {
        const obj2 = { type: "LOGIN_SUCCESS", token };
        const tmpResult = DispatcherDefault;
        tmpResult.dispatch(obj2);
      }
    });
    return nextPromise.catch(function (error) {
      let aPIError = error;
      if (error instanceof isMultiAccount(dependencyMap[14]).HTTPResponseError) {
        if (null != error.body.suspended_user_token) {
          const obj2 = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: error.body.suspended_user_token };
          obj = self(dependencyMap[8]);
          obj.dispatch(obj2);
        } else {
          self = this;
          const self2 = this;
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
    obj = DispatcherDefault;
    obj.dispatch({ type: "LOGIN" });
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      setImmediate(() => {
        obj = DispatcherDefault;
        const obj2 = { type: "LOGIN_SUCCESS", token };
        obj.dispatch(obj2);
        if (flag) {
          self.startSession(token);
        }
        closure_0();
      });
    });
    return promise;
  },
  oneTimeLogin(arg0) {
    let closure_0 = arg0;
    let self = this;
    return (async function () {
      let closure_1;
      let obj4;
      let obj5;
      let v6OrEarlierAPIError;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let token;
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
              ticket = tmp4;
              token = undefined;
              const obj9 = tmp(c3[8]);
              obj9.dispatch({ type: "LOGIN" });
              c3 = 1;
              const request = {
                url: constants.ONE_TIME_LOGIN,
                body: obj4,
                oldFormErrors: true,
                trackedActionData: obj5,
                rejectWithError: true,
              };
              obj4 = { ticket };
              obj5 = { event: ticket(c3[13]).NetworkActionNames.USER_ONE_TIME_LOGIN };
              const post = tmp(c3[12]).post;
              const tmp40 = tmp(c3[12]);
              c4 = 2;
              c5 = 1;
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (1 === c4) {
            c3 = 0;
            const obj7 = { type: "LOGIN_FAILURE", error: v6OrEarlierAPIError };
            const dispatch = closure_2(c3[8]).dispatch;
            const self3 = this;
            const self4 = this;
            const tmp20 = closure_2(c3[8]);
            v6OrEarlierAPIError = new ticket(c3[15]).V6OrEarlierAPIError(tmp);
            dispatch(obj7);
            throw closure_2;
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              token = value.body.token;
              const tmp7 = token;
              if (tmp7) {
                c4 = 3;
                c5 = 1;
                const obj10 = { value: closure_129_1.loginToken(token, false), done: false };
                return obj10;
              } else {
                const _Error = Error;
                self = this;
                const self2 = this;
                const error = new Error("No token in response");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value: token, done: true };
            return obj;
          }
        } catch (tmp28) {
          closure_2 = tmp28;
          if (0 === c3) {
            c5 = 3;
            throw tmp28;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  loginReset(isMultiAccount) {
    obj = DispatcherDefault;
    const obj2 = { type: "LOGIN_RESET", isMultiAccount };
    obj.dispatch(obj2);
  },
  loginStatusReset() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "LOGIN_STATUS_RESET" });
  },
  logoutInternal(arg0) {
    obj = CrossPlatformNativeUtilsDefault;
    const result = obj.clearNavigationHistory();
    const id = AuthenticationStore.getId();
    const obj2 = { type: "LOGOUT", userId: id };
    const merged = Object.assign(arg0);
    const tmpResult = DispatcherDefault;
    const dispatchResult = tmpResult.dispatch(obj2);
    dispatchResult.catch(f91455);
  },
  logout(TTI_test) {
    let Storage;
    let Storage2;
    let body;
    let obj5;
    let tmp4Result;
    _require = TTI_test;
    let DEFAULT_LOGGED_OUT = LOGIN;
    if (LOGIN === undefined) {
      DEFAULT_LOGGED_OUT = constants2.DEFAULT_LOGGED_OUT;
    }
    importAll = id;
    const request = {
      url: closure_9.LOGOUT,
      body,
      oldFormErrors: true,
      trackedActionData: {
        event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_LOGOUT,
        properties: { logout_source: TTI_test },
      },
      rejectWithError: tmp4Result.rejectWithMigratedError(),
    };
    const tmp3 = DEFAULT_LOGGED_OUT(5089);
    body = {
      provider: closure_15(),
      token: Storage.get(closure_10),
      voip_provider,
      voip_token: Storage2.get(closure_11),
    };
    const post = tmp3.post;
    Storage = require("Storage").Storage;
    Storage2 = require("Storage").Storage;
    let tmp5 = null != id;
    ({
      event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_LOGOUT,
      properties: { logout_source: TTI_test },
    });
    const tmp4 = _require;
    if (tmp5) {
      const obj4 = TokenManagerAll;
      let str = obj4.getToken(id);
      if (str == null) {
        str = "";
      }
      const obj3 = { headers: obj5 };
      tmp5 = obj3;
      obj5 = { authorization: str };
    }
    const merged = Object.assign(tmp5);
    tmp4Result = tmp4(1282);
    const postResult = post(request);
    return postResult.finally(() => {
      const tmp2 = null != id && tmp !== AuthenticationStore.getId();
      if (!tmp2) {
        handleLogout(TTI_test, DEFAULT_LOGGED_OUT);
      }
    });
  },
  switchAccountToken(token) {
    let closure_0 = token;
    let flag = switchSynchronously;
    if (switchSynchronously === undefined) {
      flag = true;
    }
    token = AuthenticationStore.getToken();
    obj = { wasLoggedIn: null != token, tokenHasChanged: token !== token };
    logger.log("Switching accounts", obj);
    const obj2 = { isSwitchingAccount: true, goHomeAfterSwitching: flag };
    const obj3 = CrossPlatformNativeUtilsDefault;
    const result = obj3.clearNavigationHistory();
    const id = AuthenticationStore.getId();
    const obj4 = { type: "LOGOUT", userId: id };
    const merged = Object.assign(obj2);
    const tmp3Result = DispatcherDefault;
    const dispatchResult = tmp3Result.dispatch(obj4);
    dispatchResult.catch(f91455);
    const loginTokenResult = this.loginToken(token, true);
    return loginTokenResult.then(() => {
      const tmp = token === AuthenticationStore.getToken();
      logger.log("Switched accounts finished", { isCorrectToken: tmp });
      return tmp;
    });
  },
  verifySSOToken(arg0) {
    let closure_0;
    _require = arg0;
    let DEFAULT_LOGGED_OUT = arg1;
    if (arg1 === undefined) {
      DEFAULT_LOGGED_OUT = constants2.DEFAULT_LOGGED_OUT;
    }
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_9.ME, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    return value.then(
      () => true,
      (status) => {
        status = undefined;
        if (status != null) {
          status = status.status;
        }
        if (401 !== status) {
          throw status;
        } else {
          handleLogout(closure_0, DEFAULT_LOGGED_OUT);
          return false;
        }
      },
    );
  },
  verify(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c2;
      let closure_1;
      let obj11;
      let obj4;
      let obj5;
      let token = tmp4;
      const request = {
        url: constants.VERIFY,
        body: obj4,
        trackedActionData: obj5,
        rejectWithError: obj11.rejectWithMigratedError(),
      };
      obj4 = { token };
      obj5 = { event: token(c3[13]).NetworkActionNames.USER_VERIFY };
      const post = tmp(c3[12]).post;
      const tmp18 = tmp(c3[12]);
      obj11 = token(c3[14]);
      await post(request);
      token = value;
      const obj8 = { type: "LOGIN_SUCCESS", token: token.body.token };
      obj = tmp(c3[8]);
      obj.dispatch(obj8);
      return token.body.user_id;
    })();
  },
  authorizePayment(token) {
    let obj2;
    const request = {
      url: React4.AUTHORIZE_PAYMENT,
      body: obj2,
      trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.AUTHORIZE_PAYMENT },
      rejectWithError: true,
    };
    obj2 = { token };
    obj = TrackedHTTPUtilsDefault;
    ({ event: discord_common_AnalyticsUtils.NetworkActionNames.AUTHORIZE_PAYMENT });
    return obj.post(request);
  },
  authorizeIPAddress(token) {
    let obj2;
    const request = {
      url: React4.AUTHORIZE_IP,
      body: obj2,
      trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.AUTHORIZE_IP },
      rejectWithError: true,
    };
    obj2 = { token };
    obj = TrackedHTTPUtilsDefault;
    ({ event: discord_common_AnalyticsUtils.NetworkActionNames.AUTHORIZE_IP });
    return obj.post(request);
  },
  verifyResend() {
    let obj3;
    obj = {
      url: React4.VERIFY_RESEND,
      oldFormErrors: true,
      trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY_RESEND },
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const post = TrackedHTTPUtilsDefault.post;
    ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY_RESEND });
    obj3 = HTTPUtils;
    return post(obj);
  },
  resetPassword(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async function () {
      let obj6;
      let obj8;
      let source;
      let value;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let password;
          let body;
          let mfa;
          let sms;
          let webauthn;
          let ticket;
          let token;
          let backup;
          let totp;
          let v6OrEarlierAPIError;
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
              password = tmp;
              body = undefined;
              mfa = undefined;
              sms = undefined;
              webauthn = undefined;
              ticket = undefined;
              token = undefined;
              backup = undefined;
              totp = undefined;
              v6OrEarlierAPIError = undefined;
              const obj12 = password(c3[8]);
              obj12.dispatch({ type: "LOGIN" });
              const obj5 = { token, password, source };
              const Storage2 = token(c3[18]).Storage;
              value = Storage2.get(closure_1_10);
              const tmp70 = closure_1_15();
              const tmp26 = null != tmp70 && null != value;
              if (tmp26) {
                obj5.push_provider = tmp70;
                obj5.push_token = value;
              }
              const Storage = token(c3[18]).Storage;
              const value2 = Storage.get(closure_1_11);
              const tmp32 = null != push_voip_provider && null != value2;
              if (tmp32) {
                obj5.push_voip_provider = push_voip_provider;
                obj5.push_voip_token = value2;
              }
              c3 = 1;
              const request = {
                url: constants.RESET_PASSWORD,
                body: obj5,
                oldFormErrors: true,
                trackedActionData: obj6,
                rejectWithError: obj8.rejectWithMigratedError(),
              };
              obj6 = { event: token(c3[13]).NetworkActionNames.USER_RESET_PASSWORD };
              const post = password(c3[12]).post;
              const tmp35 = password(c3[12]);
              obj8 = token(c3[14]);
              c4 = 2;
              c5 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c4) {
            c3 = 0;
            let closure_9 = source;
            const self = this;
            const self2 = this;
            v6OrEarlierAPIError = new token(c3[15]).V6OrEarlierAPIError(closure_9);
            const obj9 = { type: "LOGIN_FAILURE", error: v6OrEarlierAPIError };
            const obj4 = password(c3[8]);
            obj4.dispatch(obj9);
            throw v6OrEarlierAPIError;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            let SUCCESS;
            body = value.body;
            mfa = body.mfa;
            sms = body.sms;
            webauthn = body.webauthn;
            ticket = body.ticket;
            token = body.token;
            backup = body.backup;
            totp = body.totp;
            if (mfa) {
              SUCCESS = constants.MFA;
            } else {
              SUCCESS = constants.SUCCESS;
            }
            value = { result: SUCCESS, sms, webauthn, ticket, token, backup, totp };
            c3 = 0;
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          }
        } catch (tmp41) {
          source = tmp41;
          if (0 === c3) {
            c5 = 3;
            throw tmp41;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  resetPasswordMFAv2(arg0) {
    let code;
    let method;
    let password;
    let require;
    let source;
    let ticket;
    let token;
    ({
      method: require,
      code: importDefault,
      ticket: importAll,
      password: dependencyMap,
      token: closure_4,
      source: _asyncToGenerator,
    } = arg0);
    return (async () => {
      let obj4;
      let obj5;
      const obj6 = v1(password[8]);
      obj6.dispatch({ type: "LOGIN_MFA" });
      const request = {
        url: constants.RESET_PASSWORD,
        body: obj4,
        oldFormErrors: true,
        trackedActionData: obj5,
        rejectWithError: true,
      };
      obj4 = {
        code: importDefault,
        ticket: importAll,
        password: dependencyMap,
        token,
        source: _asyncToGenerator,
        method: require,
      };
      obj5 = { event: v3(password[13]).NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: true } };
      const post = v1(password[12]).post;
      const tmp11 = v1(password[12]);
      await post(request);
      return value.body.token;
    })();
  },
  forgotPassword(first1) {
    let closure_0 = first1;
    return (async function () {
      let closure_1;
      let obj10;
      let obj16;
      let obj5;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let login;
          let v6OrEarlierAPIError;
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
              login = undefined;
              v6OrEarlierAPIError = undefined;
              const obj12 = tmp(c3[8]);
              obj12.dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
              c3 = 1;
              const request = {
                url: constants.FORGOT_PASSWORD,
                body: obj5,
                oldFormErrors: true,
                trackedActionData: obj7,
                rejectWithError: obj16.rejectWithMigratedError(),
              };
              obj5 = { login };
              obj7 = { event: login(c3[13]).NetworkActionNames.FORGOT_PASSWORD };
              const post = tmp(c3[12]).post;
              const tmp45 = tmp(c3[12]);
              obj16 = login(c3[14]);
              c4 = 2;
              c5 = 1;
              const obj8 = { value: post(request), done: false };
              return obj8;
            }
          } else if (1 === c4) {
            c3 = 0;
            const self = this;
            const self2 = this;
            v6OrEarlierAPIError = new login(c3[15]).V6OrEarlierAPIError(closure_2);
            if (v6OrEarlierAPIError.code === constants2.PHONE_VERIFICATION_REQUIRED) {
              const obj9 = { type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION", credentials: obj10 };
              obj10 = { login: closure_129_0 };
              const obj6 = tmp(c3[8]);
              obj6.dispatch(obj9);
              c5 = 3;
              return { value: false, done: true };
            } else {
              const obj11 = { type: "LOGIN_FAILURE", error: v6OrEarlierAPIError };
              const obj4 = tmp(c3[8]);
              obj4.dispatch(obj11);
              throw v6OrEarlierAPIError;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            login = value;
            obj = tmp(c3[8]);
            obj.dispatch({ type: "FORGOT_PASSWORD_SENT" });
            c3 = 0;
            c5 = 3;
            const obj14 = { value: login.body.method, done: true };
            return obj14;
          }
        } catch (tmp34) {
          closure_2 = tmp34;
          if (0 === c3) {
            c5 = 3;
            throw tmp34;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  setFingerprint(fingerprint) {
    obj = DispatcherDefault;
    const obj2 = { type: "FINGERPRINT", fingerprint };
    obj.dispatch(obj2);
  },
  getExperiments(withGuildExperiments) {
    obj = DispatcherDefault;
    const obj2 = { type: "EXPERIMENTS_FETCH", withGuildExperiments };
    obj.dispatch(obj2);
  },
  getLocationMetadata() {
    let authenticationConsentRequired;
    let timeout;
    if (null == nextPromise) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        obj = DispatcherDefault;
        obj.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: true });
      }, 5000);
      const HTTP = HTTPUtils.HTTP;
      obj = { url: React4.AUTH_LOCATION_METADATA, retries: 2, oldFormErrors: true, rejectWithError: true };
      const value = HTTP.get(obj);
      nextPromise = value.then(
        (body) => {
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
            obj = DispatcherDefault;
            obj.dispatch(obj2);
          }
          let country_code;
          const dispatch = DispatcherDefault.dispatch;
          DispatcherDefault;
          if (body != null) {
            const body2 = body.body;
            if (body2 != null) {
              country_code = body2.country_code;
            }
          }
          dispatch({ type: "SET_LOCATION_METADATA", countryCode: country_code });
          c17 = null;
          let prop;
          if (body != null) {
            const body3 = body.body;
            if (body3 != null) {
              prop = body3.promotional_email_opt_in;
            }
          }
          if (null != prop) {
            const obj5 = { required: null, checked: null, preChecked: null };
            ({
              required: obj3.required,
              pre_checked: obj3.checked,
              pre_checked: obj3.preChecked,
            } = body.body.promotional_email_opt_in);
            setPromoEmailConsentState(obj5);
          }
        },
        () => {
          clearTimeout(closure_1_4);
          obj = DispatcherDefault;
          obj.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: true });
          c17 = null;
        },
      );
    }
    return nextPromise;
  },
  closeSuspendedUser() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "CLOSE_SUSPENDED_USER" });
  },
};
const PasswordResetResult = { MFA: "MFA", SUCCESS: "SUCCESS" };
let result = size.fileFinishedImporting("actions/AuthenticationActionCreators.tsx");

export default obj2;
export { PasswordResetResult };
