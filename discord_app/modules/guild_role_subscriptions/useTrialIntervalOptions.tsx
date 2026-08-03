import noop from "noop";
import { TIER_TRIAL_INTERVALS } from "MAX_SUBSCRIPTION_TIERS";
import { SubscriptionIntervalTypes } from "GuildFeatures";

const require = arg1;
const result = require("GuildFeatures").fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default function useTrialIntervalOptions(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const options = outer1_3.map((interval) => {
      let obj = { value: interval, label: null, isDefault: null };
      if (interval.interval === constants.DAY) {
        if (7 === interval.interval_count) {
          const intl = lib(1236).intl;
          obj = { defaultLimit: null };
          obj[0] = lib(14267).formatPlanIntervalDuration(interval);
          let formatToPlainStringResult = intl.formatToPlainString(lib(1236).t.XfSsr1, obj);
          const obj4 = lib(14267);
        }
        obj[1] = formatToPlainStringResult;
        let tmp5 = interval.interval === tmp.DAY;
        if (tmp5) {
          tmp5 = 7 === interval.interval_count;
        }
        obj[2] = tmp5;
        return obj;
      }
      formatToPlainStringResult = lib(14267).formatPlanIntervalDuration(interval);
    });
    let selectedOption = closure_0;
    if (null != closure_0) {
      const iter = options.find((value) => {
        let tmp = null != value.value;
        if (tmp) {
          tmp = value.value.interval === lib.interval;
        }
        if (tmp) {
          tmp = value.value.interval_count === lib.interval_count;
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