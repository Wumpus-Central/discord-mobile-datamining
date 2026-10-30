// === Module 9800: ClientThemesOverrides ===

// Module 9800 (ClientThemesOverrides)
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 5187 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9801 */;
import noop from "module_19" /* 19 */;

require = fn;
const createStyles = fn(5009);
let closure_4 = createStyles.createStyles({ none: { backgroundColor: "transparent" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export function useGradientBottom() {
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
}
export function useGradientTop() {
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
}
export function useGradientMidpoint() {
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
}
export function useClientThemesOverride(noHeight) {
  let tmp2;
  if (useIsUsingClientThemeDefault()) {
    let none = noHeight;
    if (noHeight == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
}