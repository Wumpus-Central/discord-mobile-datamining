// discord_app/modules/conjure/tips/native/ConjureTipHint.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ConjureTipGutterRowDefault from "ConjureTipGutterRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "text-sm/normal";
const createStyles = fn(5014);
let obj2 = {
  line: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 },
  text: { flexShrink: 1 },
  dismiss: null,
};
let obj3 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj2.dismiss = { height: fn(5624).TextStyleSheet["text-sm/normal"].lineHeight, justifyContent: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipHint.tsx");

export default function ConjureTipHint(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  ({ icon, children } = onDismiss);
  const tmp = closure_7();
  const obj = { icon, tone: "muted", firstLine: textsmnormal, children: null };
  const obj2 = { style: tmp.line, children: null };
  const obj3 = {
    style: tmp.text,
    children: React4(Text_Text.Text, { variant: textsmnormal, color: "text-muted", children }),
  };
  const items = [React4(View, obj3)];
  let tmp2Result = null;
  if (null != onDismiss) {
    const obj5 = { style: tmp.dismiss, children: null };
    const obj6 = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
    const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    obj6.icon = React4(XSmallIcon.XSmallIcon, obj7);
    obj6.onPress = onDismiss;
    const intl = util.intl;
    obj6.accessibilityLabel = intl.string(util.t.WAI6xu);
    obj5.children = React4(IconButton.IconButton, obj6);
    tmp2Result = React4(View, obj5);
  }
  items[1] = tmp2Result;
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(ConjureTipGutterRowDefault, obj);
}
