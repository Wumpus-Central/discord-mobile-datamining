// === Module 13541: IndividualProductPreview ===

// Module 13541 (IndividualProductPreview)
import nativeDefault from "native" /* 576 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1077 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import LinearGradientDefault from "LinearGradient" /* 5285 */;
import useCurrentUser from "useCurrentUser" /* 8526 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 11462 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11571 */;
import AvatarDecorationProductPreviewDefault from "AvatarDecorationProductPreview" /* 13542 */;
import NameplateProductPreviewDefault from "NameplateProductPreview" /* 13543 */;
import FractionalNitroPreview from "FractionalNitroPreview" /* 13544 */;
import OrbBadgePreview from "OrbBadgePreview" /* 13547 */;
import noop from "module_19" /* 19 */;

require = fn;
function ProfilePreviewWrapper(children) {
  ({ handlePreviewPress: require, onTrackPress: importDefault } = children);
  const tmp = closure_9();
  const obj = {
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
  const obj2 = { style: tmp.profilePreviewContainer, children: null };
  const items = [children.children, ];
  const obj3 = { style: tmp.profilePreviewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items1 = ["" + tmp.profilePreviewGradient.color + "00", tmp.profilePreviewGradient.color];
  obj3.colors = items1;
  items[1] = closure_7(LinearGradientDefault, obj3);
  obj2.children = items;
  obj.children = closure_8(closure_4, obj2);
  return closure_7(closure_3, obj);
}
function ProfileEffectPreview(arg0) {
  ({ profileEffect, width, avatarDecorationOverride, profileFrameOverride, handlePreviewPress, onTrackPress } = arg0);
  const tmp = closure_9();
  const obj2 = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = useCurrentUser.useCurrentUser();
  obj2.children = React5(ProfileEffectUserPreviewDefault, { user: currentUser, profileEffect, avatarDecorationOverride, profileFrameOverride, maxWidth: width, style: tmp.profilePreview });
  return React5(ProfilePreviewWrapper, obj2);
}
function ProfileFramePreview(arg0) {
  ({ profileFrame, width, avatarDecorationOverride, profileEffectOverride, handlePreviewPress, onTrackPress } = arg0);
  const tmp = closure_9();
  const obj2 = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = useCurrentUser.useCurrentUser();
  obj2.children = React5(ProfileFrameUserPreviewDefault, { profileFrame, user: currentUser, avatarDecorationOverride, profileEffectOverride, maxWidth: width, style: tmp.profilePreview });
  return React5(ProfilePreviewWrapper, obj2);
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
function NameplatePreview(arg0) {
  ({ product, avatarDecorationOverride } = arg0);
  return React5(React4, { style: closure_9().collectiblePreview, children: React5(NameplateProductPreviewDefault, { product, avatarDecorationOverride }) });
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1076);
({ EXTERNAL_PRODUCT_SKU_IDS: hasOwnProperty, ShopCtaEnum: metroRequire } = CollectiblesShopConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { collectiblePreview: { marginTop: nativeDefault.space.PX_12, position: "relative", height: 280 }, profilePreviewContainer: { position: "relative", flex: 1, alignItems: "center", overflow: "hidden" }, profilePreview: { width: "66%" }, profilePreviewGradient: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.bottom = -1;
obj4.pointerEvents = "none";
obj4.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj2.profilePreviewGradient = obj4;
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

export const IndividualProductPreview = function IndividualProductPreview(arg0) {
  ({ product, width, avatarDecorationOverride, handlePreviewPress, onTrackPress } = arg0);
  const type = product.type;
  ({ profileFrameOverride, profileEffectOverride } = arg0);
  if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    const obj2 = { product, avatarDecorationOverride };
    return React5(NameplatePreview, obj2);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const obj3 = { profileEffect: product.items[0], width, avatarDecorationOverride, profileFrameOverride, handlePreviewPress, onTrackPress };
    return React5(ProfileEffectPreview, obj3);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const obj4 = { profileFrame: product.items[0], width, avatarDecorationOverride, profileEffectOverride, handlePreviewPress, onTrackPress };
    return React5(ProfileFramePreview, obj4);
  } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const obj = { product, handlePreviewPress, onTrackPress };
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