// discord_app/modules/conjure/publish/useConjureIncompleteAppNotice.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureIncompleteAppNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureIncompleteAppNotice(arg0) {
      _require = arg0;
      const cResult = require("c").c(11);
      const tmp4 = guildId(17110)(arg0);
      guildId = undefined;
      if (tmp4 != null) {
        guildId = tmp4.guildId;
      }
      if (guildId == null) {
        guildId = null;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function o() {
          let tmp2 = null;
          if (null != guildId) {
            guild = GuildStore.getGuild(tmp);
            let name;
            if (guild != null) {
              name = guild.name;
            }
            if (name == null) {
              name = null;
            }
            tmp2 = name;
          }
          return tmp2;
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp8);
      const tmp10 = _slicedToArray(noop.useState(null), 2);
      dependencyMap = tmp10[1];
      let missingSurface;
      if (tmp4 != null) {
        missingSurface = tmp4.missingSurface;
      }
      if (missingSurface == null) {
        missingSurface = null;
      }
      let tmp12 = null;
      if (null != missingSurface) {
        tmp12 = null;
        if (tmp10[0] !== arg0) {
          if (cResult[3] === stateFromStores) {
            if (cResult[4] === missingSurface) {
              let tmp13 = cResult[5];
            }
            if (cResult[6] !== arg0) {
              class I {
                constructor() {
                  return closure_2(closure_0);
                }
              }
              cResult[6] = arg0;
              cResult[7] = I;
            } else {
              class I {
                constructor() {
                  return closure_2(closure_0);
                }
              }
            }
            if (cResult[8] === tmp13) {
              class I {
                constructor() {
                  return closure_2(closure_0);
                }
              }
            }
            const obj2 = { message: tmp13, onDismiss: I };
            cResult[8] = tmp13;
            cResult[9] = I;
            cResult[10] = obj2;
          }
          const intl = tmp(1126).intl;
          if ("channel" === missingSurface) {
            class I {
              constructor() {
                return closure_2(closure_0);
              }
            }
          } else {
            class I {
              constructor() {
                return closure_2(closure_0);
              }
            }
          }
          if (stateFromStores == null) {
            class I {
              constructor() {
                return closure_2(closure_0);
              }
            }
          }
          const obj3 = { server: stateFromStores };
          const formatResult = intl.format(tmp14, obj3);
          cResult[3] = stateFromStores;
          cResult[4] = missingSurface;
          cResult[5] = formatResult;
          tmp13 = formatResult;
        }
      }
      return tmp12;
    }
  : function useConjureIncompleteAppNotice(arg0) {
      _require = arg0;
      const tmp3 = guildId(17110)(arg0);
      guildId = undefined;
      if (tmp3 != null) {
        guildId = tmp3.guildId;
      }
      if (guildId == null) {
        guildId = null;
      }
      const items = [GuildStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        let tmp2 = null;
        if (null != guildId) {
          guild = GuildStore.getGuild(tmp);
          let name;
          if (guild != null) {
            name = guild.name;
          }
          if (name == null) {
            name = null;
          }
          tmp2 = name;
        }
        return tmp2;
      });
      const tmp7 = _slicedToArray(noop.useState(null), 2);
      dependencyMap = tmp7[1];
      let missingSurface;
      if (tmp3 != null) {
        missingSurface = tmp3.missingSurface;
      }
      if (missingSurface == null) {
        missingSurface = null;
      }
      let tmp9 = null;
      if (null != missingSurface) {
        tmp9 = null;
        if (tmp7[0] !== arg0) {
          const intl = require("util").intl;
          if ("channel" === missingSurface) {
            let Lm7IRC = tmp(3849)["1cm4fj"];
          } else {
            Lm7IRC = tmp(3849).Lm7IRC;
          }
          let str2 = stateFromStores;
          if (stateFromStores == null) {
            str2 = "";
          }
          const obj2 = { message: null, onDismiss: null };
          const obj3 = { server: str2 };
          obj2.message = intl.format(Lm7IRC, obj3);
          obj2.onDismiss = function onDismiss() {
            return closure_2(closure_0);
          };
          tmp9 = obj2;
        }
      }
      return tmp9;
    };
