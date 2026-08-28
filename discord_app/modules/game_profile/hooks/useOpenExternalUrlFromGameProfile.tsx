// discord_app/modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../_runtime/00019_noop.js";

const require = arg1;
function _getDeepLinkUrl() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let callback = tmp2;
              callback = undefined;
              dependencyMap = undefined;
              if ("store.steampowered.com" === lib.hostname) {
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_1(closure_1_2[3]).isProtocolRegistered(closure_1_6);
                return obj1;
              }
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else if (arg1) {
                const match = lib.pathname.match(closure_7);
                let tmp21;
                if (match != null) {
                  tmp21 = match[1];
                }
                callback = tmp21;
                if (null != callback) {
                  const _HermesInternal = HermesInternal;
                  c4 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = "" + closure_6 + "://store/" + callback;
                  return obj3;
                }
                const str2 = lib.pathname;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else if (arg1) {
              const match1 = lib.pathname.match(closure_8);
              let tmp12;
              if (match1 != null) {
                tmp12 = match1[1];
              }
              dependencyMap = tmp12;
              if (null != dependencyMap) {
                const _decodeURIComponent = decodeURIComponent;
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = lib(8752).buildXboxGamePassStoreDeepLinkUrl(decodeURIComponent(dependencyMap));
                return obj;
              }
              const str = lib.pathname;
            }
            c4 = 3;
            return { value: null, done: true };
          }
          if (lib.hostname === lib(8752).XBOX_GAME_PASS_STORE_HOSTNAME) {
            obj4 = callback(8751);
            c3 = 2;
            c4 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = obj4.isProtocolRegistered(lib(8752).XBOX_GAME_PASS_PROTOCOL);
            return obj5;
          }
        } catch (tmp37) {
          c4 = tmp;
          throw tmp37;
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const steam = "steam";
const re7 = /^\/app\/(\d+)(?:\/)?/;
const re8 = /^\/games\/store\/title\/([^/]+)/;
let result = require("set").fileFinishedImporting("modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx");

export default function useOpenExternalUrlFromGameProfile(arg0) {
  closure_0 = arg0;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp[1];
  closure_0 = undefined;
  closure_0 = callback2((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp3;
              let uRL = tmp7;
              uRL = undefined;
              c2 = undefined;
              if (null != callback) {
                c3 = 1;
                const _URL = URL;
                uRL = new URL(callback);
                c3 = 0;
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = (function getDeepLinkUrl(uRL) {
                  const self = this;
                  const apply = closure_9.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(uRL);
                return obj1;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = arg1;
            let tmp9 = null != c2;
            if (tmp9) {
              tmp9 = closure_1_1;
            }
            if (tmp9) {
              c2 = null;
            }
            const searchParams = uRL.searchParams;
            const result = searchParams.set("utm_source", "discord");
            callback = uRL.toString();
            if (null != callback) {
              callback(callback);
            } else if (null == closure_1_2) {
              first(table[5])(callback);
            }
            (function openDeepLink(closure_1_2, closure_1_22) {
              closure_0 = closure_1_22;
              uRL = setTimeout(() => callback(true), 5000);
              const listener = window.addEventListener("blur", () => clearTimeout(closure_1), { once: true });
              uRL(_null[5])(closure_1_2);
            })(closure_1_2, closure_1_2);
          }
          c5 = 3;
        } catch (tmp40) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp40;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  });
  const items = [arg0, first];
  return React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
};