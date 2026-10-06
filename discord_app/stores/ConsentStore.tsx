// === Module 6091: ConsentStore ===

// Module 6091 (ConsentStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c0 = false;
let c1 = false;
let obj = {};
let c3 = null;
const Store = get_initializedDefault.Store;
class ConsentStore extends Store {
  hasConsented(arg0) {
    const consented = null != obj[arg0] && obj[arg0].consented;
    return consented;
  }
  getAuthenticationConsentRequired() {
    return c3;
  }
}
const prototype = ConsentStore.prototype;
Object.defineProperty(prototype, "consents", {
  get: function consents() {
    return obj;
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
  }
};
const consentStore = new ConsentStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ConsentStore.tsx");

export default consentStore;