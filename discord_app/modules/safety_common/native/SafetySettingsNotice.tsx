// === Module 14687: SafetySettingsNotice ===

// Module 14687 (SafetySettingsNotice)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14688 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(8399).SafetySettingsNoticeAction;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { blockedIgnoredRedirect: null };
createStyles = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.TEXT_LINK, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
createStyles.blockedIgnoredRedirect = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
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
  let obj = { style: closure_7().blockedIgnoredRedirect, children: null };
  const items2 = [closure_5(labelHook(noticeType[7]).CircleInformationIcon, { color: "text-link" }), ];
  obj = { style: { flexShrink: 1 }, variant: "heading-sm/medium", children: null };
  if (null != count) {
    const intl2 = labelHook(tmp7[9]).intl;
    obj = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children });
        },
      count
    };
    let formatResult = intl2.format(label, obj);
  } else {
    const intl = labelHook(tmp7[9]).intl;
    const obj1 = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children });
        }
    };
    formatResult = intl.format(label, obj1);
  }
  obj.children = formatResult;
  items2[1] = closure_5(labelHook(noticeType[8]).Text, obj);
  obj.children = items2;
  return closure_6(View, obj);
};