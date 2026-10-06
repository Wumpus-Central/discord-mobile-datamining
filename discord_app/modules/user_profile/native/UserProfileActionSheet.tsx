// discord_app/modules/user_profile/native/UserProfileActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import isChangelogUserDefault from "../../changelog/utils/isChangelogUser.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import BottomSheetModal from "../../../../_runtime/06119_BottomSheetModal.js";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import Constants2 from "Constants.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import maybeFetchUserProfileDefault from "../maybeFetchUserProfile.tsx";
import ProfileFrameLayerOrder from "../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx";
import ProfileFrameDefault from "../../collectibles/profile_frames/native/ProfileFrame.tsx";
import scaleProfileFrameDefault from "../../collectibles/profile_frames/scaleProfileFrame.tsx";
import ApplicationPresenceUtils from "../../applications/ApplicationPresenceUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import UserStore_mod from "../../../stores/UserStore.tsx";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, c7, constants, navigation, set, userId;

let closure_12;
let closure_14;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
let UserStore = UserStore_mod;
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1, UserSettingsSections: closure_14 } = Constants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles({
  container: { flex: 1 },
  profileContainer: { position: "relative" },
  noPadding: { paddingHorizontal: 0 },
  profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 },
});
const __initData = { code: "function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}" };
const __initData2 = {
  code: "function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}",
};
const __initData3 = { code: "function UserProfileActionSheetTsx3(){const{value}=this.__closure;return value.get();}" };
const __initData4 = {
  code: "function UserProfileActionSheetTsx4(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (animatedPosition) => {
      animatedPosition = animatedPosition.animatedPosition;
      const obj = BottomSheetModal;
      const animatedPosition2 = obj.useBottomSheet().animatedPosition;
      const fn = function n() {
        return animatedPosition2.get();
      };
      fn.__closure = { value: animatedPosition2 };
      fn.__workletHash = 5684011437075;
      fn.__initData = __initData;
      const fn2 = function o(arg0) {
        return animatedPosition.set(arg0);
      };
      fn2.__closure = { animatedPosition };
      fn2.__workletHash = 15360670503044;
      fn2.__initData = __initData2;
      const obj2 = ReanimatedRexport;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      return null;
    }
  : (animatedPosition) => {
      animatedPosition = animatedPosition.animatedPosition;
      const obj = BottomSheetModal;
      const animatedPosition2 = obj.useBottomSheet().animatedPosition;
      const fn = function n() {
        return animatedPosition2.get();
      };
      fn.__closure = { value: animatedPosition2 };
      fn.__workletHash = 6265722906513;
      fn.__initData = __initData3;
      const fn2 = function o(arg0) {
        return animatedPosition.set(arg0);
      };
      fn2.__closure = { animatedPosition };
      fn2.__workletHash = 478345078786;
      fn2.__initData = __initData4;
      const obj2 = ReanimatedRexport;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      return null;
    };
