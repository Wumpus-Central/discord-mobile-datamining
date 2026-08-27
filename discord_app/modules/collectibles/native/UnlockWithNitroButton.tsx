// discord_app/modules/collectibles/native/UnlockWithNitroButton.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import CollapsingText from "../../../design/components/Button/native/BaseTextButton.native.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet.tsx";
import closure_3 from "../../../stores/native/IAPStore.android.tsx";
import closure_4 from "../CollectiblesPurchaseStore.tsx";
import { ShopCtaEnum } from "../CollectiblesShopConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = function UnlockWithNitroButton(shouldShrink) {
  let flag = shouldShrink.shouldShrink;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: require, text } = shouldShrink);
  importDefault = undefined;
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
    const intl = tmp(1236).intl;
    text = intl.string(tmp(1236).t.sEAnVH);
  }
  let tmp4Result;
  if (flag) {
    obj = { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: null };
    obj[3] = text;
    tmp4Result = tmp4(tmp(4441).Text, obj);
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
      tmp(closure_1_5.UNLOCK_WITH_NITRO);
    }
    callback2();
  };
  obj[8] = stateFromStores;
  return jsx(CollapsingText.BaseTextButton, { textElement: tmp4Result, text: null, accessibilityLabel: null, variant: "primary", size: null, grow: true, icon: null, onPress: null, disabled: null });
};