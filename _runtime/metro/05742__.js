// === Module 5742: ? ===

// Module 5742
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5722 */;
import react from "react" /* 19 */;

let context = react.createContext({ topAlreadyApplied: false, leftDisabled: false, rightDisabled: false, bottomDisabled: false });

export const EdgeInsetApplicationContext = context;
export const useEdgeInsetApplication = function useEdgeInsetApplication(arg0, flag, flag2, flag3, flag4) {
  let bottomDisabled;
  let leftDisabled;
  let rightDisabled;
  context = react.useContext(context);
  const topAlreadyApplied = context.topAlreadyApplied;
  ({ leftDisabled, rightDisabled, bottomDisabled } = context);
  const experiment = get_synchronousScreenUpdatesEnabled.featureFlags.experiment;
  flag = undefined;
  if (experiment != null) {
    flag = experiment.androidLegacyTopInsetBehavior;
  }
  if (flag == null) {
    flag = false;
  }
  let tmp2 = flag;
  if (!tmp2) {
    tmp2 = !topAlreadyApplied && arg0;
  }
  let closure_1 = tmp2;
  const tmp4 = tmp2 && !flag;
  if (!leftDisabled) {
    leftDisabled = flag2;
  }
  if (!rightDisabled) {
    rightDisabled = flag3;
  }
  if (!bottomDisabled) {
    bottomDisabled = flag4;
  }
  const items = [topAlreadyApplied, tmp2, leftDisabled, rightDisabled, bottomDisabled];
  const obj2 = { appliesTopInset: tmp4, consumeLeftInset: !leftDisabled, consumeRightInset: !rightDisabled, consumeBottomInset: !bottomDisabled, useLegacyBehavior: flag, nextContextValue: react.useMemo(() => ({ topAlreadyApplied: topAlreadyApplied || closure_1, leftDisabled, rightDisabled, bottomDisabled }), items) };
  return obj2;
};