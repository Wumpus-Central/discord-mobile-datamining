// discord_app/modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2553 from "../GuildPowerups.messages.js";
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppliedGuildBoostStore from "../../../../stores/AppliedGuildBoostStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, join) => {
      _require = arg0;
      const cResult = require("c").c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppliedGuildBoostStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] !== stateFromStores) {
        let num5;
        if (stateFromStores != null) {
          const filter = stateFromStores.filter;
          if (filter != null) {
            const found = filter((ended) => {
              ended = ended.ended;
              let tmp = !ended;
              if (!ended) {
                tmp = null == ended.endsAt;
              }
              return tmp;
            });
            if (found != null) {
              num5 = found.length;
            }
          }
        }
        if (num5 == null) {
          num5 = 0;
        }
        cResult[4] = stateFromStores;
        cResult[5] = num5;
        let tmp9 = num5;
      } else {
        tmp9 = cResult[5];
      }
      const diff = useGuildPowerupsBoostCountDefault(arg0).spent - tmp9;
      if (diff <= 0) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { shouldShow: false, title: "", description: "", requiredBoostCount: 0 };
          cResult[6] = obj2;
        }
      } else {
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(_modDef2553.n5hQhc);
          cResult[7] = stringResult;
          let tmp12 = stringResult;
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] === join) {
          if (cResult[9] === diff) {
            let tmp15 = cResult[10];
          }
          if (cResult[11] === diff) {
            if (cResult[12] === tmp15) {
              let tmp17 = cResult[13];
            }
            return tmp17;
          }
          const obj3 = { shouldShow: true, title: tmp12, description: tmp15, requiredBoostCount: diff };
          cResult[11] = diff;
          cResult[12] = tmp15;
          cResult[13] = obj3;
          tmp17 = obj3;
        }
        const intl2 = tmp(1126).intl;
        const obj4 = { boostCount: diff, perksString: join.join(", ") };
        const formatToPlainStringResult = intl2.formatToPlainString(_modDef2553.iAaAiG, obj4);
        cResult[8] = join;
        cResult[9] = diff;
        cResult[10] = formatToPlainStringResult;
        tmp15 = formatToPlainStringResult;
      }
      const tmpResult = require("initialize");
    }
  : (arg0, arg1) => {
      _require = arg0;
      importDefault = arg1;
      const items = [AppliedGuildBoostStore];
      const items1 = [arg0];
      stateFromStores = require("initialize").useStateFromStores(
        items,
        () => AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0),
        items1,
      );
      const items2 = [stateFromStores];
      const diff =
        require("useGuildPowerupsBoostCount")(arg0).spent -
        noop.useMemo(() => {
          let num;
          if (stateFromStores != null) {
            const filter = stateFromStores.filter;
            if (filter != null) {
              const found = filter((ended) => {
                ended = ended.ended;
                let tmp = !ended;
                if (!ended) {
                  tmp = null == ended.endsAt;
                }
                return tmp;
              });
              if (found != null) {
                num = found.length;
              }
            }
          }
          if (num == null) {
            num = 0;
          }
          return num;
        }, items2);
      noop = diff;
      const items3 = [diff, arg1];
      return noop.useMemo(() => {
        if (diff <= 0) {
          let obj = { shouldShow: false, title: "", description: "", requiredBoostCount: 0 };
        } else {
          obj = { shouldShow: true, title: null, description: null, requiredBoostCount: null };
          const intl = util.intl;
          obj.title = intl.string(_modDef2553.n5hQhc);
          const intl2 = util.intl;
          const obj2 = { boostCount: diff, perksString: closure_1.join(", ") };
          obj.description = intl2.formatToPlainString(_modDef2553.iAaAiG, obj2);
          obj.requiredBoostCount = diff;
        }
        return obj;
      }, items3);
    };
