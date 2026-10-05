// === Module 8328: useOpenExternalUrlFromGameProfile ===

// Module 8328 (useOpenExternalUrlFromGameProfile)
import openURLDefault from "openURL" /* 4559 */;
import GameUtilsDefault from "GameUtils" /* 8329 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5;

function getDeepLinkUrl() {
  return obj(...arguments);
}
let obj = function _getDeepLinkUrl() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj11;
    let obj5;
    let obj7;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
      try {
        let closure_1;
        let closure_2;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = undefined;
            closure_2 = undefined;
            if ("store.steampowered.com" === closure_0.hostname) {
              c3 = 1;
              c4 = 1;
              const obj4 = { value: obj7.isProtocolRegistered(steam), done: false };
              obj7 = GameUtilsDefault;
              return obj4;
            }
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (value) {
              const str2 = closure_0.pathname;
              const match = str2.match(closure_130_7);
              let tmp20;
              if (match != null) {
                tmp20 = match[1];
              }
              closure_1 = tmp20;
              if (null != closure_1) {
                const _HermesInternal = HermesInternal;
                c4 = 3;
                const obj8 = { value: "" + closure_130_6 + "://store/" + closure_1, done: true };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else if (value) {
            const str = closure_0.pathname;
            const match1 = str.match(closure_130_8);
            let tmp11;
            if (match1 != null) {
              tmp11 = match1[1];
            }
            closure_2 = tmp11;
            if (null != closure_2) {
              const _decodeURIComponent = decodeURIComponent;
              c4 = 3;
              obj = { value: obj11.buildXboxGamePassStoreDeepLinkUrl(decodeURIComponent(closure_2)), done: true };
              obj11 = closure_130_0(closure_130_2[4]);
              return obj;
            }
          }
          c4 = 3;
          return { value: null, done: true };
        }
        if (closure_0.hostname === closure_130_0(closure_130_2[4]).XBOX_GAME_PASS_STORE_HOSTNAME) {
          c3 = 2;
          c4 = 1;
          const obj10 = { value: obj5.isProtocolRegistered(closure_130_0(closure_130_2[4]).XBOX_GAME_PASS_PROTOCOL), done: false };
          obj5 = closure_130_1(closure_130_2[3]);
          return obj10;
        }
      } catch (tmp36) {
        c4 = 3;
        throw tmp36;
      }
    }
  });
  return obj(...arguments);
};
function openDeepLink(arg0, arg1) {
  let closure_0 = arg1;
  const timeout = setTimeout(() => closure_0(true), 5000);
  const listener = window.addEventListener("blur", () => clearTimeout(closure_1), { once: true });
  openURLDefault(arg0);
}
const steam = "steam";
const re7 = /^\/app\/(\d+)(?:\/)?/;
const re8 = /^\/games\/store\/title\/([^/]+)/;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(3);
  [first, dependencyMap] = react.useState(false);
  if (cResult[0] === arg0) {
    let tmp4;
    if (cResult[1] === first) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  _require = _asyncToGenerator(async function(arg0) {
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let closure_1;
        let uRL;
        let c2;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            closure_1 = tmp4;
            uRL = undefined;
            c2 = undefined;
            if (null != closure_0) {
              const _URL = URL;
              const self = this;
              const self2 = this;
              uRL = new URL(closure_0);
              c3 = 0;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: getDeepLinkUrl(uRL), done: false };
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = value;
          const tmp6 = null != c2 && closure_1;
          if (tmp6) {
            c2 = null;
          }
          const searchParams = uRL.searchParams;
          const result = searchParams.set("utm_source", "discord");
          closure_0 = uRL.toString();
          if (null != closure_0) {
            closure_0(closure_0);
          } else if (null != c2) {
            openDeepLink(c2, closure_2);
          } else {
            first(closure_2_2[5])(closure_0);
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp37) {
        if (0 === c3) {
          c5 = 3;
          throw tmp37;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = arg0;
  cResult[1] = first;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0) => {
  let closure_2;
  let first;
  [first, closure_2] = react.useState(false);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async function(arg0) {
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let closure_1;
        let uRL;
        let c2;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            closure_1 = tmp4;
            uRL = undefined;
            c2 = undefined;
            if (null != closure_0) {
              const _URL = URL;
              const self = this;
              const self2 = this;
              uRL = new URL(closure_0);
              c3 = 0;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: getDeepLinkUrl(uRL), done: false };
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = value;
          const tmp6 = null != c2 && closure_1;
          if (tmp6) {
            c2 = null;
          }
          const searchParams = uRL.searchParams;
          const result = searchParams.set("utm_source", "discord");
          closure_0 = uRL.toString();
          if (null != closure_0) {
            closure_0(closure_0);
          } else if (null != c2) {
            openDeepLink(c2, closure_2);
          } else {
            first(closure_2_2[5])(closure_0);
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp37) {
        if (0 === c3) {
          c5 = 3;
          throw tmp37;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items = [arg0, first];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
});
let result = size.fileFinishedImporting("modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx");

export default tmp2;