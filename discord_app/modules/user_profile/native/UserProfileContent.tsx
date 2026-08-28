// === Module 12424: CustomStatusBubble ===

// Module 12424 (CustomStatusBubble)
import useSharedStylesDefault from "useSharedStyles" /* 8476 */;
import WidgetRendererDefault from "WidgetRenderer" /* 8741 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "get" /* 10395 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import closure_9 from "markAllUserIdListsStale" /* 4099 */;
import closure_10 from "mergeGuildAvatar" /* 1923 */;
import closure_11 from "handleFormOpen" /* 8016 */;
import closure_12 from "createUserWidgetFromServer" /* 7313 */;
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY" /* 8502 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 5966 */;
import { RelationshipTypes } from "ME" /* 676 */;
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5588 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
function CustomStatusBubble(guildId) {
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[15])();
  let obj = user(channelId[16]);
  const items = [closure_10];
  const items1 = [user];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = closure_1_10.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  const items2 = [channelId, guildId, user];
  let tmp7 = null;
  const callback = importAllResult.useCallback(() => {
    let obj = guildId(channelId[17]);
    obj = { user, guildId, channelId };
    obj.openLazy(user(channelId[19])(channelId[18], channelId.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
  }, items2);
  if (null == customStatusActivity) {
    tmp7 = null;
    if (stateFromStores) {
      tmp7 = null;
      if (!isPreviewingChanges) {
        tmp7 = tmp(tmp2[20])();
      }
    }
  }
  const ref = importAllResult.useRef(tmp7);
  let labelResult;
  if (null != ref.current) {
    const current = ref.current;
    labelResult = current.label();
  }
  obj = { ref: bubbleRef, customStatusActivity, hasCustomProfileTheme, editEnabled: null, onPressTruncatedStatus: null, style: null, emojiOnlyStyle: null, placeholderText: null, prompt: null };
  if (stateFromStores) {
    stateFromStores = !isPreviewingChanges;
  }
  obj[3] = stateFromStores;
  let tmp12;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  obj[4] = tmp12;
  const items3 = [, ];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp3);
  obj[5] = items3;
  obj[6] = tmp3.emojiOnlyCustomStatusBubble;
  obj[7] = labelResult;
  obj[8] = ref.current;
  return closure_19(guildId(channelId[21]), obj);
}
function RemoveFriendIconButton(user) {
  user = user.user;
  let trackUserProfileAction;
  let newestAnalyticsLocation;
  closure_4 = undefined;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    let obj = trackUserProfileAction(newestAnalyticsLocation[24]);
    obj = { location: newestAnalyticsLocation };
    obj.removeFriend(user.id, obj);
  }
  let obj = user(newestAnalyticsLocation[22]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[23])().newestAnalyticsLocation;
  closure_4 = trackUserProfileAction(newestAnalyticsLocation[25]).useName(user);
  obj = { size: "sm", variant: "secondary-overlay", icon: callback(user(newestAnalyticsLocation[27]).UserCheckIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(newestAnalyticsLocation[28]).intl;
  obj[3] = intl.string(user(newestAnalyticsLocation[28]).t.cvSt1J);
  obj[4] = function onPress() {
    let obj = user(newestAnalyticsLocation[29]);
    obj = { userDisplayName: closure_4, onConfirm: handleConfirm };
    obj.confirmRemoveFriend(obj);
  };
  return callback(user(newestAnalyticsLocation[26]).IconButton, obj);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = importAllResult.useCallback(() => {
    let obj = guildId(channelId[17]);
    obj = { user, guildId, channelId };
    obj.openLazy(user(channelId[19])(channelId[30], channelId.paths), "UserProfileGameFriendActionSheet", obj, "stack");
  }, items);
  let obj = { size: "sm", variant: "secondary-overlay", icon: callback(user(channelId[31]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(channelId[28]).intl;
  obj[3] = intl.string(user(channelId[28]).t.cvSt1J);
  obj[4] = callback;
  return callback(user(channelId[26]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({ user, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = global);
    closure_0 = undefined;
    trackUserProfileAction = undefined;
    tmp2 = closure_2;
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = global);
    tmp = trackUserProfileAction;
    obj = require("nameFromUser");
    userTag = obj.useUserTag(user);
    closure_0 = userTag;
    tmp4 = require("useBadges")(displayProfile);
    obj2 = require("getNickname");
    guildId = undefined;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    name = obj2.useName(guildId, channelId, user);
    tmp7 = name;
    if (null != displayNameOverride) {
      num = 0;
      tmp7 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp7 = displayNameOverride;
      }
    }
    tmp8 = closure_0;
    obj3 = require("UserProfileAnalyticsProvider");
    trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
    items = [, ];
    items[0] = trackUserProfileAction;
    items[1] = userTag;
    callback = closure_4.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      userTag(closure_1_2[34]).copy(userTag);
      const obj = userTag(closure_1_2[34]);
      const result = userTag(closure_1_2[35]).presentUsernameCopied();
    }, items);
    tmp10 = jsx;
    obj = { user, guildId: null, displayName: null, pronouns: null, badges: null, style: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: null, pendingDisplayNameStyles: null };
    guildId1 = undefined;
    tmpResult = require("DisplayName");
    if (displayProfile != null) {
      guildId1 = displayProfile.guildId;
    }
    obj[1] = guildId1;
    obj[2] = tmp7;
    if (pronounsOverride == null) {
      pronouns = undefined;
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      pronounsOverride = pronouns;
    }
    obj[3] = pronounsOverride;
    if (badgesOverride == null) {
      badgesOverride = tmp4;
    }
    obj[4] = badgesOverride;
    obj[5] = style;
    obj[6] = badgeContainerBackground;
    tmp14 = undefined;
    if (!isPreviewingChanges) {
      tmp14 = callback;
    }
    obj[7] = tmp14;
    intl = require("getSystemLocale").intl;
    obj[8] = intl.string(require("getSystemLocale").t.y5MwJy);
    tmp15 = undefined;
    if (!isPreviewingChanges) {
      tmp15 = callback;
    }
    obj[9] = tmp15;
    fn = undefined;
    if (!isPreviewingChanges) {
      fn = () => {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        userTag(closure_1_2[35]).presentUserPronouns();
      };
    }
    obj[10] = fn;
    obj[11] = !isPreviewingChanges;
    obj[12] = pendingDisplayNameStyles;
    return tmp10(tmpResult, obj);
  }
}
function EditSection(guildId) {
  guildId = guildId.guildId;
  let trackUserProfileAction;
  dependencyMap = undefined;
  closure_3 = undefined;
  let obj = guildId(8504);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj1 = guildId(589);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_8.getGuild(guildId));
  dependencyMap = trackUserProfileAction(8971)();
  closure_3 = trackUserProfileAction(8971)({ guild: stateFromStores });
  obj = { style: trackUserProfileAction(8476)().primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(8476)();
  obj = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  obj1 = { size: "sm", color: trackUserProfileAction(712).colors.WHITE };
  obj[1] = callback(guildId(10264).PencilIcon, obj1);
  if (null != stateFromStores) {
    const intl2 = tmp4(1236).intl;
    let stringResult = intl2.string(tmp4(1236).t.HmFaFB);
  } else {
    const intl = tmp4(1236).intl;
    stringResult = intl.string(tmp4(1236).t.s5vZlQ);
  }
  obj[2] = stringResult;
  obj[3] = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    trackUserProfileAction(4413).hideAllActionSheets();
    trackUserProfileAction(9401)();
    dependencyMap();
  };
  obj[2] = callback(guildId(4893).Button, obj);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj2 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj3 = { size: "sm", color: null };
    obj3[1] = tmp(712).colors.WHITE;
    obj2[1] = tmp6(tmp4(10264).PencilIcon, obj3);
    const intl3 = tmp4(1236).intl;
    obj2[2] = intl3.string(tmp4(1236).t["PKQB/H"]);
    obj2[3] = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      trackUserProfileAction(4413).hideAllActionSheets();
      trackUserProfileAction(9401)();
      callback();
    };
    tmp6Result = tmp6(tmp4(4893).Button, obj2);
  }
  obj[3] = tmp6Result;
  return callback(trackUserProfileAction(9213), obj);
}
function UserProfileWidgetsBoardContainer(isCurrentUser) {
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp3 = useSharedStylesDefault();
  const items = [tmp3.card, { backgroundColor: containerBackground }];
  const obj = { style: tmp3.profileContent, children: null };
  if (isCurrentUser) {
    isCurrentUser = callback(tmp(12428), {});
  }
  const items1 = [isCurrentUser, callback(WidgetRendererDefault, { userId, isVisible, cardStyle: items })];
  obj[1] = items1;
  return closure_20(closure_6, obj);
}
let c4 = importAllResult;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const memoResult = importAllResult.memo(function UserProfileContent(user) {
  user = user.user;
  const channel = user.channel;
  const displayProfile = user.displayProfile;
  const showUserProfileActionSheet = user.showUserProfileActionSheet;
  ({ disableCalls, isPreviewingChanges } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  closure_7 = undefined;
  let trackUserProfileAction;
  let stateFromStores;
  closure_10 = undefined;
  let userProfileGameFriendApplicationIds;
  let guild_id;
  let name;
  let pendingBio;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  closure_17 = undefined;
  closure_18 = undefined;
  let containerBackground;
  closure_20 = undefined;
  let stateFromStores1;
  let stateFromStores2;
  closure_23 = undefined;
  closure_24 = undefined;
  let boardTabIndex;
  let wishlistTabIndex;
  c27 = undefined;
  let handlePageContentSize;
  let isVisible;
  let markAsDismissed;
  setActiveProfileTabSection = undefined;
  let restoreActiveIndex;
  closure_33 = undefined;
  closure_34 = undefined;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let obj4;
  ({ disableMessage, disableStatus, location: _location, initialSection, scrollPosition } = user);
  const tmp3 = channel(displayProfile[15])();
  closure_7 = tmp3;
  const tmp4 = channel(displayProfile[45])(closure_17);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(displayProfile[46])({ scrollPosition, bannerHeight: tmp4 }));
  let obj = user(displayProfile[22]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj1 = user(displayProfile[16]);
  let items = [closure_10];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_10 = tmp9;
  let tmp6Result = tmp6(tmp2[16]);
  let items1 = [stateFromStores];
  const stateFromStoresObject = tmp6Result.useStateFromStoresObject(items1, () => ({ relationshipType: stateFromStores.getRelationshipType(user.id), originApplicationId: stateFromStores.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  tmp6Result = tmp6(tmp2[48]);
  const incomingGameRelationshipsForUser = tmp6Result.useIncomingGameRelationshipsForUser(user.id);
  const tmp5 = channel(displayProfile[46])({ scrollPosition, bannerHeight: tmp4 });
  const isGameFriends = user(displayProfile[49]).useIsGameFriends(user.id);
  const tmp6Result1 = user(displayProfile[49]);
  obj = { userId: user.id };
  userProfileGameFriendApplicationIds = user(displayProfile[50]).useUserProfileGameFriendApplicationIds(obj);
  if (null != displayProfile) {
    const guildId = displayProfile.guildId;
    guild_id = guildId;
  } else if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmpResult = tmp(tmp2[33]);
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  name = tmpResult.useName(guild_id, id1, user);
  let obj8 = isPreviewingChanges;
  let items2 = [guild_id, user];
  const memo = isPreviewingChanges.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const obj = {};
        const items = [tmp2.id];
        obj[tmp] = items;
      }
      return {};
    }
  }, items2);
  const tmp6Result2 = user(displayProfile[50]);
  const subscribeGuildMembers = user(displayProfile[51]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(displayProfile[52])(user.id);
  const tmp6Result3 = user(displayProfile[51]);
  const items3 = [userProfileGameFriendApplicationIds];
  const stateFromStoresObject1 = user(displayProfile[16]).useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result4 = user(displayProfile[16]);
  obj = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = user(displayProfile[53]).getPendingAvatarSrc(obj);
  const tmp20 = channel(displayProfile[32])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp20;
  const items4 = [tmp20, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = isPreviewingChanges.useMemo(() => {
    let obj = user(displayProfile[54]);
    obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettingsToProfileBadges(closure_17, obj);
  }, items4);
  obj1 = { user, displayProfile, pendingThemeColors: null };
  let tmp23;
  tmpResult = tmp(tmp2[55]);
  if (isPreviewingChanges) {
    tmp23 = pendingThemeColors;
  }
  obj1[2] = tmp23;
  const tmpResult1Result = tmpResult(obj1);
  const primaryColor = tmpResult1Result.primaryColor;
  closure_18 = tmp25;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result5 = user(displayProfile[53]);
  const userProfileColors = user(displayProfile[56]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp27 = channel(displayProfile[57])("UserProfileContent");
  closure_20 = tmp27;
  const tmp6Result6 = user(displayProfile[56]);
  const ref1 = obj8.useRef(null);
  const ref = obj8.useRef(null);
  const items5 = [guild_id];
  stateFromStores1 = user(displayProfile[16]).useStateFromStores(items5, () => guild_id.getFirstWishlistId(user.id));
  const tmp6Result7 = user(displayProfile[16]);
  const fetchWishlist = user(displayProfile[58]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj2 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result8 = user(displayProfile[58]);
  const items6 = [closure_7];
  const items7 = [stateFromStores1];
  stateFromStores2 = user(displayProfile[16]).useStateFromStores(items6, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = wishlist.getWishlist(tmp);
    }
    return wishlist;
  }, items7);
  const items8 = [stateFromStores2, id === user.id];
  let tmp33 = tmp9;
  if (id !== user.id) {
    let tmp34 = null != stateFromStores2;
    if (tmp34) {
      tmp34 = arr11.length > 0;
    }
    tmp33 = tmp34;
  }
  closure_23 = tmp33;
  const tmp6Result9 = user(displayProfile[16]);
  const tmp35 = user(displayProfile[60]).useDisplayableBoardWidgets(user.id).length > 0;
  closure_24 = tmp35;
  const tmp6Result10 = user(displayProfile[60]);
  const profileTabIndices = user(displayProfile[61]).useProfileTabIndices(tmp35, tmp33);
  boardTabIndex = profileTabIndices.boardTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp6Result11 = user(displayProfile[61]);
  [tmp38, c27] = showUserProfileActionSheet(obj8.useState(0), 2);
  const callback = obj8.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp37 = showUserProfileActionSheet(obj8.useState(0), 2);
  const pageHeights = user(displayProfile[62]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const tmp6Result12 = user(displayProfile[62]);
  const wishlistViewerCoachmark = user(displayProfile[63]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp33 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items9 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj8.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(constants.INDIRECT_ACTION);
    }
  }, items9);
  const tmp6Result13 = user(displayProfile[63]);
  const profileSectionTabs = user(displayProfile[61]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  closure_33 = tmp44;
  closure_34 = tmp45;
  const items10 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj8.useCallback(() => {
    channel(displayProfile[17]).hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items10);
  const items11 = [navigateToShop];
  callback3 = obj8.useCallback(() => {
    channel(displayProfile[17]).hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items11);
  const items12 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, tmp27, callback2, callback3, null != primaryColor, guild_id, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj8.useCallback(() => {
    if (null != user) {
      if (null != stateFromStores) {
        const items = [wishlist.card, ];
        let obj = { backgroundColor: null };
        obj[0] = containerBackground;
        items[1] = obj;
        obj = { style: null, children: null };
        const items1 = [, ];
        ({ cards: arr3[0], profileContent: arr3[1] } = wishlist);
        obj[0] = items1;
        let _private;
        if (displayProfile != null) {
          _private = tmp53.private;
        }
        if (_private) {
          obj = { username: null, containerBackground: null };
          obj[0] = name;
          obj[1] = containerBackground;
          _private = containerBackground(channel(displayProfile[64]), obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = tmp.isProvisional;
        if (isProvisional) {
          obj1 = { style: null, userId: null, iconSize: 16 };
          obj1[0] = items;
          obj1[1] = tmp.id;
          isProvisional = containerBackground(user(displayProfile[65]).UserProfileProvisionalAccountExplainerCard, obj1);
        }
        items2[1] = isProvisional;
        let tmp10 = tmp.id === tmp48.id;
        if (tmp10) {
          tmp10 = !isPreviewingChanges;
        }
        if (tmp10) {
          const obj2 = { navigateToPremium: null, navigateToShop: null, hasCustomProfileTheme: null };
          obj2[0] = callback2;
          obj2[1] = callback3;
          obj2[2] = closure_18;
          tmp10 = containerBackground(channel(displayProfile[66]), obj2);
        }
        items2[2] = tmp10;
        const obj3 = { user: null, currentUser: null, guildId: null, style: null };
        obj3[0] = tmp;
        obj3[1] = tmp48;
        obj3[2] = guild_id;
        obj3[3] = items;
        items2[3] = containerBackground(channel(displayProfile[67]), obj3);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          obj4 = { userId: null, applicationIds: null, style: null };
          obj4[0] = tmp.id;
          obj4[1] = tmp22;
          let tmp26;
          let tmp19Result = tmp19(tmp20[68]);
          if (!closure_20) {
            tmp26 = items;
          }
          obj4[2] = tmp26;
          tmp18Result = tmp18(tmp19Result, obj4);
        }
        items2[4] = tmp18Result;
        const obj5 = { userId: null, displayProfile: null, pendingBio: null, style: null };
        obj5[0] = tmp.id;
        obj5[1] = displayProfile;
        let tmp29;
        tmp19Result = tmp19(tmp20[69]);
        if (isPreviewingChanges) {
          tmp29 = pendingBio;
        }
        obj5[2] = tmp29;
        let tmp31;
        if (!closure_20) {
          tmp31 = items;
        }
        obj5[3] = tmp31;
        items2[5] = containerBackground(tmp19Result, obj5);
        tmp18Result = null != tmp21;
        if (tmp18Result) {
          const obj6 = { userId: null, guildId: null, style: null };
          obj6[0] = tmp.id;
          obj6[1] = tmp21;
          let tmp34;
          if (!tmp30) {
            tmp34 = items;
          }
          obj6[2] = tmp34;
          tmp18Result = tmp18(tmp19(tmp20[70]), obj6);
          const tmp19Result1 = tmp19(tmp20[70]);
        }
        items2[6] = tmp18Result;
        guild_id = undefined;
        if (channel != null) {
          guild_id = tmp35.guild_id;
        }
        let tmp18Result1 = null != guild_id;
        if (tmp18Result1) {
          const obj7 = { user: null, currentUser: null, guildId: null, channelId: null, showUserProfile: null, style: null };
          obj7[0] = tmp;
          obj7[1] = tmp48;
          ({ guild_id: obj8[2], id: obj8[3] } = tmp35);
          obj7[4] = showUserProfileActionSheet;
          let tmp40;
          if (!tmp30) {
            tmp40 = items;
          }
          obj7[5] = tmp40;
          tmp18Result1 = tmp18(tmp19(tmp20[71]), obj7);
          const tmp19Result2 = tmp19(tmp20[71]);
        }
        items2[7] = tmp18Result1;
        const obj8 = { userId: null, style: null };
        obj8[0] = tmp.id;
        let tmp42;
        if (!closure_20) {
          tmp42 = items;
        }
        obj8[1] = tmp42;
        items2[8] = containerBackground(user(displayProfile[72]).UserProfileAccountConnectionsCard, obj8);
        const obj9 = { userId: null, style: null };
        obj9[0] = tmp.id;
        let tmp43;
        if (!closure_20) {
          tmp43 = items;
        }
        obj9[1] = tmp43;
        items2[9] = containerBackground(user(displayProfile[72]).UserProfileApplicationRoleConnectionsCard, obj9);
        let tmp18Result2 = !tmp28;
        if (!isPreviewingChanges) {
          const obj10 = { userId: null, style: null, onBack: null };
          obj10[0] = tmp.id;
          let tmp46;
          if (!tmp30) {
            tmp46 = items;
          }
          obj10[1] = tmp46;
          obj10[2] = showUserProfileActionSheet;
          tmp18Result2 = tmp18(tmp19(tmp20[73]), obj10);
          const tmp19Result3 = tmp19(tmp20[73]);
        }
        items2[10] = tmp18Result2;
        obj[1] = items2;
        return closure_20(navigateToShop, obj);
      }
    }
    return null;
  }, items12);
  const items13 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, id === user.id];
  callback5 = obj8.useCallback(() => {
    let obj = { style: wishlist.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = containerBackground(user(displayProfile[74]).WishlistEmptyState, {});
      let tmp6 = displayProfile;
      let tmp9 = containerBackground;
    } else {
      tmp6 = displayProfile;
      obj = { wishlistId: null, maxWidth: null, isVisible: null };
      obj[0] = tmp3;
      obj[1] = closure_17;
      obj[2] = closure_33;
      tmp9 = containerBackground;
      tmp10 = containerBackground(channel(displayProfile[74]), obj);
    }
    const items = [tmp10, ];
    let tmp9Result = closure_10;
    if (closure_10) {
      obj = { userId: null, wishlistId: null, maxWidth: null };
      obj[0] = user.id;
      obj[1] = tmp3;
      obj[2] = closure_17;
      tmp9Result = tmp9(channel(tmp6[75]), obj);
    }
    items[1] = tmp9Result;
    obj[1] = items;
    return closure_20(navigateToShop, obj);
  }, items13);
  const items14 = [handlePageContentSize, callback4, callback5, tmp35, tmp33, boardTabIndex, wishlistTabIndex, user.id, activeProfileTabSection === name.WIDGETS, id === user.id, containerBackground];
  const memo2 = obj8.useMemo(() => {
    let obj = { id: "main", label: null, page: null };
    const intl = user(displayProfile[28]).intl;
    obj[1] = intl.string(user(displayProfile[28]).t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return callback(0, arg0, arg1);
      },
      children: callback4()
    };
    obj[2] = containerBackground(navigateToPremium, obj);
    const items = [obj];
    if (closure_24) {
      obj = { id: "board", label: null, page: null };
      const intl2 = tmp(tmp2[28]).intl;
      obj[1] = intl2.string(tmp(tmp2[28]).t.laViwx);
      obj1 = { scrollEnabled: false, onContentSizeChange: null, children: null };
      obj1[1] = function onContentSizeChange(arg0, arg1) {
        return callback(closure_25, arg0, arg1);
      };
      const obj2 = { userId: null, isVisible: null, isCurrentUser: null, containerBackground: null };
      obj2[0] = user.id;
      obj2[1] = closure_34;
      obj2[2] = closure_10;
      obj2[3] = containerBackground;
      obj1[2] = tmp3(c27, obj2);
      obj[2] = tmp3(tmp4, obj1, boardTabIndex);
      items.push(obj);
    }
    if (closure_23) {
      const obj3 = { id: "wishlist", label: null, page: null };
      const intl3 = tmp(tmp2[28]).intl;
      obj3[1] = intl3.string(tmp(tmp2[28]).t["7lZ31J"]);
      obj4 = { scrollEnabled: false, onContentSizeChange: null, children: null };
      obj4[1] = function onContentSizeChange(arg0, arg1) {
        return callback(closure_26, arg0, arg1);
      };
      obj4[2] = callback5();
      obj3[2] = tmp3(tmp4, obj4, wishlistTabIndex);
      items.push(obj3);
    }
    return items;
  }, items14);
  const tmp6Result14 = user(displayProfile[61]);
  const tmp6Result15 = user(displayProfile[76]);
  segmentedControlState = tmp6Result15.useSegmentedControlState({ pageWidth: tmp38, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[41]).space.PX_24, items: memo2, onPageChange: handleTabChange });
  let obj3 = { pageWidth: tmp38, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[41]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  const pagerFillHeight = user(displayProfile[62]).usePagerFillHeight();
  const items15 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj8.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items15);
  const tmp6Result16 = user(displayProfile[62]);
  const items16 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = user(displayProfile[62]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj4 = { backgroundColor: null };
      obj4[0] = containerBackground;
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp97);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp97).OpenableUserProfileAvatar;
      }
      let obj5 = { user: null, displayProfile: null, bannerHeight: null, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null, privateBanner: null };
      obj5[0] = user;
      obj5[1] = displayProfile;
      obj5[2] = tmp4;
      let tmp59;
      if (isPreviewingChanges) {
        tmp59 = pendingBanner;
      }
      obj5[3] = tmp59;
      let tmp60;
      if (isPreviewingChanges) {
        tmp60 = pendingAvatarSrc;
      }
      obj5[4] = tmp60;
      let tmp61;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp61 = pendingAccentColor;
        }
      }
      obj5[5] = tmp61;
      let tmp62;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp62 = pendingThemeColors;
        }
      }
      obj5[6] = tmp62;
      obj5[7] = isPreviewingChanges;
      obj5[8] = bannerAnimatedStyle;
      obj5[9] = bannerImageAnimatedStyle;
      obj5[10] = blurAnimatedProps;
      obj5[11] = showBlur;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp57Result;
      if (true === _private) {
        let obj6 = { primaryColor: null };
        obj6[0] = primaryColor;
        tmp57Result = tmp57(tmp(tmp2[79]), obj6);
      }
      obj5[12] = tmp57Result;
      const items17 = [containerBackground(tmp(tmp2[78]), obj5), , ];
      let tmp55Result = !isPreviewingChanges;
      if (!isPreviewingChanges) {
        const items18 = [tmp3.bannerButtons, , ];
        let _private1;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        let obj7 = { style: null, children: null };
        items18[1] = _private1;
        items18[2] = bannerAnimatedStyle;
        obj7[0] = items18;
        let tmp67 = null;
        if (null != stateFromStores) {
          tmp67 = null;
          if (user.id !== stateFromStores.id) {
            tmp67 = null;
            if (!user.bot) {
              if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                obj8 = { user: null };
                obj8[0] = user;
                tmp57Result = tmp57(closure_23, obj8);
              } else {
                tmp57Result = null;
                if (isGameFriends) {
                  let obj9 = { user: null };
                  obj9[0] = user;
                  tmp57Result = tmp57(closure_24, obj9);
                }
              }
            }
          }
        }
        const items19 = [tmp67, ];
        let obj10 = { user: null, currentUser: null, displayProfile: null, channel: null };
        obj10[0] = user;
        obj10[1] = stateFromStores;
        obj10[2] = displayProfile;
        obj10[3] = channel;
        items19[1] = tmp57(tmp(tmp2[81]), obj10);
        obj7[1] = items19;
        tmp55Result = tmp55(tmp(tmp2[80]).View, obj7);
      }
      items17[1] = tmp55Result;
      const obj11 = { style: null, children: null };
      obj11[0] = contentAnimatedStyle;
      const obj12 = { user: null, guildId: null, disableStatus: null, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      obj12[0] = user;
      obj12[1] = guild_id;
      obj12[2] = disableStatus;
      let tmp73;
      if (isPreviewingChanges) {
        tmp73 = pendingAvatarSrc;
      }
      obj12[3] = tmp73;
      let tmp74;
      if (isPreviewingChanges) {
        tmp74 = pendingAvatarDecoration;
      }
      obj12[4] = tmp74;
      obj12[5] = avatarBackground;
      const obj13 = { backgroundColor: null };
      obj13[0] = statusBackground;
      obj12[6] = obj13;
      const items20 = [containerBackground(OpenableUserProfileAvatar, obj12), ];
      const items21 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        let num2 = 0;
        if (null == tmp17) {
          num2 = pendingBadgeDisplayOrder;
        }
      } else {
        num2 = 0;
      }
      const obj14 = { style: null, children: null };
      const obj15 = { paddingTop: null, paddingBottom: null };
      obj15[0] = num2;
      obj15[1] = channel(displayProfile[47])().bottom + pendingBio;
      items21[1] = obj15;
      obj14[0] = items21;
      const obj16 = { customStatusActivity: null, user: null, guildId: null, channelId: null, hasCustomProfileTheme: null, showUserProfileActionSheet: null, isPreviewingChanges: null, bubbleRef: null };
      obj16[0] = tmp17;
      obj16[1] = user;
      obj16[2] = guild_id;
      let id2;
      if (channel != null) {
        id2 = channel.id;
      }
      obj16[3] = id2;
      obj16[4] = tmp25;
      obj16[5] = showUserProfileActionSheet;
      obj16[6] = isPreviewingChanges;
      obj16[7] = ref;
      const items22 = [containerBackground(stateFromStores2, obj16), , ];
      tmp55Result = null;
      if (null != stateFromStores) {
        const obj17 = { style: null, children: null };
        const items23 = [, ];
        ({ primaryInfo: arr27[0], profileContent: arr27[1] } = tmp3);
        obj17[0] = items23;
        const obj18 = { user: null, channelId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null };
        obj18[0] = user;
        let id3;
        if (channel != null) {
          id3 = channel.id;
        }
        obj18[1] = id3;
        obj18[2] = displayProfile;
        let tmp82;
        if (isPreviewingChanges) {
          tmp82 = pendingGlobalName;
        }
        obj18[3] = tmp82;
        let tmp83;
        if (isPreviewingChanges) {
          tmp83 = pendingPronouns;
        }
        obj18[4] = tmp83;
        let tmp84;
        if (isPreviewingChanges) {
          tmp84 = memo1;
        }
        obj18[5] = tmp84;
        let tmp85;
        if (isPreviewingChanges) {
          tmp85 = pendingDisplayNameStyles;
        }
        obj18[6] = tmp85;
        obj18[7] = containerBackground;
        obj18[8] = isPreviewingChanges;
        const items24 = [tmp57(boardTabIndex, obj18), , , , , , ];
        let tmp57Result1 = user.id !== stateFromStores.id;
        if (tmp57Result1) {
          const obj19 = { user: null, guildId: null };
          obj19[0] = user;
          obj19[1] = guild_id;
          tmp57Result1 = tmp57(tmp(tmp2[82]), obj19);
        }
        items24[1] = tmp57Result1;
        let tmp57Result2 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        if (tmp57Result2) {
          const obj20 = { user: null, channelId: null, guildId: null, applicationId: null, style: null, showUserProfile: null };
          obj20[0] = user;
          let id4;
          if (channel != null) {
            id4 = channel.id;
          }
          obj20[1] = id4;
          obj20[2] = guild_id;
          obj20[3] = originApplicationId;
          obj20[4] = obj4;
          obj20[5] = showUserProfileActionSheet;
          tmp57Result2 = tmp57(tmp(tmp2[83]), obj20);
          const tmpResult2 = tmp(tmp2[83]);
        }
        items24[2] = tmp57Result2;
        items24[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: null, guildId: null, style: null, showUserProfile: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj[3] = id;
          obj[4] = guild_id;
          obj[5] = obj4;
          obj[6] = showUserProfileActionSheet;
          return containerBackground(channel(displayProfile[83]), obj, applicationId.applicationId);
        });
        const obj21 = { user: null, style: null };
        obj21[0] = user;
        obj21[1] = obj4;
        items24[4] = tmp57(tmp(tmp2[84]), obj21);
        let tmp57Result3 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp57Result3) {
          const obj22 = { guildId: null };
          obj22[0] = guild_id;
          tmp57Result3 = tmp57(wishlistTabIndex, obj22);
        }
        items24[5] = tmp57Result3;
        let tmp57Result4 = user.id !== stateFromStores.id;
        if (tmp57Result4) {
          const obj23 = { user: null, disableCalls: null, disableMessage: null, location: null, hasCustomProfileTheme: null, style: null };
          obj23[0] = user;
          if (!disableCalls) {
            disableCalls = relationshipType === tmp87.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj23[1] = disableCalls;
          obj23[2] = disableMessage;
          obj23[3] = _location;
          obj23[4] = tmp25;
          obj23[5] = tmp3.primaryButtons;
          tmp57Result4 = tmp57(tmp(tmp2[85]), obj23);
          const tmpResult3 = tmp(tmp2[85]);
        }
        items24[6] = tmp57Result4;
        obj17[1] = items24;
        tmp55Result = tmp55(tmp75, obj17);
        const tmp80 = boardTabIndex;
        tmp87 = pendingBadgeHiddenBadges;
      }
      items22[1] = tmp55Result;
      if (!tmp33) {
        if (!tmp35) {
          let callback4Result = callback4();
        }
        const obj24 = { children: null };
        items22[2] = callback4Result;
        obj14[1] = items22;
        items20[1] = tmp55(tmp75, obj14);
        obj11[1] = items20;
        items17[2] = tmp55(tmp(tmp2[80]).View, obj11);
        obj24[0] = items17;
        return tmp55(tmp56, obj24);
      }
      const obj25 = { onLayout: null, children: null };
      obj25[0] = callback;
      const obj26 = { style: null, children: null };
      obj26[0] = tmp3.profileTablist;
      const obj27 = { state: null, variant: null };
      obj27[0] = segmentedControlState;
      let str;
      if (tmp25) {
        str = "gradient-background";
      }
      const obj28 = { children: null };
      obj27[1] = str;
      const items25 = [containerBackground(tmp6(tmp2[87]).Tabs, obj27), ];
      const obj29 = { ref: null, style: null, collapsable: false, pointerEvents: "box-none" };
      obj29[0] = ref1;
      const obj30 = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      obj30[1] = `${Math.max(wishlistTabIndex, 0) / arr18.length * 100}%`;
      obj29[1] = obj30;
      items25[1] = containerBackground(navigateToShop, obj29);
      obj26[1] = items25;
      const items26 = [closure_20(navigateToShop, obj26), , ];
      const obj31 = { ref: null, onLayout: null, style: null, children: null };
      obj31[0] = pagerRef;
      obj31[1] = measureFill;
      obj31[2] = pagesHeightStyle;
      const obj32 = { state: null };
      obj32[0] = segmentedControlState;
      obj31[3] = containerBackground(tmp6(tmp2[88]).SegmentedControlPages, obj32);
      items26[1] = containerBackground(tmp(tmp2[80]).View, obj31);
      const obj33 = { anchorRef: null, isVisible: null, markAsDismissed: null, onViewWishlist: null };
      obj33[0] = ref1;
      obj33[1] = isVisible;
      obj33[2] = markAsDismissed;
      obj33[3] = tmp54;
      items26[2] = containerBackground(tmp(tmp2[89]), obj33);
      obj28[0] = items26;
      obj25[1] = closure_20(tmp6(tmp2[86]).LayerScope, obj28);
      callback4Result = tmp57(tmp75, obj25);
      tmp56 = stateFromStores1;
      const tmp77 = stateFromStores2;
      const tmpResult1 = tmp(tmp2[78]);
    }
  }
  return null;
});
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export { PrimaryInfo };