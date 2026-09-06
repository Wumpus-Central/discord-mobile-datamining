// === Module 13138: IndividualProductPreview ===

// Module 13138 (IndividualProductPreview)
import nativeDefault from "native" /* 576 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1077 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import useCurrentUser from "useCurrentUser" /* 8178 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 11108 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11219 */;
import AvatarDecorationProductPreviewDefault from "AvatarDecorationProductPreview" /* 13139 */;
import NameplateProductPreviewDefault from "NameplateProductPreview" /* 13140 */;
import FractionalNitroPreview from "FractionalNitroPreview" /* 13141 */;
import OrbBadgePreview from "OrbBadgePreview" /* 13144 */;
import noop from "module_19" /* 19 */;

require = fn;
function ProfilePreviewWrapper(children) {
  ({ handlePreviewPress: require, onTrackPress: importDefault } = children);
  const tmp = closure_9();
  let obj = {
    onPress() {
      if (importDefault != null) {
        tmp(constants2.FULL_PROFILE_PREVIEW);
      }
      if (require != null) {
        tmp4();
      }
    },
    style: tmp.collectiblePreview,
    children: null
  };
  obj = { style: tmp.profilePreviewContainer, children: null };
  const items = [children.children, ];
  obj = { style: tmp.profilePreviewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items1 = ["" + tmp.profilePreviewGradient.color + "00", tmp.profilePreviewGradient.color];
  obj.colors = items1;
  items[1] = closure_7(LinearGradientDefault, obj);
  obj.children = items;
  obj.children = closure_8(closure_4, obj);
  return closure_7(closure_3, obj);
}
function ProfileEffectPreview(arg0) {
  ({ profileEffect, width, handlePreviewPress, onTrackPress } = arg0);
  let obj = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { user: currentUser, profileEffect, maxWidth: width, style: closure_9().profilePreview };
  obj.children = React5(ProfileEffectUserPreviewDefault, obj);
  return React5(ProfilePreviewWrapper, obj);
}
function ProfileFramePreview(arg0) {
  ({ profileFrame, width, handlePreviewPress, onTrackPress } = arg0);
  let obj = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { profileFrame, user: currentUser, maxWidth: width, style: closure_9().profilePreview };
  obj.children = React5(ProfileFrameUserPreviewDefault, obj);
  return React5(ProfilePreviewWrapper, obj);
}
function AvatarDecorationPreview(product) {
  ({ handlePreviewPress: require, onTrackPress: importDefault } = product);
  return closure_7(closure_3, {
    onPress() {
      if (importDefault != null) {
        tmp(constants2.FULL_PROFILE_PREVIEW);
      }
      if (require != null) {
        tmp4();
      }
    },
    style: closure_9().collectiblePreview,
    children: closure_7(AvatarDecorationProductPreviewDefault, { product: product.product })
  });
}
function NameplatePreview(product) {
  return React5(React4, { style: closure_9().collectiblePreview, children: React5(NameplateProductPreviewDefault, { product: product.product }) });
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1076);
({ EXTERNAL_PRODUCT_SKU_IDS: hasOwnProperty, ShopCtaEnum: metroRequire } = CollectiblesShopConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { collectiblePreview: null, profilePreviewContainer: null, profilePreview: null, profilePreviewGradient: null };
createStyles = { marginTop: nativeDefault.space.PX_12, position: "relative", height: 280 };
createStyles.collectiblePreview = createStyles;
createStyles.profilePreviewContainer = { position: "relative", flex: 1, alignItems: "center", overflow: "hidden" };
createStyles.profilePreview = { width: "66%" };
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.bottom = -1;
obj1.pointerEvents = "none";
obj1.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
createStyles.profilePreviewGradient = obj1;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

export const IndividualProductPreview = function IndividualProductPreview(arg0) {
  ({ product, width, handlePreviewPress, onTrackPress } = arg0);
  const type = product.type;
  if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    let obj = { product };
    return React5(NameplatePreview, obj);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    obj = { profileEffect: product.items[0], width, handlePreviewPress, onTrackPress };
    return React5(ProfileEffectPreview, obj);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const obj1 = { profileFrame: product.items[0], width, handlePreviewPress, onTrackPress };
    return React5(ProfileFramePreview, obj1);
  } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    obj = { product, handlePreviewPress, onTrackPress };
    return React5(AvatarDecorationPreview, obj);
  } else if (CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU === type) {
    const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let tmp5 = React5(FractionalNitroPreview.FractionalNitroPreview, {});
    } else {
      tmp5 = null;
      if (product.skuId === constants.ORB_PROFILE_BADGE) {
        tmp5 = React5(OrbBadgePreview.OrbBadgePreview, {});
      }
    }
    return tmp5;
  } else {
    return null;
  }
};