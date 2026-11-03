// discord_app/modules/user_profile/native/UserProfileActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import isChangelogUserDefault from "../../changelog/utils/isChangelogUser.tsx";
import BottomSheetModal from "../../../../_runtime/05398_BottomSheetModal.js";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import maybeFetchUserProfileDefault from "../maybeFetchUserProfile.tsx";
import ProfileFrameLayerOrder from "../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx";
import ProfileFrameDefault from "../../collectibles/profile_frames/native/ProfileFrame.tsx";
import scaleProfileFrameDefault from "../../collectibles/profile_frames/scaleProfileFrame.tsx";
import ApplicationPresenceUtils from "../../applications/ApplicationPresenceUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function UseAnimatedPosition(animatedPosition) {
  const obj = BottomSheetModal;
  items = [closure_19, obj.useBottomSheet().animatedPosition];
  c0 = undefined;
  [tmp, tmp2] = items;
  class UserProfileActionSheetTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items1 = [tmp2];
  UserProfileActionSheetTsx1.__closure = items1;
  UserProfileActionSheetTsx1.__workletHash = 10170177207562;
  UserProfileActionSheetTsx1.__initData = tmp;
  const items2 = [closure_20, animatedPosition.animatedPosition];
  c0 = undefined;
  [tmp3, tmp4] = items2;
  class UserProfileActionSheetTsx2 {
    constructor(arg0) {
      return closure_0.set(animatedPosition);
    }
  }
  const items3 = [tmp4];
  UserProfileActionSheetTsx2.__closure = items3;
  UserProfileActionSheetTsx2.__workletHash = 15025652485949;
  UserProfileActionSheetTsx2.__initData = tmp3;
  const animatedReaction = _mod1652.useAnimatedReaction(UserProfileActionSheetTsx1, UserProfileActionSheetTsx2);
  return null;
}
function ActionSheetAlignedView(arg0) {
  ({ animatedPosition, animatedIndex, safeAreaTop, children } = arg0);
  items = [closure_22, animatedPosition, safeAreaTop, _mod1652.interpolate, animatedIndex, _mod1652.Extrapolation];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  class UserProfileActionSheetTsx3 {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateY: closure_0.get() + closure_1 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      obj.opacity = closure_2(closure_3.get(), [-1, 0], [0, 1], closure_4.CLAMP);
      return obj;
    }
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  UserProfileActionSheetTsx3.__closure = items1;
  UserProfileActionSheetTsx3.__workletHash = 8011994194653;
  UserProfileActionSheetTsx3.__initData = tmp2;
  const animatedStyle = _mod1652.useAnimatedStyle(UserProfileActionSheetTsx3);
  const obj2 = { style: null, pointerEvents: "box-none", children };
  const items2 = [absoluteFill.absoluteFill, animatedStyle];
  obj2.style = items2;
  return value2(_modDef1652.View, obj2);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileThemeTypes = fn(7497).UserProfileThemeTypes;
const Constants = fn(1072);
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1, UserSettingsSections: closure_14 } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(5396).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5141);
let closure_18 = createStyles.createStyles({
  container: { flex: 1 },
  profileContainer: { position: "relative" },
  noPadding: { paddingHorizontal: 0 },
  profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 },
});
let closure_19 = { code: "(function UserProfileActionSheetTsx1(){let[value]=this.__closure;return value.get();})" };
let closure_20 = {
  code: "(function UserProfileActionSheetTsx2(prepared){let[animatedPosition]=this.__closure;return animatedPosition.set(prepared);})",
};
let closure_22 = {
  code: "(function UserProfileActionSheetTsx3(){let[animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation]=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};})",
};
let closure_24 = {
  code: "(function UserProfileActionSheetTsx4(payload,context){let[defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE]=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);})",
};
let closure_25 = {
  code: "(function UserProfileActionSheetTsx5(){let[scrollPosition]=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default noop.memo(function UserProfileActionSheet(userId) {
  userId = userId.userId;
  _require = userId;
  const channelId = userId.channelId;
  const localUser = userId.localUser;
  const navigationReplace = userId.navigationReplace;
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
  let guild_id;
  let stateFromStores2;
  closure_14 = undefined;
  let analyticsLocations;
  let sharedValue2;
  let first;
  closure_18 = undefined;
  let first1;
  closure_20 = undefined;
  let avatarDecoration;
  let profileEffect1;
  let profileFrame1;
  let createUserProfileAnalyticsContext;
  closure_25 = undefined;
  let width;
  closure_27 = undefined;
  let navigation;
  function handleUserSettingsClose() {
    navigation.goBack();
    const merged = Object.assign(createUserProfileAnalyticsContext);
    showUserProfileActionSheetDefault({ navigationReplace, sourceAnalyticsLocations: analyticsLocations, localUser });
  }
  let tmp = closure_18();
  const tmp3 = localUser;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(-1);
  const top = channelId(localUser[14])().top;
  let obj2 = require("../../../../_runtime/metro/01652__.js");
  items = [top];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(c0));
  let obj4 = stateFromStores;
  if (stateFromStores == null) {
    let id;
    if (localUser != null) {
      id = localUser.id;
    }
    let tmp9;
    if (id === userId) {
      tmp9 = localUser;
    }
    obj4 = tmp9;
  }
  let obj3 = require("initialize");
  let items1 = [sharedValue];
  let items2 = [channelId];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => ChannelStore.getChannel(channelId),
    items2,
  );
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const tmp2Result = require("initialize");
  const items3 = [sharedValue1];
  stateFromStores2 = require("initialize").useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, c0);
    }
    return member;
  });
  let id1;
  const tmp2Result13 = require("initialize");
  if (obj4 != null) {
    id1 = obj4.id;
  }
  if (id1 == null) {
    id1 = stateFromStores2;
  }
  let tmp15;
  if (showGuildProfile) {
    tmp15 = guild_id;
  }
  const tmp6ResultResult = channelId(tmp3[16])(id1, tmp15);
  closure_14 = tmp6ResultResult;
  const items4 = [];
  const tmp6Result = channelId(tmp3[16]);
  const tmp6Result10 = channelId(tmp3[17]);
  items4[HermesBuiltin.arraySpread(prop, 0)] = channelId(tmp3[18]).USER_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp6Result10(items4).analyticsLocations;
  const arraySpreadResult = HermesBuiltin.arraySpread(prop, 0);
  const bottomSheetRef = require("useBottomSheetRef").useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef.bottomSheetClose;
  const ref = onClose.useRef(null);
  const tmp2Result14 = require("useBottomSheetRef");
  sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const items5 = [sharedValue2];
  const memo = onClose.useMemo(() => {
    closure_0 = sharedValue2;
    return (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
      const scrollEventsHandlersDefault = c0(localUser[12]).useScrollEventsHandlersDefault(
        animatedRef,
        sharedValue,
        lockableScrollableContentOffsetY,
      );
      const obj = c0(localUser[12]);
      const animatedScrollableState = c0(localUser[12]).useBottomSheetInternal().animatedScrollableState;
      const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
      items = [
        createUserProfileAnalyticsContext,
        handleOnScroll,
        closure_0,
        animatedScrollableState,
        c0(localUser[12]).SCROLLABLE_STATE,
      ];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp3, tmp4, tmp5, tmp6, tmp7] = items;
      class UserProfileActionSheetTsx4 {
        constructor(arg0, arg1) {
          if (closure_0 != null) {
            tmp2 = sharedValue;
            tmpResult = tmp(animatedRef, sharedValue);
          }
          tmp4 = closure_1;
          num = 0;
          if (closure_2.get() !== closure_3.LOCKED) {
            num = animatedRef.contentOffset.y;
          }
          result = closure_1.set(num);
          return;
        }
      }
      const items1 = [tmp4, tmp5, tmp6, tmp7];
      UserProfileActionSheetTsx4.__closure = items1;
      UserProfileActionSheetTsx4.__workletHash = 16409642534780;
      UserProfileActionSheetTsx4.__initData = tmp3;
      const items2 = [handleOnScroll, animatedScrollableState];
      const obj3 = {};
      const callback = onClose.useCallback(UserProfileActionSheetTsx4, items2);
      const merged = Object.assign(scrollEventsHandlersDefault);
      obj3.handleOnScroll = callback;
      return obj3;
    };
  }, items5);
  const tmp2Result15 = require("../../../../_runtime/metro/01652__.js");
  const items6 = [closure_25, sharedValue2];
  _require = undefined;
  [tmp23, tmp24] = items6;
  class UserProfileActionSheetTsx5 {
    constructor() {
      obj = closure_0;
      if (closure_0.get() <= 0) {
        obj1 = { translateY: null };
        obj1.translateY = obj.get();
        items = [];
        items[0] = obj1;
        items1 = items;
      } else {
        items1 = [];
      }
      return { transform: items1 };
    }
  }
  const items7 = [tmp24];
  UserProfileActionSheetTsx5.__closure = items7;
  UserProfileActionSheetTsx5.__workletHash = 4107598224583;
  UserProfileActionSheetTsx5.__initData = tmp23;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(UserProfileActionSheetTsx5);
  const tmp26 = navigationReplace(onClose.useState(false), 2);
  first = tmp26[0];
  closure_18 = tmp26[1];
  const tmp28 = navigationReplace(onClose.useState(0), 2);
  first1 = tmp28[0];
  closure_20 = tmp28[1];
  let callback = obj8.useCallback((nativeEvent) => {
    closure_20(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = tmp2(tmp3[20]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const tmp2Result16 = require("../../../../_runtime/metro/01652__.js");
  const items8 = [stateFromStores];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items8, () =>
    stateFromStores.getPendingChanges(),
  );
  avatarDecoration = undefined;
  ({ pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame } = stateFromStoresObject);
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
  const tmp2Result17 = require("initialize");
  createUserProfileAnalyticsContext = require("UserProfileAnalyticsContext").useCreateUserProfileAnalyticsContext({
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
    if (undefined !== profileFrame1) {
      let skuId1;
      if (profileFrame1 != null) {
        skuId1 = profileFrame1.skuId;
      }
      let skuId = skuId1;
    }
    const isScreenLandscape = tmp2(tmp3[22]).useIsScreenLandscape();
    let tmp40;
    const tmp2Result19 = tmp2(tmp3[22]);
    if (!isScreenLandscape) {
      tmp40 = skuId;
    }
    const tmp6Result2Result = tmp6(tmp3[23])(tmp40);
    closure_25 = tmp6Result2Result;
    let tmp43;
    const tmp6Result11 = tmp6(tmp3[23]);
    if (!isScreenLandscape) {
      tmp43 = skuId;
    }
    const obj5 = { skuId: tmp43, openedAt, context: createUserProfileAnalyticsContext, analyticsLocations };
    tmp6(tmp3[24])(obj5);
    const tmp6Result12 = tmp6(tmp3[24]);
    const isShopThisLookMobileEnabled = tmp2(tmp3[25]).useIsShopThisLookMobileEnabled("UserProfileActionSheet");
    let tmp47;
    const tmp2Result20 = tmp2(tmp3[25]);
    if (showGuildProfile) {
      tmp47 = guild_id;
    }
    tmp6(tmp3[26])(userId, tmp47, isShopThisLookMobileEnabled);
    const items9 = [tmp6Result2Result, sharedValue, top, sharedValue1, first1];
    const memo1 = obj8.useMemo(() => {
      let tmp2 = null;
      if (null != closure_25) {
        const obj = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: null };
        const obj2 = {
          frame: tmp,
          frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK,
          profileThemeType: UserProfileThemeTypes.ACTION_SHEET,
          containerWidth: first1,
        };
        obj.children = value2(ProfileFrameDefault, obj2);
        tmp2 = value2(ActionSheetAlignedView, obj);
      }
      return tmp2;
    }, items9);
    if (isPreviewingChanges) {
      if (undefined !== profileEffect1) {
        let skuId3;
        if (profileEffect1 != null) {
          skuId3 = profileEffect1.skuId;
        }
        let skuId2 = skuId3;
      }
      const tmp51Result = tmp51(skuId2);
      const obj6 = { user: obj4, displayProfile: tmp6ResultResult, pendingThemeColors: null };
      let tmp55;
      if (isPreviewingChanges) {
        tmp55 = pendingThemeColors;
      }
      obj6.pendingThemeColors = tmp55;
      const tmp6Result14 = tmp6(tmp3[30]);
      ({ theme, primaryColor, secondaryColor } = tmp6(tmp3[30])(obj6));
      const tmp6Result5Result = tmp6(tmp3[30])(obj6);
      const size = tmp6(tmp3[32])();
      width = size.width;
      const diff = size.height - tmp2(tmp3[33]).NAV_BAR_HEIGHT_MULTILINE - top;
      const items10 = [isPreviewingChanges, tmp6Result2Result, width];
      let tmp112Result = null != tmp6Result2Result;
      const memo2 = obj8.useMemo(() => {
        if (isPreviewingChanges) {
          if (null != closure_25) {
            const _Math = Math;
            const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
            return scaleProfileFrameDefault(tmp, bound).overflowTop;
          }
        }
        return 0;
      }, items10);
      if (!tmp112Result) {
        tmp112Result = isPreviewingChanges;
      }
      const tmp58 = tmp6(tmp3[31])(analyticsLocations);
      const tmp62 = tmp6(tmp3[35])();
      const token = tmp2(tmp3[36]).useToken(tmp6(tmp3[37]).colors.INTERACTIVE_TEXT_HOVER, theme);
      const obj7 = {
        userId,
        user: obj4,
        channelId,
        guildId: guild_id,
        displayProfile: tmp6ResultResult,
        guildMember: stateFromStores2,
      };
      const tmp64 = tmp6(tmp3[38])(obj7);
      closure_27 = tmp64;
      const items11 = [obj4, channelId];
      const items12 = [stateFromStores, userId];
      const memo3 = obj8.useMemo(() => {
        let result = null != obj4;
        if (result) {
          result = ApplicationPresenceUtils.shouldDisableUserPresenceInChannel(tmp, channelId);
        }
        return result;
      }, items11);
      const effect = obj8.useEffect(() => {
        if (null == stateFromStores) {
          const user = UserActionCreators.getUser(c0);
        }
      }, items12);
      const items13 = [obj4, guild_id, channelId];
      const effect1 = obj8.useEffect(() => {
        let tmp = null == obj4;
        if (!tmp) {
          let isNonUserBotResult = obj4.isNonUserBot();
          if (isNonUserBotResult) {
            isNonUserBotResult = !isChangelogUserDefault(obj4.id);
          }
          tmp = isNonUserBotResult;
        }
        if (!tmp) {
          const obj2 = {
            type: "action_sheet",
            withMutualGuilds: true,
            withMutualFriends: true,
            guildId: guild_id,
            channelId: null,
          };
          const avatarURL = obj4.getAvatarURL(guild_id, 80);
          obj2.channelId = channelId;
          maybeFetchUserProfileDefault(obj4.id, avatarURL, obj2);
        }
      }, items13);
      const items14 = [tmp64, tmp6ResultResult, guild_id, first, stateFromStores2];
      const effect2 = obj8.useEffect(() => {
        let tmp = first;
        if (!first) {
          tmp = null == closure_14;
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
            AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, closure_27);
            closure_18(true);
          }
        }
      }, items14);
      let skuId4;
      if (avatarDecoration != null) {
        skuId4 = avatarDecoration.skuId;
      }
      const items15 = [skuId4, , ,];
      let skuId5;
      if (profileEffect1 != null) {
        skuId5 = profileEffect1.skuId;
      }
      items15[1] = skuId5;
      let skuId6;
      if (profileFrame1 != null) {
        skuId6 = profileFrame1.skuId;
      }
      items15[2] = skuId6;
      items15[3] = prop;
      const effect3 = obj8.useEffect(() => {
        if (atResult === AnalyticsLocationDefault.COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          const obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: prop, sku_id: null };
          let skuId;
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
          obj.sku_id = skuId;
          AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj);
          const tmp3Result = AnalyticsUtilsDefault;
        }
        atResult = prop.at(-1);
      }, items15);
      const items16 = [onClose];
      const effect4 = obj8.useEffect(
        () => () => {
          if (onClose != null) {
            tmp();
          }
        },
        items16,
      );
      const effect5 = obj8.useEffect(() => {
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
      const tmp2Result21 = tmp2(tmp3[36]);
      navigation = tmp2(tmp3[46]).useNavigation();
      if (null == obj4) {
        const obj9 = { value: analyticsLocations, children: null };
        const obj10 = {
          value: createUserProfileAnalyticsContext,
          openedAt,
          fetchStartedAt: null,
          fetchEndedAt: null,
          isLoaded: null,
          children: null,
        };
        let fetchStartedAt;
        if (tmp6ResultResult != null) {
          fetchStartedAt = tmp6ResultResult.fetchStartedAt;
        }
        obj10.fetchStartedAt = fetchStartedAt;
        let fetchEndedAt;
        if (tmp6ResultResult != null) {
          fetchEndedAt = tmp6ResultResult.fetchEndedAt;
        }
        obj10.fetchEndedAt = fetchEndedAt;
        let isLoaded;
        if (tmp6ResultResult != null) {
          isLoaded = tmp6ResultResult.isLoaded;
        }
        obj10.isLoaded = isLoaded;
        const obj11 = { children: null };
        const obj12 = { style: { marginTop: 42 }, Illustration: tmp2(tmp3[50]).NoResults, body: null };
        const intl2 = tmp2(tmp3[51]).intl;
        obj12.body = intl2.string(tmp2(tmp3[51]).t.eAn6z2);
        obj11.children = sharedValue2(tmp2(tmp3[49]).EmptyState, obj12);
        obj10.children = sharedValue2(tmp2(tmp3[48]).BottomSheet, obj11);
        obj9.children = sharedValue2(tmp2(tmp3[21]).UserProfileAnalyticsProvider, obj10);
        let tmp111Result10 = tmp107(tmp2(tmp3[17]).AnalyticsLocationProvider, obj9);
      } else {
        const obj13 = { theme, primaryColor, secondaryColor, children: null };
        const obj14 = { value: analyticsLocations, children: null };
        const obj15 = {
          value: createUserProfileAnalyticsContext,
          openedAt,
          fetchStartedAt: null,
          fetchEndedAt: null,
          isLoaded: null,
          children: null,
        };
        let fetchStartedAt1;
        if (tmp6ResultResult != null) {
          fetchStartedAt1 = tmp6ResultResult.fetchStartedAt;
        }
        obj15.fetchStartedAt = fetchStartedAt1;
        let fetchEndedAt1;
        if (tmp6ResultResult != null) {
          fetchEndedAt1 = tmp6ResultResult.fetchEndedAt;
        }
        obj15.fetchEndedAt = fetchEndedAt1;
        let isLoaded1;
        if (tmp6ResultResult != null) {
          isLoaded1 = tmp6ResultResult.isLoaded;
        }
        obj15.isLoaded = isLoaded1;
        const obj16 = {
          ref: bottomSheetRef.bottomSheetRef,
          handleDisabled: true,
          scrollable: true,
          startExpanded: true,
          maxHeight: diff - memo2,
          contentStyles: tmp.noPadding,
          backdropChildren: memo1,
          animatedIndex: sharedValue1,
          children: null,
        };
        let tmp111Result = tmp112Result;
        if (tmp112Result) {
          const obj17 = { animatedPosition: sharedValue };
          tmp111Result = tmp111(avatarDecoration, obj17);
        }
        const items17 = [tmp111Result, , ,];
        const obj18 = { gradientHeight: diff, bannerHeight: tmp58 };
        items17[1] = sharedValue2(tmp6(tmp3[53]), obj18);
        const obj19 = {
          scrollsToTop: false,
          style: tmp.container,
          contentContainerStyle: null,
          scrollEventsHandlersHook: null,
          ref: null,
          children: null,
        };
        let str2;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        const obj20 = { pointerEvents: str2 };
        obj19.contentContainerStyle = obj20;
        let tmp80;
        if (tmp2Result23.isIOS()) {
          tmp80 = memo;
        }
        obj19.scrollEventsHandlersHook = tmp80;
        obj19.ref = ref;
        const obj21 = { style: tmp.profileContainer, onLayout: callback, children: null };
        const obj22 = {
          user: obj4,
          channel: stateFromStores1,
          guildId: null,
          displayProfile: null,
          disableCalls: null,
          disableMessage: null,
          navigationReplace: null,
          isVoiceContext: null,
          location: null,
          disableStatus: null,
          scrollViewRef: null,
          isPreviewingChanges: null,
          avatarDecorationOverride: null,
          navigateToShop: null,
          navigateToPremium: null,
          showUserProfileActionSheet: null,
          initialSection: null,
          scrollPosition: null,
        };
        let tmp82;
        if (showGuildProfile) {
          tmp82 = guild_id;
        }
        obj22.guildId = tmp82;
        obj22.displayProfile = tmp6ResultResult;
        obj22.disableCalls = disableCalls;
        obj22.disableMessage = disableMessage;
        obj22.navigationReplace = navigationReplace;
        obj22.isVoiceContext = isVoiceContext;
        obj22.location = _location;
        obj22.disableStatus = memo3;
        obj22.scrollViewRef = ref;
        obj22.isPreviewingChanges = isPreviewingChanges;
        let avatarDecoration1;
        if (collectibleProfileOverrides != null) {
          avatarDecoration1 = collectibleProfileOverrides.avatarDecoration;
        }
        obj22.avatarDecorationOverride = avatarDecoration1;
        obj22.navigateToShop = function navigateToShop() {
          return openUserSettings.openUserSettings({
            screen: constants2.COLLECTIBLES_SHOP,
            onClose: handleUserSettingsClose,
          });
        };
        obj22.navigateToPremium = function navigateToPremium() {
          return openUserSettings.openUserSettings({ screen: constants2.PREMIUM, onClose: handleUserSettingsClose });
        };
        obj22.showUserProfileActionSheet = function showUserProfileActionSheetWithParams() {
          const merged = Object.assign(createUserProfileAnalyticsContext);
          showUserProfileActionSheetDefault({
            navigationReplace,
            sourceAnalyticsLocations: analyticsLocations,
            localUser,
          });
        };
        obj22.initialSection = userId.initialSection;
        tmp2Result23 = tmp2(tmp3[54]);
        let tmp84;
        if (tmp2Result24.isIOS()) {
          tmp84 = sharedValue2;
        }
        obj22.scrollPosition = tmp84;
        if (obj4.isNonUserBot()) {
          const obj23 = {};
          let merged = Object.assign(obj22);
          let tmp111Result6 = tmp111(tmp6(tmp3[56]), obj23);
          const tmp6Result15 = tmp6(tmp3[56]);
        } else if (obj4.bot) {
          const obj24 = {};
          const merged1 = Object.assign(obj22);
          tmp111Result6 = tmp111(tmp6(tmp3[57]), obj24);
          const tmp6Result16 = tmp6(tmp3[57]);
        } else {
          const obj25 = {};
          const merged2 = Object.assign(obj22);
          tmp111Result6 = tmp111(tmp6(tmp3[58]), obj25);
          const tmp6Result17 = tmp6(tmp3[58]);
        }
        const items18 = [tmp111Result6];
        let tmp111Result7 = null != tmp51Result;
        if (tmp111Result7) {
          const obj26 = { style: null, pointerEvents: "none", children: null };
          const items19 = [tmp.profileEffect, ,];
          const obj27 = { height: diff };
          items19[1] = obj27;
          items19[2] = animatedStyle;
          obj26.style = items19;
          const obj28 = { skuId: tmp51Result.skuId, bannerAdjustment: 0 };
          obj26.children = tmp111(tmp6(tmp3[59]), obj28);
          tmp111Result7 = tmp111(tmp6(tmp3[13]).View, obj26);
        }
        const obj29 = { children: null };
        items18[1] = tmp111Result7;
        obj21.children = items18;
        obj29.children = first(prop, obj21);
        obj19.children = sharedValue2(prop, obj29);
        items17[2] = sharedValue2(tmp2(tmp3[12]).BottomSheetScrollView, obj19);
        let tmp111Result8 = !tmp112Result;
        if (!tmp112Result) {
          const obj30 = { variant: "floating", tabStyle: null, onPress: null };
          const obj31 = { backgroundColor: token };
          obj30.tabStyle = obj31;
          obj30.onPress = bottomSheetClose;
          tmp111Result8 = tmp111(tmp2(tmp3[60]).ActionSheetHeaderBar, obj30);
        }
        items17[3] = tmp111Result8;
        obj16.children = items17;
        const items20 = [first(tmp2(tmp3[48]).BottomSheet, obj16), ,];
        if (tmp112Result) {
          const obj32 = {
            animatedPosition: sharedValue,
            safeAreaTop: top,
            animatedIndex: sharedValue1,
            children: null,
          };
          let tmp111Result9 = null != tmp6Result2Result;
          if (tmp111Result9) {
            const obj33 = {
              frame: tmp6Result2Result,
              profileThemeType: obj4.ACTION_SHEET,
              frameOrder: tmp2(tmp3[28]).ProfileFrameLayerOrder.FRONT,
              containerWidth: first1,
            };
            tmp111Result9 = tmp111(tmp6(tmp3[27]), obj33);
            const tmp6Result18 = tmp6(tmp3[27]);
          }
          const items21 = [tmp111Result9];
          const obj34 = { variant: "floating", tabStyle: null, onPress: null };
          const obj35 = { backgroundColor: token };
          obj34.tabStyle = obj35;
          obj34.onPress = bottomSheetClose;
          items21[1] = tmp111(tmp2(tmp3[60]).ActionSheetHeaderBar, obj34);
          obj32.children = items21;
          tmp112Result = tmp112(profileFrame1, obj32);
        }
        items20[1] = tmp112Result;
        if (!isPreviewingChanges) {
          items20[2] = isPreviewingChanges;
          obj15.children = items20;
          obj14.children = tmp112(tmp2(tmp3[21]).UserProfileAnalyticsProvider, obj15);
          obj13.children = tmp111(tmp2(tmp3[17]).AnalyticsLocationProvider, obj14);
          tmp111Result10 = tmp111(tmp2(tmp3[52]).ThemeContextProvider, obj13);
        } else {
          const obj36 = { theme: tmp62, primaryColor: null, secondaryColor: null, children: null };
          const intl = tmp2(tmp3[51]).intl;
          if (setting === tmp2(tmp3[62]).ProfileVisibility.FRIENDS_ONLY) {
            let mNZcD8 = tmp2(tmp3[51]).t.mNZcD8;
          } else {
            mNZcD8 = tmp2(tmp3[51]).t["wSnI/0"];
          }
          const obj37 = { text: intl.string(mNZcD8), isExpanded: true };
          obj36.children = tmp111(tmp2(tmp3[61]).ActionSheetBackdropToast, obj37);
          tmp111(tmp2(tmp3[52]).ThemeContextProvider, obj36);
        }
        tmp2Result24 = tmp2(tmp3[54]);
      }
      return tmp111Result10;
    }
    if (tmp6ResultResult != null) {
      const profileEffect = tmp6ResultResult.profileEffect;
      if (profileEffect != null) {
        skuId2 = profileEffect.skuId;
      }
    }
    const tmp6Result13 = tmp6(tmp3[26]);
  }
  if (tmp6ResultResult != null) {
    const profileFrame = tmp6ResultResult.profileFrame;
    if (profileFrame != null) {
      skuId = profileFrame.skuId;
    }
  }
});
