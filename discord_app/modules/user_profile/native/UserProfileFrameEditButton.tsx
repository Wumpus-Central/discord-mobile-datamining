import _slicedToArray from "_slicedToArray";
import FormControlText from "FormControlText";
import { View } from "asyncRequireImpl";
import { COLLECTIBLES_PREVIEW_SIZE } from "ARBITRARY_LARGE_OFFSET";
import { ContentDismissActionType } from "ContentDismissActionType";
import { NOOP } from "sum";
import { jsx } from "Button";
import createCacheKey from "createCacheKey";

const require = arg1;
const PX_4 = require("Themes").space.PX_4;
createCacheKey = { previewContainer: null, noneIcon: null, newBadge: null };
createCacheKey = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, paddingVertical: PX_4, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.xs, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: require("Themes").colors.TEXT_SUBTLE };
let obj1 = { tintColor: require("Themes").colors.TEXT_SUBTLE };
createCacheKey[2] = { paddingTop: 0, marginLeft: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingTop: 0, marginLeft: require("Themes").space.PX_4 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  let displayProfile;
  let guildId;
  let pendingProfileFrame;
  let user;
  ({ displayProfile, user } = arg0);
  ({ pendingProfileFrame, guildId } = arg0);
  let dependencyMap;
  let userProfileFrame;
  const tmp = createCacheKey();
  let obj = user(8886);
  const canViewProfileFramesInCollectiblesShop = obj.useCanViewProfileFramesInCollectiblesShop("UserProfileFrameEditButton");
  let obj1 = user(5921);
  const items = [user(1358).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE];
  const tmp5 = userProfileFrame(obj1.useSelectedDismissibleContent(items), 2);
  dependencyMap = tmp6;
  let obj2 = user(8065);
  obj = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
  let profileFrame;
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj[1] = profileFrame;
  let profileFrame1;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj[2] = profileFrame1;
  obj[3] = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  let tmp2Result = tmp2(8381);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = tmp2Result.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  if (type === user(1901).CollectiblesItemType.PROFILE_FRAME) {
    const first1 = product.items[0];
  }
  tmp2Result = tmp2(8065);
  userProfileFrame = tmp2Result.useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp5[1]];
  if (canViewProfileFramesInCollectiblesShop) {
    let name;
    if (product != null) {
      name = product.name;
    }
    if (name == null) {
      const intl = tmp2(1236).intl;
      name = intl.string(tmp2(1236).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == userProfileFrame) {
        const intl2 = tmp2(1236).intl;
        obj = { label: null };
        obj[0] = name;
        formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.ep5D4i, obj);
      }
    }
    if (fetchCollectiblesProduct.isFetching) {
      obj1 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
      const intl5 = tmp2(1236).intl;
      obj1[0] = intl5.string(tmp2(1236).t.GWrZOd);
      const intl6 = tmp2(1236).intl;
      obj1[1] = intl6.string(tmp2(1236).t.MKDeyL);
      obj1[2] = NOOP;
      obj1[3] = tmp19(tmp2(5703).ActivityIndicator, { animating: true, size: "large" });
      obj2 = obj1;
    } else {
      obj2 = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
      const intl3 = tmp2(1236).intl;
      obj2[0] = intl3.string(tmp2(1236).t.GWrZOd);
      let tmp19Result;
      if (tmp5[0] === tmp2(1358).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE) {
        const obj3 = { "aria-hidden": true, children: null };
        const obj4 = { text: null, style: null };
        const intl4 = tmp2(1236).intl;
        obj4[0] = intl4.string(tmp2(1236).t.y2b7CA);
        obj4[1] = tmp.newBadge;
        obj3[1] = tmp19(tmp2(1297).TextBadge, obj4);
        tmp19Result = tmp19(View, obj3);
      }
      obj2[1] = tmp19Result;
      obj2[2] = formatToPlainStringResult;
      const obj5 = { text: null };
      obj5[0] = formatToPlainStringResult;
      obj2[3] = obj5;
      obj2[4] = tmp16;
      if (null != first1) {
        const obj6 = { style: null, children: null };
        obj6[0] = tmp.previewContainer;
        const obj7 = { profileFrame: null, previewWidth: null, previewHeight: null, profileBackgroundColor: null };
        obj7[0] = first1;
        obj7[1] = COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(712).space.PX_8;
        obj7[2] = COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4;
        obj7[3] = guildId(712).colors.BACKGROUND_SURFACE_HIGH;
        obj6[1] = tmp19(guildId(8880), obj7);
        tmp19Result = tmp19(View, obj6);
        const tmp26 = guildId(8880);
      } else {
        const obj8 = { source: null, style: null };
        obj8[0] = guildId(8086);
        obj8[1] = tmp.noneIcon;
        tmp19Result = tmp19(tmp2(1297).Icon, obj8);
      }
      obj2[5] = tmp19Result;
    }
    return jsx(tmp2(13799).UserProfileEditFormButton, obj2);
  } else {
    return null;
  }
};