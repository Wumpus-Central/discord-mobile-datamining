// discord_app/modules/user_profile/native/EditProfileFrameActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import useFetchPurchases from "useFetchPurchases";
import get_ActivityIndicator from "getSystemLocale";
import map from "map";
import { isProfileFrameRecord } from "fromServer";
import { AnalyticEvents } from "ME";
import jsxProd from "useProfileFrameSections";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c10;
let c5;
let c9;
let unpackModuleId;
const require = arg1;
function EditProfileFrameInner(user) {
  let selectedProfileFrame;
  let setSelectedProfileFrame;
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  const guildId = user.guildId;
  let obj = user(guildId[19]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[20]);
  const items = [map];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  const tmp7 = setSelectedProfileFrame(guildId[9])(user.id, guildId);
  let obj2 = user(guildId[22]);
  obj = { pendingValue: selectedProfileFrame, userValue: null, guildValue: null, guildId: null };
  let profileFrame;
  if (tmp7 != null) {
    const _userProfile = tmp7._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj[1] = profileFrame;
  let profileFrame1;
  if (tmp7 != null) {
    const _guildMemberProfile = tmp7._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj[2] = profileFrame1;
  obj[3] = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  const items1 = [user];
  const effect = React.useEffect(() => {
    if (!tmp) {
      setSelectedProfileFrame(guildId[23])(obj.id, obj.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
      const tmp4 = setSelectedProfileFrame(guildId[23]);
    }
  }, items1);
  const items2 = [setSelectedProfileFrame, guildId];
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return outer1_9(user(guildId[24]).EditProfileFrameRow, { items, size, selectedSkuId, setSelectedProfileFrame, guildId });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(ProfileFrameSectionPreview, { previewSkuId: skuId, user, guildId }), , ];
  obj = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const tmp13 = closure_10;
  const tmp14 = closure_11;
  const tmp16 = ProfileFrameSectionPreview;
  const tmp5 = setSelectedProfileFrame;
  const tmp6 = setSelectedProfileFrame(guildId[21])();
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj[1] = skuId1;
  const intl = tmp(tmp2[17]).intl;
  obj[2] = intl.string(user(guildId[17]).t["JvNv+a"]);
  const intl2 = tmp(tmp2[17]).intl;
  obj[3] = intl2.string(user(guildId[17]).t.hR2psy);
  items3[1] = closure_9(setSelectedProfileFrame(guildId[25]), obj);
  obj1 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedProfileFrame != null) {
    skuId2 = selectedProfileFrame.skuId;
  }
  obj2 = { children: null };
  obj1[1] = skuId2;
  obj1[2] = callback;
  obj1[3] = stateFromStores;
  items3[2] = closure_9(user(guildId[26]).EditCollectiblesPickerList, obj1);
  obj2[0] = items3;
  return tmp13(tmp14, obj2);
}
function ProfileFrameSectionPreview(arg0) {
  let guildId;
  let previewSkuId;
  let user;
  let c0;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = createCacheKey();
  const tmp2 = purchase(8387)(previewSkuId);
  const product = tmp2.product;
  c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  let obj = { style: tmp.previewContainer, children: null };
  const memo = React.useMemo(() => {
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
    if (outer1_7(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const items1 = [callback(purchase(9570), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
  obj = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj[3] = items2;
  items1[1] = callback(purchase(4756), obj);
  obj[1] = items1;
  return callback2(closure_5, obj);
}
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = { container: null, bounceOffset: null, title: null, previewContainer: null, previewGradient: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createCacheKey[2] = { alignSelf: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createCacheKey[3] = { overflow: "hidden", height: 300, alignItems: "center" };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.bottom = -1;
obj2.color = require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND;
createCacheKey[4] = obj2;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignSelf: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default function EditProfileFrameActionSheet(arg0) {
  let currentProfileFrame;
  let guildId;
  let user;
  ({ user, currentProfileFrame, guildId } = arg0);
  let importDefault;
  let first;
  let memo;
  let tmp = createCacheKey();
  let str = user.id;
  if (str == null) {
    str = "";
  }
  const tmp4Result = importDefault(first[9])(str);
  importDefault = tmp4Result;
  const tmp6 = memo(React.useState(currentProfileFrame), 2);
  first = tmp6[0];
  let obj = guildId(tmp3[10]);
  let tmp2Result = tmp2(tmp3[11]);
  const analyticsLocations = tmp2Result(tmp2(tmp3[12]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
  const items = [guildId, tmp4Result];
  memo = React.useMemo(() => {
    const obj = { type: _undefined(first[12]).EDIT_PROFILE_FRAME_SHEET, guild_id: guildId, profile_has_nitro_customization: null };
    let tmp = null != _undefined;
    if (tmp) {
      let result;
      if (obj2 != null) {
        result = obj2.hasPremiumCustomization();
      }
      tmp = result;
    }
    obj[2] = tmp;
    return obj;
  }, items);
  const items1 = [memo];
  const items2 = [first, guildId];
  const callback = React.useCallback(() => {
    let obj = _undefined(first[13]);
    obj = {};
    const merged = Object.assign(memo);
    obj.is_fullscreen = true;
    obj.track(outer1_8.OPEN_POPOUT, obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = guildId(first[14]);
    obj = { guildId, profileFrame: null };
    let tmp = first;
    if (first == null) {
      tmp = null;
    }
    obj[1] = tmp;
    obj.setPendingChanges(obj);
  }, items2);
  obj = { value: analyticsLocations, children: null };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  const obj1 = { style: tmp.container, children: null };
  const items3 = [callback(closure_5, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title, children: null };
  const intl = guildId(tmp3[17]).intl;
  obj3[2] = intl.string(guildId(first[17]).t["oTSa/q"]);
  items3[1] = callback(guildId(first[16]).Heading, obj3);
  items3[2] = callback(EditProfileFrameInner, { user, selectedProfileFrame: first, setSelectedProfileFrame: tmp6[1], guildId });
  obj1[1] = items3;
  const items4 = [callback2(closure_5, obj1), ];
  const obj4 = { user, currentSkuId: null, selectedSkuId: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  tmp2Result = tmp2(tmp3[18]);
  if (currentProfileFrame != null) {
    skuId = currentProfileFrame.skuId;
  }
  obj4[1] = skuId;
  let skuId1;
  if (first != null) {
    skuId1 = first.skuId;
  }
  obj4[2] = skuId1;
  obj4[3] = callback1;
  obj4[4] = analyticsLocations;
  obj4[5] = importDefault(first[12]).EDIT_PROFILE_FRAME_SHEET;
  items4[1] = callback(tmp2Result, obj4);
  obj[4] = items4;
  obj[1] = callback2(guildId(first[15]).BottomSheet, obj);
  return callback(guildId(first[11]).AnalyticsLocationProvider, obj);
};