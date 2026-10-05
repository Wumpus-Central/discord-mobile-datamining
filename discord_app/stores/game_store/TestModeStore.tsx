// === Module 8515: TestModeStore ===

// Module 8515 (TestModeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettings from "UserSettings" /* 2028 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 6902 */;
import size from "module_2" /* 2 */;

let originURL;

function reset() {
  applicationId = null;
  originURL = null;
  set = new Set();
  obj.applicationId = null;
  obj.originURL = null;
  error = null;
}
let obj = { applicationId: null, originURL: null };
let set = new Set();
let c11 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class TestModeStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    obj = {};
    const merged = Object.assign(tmp);
    applicationId = obj.applicationId;
    originURL = obj.originURL;
    this.waitFor(LibraryApplicationStore, SelectivelySyncedUserSettingsStore, UserSettingsProtoStore);
    const items = [UserSettingsProtoStore, SelectivelySyncedUserSettingsStore];
    this.syncWith(items, () => true);
    LibraryApplicationStore.whenInitialized(() => {
      c11 = true;
    });
  }
  getTestModeApplicationId() {
    return applicationId;
  }
  inTestModeForApplication(applicationId) {
    return applicationId === applicationId;
  }
  inTestModeForEmbeddedApplication(arg0) {
    return applicationId === arg0 && null != originURL;
  }
  shouldDisplayTestMode(applicationId) {
    const DeveloperMode = UserSettings.DeveloperMode;
    let setting = DeveloperMode.getSetting();
    if (setting) {
      const self = this;
      setting = this.inTestModeForApplication(applicationId);
    }
    return setting;
  }
  getState() {
    return obj;
  }
  whenInitialized(arg0) {
    let closure_0 = arg0;
    const result = this.addConditionalChangeListener(() => {
      if (c11) {
        const _setImmediate = setImmediate;
        setImmediate(closure_0);
        return false;
      }
    });
  }
}
const prototype = TestModeStore.prototype;
Object.defineProperty(prototype, "isTestMode", {
  get: function isTestMode() {
    return null != applicationId;
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
      tmp = applicationId;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "testModeApplicationId", {
  get: function testModeApplicationId() {
    return applicationId;
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
TestModeStore.displayName = "TestModeStore";
TestModeStore.persistKey = "TestModeStore";
const obj2 = {
  DEVELOPER_TEST_MODE_AUTHORIZATION_START: function handleDeveloperTestModeAuthorizationStart(applicationId) {
    set.add(applicationId.applicationId);
    error = null;
  },
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function handleDeveloperTestModeAuthorizationSuccess(arg0) {
    ({ applicationId, originURL } = arg0);
    set.delete(applicationId);
    error = null;
    obj.applicationId = applicationId;
    obj.originURL = originURL;
  },
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function handleDeveloperTestModeAuthorizationFail(error) {
    error = error.error;
    set.delete(error.applicationId);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(testModeApplicationId) {
    applicationId = testModeApplicationId.testModeApplicationId;
  },
  DEVELOPER_TEST_MODE_RESET_ERROR: function resetError() {
    error = null;
  },
  LOGOUT: reset,
  DEVELOPER_TEST_MODE_RESET: reset
};
const testModeStore = new TestModeStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("stores/game_store/TestModeStore.tsx");

export default testModeStore;