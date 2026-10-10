// === Module 13440: UnlockWithNitroButton ===

// Module 13440 (UnlockWithNitroButton)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import BaseTextButton from "BaseTextButton" /* 5380 */;
import ProductIds from "ProductIds" /* 7126 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9035 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13426 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7131 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7279 */;

require = fn;
const ShopCtaEnum = fn(1087).ShopCtaEnum;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = ReactCompilerGating.isReactCompilerEnabled() ? (function UnlockWithNitroButton(text) {
  const cResult = onTrackPress(576).c(18);
  ({ shouldShrink, onTrackPress } = text);
  text = text.text;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore, IAPStore];
    const fn = function u() {
      let isPurchasingProductResult = null != isClaiming.isClaiming;
      if (!isPurchasingProductResult) {
        isPurchasingProductResult = purchasingProduct.isPurchasingProduct(onTrackPress(dependencyMap[7]).ProductIds.GENERIC_CONSUMABLE);
      }
      return isPurchasingProductResult;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = onTrackPress(576);
  const stateFromStores = onTrackPress(504).useStateFromStores(tmp5, tmp6);
  const tmp10 = useOpenNitroSubscribeActionSheetDefault();
  importDefault = tmp10;
  if (cResult[2] !== text) {
    let stringResult = text;
    if (text == null) {
      const intl = onTrackPress(1126).intl;
      stringResult = intl.string(onTrackPress(1126).t.sEAnVH);
    }
    cResult[2] = text;
    cResult[3] = stringResult;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp11) {
    if (cResult[5] === tmp4) {
      let tmp14 = cResult[6];
    }
    let str = "md";
    if (tmp4) {
      str = "sm";
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = jsx(onTrackPress(9035).NitroWheelIcon, { size: "sm", color: "white" });
      cResult[7] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] === tmp10) {
      if (cResult[9] === onTrackPress) {
        let tmp21 = cResult[10];
      }
      if (cResult[11] === tmp11) {
        if (cResult[12] === stateFromStores) {
          if (cResult[13] === tmp14) {
            if (cResult[14] === tmp17) {
              if (cResult[15] === str) {
                if (cResult[16] === tmp21) {
                  let tmp22 = cResult[17];
                }
                return tmp22;
              }
            }
          }
        }
      }
      const obj2 = { textElement: tmp14, text: tmp17, accessibilityLabel: tmp11, variant: "primary", size: str, grow: true, icon: tmp18, onPress: null, disabled: null };
      class C {
        constructor() {
          if (onTrackPress != null) {
            tmp2 = ShopCtaEnum;
            tmpResult = tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
          }
          tmp4 = closure_1();
          return;
        }
      }
      obj2.disabled = stateFromStores;
      const tmp24 = jsx(onTrackPress(5380).BaseTextButton, { textElement: tmp14, text: tmp17, accessibilityLabel: tmp11, variant: "primary", size: str, grow: true, icon: tmp18, onPress: null, disabled: null });
      cResult[11] = tmp11;
      cResult[12] = stateFromStores;
      cResult[13] = tmp14;
      cResult[14] = tmp17;
      cResult[15] = str;
      cResult[16] = tmp21;
      cResult[17] = tmp24;
      tmp22 = tmp24;
    }
    class C {
      constructor() {
        if (onTrackPress != null) {
          tmp2 = ShopCtaEnum;
          tmpResult = tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
        }
        tmp4 = closure_1();
        return;
      }
    }
    cResult[8] = tmp10;
    cResult[9] = onTrackPress;
    cResult[10] = C;
    tmp21 = C;
  }
  let tmp15;
  if (undefined !== shouldShrink && shouldShrink) {
    const obj3 = { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: tmp11 };
    tmp15 = jsx(onTrackPress(5088).Text, { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: tmp11 });
  }
  cResult[4] = tmp11;
  cResult[5] = undefined !== shouldShrink && shouldShrink;
  cResult[6] = tmp15;
  tmp14 = tmp15;
  const tmpResult = onTrackPress(504);
}) : (function UnlockWithNitroButton(shouldShrink) {
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
});