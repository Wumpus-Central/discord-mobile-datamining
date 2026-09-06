// === Module 8772: SKUPreview ===

// Module 8772 (SKUPreview)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import useToken from "useToken" /* 4262 */;
import native from "native" /* 4271 */;
import useShopProductItems from "useShopProductItems" /* 8171 */;
import WishlistItemCardBase from "WishlistItemCardBase" /* 8773 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8797 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8799 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8810 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8822 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8824 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8825 */;
import noop from "module_19" /* 19 */;

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
      size = { width: null, height: null };
      size.width = size;
      size.height = size;
      size2 = size;
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
      obj = { style: null, children: null };
      obj.style = tmp3.container;
      obj1 = { style: null, children: null };
      items = [, ];
      ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp3);
      obj1.style = items;
      tmp26 = closure_1;
      obj2 = { deco: null, pfx: null, nameplate: null, size: "small", previewAssets: null, disableStaticBackground: true, targetSize: null };
      ({ firstAvatarDecoration: obj15.deco, firstProfileEffect: obj15.pfx, firstNameplate: obj15.nameplate } = itemsSortingHat);
      obj2.previewAssets = collectiblesItemData.previewAssets;
      tmp27 = closure_9;
      obj2.targetSize = closure_9;
      obj1.children = jsx(closure_1(closure_2[9]), obj2);
      obj.children = jsx(View, obj1);
      return jsx(View, obj);
    } else {
      type = collectiblesItemData.item.type;
      tmp28 = closure_0;
      tmp29 = closure_2;
      if (closure_0(closure_2[10]).CollectiblesItemType.AVATAR_DECORATION === type) {
        tmp15 = jsx;
        tmp16 = View;
        obj3 = { style: null, children: null };
        obj3.style = tmp3.container;
        obj4 = { style: null, children: null };
        obj4.style = tmp3.scaler;
        tmp17 = closure_1;
        obj5 = { item: null, size: 100 };
        obj5.item = collectiblesItemData.item;
        obj4.children = jsx(closure_1(tmp29[11]), obj5);
        obj3.children = jsx(View, obj4);
        return jsx(View, obj3);
      } else if (tmp28(tmp29[10]).CollectiblesItemType.PROFILE_EFFECT === type) {
        tmp12 = jsx;
        tmp13 = View;
        obj6 = { style: null, children: null };
        obj6.style = tmp3.container;
        obj7 = { style: null, children: null };
        obj7.style = tmp3.scaler;
        tmp14 = closure_1;
        obj8 = { item: null, hideBackground: true };
        obj8.item = collectiblesItemData.item;
        obj7.children = jsx(closure_1(tmp29[12]), obj8);
        obj6.children = jsx(View, obj7);
        return jsx(View, obj6);
      } else if (tmp28(tmp29[10]).CollectiblesItemType.PROFILE_FRAME === type) {
        tmp8 = jsx;
        tmp9 = View;
        obj9 = { style: null, children: null };
        obj9.style = tmp3.container;
        obj10 = { style: null, children: null };
        items1 = [, ];
        ({ scaler: arr[0], profileFrameContainer: arr[1] } = tmp3);
        obj10.style = items1;
        tmp10 = closure_1;
        obj11 = { profileFrame: null, previewWidth: null, previewHeight: null };
        obj11.profileFrame = collectiblesItemData.item;
        tmp11 = closure_1(tmp29[13]);
        obj11.previewWidth = tmp28(tmp29[6]).DEFAULT_ITEM_SIZE - closure_1(tmp29[7]).space.PX_48;
        obj11.previewHeight = tmp28(tmp29[6]).DEFAULT_ITEM_SIZE;
        obj10.children = jsx(tmp11, obj11);
        obj9.children = jsx(View, obj10);
        return jsx(View, obj9);
      } else if (tmp28(tmp29[10]).CollectiblesItemType.NAMEPLATE === type) {
        tmp5 = jsx;
        tmp6 = View;
        obj = { style: null, children: null };
        obj.style = tmp3.container;
        obj12 = { style: null, children: null };
        obj12.style = tmp3.scaler;
        tmp7 = closure_1;
        obj13 = { item: null };
        obj13.item = collectiblesItemData.item;
        obj12.children = jsx(closure_1(tmp29[14]), obj13);
        obj.children = jsx(View, obj12);
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
    DEFAULT_ITEM_SIZE = sku(8773).DEFAULT_ITEM_SIZE;
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
      size = { width: null, height: null };
      size.width = DEFAULT_ITEM_SIZE;
      size.height = DEFAULT_ITEM_SIZE;
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
      size = { width: null, height: null };
      size.width = DEFAULT_ITEM_SIZE;
      size.height = DEFAULT_ITEM_SIZE;
    }
    tmp3 = closure_8(size.width, size.height);
    obj = closure_0(closure_2[16]);
    obj = { style: tmp3.premiumRiveContainer, children: null };
    token = obj.useToken(closure_1(closure_2[7]).colors.TEXT_DEFAULT);
    obj1 = { dataBinding: { logoColor: token } };
    obj.children = jsx(closure_0(closure_2[17]).ThemeAwareNitroWishlistingWumpusRive, obj1);
    return jsx(View, obj);
  }
}
const View = fn(17).View;
let closure_5 = fn(7546).transformSKUToCollectiblesItem;
const SKUProductLines = fn(1074).SKUProductLines;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
const React6 = createStyles.createStyles((width, height) => {
  let obj = { container: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, scaler: null, bundleContainer: null, socialLayerStorefrontContainer: null, profileFrameContainer: null, premiumRiveContainer: null };
  size = { width: WishlistItemCardBase.DEFAULT_ITEM_SIZE, height: WishlistItemCardBase.DEFAULT_ITEM_SIZE, justifyContent: "center", alignItems: "center", transform: null };
  obj = { scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  const items = [obj, ];
  obj = { scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  items[1] = obj;
  size.transform = items;
  obj.scaler = size;
  obj.bundleContainer = { paddingTop: 20 };
  obj.socialLayerStorefrontContainer = { width, height };
  obj.profileFrameContainer = { padding: nativeDefault.space.PX_8 };
  obj.premiumRiveContainer = { width, height };
  return obj;
});
let size = { width: fn(8773).DEFAULT_ITEM_SIZE, height: fn(8773).DEFAULT_ITEM_SIZE };
size = fn(2);
const result = size.fileFinishedImporting("modules/skus/native/SKUPreview.tsx");

export default function SKUPreview(arg0) {
  ({ sku, size } = arg0);
  if (size === undefined) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku, size };
    return <CollectiblesSKUPreview sku={sku} size={size} />;
  } else if (tmp3.SOCIAL_LAYER_GAME_ITEM === productLine) {
    obj = { sku, size };
    return <SocialLayerStorefrontSKUPreview sku={sku} size={size} />;
  } else if (tmp3.PREMIUM === productLine) {
    const obj1 = { size };
    return <PremiumSKUPreview size={size} />;
  } else {
    if (tmp3.APPLICATION !== productLine) {
      if (tmp3.BOOST !== productLine) {
        if (tmp3.GUILD_ROLE !== productLine) {
          if (tmp3.GUILD_PRODUCT !== productLine) {
            obj = GlobalUtils;
            obj.assertNever(sku.productLine);
          }
        }
      }
    }
    return null;
  }
};
export { CollectiblesPreview };
export { SocialLayerStorefrontSKUPreview };
export { PremiumSKUPreview };