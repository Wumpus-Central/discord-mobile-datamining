// === Module 14631: EditProfileFrameActionSheet ===

// Module 14631 (EditProfileFrameActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8164 */;
import useShopProductItems from "useShopProductItems" /* 8171 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8187 */;
import EditProfileFrameSection from "EditProfileFrameSection" /* 14633 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;

require = fn;
function EditProfileFrameInner(user) {
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  const guildId = user.guildId;
  let obj = user(guildId[20]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[21]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  const tmp7 = setSelectedProfileFrame(guildId[9])(user.id, guildId);
  let obj2 = user(guildId[23]);
  obj = { pendingValue: selectedProfileFrame, userValue: null, guildValue: null, guildId: null };
  let profileFrame;
  if (tmp7 != null) {
    const _userProfile = tmp7._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj.userValue = profileFrame;
  let profileFrame1;
  if (tmp7 != null) {
    const _guildMemberProfile = tmp7._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj.guildValue = profileFrame1;
  obj.guildId = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  const items1 = [user];
  const effect = noop.useEffect(() => {
    if (!tmp) {
      maybeFetchUserProfileDefault(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
    }
    tmp = null == user || user.isNonUserBot();
  }, items1);
  const items2 = [setSelectedProfileFrame, guildId];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return React7(EditProfileFrameSection.EditProfileFrameRow, { items, size, selectedSkuId, setSelectedProfileFrame, guildId });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(ProfileFrameSectionPreview, { previewSkuId: skuId, user, guildId }), , ];
  obj = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const tmp6 = setSelectedProfileFrame(guildId[22])();
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj.previewSkuId = skuId1;
  const intl = tmp(tmp2[18]).intl;
  obj.nitroJoinCTA = intl.string(user(guildId[18]).t["JvNv+a"]);
  const intl2 = tmp(tmp2[18]).intl;
  obj.nitroUpgradeCTA = intl2.string(user(guildId[18]).t.hR2psy);
  items3[1] = closure_9(setSelectedProfileFrame(guildId[26]), obj);
  obj1 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedProfileFrame != null) {
    skuId2 = selectedProfileFrame.skuId;
  }
  obj2 = { children: null };
  obj1.selectedSkuId = skuId2;
  obj1.renderRow = callback;
  obj1.isFetching = stateFromStores;
  items3[2] = closure_9(user(guildId[27]).EditCollectiblesPickerList, obj1);
  obj2.children = items3;
  return closure_10(closure_11, obj2);
}
function ProfileFrameSectionPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(8173)(previewSkuId);
  const product = tmp2.product;
  c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  let obj = { style: tmp.previewContainer, children: null };
  const memo = noop.useMemo(() => {
    let first;
    if (_undefined != null) {
      first = _undefined.items[0];
    }
    if (first == null) {
      let first1;
      if (purchase != null) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp3 = null;
    if (isProfileFrameRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const items1 = [closure_9(purchase(11219), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
  obj = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj.colors = items2;
  items1[1] = closure_9(purchase(4987), obj);
  obj.children = items1;
  return closure_10(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const isProfileFrameRecord = fn(7549).isProfileFrameRecord;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: null, bounceOffset: null, title: null, previewContainer: null, previewGradient: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
createStyles.bounceOffset = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createStyles.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createStyles.previewContainer = { overflow: "hidden", height: 300, alignItems: "center" };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.bottom = -1;
obj2.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
createStyles.previewGradient = obj2;
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default function EditProfileFrameActionSheet(arg0) {
  ({ user, currentProfileFrame, guildId } = arg0);
  importDefault = undefined;
  let selectedProfileFrame;
  let memo;
  let tmp = closure_12();
  let str = user.id;
  if (str == null) {
    str = "";
  }
  const tmp4Result = require("useDisplayProfile")(str);
  importDefault = tmp4Result;
  const tmp6 = memo(noop.useState(currentProfileFrame), 2);
  selectedProfileFrame = tmp6[0];
  guildId(tmp3[10]);
  let tmp2Result = tmp2(tmp3[11]);
  const analyticsLocations = tmp2Result(tmp2(tmp3[12]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
  const items = [guildId, tmp4Result];
  memo = noop.useMemo(() => {
    const obj = { type: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET, guild_id: guildId, profile_has_nitro_customization: null };
    let tmp = null != closure_1;
    if (tmp) {
      let result;
      if (closure_1 != null) {
        result = closure_1.hasPremiumCustomization();
      }
      tmp = result;
    }
    obj.profile_has_nitro_customization = tmp;
    return obj;
  }, items);
  const items1 = [memo];
  const items2 = [selectedProfileFrame, guildId];
  const callback = noop.useCallback(() => {
    const obj = {};
    const merged = Object.assign(memo);
    obj.is_fullscreen = true;
    obj.track(AnalyticEvents.OPEN_POPOUT, obj);
  }, items1);
  const callback1 = noop.useCallback((arg0) => {
    const obj = { guildId, profileFrame: null };
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstProfileFrame");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    obj.profileFrame = purchasedItem;
    obj.setPendingChanges(obj);
  }, items2);
  let obj = { value: analyticsLocations, children: null };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  const obj1 = { style: tmp.container, children: null };
  const items3 = [closure_9(closure_5, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title, children: null };
  const intl = guildId(tmp3[18]).intl;
  obj3.children = intl.string(guildId(selectedProfileFrame[18]).t["oTSa/q"]);
  items3[1] = closure_9(guildId(selectedProfileFrame[17]).Heading, obj3);
  items3[2] = closure_9(EditProfileFrameInner, { user, selectedProfileFrame, setSelectedProfileFrame: tmp6[1], guildId });
  obj1.children = items3;
  const items4 = [closure_10(closure_5, obj1), ];
  const obj4 = { user, currentSkuId: null, selectedSkuId: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  tmp2Result = tmp2(tmp3[19]);
  if (currentProfileFrame != null) {
    skuId = currentProfileFrame.skuId;
  }
  obj4.currentSkuId = skuId;
  let skuId1;
  if (selectedProfileFrame != null) {
    skuId1 = selectedProfileFrame.skuId;
  }
  obj4.selectedSkuId = skuId1;
  obj4.onApply = callback1;
  obj4.analyticsLocations = analyticsLocations;
  obj4.analyticsSource = require("AnalyticsLocation").EDIT_PROFILE_FRAME_SHEET;
  items4[1] = closure_9(tmp2Result, obj4);
  obj.children = items4;
  obj.children = closure_10(guildId(selectedProfileFrame[16]).BottomSheet, obj);
  return closure_9(guildId(selectedProfileFrame[11]).AnalyticsLocationProvider, obj);
};