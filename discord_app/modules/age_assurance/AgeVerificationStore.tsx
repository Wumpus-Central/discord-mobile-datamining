// discord_app/modules/age_assurance/AgeVerificationStore.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";

const require = arg1;
let c3 = 86400000;
let c4 = null;
let c5 = null;
let c6 = false;
let unchecked = "unchecked";
let c8 = null;
class AgeVerificationStore extends Store {
}
const prototype = AgeVerificationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar);
};
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return c6;
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
prototype["getReactiveCheckStatus"] = function getReactiveCheckStatus() {
  return unchecked;
};
prototype["getReactiveCheckMiss"] = function getReactiveCheckMiss() {
  let tmp = "miss" === unchecked;
  if (tmp) {
    tmp = null != c8;
  }
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - c8 < c3;
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
        tmp4 = null != c8;
      }
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - c8 < c3;
      }
      tmp3 = !tmp4;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
AgeVerificationStore.displayName = "AgeVerificationStore";
const ageVerificationStore = new AgeVerificationStore(require("dispatcher"), {
  AGE_VERIFICATION_METHODS_LOAD_START: function handleAgeVerificationMethodsLoadStart() {
    let c6 = true;
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function handleAgeVerificationMethodsLoadSuccess(methods) {
    methods = methods.methods;
    let c6 = false;
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function handleAgeVerificationMethodsLoadFailure() {
    let c6 = false;
  },
  AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS: function handleAgeVerificationMethodsV2LoadSuccess(methods) {
    methods = methods.methods;
  },
  INITIATE_AGE_VERIFICATION: function invalidateAgeVerificationMethodsV2() {
    let c5 = null;
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
      const Storage = Storage /* Storage */.Storage;
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
            let unchecked = "unchecked";
            let c8 = null;
          } else {
            unchecked = str4;
            c8 = reactiveCheckMissAt;
          }
        }
      }
      unchecked = "unchecked";
      c8 = null;
    } else {
      unchecked = "unchecked";
      c8 = null;
    }
    let c5 = null;
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
      const Storage = Storage /* Storage */.Storage;
      const obj = { reactiveCheckStatus: null, reactiveCheckMissAt: null };
      obj[0] = status;
      obj[1] = timestamp;
      const result = Storage.set(combined, obj);
    }
  },
  AGE_VERIFICATION_RESET: function handleAgeVerificationReset() {
    const suppress = "suppress";
    let c8 = null;
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
      const Storage = Storage /* Storage */.Storage;
      const obj = { reactiveCheckStatus: null, reactiveCheckMissAt: null };
      obj[0] = suppress;
      obj[1] = c8;
      const result = Storage.set(combined, obj);
    }
    let c5 = null;
  }
});
let result = require("initialize").fileFinishedImporting("modules/age_assurance/AgeVerificationStore.tsx");

export default ageVerificationStore;