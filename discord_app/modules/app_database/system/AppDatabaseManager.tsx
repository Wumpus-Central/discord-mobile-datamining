// === Module 7645: set ===

// Module 7645 (set)
import timestampDefault from "timestamp" /* 3 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import databaseNameDefault from "databaseName" /* 2003 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "fetchFingerprint" /* 502 */;
import set from "set" /* 2 */;

const require = arg1;
let closure_5 = new timestampDefault("AppDatabaseManager");
let set = new Set(["MESSAGE_CREATE"]);
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
    registerResult1 = AppDatabaseManager.register(global, items, arg1, handleAction.bind(obj));
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
        if (stateResult === _require(1987).DatabaseState.Open) {
          let combined = null;
          if (!set.has(type.type)) {
            const _HermesInternal2 = HermesInternal;
            combined = "Dispatch " + type.type;
          }
          databaseResult.transaction((arg0) => {
            closure_0 = arg0;
            return value.forEach((execute) => execute.execute(closure_0, closure_0));
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
  let obj = dispatcherDefault;
  obj = { type: "RESET_SOCKET", args: null };
  obj = { error, action: "AppDatabaseManager(" + type.type + ")" };
  obj[1] = obj;
  obj.dispatch(obj);
};
AppDatabaseManager["computeEntries"] = function computeEntries(MobileAppDatabaseManager, arr) {
  closure_0 = MobileAppDatabaseManager;
  const map = new Map();
  const mapped = arr.map((arg0) => {
    const entry = new MobileAppDatabaseManager(closure_1_2[6]).Entry(MobileAppDatabaseManager, arg0);
    return entry;
  });
  const result = map.set("LOGOUT", []);
  const result1 = map.set("LOGIN_RESET", []);
  for (const item10025 of mapped) {
    let actions = item10025.actions;
    let tmp5 = actions;
    let tmp6 = actions;
    for (const item10032 of actions) {
      let tmp7 = item10032;
      if (!map.has(item10032)) {
        let tmp8 = item10032;
        let result2 = map.set(tmp7, []);
      }
      let tmp10 = item10032;
      let value = map.get(tmp7);
      let tmp11 = item10025;
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
  const registerResult = obj.register(arg0, Object.fromEntries(arr.map((arg0) => {
    const items = [arg0, closure_0];
    return items;
  })), () => {

  }, _require(573).DispatchBand.Database);
  const fromEntriesResult = Object.fromEntries(arr.map((arg0) => {
    const items = [arg0, closure_0];
    return items;
  }));
  dispatcherDefault.addDependencies(registerResult, arg2);
  return registerResult;
};
prototype["validateInDev"] = function validateInDev() {

};
let result = set.fileFinishedImporting("modules/app_database/system/AppDatabaseManager.tsx");

export { AppDatabaseManager };