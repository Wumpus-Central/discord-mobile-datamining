// discord_app/modules/user_profile/native/UserProfileActionSheet.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/ChannelStore.tsx";
import closure_8 from "../../../stores/GuildMemberStore.tsx";
import closure_9 from "../../../stores/UserStore.tsx";
import closure_10 from "../UserProfileSettingsStore.tsx";
import { UserProfileThemeTypes } from "Constants.tsx";
import ME from "../../../Constants.tsx";
import { ACTION_SHEET_MAX_WIDTH } from "../../action_sheet/native/ActionSheetConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function UseAnimatedPosition(animatedPosition) {
  animatedPosition = animatedPosition.animatedPosition;
  let animatedPosition2;
  animatedPosition2 = animatedPosition(5589).useBottomSheet().animatedPosition;
  const obj = animatedPosition(5589);
  const fn = function n() {
    return animatedPosition2.get();
  };
  fn.__closure = { value: animatedPosition2 };
  fn.__workletHash = 5684011437075;
  fn.__initData = closure_19;
  const fn2 = function o(arg0) {
    return animatedPosition.set(arg0);
  };
  fn2.__closure = { animatedPosition };
  fn2.__workletHash = 15360670503044;
  fn2.__initData = closure_20;
  const animatedReaction = animatedPosition(4186).useAnimatedReaction(fn, fn2);
  return null;
}
function ActionSheetAlignedView(children) {
  const animatedPosition = children.animatedPosition;
  const animatedIndex = children.animatedIndex;
  const safeAreaTop = children.safeAreaTop;
  let obj = animatedPosition(safeAreaTop[13]);
  const fn = function c() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: animatedPosition.get() + safeAreaTop };
    const items = [obj];
    obj[0] = items;
    const value = animatedIndex.get();
    obj[1] = animatedPosition(safeAreaTop[13]).interpolate(value, [-1, 0], [0, 1], animatedPosition(safeAreaTop[13]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { animatedPosition, safeAreaTop, interpolate: animatedPosition(safeAreaTop[13]).interpolate, animatedIndex, Extrapolation: animatedPosition(safeAreaTop[13]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 16546700050596;
  fn.__initData = closure_22;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [absoluteFill.absoluteFill, animatedStyle];
  return callback(animatedIndex(safeAreaTop[13]).View, { style, pointerEvents: "box-none", children: children.children });
}
let c4 = importAllResult;
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1, UserSettingsSections: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = createCacheKey.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 }, profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 } });
let closure_19 = { code: "function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}" };
let closure_20 = { code: "function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}" };
let closure_22 = { code: "function UserProfileActionSheetTsx3(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}" };
let closure_24 = { code: "function UserProfileActionSheetTsx4(payload,context){const{defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE}=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);}" };
let closure_25 = { code: "function UserProfileActionSheetTsx5(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}" };
const memoResult = importAllResult.memo(function UserProfileActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
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
  let sharedValue;
  let sharedValue1;
  let top;
  let stateFromStores;
  let guild_id;
  let stateFromStores2;
  UserProfileThemeTypes = undefined;
  let analyticsLocations;
  let sharedValue2;
  let first;
  closure_15 = undefined;
  let first1;
  closure_17 = undefined;
  let pendingAvatarDecoration;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let createUserProfileAnalyticsContext;
  closure_22 = undefined;
  let width;
  closure_24 = undefined;
  closure_25 = undefined;
  function handleUserSettingsClose() {
    navigation.goBack();
    const merged = Object.assign(createUserProfileAnalyticsContext);
    channelId(onClose[47])({ sourceAnalyticsLocations: analyticsLocations });
  }
  let tmp = pendingAvatarDecoration();
  const tmp3 = onClose;
  let obj = userId(onClose[13]);
  sharedValue = obj.useSharedValue(0);
  obj1 = userId(onClose[13]);
  sharedValue1 = obj1.useSharedValue(-1);
  top = channelId(onClose[14])().top;
  let obj2 = userId(onClose[15]);
  let items = [guild_id];
  stateFromStores = obj2.useStateFromStores(items, () => guild_id.getUser(userId));
  let obj4 = userId(onClose[15]);
  const items1 = [top];
  const items2 = [channelId];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => top.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  let tmp2Result = tmp2(tmp3[15]);
  const items3 = [stateFromStores];
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = stateFromStores.getMember(tmp, userId);
    }
    return member;
  });
  let id;
  let tmp6Result = tmp6(tmp3[16]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (id == null) {
    id = sharedValue2;
  }
  let tmp12;
  if (flag) {
    tmp12 = guild_id;
  }
  const tmp6ResultResult = tmp6Result(id, tmp12);
  UserProfileThemeTypes = tmp6ResultResult;
  const items4 = [];
  tmp6Result = tmp6(tmp3[17]);
  items4[HermesBuiltin.arraySpread(prop, 0)] = channelId(tmp3[18]).USER_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp6Result(items4).analyticsLocations;
  tmp2Result = tmp2(tmp3[19]);
  const bottomSheetRef = tmp2Result.useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef.bottomSheetClose;
  let obj7 = prop;
  const ref = prop.useRef(null);
  const arraySpreadResult = HermesBuiltin.arraySpread(prop, 0);
  sharedValue2 = userId(tmp3[13]).useSharedValue(0);
  const items5 = [sharedValue2];
  const memo = prop.useMemo(() => {
    closure_0 = sharedValue2;
    return (arg0, arg1, arg2) => {
      let obj = callback(closure_1_2[12]);
      const scrollEventsHandlersDefault = obj.useScrollEventsHandlersDefault(arg0, arg1, arg2);
      const animatedScrollableState = callback(closure_1_2[12]).useBottomSheetInternal().animatedScrollableState;
      const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
      const obj2 = callback(closure_1_2[12]);
      const fn = function s(contentOffset) {
        if (handleOnScroll != null) {
          tmp(contentOffset, arg1);
        }
        const value = animatedScrollableState.get();
        let num = 0;
        if (value !== animatedScrollableState(closure_2_2[12]).SCROLLABLE_STATE.LOCKED) {
          num = contentOffset.contentOffset.y;
        }
        const result = animatedScrollableState.set(num);
      };
      obj = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: callback(closure_1_2[12]).SCROLLABLE_STATE };
      fn.__closure = obj;
      fn.__workletHash = 13254130622789;
      fn.__initData = closure_1_24;
      const items = [handleOnScroll, animatedScrollableState];
      obj = {};
      const obj3 = callback(closure_1_2[13]);
      const merged = Object.assign(scrollEventsHandlersDefault);
      obj.handleOnScroll = callback(closure_1_2[13]).useWorkletCallback(fn, items);
      return obj;
    };
  }, items5);
  const tmp2Result1 = userId(tmp3[13]);
  class V {
    constructor() {
      obj = closure_13;
      if (closure_13.get() <= 0) {
        obj = { translateY: null };
        obj[0] = obj.get();
        items = [];
        items[0] = obj;
        items1 = items;
      } else {
        items1 = [];
      }
      return { transform: items1 };
    }
  }
  V.__closure = { scrollPosition: sharedValue2 };
  V.__workletHash = 6237718973214;
  V.__initData = closure_25;
  const animatedStyle = userId(tmp3[13]).useAnimatedStyle(V);
  const tmp21 = isPreviewingChanges(prop.useState(false), 2);
  first = tmp21[0];
  closure_15 = tmp21[1];
  const tmp23 = isPreviewingChanges(prop.useState(0), 2);
  first1 = tmp23[0];
  closure_17 = tmp23[1];
  const callback = prop.useCallback((nativeEvent) => {
    callback2(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = tmp2(tmp3[20]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const tmp2Result2 = userId(tmp3[13]);
  const items6 = [stateFromStores2];
  const stateFromStoresObject = userId(tmp3[15]).useStateFromStoresObject(items6, () => stateFromStores2.getPendingChanges());
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const tmp2Result3 = userId(tmp3[15]);
  createUserProfileAnalyticsContext = userId(tmp3[21]).useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, guildId: guild_id, channelId, messageId, roleId, showGuildProfile: flag });
  if (isPreviewingChanges) {
    if (undefined !== pendingProfileFrame) {
      let skuId;
      if (pendingProfileFrame != null) {
        skuId = pendingProfileFrame.skuId;
      }
    }
    const isScreenLandscape = tmp2(tmp3[22]).useIsScreenLandscape();
    let tmp32;
    const tmp2Result5 = tmp2(tmp3[22]);
    if (!isScreenLandscape) {
      tmp32 = skuId;
    }
    const tmp6Result2Result = tmp6(tmp3[23])(tmp32, "UserProfileActionSheet");
    closure_22 = tmp6Result2Result;
    let tmp35;
    const tmp6Result1 = tmp6(tmp3[23]);
    if (!isScreenLandscape) {
      tmp35 = skuId;
    }
    obj = { skuId: null, openedAt: null, context: null, analyticsLocations: null };
    obj[0] = tmp35;
    obj[1] = openedAt;
    obj[2] = createUserProfileAnalyticsContext;
    obj[3] = analyticsLocations;
    tmp6(tmp3[24])(obj);
    const tmp6Result2 = tmp6(tmp3[24]);
    const isShopThisLookMobileEnabled = tmp2(tmp3[25]).useIsShopThisLookMobileEnabled("UserProfileActionSheet");
    let tmp39;
    const tmp2Result6 = tmp2(tmp3[25]);
    if (flag) {
      tmp39 = guild_id;
      const tmp40 = guild_id;
    }
    tmp6(tmp3[26])(userId, tmp39, isShopThisLookMobileEnabled);
    const items7 = [tmp6Result2Result, sharedValue, top, sharedValue1, first1];
    const memo1 = obj7.useMemo(() => {
      let tmp2 = null;
      if (null != closure_22) {
        let obj = { animatedPosition: null, safeAreaTop: null, animatedIndex: null, children: null };
        obj[0] = sharedValue;
        obj[1] = top;
        obj[2] = sharedValue1;
        obj = { frame: null, frameOrder: null, profileThemeType: null, containerWidth: null };
        obj[0] = tmp;
        obj[1] = userId(onClose[28]).ProfileFrameLayerOrder.BACK;
        obj[2] = constants.ACTION_SHEET;
        obj[3] = first1;
        obj[3] = first1(channelId(onClose[27]), obj);
        tmp2 = first1(width, obj);
        const tmp10 = channelId(onClose[27]);
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
      const tmp43Result = tmp43(skuId2);
      obj = { user: null, displayProfile: null, pendingThemeColors: null };
      obj[0] = stateFromStores;
      obj[1] = tmp6ResultResult;
      let pendingThemeColors;
      if (isPreviewingChanges) {
        pendingThemeColors = stateFromStoresObject.pendingThemeColors;
      }
      obj[2] = pendingThemeColors;
      const tmp6Result4 = tmp6(tmp3[30]);
      ({ theme, primaryColor, secondaryColor } = tmp6(tmp3[30])(obj));
      const tmp6Result5Result = tmp6(tmp3[30])(obj);
      const size = tmp6(tmp3[32])();
      width = size.width;
      const diff = size.height - tmp2(tmp3[33]).NAV_BAR_HEIGHT_MULTILINE - top;
      const items8 = [isPreviewingChanges, tmp6Result2Result, width];
      const memo2 = obj7.useMemo(() => {
        if (isPreviewingChanges) {
          if (null != closure_22) {
            const _Math = Math;
            const bound = Math.min(width, closure_15);
            return channelId(onClose[34])(tmp, bound).overflowTop;
          }
        }
        return 0;
      }, items8);
      const tmp50 = tmp6(tmp3[31])(closure_15);
      const tmp53 = tmp6(tmp3[35])();
      const token = tmp2(tmp3[36]).useToken(tmp6(tmp3[37]).colors.INTERACTIVE_TEXT_HOVER, theme);
      obj1 = { userId: null, user: null, channelId: null, guildId: null, displayProfile: null, guildMember: null };
      obj1[0] = userId;
      obj1[1] = stateFromStores;
      obj1[2] = channelId;
      obj1[3] = guild_id;
      obj1[4] = tmp6ResultResult;
      obj1[5] = stateFromStores2;
      const tmp55 = tmp6(tmp3[38])(obj1);
      closure_24 = tmp55;
      const items9 = [stateFromStores, channelId];
      const items10 = [stateFromStores, userId];
      const memo3 = obj7.useMemo(() => {
        let result = null != stateFromStores;
        if (result) {
          result = userId(onClose[39]).shouldDisableUserPresenceInChannel(tmp, channelId);
          const obj = userId(onClose[39]);
        }
        return result;
      }, items9);
      const effect = obj7.useEffect(() => {
        if (null == stateFromStores) {
          const user = userId(onClose[40]).getUser(userId);
          const obj = userId(onClose[40]);
        }
      }, items10);
      const items11 = [stateFromStores, guild_id, channelId];
      const effect1 = obj7.useEffect(() => {
        let obj = stateFromStores;
        let tmp = null == stateFromStores;
        if (!tmp) {
          let isNonUserBotResult = obj.isNonUserBot();
          if (isNonUserBotResult) {
            isNonUserBotResult = !channelId(onClose[41])(obj.id);
          }
          tmp = isNonUserBotResult;
        }
        if (!tmp) {
          obj = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId: null, channelId: null };
          obj[4] = guild_id;
          const avatarURL = obj.getAvatarURL(guild_id, 80);
          obj[5] = channelId;
          channelId(onClose[42])(obj.id, avatarURL, obj);
          const tmp10 = channelId;
          const tmp7 = channelId(onClose[42]);
        }
      }, items11);
      const items12 = [tmp55, tmp6ResultResult, guild_id, first, stateFromStores2];
      const effect2 = obj7.useEffect(() => {
        let tmp = first;
        if (!first) {
          tmp = null == closure_11;
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
            channelId(onClose[43]).track(analyticsLocations.OPEN_POPOUT, closure_24);
            callback(true);
            const obj = channelId(onClose[43]);
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
        if (atResult === channelId(onClose[18]).COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          const obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: null, sku_id: null };
          obj[1] = prop;
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
          obj[2] = skuId;
          channelId(onClose[43]).track(analyticsLocations.OPEN_MODAL, obj);
          const tmp3Result = channelId(onClose[43]);
        }
      }, items13);
      const items14 = [onClose];
      const effect4 = obj7.useEffect(() => () => {
        if (closure_2 != null) {
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
            key(handleNavigationChange[45]).hideAllActionSheets();
            const obj2 = key(handleNavigationChange[45]);
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
      const tmp2Result7 = tmp2(tmp3[36]);
      closure_25 = tmp2(tmp3[46]).useNavigation();
      if (null == stateFromStores) {
        obj2 = { value: null, children: null };
        obj2[0] = analyticsLocations;
        let obj3 = { value: null, openedAt: null, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
        obj3[0] = createUserProfileAnalyticsContext;
        obj3[1] = openedAt;
        let fetchStartedAt;
        if (tmp6ResultResult != null) {
          fetchStartedAt = tmp6ResultResult.fetchStartedAt;
        }
        obj3[2] = fetchStartedAt;
        let fetchEndedAt;
        if (tmp6ResultResult != null) {
          fetchEndedAt = tmp6ResultResult.fetchEndedAt;
        }
        obj3[3] = fetchEndedAt;
        let isLoaded;
        if (tmp6ResultResult != null) {
          isLoaded = tmp6ResultResult.isLoaded;
        }
        obj3[4] = isLoaded;
        obj4 = { children: null };
        const obj5 = { style: null, Illustration: null, body: null };
        obj5[0] = { marginTop: 42 };
        obj5[1] = tmp2(tmp3[50]).NoResults;
        const intl2 = tmp2(tmp3[51]).intl;
        obj5[2] = intl2.string(tmp2(tmp3[51]).t.eAn6z2);
        obj4[0] = first1(tmp2(tmp3[49]).EmptyState, obj5);
        obj3[5] = first1(tmp2(tmp3[48]).BottomSheet, obj4);
        obj2[1] = first1(tmp2(tmp3[21]).UserProfileAnalyticsProvider, obj3);
        let tmp99Result3 = tmp95(tmp2(tmp3[17]).AnalyticsLocationProvider, obj2);
      } else {
        const obj6 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
        obj6[0] = theme;
        obj6[1] = primaryColor;
        obj6[2] = secondaryColor;
        obj7 = { value: null, children: null };
        obj7[0] = analyticsLocations;
        tmp = closure_17;
        const obj8 = { value: null, openedAt: null, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
        obj8[0] = createUserProfileAnalyticsContext;
        obj8[1] = openedAt;
        let fetchStartedAt1;
        if (tmp6ResultResult != null) {
          fetchStartedAt1 = tmp6ResultResult.fetchStartedAt;
        }
        obj8[2] = fetchStartedAt1;
        let fetchEndedAt1;
        if (tmp6ResultResult != null) {
          fetchEndedAt1 = tmp6ResultResult.fetchEndedAt;
        }
        obj8[3] = fetchEndedAt1;
        let isLoaded1;
        if (tmp6ResultResult != null) {
          isLoaded1 = tmp6ResultResult.isLoaded;
        }
        obj8[4] = isLoaded1;
        const obj9 = { ref: null, handleDisabled: true, scrollable: true, startExpanded: true, maxHeight: null, contentStyles: null, backdropChildren: null, animatedIndex: null, children: null };
        obj9[0] = bottomSheetRef.bottomSheetRef;
        obj9[4] = diff - memo2;
        obj9[5] = tmp.noPadding;
        obj9[6] = memo1;
        obj9[7] = sharedValue1;
        let tmp99Result = null != tmp6Result2Result;
        if (tmp99Result) {
          const obj10 = { animatedPosition: null };
          obj10[0] = sharedValue;
          tmp99Result = tmp99(createUserProfileAnalyticsContext, obj10);
        }
        const items15 = [tmp99Result, , , ];
        const obj11 = { gradientHeight: null, bannerHeight: null };
        obj11[0] = diff;
        obj11[1] = tmp50;
        items15[1] = first1(tmp6(tmp3[53]), obj11);
        const obj12 = { scrollsToTop: false, style: null, contentContainerStyle: null, scrollEventsHandlersHook: null, ref: null, children: null };
        obj12[1] = tmp.container;
        let str2;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        const obj13 = { pointerEvents: null };
        obj13[0] = str2;
        obj12[2] = obj13;
        let tmp71;
        if (tmp2Result9.isIOS()) {
          tmp71 = memo;
        }
        obj12[3] = tmp71;
        obj12[4] = ref;
        const obj14 = { style: null, onLayout: null, children: null };
        obj14[0] = tmp.profileContainer;
        obj14[1] = callback;
        const obj15 = { user: null, channel: null, displayProfile: null, disableCalls: null, disableMessage: null, isVoiceContext: null, location: null, disableStatus: null, scrollViewRef: null, isPreviewingChanges: null, navigateToShop: null, navigateToPremium: null, showUserProfileActionSheet: null, initialSection: null, scrollPosition: null };
        obj15[0] = stateFromStores;
        obj15[1] = stateFromStores1;
        obj15[2] = tmp6ResultResult;
        obj15[3] = disableCalls;
        obj15[4] = disableMessage;
        obj15[5] = isVoiceContext;
        obj15[6] = _location;
        obj15[7] = memo3;
        obj15[8] = ref;
        obj15[9] = isPreviewingChanges;
        obj15[10] = function navigateToShop(initialTab, arg1) {
          let obj = userId(onClose[55]);
          obj = { screen: first.COLLECTIBLES_SHOP, onClose: handleUserSettingsClose };
          return obj.openUserSettings(obj);
        };
        obj15[11] = function navigateToPremium(arg0) {
          let obj = userId(onClose[55]);
          obj = { screen: first.PREMIUM, onClose: handleUserSettingsClose };
          return obj.openUserSettings(obj);
        };
        obj15[12] = function showUserProfileActionSheetWithParams() {
          const merged = Object.assign(createUserProfileAnalyticsContext);
          channelId(onClose[47])({ sourceAnalyticsLocations: analyticsLocations });
        };
        obj15[13] = userId.initialSection;
        tmp2Result9 = tmp2(tmp3[54]);
        let tmp73;
        if (tmp2Result10.isIOS()) {
          tmp73 = sharedValue2;
        }
        obj15[14] = tmp73;
        if (stateFromStores.isNonUserBot()) {
          const obj16 = {};
          let merged = Object.assign(obj15);
          tmp99Result = tmp99(tmp6(tmp3[56]), obj16);
          const tmp6Result5 = tmp6(tmp3[56]);
        } else if (stateFromStores.bot) {
          const obj17 = {};
          const merged1 = Object.assign(obj15);
          tmp99Result = tmp99(tmp6(tmp3[57]), obj17);
          const tmp6Result6 = tmp6(tmp3[57]);
        } else {
          const obj18 = {};
          const merged2 = Object.assign(obj15);
          tmp99Result = tmp99(tmp6(tmp3[58]), obj18);
          const tmp6Result7 = tmp6(tmp3[58]);
        }
        const items16 = [tmp99Result, ];
        let tmp99Result1 = null != tmp43Result;
        if (tmp99Result1) {
          const obj19 = { style: null, pointerEvents: "none", children: null };
          const items17 = [tmp.profileEffect, , ];
          const obj20 = { height: null };
          obj20[0] = diff;
          items17[1] = obj20;
          items17[2] = animatedStyle;
          obj19[0] = items17;
          const obj21 = { skuId: null, bannerAdjustment: 0 };
          obj21[0] = tmp43Result.skuId;
          obj19[2] = tmp99(tmp6(tmp3[59]), obj21);
          tmp99Result1 = tmp99(tmp6(tmp3[13]).View, obj19);
        }
        const obj22 = { children: null };
        items16[1] = tmp99Result1;
        obj14[2] = items16;
        obj22[0] = tmp(sharedValue1, obj14);
        obj12[5] = first1(sharedValue1, obj22);
        items15[2] = first1(tmp2(tmp3[12]).BottomSheetScrollView, obj12);
        let tmp99Result2 = null == tmp6Result2Result;
        if (tmp99Result2) {
          const obj23 = { variant: "floating", tabStyle: null, onPress: null };
          const obj24 = { backgroundColor: null };
          obj24[0] = token;
          obj23[1] = obj24;
          obj23[2] = bottomSheetClose;
          tmp99Result2 = tmp99(tmp2(tmp3[60]).ActionSheetHeaderBar, obj23);
        }
        items15[3] = tmp99Result2;
        obj9[8] = items15;
        const items18 = [tmp(tmp2(tmp3[48]).BottomSheet, obj9), , ];
        let tmpResult = null != tmp6Result2Result;
        if (tmpResult) {
          const obj25 = { animatedPosition: null, safeAreaTop: null, animatedIndex: null, children: null };
          obj25[0] = sharedValue;
          obj25[1] = top;
          obj25[2] = sharedValue1;
          const obj26 = { frame: null, profileThemeType: null, frameOrder: null, containerWidth: null };
          obj26[0] = tmp6Result2Result;
          obj26[1] = UserProfileThemeTypes.ACTION_SHEET;
          obj26[2] = tmp2(tmp3[28]).ProfileFrameLayerOrder.FRONT;
          obj26[3] = first1;
          const items19 = [tmp99(tmp6(tmp3[27]), obj26), ];
          const obj27 = { variant: "floating", tabStyle: null, onPress: null };
          const obj28 = { backgroundColor: null };
          obj28[0] = token;
          obj27[1] = obj28;
          obj27[2] = bottomSheetClose;
          items19[1] = tmp99(tmp2(tmp3[60]).ActionSheetHeaderBar, obj27);
          obj25[3] = items19;
          tmpResult = tmp(width, obj25);
          const tmp6Result8 = tmp6(tmp3[27]);
        }
        items18[1] = tmpResult;
        if (!isPreviewingChanges) {
          items18[2] = isPreviewingChanges;
          obj8[5] = items18;
          obj7[1] = tmp(tmp2(tmp3[21]).UserProfileAnalyticsProvider, obj8);
          obj6[3] = tmp99(tmp2(tmp3[17]).AnalyticsLocationProvider, obj7);
          tmp99Result3 = tmp99(tmp2(tmp3[52]).ThemeContextProvider, obj6);
        } else {
          const obj29 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
          obj29[0] = tmp53;
          const intl = tmp2(tmp3[51]).intl;
          if (setting === tmp2(tmp3[62]).ProfileVisibility.FRIENDS_ONLY) {
            wSnI_0 = tmp2(tmp3[51]).t.mNZcD8;
          } else {
            wSnI_0 = tmp2(tmp3[51]).t["wSnI/0"];
          }
          const obj30 = { text: null, isExpanded: true };
          obj30[0] = intl.string(wSnI_0);
          obj29[3] = tmp99(tmp2(tmp3[61]).ActionSheetBackdropToast, obj30);
          tmp99(tmp2(tmp3[52]).ThemeContextProvider, obj29);
        }
        tmp2Result10 = tmp2(tmp3[54]);
      }
      return tmp99Result3;
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
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default memoResult;