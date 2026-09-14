// discord_app/modules/app_database/modules/UserSettingsProto.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import apply from "../../../../_runtime/metro/00012__.js";

let obj = importDefault;
let closure_5 = new LoggerDefault("UserSettingsProto");
class UserSettingsProto {
  constructor() {
    obj1 = Object.create(new.target.prototype);
    closure_0 = obj1;
    obj1.actions = {
      CONNECTION_OPEN() {
        return obj2.throttledOnChange();
      },
      USER_SETTINGS_PROTO_UPDATE() {
        return obj2.throttledOnChange();
      },
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE() {
        return obj2.throttledOnChange();
      },
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO() {
        return obj2.throttledOnChange();
      },
    };
    obj1.handleUserSettingsProtoChange = function handleUserSettingsProtoChange() {
      id = id.getId();
      const databaseResult = obj2(dependencyMap[5]).database(id);
      if (databaseResult != null) {
        databaseResult.transaction((database) => {
          const state = closure_1_3.computeState();
          const result = closure_1_0(1986).userSettingsTransaction(database);
          for (const key10014 in state) {
            obj2 = { id: null, value: null };
            let _Number = Number;
            obj2.id = Number(key10014);
            obj2.value = state[key10014];
            let putResult = result.put(obj2);
            continue;
          }
          const versions = closure_1_3.settings.versions;
          let num;
          if (versions != null) {
            num = versions.dataVersion;
          }
          if (num == null) {
            num = -1;
          }
          obj = closure_1_0(1986);
          const result1 = closure_1_0(1986).nonGuildVersionsTransaction(database);
          result1.put({ id: "user_settings_version", version: num });
          const obj3 = closure_1_0(1986);
        }, "handleUserSettingsProtoChange");
      }
    };
    obj = closure_0(closure_1[6]);
    obj1.throttledOnChange = obj.debounce(obj1.handleUserSettingsProtoChange, 0);
    return obj1;
  }
}
const prototype = UserSettingsProto.prototype;
prototype["getAll"] = function getAll(arg0) {
  closure_0 = arg0;
  return (async () => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            closure_2 = tmp2;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            let _performance2 = performance;
            closure_130_0 = performance.now();
            let obj6 = closure_0(closure_1[4]);
            let userSettingsResult = obj6.userSettings(closure_0);
            c6 = 1;
            c7 = 1;
            let obj4 = { value: userSettingsResult.getMany(), done: false };
            return obj4;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_130_1 = value;
            let _performance = performance;
            closure_130_2 = performance.now();
            let _HermesInternal = HermesInternal;
            let str5 = "loaded in ";
            let str6 = "ms (settings: ";
            let str7 = ")";
            let verboseResult = c5.verbose(
              "loaded in " + closure_130_2 - closure_130_0 + "ms (settings: " + closure_130_1.length + ")",
            );
            closure_130_3 = {};
            closure_1 = closure_130_1;
            closure_0 = closure_130_1[Symbol.iterator]();
            while (closure_0 !== undefined) {
              closure_130_4 = tmp11;
              closure_130_3[closure_130_4.id] = closure_130_4.value;
              c5 = 0;
              continue;
            }
            c7 = 3;
            obj = { value: closure_130_3, done: true };
            return obj;
          }
        } else {
          c5 = 0;
          closure_0.return();
          throw AuthenticationStore;
        }
      }
    }
  })();
};
prototype["resetInMemoryState"] = function resetInMemoryState() {};
obj = Object.create(UserSettingsProto.prototype);
obj.actions = {
  CONNECTION_OPEN() {
    return obj2.throttledOnChange();
  },
  USER_SETTINGS_PROTO_UPDATE() {
    return obj2.throttledOnChange();
  },
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE() {
    return obj2.throttledOnChange();
  },
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO() {
    return obj2.throttledOnChange();
  },
};
obj.handleUserSettingsProtoChange = function handleUserSettingsProtoChange() {
  id = id.getId();
  const databaseResult = obj2(dependencyMap[5]).database(id);
  if (databaseResult != null) {
    databaseResult.transaction((database) => {
      const state = closure_1_3.computeState();
      const result = closure_1_0(1986).userSettingsTransaction(database);
      for (const key10014 in state) {
        obj2 = { id: null, value: null };
        let _Number = Number;
        obj2.id = Number(key10014);
        obj2.value = state[key10014];
        let putResult = result.put(obj2);
        continue;
      }
      const versions = closure_1_3.settings.versions;
      let num;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = -1;
      }
      obj = closure_1_0(1986);
      const result1 = closure_1_0(1986).nonGuildVersionsTransaction(database);
      result1.put({ id: "user_settings_version", version: num });
      const obj3 = closure_1_0(1986);
    }, "handleUserSettingsProtoChange");
  }
};
obj.throttledOnChange = apply.debounce(obj.handleUserSettingsProtoChange, 0);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/UserSettingsProto.tsx");

export default obj;
