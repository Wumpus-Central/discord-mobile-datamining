// === Module 6902: LibraryApplicationStore ===

// Module 6902 (LibraryApplicationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage6 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import FlagUtilsAll from "FlagUtils" /* 1390 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 6904 */;
import LibraryApplicationRecord from "LibraryApplicationRecord" /* 6903 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_10, closure_9, set2;

function setLibraryApplications(libraryApplications) {
  const tmp = libraryApplications[Symbol.iterator]();
  while (tmp !== undefined) {
    let fromServer = LibraryApplicationRecord.createFromServer(tmp2);
    let obj = LibraryApplicationUtils;
    closure_9[obj.getComboId(fromServer.id, fromServer.branchId)] = fromServer;
    continue;
  }
}
function handleLibraryApplicationUpdate(libraryApplication) {
  const fromServer = LibraryApplicationRecord.createFromServer(libraryApplication.libraryApplication);
  const obj = LibraryApplicationUtils;
  const comboId = obj.getComboId(fromServer.id, fromServer.branchId);
  closure_9[comboId] = fromServer;
  set.delete(comboId);
}
const LibraryApplicationFlags = Constants.LibraryApplicationFlags;
const LibraryApplicationStore_str = "LibraryApplicationStore";
let c8 = false;
const React4 = {};
const authStore = {};
let set = new Set();
let activeLibraryApplicationBranchIds = {};
let activeLaunchOptionIds = {};
let c14 = false;
const Store = get_initializedDefault.Store;
class LibraryApplicationStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
    const Storage = Storage6.Storage;
    const value = Storage.get(LibraryApplicationStore_str);
    if (null != value) {
      if (null == value.activeLaunchOptionIds) {
        const Storage2 = Storage6.Storage;
        set = Storage2.set;
        const Storage3 = Storage6.Storage;
        let value3 = Storage3.get(LibraryApplicationStore_str);
        if (value3 == null) {
          value3 = {};
        }
        const obj = { activeLaunchOptionIds };
        const merged = Object.assign(value3);
        const result = set(LibraryApplicationStore_str, obj);
      } else {
        activeLaunchOptionIds = value.activeLaunchOptionIds;
      }
      if (null == value.activeLibraryApplicationBranchIds) {
        const Storage4 = Storage6.Storage;
        set2 = Storage4.set;
        const Storage5 = Storage6.Storage;
        let value4 = Storage5.get(LibraryApplicationStore_str);
        if (value4 == null) {
          value4 = {};
        }
        const obj2 = { activeLibraryApplicationBranchIds };
        const merged1 = Object.assign(value4);
        set2(LibraryApplicationStore_str, obj2);
      } else {
        activeLibraryApplicationBranchIds = value.activeLibraryApplicationBranchIds;
      }
    }
  }
  getAllLibraryApplications() {
    const obj = {};
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    return obj;
  }
  hasLibraryApplication() {
    const obj = {};
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    return keys(obj).length > 0;
  }
  hasApplication(applicationId, branchId) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    const obj = LibraryApplicationUtils;
    const comboId = obj.getComboId(applicationId, branchId);
    let obj2 = closure_9[comboId];
    if (obj2 == null) {
      obj2 = closure_10[comboId];
    }
    let tmp5 = null != obj2;
    if (tmp5) {
      let result = !(!flag && obj2.isHidden());
      !flag && obj2.isHidden();
      if (result) {
        const tmpResult = LibraryApplicationUtils;
        result = tmpResult.isUserEntitledToLibraryApplication(obj2);
      }
      tmp5 = result;
    }
    return tmp5;
  }
  getLibraryApplication(applicationId, item, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    const obj = LibraryApplicationUtils;
    const comboId = obj.getComboId(applicationId, item);
    let tmp4 = closure_9[comboId];
    if (tmp4 == null) {
      tmp4 = closure_10[comboId];
    }
    let tmp6 = tmp4;
    if (flag) {
      tmp6 = tmp4;
      if (null != tmp4) {
        let tmp7 = null;
        const tmpResult = LibraryApplicationUtils;
        if (tmpResult.isUserEntitledToLibraryApplication(tmp4)) {
          tmp7 = tmp4;
        }
        tmp6 = tmp7;
      }
    }
    return tmp6;
  }
  getActiveLibraryApplication(id) {
    if (null != activeLibraryApplicationBranchIds[id]) {
      const obj = LibraryApplicationUtils;
      const comboId = obj.getComboId(id, tmp);
      let obj2 = closure_9[comboId];
      if (obj2 == null) {
        obj2 = closure_10[comboId];
      }
      if (null != obj2) {
        const tmp2Result = LibraryApplicationUtils;
        if (tmp2Result.isUserEntitledToLibraryApplication(obj2)) {
          return obj2;
        }
      }
    }
    const obj3 = {};
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    for (const key10030 in obj3) {
      if (obj3[key10030].id !== id) {
        continue;
      } else {
        let obj5 = obj3[key10030];
        let obj6 = LibraryApplicationUtils;
        if (!obj6.isUserEntitledToLibraryApplication(obj5)) {
          continue;
        } else {
          return obj5;
        }
        continue;
      }
      continue;
    }
  }
  isUpdatingFlags(applicationId, branchId) {
    const has = set.has;
    const obj = LibraryApplicationUtils;
    return has(obj.getComboId(applicationId, branchId));
  }
  getActiveLaunchOptionId(applicationId, branchId) {
    const obj = LibraryApplicationUtils;
    return activeLaunchOptionIds[obj.getComboId(obj, applicationId, branchId)];
  }
  whenInitialized(arg0) {
    let closure_0 = arg0;
    const result = this.addConditionalChangeListener(() => {
      if (c8) {
        const _setImmediate = setImmediate;
        setImmediate(closure_0);
        return false;
      }
    });
  }
}
const prototype = LibraryApplicationStore.prototype;
Object.defineProperty(prototype, "libraryApplications", {
  get: function libraryApplications() {
    const obj = {};
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      const tmp2 = obj[item];
      const isHiddenResult = obj[item].isHidden();
      const tmp = item;
      if (isHiddenResult) {
        delete tmp2[tmp];
      }
    });
    return obj;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetched", {
  get: function fetched() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "entitledBranchIds", {
  get: function entitledBranchIds() {
    let obj = {};
    const tmp = require("module_12");
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    const tmpResult = tmp(obj);
    const values = tmpResult.values();
    const found = values.filter((item) => {
      const obj = LibraryApplicationUtils;
      return obj.isUserEntitledToLibraryApplication(item);
    });
    const iter = found.map((branchId) => branchId.branchId);
    return iter.value();
  },
  set: undefined
});
Object.defineProperty(prototype, "hasRemovedLibraryApplicationThisSession", {
  get: function hasRemovedLibraryApplicationThisSession() {
    return c14;
  },
  set: undefined
});
LibraryApplicationStore.displayName = "LibraryApplicationStore";
let obj = {
  LOGOUT: function handleLogout() {
    c8 = false;
  },
  LIBRARY_FETCH_SUCCESS: function handleFetchSuccess(libraryApplications) {
    closure_9 = {};
    setLibraryApplications(libraryApplications.libraryApplications);
    c8 = true;
  },
  SKU_PURCHASE_SUCCESS: function handlePurchaseSuccess(libraryApplications) {
    setLibraryApplications(libraryApplications.libraryApplications);
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_START: function handleFlagsUpdateStart(flags) {
    let applicationId;
    let branchId;
    ({ applicationId, branchId } = flags);
    flags = flags.flags;
    const obj = LibraryApplicationUtils;
    const comboId = obj.getComboId(applicationId, branchId);
    const obj2 = LibraryApplicationUtils;
    const comboId1 = obj2.getComboId(applicationId, branchId);
    let obj3 = closure_9[comboId1];
    if (obj3 == null) {
      obj3 = closure_10[comboId1];
    }
    let hasFlagResult = null != obj3 && !obj3.isHidden();
    if (hasFlagResult) {
      const obj4 = FlagUtilsAll;
      hasFlagResult = obj4.hasFlag(flags, LibraryApplicationFlags.HIDDEN);
    }
    if (hasFlagResult) {
      c14 = true;
    }
    set.add(comboId);
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: handleLibraryApplicationUpdate,
  LIBRARY_APPLICATION_UPDATE: handleLibraryApplicationUpdate,
  LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function handleActiveLaunchOptionIdUpdate(arg0) {
    let applicationId;
    let branchId;
    let launchOptionId;
    ({ applicationId, branchId, launchOptionId } = arg0);
    activeLaunchOptionIds[LibraryApplicationUtils.getComboId(applicationId, branchId)] = launchOptionId;
    LibraryApplicationUtils;
    const Storage = Storage6.Storage;
    set = Storage.set;
    const Storage2 = Storage6.Storage;
    let obj2 = Storage2.get(LibraryApplicationStore_str);
    if (obj2 == null) {
      obj2 = {};
    }
    const obj3 = { activeLaunchOptionIds };
    const merged = Object.assign(obj2);
    const result = set(LibraryApplicationStore_str, obj3);
  },
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function handleActiveBranchUpdate(arg0) {
    let applicationId;
    let branchId;
    ({ applicationId, branchId } = arg0);
    if (activeLibraryApplicationBranchIds[applicationId] === branchId) {
      return false;
    } else {
      activeLibraryApplicationBranchIds[applicationId] = branchId;
      const Storage = Storage6.Storage;
      set = Storage.set;
      const Storage2 = Storage6.Storage;
      let obj = Storage2.get(LibraryApplicationStore_str);
      if (obj == null) {
        obj = {};
      }
      const obj2 = { activeLibraryApplicationBranchIds };
      const merged = Object.assign(obj);
      const result = set(LibraryApplicationStore_str, obj2);
    }
  },
  LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function handleTestModeEnabled(libraryApplications) {
    libraryApplications = libraryApplications.libraryApplications;
    for (const item10006 of libraryApplications) {
      let obj = LibraryApplicationUtils;
      closure_10[obj.getComboId(item10006.id, item10006.branchId)] = item10006;
      continue;
    }
  },
  DEVELOPER_TEST_MODE_RESET: function handleTestModeDisabled() {
    closure_10 = {};
  }
};
const libraryApplicationStore = new LibraryApplicationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/LibraryApplicationStore.tsx");

export default libraryApplicationStore;