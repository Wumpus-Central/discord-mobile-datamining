// === Module 8498: CollectiblesShopCardAssetTileV2 ===

// Module 8498 (CollectiblesShopCardAssetTileV2)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1088 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import useToken from "useToken" /* 4580 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import LockIcon from "LockIcon" /* 5879 */;
import FastImageDefault from "FastImage" /* 5974 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import useShopProductItems from "useShopProductItems" /* 7842 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8418 */;
import useDefaultVariantIndex from "useDefaultVariantIndex" /* 8419 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8451 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8453 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8455 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8466 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8478 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8480 */;
import _modDef8499 from "module_8499" /* 8499 */;
import FractionalNitroCoinIllustration2 from "FractionalNitroCoinIllustration" /* 8500 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
({ View: hasOwnProperty, StyleSheet } = react_native);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const diff = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
let c9 = diff;
let createStyles = createStyles_mod;
let obj = { assetContainer: size, overlayContainer: obj2, profileEffectContainer: size1, profileFrameContainer: { width: "100%", height: diff, alignItems: "center" }, externalProductImage: { width: 80, height: 80, resizeMode: "contain" }, purchasedOrDisabled: { opacity: 0.4 }, overlayIcon: obj3 };
size = { display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "100%", width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3 = { position: "absolute", opacity: 1, color: nativeDefault.colors.ICON_STRONG, fontWeight: "bold" };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_10();
  if (cResult[0] !== tmp4.overlayIcon) {
    const obj2 = { size: "lg", style: tmp4.overlayIcon };
    const tmp7 = metroImportDefault(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj2);
    cResult[0] = tmp4.overlayIcon;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.overlayContainer) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { style: tmp4.overlayContainer, children: tmp5 };
  const tmp9 = metroImportDefault(hasOwnProperty, obj3);
  cResult[2] = tmp4.overlayContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (() => {
  let obj2;
  const tmp = closure_10();
  const obj = { style: tmp.overlayContainer, children: metroImportDefault(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj2) };
  obj2 = { size: "lg", style: tmp.overlayIcon };
  return metroImportDefault(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_10();
  if (cResult[0] !== tmp4.overlayIcon) {
    const obj2 = { size: "lg", style: tmp4.overlayIcon };
    const tmp7 = metroImportDefault(LockIcon.LockIcon, obj2);
    cResult[0] = tmp4.overlayIcon;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.overlayContainer) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { style: tmp4.overlayContainer, children: tmp5 };
  const tmp9 = metroImportDefault(hasOwnProperty, obj3);
  cResult[2] = tmp4.overlayContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (() => {
  let obj2;
  const tmp = closure_10();
  const obj = { style: tmp.overlayContainer, children: metroImportDefault(LockIcon.LockIcon, obj2) };
  obj2 = { size: "lg", style: tmp.overlayIcon };
  return metroImportDefault(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((isDisabled) => {
  let cardWidth;
  let disableBundleStaticBackground;
  let isPurchased;
  let muteBundleStaticBackground;
  let product;
  const obj = react2;
  const cResult = obj.c(14);
  ({ product, isPurchased, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = isDisabled);
  isDisabled = isDisabled.isDisabled;
  const tmp4 = closure_10();
  const obj2 = CollectiblesProductUtils;
  const productType = obj2.getProductType(product);
  if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    let str;
    let tmp6;
    if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
      str = "75%";
    }
    if (!isPurchased) {
      isPurchased = isDisabled;
    }
    if (isPurchased) {
      isPurchased = tmp4.purchasedOrDisabled;
    }
    if (cResult[0] !== str) {
      const obj3 = { height: str };
      cResult[0] = str;
      cResult[1] = obj3;
      tmp6 = obj3;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === tmp4.overlayContainer) {
      if (cResult[3] === isPurchased) {
        let tmp7;
        if (cResult[4] === tmp6) {
          tmp7 = cResult[5];
        }
        if (cResult[6] === cardWidth) {
          if (cResult[7] === disableBundleStaticBackground) {
            if (cResult[8] === muteBundleStaticBackground) {
              let tmp8;
              if (cResult[9] === product) {
                tmp8 = cResult[10];
              }
              if (cResult[11] === tmp7) {
                let tmp12;
                if (cResult[12] === tmp8) {
                  tmp12 = cResult[13];
                }
                return tmp12;
              }
              const obj4 = { style: tmp7, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: tmp8 };
              const tmp15 = metroImportDefault(hasOwnProperty, obj4);
              cResult[11] = tmp7;
              cResult[12] = tmp8;
              cResult[13] = tmp15;
              tmp12 = tmp15;
            }
          }
        }
        const obj5 = { product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
        const tmp11 = metroImportDefault(closure_14, obj5);
        cResult[6] = cardWidth;
        cResult[7] = disableBundleStaticBackground;
        cResult[8] = muteBundleStaticBackground;
        cResult[9] = product;
        cResult[10] = tmp11;
        tmp8 = tmp11;
      }
    }
    const items = [tmp4.overlayContainer, isPurchased, tmp6];
    cResult[2] = tmp4.overlayContainer;
    cResult[3] = isPurchased;
    cResult[4] = tmp6;
    cResult[5] = items;
    tmp7 = items;
  }
  str = "100%";
}) : ((arg0) => {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let muteBundleStaticBackground;
  let obj4;
  let product;
  ({ product, isPurchased } = arg0);
  ({ isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const tmp = closure_10();
  const obj = CollectiblesProductUtils;
  const productType = obj.getProductType(product);
  if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    let str;
    if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
      str = "75%";
    }
    const items = [tmp.overlayContainer, , ];
    if (!isPurchased) {
      isPurchased = isDisabled;
    }
    if (isPurchased) {
      isPurchased = tmp.purchasedOrDisabled;
    }
    items[1] = isPurchased;
    const obj3 = { height: str };
    items[2] = obj3;
    const obj2 = { style: items, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: metroImportDefault(closure_14, obj4) };
    obj4 = { product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
    return metroImportDefault(hasOwnProperty, obj2);
  }
  str = "100%";
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let cardWidth;
  let disableBundleStaticBackground;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let muteBundleStaticBackground;
  let product;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(29);
  ({ product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const tmp4 = closure_10();
  const obj2 = useShopProductItems;
  const shopProductItems = obj2.useShopProductItems(product);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  if (cardWidth == null) {
    cardWidth = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (cResult[0] !== cardWidth) {
    size = { width: cardWidth, height: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT };
    cResult[0] = cardWidth;
    cResult[1] = size;
    tmp6 = size;
  } else {
    tmp6 = cResult[1];
  }
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    if (cResult[2] === tmp6) {
      if (cResult[3] === disableBundleStaticBackground) {
        if (cResult[4] === firstAvatarDecoration) {
          if (cResult[5] === firstNameplate) {
            if (cResult[6] === firstProfileEffect) {
              if (cResult[7] === muteBundleStaticBackground) {
                let tmp46;
                if (cResult[8] === product.previewAssets) {
                  tmp46 = cResult[9];
                }
                return tmp46;
              }
            }
          }
        }
      }
    }
    const obj3 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: disableBundleStaticBackground, mutedStaticBackground: muteBundleStaticBackground, targetSize: tmp6 };
    const tmp49 = metroImportDefault(BundleSampleV2Default, obj3);
    cResult[2] = tmp6;
    cResult[3] = disableBundleStaticBackground;
    cResult[4] = firstAvatarDecoration;
    cResult[5] = firstNameplate;
    cResult[6] = firstProfileEffect;
    cResult[7] = muteBundleStaticBackground;
    cResult[8] = product.previewAssets;
    cResult[9] = tmp49;
    tmp46 = tmp49;
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    let tmp40;
    let tmp42;
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { uri: _modDef8499 };
      cResult[10] = obj4;
      tmp40 = obj4;
    } else {
      tmp40 = cResult[10];
    }
    if (cResult[11] !== tmp4.externalProductImage) {
      const obj5 = { source: tmp40, style: tmp4.externalProductImage };
      const tmp45 = metroImportDefault(FastImageDefault, obj5);
      cResult[11] = tmp4.externalProductImage;
      cResult[12] = tmp45;
      tmp42 = tmp45;
    } else {
      tmp42 = cResult[12];
    }
    return tmp42;
  } else {
    const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let tmp36;
      if (cResult[13] !== product.skuId) {
        const size1 = { skuId: product.skuId, width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CARD, height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CARD };
        const FractionalNitroCoinIllustration = FractionalNitroCoinIllustration2.FractionalNitroCoinIllustration;
        const tmp38 = metroImportDefault(FractionalNitroCoinIllustration, size1);
        cResult[13] = product.skuId;
        cResult[14] = tmp38;
        tmp36 = tmp38;
      } else {
        tmp36 = cResult[14];
      }
      return tmp36;
    } else {
      const first = _slicedToArray(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        let tmp32;
        if (cResult[15] !== first) {
          const obj6 = { item: first, size: 100 };
          const tmp35 = metroImportDefault(AvatarDecorationSampleV2Default, obj6);
          cResult[15] = first;
          cResult[16] = tmp35;
          tmp32 = tmp35;
        } else {
          tmp32 = cResult[16];
        }
        return tmp32;
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        let tmp24;
        if (cResult[17] !== first) {
          const obj7 = { item: first, hideBackground: true };
          const tmp27 = metroImportDefault(ProfileEffectSampleV2Default, obj7);
          cResult[17] = first;
          cResult[18] = tmp27;
          tmp24 = tmp27;
        } else {
          tmp24 = cResult[18];
        }
        if (cResult[19] === tmp4.profileEffectContainer) {
          let tmp28;
          if (cResult[20] === tmp24) {
            tmp28 = cResult[21];
          }
          return tmp28;
        }
        const obj8 = { style: tmp4.profileEffectContainer, children: tmp24 };
        const tmp31 = metroImportDefault(hasOwnProperty, obj8);
        cResult[19] = tmp4.profileEffectContainer;
        cResult[20] = tmp24;
        cResult[21] = tmp31;
        tmp28 = tmp31;
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
        let tmp14;
        if (cResult[22] !== first) {
          const obj9 = { profileFrame: first, previewWidth: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH - nativeDefault.space.PX_32, previewHeight, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
          const tmp17 = ProfileFrameSamplePreviewDefault;
          const tmp19 = metroImportDefault(tmp17, obj9);
          cResult[22] = first;
          cResult[23] = tmp19;
          tmp14 = tmp19;
        } else {
          tmp14 = cResult[23];
        }
        if (cResult[24] === tmp4.profileFrameContainer) {
          let tmp20;
          if (cResult[25] === tmp14) {
            tmp20 = cResult[26];
          }
          return tmp20;
        }
        const obj10 = { style: tmp4.profileFrameContainer, children: tmp14 };
        const tmp23 = metroImportDefault(hasOwnProperty, obj10);
        cResult[24] = tmp4.profileFrameContainer;
        cResult[25] = tmp14;
        cResult[26] = tmp23;
        tmp20 = tmp23;
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        let tmp10;
        if (cResult[27] !== first) {
          const obj11 = { item: first };
          const tmp13 = metroImportDefault(NameplateCardPreviewDefault, obj11);
          cResult[27] = first;
          cResult[28] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[28];
        }
        return tmp10;
      } else {
        return null;
      }
    }
  }
}) : ((arg0) => {
  let cardWidth;
  let disableBundleStaticBackground;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let muteBundleStaticBackground;
  let obj4;
  let obj7;
  let obj9;
  let product;
  let tmp15;
  ({ product, cardWidth } = arg0);
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  const tmp = closure_10();
  const obj = cardWidth(7842);
  const shopProductItems = obj.useShopProductItems(product);
  const items = [cardWidth];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const memo = react.useMemo(() => {
    let COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth;
    if (cardWidth == null) {
      COLLECTIBLES_SHOP_CARD_WIDTH = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
    }
    size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT };
    return size;
  }, items);
  if (product.type === cardWidth(1980).CollectiblesItemType.BUNDLE) {
    const obj2 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: disableBundleStaticBackground, mutedStaticBackground: muteBundleStaticBackground, targetSize: memo };
    return closure_7(BundleSampleV2Default, obj2);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const obj3 = { source: obj4, style: tmp.externalProductImage };
    obj4 = { uri: _modDef8499 };
    const tmp25 = FastImageDefault;
    return closure_7(tmp25, obj3);
  } else {
    const ALL = cardWidth(1088).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      size = { skuId: product.skuId, width: cardWidth(8500).FRACTIONAL_NITRO_COIN_SIZE.CARD, height: cardWidth(8500).FRACTIONAL_NITRO_COIN_SIZE.CARD };
      const FractionalNitroCoinIllustration = cardWidth(8500).FractionalNitroCoinIllustration;
      return closure_7(FractionalNitroCoinIllustration, size);
    } else {
      const first = _slicedToArray(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (cardWidth(1980).CollectiblesItemType.AVATAR_DECORATION === type) {
        const obj5 = { item: first, size: 100 };
        return closure_7(AvatarDecorationSampleV2Default, obj5);
      } else if (cardWidth(1980).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj6 = { style: tmp.profileEffectContainer, children: closure_7(ProfileEffectSampleV2Default, obj7) };
        obj7 = { item: first, hideBackground: true };
        return closure_7(closure_5, obj6);
      } else if (cardWidth(1980).CollectiblesItemType.PROFILE_FRAME === type) {
        const obj8 = { style: tmp.profileFrameContainer, children: closure_7(tmp15, obj9) };
        obj9 = { profileFrame: first, previewWidth: cardWidth(8418).COLLECTIBLES_SHOP_CARD_WIDTH - nativeDefault.space.PX_32, previewHeight, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
        tmp15 = ProfileFrameSamplePreviewDefault;
        return closure_7(closure_5, obj8);
      } else if (cardWidth(1980).CollectiblesItemType.NAMEPLATE === type) {
        const obj10 = { item: first };
        return closure_7(NameplateCardPreviewDefault, obj10);
      } else {
        return null;
      }
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let solidBackground;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(8);
  ({ children, solidBackground } = arg0);
  const tmp4 = undefined !== solidBackground && solidBackground;
  const tmp5 = closure_10();
  const hexToRgbaString = ColorUtils.hexToRgbaString;
  ColorUtils;
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  ColorUtils;
  let num = 0.8;
  const tmpResult4 = useToken;
  const token = tmpResult4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (tmp4) {
    num = 1;
  }
  const hexToRgbaStringResult = hexToRgbaString(hexWithOpacity(token, num));
  if (cResult[0] !== hexToRgbaStringResult) {
    const obj2 = { backgroundColor: hexToRgbaStringResult };
    cResult[0] = hexToRgbaStringResult;
    cResult[1] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === tmp5.assetContainer) {
    let tmp11;
    if (cResult[3] === tmp10) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === children) {
      let tmp12;
      if (cResult[6] === tmp11) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj3 = { style: tmp11, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children };
    const tmp15 = metroImportDefault(hasOwnProperty, obj3);
    cResult[5] = children;
    cResult[6] = tmp11;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
  const items = [tmp5.assetContainer, tmp10];
  cResult[2] = tmp5.assetContainer;
  cResult[3] = tmp10;
  cResult[4] = items;
  tmp11 = items;
}) : ((solidBackground) => {
  let items;
  let flag = solidBackground.solidBackground;
  const children = solidBackground.children;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_10();
  const hexToRgbaString = ColorUtils.hexToRgbaString;
  ColorUtils;
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  ColorUtils;
  let num = 0.8;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (flag) {
    num = 1;
  }
  const obj2 = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children };
  items = [tmp.assetContainer, { backgroundColor: hexToRgbaString(hexWithOpacity(token, num)) }];
  ({ backgroundColor: hexToRgbaString(hexWithOpacity(token, num)) });
  return metroImportDefault(hasOwnProperty, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let items;
  let muteBundleStaticBackground;
  let product;
  let solidBackground;
  const obj = react2;
  const cResult = obj.c(20);
  ({ product, isPurchased, solidBackground, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const obj2 = useDefaultVariantIndex;
  const defaultVariantIndex = obj2.useDefaultVariantIndex(product);
  if (cResult[0] === product) {
    let tmp5;
    if (cResult[1] === defaultVariantIndex) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === cardWidth) {
      if (cResult[4] === disableBundleStaticBackground) {
        if (cResult[5] === isDisabled) {
          if (cResult[6] === isPurchased) {
            if (cResult[7] === muteBundleStaticBackground) {
              let tmp7;
              let tmp11;
              if (cResult[8] === tmp5) {
                tmp7 = cResult[9];
              }
              if (cResult[10] !== isPurchased) {
                const tmp12 = isPurchased && metroImportDefault(closure_11, {});
                cResult[10] = isPurchased;
                cResult[11] = tmp12;
                tmp11 = tmp12;
              } else {
                tmp11 = cResult[11];
              }
              if (cResult[12] === isDisabled) {
                let tmp15;
                if (cResult[13] === isPurchased) {
                  tmp15 = cResult[14];
                }
                if (cResult[15] === solidBackground) {
                  if (cResult[16] === tmp7) {
                    if (cResult[17] === tmp11) {
                      let tmp19;
                      if (cResult[18] === tmp15) {
                        tmp19 = cResult[19];
                      }
                      return tmp19;
                    }
                  }
                }
                const obj3 = { solidBackground, children: items };
                items = [tmp7, tmp11, tmp15];
                const tmp22 = metroImportAll(closure_15, obj3);
                cResult[15] = solidBackground;
                cResult[16] = tmp7;
                cResult[17] = tmp11;
                cResult[18] = tmp15;
                cResult[19] = tmp22;
                tmp19 = tmp22;
              }
              const tmp16 = isDisabled && !isPurchased && metroImportDefault(closure_12, {});
              cResult[12] = isDisabled;
              cResult[13] = isPurchased;
              cResult[14] = tmp16;
              tmp15 = tmp16;
            }
          }
        }
      }
    }
    const obj4 = { product: tmp5, isPurchased, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
    const tmp10 = metroImportDefault(closure_13, obj4);
    cResult[3] = cardWidth;
    cResult[4] = disableBundleStaticBackground;
    cResult[5] = isDisabled;
    cResult[6] = isPurchased;
    cResult[7] = muteBundleStaticBackground;
    cResult[8] = tmp5;
    cResult[9] = tmp10;
    tmp7 = tmp10;
  }
  const tmpResult = CollectiblesProductUtils;
  const selectedProduct = tmpResult.getSelectedProduct(product, defaultVariantIndex);
  cResult[0] = product;
  cResult[1] = defaultVariantIndex;
  cResult[2] = selectedProduct;
  tmp5 = selectedProduct;
}) : ((arg0) => {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let items;
  let muteBundleStaticBackground;
  let product;
  let solidBackground;
  ({ product, isPurchased, isDisabled } = arg0);
  ({ solidBackground, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const obj = useDefaultVariantIndex;
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const obj3 = { solidBackground, children: items };
  items = [, , ];
  const obj2 = CollectiblesProductUtils;
  const obj4 = { product: obj2.getSelectedProduct(product, defaultVariantIndex), isPurchased, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
  items[0] = metroImportDefault(closure_13, obj4);
  items[1] = isPurchased && metroImportDefault(closure_11, {});
  const tmp4Result = isPurchased && metroImportDefault(closure_11, {});
  if (isDisabled) {
    isDisabled = !isPurchased;
  }
  if (isDisabled) {
    isDisabled = metroImportDefault(closure_12, {});
  }
  items[2] = isDisabled;
  return metroImportAll(closure_15, obj3);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx");

export default memoResult;