// === Module 11997: UnlockWithNitroButton ===

// Module 11997 (UnlockWithNitroButton)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import CollapsingText from "CollapsingText" /* 4746 */;
import NitroWheelIcon from "NitroWheelIcon" /* 7988 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 9581 */;
import updateProduct from "updateProduct" /* 5319 */;
import map from "map" /* 5324 */;
import { ShopCtaEnum } from "items" /* 678 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = function UnlockWithNitroButton(shouldShrink) {
  let flag = shouldShrink.shouldShrink;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: require, text } = shouldShrink);
  let obj = initialize;
  const items = [closure_4, closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPurchasingProductResult = null != isClaiming.isClaiming;
    if (!isPurchasingProductResult) {
      isPurchasingProductResult = purchasingProduct.isPurchasingProduct(callback(table[6]).ProductIds.GENERIC_CONSUMABLE);
    }
    return isPurchasingProductResult;
  });
  importDefault = useOpenNitroSubscribeActionSheetDefault();
  if (text == null) {
    const intl = getSystemLocale.intl;
    text = intl.string(getSystemLocale.t.sEAnVH);
  }
  let tmp4Result;
  if (flag) {
    obj = { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: null };
    obj[3] = text;
    tmp4Result = jsx(Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: null });
  }
  obj = { textElement: tmp4Result, text: null, accessibilityLabel: null, variant: "primary", size: null, grow: true, icon: null, onPress: null, disabled: null };
  let tmp6;
  if (!flag) {
    tmp6 = text;
  }
  obj[1] = tmp6;
  obj[2] = text;
  let str = "md";
  if (flag) {
    str = "sm";
  }
  obj[4] = str;
  obj[6] = jsx(NitroWheelIcon.NitroWheelIcon, { size: "sm", color: "white" });
  obj[7] = function onPress() {
    if (closure_0 != null) {
      tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
    }
    callback2();
  };
  obj[8] = stateFromStores;
  return jsx(CollapsingText.BaseTextButton, { textElement: tmp4Result, text: null, accessibilityLabel: null, variant: "primary", size: null, grow: true, icon: null, onPress: null, disabled: null });
};