// _runtime/metro/04984__.js
import get_synchronousScreenUpdatesEnabled from "../04964_get_synchronousScreenUpdatesEnabled.js";
import noop from "00019__.js";

require = arg1;
let context = noop.createContext({
  topAlreadyApplied: false,
  leftDisabled: false,
  rightDisabled: false,
  bottomDisabled: false,
});

export const EdgeInsetApplicationContext = context;
export const useEdgeInsetApplication = function useEdgeInsetApplication(arg0, flag, flag2, flag3, flag4) {
  let obj = noop;
  context = noop.useContext(context);
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
  if (!flag) {
    let tmp3 = !topAlreadyApplied;
    if (!topAlreadyApplied) {
      tmp3 = arg0;
    }
    tmp2 = tmp3;
  }
  closure_1 = tmp2;
  let tmp4 = tmp2;
  if (tmp2) {
    tmp4 = !flag;
  }
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
  obj = {
    appliesTopInset: tmp4,
    consumeLeftInset: !leftDisabled,
    consumeRightInset: !rightDisabled,
    consumeBottomInset: !bottomDisabled,
    useLegacyBehavior: flag,
    nextContextValue: obj.useMemo(() => {
      let tmp = topAlreadyApplied;
      if (!topAlreadyApplied) {
        tmp = closure_1;
      }
      return { topAlreadyApplied: tmp, leftDisabled, rightDisabled, bottomDisabled };
    }, items),
  };
  return obj;
};
