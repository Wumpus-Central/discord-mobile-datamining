// === Module 5083: getAll ===

// Module 5083 (getAll)
import timestampDefault from "timestamp" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import importDefaultResult from "apply" /* 12 */;

let obj = importDefault;
let closure_5 = new timestampDefault("UserSettingsProto");
class UserSettingsProto {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.actions = {
      CONNECTION_OPEN() {
            return obj.throttledOnChange();
          },
      USER_SETTINGS_PROTO_UPDATE() {
            return obj.throttledOnChange();
          },
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE() {
            return obj.throttledOnChange();
          },
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO() {
            return obj.throttledOnChange();
          }
    };
    obj.handleUserSettingsProtoChange = function handleUserSettingsProtoChange() {
      id = id.getId();
      obj = obj(table[5]);
      const databaseResult = obj.database(id);
      if (databaseResult != null) {
        databaseResult.transaction((database) => {
          const state = closure_3.computeState();
          obj = callback(1955);
          const result = obj.userSettingsTransaction(database);
          for (const key10014 in state) {
            obj = { id: null, value: null };
            let _Number = Number;
            obj[0] = Number(key10014);
            obj[1] = state[key10014];
            let putResult = result.put(obj);
            continue;
          }
          const versions = closure_3.settings.versions;
          let num;
          if (versions != null) {
            num = versions.dataVersion;
          }
          if (num == null) {
            num = -1;
          }
          const result1 = callback(1955).nonGuildVersionsTransaction(database);
          result1.put({ id: "user_settings_version", version: num });
          const obj3 = callback(1955);
        }, "handleUserSettingsProtoChange");
      }
    };
    obj = require("apply");
    obj.throttledOnChange = obj.debounce(obj.handleUserSettingsProtoChange, 0);
    return obj;
  }
}
const prototype = UserSettingsProto.prototype;
prototype["getAll"] = function getAll(arg0) {
  closure_0 = arg0;
  return callback(function*() {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      while (true) {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let lib;
            closure_2 = undefined;
            closure_3 = undefined;
            c4 = undefined;
            let _performance2 = performance;
            closure_0 = performance.now();
            let obj6 = closure_1_0(closure_1_1[4]);
            let userSettingsResult = obj6.userSettings(closure_1_0);
            c6 = 1;
            c7 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = userSettingsResult.getMany();
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            lib = arg1;
            let _performance = performance;
            closure_2 = performance.now();
            let _HermesInternal = HermesInternal;
            let verboseResult = c5.verbose("loaded in " + closure_2 - closure_0 + "ms (settings: " + lib.length + ")");
            closure_3 = {};
            closure_0 = lib[Symbol.iterator]();
            while (closure_0 !== undefined) {
              c4 = tmp11;
              closure_3[c4.id] = c4.value;
              c5 = 0;
              continue;
            }
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_3;
            return obj;
          }
        } else {
          c5 = 0;
          closure_0.return();
          throw c4;
        }
      }
    }
  })();
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
obj = Object.create(UserSettingsProto.prototype);
obj.actions = {
  CONNECTION_OPEN() {
    return obj.throttledOnChange();
  },
  USER_SETTINGS_PROTO_UPDATE() {
    return obj.throttledOnChange();
  },
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE() {
    return obj.throttledOnChange();
  },
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO() {
    return obj.throttledOnChange();
  }
};
obj.handleUserSettingsProtoChange = function handleUserSettingsProtoChange() {
  id = id.getId();
  obj = obj(table[5]);
  const databaseResult = obj.database(id);
  if (databaseResult != null) {
    databaseResult.transaction((database) => {
      const state = closure_3.computeState();
      obj = callback(1955);
      const result = obj.userSettingsTransaction(database);
      for (const key10014 in state) {
        obj = { id: null, value: null };
        let _Number = Number;
        obj[0] = Number(key10014);
        obj[1] = state[key10014];
        let putResult = result.put(obj);
        continue;
      }
      const versions = closure_3.settings.versions;
      let num;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = -1;
      }
      const result1 = callback(1955).nonGuildVersionsTransaction(database);
      result1.put({ id: "user_settings_version", version: num });
      const obj3 = callback(1955);
    }, "handleUserSettingsProtoChange");
  }
};
const tmp2 = new timestampDefault("UserSettingsProto");
obj.throttledOnChange = importDefaultResult.debounce(obj.handleUserSettingsProtoChange, 0);
let result = require("obj132").fileFinishedImporting("modules/app_database/modules/UserSettingsProto.tsx");

export default obj;