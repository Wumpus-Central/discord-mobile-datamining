// discord_app/modules/age_assurance/AgeVerificationStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function invalidateAgeVerificationMethodsV2() {
  c5 = null;
  c6 = null;
  c7 = null;
}
let c3 = 86400000;
let methods = null;
let c5 = null;
let c6 = null;
let c7 = null;
let c8 = false;
let suppress = "unchecked";
let timestamp = null;
const Store = get_initializedDefault.Store;
class AgeVerificationStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getReactiveCheckStatus() {
    return suppress;
  }
  getReactiveCheckMiss() {
    let tmp = "miss" === suppress && null != timestamp;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() - timestamp < c3;
    }
    return tmp;
  }
  getReactiveCheckPassed() {
    return "passed" === suppress;
  }
  shouldCallReactiveCheck() {
    let tmp2 = "passed" !== suppress;
    if (tmp2) {
      let tmp3 = "suppress" !== suppress;
      if (tmp3) {
        let tmp4 = "miss" === suppress && null != timestamp;
        if (tmp4) {
          const _Date = Date;
          tmp4 = Date.now() - timestamp < c3;
        }
        tmp3 = !tmp4;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }
}
const prototype = AgeVerificationStore.prototype;
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return c8;
  },
  set: undefined,
});
Object.defineProperty(prototype, "methods", {
  get: function methods() {
    return methods;
  },
  set: undefined,
});
Object.defineProperty(prototype, "methodsV2", {
  get: function methodsV2() {
    return c5;
  },
  set: undefined,
});
Object.defineProperty(prototype, "methodsV2FooterMessage", {
  get: function methodsV2FooterMessage() {
    return c6;
  },
  set: undefined,
});
Object.defineProperty(prototype, "methodsV2OutageBannerMessage", {
  get: function methodsV2OutageBannerMessage() {
    return c7;
  },
  set: undefined,
});
AgeVerificationStore.displayName = "AgeVerificationStore";
let obj = {
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
  AGE_VERIFICATION_METHODS_V2_INVALIDATE: invalidateAgeVerificationMethodsV2,
  INITIATE_AGE_VERIFICATION: invalidateAgeVerificationMethodsV2,
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
            suppress = "unchecked";
            timestamp = null;
          } else {
            suppress = str4;
            timestamp = reactiveCheckMissAt;
          }
        }
      }
      suppress = "unchecked";
      timestamp = null;
    } else {
      suppress = "unchecked";
      timestamp = null;
    }
    c5 = null;
    c6 = null;
    c7 = null;
  },
  AGE_VERIFICATION_CHECK_RESULT_SET: function handleReactiveCheckResultSet(status) {
    status = status.status;
    suppress = status;
    timestamp = null;
    if ("miss" === status) {
      const _Date = Date;
      timestamp = Date.now();
    }
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
      const obj = { reactiveCheckStatus: suppress, reactiveCheckMissAt: timestamp };
      const result = Storage.set(combined, obj);
    }
  },
  AGE_VERIFICATION_RESET: function handleAgeVerificationReset() {
    suppress = "suppress";
    timestamp = null;
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
      const obj = { reactiveCheckStatus: suppress, reactiveCheckMissAt: timestamp };
      const result = Storage.set(combined, obj);
    }
    c5 = null;
    c6 = null;
    c7 = null;
  },
};
const ageVerificationStore = new AgeVerificationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationStore.tsx");

export default ageVerificationStore;
