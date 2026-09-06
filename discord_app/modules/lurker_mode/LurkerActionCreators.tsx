// === Module 7321: LurkerActionCreators ===

// Module 7321 (LurkerActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import LurkingStore from "LurkingStore" /* 4200 */;

const require = fn;
function stopLurkingAll() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _stopLurkingAll(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const found = LurkingStore.lurkingGuildIds().filter((item) => !closure_0.includes(item));
          if (0 !== found.length) {
            const _Map = Map;
            const map = new Map(found.map((item) => {
              const items = [item, lurkingSourceForGuild.getLurkingSourceForGuild(item)];
              return items;
            }));
            let obj1 = DispatcherDefault;
            obj1 = { type: "GUILD_STOP_LURKING", ignoredGuildIds: tmp18 };
            obj1.dispatch(obj1);
            c2 = 1;
            c1 = 1;
            const obj2 = {
              value: Promise.all(found.map((() => {
                          closure_0 = closure_1_3(function*(arg0) {
                            closure_3 = tmp3;
                            closure_2 = tmp5;
                            closure_130_0 = closure_0;
                            value = _null.get(closure_0);
                            _null = value;
                            if (value == null) {
                              _null = null;
                            }
                            closure_130_1 = _null;
                            const HTTP = closure_0(1272).HTTP;
                            const request = { url: closure_2_6.GUILD_LEAVE(closure_0), body: { lurking: true }, oldFormErrors: true, rejectWithError: true };
                            yield HTTP.del(request);
                            if (1 === tmp8) {
                              c5 = 0;
                              map(573).dispatch({ type: "GUILD_STOP_LURKING_FAILURE", lurkingGuildId: closure_130_0, lurkingSource: closure_130_1 });
                              c7 = 3;
                              map(573);
                            } else if (arg0 === 1) {
                              c7 = 3;
                              throw arg1;
                            } else if (arg0 !== 2) {
                              c5 = 0;
                            }
                            return arg1;
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
                        })())),
              done: false
            };
            return obj2;
          }
          const lurkingGuildIdsResult = LurkingStore.lurkingGuildIds();
          tmp18 = closure_0;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp13) {
      c1 = tmp;
      throw tmp13;
    }
  }
};
let closure_9 = async function _stopLurking(arg0, value) {
  if (1 === tmp4) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      closure_129_1 = closure_130_5.lurkingGuildIds();
      if (0 !== closure_129_1.length) {
        const items = [closure_129_0, closure_130_4.getGuildId()];
        closure_129_2 = items.filter(closure_130_0(closure_130_2[6]).isNotNullish);
        c3 = 2;
        c4 = 1;
        return { value: closure_130_7(closure_129_2), done: false };
      }
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  }
  await "HermesInternal";
  let tmp19 = closure_0;
  if (closure_0 === undefined) {
    tmp19 = null;
  }
  closure_129_0 = tmp19;
  return "PX_16";
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/LurkerActionCreators.tsx");

export { stopLurkingAll };
export const stopLurking = function stopLurking() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};