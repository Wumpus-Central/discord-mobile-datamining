// discord_app/stores/AuthenticationStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage6 from "../../discord_common/js/packages/storage/Storage.tsx";
import Dispatcher2 from "../Dispatcher.tsx";
import TokenManagerAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import SentryUtilsDefault from "../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import FingerprintUtils from "../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import Server from "../flow/Server.tsx";
import APIErrorDefault from "../errors/APIError.tsx";
import getAuthenticationErrorsFromAPIError from "../modules/auth/getAuthenticationErrorsFromAPIError.tsx";
import AuthenticationUtils from "../utils/AuthenticationUtils.tsx";
import isStaffFromRawUserDefault from "../modules/user/isStaffFromRawUser.tsx";
import fetchExperiments2 from "../modules/experiments/fetchExperiments.tsx";
import awaitExperiments from "../modules/app_startup/awaitExperiments.tsx";
import TrackingConsentUtilsDefault from "../modules/tracking/TrackingConsentUtils.tsx";
import BrowserHandoffStore from "BrowserHandoffStore.native.tsx";
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore.tsx";
import Constants from "../Constants.tsx";
import AgeGateConstants from "../modules/age_gate/AgeGateConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const Dispatcher = Dispatcher2;
let _null, c33, c4, c5, challenge;

