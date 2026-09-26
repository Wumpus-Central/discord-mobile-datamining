// discord_app/modules/quests/native/QuestHomeOrbShopRewardCardAssetTile.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import CollectiblesProductUtils from "../../collectibles/utils/CollectiblesProductUtils.tsx";
import CollectiblesShopCardV2 from "../../collectibles/native/CollectiblesShopCardV2.tsx";
import useDefaultVariantIndex from "../../collectibles/hooks/useDefaultVariantIndex.tsx";
import AvatarDecorationSampleV2 from "../../collectibles/native/AvatarDecorationSampleV2.tsx";
import _modDef8274 from "../../../../_runtime/metro/08274__.js";
import CutoutableAvatarDecorationDefault from "../../collectibles/native/components/CutoutableAvatarDecoration.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function CompactAvatarDecorationPreview(arg0) {
  ({ item, size } = arg0);
  const tmp = closure_14(size);
  _modDef38(
    item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION,
    "Item must be Avatar Decoration",
  );
  const obj = { style: tmp.container, children: null };
  const items = [
    React6(hasOwnProperty, { style: tmp.avatar, resizeMode: "contain", source: _modDef8274, accessible: false }),
  ];
  const obj2 = { style: tmp.avatar, resizeMode: "contain", source: _modDef8274, accessible: false };
  items[1] = React6(timestampProducer, {
    style: tmp.avatarDecoration,
    accessibilityLabel: item.label,
    children: React6(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size }),
  });
  obj.children = items;
  return React7(timestampProducer, obj);
}
function ProductPreviewInner(cardHeight) {
  ({ product, cardWidth } = cardHeight);
  cardHeight = cardHeight.cardHeight;
  let flag = cardHeight.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_16();
  const shopProductItems = cardWidth(7616).useShopProductItems(product);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const tmp5 =
    cardWidth < cardWidth(8226).COLLECTIBLES_SHOP_CARD_WIDTH ||
    cardHeight < cardWidth(8226).COLLECTIBLES_SHOP_CARD_HEIGHT;
  dependencyMap = tmp5;
  const items = [cardHeight, cardWidth, tmp5];
  const memo = noop.useMemo(() => {
    let tmp = null;
    if (closure_2) {
      size = {
        width: cardWidth,
        height: cardHeight,
        profileFramePreviewWidth: cardWidth - PX_32,
        profileFramePreviewHeight: cardHeight - closure_13,
        avatarDecorationSize: null,
      };
      const _Math = Math;
      const _Math2 = Math;
      size.avatarDecorationSize = Math.round(
        Math.min(c10, cardWidth * (c10 / CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH)),
      );
      tmp = size;
    }
    return tmp;
  }, items);
  const items1 = [cardHeight, cardWidth, memo];
  const memo1 = noop.useMemo(() => {
    if (null != memo) {
      size = { width: null, height: null };
      ({ width: obj2.width, height: obj2.height } = memo);
      let size1 = size;
    } else {
      size1 = { width: cardWidth, height: cardHeight };
    }
    return size1;
  }, items1);
  if (product.type === cardWidth(1974).CollectiblesItemType.BUNDLE) {
    const obj2 = {
      deco: firstAvatarDecoration,
      pfx: firstProfileEffect,
      nameplate: firstNameplate,
      size: "small",
      previewAssets: product.previewAssets,
      disableStaticBackground: true,
      targetSize: memo1,
    };
    return closure_8(cardHeight(8260), obj2);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const obj3 = { source: null, style: null };
    const obj4 = { uri: cardHeight(8306) };
    obj3.source = obj4;
    obj3.style = tmp.externalProductImage;
    return closure_8(cardHeight(5899), obj3);
  } else {
    const ALL = cardWidth(1077).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      size = {
        skuId: product.skuId,
        width: cardWidth(8307).FRACTIONAL_NITRO_COIN_SIZE.CARD,
        height: cardWidth(8307).FRACTIONAL_NITRO_COIN_SIZE.CARD,
      };
      return closure_8(cardWidth(8307).FractionalNitroCoinIllustration, size);
    } else {
      const first = memo(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (cardWidth(1974).CollectiblesItemType.AVATAR_DECORATION === type) {
        if (flag) {
          const obj5 = { item: first, size: null };
          let avatarDecorationSize;
          if (memo != null) {
            avatarDecorationSize = memo.avatarDecorationSize;
          }
          if (avatarDecorationSize == null) {
            avatarDecorationSize = size;
          }
          obj5.size = avatarDecorationSize;
          let tmp24Result = closure_8(CompactAvatarDecorationPreview, obj5);
        } else {
          const obj6 = { item: first, size };
          tmp24Result = closure_8(cardHeight(8273), obj6);
        }
        return tmp24Result;
      } else if (cardWidth(1974).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj7 = { style: tmp.profileEffectContainer, children: null };
        const obj8 = { item: first, hideBackground: true };
        obj7.children = closure_8(cardHeight(8262), obj8);
        return closure_8(closure_6, obj7);
      } else if (cardWidth(1974).CollectiblesItemType.PROFILE_FRAME === type) {
        if (flag) {
          if (null != memo) {
            const items2 = [,];
            ({ profileFrameContainer: arr3[0], compactProfileFrameContainer: arr3[1] } = tmp);
            let profileFrameContainer = items2;
          }
          const obj9 = { style: profileFrameContainer, children: null };
          const obj10 = { profileFrame: first, previewWidth: null, previewHeight: null, profileBackgroundColor: null };
          let prop;
          if (memo != null) {
            prop = memo.profileFramePreviewWidth;
          }
          if (prop == null) {
            prop = cardWidth(8226).COLLECTIBLES_SHOP_CARD_WIDTH - PX_32;
          }
          obj10.previewWidth = prop;
          let prop1;
          if (memo != null) {
            prop1 = memo.profileFramePreviewHeight;
          }
          if (prop1 == null) {
            prop1 = closure_11;
          }
          obj10.previewHeight = prop1;
          obj10.profileBackgroundColor = cardHeight(576).colors.BACKGROUND_BASE_LOW;
          obj9.children = closure_8(cardHeight(8285), obj10);
          return closure_8(tmp15, obj9);
        }
        profileFrameContainer = tmp.profileFrameContainer;
      } else if (cardWidth(1974).CollectiblesItemType.NAMEPLATE === type) {
        const obj11 = { item: first };
        return closure_8(cardHeight(8287), obj11);
      } else {
        return null;
      }
    }
  }
  const obj = cardWidth(7616);
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const EXTERNAL_PRODUCT_SKU_IDS = fn(1076).EXTERNAL_PRODUCT_SKU_IDS;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 100;
const diff = fn(8226).COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
const PX_32 = nativeDefault.space.PX_32;
let closure_13 = 2 * nativeDefault.space.PX_16;
let createStyles = fn(4836);
let closure_14 = createStyles.createStyles((width) => {
  const obj = {
    container: { width, height: width, justifyContent: "center", alignItems: "center" },
    avatar: null,
    avatarDecoration: null,
  };
  size = {
    height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    borderRadius: (width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio) / 2,
    opacity: 0.8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  };
  obj.avatar = size;
  obj.avatarDecoration = { position: "absolute", width, height: width, justifyContent: "center", alignItems: "center" };
  return obj;
});
createStyles = fn(4836);
let obj = {
  assetContainer: null,
  overlayContainer: null,
  profileEffectContainer: null,
  profileFrameContainer: null,
  compactProfileFrameContainer: null,
  externalProductImage: null,
};
let size = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  borderRadius: nativeDefault.radii.sm,
};
obj.assetContainer = size;
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj4.width = "100%";
obj4.height = "100%";
obj.overlayContainer = obj4;
let size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.profileEffectContainer = size1;
obj.profileFrameContainer = { width: "100%", height: diff, alignItems: "center" };
obj.compactProfileFrameContainer = { height: "100%", justifyContent: "center" };
obj.externalProductImage = { width: 80, height: 80, resizeMode: "contain" };
let closure_16 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCardAssetTile.tsx");

