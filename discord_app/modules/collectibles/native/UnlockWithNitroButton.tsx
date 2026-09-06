// discord_app/modules/collectibles/native/UnlockWithNitroButton.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
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
  let obj = initialize;
  const items = [CollectiblesPurchaseStore, IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPurchasingProductResult = null != isClaiming.isClaiming;
    if (!isPurchasingProductResult) {
      isPurchasingProductResult = purchasingProduct.isPurchasingProduct(ProductIds.ProductIds.GENERIC_CONSUMABLE);
    }
    return isPurchasingProductResult;
  });
  importDefault = useOpenNitroSubscribeActionSheetDefault();
  if (text == null) {
    const intl = tmp(1114).intl;
    text = intl.string(tmp(1114).t.sEAnVH);
  }
  let tmp4Result;
  if (flag) {
    obj = { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: text };
    tmp4Result = tmp4(tmp(4556).Text, obj);
  }
  obj = {
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
  obj.text = tmp6;
  obj.accessibilityLabel = text;
  let str = "md";
  if (flag) {
    str = "sm";
  }
  obj.size = str;
  obj.icon = jsx(NitroWheelIcon.NitroWheelIcon, { size: "sm", color: "white" });
  obj.onPress = function onPress() {
    if (require != null) {
      tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
    }
    closure_1();
  };
  obj.disabled = stateFromStores;
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