let EXISTING_USER_AGE_GATE_MODAL_KEY;
let LoginStates;
let NEW_USER_AGE_GATE_MODAL_KEY;
let c10;
let closure_12;
let metroImportAll;
let unpackModuleId;
const f81555 = (body) => {
  let assignments;
  let guild_experiments;
  body = body.body;
  ({ fingerprint, installation } = body);
  let tmp = null != installation;
  ({ assignments, guild_experiments } = body);
  if (tmp) {
    tmp = installation.length > 0;
  }
  if (tmp) {
    const obj2 = { type: "INSTALLATION_ID", installation };
    const obj = Dispatcher;
    obj.dispatch(obj2);
  }
  if (fingerprint) {
    const obj4 = { type: "FINGERPRINT", fingerprint };
    const obj3 = Dispatcher;
    obj3.dispatch(obj4);
  }
  const obj5 = Dispatcher;
  obj5.dispatch({
    type: "EXPERIMENTS_FETCH_SUCCESS",
    fingerprint,
    experiments: assignments,
    guildExperiments: guild_experiments,
  });
  c33 = null;
  const obj6 = awaitExperiments;
  obj6.onExperimentsLoaded();
};
const f81556 = () => {
  c33 = null;
  const obj = Dispatcher;
  obj.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
};
const f81557 = () => {
  const obj = router_utils;
  obj.transitionTo(constants.REGISTER);
};
function fetchFingerprint(arg0) {
  let obj5;
  let tmpResult4;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const Storage = Storage6.Storage;
  _null = Storage.get(fingerprint);
  const Storage2 = Storage6.Storage;
  let value = Storage2.get(analytics_installation);
  if (null == value) {
    const Storage3 = Storage6.Storage;
    const value2 = Storage3.get("analytics_installation");
    let tmp4 = null;
    if (null != value2) {
      tmp4 = null;
      if (value2.length > 0) {
        const Storage4 = Storage6.Storage;
        const result = Storage4.set(analytics_installation, value2);
        tmp4 = value2;
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
      const obj = TokenManagerAll;
      token = obj.getToken();
    }
    const tmpResult = router_utils;
    if (tmpResult.isValidFingerprintRoute()) {
      if (flag) {
        let nextPromise;
        if (!BrowserHandoffStore.isHandoffAvailable()) {
          const obj2 = {};
          const obj4 = AnalyticsUtilsDefault;
          const superPropertiesBase64 = obj4.getSuperPropertiesBase64();
          if (null != superPropertiesBase64) {
            obj2["X-Super-Properties"] = superPropertiesBase64;
          }
          if (null != _null) {
            obj2["X-Fingerprint"] = _null;
          }
          if (null != installation) {
            obj2["X-Installation-ID"] = installation;
          }
          const obj3 = { withGuildExperiments: true, headers: obj2, context: obj5 };
          obj5 = { location: tmpResult4.getFingerprintLocation() };
          const fetchExperiments = fetchExperiments2.fetchExperiments;
          fetchExperiments2;
          tmpResult4 = router_utils;
          const experiments = fetchExperiments(obj3);
          nextPromise = experiments.then(f81555, f81556);
          closure_33 = nextPromise;
        }
        return nextPromise;
      }
    }
    nextPromise = Promise.resolve();
  }
}
function handleLogout(isSwitchingAccount) {
  let str;
  const obj = TokenManagerAll;
  const tmp2 = null != obj.getToken();
  const Storage = Storage6.Storage;
  const obj2 = { tokenManagerHasToken: tmp2, storageHasToken: null != Storage.get(closure_12) };
  closure_13.verbose("handleLogout called.", obj2);
  const obj3 = TokenManagerAll;
  const tmp5 = null != obj3.getToken();
  const Storage2 = Storage6.Storage;
  const obj4 = { tokenManagerHasToken: tmp5, storageHasToken: null != Storage2.get(closure_12) };
  closure_13.verbose("removeAuthToken called.", obj4);
  const obj5 = TokenManagerAll;
  obj5.removeAnalyticsToken();
  let flag;
  const obj6 = TokenManagerAll;
  const removeTokenResult = obj6.removeToken();
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
      const Storage3 = Storage6.Storage;
      Storage3.remove(fingerprint);
    }
    fetchFingerprint();
  }
  const PersistedStore = get_initializedDefault.PersistedStore;
  isSwitchingAccount = undefined;
  const clearAll = PersistedStore.clearAll;
  const obj7 = {
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
      "DerivedQosDataStore",
    ],
    type: str,
  };
  if (isSwitchingAccount != null) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
  }
  str = "all";
  if (isSwitchingAccount) {
    str = "user-data-only";
  }
  clearAll(obj7);
  const Store = get_initializedDefault.Store;
  const result = Store.removeAllConditionalListeners();
  MobileCacheSnapshotStore.clearAll();
  const tmp14Result = SentryUtilsDefault;
  tmp14Result.clearUser();
  const Storage4 = Storage6.Storage;
  Storage4.remove(user_id_cache);
  id = null;
  sessionId = null;
  let isSwitchingAccount1;
  if (isSwitchingAccount != null) {
    isSwitchingAccount1 = isSwitchingAccount.isSwitchingAccount;
  }
  NONE = isSwitchingAccount1 ? LoginStates.LOGGING_IN : LoginStates.NONE;
  c28 = "";
  let c30 = null;
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
  const tmp27 = c29;
  if (tmp27) {
    items.push({ type: "sms" });
  }
}
({ AnalyticEvents: metroImportAll, LoginStates } = Constants);
({ Platforms: c10, Routes: unpackModuleId, TOKEN_KEY: closure_12 } = Constants);
({ EXISTING_USER_AGE_GATE_MODAL_KEY, NEW_USER_AGE_GATE_MODAL_KEY } = AgeGateConstants);
let tmp4 = new LoggerDefault("AuthenticationStore");
let closure_13 = tmp4;
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
let Store = get_initializedDefault.Store;
class AuthenticationStore extends Store {
  initialize() {
    let paths;
    const Storage = Storage6.Storage;
    id = Storage.get(user_id_cache);
    const Storage2 = Storage6.Storage;
    let value = Storage2.get(analytics_installation);
    if (null == value) {
      const Storage3 = Storage6.Storage;
      const value2 = Storage3.get("analytics_installation");
      let tmp4 = null;
      if (null != value2) {
        tmp4 = null;
        if (value2.length > 0) {
          const Storage4 = Storage6.Storage;
          const result = Storage4.set(analytics_installation, value2);
          tmp4 = value2;
        }
      }
      value = tmp4;
    }
    installation = value;
    let obj = TokenManagerAll;
    if (null == obj.getToken()) {
      const tmp7 = null == installation || 0 === installation.length;
      let promise = fetchFingerprint();
      if (tmp7) {
        function fireApex() {
          const promise = require("asyncRequire")(paths[19], paths.paths);
          promise.then((fetchInstallationExperiments) =>
            fetchInstallationExperiments.fetchInstallationExperiments(null),
          );
        }
        promise.then(fireApex, fireApex);
      }
    }
    this.addChangeListener(() => {
      const obj = require("react-native");
      return obj.setClientState(id);
    });
  }
  getLoginStatus() {
    return NONE;
  }
  getId() {
    return id;
  }
  getSessionId() {
    return sessionId;
  }
  getAuthSessionIdHash() {
    return authSessionIdHash;
  }
  getStaticAuthSessionId() {
    return staticAuthSessionId;
  }
  getToken() {
    const obj = AuthenticationUtils;
    return obj.getToken();
  }
  isAuthenticated() {
    const obj = AuthenticationUtils;
    return obj.isAuthenticated();
  }
  getFingerprint() {
    return c21;
  }
  getInstallationForTracking() {
    let tmp = null;
    const obj = TrackingConsentUtilsDefault;
    if (obj.canUseInstallationId()) {
      tmp = installation;
    }
    return tmp;
  }
  getAnalyticsToken() {
    if (analyticsToken == null) {
      const obj = TokenManagerAll;
      analyticsToken = obj.getAnalyticsToken();
    }
    return analyticsToken;
  }
  getMFATicket() {
    return c28;
  }
  getMFAMethods() {
    return items;
  }
  getLoginInstanceId() {
    return c5;
  }
  hasTOTPEnabled() {
    return authenticator_types.includes(Server.AuthenticatorType.TOTP);
  }
  getCredentials() {
    if (null == c4) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("no credentials");
      throw error;
    } else {
      return c4;
    }
  }
  allowLogoutRedirect() {
    return !c26;
  }
  getSuspendedUserToken() {
    return c34;
  }
  getIsPasswordlessActive() {
    return c35;
  }
  attemptedPasswordLogin() {
    return closure_36;
  }
}
const prototype = AuthenticationStore.prototype;
AuthenticationStore.displayName = "AuthenticationStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let apexExperiments;
    let auth;
    let email;
    let user;
    let username;
    ({ user, analyticsToken, auth, apexExperiments } = arg0);
    ({ sessionId, authSessionIdHash, staticAuthSessionId } = arg0);
    const obj = TokenManagerAll;
    const tmp3 = null != obj.getToken();
    const Storage = Storage6.Storage;
    const obj2 = { tokenManagerHasToken: tmp3, storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("handleConnectionOpen called", obj2);
    ({ id, username, email } = user);
    const setUser = SentryUtilsDefault.setUser;
    SentryUtilsDefault;
    setUser(id, username, email, isStaffFromRawUserDefault(user));
    const tmpResult = TokenManagerAll;
    tmpResult.setAnalyticsToken(analyticsToken);
    id = user.id;
    if (undefined !== auth) {
      authenticator_types = auth.authenticator_types;
    }
    const Storage2 = Storage6.Storage;
    const result = Storage2.set(user_id_cache, user.id);
    let installation1;
    if (apexExperiments != null) {
      installation1 = apexExperiments.installation;
    }
    if (null != installation1) {
      installation = apexExperiments.installation;
      if (null == installation) {
        const tmp6Result = TrackingConsentUtilsDefault;
        if (tmp6Result.canUseInstallationId()) {
          const Storage3 = Storage6.Storage;
          const result1 = Storage3.set(analytics_installation, installation);
        }
      }
    }
    const Storage4 = Storage6.Storage;
    if (Storage4.get(metroImportAll.APP_FIRST_LOGIN, true)) {
      const obj3 = { platform: constants2.IOS };
      const tmp6Result2 = AnalyticsUtilsDefault;
      tmp6Result2.track(metroImportAll.APP_FIRST_LOGIN, obj3);
      const Storage5 = Storage6.Storage;
      const result2 = Storage5.set(metroImportAll.APP_FIRST_LOGIN, false);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    let email;
    let token;
    let user;
    let username;
    ({ user, analyticsToken } = arg0);
    ({ sessionId, token } = arg0);
    ({ id, username, email } = user);
    const setUser = SentryUtilsDefault.setUser;
    SentryUtilsDefault;
    setUser(id, username, email, isStaffFromRawUserDefault(user));
    const id2 = user.id;
    const obj = TokenManagerAll;
    const tmp6 = null != obj.getToken();
    const Storage = Storage6.Storage;
    const obj2 = { tokenManagerHasToken: tmp6, storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("setAuthToken called.", obj2);
    const tmp9 = null != id2 && id2 === id;
    if (!tmp9) {
      const tmp5Result = TokenManagerAll;
      tmp5Result.removeAnalyticsToken();
    }
    const tmp5Result3 = TokenManagerAll;
    tmp5Result3.setToken(token, id2);
    if (null != analyticsToken) {
      const tmp5Result4 = TokenManagerAll;
      tmp5Result4.setAnalyticsToken(analyticsToken);
    }
    closure_22 = c21;
    c21 = null;
    const Storage2 = Storage6.Storage;
    Storage2.remove(fingerprint);
    id = user.id;
    const Storage3 = Storage6.Storage;
    const result = Storage3.set(user_id_cache, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    let Storage2;
    code = code.code;
    const combined = "handleConnectionClosed called with code " + code + ".";
    let obj = TokenManagerAll;
    const tmp3 = null != obj.getToken();
    const Storage = Storage6.Storage;
    const obj2 = { tokenManagerHasToken: tmp3, storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose(combined, obj2);
    if (4004 === code) {
      const tmp6 = c26;
      if (tmp6) {
        c26 = true;
        handleLogout();
        const obj4 = Dispatcher;
        obj4.wait(f81557);
      } else {
        const obj3 = { user_id: Storage2.get(user_id_cache) };
        const track = AnalyticsUtilsDefault.track;
        const APP_USER_DEAUTHENTICATED = metroImportAll.APP_USER_DEAUTHENTICATED;
        AnalyticsUtilsDefault;
        Storage2 = Storage6.Storage;
        track(APP_USER_DEAUTHENTICATED, obj3);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => {
          const obj = router_utils;
          return obj.transitionTo(constants.DEFAULT_LOGGED_OUT);
        });
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
  },
  LOGIN: function handleLogin(arg0) {
    NONE = LoginStates.LOGGING_IN;
    const tmp2 = closure_36 || true === tmp;
    closure_36 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    NONE = LoginStates.NONE;
    token = token.token;
    const obj = TokenManagerAll;
    const tmp = null != obj.getToken();
    const Storage = Storage6.Storage;
    const obj2 = { tokenManagerHasToken: tmp, storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("setAuthToken called.", obj2);
    const obj3 = TokenManagerAll;
    obj3.removeAnalyticsToken();
    const obj4 = TokenManagerAll;
    obj4.setToken(token, undefined);
    closure_22 = c21;
    c21 = null;
    const Storage2 = Storage6.Storage;
    Storage2.remove(fingerprint);
    c28 = "";
    c29 = false;
    let c30 = null;
    c5 = null;
    items = [];
    if (c31) {
      items.push({ type: "totp" });
    }
    if (c32) {
      items.push({ type: "backup" });
    }
    const tmp10 = c29;
    if (tmp10) {
      items.push({ type: "sms" });
    }
    c35 = false;
    c34 = null;
  },
  LOGIN_FAILURE: function handleLoginFailure(error) {
    c28 = "";
    c29 = false;
    let c30 = null;
    c5 = null;
    items = [];
    error = error.error;
    if (c31) {
      items.push({ type: "totp" });
    }
    if (c32) {
      items.push({ type: "backup" });
    }
    const tmp4 = c29;
    if (tmp4) {
      items.push({ type: "sms" });
    }
    const obj = getAuthenticationErrorsFromAPIError;
    if (null != obj.getAuthenticationErrorsFromV6OrEarlierAPIError(error).date_of_birth) {
      NONE = LoginStates.LOGIN_AGE_GATE;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  LOGIN_MFA_STEP: function handleLoginMFAStep(arg0) {
    let ticket;
    let webauthn;
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
      const tmp7 = c31;
      if (tmp7) {
        items.push({ type: "totp" });
      }
      const tmp9 = c32;
      if (tmp9) {
        items.push({ type: "backup" });
      }
      const tmp11 = c29;
      if (tmp11) {
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
    let c30 = null;
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
      const tmp5 = c29;
      if (tmp5) {
        items.push({ type: "sms" });
      }
      const obj = TokenManagerAll;
      const tmp9 = null != obj.getToken();
      const Storage = Storage6.Storage;
      const obj2 = { tokenManagerHasToken: tmp9, storageHasToken: null != Storage.get(closure_12) };
      closure_13.verbose("removeAuthToken called.", obj2);
      const obj3 = TokenManagerAll;
      obj3.removeAnalyticsToken();
      const obj4 = TokenManagerAll;
      obj4.removeToken();
      fetchFingerprint(false);
    }
  },
  LOGIN_STATUS_RESET: function handleLoginStatusReset() {
    NONE = LoginStates.NONE;
  },
  LOGIN_SUSPENDED_USER: function handleSuspendedUserLogin(suspendedUserToken) {
    c35 = false;
    suspendedUserToken = suspendedUserToken.suspendedUserToken;
    setImmediate(() => {
      const obj = router_utils;
      return obj.transitionTo(constants.ACCOUNT_STANDING);
    });
  },
  LOGOUT: handleLogout,
  FINGERPRINT: function handleFingerprint(fingerprint) {
    let obj2;
    let obj3;
    let obj6;
    fingerprint = fingerprint.fingerprint;
    if (null == c21) {
      if (null != fingerprint) {
        let extractIdResult = null;
        const track2 = AnalyticsUtilsDefault.track;
        const USER_FINGERPRINT_CHANGED = metroImportAll.USER_FINGERPRINT_CHANGED;
        AnalyticsUtilsDefault;
        if (null != closure_22) {
          const obj4 = FingerprintUtils;
          extractIdResult = obj4.extractId(closure_22);
        }
        const obj5 = { old_fingerprint: extractIdResult, new_fingerprint: obj6.extractId(fingerprint) };
        obj6 = FingerprintUtils;
        track2(USER_FINGERPRINT_CHANGED, obj5);
        c21 = fingerprint;
        closure_22 = fingerprint;
        const Storage = Storage6.Storage;
        const result = Storage.set(fingerprint, c21);
      } else {
        fetchFingerprint();
      }
    } else {
      const tmp2 = null != fingerprint && c21 !== fingerprint;
      if (tmp2) {
        const obj = { fingerprint: obj2.extractId(c21), dropped_fingerprint: obj3.extractId(fingerprint) };
        const track = AnalyticsUtilsDefault.track;
        const EXTERNAL_FINGERPRINT_DROPPED = metroImportAll.EXTERNAL_FINGERPRINT_DROPPED;
        AnalyticsUtilsDefault;
        obj2 = FingerprintUtils;
        obj3 = FingerprintUtils;
        track(EXTERNAL_FINGERPRINT_DROPPED, obj);
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
    const obj = TrackingConsentUtilsDefault;
    if (obj.canUseInstallationId()) {
      const Storage = Storage6.Storage;
      const result = Storage.set(analytics_installation, installation);
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess(token) {
    token = token.token;
    const obj = TokenManagerAll;
    const tmp = null != obj.getToken();
    const Storage = Storage6.Storage;
    const obj2 = { tokenManagerHasToken: tmp, storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("setAuthToken called.", obj2);
    const obj3 = TokenManagerAll;
    obj3.removeAnalyticsToken();
    const obj4 = TokenManagerAll;
    obj4.setToken(token, undefined);
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
    const token = userId.token;
    const obj = TokenManagerAll;
    const tmp3 = null != obj.getToken();
    const Storage = Storage6.Storage;
    const obj2 = { tokenManagerHasToken: tmp3, storageHasToken: null != Storage.get(closure_12) };
    closure_13.verbose("handleUpdateToken called", obj2);
    const obj3 = TokenManagerAll;
    const tmp6 = null != obj3.getToken();
    const Storage2 = Storage6.Storage;
    const obj4 = { tokenManagerHasToken: tmp6, storageHasToken: null != Storage2.get(closure_12) };
    closure_13.verbose("setAuthToken called.", obj4);
    const tmp8 = null != userId && userId === id;
    if (!tmp8) {
      const tmpResult = TokenManagerAll;
      tmpResult.removeAnalyticsToken();
    }
    const tmpResult2 = TokenManagerAll;
    tmpResult2.setToken(token, userId);
    closure_22 = c21;
    c21 = null;
    const Storage3 = Storage6.Storage;
    Storage3.remove(fingerprint);
  },
  EXPERIMENTS_FETCH(withGuildExperiments) {
    let obj4;
    let obj5;
    let obj = {};
    withGuildExperiments = withGuildExperiments.withGuildExperiments;
    let obj2 = AnalyticsUtilsDefault;
    const superPropertiesBase64 = obj2.getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj["X-Super-Properties"] = superPropertiesBase64;
    }
    if (null != _null) {
      obj["X-Fingerprint"] = _null;
    }
    if (null != installation) {
      obj["X-Installation-ID"] = installation;
    }
    let obj3 = { withGuildExperiments, headers: obj, context: obj4 };
    obj4 = { location: obj5.getFingerprintLocation() };
    const fetchExperiments = fetchExperiments2.fetchExperiments;
    fetchExperiments2;
    obj5 = router_utils;
    const experiments = fetchExperiments(obj3);
    closure_33 = experiments.then(f81555, f81556);
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
    const obj = Dispatcher;
    obj.wait(f81557);
  },
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    c34 = null;
    NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => {
      const obj = router_utils;
      return obj.transitionTo(constants.DEFAULT_LOGGED_OUT);
    });
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    c28 = "";
    c29 = false;
    let c30 = null;
    c35 = false;
    c5 = null;
    if (error instanceof APIErrorDefault) {
      const obj = getAuthenticationErrorsFromAPIError;
      if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
        NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
    } else {
      NONE = LoginStates.NONE;
    }
  },
  PASSWORDLESS_START: function handlePasswordlessStart() {
    c35 = true;
  },
};
const authenticationStore = new AuthenticationStore(Dispatcher, obj, Dispatcher2.DispatchBand.Early);
let result = size.fileFinishedImporting("stores/AuthenticationStore.tsx");

export default authenticationStore;
