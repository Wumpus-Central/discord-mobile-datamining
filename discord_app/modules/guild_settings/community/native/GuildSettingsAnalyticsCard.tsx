// === Module 17500: GuildSettingsAnalyticsCard ===

// Module 17500 (GuildSettingsAnalyticsCard)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { card: { gap: nativeDefault.space.PX_4 }, line: null };
let obj3 = { gap: nativeDefault.space.PX_4 };
obj2.line = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsAnalyticsCard.tsx");

export default function GuildSettingsAnalyticsCard(metricKey) {
  metricKey = metricKey.metricKey;
  const description = metricKey.description;
  ({ localizedNumber, subtext } = metricKey);
  ({ title, isTrendingUp, isTrendingDown } = metricKey);
  const tmp = closure_8();
  const items = [description, metricKey];
  const callback = noop.useCallback(() => {
    if (null != description) {
      const obj2 = { key: null, content: null };
      const _HermesInternal = HermesInternal;
      obj2.key = "GUILD_ANALYTICS_METRIC_INFO_" + metricKey;
      obj2.content = tmp;
      ToastActionCreatorsDefault.open(obj2);
    }
  }, items);
  let obj = { variant: "secondary", border: "subtle", style: tmp.card, children: null };
  let obj2 = { style: tmp.line, children: null };
  const items1 = [closure_6(metricKey(4832).Text, { variant: "text-md/medium", color: "text-subtle", children: title }), ];
  let tmp7Result = null;
  if (null != description) {
    const obj3 = { onPress: callback, hitSlop: 14, accessibilityRole: "button", accessibilityLabel: description, children: null };
    const obj4 = { size: "xs", color: description(576).colors.INTERACTIVE_ICON_DEFAULT };
    obj3.children = closure_6(tmp4(4787).CircleInformationIcon, obj4);
    tmp7Result = closure_6(closure_4, obj3);
  }
  items1[1] = tmp7Result;
  obj2.children = items1;
  const items2 = [closure_7(closure_5, obj2), , ];
  let str = "text-muted";
  if (null != localizedNumber) {
    str = "text-strong";
  }
  const obj5 = { variant: "text-lg/semibold", color: str, children: null };
  if (localizedNumber == null) {
    const intl = tmp4(1115).intl;
    localizedNumber = intl.string(tmp4(1115).t.jHpxwo);
  }
  obj5.children = localizedNumber;
  items2[1] = closure_6(metricKey(4832).Text, obj5);
  let tmp3Result = null;
  if (null != subtext) {
    const obj6 = { style: tmp.line, children: null };
    let tmp7Result3 = null;
    if (isTrendingUp) {
      const obj7 = { size: "xxs", color: description(576).colors.TEXT_FEEDBACK_POSITIVE, accessible: true, accessibilityLabel: null };
      const intl2 = tmp4(1115).intl;
      obj7.accessibilityLabel = intl2.string(tmp4(1115).t["8mcccd"]);
      tmp7Result3 = closure_6(tmp4(10959).ArrowLargeUpIcon, obj7);
    }
    const items3 = [tmp7Result3, , ];
    let tmp7Result4 = null;
    if (isTrendingDown) {
      const obj8 = { size: "xxs", color: description(576).colors.TEXT_FEEDBACK_CRITICAL, accessible: true, accessibilityLabel: null };
      const intl3 = tmp4(1115).intl;
      obj8.accessibilityLabel = intl3.string(tmp4(1115).t.NLl6Q3);
      tmp7Result4 = closure_6(tmp4(17501).ArrowLargeDownIcon, obj8);
    }
    items3[1] = tmp7Result4;
    const obj9 = { variant: "text-xs/normal", color: "text-subtle", children: subtext };
    items3[2] = closure_6(tmp4(4832).Text, obj9);
    obj6.children = items3;
    tmp3Result = closure_7(closure_5, obj6);
  }
  items2[2] = tmp3Result;
  obj.children = items2;
  return closure_7(metricKey(5919).Card, obj);
};