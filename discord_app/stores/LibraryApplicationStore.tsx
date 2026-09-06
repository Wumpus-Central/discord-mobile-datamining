// discord_app/stores/LibraryApplicationStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage6 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import FlagUtilsAll from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import LibraryApplicationUtils from "../utils/LibraryApplicationUtils.tsx";
import LibraryApplicationRecord from "../records/LibraryApplicationRecord.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";

require = fn;
function setLibraryApplications(libraryApplications) {
  while (tmp !== undefined) {
    let fromServer = LibraryApplicationRecord.createFromServer(tmp2);
    let obj = LibraryApplicationUtils;
    closure_9[obj.getComboId(fromServer.id, fromServer.branchId)] = fromServer;
    continue;
  }
  tmp = libraryApplications[Symbol.iterator]();
}
function handleLibraryApplicationUpdate(libraryApplication) {
  const fromServer = LibraryApplicationRecord.createFromServer(libraryApplication.libraryApplication);
  const comboId = LibraryApplicationUtils.getComboId(fromServer.id, fromServer.branchId);
  closure_9[comboId] = fromServer;
  set.delete(comboId);
}
const LibraryApplicationFlags = fn(1074).LibraryApplicationFlags;
const LibraryApplicationStore = "LibraryApplicationStore";
let c8 = false;
const dependencyMap = {};
const dependencyMap2 = {};
const set = new Set();
let activeLibraryApplicationBranchIds = {};
let activeLaunchOptionIds = {};
let c14 = false;
const Store = initializeDefault.Store;
class LibraryApplicationStore extends Store {}
const prototype = LibraryApplicationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
  const Storage = Storage6.Storage;
  value = Storage.get(LibraryApplicationStore);
  if (null != value) {
    if (null == value.activeLaunchOptionIds) {
      const Storage2 = Storage6.Storage;
      const Storage3 = Storage6.Storage;
      value = Storage3.get(LibraryApplicationStore);
      if (value == null) {
        value = {};
      }
      let obj = {};
      const merged = Object.assign(value);
      obj.activeLaunchOptionIds = activeLaunchOptionIds;
      const result = Storage2.set(LibraryApplicationStore, obj);
    } else {
      activeLaunchOptionIds = value.activeLaunchOptionIds;
    }
    if (null == value.activeLibraryApplicationBranchIds) {
      const Storage4 = Storage6.Storage;
      const Storage5 = Storage6.Storage;
      let value1 = Storage5.get(LibraryApplicationStore);
      if (value1 == null) {
        value1 = {};
      }
      obj = {};
      const merged1 = Object.assign(value1);
      obj.activeLibraryApplicationBranchIds = activeLibraryApplicationBranchIds;
      const result1 = Storage4.set(LibraryApplicationStore, obj);
    } else {
      activeLibraryApplicationBranchIds = value.activeLibraryApplicationBranchIds;
    }
  }
};
Object.defineProperty(prototype, "libraryApplications", {
  get: function libraryApplications() {
    const obj = {};
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      if (isHiddenResult) {
        delete tmp[tmp2];
      }
    });
    return obj;
  },
  set: undefined,
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
prototype["hasApplication"] = function hasApplication(applicationId, branchId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const comboId = LibraryApplicationUtils.getComboId(applicationId, branchId);
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
      result = LibraryApplicationUtils.isUserEntitledToLibraryApplication(obj2);
      const tmpResult = LibraryApplicationUtils;
    }
    tmp5 = result;
  }
  return tmp5;
};
prototype["getLibraryApplication"] = function getLibraryApplication(applicationId, item, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const comboId = LibraryApplicationUtils.getComboId(applicationId, item);
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
      tmpResult = LibraryApplicationUtils;
    }
  }
  return tmp6;
};
prototype["getActiveLibraryApplication"] = function getActiveLibraryApplication(id) {
  if (null != activeLibraryApplicationBranchIds[id]) {
    let obj = LibraryApplicationUtils;
    const comboId = obj.getComboId(id, tmp);
    let obj2 = dependencyMap[comboId];
    if (obj2 == null) {
      obj2 = dependencyMap2[comboId];
    }
    if (null != obj2) {
      if (tmp2Result.isUserEntitledToLibraryApplication(obj2)) {
        return obj2;
      }
      tmp2Result = LibraryApplicationUtils;
    }
  }
  obj = {};
  const merged = Object.assign(dependencyMap2);
  const merged1 = Object.assign(dependencyMap);
  for (const key10030 in obj) {
    if (obj[key10030].id !== arg0) {
      continue;
    } else {
      let obj5 = obj[key10030];
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
};
prototype["isUpdatingFlags"] = function isUpdatingFlags(applicationId, branchId) {
  return set.has(LibraryApplicationUtils.getComboId(applicationId, branchId));
};
prototype["getActiveLaunchOptionId"] = function getActiveLaunchOptionId(applicationId, branchId) {
  const obj = LibraryApplicationUtils;
  return activeLaunchOptionIds[obj.getComboId(obj, applicationId, branchId)];
};
Object.defineProperty(prototype, "fetched", {
  get: function fetched() {
    return c8;
  },
  set: undefined,
});
Object.defineProperty(prototype, "entitledBranchIds", {
  get: function entitledBranchIds() {
    const merged = Object.assign(closure_10);
    const merged1 = Object.assign(closure_9);
    const obj = {};
    const tmp = require("../../_runtime/metro/00012__.js");
    const values = require("../../_runtime/metro/00012__.js")({}).values();
    const found = values.filter((item) => LibraryApplicationUtils.isUserEntitledToLibraryApplication(item));
    const tmpResult = require("../../_runtime/metro/00012__.js")({});
    return found.map((branchId) => branchId.branchId).value();
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasRemovedLibraryApplicationThisSession", {
  get: function hasRemovedLibraryApplicationThisSession() {
    return c14;
  },
  set: undefined,
});
prototype["whenInitialized"] = function whenInitialized(arg0) {
  closure_0 = arg0;
  const result = this.addConditionalChangeListener(() => {
    if (c8) {
      const _setImmediate = setImmediate;
      setImmediate(closure_0);
      return false;
    }
  });
};
LibraryApplicationStore.displayName = "LibraryApplicationStore";
const libraryApplicationStore = new LibraryApplicationStore(DispatcherDefault, {
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
    const comboId = LibraryApplicationUtils.getComboId(applicationId, branchId);
    const comboId1 = LibraryApplicationUtils.getComboId(applicationId, branchId);
    let obj3 = dependencyMap[comboId1];
    if (obj3 == null) {
      obj3 = dependencyMap2[comboId1];
    }
    let hasFlagResult = null != obj3 && !obj3.isHidden();
    if (hasFlagResult) {
      hasFlagResult = FlagUtilsAll.hasFlag(flags.flags, LibraryApplicationFlags.HIDDEN);
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
    let obj = LibraryApplicationUtils;
    activeLaunchOptionIds[obj.getComboId(applicationId, branchId)] = launchOptionId;
    const Storage = Storage6.Storage;
    const Storage2 = Storage6.Storage;
    obj = Storage2.get(LibraryApplicationStore);
    if (obj == null) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    obj.activeLaunchOptionIds = activeLaunchOptionIds;
    const result = Storage.set(LibraryApplicationStore, obj);
  },
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function handleActiveBranchUpdate(arg0) {
    ({ applicationId, branchId } = arg0);
    if (activeLibraryApplicationBranchIds[applicationId] === branchId) {
      return false;
    } else {
      activeLibraryApplicationBranchIds[applicationId] = branchId;
      const Storage = Storage6.Storage;
      const Storage2 = Storage6.Storage;
      let obj = Storage2.get(LibraryApplicationStore);
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.activeLibraryApplicationBranchIds = activeLibraryApplicationBranchIds;
      const result = Storage.set(LibraryApplicationStore, obj);
    }
  },
  LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function handleTestModeEnabled(arg0) {
    for (const item10006 of tmp) {
      let obj = LibraryApplicationUtils;
      closure_10[obj.getComboId(item10006.id, item10006.branchId)] = item10006;
      continue;
    }
  },
  DEVELOPER_TEST_MODE_RESET: function handleTestModeDisabled() {
    closure_10 = {};
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/LibraryApplicationStore.tsx");

export default libraryApplicationStore;
