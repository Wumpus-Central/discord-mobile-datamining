// discord_app/modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FamilyCenterInlineWarningNoticeDefault from "FamilyCenterInlineWarningNotice.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { useIsParentalConsentBannerActive } from "../useIsParentalConsentBannerActive.tsx";
import { useParentalConsentWarning } from "../useParentalConsentWarning.tsx";

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
  let obj = useIsParentalConsentBannerActive;
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  obj1 = useParentalConsentWarning;
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
          let formatResult = intl2.format(tmp9(2336).S5kmfO, obj);
        } else {
          const intl = tmp2(1236).intl;
          obj1 = { count: null, learnMoreHook: null };
          obj1[0] = daysRemaining;
          obj1[1] = learnMoreHook;
          formatResult = intl.format(tmp9(2336)["5jm+T3"], obj1);
        }
        obj[1] = formatResult;
        return jsx(FamilyCenterInlineWarningNoticeDefault, { style: null, text: null });
      }
    }
  }
  return null;
};