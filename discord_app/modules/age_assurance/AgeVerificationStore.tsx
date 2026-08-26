// === Module 8044: initialize ===

// Module 8044 (initialize)
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
let c3 = 86400000;
let c4 = null;
let c5 = null;
let c6 = null;
let c7 = false;
let unchecked = "unchecked";
let c9 = null;
const Store = initializeDefault.Store;
class AgeVerificationStore extends Store {
}
const prototype = AgeVerificationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2);
};
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return c7;
  },
  set: undefined
});
Object.defineProperty(prototype, "methods", {
  get: function methods(arg0) {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "methodsV2", {
  get: function methodsV2() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "methodsV2FooterMessage", {
  get: function methodsV2FooterMessage() {
    return c6;
  },
  set: undefined
});
prototype["getReactiveCheckStatus"] = function getReactiveCheckStatus() {
  return unchecked;
};
prototype["getReactiveCheckMiss"] = function getReactiveCheckMiss() {
  let tmp = "miss" === unchecked;
  if (tmp) {
    tmp = null != c9;
  }
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - c9 < c3;
  }
  return tmp;
};
prototype["getReactiveCheckPassed"] = function getReactiveCheckPassed() {
  return "passed" === unchecked;
};
prototype["shouldCallReactiveCheck"] = function shouldCallReactiveCheck() {
  let tmp2 = "passed" !== unchecked;
  if (tmp2) {
    let tmp3 = "suppress" !== tmp;
    if (tmp3) {
      let tmp4 = "miss" === tmp;
      if (tmp4) {
        tmp4 = null != c9;
      }
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - c9 < c3;
      }
      tmp3 = !tmp4;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
AgeVerificationStore.displayName = "AgeVerificationStore";
const ageVerificationStore = new AgeVerificationStore(dispatcherDefault, {
  AGE_VERIFICATION_METHODS_LOAD_START: function handleAgeVerificationMethodsLoadStart() {
    c7 = true;
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function handleAgeVerificationMethodsLoadSuccess(methods) {
    methods = methods.methods;
    c7 = false;
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function handleAgeVerificationMethodsLoadFailure() {
    c7 = false;
  },
  AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS: function handleAgeVerificationMethodsV2LoadSuccess(arg0) {
    ({ methods: c5, footerMessage: c6 } = arg0);
  },
  INITIATE_AGE_VERIFICATION: function invalidateAgeVerificationMethodsV2() {
    c5 = null;
    c6 = null;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let combined = null;
    if (null != id) {
      const _HermesInternal = HermesInternal;
      combined = "AgeVerificationStore_" + id;
    }
    if (null != combined) {
      const Storage = Storage2.Storage;
      const value = Storage.get(combined);
      if (null != value) {
        if (typeof value === "object") {
          let str4 = value.reactiveCheckStatus;
          if (str4 == null) {
            str4 = "unchecked";
          }
          let reactiveCheckMissAt = value.reactiveCheckMissAt;
          if (reactiveCheckMissAt == null) {
            reactiveCheckMissAt = null;
          }
          let tmp9 = "miss" === str4 && null != reactiveCheckMissAt;
          if (tmp9) {
            const _Date = Date;
            tmp9 = Date.now() - reactiveCheckMissAt >= c3;
          }
          if (tmp9) {
            unchecked = "unchecked";
            c9 = null;
          } else {
            unchecked = str4;
            c9 = reactiveCheckMissAt;
          }
        }
      }
      unchecked = "unchecked";
      c9 = null;
    } else {
      unchecked = "unchecked";
      c9 = null;
    }
    c5 = null;
    c6 = null;
  },
  AGE_VERIFICATION_CHECK_RESULT_SET: function handleReactiveCheckResultSet(status) {
    status = status.status;
    let timestamp = null;
    if ("miss" === status) {
      const _Date = Date;
      timestamp = Date.now();
    }
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let combined = null;
    if (null != id) {
      const _HermesInternal = HermesInternal;
      combined = "AgeVerificationStore_" + id;
    }
    if (null != combined) {
      const Storage = Storage2.Storage;
      const obj = { reactiveCheckStatus: null, reactiveCheckMissAt: null };
      obj[0] = status;
      obj[1] = timestamp;
      const result = Storage.set(combined, obj);
    }
  },
  AGE_VERIFICATION_RESET: function handleAgeVerificationReset() {
    const suppress = "suppress";
    c9 = null;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let combined = null;
    if (null != id) {
      const _HermesInternal = HermesInternal;
      combined = "AgeVerificationStore_" + id;
    }
    if (null != combined) {
      const Storage = Storage2.Storage;
      const obj = { reactiveCheckStatus: null, reactiveCheckMissAt: null };
      obj[0] = suppress;
      obj[1] = c9;
      const result = Storage.set(combined, obj);
    }
    c5 = null;
    c6 = null;
  }
});
let result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationStore.tsx");

export default ageVerificationStore;