// discord_app/modules/skus/native/SKUPreview.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import ManaContext from "../../../../discord_common/js/packages/design/native.tsx";
import SourceIcon from "../../wishlists/native/WishlistItemCardBase.tsx";
import firstAvatarDecoration from "../../collectibles/hooks/useShopProductItems.tsx";
import BundleStaticPreviewContentDefault from "../../collectibles/native/BundleSampleV2.tsx";
import ProfileEffectSampleDefault from "../../collectibles/native/ProfileEffectSampleV2.tsx";
import AvatarDecorationSampleV2Default from "../../collectibles/native/AvatarDecorationSampleV2.tsx";
import filterLayerDefault from "../../collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import NameplateCardPreviewDefault from "../../collectibles/nameplates/native/NameplateCardPreview.tsx";
import SlayerStorefrontItemCardDefault from "../../slayer_storefront/native/SlayerStorefrontItemCard.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { transformSKUToCollectiblesItem as closure_5 } from "../../collectibles/records/CollectiblesItemRecord.tsx";
import { SKUProductLines } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class CollectiblesPreview {
  constructor(arg0) {
    ({ collectiblesItemData, size } = global);
    if (size === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      size = require("SourceIcon").DEFAULT_ITEM_SIZE;
    }
    size2 = size;
    if (typeof size === "number") {
      obj = { width: null, height: null };
      obj[0] = size;
      obj[1] = size;
      size2 = obj;
    }
    tmp3 = closure_8(size2.width, size2.height);
    if ("bundle" === collectiblesItemData.type) {
      tmp18 = closure_0;
      tmp19 = closure_2;
      tmp20 = new.target;
      tmp21 = new.target;
      itemsSortingHat = new require("firstAvatarDecoration").ItemsSortingHat(collectiblesItemData.items);
      tmp23 = itemsSortingHat;
      tmp24 = jsx;
      tmp25 = View;
      obj1 = { style: null, children: null };
      obj1[0] = tmp3.container;
      obj2 = { style: null, children: null };
      items = [, ];
      ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp3);
      obj2[0] = items;
      tmp26 = closure_1;
      obj3 = { deco: null, pfx: null, nameplate: null, size: "small", previewAssets: null, disableStaticBackground: true, targetSize: null };
      ({ firstAvatarDecoration: obj15[0], firstProfileEffect: obj15[1], firstNameplate: obj15[2] } = itemsSortingHat);
      obj3[4] = collectiblesItemData.previewAssets;
      tmp27 = closure_9;
      obj3[6] = closure_9;
      obj2[1] = jsx(require("BundleStaticPreviewContent"), obj3);
      obj1[1] = jsx(View, obj2);
      return jsx(View, obj1);
    } else {
      type = collectiblesItemData.item.type;
      tmp28 = closure_0;
      tmp29 = closure_2;
      if (require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION === type) {
        tmp15 = jsx;
        tmp16 = View;
        obj4 = { style: null, children: null };
        obj4[0] = tmp3.container;
        obj5 = { style: null, children: null };
        obj5[0] = tmp3.scaler;
        tmp17 = closure_1;
        obj6 = { item: null, size: 100 };
        obj6[0] = collectiblesItemData.item;
        obj5[1] = jsx(require("AvatarDecorationSampleV2"), obj6);
        obj4[1] = jsx(View, obj5);
        return jsx(View, obj4);
      } else if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT === type) {
        tmp12 = jsx;
        tmp13 = View;
        obj7 = { style: null, children: null };
        obj7[0] = tmp3.container;
        obj8 = { style: null, children: null };
        obj8[0] = tmp3.scaler;
        tmp14 = closure_1;
        obj9 = { item: null, hideBackground: true };
        obj9[0] = collectiblesItemData.item;
        obj8[1] = jsx(require("ProfileEffectSample"), obj9);
        obj7[1] = jsx(View, obj8);
        return jsx(View, obj7);
      } else if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME === type) {
        tmp8 = jsx;
        tmp9 = View;
        obj10 = { style: null, children: null };
        obj10[0] = tmp3.container;
        obj11 = { style: null, children: null };
        items1 = [, ];
        ({ scaler: arr[0], profileFrameContainer: arr[1] } = tmp3);
        obj11[0] = items1;
        tmp10 = closure_1;
        obj12 = { profileFrame: null, previewWidth: null, previewHeight: null };
        obj12[0] = collectiblesItemData.item;
        tmp11 = require("filterLayer");
        obj12[1] = require("SourceIcon").DEFAULT_ITEM_SIZE - require("Themes").space.PX_48;
        obj12[2] = require("SourceIcon").DEFAULT_ITEM_SIZE;
        obj11[1] = jsx(tmp11, obj12);
        obj10[1] = jsx(View, obj11);
        return jsx(View, obj10);
      } else if (require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE === type) {
        tmp5 = jsx;
        tmp6 = View;
        obj = { style: null, children: null };
        obj[0] = tmp3.container;
        obj13 = { style: null, children: null };
        obj13[0] = tmp3.scaler;
        tmp7 = closure_1;
        obj14 = { item: null };
        obj14[0] = collectiblesItemData.item;
        obj13[1] = jsx(require("NameplateCardPreview"), obj14);
        obj[1] = jsx(View, obj13);
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
    DEFAULT_ITEM_SIZE = sku(9502).DEFAULT_ITEM_SIZE;
  }
  const items = [sku];
  const memo = React.useMemo(() => closure_1_5(sku), items);
  let tmp4 = null;
  if (null != memo) {
    const obj = { collectiblesItemData: null, size: null };
    obj[0] = memo;
    obj[1] = DEFAULT_ITEM_SIZE;
    tmp4 = <CollectiblesPreview collectiblesItemData={null} size={null} />;
  }
  return tmp4;
}
class SocialLayerStorefrontSKUPreview {
  constructor(arg0) {
    DEFAULT_ITEM_SIZE = global.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      DEFAULT_ITEM_SIZE = require("SourceIcon").DEFAULT_ITEM_SIZE;
    }
    size = DEFAULT_ITEM_SIZE;
    if (typeof DEFAULT_ITEM_SIZE === "number") {
      obj = { width: null, height: null };
      obj[0] = DEFAULT_ITEM_SIZE;
      obj[1] = DEFAULT_ITEM_SIZE;
      size = obj;
    }
    tmp3 = closure_8(size.width, size.height);
    obj = { sku: global.sku, containerStyle: tmp3.socialLayerStorefrontContainer };
    return jsx(require("SlayerStorefrontItemCard"), obj);
  }
}
class PremiumSKUPreview {
  constructor(arg0) {
    DEFAULT_ITEM_SIZE = global.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      DEFAULT_ITEM_SIZE = require("SourceIcon").DEFAULT_ITEM_SIZE;
    }
    size = DEFAULT_ITEM_SIZE;
    if (typeof DEFAULT_ITEM_SIZE === "number") {
      obj = { width: null, height: null };
      obj[0] = DEFAULT_ITEM_SIZE;
      obj[1] = DEFAULT_ITEM_SIZE;
      size = obj;
    }
    tmp3 = closure_8(size.width, size.height);
    obj = require("map");
    obj1 = { style: tmp3.premiumRiveContainer, children: null };
    token = obj.useToken(require("Themes").colors.TEXT_DEFAULT);
    obj1[1] = jsx(require("ManaContext").ThemeAwareNitroWishlistingWumpusRive, { dataBinding: { logoColor: token } });
    return jsx(View, obj1);
  }
}
let closure_8 = createCacheKey.createStyles((width, height) => {
  let obj = { container: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, scaler: null, bundleContainer: null, socialLayerStorefrontContainer: null, profileFrameContainer: null, premiumRiveContainer: null };
  obj = { width: SourceIcon.DEFAULT_ITEM_SIZE, height: SourceIcon.DEFAULT_ITEM_SIZE, justifyContent: "center", alignItems: "center", transform: null };
  obj = { scaleX: width / SourceIcon.DEFAULT_ITEM_SIZE };
  const items = [obj, { scaleY: height / SourceIcon.DEFAULT_ITEM_SIZE }];
  obj[4] = items;
  obj[1] = obj;
  obj[2] = { paddingTop: 20 };
  obj[3] = { width, height };
  obj1 = { scaleY: height / SourceIcon.DEFAULT_ITEM_SIZE };
  obj[4] = { padding: ThemesDefault.space.PX_8 };
  obj[5] = { width, height };
  return obj;
});
createCacheKey = { width: require("SourceIcon").DEFAULT_ITEM_SIZE, height: require("SourceIcon").DEFAULT_ITEM_SIZE };
const result = require("set").fileFinishedImporting("modules/skus/native/SKUPreview.tsx");

export default function SKUPreview(arg0) {
  ({ sku, size } = arg0);
  if (size === undefined) {
    size = SourceIcon.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku: null, size: null };
    obj[0] = sku;
    obj[1] = size;
    return <CollectiblesSKUPreview sku={null} size={null} />;
  } else if (tmp3.SOCIAL_LAYER_GAME_ITEM === productLine) {
    obj = { sku: null, size: null };
    obj[0] = sku;
    obj[1] = size;
    return <SocialLayerStorefrontSKUPreview sku={null} size={null} />;
  } else if (tmp3.PREMIUM === productLine) {
    obj1 = { size: null };
    obj1[0] = size;
    return <PremiumSKUPreview size={null} />;
  } else {
    if (tmp3.APPLICATION !== productLine) {
      if (tmp3.BOOST !== productLine) {
        if (tmp3.GUILD_ROLE !== productLine) {
          if (tmp3.GUILD_PRODUCT !== productLine) {
            obj = isDiscordFrontendDevelopment;
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