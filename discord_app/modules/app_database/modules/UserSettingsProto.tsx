// discord_app/modules/app_database/modules/UserSettingsProto.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import 00012__ from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6, c7, id;

const tmp2 = new LoggerDefault("UserSettingsProto");
let closure_5 = tmp2;
class UserSettingsProto {
  constructor() {
    let obj2 = Object.create(new.target.prototype);
    obj2.actions = {
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
      }
    };
    obj2.handleUserSettingsProtoChange = function handleUserSettingsProtoChange() {
      id = id.getId();
      let obj = obj2(dependencyMap[5]);
      const databaseResult = obj.database(id);
      if (databaseResult != null) {
        databaseResult.transaction((database) => {
          const state = closure_1_3.computeState();
          const obj = closure_1_0(closure_1_1[4]);
          const result = obj.userSettingsTransaction(database);
          for (const key10014 in state) {
            let obj3 = { id: Number(key10014), value: state[key10014] };
            let _Number = Number;
            let put = result.put;
            let putResult = put(obj3);
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
          obj2 = closure_1_0(closure_1_1[4]);
          const result1 = obj2.nonGuildVersionsTransaction(database);
          result1.put({ id: "user_settings_version", version: num });
        }, "handleUserSettingsProtoChange");
      }
    };
    let obj = obj2(12);
    obj2.throttledOnChange = obj.debounce(obj2.handleUserSettingsProtoChange, 0);
    return obj2;
  }
  getAll(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let value;
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
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let closure_1;
          let closure_2;
          let c4;
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
              closure_1 = undefined;
              closure_2 = undefined;
              value = undefined;
              c4 = undefined;
              let _performance2 = performance;
              closure_0 = performance.now();
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
              closure_1 = value;
              let _performance = performance;
              closure_2 = performance.now();
              let _HermesInternal = HermesInternal;
              let str5 = "loaded in ";
              let str6 = "ms (settings: ";
              let str7 = ")";
              let verboseResult = c5.verbose("loaded in " + closure_2 - closure_0 + "ms (settings: " + closure_1.length + ")");
              value = {};
              closure_0 = closure_1[Symbol.iterator]();
              while (closure_0 !== undefined) {
                c4 = tmp11;
                value[c4.id] = c4.value;
                c5 = 0;
                continue;
              }
              c7 = 3;
              let obj = { value, done: true };
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
  }
  resetInMemoryState() {

  }
}
const prototype = UserSettingsProto.prototype;
let obj = Object.create(UserSettingsProto.prototype);
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
  }
};
obj.handleUserSettingsProtoChange = function handleUserSettingsProtoChange() {
  id = id.getId();
  let obj = obj2(dependencyMap[5]);
  const databaseResult = obj.database(id);
  if (databaseResult != null) {
    databaseResult.transaction((database) => {
      const state = closure_1_3.computeState();
      const obj = closure_1_0(closure_1_1[4]);
      const result = obj.userSettingsTransaction(database);
      for (const key10014 in state) {
        let obj3 = { id: Number(key10014), value: state[key10014] };
        let _Number = Number;
        let put = result.put;
        let putResult = put(obj3);
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
      obj2 = closure_1_0(closure_1_1[4]);
      const result1 = obj2.nonGuildVersionsTransaction(database);
      result1.put({ id: "user_settings_version", version: num });
    }, "handleUserSettingsProtoChange");
  }
};
obj.throttledOnChange = module_12.debounce(obj.handleUserSettingsProtoChange, 0);
let result = size.fileFinishedImporting("modules/app_database/modules/UserSettingsProto.tsx");

export default obj;