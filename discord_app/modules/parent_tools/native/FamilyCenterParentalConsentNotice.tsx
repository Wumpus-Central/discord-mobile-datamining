// discord_app/modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FamilyCenterInlineWarningNoticeDefault from "FamilyCenterInlineWarningNotice.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
const obj2 = { container: { marginTop: nativeDefault.space.PX_16 }, link: { textDecorationLine: "underline" } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default function FamilyCenterParentalConsentNotice() {
  const tmp = closure_5();
  _require = tmp;
  const isParentalConsentBannerActive = require("useIsParentalConsentBannerActive").useIsParentalConsentBannerActive();
  const obj = require("useIsParentalConsentBannerActive");
  const parentalConsentWarning = require("useParentalConsentWarning").useParentalConsentWarning();
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
          return jsx(
            Text_Text.Text,
            {
              variant: "text-sm/medium",
              color: "text-strong",
              style: link.link,
              accessibilityRole: "link",
              onPress,
              children,
            },
            key,
          );
        }
        const obj3 = { style: tmp.container, text: null };
        if (0 === daysRemaining) {
          const intl2 = tmp2(1115).intl;
          const obj4 = { learnMoreHook };
          let formatResult = intl2.format(tmp9(2487).S5kmfO, obj4);
        } else {
          const intl = tmp2(1115).intl;
          const obj5 = { count: daysRemaining, learnMoreHook };
          formatResult = intl.format(tmp9(2487)["5jm+T3"], obj5);
        }
        obj3.text = formatResult;
        return jsx(FamilyCenterInlineWarningNoticeDefault, { style: tmp.container, text: null });
      }
    }
  }
  return null;
}
