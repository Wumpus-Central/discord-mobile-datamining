// === Module 13299: UnlockWithNitroButton ===

// Module 13299 (UnlockWithNitroButton)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4635 */;
import BaseTextButton from "BaseTextButton" /* 5060 */;
import ProductIds from "ProductIds" /* 7347 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8788 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13286 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7344 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7664 */;

require = fn;
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = function UnlockWithNitroButton(shouldShrink) {
  let flag = shouldShrink.shouldShrink;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: require, text } = shouldShrink);
  const items = [CollectiblesPurchaseStore, IAPStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    let isPurchasingProductResult = null != isClaiming.isClaiming;
    if (!isPurchasingProductResult) {
      isPurchasingProductResult = purchasingProduct.isPurchasingProduct(ProductIds.ProductIds.GENERIC_CONSUMABLE);
    }
    return isPurchasingProductResult;
  });
  importDefault = useOpenNitroSubscribeActionSheetDefault();
  if (text == null) {
    const intl = util.intl;
    text = intl.string(util.t.sEAnVH);
  }
  let tmp4Result;
  if (flag) {
    const obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: text };
    tmp4Result = jsx(Text_Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: text });
  }
  const obj3 = { textElement: tmp4Result, text: null, accessibilityLabel: null, variant: "primary", size: null, grow: true, icon: null, onPress: null, disabled: null };
  let tmp6;
  if (!flag) {
    tmp6 = text;
  }
  obj3.text = tmp6;
  obj3.accessibilityLabel = text;
  let str = "md";
  if (flag) {
    str = "sm";
  }
  obj3.size = str;
  obj3.icon = jsx(NitroWheelIcon.NitroWheelIcon, { size: "sm", color: "white" });
  obj3.onPress = function onPress() {
    if (require != null) {
      tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
    }
    closure_1();
  };
  obj3.disabled = stateFromStores;
  return jsx(BaseTextButton.BaseTextButton, { textElement: tmp4Result, text: null, accessibilityLabel: null, variant: "primary", size: null, grow: true, icon: null, onPress: null, disabled: null });
};