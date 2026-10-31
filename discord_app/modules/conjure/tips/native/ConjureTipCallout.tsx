// discord_app/modules/conjure/tips/native/ConjureTipCallout.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import ConjureTipGutterRowDefault from "ConjureTipGutterRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const firstLineInset = nativeDefault.space.PX_12 + 1;
const createStyles = fn(5014);
let obj2 = { card: { gap: nativeDefault.space.PX_4 }, title: null, actions: null, dismiss: null };
let obj3 = { gap: nativeDefault.space.PX_4 };
obj2.title = { paddingRight: nativeDefault.space.PX_32 };
let obj4 = { paddingRight: nativeDefault.space.PX_32 };
obj2.actions = { flexDirection: "row", marginTop: nativeDefault.space.PX_8 };
const rect = { position: "absolute", top: nativeDefault.space.PX_4, right: nativeDefault.space.PX_4 };
obj2.dismiss = rect;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipCallout.tsx");

export default function ConjureTipCallout(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  ({ icon, children } = onDismiss);
  const tmp = closure_7();
  const obj = { icon, tone: "brand", firstLine: "text-md/semibold", firstLineInset, children: null };
  const obj2 = { style: tmp.card, children: null };
  const items = [children];
  let tmp2Result = null;
  const tmp4 = ConjureTipGutterRowDefault;
  if (null != onDismiss) {
    const obj3 = { style: tmp.dismiss, children: null };
    const obj4 = {
      variant: "tertiary",
      size: "sm",
      icon: React4(XSmallIcon.XSmallIcon, { size: "sm" }),
      onPress: onDismiss,
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj4.accessibilityLabel = intl.string(util.t.WAI6xu);
    obj3.children = React4(IconButton.IconButton, obj4);
    tmp2Result = React4(View, obj3);
  }
  items[1] = tmp2Result;
  obj2.children = items;
  obj.children = hasOwnProperty(ConjureNativeCardSurfaceDefault, obj2);
  return React4(tmp4, obj);
}
export function ConjureTipTitle(children) {
  return React4(View, {
    style: closure_7().title,
    children: React4(Text_Text.Text, {
      variant: "text-md/semibold",
      color: "text-strong",
      accessibilityRole: "header",
      children: children.children,
    }),
  });
}
export function ConjureTipBody(children) {
  return React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
}
export function ConjureTipActions(children) {
  return React4(View, { style: closure_7().actions, children: children.children });
}
