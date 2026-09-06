// discord_app/modules/virtual_currency/native/OrbCheckoutAmountTag.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { orbAmountTag: null, orbsIcon: null };
obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.orbAmountTag = obj;
obj.orbsIcon = { width: 14, height: 14 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default function OrbCheckoutAmountTag(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_5();
  let obj = { style: tmp.orbAmountTag, children: null };
  obj = { size: "custom", color: "icon-strong", style: tmp.orbsIcon };
  const items = [React3(OrbsIcon.OrbsIcon, obj)];
  if (null == orbAmount) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.pfChQr);
  } else {
    const intl = util.intl;
    obj = { orbAmount };
    stringResult = intl.formatToPlainString(util.t.W4DfeF, obj);
  }
  const obj1 = { variant: "text-md/semibold", accessibilityLabel: stringResult, children: null };
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  obj1.children = str;
  items[1] = React3(Text_Text.Text, obj1);
  obj.children = items;
  return React4(View, obj);
}
