// === Module 14578: useTrialIntervalOptions ===

// Module 14578 (useTrialIntervalOptions)
import noop from "noop" /* 19 */;
import { TIER_TRIAL_INTERVALS } from "MAX_SUBSCRIPTION_TIERS" /* 14551 */;
import { SubscriptionIntervalTypes } from "GuildFeatures" /* 1924 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default function useTrialIntervalOptions(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const options = TIER_TRIAL_INTERVALS.map((item, index) => {
      let obj = { value: item, label: null, isDefault: null };
      if (item.interval === constants.DAY) {
        if (7 === item.interval_count) {
          const intl = lib(1236).intl;
          obj = { defaultLimit: null };
          obj[0] = lib(14577).formatPlanIntervalDuration(item);
          let formatToPlainStringResult = intl.formatToPlainString(lib(1236).t.XfSsr1, obj);
          const obj4 = lib(14577);
        }
        obj[1] = formatToPlainStringResult;
        let tmp5 = item.interval === tmp.DAY;
        if (tmp5) {
          tmp5 = 7 === item.interval_count;
        }
        obj[2] = tmp5;
        return obj;
      }
      formatToPlainStringResult = lib(14577).formatPlanIntervalDuration(item);
      const obj2 = lib(14577);
    });
    let selectedOption = closure_0;
    if (null != closure_0) {
      const iter = options.find((item, index) => {
        let tmp = null != item.value;
        if (tmp) {
          tmp = item.value.interval === lib.interval;
        }
        if (tmp) {
          tmp = item.value.interval_count === lib.interval_count;
        }
        return tmp;
      });
      let value;
      if (iter != null) {
        value = iter.value;
      }
      selectedOption = value;
    }
    return { options, selectedOption };
  }, items);
};