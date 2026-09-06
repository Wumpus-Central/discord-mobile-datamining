// discord_app/modules/guild_role_subscriptions/useTrialIntervalOptions.tsx
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const TIER_TRIAL_INTERVALS = fn(15205).TIER_TRIAL_INTERVALS;
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default function useTrialIntervalOptions(active_trial) {
  closure_0 = active_trial;
  const items = [active_trial];
  return noop.useMemo(() => {
    const options = TIER_TRIAL_INTERVALS.map((value) => {
      let obj = { value, label: null, isDefault: null };
      if (value.interval === constants.DAY) {
        if (7 === value.interval_count) {
          const intl = active_trial(1114).intl;
          obj = { defaultLimit: active_trial(15231).formatPlanIntervalDuration(value) };
          let formatToPlainStringResult = intl.formatToPlainString(active_trial(1114).t.XfSsr1, obj);
          const obj4 = active_trial(15231);
        }
        obj.label = formatToPlainStringResult;
        let tmp5 = value.interval === tmp.DAY;
        if (tmp5) {
          tmp5 = 7 === value.interval_count;
        }
        obj.isDefault = tmp5;
        return obj;
      }
      formatToPlainStringResult = active_trial(15231).formatPlanIntervalDuration(value);
      const obj2 = active_trial(15231);
    });
    let selectedOption = closure_0;
    if (null != closure_0) {
      const iter = options.find((value) => {
        let tmp = null != value.value;
        if (tmp) {
          tmp = value.value.interval === active_trial.interval;
        }
        if (tmp) {
          tmp = value.value.interval_count === active_trial.interval_count;
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
