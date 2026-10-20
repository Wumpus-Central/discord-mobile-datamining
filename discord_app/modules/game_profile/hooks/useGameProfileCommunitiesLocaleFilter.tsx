// discord_app/modules/game_profile/hooks/useGameProfileCommunitiesLocaleFilter.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import c from "../../../../_runtime/00576_c.js";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(9440).useGameProfileCommunitiesLocaleFilterExclusions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunitiesLocaleFilter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGameProfileCommunitiesLocaleFilter(arg0, arg1) {
      const cResult = c.c(14);
      const tmp4 = closure_4(arg0);
      const _require = tmp4;
      if (cResult[0] !== arg1) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(preferredLocale) {
            return preferredLocale.preferredLocale;
          };
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        let items = arg1;
        if (arg1 == null) {
          items = [];
        }
        const mapped = items.map(tmp6);
        const uniqResult = _modDef12.uniq(mapped.filter(GlobalUtils.isNotNullish));
        cResult[0] = arg1;
        cResult[1] = uniqResult;
        let arr = uniqResult;
      } else {
        arr = cResult[1];
      }
      if (cResult[3] !== arg1) {
        let items1 = arg1;
        if (arg1 == null) {
          items1 = [];
        }
        cResult[3] = arg1;
        cResult[4] = items1;
        let arr4 = items1;
      } else {
        arr4 = cResult[4];
      }
      if (cResult[5] === tmp4) {
        if (cResult[6] === arr4) {
          if (cResult[10] === cResult[7]) {
            if (cResult[11] === arr) {
              if (cResult[12] === tmp14) {
                let tmp15 = cResult[13];
              }
              return tmp15;
            }
          }
          const obj3 = { locales: arr, filteredGuilds: cResult[7], showLocaleFilter: arr.length >= 2 };
          cResult[10] = cResult[7];
          cResult[11] = arr;
          cResult[12] = arr.length >= 2;
          cResult[13] = obj3;
          tmp15 = obj3;
        }
      }
      if (cResult[8] !== tmp4) {
        class L {
          constructor(arg0) {
            tmp = null == arg0.preferredLocale;
            if (!tmp) {
              tmp2 = closure_0;
              tmp = !closure_0.has(arg0.preferredLocale);
            }
            return tmp;
          }
        }
        cResult[8] = tmp4;
        cResult[9] = L;
      } else {
        class L {
          constructor(arg0) {
            tmp = null == arg0.preferredLocale;
            if (!tmp) {
              tmp2 = closure_0;
              tmp = !closure_0.has(arg0.preferredLocale);
            }
            return tmp;
          }
        }
      }
      const found = arr4.filter(L);
      cResult[5] = tmp4;
      cResult[6] = arr4;
      cResult[7] = found;
    }
  : function useGameProfileCommunitiesLocaleFilter(arg0, arg1) {
      closure_0 = arg1;
      let tmp = closure_4(arg0);
      closure_1 = tmp;
      let items = [arg1];
      const memo = noop.useMemo(() => {
        let items = closure_0;
        if (closure_0 == null) {
          items = [];
        }
        const mapped = items.map((preferredLocale) => preferredLocale.preferredLocale);
        return _modDef12.uniq(mapped.filter(GlobalUtils.isNotNullish));
      }, items);
      const obj = { locales: memo, filteredGuilds: null, showLocaleFilter: memo.length >= 2 };
      const items1 = [arg1, tmp];
      obj.filteredGuilds = noop.useMemo(() => {
        let items = closure_0;
        if (closure_0 == null) {
          items = [];
        }
        return items.filter((preferredLocale) => {
          let tmp = null == preferredLocale.preferredLocale;
          if (!tmp) {
            tmp = !set.has(preferredLocale.preferredLocale);
          }
          return tmp;
        });
      }, items1);
      return obj;
    };
