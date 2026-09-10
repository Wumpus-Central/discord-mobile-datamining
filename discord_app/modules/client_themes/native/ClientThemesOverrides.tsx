// === Module 7923: ClientThemesOverrides ===

// Module 7923 (ClientThemesOverrides)
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4423 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7924 */;
import noop from "module_19" /* 19 */;

require = fn;
const createStyles = fn(4605);
let closure_4 = createStyles.createStyles({ none: { backgroundColor: "transparent" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  const gradientValue = client_themes_ClientThemesUtils.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  const items = [gradientValue];
  return noop.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useGradientTop = function useGradientTop() {
  const gradientValue = client_themes_ClientThemesUtils.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.START);
  const items = [gradientValue];
  return noop.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useGradientMidpoint = function useGradientMidpoint() {
  const gradientValue = client_themes_ClientThemesUtils.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.MID);
  const items = [gradientValue];
  return noop.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useClientThemesOverride = function useClientThemesOverride(noHeight) {
  let tmp2;
  if (useIsUsingClientThemeDefault()) {
    let none = noHeight;
    if (noHeight == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
};