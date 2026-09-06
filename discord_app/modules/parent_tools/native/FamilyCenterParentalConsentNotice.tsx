// === Module 14873: FamilyCenterParentalConsentNotice ===

// Module 14873 (FamilyCenterParentalConsentNotice)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import FamilyCenterInlineWarningNoticeDefault from "FamilyCenterInlineWarningNotice" /* 14874 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, link: null };
createStyles = { marginTop: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.link = { textDecorationLine: "underline" };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default function FamilyCenterParentalConsentNotice() {
  const tmp = closure_5();
  _require = tmp;
  let obj = require("useIsParentalConsentBannerActive");
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  let obj1 = require("useParentalConsentWarning");
  const parentalConsentWarning = obj1.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  importDefault = noop.useCallback(() => {
    onPress(dependencyMap[6]).openURL("https://support.discord.com/hc/articles/14155060633623");
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        function learnMoreHook(children, key) {
          return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress, children }, key);
        }
        obj = { style: tmp.container, text: null };
        if (0 === daysRemaining) {
          const intl2 = tmp2(1114).intl;
          obj = { learnMoreHook };
          let formatResult = intl2.format(tmp9(2396).S5kmfO, obj);
        } else {
          const intl = tmp2(1114).intl;
          obj1 = { count: daysRemaining, learnMoreHook };
          formatResult = intl.format(tmp9(2396)["5jm+T3"], obj1);
        }
        obj.text = formatResult;
        return jsx(FamilyCenterInlineWarningNoticeDefault, { style: tmp.container, text: null });
      }
    }
  }
  return null;
};