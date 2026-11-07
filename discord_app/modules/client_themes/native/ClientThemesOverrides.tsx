// === Module 9911: ClientThemesOverrides ===

// Module 9911 (ClientThemesOverrides)
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 5308 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9912 */;
import noop from "module_19" /* 19 */;

require = fn;
const createStyles = fn(5140);
let closure_4 = createStyles.createStyles({ none: { backgroundColor: "transparent" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export function useGradientBottom() {
  const gradientValue = client_themes_ClientThemesUtils.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  items = [gradientValue];
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
  items = [gradientValue];
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
  items = [gradientValue];
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