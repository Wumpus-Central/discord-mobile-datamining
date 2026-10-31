// === Module 8025: InlineNotice ===

// Module 8025 (InlineNotice)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import _modDef2075 from "module_2075" /* 2075 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import Text_Text from "Text/Text" /* 5624 */;
import noop from "module_19" /* 19 */;

require = fn;
function NoticeMessageList(children) {
  ({ items, variant } = children);
  const color = children.color;
  const tmp = closure_10();
  dependencyMap = tmp;
  obj = { style: tmp.stack, children: null };
  const items1 = [
    closure_5(variant(5624).Text, { variant, color, children: children.intro }),
    closure_5(View, {
      accessibilityRole: "list",
      style: tmp.stack,
      children: items.map((children, index) => {
        obj = { style: closure_2.listItem, children: null };
        const items = [hasOwnProperty(Text_Text.Text, { variant, color, accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), hasOwnProperty(Text_Text.Text, { variant, color, style: closure_2.listItemText, children })];
        obj.children = items;
        return timestampProducer(View, obj, index);
      })
    })
  ];
  obj.children = items1;
  return closure_6(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { critical: { Icon: fn(7086).CircleErrorIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL, typeLabel: _modDef2075.uKMqrF }, warning: null, info: null, success: null };
let obj2 = { Icon: fn(7086).CircleErrorIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL, typeLabel: _modDef2075.uKMqrF };
obj.warning = { Icon: fn(8026).WarningIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING, typeLabel: _modDef2075["7vL/d/"] };
let obj3 = { Icon: fn(8026).WarningIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING, typeLabel: _modDef2075["7vL/d/"] };
obj.info = { Icon: fn(5735).CircleInformationIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO, background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, border: nativeDefault.colors.INLINENOTICE_BORDER_INFO, typeLabel: _modDef2075.BReS7U };
let obj4 = { Icon: fn(5735).CircleInformationIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO, background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, border: nativeDefault.colors.INLINENOTICE_BORDER_INFO, typeLabel: _modDef2075.BReS7U };
obj.success = { Icon: fn(7340).CircleCheckIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE, border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE, typeLabel: _modDef2075["1MXXPf"] };
const TextVariantsFlat = fn(5625).TextVariantsFlat;
let found = TextVariantsFlat.find((name) => "experimental/body-sm/normal" === name.name);
let lineHeight;
if (found != null) {
  lineHeight = found.lineHeight;
}
let createStyles = fn(5014);
let closure_9 = createStyles.createStyles((arg0, height) => {
  obj = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, backgroundColor: obj[arg0].background, borderColor: obj[arg0].border }, iconAndText: null, iconContainer: null, contents: null, copy: null, cta: null };
  const obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, backgroundColor: obj[arg0].background, borderColor: obj[arg0].border };
  obj.iconAndText = { flexDirection: "row", gap: nativeDefault.space.PX_8, flex: 1 };
  obj.iconContainer = { height, justifyContent: "center" };
  const obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, flex: 1 };
  const obj4 = { height, justifyContent: "center" };
  obj.contents = { flex: 1, gap: nativeDefault.space.PX_12 };
  const obj5 = { flex: 1, gap: nativeDefault.space.PX_12 };
  obj.copy = { gap: nativeDefault.space.PX_4 };
  obj.cta = { alignSelf: "flex-start" };
  return obj;
});
createStyles = fn(5014);
let obj8 = { stack: null, listItem: null, listItemText: null };
let obj5 = { Icon: fn(7340).CircleCheckIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE, border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE, typeLabel: _modDef2075["1MXXPf"] };
obj8.stack = { gap: nativeDefault.space.PX_4 };
let obj9 = { gap: nativeDefault.space.PX_4 };
obj8.listItem = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj8.listItemText = { flex: 1 };
let closure_10 = createStyles.createStyles(obj8);
const size = fn(2);
let result = size.fileFinishedImporting("design/mana/components/InlineNotice/InlineNotice.native.tsx");

