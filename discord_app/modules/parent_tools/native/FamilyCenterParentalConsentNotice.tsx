// discord_app/modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let require = arg1;
createCacheKey = { container: null, link: null };
createCacheKey = { marginTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textDecorationLine: "underline" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default function FamilyCenterParentalConsentNotice() {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = require(14015) /* useIsParentalConsentBannerActive */;
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  let obj1 = require(14016) /* useParentalConsentWarning */;
  const parentalConsentWarning = obj1.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  const importDefault = React.useCallback(() => {
    callback(table[6]).openURL("https://support.discord.com/hc/articles/14155060633623");
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        function learnMoreHook(children) {
          return outer1_4(tmp(outer1_2[7]).Text, { variant: "text-sm/medium", color: "text-strong", style: tmp.link, accessibilityRole: "link", onPress: closure_1, children }, arg1);
        }
        obj = { style: null, text: null };
        obj[0] = tmp.container;
        if (0 === daysRemaining) {
          const intl2 = tmp2(1236).intl;
          obj = { learnMoreHook: null };
          obj[0] = learnMoreHook;
          let formatResult = intl2.format(tmp9(2285).S5kmfO, obj);
        } else {
          const intl = tmp2(1236).intl;
          obj1 = { count: null, learnMoreHook: null };
          obj1[0] = daysRemaining;
          obj1[1] = learnMoreHook;
          formatResult = intl.format(tmp9(2285)["5jm+T3"], obj1);
        }
        obj[1] = formatResult;
        return jsx(importDefault(14024), { style: null, text: null });
      }
    }
  }
  return null;
};