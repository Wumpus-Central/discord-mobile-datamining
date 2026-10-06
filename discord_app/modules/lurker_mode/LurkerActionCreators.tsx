// discord_app/modules/lurker_mode/LurkerActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import LurkingStore from "LurkingStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c0, c3, closure_3, closure_4, lurkingSource, map;

function stopLurkingAll() {
  return obj(...arguments);
}
let obj = function _stopLurkingAll() {
  obj = _asyncToGenerator(async (ignoredGuildIds) => {
    let c2 = 0;
    let c1 = 0;
    return (async function (arg0) {
      let lurkingSourceForGuild;
      let value;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          const tmp3 = c2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const lurkingGuildIdsResult = LurkingStore.lurkingGuildIds();
              const found = lurkingGuildIdsResult.filter((item) => !closure_0.includes(item));
              if (0 !== found.length) {
                const tmp4 = globalThis;
                const _Map = Map;
                const self = this;
                const self2 = this;
                map = new Map(
                  found.map((item) => {
                    const items = [item, lurkingSourceForGuild.getLurkingSourceForGuild(item)];
                    return items;
                  }),
                );
                let obj2 = DispatcherDefault;
                let obj5 = { type: "GUILD_STOP_LURKING", ignoredGuildIds };
                obj2.dispatch(obj5);
                c2 = 1;
                c1 = 1;
                let obj6 = {
                  value: Promise.all(
                    found.map(
                      (() => {
                        closure_0 = closure_1_3((lurkingGuildId) => {
                          let delResult;
                          let c6 = 0;
                          let c7 = 0;
                          let c5 = 0;
                          return (function* (arg0) {
                            let value;
                            if (c7 === 2) {
                              c7 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp3 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                return { value, done: true };
                              } else {
                                return { value: "IconComponent", done: null };
                              }
                            } else {
                              try {
                                c7 = 2;
                                if (0 === c6) {
                                  if (arg0 === 1) {
                                    c7 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c7 = 3;
                                    return { value, done: true };
                                  } else {
                                    closure_3 = tmp;
                                    lurkingSource = undefined;
                                    value = lurkingSource.get(lurkingGuildId);
                                    lurkingSource = value;
                                    if (value == null) {
                                      lurkingSource = null;
                                    }
                                    c5 = 1;
                                    const HTTP = lurkingGuildId(closure_2_2[5]).HTTP;
                                    const request = {
                                      url: closure_2_6.GUILD_LEAVE(lurkingGuildId),
                                      body: { lurking: true },
                                      oldFormErrors: true,
                                      rejectWithError: true,
                                    };
                                    const del = HTTP.del;
                                    c6 = 2;
                                    c7 = 1;
                                    const obj5 = { value: del(request), done: false };
                                    return obj5;
                                  }
                                } else {
                                  if (1 === tmp4) {
                                    c5 = 0;
                                    const obj6 = { type: "GUILD_STOP_LURKING_FAILURE", lurkingGuildId, lurkingSource };
                                    const obj2 = map(closure_2_2[4]);
                                    obj2.dispatch(obj6);
                                  } else if (arg0 === 1) {
                                    c7 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c5 = 0;
                                    c7 = 3;
                                    return { value, done: true };
                                  } else {
                                    c5 = 0;
                                  }
                                  c7 = 3;
                                  return { value: "IconComponent", done: null };
                                }
                              } catch (tmp18) {
                                closure_4 = tmp18;
                                if (0 === c5) {
                                  c7 = 3;
                                  throw tmp18;
                                } else {
                                  c6 = 1;
                                }
                              }
                            }
                          })();
                        });
                        return function () {
                          return closure_0(...arguments);
                        };
                      })(),
                    ),
                  ),
                  done: false,
                };
                return obj6;
              }
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
          return { value: "IconComponent", done: null };
        } catch (tmp10) {
          c1 = 3;
          throw tmp10;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _stopLurking() {
  obj = _asyncToGenerator(async () => {
    let closure_0 = arg0;
    if (1 === c3) {
      if (arg0 === 1) {
        let c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        const length = closure_130_5.lurkingGuildIds();
        if (0 !== length.length) {
          const items = [c0, closure_130_4.getGuildId()];
          let closure_2 = items.filter(closure_130_0(closure_130_2[6]).isNotNullish);
          c3 = 2;
          c4 = 1;
          const obj5 = { value: closure_130_7(closure_2), done: false };
          return obj5;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      obj = { value, done: true };
      return obj;
    }
    await "IconComponent";
    closure_2 = tmp3;
    let tmp18 = closure_0;
    if (closure_0 === undefined) {
      tmp18 = null;
    }
    c0 = tmp18;
    return "Reflect";
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/lurker_mode/LurkerActionCreators.tsx");

export { stopLurkingAll };
export const stopLurking = function stopLurking() {
  return obj(...arguments);
};
