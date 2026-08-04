// discord_app/modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { PROFILE_FRAME_ASPECT_RATIO as closure_5 } from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
function AvatarDecorationPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  let obj = require(13952) /* getCollectibleTypeName */;
  const avatarDecorationPreviewUrl = obj.getAvatarDecorationPreviewUrl(product);
  let tmp2 = null;
  if (null != avatarDecorationPreviewUrl) {
    obj = { source: null, style: null, fadeDuration: 0 };
    obj = { uri: null };
    obj[0] = avatarDecorationPreviewUrl;
    obj[0] = obj;
    obj[1] = styles.avatarDecorationPreview;
    tmp2 = <closure_4 uri={null} />;
  }
  return tmp2;
}
function NameplatePreviewImage(styles) {
  styles = styles.styles;
  let obj = require(8075) /* getNameplateAssets */;
  const staticImageUrl = obj.getNameplateAssets(styles.nameplateData).staticImageUrl;
  let tmp = null;
  if (null != staticImageUrl) {
    obj = { style: null, children: null };
    obj[0] = styles.nameplateContainer;
    obj = { source: null, style: null, resizeMode: "cover", fadeDuration: 0 };
    const obj1 = { uri: null };
    obj1[0] = staticImageUrl;
    obj[0] = obj1;
    obj[1] = styles.nameplatePreview;
    obj[1] = <closure_4 source={null} style={null} resizeMode="cover" fadeDuration={0} />;
    tmp = <closure_3 source={null} style={null} resizeMode="cover" fadeDuration={0} />;
  }
  return tmp;
}
function ProfileEffectPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  let obj = require(13952) /* getCollectibleTypeName */;
  const profileEffectPreviewUrl = obj.getProfileEffectPreviewUrl(product);
  let tmp2 = null;
  if (null != profileEffectPreviewUrl) {
    obj = { source: null, style: null, fadeDuration: 0 };
    obj = { uri: null };
    obj[0] = profileEffectPreviewUrl;
    obj[0] = obj;
    obj[1] = styles.avatarDecorationPreview;
    tmp2 = <closure_4 uri={null} />;
  }
  return tmp2;
}
function ProfileFramePreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const tmp3 = importDefault(8086)(product.skuId, "FamilyCenterActivityItemPreview");
  let tmp4 = null;
  if (null != tmp3) {
    let obj = { style: null, children: null };
    obj[0] = styles.profileFrameContainer;
    obj = { profileFrame: null, previewWidth: null, previewHeight: null, profileBackgroundColor: null };
    obj[0] = tmp3;
    obj[1] = require(13952) /* getCollectibleTypeName */.PREVIEW_SIZE * closure_5;
    obj[2] = require(13952) /* getCollectibleTypeName */.PREVIEW_SIZE;
    obj[3] = tmp(712).colors.BACKGROUND_BASE_LOW;
    obj[1] = jsx(tmp(8703), { profileFrame: null, previewWidth: null, previewHeight: null, profileBackgroundColor: null });
    tmp4 = <closure_3 profileFrame={null} previewWidth={null} previewHeight={null} profileBackgroundColor={null} />;
    const tmpResult = tmp(8703);
  }
  return tmp4;
}
function SubscriptionPreview(arg0) {
  let styles;
  let subscriptionPlanId;
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    let obj = { style: null, children: null };
    obj[0] = styles.purchasePlaceholder;
    obj = { size: "custom", style: null };
    obj[1] = { width: 20, height: 20 };
    obj[1] = jsx(require(11329) /* ShopIcon */.ShopIcon, { size: "custom", style: null });
    return <closure_3 size="custom" style={null} />;
  } else {
    const obj1 = { style: null, children: null };
    obj1[0] = styles.purchasePlaceholder;
    if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
      let NitroWheelIcon = tmp5(6621).BoostGemIcon;
    } else {
      NitroWheelIcon = tmp5(6630).NitroWheelIcon;
    }
    obj = { size: "custom", style: null };
    obj[1] = { width: 20, height: 20 };
    obj1[1] = <NitroWheelIcon size="custom" style={null} />;
    return <closure_3 style={null}>{null}</closure_3>;
  }
}
function CollectiblePreview(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  if (null == product) {
    let obj = { style: null, children: null };
    obj[0] = styles.purchasePlaceholder;
    obj = { size: "custom", style: null };
    obj[1] = { width: 20, height: 20 };
    obj[1] = jsx(require(11329) /* ShopIcon */.ShopIcon, { size: "custom", style: null });
    return <closure_3 size="custom" style={null} />;
  } else {
    const type = product.type;
    if (require(1901) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj1 = { product: null, styles: null };
      obj1[0] = product;
      obj1[1] = styles;
      return <AvatarDecorationPreviewImage product={null} styles={null} />;
    } else if (tmp17(1901).CollectiblesItemType.NAMEPLATE === type) {
      const nameplateDataFromProductRecord = tmp17(1898).getNameplateDataFromProductRecord(product);
      let tmp8 = null;
      if (null != nameplateDataFromProductRecord) {
        const obj2 = { nameplateData: null, styles: null };
        obj2[0] = nameplateDataFromProductRecord;
        obj2[1] = styles;
        tmp8 = <NameplatePreviewImage nameplateData={null} styles={null} />;
      }
      return tmp8;
    } else if (tmp17(1901).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj3 = { product: null, styles: null };
      obj3[0] = product;
      obj3[1] = styles;
      return <ProfileEffectPreviewImage product={null} styles={null} />;
    } else if (tmp17(1901).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj4 = { product: null, styles: null };
      obj4[0] = product;
      obj4[1] = styles;
      return <ProfileFramePreviewImage product={null} styles={null} />;
    } else {
      obj = { style: null, children: null };
      obj[0] = styles.purchasePlaceholder;
      const obj5 = { size: "custom", style: null };
      obj5[1] = { width: 20, height: 20 };
      obj[1] = jsx(tmp17(11329).ShopIcon, { size: "custom", style: null });
      return <closure_3 style={null}>{null}</closure_3>;
    }
  }
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
createCacheKey = { purchasePlaceholder: null, avatarDecorationPreview: null, nameplateContainer: null, nameplatePreview: null, profileFrameContainer: null };
createCacheKey = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12 };
let obj1 = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12 };
createCacheKey[2] = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12, borderRadius: require("Themes").radii.xs, overflow: "hidden", position: "relative" };
let obj3 = { position: "absolute", right: 0, width: null, height: null };
obj3[2] = require("getCollectibleTypeName").PREVIEW_SIZE * require("getCollectibleTypeName").NAMEPLATE_ASPECT_RATIO;
obj3[3] = require("getCollectibleTypeName").PREVIEW_SIZE;
createCacheKey[3] = obj3;
let obj2 = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12, borderRadius: require("Themes").radii.xs, overflow: "hidden", position: "relative" };
createCacheKey[4] = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12, alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12, alignItems: "center", justifyContent: "center" };
const result = require("PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default function FamilyCenterActivityItemPreview(arg0) {
  let displayName;
  let isSubscription;
  let product;
  let subscriptionPlanId;
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp = createCacheKey();
  let obj = { accessible: true, accessibilityLabel: displayName, children: null };
  if (isSubscription) {
    obj = { subscriptionPlanId: null, styles: null };
    obj[0] = subscriptionPlanId;
    obj[1] = tmp;
    let tmp2Result = tmp2(SubscriptionPreview, obj);
  } else {
    obj = { product: null, styles: null };
    obj[0] = product;
    obj[1] = tmp;
    tmp2Result = tmp2(CollectiblePreview, obj);
  }
  obj[2] = tmp2Result;
  return <closure_3 accessible accessibilityLabel={displayName}>{null}</closure_3>;
};