export function InlineNotice(hidden) {
  ({ type, title, message, messageList, onDismiss, action, role } = hidden);
  hidden = hidden.hidden;
  let joined;
  obj = role(joined[12]);
  let result;
  if (null != lineHeight) {
    result = lineHeight * obj.useFontScale();
  }
  const tmp3Result = closure_9(type, result);
  ({ Icon, iconColor, typeLabel } = obj[type]);
  const intl = role(tmp2[13]).intl;
  const stringResult = intl.string(typeLabel);
  const items = [stringResult, role(joined[14]).getNodeText(title), ];
  const tmpResult = role(joined[14]);
  items[2] = role(joined[14]).getNodeText(message);
  let items1 = messageList;
  if (messageList == null) {
    items1 = [];
  }
  HermesBuiltin.arraySpread(items1.map(role(joined[14]).getNodeText), 3);
  const found = items.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  joined = found.join(", ");
  const items2 = [role, hidden, joined];
  const effect = noop.useEffect(() => {
    let isIOSResult = utils_PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = "none" !== role;
    }
    if (isIOSResult) {
      isIOSResult = !hidden;
    }
    if (isIOSResult) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      let str2 = "assertive";
      if ("status" === role) {
        str2 = "polite";
      }
      AccessibilityAnnouncer.announce(joined, str2);
    }
  }, items2);
  let tmp11Result = null;
  if (!hidden) {
    const obj2 = { style: tmp3Result.container };
    if ("alert" === role) {
      let obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
    } else if ("status" === role) {
      obj3 = { accessibilityLiveRegion: "polite" };
    } else if ("none" === role) {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    const obj4 = { style: tmp3Result.iconAndText, children: null };
    const obj5 = { style: tmp3Result.iconContainer, children: null };
    const obj6 = { size: "xs", color: iconColor, accessibilityLabel: stringResult };
    obj5.children = closure_5(Icon, obj6);
    const items3 = [closure_5(View, obj5), ];
    const obj7 = { style: tmp3Result.contents, children: null };
    const obj8 = { style: tmp3Result.copy, children: null };
    let tmp16Result = null;
    if (null != title) {
      const obj9 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
      tmp16Result = closure_5(role(tmp2[11]).Text, obj9);
    }
    const items4 = [tmp16Result, ];
    if (null != messageList) {
      const obj10 = { intro: message, items: messageList, variant: "experimental/body-sm/normal", color: "text-strong" };
      let tmp16Result4 = closure_5(NoticeMessageList, obj10);
    } else {
      const obj11 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
      tmp16Result4 = closure_5(role(tmp2[11]).Text, obj11);
    }
    items4[1] = tmp16Result4;
    obj8.children = items4;
    const items5 = [closure_6(View, obj8), ];
    let tmp16Result5 = null;
    if (null != action) {
      const obj12 = { style: tmp3Result.cta, children: null };
      ({ text: obj16.text, onPress: obj16.onPress, loading: obj16.loading } = action);
      obj12.children = closure_5(role(tmp2[17]).Button, { variant: "secondary", size: "sm", text: null, onPress: null, loading: null });
      tmp16Result5 = closure_5(View, obj12);
      const obj13 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
    }
    items5[1] = tmp16Result5;
    obj7.children = items5;
    items3[1] = closure_6(View, obj7);
    obj4.children = items3;
    const items6 = [closure_6(View, obj4), ];
    let tmp16Result6 = null;
    if (null != onDismiss) {
      const obj14 = { variant: "icon-only", size: "sm", icon: null, accessibilityLabel: null, onPress: null };
      const obj15 = { color: hidden(tmp2[4]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
      obj14.icon = closure_5(role(tmp2[19]).XSmallIcon, obj15);
      const intl2 = role(tmp2[13]).intl;
      obj14.accessibilityLabel = intl2.string(role(tmp2[13]).t.WAI6xu);
      obj14.onPress = onDismiss;
      tmp16Result6 = closure_5(role(tmp2[18]).IconButton, obj14);
    }
    items6[1] = tmp16Result6;
    obj2.children = items6;
    tmp11Result = closure_6(View, obj2);
  }
  return tmp11Result;
}