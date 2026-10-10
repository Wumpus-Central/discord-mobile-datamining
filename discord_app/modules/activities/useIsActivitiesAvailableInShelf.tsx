// discord_app/modules/activities/useIsActivitiesAvailableInShelf.tsx
import fetchShelf from "fetchShelf.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsActivitiesAvailableInShelf(guildId, arg1) {
      _require = guildId;
      const cResult = require("c").c(8);
      let obj = require("c");
      const isActivitiesEnabledForCurrentPlatform =
        require("useIsActivitiesEnabledForCurrentPlatform").useIsActivitiesEnabledForCurrentPlatform();
      const tmp3 = isActivitiesEnabledForCurrentPlatform(10847)(arg1);
      if (cResult[0] === guildId) {
        if (cResult[1] === tmp3) {
          let tmp4 = cResult[2];
        }
        dependencyMap = tmp4;
        if (cResult[3] === guildId) {
          if (cResult[4] === isActivitiesEnabledForCurrentPlatform) {
            if (cResult[5] === tmp4) {
              let tmp6 = cResult[6];
              let tmp7 = cResult[7];
            }
            const effect = noop.useEffect(tmp6, tmp7);
            if (tmp4) {
              tmp4 = isActivitiesEnabledForCurrentPlatform;
            }
            return tmp4;
          }
        }
        const fn = function v() {
          let tmp = closure_2;
          if (closure_2) {
            tmp = isActivitiesEnabledForCurrentPlatform;
          }
          if (tmp) {
            const obj2 = { guildId };
            const shelf = fetchShelf.fetchShelf(obj2);
          }
        };
        const items = [guildId, isActivitiesEnabledForCurrentPlatform, tmp4];
        cResult[3] = guildId;
        cResult[4] = isActivitiesEnabledForCurrentPlatform;
        cResult[5] = tmp4;
        cResult[6] = fn;
        cResult[7] = items;
        tmp7 = items;
        tmp6 = fn;
      }
      let tmp5 = null != guildId;
      if (tmp5) {
        tmp5 = "" !== guildId;
      }
      if (!tmp5) {
        tmp5 = tmp3;
      }
      cResult[0] = guildId;
      cResult[1] = tmp3;
      cResult[2] = tmp5;
      tmp4 = tmp5;
      let obj2 = require("useIsActivitiesEnabledForCurrentPlatform");
    }
  : function useIsActivitiesAvailableInShelf(guildId, arg1) {
      _require = guildId;
      const isActivitiesEnabledForCurrentPlatform =
        require("useIsActivitiesEnabledForCurrentPlatform").useIsActivitiesEnabledForCurrentPlatform();
      let tmp3 = null != guildId;
      let obj = require("useIsActivitiesEnabledForCurrentPlatform");
      if (tmp3) {
        tmp3 = "" !== guildId;
      }
      if (!tmp3) {
        tmp3 = tmp2;
      }
      dependencyMap = tmp3;
      const items = [guildId, isActivitiesEnabledForCurrentPlatform, tmp3];
      const effect = noop.useEffect(() => {
        let tmp = closure_2;
        if (closure_2) {
          tmp = isActivitiesEnabledForCurrentPlatform;
        }
        if (tmp) {
          const obj2 = { guildId };
          const shelf = fetchShelf.fetchShelf(obj2);
        }
      }, items);
      if (tmp3) {
        tmp3 = isActivitiesEnabledForCurrentPlatform;
      }
      return tmp3;
    };
