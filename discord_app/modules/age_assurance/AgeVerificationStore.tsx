// === Module 8446: AgeVerificationStore ===

// Module 8446 (AgeVerificationStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let c3 = 86400000;
let methods = null;
let c5 = null;
let c6 = null;
let c7 = null;
let c8 = false;
let suppress = "unchecked";
let c10 = null;
const Store = initializeDefault.Store;
class AgeVerificationStore extends Store {
}
const prototype = AgeVerificationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "methods", {
  get: function methods() {
    return methods;
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
Object.defineProperty(prototype, "methodsV2OutageBannerMessage", {
  get: function methodsV2OutageBannerMessage() {
    return c7;
  },
  set: undefined
});
prototype["getReactiveCheckStatus"] = function getReactiveCheckStatus() {
  return suppress;
};
prototype["getReactiveCheckMiss"] = function getReactiveCheckMiss() {
  let tmp = "miss" === suppress;
  if (tmp) {
    tmp = null != c10;
  }
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - c10 < c3;
  }
  return tmp;
};
prototype["getReactiveCheckPassed"] = function getReactiveCheckPassed() {
  return "passed" === suppress;
};
prototype["shouldCallReactiveCheck"] = function shouldCallReactiveCheck() {
  let tmp2 = "passed" !== suppress;
  if (tmp2) {
    let tmp3 = "suppress" !== tmp;
    if (tmp3) {
      let tmp4 = "miss" === tmp;
      if (tmp4) {
        tmp4 = null != c10;
      }
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - c10 < c3;
      }
      tmp3 = !tmp4;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
AgeVerificationStore.displayName = "AgeVerificationStore";
const ageVerificationStore = new AgeVerificationStore(DispatcherDefault, {
  AGE_VERIFICATION_METHODS_LOAD_START: function handleAgeVerificationMethodsLoadStart() {
    c8 = true;
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function handleAgeVerificationMethodsLoadSuccess(methods) {
    methods = methods.methods;
    c8 = false;
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function handleAgeVerificationMethodsLoadFailure() {
    c8 = false;
  },
  AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS: function handleAgeVerificationMethodsV2LoadSuccess(arg0) {
    ({ methods: c5, footerMessage: c6, outageBannerMessage: c7 } = arg0);
  },
  INITIATE_AGE_VERIFICATION: function invalidateAgeVerificationMethodsV2() {
    c5 = null;
    c6 = null;
    c7 = null;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const currentUser = UserStore.getCurrentUser();
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
      value = Storage.get(combined);
      if (null != value) {
        if (typeof value === "object") {
          let str4 = value.reactiveCheckStatus;
          if (str4 == null) {
            str4 = "unchecked";
          }
          reactiveCheckMissAt = value.reactiveCheckMissAt;
          if (reactiveCheckMissAt == null) {
            reactiveCheckMissAt = null;
          }
          let tmp9 = "miss" === str4 && null != reactiveCheckMissAt;
          if (tmp9) {
            const _Date = Date;
            tmp9 = Date.now() - reactiveCheckMissAt >= c3;
          }
          if (tmp9) {
            suppress = "unchecked";
            c10 = null;
          } else {
            suppress = str4;
            c10 = reactiveCheckMissAt;
          }
        }
      }
      suppress = "unchecked";
      c10 = null;
    } else {
      suppress = "unchecked";
      c10 = null;
    }
    c5 = null;
    c6 = null;
    c7 = null;
  },
  AGE_VERIFICATION_CHECK_RESULT_SET: function handleReactiveCheckResultSet(status) {
    status = status.status;
    suppress = status;
    let timestamp = null;
    if ("miss" === status) {
      const _Date = Date;
      timestamp = Date.now();
    }
    reactiveCheckMissAt = timestamp;
    const currentUser = UserStore.getCurrentUser();
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
      const obj = { reactiveCheckStatus: suppress, reactiveCheckMissAt };
      const result = Storage.set(combined, obj);
    }
  },
  AGE_VERIFICATION_RESET: function handleAgeVerificationReset() {
    suppress = "suppress";
    reactiveCheckMissAt = null;
    const currentUser = UserStore.getCurrentUser();
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
      const obj = { reactiveCheckStatus: suppress, reactiveCheckMissAt };
      const result = Storage.set(combined, obj);
    }
    c5 = null;
    c6 = null;
    c7 = null;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationStore.tsx");

export default ageVerificationStore;