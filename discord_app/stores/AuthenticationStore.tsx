// discord_app/stores/AuthenticationStore.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import extractId from "../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage6 from "../../discord_common/js/packages/storage/Storage.tsx";
import expandEventPropertiesDefault from "../utils/AnalyticsUtils.tsx";
import setSecondaryTokenAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import _modDef1205 from "../utils/SentryUtils.native.tsx";
import transitionTo from "../modules/routing/router_utils.tsx";
import getToken from "../utils/AuthenticationUtils.tsx";
import PermissionOverwriteType from "../flow/Server.tsx";
import prototypeDefault from "../errors/APIError.tsx";
import getAuthenticationErrorsFromAPIError from "../modules/auth/getAuthenticationErrorsFromAPIError.tsx";
import isStaffDefault from "../modules/user/isStaffFromRawUser.tsx";
import fetchExperiments from "../modules/experiments/fetchExperiments.tsx";
import closure_6 from "BrowserHandoffStore.native.tsx";
import closure_7 from "MobileCacheSnapshotStore.tsx";
import ME from "../Constants.tsx";
import result from "../modules/age_gate/AgeGateConstants.tsx";
import importDefaultResult from "../Dispatcher.tsx";

require = arg1;
function fetchFingerprint(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const Storage = Storage6.Storage;
  closure_21 = Storage.get(fingerprint);
  const Storage2 = Storage6.Storage;
  let value = Storage2.get(analytics_installation);
  if (null == value) {
    const Storage3 = tmp(592).Storage;
    value = Storage3.get("analytics_installation");
    let tmp4 = null;
    if (null != value) {
      tmp4 = null;
      if (value.length > 0) {
        const Storage4 = tmp(592).Storage;
        const result = Storage4.set(analytics_installation, value);
        tmp4 = value;
      }
    }
    value = tmp4;
  }
  c23 = value;
  if (null != nextPromise) {
    return nextPromise;
  } else {
    if (null != closure_21) {
      let token = closure_21;
    } else {
      let obj = setSecondaryTokenAll;
      token = obj.getToken();
    }
    let tmpResult = tmp(1219);
    if (tmpResult.isValidFingerprintRoute()) {
      if (flag) {
        if (!handoffAvailable.isHandoffAvailable()) {
          obj = {};
          const superPropertiesBase64 = expandEventPropertiesDefault.getSuperPropertiesBase64();
          if (null != superPropertiesBase64) {
            obj["X-Super-Properties"] = superPropertiesBase64;
          }
          if (null != closure_21) {
            obj["X-Fingerprint"] = closure_21;
          }
          if (null != c23) {
            obj["X-Installation-ID"] = c23;
          }
          tmpResult = tmp(14056);
          obj = { withGuildExperiments: null, headers: null, context: null };
          obj[0] = true;
          obj[1] = obj;
          obj1 = { location: null };
          const obj4 = expandEventPropertiesDefault;
          obj1[0] = tmp(1219).getFingerprintLocation();
          obj[2] = obj1;
          const experiments = tmpResult.fetchExperiments(obj);
          nextPromise = experiments.then(
            (body) => {
              body = body.body;
              ({ fingerprint, installation } = body);
              let tmp = null != installation;
              ({ assignments, guild_experiments } = body);
              if (tmp) {
                tmp = installation.length > 0;
              }
              if (tmp) {
                let obj = callback2(706);
                obj = { type: "INSTALLATION_ID", installation: null };
                obj[1] = installation;
                obj.dispatch(obj);
              }
              if (fingerprint) {
                obj = { type: "FINGERPRINT", fingerprint: null };
                obj[1] = fingerprint;
                callback2(706).dispatch(obj);
                const obj3 = callback2(706);
              }
              callback2(706).dispatch({
                type: "EXPERIMENTS_FETCH_SUCCESS",
                fingerprint,
                experiments: assignments,
                guildExperiments: guild_experiments,
              });
              c33 = null;
              const obj5 = callback2(706);
              callback(14057).onExperimentsLoaded();
            },
            () => {
              c33 = null;
              callback2(706).dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
          );
          const tmpResult1 = tmp(1219);
        }
        return nextPromise;
      }
    }
    nextPromise = Promise.resolve();
  }
}
function handleLogout(isSwitchingAccount) {
  let obj = setSecondaryTokenAll;
  const Storage = Storage6.Storage;
  obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
  closure_13.verbose("handleLogout called.", obj);
  const tmp2 = null != obj.getToken();
  const obj3 = setSecondaryTokenAll;
  const Storage2 = Storage6.Storage;
  obj = {
    tokenManagerHasToken: null != setSecondaryTokenAll.getToken(),
    storageHasToken: null != Storage2.get(closure_12),
  };
  closure_13.verbose("removeAuthToken called.", obj);
  const tmp5 = null != setSecondaryTokenAll.getToken();
  setSecondaryTokenAll.removeAnalyticsToken();
  const obj5 = setSecondaryTokenAll;
  let flag;
  const obj6 = setSecondaryTokenAll;
  if (isSwitchingAccount != null) {
    flag = isSwitchingAccount.isSwitchingAccount;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    if (removeTokenResult) {
      closure_22 = c21;
      c21 = null;
      const Storage3 = tmp3(592).Storage;
      Storage3.remove(fingerprint);
    }
    fetchFingerprint();
  }
  const PersistedStore = initializeDefault.PersistedStore;
  obj1 = {
    omit: [
      "InstallationManagerStore",
      "AgeGateStore",
      "NativePermissionsStore",
      "MultiAccountStore",
      "DraftStore",
      "OverlayStoreV2",
      "StreamerModeStore",
      "LoginRequiredActionStore",
      "LayoutStore",
      "OverlaySettingsStore",
      "ApexExperimentStore",
      "AccessibilityStore",
    ],
    type: null,
  };
  isSwitchingAccount = undefined;
  if (isSwitchingAccount != null) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
  }
  let str = "all";
  if (isSwitchingAccount) {
    str = "user-data-only";
  }
  obj1[1] = str;
  PersistedStore.clearAll(obj1);
  const Store = tmp14(586).Store;
  const result = Store.removeAllConditionalListeners();
  closure_7.clearAll();
  removeTokenResult = setSecondaryTokenAll.removeToken();
  _modDef1205.clearUser();
  const Storage4 = tmp3(592).Storage;
  Storage4.remove(user_id_cache);
  c17 = null;
  c18 = null;
  let isSwitchingAccount1;
  if (isSwitchingAccount != null) {
    isSwitchingAccount1 = isSwitchingAccount.isSwitchingAccount;
  }
  closure_25 = isSwitchingAccount1 ? tmp22.LOGGING_IN : tmp22.NONE;
  c28 = "";
  c30 = null;
  c29 = false;
  c35 = false;
  c36 = false;
  const items = [];
  if (c31) {
    items.push({ type: "totp" });
  }
  if (c32) {
    items.push({ type: "backup" });
  }
  if (c29) {
    items.push({ type: "sms" });
  }
}
({ AnalyticEvents: closure_8, LoginStates } = ME);
({ Platforms: c10, Routes: unpackModuleId, TOKEN_KEY: closure_12 } = ME);
({ EXISTING_USER_AGE_GATE_MODAL_KEY, NEW_USER_AGE_GATE_MODAL_KEY } = result);
let closure_13 = new timestampDefault("AuthenticationStore");
let fingerprint = "fingerprint";
const analytics_installation = "analytics_installation";
const user_id_cache = "user_id_cache";
let c17 = null;
let c18 = null;
let c19 = null;
let c20 = null;
let c21 = null;
let c22 = null;
let c23 = null;
let c24 = null;
let NONE = LoginStates.NONE;
let c26 = false;
let closure_27 = [];
let c28 = "";
let c29 = false;
let c30 = null;
let c31 = false;
let c32 = false;
let c33 = null;
let c34 = null;
let c35 = false;
let c36 = false;
let closure_37 = [];
let Store = initializeDefault.Store;
class AuthenticationStore extends Store {}
const prototype = AuthenticationStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage6.Storage;
  closure_17 = Storage.get(user_id_cache);
  const Storage2 = Storage6.Storage;
  let value = Storage2.get(analytics_installation);
  if (null == value) {
    const Storage3 = tmp(592).Storage;
    value = Storage3.get("analytics_installation");
    let tmp4 = null;
    if (null != value) {
      tmp4 = null;
      if (value.length > 0) {
        const Storage4 = tmp(592).Storage;
        const result = Storage4.set(analytics_installation, value);
        tmp4 = value;
      }
    }
    value = tmp4;
  }
  const _null = value;
  if (null == obj.getToken()) {
    let tmp7 = null == _null;
    if (!tmp7) {
      tmp7 = 0 === _null.length;
    }
    if (tmp7) {
      function fireApex() {
        const installationExperiments = callback(11302).fetchInstallationExperiments(null);
      }
      promise.then(fireApex, fireApex);
    }
    promise = fetchFingerprint();
  }
  this.addChangeListener(() => callback(14059).setClientState(closure_17));
};
prototype["getLoginStatus"] = function getLoginStatus() {
  return NONE;
};
prototype["getId"] = function getId() {
  return c17;
};
prototype["getSessionId"] = function getSessionId() {
  return c18;
};
prototype["getAuthSessionIdHash"] = function getAuthSessionIdHash() {
  return c19;
};
prototype["getStaticAuthSessionId"] = function getStaticAuthSessionId() {
  return c20;
};
prototype["getToken"] = function getToken() {
  return getToken.getToken();
};
prototype["isAuthenticated"] = function isAuthenticated() {
  return getToken.isAuthenticated();
};
prototype["getFingerprint"] = function getFingerprint() {
  return c21;
};
prototype["getInstallationForTracking"] = function getInstallationForTracking() {
  let tmp = null;
  if (obj.canUseInstallationId()) {
    tmp = c23;
  }
  return tmp;
};
prototype["getAnalyticsToken"] = function getAnalyticsToken() {
  let analyticsToken = c24;
  if (c24 == null) {
    analyticsToken = setSecondaryTokenAll.getAnalyticsToken();
    const obj = setSecondaryTokenAll;
  }
  return analyticsToken;
};
prototype["getMFATicket"] = function getMFATicket() {
  return c28;
};
prototype["getMFAMethods"] = function getMFAMethods() {
  return closure_37;
};
prototype["getLoginInstanceId"] = function getLoginInstanceId() {
  return closure_5;
};
prototype["hasTOTPEnabled"] = function hasTOTPEnabled() {
  return closure_27.includes(PermissionOverwriteType.AuthenticatorType.TOTP);
};
prototype["getCredentials"] = function getCredentials() {
  if (null == closure_4) {
    const _Error = Error;
    error = new Error("no credentials");
    throw error;
  } else {
    return closure_4;
  }
};
prototype["allowLogoutRedirect"] = function allowLogoutRedirect() {
  return !c26;
};
prototype["getSuspendedUserToken"] = function getSuspendedUserToken() {
  return c34;
};
prototype["getIsPasswordlessActive"] = function getIsPasswordlessActive() {
  return c35;
};
prototype["attemptedPasswordLogin"] = function attemptedPasswordLogin() {
  return c36;
};
AuthenticationStore.displayName = "AuthenticationStore";
let tmp4 = new timestampDefault("AuthenticationStore");
const authenticationStore = new AuthenticationStore(
  importDefaultResult,
  {
    CONNECTION_OPEN: function handleConnectionOpen(arg0) {
      ({ user, analyticsToken, auth, apexExperiments } = arg0);
      ({ sessionId, authSessionIdHash, staticAuthSessionId } = arg0);
      let obj = setSecondaryTokenAll;
      const Storage = Storage6.Storage;
      obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
      closure_13.verbose("handleConnectionOpen called", obj);
      const tmp = importAll;
      const tmp3 = null != obj.getToken();
      ({ id, username, email } = user);
      _modDef1205.setUser(id, username, email, isStaffDefault(user));
      const obj3 = _modDef1205;
      setSecondaryTokenAll.setAnalyticsToken(analyticsToken);
      id = user.id;
      if (undefined !== auth) {
        const authenticator_types = auth.authenticator_types;
      }
      const Storage2 = tmp4(592).Storage;
      const result = Storage2.set(user_id_cache, user.id);
      let installation;
      if (apexExperiments != null) {
        installation = apexExperiments.installation;
      }
      if (null != installation) {
        installation = apexExperiments.installation;
        if (null == installation) {
          let tmp6Result = tmp6(14058);
          if (tmp6Result.canUseInstallationId()) {
            const Storage3 = tmp4(592).Storage;
            const result1 = Storage3.set(analytics_installation, installation);
          }
        }
      }
      const Storage4 = tmp4(592).Storage;
      if (Storage4.get(constants.APP_FIRST_LOGIN, true)) {
        tmp6Result = tmp6(695);
        obj = { platform: null };
        obj[0] = constants2.IOS;
        tmp6Result.track(tmp15.APP_FIRST_LOGIN, obj);
        const Storage5 = tmp4(592).Storage;
        const result2 = Storage5.set(tmp15.APP_FIRST_LOGIN, false);
      }
    },
    OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
      ({ user, analyticsToken } = arg0);
      ({ sessionId, token } = arg0);
      let obj = _modDef1205;
      ({ id, username, email } = user);
      obj.setUser(id, username, email, isStaffDefault(user));
      const id2 = user.id;
      const obj2 = setSecondaryTokenAll;
      const tmp = importDefault;
      const Storage = Storage6.Storage;
      obj = {
        tokenManagerHasToken: null != setSecondaryTokenAll.getToken(),
        storageHasToken: null != Storage.get(closure_12),
      };
      closure_13.verbose("setAuthToken called.", obj);
      let tmp8 = null != id2;
      if (tmp8) {
        tmp8 = id2 === id;
      }
      if (!tmp8) {
        let tmp4Result = tmp4(704);
        tmp4Result.removeAnalyticsToken();
      }
      tmp4Result = tmp4(704);
      tmp4Result.setToken(token, id2);
      if (null != analyticsToken) {
        tmp4(704).setAnalyticsToken(analyticsToken);
        const tmp4Result1 = tmp4(704);
      }
      closure_22 = c21;
      c21 = null;
      const Storage2 = tmp6(592).Storage;
      Storage2.remove(fingerprint);
      id = user.id;
      const Storage3 = tmp6(592).Storage;
      const result = Storage3.set(user_id_cache, user.id);
    },
    CONNECTION_CLOSED: function handleConnectionClosed(code) {
      code = code.code;
      const combined = "handleConnectionClosed called with code " + code + ".";
      let obj = setSecondaryTokenAll;
      const Storage = Storage6.Storage;
      obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
      closure_13.verbose(combined, obj);
      if (4004 === code) {
        if (c26) {
          c26 = true;
          handleLogout();
          importDefaultResult.wait(() => {
            callback(1219).transitionTo(constants.REGISTER);
          });
        } else {
          obj = { user_id: null };
          const Storage2 = Storage6.Storage;
          obj[0] = Storage2.get(user_id_cache);
          expandEventPropertiesDefault.track(constants.APP_USER_DEAUTHENTICATED, obj);
          handleLogout();
          const _setImmediate = setImmediate;
          setImmediate(() => callback(1219).transitionTo(constants.DEFAULT_LOGGED_OUT));
          const obj3 = expandEventPropertiesDefault;
        }
      }
    },
    AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
      authSessionIdHash = authSessionIdHash.authSessionIdHash;
    },
    LOGIN: function handleLogin(arg0) {
      const LOGGING_IN = LoginStates.LOGGING_IN;
      let tmp2 = closure_36;
      if (!closure_36) {
        tmp2 = true === tmp;
      }
      closure_36 = tmp2;
    },
    LOGIN_SUCCESS: function handleLoginSuccess(token) {
      NONE = LoginStates.NONE;
      let obj = setSecondaryTokenAll;
      const Storage = Storage6.Storage;
      obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
      closure_13.verbose("setAuthToken called.", obj);
      const tmp = null != obj.getToken();
      setSecondaryTokenAll.removeAnalyticsToken();
      const obj3 = setSecondaryTokenAll;
      setSecondaryTokenAll.setToken(token.token, undefined);
      closure_22 = c21;
      c21 = null;
      const Storage2 = Storage6.Storage;
      Storage2.remove(fingerprint);
      c28 = "";
      c29 = false;
      c30 = null;
      c5 = null;
      const items = [];
      if (c31) {
        items.push({ type: "totp" });
      }
      if (c32) {
        items.push({ type: "backup" });
      }
      if (c29) {
        items.push({ type: "sms" });
      }
      c35 = false;
    },
    LOGIN_FAILURE: function handleLoginFailure(error) {
      c28 = "";
      c29 = false;
      c30 = null;
      c5 = null;
      const items = [];
      if (c31) {
        items.push({ type: "totp" });
      }
      if (c32) {
        items.push({ type: "backup" });
      }
      if (c29) {
        items.push({ type: "sms" });
      }
      if (null != obj.getAuthenticationErrorsFromV6OrEarlierAPIError(error.error).date_of_birth) {
        NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
    },
    LOGIN_MFA_STEP: function handleLoginMFAStep(arg0) {
      ({ ticket, webauthn } = arg0);
      if (null != ticket) {
        c29 = tmp;
        if (webauthn == null) {
          webauthn = null;
        }
        c32 = tmp2;
        c31 = tmp3;
        closure_5 = tmp4;
        const items = [];
        if (null != webauthn) {
          const obj = { type: "webauthn", challenge: null };
          obj[1] = webauthn;
          items.push(obj);
        }
        if (c31) {
          items.push({ type: "totp" });
        }
        if (c32) {
          items.push({ type: "backup" });
        }
        if (c29) {
          items.push({ type: "sms" });
        }
      }
      const MFA_STEP = LoginStates.MFA_STEP;
    },
    LOGIN_MFA: function handleLoginMFA() {
      const LOGGING_IN_MFA = LoginStates.LOGGING_IN_MFA;
    },
    LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function handleLoginAccountPendingDeletion(credentials) {
      closure_25 = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
      credentials = credentials.credentials;
    },
    LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
      const ACCOUNT_DISABLED = LoginStates.ACCOUNT_DISABLED;
      credentials = credentials.credentials;
    },
    LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
      closure_25 = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
      credentials = credentials.credentials;
    },
    LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
      const PHONE_IP_AUTHORIZATION = LoginStates.PHONE_IP_AUTHORIZATION;
      credentials = credentials.credentials;
    },
    LOGIN_RESET: function handleLoginReset(isMultiAccount) {
      NONE = LoginStates.NONE;
      c28 = "";
      c29 = false;
      c30 = null;
      c5 = null;
      c4 = null;
      if (!isMultiAccount.isMultiAccount) {
        const items = [];
        if (c31) {
          items.push({ type: "totp" });
        }
        if (c32) {
          items.push({ type: "backup" });
        }
        if (c29) {
          items.push({ type: "sms" });
        }
        let obj = setSecondaryTokenAll;
        const Storage = Storage6.Storage;
        obj = { tokenManagerHasToken: null, storageHasToken: null };
        obj[0] = null != obj.getToken();
        obj[1] = null != Storage.get(closure_12);
        closure_13.verbose("removeAuthToken called.", obj);
        const tmp9 = null != obj.getToken();
        setSecondaryTokenAll.removeAnalyticsToken();
        const obj3 = setSecondaryTokenAll;
        setSecondaryTokenAll.removeToken();
        fetchFingerprint(false);
        const obj4 = setSecondaryTokenAll;
      }
    },
    LOGIN_STATUS_RESET: function handleLoginStatusReset() {
      NONE = LoginStates.NONE;
    },
    LOGIN_SUSPENDED_USER: function handleSuspendedUserLogin(suspendedUserToken) {
      c35 = false;
      suspendedUserToken = suspendedUserToken.suspendedUserToken;
      setImmediate(() => callback(table[7]).transitionTo(constants.ACCOUNT_STANDING));
    },
    LOGOUT: handleLogout,
    FINGERPRINT: function handleFingerprint(fingerprint) {
      fingerprint = fingerprint.fingerprint;
      if (null == fingerprint) {
        if (null != fingerprint) {
          let extractIdResult = null;
          if (null != fingerprint) {
            extractIdResult = extractId.extractId(fingerprint);
            const obj6 = extractId;
          }
          let obj = { old_fingerprint: null, new_fingerprint: null };
          obj[0] = extractIdResult;
          const obj5 = expandEventPropertiesDefault;
          obj[1] = extractId.extractId(fingerprint);
          obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
          const Storage = Storage6.Storage;
          const result = Storage.set(fingerprint, fingerprint);
          const obj8 = extractId;
        } else {
          fetchFingerprint();
        }
      } else {
        let tmp2 = null != fingerprint;
        if (tmp2) {
          tmp2 = fingerprint !== fingerprint;
        }
        if (tmp2) {
          obj = expandEventPropertiesDefault;
          obj = { fingerprint: null, dropped_fingerprint: null };
          obj[0] = extractId.extractId(fingerprint);
          const obj3 = extractId;
          obj[1] = extractId.extractId(fingerprint);
          obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
          const obj4 = extractId;
        }
      }
    },
    INSTALLATION_ID: function handleInstallationId(installation) {
      installation = installation.installation;
      if (null != installation) {
        if (installation.length > 0) {
          return false;
        }
      }
      if (obj.canUseInstallationId()) {
        const Storage = Storage6.Storage;
        const result = Storage.set(analytics_installation, installation);
      }
    },
    REGISTER_SUCCESS: function handleRegisterSuccess(token) {
      let obj = setSecondaryTokenAll;
      const Storage = Storage6.Storage;
      obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
      closure_13.verbose("setAuthToken called.", obj);
      const tmp = null != obj.getToken();
      setSecondaryTokenAll.removeAnalyticsToken();
      const obj3 = setSecondaryTokenAll;
      setSecondaryTokenAll.setToken(token.token, undefined);
      closure_22 = c21;
      c21 = null;
      const Storage2 = Storage6.Storage;
      Storage2.remove(fingerprint);
    },
    FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
      const FORGOT_PASSWORD = LoginStates.FORGOT_PASSWORD;
    },
    FORGOT_PASSWORD_SENT: function handleForgotPasswordSent() {
      NONE = LoginStates.NONE;
    },
    UPDATE_TOKEN: function handleUpdateToken(userId) {
      userId = userId.userId;
      let obj = setSecondaryTokenAll;
      const Storage = Storage6.Storage;
      obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
      closure_13.verbose("handleUpdateToken called", obj);
      const tmp3 = null != obj.getToken();
      const tmp4 = require;
      const obj3 = setSecondaryTokenAll;
      const Storage2 = Storage6.Storage;
      obj = {
        tokenManagerHasToken: null != setSecondaryTokenAll.getToken(),
        storageHasToken: null != Storage2.get(closure_12),
      };
      closure_13.verbose("setAuthToken called.", obj);
      let tmp8 = null != userId;
      if (tmp8) {
        tmp8 = userId === c17;
      }
      if (!tmp8) {
        let tmpResult = tmp(704);
        tmpResult.removeAnalyticsToken();
      }
      tmpResult = tmp(704);
      tmpResult.setToken(userId.token, userId);
      closure_22 = c21;
      c21 = null;
      const Storage3 = Storage6.Storage;
      Storage3.remove(fingerprint);
    },
    EXPERIMENTS_FETCH(withGuildExperiments) {
      let obj = {};
      const superPropertiesBase64 = expandEventPropertiesDefault.getSuperPropertiesBase64();
      if (null != superPropertiesBase64) {
        obj["X-Super-Properties"] = superPropertiesBase64;
      }
      if (null != c21) {
        obj["X-Fingerprint"] = c21;
      }
      if (null != c23) {
        obj["X-Installation-ID"] = c23;
      }
      const obj2 = expandEventPropertiesDefault;
      obj = { withGuildExperiments: withGuildExperiments.withGuildExperiments, headers: obj, context: null };
      obj = { location: null };
      let obj3 = fetchExperiments;
      obj[0] = transitionTo.getFingerprintLocation();
      obj[2] = obj;
      const experiments = obj3.fetchExperiments(obj);
      closure_33 = experiments.then(
        (body) => {
          body = body.body;
          ({ fingerprint, installation } = body);
          let tmp = null != installation;
          ({ assignments, guild_experiments } = body);
          if (tmp) {
            tmp = installation.length > 0;
          }
          if (tmp) {
            let obj = callback2(706);
            obj = { type: "INSTALLATION_ID", installation: null };
            obj[1] = installation;
            obj.dispatch(obj);
          }
          if (fingerprint) {
            obj = { type: "FINGERPRINT", fingerprint: null };
            obj[1] = fingerprint;
            callback2(706).dispatch(obj);
            const obj3 = callback2(706);
          }
          callback2(706).dispatch({
            type: "EXPERIMENTS_FETCH_SUCCESS",
            fingerprint,
            experiments: assignments,
            guildExperiments: guild_experiments,
          });
          c33 = null;
          const obj5 = callback2(706);
          callback(14057).onExperimentsLoaded();
        },
        () => {
          c33 = null;
          callback2(706).dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
        },
      );
    },
    CURRENT_USER_UPDATE: function handleUserUpdate(user) {
      user = user.user;
      const id = user.id;
      if (undefined !== user.authenticator_types) {
        const authenticator_types = user.authenticator_types;
      }
      const Storage = Storage6.Storage;
      const result = Storage.set(user_id_cache, user.id);
    },
    AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: function handleAgeGateUnderage() {
      c26 = true;
      handleLogout();
      importDefaultResult.wait(() => {
        callback(1219).transitionTo(constants.REGISTER);
      });
    },
    CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
      c34 = null;
      NONE = LoginStates.NONE;
      handleLogout();
      setImmediate(() => callback(table[7]).transitionTo(constants.DEFAULT_LOGGED_OUT));
    },
    PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
      error = error.error;
      c28 = "";
      c29 = false;
      c30 = null;
      c35 = false;
      c5 = null;
      if (error instanceof prototypeDefault) {
        if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
          NONE = LoginStates.LOGIN_AGE_GATE;
        } else {
          NONE = LoginStates.NONE;
        }
        obj = getAuthenticationErrorsFromAPIError;
      } else {
        NONE = LoginStates.NONE;
      }
    },
    PASSWORDLESS_START: function handlePasswordlessStart() {
      c35 = true;
    },
  },
  require("dispatcher").DispatchBand.Early,
);
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    ({ user, analyticsToken, auth, apexExperiments } = arg0);
    ({ sessionId, authSessionIdHash, staticAuthSessionId } = arg0);
    let obj = setSecondaryTokenAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("handleConnectionOpen called", obj);
    const tmp = importAll;
    const tmp3 = null != obj.getToken();
    ({ id, username, email } = user);
    _modDef1205.setUser(id, username, email, isStaffDefault(user));
    const obj3 = _modDef1205;
    setSecondaryTokenAll.setAnalyticsToken(analyticsToken);
    id = user.id;
    if (undefined !== auth) {
      const authenticator_types = auth.authenticator_types;
    }
    const Storage2 = tmp4(592).Storage;
    const result = Storage2.set(user_id_cache, user.id);
    let installation;
    if (apexExperiments != null) {
      installation = apexExperiments.installation;
    }
    if (null != installation) {
      installation = apexExperiments.installation;
      if (null == installation) {
        let tmp6Result = tmp6(14058);
        if (tmp6Result.canUseInstallationId()) {
          const Storage3 = tmp4(592).Storage;
          const result1 = Storage3.set(analytics_installation, installation);
        }
      }
    }
    const Storage4 = tmp4(592).Storage;
    if (Storage4.get(constants.APP_FIRST_LOGIN, true)) {
      tmp6Result = tmp6(695);
      obj = { platform: null };
      obj[0] = constants2.IOS;
      tmp6Result.track(tmp15.APP_FIRST_LOGIN, obj);
      const Storage5 = tmp4(592).Storage;
      const result2 = Storage5.set(tmp15.APP_FIRST_LOGIN, false);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    ({ user, analyticsToken } = arg0);
    ({ sessionId, token } = arg0);
    let obj = _modDef1205;
    ({ id, username, email } = user);
    obj.setUser(id, username, email, isStaffDefault(user));
    const id2 = user.id;
    const obj2 = setSecondaryTokenAll;
    const tmp = importDefault;
    const Storage = Storage6.Storage;
    obj = {
      tokenManagerHasToken: null != setSecondaryTokenAll.getToken(),
      storageHasToken: null != Storage.get(closure_12),
    };
    closure_13.verbose("setAuthToken called.", obj);
    let tmp8 = null != id2;
    if (tmp8) {
      tmp8 = id2 === id;
    }
    if (!tmp8) {
      let tmp4Result = tmp4(704);
      tmp4Result.removeAnalyticsToken();
    }
    tmp4Result = tmp4(704);
    tmp4Result.setToken(token, id2);
    if (null != analyticsToken) {
      tmp4(704).setAnalyticsToken(analyticsToken);
      const tmp4Result1 = tmp4(704);
    }
    closure_22 = c21;
    c21 = null;
    const Storage2 = tmp6(592).Storage;
    Storage2.remove(fingerprint);
    id = user.id;
    const Storage3 = tmp6(592).Storage;
    const result = Storage3.set(user_id_cache, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    code = code.code;
    const combined = "handleConnectionClosed called with code " + code + ".";
    let obj = setSecondaryTokenAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose(combined, obj);
    if (4004 === code) {
      if (c26) {
        c26 = true;
        handleLogout();
        importDefaultResult.wait(() => {
          callback(1219).transitionTo(constants.REGISTER);
        });
      } else {
        obj = { user_id: null };
        const Storage2 = Storage6.Storage;
        obj[0] = Storage2.get(user_id_cache);
        expandEventPropertiesDefault.track(constants.APP_USER_DEAUTHENTICATED, obj);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => callback(1219).transitionTo(constants.DEFAULT_LOGGED_OUT));
        const obj3 = expandEventPropertiesDefault;
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
  },
  LOGIN: function handleLogin(arg0) {
    const LOGGING_IN = LoginStates.LOGGING_IN;
    let tmp2 = closure_36;
    if (!closure_36) {
      tmp2 = true === tmp;
    }
    closure_36 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    NONE = LoginStates.NONE;
    let obj = setSecondaryTokenAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("setAuthToken called.", obj);
    const tmp = null != obj.getToken();
    setSecondaryTokenAll.removeAnalyticsToken();
    const obj3 = setSecondaryTokenAll;
    setSecondaryTokenAll.setToken(token.token, undefined);
    closure_22 = c21;
    c21 = null;
    const Storage2 = Storage6.Storage;
    Storage2.remove(fingerprint);
    c28 = "";
    c29 = false;
    c30 = null;
    c5 = null;
    const items = [];
    if (c31) {
      items.push({ type: "totp" });
    }
    if (c32) {
      items.push({ type: "backup" });
    }
    if (c29) {
      items.push({ type: "sms" });
    }
    c35 = false;
  },
  LOGIN_FAILURE: function handleLoginFailure(error) {
    c28 = "";
    c29 = false;
    c30 = null;
    c5 = null;
    const items = [];
    if (c31) {
      items.push({ type: "totp" });
    }
    if (c32) {
      items.push({ type: "backup" });
    }
    if (c29) {
      items.push({ type: "sms" });
    }
    if (null != obj.getAuthenticationErrorsFromV6OrEarlierAPIError(error.error).date_of_birth) {
      NONE = LoginStates.LOGIN_AGE_GATE;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  LOGIN_MFA_STEP: function handleLoginMFAStep(arg0) {
    ({ ticket, webauthn } = arg0);
    if (null != ticket) {
      c29 = tmp;
      if (webauthn == null) {
        webauthn = null;
      }
      c32 = tmp2;
      c31 = tmp3;
      closure_5 = tmp4;
      const items = [];
      if (null != webauthn) {
        const obj = { type: "webauthn", challenge: null };
        obj[1] = webauthn;
        items.push(obj);
      }
      if (c31) {
        items.push({ type: "totp" });
      }
      if (c32) {
        items.push({ type: "backup" });
      }
      if (c29) {
        items.push({ type: "sms" });
      }
    }
    const MFA_STEP = LoginStates.MFA_STEP;
  },
  LOGIN_MFA: function handleLoginMFA() {
    const LOGGING_IN_MFA = LoginStates.LOGGING_IN_MFA;
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function handleLoginAccountPendingDeletion(credentials) {
    closure_25 = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
    credentials = credentials.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
    const ACCOUNT_DISABLED = LoginStates.ACCOUNT_DISABLED;
    credentials = credentials.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
    closure_25 = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
    credentials = credentials.credentials;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
    const PHONE_IP_AUTHORIZATION = LoginStates.PHONE_IP_AUTHORIZATION;
    credentials = credentials.credentials;
  },
  LOGIN_RESET: function handleLoginReset(isMultiAccount) {
    NONE = LoginStates.NONE;
    c28 = "";
    c29 = false;
    c30 = null;
    c5 = null;
    c4 = null;
    if (!isMultiAccount.isMultiAccount) {
      const items = [];
      if (c31) {
        items.push({ type: "totp" });
      }
      if (c32) {
        items.push({ type: "backup" });
      }
      if (c29) {
        items.push({ type: "sms" });
      }
      let obj = setSecondaryTokenAll;
      const Storage = Storage6.Storage;
      obj = { tokenManagerHasToken: null, storageHasToken: null };
      obj[0] = null != obj.getToken();
      obj[1] = null != Storage.get(closure_12);
      closure_13.verbose("removeAuthToken called.", obj);
      const tmp9 = null != obj.getToken();
      setSecondaryTokenAll.removeAnalyticsToken();
      const obj3 = setSecondaryTokenAll;
      setSecondaryTokenAll.removeToken();
      fetchFingerprint(false);
      const obj4 = setSecondaryTokenAll;
    }
  },
  LOGIN_STATUS_RESET: function handleLoginStatusReset() {
    NONE = LoginStates.NONE;
  },
  LOGIN_SUSPENDED_USER: function handleSuspendedUserLogin(suspendedUserToken) {
    c35 = false;
    suspendedUserToken = suspendedUserToken.suspendedUserToken;
    setImmediate(() => callback(table[7]).transitionTo(constants.ACCOUNT_STANDING));
  },
  LOGOUT: handleLogout,
  FINGERPRINT: function handleFingerprint(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (null == fingerprint) {
      if (null != fingerprint) {
        let extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = extractId.extractId(fingerprint);
          const obj6 = extractId;
        }
        let obj = { old_fingerprint: null, new_fingerprint: null };
        obj[0] = extractIdResult;
        const obj5 = expandEventPropertiesDefault;
        obj[1] = extractId.extractId(fingerprint);
        obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
        const Storage = Storage6.Storage;
        const result = Storage.set(fingerprint, fingerprint);
        const obj8 = extractId;
      } else {
        fetchFingerprint();
      }
    } else {
      let tmp2 = null != fingerprint;
      if (tmp2) {
        tmp2 = fingerprint !== fingerprint;
      }
      if (tmp2) {
        obj = expandEventPropertiesDefault;
        obj = { fingerprint: null, dropped_fingerprint: null };
        obj[0] = extractId.extractId(fingerprint);
        const obj3 = extractId;
        obj[1] = extractId.extractId(fingerprint);
        obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
        const obj4 = extractId;
      }
    }
  },
  INSTALLATION_ID: function handleInstallationId(installation) {
    installation = installation.installation;
    if (null != installation) {
      if (installation.length > 0) {
        return false;
      }
    }
    if (obj.canUseInstallationId()) {
      const Storage = Storage6.Storage;
      const result = Storage.set(analytics_installation, installation);
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess(token) {
    let obj = setSecondaryTokenAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("setAuthToken called.", obj);
    const tmp = null != obj.getToken();
    setSecondaryTokenAll.removeAnalyticsToken();
    const obj3 = setSecondaryTokenAll;
    setSecondaryTokenAll.setToken(token.token, undefined);
    closure_22 = c21;
    c21 = null;
    const Storage2 = Storage6.Storage;
    Storage2.remove(fingerprint);
  },
  FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
    const FORGOT_PASSWORD = LoginStates.FORGOT_PASSWORD;
  },
  FORGOT_PASSWORD_SENT: function handleForgotPasswordSent() {
    NONE = LoginStates.NONE;
  },
  UPDATE_TOKEN: function handleUpdateToken(userId) {
    userId = userId.userId;
    let obj = setSecondaryTokenAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("handleUpdateToken called", obj);
    const tmp3 = null != obj.getToken();
    const tmp4 = require;
    const obj3 = setSecondaryTokenAll;
    const Storage2 = Storage6.Storage;
    obj = {
      tokenManagerHasToken: null != setSecondaryTokenAll.getToken(),
      storageHasToken: null != Storage2.get(closure_12),
    };
    closure_13.verbose("setAuthToken called.", obj);
    let tmp8 = null != userId;
    if (tmp8) {
      tmp8 = userId === c17;
    }
    if (!tmp8) {
      let tmpResult = tmp(704);
      tmpResult.removeAnalyticsToken();
    }
    tmpResult = tmp(704);
    tmpResult.setToken(userId.token, userId);
    closure_22 = c21;
    c21 = null;
    const Storage3 = Storage6.Storage;
    Storage3.remove(fingerprint);
  },
  EXPERIMENTS_FETCH(withGuildExperiments) {
    let obj = {};
    const superPropertiesBase64 = expandEventPropertiesDefault.getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj["X-Super-Properties"] = superPropertiesBase64;
    }
    if (null != c21) {
      obj["X-Fingerprint"] = c21;
    }
    if (null != c23) {
      obj["X-Installation-ID"] = c23;
    }
    const obj2 = expandEventPropertiesDefault;
    obj = { withGuildExperiments: withGuildExperiments.withGuildExperiments, headers: obj, context: null };
    obj = { location: null };
    let obj3 = fetchExperiments;
    obj[0] = transitionTo.getFingerprintLocation();
    obj[2] = obj;
    const experiments = obj3.fetchExperiments(obj);
    closure_33 = experiments.then(
      (body) => {
        body = body.body;
        ({ fingerprint, installation } = body);
        let tmp = null != installation;
        ({ assignments, guild_experiments } = body);
        if (tmp) {
          tmp = installation.length > 0;
        }
        if (tmp) {
          let obj = callback2(706);
          obj = { type: "INSTALLATION_ID", installation: null };
          obj[1] = installation;
          obj.dispatch(obj);
        }
        if (fingerprint) {
          obj = { type: "FINGERPRINT", fingerprint: null };
          obj[1] = fingerprint;
          callback2(706).dispatch(obj);
          const obj3 = callback2(706);
        }
        callback2(706).dispatch({
          type: "EXPERIMENTS_FETCH_SUCCESS",
          fingerprint,
          experiments: assignments,
          guildExperiments: guild_experiments,
        });
        c33 = null;
        const obj5 = callback2(706);
        callback(14057).onExperimentsLoaded();
      },
      () => {
        c33 = null;
        callback2(706).dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
      },
    );
  },
  CURRENT_USER_UPDATE: function handleUserUpdate(user) {
    user = user.user;
    const id = user.id;
    if (undefined !== user.authenticator_types) {
      const authenticator_types = user.authenticator_types;
    }
    const Storage = Storage6.Storage;
    const result = Storage.set(user_id_cache, user.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: function handleAgeGateUnderage() {
    c26 = true;
    handleLogout();
    importDefaultResult.wait(() => {
      callback(1219).transitionTo(constants.REGISTER);
    });
  },
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    c34 = null;
    NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => callback(table[7]).transitionTo(constants.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    c28 = "";
    c29 = false;
    c30 = null;
    c35 = false;
    c5 = null;
    if (error instanceof prototypeDefault) {
      if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
        NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
      obj = getAuthenticationErrorsFromAPIError;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  PASSWORDLESS_START: function handlePasswordlessStart() {
    c35 = true;
  },
};
result = require("set").fileFinishedImporting("stores/AuthenticationStore.tsx");

export default authenticationStore;
