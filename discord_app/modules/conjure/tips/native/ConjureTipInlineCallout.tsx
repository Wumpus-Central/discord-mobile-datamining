// === Module 12734: ConjureTipInlineCallout ===

// Module 12734 (ConjureTipInlineCallout)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import XSmallIcon from "XSmallIcon" /* 7048 */;
import IconButton from "IconButton" /* 8020 */;
import noop from "module_19" /* 19 */;

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
    const items = [children, ];
    const obj2 = { variant: "tertiary", size: "sm", icon: React3(XSmallIcon.XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.WAI6xu);
    items[1] = React3(IconButton.IconButton, obj2);
    obj.children = items;
    tmp2 = React4(View, obj);
  }
  return tmp2;
};