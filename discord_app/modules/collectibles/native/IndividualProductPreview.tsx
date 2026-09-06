// discord_app/modules/collectibles/native/IndividualProductPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import ProfileEffectUserPreviewDefault from "../profile_effects/native/previews/ProfileEffectUserPreview.tsx";
import ProfileFrameUserPreviewDefault from "../profile_frames/native/previews/ProfileFrameUserPreview.tsx";
import AvatarDecorationProductPreviewDefault from "AvatarDecorationProductPreview.tsx";
import NameplateProductPreviewDefault from "../nameplates/native/NameplateProductPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    children: null,
  };
  obj = { style: tmp.profilePreviewContainer, children: null };
  const items = [children.children];
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
    children: closure_7(AvatarDecorationProductPreviewDefault, { product: product.product }),
  });
}
function NameplatePreview(product) {
  return React5(React4, {
    style: closure_9().collectiblePreview,
    children: React5(NameplateProductPreviewDefault, { product: product.product }),
  });
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1076);
({ EXTERNAL_PRODUCT_SKU_IDS: hasOwnProperty, ShopCtaEnum: metroRequire } = CollectiblesShopConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  collectiblePreview: null,
  profilePreviewContainer: null,
  profilePreview: null,
  profilePreviewGradient: null,
};
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
  } else if (tmp(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
    obj = { profileEffect: product.items[0], width, handlePreviewPress, onTrackPress };
    return React5(ProfileEffectPreview, obj);
  } else if (tmp(1889).CollectiblesItemType.PROFILE_FRAME === type) {
    const obj1 = { profileFrame: product.items[0], width, handlePreviewPress, onTrackPress };
    return React5(ProfileFramePreview, obj1);
  } else if (tmp(1889).CollectiblesItemType.AVATAR_DECORATION === type) {
    obj = { product, handlePreviewPress, onTrackPress };
    return React5(AvatarDecorationPreview, obj);
  } else if (tmp(1889).CollectiblesItemType.EXTERNAL_SKU === type) {
    const ALL = tmp(1077).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let tmp5 = React5(tmp(13141).FractionalNitroPreview, {});
    } else {
      tmp5 = null;
      if (product.skuId === constants.ORB_PROFILE_BADGE) {
        tmp5 = React5(tmp(13144).OrbBadgePreview, {});
      }
    }
    return tmp5;
  } else {
    return null;
  }
};
