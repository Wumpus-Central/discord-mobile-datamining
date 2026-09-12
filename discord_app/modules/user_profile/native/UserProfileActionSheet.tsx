// === Module 8317: UserProfileActionSheet ===

// Module 8317 (UserProfileActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import isChangelogUserDefault from "isChangelogUser" /* 2009 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import BottomSheetModal from "BottomSheetModal" /* 6728 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import openUserSettings from "openUserSettings" /* 7485 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8296 */;
import UserActionCreators from "UserActionCreators" /* 8298 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8304 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8324 */;
import ProfileFrameDefault from "ProfileFrame" /* 8337 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8340 */;
import ApplicationPresenceUtils from "ApplicationPresenceUtils" /* 8347 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8277 */;

require = fn;
function UseAnimatedPosition(animatedPosition) {
  animatedPosition = animatedPosition.animatedPosition;
  const animatedPosition2 = BottomSheetModal.useBottomSheet().animatedPosition;
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
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  return null;
}
function ActionSheetAlignedView(animatedPosition) {
  animatedPosition = animatedPosition.animatedPosition;
  const animatedIndex = animatedPosition.animatedIndex;
  const safeAreaTop = animatedPosition.safeAreaTop;
  animatedPosition(safeAreaTop[13]);
  const fn = function c() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: animatedPosition.get() + safeAreaTop };
    const items = [obj];
    obj.transform = items;
    value = animatedIndex.get();
    obj.opacity = ReanimatedRexport.interpolate(value, [-1, 0], [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  let obj = { animatedPosition, safeAreaTop, interpolate: animatedPosition(safeAreaTop[13]).interpolate, animatedIndex, Extrapolation: animatedPosition(safeAreaTop[13]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 16546700050596;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null, pointerEvents: "box-none", children: animatedPosition.children };
  let items = [absoluteFill.absoluteFill, animatedStyle];
  obj.style = items;
  return closure_16(animatedIndex(safeAreaTop[13]).View, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileThemeTypes = fn(7311).UserProfileThemeTypes;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1, UserSettingsSections: closure_14 } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(7254).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4636);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 }, profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 } });
