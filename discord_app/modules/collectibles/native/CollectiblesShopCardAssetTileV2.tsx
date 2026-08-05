// discord_app/modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "ProfileEffectSample";
import get_ActivityIndicator from "FRACTIONAL_NITRO_COIN_SIZE";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import jsxProd from "NameplateCardPreview";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let error;
let metroImportAll;
const require = arg1;
function PurchasedAssetOverlay() {
  const tmp = callback3();
  obj = { style: tmp.overlayContainer, children: callback2(require(9151) /* CheckmarkLargeBoldIcon */.CheckmarkLargeBoldIcon, obj) };
  obj = { size: "lg", style: tmp.overlayIcon };
  return callback2(closure_5, obj);
}
function DisabledAssetOverlay() {
  const tmp = callback3();
  obj = { style: tmp.overlayContainer, children: callback2(require(4804) /* LockIcon */.LockIcon, obj) };
  obj = { size: "lg", style: tmp.overlayIcon };
  return callback2(closure_5, obj);
}
function ProductPreview(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let muteBundleStaticBackground;
  let product;
  ({ product, isPurchased } = arg0);
  ({ isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const tmp = callback3();
  let obj = require(6921) /* getProductOrbPrice */;
  const productType = obj.getProductType(product);
  if (productType !== require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT) {
    if (productType !== tmp2(1901).CollectiblesItemType.PROFILE_FRAME) {
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
    obj = { height: null };
    obj[0] = str;
    items[2] = obj;
    obj[0] = items;
    const obj1 = { product: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null, cardWidth: null };
    obj1[0] = product;
    obj1[1] = disableBundleStaticBackground;
    obj1[2] = muteBundleStaticBackground;
    obj1[3] = cardWidth;
    obj[3] = closure_7(ProductPreviewInner, obj1);
    return closure_7(closure_5, obj);
  }
  str = "100%";
}
function ProductPreviewInner(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let muteBundleStaticBackground;
  let product;
  ({ product, cardWidth } = arg0);
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  const tmp = callback3();
  let obj = cardWidth(9292);
  const shopProductItems = obj.useShopProductItems(product);
  const items = [cardWidth];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const memo = importAllResult.useMemo(() => {
    let COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth;
    if (cardWidth == null) {
      COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth(outer1_2[5]).COLLECTIBLES_SHOP_CARD_WIDTH;
    }
    return { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: cardWidth(outer1_2[5]).COLLECTIBLES_SHOP_CARD_HEIGHT };
  }, items);
  if (product.type === cardWidth(1901).CollectiblesItemType.BUNDLE) {
    obj = { deco: null, pfx: null, nameplate: null, size: "small", previewAssets: null, disableStaticBackground: null, mutedStaticBackground: null, targetSize: null };
    obj[0] = firstAvatarDecoration;
    obj[1] = firstProfileEffect;
    obj[2] = firstNameplate;
    obj[4] = product.previewAssets;
    obj[5] = disableBundleStaticBackground;
    obj[6] = muteBundleStaticBackground;
    obj[7] = memo;
    return callback2(importDefault(9293), obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    obj = { source: null, style: null };
    const obj1 = { uri: null };
    obj1[0] = importDefault(9334);
    obj[0] = obj1;
    obj[1] = tmp.externalProductImage;
    return callback2(importDefault(5236), obj);
  } else {
    const ALL = tmp2(679).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      const obj2 = { skuId: null, width: null, height: null };
      obj2[0] = product.skuId;
      obj2[1] = tmp2(9335).FRACTIONAL_NITRO_COIN_SIZE.CARD;
      obj2[2] = tmp2(9335).FRACTIONAL_NITRO_COIN_SIZE.CARD;
      return callback2(tmp2(9335).FractionalNitroCoinIllustration, obj2);
    } else {
      const first = callback(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (tmp2(1901).CollectiblesItemType.AVATAR_DECORATION === type) {
        const obj3 = { item: null, size: 100 };
        obj3[0] = first;
        return callback2(importDefault(9305), obj3);
      } else if (tmp2(1901).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.profileEffectContainer;
        const obj5 = { item: null, hideBackground: true };
        obj5[0] = first;
        obj4[1] = callback2(importDefault(9295), obj5);
        return callback2(closure_5, obj4);
      } else if (tmp2(1901).CollectiblesItemType.PROFILE_FRAME === type) {
        const obj6 = { style: null, children: null };
        obj6[0] = tmp.profileFrameContainer;
        const obj7 = { profileFrame: null, previewWidth: null, previewHeight: null, profileBackgroundColor: null };
        obj7[0] = first;
        obj7[1] = tmp2(9262).COLLECTIBLES_SHOP_CARD_WIDTH - importDefault(712).space.PX_32;
        obj7[2] = closure_9;
        obj7[3] = importDefault(712).colors.BACKGROUND_BASE_LOW;
        obj6[1] = callback2(importDefault(9313), obj7);
        return callback2(closure_5, obj6);
      } else if (tmp2(1901).CollectiblesItemType.NAMEPLATE === type) {
        const obj8 = { item: null };
        obj8[0] = first;
        return callback2(importDefault(9315), obj8);
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
  let obj = require(4129) /* hexToRgba */;
  const tmp = callback3();
  const obj2 = require(4129) /* hexToRgba */;
  let num = 0.8;
  const token = require(3989) /* map */.useToken(importDefault(712).colors.BACKGROUND_BASE_LOW);
  if (flag) {
    num = 1;
  }
  obj = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  const items = [tmp.assetContainer, ];
  obj = { backgroundColor: obj.hexToRgbaString(obj2.hexWithOpacity(token, num)) };
  items[1] = obj;
  obj[0] = items;
  obj[3] = solidBackground.children;
  return callback2(closure_5, obj);
}
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
const diff = require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * require("Themes").space.PX_16;
let c9 = diff;
let obj = { assetContainer: null, overlayContainer: null, profileEffectContainer: null, profileFrameContainer: null, externalProductImage: null, purchasedOrDisabled: null, overlayIcon: null };
obj = { display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "100%", width: "100%", borderRadius: require("Themes").radii.sm };
obj[0] = obj;
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.justifyContent = "center";
createCacheKey.alignItems = "center";
createCacheKey.width = "100%";
createCacheKey.height = "75%";
obj[1] = createCacheKey;
obj[2] = { width: "100%", height: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[3] = { width: "100%", height: diff, alignItems: "center" };
obj[4] = { width: 80, height: 80, resizeMode: "contain" };
obj[5] = { opacity: 0.4 };
let obj2 = { width: "100%", height: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[6] = { position: "absolute", opacity: 1, color: require("Themes").colors.ICON_STRONG, fontWeight: "bold" };
let closure_10 = createCacheKey.createStyles(obj);
let obj3 = { position: "absolute", opacity: 1, color: require("Themes").colors.ICON_STRONG, fontWeight: "bold" };
const memoResult = importAllResult.memo(function AssetTileV2(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let muteBundleStaticBackground;
  let product;
  let solidBackground;
  ({ product, isPurchased, isDisabled } = arg0);
  ({ solidBackground, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  let obj = require(9263) /* useDefaultVariantIndex */;
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  obj = { solidBackground, children: null };
  obj = { product: require(6921) /* getProductOrbPrice */.getSelectedProduct(product, defaultVariantIndex), isPurchased, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
  const items = [callback2(ProductPreview, obj), , ];
  let tmp4Result = isPurchased;
  if (isPurchased) {
    tmp4Result = tmp4(PurchasedAssetOverlay, {});
  }
  items[1] = tmp4Result;
  if (isDisabled) {
    isDisabled = !isPurchased;
  }
  if (isDisabled) {
    isDisabled = tmp4(DisabledAssetOverlay, {});
  }
  items[2] = isDisabled;
  obj[1] = items;
  return closure_8(AssetTileInternal, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx");

export default memoResult;