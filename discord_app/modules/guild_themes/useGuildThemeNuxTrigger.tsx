// discord_app/modules/guild_themes/useGuildThemeNuxTrigger.tsx
import DismissibleContentConstants from "../dismissible_content/DismissibleContentConstants.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c0, ref, tmp3;

let react = react_mod;
let constants = DismissibleContentConstants.DismissibleContentGroupName;
let c5 = 2000;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, isNuxOpen) => {
      let closure_0;
      let closure_3;
      let closure_4;
      let tmp5;
      _require = arg0;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(12);
      isNuxOpen = isNuxOpen.isNuxOpen;
      const openNux = isNuxOpen.openNux;
      const obj2 = require("GuildThemeResolver");
      const tmp4 = null != obj2.useEnabledGuildThemeForGuildId(arg0, "GuildThemeNuxTrigger");
      if (cResult[0] !== tmp4) {
        let items1;
        if (tmp4) {
          const items = [tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX];
          items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = tmp4;
        cResult[1] = items1;
        tmp5 = items1;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = tmp(isNuxOpen[7]);
      const tmp6 = openNux(tmpResult.useSelectedDismissibleContent(tmp5, constants.GUILD_THEME_NUX), 2);
      react = tmp7;
      const tmp8 = tmp6[0] === tmp(isNuxOpen[6]).DismissibleContent.GUILD_THEME_NUX;
      constants = tmp8;
      ref = react.useRef(false);
      const obj4 = react;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            closure_5.current = false;
            return;
          }
        }
        cResult[2] = D;
      } else {
        class D {
          constructor() {
            closure_5.current = false;
            return;
          }
        }
      }
      if (cResult[3] !== arg0) {
        class D {
          constructor() {
            closure_5.current = false;
            return;
          }
        }
        tmp11[0] = arg0;
        cResult[3] = arg0;
        cResult[4] = tmp11;
      } else {
        class D {
          constructor() {
            closure_5.current = false;
            return;
          }
        }
      }
      const effect = obj4.useEffect(D, tmp11);
      if (cResult[5] === arg0) {
        class D {
          constructor() {
            closure_5.current = false;
            return;
          }
        }
      }
      class N {
        constructor() {
          tmp = closure_4;
          if (tmp) {
            tmp2 = isNuxOpen;
            if (!tmp2) {
              tmp3 = closure_5;
              if (!closure_5.current) {
                tmp4 = globalThis;
                _setTimeout = setTimeout;
                tmp5 = closure_5;
                closure_0 = setTimeout(() => {
                  /* body not rendered: F145517 */
                }, closure_5);
                return () => {
                  /* body not rendered: F145518 */
                };
              }
            }
          }
          return;
        }
      }
      const items2 = [tmp8, isNuxOpen, arg0, tmp6[1], openNux];
      cResult[5] = arg0;
      cResult[6] = isNuxOpen;
      cResult[7] = tmp6[1];
      cResult[8] = openNux;
      cResult[9] = tmp8;
      cResult[10] = N;
      cResult[11] = items2;
    }
  : (arg0, isNuxOpen) => {
      let closure_0;
      let closure_3;
      let closure_4;
      let items1;
      _require = arg0;
      isNuxOpen = isNuxOpen.isNuxOpen;
      const openNux = isNuxOpen.openNux;
      react = undefined;
      constants = undefined;
      ref = undefined;
      let tmp = _require;
      let obj = require("GuildThemeResolver");
      const enabledGuildThemeForGuildId = obj.useEnabledGuildThemeForGuildId(arg0, "GuildThemeNuxTrigger");
      const tmp4 = require("useSelectedDismissibleContent");
      const useSelectedDismissibleContent = tmp4.useSelectedDismissibleContent;
      if (null != enabledGuildThemeForGuildId) {
        const items = [tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX];
        items1 = items;
      } else {
        items1 = [];
      }
      const tmp5 = openNux(useSelectedDismissibleContent(items1, constants.GUILD_THEME_NUX), 2);
      react = tmp6;
      const tmp7 = tmp5[0] === tmp(isNuxOpen[6]).DismissibleContent.GUILD_THEME_NUX;
      constants = tmp7;
      ref = react.useRef(false);
      const items2 = [arg0];
      const effect = react.useEffect(() => {
        ref.current = false;
      }, items2);
      const items3 = [tmp7, isNuxOpen, arg0, tmp5[1], openNux];
      const effect1 = react.useEffect(() => {
        if (closure_4) {
          if (!isNuxOpen) {
            if (!ref.current) {
              const _setTimeout = setTimeout;
              let guildId = setTimeout(() => {
                closure_5.current = true;
                guildId = false;
                const obj = {
                  guildId,
                  markAsDismissed(arg0) {
                    const tmp = c0;
                    if (!tmp) {
                      c0 = true;
                      closure_2_3(arg0, true);
                    }
                  },
                };
                const resolved = Promise.resolve(closure_2(obj));
                resolved.catch(() => {
                  closure_1_5.current = false;
                });
              }, ref);
              return () => clearTimeout(guildId);
            }
          }
        }
      }, items3);
    };
const result = size.fileFinishedImporting("modules/guild_themes/useGuildThemeNuxTrigger.tsx");

export default tmp2;
export const GUILD_THEME_NUX_DELAY_MS = 2000;
