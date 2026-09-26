// === Module 14246: SafetySettingsNotice ===

// Module 14246 (SafetySettingsNotice)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14247 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(7847).SafetySettingsNoticeAction;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj2 = { blockedIgnoredRedirect: { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.TEXT_LINK, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_common/native/SafetySettingsNotice.tsx");

export default function SafetySettingsNotice(noticeType) {
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
  const items2 = [closure_5(labelHook(noticeType[7]).CircleInformationIcon, { color: "text-link" }), ];
  const obj2 = { style: { flexShrink: 1 }, variant: "heading-sm/medium", children: null };
  if (null != count) {
    const intl2 = labelHook(tmp7[9]).intl;
    const obj3 = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children });
        },
      count
    };
    let formatResult = intl2.format(label, obj3);
  } else {
    const intl = labelHook(tmp7[9]).intl;
    const obj4 = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children });
        }
    };
    formatResult = intl.format(label, obj4);
  }
  obj2.children = formatResult;
  items2[1] = closure_5(labelHook(noticeType[8]).Text, obj2);
  obj.children = items2;
  return closure_6(View, obj);
};