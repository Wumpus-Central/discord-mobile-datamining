// discord_app/stores/ConsentStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";

let c0 = false;
let c1 = false;
let obj = {};
let c3 = null;
const Store = initializeDefault.Store;
class ConsentStore extends Store {}
const prototype = ConsentStore.prototype;
prototype["hasConsented"] = function hasConsented(arg0) {
  let consented = null != obj[arg0];
  if (consented) {
    consented = obj[arg0].consented;
  }
  return consented;
};
Object.defineProperty(prototype, "consents", {
  get: function consents() {
    return obj;
  },
  set: undefined,
});
Object.defineProperty(prototype, "fetchedConsents", {
  get: function fetchedConsents() {
    return c0;
  },
  set: undefined,
});
Object.defineProperty(prototype, "receivedConsentsInConnectionOpen", {
  get: function receivedConsentsInConnectionOpen() {
    return c1;
  },
  set: undefined,
});
prototype["getAuthenticationConsentRequired"] = function getAuthenticationConsentRequired() {
  return c3;
};
ConsentStore.displayName = "ConsentStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(consents) {
    consents = consents.consents;
    if (null != consents) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(consents);
      c1 = true;
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(consents) {
    obj = {};
    const merged = Object.assign(consents.consents);
    c0 = true;
  },
  UPDATE_CONSENTS: function handleUpdateConsents(consents) {
    obj = {};
    const merged = Object.assign(consents.consents);
    c0 = true;
  },
  SET_CONSENT_REQUIRED: function handleConsentRequired(consentRequired) {
    consentRequired = consentRequired.consentRequired;
  },
  LOGOUT: function handleLogout() {
    c3 = null;
  },
};
const consentStore = new ConsentStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/ConsentStore.tsx");

export default consentStore;
