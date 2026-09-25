// discord_app/modules/app_database/modules/NonGuildVersions.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

const require = fn;
let closure_5 = new LoggerDefault("NonGuildVersions");
class NonGuildVersions {
  constructor() {
    obj1 = Object.create(new.target.prototype);
    closure_0 = obj1;
    obj1.actions = {
      CONNECTION_OPEN(arg0, arg1) {
        return obj3.handleConnectionOpen(arg0, arg1);
      },
      BACKGROUND_SYNC(arg0, arg1) {
        return obj3.handleConnectionOpen(arg0, arg1);
      },
    };
    tmp2 = closure_2;
    obj = closure_0(closure_2[3]);
    if (obj.isCacheEnabled()) {
      tmp3 = closure_4;
      tmp4 = closure_1;
      obj2 = closure_1(tmp2[4]);
      num = 10;
      addChangeListenerResult = closure_4.addChangeListener(
        obj2.throttle(() => {
          const databaseResult = DatabaseDaosDefault.database();
          if (databaseResult != null) {
            databaseResult.transaction((database) => {
              guildId = guildId.getGuildId();
              if (null != guildId) {
                const _isNaN = isNaN;
                const _Number = Number;
                if (!isNaN(Number(guildId))) {
                  const result = closure_1_1(2073).nonGuildVersionsTransaction(database);
                  const obj2 = { id: "initial_guild_id", versionString: guildId };
                  result.put(obj2);
                  const obj = closure_1_1(2073);
                }
              }
              const result1 = closure_1_1(2073).nonGuildVersionsTransaction(database);
              result1.delete("initial_guild_id");
              const obj4 = closure_1_1(2073);
            });
          }
        }, 10 * closure_1(tmp2[6]).Millis.SECOND),
      );
    }
    return obj1;
  }
}
const prototype = NonGuildVersions.prototype;
prototype["getCommittedVersions"] = function getCommittedVersions() {
  return (async () => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            const nonGuildVersionsResult = DatabaseDaosDefault.nonGuildVersions();
            if (null == nonGuildVersionsResult) {
              c4 = 0;
              c6 = 3;
              const obj5 = { value: {}, done: true };
              return obj5;
            } else {
              c5 = 2;
              c6 = 1;
              const obj6 = { value: nonGuildVersionsResult.getMany(), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          closure_130_5.warn("couldn't load guild versions", closure_129_1);
          c6 = 3;
          const obj7 = { value: {}, done: true };
          return obj7;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_0 = value.map((id) => {
            const items = [id.id, "version" in id ? id.version : id.versionString];
            return items;
          });
          closure_0 = closure_129_0;
          if (closure_129_0 == null) {
            closure_0 = [];
          }
          c4 = 0;
          c6 = 3;
          const obj = { value: Object.fromEntries(closure_0), done: true };
          return obj;
        }
      } catch (tmp20) {
        closure_3 = tmp20;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp20;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(apiCodeVersion, database) {
  if (null != apiCodeVersion.apiCodeVersion) {
    const result = DatabaseDaosDefault.nonGuildVersionsTransaction(database);
    const obj2 = { id: "api_code_version", version: apiCodeVersion.apiCodeVersion };
    result.put(obj2);
  }
};
prototype["resetInMemoryState"] = function resetInMemoryState() {};
let obj = Object.create(NonGuildVersions.prototype);
let closure_129_0 = obj;
obj.actions = {
  CONNECTION_OPEN(arg0, arg1) {
    return obj3.handleConnectionOpen(arg0, arg1);
  },
  BACKGROUND_SYNC(arg0, arg1) {
    return obj3.handleConnectionOpen(arg0, arg1);
  },
};
const isCacheEnabled = fn(7057);
if (isCacheEnabled.isCacheEnabled()) {
  SelectedGuildStore.addChangeListener(
    _modDef12.throttle(() => {
      const databaseResult = DatabaseDaosDefault.database();
      if (databaseResult != null) {
        databaseResult.transaction((database) => {
          guildId = guildId.getGuildId();
          if (null != guildId) {
            const _isNaN = isNaN;
            const _Number = Number;
            if (!isNaN(Number(guildId))) {
              const result = closure_1_1(2073).nonGuildVersionsTransaction(database);
              const obj2 = { id: "initial_guild_id", versionString: guildId };
              result.put(obj2);
              const obj = closure_1_1(2073);
            }
          }
          const result1 = closure_1_1(2073).nonGuildVersionsTransaction(database);
          result1.delete("initial_guild_id");
          const obj4 = closure_1_1(2073);
        });
      }
    }, 10 * DurationsDefault.Millis.SECOND),
  );
  const importDefaultResult1 = _modDef12;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/NonGuildVersions.tsx");

export default obj;
export { NonGuildVersions };
