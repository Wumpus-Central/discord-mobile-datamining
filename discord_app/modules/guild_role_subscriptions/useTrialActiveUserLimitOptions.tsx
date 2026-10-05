// discord_app/modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx
import react2 from "../../../_runtime/00576_react.js";
import intl2 from "../../intl/index.native.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { value: null, label: intl.string(intl2.t.zHfL6o) };
        intl = intl2.intl;
        const items = [
          obj2,
          { value: 10, label: "10" },
          { value: 25, label: "25" },
          { value: 50, label: "50" },
          { value: 100, label: "100" },
        ];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      react.useMemo(() => {
        let intl;
        const obj = { value: null, label: intl.string(intl2.t.zHfL6o) };
        intl = intl2.intl;
        const items = [
          obj,
          { value: 10, label: "10" },
          { value: 25, label: "25" },
          { value: 50, label: "50" },
          { value: 100, label: "100" },
        ];
        return items;
      }, []);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default tmp2;
