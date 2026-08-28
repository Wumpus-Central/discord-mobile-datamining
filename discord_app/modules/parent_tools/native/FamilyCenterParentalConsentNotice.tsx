// === Module 14412: FamilyCenterParentalConsentNotice ===

// Module 14412 (FamilyCenterParentalConsentNotice)
import ThemesDefault from "Themes" /* 712 */;
import FamilyCenterInlineWarningNoticeDefault from "FamilyCenterInlineWarningNotice" /* 14413 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
createCacheKey = { container: null, link: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textDecorationLine: "underline" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default function FamilyCenterParentalConsentNotice() {
  const tmp = callback();
  const _require = tmp;
  let obj = _require(14404);
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  obj1 = _require(14405);
  const parentalConsentWarning = obj1.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  importDefault = React.useCallback(() => {
    callback(table[6]).openURL("https://support.discord.com/hc/articles/14155060633623");
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        function learnMoreHook(children) {
          return closure_1_4(lib(closure_1_2[7]).Text, { variant: "text-sm/medium", color: "text-strong", style: lib.link, accessibilityRole: "link", onPress: closure_1, children }, arg1);
        }
        obj = { style: null, text: null };
        obj[0] = tmp.container;
        if (0 === daysRemaining) {
          const intl2 = tmp2(1236).intl;
          obj = { learnMoreHook: null };
          obj[0] = learnMoreHook;
          let formatResult = intl2.format(tmp9(2370).S5kmfO, obj);
        } else {
          const intl = tmp2(1236).intl;
          obj1 = { count: null, learnMoreHook: null };
          obj1[0] = daysRemaining;
          obj1[1] = learnMoreHook;
          formatResult = intl.format(tmp9(2370)["5jm+T3"], obj1);
        }
        obj[1] = formatResult;
        return jsx(FamilyCenterInlineWarningNoticeDefault, { style: null, text: null });
      }
    }
  }
  return null;
};