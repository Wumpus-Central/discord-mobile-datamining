// === Module 16086: guild_themes/useGuildThemeNuxTrigger ===

// Module 16086 (guild_themes/useGuildThemeNuxTrigger)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let constants = fn(2048).DismissibleContentGroupName;
let c5 = 2000;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/useGuildThemeNuxTrigger.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, isNuxOpen) => {
  _require = arg0;
  const cResult = require("c").c(12);
  isNuxOpen = isNuxOpen.isNuxOpen;
  const openNux = isNuxOpen.openNux;
  const obj = require("c");
  const tmp4 = null != require("GuildThemeResolver").useEnabledGuildThemeForGuildId(arg0, "GuildThemeNuxTrigger");
  if (cResult[0] !== tmp4) {
    if (tmp4) {
      const items = [tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = tmp4;
    cResult[1] = items1;
  } else {
    const tmp8 = openNux(tmp(tmp2[7]).useSelectedDismissibleContent(cResult[1], constants.GUILD_THEME_NUX), 2);
    noop = tmp9;
    const tmp10 = tmp8[0] === tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX;
    constants = tmp10;
    noop.useRef(false);
    const _Symbol = Symbol;
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
      tmp14[0] = arg0;
      cResult[3] = arg0;
      cResult[4] = tmp14;
    } else {
      class D {
        constructor() {
          closure_5.current = false;
          return;
        }
      }
    }
    const effect = noop.useEffect(D, tmp14);
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
        if (closure_4) {
          tmp = isNuxOpen;
          if (!isNuxOpen) {
            tmp2 = closure_5;
            if (!closure_5.current) {
              tmp3 = globalThis;
              _setTimeout = setTimeout;
              tmp4 = closure_5;
              closure_0 = setTimeout(() => { ... }, closure_5);
              return () => { ... };
            }
          }
        }
        return;
      }
    }
    const items2 = [tmp10, isNuxOpen, arg0, tmp8[1], openNux];
    cResult[5] = arg0;
    cResult[6] = isNuxOpen;
    cResult[7] = tmp8[1];
    cResult[8] = openNux;
    cResult[9] = tmp10;
    cResult[10] = N;
    cResult[11] = items2;
    const tmpResult = tmp(tmp2[7]);
  }
  const obj2 = require("GuildThemeResolver");
}) : ((arg0, isNuxOpen) => {
  _require = arg0;
  isNuxOpen = isNuxOpen.isNuxOpen;
  const openNux = isNuxOpen.openNux;
  noop = undefined;
  constants = undefined;
  const enabledGuildThemeForGuildId = require("GuildThemeResolver").useEnabledGuildThemeForGuildId(arg0, "GuildThemeNuxTrigger");
  const obj = require("GuildThemeResolver");
  if (null != enabledGuildThemeForGuildId) {
    const items = [tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp4 = openNux(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items1, constants.GUILD_THEME_NUX), 2);
  noop = tmp5;
  const tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.GUILD_THEME_NUX;
  constants = tmp6;
  noop.useRef(false);
  const items2 = [arg0];
  const effect = noop.useEffect(() => {
    closure_5.current = false;
  }, items2);
  const items3 = [tmp6, isNuxOpen, arg0, tmp4[1], openNux];
  const effect1 = noop.useEffect(() => {
    if (closure_4) {
      if (!isNuxOpen) {
        if (!ref.current) {
          const _setTimeout = setTimeout;
          let guildId = setTimeout(() => {
            closure_5.current = true;
            guildId = false;
            const resolved = Promise.resolve(closure_2({
              guildId,
              markAsDismissed(arg0) {
                if (!c0) {
                  c0 = true;
                  closure_2_3(arg0, true);
                }
              }
            }));
            resolved.catch(() => {
              closure_1_5.current = false;
            });
          }, ref);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items3);
});
export const GUILD_THEME_NUX_DELAY_MS = 2000;