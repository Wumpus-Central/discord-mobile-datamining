// === Module 502: AuthenticationStore ===

// Module 502 (AuthenticationStore)
import LoggerDefault from "Logger" /* 3 */;
import initializeDefault from "initialize" /* 504 */;
import Storage6 from "Storage" /* 510 */;
import TokenManagerAll from "TokenManager" /* 1099 */;
import router_utils from "router_utils" /* 1100 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import FingerprintUtils from "FingerprintUtils" /* 1255 */;
import Server from "Server" /* 1894 */;
import APIErrorDefault from "APIError" /* 4462 */;
import getAuthenticationErrorsFromAPIError from "getAuthenticationErrorsFromAPIError" /* 6948 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7668 */;
import ApexActionCreators from "ApexActionCreators" /* 11482 */;
import isStaffFromRawUserDefault from "isStaffFromRawUser" /* 12415 */;
import fetchExperiments from "fetchExperiments" /* 14190 */;
import awaitExperiments from "awaitExperiments" /* 14191 */;
import ClientStateStoreStorage from "ClientStateStoreStorage" /* 14193 */;
import BrowserHandoffStore from "BrowserHandoffStore" /* 503 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1073 */;
import Dispatcher from "Dispatcher" /* 573 */;

require = fn;
function fetchFingerprint(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const Storage = Storage6.Storage;
  _null = Storage.get(fingerprint);
  const Storage2 = Storage6.Storage;
  value = Storage2.get(analytics_installation);
  if (null == value) {
    const Storage3 = tmp(510).Storage;
    value = Storage3.get("analytics_installation");
    let tmp4 = null;
    if (null != value) {
      tmp4 = null;
      if (value.length > 0) {
        const Storage4 = tmp(510).Storage;
        const result = Storage4.set(analytics_installation, value);
        tmp4 = value;
      }
    }
    value = tmp4;
  }
  installation = value;
  if (null != closure_33) {
    return closure_33;
  } else {
    if (null != _null) {
      let token = _null;
    } else {
      let obj = TokenManagerAll;
      token = obj.getToken();
    }
    let tmpResult = tmp(1100);
    if (tmpResult.isValidFingerprintRoute()) {
      if (flag) {
        if (!BrowserHandoffStore.isHandoffAvailable()) {
          obj = {};
          const superPropertiesBase64 = AnalyticsUtilsDefault.getSuperPropertiesBase64();
          if (null != superPropertiesBase64) {
            obj["X-Super-Properties"] = superPropertiesBase64;
          }
          if (null != _null) {
            obj["X-Fingerprint"] = _null;
          }
          if (null != installation) {
            obj["X-Installation-ID"] = installation;
          }
          tmpResult = tmp(14190);
          obj = { withGuildExperiments: true, headers: null, context: null };
          obj.headers = obj;
          const obj1 = { location: null };
          obj1.location = tmp(1100).getFingerprintLocation();
          obj.context = obj1;
          const experiments = tmpResult.fetchExperiments(obj);
          let nextPromise = experiments.then((body) => {
            body = body.body;
            ({ fingerprint, installation } = body);
            let tmp = null != installation;
            ({ assignments, guild_experiments } = body);
            if (tmp) {
              tmp = installation.length > 0;
            }
            if (tmp) {
              let obj = { type: "INSTALLATION_ID", installation };
              obj.dispatch(obj);
            }
            if (fingerprint) {
              obj = { type: "FINGERPRINT", fingerprint };
              Dispatcher.dispatch(obj);
            }
            Dispatcher.dispatch({ type: "EXPERIMENTS_FETCH_SUCCESS", fingerprint, experiments: assignments, guildExperiments: guild_experiments });
            c33 = null;
            awaitExperiments.onExperimentsLoaded();
          }, () => {
            c33 = null;
            Dispatcher.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
          });
          closure_33 = nextPromise;
          const tmpResult1 = tmp(1100);
        }
        return nextPromise;
      }
    }
    nextPromise = Promise.resolve();
  }
}
function handleLogout(isSwitchingAccount) {
  let obj = TokenManagerAll;
  const Storage = Storage6.Storage;
  obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_1_12) };
  closure_13.verbose("handleLogout called.", obj);
  const tmp2 = null != obj.getToken();
  const Storage2 = Storage6.Storage;
  obj = { tokenManagerHasToken: null != TokenManagerAll.getToken(), storageHasToken: null != Storage2.get(closure_1_12) };
  closure_13.verbose("removeAuthToken called.", obj);
  const tmp5 = null != TokenManagerAll.getToken();
  TokenManagerAll.removeAnalyticsToken();
  let flag;
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
      const Storage3 = tmp3(510).Storage;
      Storage3.remove(fingerprint);
    }
    fetchFingerprint();
  }
  const PersistedStore = initializeDefault.PersistedStore;
  const obj1 = { omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore", "AccessibilityStore", "DerivedQosDataStore"], type: null };
  isSwitchingAccount = undefined;
  if (isSwitchingAccount != null) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
  }
  let str = "all";
  if (isSwitchingAccount) {
    str = "user-data-only";
  }
  obj1.type = str;
  PersistedStore.clearAll(obj1);
  const Store = tmp14(504).Store;
  const result = Store.removeAllConditionalListeners();
  MobileCacheSnapshotStore.clearAll();
  removeTokenResult = TokenManagerAll.removeToken();
  SentryUtilsDefault.clearUser();
  const Storage4 = tmp3(510).Storage;
  Storage4.remove(user_id_cache);
  id = null;
  sessionId = null;
  let isSwitchingAccount1;
  if (isSwitchingAccount != null) {
    isSwitchingAccount1 = isSwitchingAccount.isSwitchingAccount;
  }
  NONE = isSwitchingAccount1 ? tmp22.LOGGING_IN : tmp22.NONE;
  c28 = "";
  c30 = null;
  c29 = false;
  c35 = false;
  closure_36 = false;
  items = [];
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
const Constants = fn(1074);
({ AnalyticEvents: closure_8, LoginStates } = Constants);
({ Platforms: c10, Routes: closure_11, TOKEN_KEY: closure_12 } = Constants);
const AgeGateConstants = fn(1098);
({ EXISTING_USER_AGE_GATE_MODAL_KEY, NEW_USER_AGE_GATE_MODAL_KEY } = AgeGateConstants);
let closure_13 = new LoggerDefault("AuthenticationStore");
let fingerprint = "fingerprint";
const analytics_installation = "analytics_installation";
const user_id_cache = "user_id_cache";
let id = null;
let sessionId = null;
let authSessionIdHash = null;
const staticAuthSessionId = null;
let c21 = null;
let closure_22 = null;
let installation = null;
let analyticsToken = null;
let NONE = LoginStates.NONE;
let c26 = false;
let authenticator_types = [];
let c28 = "";
let c29 = false;
let c30 = null;
let c31 = false;
let c32 = false;
let closure_33 = null;
let c34 = null;
let c35 = false;
let closure_36 = false;
let items = [];
let Store = initializeDefault.Store;
class AuthenticationStore extends Store {
}
const prototype = AuthenticationStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage6.Storage;
  id = Storage.get(user_id_cache);
  const Storage2 = Storage6.Storage;
  value = Storage2.get(analytics_installation);
  if (null == value) {
    const Storage3 = tmp(510).Storage;
    value = Storage3.get("analytics_installation");
    let tmp4 = null;
    if (null != value) {
      tmp4 = null;
      if (value.length > 0) {
        const Storage4 = tmp(510).Storage;
        const result = Storage4.set(analytics_installation, value);
        tmp4 = value;
      }
    }
    value = tmp4;
  }
  installation = value;
  if (null == obj.getToken()) {
    let tmp7 = null == installation;
    if (!tmp7) {
      tmp7 = 0 === installation.length;
    }
    if (tmp7) {
      function fireApex() {
        const installationExperiments = ApexActionCreators.fetchInstallationExperiments(null);
      }
      promise.then(fireApex, fireApex);
    }
    promise = fetchFingerprint();
  }
  this.addChangeListener(() => ClientStateStoreStorage.setClientState(id));
};
prototype["getLoginStatus"] = function getLoginStatus() {
  return NONE;
};
prototype["getId"] = function getId() {
  return id;
};
prototype["getSessionId"] = function getSessionId() {
  return sessionId;
};
prototype["getAuthSessionIdHash"] = function getAuthSessionIdHash() {
  return authSessionIdHash;
};
prototype["getStaticAuthSessionId"] = function getStaticAuthSessionId() {
  return staticAuthSessionId;
};
prototype["getToken"] = function getToken() {
  return AuthenticationUtils.getToken();
};
prototype["isAuthenticated"] = function isAuthenticated() {
  return AuthenticationUtils.isAuthenticated();
};
prototype["getFingerprint"] = function getFingerprint() {
  return c21;
};
prototype["getInstallationForTracking"] = function getInstallationForTracking() {
  let tmp = null;
  if (obj.canUseInstallationId()) {
    tmp = installation;
  }
  return tmp;
};
prototype["getAnalyticsToken"] = function getAnalyticsToken() {
  if (analyticsToken == null) {
    analyticsToken = TokenManagerAll.getAnalyticsToken();
  }
  return analyticsToken;
};
prototype["getMFATicket"] = function getMFATicket() {
  return c28;
};
prototype["getMFAMethods"] = function getMFAMethods() {
  return items;
};
prototype["getLoginInstanceId"] = function getLoginInstanceId() {
  return c5;
};
prototype["hasTOTPEnabled"] = function hasTOTPEnabled() {
  return authenticator_types.includes(Server.AuthenticatorType.TOTP);
};
prototype["getCredentials"] = function getCredentials() {
  if (null == c4) {
    const _Error = Error;
    const error = new Error("no credentials");
    throw error;
  } else {
    return c4;
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
  return closure_36;
};
AuthenticationStore.displayName = "AuthenticationStore";
const authenticationStore = new AuthenticationStore(Dispatcher, {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    ({ user, analyticsToken, auth, apexExperiments } = arg0);
    ({ sessionId, authSessionIdHash, staticAuthSessionId } = arg0);
    let obj = TokenManagerAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_1_12) };
    closure_13.verbose("handleConnectionOpen called", obj);
    const tmp3 = null != obj.getToken();
    ({ id, username, email } = user);
    SentryUtilsDefault.setUser(id, username, email, isStaffFromRawUserDefault(user));
    TokenManagerAll.setAnalyticsToken(analyticsToken);
    id = user.id;
    if (undefined !== auth) {
      authenticator_types = auth.authenticator_types;
    }
    const Storage2 = tmp4(510).Storage;
    const result = Storage2.set(user_id_cache, user.id);
    installation = undefined;
    if (apexExperiments != null) {
      installation = apexExperiments.installation;
    }
    if (null != installation) {
      installation = apexExperiments.installation;
      if (null == installation) {
        let tmp6Result = tmp6(14192);
        if (tmp6Result.canUseInstallationId()) {
          const Storage3 = tmp4(510).Storage;
          const result1 = Storage3.set(analytics_installation, installation);
        }
      }
    }
    const Storage4 = tmp4(510).Storage;
    if (Storage4.get(constants.APP_FIRST_LOGIN, true)) {
      tmp6Result = tmp6(1242);
      obj = { platform: constants2.IOS };
      tmp6Result.track(tmp15.APP_FIRST_LOGIN, obj);
      const Storage5 = tmp4(510).Storage;
      const result2 = Storage5.set(tmp15.APP_FIRST_LOGIN, false);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    ({ user, analyticsToken } = arg0);
    ({ sessionId, token } = arg0);
    let obj = SentryUtilsDefault;
    ({ id, username, email } = user);
    obj.setUser(id, username, email, isStaffFromRawUserDefault(user));
    const id2 = user.id;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != TokenManagerAll.getToken(), storageHasToken: null != Storage.get(closure_1_12) };
    closure_13.verbose("setAuthToken called.", obj);
    let tmp8 = null != id2;
    if (tmp8) {
      tmp8 = id2 === id;
    }
    if (!tmp8) {
      let tmp4Result = tmp4(1099);
      tmp4Result.removeAnalyticsToken();
    }
    tmp4Result = tmp4(1099);
    tmp4Result.setToken(token, id2);
    if (null != analyticsToken) {
      tmp4(1099).setAnalyticsToken(analyticsToken);
      const tmp4Result1 = tmp4(1099);
    }
    closure_22 = c21;
    c21 = null;
    const Storage2 = tmp6(510).Storage;
    Storage2.remove(fingerprint);
    id = user.id;
    const Storage3 = tmp6(510).Storage;
    const result = Storage3.set(user_id_cache, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    code = code.code;
    const combined = "handleConnectionClosed called with code " + code + ".";
    let obj = TokenManagerAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_1_12) };
    closure_13.verbose(combined, obj);
    if (4004 === code) {
      if (c26) {
        c26 = true;
        handleLogout();
        Dispatcher.wait(() => {
          router_utils.transitionTo(constants.REGISTER);
        });
      } else {
        obj = { user_id: null };
        const Storage2 = Storage6.Storage;
        obj.user_id = Storage2.get(user_id_cache);
        AnalyticsUtilsDefault.track(constants.APP_USER_DEAUTHENTICATED, obj);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => router_utils.transitionTo(constants.DEFAULT_LOGGED_OUT));
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
  },
  LOGIN: function handleLogin(arg0) {
    NONE = LoginStates.LOGGING_IN;
    let tmp2 = closure_36;
    if (!closure_36) {
      tmp2 = true === tmp;
    }
    closure_36 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    NONE = LoginStates.NONE;
    let obj = TokenManagerAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_1_12) };
    closure_13.verbose("setAuthToken called.", obj);
    const tmp = null != obj.getToken();
    TokenManagerAll.removeAnalyticsToken();
    TokenManagerAll.setToken(token.token, undefined);
    closure_22 = c21;
    c21 = null;
    const Storage2 = Storage6.Storage;
    Storage2.remove(fingerprint);
    c28 = "";
    c29 = false;
    c30 = null;
    c5 = null;
    items = [];
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
    items = [];
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
      c28 = ticket;
      c29 = tmp;
      if (webauthn == null) {
        webauthn = null;
      }
      challenge = webauthn;
      c32 = tmp2;
      c31 = tmp3;
      c5 = tmp4;
      items = [];
      if (null != webauthn) {
        const obj = { type: "webauthn", challenge };
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
    NONE = LoginStates.MFA_STEP;
  },
  LOGIN_MFA: function handleLoginMFA() {
    NONE = LoginStates.LOGGING_IN_MFA;
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function handleLoginAccountPendingDeletion(credentials) {
    NONE = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
    credentials = credentials.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
    NONE = LoginStates.ACCOUNT_DISABLED;
    credentials = credentials.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
    NONE = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
    credentials = credentials.credentials;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
    NONE = LoginStates.PHONE_IP_AUTHORIZATION;
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
      items = [];
      if (c31) {
        items.push({ type: "totp" });
      }
      if (c32) {
        items.push({ type: "backup" });
      }
      if (c29) {
        items.push({ type: "sms" });
      }
      const Storage = Storage6.Storage;
      const obj = { tokenManagerHasToken: null, storageHasToken: null };
      obj.tokenManagerHasToken = null != obj.getToken();
      obj.storageHasToken = null != Storage.get(closure_1_12);
      closure_13.verbose("removeAuthToken called.", obj);
      const tmp9 = null != obj.getToken();
      TokenManagerAll.removeAnalyticsToken();
      TokenManagerAll.removeToken();
      fetchFingerprint(false);
    }
  },
  LOGIN_STATUS_RESET: function handleLoginStatusReset() {
    NONE = LoginStates.NONE;
  },
  LOGIN_SUSPENDED_USER: function handleSuspendedUserLogin(suspendedUserToken) {
    c35 = false;
    suspendedUserToken = suspendedUserToken.suspendedUserToken;
    setImmediate(() => router_utils.transitionTo(constants.ACCOUNT_STANDING));
  },
  LOGOUT: handleLogout,
  FINGERPRINT: function handleFingerprint(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (null == c21) {
      if (null != fingerprint) {
        let extractIdResult = null;
        if (null != closure_22) {
          extractIdResult = FingerprintUtils.extractId(closure_22);
        }
        let obj = { old_fingerprint: extractIdResult, new_fingerprint: null };
        const obj5 = AnalyticsUtilsDefault;
        obj.new_fingerprint = FingerprintUtils.extractId(fingerprint);
        obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
        c21 = fingerprint;
        closure_22 = fingerprint;
        const Storage = Storage6.Storage;
        const result = Storage.set(fingerprint, c21);
      } else {
        fetchFingerprint();
      }
    } else {
      let tmp2 = null != fingerprint;
      if (tmp2) {
        tmp2 = c21 !== fingerprint;
      }
      if (tmp2) {
        obj = { fingerprint: FingerprintUtils.extractId(c21), dropped_fingerprint: null };
        obj.dropped_fingerprint = FingerprintUtils.extractId(fingerprint);
        obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
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
    let obj = TokenManagerAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_1_12) };
    closure_13.verbose("setAuthToken called.", obj);
    const tmp = null != obj.getToken();
    TokenManagerAll.removeAnalyticsToken();
    TokenManagerAll.setToken(token.token, undefined);
    closure_22 = c21;
    c21 = null;
    const Storage2 = Storage6.Storage;
    Storage2.remove(fingerprint);
  },
  FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
    NONE = LoginStates.FORGOT_PASSWORD;
  },
  FORGOT_PASSWORD_SENT: function handleForgotPasswordSent() {
    NONE = LoginStates.NONE;
  },
  UPDATE_TOKEN: function handleUpdateToken(userId) {
    userId = userId.userId;
    let obj = TokenManagerAll;
    const Storage = Storage6.Storage;
    obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_1_12) };
    closure_13.verbose("handleUpdateToken called", obj);
    const tmp3 = null != obj.getToken();
    const Storage2 = Storage6.Storage;
    obj = { tokenManagerHasToken: null != TokenManagerAll.getToken(), storageHasToken: null != Storage2.get(closure_1_12) };
    closure_13.verbose("setAuthToken called.", obj);
    let tmp8 = null != userId;
    if (tmp8) {
      tmp8 = userId === id;
    }
    if (!tmp8) {
      let tmpResult = tmp(1099);
      tmpResult.removeAnalyticsToken();
    }
    tmpResult = tmp(1099);
    tmpResult.setToken(userId.token, userId);
    closure_22 = c21;
    c21 = null;
    const Storage3 = Storage6.Storage;
    Storage3.remove(fingerprint);
  },
  EXPERIMENTS_FETCH(withGuildExperiments) {
    let obj = {};
    const superPropertiesBase64 = AnalyticsUtilsDefault.getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj["X-Super-Properties"] = superPropertiesBase64;
    }
    if (null != _null) {
      obj["X-Fingerprint"] = _null;
    }
    if (null != installation) {
      obj["X-Installation-ID"] = installation;
    }
    obj = { withGuildExperiments: withGuildExperiments.withGuildExperiments, headers: obj, context: null };
    obj = { location: null };
    let obj3 = fetchExperiments;
    obj.location = router_utils.getFingerprintLocation();
    obj.context = obj;
    const experiments = obj3.fetchExperiments(obj);
    closure_33 = experiments.then((body) => {
      body = body.body;
      ({ fingerprint, installation } = body);
      let tmp = null != installation;
      ({ assignments, guild_experiments } = body);
      if (tmp) {
        tmp = installation.length > 0;
      }
      if (tmp) {
        let obj = { type: "INSTALLATION_ID", installation };
        obj.dispatch(obj);
      }
      if (fingerprint) {
        obj = { type: "FINGERPRINT", fingerprint };
        Dispatcher.dispatch(obj);
      }
      Dispatcher.dispatch({ type: "EXPERIMENTS_FETCH_SUCCESS", fingerprint, experiments: assignments, guildExperiments: guild_experiments });
      c33 = null;
      awaitExperiments.onExperimentsLoaded();
    }, () => {
      c33 = null;
      Dispatcher.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
    });
  },
  CURRENT_USER_UPDATE: function handleUserUpdate(user) {
    user = user.user;
    id = user.id;
    if (undefined !== user.authenticator_types) {
      authenticator_types = user.authenticator_types;
    }
    const Storage = Storage6.Storage;
    const result = Storage.set(user_id_cache, user.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: function handleAgeGateUnderage() {
    c26 = true;
    handleLogout();
    Dispatcher.wait(() => {
      router_utils.transitionTo(constants.REGISTER);
    });
  },
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    c34 = null;
    NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => router_utils.transitionTo(constants.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    c28 = "";
    c29 = false;
    c30 = null;
    c35 = false;
    c5 = null;
    if (error instanceof APIErrorDefault) {
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
  }
}, fn(573).DispatchBand.Early);
const size = fn(2);
let result = size.fileFinishedImporting("stores/AuthenticationStore.tsx");

export default authenticationStore;