// === Module 17989: useTrialActiveUserLimitOptions ===

// Module 17989 (useTrialActiveUserLimitOptions)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: null, label: intl.string(intl2.t.zHfL6o) };
    intl = intl2.intl;
    const items = [obj2, { value: 10, label: "10" }, { value: 25, label: "25" }, { value: 50, label: "50" }, { value: 100, label: "100" }];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useMemo(() => {
  let intl;
  const obj = { value: null, label: intl.string(intl2.t.zHfL6o) };
  intl = intl2.intl;
  const items = [obj, { value: 10, label: "10" }, { value: 25, label: "25" }, { value: 50, label: "50" }, { value: 100, label: "100" }];
  return items;
}, []));
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default tmp2;