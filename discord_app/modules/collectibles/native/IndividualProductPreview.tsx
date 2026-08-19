// === Module 9282: ProfilePreviewWrapper ===

// Module 9282 (ProfilePreviewWrapper)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import useCurrentUser from "useCurrentUser" /* 9176 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 9283 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 9570 */;
import AvatarDecorationProductPreviewDefault from "AvatarDecorationProductPreview" /* 9571 */;
import NameplateUserDefault from "NameplateUser" /* 9572 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import items from "items" /* 678 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function ProfilePreviewWrapper(children) {
  ({ handlePreviewPress: require, onTrackPress: importDefault } = children);
  const tmp = callback3();
  let obj = {
    onPress() {
      if (closure_1 != null) {
        tmp(closure_1_6.FULL_PROFILE_PREVIEW);
      }
      if (closure_0 != null) {
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
  obj[3] = items1;
  items[1] = callback(LinearGradientDefault, obj);
  obj[1] = items;
  obj[2] = callback2(closure_4, obj);
  return callback(closure_3, obj);
}
function ProfileEffectPreview(arg0) {
  ({ profileEffect, width, handlePreviewPress, onTrackPress } = arg0);
  let obj = useCurrentUser;
  obj = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { user: currentUser, profileEffect, maxWidth: width, style: callback3().profilePreview };
  obj[2] = callback(ProfileEffectUserPreviewDefault, obj);
  return callback(ProfilePreviewWrapper, obj);
}
function ProfileFramePreview(arg0) {
  ({ profileFrame, width, handlePreviewPress, onTrackPress } = arg0);
  let obj = useCurrentUser;
  obj = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { profileFrame, user: currentUser, maxWidth: width, style: callback3().profilePreview };
  obj[2] = callback(ProfileFrameUserPreviewDefault, obj);
  return callback(ProfilePreviewWrapper, obj);
}
function AvatarDecorationPreview(product) {
  ({ handlePreviewPress: require, onTrackPress: importDefault } = product);
  return callback(closure_3, {
    onPress() {
      if (closure_1 != null) {
        tmp(closure_1_6.FULL_PROFILE_PREVIEW);
      }
      if (closure_0 != null) {
        tmp4();
      }
    },
    style: callback3().collectiblePreview,
    children: callback(AvatarDecorationProductPreviewDefault, { product: product.product })
  });
}
function NameplatePreview(product) {
  return callback(closure_4, { style: callback3().collectiblePreview, children: callback(NameplateUserDefault, { product: product.product }) });
}
noopAll;
({ Pressable: c3, View: c4, StyleSheet } = get_ActivityIndicator);
({ EXTERNAL_PRODUCT_SKU_IDS: c5, ShopCtaEnum: closure_6 } = items);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { collectiblePreview: null, profilePreviewContainer: null, profilePreview: null, profilePreviewGradient: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_12, position: "relative", height: 280 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "relative", flex: 1, alignItems: "center", overflow: "hidden" };
createCacheKey[2] = { width: "66%" };
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.bottom = -1;
obj1.pointerEvents = "none";
obj1.color = ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
createCacheKey[3] = obj1;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

export const IndividualProductPreview = function IndividualProductPreview(arg0) {
  ({ product, width, handlePreviewPress, onTrackPress } = arg0);
  const type = product.type;
  if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    let obj = { product: null };
    obj[0] = product;
    return callback(NameplatePreview, obj);
  } else if (tmp(1949).CollectiblesItemType.PROFILE_EFFECT === type) {
    obj = { profileEffect: null, width: null, handlePreviewPress: null, onTrackPress: null };
    obj[0] = product.items[0];
    obj[1] = width;
    obj[2] = handlePreviewPress;
    obj[3] = onTrackPress;
    return callback(ProfileEffectPreview, obj);
  } else if (tmp(1949).CollectiblesItemType.PROFILE_FRAME === type) {
    obj1 = { profileFrame: null, width: null, handlePreviewPress: null, onTrackPress: null };
    obj1[0] = product.items[0];
    obj1[1] = width;
    obj1[2] = handlePreviewPress;
    obj1[3] = onTrackPress;
    return callback(ProfileFramePreview, obj1);
  } else if (tmp(1949).CollectiblesItemType.AVATAR_DECORATION === type) {
    obj = { product: null, handlePreviewPress: null, onTrackPress: null };
    obj[0] = product;
    obj[1] = handlePreviewPress;
    obj[2] = onTrackPress;
    return callback(AvatarDecorationPreview, obj);
  } else if (tmp(1949).CollectiblesItemType.EXTERNAL_SKU === type) {
    const ALL = tmp(679).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let tmp5 = callback(tmp(9574).FractionalNitroPreview, {});
    } else {
      tmp5 = null;
      if (product.skuId === constants.ORB_PROFILE_BADGE) {
        tmp5 = callback(tmp(9577).OrbBadgePreview, {});
      }
    }
    return tmp5;
  } else {
    return null;
  }
};