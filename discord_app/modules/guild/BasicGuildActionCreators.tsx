// === Module 17256: _fetchBasicGuild ===

// Module 17256 (_fetchBasicGuild)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "getGuild" /* 8283 */;
import { Endpoints } from "ME" /* 676 */;
import set from "set" /* 2 */;

const require = arg1;
function _fetchBasicGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === guildOrStatus) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              dependencyMap = tmp4;
              body = tmp8;
              body = undefined;
              if (null == guild.getGuild(callback)) {
                if (null == guildOrStatus.getGuildOrStatus(tmp57)) {
                  if (!closure_1_7.has(tmp57)) {
                    let obj5 = closure_1_1(closure_1_2[4]);
                    obj1 = { type: "BASIC_GUILD_FETCH", guildId: null };
                    obj1[1] = tmp57;
                    obj5.dispatch(obj1);
                    closure_1_7.add(tmp57);
                    guild = 2;
                    const HTTP = callback(closure_1_2[5]).HTTP;
                    const obj2 = { url: null, rejectWithError: true };
                    obj2[0] = c6.GUILD_BASIC(tmp57);
                    guildOrStatus = 3;
                    c6 = 1;
                    let obj3 = { value: null, done: false };
                    obj3[0] = HTTP.get(obj2);
                    return obj3;
                  }
                }
              }
              c6 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              guild = 1;
              obj3 = body(709);
              const obj4 = { type: "BASIC_GUILD_FETCH_FAILURE", guildId: null };
              obj4[1] = callback;
              obj3.dispatch(obj4);
            } else if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              guild = 0;
              set.delete(callback);
              c6 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = body;
              return obj5;
            } else {
              body = body.body;
              obj = body(709);
              const obj6 = { type: "BASIC_GUILD_FETCH_SUCCESS", guildId: null, guildInfo: null };
              obj6[1] = callback;
              obj6[2] = body;
              obj.dispatch(obj6);
              guild = 1;
            }
            guild = 0;
            set.delete(callback);
          }
          guild = 0;
          set.delete(callback);
          throw closure_3;
        } catch (tmp48) {
          closure_3 = tmp48;
          if (tmp5 === guild) {
            c6 = tmp3;
            throw tmp48;
          } else if (tmp2 === tmp50) {
            guildOrStatus = tmp2;
          } else {
            guildOrStatus = tmp;
          }
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let set = new Set();
const result = set.fileFinishedImporting("modules/guild/BasicGuildActionCreators.tsx");

export const fetchBasicGuild = function fetchBasicGuild(guild_id) {
  const self = this;
  const apply = _fetchBasicGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};