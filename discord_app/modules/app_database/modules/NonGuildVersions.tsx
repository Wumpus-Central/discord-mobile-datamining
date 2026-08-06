// discord_app/modules/app_database/modules/NonGuildVersions.tsx
import items from "items";
import importDefaultResult from "handleConnectionOpen";
import isCacheEnabled from "isCacheEnabled";
import { items } from "../DatabaseDaos.tsx";

let obj = arg1;
let c4 = importDefaultResult;
let c5 = new require("isCacheEnabled")("NonGuildVersions");
class NonGuildVersions {
  constructor() {
    obj = Object.create(new.target.prototype);
    resetInMemoryState = obj;
    obj.actions = {
      CONNECTION_OPEN(arg0, arg1) {
            return obj.handleConnectionOpen(arg0, arg1);
          },
      BACKGROUND_SYNC(arg0, arg1) {
            return obj.handleConnectionOpen(arg0, arg1);
          }
    };
    tmp2 = closure_2;
    obj = require("isCacheEnabled");
    if (obj.isCacheEnabled()) {
      tmp3 = Object;
      tmp4 = closure_1;
      obj2 = require("apply");
      num = 10;
      addChangeListenerResult = Object.addChangeListener(obj2.throttle(() => {
        const databaseResult = callback(table[5]).database();
        if (databaseResult != null) {
          databaseResult.transaction((database) => {
            guildId = guildId.getGuildId();
            if (null != guildId) {
              const _isNaN = isNaN;
              const _Number = Number;
              if (!isNaN(Number(guildId))) {
                let obj = callback(1936);
                const result = obj.nonGuildVersionsTransaction(database);
                obj = { id: "initial_guild_id", versionString: null };
                obj[1] = guildId;
                result.put(obj);
              }
            }
            const result1 = callback(1936).nonGuildVersionsTransaction(database);
            result1.delete("initial_guild_id");
          });
        }
      }, 10 * require("set").Millis.SECOND));
    }
    return obj;
  }
}
const prototype = NonGuildVersions.prototype;
prototype["getCommittedVersions"] = function getCommittedVersions() {
  return callback(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
      try {
        c6 = 2;
        if (0 === logger) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp3;
            let closure_1 = tmp7;
            let closure_0;
            let c4 = 1;
            let obj3 = outer1_1(outer1_2[5]);
            const nonGuildVersionsResult = obj3.nonGuildVersions();
            if (null == nonGuildVersionsResult) {
              c4 = 0;
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = {};
              return obj1;
            } else {
              logger = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = nonGuildVersionsResult.getMany();
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_1 = items;
          logger.warn("couldn't load guild versions", closure_1);
          c6 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = {};
          return obj3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_0 = arg1.map((id) => {
            const items = [id.id, "version" in id ? id.version : id.versionString];
            return items;
          });
          if (closure_0 == null) {
            closure_0 = [];
          }
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = Object.fromEntries(closure_0);
          return obj;
        }
      } catch (tmp20) {
        items = tmp20;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp20;
        } else {
          logger = tmp;
        }
      }
    }
  })();
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(apiCodeVersion, database) {
  if (null != apiCodeVersion.apiCodeVersion) {
    let obj = items;
    const result = obj.nonGuildVersionsTransaction(database);
    obj = { id: "api_code_version", version: null };
    obj[1] = apiCodeVersion.apiCodeVersion;
    result.put(obj);
  }
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
obj = Object.create(NonGuildVersions.prototype);
obj.actions = {
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  }
};
if (isCacheEnabled.isCacheEnabled()) {
  importDefaultResult.addChangeListener(require("apply").throttle(() => {
    const databaseResult = callback(table[5]).database();
    if (databaseResult != null) {
      databaseResult.transaction((database) => {
        guildId = guildId.getGuildId();
        if (null != guildId) {
          const _isNaN = isNaN;
          const _Number = Number;
          if (!isNaN(Number(guildId))) {
            let obj = callback(1936);
            const result = obj.nonGuildVersionsTransaction(database);
            obj = { id: "initial_guild_id", versionString: null };
            obj[1] = guildId;
            result.put(obj);
          }
        }
        const result1 = callback(1936).nonGuildVersionsTransaction(database);
        result1.delete("initial_guild_id");
      });
    }
  }, 10 * require("set").Millis.SECOND));
  const importDefaultResult1 = require("apply");
}
const tmp2 = new require("isCacheEnabled")("NonGuildVersions");
let result = require("timestamp").fileFinishedImporting("modules/app_database/modules/NonGuildVersions.tsx");

export default obj;
export { NonGuildVersions };