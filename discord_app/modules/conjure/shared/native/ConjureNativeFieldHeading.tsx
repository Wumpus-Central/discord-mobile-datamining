// discord_app/modules/conjure/shared/native/ConjureNativeFieldHeading.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureNativeLinkedTextDefault from "ConjureNativeLinkedText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj2 = { heading: { gap: nativeDefault.space.PX_4 }, labelRow: null, label: null, status: null };
const obj3 = { gap: nativeDefault.space.PX_4 };
obj2.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.label = { flexShrink: 1 };
obj2.status = { marginStart: "auto" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeFieldHeading.tsx");

export default function ConjureNativeFieldHeading(children) {
  ({ help, optional } = children);
  if (optional === undefined) {
    optional = false;
  }
  const status = children.status;
  const tmp = closure_6();
  const obj = { style: tmp.heading, children: null };
  const obj2 = { style: tmp.labelRow, children: null };
  items = [
    React4(Text_Text.Text, {
      variant: "body-sm/semibold",
      color: "text-strong",
      style: tmp.label,
      children: children.label,
    }),
    ,
  ];
  let tmp4Result = null;
  if (optional) {
    const obj4 = { variant: "body-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    obj4.children = intl.string(_modDef4245["3q5CYS"]);
    tmp4Result = React4(Text_Text.Text, obj4);
  }
  items[1] = tmp4Result;
  let tmp4Result3 = null;
  if (null != status) {
    const obj5 = { style: tmp.status, children: status };
    tmp4Result3 = React4(View, obj5);
  }
  items[2] = tmp4Result3;
  obj2.children = items;
  const items1 = [hasOwnProperty(View, obj2)];
  let tmp4Result4 = null;
  if (null != help) {
    tmp4Result4 = null;
    if ("" !== help) {
      const obj6 = { text: help, variant: "body-sm/normal", color: "text-subtle", shortLinks: true };
      tmp4Result4 = React4(ConjureNativeLinkedTextDefault, obj6);
    }
  }
  items1[1] = tmp4Result4;
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
export function conjureFieldAccessibilityLabel(label, arg1) {
  let combined = label;
  if (arg1) {
    const intl = util.intl;
    const _HermesInternal = HermesInternal;
    combined = "" + label + ", " + intl.string(_modDef4245["3q5CYS"]);
  }
  return combined;
}
