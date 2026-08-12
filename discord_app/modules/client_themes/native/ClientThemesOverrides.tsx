// discord_app/modules/client_themes/native/ClientThemesOverrides.tsx
import noop from "noop";
import createCacheKey from "createCacheKey";
import { useIsUsingClientTheme } from "useIsUsingClientTheme.tsx";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ none: { backgroundColor: "transparent" } });
const result = require("getGradientColorByPercentage").fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  gradientValue = gradientValue(4164).useGradientValue(gradientValue(4164).GradientPercentage.END);
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
  gradientValue = gradientValue(4164).useGradientValue(gradientValue(4164).GradientPercentage.START);
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
  gradientValue = gradientValue(4164).useGradientValue(gradientValue(4164).GradientPercentage.MID);
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
  if (useIsUsingClientTheme()) {
    let none = themedChatInput;
    if (themedChatInput == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
};