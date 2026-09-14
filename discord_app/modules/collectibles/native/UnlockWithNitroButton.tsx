// discord_app/modules/collectibles/native/UnlockWithNitroButton.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BaseTextButton from "../../../design/components/Button/native/BaseTextButton.native.tsx";
import ProductIds from "../../premium/native/ProductIds.android.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

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
    tmp4Result = jsx(Text_Text.Text, {
      variant: "text-xs/semibold",
      color: "text-overlay-light",
      allowFontScaling: false,
      children: text,
    });
  }
  const obj3 = {
    textElement: tmp4Result,
    text: null,
    accessibilityLabel: null,
    variant: "primary",
    size: null,
    grow: true,
    icon: null,
    onPress: null,
    disabled: null,
  };
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
  return jsx(BaseTextButton.BaseTextButton, {
    textElement: tmp4Result,
    text: null,
    accessibilityLabel: null,
    variant: "primary",
    size: null,
    grow: true,
    icon: null,
    onPress: null,
    disabled: null,
  });
};
