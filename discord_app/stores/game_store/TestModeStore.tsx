// === Module 8857: TestModeStore ===

// Module 8857 (TestModeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserSettings from "UserSettings" /* 1935 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1184 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 7397 */;

require = fn;
function reset() {
  testModeApplicationId = null;
  originURL = null;
  set = new Set();
  obj.applicationId = null;
  obj.originURL = null;
  error = null;
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
  testModeApplicationId = obj.applicationId;
  originURL = obj.originURL;
  this.waitFor(LibraryApplicationStore, SelectivelySyncedUserSettingsStore, UserSettingsProtoStore);
  const items = [UserSettingsProtoStore, SelectivelySyncedUserSettingsStore];
  this.syncWith(items, () => true);
  LibraryApplicationStore.whenInitialized(() => {
    c11 = true;
  });
};
prototype["getTestModeApplicationId"] = function getTestModeApplicationId() {
  return testModeApplicationId;
};
prototype["inTestModeForApplication"] = function inTestModeForApplication(applicationId) {
  return testModeApplicationId === applicationId;
};
prototype["inTestModeForEmbeddedApplication"] = function inTestModeForEmbeddedApplication(arg0) {
  let tmp = testModeApplicationId === arg0;
  if (tmp) {
    tmp = null != originURL;
  }
  return tmp;
};
prototype["shouldDisplayTestMode"] = function shouldDisplayTestMode(applicationId) {
  const DeveloperMode = UserSettings.DeveloperMode;
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
    return null != testModeApplicationId;
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
    if (null != originURL) {
      tmp = testModeApplicationId;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "testModeApplicationId", {
  get: function testModeApplicationId() {
    return testModeApplicationId;
  },
  set: undefined
});
Object.defineProperty(prototype, "testModeOriginURL", {
  get: function testModeOriginURL() {
    return originURL;
  },
  set: undefined
});
Object.defineProperty(prototype, "error", {
  get: function error() {
    return error;
  },
  set: undefined
});
prototype["whenInitialized"] = function whenInitialized(arg0) {
  closure_0 = arg0;
  const result = this.addConditionalChangeListener(() => {
    if (c11) {
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
    error = null;
  },
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function handleDeveloperTestModeAuthorizationSuccess(arg0) {
    ({ applicationId, originURL } = arg0);
    testModeApplicationId = applicationId;
    set.delete(applicationId);
    error = null;
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
    error = null;
  },
  LOGOUT: reset,
  DEVELOPER_TEST_MODE_RESET: reset
};
const testModeStore = new TestModeStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("stores/game_store/TestModeStore.tsx");

export default testModeStore;