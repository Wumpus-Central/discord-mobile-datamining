// === Module 5709: hasConsented ===

// Module 5709 (hasConsented)
import { Store } from "initialize";

let c0 = false;
let c1 = false;
let closure_2 = {};
let c3 = null;
class ConsentStore extends Store {
}
const prototype = ConsentStore.prototype;
prototype["hasConsented"] = function hasConsented(arg0) {
  let consented = null != dependencyMap[arg0];
  if (consented) {
    consented = dependencyMap[arg0].consented;
  }
  return consented;
};
Object.defineProperty(prototype, "consents", {
  get: function consents() {
    return closure_2;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchedConsents", {
  get: function fetchedConsents() {
    return c0;
  },
  set: undefined
});
Object.defineProperty(prototype, "receivedConsentsInConnectionOpen", {
  get: function receivedConsentsInConnectionOpen() {
    return c1;
  },
  set: undefined
});
prototype["getAuthenticationConsentRequired"] = function getAuthenticationConsentRequired() {
  return c3;
};
ConsentStore.displayName = "ConsentStore";
const consentStore = new ConsentStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(consents) {
    consents = consents.consents;
    if (null != consents) {
      const obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(consents);
      let c1 = true;
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(consents) {
    const obj = {};
    const merged = Object.assign(consents.consents);
    let c0 = true;
  },
  UPDATE_CONSENTS: function handleUpdateConsents(consents) {
    const obj = {};
    const merged = Object.assign(consents.consents);
    let c0 = true;
  },
  SET_CONSENT_REQUIRED: function handleConsentRequired(consentRequired) {
    consentRequired = consentRequired.consentRequired;
  },
  LOGOUT: function handleLogout() {
    let c3 = null;
  }
});
const result = require("set").fileFinishedImporting("stores/ConsentStore.tsx");

export default consentStore;