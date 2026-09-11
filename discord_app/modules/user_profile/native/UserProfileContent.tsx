// === Module 13153: UserProfileContent ===

// Module 13153 (UserProfileContent)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4304 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import UserProfileRolesCardDefault from "UserProfileRolesCard" /* 7258 */;
import ClipboardUtils from "ClipboardUtils" /* 7262 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8325 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8765 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9132 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 9599 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11301 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12713 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 12720 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13091 */;
import UserProfileModeratorActionsDefault from "UserProfileModeratorActions" /* 13141 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13144 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13157 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13158 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13166 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 13172 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 13173 */;
import UserProfileGameFriendsCardDefault from "UserProfileGameFriendsCard" /* 13178 */;
import UserProfileConnections from "UserProfileConnections" /* 13179 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13184 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13190 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 13218 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8277 */;
import WishlistStore from "WishlistStore" /* 8868 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4255 */;
import UserStore from "UserStore" /* 1371 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8245 */;
import UserProfileStore from "UserProfileStore" /* 7693 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function CustomStatusBubble(guildId) {
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[16])();
  let obj = user(channelId[17]);
  const items = [UserStore];
  const items1 = [user];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  const items2 = [channelId, guildId, user];
  let tmp7 = null;
  const callback = noop.useCallback(() => {
    const obj = { user, guildId, channelId };
    obj.openLazy(asyncRequireImpl(11244, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
  }, items2);
  if (null == customStatusActivity) {
    tmp7 = null;
    if (stateFromStores) {
      tmp7 = null;
      if (!isPreviewingChanges) {
        tmp7 = tmp(tmp2[21])();
      }
    }
  }
  const ref = noop.useRef(tmp7);
  let labelResult;
  if (null != ref.current) {
    const current = ref.current;
    labelResult = current.label();
  }
  obj = { ref: bubbleRef, customStatusActivity, hasCustomProfileTheme, editEnabled: null, onPressTruncatedStatus: null, style: null, emojiOnlyStyle: null, placeholderText: null, prompt: null };
  if (stateFromStores) {
    stateFromStores = !isPreviewingChanges;
  }
  obj.editEnabled = stateFromStores;
  let tmp12;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  obj.onPressTruncatedStatus = tmp12;
  const items3 = [, ];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp3);
  obj.style = items3;
  obj.emojiOnlyStyle = tmp3.emojiOnlyCustomStatusBubble;
  obj.placeholderText = labelResult;
  obj.prompt = ref.current;
  return closure_20(guildId(channelId[22]), obj);
}
function RemoveFriendIconButton(user) {
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    const obj = { location: newestAnalyticsLocation };
    obj.removeFriend(user.id, obj);
  }
  let obj = user(newestAnalyticsLocation[23]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[24])().newestAnalyticsLocation;
  const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[26]).useName(user);
  obj = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(newestAnalyticsLocation[28]).UserCheckIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(newestAnalyticsLocation[29]).intl;
  obj.accessibilityLabel = intl.string(user(newestAnalyticsLocation[29]).t.cvSt1J);
  obj.onPress = function onPress() {
    const obj = { userDisplayName, onConfirm: handleConfirm };
    obj.confirmRemoveFriend(obj);
  };
  return closure_20(user(newestAnalyticsLocation[27]).IconButton, obj);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    const obj = { user, guildId, channelId };
    obj.openLazy(asyncRequireImpl(13155, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj, "stack");
  }, items);
  let obj = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(channelId[32]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(channelId[29]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[29]).t.cvSt1J);
  obj.onPress = callback;
  return closure_20(user(channelId[27]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({ user, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = global);
    closure_0 = undefined;
    trackUserProfileAction = undefined;
    tmp2 = closure_2;
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = global);
    tmp = trackUserProfileAction;
    obj = trackUserProfileAction(closure_2[26]);
    userTag = obj.useUserTag(user);
    closure_0 = userTag;
    tmp4 = trackUserProfileAction(closure_2[33])(displayProfile);
    obj2 = trackUserProfileAction(closure_2[34]);
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
    obj3 = closure_0(tmp2[23]);
    trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
    items = [, ];
    items[0] = trackUserProfileAction;
    items[1] = userTag;
    callback = closure_4.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      ClipboardUtils.copy(userTag);
      const result = ToastUtils.presentUsernameCopied();
    }, items);
    tmp10 = jsx;
    obj = { user, guildId: null, displayName: null, pronouns: null, badges: null, style: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: null, pendingDisplayNameStyles: null };
    guildId1 = undefined;
    tmpResult = tmp(tmp2[37]);
    if (displayProfile != null) {
      guildId1 = displayProfile.guildId;
    }
    obj.guildId = guildId1;
    obj.displayName = tmp7;
    if (pronounsOverride == null) {
      pronouns = undefined;
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      pronounsOverride = pronouns;
    }
    obj.pronouns = pronounsOverride;
    if (badgesOverride == null) {
      badgesOverride = tmp4;
    }
    obj.badges = badgesOverride;
    obj.style = style;
    obj.badgeContainerBackground = badgeContainerBackground;
    tmp14 = undefined;
    if (!isPreviewingChanges) {
      tmp14 = callback;
    }
    obj.onPressDisplayName = tmp14;
    intl = tmp8(tmp2[29]).intl;
    obj.displayNameAccessibilityHint = intl.string(tmp8(tmp2[29]).t.y5MwJy);
    tmp15 = undefined;
    if (!isPreviewingChanges) {
      tmp15 = callback;
    }
    obj.onPressUserTag = tmp15;
    fn = undefined;
    if (!isPreviewingChanges) {
      fn = () => {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        ToastUtils.presentUserPronouns();
      };
    }
    obj.onPressPronouns = fn;
    obj.showBadgeToastOnPress = !isPreviewingChanges;
    obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
    return tmp10(tmpResult, obj);
  }
}
function EditSection(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(8275);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(9297)();
  closure_3 = trackUserProfileAction(9297)({ guild: stateFromStores });
  obj = { style: trackUserProfileAction(8325)().primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(8325)();
  obj = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  obj1 = { size: "sm", color: trackUserProfileAction(576).colors.WHITE };
  obj.icon = closure_20(guildId(10339).PencilIcon, obj1);
  if (null != stateFromStores) {
    const intl2 = tmp4(1114).intl;
    let stringResult = intl2.string(tmp4(1114).t.HmFaFB);
  } else {
    const intl = tmp4(1114).intl;
    stringResult = intl.string(tmp4(1114).t.s5vZlQ);
  }
  obj.text = stringResult;
  obj.onPress = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  };
  obj.primaryButton = closure_20(guildId(5026).Button, obj);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj2 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj3 = { size: "sm", color: tmp(576).colors.WHITE };
    obj2.icon = closure_20(tmp4(10339).PencilIcon, obj3);
    const intl3 = tmp4(1114).intl;
    obj2.text = intl3.string(tmp4(1114).t["PKQB/H"]);
    obj2.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = closure_20(tmp4(5026).Button, obj2);
  }
  obj.secondaryButton = tmp6Result;
  return closure_20(trackUserProfileAction(13089), obj);
}
function UserProfileWidgetsBoardContainer(isCurrentUser) {
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp3 = UserProfileSharedStylesDefault();
  const items = [tmp3.card, { backgroundColor: containerBackground }];
  const obj = { style: tmp3.profileContent, children: null };
  if (isCurrentUser) {
    isCurrentUser = closure_1_20(UserProfileWidgetsBoardEditNoticeDefault, {});
  }
  const items1 = [isCurrentUser, closure_1_20(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items })];
  obj.children = items1;
  return __initData(timestampProducer, obj);
}
function UserProfileActivityTabContainer(arg0) {
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  const items = [tmp.card, { backgroundColor: containerBackground }];
  const obj = { style: null, children: closure_1_20(UserProfileActivityTabDefault, { user, currentUser, guildId, channelId, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  obj.style = items1;
  return closure_1_20(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(8268).UserProfileSections;
const Constants = fn(7281);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_15, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_16 } = Constants);
let RelationshipTypes = fn(1074).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(7224).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default noop.memo(function UserProfileContent(user) {
  user = user.user;
  const channel = user.channel;
  const displayProfile = user.displayProfile;
  const showUserProfileActionSheet = user.showUserProfileActionSheet;
  ({ disableCalls, isPreviewingChanges } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  let isCurrentUser;
  let userProfileGameFriendApplicationIds;
  let guild_id;
  let name;
  let pendingBio;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  RelationshipTypes = undefined;
  let stateFromStoresArray;
  let hasCustomProfileTheme;
  let containerBackground;
  let stateFromStores1;
  let stateFromStores2;
  closure_23 = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  let boardTabIndex;
  let activityTabIndex;
  let wishlistTabIndex;
  c29 = undefined;
  let handlePageContentSize;
  let markAsDismissed;
  setActiveProfileTabSection = undefined;
  let restoreActiveIndex;
  let isVisible;
  let isVisible2;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let obj4;
  ({ disableMessage, disableStatus, location: _location, initialSection, scrollPosition } = user);
  const tmp3 = channel(displayProfile[16])();
  closure_7 = tmp3;
  const tmp4 = channel(displayProfile[47])(stateFromStoresArray);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(displayProfile[48])({ scrollPosition, bannerHeight: tmp4 }));
  let obj = user(displayProfile[23]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = user(displayProfile[17]);
  let items = [userProfileGameFriendApplicationIds];
  const stateFromStores = obj1.useStateFromStores(items, () => userProfileGameFriendApplicationIds.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  isCurrentUser = tmp9;
  let tmp6Result = tmp6(tmp2[17]);
  let items1 = [isCurrentUser];
  const stateFromStoresObject = tmp6Result.useStateFromStoresObject(items1, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  tmp6Result = tmp6(tmp2[50]);
  const incomingGameRelationshipsForUser = tmp6Result.useIncomingGameRelationshipsForUser(user.id);
  const tmp5 = channel(displayProfile[48])({ scrollPosition, bannerHeight: tmp4 });
  const isGameFriends = user(displayProfile[51]).useIsGameFriends(user.id);
  const tmp6Result1 = user(displayProfile[51]);
  obj = { userId: user.id };
  userProfileGameFriendApplicationIds = user(displayProfile[52]).useUserProfileGameFriendApplicationIds(obj);
  if (null != displayProfile) {
    const guildId = displayProfile.guildId;
    guild_id = guildId;
  } else if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmpResult = tmp(tmp2[34]);
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
  const tmp6Result2 = user(displayProfile[52]);
  const subscribeGuildMembers = user(displayProfile[53]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(displayProfile[54])(user.id);
  const tmp6Result3 = user(displayProfile[53]);
  const items3 = [guild_id];
  const stateFromStoresObject1 = user(displayProfile[17]).useStateFromStoresObject(items3, () => guild_id.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result4 = user(displayProfile[17]);
  obj = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = user(displayProfile[55]).getPendingAvatarSrc(obj);
  const tmp20 = channel(displayProfile[33])(displayProfile, pendingLegacyUsernameDisabled);
  RelationshipTypes = tmp20;
  const tmp6Result5 = user(displayProfile[55]);
  const items4 = [closure_7];
  const items5 = [user.id];
  stateFromStoresArray = user(displayProfile[17]).useStateFromStoresArray(items4, () => BadgeDirectoryStore.getBadges(user.id), items5);
  const items6 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = isPreviewingChanges.useMemo(() => {
    const obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_17, stateFromStoresArray, obj);
  }, items6);
  obj1 = { user, displayProfile, pendingThemeColors: null };
  let tmp24;
  tmpResult = tmp(tmp2[57]);
  if (isPreviewingChanges) {
    tmp24 = pendingThemeColors;
  }
  obj1.pendingThemeColors = tmp24;
  const tmpResult1Result = tmpResult(obj1);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp26;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result6 = user(displayProfile[17]);
  const userProfileColors = user(displayProfile[58]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp6Result7 = user(displayProfile[58]);
  const ref1 = obj8.useRef(null);
  const ref = obj8.useRef(null);
  const items7 = [name];
  stateFromStores1 = user(displayProfile[17]).useStateFromStores(items7, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result8 = user(displayProfile[17]);
  const fetchWishlist = user(displayProfile[59]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj2 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result9 = user(displayProfile[59]);
  const items8 = [trackUserProfileAction];
  const items9 = [stateFromStores1];
  stateFromStores2 = user(displayProfile[17]).useStateFromStores(items8, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items9);
  const items10 = [stateFromStores2, id === user.id];
  let tmp33 = tmp9;
  if (id !== user.id) {
    let tmp34 = null != stateFromStores2;
    if (tmp34) {
      tmp34 = arr13.length > 0;
    }
    tmp33 = tmp34;
  }
  closure_23 = tmp33;
  const tmp6Result10 = user(displayProfile[17]);
  const tmp35 = user(displayProfile[61]).useDisplayableBoardWidgets(user.id).length > 0;
  closure_24 = tmp35;
  const tmp6Result11 = user(displayProfile[61]);
  const tmp36 = user(displayProfile[62]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_25 = tmp36;
  const tmp6Result12 = user(displayProfile[62]);
  const profileTabIndices = user(displayProfile[63]).useProfileTabIndices(tmp35, tmp36, tmp33);
  boardTabIndex = profileTabIndices.boardTabIndex;
  activityTabIndex = profileTabIndices.activityTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp6Result13 = user(displayProfile[63]);
  [tmp39, c29] = showUserProfileActionSheet(obj8.useState(0), 2);
  const callback = obj8.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp38 = showUserProfileActionSheet(obj8.useState(0), 2);
  const pageHeights = user(displayProfile[64]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const tmp6Result14 = user(displayProfile[64]);
  const wishlistViewerCoachmark = user(displayProfile[65]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp33 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items11 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj8.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
    const obj = { action: "PRESS_SECTION", section };
    tmp2 = section === UserProfileSections.WISHLIST && isVisible;
  }, items11);
  const tmp6Result15 = user(displayProfile[65]);
  const profileSectionTabs = user(displayProfile[63]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp45;
  isVisible2 = tmp46;
  const items12 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj8.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items12);
  const items13 = [navigateToShop];
  callback3 = obj8.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items13);
  const items14 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guild_id, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj8.useCallback(() => {
    if (null != user) {
      if (null != stateFromStores) {
        const items = [closure_7.card, ];
        let obj = { backgroundColor: containerBackground };
        items[1] = obj;
        obj = { style: null, children: null };
        const items1 = [, ];
        ({ cards: arr3[0], profileContent: arr3[1] } = closure_7);
        obj.style = items1;
        let _private;
        if (displayProfile != null) {
          _private = displayProfile.private;
        }
        if (_private) {
          obj = { username: name, containerBackground };
          _private = closure_2_20(UserProfilePrivateInfoBannerDefault, obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = user.isProvisional;
        if (isProvisional) {
          const obj1 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = closure_2_20(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj1);
        }
        items2[1] = isProvisional;
        let tmp10 = user.id === stateFromStores.id;
        if (tmp10) {
          tmp10 = !isPreviewingChanges;
        }
        if (tmp10) {
          const obj2 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = closure_2_20(UserProfileDismissibleUpsellsDefault, obj2);
        }
        items2[2] = tmp10;
        const obj3 = { user, currentUser: stateFromStores, guildId: guild_id, style: items };
        items2[3] = closure_2_20(UserProfileActivityDefault, obj3);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          obj4 = { userId: user.id, applicationIds: tmp22 };
          tmp18Result = closure_2_20(UserProfileGameFriendsCardDefault, obj4);
        }
        items2[4] = tmp18Result;
        const obj5 = { userId: user.id, displayProfile, pendingBio: null };
        let tmp26;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        obj5.pendingBio = tmp26;
        items2[5] = closure_2_20(UserProfileAboutMeCardDefault, obj5);
        tmp18Result = null != tmp21;
        if (tmp18Result) {
          const obj6 = { userId: user.id, guildId: tmp21 };
          tmp18Result = closure_2_20(UserProfileRolesCardDefault, obj6);
        }
        items2[6] = tmp18Result;
        guild_id = undefined;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        let tmp18Result1 = null != guild_id;
        if (tmp18Result1) {
          const obj7 = { user, currentUser: stateFromStores, guildId: null, channelId: null, showUserProfile: null };
          ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
          obj7.showUserProfile = showUserProfileActionSheet;
          tmp18Result1 = closure_2_20(UserProfileModeratorActionsDefault, obj7);
        }
        items2[7] = tmp18Result1;
        const obj8 = { userId: user.id };
        items2[8] = closure_2_20(UserProfileConnections.UserProfileAccountConnectionsCard, obj8);
        const obj9 = { userId: user.id };
        items2[9] = closure_2_20(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj9);
        let tmp18Result2 = !isPreviewingChanges;
        if (!isPreviewingChanges) {
          const obj10 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result2 = closure_2_20(UserProfileNoteDefault, obj10);
        }
        items2[10] = tmp18Result2;
        obj.children = items2;
        return __initData(timestampProducer, obj);
      }
    }
    return null;
  }, items14);
  const items15 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === pendingBio.WISHLIST, user.id, id === user.id];
  callback5 = obj8.useCallback(() => {
    let obj = { style: closure_7.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = closure_2_20(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp9 = closure_2_20;
    } else {
      obj = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp9 = closure_2_20;
      tmp10 = closure_2_20(UserProfileWishlistGridDefault, obj);
    }
    const items = [tmp10, ];
    let tmp9Result = closure_10;
    if (closure_10) {
      obj = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj);
    }
    items[1] = tmp9Result;
    obj.children = items;
    return __initData(timestampProducer, obj);
  }, items15);
  const items16 = [handlePageContentSize, callback4, callback5, tmp35, tmp36, tmp33, boardTabIndex, activityTabIndex, wishlistTabIndex, user, stateFromStores, guild_id, , , , ];
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  items16[12] = id2;
  items16[13] = activeProfileTabSection === pendingBio.WIDGETS;
  items16[14] = id === user.id;
  items16[15] = containerBackground;
  const memo2 = obj8.useMemo(() => {
    let obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    obj.page = closure_2_20(hasOwnProperty, obj);
    const items = [obj];
    if (closure_24) {
      obj = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.laViwx);
      const obj1 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj2 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      obj1.children = closure_2_20(UserProfileWidgetsBoardContainer, obj2);
      obj.page = closure_2_20(hasOwnProperty, obj1, boardTabIndex);
      items.push(obj);
    }
    let tmp12 = closure_25;
    if (closure_25) {
      tmp12 = null != stateFromStores;
    }
    if (tmp12) {
      const obj3 = { id: "activity", label: null, page: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.chq59f);
      obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj5 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: null, containerBackground: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj5.channelId = id;
      obj5.containerBackground = containerBackground;
      obj4.children = closure_2_20(UserProfileActivityTabContainer, obj5);
      obj3.page = closure_2_20(hasOwnProperty, obj4, activityTabIndex);
      items.push(obj3);
    }
    if (closure_23) {
      const obj6 = { id: "wishlist", label: null, page: null };
      const intl4 = util.intl;
      obj6.label = intl4.string(util.t["7lZ31J"]);
      const obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(wishlistTabIndex, arg0, arg1);
          },
        children: callback5()
      };
      obj6.page = closure_2_20(hasOwnProperty, obj7, wishlistTabIndex);
      items.push(obj6);
    }
    return items;
  }, items16);
  const tmp6Result16 = user(displayProfile[63]);
  const tmp6Result17 = user(displayProfile[78]);
  segmentedControlState = tmp6Result17.useSegmentedControlState({ pageWidth: tmp39, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[42]).space.PX_24, items: memo2, onPageChange: handleTabChange });
  let obj3 = { pageWidth: tmp39, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[42]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  const pagerFillHeight = user(displayProfile[64]).usePagerFillHeight();
  const items17 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj8.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items17);
  const tmp6Result18 = user(displayProfile[64]);
  const items18 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = user(displayProfile[64]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj4 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp99);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp99).OpenableUserProfileAvatar;
      }
      let obj5 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null, privateBanner: null };
      let tmp61;
      if (isPreviewingChanges) {
        tmp61 = pendingBanner;
      }
      obj5.pendingBanner = tmp61;
      let tmp62;
      if (isPreviewingChanges) {
        tmp62 = pendingAvatarSrc;
      }
      obj5.pendingAvatarSrc = tmp62;
      let tmp63;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp63 = pendingAccentColor;
        }
      }
      obj5.pendingAccentColor = tmp63;
      let tmp64;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp64 = pendingThemeColors;
        }
      }
      obj5.pendingThemeColors = tmp64;
      obj5.disableInteraction = isPreviewingChanges;
      obj5.bannerAnimatedStyle = bannerAnimatedStyle;
      obj5.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj5.blurAnimatedProps = blurAnimatedProps;
      obj5.showBlur = showBlur;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp59Result;
      if (true === _private) {
        let obj6 = { primaryColor };
        tmp59Result = tmp59(tmp(tmp2[81]), obj6);
      }
      obj5.privateBanner = tmp59Result;
      const items19 = [containerBackground(tmp(tmp2[80]), obj5), , ];
      let tmp57Result = !isPreviewingChanges;
      if (!isPreviewingChanges) {
        const items20 = [tmp3.bannerButtons, , ];
        let _private1;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        let obj7 = { style: null, children: null };
        items20[1] = _private1;
        items20[2] = bannerAnimatedStyle;
        obj7.style = items20;
        let tmp69 = null;
        if (null != stateFromStores) {
          tmp69 = null;
          if (user.id !== stateFromStores.id) {
            tmp69 = null;
            if (!user.bot) {
              if (relationshipType === RelationshipTypes.FRIEND) {
                obj8 = { user };
                tmp59Result = tmp59(closure_24, obj8);
              } else {
                tmp59Result = null;
                if (isGameFriends) {
                  let obj9 = { user };
                  tmp59Result = tmp59(closure_25, obj9);
                }
              }
            }
          }
        }
        const items21 = [tmp69, ];
        let obj10 = { user, currentUser: stateFromStores, displayProfile, channel };
        items21[1] = tmp59(tmp(tmp2[83]), obj10);
        obj7.children = items21;
        tmp57Result = tmp57(tmp(tmp2[82]).View, obj7);
      }
      items19[1] = tmp57Result;
      const obj11 = { style: contentAnimatedStyle, children: null };
      const obj12 = { user, guildId: guild_id, disableStatus, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      let tmp75;
      if (isPreviewingChanges) {
        tmp75 = pendingAvatarSrc;
      }
      obj12.pendingAvatarSrc = tmp75;
      let tmp76;
      if (isPreviewingChanges) {
        tmp76 = pendingAvatarDecoration;
      }
      obj12.pendingAvatarDecoration = tmp76;
      obj12.backgroundColor = avatarBackground;
      const obj13 = { backgroundColor: statusBackground };
      obj12.statusStyle = obj13;
      const items22 = [containerBackground(OpenableUserProfileAvatar, obj12), ];
      const items23 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        let num2 = 0;
        if (null == tmp17) {
          num2 = pendingBadgeHiddenBadges;
        }
      } else {
        num2 = 0;
      }
      const obj14 = { style: null, children: null };
      const obj15 = { paddingTop: num2, paddingBottom: channel(displayProfile[49])().bottom + pendingBadgeDisplayOrder };
      items23[1] = obj15;
      obj14.style = items23;
      const obj16 = { customStatusActivity: tmp17, user, guildId: guild_id, channelId: null, hasCustomProfileTheme: null, showUserProfileActionSheet: null, isPreviewingChanges: null, bubbleRef: null };
      let id3;
      if (channel != null) {
        id3 = channel.id;
      }
      obj16.channelId = id3;
      obj16.hasCustomProfileTheme = tmp26;
      obj16.showUserProfileActionSheet = showUserProfileActionSheet;
      obj16.isPreviewingChanges = isPreviewingChanges;
      obj16.bubbleRef = ref;
      const items24 = [containerBackground(closure_23, obj16), , ];
      tmp57Result = null;
      if (null != stateFromStores) {
        const obj17 = { style: null, children: null };
        const items25 = [, ];
        ({ primaryInfo: arr29[0], profileContent: arr29[1] } = tmp3);
        obj17.style = items25;
        const obj18 = { user, channelId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null };
        let id4;
        if (channel != null) {
          id4 = channel.id;
        }
        obj18.channelId = id4;
        obj18.displayProfile = displayProfile;
        let tmp84;
        if (isPreviewingChanges) {
          tmp84 = pendingGlobalName;
        }
        obj18.displayNameOverride = tmp84;
        let tmp85;
        if (isPreviewingChanges) {
          tmp85 = pendingPronouns;
        }
        obj18.pronounsOverride = tmp85;
        let tmp86;
        if (isPreviewingChanges) {
          tmp86 = memo1;
        }
        obj18.badgesOverride = tmp86;
        let tmp87;
        if (isPreviewingChanges) {
          tmp87 = pendingDisplayNameStyles;
        }
        obj18.pendingDisplayNameStyles = tmp87;
        obj18.badgeContainerBackground = containerBackground;
        obj18.isPreviewingChanges = isPreviewingChanges;
        const items26 = [tmp59(boardTabIndex, obj18), , , , , , ];
        let tmp59Result1 = user.id !== stateFromStores.id;
        if (tmp59Result1) {
          const obj19 = { user, guildId: guild_id };
          tmp59Result1 = tmp59(tmp(tmp2[84]), obj19);
        }
        items26[1] = tmp59Result1;
        let tmp59Result2 = relationshipType === RelationshipTypes.PENDING_INCOMING;
        if (tmp59Result2) {
          const obj20 = { user, channelId: null, guildId: null, applicationId: null, style: null, showUserProfile: null };
          let id5;
          if (channel != null) {
            id5 = channel.id;
          }
          obj20.channelId = id5;
          obj20.guildId = guild_id;
          obj20.applicationId = originApplicationId;
          obj20.style = obj4;
          obj20.showUserProfile = showUserProfileActionSheet;
          tmp59Result2 = tmp59(tmp(tmp2[85]), obj20);
          const tmpResult2 = tmp(tmp2[85]);
        }
        items26[2] = tmp59Result2;
        items26[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: null, guildId: null, style: null, showUserProfile: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guild_id;
          obj.style = obj4;
          obj.showUserProfile = showUserProfileActionSheet;
          return closure_2_20(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
        });
        const obj21 = { user, style: obj4 };
        items26[4] = tmp59(tmp(tmp2[86]), obj21);
        let tmp59Result3 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp59Result3) {
          const obj22 = { guildId: guild_id };
          tmp59Result3 = tmp59(activityTabIndex, obj22);
        }
        items26[5] = tmp59Result3;
        let tmp59Result4 = user.id !== stateFromStores.id;
        if (tmp59Result4) {
          const obj23 = { user, disableCalls: null, disableMessage: null, location: null, hasCustomProfileTheme: null, style: null };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp89.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj23.disableCalls = disableCalls;
          obj23.disableMessage = disableMessage;
          obj23.location = _location;
          obj23.hasCustomProfileTheme = tmp26;
          obj23.style = tmp3.primaryButtons;
          tmp59Result4 = tmp59(tmp(tmp2[87]), obj23);
          const tmpResult3 = tmp(tmp2[87]);
        }
        items26[6] = tmp59Result4;
        obj17.children = items26;
        tmp57Result = tmp57(tmp77, obj17);
        tmp89 = RelationshipTypes;
      }
      items24[1] = tmp57Result;
      if (!tmp33) {
        if (!tmp35) {
          if (!tmp36) {
            let callback4Result = callback4();
          }
          const obj24 = { children: null };
          items24[2] = callback4Result;
          obj14.children = items24;
          items22[1] = tmp57(tmp77, obj14);
          obj11.children = items22;
          items19[2] = tmp57(tmp(tmp2[82]).View, obj11);
          obj24.children = items19;
          return tmp57(tmp58, obj24);
        }
      }
      const obj25 = { onLayout: callback, children: null };
      const obj26 = { style: tmp3.profileTablist, children: null };
      const obj27 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp26) {
        str = "overlay";
      }
      const obj28 = { children: null };
      obj27.variant = str;
      const items27 = [containerBackground(tmp6(tmp2[89]).Tabs, obj27), ];
      const obj29 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${Math.max(wishlistTabIndex, 0) / arr20.length * 100}%`;
      obj29.style = rect;
      items27[1] = containerBackground(navigateToShop, obj29);
      obj26.children = items27;
      const items28 = [stateFromStores1(navigateToShop, obj26), , ];
      const obj30 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: null };
      const obj31 = { state: segmentedControlState };
      obj30.children = containerBackground(tmp6(tmp2[90]).SegmentedControlPages, obj31);
      items28[1] = containerBackground(tmp(tmp2[82]).View, obj30);
      const obj32 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp56 };
      items28[2] = containerBackground(tmp(tmp2[91]), obj32);
      obj28.children = items28;
      obj25.children = stateFromStores1(tmp6(tmp2[88]).LayerScope, obj28);
      callback4Result = tmp59(tmp77, obj25);
      tmp58 = stateFromStores2;
      const tmpResult1 = tmp(tmp2[80]);
    }
  }
  return null;
});
export { PrimaryInfo };