// === Module 14677: FamilyCenterParentalConsentNotice ===

// Module 14677 (FamilyCenterParentalConsentNotice)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import FamilyCenterInlineWarningNoticeDefault from "FamilyCenterInlineWarningNotice" /* 14678 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
let c5 = "https://support.discord.com/hc/articles/14155060633623";
const createStyles = fn(4890);
let obj2 = { container: { marginTop: nativeDefault.space.PX_16 }, link: { textDecorationLine: "underline" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let S5kmfO = _require;
  const cResult = require("c").c(9);
  const tmp3 = closure_6();
  _require = tmp3;
  const obj = require("c");
  const isParentalConsentBannerActive = require("useIsParentalConsentBannerActive").useIsParentalConsentBannerActive();
  const obj2 = require("useIsParentalConsentBannerActive");
  const parentalConsentWarning = require("useParentalConsentWarning").useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      first(dependencyMap[8]).openURL(closure_1_5);
    };
    cResult[0] = fn;
    let onPress = fn;
  } else {
    onPress = cResult[0];
  }
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        if (cResult[1] !== tmp3.link) {
          const fn2 = function y(children, key) {
            return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress, children }, key);
          };
          cResult[1] = tmp3.link;
          cResult[2] = fn2;
          let tmp8 = fn2;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === daysRemaining) {
          if (cResult[4] === tmp8) {
            if (cResult[6] === tmp3.container) {
              if (cResult[7] === tmp9) {
                let tmp14 = cResult[8];
              }
              return tmp14;
            }
            const obj4 = { style: tmp3.container, text: cResult[5] };
            const tmp17 = jsx(onPress(14678), { style: tmp3.container, text: cResult[5] });
            cResult[6] = tmp3.container;
            cResult[7] = cResult[5];
            cResult[8] = tmp17;
            tmp14 = tmp17;
          }
        }
        if (0 === daysRemaining) {
          const intl2 = S5kmfO(1126).intl;
          S5kmfO = onPress(2493).S5kmfO;
          const obj5 = { learnMoreHook: tmp8 };
          let formatResult = intl2.format(S5kmfO, obj5);
        } else {
          const intl = S5kmfO(1126).intl;
          const obj6 = { count: daysRemaining, learnMoreHook: tmp8 };
          formatResult = intl.format(onPress(2493)["5jm+T3"], obj6);
        }
        cResult[3] = daysRemaining;
        cResult[4] = tmp8;
        cResult[5] = formatResult;
      }
    }
  }
  return null;
}) : (() => {
  const tmp = closure_6();
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
    onPress(dependencyMap[8]).openURL(closure_1_5);
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        function learnMoreHook(children, key) {
          return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress, children }, key);
        }
        const obj3 = { style: tmp.container, text: null };
        if (0 === daysRemaining) {
          const intl2 = tmp2(1126).intl;
          const obj4 = { learnMoreHook };
          let formatResult = intl2.format(tmp9(2493).S5kmfO, obj4);
        } else {
          const intl = tmp2(1126).intl;
          const obj5 = { count: daysRemaining, learnMoreHook };
          formatResult = intl.format(tmp9(2493)["5jm+T3"], obj5);
        }
        obj3.text = formatResult;
        return jsx(FamilyCenterInlineWarningNoticeDefault, { style: tmp.container, text: null });
      }
    }
  }
  return null;
});