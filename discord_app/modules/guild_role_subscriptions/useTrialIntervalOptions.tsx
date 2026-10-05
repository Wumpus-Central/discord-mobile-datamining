// discord_app/modules/guild_role_subscriptions/useTrialIntervalOptions.tsx
import PremiumConstants from "../premium/PremiumConstants.tsx";
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const TIER_TRIAL_INTERVALS = GuildRoleSubscriptionsConstants.TIER_TRIAL_INTERVALS;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp2;
      let tmp3;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] !== arg0) {
        let tmp5;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function v(value) {
            let obj4;
            const obj = { value, label: null, isDefault: null };
            if (value.interval === constants.DAY) {
              let formatToPlainStringResult;
              if (7 === value.interval_count) {
                const intl = closure_0(dependencyMap[5]).intl;
                const formatToPlainString = intl.formatToPlainString;
                const obj3 = { defaultLimit: obj4.formatPlanIntervalDuration(value) };
                const XfSsr1 = closure_0(dependencyMap[5]).t.XfSsr1;
                obj4 = closure_0(dependencyMap[6]);
                formatToPlainStringResult = formatToPlainString(XfSsr1, obj3);
              }
              obj.label = formatToPlainStringResult;
              const tmp5 = value.interval === tmp.DAY && 7 === value.interval_count;
              obj.isDefault = tmp5;
              return obj;
            }
            const obj2 = closure_0(dependencyMap[6]);
            formatToPlainStringResult = obj2.formatPlanIntervalDuration(value);
          };
          cResult[3] = fn;
          tmp5 = fn;
        } else {
          tmp5 = cResult[3];
        }
        const mapped = TIER_TRIAL_INTERVALS.map(tmp5);
        let tmp8 = arg0;
        if (null != arg0) {
          const iter = mapped.find(
            (value) =>
              null != value.value &&
              value.value.interval === closure_0.interval &&
              value.value.interval_count === closure_0.interval_count,
          );
          let value;
          if (iter != null) {
            value = iter.value;
          }
          tmp8 = value;
        }
        cResult[0] = arg0;
        cResult[1] = mapped;
        cResult[2] = tmp8;
        tmp3 = tmp8;
        tmp2 = mapped;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      if (cResult[4] === tmp2) {
        let tmp10;
        if (cResult[5] === tmp3) {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
      let obj2 = { options: tmp2, selectedOption: tmp3 };
      cResult[4] = tmp2;
      cResult[5] = tmp3;
      cResult[6] = obj2;
      tmp10 = obj2;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => {
        const options = TIER_TRIAL_INTERVALS.map((value) => {
          let obj4;
          const obj = { value, label: null, isDefault: null };
          if (value.interval === constants.DAY) {
            let formatToPlainStringResult;
            if (7 === value.interval_count) {
              const intl = closure_1_0(closure_1_1[5]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const obj3 = { defaultLimit: obj4.formatPlanIntervalDuration(value) };
              const XfSsr1 = closure_1_0(closure_1_1[5]).t.XfSsr1;
              obj4 = closure_1_0(closure_1_1[6]);
              formatToPlainStringResult = formatToPlainString(XfSsr1, obj3);
            }
            obj.label = formatToPlainStringResult;
            const tmp5 = value.interval === tmp.DAY && 7 === value.interval_count;
            obj.isDefault = tmp5;
            return obj;
          }
          const obj2 = closure_1_0(closure_1_1[6]);
          formatToPlainStringResult = obj2.formatPlanIntervalDuration(value);
        });
        let selectedOption = closure_0;
        if (null != closure_0) {
          const iter = options.find(
            (value) =>
              null != value.value &&
              value.value.interval === closure_1_0.interval &&
              value.value.interval_count === closure_1_0.interval_count,
          );
          let value;
          if (iter != null) {
            value = iter.value;
          }
          selectedOption = value;
        }
        return { options, selectedOption };
      }, items);
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default tmp2;
