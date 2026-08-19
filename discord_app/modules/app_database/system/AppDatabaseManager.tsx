// === Module 5391: set ===

// Module 5391 (set)
import timestampDefault from "timestamp" /* 3 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import databaseNameDefault from "databaseName" /* 1971 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

const require = fn;
let closure_5 = new timestampDefault("AppDatabaseManager");
const set = new Set(["MESSAGE_CREATE"]);
let AppDatabaseManager;
class AppDatabaseManager {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    tmp2 = closure_3(AppDatabaseManager.computeEntries(global, importDefault), 2);
    obj.name = global;
    [tmp.actions, tmp.entries] = tmp2;
    obj.lastDatabase = null;
    registerResult = AppDatabaseManager.register(`${global}_CLEAR_CACHES`, ["CLEAR_CACHES"], [], () => {
      for (const item10006 of tmp) {
        let resetResult = item10006.reset();
        continue;
      }
    });
    actions = obj.actions;
    items = [...actions.keys()];
    handleAction = obj.handleAction;
    registerResult1 = AppDatabaseManager.register(global, items, fn, handleAction.bind(obj));
    verboseResult = closure_5.verbose("" + global + " created with " + importDefault.length + " modules, " + obj.actions.size + " distinct actions.");
    return obj;
  }
}
const prototype = AppDatabaseManager.prototype;
prototype["handleAction"] = function handleAction(type) {
  this.validateInDev(type.type);
  id = id.getId();
  const databaseResult = databaseNameDefault.database(id);
  this.resetModules(type, databaseResult);
  this.executeModules(type, databaseResult);
  return false;
};
prototype["resetModules"] = function resetModules(type, databaseResult) {
  const self = this;
  if (databaseResult !== this.lastDatabase) {
    const _HermesInternal = HermesInternal;
    closure_5.verbose("database has changed (was: " + self.lastDatabase + ", now: " + databaseResult + ", action: " + type.type + "). resetting modules.");
    const entries = self.entries;
    for (const item10004 of entries) {
      let resetResult = item10004.reset();
      continue;
    }
    self.lastDatabase = databaseResult;
  }
};
prototype["executeModules"] = function executeModules(type, databaseResult) {
  const _require = type;
  closure_1 = databaseResult;
  type = type.type;
  const actions = this.actions;
  const value = actions.get(type);
  dependencyMap = value;
  if (databaseResult != null) {
    const stateResult = databaseResult.state();
  }
  if (null != value) {
    if (0 !== value.length) {
      if (null != databaseResult) {
        if (stateResult === _require(1956).DatabaseState.Open) {
          let combined = null;
          if (!set.has(type.type)) {
            const _HermesInternal2 = HermesInternal;
            combined = "Dispatch " + type.type;
          }
          databaseResult.transaction((arg0) => {
            closure_0 = arg0;
            return value.forEach((item, index) => item.execute(closure_0, closure_0));
          }, combined);
          if ("WRITE_CACHES" === type.type) {
            const promisesToWaitOn = type.promisesToWaitOn;
            promisesToWaitOn.push(tmp14);
          }
        }
      }
      const _HermesInternal = HermesInternal;
      closure_5.verbose("no usable database; skipping action (type: " + type + ", database: " + databaseResult + ", state: " + stateResult + ")");
    }
  }
};
AppDatabaseManager["handleException"] = function handleException(arg0, type, error) {
  closure_5.info("disabling database \u00B7 error encountered during dispatch", error, error.stack);
  const obj = { error, action: "AppDatabaseManager(" + type.type + ")" };
  obj[1] = obj;
  obj.dispatch(obj);
};
AppDatabaseManager["computeEntries"] = function computeEntries(MobileAppDatabaseManager, arr) {
  closure_0 = MobileAppDatabaseManager;
  const map = new Map();
  const mapped = arr.map((item, index) => {
    const entry = new MobileAppDatabaseManager(dependencyMap[6]).Entry(MobileAppDatabaseManager, item);
    return entry;
  });
  const result = map.set("LOGOUT", []);
  const result1 = map.set("LOGIN_RESET", []);
  for (const item10025 of mapped) {
    let actions = item10025.actions;
    for (const item10032 of actions) {
      if (!map.has(item10032)) {
        let result2 = map.set(item10032, []);
      }
      let value = map.get(item10032);
      arr = value.push(tmp4);
      continue;
    }
    continue;
  }
  const items = [map, mapped];
  return items;
};
AppDatabaseManager["register"] = function register(arg0, arr) {
  const _require = arg3;
  const obj = dispatcherDefault;
  const registerResult = obj.register(arg0, Object.fromEntries(arr.map((item, index) => {
    const items = [item, closure_0];
    return items;
  })), () => {

  }, _require(709).DispatchBand.Database);
  const fromEntriesResult = Object.fromEntries(arr.map((item, index) => {
    const items = [item, closure_0];
    return items;
  }));
  dispatcherDefault.addDependencies(registerResult, arg2);
  return registerResult;
};
prototype["validateInDev"] = function validateInDev() {

};
const tmp2 = new timestampDefault("AppDatabaseManager");
let result = require("obj132").fileFinishedImporting("modules/app_database/system/AppDatabaseManager.tsx");

export { AppDatabaseManager };