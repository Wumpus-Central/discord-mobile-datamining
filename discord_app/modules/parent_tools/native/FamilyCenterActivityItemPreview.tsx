// === Module 15188: FamilyCenterActivityItemPreview ===

// Module 15188 (FamilyCenterActivityItemPreview)
import nativeDefault from "native" /* 576 */;
import utils from "utils" /* 1970 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import useMaybeFetchProfileFrameDefault from "useMaybeFetchProfileFrame" /* 8474 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 8945 */;
import NameplateUtils from "NameplateUtils" /* 9105 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 9108 */;
import BoostGemIcon from "BoostGemIcon" /* 9495 */;
import ShopIcon from "ShopIcon" /* 12395 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 15187 */;
import noop from "module_19" /* 19 */;

require = fn;
function AvatarDecorationPreviewImage(arg0) {
  ({ product, styles } = arg0);
  const avatarDecorationPreviewUrl = FamilyCenterActivityPurchaseRowUtils.getAvatarDecorationPreviewUrl(product);
  let tmp2 = null;
  if (null != avatarDecorationPreviewUrl) {
    const obj2 = { source: null, style: null, fadeDuration: 0 };
    const obj3 = { uri: avatarDecorationPreviewUrl };
    obj2.source = obj3;
    obj2.style = styles.avatarDecorationPreview;
    tmp2 = <React4 source={null} style={null} fadeDuration={0} />;
  }
  return tmp2;
}
function NameplatePreviewImage(styles) {
  styles = styles.styles;
  const staticImageUrl = NameplateUtils.getNameplateAssets(styles.nameplateData).staticImageUrl;
  let tmp = null;
  if (null != staticImageUrl) {
    const obj2 = { style: styles.nameplateContainer, children: null };
    const obj3 = { source: null, style: null, resizeMode: "cover", fadeDuration: 0 };
    const obj4 = { uri: staticImageUrl };
    obj3.source = obj4;
    obj3.style = styles.nameplatePreview;
    obj2.children = <React4 source={null} style={null} resizeMode="cover" fadeDuration={0} />;
    tmp = <React3 style={styles.nameplateContainer}>{null}</React3>;
  }
  return tmp;
}
function ProfileEffectPreviewImage(arg0) {
  ({ product, styles } = arg0);
  const profileEffectPreviewUrl = FamilyCenterActivityPurchaseRowUtils.getProfileEffectPreviewUrl(product);
  let tmp2 = null;
  if (null != profileEffectPreviewUrl) {
    const obj2 = { source: null, style: null, fadeDuration: 0 };
    const obj3 = { uri: profileEffectPreviewUrl };
    obj2.source = obj3;
    obj2.style = styles.avatarDecorationPreview;
    tmp2 = <React4 source={null} style={null} fadeDuration={0} />;
  }
  return tmp2;
}
function ProfileFramePreviewImage(arg0) {
  ({ product, styles } = arg0);
  const tmp3 = useMaybeFetchProfileFrameDefault(product.skuId);
  let tmp4 = null;
  if (null != tmp3) {
    const obj = { style: styles.profileFrameContainer, children: null };
    const obj2 = { profileFrame: tmp3, previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_5, previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
    obj.children = jsx(ProfileFrameSamplePreviewDefault, { profileFrame: tmp3, previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_5, previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
    tmp4 = <React3 style={styles.profileFrameContainer}>{null}</React3>;
    const tmpResult = ProfileFrameSamplePreviewDefault;
  }
  return tmp4;
}
function SubscriptionPreview(arg0) {
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    const obj2 = { style: styles.purchasePlaceholder, children: null };
    const obj3 = { size: "custom", style: { width: 20, height: 20 } };
    obj2.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
    return <React3 style={styles.purchasePlaceholder}>{null}</React3>;
  } else {
    const obj5 = { style: styles.purchasePlaceholder, children: null };
    if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
      let NitroWheelIcon = BoostGemIcon.BoostGemIcon;
    } else {
      NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
    }
    const obj = { size: "custom", style: { width: 20, height: 20 } };
    obj5.children = <NitroWheelIcon size="custom" style={{ width: 20, height: 20 }} />;
    return <React3 style={styles.purchasePlaceholder}>{null}</React3>;
  }
}
function CollectiblePreview(arg0) {
  ({ product, styles } = arg0);
  if (null == product) {
    const obj2 = { style: styles.purchasePlaceholder, children: null };
    const obj3 = { size: "custom", style: { width: 20, height: 20 } };
    obj2.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
    return <React3 style={styles.purchasePlaceholder}>{null}</React3>;
  } else {
    const type = product.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj4 = { product, styles };
      return <AvatarDecorationPreviewImage product={product} styles={styles} />;
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const nameplateDataFromProductRecord = utils.getNameplateDataFromProductRecord(product);
      let tmp8 = null;
      if (null != nameplateDataFromProductRecord) {
        const obj5 = { nameplateData: nameplateDataFromProductRecord, styles };
        tmp8 = <NameplatePreviewImage nameplateData={nameplateDataFromProductRecord} styles={styles} />;
      }
      return tmp8;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj6 = { product, styles };
      return <ProfileEffectPreviewImage product={product} styles={styles} />;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const obj7 = { product, styles };
      return <ProfileFramePreviewImage product={product} styles={styles} />;
    } else {
      const obj = { style: styles.purchasePlaceholder, children: null };
      const obj8 = { size: "custom", style: { width: 20, height: 20 } };
      obj.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
      return <React3 style={styles.purchasePlaceholder}>{null}</React3>;
    }
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
let closure_5 = fn(8495).PROFILE_FRAME_ASPECT_RATIO;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { purchasePlaceholder: null, avatarDecorationPreview: null, nameplateContainer: null, nameplatePreview: null, profileFrameContainer: null };
let size = { width: fn(15187).PREVIEW_SIZE, height: fn(15187).PREVIEW_SIZE, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 };
obj2.purchasePlaceholder = size;
const size1 = { width: fn(15187).PREVIEW_SIZE, height: fn(15187).PREVIEW_SIZE, marginRight: 12 };
obj2.avatarDecorationPreview = size1;
const size2 = { width: fn(15187).PREVIEW_SIZE, height: fn(15187).PREVIEW_SIZE, marginRight: 12, borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
obj2.nameplateContainer = size2;
const size3 = { position: "absolute", right: 0, width: fn(15187).PREVIEW_SIZE * fn(15187).NAMEPLATE_ASPECT_RATIO, height: fn(15187).PREVIEW_SIZE };
obj2.nameplatePreview = size3;
const size4 = { width: fn(15187).PREVIEW_SIZE, height: fn(15187).PREVIEW_SIZE, marginRight: 12, alignItems: "center", justifyContent: "center" };
obj2.profileFrameContainer = size4;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default function FamilyCenterActivityItemPreview(arg0) {
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp = closure_7();
  const obj = { accessible: true, accessibilityLabel: displayName, children: null };
  if (isSubscription) {
    const obj2 = { subscriptionPlanId, styles: tmp };
    let tmp2Result = <SubscriptionPreview subscriptionPlanId={subscriptionPlanId} styles={tmp} />;
  } else {
    const obj3 = { product, styles: tmp };
    tmp2Result = <CollectiblePreview product={product} styles={tmp} />;
  }
  obj.children = tmp2Result;
  return <React3 accessible accessibilityLabel={displayName}>{null}</React3>;
};