const __initData = { code: "function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}" };
const __initData2 = { code: "function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}" };
const __initData3 = { code: "function UserProfileActionSheetTsx3(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}" };
let closure_24 = { code: "function UserProfileActionSheetTsx4(payload,context){const{defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE}=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);}" };
let closure_25 = { code: "function UserProfileActionSheetTsx5(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default noop.memo(function UserProfileActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const localUser = userId.localUser;
  const onClose = userId.onClose;
  ({ openedAt, isPreviewingChanges } = userId);
  ({ messageId, roleId, sessionId, disableCalls, disableMessage, isVoiceContext, location: _location } = userId);
  if (isPreviewingChanges === undefined) {
    isPreviewingChanges = false;
  }
  let flag = userId.showGuildProfile;
  if (flag === undefined) {
    flag = true;
  }
  let prop = userId.sourceAnalyticsLocations;
  if (prop === undefined) {
    prop = [];
  }
  let stateFromStores;
  let guild_id;
  let stateFromStores2;
  closure_13 = undefined;
  let analyticsLocations;
  let sharedValue2;
  let first;
  closure_17 = undefined;
  let first1;
  closure_19 = undefined;
  let pendingAvatarDecoration;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let createUserProfileAnalyticsContext;
  closure_24 = undefined;
  let width;
  closure_26 = undefined;
  let navigation;
  function handleUserSettingsClose() {
    navigation.goBack();
    const merged = Object.assign(createUserProfileAnalyticsContext);
    showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, localUser });
  }
  let tmp = first1();
  const tmp3 = localUser;
  let obj = userId(localUser[13]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = userId(localUser[13]);
  const sharedValue1 = obj1.useSharedValue(-1);
  const top = channelId(localUser[14])().top;
  let obj2 = userId(localUser[15]);
  let items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj3 = stateFromStores;
  if (stateFromStores == null) {
    let id;
    if (localUser != null) {
      id = localUser.id;
    }
    let tmp9;
    if (id === userId) {
      tmp9 = localUser;
    }
    obj3 = tmp9;
  }
  let tmp2Result = tmp2(tmp3[15]);
  const items1 = [sharedValue1];
  const items2 = [channelId];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  tmp2Result = tmp2(tmp3[15]);
  const items3 = [top];
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  let id1;
  let tmp6Result = tmp6(tmp3[16]);
  if (obj3 != null) {
    id1 = obj3.id;
  }
  if (id1 == null) {
    id1 = closure_13;
  }
  let tmp15;
  if (flag) {
    tmp15 = guild_id;
  }
  const tmp6ResultResult = tmp6Result(id1, tmp15);
  closure_13 = tmp6ResultResult;
  const items4 = [];
  tmp6Result = tmp6(tmp3[17]);
  items4[HermesBuiltin.arraySpread(prop, 0)] = channelId(tmp3[18]).USER_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp6Result(items4).analyticsLocations;
  const arraySpreadResult = HermesBuiltin.arraySpread(prop, 0);
  const bottomSheetRef = userId(tmp3[19]).useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef.bottomSheetClose;
  let obj7 = isPreviewingChanges;
  const ref = isPreviewingChanges.useRef(null);
  const tmp2Result1 = userId(tmp3[19]);
  sharedValue2 = userId(tmp3[13]).useSharedValue(0);
  const items5 = [sharedValue2];
  const memo = isPreviewingChanges.useMemo(() => {
    closure_0 = sharedValue2;
    return (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
      let obj = animatedScrollableState(6728);
      const scrollEventsHandlersDefault = obj.useScrollEventsHandlersDefault(animatedRef, sharedValue, lockableScrollableContentOffsetY);
      animatedScrollableState = animatedScrollableState(6728).useBottomSheetInternal().animatedScrollableState;
      const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
      const obj2 = animatedScrollableState(6728);
      const fn = function s(contentOffset, arg1) {
        if (handleOnScroll != null) {
          tmp(contentOffset, arg1);
        }
        value = animatedScrollableState.get();
        let num = 0;
        if (value !== userId(localUser[12]).SCROLLABLE_STATE.LOCKED) {
          num = contentOffset.contentOffset.y;
        }
        const result = animatedScrollableState.set(num);
      };
      obj = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(6728).SCROLLABLE_STATE };
      fn.__closure = obj;
      fn.__workletHash = 13254130622789;
      fn.__initData = __initData;
      const items = [handleOnScroll, animatedScrollableState];
      obj = {};
      obj3 = animatedScrollableState(4373);
      const merged = Object.assign(scrollEventsHandlersDefault);
      obj.handleOnScroll = animatedScrollableState(4373).useWorkletCallback(fn, items);
      return obj;
    };
  }, items5);
  const tmp2Result2 = userId(tmp3[13]);
  class D {
    constructor() {
      obj = closure_15;
      if (closure_15.get() <= 0) {
        obj = { translateY: null };
        obj.translateY = obj.get();
        items = [];
        items[0] = obj;
        items1 = items;
      } else {
        items1 = [];
      }
      return { transform: items1 };
    }
  }
  D.__closure = { scrollPosition: sharedValue2 };
  D.__workletHash = 6237718973214;
  D.__initData = width;
  const animatedStyle = userId(tmp3[13]).useAnimatedStyle(D);
  const tmp24 = onClose(isPreviewingChanges.useState(false), 2);
  first = tmp24[0];
  closure_17 = tmp24[1];
  const tmp26 = onClose(isPreviewingChanges.useState(0), 2);
  first1 = tmp26[0];
  closure_19 = tmp26[1];
  const callback = isPreviewingChanges.useCallback((nativeEvent) => {
    closure_19(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = tmp2(tmp3[20]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const tmp2Result3 = userId(tmp3[13]);
  const items6 = [obj3];
  const stateFromStoresObject = userId(tmp3[15]).useStateFromStoresObject(items6, () => obj3.getPendingChanges());
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const tmp2Result4 = userId(tmp3[15]);
  createUserProfileAnalyticsContext = userId(tmp3[21]).useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, guildId: guild_id, channelId, messageId, roleId, showGuildProfile: flag });
  if (isPreviewingChanges) {
    if (undefined !== pendingProfileFrame) {
      let skuId;
      if (pendingProfileFrame != null) {
        skuId = pendingProfileFrame.skuId;
      }
    }
    const isScreenLandscape = tmp2(tmp3[22]).useIsScreenLandscape();
    let tmp35;
    const tmp2Result6 = tmp2(tmp3[22]);
    if (!isScreenLandscape) {
      tmp35 = skuId;
    }
    const tmp6Result2Result = tmp6(tmp3[23])(tmp35);
    closure_24 = tmp6Result2Result;
    let tmp38;
    const tmp6Result1 = tmp6(tmp3[23]);
    if (!isScreenLandscape) {
      tmp38 = skuId;
    }
    obj = { skuId: tmp38, openedAt, context: createUserProfileAnalyticsContext, analyticsLocations };
    tmp6(tmp3[24])(obj);
    const tmp6Result2 = tmp6(tmp3[24]);
    const isShopThisLookMobileEnabled = tmp2(tmp3[25]).useIsShopThisLookMobileEnabled("UserProfileActionSheet");
    let tmp42;
    const tmp2Result7 = tmp2(tmp3[25]);
    if (flag) {
      tmp42 = guild_id;
    }
    tmp6(tmp3[26])(userId, tmp42, isShopThisLookMobileEnabled);
    const items7 = [tmp6Result2Result, sharedValue, top, sharedValue1, first1];
    const memo1 = obj7.useMemo(() => {
      let tmp2 = null;
      if (null != closure_24) {
        let obj = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: null };
        obj = { frame: tmp, frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK, profileThemeType: UserProfileThemeTypes.ACTION_SHEET, containerWidth: first1 };
        obj.children = value2(ProfileFrameDefault, obj);
        tmp2 = value2(ActionSheetAlignedView, obj);
      }
      return tmp2;
    }, items7);
    if (isPreviewingChanges) {
      if (undefined !== pendingProfileEffect) {
        let skuId1;
        if (pendingProfileEffect != null) {
          skuId1 = pendingProfileEffect.skuId;
        }
        let skuId2 = skuId1;
      }
      const tmp46Result = tmp46(skuId2);
      obj = { user: obj3, displayProfile: tmp6ResultResult, pendingThemeColors: null };
      let pendingThemeColors;
      if (isPreviewingChanges) {
        pendingThemeColors = stateFromStoresObject.pendingThemeColors;
      }
      obj.pendingThemeColors = pendingThemeColors;
      const tmp6Result4 = tmp6(tmp3[30]);
      ({ theme, primaryColor, secondaryColor } = tmp6(tmp3[30])(obj));
      const tmp6Result5Result = tmp6(tmp3[30])(obj);
      const size = tmp6(tmp3[32])();
      width = size.width;
      const diff = size.height - tmp2(tmp3[33]).NAV_BAR_HEIGHT_MULTILINE - top;
      const items8 = [isPreviewingChanges, tmp6Result2Result, width];
      const memo2 = obj7.useMemo(() => {
        if (isPreviewingChanges) {
          if (null != closure_24) {
            const _Math = Math;
            const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
            return scaleProfileFrameDefault(tmp, bound).overflowTop;
          }
        }
        return 0;
      }, items8);
      const tmp53 = tmp6(tmp3[31])(sharedValue2);
      const tmp56 = tmp6(tmp3[35])();
      const token = tmp2(tmp3[36]).useToken(tmp6(tmp3[37]).colors.INTERACTIVE_TEXT_HOVER, theme);
      obj1 = { userId, user: obj3, channelId, guildId: guild_id, displayProfile: tmp6ResultResult, guildMember: stateFromStores2 };
      const tmp58 = tmp6(tmp3[38])(obj1);
      closure_26 = tmp58;
      const items9 = [obj3, channelId];
      const items10 = [stateFromStores, userId];
      const memo3 = obj7.useMemo(() => {
        let result = null != obj3;
        if (result) {
          result = ApplicationPresenceUtils.shouldDisableUserPresenceInChannel(tmp, channelId);
        }
        return result;
      }, items9);
      const effect = obj7.useEffect(() => {
        if (null == stateFromStores) {
          const user = UserActionCreators.getUser(userId);
        }
      }, items10);
      const items11 = [obj3, guild_id, channelId];
      const effect1 = obj7.useEffect(() => {
        let obj = obj3;
        let tmp = null == obj3;
        if (!tmp) {
          let isNonUserBotResult = obj.isNonUserBot();
          if (isNonUserBotResult) {
            isNonUserBotResult = !isChangelogUserDefault(obj.id);
          }
          tmp = isNonUserBotResult;
        }
        if (!tmp) {
          obj = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId: guild_id, channelId: null };
          const avatarURL = obj.getAvatarURL(guild_id, 80);
          obj.channelId = channelId;
          maybeFetchUserProfileDefault(obj.id, avatarURL, obj);
        }
      }, items11);
      const items12 = [tmp58, tmp6ResultResult, guild_id, first, stateFromStores2];
      const effect2 = obj7.useEffect(() => {
        let tmp = first;
        if (!first) {
          tmp = null == closure_13;
        }
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
            AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, closure_26);
            closure_17(true);
          }
        }
      }, items12);
      skuId2 = undefined;
      if (pendingAvatarDecoration != null) {
        skuId2 = pendingAvatarDecoration.skuId;
      }
      const items13 = [skuId2, , , ];
      let skuId3;
      if (pendingProfileEffect != null) {
        skuId3 = pendingProfileEffect.skuId;
      }
      items13[1] = skuId3;
      let skuId4;
      if (pendingProfileFrame != null) {
        skuId4 = pendingProfileFrame.skuId;
      }
      items13[2] = skuId4;
      items13[3] = prop;
      const effect3 = obj7.useEffect(() => {
        if (atResult === AnalyticsLocationDefault.COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          const obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: prop, sku_id: null };
          let skuId;
          if (pendingAvatarDecoration != null) {
            skuId = pendingAvatarDecoration.skuId;
          }
          if (skuId == null) {
            let skuId1;
            if (pendingProfileEffect != null) {
              skuId1 = pendingProfileEffect.skuId;
            }
            skuId = skuId1;
          }
          if (skuId == null) {
            let skuId2;
            if (pendingProfileFrame != null) {
              skuId2 = pendingProfileFrame.skuId;
            }
            skuId = skuId2;
          }
          obj.sku_id = skuId;
          AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj);
          const tmp3Result = AnalyticsUtilsDefault;
        }
        atResult = prop.at(-1);
      }, items13);
      const items14 = [onClose];
      const effect4 = obj7.useEffect(() => () => {
        if (onClose != null) {
          tmp();
        }
      }, items14);
      const effect5 = obj7.useEffect(() => {
        function handleNavigationChange() {
          key = undefined;
          if (rootNavigationRef != null) {
            const currentRoute = rootNavigationRef.getCurrentRoute();
            if (currentRoute != null) {
              key = currentRoute.key;
            }
          }
          if (key !== key) {
            channelId(localUser[45]).hideAllActionSheets();
            const obj2 = channelId(localUser[45]);
          }
        }
        rootNavigationRef = rootNavigationRef(handleNavigationChange[44]).getRootNavigationRef();
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
      const tmp2Result8 = tmp2(tmp3[36]);
      navigation = tmp2(tmp3[46]).useNavigation();
      if (null == obj3) {
        obj2 = { value: analyticsLocations, children: null };
        obj3 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
        let fetchStartedAt;
        if (tmp6ResultResult != null) {
          fetchStartedAt = tmp6ResultResult.fetchStartedAt;
        }
        obj3.fetchStartedAt = fetchStartedAt;
        let fetchEndedAt;
        if (tmp6ResultResult != null) {
          fetchEndedAt = tmp6ResultResult.fetchEndedAt;
        }
        obj3.fetchEndedAt = fetchEndedAt;
        let isLoaded;
        if (tmp6ResultResult != null) {
          isLoaded = tmp6ResultResult.isLoaded;
        }
        obj3.isLoaded = isLoaded;
        const obj4 = { children: null };
        const obj5 = { style: { marginTop: 42 }, Illustration: tmp2(tmp3[50]).NoResults, body: null };
        const intl2 = tmp2(tmp3[51]).intl;
        obj5.body = intl2.string(tmp2(tmp3[51]).t.eAn6z2);
        obj4.children = first(tmp2(tmp3[49]).EmptyState, obj5);
        obj3.children = first(tmp2(tmp3[48]).BottomSheet, obj4);
        obj2.children = first(tmp2(tmp3[21]).UserProfileAnalyticsProvider, obj3);
        let tmp103Result3 = tmp99(tmp2(tmp3[17]).AnalyticsLocationProvider, obj2);
      } else {
        const obj6 = { theme, primaryColor, secondaryColor, children: null };
        obj7 = { value: analyticsLocations, children: null };
        const obj8 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
        let fetchStartedAt1;
        if (tmp6ResultResult != null) {
          fetchStartedAt1 = tmp6ResultResult.fetchStartedAt;
        }
        obj8.fetchStartedAt = fetchStartedAt1;
        let fetchEndedAt1;
        if (tmp6ResultResult != null) {
          fetchEndedAt1 = tmp6ResultResult.fetchEndedAt;
        }
        obj8.fetchEndedAt = fetchEndedAt1;
        let isLoaded1;
        if (tmp6ResultResult != null) {
          isLoaded1 = tmp6ResultResult.isLoaded;
        }
        obj8.isLoaded = isLoaded1;
        const obj9 = { ref: bottomSheetRef.bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, maxHeight: diff - memo2, contentStyles: tmp.noPadding, backdropChildren: memo1, animatedIndex: sharedValue1, children: null };
        let tmp103Result = null != tmp6Result2Result;
        if (tmp103Result) {
          const obj10 = { animatedPosition: sharedValue };
          tmp103Result = tmp103(pendingProfileEffect, obj10);
        }
        const items15 = [tmp103Result, , , ];
        const obj11 = { gradientHeight: diff, bannerHeight: tmp53 };
        items15[1] = first(tmp6(tmp3[53]), obj11);
        const obj12 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, scrollEventsHandlersHook: null, ref: null, children: null };
        let str2;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        const obj13 = { pointerEvents: str2 };
        obj12.contentContainerStyle = obj13;
        let tmp74;
        if (tmp2Result10.isIOS()) {
          tmp74 = memo;
        }
        obj12.scrollEventsHandlersHook = tmp74;
        obj12.ref = ref;
        const obj14 = { style: tmp.profileContainer, onLayout: callback, children: null };
        const obj15 = {
          user: obj3,
          channel: stateFromStores1,
          displayProfile: tmp6ResultResult,
          disableCalls,
          disableMessage,
          isVoiceContext,
          location: _location,
          disableStatus: memo3,
          scrollViewRef: ref,
          isPreviewingChanges,
          navigateToShop() {
                  const obj = { screen: constants2.COLLECTIBLES_SHOP, onClose: handleUserSettingsClose };
                  return obj.openUserSettings(obj);
                },
          navigateToPremium() {
                  const obj = { screen: constants2.PREMIUM, onClose: handleUserSettingsClose };
                  return obj.openUserSettings(obj);
                },
          showUserProfileActionSheet: function showUserProfileActionSheetWithParams() {
                  const merged = Object.assign(createUserProfileAnalyticsContext);
                  showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, localUser });
                },
          initialSection: userId.initialSection,
          scrollPosition: null
        };
        tmp2Result10 = tmp2(tmp3[54]);
        let tmp76;
        if (tmp2Result11.isIOS()) {
          tmp76 = sharedValue2;
        }
        obj15.scrollPosition = tmp76;
        if (obj3.isNonUserBot()) {
          const obj16 = {};
          let merged = Object.assign(obj15);
          tmp103Result = tmp103(tmp6(tmp3[56]), obj16);
          const tmp6Result5 = tmp6(tmp3[56]);
        } else if (obj3.bot) {
          const obj17 = {};
          const merged1 = Object.assign(obj15);
          tmp103Result = tmp103(tmp6(tmp3[57]), obj17);
          const tmp6Result6 = tmp6(tmp3[57]);
        } else {
          const obj18 = {};
          const merged2 = Object.assign(obj15);
          tmp103Result = tmp103(tmp6(tmp3[58]), obj18);
          const tmp6Result7 = tmp6(tmp3[58]);
        }
        const items16 = [tmp103Result, ];
        let tmp103Result1 = null != tmp46Result;
        if (tmp103Result1) {
          const obj19 = { style: null, pointerEvents: "none", children: null };
          const items17 = [tmp.profileEffect, , ];
          const obj20 = { height: diff };
          items17[1] = obj20;
          items17[2] = animatedStyle;
          obj19.style = items17;
          const obj21 = { skuId: tmp46Result.skuId, bannerAdjustment: 0 };
          obj19.children = tmp103(tmp6(tmp3[59]), obj21);
          tmp103Result1 = tmp103(tmp6(tmp3[13]).View, obj19);
        }
        const obj22 = { children: null };
        items16[1] = tmp103Result1;
        obj14.children = items16;
        obj22.children = closure_17(sharedValue, obj14);
        obj12.children = first(sharedValue, obj22);
        items15[2] = first(tmp2(tmp3[12]).BottomSheetScrollView, obj12);
        let tmp103Result2 = null == tmp6Result2Result;
        if (tmp103Result2) {
          const obj23 = { variant: "floating", tabStyle: null, onPress: null };
          const obj24 = { backgroundColor: token };
          obj23.tabStyle = obj24;
          obj23.onPress = bottomSheetClose;
          tmp103Result2 = tmp103(tmp2(tmp3[60]).ActionSheetHeaderBar, obj23);
        }
        items15[3] = tmp103Result2;
        obj9.children = items15;
        const items18 = [closure_17(tmp2(tmp3[48]).BottomSheet, obj9), , ];
        let tmp104Result = null != tmp6Result2Result;
        if (tmp104Result) {
          const obj25 = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: null };
          const obj26 = { frame: tmp6Result2Result, profileThemeType: guild_id.ACTION_SHEET, frameOrder: tmp2(tmp3[28]).ProfileFrameLayerOrder.FRONT, containerWidth: first1 };
          const items19 = [tmp103(tmp6(tmp3[27]), obj26), ];
          const obj27 = { variant: "floating", tabStyle: null, onPress: null };
          const obj28 = { backgroundColor: token };
          obj27.tabStyle = obj28;
          obj27.onPress = bottomSheetClose;
          items19[1] = tmp103(tmp2(tmp3[60]).ActionSheetHeaderBar, obj27);
          obj25.children = items19;
          tmp104Result = tmp104(createUserProfileAnalyticsContext, obj25);
          const tmp6Result8 = tmp6(tmp3[27]);
        }
        items18[1] = tmp104Result;
        if (!isPreviewingChanges) {
          items18[2] = isPreviewingChanges;
          obj8.children = items18;
          obj7.children = tmp104(tmp2(tmp3[21]).UserProfileAnalyticsProvider, obj8);
          obj6.children = tmp103(tmp2(tmp3[17]).AnalyticsLocationProvider, obj7);
          tmp103Result3 = tmp103(tmp2(tmp3[52]).ThemeContextProvider, obj6);
        } else {
          const obj29 = { theme: tmp56, primaryColor: null, secondaryColor: null, children: null };
          const intl = tmp2(tmp3[51]).intl;
          if (setting === tmp2(tmp3[62]).ProfileVisibility.FRIENDS_ONLY) {
            let mNZcD8 = tmp2(tmp3[51]).t.mNZcD8;
          } else {
            mNZcD8 = tmp2(tmp3[51]).t["wSnI/0"];
          }
          const obj30 = { text: intl.string(mNZcD8), isExpanded: true };
          obj29.children = tmp103(tmp2(tmp3[61]).ActionSheetBackdropToast, obj30);
          tmp103(tmp2(tmp3[52]).ThemeContextProvider, obj29);
        }
        tmp2Result11 = tmp2(tmp3[54]);
      }
      return tmp103Result3;
    }
    if (tmp6ResultResult != null) {
      const profileEffect = tmp6ResultResult.profileEffect;
      if (profileEffect != null) {
        skuId2 = profileEffect.skuId;
      }
    }
    const tmp6Result3 = tmp6(tmp3[26]);
  }
  if (tmp6ResultResult != null) {
    const profileFrame = tmp6ResultResult.profileFrame;
    if (profileFrame != null) {
      skuId = profileFrame.skuId;
    }
  }
});