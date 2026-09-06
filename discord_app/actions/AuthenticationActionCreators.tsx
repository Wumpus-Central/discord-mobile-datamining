// discord_app/actions/AuthenticationActionCreators.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import setSecondaryTokenAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import encodeProperties from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import getRootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import setDefault from "../utils/CrossPlatformNativeUtils.native.tsx";
import _modDef4753 from "../utils/TrackedHTTPUtils.tsx";
import closure_5 from "../../_runtime/00005_asyncGeneratorStep.js";
import { setPromoEmailConsentState } from "../modules/auth/PromoEmailConsentStore.tsx";
import closure_7 from "../stores/AuthenticationStore.tsx";
import closure_8 from "../stores/ConsentStore.tsx";
import ME from "../Constants.tsx";
import str2 from "../modules/push_notifications/PushNotificationConstants.tsx";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

require = arg1;
function handleLogout(arg0, ME) {
  let DEFAULT_LOGGED_OUT = ME;
  if (ME === undefined) {
    DEFAULT_LOGGED_OUT = constants.DEFAULT_LOGGED_OUT;
  }
  obj = setDefault;
  const result = obj.clearNavigationHistory();
  const id = authStore.getId();
  obj = { type: "LOGOUT", userId: id };
  const merged = Object.assign(undefined);
  let tmp2Result = tmp2(573);
  tmp2Result.dispatch(obj).catch((error) => {
    logger.error("Error while dispatching LOGOUT", error);
    if (DiscordErrors != null) {
      DiscordErrors.softCrash(error);
    }
    throw error;
  });
  if (null != DEFAULT_LOGGED_OUT) {
    const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      tmp2Result = tmp2(4763);
      tmp2Result.popAll();
      obj = { index: 0, routes: null };
      const items = [{ name: "auth" }];
      obj[1] = items;
      rootNavigationRef.reset(obj);
    } else {
      obj1 = { source: null };
      obj1[0] = arg0;
      tmp12(1100).transitionTo(DEFAULT_LOGGED_OUT, obj1);
      const tmp12Result = tmp12(1100);
    }
    const obj8 = getRootNavigationRef;
    tmp12 = require;
  }
}
({ Endpoints: c9, DEVICE_TOKEN: c10, DEVICE_VOIP_TOKEN: unpackModuleId, AbortCodes: closure_12, Routes: map1 } = ME);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_14, getDevicePushProvider: closure_15 } = require("str2"));
let closure_16 = new timestampDefault("AuthenticationActionCreators");
let c17 = null;
let obj = { MFA: "MFA", SUCCESS: "SUCCESS" };
obj = {
  startSession(arg0) {
    closure_0 = arg0;
    dispatcherDefault.wait(() => {
      obj = closure_1_1(closure_1_3[8]);
      obj = { type: "START_SESSION", token: closure_0 };
      obj.dispatch(obj);
    });
  },
  login(login) {
    const self = this;
    login = login.login;
    const password = login.password;
    ({ invite, isMultiAccount } = login);
    ({ undelete, source, giftCodeSKUId } = login);
    obj = login(self[8]);
    obj.dispatch({ type: "LOGIN", isPasswordAttempt: true });
    obj1 = login(self[12]);
    obj = {
      url: closure_9.LOGIN,
      body: { login, password, undelete, login_source: source, gift_code_sku_id: giftCodeSKUId },
      retries: 2,
      oldFormErrors: true,
      trackedActionData: null,
    };
    obj = { event: isMultiAccount(self[13]).NetworkActionNames.USER_LOGIN, properties: null };
    let code;
    if (invite != null) {
      code = invite.code;
    }
    obj[1] = { invite_code: code, is_multi_account: isMultiAccount };
    obj[4] = obj;
    if (isMultiAccount) {
      obj1 = { headers: null };
      obj1[0] = { authorization: "" };
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    const merged = Object.assign(obj2);
    obj.rejectWithError = isMultiAccount(self[14]).rejectWithMigratedError();
    const tmp = self;
    const tmp3 = isMultiAccount;
    const tmp3Result = isMultiAccount(self[14]);
    return obj1.post(obj).then(
      (body) => {
        body = body.body;
        const token = body.token;
        ({ mfa, sms, webauthn, ticket, backup, user_id, required_actions, totp, login_instance_id } = body);
        obj = login(self[8]);
        obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
        if (mfa) {
          let tmpResult = tmp(tmp2[8]);
          obj = {
            type: "LOGIN_MFA_STEP",
            ticket: null,
            sms: null,
            webauthn: null,
            totp: null,
            backup: null,
            loginInstanceId: null,
          };
          obj[1] = ticket;
          obj[2] = sms;
          obj[3] = webauthn;
          obj[4] = totp;
          obj[5] = backup;
          obj[6] = login_instance_id;
          tmpResult.dispatch(obj);
        } else if (isMultiAccount) {
          self.switchAccountToken(token);
        } else {
          tmpResult = tmp(tmp2[8]);
          obj = { type: "LOGIN_SUCCESS", token: null };
          obj[1] = token;
          tmpResult.dispatch(obj);
        }
      },
      (body) => {
        const v6OrEarlierAPIError = new isMultiAccount(self[15]).V6OrEarlierAPIError(body);
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
            obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: null };
            obj[1] = suspended_user_token1;
            login(tmp[8]).dispatch(obj);
            throw v6OrEarlierAPIError;
          }
        }
        const body2 = body.body;
        let code;
        if (body2 != null) {
          code = body2.code;
        }
        if (code === closure_1_12.ACCOUNT_SCHEDULED_FOR_DELETION) {
          if (null != password) {
            if ("" !== tmp6) {
              obj = { type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", credentials: null };
              obj1 = { login: null, password: null };
              obj1[0] = login;
              obj1[1] = tmp6;
              obj[1] = obj1;
              login(tmp[8]).dispatch(obj);
              const obj9 = login(tmp[8]);
            }
            throw v6OrEarlierAPIError;
          }
        }
        if (code === closure_1_12.ACCOUNT_DISABLED) {
          if (null != password) {
            if ("" !== tmp7) {
              let obj5 = login(tmp[8]);
              let obj2 = { type: "LOGIN_ACCOUNT_DISABLED", credentials: null };
              const obj3 = { login: null, password: null };
              obj3[0] = login;
              obj3[1] = tmp7;
              obj2[1] = obj3;
              obj5.dispatch(obj2);
            }
          }
        }
        if (code === closure_1_12.PHONE_VERIFICATION_REQUIRED) {
          obj2 = login(tmp[8]);
          const obj4 = { type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED", credentials: null };
          obj5 = { login: null, password: null };
          obj5[0] = login;
          obj5[1] = password;
          obj4[1] = obj5;
          obj2.dispatch(obj4);
        } else {
          obj = login(tmp[8]);
          const obj6 = { type: "LOGIN_FAILURE", error: null };
          obj6[1] = v6OrEarlierAPIError;
          obj.dispatch(obj6);
        }
      },
    );
  },
  loginMFAv2(arg0) {
    const self = this;
    ({ isMultiAccount: require, loginInstanceId } = arg0);
    ({ code, ticket, source, giftCodeSKUId, mfaType } = arg0);
    obj = self(4753);
    obj = {
      url: closure_9.LOGIN_MFA(mfaType),
      body: null,
      retries: 2,
      oldFormErrors: true,
      trackedActionData: null,
      rejectWithError: true,
    };
    obj = { code, ticket, login_source: source, gift_code_sku_id: giftCodeSKUId, login_instance_id: null };
    if (loginInstanceId == null) {
      loginInstanceId = authStore.getLoginInstanceId();
    }
    obj[4] = loginInstanceId;
    obj[1] = obj;
    obj[4] = { event: encodeProperties.NetworkActionNames.USER_LOGIN_MFA };
    obj1 = { event: encodeProperties.NetworkActionNames.USER_LOGIN_MFA };
    const postResult = obj.post(obj);
    return obj
      .post(obj)
      .then((body) => {
        if (closure_0) {
          self.switchAccountToken(body.body.token);
        } else {
          obj = self(closure_1_3[8]);
          obj = { type: "LOGIN_SUCCESS", token: null };
          obj[1] = body.body.token;
          obj.dispatch(obj);
        }
      })
      .catch((body) => {
        if (null != body.body) {
          if (null != body.body.suspended_user_token) {
            obj = self(table[8]);
            obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: null };
            obj[1] = body.body.suspended_user_token;
            obj.dispatch(obj);
          }
        }
        body = body.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (code === constants.MFA_INVALID_CODE) {
          const _Error = Error;
          error = new Error(body.body.message);
          throw error;
        } else {
          throw body;
        }
      });
  },
  authenticatePasswordless(arg0) {
    ({
      authenticateFunc: require,
      conditionalMediationAbortController: importDefault,
      source: importAll,
      giftCodeSKUId: dependencyMap,
      isMultiAccount: closure_4,
    } = arg0);
    const self = this;
    return self(function* () {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp3;
              c0 = tmp8;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              dependencyMap = undefined;
              if (challenge != null) {
                obj17.abort("Starting non-conditional mediation");
              }
              challenge(573).dispatch({ type: "PASSWORDLESS_START" });
              dependencyMap = 1;
              const obj12 = challenge(573);
              obj17 = challenge;
              c4 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = lib(6597).fetchWebAuthnPasswordlessChallenge();
              return obj1;
            }
          } else if (1 === tmp8) {
            dependencyMap = 0;
            closure_5 = c2;
            let obj9 = challenge(573);
            let obj2 = { type: "PASSWORDLESS_FAILURE", error: null };
            obj2[1] = closure_5;
            obj9.dispatch(obj2);
            throw closure_5;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              lib = arg1;
              challenge = lib.challenge;
              const ticket = lib.ticket;
              c4 = 3;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = lib(challenge);
              return obj4;
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              dependencyMap = arg1;
              dependencyMap = 2;
              const obj6 = { ticket: null, credential: null, source: null, giftCodeSKUId: null, isMultiAccount: null };
              obj6[0] = c2;
              obj6[1] = dependencyMap;
              obj6[2] = c2;
              obj6[3] = dependencyMap;
              obj6[4] = c4;
              c4 = 5;
              c5 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = c5.loginWebAuthn(obj6);
              return obj7;
            }
          } else {
            if (4 === tmp8) {
              dependencyMap = 1;
              c4 = c2;
              let tmp16 = c4 instanceof lib(4461).APIError;
              if (tmp16) {
                tmp16 = null != c4.status;
              }
              if (tmp16) {
                tmp16 = c4.status >= 400;
              }
              if (tmp16) {
                tmp16 = c4.status < 500;
              }
              if (tmp16) {
                obj2 = challenge(6598);
                c4 = 6;
                c5 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = obj2.signalUnknownCredential(dependencyMap);
                return obj8;
              }
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c5 = 3;
                obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              } else {
                dependencyMap = 0;
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            throw c4;
          }
        } catch (tmp59) {
          c2 = tmp59;
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
    obj = self(4753);
    obj = {
      url: closure_9.WEBAUTHN_CONDITIONAL_UI_LOGIN,
      body: { credential, ticket, source, giftCodeSKUId },
      retries: 1,
      trackedActionData: null,
      rejectWithError: true,
    };
    obj = { event: isMultiAccount(1250).NetworkActionNames.USER_LOGIN_PASSWORDLESS };
    obj[3] = obj;
    const postResult = obj.post(obj);
    return obj
      .post(obj)
      .then((body) => {
        body = body.body;
        const token = body.token;
        ({ user_id, required_actions } = body);
        obj = self(closure_1_3[8]);
        obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
        if (isMultiAccount) {
          self.switchAccountToken(token);
        } else {
          obj = { type: "LOGIN_SUCCESS", token: null };
          obj[1] = token;
          self(closure_1_3[8]).dispatch(obj);
          const tmpResult = self(closure_1_3[8]);
        }
      })
      .catch((body) => {
        let aPIError = body;
        if (body instanceof isMultiAccount(table[14]).HTTPResponseError) {
          if (null != body.body.suspended_user_token) {
            obj = self(tmp2[8]);
            obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: null };
            obj[1] = body.body.suspended_user_token;
            obj.dispatch(obj);
          } else {
            aPIError = new isMultiAccount(tmp2[15]).APIError(body);
          }
        }
        throw aPIError;
      });
  },
  loginToken(c0, arg1) {
    const self = this;
    importDefault = c0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    dispatcherDefault.dispatch({ type: "LOGIN" });
    obj = dispatcherDefault;
    return new Promise((arg0) => {
      closure_0 = arg0;
      setImmediate(() => {
        obj = callback2(closure_2_3[8]);
        obj = { type: "LOGIN_SUCCESS", token: closure_1_1 };
        obj.dispatch(obj);
        if (callback) {
          closure_1_2.startSession(closure_1_1);
        }
        callback();
      });
    });
  },
  oneTimeLogin(arg0) {
    closure_0 = arg0;
    const self = this;
    return callback(function* () {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let token = tmp7;
              token = undefined;
              closure_1_1(573).dispatch({ type: "LOGIN" });
              dependencyMap = 1;
              const obj10 = closure_1_1(573);
              obj1 = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
              obj1[0] = closure_1_9.ONE_TIME_LOGIN;
              const obj2 = { ticket: null };
              obj2[0] = closure_1_0;
              obj1[1] = obj2;
              const obj3 = { event: null };
              obj3[0] = closure_1_0(1250).NetworkActionNames.USER_ONE_TIME_LOGIN;
              obj1[3] = obj3;
              c4 = 2;
              c5 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = closure_1_1(4753).post(obj1);
              return obj4;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_1 = closure_2;
            obj4 = closure_1_1(573);
            const obj5 = { type: "LOGIN_FAILURE", error: null };
            const v6OrEarlierAPIError = new closure_1_0(4461).V6OrEarlierAPIError(closure_1);
            obj5[1] = v6OrEarlierAPIError;
            obj4.dispatch(obj5);
            throw closure_1;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              token = arg1.body.token;
              if (token) {
                c4 = 3;
                c5 = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = closure_1.loginToken(token, false);
                return obj7;
              } else {
                const _Error = Error;
                error = new Error("No token in response");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            dependencyMap = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = token;
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
    obj = dispatcherDefault;
    obj = { type: "LOGIN_RESET", isMultiAccount };
    obj.dispatch(obj);
  },
  loginStatusReset() {
    dispatcherDefault.dispatch({ type: "LOGIN_STATUS_RESET" });
  },
  logoutInternal(arg0) {
    obj = setDefault;
    const result = obj.clearNavigationHistory();
    const id = authStore.getId();
    obj = { type: "LOGOUT", userId: id };
    const merged = Object.assign(arg0);
    const tmp = importDefault;
    const tmpResult = dispatcherDefault;
    dispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("Error while dispatching LOGOUT", error);
      if (DiscordErrors != null) {
        DiscordErrors.softCrash(error);
      }
      throw error;
    });
  },
  logout(login_required_account_manager, LOGIN) {
    const _require = login_required_account_manager;
    let DEFAULT_LOGGED_OUT = LOGIN;
    if (LOGIN === undefined) {
      DEFAULT_LOGGED_OUT = constants.DEFAULT_LOGGED_OUT;
    }
    importAll = arg2;
    obj = DEFAULT_LOGGED_OUT(4753);
    obj = { url: closure_9.LOGOUT, body: null, oldFormErrors: true, trackedActionData: null };
    obj = { provider: callback2(), token: null, voip_provider: null, voip_token: null };
    const Storage = require("../../discord_common/js/packages/storage/Storage.tsx").Storage;
    obj[1] = Storage.get(closure_10);
    obj[2] = closure_14;
    const Storage2 = require("../../discord_common/js/packages/storage/Storage.tsx").Storage;
    obj[3] = Storage2.get(closure_11);
    obj[1] = obj;
    obj[3] = {
      event: require("../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx").NetworkActionNames
        .USER_LOGOUT,
      properties: obj2,
    };
    let tmp4 = null != arg2;
    if (tmp4) {
      let str = setSecondaryTokenAll.getToken(arg2);
      if (str == null) {
        str = "";
      }
      const obj3 = { headers: null };
      const obj4 = { authorization: null };
      obj4[0] = str;
      obj3[0] = obj4;
      tmp4 = obj3;
      const obj6 = setSecondaryTokenAll;
    }
    const merged = Object.assign(tmp4);
    obj1 = {
      event: require("../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx").NetworkActionNames
        .USER_LOGOUT,
      properties: obj2,
    };
    const tmp3 = _require;
    obj.rejectWithError =
      require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const tmp3Result = sendRequest;
    return obj.post(obj).finally(() => {
      let tmp2 = null != closure_2;
      if (tmp2) {
        tmp2 = tmp !== closure_1_7.getId();
      }
      if (!tmp2) {
        closure_1_19(closure_0, DEFAULT_LOGGED_OUT);
      }
    });
  },
  switchAccountToken(token, switchSynchronously) {
    closure_0 = token;
    let flag = switchSynchronously;
    if (switchSynchronously === undefined) {
      flag = true;
    }
    token = authStore.getToken();
    obj = { wasLoggedIn: null != token, tokenHasChanged: token !== token };
    logger.log("Switching accounts", obj);
    obj = { isSwitchingAccount: true, goHomeAfterSwitching: flag };
    const result = setDefault.clearNavigationHistory();
    const id = authStore.getId();
    obj = { type: "LOGOUT", userId: id };
    const merged = Object.assign(obj);
    const obj3 = setDefault;
    const tmp3 = importDefault;
    const tmp3Result = dispatcherDefault;
    dispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("Error while dispatching LOGOUT", error);
      if (DiscordErrors != null) {
        DiscordErrors.softCrash(error);
      }
      throw error;
    });
    const dispatchResult = dispatcherDefault.dispatch(obj);
    return this.loginToken(token, true).then(() => {
      const tmp = closure_0 === closure_1_7.getToken();
      closure_1_16.log("Switched accounts finished", { isCorrectToken: tmp });
      return tmp;
    });
  },
  verifySSOToken(arg0) {
    const _require = arg0;
    let DEFAULT_LOGGED_OUT = arg1;
    if (arg1 === undefined) {
      DEFAULT_LOGGED_OUT = constants.DEFAULT_LOGGED_OUT;
    }
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    const value = HTTP.get({ url: closure_9.ME, oldFormErrors: true, rejectWithError: true });
    return value.catch(() => {
      closure_1_19(closure_0, DEFAULT_LOGGED_OUT);
    });
  },
  verify(arg0) {
    closure_0 = arg0;
    return callback(function* () {
      closure_1 = tmp2;
      closure_0 = tmp5;
      const obj7 = closure_1_1(4753);
      obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: null };
      obj1[0] = closure_1_9.VERIFY;
      const obj2 = { token: null };
      obj2[0] = closure_1_0;
      obj1[1] = obj2;
      const obj3 = { event: null };
      obj3[0] = closure_1_0(1250).NetworkActionNames.USER_VERIFY;
      obj1[2] = obj3;
      obj1[3] = closure_1_0(1272).rejectWithMigratedError();
      closure_0 = yield obj7.post(obj1);
      obj = closure_1_1(573);
      const obj6 = { type: "LOGIN_SUCCESS", token: null };
      obj6[1] = closure_0.body.token;
      obj.dispatch(obj6);
      return closure_0.body.user_id;
    })();
  },
  authorizePayment(token) {
    obj = _modDef4753;
    obj = { url: closure_9.AUTHORIZE_PAYMENT, body: obj, trackedActionData: null, rejectWithError: true };
    obj = { token };
    obj[2] = { event: encodeProperties.NetworkActionNames.AUTHORIZE_PAYMENT };
    return obj.post(obj);
  },
  authorizeIPAddress(closure_0) {
    obj = _modDef4753;
    obj = { url: closure_9.AUTHORIZE_IP, body: obj, trackedActionData: null, rejectWithError: true };
    obj = { token: closure_0 };
    obj[2] = { event: encodeProperties.NetworkActionNames.AUTHORIZE_IP };
    return obj.post(obj);
  },
  verifyResend() {
    obj = _modDef4753;
    obj = { url: closure_9.VERIFY_RESEND, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { event: encodeProperties.NetworkActionNames.USER_VERIFY_RESEND };
    obj[2] = obj;
    obj[3] = sendRequest.rejectWithMigratedError();
    return obj.post(obj);
  },
  resetPassword(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return callback(function* () {
      if (token === 2) {
        token = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          token = 2;
          if (0 === ticket) {
            if (arg0 === 1) {
              token = 3;
              throw arg1;
            } else if (arg0 === 2) {
              token = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let mfa = tmp3;
              let body = tmp7;
              body = undefined;
              mfa = undefined;
              let sms;
              dependencyMap = undefined;
              ticket = undefined;
              token = undefined;
              let backup;
              let totp;
              c8 = undefined;
              closure_1_1(573).dispatch({ type: "LOGIN" });
              obj1 = { token: null, password: null, source: null };
              obj1[0] = closure_1_0;
              obj1[1] = closure_1_1;
              obj1[2] = closure_1_2;
              const Storage2 = closure_1_0(510).Storage;
              let value = Storage2.get(closure_1_10);
              const tmp75 = closure_1_15();
              let tmp31 = null != tmp75;
              if (tmp31) {
                tmp31 = null != value;
              }
              if (tmp31) {
                obj1.push_provider = tmp75;
                obj1.push_token = value;
              }
              const Storage = closure_1_0(510).Storage;
              value = Storage.get(closure_1_11);
              let tmp37 = null != closure_1_14;
              if (tmp37) {
                tmp37 = null != value;
              }
              if (tmp37) {
                obj1.push_voip_provider = tmp36;
                obj1.push_voip_token = value;
              }
              dependencyMap = 1;
              let obj4 = closure_1_1(4753);
              let obj2 = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
              obj2[0] = constants.RESET_PASSWORD;
              obj2[1] = obj1;
              const obj3 = { event: null };
              obj3[0] = closure_1_0(1250).NetworkActionNames.USER_RESET_PASSWORD;
              obj2[3] = obj3;
              const obj12 = closure_1_1(573);
              tmp36 = closure_1_14;
              obj2[4] = closure_1_0(1272).rejectWithMigratedError();
              ticket = 2;
              token = 1;
              obj4 = { value: null, done: false };
              obj4[0] = obj4.post(obj2);
              return obj4;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            constants = sms;
            const v6OrEarlierAPIError = new closure_1_0(4461).V6OrEarlierAPIError(constants);
            obj2 = closure_1_1(573);
            const obj5 = { type: "LOGIN_FAILURE", error: null };
            obj5[1] = v6OrEarlierAPIError;
            obj2.dispatch(obj5);
            throw v6OrEarlierAPIError;
          } else if (arg0 === 1) {
            token = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            token = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            body = arg1.body;
            mfa = body.mfa;
            sms = body.sms;
            dependencyMap = body.webauthn;
            ticket = body.ticket;
            token = body.token;
            backup = body.backup;
            totp = body.totp;
            let tmp14 = closure_1_18;
            if (mfa) {
              let SUCCESS = tmp14.MFA;
            } else {
              SUCCESS = tmp14.SUCCESS;
            }
            obj = { result: null, sms: null, webauthn: null, ticket: null, token: null, backup: null, totp: null };
            obj[0] = SUCCESS;
            obj[1] = closure_1_2;
            obj[2] = dependencyMap;
            obj[3] = c4;
            obj[4] = token;
            obj[5] = closure_1_6;
            tmp14 = closure_1_7;
            obj[6] = closure_1_7;
            dependencyMap = 0;
            token = 3;
          }
        } catch (tmp45) {
          sms = tmp45;
          if (tmp4 === dependencyMap) {
            token = tmp2;
            throw tmp45;
          } else {
            ticket = tmp;
          }
        }
      }
    })();
  },
  resetPasswordMFAv2(arg0) {
    ({
      method: require,
      code: importDefault,
      ticket: importAll,
      password: dependencyMap,
      token: closure_4,
      source: closure_5,
    } = arg0);
    return callback(function* () {
      const obj5 = v02(closure_1_3[8]);
      obj5.dispatch({ type: "LOGIN_MFA" });
      obj1 = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
      obj1[0] = closure_1_9.RESET_PASSWORD;
      const obj2 = { code: null, ticket: null, password: null, token: null, source: null, method: null };
      obj2[0] = v02;
      obj2[1] = closure_1_2;
      obj2[2] = closure_1_3;
      obj2[3] = closure_1_4;
      obj2[4] = closure_1_5;
      obj2[5] = v0;
      obj1[1] = obj2;
      const obj3 = { event: null, properties: null };
      obj3[0] = v0(closure_1_3[13]).NetworkActionNames.USER_RESET_PASSWORD;
      obj3[1] = { mfa: true };
      obj1[3] = obj3;
      yield v02(closure_1_3[12]).post(obj1);
      return arg1.body.token;
    })();
  },
  forgotPassword(closure_1_6) {
    closure_0 = closure_1_6;
    return callback(function* () {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp3;
              let body = tmp7;
              body = undefined;
              c1 = undefined;
              v6OrEarlierAPIError(573).dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
              dependencyMap = 1;
              const obj12 = v6OrEarlierAPIError(573);
              obj1 = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
              obj1[0] = closure_1_9.FORGOT_PASSWORD;
              const obj2 = { login: null };
              obj2[0] = closure_1_0;
              obj1[1] = obj2;
              let obj3 = { event: null };
              obj3[0] = closure_1_0(1250).NetworkActionNames.FORGOT_PASSWORD;
              obj1[3] = obj3;
              const obj13 = v6OrEarlierAPIError(4753);
              obj1[4] = closure_1_0(1272).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj13.post(obj1);
              return obj4;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            v6OrEarlierAPIError = new closure_1_0(4461).V6OrEarlierAPIError(closure_2);
            if (v6OrEarlierAPIError.code === closure_1_12.PHONE_VERIFICATION_REQUIRED) {
              let obj5 = v6OrEarlierAPIError(573);
              obj5 = { type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION", credentials: null };
              const obj6 = { login: null };
              obj6[0] = body;
              obj5[1] = obj6;
              obj5.dispatch(obj5);
              c5 = 3;
              return { value: false, done: true };
            } else {
              obj3 = v6OrEarlierAPIError(573);
              const obj7 = { type: "LOGIN_FAILURE", error: null };
              obj7[1] = v6OrEarlierAPIError;
              obj3.dispatch(obj7);
              throw v6OrEarlierAPIError;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            body = arg1;
            obj = v6OrEarlierAPIError(573);
            obj.dispatch({ type: "FORGOT_PASSWORD_SENT" });
            dependencyMap = 0;
            c5 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = body.body.method;
            return obj9;
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
    obj = dispatcherDefault;
    obj = { type: "FINGERPRINT", fingerprint };
    obj.dispatch(obj);
  },
  getExperiments(withGuildExperiments) {
    obj = dispatcherDefault;
    obj = { type: "EXPERIMENTS_FETCH", withGuildExperiments };
    obj.dispatch(obj);
  },
  getLocationMetadata() {
    if (null == nextPromise) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        callback(573).dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: true });
      }, 5000);
      const HTTP = sendRequest.HTTP;
      obj = { url: null, retries: 2, oldFormErrors: true, rejectWithError: true };
      obj[0] = closure_9.AUTH_LOCATION_METADATA;
      const value = HTTP.get(obj);
      nextPromise = value.then(
        (body) => {
          clearTimeout(closure_4);
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
            obj = callback(573);
            obj = { type: "SET_CONSENT_REQUIRED", consentRequired: null };
            obj[1] = flag;
            obj.dispatch(obj);
          }
          let country_code;
          if (body != null) {
            const body2 = body.body;
            if (body2 != null) {
              country_code = body2.country_code;
            }
          }
          callback(573).dispatch({ type: "SET_LOCATION_METADATA", countryCode: country_code });
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
            ({ required: obj4[0], pre_checked: obj4[1], pre_checked: obj4[2] } = body.body.promotional_email_opt_in);
            callback2(obj);
          }
        },
        () => {
          clearTimeout(closure_4);
          callback(573).dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: true });
          c17 = null;
        },
      );
    }
    return nextPromise;
  },
  closeSuspendedUser() {
    dispatcherDefault.dispatch({ type: "CLOSE_SUSPENDED_USER" });
  },
};
let tmp4 = new timestampDefault("AuthenticationActionCreators");
let result = require("set").fileFinishedImporting("actions/AuthenticationActionCreators.tsx");

export default obj;
export const PasswordResetResult = obj;
