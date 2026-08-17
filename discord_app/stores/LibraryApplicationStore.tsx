// discord_app/stores/LibraryApplicationStore.tsx
import initializeDefault from "initialize" /* 589 */;
import Storage6 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import hasFlagAll from "hasFlag" /* 1403 */;
import getComboId from "getComboId" /* 4520 */;
import closure_4 from "createFromServer" /* 4513 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import { LibraryApplicationFlags } from "ME" /* 676 */;
import set from "set" /* 2 */;
import { apply } from "../../_runtime/00012_apply.js";

require = arg1;
function setLibraryApplications(libraryApplications) {
  while (tmp !== undefined) {
    let tmp3 = closure_4;
    let fromServer = closure_4.createFromServer(tmp2);
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let obj = getComboId;
    let tmp7 = closure_9;
    closure_9[obj.getComboId(fromServer.id, fromServer.branchId)] = fromServer;
    continue;
  }
}
function handleLibraryApplicationUpdate(libraryApplication) {
  const fromServer = closure_4.createFromServer(libraryApplication.libraryApplication);
  const comboId = getComboId.getComboId(fromServer.id, fromServer.branchId);
  closure_9[comboId] = fromServer;
  set.delete(comboId);
}
const LibraryApplicationStore = "LibraryApplicationStore";
let c8 = false;
let closure_9 = {};
let closure_10 = {};
let set = new Set();
let closure_12 = {};
let closure_13 = {};
let c14 = false;
const Store = initializeDefault.Store;
class LibraryApplicationStore extends Store {
}
const prototype = LibraryApplicationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5);
  const Storage = Storage6.Storage;
  let value = Storage.get(LibraryApplicationStore);
  if (null != value) {
    if (null == value.activeLaunchOptionIds) {
      const Storage2 = tmp2(595).Storage;
      const Storage3 = tmp2(595).Storage;
      value = Storage3.get(tmp4);
      if (value == null) {
        value = {};
      }
      let obj = {};
      const merged = Object.assign(value);
      obj.activeLaunchOptionIds = activeLaunchOptionIds;
      const result = Storage2.set(tmp4, obj);
    } else {
      activeLaunchOptionIds = value.activeLaunchOptionIds;
    }
    if (null == value.activeLibraryApplicationBranchIds) {
      const Storage4 = tmp2(595).Storage;
      const Storage5 = tmp2(595).Storage;
      let value1 = Storage5.get(tmp4);
      if (value1 == null) {
        value1 = {};
      }
      obj = {};
      const merged1 = Object.assign(value1);
      obj.activeLibraryApplicationBranchIds = closure_12;
      const result1 = Storage4.set(tmp4, obj);
    } else {
      closure_12 = value.activeLibraryApplicationBranchIds;
    }
  }
};
Object.defineProperty(prototype, "libraryApplications", {
  get: function libraryApplications() {
    const obj = {};
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      if (isHiddenResult) {
        delete tmp[tmp2];
      }
    });
    return obj;
  },
  set: undefined
});
prototype["getAllLibraryApplications"] = function getAllLibraryApplications() {
  const merged = Object.assign(closure_10);
  const merged1 = Object.assign(closure_9);
  return {};
};
prototype["hasLibraryApplication"] = function hasLibraryApplication() {
  const merged = Object.assign(closure_10);
  const merged1 = Object.assign(closure_9);
  return Object.keys({}).length > 0;
};
prototype["hasApplication"] = function hasApplication(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const comboId = getComboId.getComboId(arg0, arg1);
  let obj2 = dependencyMap[comboId];
  if (obj2 == null) {
    obj2 = dependencyMap2[comboId];
  }
  let tmp5 = null != obj2;
  if (tmp5) {
    let isHiddenResult = !flag;
    if (!flag) {
      isHiddenResult = obj2.isHidden();
    }
    let result = !isHiddenResult;
    if (!isHiddenResult) {
      result = getComboId.isUserEntitledToLibraryApplication(obj2);
      const tmpResult = getComboId;
    }
    tmp5 = result;
  }
  return tmp5;
};
prototype["getLibraryApplication"] = function getLibraryApplication(applicationId, arg1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const comboId = getComboId.getComboId(applicationId, arg1);
  let tmp4 = dependencyMap[comboId];
  if (tmp4 == null) {
    tmp4 = dependencyMap2[comboId];
  }
  let tmp6 = tmp4;
  if (flag) {
    tmp6 = tmp4;
    if (null != tmp4) {
      let tmp7 = null;
      if (tmpResult.isUserEntitledToLibraryApplication(tmp4)) {
        tmp7 = tmp4;
      }
      tmp6 = tmp7;
      tmpResult = getComboId;
    }
  }
  return tmp6;
};
prototype["getActiveLibraryApplication"] = function getActiveLibraryApplication(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null != dependencyMap3[id]) {
    let obj = getComboId;
    const comboId = obj.getComboId(id, tmp);
    let obj2 = dependencyMap[comboId];
    if (obj2 == null) {
      obj2 = dependencyMap2[comboId];
    }
    if (null != obj2) {
      if (tmp2Result.isUserEntitledToLibraryApplication(obj2)) {
        return obj2;
      }
      tmp2Result = tmp2(4520);
    }
    tmp2 = require;
  }
  obj = {};
  const merged = Object.assign(dependencyMap2);
  const merged1 = Object.assign(dependencyMap);
  for (const key10030 in obj) {
    let tmp11 = key10030;
    if (obj[key10030].id !== arg0) {
      continue;
    } else {
      let obj5 = obj[key10030];
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let obj6 = getComboId;
      if (!obj6.isUserEntitledToLibraryApplication(obj5)) {
        continue;
      } else {
        return obj5;
      }
      continue;
    }
    continue;
  }
};
prototype["isUpdatingFlags"] = function isUpdatingFlags(arg0, arg1) {
  return set.has(getComboId.getComboId(arg0, arg1));
};
prototype["getActiveLaunchOptionId"] = function getActiveLaunchOptionId(arg0, arg1) {
  const obj = getComboId;
  return table[obj.getComboId(obj, arg0, arg1)];
};
Object.defineProperty(prototype, "fetched", {
  get: function fetched(arg0) {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "entitledBranchIds", {
  get: function entitledBranchIds() {
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    const obj = {};
    const tmp = apply;
    const values = apply({}).values();
    const found = values.filter((libraryApplication) => callback(table[4]).isUserEntitledToLibraryApplication(libraryApplication));
    const tmpResult = apply({});
    return found.map((branchId) => branchId.branchId).value();
  },
  set: undefined
});
Object.defineProperty(prototype, "hasRemovedLibraryApplicationThisSession", {
  get: function hasRemovedLibraryApplicationThisSession() {
    return c14;
  },
  set: undefined
});
prototype["whenInitialized"] = function whenInitialized(arg0) {
  closure_0 = arg0;
  const result = this.addConditionalChangeListener(() => {
    if (closure_1_8) {
      const _setImmediate = setImmediate;
      setImmediate(closure_0);
      return false;
    }
  });
};
LibraryApplicationStore.displayName = "LibraryApplicationStore";
const libraryApplicationStore = new LibraryApplicationStore(dispatcherDefault, {
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
    ({ applicationId, branchId } = flags);
    const comboId = getComboId.getComboId(applicationId, branchId);
    const obj = getComboId;
    const comboId1 = getComboId.getComboId(applicationId, branchId);
    let obj3 = dependencyMap[comboId1];
    if (obj3 == null) {
      obj3 = dependencyMap2[comboId1];
    }
    let hasFlagResult = null != obj3 && !obj3.isHidden();
    if (hasFlagResult) {
      hasFlagResult = hasFlagAll.hasFlag(flags.flags, LibraryApplicationFlags.HIDDEN);
      const obj4 = hasFlagAll;
    }
    if (hasFlagResult) {
      c14 = true;
    }
    set.add(comboId);
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: handleLibraryApplicationUpdate,
  LIBRARY_APPLICATION_UPDATE: handleLibraryApplicationUpdate,
  LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function handleActiveLaunchOptionIdUpdate(arg0) {
    ({ applicationId, branchId, launchOptionId } = arg0);
    let obj = getComboId;
    closure_13[obj.getComboId(applicationId, branchId)] = launchOptionId;
    const Storage = Storage6.Storage;
    const Storage2 = Storage6.Storage;
    obj = Storage2.get(LibraryApplicationStore);
    if (obj == null) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    obj.activeLaunchOptionIds = closure_13;
    const result = Storage.set(LibraryApplicationStore, obj);
  },
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function handleActiveBranchUpdate(arg0) {
    ({ applicationId, branchId } = arg0);
    if (dependencyMap3[applicationId] === branchId) {
      return false;
    } else {
      dependencyMap3[applicationId] = branchId;
      const Storage = Storage6.Storage;
      const Storage2 = Storage6.Storage;
      let obj = Storage2.get(LibraryApplicationStore);
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.activeLibraryApplicationBranchIds = dependencyMap3;
      const result = Storage.set(LibraryApplicationStore, obj);
    }
  },
  LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function handleTestModeEnabled(arg0) {
    for (const item10006 of tmp) {
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let obj = getComboId;
      let tmp4 = closure_10;
      closure_10[obj.getComboId(item10006.id, item10006.branchId)] = item10006;
      continue;
    }
  },
  DEVELOPER_TEST_MODE_RESET: function handleTestModeDisabled() {
    closure_10 = {};
  }
});
let result = set.fileFinishedImporting("stores/LibraryApplicationStore.tsx");

export default libraryApplicationStore;