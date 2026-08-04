import initialize from "initialize";
import clearAll from "clearAll";
import ME from "ME";
import result from "result";
import { Store } from "initialize";
import importDefaultResult from "dispatcher";

let EXISTING_USER_AGE_GATE_MODAL_KEY;
let LoginStates;
let NEW_USER_AGE_GATE_MODAL_KEY;
let c10;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function fetchFingerprint(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const Storage = require(595) /* Storage */.Storage;
  let closure_21 = Storage.get(fingerprint);
  const Storage2 = require(595) /* Storage */.Storage;
  let value = Storage2.get(analytics_installation);
  if (null == value) {
    const Storage3 = tmp(595).Storage;
    value = Storage3.get("analytics_installation");
    let tmp4 = null;
    if (null != value) {
      tmp4 = null;
      if (value.length > 0) {
        const Storage4 = tmp(595).Storage;
        const result = Storage4.set(analytics_installation, value);
        tmp4 = value;
      }
    }
    value = tmp4;
  }
  let c23 = value;
  if (null != nextPromise) {
    return nextPromise;
  } else {
    if (null != closure_21) {
      let token = closure_21;
    } else {
      let obj = importAll(707);
      token = obj.getToken();
    }
    let tmpResult = tmp(1222);
    if (tmpResult.isValidFingerprintRoute()) {
      if (flag) {
        if (!handoffAvailable.isHandoffAvailable()) {
          obj = {};
          const superPropertiesBase64 = importDefault(698).getSuperPropertiesBase64();
          if (null != superPropertiesBase64) {
            obj["X-Super-Properties"] = superPropertiesBase64;
          }
          if (null != closure_21) {
            obj["X-Fingerprint"] = closure_21;
          }
          if (null != c23) {
            obj["X-Installation-ID"] = c23;
          }
          tmpResult = tmp(13358);
          obj = { withGuildExperiments: null, headers: null, context: null };
          obj[0] = true;
          obj[1] = obj;
          const obj1 = { location: null };
          const obj4 = importDefault(698);
          obj1[0] = tmp(1222).getFingerprintLocation();
          obj[2] = obj1;
          const experiments = tmpResult.fetchExperiments(obj);
          nextPromise = experiments.then((body) => {
            let assignments;
            let fingerprint;
            let guild_experiments;
            let installation;
            body = body.body;
            ({ fingerprint, installation } = body);
            let tmp = null != installation;
            ({ assignments, guild_experiments } = body);
            if (tmp) {
              tmp = installation.length > 0;
            }
            if (tmp) {
              let obj = callback2(709);
              obj = { type: "INSTALLATION_ID", installation: null };
              obj[1] = installation;
              obj.dispatch(obj);
            }
            if (fingerprint) {
              obj = { type: "FINGERPRINT", fingerprint: null };
              obj[1] = fingerprint;
              callback2(709).dispatch(obj);
              const obj3 = callback2(709);
            }
            callback2(709).dispatch({ type: "EXPERIMENTS_FETCH_SUCCESS", fingerprint, experiments: assignments, guildExperiments: guild_experiments });
            let c33 = null;
            const obj5 = callback2(709);
            callback(13359).onExperimentsLoaded();
          }, () => {
            let c33 = null;
            callback2(709).dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
          });
          const tmpResult1 = tmp(1222);
        }
        return nextPromise;
      }
    }
    nextPromise = Promise.resolve();
  }
}
function handleLogout(isSwitchingAccount) {
  let obj = importAll(707);
  const Storage = require(595) /* Storage */.Storage;
  obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
  tmp4.verbose("handleLogout called.", obj);
  const tmp2 = null != obj.getToken();
  const obj3 = importAll(707);
  const Storage2 = require(595) /* Storage */.Storage;
  obj = { tokenManagerHasToken: null != importAll(707).getToken(), storageHasToken: null != Storage2.get(closure_12) };
  tmp4.verbose("removeAuthToken called.", obj);
  const tmp5 = null != importAll(707).getToken();
  importAll(707).removeAnalyticsToken();
  const obj5 = importAll(707);
  let flag;
  const obj6 = importAll(707);
  if (isSwitchingAccount != null) {
    flag = isSwitchingAccount.isSwitchingAccount;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    if (removeTokenResult) {
      let closure_22 = c21;
      c21 = null;
      const Storage3 = tmp3(595).Storage;
      Storage3.remove(fingerprint);
    }
    fetchFingerprint();
  }
  const PersistedStore = importDefault(589).PersistedStore;
  const obj1 = { omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore", "AccessibilityStore"], type: null };
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
  const Store = tmp14(589).Store;
  const result = Store.removeAllConditionalListeners();
  clearAll.clearAll();
  removeTokenResult = importAll(707).removeToken();
  importDefault(1208).clearUser();
  const Storage4 = tmp3(595).Storage;
  Storage4.remove(user_id_cache);
  let c17 = null;
  let c18 = null;
  let isSwitchingAccount1;
  if (isSwitchingAccount != null) {
    isSwitchingAccount1 = isSwitchingAccount.isSwitchingAccount;
  }
  let closure_25 = isSwitchingAccount1 ? tmp22.LOGGING_IN : tmp22.NONE;
  let c28 = "";
  let c30 = null;
  let c29 = false;
  let c35 = false;
  let c36 = false;
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
({ AnalyticEvents: metroImportAll, LoginStates } = ME);
({ Platforms: c10, Routes: unpackModuleId, TOKEN_KEY: closure_12 } = ME);
({ EXISTING_USER_AGE_GATE_MODAL_KEY, NEW_USER_AGE_GATE_MODAL_KEY } = result);
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
class AuthenticationStore extends Store {
}
const prototype = AuthenticationStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = require(595) /* Storage */.Storage;
  let closure_17 = Storage.get(user_id_cache);
  const Storage2 = require(595) /* Storage */.Storage;
  let value = Storage2.get(analytics_installation);
  if (null == value) {
    const Storage3 = tmp(595).Storage;
    value = Storage3.get("analytics_installation");
    let tmp4 = null;
    if (null != value) {
      tmp4 = null;
      if (value.length > 0) {
        const Storage4 = tmp(595).Storage;
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
        const installationExperiments = callback(10373).fetchInstallationExperiments(null);
      }
      promise.then(fireApex, fireApex);
    }
    promise = fetchFingerprint();
  }
  this.addChangeListener(() => callback(13361).setClientState(closure_17));
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
  return require(1352) /* getToken */.getToken();
};
prototype["isAuthenticated"] = function isAuthenticated() {
  return require(1352) /* getToken */.isAuthenticated();
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
    analyticsToken = importAll(707).getAnalyticsToken();
    const obj = importAll(707);
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
  return closure_27.includes(require(1906) /* PermissionOverwriteType */.AuthenticatorType.TOTP);
};
prototype["getCredentials"] = function getCredentials() {
  if (null == closure_4) {
    const _Error = Error;
    const error = new Error("no credentials");
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
let tmp4 = new require("result")("AuthenticationStore");
const authenticationStore = new AuthenticationStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let analyticsToken;
    let apexExperiments;
    let auth;
    let authSessionIdHash;
    let email;
    let id;
    let sessionId;
    let staticAuthSessionId;
    let user;
    let username;
    ({ user, analyticsToken, auth, apexExperiments } = arg0);
    ({ sessionId, authSessionIdHash, staticAuthSessionId } = arg0);
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    require.verbose("handleConnectionOpen called", obj);
    const tmp = importAll;
    const tmp3 = null != obj.getToken();
    ({ id, username, email } = user);
    importDefault(1208).setUser(id, username, email, importDefault(11696)(user));
    const obj3 = importDefault(1208);
    tmp(707).setAnalyticsToken(analyticsToken);
    id = user.id;
    if (undefined !== auth) {
      const authenticator_types = auth.authenticator_types;
    }
    const Storage2 = tmp4(595).Storage;
    const result = Storage2.set(user_id_cache, user.id);
    let installation;
    if (apexExperiments != null) {
      installation = apexExperiments.installation;
    }
    if (null != installation) {
      installation = apexExperiments.installation;
      if (null == installation) {
        let tmp6Result = tmp6(13360);
        if (tmp6Result.canUseInstallationId()) {
          const Storage3 = tmp4(595).Storage;
          const result1 = Storage3.set(analytics_installation, installation);
        }
      }
    }
    const Storage4 = tmp4(595).Storage;
    if (Storage4.get(constants.APP_FIRST_LOGIN, true)) {
      tmp6Result = tmp6(698);
      obj = { platform: null };
      obj[0] = constants2.IOS;
      tmp6Result.track(tmp15.APP_FIRST_LOGIN, obj);
      const Storage5 = tmp4(595).Storage;
      const result2 = Storage5.set(tmp15.APP_FIRST_LOGIN, false);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    let analyticsToken;
    let email;
    let id;
    let sessionId;
    let token;
    let user;
    let username;
    ({ user, analyticsToken } = arg0);
    ({ sessionId, token } = arg0);
    let obj = importDefault(1208);
    ({ id, username, email } = user);
    obj.setUser(id, username, email, importDefault(11696)(user));
    const id2 = user.id;
    const obj2 = importAll(707);
    const tmp = importDefault;
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != importAll(707).getToken(), storageHasToken: null != Storage.get(closure_12) };
    importAll.verbose("setAuthToken called.", obj);
    let tmp8 = null != id2;
    if (tmp8) {
      tmp8 = id2 === id;
    }
    if (!tmp8) {
      let tmp4Result = tmp4(707);
      tmp4Result.removeAnalyticsToken();
    }
    tmp4Result = tmp4(707);
    tmp4Result.setToken(token, id2);
    if (null != analyticsToken) {
      tmp4(707).setAnalyticsToken(analyticsToken);
      const tmp4Result1 = tmp4(707);
    }
    let closure_22 = c21;
    c21 = null;
    const Storage2 = tmp6(595).Storage;
    Storage2.remove(fingerprint);
    id = user.id;
    const Storage3 = tmp6(595).Storage;
    const result = Storage3.set(user_id_cache, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    code = code.code;
    const combined = "handleConnectionClosed called with code " + code + ".";
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    require.verbose(combined, obj);
    if (4004 === code) {
      if (c26) {
        c26 = true;
        handleLogout();
        importDefault(709).wait(() => {
          callback(1222).transitionTo(constants.REGISTER);
        });
      } else {
        obj = { user_id: null };
        const Storage2 = tmp4(595).Storage;
        obj[0] = Storage2.get(user_id_cache);
        importDefault(698).track(constants.APP_USER_DEAUTHENTICATED, obj);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => callback(1222).transitionTo(constants.DEFAULT_LOGGED_OUT));
        const obj3 = importDefault(698);
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
  },
  LOGIN: function handleLogin(arg0) {
    const LOGGING_IN = LoginStates.LOGGING_IN;
    let tmp2 = c36;
    if (!c36) {
      tmp2 = true === tmp;
    }
    c36 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    const NONE = LoginStates.NONE;
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    tmp4.verbose("setAuthToken called.", obj);
    const tmp = null != obj.getToken();
    importAll(707).removeAnalyticsToken();
    const obj3 = importAll(707);
    importAll(707).setToken(token.token, undefined);
    let closure_22 = c21;
    c21 = null;
    const Storage2 = require(595) /* Storage */.Storage;
    Storage2.remove(fingerprint);
    let c28 = "";
    let c29 = false;
    let c30 = null;
    let c5 = null;
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
    let c35 = false;
  },
  LOGIN_FAILURE: function handleLoginFailure(error) {
    let c28 = "";
    let c29 = false;
    let c30 = null;
    let c5 = null;
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
      let NONE = LoginStates.LOGIN_AGE_GATE;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  LOGIN_MFA_STEP: function handleLoginMFAStep(arg0) {
    let ticket;
    let webauthn;
    ({ ticket, webauthn } = arg0);
    if (null != ticket) {
      let c29 = tmp;
      if (webauthn == null) {
        webauthn = null;
      }
      let c32 = tmp2;
      let c31 = tmp3;
      let closure_5 = tmp4;
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
    let closure_25 = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
    credentials = credentials.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
    const ACCOUNT_DISABLED = LoginStates.ACCOUNT_DISABLED;
    credentials = credentials.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
    let closure_25 = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
    credentials = credentials.credentials;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
    const PHONE_IP_AUTHORIZATION = LoginStates.PHONE_IP_AUTHORIZATION;
    credentials = credentials.credentials;
  },
  LOGIN_RESET: function handleLoginReset(isMultiAccount) {
    const NONE = LoginStates.NONE;
    let c28 = "";
    let c29 = false;
    let c30 = null;
    let c5 = null;
    let c4 = null;
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
      let obj = importAll(707);
      const Storage = require(595) /* Storage */.Storage;
      obj = { tokenManagerHasToken: null, storageHasToken: null };
      obj[0] = null != obj.getToken();
      obj[1] = null != Storage.get(closure_12);
      tmp4.verbose("removeAuthToken called.", obj);
      const tmp9 = null != obj.getToken();
      importAll(707).removeAnalyticsToken();
      const obj3 = importAll(707);
      importAll(707).removeToken();
      fetchFingerprint(false);
      const obj4 = importAll(707);
    }
  },
  LOGIN_STATUS_RESET: function handleLoginStatusReset() {
    const NONE = LoginStates.NONE;
  },
  LOGIN_SUSPENDED_USER: function handleSuspendedUserLogin(suspendedUserToken) {
    let c35 = false;
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
          extractIdResult = require(513) /* extractId */.extractId(fingerprint);
          const obj6 = require(513) /* extractId */;
        }
        let obj = { old_fingerprint: null, new_fingerprint: null };
        obj[0] = extractIdResult;
        const obj5 = importDefault(698);
        obj[1] = require(513) /* extractId */.extractId(fingerprint);
        obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
        const Storage = require(595) /* Storage */.Storage;
        const result = Storage.set(fingerprint, fingerprint);
        const obj8 = require(513) /* extractId */;
      } else {
        fetchFingerprint();
      }
    } else {
      let tmp2 = null != fingerprint;
      if (tmp2) {
        tmp2 = fingerprint !== fingerprint;
      }
      if (tmp2) {
        obj = importDefault(698);
        obj = { fingerprint: null, dropped_fingerprint: null };
        obj[0] = require(513) /* extractId */.extractId(fingerprint);
        const obj3 = require(513) /* extractId */;
        obj[1] = require(513) /* extractId */.extractId(fingerprint);
        obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
        const obj4 = require(513) /* extractId */;
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
      const Storage = require(595) /* Storage */.Storage;
      const result = Storage.set(analytics_installation, installation);
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess(token) {
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    tmp4.verbose("setAuthToken called.", obj);
    const tmp = null != obj.getToken();
    importAll(707).removeAnalyticsToken();
    const obj3 = importAll(707);
    importAll(707).setToken(token.token, undefined);
    let closure_22 = c21;
    c21 = null;
    const Storage2 = require(595) /* Storage */.Storage;
    Storage2.remove(fingerprint);
  },
  FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
    const FORGOT_PASSWORD = LoginStates.FORGOT_PASSWORD;
  },
  FORGOT_PASSWORD_SENT: function handleForgotPasswordSent() {
    const NONE = LoginStates.NONE;
  },
  UPDATE_TOKEN: function handleUpdateToken(userId) {
    userId = userId.userId;
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    require.verbose("handleUpdateToken called", obj);
    const tmp3 = null != obj.getToken();
    const obj3 = importAll(707);
    const Storage2 = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != importAll(707).getToken(), storageHasToken: null != Storage2.get(closure_12) };
    require.verbose("setAuthToken called.", obj);
    let tmp8 = null != userId;
    if (tmp8) {
      tmp8 = userId === c17;
    }
    if (!tmp8) {
      let tmpResult = tmp(707);
      tmpResult.removeAnalyticsToken();
    }
    tmpResult = tmp(707);
    tmpResult.setToken(userId.token, userId);
    let closure_22 = c21;
    c21 = null;
    const Storage3 = tmp4(595).Storage;
    Storage3.remove(fingerprint);
  },
  EXPERIMENTS_FETCH(withGuildExperiments) {
    let obj = {};
    const superPropertiesBase64 = importDefault(698).getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj["X-Super-Properties"] = superPropertiesBase64;
    }
    if (null != c21) {
      obj["X-Fingerprint"] = c21;
    }
    if (null != c23) {
      obj["X-Installation-ID"] = c23;
    }
    const obj2 = importDefault(698);
    obj = { withGuildExperiments: withGuildExperiments.withGuildExperiments, headers: obj, context: null };
    obj = { location: null };
    let obj3 = require(13358) /* fetchExperiments */;
    obj[0] = require(1222) /* transitionTo */.getFingerprintLocation();
    obj[2] = obj;
    const experiments = obj3.fetchExperiments(obj);
    let closure_33 = experiments.then((body) => {
      let assignments;
      let fingerprint;
      let guild_experiments;
      let installation;
      body = body.body;
      ({ fingerprint, installation } = body);
      let tmp = null != installation;
      ({ assignments, guild_experiments } = body);
      if (tmp) {
        tmp = installation.length > 0;
      }
      if (tmp) {
        let obj = callback2(709);
        obj = { type: "INSTALLATION_ID", installation: null };
        obj[1] = installation;
        obj.dispatch(obj);
      }
      if (fingerprint) {
        obj = { type: "FINGERPRINT", fingerprint: null };
        obj[1] = fingerprint;
        callback2(709).dispatch(obj);
        const obj3 = callback2(709);
      }
      callback2(709).dispatch({ type: "EXPERIMENTS_FETCH_SUCCESS", fingerprint, experiments: assignments, guildExperiments: guild_experiments });
      let c33 = null;
      const obj5 = callback2(709);
      callback(13359).onExperimentsLoaded();
    }, () => {
      let c33 = null;
      callback2(709).dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
    });
  },
  CURRENT_USER_UPDATE: function handleUserUpdate(user) {
    user = user.user;
    const id = user.id;
    if (undefined !== user.authenticator_types) {
      const authenticator_types = user.authenticator_types;
    }
    const Storage = require(595) /* Storage */.Storage;
    const result = Storage.set(user_id_cache, user.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: function handleAgeGateUnderage() {
    let c26 = true;
    handleLogout();
    importDefault(709).wait(() => {
      callback(1222).transitionTo(constants.REGISTER);
    });
  },
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    let c34 = null;
    const NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => callback(table[7]).transitionTo(constants.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    let c28 = "";
    let c29 = false;
    let c30 = null;
    let c35 = false;
    let c5 = null;
    if (error instanceof importDefault(4185)) {
      if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
        let NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
      obj = require(8286) /* getAuthenticationErrorsFromAPIError */;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  PASSWORDLESS_START: function handlePasswordlessStart() {
    let c35 = true;
  }
}, require("dispatcher").DispatchBand.Early);
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let analyticsToken;
    let apexExperiments;
    let auth;
    let authSessionIdHash;
    let email;
    let id;
    let sessionId;
    let staticAuthSessionId;
    let user;
    let username;
    ({ user, analyticsToken, auth, apexExperiments } = arg0);
    ({ sessionId, authSessionIdHash, staticAuthSessionId } = arg0);
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    require.verbose("handleConnectionOpen called", obj);
    const tmp = importAll;
    const tmp3 = null != obj.getToken();
    ({ id, username, email } = user);
    importDefault(1208).setUser(id, username, email, importDefault(11696)(user));
    const obj3 = importDefault(1208);
    tmp(707).setAnalyticsToken(analyticsToken);
    id = user.id;
    if (undefined !== auth) {
      const authenticator_types = auth.authenticator_types;
    }
    const Storage2 = tmp4(595).Storage;
    const result = Storage2.set(user_id_cache, user.id);
    let installation;
    if (apexExperiments != null) {
      installation = apexExperiments.installation;
    }
    if (null != installation) {
      installation = apexExperiments.installation;
      if (null == installation) {
        let tmp6Result = tmp6(13360);
        if (tmp6Result.canUseInstallationId()) {
          const Storage3 = tmp4(595).Storage;
          const result1 = Storage3.set(analytics_installation, installation);
        }
      }
    }
    const Storage4 = tmp4(595).Storage;
    if (Storage4.get(constants.APP_FIRST_LOGIN, true)) {
      tmp6Result = tmp6(698);
      obj = { platform: null };
      obj[0] = constants2.IOS;
      tmp6Result.track(tmp15.APP_FIRST_LOGIN, obj);
      const Storage5 = tmp4(595).Storage;
      const result2 = Storage5.set(tmp15.APP_FIRST_LOGIN, false);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    let analyticsToken;
    let email;
    let id;
    let sessionId;
    let token;
    let user;
    let username;
    ({ user, analyticsToken } = arg0);
    ({ sessionId, token } = arg0);
    let obj = importDefault(1208);
    ({ id, username, email } = user);
    obj.setUser(id, username, email, importDefault(11696)(user));
    const id2 = user.id;
    const obj2 = importAll(707);
    const tmp = importDefault;
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != importAll(707).getToken(), storageHasToken: null != Storage.get(closure_12) };
    importAll.verbose("setAuthToken called.", obj);
    let tmp8 = null != id2;
    if (tmp8) {
      tmp8 = id2 === id;
    }
    if (!tmp8) {
      let tmp4Result = tmp4(707);
      tmp4Result.removeAnalyticsToken();
    }
    tmp4Result = tmp4(707);
    tmp4Result.setToken(token, id2);
    if (null != analyticsToken) {
      tmp4(707).setAnalyticsToken(analyticsToken);
      const tmp4Result1 = tmp4(707);
    }
    let closure_22 = c21;
    c21 = null;
    const Storage2 = tmp6(595).Storage;
    Storage2.remove(fingerprint);
    id = user.id;
    const Storage3 = tmp6(595).Storage;
    const result = Storage3.set(user_id_cache, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    code = code.code;
    const combined = "handleConnectionClosed called with code " + code + ".";
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    require.verbose(combined, obj);
    if (4004 === code) {
      if (c26) {
        c26 = true;
        handleLogout();
        importDefault(709).wait(() => {
          callback(1222).transitionTo(constants.REGISTER);
        });
      } else {
        obj = { user_id: null };
        const Storage2 = tmp4(595).Storage;
        obj[0] = Storage2.get(user_id_cache);
        importDefault(698).track(constants.APP_USER_DEAUTHENTICATED, obj);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => callback(1222).transitionTo(constants.DEFAULT_LOGGED_OUT));
        const obj3 = importDefault(698);
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
  },
  LOGIN: function handleLogin(arg0) {
    const LOGGING_IN = LoginStates.LOGGING_IN;
    let tmp2 = c36;
    if (!c36) {
      tmp2 = true === tmp;
    }
    c36 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    const NONE = LoginStates.NONE;
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    tmp4.verbose("setAuthToken called.", obj);
    const tmp = null != obj.getToken();
    importAll(707).removeAnalyticsToken();
    const obj3 = importAll(707);
    importAll(707).setToken(token.token, undefined);
    let closure_22 = c21;
    c21 = null;
    const Storage2 = require(595) /* Storage */.Storage;
    Storage2.remove(fingerprint);
    let c28 = "";
    let c29 = false;
    let c30 = null;
    let c5 = null;
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
    let c35 = false;
  },
  LOGIN_FAILURE: function handleLoginFailure(error) {
    let c28 = "";
    let c29 = false;
    let c30 = null;
    let c5 = null;
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
      let NONE = LoginStates.LOGIN_AGE_GATE;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  LOGIN_MFA_STEP: function handleLoginMFAStep(arg0) {
    let ticket;
    let webauthn;
    ({ ticket, webauthn } = arg0);
    if (null != ticket) {
      let c29 = tmp;
      if (webauthn == null) {
        webauthn = null;
      }
      let c32 = tmp2;
      let c31 = tmp3;
      let closure_5 = tmp4;
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
    let closure_25 = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
    credentials = credentials.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
    const ACCOUNT_DISABLED = LoginStates.ACCOUNT_DISABLED;
    credentials = credentials.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
    let closure_25 = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
    credentials = credentials.credentials;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
    const PHONE_IP_AUTHORIZATION = LoginStates.PHONE_IP_AUTHORIZATION;
    credentials = credentials.credentials;
  },
  LOGIN_RESET: function handleLoginReset(isMultiAccount) {
    const NONE = LoginStates.NONE;
    let c28 = "";
    let c29 = false;
    let c30 = null;
    let c5 = null;
    let c4 = null;
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
      let obj = importAll(707);
      const Storage = require(595) /* Storage */.Storage;
      obj = { tokenManagerHasToken: null, storageHasToken: null };
      obj[0] = null != obj.getToken();
      obj[1] = null != Storage.get(closure_12);
      tmp4.verbose("removeAuthToken called.", obj);
      const tmp9 = null != obj.getToken();
      importAll(707).removeAnalyticsToken();
      const obj3 = importAll(707);
      importAll(707).removeToken();
      fetchFingerprint(false);
      const obj4 = importAll(707);
    }
  },
  LOGIN_STATUS_RESET: function handleLoginStatusReset() {
    const NONE = LoginStates.NONE;
  },
  LOGIN_SUSPENDED_USER: function handleSuspendedUserLogin(suspendedUserToken) {
    let c35 = false;
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
          extractIdResult = require(513) /* extractId */.extractId(fingerprint);
          const obj6 = require(513) /* extractId */;
        }
        let obj = { old_fingerprint: null, new_fingerprint: null };
        obj[0] = extractIdResult;
        const obj5 = importDefault(698);
        obj[1] = require(513) /* extractId */.extractId(fingerprint);
        obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
        const Storage = require(595) /* Storage */.Storage;
        const result = Storage.set(fingerprint, fingerprint);
        const obj8 = require(513) /* extractId */;
      } else {
        fetchFingerprint();
      }
    } else {
      let tmp2 = null != fingerprint;
      if (tmp2) {
        tmp2 = fingerprint !== fingerprint;
      }
      if (tmp2) {
        obj = importDefault(698);
        obj = { fingerprint: null, dropped_fingerprint: null };
        obj[0] = require(513) /* extractId */.extractId(fingerprint);
        const obj3 = require(513) /* extractId */;
        obj[1] = require(513) /* extractId */.extractId(fingerprint);
        obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
        const obj4 = require(513) /* extractId */;
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
      const Storage = require(595) /* Storage */.Storage;
      const result = Storage.set(analytics_installation, installation);
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess(token) {
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    tmp4.verbose("setAuthToken called.", obj);
    const tmp = null != obj.getToken();
    importAll(707).removeAnalyticsToken();
    const obj3 = importAll(707);
    importAll(707).setToken(token.token, undefined);
    let closure_22 = c21;
    c21 = null;
    const Storage2 = require(595) /* Storage */.Storage;
    Storage2.remove(fingerprint);
  },
  FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
    const FORGOT_PASSWORD = LoginStates.FORGOT_PASSWORD;
  },
  FORGOT_PASSWORD_SENT: function handleForgotPasswordSent() {
    const NONE = LoginStates.NONE;
  },
  UPDATE_TOKEN: function handleUpdateToken(userId) {
    userId = userId.userId;
    let obj = importAll(707);
    const Storage = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_12) };
    require.verbose("handleUpdateToken called", obj);
    const tmp3 = null != obj.getToken();
    const obj3 = importAll(707);
    const Storage2 = require(595) /* Storage */.Storage;
    obj = { tokenManagerHasToken: null != importAll(707).getToken(), storageHasToken: null != Storage2.get(closure_12) };
    require.verbose("setAuthToken called.", obj);
    let tmp8 = null != userId;
    if (tmp8) {
      tmp8 = userId === c17;
    }
    if (!tmp8) {
      let tmpResult = tmp(707);
      tmpResult.removeAnalyticsToken();
    }
    tmpResult = tmp(707);
    tmpResult.setToken(userId.token, userId);
    let closure_22 = c21;
    c21 = null;
    const Storage3 = tmp4(595).Storage;
    Storage3.remove(fingerprint);
  },
  EXPERIMENTS_FETCH(withGuildExperiments) {
    let obj = {};
    const superPropertiesBase64 = importDefault(698).getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj["X-Super-Properties"] = superPropertiesBase64;
    }
    if (null != c21) {
      obj["X-Fingerprint"] = c21;
    }
    if (null != c23) {
      obj["X-Installation-ID"] = c23;
    }
    const obj2 = importDefault(698);
    obj = { withGuildExperiments: withGuildExperiments.withGuildExperiments, headers: obj, context: null };
    obj = { location: null };
    let obj3 = require(13358) /* fetchExperiments */;
    obj[0] = require(1222) /* transitionTo */.getFingerprintLocation();
    obj[2] = obj;
    const experiments = obj3.fetchExperiments(obj);
    let closure_33 = experiments.then((body) => {
      let assignments;
      let fingerprint;
      let guild_experiments;
      let installation;
      body = body.body;
      ({ fingerprint, installation } = body);
      let tmp = null != installation;
      ({ assignments, guild_experiments } = body);
      if (tmp) {
        tmp = installation.length > 0;
      }
      if (tmp) {
        let obj = callback2(709);
        obj = { type: "INSTALLATION_ID", installation: null };
        obj[1] = installation;
        obj.dispatch(obj);
      }
      if (fingerprint) {
        obj = { type: "FINGERPRINT", fingerprint: null };
        obj[1] = fingerprint;
        callback2(709).dispatch(obj);
        const obj3 = callback2(709);
      }
      callback2(709).dispatch({ type: "EXPERIMENTS_FETCH_SUCCESS", fingerprint, experiments: assignments, guildExperiments: guild_experiments });
      let c33 = null;
      const obj5 = callback2(709);
      callback(13359).onExperimentsLoaded();
    }, () => {
      let c33 = null;
      callback2(709).dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
    });
  },
  CURRENT_USER_UPDATE: function handleUserUpdate(user) {
    user = user.user;
    const id = user.id;
    if (undefined !== user.authenticator_types) {
      const authenticator_types = user.authenticator_types;
    }
    const Storage = require(595) /* Storage */.Storage;
    const result = Storage.set(user_id_cache, user.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: function handleAgeGateUnderage() {
    let c26 = true;
    handleLogout();
    importDefault(709).wait(() => {
      callback(1222).transitionTo(constants.REGISTER);
    });
  },
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    let c34 = null;
    const NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => callback(table[7]).transitionTo(constants.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    let c28 = "";
    let c29 = false;
    let c30 = null;
    let c35 = false;
    let c5 = null;
    if (error instanceof importDefault(4185)) {
      if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
        let NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
      obj = require(8286) /* getAuthenticationErrorsFromAPIError */;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  PASSWORDLESS_START: function handlePasswordlessStart() {
    let c35 = true;
  }
};
result = require("ME").fileFinishedImporting("stores/AuthenticationStore.tsx");

export default authenticationStore;