export default noop.memo(function QuestHomeOrbShopRewardCardAssetTile(arg0) {
  ({ product, hideCardDetails } = arg0);
  ({ cardWidth, cardHeight } = arg0);
  if (hideCardDetails === undefined) {
    hideCardDetails = false;
  }
  const tmp = closure_16();
  const defaultVariantIndex = useDefaultVariantIndex.useDefaultVariantIndex(product);
  const selectedProduct = CollectiblesProductUtils.getSelectedProduct(product, defaultVariantIndex);
  const productType = CollectiblesProductUtils.getProductType(selectedProduct);
  ColorUtils;
  ColorUtils;
  useToken;
  if (!hideCardDetails) {
    if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
      if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
        let str = "75%";
      }
      const obj4 = {
        style: null,
        importantForAccessibility: "no-hide-descendants",
        accessibilityElementsHidden: true,
        children: null,
      };
      const items = [tmp.assetContainer];
      const obj5 = { backgroundColor: tmp10 };
      items[1] = obj5;
      obj4.style = items;
      const obj6 = {
        style: null,
        renderToHardwareTextureAndroid: true,
        needsOffscreenAlphaCompositing: true,
        children: null,
      };
      const items1 = [tmp.overlayContainer];
      const obj7 = { height: str };
      items1[1] = obj7;
      obj6.style = items1;
      const obj8 = { product: selectedProduct, cardWidth, cardHeight, hideCardDetails };
      obj6.children = React6(ProductPreviewInner, obj8);
      obj4.children = React6(timestampProducer, obj6);
      return React6(timestampProducer, obj4);
    }
  }
  str = "100%";
});
