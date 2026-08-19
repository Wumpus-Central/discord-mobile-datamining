// === Module 16970: useTrialActiveUserLimitOptions ===

// Module 16970 (useTrialActiveUserLimitOptions)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default function useTrialActiveUserLimitOptions() {
  return React.useMemo(() => {
    const obj = { value: null, label: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.zHfL6o);
    const items = [obj, { value: 10, label: "10" }, { value: 25, label: "25" }, { value: 50, label: "50" }, { value: 100, label: "100" }];
    return items;
  }, []);
};