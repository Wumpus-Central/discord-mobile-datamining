// === Module 8467: reset ===

// Module 8467 (reset)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import closure_5 from "initialize" /* 1303 */;
import closure_6 from "handleConnectionClosedOrResumed" /* 1340 */;
import closure_7 from "setLibraryApplications" /* 4487 */;
import set from "set" /* 2 */;

require = arg1;
function reset() {
  c2 = null;
  c3 = null;
  set = new Set();
  obj.applicationId = null;
  obj.originURL = null;
  c4 = null;
}
let obj = { applicationId: null, originURL: null };
let set = new Set();
let c11 = false;
const PersistedStore = initializeDefault.PersistedStore;
class TestModeStore extends PersistedStore {
}
const prototype = TestModeStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  obj = {};
  const merged = Object.assign(tmp);
  const applicationId = obj.applicationId;
  const originURL = obj.originURL;
  this.waitFor(closure_7, closure_5, closure_6);
  const items = [closure_6, closure_5];
  this.syncWith(items, () => true);
  closure_7.whenInitialized(() => {
    c11 = true;
  });
};
prototype["getTestModeApplicationId"] = function getTestModeApplicationId() {
  return closure_2;
};
prototype["inTestModeForApplication"] = function inTestModeForApplication(applicationId) {
  return closure_2 === applicationId;
};
prototype["inTestModeForEmbeddedApplication"] = function inTestModeForEmbeddedApplication(arg0) {
  let tmp = closure_2 === arg0;
  if (tmp) {
    tmp = null != closure_3;
  }
  return tmp;
};
prototype["shouldDisplayTestMode"] = function shouldDisplayTestMode(applicationId) {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  let setting = DeveloperMode.getSetting();
  if (setting) {
    const self = this;
    setting = this.inTestModeForApplication(applicationId);
  }
  return setting;
};
prototype["getState"] = function getState() {
  return obj;
};
Object.defineProperty(prototype, "isTestMode", {
  get: function isTestMode() {
    return null != closure_2;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingAuthorization", {
  get: function isFetchingAuthorization() {
    return set.size > 0;
  },
  set: undefined
});
Object.defineProperty(prototype, "testModeEmbeddedApplicationId", {
  get: function testModeEmbeddedApplicationId() {
    let tmp = null;
    if (null != closure_3) {
      tmp = closure_2;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "testModeApplicationId", {
  get: function testModeApplicationId() {
    return closure_2;
  },
  set: undefined
});
Object.defineProperty(prototype, "testModeOriginURL", {
  get: function testModeOriginURL() {
    return closure_3;
  },
  set: undefined
});
Object.defineProperty(prototype, "error", {
  get: function error() {
    return closure_4;
  },
  set: undefined
});
prototype["whenInitialized"] = function whenInitialized(arg0) {
  closure_0 = arg0;
  const result = this.addConditionalChangeListener(() => {
    if (closure_1_11) {
      const _setImmediate = setImmediate;
      setImmediate(closure_0);
      return false;
    }
  });
};
TestModeStore.displayName = "TestModeStore";
TestModeStore.persistKey = "TestModeStore";
obj = {
  DEVELOPER_TEST_MODE_AUTHORIZATION_START: function handleDeveloperTestModeAuthorizationStart(applicationId) {
    set.add(applicationId.applicationId);
    c4 = null;
  },
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function handleDeveloperTestModeAuthorizationSuccess(arg0) {
    ({ applicationId, originURL } = arg0);
    set.delete(applicationId);
    c4 = null;
    obj.applicationId = applicationId;
    obj.originURL = originURL;
  },
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function handleDeveloperTestModeAuthorizationFail(applicationId) {
    set.delete(applicationId.applicationId);
    error = applicationId.error;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(testModeApplicationId) {
    testModeApplicationId = testModeApplicationId.testModeApplicationId;
  },
  DEVELOPER_TEST_MODE_RESET_ERROR: function resetError() {
    c4 = null;
  },
  LOGOUT: reset,
  DEVELOPER_TEST_MODE_RESET: reset
};
const testModeStore = new TestModeStore(dispatcherDefault, obj);
let result = set.fileFinishedImporting("stores/game_store/TestModeStore.tsx");

export default testModeStore;