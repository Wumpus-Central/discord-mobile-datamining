// === Module 14456: EditProfileEffectActionSheet ===

// Module 14456 (EditProfileEffectActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7059 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7835 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7838 */;
import useShopProductItems from "useShopProductItems" /* 7842 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 7844 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7858 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 10824 */;
import EditProfileEffectSection from "EditProfileEffectSection" /* 14458 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7068 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, obj1, setPendingChangesResult, tmp5, tmpResult1, trackResult;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: obj3, previewContainer: { overflow: "hidden", height: 300, alignItems: "center" }, previewGradient: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj4 = { bottom: -1, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((isTryItOut) => {
  let closure_3;
  let currentProfileEffect;
  let first;
  let guildId;
  let tmp10;
  let user;
  let obj = guildId(first[10]);
  const cResult = obj.c(41);
  ({ user, currentProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  closure_12();
  let str = user.id;
  const tmp6 = isTryItOut(first[11]);
  if (str == null) {
    str = "";
  }
  const tmp6Result = tmp6(str);
  first = _slicedToArray(react.useState(currentProfileEffect), 2)[0];
  _slicedToArray(react.useState(currentProfileEffect), 2);
  let tmpResult = guildId(tmp2[12]);
  const bottomSheetRef = tmpResult.useBottomSheetRef().bottomSheetRef;
  const tmp5Result = isTryItOut(first[13]);
  const analyticsLocations = tmp5Result(tmp5(tmp2[14]).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
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
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === guildId) {
    let tmp13;
    if (cResult[3] === tmp10) {
      tmp13 = cResult[4];
    }
    _slicedToArray = tmp13;
    if (cResult[5] !== tmp13) {
      class R {
        constructor() {
          tmp = closure_1(closure_2[15]);
          obj = {};
          track = tmp.track;
          OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
          merged = Object.assign(closure_3);
          obj.is_fullscreen = true;
          trackResult = track(OPEN_POPOUT, obj);
          return;
        }
      }
      cResult[5] = tmp13;
      class L {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[16]);
          purchasedItem = obj.getPurchasedItem(isTryItOut, "firstProfileEffect");
          if (purchasedItem == null) {
            purchasedItem = closure_2;
          }
          if (purchasedItem == null) {
            purchasedItem = null;
          }
          tmp4 = isTryItOut;
          if (tmp4) {
            tmpResult = tmp(tmp2[17]);
            result = tmpResult.setTryItOutProfileEffect(purchasedItem);
          } else {
            tmpResult1 = tmp(tmp2[18]);
            obj1 = { guildId: null, profileEffect: null };
            tmp5 = guildId;
            obj1.guildId = guildId;
            obj1.profileEffect = purchasedItem;
            setPendingChangesResult = tmpResult1.setPendingChanges(obj1);
          }
          return;
        }
      }
    } else {
      class R {
        constructor() {
          tmp = closure_1(closure_2[15]);
          obj = {};
          track = tmp.track;
          OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
          merged = Object.assign(closure_3);
          obj.is_fullscreen = true;
          trackResult = track(OPEN_POPOUT, obj);
          return;
        }
      }
    }
    if (cResult[7] === guildId) {
      class R {
        constructor() {
          tmp = closure_1(closure_2[15]);
          obj = {};
          track = tmp.track;
          OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
          merged = Object.assign(closure_3);
          obj.is_fullscreen = true;
          trackResult = track(OPEN_POPOUT, obj);
          return;
        }
      }
    }
    class L {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[16]);
        purchasedItem = obj.getPurchasedItem(isTryItOut, "firstProfileEffect");
        if (purchasedItem == null) {
          purchasedItem = closure_2;
        }
        if (purchasedItem == null) {
          purchasedItem = null;
        }
        tmp4 = isTryItOut;
        if (tmp4) {
          tmpResult = tmp(tmp2[17]);
          result = tmpResult.setTryItOutProfileEffect(purchasedItem);
        } else {
          tmpResult1 = tmp(tmp2[18]);
          obj1 = { guildId: null, profileEffect: null };
          tmp5 = guildId;
          obj1.guildId = guildId;
          obj1.profileEffect = purchasedItem;
          setPendingChangesResult = tmpResult1.setPendingChanges(obj1);
        }
        return;
      }
    }
    cResult[7] = guildId;
    cResult[8] = isTryItOut;
    cResult[9] = first;
    cResult[10] = L;
  }
  let obj2 = { type: tmp5(tmp2[14]).EDIT_PROFILE_EFFECT_SHEET, guild_id: guildId, profile_has_nitro_customization: tmp10 };
  cResult[2] = guildId;
  cResult[3] = tmp10;
  cResult[4] = obj2;
  tmp13 = obj2;
}) : ((isTryItOut) => {
  let closure_2;
  let currentProfileEffect;
  let guildId;
  let intl;
  let items3;
  let items4;
  let obj3;
  let skuId;
  let skuId1;
  let user;
  ({ user, currentProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  dependencyMap = undefined;
  let selectedProfileEffect;
  let memo;
  let tmp = closure_12();
  let str = user.id;
  const tmp4 = isTryItOut(7857);
  if (str == null) {
    str = "";
  }
  const tmp4Result = tmp4(str);
  dependencyMap = tmp4Result;
  const tmp6 = selectedProfileEffect(memo.useState(currentProfileEffect), 2);
  selectedProfileEffect = tmp6[0];
  const tmp8 = tmp6[1];
  let obj = guildId(7841);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  const tmp2Result = isTryItOut(6657);
  const analyticsLocations = tmp2Result(tmp2(6681).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
  const items = [guildId, tmp4Result];
  memo = memo.useMemo(() => {
    let tmp;
    const obj = { type: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET, guild_id: guildId, profile_has_nitro_customization: tmp };
    tmp = null != closure_2;
    if (tmp) {
      let result;
      if (closure_2 != null) {
        result = closure_2.hasPremiumCustomization();
      }
      tmp = result;
    }
    return obj;
  }, items);
  const items1 = [memo];
  const items2 = [selectedProfileEffect, guildId, isTryItOut];
  const callback = memo.useCallback(() => {
    const obj = { is_fullscreen: true };
    const track = AnalyticsUtilsDefault.track;
    const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
    AnalyticsUtilsDefault;
    const merged = Object.assign(memo);
    track(OPEN_POPOUT, obj);
  }, items1);
  const callback1 = memo.useCallback((arg0) => {
    const obj = useShopProductItems;
    let purchasedItem = obj.getPurchasedItem(arg0, "firstProfileEffect");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    if (isTryItOut) {
      const tmpResult = UserProfileActionCreators;
      const result = tmpResult.setTryItOutProfileEffect(purchasedItem);
    } else {
      const obj2 = { guildId, profileEffect: purchasedItem };
      const tmpResult2 = UserProfileSettingsActionCreators;
      tmpResult2.setPendingChanges(obj2);
    }
  }, items2);
  let obj2 = { value: analyticsLocations, children: closure_10(BottomSheet, obj3) };
  const AnalyticsLocationProvider = guildId(6657).AnalyticsLocationProvider;
  obj3 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, children: items4 };
  const obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.bounceOffset };
  BottomSheet = guildId(6645).BottomSheet;
  items3 = [closure_9(closure_5, obj5), , ];
  const obj6 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: intl.string(guildId(1126).t["/6nv6N"]) };
  const Text = guildId(4886).Text;
  intl = guildId(1126).intl;
  items3[1] = closure_9(Text, obj6);
  items3[2] = closure_9(closure_13, { user, selectedProfileEffect, setSelectedProfileEffect: tmp8, guildId, isTryItOut });
  items4 = [closure_10(closure_5, obj4), ];
  const obj7 = { user, currentSkuId: skuId, selectedSkuId: skuId1, isTryItOut, onApply: callback1, analyticsLocations, analyticsSource: isTryItOut(6681).EDIT_PROFILE_EFFECT_SHEET };
  skuId = undefined;
  const tmp2Result2 = isTryItOut(7843);
  if (currentProfileEffect != null) {
    skuId = currentProfileEffect.skuId;
  }
  skuId1 = undefined;
  if (selectedProfileEffect != null) {
    skuId1 = selectedProfileEffect.skuId;
  }
  items4[1] = closure_9(tmp2Result2, obj7);
  return closure_9(AnalyticsLocationProvider, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let guildId;
  let isFetching;
  let selectedProfileEffect;
  let setSelectedProfileEffect;
  let tmp6;
  let tmp7;
  let tmp = user;
  let obj = user(guildId[10]);
  const cResult = obj.c(32);
  user = user.user;
  ({ selectedProfileEffect, setSelectedProfileEffect } = user);
  guildId = user.guildId;
  let isTryItOut = user.isTryItOut;
  let tmp4 = undefined !== isTryItOut && isTryItOut;
  isTryItOut = tmp4;
  const tmpResult = tmp(guildId[23]);
  const getOrFetchCollectiblesCategoriesAndPurchases = tmpResult.useGetOrFetchCollectiblesCategoriesAndPurchases();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore];
    const fn = function o() {
      return isFetching.isFetching;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult3 = tmp(guildId[24]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp6, tmp7);
  const tmp11 = setSelectedProfileEffect(guildId[25])();
  const tmp12 = setSelectedProfileEffect(guildId[11])(user.id, guildId);
  let profileEffect;
  if (tmp12 != null) {
    const _userProfile = tmp12._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  let profileEffect1;
  if (tmp12 != null) {
    const _guildMemberProfile = tmp12._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === selectedProfileEffect) {
      if (cResult[4] === profileEffect) {
        let tmp15;
        let tmp18;
        let tmp17;
        if (cResult[5] === profileEffect1) {
          tmp15 = cResult[6];
        }
        if (cResult[7] !== user) {
          const fn2 = function w() {
            const tmp = null == user || user.isNonUserBot();
            if (!tmp) {
              const tmp4 = maybeFetchUserProfileDefault;
              tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
            }
          };
          const items1 = [user];
          cResult[7] = user;
          class R {
            constructor(arg0) {
              let items;
              let selectedSkuId;
              ({ items, size, selectedSkuId } = arg0);
              const obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
              return React4(EditProfileEffectSection.EditProfileEffectRow, obj);
            }
          }
          cResult[8] = fn2;
          cResult[9] = items1;
          tmp18 = items1;
          tmp17 = fn2;
        } else {
          tmp17 = cResult[8];
          tmp18 = cResult[9];
        }
        const effect = react.useEffect(tmp17, tmp18);
        if (cResult[10] === guildId) {
          if (cResult[11] === tmp4) {
            let tmp21;
            if (cResult[12] === setSelectedProfileEffect) {
              tmp21 = cResult[13];
            }
            let skuId;
            if (tmp15 != null) {
              skuId = tmp15.skuId;
            }
            if (cResult[14] === guildId) {
              if (cResult[15] === skuId) {
                let tmp23;
                if (cResult[16] === user) {
                  tmp23 = cResult[17];
                }
                let skuId1;
                if (tmp15 != null) {
                  skuId1 = tmp15.skuId;
                }
                const _Symbol = Symbol;
                class R {
                  constructor(arg0) {
                    let items;
                    let selectedSkuId;
                    ({ items, size, selectedSkuId } = arg0);
                    const obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                    return React4(EditProfileEffectSection.EditProfileEffectRow, obj);
                  }
                }
                if (cResult[20] === skuId1) {
                  let tmp30;
                  if (cResult[21] === user) {
                    tmp30 = cResult[22];
                  }
                  let skuId2;
                  if (selectedProfileEffect != null) {
                    skuId2 = selectedProfileEffect.skuId;
                  }
                  if (cResult[23] === stateFromStores) {
                    if (cResult[24] === tmp21) {
                      if (cResult[25] === tmp11) {
                        let tmp34;
                        if (cResult[26] === skuId2) {
                          tmp34 = cResult[27];
                        }
                        if (cResult[28] === tmp23) {
                          if (cResult[29] === tmp30) {
                            let tmp38;
                            if (cResult[30] === tmp34) {
                              tmp38 = cResult[31];
                            }
                            return tmp38;
                          }
                        }
                        const obj2 = { children: tmp41 };
                        class R {
                          constructor(arg0) {
                            let items;
                            let selectedSkuId;
                            ({ items, size, selectedSkuId } = arg0);
                            const obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                            return React4(EditProfileEffectSection.EditProfileEffectRow, obj);
                          }
                        }
                        tmp41[0] = tmp23;
                        tmp41[1] = tmp30;
                        tmp41[2] = tmp34;
                        const tmp42 = closure_10(closure_11, obj2);
                        cResult[28] = tmp23;
                        cResult[29] = tmp30;
                        cResult[30] = tmp34;
                        cResult[31] = tmp42;
                        tmp38 = tmp42;
                      }
                    }
                  }
                  class R {
                    constructor(arg0) {
                      let items;
                      let selectedSkuId;
                      ({ items, size, selectedSkuId } = arg0);
                      const obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                      return React4(EditProfileEffectSection.EditProfileEffectRow, obj);
                    }
                  }
                  tmp36[0] = tmp11;
                  tmp36[1] = skuId2;
                  tmp36[2] = tmp21;
                  tmp36[3] = stateFromStores;
                  const tmp37 = closure_9(tmp(guildId[30]).EditCollectiblesPickerList, tmp36);
                  cResult[23] = stateFromStores;
                  cResult[24] = tmp21;
                  cResult[25] = tmp11;
                  cResult[26] = skuId2;
                  cResult[27] = tmp37;
                  tmp34 = tmp37;
                }
                const obj3 = { user, previewSkuId: skuId1, nitroJoinCTA: tmp28, nitroUpgradeCTA: tmp29 };
                const tmp32 = closure_9(setSelectedProfileEffect(guildId[29]), obj3);
                cResult[20] = skuId1;
                cResult[21] = user;
                cResult[22] = tmp32;
                tmp30 = tmp32;
              }
            }
            class R {
              constructor(arg0) {
                let items;
                let selectedSkuId;
                ({ items, size, selectedSkuId } = arg0);
                const obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                return React4(EditProfileEffectSection.EditProfileEffectRow, obj);
              }
            }
            const obj4 = { previewSkuId: skuId, user, guildId };
            const tmp25 = closure_9(closure_14, obj4);
            cResult[14] = guildId;
            cResult[15] = skuId;
            cResult[16] = user;
            cResult[17] = tmp25;
            tmp23 = tmp25;
          }
        }
        class R {
          constructor(arg0) {
            let items;
            let selectedSkuId;
            ({ items, size, selectedSkuId } = arg0);
            const obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
            return React4(EditProfileEffectSection.EditProfileEffectRow, obj);
          }
        }
        cResult[10] = guildId;
        cResult[11] = tmp4;
        cResult[12] = setSelectedProfileEffect;
        cResult[13] = R;
        tmp21 = R;
      }
    }
  }
  const tmpResult4 = tmp(guildId[26]);
  const profilePreviewValue = tmpResult4.getProfilePreviewValue({ pendingValue: selectedProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId });
  cResult[2] = guildId;
  cResult[3] = selectedProfileEffect;
  cResult[4] = profileEffect;
  cResult[5] = profileEffect1;
  cResult[6] = profilePreviewValue;
  tmp15 = profilePreviewValue;
}) : ((user) => {
  let intl;
  let intl2;
  let isFetching;
  let profileEffect;
  let profileEffect1;
  let selectedProfileEffect;
  let setSelectedProfileEffect;
  let skuId1;
  let skuId2;
  user = user.user;
  ({ selectedProfileEffect, setSelectedProfileEffect } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = user;
  let obj = user(guildId[23]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[24]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const tmp6 = setSelectedProfileEffect(guildId[25])();
  const tmp7 = setSelectedProfileEffect(guildId[11])(user.id, guildId);
  const obj3 = { pendingValue: selectedProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId };
  profileEffect = undefined;
  const getProfilePreviewValue = user(guildId[26]).getProfilePreviewValue;
  user(guildId[26]);
  if (tmp7 != null) {
    const _userProfile = tmp7._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  profileEffect1 = undefined;
  if (tmp7 != null) {
    const _guildMemberProfile = tmp7._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj3);
  const items1 = [user];
  const effect = react.useEffect(() => {
    const tmp = null == user || user.isNonUserBot();
    if (!tmp) {
      const tmp4 = maybeFetchUserProfileDefault;
      tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
    }
  }, items1);
  const items2 = [setSelectedProfileEffect, guildId, flag];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut: flag };
    return React4(EditProfileEffectSection.EditProfileEffectRow, obj);
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(closure_14, { previewSkuId: skuId, user, guildId }), , ];
  const obj4 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[19]).t.pertpd), nitroUpgradeCTA: intl2.string(tmp(guildId[19]).t["5eotIZ"]) };
  skuId1 = undefined;
  const tmp5Result = setSelectedProfileEffect(guildId[29]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  intl = tmp(tmp2[19]).intl;
  intl2 = tmp(tmp2[19]).intl;
  items3[1] = closure_9(tmp5Result, obj4);
  const obj5 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[30]).EditCollectiblesPickerList;
  if (selectedProfileEffect != null) {
    skuId2 = selectedProfileEffect.skuId;
  }
  const obj6 = { children: items3 };
  items3[2] = closure_9(EditCollectiblesPickerList, obj5);
  return closure_10(closure_11, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((previewSkuId) => {
  let guildId;
  let items;
  let product;
  let purchase;
  let user;
  const obj = react2;
  const cResult = obj.c(16);
  ({ user, guildId } = previewSkuId);
  previewSkuId = previewSkuId.previewSkuId;
  const tmp3 = closure_12();
  ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
  let first;
  useCollectiblesDataDefault(previewSkuId);
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
  if (isProfileEffectRecord(first)) {
    tmp8 = first;
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === tmp8) {
      let tmp9;
      let tmp13;
      let tmp12;
      if (cResult[2] === user) {
        tmp9 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0.6 };
        const point1 = { x: 0, y: 1 };
        cResult[4] = point;
        cResult[5] = point1;
        tmp13 = point1;
        tmp12 = point;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp3.previewGradient.color + "00";
      if (cResult[6] === tmp3.previewGradient.color) {
        let tmp15;
        if (cResult[7] === combined) {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp3.previewGradient) {
          let tmp16;
          if (cResult[10] === tmp15) {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp3.previewContainer) {
            if (cResult[13] === tmp9) {
              let tmp19;
              if (cResult[14] === tmp16) {
                tmp19 = cResult[15];
              }
              return tmp19;
            }
          }
          const obj2 = { style: tmp3.previewContainer, children: items };
          items = [tmp9, tmp16];
          const tmp22 = authStore(hasOwnProperty, obj2);
          cResult[12] = tmp3.previewContainer;
          cResult[13] = tmp9;
          cResult[14] = tmp16;
          cResult[15] = tmp22;
          tmp19 = tmp22;
        }
        const obj3 = { style: tmp3.previewGradient, start: tmp12, end: tmp13, colors: tmp15 };
        const tmp18 = React4(LinearGradientDefault, obj3);
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
  const tmp10 = React4(ProfileEffectUserPreviewDefault, { user, guildId, profileEffect: tmp8, maxWidth: 250 });
  cResult[0] = guildId;
  cResult[1] = tmp8;
  cResult[2] = user;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let guildId;
  let items1;
  let items2;
  let previewSkuId;
  let user;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(7844)(previewSkuId);
  const product = tmp2.product;
  let c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  const obj = { style: tmp.previewContainer, children: items1 };
  const memo = react.useMemo(() => {
    let first;
    if (items != null) {
      first = items.items[0];
    }
    if (first == null) {
      let first1;
      if (purchase != null) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp3 = null;
    if (isProfileEffectRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  items1 = [closure_9(purchase(10824), { user, guildId, profileEffect: memo, maxWidth: 250 }), ];
  const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items2 };
  items2 = [, ];
  const tmp4 = purchase(5605);
  items2[0] = "" + tmp.previewGradient.color + "00";
  items2[1] = tmp.previewGradient.color;
  items1[1] = closure_9(tmp4, obj2);
  return closure_10(closure_5, obj);
});
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileEffectActionSheet.tsx");

export default tmp6;