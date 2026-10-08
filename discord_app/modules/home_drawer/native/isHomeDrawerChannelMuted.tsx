// discord_app/modules/home_drawer/native/isHomeDrawerChannelMuted.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import JoinedThreadsStore from "../../threads/JoinedThreadsStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const isThread = fn(2067).isThread;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsHomeDrawerChannelMuted() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [JoinedThreadsStore, UserGuildSettingsStore];
        const fn = function s() {
          return (type) => {
            const tmp = closure_1_3(type.type);
            if (tmp) {
              if (muted.isMuted(type.id)) {
                return true;
              }
            }
            const tmp3 = tmp ? type.parent_id : type.id;
            let result = null != tmp3;
            if (result) {
              result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
            }
            return result;
          };
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5, tmp6, initialize.statesWillNeverBeEqual);
    }
  : function useIsHomeDrawerChannelMuted() {
      const items = [JoinedThreadsStore, UserGuildSettingsStore];
      return initialize.useStateFromStores(
        items,
        () => (type) => {
          const tmp = closure_1_3(type.type);
          if (tmp) {
            if (muted.isMuted(type.id)) {
              return true;
            }
          }
          const tmp3 = tmp ? type.parent_id : type.id;
          let result = null != tmp3;
          if (result) {
            result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
          }
          return result;
        },
        [],
        initialize.statesWillNeverBeEqual,
      );
    };
