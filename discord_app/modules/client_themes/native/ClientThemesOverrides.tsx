// === Module 8501: useGradientBottom ===

// Module 8501 (useGradientBottom)
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8502 */;
import noop from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_4 = createCacheKey.createStyles({ none: { backgroundColor: "transparent" } });
const result = require("obj132").fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  gradientValue = gradientValue(4194).useGradientValue(gradientValue(4194).GradientPercentage.END);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useGradientTop = function useGradientTop() {
  gradientValue = gradientValue(4194).useGradientValue(gradientValue(4194).GradientPercentage.START);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useGradientMidpoint = function useGradientMidpoint() {
  gradientValue = gradientValue(4194).useGradientValue(gradientValue(4194).GradientPercentage.MID);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useClientThemesOverride = function useClientThemesOverride(themedChatInput) {
  let tmp2;
  if (useIsUsingClientThemeDefault()) {
    let none = themedChatInput;
    if (themedChatInput == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
};