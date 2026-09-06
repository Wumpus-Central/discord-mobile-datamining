// === Module 8844: CollectiblesShopCardAssetTileV2 ===

// Module 8844 (CollectiblesShopCardAssetTileV2)
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import useToken from "useToken" /* 4262 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import LockIcon from "LockIcon" /* 5095 */;
import FastImageDefault from "FastImage" /* 5587 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8764 */;
import useDefaultVariantIndex from "useDefaultVariantIndex" /* 8765 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8795 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8797 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8799 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8810 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8822 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8824 */;
import _modDef8845 from "module_8845" /* 8845 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function PurchasedAssetOverlay() {
  const tmp = closure_10();
  let obj = { style: tmp.overlayContainer, children: null };
  obj = { size: "lg", style: tmp.overlayIcon };
  obj.children = React5(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj);
  return React5(hasOwnProperty, obj);
}
function DisabledAssetOverlay() {
  const tmp = closure_10();
  let obj = { style: tmp.overlayContainer, children: null };
  obj = { size: "lg", style: tmp.overlayIcon };
  obj.children = React5(LockIcon.LockIcon, obj);
  return React5(hasOwnProperty, obj);
}
function ProductPreview(arg0) {
  ({ product, isPurchased } = arg0);
  ({ isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const tmp = closure_10();
  let obj = CollectiblesProductUtils;
  const productType = obj.getProductType(product);
  if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
      let str = "75%";
    }
    const items = [tmp.overlayContainer, , ];
    if (!isPurchased) {
      isPurchased = isDisabled;
    }
    if (isPurchased) {
      isPurchased = tmp.purchasedOrDisabled;
    }
    obj = { style: null, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: null };
    items[1] = isPurchased;
    obj = { height: str };
    items[2] = obj;
    obj.style = items;
    const obj1 = { product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
    obj.children = React5(ProductPreviewInner, obj1);
    return React5(hasOwnProperty, obj);
  }
  str = "100%";
}
function ProductPreviewInner(arg0) {
  ({ product, cardWidth } = arg0);
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  const tmp = closure_10();
  let obj = cardWidth(8171);
  const shopProductItems = obj.useShopProductItems(product);
  const items = [cardWidth];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const memo = noop.useMemo(() => {
    let COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth;
    if (cardWidth == null) {
      COLLECTIBLES_SHOP_CARD_WIDTH = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
    }
    const size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT };
    return size;
  }, items);
  if (product.type === cardWidth(1889).CollectiblesItemType.BUNDLE) {
    obj = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: disableBundleStaticBackground, mutedStaticBackground: muteBundleStaticBackground, targetSize: memo };
    return closure_7(BundleSampleV2Default, obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    obj = { source: null, style: null };
    const obj1 = { uri: _modDef8845 };
    obj.source = obj1;
    obj.style = tmp.externalProductImage;
    return closure_7(FastImageDefault, obj);
  } else {
    const ALL = cardWidth(1077).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let size = { skuId: product.skuId, width: cardWidth(8846).FRACTIONAL_NITRO_COIN_SIZE.CARD, height: cardWidth(8846).FRACTIONAL_NITRO_COIN_SIZE.CARD };
      return closure_7(cardWidth(8846).FractionalNitroCoinIllustration, size);
    } else {
      const first = _slicedToArray(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (cardWidth(1889).CollectiblesItemType.AVATAR_DECORATION === type) {
        const obj2 = { item: first, size: 100 };
        return closure_7(AvatarDecorationSampleV2Default, obj2);
      } else if (cardWidth(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj3 = { style: tmp.profileEffectContainer, children: null };
        const obj4 = { item: first, hideBackground: true };
        obj3.children = closure_7(ProfileEffectSampleV2Default, obj4);
        return closure_7(closure_5, obj3);
      } else if (cardWidth(1889).CollectiblesItemType.PROFILE_FRAME === type) {
        const obj5 = { style: tmp.profileFrameContainer, children: null };
        const obj6 = { profileFrame: first, previewWidth: cardWidth(8764).COLLECTIBLES_SHOP_CARD_WIDTH - nativeDefault.space.PX_32, previewHeight, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
        obj5.children = closure_7(ProfileFrameSamplePreviewDefault, obj6);
        return closure_7(closure_5, obj5);
      } else if (cardWidth(1889).CollectiblesItemType.NAMEPLATE === type) {
        const obj7 = { item: first };
        return closure_7(NameplateCardPreviewDefault, obj7);
      } else {
        return null;
      }
    }
  }
}
function AssetTileInternal(solidBackground) {
  let flag = solidBackground.solidBackground;
  if (flag === undefined) {
    flag = false;
  }
  let obj = ColorUtils;
  const tmp = closure_10();
  const obj2 = ColorUtils;
  let num = 0.8;
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (flag) {
    num = 1;
  }
  obj = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  const items = [tmp.assetContainer, ];
  obj = { backgroundColor: obj.hexToRgbaString(obj2.hexWithOpacity(token, num)) };
  items[1] = obj;
  obj.style = items;
  obj.children = solidBackground.children;
  return React5(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const EXTERNAL_PRODUCT_SKU_IDS = fn(1076).EXTERNAL_PRODUCT_SKU_IDS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const diff = fn(8764).COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
fn(4560);
let obj = { assetContainer: null, overlayContainer: null, profileEffectContainer: null, profileFrameContainer: null, externalProductImage: null, purchasedOrDisabled: null, overlayIcon: null };
let size = { display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "100%", width: "100%", borderRadius: nativeDefault.radii.sm };
obj.assetContainer = size;
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.justifyContent = "center";
obj.alignItems = "center";
obj.width = "100%";
obj.height = "75%";
obj.overlayContainer = obj;
const size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.profileEffectContainer = size1;
obj.profileFrameContainer = { width: "100%", height: diff, alignItems: "center" };
obj.externalProductImage = { width: 80, height: 80, resizeMode: "contain" };
obj.purchasedOrDisabled = { opacity: 0.4 };
const createStyles = { position: "absolute", opacity: 1, color: nativeDefault.colors.ICON_STRONG, fontWeight: "bold" };
obj.overlayIcon = createStyles;
let closure_10 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx");

export default noop.memo(function AssetTileV2(arg0) {
  ({ product, isPurchased, isDisabled } = arg0);
  ({ solidBackground, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  let obj = useDefaultVariantIndex;
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  obj = { solidBackground, children: null };
  obj = { product: CollectiblesProductUtils.getSelectedProduct(product, defaultVariantIndex), isPurchased, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
  const items = [React5(ProductPreview, obj), , ];
  let tmp4Result = isPurchased;
  if (isPurchased) {
    tmp4Result = React5(PurchasedAssetOverlay, {});
  }
  items[1] = tmp4Result;
  if (isDisabled) {
    isDisabled = !isPurchased;
  }
  if (isDisabled) {
    isDisabled = React5(DisabledAssetOverlay, {});
  }
  items[2] = isDisabled;
  obj.children = items;
  return React6(AssetTileInternal, obj);
});