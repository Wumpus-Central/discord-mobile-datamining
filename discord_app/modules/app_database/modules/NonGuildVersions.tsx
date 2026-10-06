// === Module 7153: NonGuildVersions ===

// Module 7153 (NonGuildVersions)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1102 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import isCacheEnabled from "isCacheEnabled" /* 7146 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3, guildId;

const f94540 = () => {
  let obj = DatabaseDaosDefault;
  const databaseResult = obj.database();
  if (databaseResult != null) {
    databaseResult.transaction((database) => {
      guildId = guildId.getGuildId();
      if (null != guildId) {
        const _isNaN = isNaN;
        const _Number = Number;
        if (!isNaN(Number(guildId))) {
          const obj = closure_1_1(closure_1_2[5]);
          const result = obj.nonGuildVersionsTransaction(database);
          const obj2 = { id: "initial_guild_id", versionString: guildId };
          result.put(obj2);
        }
      }
      const obj4 = closure_1_1(closure_1_2[5]);
      const result1 = obj4.nonGuildVersionsTransaction(database);
      result1.delete("initial_guild_id");
    });
  }
};
const tmp3 = new LoggerDefault("NonGuildVersions");
let closure_5 = tmp3;
class NonGuildVersions {
  constructor() {
    const obj3 = Object.create(new.target.prototype);
    obj3.actions = {
      CONNECTION_OPEN(arg0, arg1) {
        return obj3.handleConnectionOpen(arg0, arg1);
      },
      BACKGROUND_SYNC(arg0, arg1) {
        return obj3.handleConnectionOpen(arg0, arg1);
      }
    };
    let obj = isCacheEnabled;
    if (obj.isCacheEnabled()) {
      const addChangeListener = SelectedGuildStore.addChangeListener;
      let obj2 = _modDef12;
      addChangeListener(obj2.throttle(f94540, 10 * DurationsDefault.Millis.SECOND));
    }
    return obj3;
  }
  getCommittedVersions() {
    return (async () => {
      if (c6 === 2) {
        c6 = 3;
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
        let c4;
        try {
          let closure_1;
          let closure_0;
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
              let closure_2 = tmp;
              closure_1 = tmp4;
              closure_0 = undefined;
              c4 = 1;
              const obj4 = DatabaseDaosDefault;
              const nonGuildVersionsResult = obj4.nonGuildVersions();
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
          } else if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            closure_130_5.warn("couldn't load guild versions", closure_1);
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
            closure_0 = value.map((id) => {
              const items = [id.id, "version" in id ? id.version : id.versionString];
              return items;
            });
            const _Object = Object;
            if (closure_0 == null) {
              closure_0 = [];
            }
            c4 = 0;
            c6 = 3;
            const obj = { value: fromEntries(closure_0), done: true };
            return obj;
          }
        } catch (tmp17) {
          closure_3 = tmp17;
          if (0 === c4) {
            c6 = 3;
            throw tmp17;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  }
  handleConnectionOpen(apiCodeVersion, database) {
    if (null != apiCodeVersion.apiCodeVersion) {
      const obj = DatabaseDaosDefault;
      const result = obj.nonGuildVersionsTransaction(database);
      const obj2 = { id: "api_code_version", version: apiCodeVersion.apiCodeVersion };
      result.put(obj2);
    }
  }
  resetInMemoryState() {

  }
}
const prototype = NonGuildVersions.prototype;
let obj = Object.create(NonGuildVersions.prototype);
obj.actions = {
  CONNECTION_OPEN(arg0, arg1) {
    return obj3.handleConnectionOpen(arg0, arg1);
  },
  BACKGROUND_SYNC(arg0, arg1) {
    return obj3.handleConnectionOpen(arg0, arg1);
  }
};
if (isCacheEnabled.isCacheEnabled()) {
  let addChangeListener = SelectedGuildStore.addChangeListener;
  const importDefaultResult1 = _modDef12;
  addChangeListener(importDefaultResult1.throttle(f94540, 10 * DurationsDefault.Millis.SECOND));
}
let result = size.fileFinishedImporting("modules/app_database/modules/NonGuildVersions.tsx");

export default obj;
export { NonGuildVersions };