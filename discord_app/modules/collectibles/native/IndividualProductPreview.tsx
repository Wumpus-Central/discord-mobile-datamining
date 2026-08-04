// discord_app/modules/collectibles/native/IndividualProductPreview.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import items from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c3;
let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ProfilePreviewWrapper(children) {
  let importDefault;
  let require;
  ({ handlePreviewPress: require, onTrackPress: importDefault } = children);
  const tmp = createCacheKey();
  let obj = {
    onPress() {
      if (closure_1 != null) {
        tmp(outer1_6.FULL_PROFILE_PREVIEW);
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
  items[1] = callback(importDefault(4615), obj);
  obj[1] = items;
  obj[2] = callback2(closure_4, obj);
  return callback(closure_3, obj);
}
class ProfileEffectPreview {
  constructor(arg0) {
    ({ profileEffect, profileEffectRestartKey, width, handlePreviewPress, onTrackPress } = global);
    tmp = jsxs();
    obj = require("useCurrentUser");
    obj = { handlePreviewPress, onTrackPress, children: null };
    currentUser = obj.useCurrentUser();
    obj1 = { user: currentUser, profileEffect, profileEffectRestartKey, maxWidth: width, style: tmp.profilePreview };
    obj[2] = jsx(require("ProfileEffectUserPreview"), obj1);
    return jsx(ProfilePreviewWrapper, obj);
  }
}
function ProfileFramePreview(arg0) {
  let handlePreviewPress;
  let onTrackPress;
  let profileFrame;
  let width;
  ({ profileFrame, width, handlePreviewPress, onTrackPress } = arg0);
  let obj = require(8674) /* useCurrentUser */;
  obj = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { profileFrame, user: currentUser, maxWidth: width, style: createCacheKey().profilePreview };
  obj[2] = callback(importDefault(8754), obj);
  return callback(ProfilePreviewWrapper, obj);
}
class AvatarDecorationPreview {
  constructor(arg0) {
    ({ handlePreviewPress, onTrackPress } = global);
    obj = {
      onPress() {
            if (closure_1 != null) {
              tmp(outer1_6.FULL_PROFILE_PREVIEW);
            }
            if (closure_0 != null) {
              tmp4();
            }
          },
      style: jsxs().collectiblePreview,
      children: jsx(require("AvatarDecorationProductPreview"), { product: global.product })
    };
    return jsx(Pressable, obj);
  }
}
class NameplatePreview {
  constructor(arg0) {
    obj = { style: jsxs().collectiblePreview, children: jsx(require("NameplateUser"), { product: global.product }) };
    return jsx(View, obj);
  }
}
({ Pressable: c3, View: c4, StyleSheet } = get_ActivityIndicator);
({ EXTERNAL_PRODUCT_SKU_IDS: c5, ShopCtaEnum: closure_6 } = items);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { collectiblePreview: null, profilePreviewContainer: null, profilePreview: null, profilePreviewGradient: null };
createCacheKey = { marginTop: require("Themes").space.PX_12, position: "relative", height: 280 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "relative", flex: 1, alignItems: "center", overflow: "hidden" };
createCacheKey[2] = { width: "66%" };
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.bottom = -1;
obj1.pointerEvents = "none";
obj1.color = require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND;
createCacheKey[3] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("items").fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

export { ProfileEffectPreview };
export { AvatarDecorationPreview };
export { NameplatePreview };
export const IndividualProductPreview = function IndividualProductPreview(arg0) {
  let handlePreviewPress;
  let onTrackPress;
  let product;
  let width;
  ({ product, width, handlePreviewPress, onTrackPress } = arg0);
  const type = product.type;
  if (require(1901) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
    let obj = { product: null };
    obj[0] = product;
    return callback(NameplatePreview, obj);
  } else if (tmp(1901).CollectiblesItemType.PROFILE_EFFECT === type) {
    obj = { profileEffect: null, width: null, handlePreviewPress: null, onTrackPress: null };
    obj[0] = product.items[0];
    obj[1] = width;
    obj[2] = handlePreviewPress;
    obj[3] = onTrackPress;
    return callback(ProfileEffectPreview, obj);
  } else if (tmp(1901).CollectiblesItemType.PROFILE_FRAME === type) {
    const obj1 = { profileFrame: null, width: null, handlePreviewPress: null, onTrackPress: null };
    obj1[0] = product.items[0];
    obj1[1] = width;
    obj1[2] = handlePreviewPress;
    obj1[3] = onTrackPress;
    return callback(ProfileFramePreview, obj1);
  } else if (tmp(1901).CollectiblesItemType.AVATAR_DECORATION === type) {
    obj = { product: null, handlePreviewPress: null, onTrackPress: null };
    obj[0] = product;
    obj[1] = handlePreviewPress;
    obj[2] = onTrackPress;
    return callback(AvatarDecorationPreview, obj);
  } else if (tmp(1901).CollectiblesItemType.EXTERNAL_SKU === type) {
    const ALL = tmp(679).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let tmp5 = callback(tmp(8758).FractionalNitroPreview, {});
    } else {
      tmp5 = null;
      if (product.skuId === constants.ORB_PROFILE_BADGE) {
        tmp5 = callback(tmp(8761).OrbBadgePreview, {});
      }
    }
    return tmp5;
  } else {
    return null;
  }
};