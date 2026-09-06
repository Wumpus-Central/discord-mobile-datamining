// discord_app/modules/quests/native/QuestHomeOrbShopRewardCardAssetTile.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import hexToRgba from "../../../utils/ColorUtils.tsx";
import getProductOrbPrice from "../../collectibles/utils/CollectiblesProductUtils.tsx";
import useDefaultVariantIndex from "../../collectibles/hooks/useDefaultVariantIndex.tsx";
import AvatarDecorationSampleV2 from "../../collectibles/native/AvatarDecorationSampleV2.tsx";
import registerAssetDefault from "../../../../_runtime/08811_registerAsset.js";
import CutoutableAvatarDecorationDefault from "../../collectibles/native/components/CutoutableAvatarDecoration.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { EXTERNAL_PRODUCT_SKU_IDS } from "../../collectibles/CollectiblesShopConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function CompactAvatarDecorationPreview(arg0) {
  ({ item, size } = arg0);
  const tmp = callback3(size);
  _modDef38(
    item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION,
    "Item must be Avatar Decoration",
  );
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.avatar, resizeMode: "contain", source: registerAssetDefault, accessible: false };
  const items = [callback(closure_5, obj)];
  obj = {
    style: tmp.avatarDecoration,
    accessibilityLabel: item.label,
    children: callback(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size }),
  };
  items[1] = callback(closure_6, obj);
  obj[1] = items;
  return callback2(closure_6, obj);
}
function ProductPreviewInner(cardHeight) {
  ({ product, cardWidth } = cardHeight);
  cardHeight = cardHeight.cardHeight;
  let flag = cardHeight.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let memo;
  let tmp = callback4();
  let obj = cardWidth(8171);
  const shopProductItems = obj.useShopProductItems(product);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const tmp5 =
    cardWidth < cardWidth(8764).COLLECTIBLES_SHOP_CARD_WIDTH ||
    cardHeight < cardWidth(8764).COLLECTIBLES_SHOP_CARD_HEIGHT;
  dependencyMap = tmp5;
  const items = [cardHeight, cardWidth, tmp5];
  memo = importAllResult.useMemo(() => {
    let tmp = null;
    if (table) {
      const obj = {
        width: null,
        height: null,
        profileFramePreviewWidth: null,
        profileFramePreviewHeight: null,
        avatarDecorationSize: null,
      };
      obj[0] = cardWidth;
      obj[1] = cardHeight;
      obj[2] = cardWidth - closure_1_12;
      obj[3] = cardHeight - closure_1_13;
      const _Math = Math;
      const _Math2 = Math;
      obj[4] = Math.round(
        Math.min(closure_1_10, cardWidth * (closure_1_10 / cardWidth(table[5]).COLLECTIBLES_SHOP_CARD_WIDTH)),
      );
      tmp = obj;
    }
    return tmp;
  }, items);
  const items1 = [cardHeight, cardWidth, memo];
  const memo1 = importAllResult.useMemo(() => {
    if (null != memo) {
      let obj = { width: null, height: null };
      ({ width: obj2[0], height: obj2[1] } = memo);
    } else {
      obj = { width: null, height: null };
      obj[0] = cardWidth;
      obj[1] = cardHeight;
    }
    return obj;
  }, items1);
  if (product.type === cardWidth(1889).CollectiblesItemType.BUNDLE) {
    obj = {
      deco: null,
      pfx: null,
      nameplate: null,
      size: "small",
      previewAssets: null,
      disableStaticBackground: true,
      targetSize: null,
    };
    obj[0] = firstAvatarDecoration;
    obj[1] = firstProfileEffect;
    obj[2] = firstNameplate;
    obj[4] = product.previewAssets;
    obj[6] = memo1;
    return callback(cardHeight(8797), obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    obj = { source: null, style: null };
    obj1 = { uri: null };
    obj1[0] = cardHeight(8845);
    obj[0] = obj1;
    obj[1] = tmp.externalProductImage;
    return callback(cardHeight(5587), obj);
  } else {
    const ALL = tmp2(1077).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      const obj2 = { skuId: null, width: null, height: null };
      obj2[0] = product.skuId;
      obj2[1] = tmp2(8846).FRACTIONAL_NITRO_COIN_SIZE.CARD;
      obj2[2] = tmp2(8846).FRACTIONAL_NITRO_COIN_SIZE.CARD;
      return callback(tmp2(8846).FractionalNitroCoinIllustration, obj2);
    } else {
      const first = memo(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (tmp2(1889).CollectiblesItemType.AVATAR_DECORATION === type) {
        if (flag) {
          const obj3 = { item: null, size: null };
          obj3[0] = first;
          let avatarDecorationSize;
          if (memo != null) {
            avatarDecorationSize = memo.avatarDecorationSize;
          }
          if (avatarDecorationSize == null) {
            avatarDecorationSize = c10;
          }
          obj3[1] = avatarDecorationSize;
          let tmp24Result = tmp24(CompactAvatarDecorationPreview, obj3);
          const tmp28 = CompactAvatarDecorationPreview;
        } else {
          const obj4 = { item: null, size: null };
          obj4[0] = first;
          obj4[1] = c10;
          tmp24Result = tmp24(cardHeight(8810), obj4);
        }
        return tmp24Result;
      } else if (tmp2(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj5 = { style: null, children: null };
        obj5[0] = tmp.profileEffectContainer;
        const obj6 = { item: null, hideBackground: true };
        obj6[0] = first;
        obj5[1] = callback(cardHeight(8799), obj6);
        return callback(closure_6, obj5);
      } else if (tmp2(1889).CollectiblesItemType.PROFILE_FRAME === type) {
        if (flag) {
          if (null != memo) {
            const items2 = [,];
            ({ profileFrameContainer: arr3[0], compactProfileFrameContainer: arr3[1] } = tmp);
            let profileFrameContainer = items2;
          }
          const obj7 = { style: null, children: null };
          obj7[0] = profileFrameContainer;
          const obj8 = { profileFrame: null, previewWidth: null, previewHeight: null, profileBackgroundColor: null };
          obj8[0] = first;
          let prop;
          if (memo != null) {
            prop = memo.profileFramePreviewWidth;
          }
          if (prop == null) {
            prop = tmp2(8764).COLLECTIBLES_SHOP_CARD_WIDTH - PX_32;
          }
          obj8[1] = prop;
          let prop1;
          if (memo != null) {
            prop1 = memo.profileFramePreviewHeight;
          }
          if (prop1 == null) {
            prop1 = closure_11;
          }
          obj8[2] = prop1;
          obj8[3] = cardHeight(576).colors.BACKGROUND_BASE_LOW;
          obj7[1] = tmp14(cardHeight(8822), obj8);
          return tmp14(tmp15, obj7);
        }
        profileFrameContainer = tmp.profileFrameContainer;
      } else if (tmp2(1889).CollectiblesItemType.NAMEPLATE === type) {
        const obj9 = { item: null };
        obj9[0] = first;
        return callback(cardHeight(8824), obj9);
      } else {
        return null;
      }
    }
  }
}
let c4 = importAllResult;
({ Image: c5, View: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let c10 = 100;
const diff = require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * ThemesDefault.space.PX_16;
const unpackModuleId = diff;
const PX_32 = ThemesDefault.space.PX_32;
let closure_13 = 2 * ThemesDefault.space.PX_16;
let closure_14 = createCacheKey.createStyles((width) => {
  obj = { container: obj, avatar: null, avatarDecoration: null };
  obj = { width, height: width, justifyContent: "center", alignItems: "center" };
  obj = {
    height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    borderRadius: (width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio) / 2,
    opacity: 0.8,
    backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
  };
  obj[1] = obj;
  obj[2] = { position: "absolute", width, height: width, justifyContent: "center", alignItems: "center" };
  return obj;
});
let obj = {
  assetContainer: null,
  overlayContainer: null,
  profileEffectContainer: null,
  profileFrameContainer: null,
  compactProfileFrameContainer: null,
  externalProductImage: null,
};
obj = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  borderRadius: ThemesDefault.radii.sm,
};
obj[0] = obj;
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.justifyContent = "center";
createCacheKey.alignItems = "center";
createCacheKey.width = "100%";
createCacheKey.height = "100%";
obj[1] = createCacheKey;
createCacheKey = { width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[2] = createCacheKey;
obj[3] = { width: "100%", height: diff, alignItems: "center" };
obj[4] = { height: "100%", justifyContent: "center" };
obj[5] = { width: 80, height: 80, resizeMode: "contain" };
let closure_16 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function QuestHomeOrbShopRewardCardAssetTile(arg0) {
  ({ product, hideCardDetails } = arg0);
  ({ cardWidth, cardHeight } = arg0);
  if (hideCardDetails === undefined) {
    hideCardDetails = false;
  }
  const tmp = callback4();
  let obj = useDefaultVariantIndex;
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  obj1 = getProductOrbPrice;
  const selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  let obj2 = getProductOrbPrice;
  const productType = obj2.getProductType(selectedProduct);
  hexToRgba;
  hexToRgba;
  map;
  if (!hideCardDetails) {
    if (productType !== tmp2(1889).CollectiblesItemType.PROFILE_EFFECT) {
      if (productType !== tmp2(1889).CollectiblesItemType.PROFILE_FRAME) {
        let str = "75%";
      }
      obj = {
        style: null,
        importantForAccessibility: "no-hide-descendants",
        accessibilityElementsHidden: true,
        children: null,
      };
      const items = [tmp.assetContainer];
      obj = { backgroundColor: null };
      obj[0] = tmp10;
      items[1] = obj;
      obj[0] = items;
      obj1 = {
        style: null,
        renderToHardwareTextureAndroid: true,
        needsOffscreenAlphaCompositing: true,
        children: null,
      };
      const items1 = [tmp.overlayContainer];
      obj2 = { height: null };
      obj2[0] = str;
      items1[1] = obj2;
      obj1[0] = items1;
      const obj3 = { product: null, cardWidth: null, cardHeight: null, hideCardDetails: null };
      obj3[0] = selectedProduct;
      obj3[1] = cardWidth;
      obj3[2] = cardHeight;
      obj3[3] = hideCardDetails;
      obj1[3] = callback(ProductPreviewInner, obj3);
      obj[3] = callback(closure_6, obj1);
      return callback(closure_6, obj);
    }
  }
  str = "100%";
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCardAssetTile.tsx");

export default memoResult;
