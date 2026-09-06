// discord_app/modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx
import GameUtilsDefault from "../../../utils/GameUtils.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_9 = async function _getDeepLinkUrl(arg0) {
  let hostname = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            closure_129_0 = hostname;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            if ("store.steampowered.com" === hostname.hostname) {
              c3 = 1;
              c4 = 1;
              const obj1 = { value: GameUtilsDefault.isProtocolRegistered(steam), done: false };
              return obj1;
            }
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else if (value) {
              const match = closure_129_0.pathname.match(closure_130_7);
              let tmp21;
              if (match != null) {
                tmp21 = match[1];
              }
              closure_129_1 = tmp21;
              if (null != closure_129_1) {
                const _HermesInternal = HermesInternal;
                c4 = 3;
                const obj3 = { value: "" + closure_130_6 + "://store/" + closure_129_1, done: true };
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else if (value) {
            const match1 = closure_129_0.pathname.match(closure_130_8);
            let tmp12;
            if (match1 != null) {
              tmp12 = match1[1];
            }
            closure_129_2 = tmp12;
            if (null != closure_129_2) {
              const _decodeURIComponent = decodeURIComponent;
              c4 = 3;
              obj = {
                value: closure_130_0(closure_130_2[4]).buildXboxGamePassStoreDeepLinkUrl(
                  decodeURIComponent(closure_129_2),
                ),
                done: true,
              };
              return obj;
            }
          }
          c4 = 3;
          return { value: null, done: true };
        }
        if (closure_129_0.hostname === closure_130_0(closure_130_2[4]).XBOX_GAME_PASS_STORE_HOSTNAME) {
          obj4 = closure_130_1(closure_130_2[3]);
          c3 = 2;
          c4 = 1;
          const obj5 = {
            value: obj4.isProtocolRegistered(closure_130_0(closure_130_2[4]).XBOX_GAME_PASS_PROTOCOL),
            done: false,
          };
          return obj5;
        }
      } catch (tmp37) {
        c4 = tmp;
        throw tmp37;
      }
    }
  })();
};
const steam = "steam";
const re7 = /^\/app\/(\d+)(?:\/)?/;
const re8 = /^\/games\/store\/title\/([^/]+)/;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx");

export default function useOpenExternalUrlFromGameProfile(openURL) {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp[1];
  closure_0 = asyncGeneratorStep(async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp7;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            if (null != closure_129_0) {
              c3 = 1;
              const _URL = URL;
              const uRL = new URL(closure_129_0);
              closure_129_1 = uRL;
              c3 = 0;
              c4 = 2;
              c5 = 1;
              const obj1 = {
                value: (function getDeepLinkUrl() {
                  const self = this;
                  const apply = closure_1_9.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(uRL),
                done: false,
              };
              return obj1;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_129_2 = value;
          let tmp9 = null != closure_129_2;
          if (tmp9) {
            tmp9 = closure_1;
          }
          if (tmp9) {
            closure_129_2 = null;
          }
          const searchParams = closure_129_1.searchParams;
          const result = searchParams.set("utm_source", "discord");
          closure_129_0 = closure_129_1.toString();
          if (null != closure_0) {
            closure_0(closure_129_0);
          } else if (null == closure_129_2) {
            first(tmp3[5])(closure_129_0);
          }
          (function openDeepLink(arg0, arg1) {
            closure_0 = arg1;
            const timeout = setTimeout(() => closure_0(true), 5000);
            const listener = window.addEventListener("blur", () => clearTimeout(closure_1), { once: true });
            closure_1_1(closure_1_2[5])(arg0);
          })(closure_129_2, tmp3);
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
  });
  const items = [openURL, first];
  return noop.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
}
