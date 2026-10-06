// === Module 7518: ClientThemesOverrides ===

// Module 7518 (ClientThemesOverrides)
import react2 from "react" /* 576 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4702 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7519 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4 = createStyles.createStyles({ none: { backgroundColor: "transparent" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = client_themes_ClientThemesUtils;
  const gradientValue = obj2.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  if (cResult[0] !== gradientValue) {
    let tmp5;
    if (null != gradientValue) {
      tmp5 = { backgroundColor: gradientValue };
      const obj3 = { backgroundColor: gradientValue };
    }
    cResult[0] = gradientValue;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  const items = [gradientValue];
  return react.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      tmp2 = { backgroundColor: tmp };
      const obj = { backgroundColor: tmp };
    }
    return tmp2;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = client_themes_ClientThemesUtils;
  const gradientValue = obj2.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.START);
  if (cResult[0] !== gradientValue) {
    let tmp5;
    if (null != gradientValue) {
      tmp5 = { backgroundColor: gradientValue };
      const obj3 = { backgroundColor: gradientValue };
    }
    cResult[0] = gradientValue;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.START);
  const items = [gradientValue];
  return react.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      tmp2 = { backgroundColor: tmp };
      const obj = { backgroundColor: tmp };
    }
    return tmp2;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = client_themes_ClientThemesUtils;
  const gradientValue = obj2.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.MID);
  if (cResult[0] !== gradientValue) {
    let tmp5;
    if (null != gradientValue) {
      tmp5 = { backgroundColor: gradientValue };
      const obj3 = { backgroundColor: gradientValue };
    }
    cResult[0] = gradientValue;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.MID);
  const items = [gradientValue];
  return react.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      tmp2 = { backgroundColor: tmp };
      const obj = { backgroundColor: tmp };
    }
    return tmp2;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  const tmp = closure_4();
  if (useIsUsingClientThemeDefault()) {
    let none = arg0;
    if (arg0 == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
}) : ((arg0) => {
  let tmp2;
  const tmp = closure_4();
  if (useIsUsingClientThemeDefault()) {
    let none = arg0;
    if (arg0 == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = tmp2;
export const useGradientTop = tmp3;
export const useGradientMidpoint = tmp4;
export const useClientThemesOverride = tmp5;