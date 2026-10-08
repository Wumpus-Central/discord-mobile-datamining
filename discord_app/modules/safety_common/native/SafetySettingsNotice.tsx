// discord_app/modules/safety_common/native/SafetySettingsNotice.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SafetySettingsUtils from "../SafetySettingsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(7015).SafetySettingsNoticeAction;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  blockedIgnoredRedirect: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
    padding: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.xs,
    borderColor: nativeDefault.colors.TEXT_LINK,
    borderWidth: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
  },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
  borderColor: nativeDefault.colors.TEXT_LINK,
  borderWidth: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_common/native/SafetySettingsNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SafetySettingsNotice(noticeType) {
      const cResult = labelHook(noticeType[7]).c(17);
      ({ label, labelHook } = noticeType);
      noticeType = noticeType.noticeType;
      const count = noticeType.count;
      const tmp4 = closure_7();
      if (cResult[0] !== noticeType) {
        const fn = function k() {
          const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
        };
        const items = [noticeType];
        cResult[0] = noticeType;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[3] === labelHook) {
        if (cResult[4] === noticeType) {
          let tmp8 = cResult[5];
        }
        noop = tmp8;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp12 = closure_5(labelHook(tmp2[9]).CircleInformationIcon, { color: "text-link" });
          cResult[6] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[6];
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { flexShrink: 1 };
          cResult[7] = obj2;
          let tmp13 = obj2;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] === count) {
          if (cResult[9] === tmp8) {
            if (cResult[10] === label) {
              if (cResult[12] !== cResult[11]) {
                const obj3 = { style: tmp13, variant: "heading-sm/medium", children: tmp14 };
                const tmp20 = closure_5(labelHook(tmp2[11]).Text, obj3);
                cResult[12] = tmp14;
                cResult[13] = tmp20;
                let tmp18 = tmp20;
              } else {
                tmp18 = cResult[13];
              }
              if (cResult[14] === tmp4.blockedIgnoredRedirect) {
                if (cResult[15] === tmp18) {
                  let tmp21 = cResult[16];
                }
                return tmp21;
              }
              const obj4 = { style: tmp4.blockedIgnoredRedirect, children: null };
              const items1 = [tmp10, tmp18];
              obj4.children = items1;
              const tmp24 = closure_6(View, obj4);
              cResult[14] = tmp4.blockedIgnoredRedirect;
              cResult[15] = tmp18;
              cResult[16] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
        if (null != count) {
          const intl2 = labelHook(tmp2[10]).intl;
          const obj5 = {
            hook(children) {
              return hasOwnProperty(Text_Text.Text, {
                role: "link",
                variant: "heading-sm/medium",
                color: "text-link",
                onPress,
                children,
              });
            },
            count,
          };
          let formatResult = intl2.format(label, obj5);
        } else {
          const intl = labelHook(tmp2[10]).intl;
          const obj6 = {
            hook(children) {
              return hasOwnProperty(Text_Text.Text, {
                role: "link",
                variant: "heading-sm/medium",
                color: "text-link",
                onPress,
                children,
              });
            },
          };
          formatResult = intl.format(label, obj6);
        }
        cResult[8] = count;
        cResult[9] = tmp8;
        cResult[10] = label;
        cResult[11] = formatResult;
      }
      const fn2 = function h() {
        labelHook();
        const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
      };
      cResult[3] = labelHook;
      cResult[4] = noticeType;
      cResult[5] = fn2;
      tmp8 = fn2;
      const obj = labelHook(noticeType[7]);
    }
  : function SafetySettingsNotice(noticeType) {
      ({ label, labelHook } = noticeType);
      noticeType = noticeType.noticeType;
      const count = noticeType.count;
      noop = undefined;
      const items = [noticeType];
      const effect = noop.useEffect(() => {
        const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
      }, items);
      const items1 = [noticeType, labelHook];
      noop = noop.useCallback(() => {
        labelHook();
        const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
      }, items1);
      const obj = { style: closure_7().blockedIgnoredRedirect, children: null };
      const items2 = [closure_5(labelHook(noticeType[9]).CircleInformationIcon, { color: "text-link" })];
      const obj2 = { style: { flexShrink: 1 }, variant: "heading-sm/medium", children: null };
      if (null != count) {
        const intl2 = labelHook(tmp7[10]).intl;
        const obj3 = {
          hook(children) {
            return hasOwnProperty(Text_Text.Text, {
              role: "link",
              variant: "heading-sm/medium",
              color: "text-link",
              onPress,
              children,
            });
          },
          count,
        };
        let formatResult = intl2.format(label, obj3);
      } else {
        const intl = labelHook(tmp7[10]).intl;
        const obj4 = {
          hook(children) {
            return hasOwnProperty(Text_Text.Text, {
              role: "link",
              variant: "heading-sm/medium",
              color: "text-link",
              onPress,
              children,
            });
          },
        };
        formatResult = intl.format(label, obj4);
      }
      obj2.children = formatResult;
      items2[1] = closure_5(labelHook(noticeType[11]).Text, obj2);
      obj.children = items2;
      return closure_6(View, obj);
    };
