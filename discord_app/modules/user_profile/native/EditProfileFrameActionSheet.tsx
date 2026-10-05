// discord_app/modules/user_profile/native/EditProfileFrameActionSheet.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import ProfileFrameRecord from "../../collectibles/records/ProfileFrameRecord.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import maybeFetchUserProfileDefault from "../maybeFetchUserProfile.tsx";
import ProfileFrameUserPreviewDefault from "../../collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx";
import EditProfileFrameSection from "../../collectibles/profile_frames/native/EditProfileFrameSection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import CollectiblesPurchaseStore from "../../collectibles/CollectiblesPurchaseStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, dependencyMap, importDefault, setPendingChangesResult, trackResult;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet } = react_native);
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 },
  title: obj3,
  previewContainer: { overflow: "hidden", height: 300, alignItems: "center" },
  previewGradient: obj4,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj4 = { bottom: -1, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_2;
      let currentProfileFrame;
      let guildId;
      let selectedProfileFrame;
      let tmp11;
      let tmp9;
      let user;
      let obj = guildId(576);
      const cResult = obj.c(38);
      ({ user, currentProfileFrame, guildId } = arg0);
      const tmp4 = closure_12();
      let str = user.id;
      const tmp6 = selectedProfileFrame(7857);
      if (str == null) {
        str = "";
      }
      const tmp6Result = tmp6(str);
      [selectedProfileFrame, tmp9] = react.useState(currentProfileFrame);
      const tmpResult = guildId(7841);
      const bottomSheetRef = tmpResult.useBottomSheetRef().bottomSheetRef;
      const tmp5Result = selectedProfileFrame(6657);
      const analyticsLocations = tmp5Result(tmp5(6681).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
      if (cResult[0] !== tmp6Result) {
        let tmp12 = null != tmp6Result;
        if (tmp12) {
          let result;
          if (tmp6Result != null) {
            result = tmp6Result.hasPremiumCustomization();
          }
          tmp12 = result;
        }
        cResult[0] = tmp6Result;
        cResult[1] = tmp12;
        tmp11 = tmp12;
      } else {
        tmp11 = cResult[1];
      }
      if (cResult[2] === guildId) {
        let tmp14;
        if (cResult[3] === tmp11) {
          tmp14 = cResult[4];
        }
        dependencyMap = tmp14;
        if (cResult[5] !== tmp14) {
          class O {
            constructor() {
              tmp = closure_1(closure_2[15]);
              obj = {};
              track = tmp.track;
              OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
              merged = Object.assign(closure_2);
              obj.is_fullscreen = true;
              trackResult = track(OPEN_POPOUT, obj);
              return;
            }
          }
          cResult[5] = tmp14;
          class T {
            constructor(arg0) {
              tmp = closure_0(closure_2[16]);
              obj = { guildId, profileFrame: null };
              setPendingChanges = tmp.setPendingChanges;
              obj2 = closure_0(closure_2[17]);
              purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
              if (purchasedItem == null) {
                purchasedItem = closure_1;
              }
              if (purchasedItem == null) {
                purchasedItem = null;
              }
              obj.profileFrame = purchasedItem;
              setPendingChangesResult = setPendingChanges(obj);
              return;
            }
          }
        } else {
          class O {
            constructor() {
              tmp = closure_1(closure_2[15]);
              obj = {};
              track = tmp.track;
              OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
              merged = Object.assign(closure_2);
              obj.is_fullscreen = true;
              trackResult = track(OPEN_POPOUT, obj);
              return;
            }
          }
        }
        if (cResult[7] === guildId) {
          class O {
            constructor() {
              tmp = closure_1(closure_2[15]);
              obj = {};
              track = tmp.track;
              OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
              merged = Object.assign(closure_2);
              obj.is_fullscreen = true;
              trackResult = track(OPEN_POPOUT, obj);
              return;
            }
          }
          const container = tmp4.container;
          if (cResult[10] !== tmp4.bounceOffset) {
            class O {
              constructor() {
                tmp = closure_1(closure_2[15]);
                obj = {};
                track = tmp.track;
                OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
                merged = Object.assign(closure_2);
                obj.is_fullscreen = true;
                trackResult = track(OPEN_POPOUT, obj);
                return;
              }
            }
            let obj2 = { style: tmp4.bounceOffset };
            class T {
              constructor(arg0) {
                tmp = closure_0(closure_2[16]);
                obj = { guildId, profileFrame: null };
                setPendingChanges = tmp.setPendingChanges;
                obj2 = closure_0(closure_2[17]);
                purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
                if (purchasedItem == null) {
                  purchasedItem = closure_1;
                }
                if (purchasedItem == null) {
                  purchasedItem = null;
                }
                obj.profileFrame = purchasedItem;
                setPendingChangesResult = setPendingChanges(obj);
                return;
              }
            }
            cResult[10] = tmp4.bounceOffset;
            cResult[11] = tmp19;
          } else {
            class O {
              constructor() {
                tmp = closure_1(closure_2[15]);
                obj = {};
                track = tmp.track;
                OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
                merged = Object.assign(closure_2);
                obj.is_fullscreen = true;
                trackResult = track(OPEN_POPOUT, obj);
                return;
              }
            }
          }
          class T {
            constructor(arg0) {
              tmp = closure_0(closure_2[16]);
              obj = { guildId, profileFrame: null };
              setPendingChanges = tmp.setPendingChanges;
              obj2 = closure_0(closure_2[17]);
              purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
              if (purchasedItem == null) {
                purchasedItem = closure_1;
              }
              if (purchasedItem == null) {
                purchasedItem = null;
              }
              obj.profileFrame = purchasedItem;
              setPendingChangesResult = setPendingChanges(obj);
              return;
            }
          }
          const title = tmp4.title;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                tmp = closure_1(closure_2[15]);
                obj = {};
                track = tmp.track;
                OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
                merged = Object.assign(closure_2);
                obj.is_fullscreen = true;
                trackResult = track(OPEN_POPOUT, obj);
                return;
              }
            }
            const stringResult = obj6.string(guildId(1126).t["oTSa/q"]);
            class T {
              constructor(arg0) {
                tmp = closure_0(closure_2[16]);
                obj = { guildId, profileFrame: null };
                setPendingChanges = tmp.setPendingChanges;
                obj2 = closure_0(closure_2[17]);
                purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
                if (purchasedItem == null) {
                  purchasedItem = closure_1;
                }
                if (purchasedItem == null) {
                  purchasedItem = null;
                }
                obj.profileFrame = purchasedItem;
                setPendingChangesResult = setPendingChanges(obj);
                return;
              }
            }
          } else {
            class O {
              constructor() {
                tmp = closure_1(closure_2[15]);
                obj = {};
                track = tmp.track;
                OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
                merged = Object.assign(closure_2);
                obj.is_fullscreen = true;
                trackResult = track(OPEN_POPOUT, obj);
                return;
              }
            }
          }
          if (cResult[13] !== tmp4.title) {
            class O {
              constructor() {
                tmp = closure_1(closure_2[15]);
                obj = {};
                track = tmp.track;
                OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
                merged = Object.assign(closure_2);
                obj.is_fullscreen = true;
                trackResult = track(OPEN_POPOUT, obj);
                return;
              }
            }
            class T {
              constructor(arg0) {
                tmp = closure_0(closure_2[16]);
                obj = { guildId, profileFrame: null };
                setPendingChanges = tmp.setPendingChanges;
                obj2 = closure_0(closure_2[17]);
                purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
                if (purchasedItem == null) {
                  purchasedItem = closure_1;
                }
                if (purchasedItem == null) {
                  purchasedItem = null;
                }
                obj.profileFrame = purchasedItem;
                setPendingChangesResult = setPendingChanges(obj);
                return;
              }
            }
            cResult[13] = tmp4.title;
            cResult[14] = tmp24;
          } else {
            class O {
              constructor() {
                tmp = closure_1(closure_2[15]);
                obj = {};
                track = tmp.track;
                OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
                merged = Object.assign(closure_2);
                obj.is_fullscreen = true;
                trackResult = track(OPEN_POPOUT, obj);
                return;
              }
            }
          }
          if (cResult[15] === guildId) {
            class O {
              constructor() {
                tmp = closure_1(closure_2[15]);
                obj = {};
                track = tmp.track;
                OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
                merged = Object.assign(closure_2);
                obj.is_fullscreen = true;
                trackResult = track(OPEN_POPOUT, obj);
                return;
              }
            }
          }
          const obj4 = { user, selectedProfileFrame, setSelectedProfileFrame: tmp9, guildId };
          cResult[15] = guildId;
          cResult[16] = selectedProfileFrame;
          cResult[17] = user;
          cResult[18] = closure_9(closure_13, obj4);
          const tmp28 = closure_9(closure_13, obj4);
        }
        class T {
          constructor(arg0) {
            tmp = closure_0(closure_2[16]);
            obj = { guildId, profileFrame: null };
            setPendingChanges = tmp.setPendingChanges;
            obj2 = closure_0(closure_2[17]);
            purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
            if (purchasedItem == null) {
              purchasedItem = closure_1;
            }
            if (purchasedItem == null) {
              purchasedItem = null;
            }
            obj.profileFrame = purchasedItem;
            setPendingChangesResult = setPendingChanges(obj);
            return;
          }
        }
        cResult[7] = guildId;
        cResult[8] = selectedProfileFrame;
        cResult[9] = T;
      }
      const obj5 = {
        type: selectedProfileFrame(6681).EDIT_PROFILE_FRAME_SHEET,
        guild_id: guildId,
        profile_has_nitro_customization: tmp11,
      };
      cResult[2] = guildId;
      cResult[3] = tmp11;
      cResult[4] = obj5;
      tmp14 = obj5;
    }
  : (arg0) => {
      let closure_1;
      let currentProfileFrame;
      let guildId;
      let intl;
      let items3;
      let items4;
      let obj3;
      let skuId;
      let skuId1;
      let user;
      ({ user, currentProfileFrame, guildId } = arg0);
      importDefault = undefined;
      let selectedProfileFrame;
      let memo;
      let tmp = closure_12();
      let str = user.id;
      const tmp4 = require("useDisplayProfile");
      if (str == null) {
        str = "";
      }
      const tmp4Result = tmp4(str);
      importDefault = tmp4Result;
      const tmp6 = memo(react.useState(currentProfileFrame), 2);
      selectedProfileFrame = tmp6[0];
      const tmp8 = tmp6[1];
      let obj = guildId(tmp3[12]);
      const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
      const tmp2Result = require("useAnalyticsLocations");
      const analyticsLocations = tmp2Result(tmp2(tmp3[14]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
      const items = [guildId, tmp4Result];
      memo = react.useMemo(() => {
        let tmp;
        const obj = {
          type: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET,
          guild_id: guildId,
          profile_has_nitro_customization: tmp,
        };
        tmp = null != closure_1;
        if (tmp) {
          let result;
          if (closure_1 != null) {
            result = closure_1.hasPremiumCustomization();
          }
          tmp = result;
        }
        return obj;
      }, items);
      const items1 = [memo];
      const items2 = [selectedProfileFrame, guildId];
      const callback = react.useCallback(() => {
        const obj = { is_fullscreen: true };
        const track = AnalyticsUtilsDefault.track;
        const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
        AnalyticsUtilsDefault;
        const merged = Object.assign(memo);
        track(OPEN_POPOUT, obj);
      }, items1);
      const callback1 = react.useCallback((arg0) => {
        let purchasedItem;
        const obj = { guildId, profileFrame: purchasedItem };
        const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
        UserProfileSettingsActionCreators;
        const obj2 = useShopProductItems;
        purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
        if (purchasedItem == null) {
          purchasedItem = first;
        }
        if (purchasedItem == null) {
          purchasedItem = null;
        }
        setPendingChanges(obj);
      }, items2);
      let obj2 = { value: analyticsLocations, children: closure_10(BottomSheet, obj3) };
      const AnalyticsLocationProvider = guildId(tmp3[13]).AnalyticsLocationProvider;
      obj3 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, children: items4 };
      const obj4 = { style: tmp.container, children: items3 };
      const obj5 = { style: tmp.bounceOffset };
      BottomSheet = guildId(tmp3[21]).BottomSheet;
      items3 = [closure_9(closure_5, obj5), ,];
      const obj6 = {
        variant: "redesign/heading-18/bold",
        style: tmp.title,
        children: intl.string(guildId(selectedProfileFrame[18]).t["oTSa/q"]),
      };
      const Heading = guildId(tmp3[19]).Heading;
      intl = guildId(tmp3[18]).intl;
      items3[1] = closure_9(Heading, obj6);
      items3[2] = closure_9(closure_13, { user, selectedProfileFrame, setSelectedProfileFrame: tmp8, guildId });
      items4 = [closure_10(closure_5, obj4)];
      const obj7 = {
        user,
        currentSkuId: skuId,
        selectedSkuId: skuId1,
        onApply: callback1,
        analyticsLocations,
        analyticsSource: require("AnalyticsLocation").EDIT_PROFILE_FRAME_SHEET,
      };
      skuId = undefined;
      const tmp2Result2 = require("EditCollectiblesCTAButton");
      if (currentProfileFrame != null) {
        skuId = currentProfileFrame.skuId;
      }
      skuId1 = undefined;
      if (selectedProfileFrame != null) {
        skuId1 = selectedProfileFrame.skuId;
      }
      items4[1] = closure_9(tmp2Result2, obj7);
      return closure_9(AnalyticsLocationProvider, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let guildId;
      let isFetching;
      let selectedProfileFrame;
      let setSelectedProfileFrame;
      let tmp5;
      let tmp6;
      let tmp = user;
      let obj = user(guildId[10]);
      const cResult = obj.c(31);
      user = user.user;
      ({ selectedProfileFrame, setSelectedProfileFrame } = user);
      guildId = user.guildId;
      const obj2 = user(guildId[22]);
      const getOrFetchCollectiblesCategoriesAndPurchases = obj2.useGetOrFetchCollectiblesCategoriesAndPurchases();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesPurchaseStore];
        const fn = function o() {
          return isFetching.isFetching;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(guildId[23]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmp10 = setSelectedProfileFrame(guildId[24])();
      const tmp11 = setSelectedProfileFrame(guildId[11])(user.id, guildId);
      let profileFrame;
      if (tmp11 != null) {
        const _userProfile = tmp11._userProfile;
        if (_userProfile != null) {
          profileFrame = _userProfile.profileFrame;
        }
      }
      let profileFrame1;
      if (tmp11 != null) {
        const _guildMemberProfile = tmp11._guildMemberProfile;
        if (_guildMemberProfile != null) {
          profileFrame1 = _guildMemberProfile.profileFrame;
        }
      }
      if (cResult[2] === guildId) {
        if (cResult[3] === selectedProfileFrame) {
          if (cResult[4] === profileFrame) {
            let tmp14;
            let tmp17;
            let tmp16;
            if (cResult[5] === profileFrame1) {
              tmp14 = cResult[6];
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
              class C {
                constructor(arg0) {
                  let items;
                  let selectedSkuId;
                  ({ items, size, selectedSkuId } = arg0);
                  const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
                  return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
                }
              }
              cResult[8] = fn2;
              cResult[9] = items1;
              tmp17 = items1;
              tmp16 = fn2;
            } else {
              tmp16 = cResult[8];
              tmp17 = cResult[9];
            }
            const effect = react.useEffect(tmp16, tmp17);
            if (cResult[10] === guildId) {
              let tmp20;
              if (cResult[11] === setSelectedProfileFrame) {
                tmp20 = cResult[12];
              }
              let skuId;
              if (tmp14 != null) {
                skuId = tmp14.skuId;
              }
              if (cResult[13] === guildId) {
                if (cResult[14] === skuId) {
                  let tmp22;
                  if (cResult[15] === user) {
                    tmp22 = cResult[16];
                  }
                  let skuId1;
                  if (tmp14 != null) {
                    skuId1 = tmp14.skuId;
                  }
                  const _Symbol = Symbol;
                  class C {
                    constructor(arg0) {
                      let items;
                      let selectedSkuId;
                      ({ items, size, selectedSkuId } = arg0);
                      const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
                      return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
                    }
                  }
                  if (cResult[19] === skuId1) {
                    let tmp29;
                    if (cResult[20] === user) {
                      tmp29 = cResult[21];
                    }
                    let skuId2;
                    if (selectedProfileFrame != null) {
                      skuId2 = selectedProfileFrame.skuId;
                    }
                    if (cResult[22] === stateFromStores) {
                      if (cResult[23] === tmp20) {
                        if (cResult[24] === tmp10) {
                          let tmp33;
                          if (cResult[25] === skuId2) {
                            tmp33 = cResult[26];
                          }
                          if (cResult[27] === tmp22) {
                            if (cResult[28] === tmp29) {
                              let tmp37;
                              if (cResult[29] === tmp33) {
                                tmp37 = cResult[30];
                              }
                              return tmp37;
                            }
                          }
                          const obj3 = { children: tmp40 };
                          class C {
                            constructor(arg0) {
                              let items;
                              let selectedSkuId;
                              ({ items, size, selectedSkuId } = arg0);
                              const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
                              return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
                            }
                          }
                          tmp40[0] = tmp22;
                          tmp40[1] = tmp29;
                          tmp40[2] = tmp33;
                          const tmp41 = closure_10(closure_11, obj3);
                          cResult[27] = tmp22;
                          cResult[28] = tmp29;
                          cResult[29] = tmp33;
                          cResult[30] = tmp41;
                          tmp37 = tmp41;
                        }
                      }
                    }
                    class C {
                      constructor(arg0) {
                        let items;
                        let selectedSkuId;
                        ({ items, size, selectedSkuId } = arg0);
                        const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
                        return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
                      }
                    }
                    tmp35[0] = tmp10;
                    tmp35[1] = skuId2;
                    tmp35[2] = tmp20;
                    tmp35[3] = stateFromStores;
                    const tmp36 = closure_9(tmp(guildId[29]).EditCollectiblesPickerList, tmp35);
                    cResult[22] = stateFromStores;
                    cResult[23] = tmp20;
                    cResult[24] = tmp10;
                    cResult[25] = skuId2;
                    cResult[26] = tmp36;
                    tmp33 = tmp36;
                  }
                  const obj4 = { user, previewSkuId: skuId1, nitroJoinCTA: tmp27, nitroUpgradeCTA: tmp28 };
                  const tmp31 = closure_9(setSelectedProfileFrame(guildId[28]), obj4);
                  cResult[19] = skuId1;
                  cResult[20] = user;
                  cResult[21] = tmp31;
                  tmp29 = tmp31;
                }
              }
              class C {
                constructor(arg0) {
                  let items;
                  let selectedSkuId;
                  ({ items, size, selectedSkuId } = arg0);
                  const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
                  return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
                }
              }
              const obj5 = { previewSkuId: skuId, user, guildId };
              const tmp24 = closure_9(closure_14, obj5);
              cResult[13] = guildId;
              cResult[14] = skuId;
              cResult[15] = user;
              cResult[16] = tmp24;
              tmp22 = tmp24;
            }
            class C {
              constructor(arg0) {
                let items;
                let selectedSkuId;
                ({ items, size, selectedSkuId } = arg0);
                const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
                return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
              }
            }
            cResult[10] = guildId;
            cResult[11] = setSelectedProfileFrame;
            cResult[12] = C;
            tmp20 = C;
          }
        }
      }
      const tmpResult2 = tmp(guildId[25]);
      const profilePreviewValue = tmpResult2.getProfilePreviewValue({
        pendingValue: selectedProfileFrame,
        userValue: profileFrame,
        guildValue: profileFrame1,
        guildId,
      });
      cResult[2] = guildId;
      cResult[3] = selectedProfileFrame;
      cResult[4] = profileFrame;
      cResult[5] = profileFrame1;
      cResult[6] = profilePreviewValue;
      tmp14 = profilePreviewValue;
    }
  : (user) => {
      let intl;
      let intl2;
      let isFetching;
      let profileFrame;
      let profileFrame1;
      let selectedProfileFrame;
      let setSelectedProfileFrame;
      let skuId1;
      let skuId2;
      user = user.user;
      ({ selectedProfileFrame, setSelectedProfileFrame } = user);
      const guildId = user.guildId;
      let tmp = user;
      let obj = user(guildId[22]);
      const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
      const items = [CollectiblesPurchaseStore];
      const obj2 = user(guildId[23]);
      const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
      const tmp6 = setSelectedProfileFrame(guildId[24])();
      const tmp7 = setSelectedProfileFrame(guildId[11])(user.id, guildId);
      const obj3 = { pendingValue: selectedProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
      profileFrame = undefined;
      const getProfilePreviewValue = user(guildId[25]).getProfilePreviewValue;
      user(guildId[25]);
      if (tmp7 != null) {
        const _userProfile = tmp7._userProfile;
        if (_userProfile != null) {
          profileFrame = _userProfile.profileFrame;
        }
      }
      profileFrame1 = undefined;
      if (tmp7 != null) {
        const _guildMemberProfile = tmp7._guildMemberProfile;
        if (_guildMemberProfile != null) {
          profileFrame1 = _guildMemberProfile.profileFrame;
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
      const items2 = [setSelectedProfileFrame, guildId];
      let skuId;
      const callback = react.useCallback((arg0) => {
        let items;
        let selectedSkuId;
        ({ items, size, selectedSkuId } = arg0);
        const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
        return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
      }, items2);
      if (profilePreviewValue != null) {
        skuId = profilePreviewValue.skuId;
      }
      const items3 = [closure_9(closure_14, { previewSkuId: skuId, user, guildId }), ,];
      const obj4 = {
        user,
        previewSkuId: skuId1,
        nitroJoinCTA: intl.string(tmp(guildId[18]).t["JvNv+a"]),
        nitroUpgradeCTA: intl2.string(tmp(guildId[18]).t.hR2psy),
      };
      skuId1 = undefined;
      const tmp5Result = setSelectedProfileFrame(guildId[28]);
      if (profilePreviewValue != null) {
        skuId1 = profilePreviewValue.skuId;
      }
      intl = tmp(tmp2[18]).intl;
      intl2 = tmp(tmp2[18]).intl;
      items3[1] = closure_9(tmp5Result, obj4);
      const obj5 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores };
      skuId2 = undefined;
      const EditCollectiblesPickerList = tmp(tmp2[29]).EditCollectiblesPickerList;
      if (selectedProfileFrame != null) {
        skuId2 = selectedProfileFrame.skuId;
      }
      const obj6 = { children: items3 };
      items3[2] = closure_9(EditCollectiblesPickerList, obj5);
      return closure_10(closure_11, obj6);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (previewSkuId) => {
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
      if (isProfileFrameRecord(first)) {
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
      const tmp10 = React4(ProfileFrameUserPreviewDefault, { user, guildId, profileFrame: tmp8, maxWidth: 280 });
      cResult[0] = guildId;
      cResult[1] = tmp8;
      cResult[2] = user;
      cResult[3] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
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
        if (isProfileFrameRecord(first)) {
          tmp3 = first;
        }
        return tmp3;
      }, items);
      items1 = [closure_9(purchase(10998), { user, guildId, profileFrame: memo, maxWidth: 280 })];
      const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items2 };
      items2 = [,];
      const tmp4 = purchase(5605);
      items2[0] = "" + tmp.previewGradient.color + "00";
      items2[1] = tmp.previewGradient.color;
      items1[1] = closure_9(tmp4, obj2);
      return closure_10(closure_5, obj);
    };
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default tmp6;
