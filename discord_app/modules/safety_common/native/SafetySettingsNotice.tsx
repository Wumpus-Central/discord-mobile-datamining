import noop from "noop";
import { View } from "get ActivityIndicator";
import { SafetySettingsNoticeAction as closure_4 } from "SafetyToastType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { blockedIgnoredRedirect: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.xs, borderColor: require("Themes").colors.TEXT_LINK, borderWidth: 1, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_INFO };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("SafetyToastType").fileFinishedImporting("modules/safety_common/native/SafetySettingsNotice.tsx");

export default function SafetySettingsNotice(noticeType) {
  let label;
  let labelHook;
  ({ label, labelHook } = noticeType);
  noticeType = noticeType.noticeType;
  const count = noticeType.count;
  let React;
  const items = [noticeType];
  const effect = React.useEffect(() => {
    const result = labelHook(noticeType[6]).trackSafetySettingsNoticeAnalytics(noticeType, outer1_4.VIEWED);
  }, items);
  const items1 = [noticeType, labelHook];
  React = React.useCallback(() => {
    labelHook();
    const result = labelHook(noticeType[6]).trackSafetySettingsNoticeAnalytics(noticeType, outer1_4.LEARN_MORE);
  }, items1);
  let obj = { style: createCacheKey().blockedIgnoredRedirect, children: null };
  const items2 = [callback(labelHook(noticeType[7]).CircleInformationIcon, { color: "text-link" }), ];
  obj = { style: { flexShrink: 1 }, variant: "heading-sm/medium", children: null };
  if (null != count) {
    const intl2 = tmp6(tmp7[9]).intl;
    obj = { hook: null, count: null };
    obj[0] = function hook(children) {
      return outer1_5(labelHook(noticeType[8]).Text, { role: "link", variant: "heading-sm/medium", color: "text-link", onPress: noop, children });
    };
    obj[1] = count;
    let formatResult = intl2.format(label, obj);
  } else {
    const intl = tmp6(tmp7[9]).intl;
    const obj1 = { hook: null };
    obj1[0] = function hook(children) {
      return outer1_5(labelHook(noticeType[8]).Text, { role: "link", variant: "heading-sm/medium", color: "text-link", onPress: noop, children });
    };
    formatResult = intl.format(label, obj1);
  }
  obj[2] = formatResult;
  items2[1] = callback(labelHook(noticeType[8]).Text, obj);
  obj[1] = items2;
  return closure_6(View, obj);
};