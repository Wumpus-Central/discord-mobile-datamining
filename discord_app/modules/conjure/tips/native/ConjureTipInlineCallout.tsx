// discord_app/modules/conjure/tips/native/ConjureTipInlineCallout.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { dismissible: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipInlineCallout.tsx");

export default function ConjureTipInlineCallout(arg0) {
  ({ onDismiss, children } = arg0);
  let tmp2 = children;
  if (null != onDismiss) {
    const obj = { style: tmp.dismissible, children: null };
    const items = [children];
    const obj2 = {
      variant: "tertiary",
      size: "sm",
      icon: React3(XSmallIcon.XSmallIcon, { size: "sm" }),
      onPress: onDismiss,
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.WAI6xu);
    items[1] = React3(IconButton.IconButton, obj2);
    obj.children = items;
    tmp2 = React4(View, obj);
  }
  return tmp2;
}
