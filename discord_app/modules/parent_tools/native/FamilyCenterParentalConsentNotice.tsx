// === Module 14681: FamilyCenterParentalConsentNotice ===

// Module 14681 (FamilyCenterParentalConsentNotice)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import FamilyCenterInlineWarningNoticeDefault from "FamilyCenterInlineWarningNotice" /* 14682 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let obj2;
const jsx = Fragment.jsx;
let c5 = "https://support.discord.com/hc/articles/14155060633623";
let obj = { container: obj2, link: { textDecorationLine: "underline" } };
obj2 = { marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let link;
  let onPress;
  let obj = require("react");
  const cResult = obj.c(9);
  const tmp4 = closure_6();
  _require = tmp4;
  const obj2 = require("useIsParentalConsentBannerActive");
  const isParentalConsentBannerActive = obj2.useIsParentalConsentBannerActive();
  const obj3 = require("useParentalConsentWarning");
  const parentalConsentWarning = obj3.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = first(dependencyMap[8]);
      obj.openURL(closure_1_5);
    };
    cResult[0] = fn;
    onPress = fn;
  } else {
    onPress = cResult[0];
  }
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        let tmp9;
        let formatResult;
        if (cResult[1] !== tmp4.link) {
          const fn2 = function y(children, key) {
            return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress, children }, key);
          };
          cResult[1] = tmp4.link;
          cResult[2] = fn2;
          tmp9 = fn2;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === daysRemaining) {
          let tmp10;
          if (cResult[4] === tmp9) {
            tmp10 = cResult[5];
          }
          if (cResult[6] === tmp4.container) {
            let tmp14;
            if (cResult[7] === tmp10) {
              tmp14 = cResult[8];
            }
            return tmp14;
          }
          const tmp17 = jsx(onPress(14682), { style: tmp4.container, text: tmp10 });
          cResult[6] = tmp4.container;
          cResult[7] = tmp10;
          cResult[8] = tmp17;
          tmp14 = tmp17;
        }
        if (0 === daysRemaining) {
          const intl2 = tmp(1126).intl;
          const obj5 = { learnMoreHook: tmp9 };
          formatResult = intl2.format(onPress(2493).S5kmfO, obj5);
        } else {
          const intl = tmp(1126).intl;
          const obj6 = { count: daysRemaining, learnMoreHook: tmp9 };
          formatResult = intl.format(onPress(2493)["5jm+T3"], obj6);
        }
        cResult[3] = daysRemaining;
        cResult[4] = tmp9;
        cResult[5] = formatResult;
        tmp10 = formatResult;
      }
    }
  }
  return null;
}) : (() => {
  let link;
  let onPress;
  const tmp = closure_6();
  _require = tmp;
  let obj = require("useIsParentalConsentBannerActive");
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  const obj2 = require("useParentalConsentWarning");
  const parentalConsentWarning = obj2.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  importDefault = react.useCallback(() => {
    const obj = onPress(dependencyMap[8]);
    obj.openURL(closure_1_5);
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        let formatResult;
        function learnMoreHook(children, key) {
          return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress, children }, key);
        }
        FamilyCenterInlineWarningNoticeDefault;
        if (0 === daysRemaining) {
          const intl2 = tmp2(1126).intl;
          const obj4 = { learnMoreHook };
          formatResult = intl2.format(tmp9(2493).S5kmfO, obj4);
        } else {
          const intl = tmp2(1126).intl;
          const obj5 = { count: daysRemaining, learnMoreHook };
          formatResult = intl.format(tmp9(2493)["5jm+T3"], obj5);
        }
        return <tmp10 style={tmp.container} text={formatResult} />;
      }
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default tmp2;