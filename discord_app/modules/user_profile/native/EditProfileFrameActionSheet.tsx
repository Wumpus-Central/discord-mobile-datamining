// === Module 14189: EditProfileFrameActionSheet ===

// Module 14189 (EditProfileFrameActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import useShopProductItems from "useShopProductItems" /* 7616 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import EditProfileFrameSection from "EditProfileFrameSection" /* 14191 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6977 */;

const require = globalThis.__r;

require = fn;
function EditProfileFrameInner(user) {
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  const guildId = user.guildId;
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[20]).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[20]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[21]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[21]);
  const tmp7 = setSelectedProfileFrame(guildId[9])(user.id, guildId);
  const tmp6 = setSelectedProfileFrame(guildId[22])();
  const obj4 = { pendingValue: selectedProfileFrame, userValue: null, guildValue: null, guildId: null };
  let profileFrame;
  if (tmp7 != null) {
    const _userProfile = tmp7._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj4.userValue = profileFrame;
  let profileFrame1;
  if (tmp7 != null) {
    const _guildMemberProfile = tmp7._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj4.guildValue = profileFrame1;
  obj4.guildId = guildId;
  const profilePreviewValue = user(guildId[23]).getProfilePreviewValue(obj4);
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
  const obj5 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj3 = user(guildId[23]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj5.previewSkuId = skuId1;
  const intl = tmp(tmp2[18]).intl;
  obj5.nitroJoinCTA = intl.string(user(guildId[18]).t["JvNv+a"]);
  const intl2 = tmp(tmp2[18]).intl;
  obj5.nitroUpgradeCTA = intl2.string(user(guildId[18]).t.hR2psy);
  items3[1] = closure_9(setSelectedProfileFrame(guildId[26]), obj5);
  const obj6 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedProfileFrame != null) {
    skuId2 = selectedProfileFrame.skuId;
  }
  const obj7 = { children: null };
  obj6.selectedSkuId = skuId2;
  obj6.renderRow = callback;
  obj6.isFetching = stateFromStores;
  items3[2] = closure_9(user(guildId[27]).EditCollectiblesPickerList, obj6);
  obj7.children = items3;
  return closure_10(closure_11, obj7);
}
function ProfileFrameSectionPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(7618)(previewSkuId);
  const product = tmp2.product;
  c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  const obj = { style: tmp.previewContainer, children: null };
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
  const items1 = [closure_9(purchase(10789), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
  const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj2.colors = items2;
  items1[1] = closure_9(purchase(5293), obj2);
  obj.children = items1;
  return closure_10(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const isProfileFrameRecord = fn(6969).isProfileFrameRecord;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: null, previewContainer: null, previewGradient: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj2.previewContainer = { overflow: "hidden", height: 300, alignItems: "center" };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.bottom = -1;
obj5.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj2.previewGradient = obj5;
let closure_12 = createStyles.createStyles(obj2);
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
  const tmp4 = require("useDisplayProfile");
  let obj = guildId(selectedProfileFrame[10]);
  const analyticsLocations = require("useAnalyticsLocations")(tmp2(tmp3[12]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
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
    const obj2 = {};
    const merged = Object.assign(memo);
    obj2.is_fullscreen = true;
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj2);
  }, items1);
  const callback1 = noop.useCallback((arg0) => {
    const obj2 = { guildId, profileFrame: null };
    const obj = UserProfileSettingsActionCreators;
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstProfileFrame");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    obj2.profileFrame = purchasedItem;
    obj.setPendingChanges(obj2);
  }, items2);
  let obj2 = { value: analyticsLocations, children: null };
  const obj3 = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  const obj4 = { style: tmp.container, children: null };
  const items3 = [closure_9(closure_5, { style: tmp.bounceOffset }), , ];
  const obj6 = { variant: "redesign/heading-18/bold", style: tmp.title, children: null };
  const intl = guildId(tmp3[18]).intl;
  obj6.children = intl.string(guildId(selectedProfileFrame[18]).t["oTSa/q"]);
  items3[1] = closure_9(guildId(selectedProfileFrame[17]).Heading, obj6);
  items3[2] = closure_9(EditProfileFrameInner, { user, selectedProfileFrame, setSelectedProfileFrame: tmp6[1], guildId });
  obj4.children = items3;
  const items4 = [closure_10(closure_5, obj4), ];
  const obj7 = { user, currentSkuId: null, selectedSkuId: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj5 = { style: tmp.bounceOffset };
  const tmp2Result = require("useAnalyticsLocations");
  if (currentProfileFrame != null) {
    skuId = currentProfileFrame.skuId;
  }
  obj7.currentSkuId = skuId;
  let skuId1;
  if (selectedProfileFrame != null) {
    skuId1 = selectedProfileFrame.skuId;
  }
  obj7.selectedSkuId = skuId1;
  obj7.onApply = callback1;
  obj7.analyticsLocations = analyticsLocations;
  obj7.analyticsSource = require("AnalyticsLocation").EDIT_PROFILE_FRAME_SHEET;
  items4[1] = closure_9(require("EditCollectiblesCTAButton"), obj7);
  obj3.children = items4;
  obj2.children = closure_10(guildId(selectedProfileFrame[16]).BottomSheet, obj3);
  return closure_9(guildId(selectedProfileFrame[11]).AnalyticsLocationProvider, obj2);
};