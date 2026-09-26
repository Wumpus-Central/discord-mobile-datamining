// discord_app/modules/skus/native/SKUPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ThemeAwareNitroWishlistingWumpusRive from "../../../../discord_common/js/packages/design/components/Rive/native/generated/ThemeAwareNitroWishlistingWumpusRive.tsx";
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import WishlistItemCardBase from "../../wishlists/native/WishlistItemCardBase.tsx";
import BundleSampleV2Default from "../../collectibles/native/BundleSampleV2.tsx";
import ProfileEffectSampleV2Default from "../../collectibles/native/ProfileEffectSampleV2.tsx";
import AvatarDecorationSampleV2Default from "../../collectibles/native/AvatarDecorationSampleV2.tsx";
import ProfileFrameSamplePreviewDefault from "../../collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import NameplateCardPreviewDefault from "../../collectibles/nameplates/native/NameplateCardPreview.tsx";
import SlayerStorefrontItemCardDefault from "../../slayer_storefront/native/SlayerStorefrontItemCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
class CollectiblesPreview {
  constructor(arg0) {
    ({ collectiblesItemData, size } = global);
    if (size === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      size = closure_0(closure_2[6]).DEFAULT_ITEM_SIZE;
    }
    size2 = size;
    if (typeof size === "number") {
      size1 = { width: null, height: null };
      size1.width = size;
      size1.height = size;
      size2 = size1;
    }
    tmp3 = closure_8(size2.width, size2.height);
    if ("bundle" === collectiblesItemData.type) {
      tmp18 = closure_0;
      tmp19 = closure_2;
      tmp20 = new.target;
      tmp21 = new.target;
      itemsSortingHat = new closure_0(closure_2[8]).ItemsSortingHat(collectiblesItemData.items);
      tmp23 = itemsSortingHat;
      tmp24 = jsx;
      tmp25 = View;
      obj1 = { style: null, children: null };
      obj1.style = tmp3.container;
      obj17 = { style: null, children: null };
      items = [,];
      ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp3);
      obj17.style = items;
      tmp26 = closure_1;
      obj18 = {
        deco: null,
        pfx: null,
        nameplate: null,
        size: "small",
        previewAssets: null,
        disableStaticBackground: true,
        targetSize: null,
      };
      ({
        firstAvatarDecoration: obj15.deco,
        firstProfileEffect: obj15.pfx,
        firstNameplate: obj15.nameplate,
      } = itemsSortingHat);
      obj18.previewAssets = collectiblesItemData.previewAssets;
      tmp27 = closure_9;
      obj18.targetSize = closure_9;
      obj17.children = jsx(closure_1(closure_2[9]), obj18);
      obj1.children = jsx(View, obj17);
      return jsx(View, obj1);
    } else {
      type = collectiblesItemData.item.type;
      tmp28 = closure_0;
      tmp29 = closure_2;
      if (closure_0(closure_2[10]).CollectiblesItemType.AVATAR_DECORATION === type) {
        tmp15 = jsx;
        tmp16 = View;
        obj19 = { style: null, children: null };
        obj19.style = tmp3.container;
        obj20 = { style: null, children: null };
        obj20.style = tmp3.scaler;
        tmp17 = closure_1;
        obj21 = { item: null, size: 100 };
        obj21.item = collectiblesItemData.item;
        obj20.children = jsx(closure_1(tmp29[11]), obj21);
        obj19.children = jsx(View, obj20);
        return jsx(View, obj19);
      } else if (tmp28(tmp29[10]).CollectiblesItemType.PROFILE_EFFECT === type) {
        tmp12 = jsx;
        tmp13 = View;
        obj22 = { style: null, children: null };
        obj22.style = tmp3.container;
        obj23 = { style: null, children: null };
        obj23.style = tmp3.scaler;
        tmp14 = closure_1;
        obj24 = { item: null, hideBackground: true };
        obj24.item = collectiblesItemData.item;
        obj23.children = jsx(closure_1(tmp29[12]), obj24);
        obj22.children = jsx(View, obj23);
        return jsx(View, obj22);
      } else if (tmp28(tmp29[10]).CollectiblesItemType.PROFILE_FRAME === type) {
        tmp8 = jsx;
        tmp9 = View;
        obj25 = { style: null, children: null };
        obj25.style = tmp3.container;
        obj26 = { style: null, children: null };
        items1 = [,];
        ({ scaler: arr[0], profileFrameContainer: arr[1] } = tmp3);
        obj26.style = items1;
        tmp10 = closure_1;
        obj27 = { profileFrame: null, previewWidth: null, previewHeight: null };
        obj27.profileFrame = collectiblesItemData.item;
        tmp11 = closure_1(tmp29[13]);
        obj27.previewWidth = tmp28(tmp29[6]).DEFAULT_ITEM_SIZE - closure_1(tmp29[7]).space.PX_48;
        obj27.previewHeight = tmp28(tmp29[6]).DEFAULT_ITEM_SIZE;
        obj26.children = jsx(tmp11, obj27);
        obj25.children = jsx(View, obj26);
        return jsx(View, obj25);
      } else if (tmp28(tmp29[10]).CollectiblesItemType.NAMEPLATE === type) {
        tmp5 = jsx;
        tmp6 = View;
        obj = { style: null, children: null };
        obj.style = tmp3.container;
        obj28 = { style: null, children: null };
        obj28.style = tmp3.scaler;
        tmp7 = closure_1;
        obj29 = { item: null };
        obj29.item = collectiblesItemData.item;
        obj28.children = jsx(closure_1(tmp29[14]), obj29);
        obj.children = jsx(View, obj28);
        return jsx(View, obj);
      } else {
        tmp4 = null;
        return null;
      }
    }
  }
}
function CollectiblesSKUPreview(sku) {
  sku = sku.sku;
  let DEFAULT_ITEM_SIZE = sku.size;
  if (DEFAULT_ITEM_SIZE === undefined) {
    DEFAULT_ITEM_SIZE = sku(8235).DEFAULT_ITEM_SIZE;
  }
  const items = [sku];
  const memo = noop.useMemo(() => closure_5(sku), items);
  let tmp4 = null;
  if (null != memo) {
    const obj = { collectiblesItemData: memo, size: DEFAULT_ITEM_SIZE };
    tmp4 = <CollectiblesPreview collectiblesItemData={memo} size={DEFAULT_ITEM_SIZE} />;
  }
  return tmp4;
}
class SocialLayerStorefrontSKUPreview {
  constructor(arg0) {
    DEFAULT_ITEM_SIZE = global.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      DEFAULT_ITEM_SIZE = closure_0(closure_2[6]).DEFAULT_ITEM_SIZE;
    }
    size = DEFAULT_ITEM_SIZE;
    if (typeof DEFAULT_ITEM_SIZE === "number") {
      size1 = { width: null, height: null };
      size1.width = DEFAULT_ITEM_SIZE;
      size1.height = DEFAULT_ITEM_SIZE;
      size = size1;
    }
    tmp3 = closure_8(size.width, size.height);
    obj = { sku: global.sku, containerStyle: tmp3.socialLayerStorefrontContainer };
    return jsx(closure_1(closure_2[15]), obj);
  }
}
class PremiumSKUPreview {
  constructor(arg0) {
    DEFAULT_ITEM_SIZE = global.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      DEFAULT_ITEM_SIZE = closure_0(closure_2[6]).DEFAULT_ITEM_SIZE;
    }
    size = DEFAULT_ITEM_SIZE;
    if (typeof DEFAULT_ITEM_SIZE === "number") {
      size1 = { width: null, height: null };
      size1.width = DEFAULT_ITEM_SIZE;
      size1.height = DEFAULT_ITEM_SIZE;
      size = size1;
    }
    tmp3 = closure_8(size.width, size.height);
    obj = closure_0(closure_2[16]);
    obj1 = { style: tmp3.premiumRiveContainer, children: null };
    token = obj.useToken(closure_1(closure_2[7]).colors.TEXT_DEFAULT);
    obj5 = { dataBinding: { logoColor: token } };
    obj1.children = jsx(closure_0(closure_2[17]).ThemeAwareNitroWishlistingWumpusRive, obj5);
    return jsx(View, obj1);
  }
}
const View = fn(17).View;
let closure_5 = fn(6966).transformSKUToCollectiblesItem;
const SKUProductLines = fn(1074).SKUProductLines;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
const React6 = createStyles.createStyles((width, height) => {
  const obj = {
    container: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" },
    scaler: null,
    bundleContainer: null,
    socialLayerStorefrontContainer: null,
    profileFrameContainer: null,
    premiumRiveContainer: null,
  };
  size = {
    width: WishlistItemCardBase.DEFAULT_ITEM_SIZE,
    height: WishlistItemCardBase.DEFAULT_ITEM_SIZE,
    justifyContent: "center",
    alignItems: "center",
    transform: null,
  };
  const items = [{ scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE }];
  const obj2 = { scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  items[1] = { scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  size.transform = items;
  obj.scaler = size;
  obj.bundleContainer = { paddingTop: 20 };
  obj.socialLayerStorefrontContainer = { width, height };
  const obj3 = { scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  obj.profileFrameContainer = { padding: nativeDefault.space.PX_8 };
  obj.premiumRiveContainer = { width, height };
  return obj;
});
let size = { width: fn(8235).DEFAULT_ITEM_SIZE, height: fn(8235).DEFAULT_ITEM_SIZE };
size = fn(2);
const result = size.fileFinishedImporting("modules/skus/native/SKUPreview.tsx");

export default function SKUPreview(arg0) {
  ({ sku, size } = arg0);
  if (size === undefined) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    const obj2 = { sku, size };
    return <CollectiblesSKUPreview sku={sku} size={size} />;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    const obj3 = { sku, size };
    return <SocialLayerStorefrontSKUPreview sku={sku} size={size} />;
  } else if (SKUProductLines.PREMIUM === productLine) {
    const obj4 = { size };
    return <PremiumSKUPreview size={size} />;
  } else {
    if (SKUProductLines.APPLICATION !== productLine) {
      if (SKUProductLines.BOOST !== productLine) {
        if (SKUProductLines.GUILD_ROLE !== productLine) {
          if (SKUProductLines.GUILD_PRODUCT !== productLine) {
            GlobalUtils.assertNever(sku.productLine);
          }
        }
      }
    }
    return null;
  }
}
export { CollectiblesPreview };
export { SocialLayerStorefrontSKUPreview };
export { PremiumSKUPreview };
