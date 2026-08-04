// discord_app/modules/lurker_mode/LurkerActionCreators.tsx
import sendRequest from "sendRequest";
import createRTCConnection from "createRTCConnection";
import initialize from "initialize";
import { Endpoints } from "ME";
import importDefaultResult from "hasNavigatedAway";

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
                const map = new Map(found.map((closure_0) => {
                  const items = [closure_0, lurkingSourceForGuild.getLurkingSourceForGuild(closure_0)];
                  return items;
                }));
                v0 = map;
                let obj1 = v0(table[4]);
                obj1 = { type: "GUILD_STOP_LURKING", ignoredGuildIds: null };
                obj1[1] = tmp19;
                obj1.dispatch(obj1);
                table = 1;
                v0 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = Promise.all(found.map((() => {
                  let closure_0 = outer1_3((arg0) => {
                    let closure_0 = arg0;
                    let c6 = 0;
                    let c7 = 0;
                    let c5 = 0;
                    return (/* F119115 */ function*() { ... })();
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
function stopLurkingForGuild(closure_0) {
  const self = this;
  const apply = _stopLurkingForGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _stopLurkingForGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp3;
              let callback2 = tmp5;
              callback2 = undefined;
              if (lurkingGuildIdsResult.includes(callback)) {
                callback2 = obj10.getLurkingSourceForGuild(tmp31);
                let obj3 = outer1_1(outer1_2[4]);
                let obj1 = { type: "GUILD_STOP_LURKING_FOR_GUILD", lurkingGuildId: null };
                obj1[1] = tmp31;
                obj3.dispatch(obj1);
                let c4 = 1;
                const HTTP = callback(outer1_2[5]).HTTP;
                const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
                obj2[0] = c6.GUILD_LEAVE(tmp31);
                obj2[1] = { lurking: true };
                c5 = 2;
                c6 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = HTTP.del(obj2);
                return obj3;
              }
              lurkingGuildIdsResult = c5.lurkingGuildIds();
              obj10 = c5;
            }
          } else {
            if (1 === tmp8) {
              c4 = 0;
              obj1 = callback2(table[4]);
              const obj4 = { type: "GUILD_STOP_LURKING_FAILURE", lurkingGuildId: null, lurkingSource: null };
              obj4[1] = callback;
              obj4[2] = callback2;
              obj1.dispatch(obj4);
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c6 = 3;
        } catch (tmp23) {
          let sendRequest = tmp23;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp23;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _stopLurkingForGuild = tmp;
  const apply = tmp.apply;
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
    let c11 = 0;
    let c12 = 0;
    let c9 = 0;
    let iter = (function*() {
      const callback2 = tmp8;
      let callback;
      if (callback === undefined) {
        const tmp64 = null;
      }
      callback = tmp64;
      let dependencyMap;
      let lib;
      let iter;
      let next;
      let c11 = 1;
      let c12 = 1;
      yield "ct";
      if (1 === tmp8) {
        if (arg0 === 1) {
          c12 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c12 = 3;
          let obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          let closure_1 = next.lurkingGuildIds();
          if (0 !== closure_1.length) {
            if (!obj9.getMobileLurkerServerPreview("LurkerActionCreators.stopLurking").stickyLurk) {
              const items = [callback, iter.getGuildId()];
              dependencyMap = items.filter(callback(1351).isNotNullish);
              let obj3 = callback(6694);
              if (obj3.getMobileLurkerServerPreview("LurkerActionCreators.stopLurking").enabled) {
                lib = closure_1.filter((arg0) => !closure_2.includes(arg0));
                if (lib.length > 0) {
                  iter = function _loop(arg0) {
                    let closure_0 = arg0;
                    let c1 = 0;
                    return (function* _loop(arg0) {
                      if (c1 === 2) {
                        c1 = 3;
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
                          c1 = 2;
                          if (arg0 === 1) {
                            c1 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c1 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            obj = callback(outer1_2[8]);
                            const obj1 = { onLeave: null };
                            obj1[0] = function onLeave() { ... };
                            const result = obj.openLurkerLeavePrompt(callback, obj1);
                            c1 = 3;
                            return { value: "HermesInternal", done: null };
                          }
                        } catch (tmp8) {
                          c1 = tmp;
                          throw tmp8;
                        }
                      }
                    })();
                  };
                  dependencyMap = lib;
                  dependencyMap = lib;
                  closure_1 = lib[Symbol.iterator]();
                  if (closure_1 === undefined) {
                    c12 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    let c9 = 1;
                    next = tmp58;
                    const iter4 = iter(next)[tmp74.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    next = iter4.next;
                    lib = undefined;
                    let tmp21;
                    const iter3 = next(tmp21);
                    HermesBuiltin.ensureObject("iterator.next() did not return an object");
                    iter = iter3;
                    if (iter3.done) {
                      const value = iter.value;
                      c9 = 0;
                    } else {
                      c11 = 4;
                      c12 = 1;
                      return iter3;
                    }
                    const tmp85 = iter(next);
                  }
                }
              }
              c11 = 2;
              c12 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback2(dependencyMap);
              return obj2;
            }
            obj9 = callback(6694);
          }
        }
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c12 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c12 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        }
      } else if (3 === tmp8) {
        c9 = 0;
        closure_1.return();
        throw closure_10;
      } else {
        if (4 !== tmp8) {
          c9 = 1;
          const method = HermesBuiltin.getMethod("throw");
          if (method === undefined) {
            const method1 = HermesBuiltin.getMethod("return");
            if (method1 !== undefined) {
              HermesBuiltin.ensureObject("iterator.return() did not return an object");
            }
            HermesBuiltin.throwTypeError();
          } else {
            iter = method(tmp10);
            HermesBuiltin.ensureObject("iterator.throw() did not return an object");
            if (!iter.done) {
              c11 = 4;
              c12 = 1;
              return iter;
            }
          }
          tmp10 = closure_10;
        }
        c9 = 2;
        if (arg0 === 1) {
          c12 = 3;
          throw arg1;
        } else {
          lib = arg1;
          if (arg0 === 2) {
            lib = arg1;
            c9 = 1;
            const method2 = HermesBuiltin.getMethod("return");
            if (method2 === undefined) {
              c9 = 0;
              closure_1.return();
              c12 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              const iter2 = method2(lib);
              HermesBuiltin.ensureObject("iterator.return() did not return an object");
              if (iter2.done) {
                c9 = 0;
                closure_1.return();
                c12 = 3;
                let obj = { value: null, done: true };
                obj[0] = iter2.value;
                return obj;
              } else {
                c11 = 4;
                c12 = 1;
                return iter2;
              }
            }
          } else {
            c9 = 1;
            tmp21 = arg1;
          }
        }
      }
      c12 = 3;
      yield "HermesInternal";
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
require("hasNavigatedAway").initialize();
let result = require("initialize").fileFinishedImporting("modules/lurker_mode/LurkerActionCreators.tsx");

export { stopLurkingAll };
export { stopLurkingForGuild };
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