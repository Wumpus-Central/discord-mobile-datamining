// === Module 13017: UnlockWithNitroButton ===

// Module 13017 (UnlockWithNitroButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import BaseTextButton2 from "BaseTextButton" /* 5602 */;
import ProductIds from "ProductIds" /* 6926 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13003 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 6931 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7081 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  let closure_1;
  let isClaiming;
  let onTrackPress;
  let purchasingProduct;
  let shouldShrink;
  let tmp11;
  let tmp5;
  let tmp6;
  const obj = onTrackPress(576);
  const cResult = obj.c(18);
  ({ shouldShrink, onTrackPress } = text);
  text = text.text;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore, IAPStore];
    const fn = function u() {
      const isPurchasingProductResult = null != isClaiming.isClaiming || purchasingProduct.isPurchasingProduct(onTrackPress(dependencyMap[7]).ProductIds.GENERIC_CONSUMABLE);
      return isPurchasingProductResult;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = onTrackPress(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
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
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp11) {
    let tmp14;
    let tmp18;
    if (cResult[5] === (undefined !== shouldShrink && shouldShrink)) {
      tmp14 = cResult[6];
    }
    let str = "md";
    if (undefined !== shouldShrink && shouldShrink) {
      str = "sm";
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = jsx(onTrackPress(8346).NitroWheelIcon, { size: "sm", color: "white" });
      cResult[7] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] === tmp10) {
      let tmp21;
      if (cResult[9] === onTrackPress) {
        tmp21 = cResult[10];
      }
      if (cResult[11] === tmp11) {
        if (cResult[12] === stateFromStores) {
          if (cResult[13] === tmp14) {
            if (cResult[14] === tmp17) {
              if (cResult[15] === str) {
                let tmp22;
                if (cResult[16] === tmp21) {
                  tmp22 = cResult[17];
                }
                return tmp22;
              }
            }
          }
        }
      }
      class T {
        constructor() {
          if (onTrackPress != null) {
            tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
          }
          closure_1();
        }
      }
      const tmp24 = jsx(onTrackPress(5602).BaseTextButton, { textElement: tmp14, text: tmp17, accessibilityLabel: tmp11, variant: "primary", size: str, grow: true, icon: tmp18, onPress: null, disabled: stateFromStores });
      cResult[11] = tmp11;
      cResult[12] = stateFromStores;
      cResult[13] = tmp14;
      cResult[14] = tmp17;
      cResult[15] = str;
      cResult[16] = tmp21;
      cResult[17] = tmp24;
      tmp22 = tmp24;
    }
    class T {
      constructor() {
        if (onTrackPress != null) {
          tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
        }
        closure_1();
      }
    }
    cResult[8] = tmp10;
    cResult[9] = onTrackPress;
    cResult[10] = T;
    tmp21 = T;
  }
  let tmp15;
  if (undefined !== shouldShrink && shouldShrink) {
    tmp15 = jsx(onTrackPress(4892).Text, { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: tmp11 });
  }
  cResult[4] = tmp11;
  cResult[5] = undefined !== shouldShrink && shouldShrink;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : ((shouldShrink) => {
  let closure_1;
  let isClaiming;
  let purchasingProduct;
  let text;
  let flag = shouldShrink.shouldShrink;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: require, text } = shouldShrink);
  const items = [CollectiblesPurchaseStore, IAPStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const isPurchasingProductResult = null != isClaiming.isClaiming || purchasingProduct.isPurchasingProduct(ProductIds.ProductIds.GENERIC_CONSUMABLE);
    return isPurchasingProductResult;
  });
  importDefault = useOpenNitroSubscribeActionSheetDefault();
  if (text == null) {
    const intl = intl2.intl;
    text = intl.string(intl2.t.sEAnVH);
  }
  let tmp4Result;
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  if (flag) {
    tmp4Result = jsx(Text_Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: text });
  }
  let tmp6;
  if (!flag) {
    tmp6 = text;
  }
  let str = "md";
  if (flag) {
    str = "sm";
  }
  return <BaseTextButton textElement={tmp4Result} text={tmp6} accessibilityLabel={text} variant="primary" size={str} grow icon={null} onPress={function onPress() {
    if (require != null) {
      tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
    }
    closure_1();
  }} disabled={stateFromStores} />;
});
const result = size.fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = tmp3;