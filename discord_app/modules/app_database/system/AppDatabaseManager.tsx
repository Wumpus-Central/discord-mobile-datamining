// discord_app/modules/app_database/system/AppDatabaseManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import Dispatcher from "../../../Dispatcher.tsx";
import DatabaseManagerDefault from "DatabaseManager.tsx";
import actions2 from "AppDatabaseManager.Entry.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const DispatcherDefault = Dispatcher;
let _require, arr, dependencyMap, map;

const tmp2 = new LoggerDefault("AppDatabaseManager");
const hasOwnProperty = tmp2;
const set = new Set(["MESSAGE_CREATE"]);
class AppDatabaseManager {
  constructor(MobileAppDatabaseManager, arg1, items) {
    const obj = Object.create(new.target.prototype);
    obj.name = MobileAppDatabaseManager;
    [tmp.actions, tmp.entries] = AppDatabaseManager.computeEntries(MobileAppDatabaseManager, items);
    obj.lastDatabase = null;
    _slicedToArray(AppDatabaseManager.computeEntries(MobileAppDatabaseManager, items), 2);
    AppDatabaseManager.register(`${MobileAppDatabaseManager}_CLEAR_CACHES`, ["CLEAR_CACHES"], [], () => {
      const entries = obj.entries;
      for (const item10006 of entries) {
        let resetResult = item10006.reset();
        continue;
      }
    });
    const actions = obj.actions;
    items = [...actions.keys()];
    const handleAction = obj.handleAction;
    AppDatabaseManager.register(MobileAppDatabaseManager, items, arg1, handleAction.bind(obj));
    closure_5.verbose(
      "" +
        MobileAppDatabaseManager +
        " created with " +
        items.length +
        " modules, " +
        obj.actions.size +
        " distinct actions.",
    );
    return obj;
  }
  handleAction(type) {
    this.validateInDev(type.type);
    const id = AuthenticationStore.getId();
    const obj = DatabaseManagerDefault;
    const databaseResult = obj.database(id);
    this.resetModules(type, databaseResult);
    this.executeModules(type, databaseResult);
    return false;
  }
  resetModules(type, databaseResult) {
    const self = this;
    if (databaseResult !== this.lastDatabase) {
      const _HermesInternal = HermesInternal;
      closure_5.verbose(
        "database has changed (was: " +
          self.lastDatabase +
          ", now: " +
          databaseResult +
          ", action: " +
          type.type +
          "). resetting modules.",
      );
      const entries = self.entries;
      for (const item10004 of entries) {
        let resetResult = item10004.reset();
        continue;
      }
      self.lastDatabase = databaseResult;
    }
  }
  executeModules(type, databaseResult) {
    let stateResult;
    _require = type;
    let closure_1 = databaseResult;
    type = type.type;
    const actions = this.actions;
    const value = actions.get(type);
    dependencyMap = value;
    if (databaseResult != null) {
      stateResult = databaseResult.state();
    }
    if (null != value) {
      if (0 !== value.length) {
        if (null != databaseResult) {
          if (
            stateResult === require("../../../../discord_common/js/packages/kv-storage/js/index.tsx").DatabaseState.Open
          ) {
            const transaction = databaseResult.transaction;
            let combined = null;
            if (!set.has(type.type)) {
              const _HermesInternal2 = HermesInternal;
              combined = "Dispatch " + type.type;
            }
            transaction((arg0) => {
              let closure_0 = arg0;
              return value.forEach((execute) => execute.execute(type, type));
            }, combined);
            if ("WRITE_CACHES" === type.type) {
              const promisesToWaitOn = type.promisesToWaitOn;
              promisesToWaitOn.push(tmp14);
            }
          }
        }
        const _HermesInternal = HermesInternal;
        closure_5.verbose(
          "no usable database; skipping action (type: " +
            type +
            ", database: " +
            databaseResult +
            ", state: " +
            stateResult +
            ")",
        );
      }
    }
  }
  static handleException(arg0, type, error) {
    closure_5.info("disabling database \u00B7 error encountered during dispatch", error, error.stack);
    const obj2 = { type: "RESET_SOCKET", args: { error, action: "AppDatabaseManager(" + type.type + ")" } };
    const obj = DispatcherDefault;
    ({ error, action: "AppDatabaseManager(" + type.type + ")" });
    obj.dispatch(obj2);
  }
  static computeEntries(MobileAppDatabaseManager, arr) {
    let closure_0 = MobileAppDatabaseManager;
    map = new Map();
    const mapped = arr.map((item) => {
      const entry = new actions2.Entry(MobileAppDatabaseManager, item);
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
  }
  static register(arg0, arr, arg2, arg3) {
    let closure_0 = arg3;
    const register = DispatcherDefault.register;
    DispatcherDefault;
    const fromEntriesResult = Object.fromEntries(
      arr.map((item) => {
        const items = [item, closure_0];
        return items;
      }),
    );
    const registerResult = register(arg0, fromEntriesResult, () => {}, Dispatcher.DispatchBand.Database);
    const obj = DispatcherDefault;
    obj.addDependencies(registerResult, arg2);
    return registerResult;
  }
  validateInDev() {}
}
const prototype = AppDatabaseManager.prototype;
let result = size.fileFinishedImporting("modules/app_database/system/AppDatabaseManager.tsx");

export { AppDatabaseManager };
