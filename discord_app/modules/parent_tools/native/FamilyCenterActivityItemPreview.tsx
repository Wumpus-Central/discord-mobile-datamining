// discord_app/modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils from "../../collectibles/nameplates/utils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useMaybeFetchProfileFrameDefault from "../../collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx";
import NitroWheelIcon2 from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import NameplateUtils from "../../collectibles/nameplates/native/NameplateUtils.tsx";
import ProfileFrameSamplePreviewDefault from "../../collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import BoostGemIcon from "../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import ShopIcon from "../../../design/components/Icon/native/redesign/generated/ShopIcon.tsx";
import FamilyCenterActivityPurchaseRowUtils from "../FamilyCenterActivityPurchaseRowUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function AvatarDecorationPreviewImage(arg0) {
  ({ product, styles } = arg0);
  let obj = FamilyCenterActivityPurchaseRowUtils;
  const avatarDecorationPreviewUrl = obj.getAvatarDecorationPreviewUrl(product);
  let tmp2 = null;
  if (null != avatarDecorationPreviewUrl) {
    obj = { source: null, style: null, fadeDuration: 0 };
    obj = { uri: avatarDecorationPreviewUrl };
    obj.source = obj;
    obj.style = styles.avatarDecorationPreview;
    tmp2 = <React4 uri={avatarDecorationPreviewUrl} />;
  }
  return tmp2;
}
function NameplatePreviewImage(styles) {
  styles = styles.styles;
  let obj = NameplateUtils;
  const staticImageUrl = obj.getNameplateAssets(styles.nameplateData).staticImageUrl;
  let tmp = null;
  if (null != staticImageUrl) {
    obj = { style: styles.nameplateContainer, children: null };
    obj = { source: null, style: null, resizeMode: "cover", fadeDuration: 0 };
    const obj1 = { uri: staticImageUrl };
    obj.source = obj1;
    obj.style = styles.nameplatePreview;
    obj.children = <React4 source={null} style={null} resizeMode="cover" fadeDuration={0} />;
    tmp = <React3 source={null} style={null} resizeMode="cover" fadeDuration={0} />;
  }
  return tmp;
}
function ProfileEffectPreviewImage(arg0) {
  ({ product, styles } = arg0);
  let obj = FamilyCenterActivityPurchaseRowUtils;
  const profileEffectPreviewUrl = obj.getProfileEffectPreviewUrl(product);
  let tmp2 = null;
  if (null != profileEffectPreviewUrl) {
    obj = { source: null, style: null, fadeDuration: 0 };
    obj = { uri: profileEffectPreviewUrl };
    obj.source = obj;
    obj.style = styles.avatarDecorationPreview;
    tmp2 = <React4 uri={profileEffectPreviewUrl} />;
  }
  return tmp2;
}
function ProfileFramePreviewImage(arg0) {
  ({ product, styles } = arg0);
  const tmp3 = useMaybeFetchProfileFrameDefault(product.skuId, "FamilyCenterActivityItemPreview");
  let tmp4 = null;
  if (null != tmp3) {
    let obj = { style: styles.profileFrameContainer, children: null };
    obj = {
      profileFrame: tmp3,
      previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_5,
      previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE,
      profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    };
    obj.children = jsx(ProfileFrameSamplePreviewDefault, {
      profileFrame: tmp3,
      previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_5,
      previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE,
      profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    });
    tmp4 = (
      <React3
        profileFrame={tmp3}
        previewWidth={FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_5}
        previewHeight={FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE}
        profileBackgroundColor={nativeDefault.colors.BACKGROUND_BASE_LOW}
      />
    );
    const tmpResult = ProfileFrameSamplePreviewDefault;
  }
  return tmp4;
}
function SubscriptionPreview(arg0) {
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    let obj = { style: styles.purchasePlaceholder, children: null };
    obj = { size: "custom", style: { width: 20, height: 20 } };
    obj.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
    return <React3 size="custom" style={{ width: 20, height: 20 }} />;
  } else {
    const obj1 = { style: styles.purchasePlaceholder, children: null };
    if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
      let NitroWheelIcon = BoostGemIcon.BoostGemIcon;
    } else {
      NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
    }
    obj = { size: "custom", style: { width: 20, height: 20 } };
    obj1.children = <NitroWheelIcon size="custom" style={{ width: 20, height: 20 }} />;
    return <React3 style={styles.purchasePlaceholder}>{null}</React3>;
  }
}
function CollectiblePreview(arg0) {
  ({ product, styles } = arg0);
  if (null == product) {
    let obj = { style: styles.purchasePlaceholder, children: null };
    obj = { size: "custom", style: { width: 20, height: 20 } };
    obj.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
    return <React3 size="custom" style={{ width: 20, height: 20 }} />;
  } else {
    const type = product.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj1 = { product, styles };
      return <AvatarDecorationPreviewImage product={product} styles={styles} />;
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const nameplateDataFromProductRecord = utils.getNameplateDataFromProductRecord(product);
      let tmp8 = null;
      if (null != nameplateDataFromProductRecord) {
        const obj2 = { nameplateData: nameplateDataFromProductRecord, styles };
        tmp8 = <NameplatePreviewImage nameplateData={nameplateDataFromProductRecord} styles={styles} />;
      }
      return tmp8;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj3 = { product, styles };
      return <ProfileEffectPreviewImage product={product} styles={styles} />;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const obj4 = { product, styles };
      return <ProfileFramePreviewImage product={product} styles={styles} />;
    } else {
      obj = { style: styles.purchasePlaceholder, children: null };
      const obj5 = { size: "custom", style: { width: 20, height: 20 } };
      obj.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
      return <React3 style={styles.purchasePlaceholder}>{null}</React3>;
    }
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
let closure_5 = fn(8222).PROFILE_FRAME_ASPECT_RATIO;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = {
  purchasePlaceholder: null,
  avatarDecorationPreview: null,
  nameplateContainer: null,
  nameplatePreview: null,
  profileFrameContainer: null,
};
let size = {
  width: fn(14902).PREVIEW_SIZE,
  height: fn(14902).PREVIEW_SIZE,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 12,
};
createStyles.purchasePlaceholder = size;
const size1 = { width: fn(14902).PREVIEW_SIZE, height: fn(14902).PREVIEW_SIZE, marginRight: 12 };
createStyles.avatarDecorationPreview = size1;
const size2 = {
  width: fn(14902).PREVIEW_SIZE,
  height: fn(14902).PREVIEW_SIZE,
  marginRight: 12,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  position: "relative",
};
createStyles.nameplateContainer = size2;
const size3 = {
  position: "absolute",
  right: 0,
  width: fn(14902).PREVIEW_SIZE * fn(14902).NAMEPLATE_ASPECT_RATIO,
  height: fn(14902).PREVIEW_SIZE,
};
createStyles.nameplatePreview = size3;
const size4 = {
  width: fn(14902).PREVIEW_SIZE,
  height: fn(14902).PREVIEW_SIZE,
  marginRight: 12,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.profileFrameContainer = size4;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default function FamilyCenterActivityItemPreview(arg0) {
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp = closure_7();
  let obj = { accessible: true, accessibilityLabel: displayName, children: null };
  if (isSubscription) {
    obj = { subscriptionPlanId, styles: tmp };
    let tmp2Result = <SubscriptionPreview subscriptionPlanId={subscriptionPlanId} styles={tmp} />;
  } else {
    obj = { product, styles: tmp };
    tmp2Result = <CollectiblePreview product={product} styles={tmp} />;
  }
  obj.children = tmp2Result;
  return (
    <React3 accessible accessibilityLabel={displayName}>
      {null}
    </React3>
  );
}
