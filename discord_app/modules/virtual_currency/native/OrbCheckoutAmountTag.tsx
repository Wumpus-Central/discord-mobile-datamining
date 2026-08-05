// discord_app/modules/virtual_currency/native/OrbCheckoutAmountTag.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { OrbsIcon } from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { orbAmountTag: null, orbsIcon: null };
obj = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
obj[0] = obj;
obj[1] = { width: 14, height: 14 };
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

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
  const obj1 = { variant: "text-md/semibold", accessibilityLabel: stringResult, children: null };
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  obj1[2] = str;
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  return closure_4(View, obj);
};