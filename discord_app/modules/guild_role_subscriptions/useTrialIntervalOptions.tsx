// === Module 15065: useTrialIntervalOptions ===

// Module 15065 (useTrialIntervalOptions)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const TIER_TRIAL_INTERVALS = fn(15038).TIER_TRIAL_INTERVALS;
const SubscriptionIntervalTypes = fn(1379).SubscriptionIntervalTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] !== arg0) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function v(value) {
        const obj = { value, label: null, isDefault: null };
        if (value.interval === constants.DAY) {
          if (7 === value.interval_count) {
            const intl = closure_0(1126).intl;
            const obj3 = { defaultLimit: closure_0(15064).formatPlanIntervalDuration(value) };
            let formatToPlainStringResult = intl.formatToPlainString(closure_0(1126).t.XfSsr1, obj3);
            const obj4 = closure_0(15064);
          }
          obj.label = formatToPlainStringResult;
          let tmp5 = value.interval === tmp.DAY;
          if (tmp5) {
            tmp5 = 7 === value.interval_count;
          }
          obj.isDefault = tmp5;
          return obj;
        }
        formatToPlainStringResult = closure_0(15064).formatPlanIntervalDuration(value);
        const obj2 = closure_0(15064);
      };
      cResult[3] = fn;
      let tmp5 = fn;
    } else {
      tmp5 = cResult[3];
    }
    const mapped = TIER_TRIAL_INTERVALS.map(tmp5);
    let tmp8 = arg0;
    if (null != arg0) {
      const iter = mapped.find((value) => {
        let tmp = null != value.value;
        if (tmp) {
          tmp = value.value.interval === closure_0.interval;
        }
        if (tmp) {
          tmp = value.value.interval_count === closure_0.interval_count;
        }
        return tmp;
      });
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      tmp8 = value;
    }
    cResult[0] = arg0;
    cResult[1] = mapped;
    cResult[2] = tmp8;
    let tmp3 = tmp8;
    let tmp2 = mapped;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[4] === tmp2) {
    if (cResult[5] === tmp3) {
      let tmp10 = cResult[6];
    }
    return tmp10;
  }
  let obj2 = { options: tmp2, selectedOption: tmp3 };
  cResult[4] = tmp2;
  cResult[5] = tmp3;
  cResult[6] = obj2;
  tmp10 = obj2;
  let obj = require("c");
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    options = TIER_TRIAL_INTERVALS.map((value) => {
      const obj = { value, label: null, isDefault: null };
      if (value.interval === constants.DAY) {
        if (7 === value.interval_count) {
          const intl = closure_1_0(1126).intl;
          const obj3 = { defaultLimit: closure_1_0(15064).formatPlanIntervalDuration(value) };
          let formatToPlainStringResult = intl.formatToPlainString(closure_1_0(1126).t.XfSsr1, obj3);
          const obj4 = closure_1_0(15064);
        }
        obj.label = formatToPlainStringResult;
        let tmp5 = value.interval === tmp.DAY;
        if (tmp5) {
          tmp5 = 7 === value.interval_count;
        }
        obj.isDefault = tmp5;
        return obj;
      }
      formatToPlainStringResult = closure_1_0(15064).formatPlanIntervalDuration(value);
      const obj2 = closure_1_0(15064);
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
});