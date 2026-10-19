// === Module 15686: EditProfileFrameActionSheet ===

// Module 15686 (EditProfileFrameActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import LinearGradientDefault from "LinearGradient" /* 5219 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7224 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8578 */;
import useShopProductItems from "useShopProductItems" /* 8585 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8587 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8601 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 10965 */;
import EditProfileFrameSection from "EditProfileFrameSection" /* 15688 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7611 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const isProfileFrameRecord = fn(7603).isProfileFrameRecord;
const AnalyticEvents = fn(1087).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4945);
let obj2 = { container: { flex: 1 }, previewContainer: { overflow: "hidden", height: 300, alignItems: "center" }, previewGradient: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.bottom = -1;
obj3.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj2.previewGradient = obj3;
let closure_12 = createStyles.createStyles(obj2);
fn(558);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditProfileFrameInner(user) {
  const cResult = user(guildId[10]).c(31);
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  guildId = user.guildId;
  const obj = user(guildId[10]);
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[22]).useGetOrFetchCollectiblesCategoriesAndPurchases();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore];
    const fn = function s() {
      return isFetching.isFetching;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = user(guildId[22]);
  const stateFromStores = user(guildId[23]).useStateFromStores(tmp5, tmp6);
  setSelectedProfileFrame(guildId[24])();
  const tmp10 = setSelectedProfileFrame(guildId[11])(user.id, guildId);
  let profileFrame;
  if (tmp10 != null) {
    const _userProfile = tmp10._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  let profileFrame1;
  if (tmp10 != null) {
    const _guildMemberProfile = tmp10._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === selectedProfileFrame) {
      if (cResult[4] === profileFrame) {
        if (cResult[5] === profileFrame1) {
          let tmp13 = cResult[6];
        }
        if (cResult[7] !== user) {
          class R {
            constructor() {
              obj = user;
              tmp = null == user || obj.isNonUserBot();
              if (!tmp) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                num = 80;
                tmp4 = closure_1(closure_2[26]);
                tmp4Result = tmp4(obj.id, obj.getAvatarURL(null, 80), { withMutualGuilds: true });
              }
              return;
            }
          }
          const items1 = [user];
          cResult[7] = user;
          cResult[8] = R;
          cResult[9] = items1;
          let tmp16 = items1;
        } else {
          class R {
            constructor() {
              obj = user;
              tmp = null == user || obj.isNonUserBot();
              if (!tmp) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                num = 80;
                tmp4 = closure_1(closure_2[26]);
                tmp4Result = tmp4(obj.id, obj.getAvatarURL(null, 80), { withMutualGuilds: true });
              }
              return;
            }
          }
          tmp16 = cResult[9];
        }
        const effect = noop.useEffect(R, tmp16);
        if (cResult[10] === guildId) {
          class R {
            constructor() {
              obj = user;
              tmp = null == user || obj.isNonUserBot();
              if (!tmp) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                num = 80;
                tmp4 = closure_1(closure_2[26]);
                tmp4Result = tmp4(obj.id, obj.getAvatarURL(null, 80), { withMutualGuilds: true });
              }
              return;
            }
          }
          if (tmp13 != null) {
            class R {
              constructor() {
                obj = user;
                tmp = null == user || obj.isNonUserBot();
                if (!tmp) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  num = 80;
                  tmp4 = closure_1(closure_2[26]);
                  tmp4Result = tmp4(obj.id, obj.getAvatarURL(null, 80), { withMutualGuilds: true });
                }
                return;
              }
            }
          }
          if (cResult[13] === guildId) {
            class R {
              constructor() {
                obj = user;
                tmp = null == user || obj.isNonUserBot();
                if (!tmp) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  num = 80;
                  tmp4 = closure_1(closure_2[26]);
                  tmp4Result = tmp4(obj.id, obj.getAvatarURL(null, 80), { withMutualGuilds: true });
                }
                return;
              }
            }
          }
          const obj3 = { previewSkuId: undefined, user, guildId };
          const tmp24 = closure_9(closure_14, obj3);
          cResult[13] = guildId;
          cResult[14] = undefined;
          cResult[15] = user;
          cResult[16] = tmp24;
        }
        const fn2 = function b(arg0) {
          ({ items, size, selectedSkuId } = arg0);
          return React6(EditProfileFrameSection.EditProfileFrameRow, { items, size, selectedSkuId, setSelectedProfileFrame, guildId });
        };
        cResult[10] = guildId;
        cResult[11] = setSelectedProfileFrame;
        cResult[12] = fn2;
      }
    }
  }
  const tmpResult = user(guildId[23]);
  const profilePreviewValue = user(guildId[25]).getProfilePreviewValue({ pendingValue: selectedProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId });
  cResult[2] = guildId;
  cResult[3] = selectedProfileFrame;
  cResult[4] = profileFrame;
  cResult[5] = profileFrame1;
  cResult[6] = profilePreviewValue;
  tmp13 = profilePreviewValue;
  const tmpResult2 = user(guildId[25]);
}) : (function EditProfileFrameInner(user) {
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  const guildId = user.guildId;
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[22]).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[22]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[23]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[23]);
  const tmp7 = setSelectedProfileFrame(guildId[11])(user.id, guildId);
  const tmp6 = setSelectedProfileFrame(guildId[24])();
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
  const profilePreviewValue = user(guildId[25]).getProfilePreviewValue(obj4);
  const items1 = [user];
  const effect = noop.useEffect(() => {
    if (!tmp) {
      maybeFetchUserProfileDefault(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
    }
    tmp = null == user || user.isNonUserBot();
  }, items1);
  const items2 = [setSelectedProfileFrame, guildId];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return React6(EditProfileFrameSection.EditProfileFrameRow, { items, size, selectedSkuId, setSelectedProfileFrame, guildId });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(closure_14, { previewSkuId: skuId, user, guildId }), , ];
  const obj5 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj3 = user(guildId[25]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj5.previewSkuId = skuId1;
  const intl = tmp(tmp2[19]).intl;
  obj5.nitroJoinCTA = intl.string(user(guildId[19]).t["JvNv+a"]);
  const intl2 = tmp(tmp2[19]).intl;
  obj5.nitroUpgradeCTA = intl2.string(user(guildId[19]).t.hR2psy);
  items3[1] = closure_9(setSelectedProfileFrame(guildId[28]), obj5);
  const obj6 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedProfileFrame != null) {
    skuId2 = selectedProfileFrame.skuId;
  }
  const obj7 = { children: null };
  obj6.selectedSkuId = skuId2;
  obj6.renderRow = callback;
  obj6.isFetching = stateFromStores;
  items3[2] = closure_9(user(guildId[29]).EditCollectiblesPickerList, obj6);
  obj7.children = items3;
  return closure_10(closure_11, obj7);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileFrameSectionPreview(previewSkuId) {
  const cResult = c.c(16);
  ({ user, guildId } = previewSkuId);
  const tmp3 = closure_12();
  ({ product, purchase } = useCollectiblesDataDefault(previewSkuId.previewSkuId));
  let first;
  if (product != null) {
    first = product.items[0];
  }
  if (first == null) {
    let first1;
    if (purchase != null) {
      first1 = purchase.items[0];
    }
    first = first1;
  }
  let tmp8 = null;
  if (isProfileFrameRecord(first)) {
    tmp8 = first;
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === tmp8) {
      if (cResult[2] === user) {
        let tmp9 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0.6 };
        const point1 = { x: 0, y: 1 };
        cResult[4] = point;
        cResult[5] = point1;
        let tmp13 = point1;
        let tmp12 = point;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp3.previewGradient.color + "00";
      if (cResult[6] === tmp3.previewGradient.color) {
        if (cResult[7] === combined) {
          let tmp15 = cResult[8];
        }
        if (cResult[9] === tmp3.previewGradient) {
          if (cResult[10] === tmp15) {
            let tmp16 = cResult[11];
          }
          if (cResult[12] === tmp3.previewContainer) {
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp16) {
                let tmp19 = cResult[15];
              }
              return tmp19;
            }
          }
          const obj2 = { style: tmp3.previewContainer, children: null };
          const items = [tmp9, tmp16];
          obj2.children = items;
          const tmp22 = collapsed(hasOwnProperty, obj2);
          cResult[12] = tmp3.previewContainer;
          cResult[13] = tmp9;
          cResult[14] = tmp16;
          cResult[15] = tmp22;
          tmp19 = tmp22;
        }
        const obj3 = { style: tmp3.previewGradient, start: tmp12, end: tmp13, colors: tmp15 };
        const tmp18 = React6(LinearGradientDefault, obj3);
        cResult[9] = tmp3.previewGradient;
        cResult[10] = tmp15;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      const items1 = [combined, tmp3.previewGradient.color];
      cResult[6] = tmp3.previewGradient.color;
      cResult[7] = combined;
      cResult[8] = items1;
      tmp15 = items1;
    }
  }
  const tmp10 = React6(ProfileFrameUserPreviewDefault, { user, guildId, profileFrame: tmp8, maxWidth: 280 });
  cResult[0] = guildId;
  cResult[1] = tmp8;
  cResult[2] = user;
  cResult[3] = tmp10;
  tmp9 = tmp10;
  const tmp5 = useCollectiblesDataDefault(previewSkuId.previewSkuId);
}) : (function ProfileFrameSectionPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(8587)(previewSkuId);
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
  const items1 = [closure_9(purchase(10965), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
  const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj2.colors = items2;
  items1[1] = closure_9(purchase(5219), obj2);
  obj.children = items1;
  return closure_10(closure_5, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditProfileFrameActionSheet(arg0) {
  const cResult = guildId(576).c(32);
  ({ user, currentProfileFrame, guildId } = arg0);
  closure_12();
  let str = user.id;
  let obj = guildId(576);
  if (str == null) {
    str = "";
  }
  const tmp6Result = selectedProfileFrame(8600)(str);
  const tmp7 = _slicedToArray(noop.useState(currentProfileFrame), 2);
  selectedProfileFrame = tmp7[0];
  const tmp6 = selectedProfileFrame(8600);
  const bottomSheetRef = guildId(8584).useBottomSheetRef().bottomSheetRef;
  const tmpResult = guildId(8584);
  const analyticsLocations = selectedProfileFrame(7199)(tmp5(7224).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
  if (cResult[0] !== tmp6Result) {
    let tmp11 = null != tmp6Result;
    if (tmp11) {
      let result;
      if (tmp6Result != null) {
        result = tmp6Result.hasPremiumCustomization();
      }
      tmp11 = result;
    }
    cResult[0] = tmp6Result;
    cResult[1] = tmp11;
    let tmp10 = tmp11;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === tmp10) {
      let tmp13 = cResult[4];
    }
    dependencyMap = tmp13;
    if (cResult[5] !== tmp13) {
      class A {
        constructor() {
          obj = closure_1(closure_2[15]);
          obj1 = {};
          merged = Object.assign(closure_2);
          obj1.is_fullscreen = true;
          trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
          return;
        }
      }
      cResult[5] = tmp13;
      class O {
        constructor(arg0) {
          obj = closure_0(closure_2[16]);
          obj1 = { guildId, profileFrame: null };
          obj3 = closure_0(closure_2[17]);
          purchasedItem = obj3.getPurchasedItem(arg0, "firstProfileFrame");
          if (purchasedItem == null) {
            purchasedItem = closure_1;
          }
          if (purchasedItem == null) {
            purchasedItem = null;
          }
          obj1.profileFrame = purchasedItem;
          setPendingChangesResult = obj.setPendingChanges(obj1);
          return;
        }
      }
    } else {
      class A {
        constructor() {
          obj = closure_1(closure_2[15]);
          obj1 = {};
          merged = Object.assign(closure_2);
          obj1.is_fullscreen = true;
          trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
          return;
        }
      }
    }
    if (cResult[7] === guildId) {
      class A {
        constructor() {
          obj = closure_1(closure_2[15]);
          obj1 = {};
          merged = Object.assign(closure_2);
          obj1.is_fullscreen = true;
          trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
          return;
        }
      }
      const _Symbol = Symbol;
      class O {
        constructor(arg0) {
          obj = closure_0(closure_2[16]);
          obj1 = { guildId, profileFrame: null };
          obj3 = closure_0(closure_2[17]);
          purchasedItem = obj3.getPurchasedItem(arg0, "firstProfileFrame");
          if (purchasedItem == null) {
            purchasedItem = closure_1;
          }
          if (purchasedItem == null) {
            purchasedItem = null;
          }
          obj1.profileFrame = purchasedItem;
          setPendingChangesResult = obj.setPendingChanges(obj1);
          return;
        }
      }
      if (tmp16 === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = {};
            merged = Object.assign(closure_2);
            obj1.is_fullscreen = true;
            trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
            return;
          }
        }
        let obj2 = { title: null };
        class O {
          constructor(arg0) {
            obj = closure_0(closure_2[16]);
            obj1 = { guildId, profileFrame: null };
            obj3 = closure_0(closure_2[17]);
            purchasedItem = obj3.getPurchasedItem(arg0, "firstProfileFrame");
            if (purchasedItem == null) {
              purchasedItem = closure_1;
            }
            if (purchasedItem == null) {
              purchasedItem = null;
            }
            obj1.profileFrame = purchasedItem;
            setPendingChangesResult = obj.setPendingChanges(obj1);
            return;
          }
        }
        obj2.title = tmp19(guildId(1128).t["oTSa/q"]);
        const tmp20 = closure_9(guildId(7194).BottomSheetTitleHeader, obj2);
        cResult[10] = tmp20;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = {};
            merged = Object.assign(closure_2);
            obj1.is_fullscreen = true;
            trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
            return;
          }
        }
      }
      if (cResult[11] === guildId) {
        class A {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = {};
            merged = Object.assign(closure_2);
            obj1.is_fullscreen = true;
            trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
            return;
          }
        }
      }
      const obj3 = { user, selectedProfileFrame, setSelectedProfileFrame: tmp7[1], guildId };
      const tmp24 = closure_9(closure_13, obj3);
      cResult[11] = guildId;
      cResult[12] = selectedProfileFrame;
      cResult[13] = user;
      cResult[14] = tmp24;
    }
    class O {
      constructor(arg0) {
        obj = closure_0(closure_2[16]);
        obj1 = { guildId, profileFrame: null };
        obj3 = closure_0(closure_2[17]);
        purchasedItem = obj3.getPurchasedItem(arg0, "firstProfileFrame");
        if (purchasedItem == null) {
          purchasedItem = closure_1;
        }
        if (purchasedItem == null) {
          purchasedItem = null;
        }
        obj1.profileFrame = purchasedItem;
        setPendingChangesResult = obj.setPendingChanges(obj1);
        return;
      }
    }
    cResult[7] = guildId;
    cResult[8] = selectedProfileFrame;
    cResult[9] = O;
  }
  const obj4 = { type: selectedProfileFrame(7224).EDIT_PROFILE_FRAME_SHEET, guild_id: guildId, profile_has_nitro_customization: tmp10 };
  cResult[2] = guildId;
  cResult[3] = tmp10;
  cResult[4] = obj4;
  tmp13 = obj4;
  const tmp5Result = selectedProfileFrame(7199);
}) : (function EditProfileFrameActionSheet(arg0) {
  ({ user, currentProfileFrame, guildId } = arg0);
  importDefault = undefined;
  let selectedProfileFrame;
  let memo;
  let str = user.id;
  let tmp = closure_12();
  if (str == null) {
    str = "";
  }
  const tmp4Result = require("useDisplayProfile")(str);
  importDefault = tmp4Result;
  const tmp6 = memo(noop.useState(currentProfileFrame), 2);
  selectedProfileFrame = tmp6[0];
  const tmp4 = require("useDisplayProfile");
  let obj = guildId(selectedProfileFrame[12]);
  const analyticsLocations = require("useAnalyticsLocations")(tmp2(tmp3[14]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
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
  const obj3 = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, header: null, children: null };
  const obj4 = { title: null };
  const intl = guildId(tmp3[19]).intl;
  obj4.title = intl.string(guildId(selectedProfileFrame[19]).t["oTSa/q"]);
  obj3.header = closure_9(guildId(selectedProfileFrame[18]).BottomSheetTitleHeader, obj4);
  const tmp2Result = require("useAnalyticsLocations");
  const items3 = [closure_9(closure_5, { style: tmp.container, children: closure_9(closure_13, { user, selectedProfileFrame, setSelectedProfileFrame: tmp6[1], guildId }) }), ];
  const obj6 = { user, currentSkuId: null, selectedSkuId: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj5 = { style: tmp.container, children: closure_9(closure_13, { user, selectedProfileFrame, setSelectedProfileFrame: tmp6[1], guildId }) };
  if (currentProfileFrame != null) {
    skuId = currentProfileFrame.skuId;
  }
  obj6.currentSkuId = skuId;
  let skuId1;
  if (selectedProfileFrame != null) {
    skuId1 = selectedProfileFrame.skuId;
  }
  obj6.selectedSkuId = skuId1;
  obj6.onApply = callback1;
  obj6.analyticsLocations = analyticsLocations;
  obj6.analyticsSource = require("AnalyticsLocation").EDIT_PROFILE_FRAME_SHEET;
  items3[1] = closure_9(require("EditCollectiblesCTAButton"), obj6);
  obj3.children = items3;
  obj2.children = closure_10(guildId(selectedProfileFrame[21]).BottomSheet, obj3);
  return closure_9(guildId(selectedProfileFrame[13]).AnalyticsLocationProvider, obj2);
});