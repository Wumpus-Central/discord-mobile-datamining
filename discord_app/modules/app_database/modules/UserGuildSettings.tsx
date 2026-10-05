// discord_app/modules/app_database/modules/UserGuildSettings.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2;

let c3;
let closure_4;
({ convertChannelOverridesToMap: c3, getGuildDefaults: closure_4 } = UserGuildSettingsStore);
const tmp3 = new LoggerDefault("ReadStates");
let closure_5 = tmp3;
class UserGuildSettings {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.actions = {
      CONNECTION_OPEN(arg0, arg1) {
        return obj.handleConnectionOpen(arg0, arg1);
      },
      USER_GUILD_SETTINGS_FULL_UPDATE(arg0, arg1) {
        return obj.handleUserGuildSettingsUpdate(arg0, arg1);
      },
    };
    return obj;
  }
  getAll(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let userGuildSettingsResult;
      let value;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_2;
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value = undefined;
              closure_2 = undefined;
              const _performance2 = performance;
              tmp = performance.now();
              const obj6 = tmp(value[3]);
              c2 = 1;
              c3 = 1;
              const obj4 = { value: userGuildSettingsResult.getMany(), done: false };
              userGuildSettingsResult = obj6.userGuildSettings(tmp);
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const _performance = performance;
            closure_2 = performance.now();
            const _HermesInternal = HermesInternal;
            logger.log("asynchronously loaded in " + closure_2 - tmp + "ms (userGuildSettings: " + value.length + ")");
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp5) {
          c3 = 3;
          throw tmp5;
        }
      }
    })();
  }
  resetInMemoryState() {}
  handleConnectionOpen(userGuildSettings, database) {
    if (!userGuildSettings.userGuildSettings.partial) {
      const obj = DatabaseDaosDefault;
      const result = obj.userGuildSettingsTransaction(database);
      result.delete();
    }
    this.write(userGuildSettings.userGuildSettings.entries, userGuildSettings.userGuildSettings.version, database);
  }
  handleUserGuildSettingsUpdate(userGuildSettings, arg1) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const obj = _modDef12;
    const maxResult = obj.max(
      userGuildSettings.map((version) => {
        let num = version.version;
        if (num == null) {
          num = -1;
        }
        return num;
      }),
    );
    if (null != maxResult) {
      const self = this;
      this.write(userGuildSettings.userGuildSettings, maxResult, arg1);
    }
  }
  write(arg0, version, database) {
    const obj = DatabaseDaosDefault;
    const result = obj.userGuildSettingsTransaction(database);
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj2 = { channel_overrides: _false(nextResult.channel_overrides) };
      let merged = Object.assign(React3(nextResult.guild_id));
      let merged1 = Object.assign(nextResult);
      let str = nextResult.guild_id;
      let tmp10 = obj2;
      let put = result.put;
      if (str == null) {
        str = "dm-sentinel";
      }
      let putResult = put(str, tmp10);
      continue;
    }
    const obj3 = DatabaseDaosDefault;
    const result1 = obj3.nonGuildVersionsTransaction(database);
    const obj4 = { id: "user_guild_settings_version", version };
    result1.put(obj4);
  }
}
const prototype = UserGuildSettings.prototype;
let obj = Object.create(UserGuildSettings.prototype);
obj.actions = {
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  USER_GUILD_SETTINGS_FULL_UPDATE(arg0, arg1) {
    return obj.handleUserGuildSettingsUpdate(arg0, arg1);
  },
};
let result = size.fileFinishedImporting("modules/app_database/modules/UserGuildSettings.tsx");

export default obj;
