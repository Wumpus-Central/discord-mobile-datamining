// discord_app/modules/virtual_currency/native/OrbCheckoutAmountTag.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[0] = obj;
obj[1] = { width: 14, height: 14 };
let closure_5 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default function OrbCheckoutAmountTag(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback2();
  let obj = { size: "custom", color: "icon-strong", style: tmp.orbsIcon };
  const items = [callback(OrbsIcon.OrbsIcon, obj), ];
  if (null == orbAmount) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.pfChQr);
  } else {
    const intl = getSystemLocale.intl;
    obj = { orbAmount: null };
    obj[0] = orbAmount;
    stringResult = intl.formatToPlainString(getSystemLocale.t.W4DfeF, obj);
  }
  obj1 = { variant: "text-md/semibold", accessibilityLabel: stringResult, children: null };
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  obj1[2] = str;
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  return callback(View, obj);
};