const __initData5 = {
  code: "function UserProfileActionSheetTsx5(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}",
};
const __initData6 = {
  code: "function UserProfileActionSheetTsx6(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (animatedPosition) => {
      let safeAreaTop;
      let tmp4;
      const tmp = safeAreaTop;
      let obj = animatedPosition(safeAreaTop[15]);
      const cResult = obj.c(5);
      animatedPosition = animatedPosition.animatedPosition;
      const animatedIndex = animatedPosition.animatedIndex;
      safeAreaTop = animatedPosition.safeAreaTop;
      const children = animatedPosition.children;
      const obj2 = animatedPosition(safeAreaTop[14]);
      const fn = function o() {
        let interpolate;
        let items;
        let value;
        const obj = {
          transform: items,
          opacity: interpolate(value, [-1, 0], [0, 1], ReanimatedRexport.Extrapolation.CLAMP),
        };
        items = [{ translateY: animatedPosition.get() + safeAreaTop }];
        ({ translateY: animatedPosition.get() + safeAreaTop });
        interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        value = animatedIndex.get();
        return obj;
      };
      fn.__closure = {
        animatedPosition,
        safeAreaTop,
        interpolate: animatedPosition(safeAreaTop[14]).interpolate,
        animatedIndex,
        Extrapolation: animatedPosition(safeAreaTop[14]).Extrapolation,
      };
      fn.__workletHash = 10476832609826;
      fn.__initData = __initData5;
      ({
        animatedPosition,
        safeAreaTop,
        interpolate: animatedPosition(safeAreaTop[14]).interpolate,
        animatedIndex,
        Extrapolation: animatedPosition(safeAreaTop[14]).Extrapolation,
      });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] !== animatedStyle) {
        let items = [closure_5.absoluteFill, animatedStyle];
        cResult[0] = animatedStyle;
        cResult[1] = items;
        tmp4 = items;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === children) {
        let tmp6;
        if (cResult[3] === tmp4) {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
      const tmp7 = closure_16(animatedIndex(tmp[14]).View, { style: tmp4, pointerEvents: "box-none", children });
      cResult[2] = children;
      cResult[3] = tmp4;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (animatedPosition) => {
      let items;
      animatedPosition = animatedPosition.animatedPosition;
      const animatedIndex = animatedPosition.animatedIndex;
      const safeAreaTop = animatedPosition.safeAreaTop;
      const children = animatedPosition.children;
      let obj = animatedPosition(safeAreaTop[14]);
      const fn = function c() {
        let interpolate;
        let items;
        let value;
        const obj = {
          transform: items,
          opacity: interpolate(value, [-1, 0], [0, 1], ReanimatedRexport.Extrapolation.CLAMP),
        };
        items = [{ translateY: animatedPosition.get() + safeAreaTop }];
        ({ translateY: animatedPosition.get() + safeAreaTop });
        interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        value = animatedIndex.get();
        return obj;
      };
      const obj2 = {
        animatedPosition,
        safeAreaTop,
        interpolate: animatedPosition(safeAreaTop[14]).interpolate,
        animatedIndex,
        Extrapolation: animatedPosition(safeAreaTop[14]).Extrapolation,
      };
      fn.__closure = obj2;
      fn.__workletHash = 16950257902497;
      fn.__initData = __initData6;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj3 = { style: items, pointerEvents: "box-none", children };
      items = [closure_5.absoluteFill, animatedStyle];
      return closure_16(animatedIndex(safeAreaTop[14]).View, obj3);
    };
let closure_27 = {
  code: "function UserProfileActionSheetTsx7(payload,context){const{defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE}=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);}",
};
const __initData7 = {
  code: "function UserProfileActionSheetTsx8(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}",
};
const __initData8 = {
  code: "function UserProfileActionSheetTsx9(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (userId) => {
        let _location;
        let _undefined;
        let bottomSheetClose;
        let bottomSheetRef;
        let closure_14;
        let closure_9;
        let collectibleProfileOverrides;
        let disableCalls;
        let disableMessage;
        let guildId;
        let initialSection;
        let isPreviewingChanges;
        let isVoiceContext;
        let localUser;
        let location_stack;
        let messageId;
        let onClose;
        let openedAt;
        let pendingAvatarDecoration;
        let pendingProfileEffect;
        let pendingProfileFrame;
        let pendingThemeColors;
        let re;
        let roleId;
        let sessionId;
        let showGuildProfile;
        let skuId3;
        let sourceAnalyticsLocations;
        let stateFromStores2;
        let tmp12;
        let tmp19;
        let tmp21;
        let tmp25;
        let tmp7;
        let obj = userId(localUser[15]);
        const cResult = obj.c(190);
        userId = userId.userId;
        const channelId = userId.channelId;
        ({ messageId, localUser } = userId);
        ({ roleId, sessionId, onClose } = userId);
        ({ openedAt, isPreviewingChanges, collectibleProfileOverrides, showGuildProfile, sourceAnalyticsLocations } =
          userId);
        let tmp5 = undefined !== isPreviewingChanges;
        ({ disableCalls, disableMessage, isVoiceContext, location: _location, initialSection } = userId);
        if (tmp5) {
          tmp5 = isPreviewingChanges;
        }
        let tmp6 = undefined === showGuildProfile || showGuildProfile;
        if (cResult[0] !== sourceAnalyticsLocations) {
          let items = sourceAnalyticsLocations;
          if (undefined === sourceAnalyticsLocations) {
            items = [];
          }
          cResult[0] = sourceAnalyticsLocations;
          cResult[1] = items;
          tmp7 = items;
        } else {
          tmp7 = cResult[1];
        }
        react = tmp7;
        closure_18();
        const tmp2Result = userId(localUser[14]);
        const sharedValue = tmp2Result.useSharedValue(0);
        const tmp2Result9 = userId(localUser[14]);
        const sharedValue1 = tmp2Result9.useSharedValue(-1);
        const top = channelId(localUser[16])().top;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [UserStore];
          cResult[2] = items1;
          tmp12 = items1;
        } else {
          tmp12 = cResult[2];
        }
        if (cResult[3] !== userId) {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
          cResult[3] = userId;
          cResult[4] = X;
        } else {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
        }
        const tmp2Result10 = userId(localUser[17]);
        const stateFromStores = tmp2Result10.useStateFromStores(tmp12, X);
        let tmp16 = stateFromStores;
        if (stateFromStores == null) {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
          if (localUser != null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          if (tmp17 === userId) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          tmp16 = tmp18;
        }
        let c6 = tmp16;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
          const items2 = [c7];
          cResult[5] = items2;
          tmp19 = items2;
        } else {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
        }
        if (cResult[6] !== channelId) {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
          const items3 = [channelId];
          cResult[6] = channelId;
          cResult[7] = tmp22;
          cResult[8] = items3;
          tmp21 = items3;
        } else {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
          tmp21 = cResult[8];
        }
        const tmp2Result11 = userId(localUser[17]);
        const stateFromStores1 = tmp2Result11.useStateFromStores(tmp19, tmp22, tmp21);
        if (stateFromStores1 != null) {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
        }
        c7 = tmp24;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
          const items4 = [stateFromStores2];
          cResult[9] = items4;
          tmp25 = items4;
        } else {
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
        }
        if (cResult[10] === undefined) {
          let tmp49;
          let tmp48;
          class X {
            constructor() {
              return UserStore.getUser(userId);
            }
          }
          const tmp2Result12 = userId(localUser[17]);
          stateFromStores2 = tmp2Result12.useStateFromStores(tmp25, re);
          const tmp11Result = channelId(localUser[18]);
          if (tmp16 != null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          if (undefined == null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          if (tmp6) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          UserStore = tmp11Result(undefined, undefined);
          tmp11Result(undefined, undefined);
          if (cResult[13] !== tmp7) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
            const arraySpreadResult = HermesBuiltin.arraySpread(tmp32, tmp7, 0);
            tmp32[arraySpreadResult] = channelId(localUser[19]).USER_PROFILE_ACTION_SHEET;
            cResult[13] = tmp7;
            cResult[14] = tmp32;
          } else {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          const analyticsLocations = tmp11(localUser[20])(tmp32).analyticsLocations;
          const tmp2Result13 = userId(localUser[21]);
          const bottomSheetRef1 = tmp2Result13.useBottomSheetRef();
          ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
          react.useRef(null);
          const tmp2Result14 = userId(localUser[14]);
          const sharedValue2 = tmp2Result14.useSharedValue(0);
          if (cResult[15] !== sharedValue2) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
            const fn = (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
              let animatedScrollableState;
              let workletCallback;
              const obj = animatedScrollableState(closure_1_2[13]);
              const scrollEventsHandlersDefault = obj.useScrollEventsHandlersDefault(
                animatedRef,
                sharedValue,
                lockableScrollableContentOffsetY,
              );
              const obj2 = animatedScrollableState(closure_1_2[13]);
              animatedScrollableState = obj2.useBottomSheetInternal().animatedScrollableState;
              const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
              const fn = function s(contentOffset, arg1) {
                if (handleOnScroll != null) {
                  tmp(contentOffset, arg1);
                }
                set = animatedScrollableState.set;
                const value = animatedScrollableState.get();
                let num = 0;
                if (value !== sharedValue2(localUser[13]).SCROLLABLE_STATE.LOCKED) {
                  num = contentOffset.contentOffset.y;
                }
                const result = set(num);
              };
              const obj3 = animatedScrollableState(closure_1_2[14]);
              fn.__closure = {
                defaultHandleOnScroll: handleOnScroll,
                scrollPosition: animatedScrollableState,
                animatedScrollableState,
                SCROLLABLE_STATE: animatedScrollableState(closure_1_2[13]).SCROLLABLE_STATE,
              };
              fn.__workletHash = 1075381102662;
              fn.__initData = __initData;
              const items = [handleOnScroll, animatedScrollableState];
              const obj5 = { handleOnScroll: workletCallback };
              ({
                defaultHandleOnScroll: handleOnScroll,
                scrollPosition: animatedScrollableState,
                animatedScrollableState,
                SCROLLABLE_STATE: animatedScrollableState(closure_1_2[13]).SCROLLABLE_STATE,
              });
              workletCallback = obj3.useWorkletCallback(fn, items);
              const merged = Object.assign(scrollEventsHandlersDefault);
              return obj5;
            };
            cResult[15] = sharedValue2;
            cResult[16] = fn;
          } else {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          const tmp2Result15 = userId(localUser[14]);
          class Pe {
            constructor() {
              let transform;
              if (sharedValue2.get() <= 0) {
                const items = [{ translateY: sharedValue2.get() }];
                transform = items;
                const obj2 = { translateY: sharedValue2.get() };
              } else {
                transform = [];
              }
              return { transform };
            }
          }
          let obj2 = { scrollPosition: sharedValue2 };
          Pe.__closure = obj2;
          Pe.__workletHash = 15687962271123;
          Pe.__initData = __initData7;
          const animatedStyle = tmp2Result15.useAnimatedStyle(Pe);
          const tmp43 = onClose(react.useState(false), 2);
          constants = tmp43[0];
          let closure_13 = tmp43[1];
          [r10174, closure_14] = onClose(react.useState(0), 2);
          const _Symbol = Symbol;
          onClose(react.useState(0), 2);
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
            cResult[17] = tmp46;
          } else {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          const ProfileVisibility = tmp2(localUser[22]).ProfileVisibility;
          const setting = ProfileVisibility.useSetting();
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
            const items5 = [analyticsLocations];
            class Ue {
              constructor() {
                return analyticsLocations.getPendingChanges();
              }
            }
            cResult[18] = items5;
            cResult[19] = Ue;
            tmp49 = Ue;
            tmp48 = items5;
          } else {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
            tmp49 = cResult[19];
          }
          const tmp2Result16 = userId(localUser[17]);
          const stateFromStoresObject = tmp2Result16.useStateFromStoresObject(tmp48, tmp49);
          ({ pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame } =
            stateFromStoresObject);
          if (collectibleProfileOverrides != null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          if (undefined == null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          let c15 = tmp51;
          if (collectibleProfileOverrides != null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          if (undefined == null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          let c16 = tmp52;
          if (collectibleProfileOverrides != null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          if (undefined == null) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          let c17 = tmp53;
          if (cResult[20] === channelId) {
            class X {
              constructor() {
                return UserStore.getUser(userId);
              }
            }
          }
          const obj3 = {
            layout: "ACTION_SHEET",
            sourceSessionId: sessionId,
            userId,
            guildId: undefined,
            channelId,
            messageId,
            roleId,
            showGuildProfile: tmp6,
          };
          cResult[20] = channelId;
          cResult[21] = undefined;
          cResult[22] = messageId;
          cResult[23] = roleId;
          cResult[24] = sessionId;
          cResult[25] = tmp6;
          cResult[26] = userId;
          cResult[27] = obj3;
        }
        re = function re() {
          let member = null;
          if (null != c7) {
            member = GuildMemberStore.getMember(tmp, userId);
          }
          return member;
        };
        cResult[10] = undefined;
        cResult[11] = userId;
        cResult[12] = re;
      }
    : (userId) => {
        let ActionSheetBackdropToast;
        let AnalyticsLocationProvider2;
        let BottomSheet2;
        let EmptyState;
        let UserProfileAnalyticsProvider;
        let UserProfileAnalyticsProvider2;
        let _location;
        let avatarDecoration1;
        let collectibleProfileOverrides;
        let disableCalls;
        let disableMessage;
        let fetchEndedAt;
        let fetchEndedAt1;
        let fetchStartedAt;
        let fetchStartedAt1;
        let intl2;
        let isLoaded;
        let isLoaded1;
        let isPreviewingChanges;
        let isVoiceContext;
        let items15;
        let items16;
        let items17;
        let items18;
        let items19;
        let messageId;
        let obj10;
        let obj11;
        let obj12;
        let obj14;
        let obj15;
        let obj20;
        let obj28;
        let obj29;
        let obj31;
        let obj35;
        let obj37;
        let openedAt;
        let pendingAvatarDecoration;
        let pendingProfileEffect;
        let pendingProfileFrame;
        let pendingThemeColors;
        let primaryColor;
        let roleId;
        let secondaryColor;
        let sessionId;
        let showGuildProfile;
        let skuId;
        let theme;
        let tmp54;
        let tmp78;
        let tmp80;
        let tmp82;
        userId = userId.userId;
        const channelId = userId.channelId;
        const localUser = userId.localUser;
        const onClose = userId.onClose;
        ({ openedAt, isPreviewingChanges } = userId);
        ({ messageId, roleId, sessionId, disableCalls, disableMessage, isVoiceContext, location: _location } = userId);
        if (isPreviewingChanges === undefined) {
          isPreviewingChanges = false;
        }
        ({ collectibleProfileOverrides, showGuildProfile } = userId);
        if (showGuildProfile === undefined) {
          showGuildProfile = true;
        }
        let prop = userId.sourceAnalyticsLocations;
        if (prop === undefined) {
          prop = [];
        }
        let stateFromStores;
        let guild_id;
        let stateFromStores2;
        let closure_13;
        let analyticsLocations;
        let sharedValue2;
        let first;
        let closure_17;
        let first1;
        let closure_19;
        let avatarDecoration;
        let profileEffect1;
        let profileFrame1;
        let createUserProfileAnalyticsContext;
        let closure_24;
        let width;
        closure_26 = undefined;
        navigation = undefined;
        function handleUserSettingsClose() {
          navigation.goBack();
          const obj = { sourceAnalyticsLocations: analyticsLocations, localUser };
          const tmp2 = showUserProfileActionSheetDefault;
          const merged = Object.assign(createUserProfileAnalyticsContext);
          tmp2(obj);
        }
        const initialSection = userId.initialSection;
        let tmp2 = first1();
        const tmp4 = localUser;
        let obj = userId(localUser[14]);
        const sharedValue = obj.useSharedValue(0);
        let obj2 = userId(localUser[14]);
        const sharedValue1 = obj2.useSharedValue(-1);
        let tmp7 = channelId;
        const top = channelId(localUser[16])().top;
        let obj3 = userId(localUser[17]);
        let items = [stateFromStores];
        stateFromStores = obj3.useStateFromStores(items, () => UserStore.getUser(userId));
        let obj4 = stateFromStores;
        if (stateFromStores == null) {
          let id;
          if (localUser != null) {
            id = localUser.id;
          }
          let tmp10;
          if (id === userId) {
            tmp10 = localUser;
          }
          obj4 = tmp10;
        }
        const tmp3Result = tmp3(tmp4[17]);
        const items1 = [sharedValue1];
        const items2 = [channelId];
        const stateFromStores1 = tmp3Result.useStateFromStores(
          items1,
          () => ChannelStore.getChannel(channelId),
          items2,
        );
        guild_id = undefined;
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        const items3 = [top];
        const tmp3Result13 = userId(tmp4[17]);
        stateFromStores2 = tmp3Result13.useStateFromStores(items3, () => {
          let member = null;
          if (null != guild_id) {
            member = GuildMemberStore.getMember(tmp, userId);
          }
          return member;
        });
        let id1;
        const tmp7Result = tmp7(tmp4[18]);
        if (obj4 != null) {
          id1 = obj4.id;
        }
        if (id1 == null) {
          id1 = closure_13;
        }
        let tmp16;
        if (showGuildProfile) {
          tmp16 = guild_id;
        }
        const tmp7ResultResult = tmp7Result(id1, tmp16);
        closure_13 = tmp7ResultResult;
        const items4 = [];
        const tmp7Result10 = tmp7(tmp4[20]);
        const arraySpreadResult = HermesBuiltin.arraySpread(items4, prop, 0);
        items4[arraySpreadResult] = tmp7(tmp4[19]).USER_PROFILE_ACTION_SHEET;
        analyticsLocations = tmp7Result10(items4).analyticsLocations;
        const tmp3Result14 = userId(tmp4[21]);
        const bottomSheetRef1 = tmp3Result14.useBottomSheetRef();
        const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
        const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
        const ref = isPreviewingChanges.useRef(null);
        const tmp3Result15 = userId(tmp4[14]);
        sharedValue2 = tmp3Result15.useSharedValue(0);
        const items5 = [sharedValue2];
        const memo = isPreviewingChanges.useMemo(
          () => (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
            let animatedScrollableState;
            let workletCallback;
            const obj = animatedScrollableState(closure_1_2[13]);
            const scrollEventsHandlersDefault = obj.useScrollEventsHandlersDefault(
              animatedRef,
              sharedValue,
              lockableScrollableContentOffsetY,
            );
            const obj2 = animatedScrollableState(closure_1_2[13]);
            animatedScrollableState = obj2.useBottomSheetInternal().animatedScrollableState;
            const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
            const fn = function s(contentOffset, arg1) {
              if (handleOnScroll != null) {
                tmp(contentOffset, arg1);
              }
              set = animatedScrollableState.set;
              const value = animatedScrollableState.get();
              let num = 0;
              if (value !== sharedValue2(localUser[13]).SCROLLABLE_STATE.LOCKED) {
                num = contentOffset.contentOffset.y;
              }
              const result = set(num);
            };
            const obj3 = animatedScrollableState(closure_1_2[14]);
            fn.__closure = {
              defaultHandleOnScroll: handleOnScroll,
              scrollPosition: animatedScrollableState,
              animatedScrollableState,
              SCROLLABLE_STATE: animatedScrollableState(closure_1_2[13]).SCROLLABLE_STATE,
            };
            fn.__workletHash = 1075381102662;
            fn.__initData = __initData;
            const items = [handleOnScroll, animatedScrollableState];
            const obj5 = { handleOnScroll: workletCallback };
            ({
              defaultHandleOnScroll: handleOnScroll,
              scrollPosition: animatedScrollableState,
              animatedScrollableState,
              SCROLLABLE_STATE: animatedScrollableState(closure_1_2[13]).SCROLLABLE_STATE,
            });
            workletCallback = obj3.useWorkletCallback(fn, items);
            const merged = Object.assign(scrollEventsHandlersDefault);
            return obj5;
          },
          items5,
        );
        const tmp3Result16 = userId(tmp4[14]);
        class W {
          constructor() {
            let transform;
            if (sharedValue2.get() <= 0) {
              const items = [{ translateY: sharedValue2.get() }];
              transform = items;
              const obj2 = { translateY: sharedValue2.get() };
            } else {
              transform = [];
            }
            return { transform };
          }
        }
        W.__closure = { scrollPosition: sharedValue2 };
        W.__workletHash = 4091977514258;
        W.__initData = __initData8;
        const animatedStyle = tmp3Result16.useAnimatedStyle(W);
        const tmp25 = onClose(isPreviewingChanges.useState(false), 2);
        first = tmp25[0];
        closure_17 = tmp25[1];
        const tmp27 = onClose(isPreviewingChanges.useState(0), 2);
        first1 = tmp27[0];
        closure_19 = tmp27[1];
        const callback = isPreviewingChanges.useCallback((nativeEvent) => {
          closure_19(Math.floor(nativeEvent.nativeEvent.layout.width));
        }, []);
        const ProfileVisibility = tmp3(tmp4[22]).ProfileVisibility;
        const setting = ProfileVisibility.useSetting();
        const items6 = [obj4];
        const tmp3Result17 = userId(tmp4[17]);
        const stateFromStoresObject = tmp3Result17.useStateFromStoresObject(items6, () => obj4.getPendingChanges());
        avatarDecoration = undefined;
        ({ pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame } =
          stateFromStoresObject);
        if (collectibleProfileOverrides != null) {
          avatarDecoration = collectibleProfileOverrides.avatarDecoration;
        }
        if (avatarDecoration == null) {
          avatarDecoration = pendingAvatarDecoration;
        }
        profileEffect1 = undefined;
        if (collectibleProfileOverrides != null) {
          profileEffect1 = collectibleProfileOverrides.profileEffect;
        }
        if (profileEffect1 == null) {
          profileEffect1 = pendingProfileEffect;
        }
        profileFrame1 = undefined;
        if (collectibleProfileOverrides != null) {
          profileFrame1 = collectibleProfileOverrides.profileFrame;
        }
        if (profileFrame1 == null) {
          profileFrame1 = pendingProfileFrame;
        }
        const tmp3Result18 = userId(tmp4[23]);
        createUserProfileAnalyticsContext = tmp3Result18.useCreateUserProfileAnalyticsContext({
          layout: "ACTION_SHEET",
          sourceSessionId: sessionId,
          userId,
          guildId: guild_id,
          channelId,
          messageId,
          roleId,
          showGuildProfile,
        });
        if (isPreviewingChanges) {
          let skuId2;
          if (undefined !== profileFrame1) {
            let skuId1;
            if (profileFrame1 != null) {
              skuId1 = profileFrame1.skuId;
            }
            skuId = skuId1;
          }
          const tmp3Result19 = userId(tmp4[24]);
          const isScreenLandscape = tmp3Result19.useIsScreenLandscape();
          let tmp39;
          const tmp7Result11 = tmp7(tmp4[25]);
          if (!isScreenLandscape) {
            tmp39 = skuId;
          }
          const tmp7Result2Result = tmp7Result11(tmp39);
          closure_24 = tmp7Result2Result;
          let tmp42;
          const tmp7Result12 = tmp7(tmp4[26]);
          if (!isScreenLandscape) {
            tmp42 = skuId;
          }
          let obj5 = { skuId: tmp42, openedAt, context: createUserProfileAnalyticsContext, analyticsLocations };
          tmp7Result12(obj5);
          const tmp3Result20 = userId(tmp4[27]);
          const isShopThisLookMobileEnabled = tmp3Result20.useIsShopThisLookMobileEnabled("UserProfileActionSheet");
          let tmp46;
          const tmp7Result13 = tmp7(tmp4[28]);
          if (showGuildProfile) {
            tmp46 = guild_id;
          }
          tmp7Result13(userId, tmp46, isShopThisLookMobileEnabled);
          const items7 = [tmp7Result2Result, sharedValue, top, sharedValue1, first1];
          const memo1 = obj8.useMemo(() => {
            let obj2;
            let tmp10;
            let tmp2 = null;
            if (null != closure_24) {
              const obj = {
                animatedPosition: sharedValue,
                safeAreaTop: top,
                animatedIndex: sharedValue1,
                children: authStore3(tmp10, obj2),
              };
              obj2 = {
                frame: tmp,
                frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK,
                profileThemeType: UserProfileThemeTypes.ACTION_SHEET,
                containerWidth: first1,
              };
              tmp10 = ProfileFrameDefault;
              tmp2 = authStore3(closure_26, obj);
            }
            return tmp2;
          }, items7);
          if (isPreviewingChanges) {
            let tmp108Result7;
            if (undefined !== profileEffect1) {
              let skuId3;
              if (profileEffect1 != null) {
                skuId3 = profileEffect1.skuId;
              }
              skuId2 = skuId3;
            }
            const tmp50Result = tmp50(skuId2);
            const obj6 = { user: obj4, displayProfile: tmp7ResultResult, pendingThemeColors: tmp54 };
            tmp54 = undefined;
            const tmp7Result14 = tmp7(tmp4[32]);
            if (isPreviewingChanges) {
              tmp54 = pendingThemeColors;
            }
            ({ theme, primaryColor, secondaryColor } = tmp7Result14(obj6));
            tmp7Result14(obj6);
            const tmp57 = tmp7(tmp4[33])(sharedValue2);
            size = tmp7(tmp4[34])();
            width = size.width;
            const diff = size.height - tmp3(tmp4[35]).NAV_BAR_HEIGHT_MULTILINE - top;
            const items8 = [isPreviewingChanges, tmp7Result2Result, width];
            const memo2 = obj8.useMemo(() => {
              if (isPreviewingChanges) {
                if (null != closure_24) {
                  const _Math = Math;
                  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
                  return scaleProfileFrameDefault(tmp2, bound).overflowTop;
                }
              }
              return 0;
            }, items8);
            const tmp60 = tmp7(tmp4[37])();
            const tmp3Result21 = userId(tmp4[38]);
            const token = tmp3Result21.useToken(tmp7(tmp4[39]).colors.INTERACTIVE_TEXT_HOVER, theme);
            const obj7 = {
              userId,
              user: obj4,
              channelId,
              guildId: guild_id,
              displayProfile: tmp7ResultResult,
              guildMember: stateFromStores2,
            };
            const tmp62 = tmp7(tmp4[40])(obj7);
            closure_26 = tmp62;
            const items9 = [obj4, channelId];
            const items10 = [stateFromStores, userId];
            const memo3 = obj8.useMemo(() => {
              let result = null != obj4;
              if (result) {
                const obj = ApplicationPresenceUtils;
                result = obj.shouldDisableUserPresenceInChannel(tmp, channelId);
              }
              return result;
            }, items9);
            const effect = obj8.useEffect(() => {
              if (null == stateFromStores) {
                const obj = UserActionCreators;
                const user = obj.getUser(userId);
              }
            }, items10);
            const items11 = [obj4, guild_id, channelId];
            const effect1 = obj8.useEffect(() => {
              let tmp = null == obj4;
              if (!tmp) {
                tmp = obj4.isNonUserBot() && !isChangelogUserDefault(obj4.id);
                const isNonUserBotResult = obj4.isNonUserBot() && !isChangelogUserDefault(obj4.id);
              }
              if (!tmp) {
                const id = obj4.id;
                const obj2 = {
                  type: "action_sheet",
                  withMutualGuilds: true,
                  withMutualFriends: true,
                  dispatchWait: true,
                  guildId: guild_id,
                  channelId,
                };
                const tmp7 = maybeFetchUserProfileDefault;
                const avatarURL = obj4.getAvatarURL(guild_id, 80);
                tmp7(id, avatarURL, obj2);
              }
            }, items11);
            const items12 = [tmp62, tmp7ResultResult, guild_id, first, stateFromStores2];
            const effect2 = obj8.useEffect(() => {
              const tmp = first || null == closure_13;
              if (!tmp) {
                let tmp6 = null == guild_id;
                if (!tmp6) {
                  prop = undefined;
                  if (stateFromStores2 != null) {
                    prop = stateFromStores2.fullProfileLoadedTimestamp;
                  }
                  tmp6 = null != prop;
                }
                if (tmp6) {
                  const obj = AnalyticsUtilsDefault;
                  obj.track(stateFromStores2.OPEN_POPOUT, closure_26);
                  closure_17(true);
                }
              }
            }, items12);
            let skuId4;
            const useEffect = obj8.useEffect;
            if (avatarDecoration != null) {
              skuId4 = avatarDecoration.skuId;
            }
            const items13 = [skuId4, , ,];
            let skuId5;
            if (profileEffect1 != null) {
              skuId5 = profileEffect1.skuId;
            }
            items13[1] = skuId5;
            let skuId6;
            if (profileFrame1 != null) {
              skuId6 = profileFrame1.skuId;
            }
            items13[2] = skuId6;
            items13[3] = prop;
            const effect3 = useEffect(() => {
              let skuId;
              const atResult = prop.at(-1);
              if (atResult === AnalyticsLocationDefault.COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
                const obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: prop, sku_id: skuId };
                skuId = undefined;
                const track = AnalyticsUtilsDefault.track;
                const OPEN_MODAL = stateFromStores2.OPEN_MODAL;
                AnalyticsUtilsDefault;
                if (avatarDecoration != null) {
                  skuId = avatarDecoration.skuId;
                }
                if (skuId == null) {
                  let skuId1;
                  if (profileEffect1 != null) {
                    skuId1 = profileEffect1.skuId;
                  }
                  skuId = skuId1;
                }
                if (skuId == null) {
                  let skuId2;
                  if (profileFrame1 != null) {
                    skuId2 = profileFrame1.skuId;
                  }
                  skuId = skuId2;
                }
                track(OPEN_MODAL, obj);
              }
            }, items13);
            const items14 = [onClose];
            const effect4 = obj8.useEffect(
              () => () => {
                if (onClose != null) {
                  tmp();
                }
              },
              items14,
            );
            const effect5 = obj8.useEffect(() => {
              let rootNavigationRef;
              function handleNavigationChange() {
                key = undefined;
                if (rootNavigationRef != null) {
                  const currentRoute = rootNavigationRef.getCurrentRoute();
                  if (currentRoute != null) {
                    key = currentRoute.key;
                  }
                }
                if (key !== key) {
                  const obj2 = channelId(localUser[47]);
                  obj2.hideAllActionSheets();
                }
              }
              const obj = rootNavigationRef(handleNavigationChange[46]);
              rootNavigationRef = obj.getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  let currentRoute = rootNavigationRef.getCurrentRoute();
                  let key;
                  if (currentRoute != null) {
                    key = currentRoute.key;
                  }
                  rootNavigationRef.addListener("state", handleNavigationChange);
                  return () => {
                    rootNavigationRef.removeListener("state", handleNavigationChange);
                  };
                }
              }
            }, []);
            const tmp3Result22 = userId(tmp4[48]);
            navigation = tmp3Result22.useNavigation();
            if (null == obj4) {
              const obj9 = { value: analyticsLocations, children: first(UserProfileAnalyticsProvider, obj10) };
              const AnalyticsLocationProvider = tmp3(tmp4[20]).AnalyticsLocationProvider;
              obj10 = {
                value: createUserProfileAnalyticsContext,
                openedAt,
                fetchStartedAt,
                fetchEndedAt,
                isLoaded,
                children: first(BottomSheet2, obj11),
              };
              fetchStartedAt = undefined;
              UserProfileAnalyticsProvider = tmp3(tmp4[23]).UserProfileAnalyticsProvider;
              if (tmp7ResultResult != null) {
                fetchStartedAt = tmp7ResultResult.fetchStartedAt;
              }
              fetchEndedAt = undefined;
              if (tmp7ResultResult != null) {
                fetchEndedAt = tmp7ResultResult.fetchEndedAt;
              }
              isLoaded = undefined;
              if (tmp7ResultResult != null) {
                isLoaded = tmp7ResultResult.isLoaded;
              }
              obj11 = { children: first(EmptyState, obj12) };
              BottomSheet2 = tmp3(tmp4[50]).BottomSheet;
              obj12 = {
                style: { marginTop: 42 },
                Illustration: userId(tmp4[52]).NoResults,
                body: intl2.string(userId(tmp4[53]).t.eAn6z2),
              };
              EmptyState = tmp3(tmp4[51]).EmptyState;
              intl2 = tmp3(tmp4[53]).intl;
              tmp108Result7 = tmp104(AnalyticsLocationProvider, obj9);
            } else {
              let tmp108Result4;
              const obj13 = { theme, primaryColor, secondaryColor, children: first(AnalyticsLocationProvider2, obj14) };
              const ThemeContextProvider2 = tmp3(tmp4[54]).ThemeContextProvider;
              obj14 = { value: analyticsLocations, children: closure_17(UserProfileAnalyticsProvider2, obj15) };
              AnalyticsLocationProvider2 = tmp3(tmp4[20]).AnalyticsLocationProvider;
              obj15 = {
                value: createUserProfileAnalyticsContext,
                openedAt,
                fetchStartedAt: fetchStartedAt1,
                fetchEndedAt: fetchEndedAt1,
                isLoaded: isLoaded1,
                children: items18,
              };
              fetchStartedAt1 = undefined;
              UserProfileAnalyticsProvider2 = tmp3(tmp4[23]).UserProfileAnalyticsProvider;
              if (tmp7ResultResult != null) {
                fetchStartedAt1 = tmp7ResultResult.fetchStartedAt;
              }
              fetchEndedAt1 = undefined;
              if (tmp7ResultResult != null) {
                fetchEndedAt1 = tmp7ResultResult.fetchEndedAt;
              }
              isLoaded1 = undefined;
              if (tmp7ResultResult != null) {
                isLoaded1 = tmp7ResultResult.isLoaded;
              }
              let tmp108Result = null != tmp7Result2Result;
              const obj16 = {
                ref: bottomSheetRef,
                handleDisabled: true,
                scrollable: true,
                startExpanded: true,
                maxHeight: diff - memo2,
                contentStyles: tmp2.noPadding,
                backdropChildren: memo1,
                animatedIndex: sharedValue1,
                children: items15,
              };
              BottomSheet = tmp3(tmp4[50]).BottomSheet;
              if (tmp108Result) {
                const obj17 = { animatedPosition: sharedValue };
                tmp108Result = tmp108(createUserProfileAnalyticsContext, obj17);
              }
              items15 = [tmp108Result, , ,];
              const obj18 = { gradientHeight: diff, bannerHeight: tmp57 };
              items15[1] = first(tmp7(tmp4[55]), obj18);
              let str2;
              const obj19 = {
                scrollsToTop: false,
                style: tmp2.container,
                contentContainerStyle: obj20,
                scrollEventsHandlersHook: tmp78,
                ref,
                children: first(sharedValue, obj29),
              };
              const BottomSheetScrollView = tmp3(tmp4[13]).BottomSheetScrollView;
              if (isPreviewingChanges) {
                str2 = "none";
              }
              tmp78 = undefined;
              obj20 = { pointerEvents: str2 };
              const tmp3Result23 = userId(tmp4[56]);
              if (tmp3Result23.isIOS()) {
                tmp78 = memo;
              }
              const obj22 = {
                user: obj4,
                channel: stateFromStores1,
                guildId: tmp80,
                displayProfile: tmp7ResultResult,
                disableCalls,
                disableMessage,
                isVoiceContext,
                location: _location,
                disableStatus: memo3,
                scrollViewRef: ref,
                isPreviewingChanges,
                avatarDecorationOverride: avatarDecoration1,
                navigateToShop() {
                  const obj = openUserSettings;
                  const obj2 = { screen: analyticsLocations.COLLECTIBLES_SHOP, onClose: handleUserSettingsClose };
                  return obj.openUserSettings(obj2);
                },
                navigateToPremium() {
                  const obj = openUserSettings;
                  const obj2 = { screen: analyticsLocations.PREMIUM, onClose: handleUserSettingsClose };
                  return obj.openUserSettings(obj2);
                },
                showUserProfileActionSheet: function showUserProfileActionSheetWithParams() {
                  const obj = { sourceAnalyticsLocations: analyticsLocations, localUser };
                  const tmp = showUserProfileActionSheetDefault;
                  const merged = Object.assign(createUserProfileAnalyticsContext);
                  tmp(obj);
                },
                initialSection,
                scrollPosition: tmp82,
              };
              tmp80 = undefined;
              const obj21 = { style: tmp2.profileContainer, onLayout: callback, children: items16 };
              if (showGuildProfile) {
                tmp80 = guild_id;
              }
              avatarDecoration1 = undefined;
              if (collectibleProfileOverrides != null) {
                avatarDecoration1 = collectibleProfileOverrides.avatarDecoration;
              }
              tmp82 = undefined;
              const tmp3Result24 = userId(tmp4[56]);
              if (tmp3Result24.isIOS()) {
                tmp82 = sharedValue2;
              }
              if (obj4.isNonUserBot()) {
                const obj23 = {};
                const tmp7Result15 = tmp7(tmp4[58]);
                let merged = Object.assign(obj22);
                tmp108Result4 = tmp108(tmp7Result15, obj23);
              } else if (obj4.bot) {
                const obj24 = {};
                const tmp7Result16 = tmp7(tmp4[59]);
                const merged1 = Object.assign(obj22);
                tmp108Result4 = tmp108(tmp7Result16, obj24);
              } else {
                const obj25 = {};
                const tmp7Result17 = tmp7(tmp4[60]);
                const merged2 = Object.assign(obj22);
                tmp108Result4 = tmp108(tmp7Result17, obj25);
              }
              items16 = [tmp108Result4];
              let tmp108Result5 = null != tmp50Result;
              if (tmp108Result5) {
                const obj26 = { style: items17, pointerEvents: "none", children: first(tmp7(tmp4[61]), obj28) };
                items17 = [tmp2.profileEffect, ,];
                const obj27 = { height: diff };
                items17[1] = obj27;
                items17[2] = animatedStyle;
                const View = tmp7(tmp4[14]).View;
                obj28 = { skuId: tmp50Result.skuId, bannerAdjustment: 0 };
                tmp108Result5 = tmp108(View, obj26);
              }
              items16[1] = tmp108Result5;
              obj29 = { children: closure_17(sharedValue, obj21) };
              items15[2] = first(BottomSheetScrollView, obj19);
              let tmp108Result6 = null == tmp7Result2Result;
              if (tmp108Result6) {
                const obj30 = { variant: "floating", tabStyle: obj31, onPress: bottomSheetClose };
                obj31 = { backgroundColor: token };
                tmp108Result6 = tmp108(tmp3(tmp4[62]).ActionSheetHeaderBar, obj30);
              }
              items15[3] = tmp108Result6;
              items18 = [closure_17(BottomSheet, obj16), ,];
              let tmp109Result = null != tmp7Result2Result;
              if (tmp109Result) {
                const obj32 = {
                  animatedPosition: sharedValue,
                  safeAreaTop: top,
                  animatedIndex: sharedValue1,
                  children: items19,
                };
                const obj33 = {
                  frame: tmp7Result2Result,
                  profileThemeType: guild_id.ACTION_SHEET,
                  frameOrder: userId(tmp4[30]).ProfileFrameLayerOrder.FRONT,
                  containerWidth: first1,
                };
                const tmp7Result18 = tmp7(tmp4[29]);
                items19 = [first(tmp7Result18, obj33)];
                const obj34 = { variant: "floating", tabStyle: obj35, onPress: bottomSheetClose };
                obj35 = { backgroundColor: token };
                items19[1] = first(userId(tmp4[62]).ActionSheetHeaderBar, obj34);
                tmp109Result = tmp109(closure_26, obj32);
              }
              items18[1] = tmp109Result;
              if (isPreviewingChanges) {
                let mNZcD8;
                const obj36 = {
                  theme: tmp60,
                  primaryColor: null,
                  secondaryColor: null,
                  children: first(ActionSheetBackdropToast, obj37),
                };
                const ThemeContextProvider = tmp3(tmp4[54]).ThemeContextProvider;
                ActionSheetBackdropToast = tmp3(tmp4[63]).ActionSheetBackdropToast;
                const intl = tmp3(tmp4[53]).intl;
                const string = intl.string;
                if (setting === userId(tmp4[64]).ProfileVisibility.FRIENDS_ONLY) {
                  mNZcD8 = tmp3(tmp4[53]).t.mNZcD8;
                } else {
                  mNZcD8 = tmp3(tmp4[53]).t["wSnI/0"];
                }
                obj37 = { text: string(mNZcD8), isExpanded: true };
                isPreviewingChanges = tmp108(ThemeContextProvider, obj36);
              }
              items18[2] = isPreviewingChanges;
              tmp108Result7 = tmp108(ThemeContextProvider2, obj13);
            }
            return tmp108Result7;
          }
          if (tmp7ResultResult != null) {
            const profileEffect = tmp7ResultResult.profileEffect;
            if (profileEffect != null) {
              skuId2 = profileEffect.skuId;
            }
          }
        }
        if (tmp7ResultResult != null) {
          const profileFrame = tmp7ResultResult.profileFrame;
          if (profileFrame != null) {
            skuId = profileFrame.skuId;
          }
        }
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default memoResult;
