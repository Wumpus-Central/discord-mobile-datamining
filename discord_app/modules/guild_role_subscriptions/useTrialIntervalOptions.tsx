// discord_app/modules/guild_role_subscriptions/useTrialIntervalOptions.tsx
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const TIER_TRIAL_INTERVALS = fn(15205).TIER_TRIAL_INTERVALS;
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default function useTrialIntervalOptions(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    const options = TIER_TRIAL_INTERVALS.map((value) => {
      let obj = { value, label: null, isDefault: null };
      if (value.interval === constants.DAY) {
        if (7 === value.interval_count) {
          const intl = closure_1_0(1114).intl;
          obj = { defaultLimit: closure_1_0(15231).formatPlanIntervalDuration(value) };
          let formatToPlainStringResult = intl.formatToPlainString(closure_1_0(1114).t.XfSsr1, obj);
          const obj4 = closure_1_0(15231);
        }
        obj.label = formatToPlainStringResult;
        let tmp5 = value.interval === tmp.DAY;
        if (tmp5) {
          tmp5 = 7 === value.interval_count;
        }
        obj.isDefault = tmp5;
        return obj;
      }
      formatToPlainStringResult = closure_1_0(15231).formatPlanIntervalDuration(value);
    });
    let selectedOption = closure_0;
    if (null != closure_0) {
      const iter = options.find((value) => {
        let tmp = null != value.value;
        if (tmp) {
          tmp = value.value.interval === closure_1_0.interval;
        }
        if (tmp) {
          tmp = value.value.interval_count === closure_1_0.interval_count;
        }
        return tmp;
      });
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      selectedOption = value;
    }
    return { options, selectedOption };
  }, items);
}
