// discord_app/modules/app_database/modules/UserSettingsProto.tsx
import databaseName from "databaseName";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import fetchFingerprint from "fetchFingerprint";
import importDefaultResult from "apply";

let obj = importDefault;
let c5 = new require("timestamp")("UserSettingsProto");
class UserSettingsProto {
  constructor() {
    obj = Object.create(new.target.prototype);
    UserSettingsProto = obj;
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
          const state = handleConnectionClosedOrResumed.computeState();
          let obj = callback(1936);
          const result = obj.userSettingsTransaction(database);
          for (const key10014 in state) {
            let tmp3 = key10014;
            obj = { id: null, value: null };
            let _Number = Number;
            obj[0] = Number(key10014);
            obj[1] = state[key10014];
            let putResult = result.put(obj);
            continue;
          }
          const versions = handleConnectionClosedOrResumed.settings.versions;
          let num;
          if (versions != null) {
            num = versions.dataVersion;
          }
          if (num == null) {
            num = -1;
          }
          const result1 = callback(1936).nonGuildVersionsTransaction(database);
          result1.put({ id: "user_settings_version", version: num });
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
  let closure_0 = arg0;
  return callback(function*() {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      while (true) {
        let num = 2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            let num6 = 3;
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num5 = 3;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let handleConnectionClosedOrResumed = tmp;
            let databaseName = tmp2;
            let closure_0;
            let lib;
            databaseName = undefined;
            handleConnectionClosedOrResumed = undefined;
            let c4;
            let _performance2 = performance;
            closure_0 = performance.now();
            let tmp31 = outer1_0;
            let tmp32 = outer1_1;
            let obj6 = outer1_0(outer1_1[4]);
            let tmp33 = outer1_0;
            let userSettingsResult = obj6.userSettings(outer1_0);
            c6 = 1;
            let num12 = 1;
            c7 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = userSettingsResult.getMany();
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            let num4 = 3;
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num3 = 3;
            c7 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let tmp22 = databaseName;
            let tmp23 = handleConnectionClosedOrResumed;
            lib = arg1;
            let _performance = performance;
            databaseName = performance.now();
            let tmp24 = c5;
            let tmp25 = databaseName;
            let tmp26 = closure_0;
            let tmp27 = lib;
            let _HermesInternal = HermesInternal;
            let str5 = "loaded in ";
            let str6 = "ms (settings: ";
            let str7 = ")";
            let verboseResult = c5.verbose("loaded in " + databaseName - closure_0 + "ms (settings: " + lib.length + ")");
            handleConnectionClosedOrResumed = {};
            let tmp29 = lib;
            let tmp30 = lib;
            closure_0 = lib[Symbol.iterator]();
            let tmp9 = lib;
            let tmp10 = closure_0;
            while (closure_0 !== undefined) {
              let tmp12 = databaseName;
              c5 = 1;
              c4 = tmp11;
              let tmp13 = handleConnectionClosedOrResumed;
              let tmp14 = c4;
              let tmp15 = c4;
              handleConnectionClosedOrResumed[c4.id] = c4.value;
              c5 = 0;
              continue;
            }
            let tmp16 = databaseName;
            let num2 = 3;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = handleConnectionClosedOrResumed;
            return obj;
          }
        } else {
          let tmp6 = c4;
          let tmp7 = c4;
          c5 = 0;
          let tmp8 = closure_0;
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
      const state = handleConnectionClosedOrResumed.computeState();
      let obj = callback(1936);
      const result = obj.userSettingsTransaction(database);
      for (const key10014 in state) {
        let tmp3 = key10014;
        obj = { id: null, value: null };
        let _Number = Number;
        obj[0] = Number(key10014);
        obj[1] = state[key10014];
        let putResult = result.put(obj);
        continue;
      }
      const versions = handleConnectionClosedOrResumed.settings.versions;
      let num;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = -1;
      }
      const result1 = callback(1936).nonGuildVersionsTransaction(database);
      result1.put({ id: "user_settings_version", version: num });
    }, "handleUserSettingsProtoChange");
  }
};
const tmp2 = new require("timestamp")("UserSettingsProto");
obj.throttledOnChange = require("apply").debounce(obj.handleUserSettingsProtoChange, 0);
let result = require("fetchFingerprint").fileFinishedImporting("modules/app_database/modules/UserSettingsProto.tsx");

export default obj;