// === Module 14497: SafetySettingsNotice ===

// Module 14497 (SafetySettingsNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import Constants from "Constants" /* 8075 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14498 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let noticeType;

let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
let closure_4 = Constants.SafetySettingsNoticeAction;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { blockedIgnoredRedirect: obj2 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.TEXT_LINK, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((noticeType) => {
  let items1;
  let label;
  let labelHook;
  let onPress;
  let tmp5;
  let tmp6;
  let obj = labelHook(noticeType[7]);
  const cResult = obj.c(17);
  ({ label, labelHook } = noticeType);
  noticeType = noticeType.noticeType;
  const count = noticeType.count;
  const tmp4 = closure_7();
  if (cResult[0] !== noticeType) {
    const fn = function k() {
      const obj = SafetySettingsUtils;
      const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
    };
    const items = [noticeType];
    cResult[0] = noticeType;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] === labelHook) {
    let tmp8;
    let tmp10;
    let tmp13;
    let formatResult;
    if (cResult[4] === noticeType) {
      tmp8 = cResult[5];
    }
    react = tmp8;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp12 = closure_5(labelHook(noticeType[9]).CircleInformationIcon, { color: "text-link" });
      cResult[6] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { flexShrink: 1 };
      cResult[7] = obj2;
      tmp13 = obj2;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === count) {
      if (cResult[9] === tmp8) {
        let tmp14;
        let tmp17;
        if (cResult[10] === label) {
          tmp14 = cResult[11];
        }
        if (cResult[12] !== tmp14) {
          const obj3 = { style: tmp13, variant: "heading-sm/medium", children: tmp14 };
          const tmp19 = closure_5(labelHook(noticeType[11]).Text, obj3);
          cResult[12] = tmp14;
          cResult[13] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[13];
        }
        if (cResult[14] === tmp4.blockedIgnoredRedirect) {
          let tmp20;
          if (cResult[15] === tmp17) {
            tmp20 = cResult[16];
          }
          return tmp20;
        }
        const obj4 = { style: tmp4.blockedIgnoredRedirect, children: items1 };
        items1 = [tmp10, tmp17];
        const tmp23 = closure_6(View, obj4);
        cResult[14] = tmp4.blockedIgnoredRedirect;
        cResult[15] = tmp17;
        cResult[16] = tmp23;
        tmp20 = tmp23;
      }
    }
    if (null != count) {
      const intl2 = labelHook(tmp2[10]).intl;
      const obj5 = {
        hook(children) {
              const obj = { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children };
              return hasOwnProperty(Text_Text.Text, obj);
            },
        count
      };
      formatResult = intl2.format(label, obj5);
    } else {
      const intl = labelHook(tmp2[10]).intl;
      const obj6 = {
        hook(children) {
              const obj = { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children };
              return hasOwnProperty(Text_Text.Text, obj);
            }
      };
      formatResult = intl.format(label, obj6);
    }
    cResult[8] = count;
    cResult[9] = tmp8;
    cResult[10] = label;
    cResult[11] = formatResult;
    tmp14 = formatResult;
  }
  const fn2 = function h() {
    labelHook();
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
  };
  cResult[3] = labelHook;
  cResult[4] = noticeType;
  cResult[5] = fn2;
  tmp8 = fn2;
}) : ((noticeType) => {
  let formatResult;
  let items2;
  let label;
  let labelHook;
  let onPress;
  ({ label, labelHook } = noticeType);
  noticeType = noticeType.noticeType;
  const count = noticeType.count;
  react = undefined;
  const items = [noticeType];
  const tmp = closure_7();
  const effect = react.useEffect(() => {
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
  }, items);
  const items1 = [noticeType, labelHook];
  react = react.useCallback(() => {
    labelHook();
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
  }, items1);
  let obj = { style: tmp.blockedIgnoredRedirect, children: items2 };
  items2 = [closure_5(labelHook(noticeType[9]).CircleInformationIcon, { color: "text-link" }), ];
  const obj2 = { style: { flexShrink: 1 }, variant: "heading-sm/medium", children: formatResult };
  const Text = labelHook(noticeType[11]).Text;
  if (null != count) {
    const intl2 = labelHook(tmp7[10]).intl;
    const obj3 = {
      hook(children) {
          const obj = { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children };
          return hasOwnProperty(Text_Text.Text, obj);
        },
      count
    };
    formatResult = intl2.format(label, obj3);
  } else {
    const intl = labelHook(tmp7[10]).intl;
    const obj4 = {
      hook(children) {
          const obj = { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = intl.format(label, obj4);
  }
  items2[1] = closure_5(Text, obj2);
  return closure_6(View, obj);
});
let result = size.fileFinishedImporting("modules/safety_common/native/SafetySettingsNotice.tsx");

export default tmp3;