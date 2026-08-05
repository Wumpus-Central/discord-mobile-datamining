// discord_app/modules/lurker_mode/LurkerActionCreators.tsx
import sendRequest from "sendRequest";
import createRTCConnection from "createRTCConnection";
import initialize from "initialize";
import { Endpoints } from "ME";

const require = arg1;
function stopLurkingAll(items) {
  const self = this;
  const apply = _stopLurkingAll.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _stopLurkingAll() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const found = outer1_5.lurkingGuildIds().filter((arg0) => !closure_0.includes(arg0));
              if (0 !== found.length) {
                const _Map = Map;
                const map = new Map(found.map((arg0) => {
                  const items = [arg0, lurkingSourceForGuild.getLurkingSourceForGuild(arg0)];
                  return items;
                }));
                v0 = map;
                let obj1 = v0(table[4]);
                obj1 = { type: "GUILD_STOP_LURKING", ignoredGuildIds: null };
                obj1[1] = tmp19;
                obj1.dispatch(obj1);
                table = 1;
                v0 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = Promise.all(found.map((() => {
                  let closure_0 = outer1_3((arg0) => {
                    let closure_0 = arg0;
                    let c6 = 0;
                    let c7 = 0;
                    let c5 = 0;
                    return (/* F119235 */ function*() { ... })();
                  });
                  return function() {
                    const self = this;
                    const apply = closure_0.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                })()));
                return obj2;
              }
              const lurkingGuildIdsResult = outer1_5.lurkingGuildIds();
              tmp19 = closure_0;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp13) {
          v0 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _stopLurkingAll = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _stopLurking() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*() {
      if (guildId === 2) {
        guildId = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          guildId = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              guildId = 3;
              throw arg1;
            } else if (arg0 === 2) {
              guildId = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let table = tmp4;
              let closure_1 = 0;
              let callback;
              let tmp19 = callback;
              if (callback === undefined) {
                tmp19 = null;
              }
              callback = tmp19;
              closure_1 = undefined;
              table = undefined;
              c3 = 1;
              guildId = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                guildId = 3;
                throw arg1;
              } else if (arg0 === 2) {
                guildId = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                closure_1 = initialize.lurkingGuildIds();
                if (0 !== closure_1.length) {
                  const items = [callback, guildId.getGuildId()];
                  table = items.filter(callback(table[6]).isNotNullish);
                  c3 = 2;
                  guildId = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = callback2(table);
                  return obj2;
                }
              }
            } else if (arg0 === 1) {
              guildId = 3;
              throw arg1;
            } else if (arg0 === 2) {
              guildId = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            guildId = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          guildId = tmp;
          throw tmp20;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _stopLurking = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("initialize").fileFinishedImporting("modules/lurker_mode/LurkerActionCreators.tsx");

export { stopLurkingAll };
export const stopLurking = function stopLurking(guildId) {
  const self = this;
  const apply = _stopLurking.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};