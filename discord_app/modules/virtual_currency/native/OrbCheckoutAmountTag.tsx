// === Module 11012: OrbCheckoutAmountTag ===

// Module 11012 (OrbCheckoutAmountTag)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import OrbsIcon from "OrbsIcon" /* 8837 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

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
  const items = [React3(OrbsIcon.OrbsIcon, obj), ];
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
};