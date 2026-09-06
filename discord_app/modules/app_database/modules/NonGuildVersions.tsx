// === Module 7656: NonGuildVersions ===

// Module 7656 (NonGuildVersions)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1090 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import isCacheEnabled2 from "isCacheEnabled" /* 7649 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
let closure_5 = new LoggerDefault("NonGuildVersions");
class NonGuildVersions {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.actions = {
      CONNECTION_OPEN(arg0, arg1) {
            return obj.handleConnectionOpen(arg0, arg1);
          },
      BACKGROUND_SYNC(arg0, arg1) {
            return obj.handleConnectionOpen(arg0, arg1);
          }
    };
    tmp2 = closure_2;
    obj = closure_0(closure_2[3]);
    if (obj.isCacheEnabled()) {
      tmp3 = closure_4;
      tmp4 = closure_1;
      obj2 = closure_1(tmp2[4]);
      num = 10;
      addChangeListenerResult = closure_4.addChangeListener(obj2.throttle(() => {
        const databaseResult = DatabaseDaosDefault.database();
        if (databaseResult != null) {
          databaseResult.transaction((database) => {
            guildId = guildId.getGuildId();
            if (null != guildId) {
              const _isNaN = isNaN;
              const _Number = Number;
              if (!isNaN(Number(guildId))) {
                obj = closure_1_1(1986);
                const result = obj.nonGuildVersionsTransaction(database);
                obj = { id: "initial_guild_id", versionString: guildId };
                result.put(obj);
              }
            }
            const result1 = closure_1_1(1986).nonGuildVersionsTransaction(database);
            result1.delete("initial_guild_id");
          });
        }
      }, 10 * closure_1(tmp2[6]).Millis.SECOND));
    }
    return obj;
  }
}
const prototype = NonGuildVersions.prototype;
prototype["getCommittedVersions"] = function getCommittedVersions() {
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            let obj3 = DatabaseDaosDefault;
            const nonGuildVersionsResult = obj3.nonGuildVersions();
            if (null == nonGuildVersionsResult) {
              c4 = 0;
              c6 = 3;
              const obj1 = { value: {}, done: true };
              return obj1;
            } else {
              c5 = 2;
              c6 = 1;
              const obj2 = { value: nonGuildVersionsResult.getMany(), done: false };
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          closure_130_5.warn("couldn't load guild versions", closure_129_1);
          c6 = 3;
          obj3 = { value: {}, done: true };
          return obj3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
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
          obj = { value: Object.fromEntries(closure_0), done: true };
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
    let obj = DatabaseDaosDefault;
    const result = obj.nonGuildVersionsTransaction(database);
    obj = { id: "api_code_version", version: apiCodeVersion.apiCodeVersion };
    result.put(obj);
  }
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
let obj = Object.create(NonGuildVersions.prototype);
let closure_129_0 = obj;
obj.actions = {
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  }
};
const isCacheEnabled = fn(7649);
if (isCacheEnabled.isCacheEnabled()) {
  SelectedGuildStore.addChangeListener(_modDef12.throttle(() => {
    const databaseResult = DatabaseDaosDefault.database();
    if (databaseResult != null) {
      databaseResult.transaction((database) => {
        guildId = guildId.getGuildId();
        if (null != guildId) {
          const _isNaN = isNaN;
          const _Number = Number;
          if (!isNaN(Number(guildId))) {
            obj = closure_1_1(1986);
            const result = obj.nonGuildVersionsTransaction(database);
            obj = { id: "initial_guild_id", versionString: guildId };
            result.put(obj);
          }
        }
        const result1 = closure_1_1(1986).nonGuildVersionsTransaction(database);
        result1.delete("initial_guild_id");
      });
    }
  }, 10 * DurationsDefault.Millis.SECOND));
  const importDefaultResult1 = _modDef12;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/NonGuildVersions.tsx");

export default obj;
export { NonGuildVersions };