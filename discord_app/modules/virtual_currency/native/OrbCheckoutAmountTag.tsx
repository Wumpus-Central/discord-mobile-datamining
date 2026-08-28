// === Module 10691: OrbCheckoutAmountTag ===

// Module 10691 (OrbCheckoutAmountTag)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4442 */;
import OrbsIcon from "OrbsIcon" /* 10692 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { orbAmountTag: null, orbsIcon: null };
obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[0] = obj;
obj[1] = { width: 14, height: 14 };
let closure_5 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default function OrbCheckoutAmountTag(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback2();
  let obj = { style: tmp.orbAmountTag, children: null };
  obj = { size: "custom", color: "icon-strong", style: tmp.orbsIcon };
  const items = [callback(OrbsIcon.OrbsIcon, obj), ];
  if (null == orbAmount) {
    const intl2 = tmp5(1236).intl;
    let stringResult = intl2.string(tmp5(1236).t.pfChQr);
  } else {
    const intl = tmp5(1236).intl;
    obj = { orbAmount: null };
    obj[0] = orbAmount;
    stringResult = intl.formatToPlainString(tmp5(1236).t.W4DfeF, obj);
  }
  obj1 = { variant: "text-md/semibold", accessibilityLabel: stringResult, children: null };
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  obj1[2] = str;
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  return closure_4(View, obj);
};