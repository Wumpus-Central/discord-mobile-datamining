// discord_app/modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx
import util from "../../intl/index.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default function useTrialActiveUserLimitOptions() {
  return noop.useMemo(() => {
    const obj = { value: null, label: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.zHfL6o);
    const items = [
      obj,
      { value: 10, label: "10" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 100, label: "100" },
    ];
    return items;
  }, []);
}
