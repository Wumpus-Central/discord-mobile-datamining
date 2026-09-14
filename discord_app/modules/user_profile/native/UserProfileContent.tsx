// === Module 13191: UserProfileContent ===

// Module 13191 (UserProfileContent)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4334 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import UserProfileRolesCardDefault from "UserProfileRolesCard" /* 7288 */;
import ClipboardUtils from "ClipboardUtils" /* 7292 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8357 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8797 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9171 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 9638 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11341 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12750 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 12757 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13129 */;
import UserProfileModeratorActionsDefault from "UserProfileModeratorActions" /* 13179 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13182 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13195 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13196 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13204 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 13210 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 13211 */;
import UserProfileGameFriendsCardDefault from "UserProfileGameFriendsCard" /* 13216 */;
import UserProfileConnections from "UserProfileConnections" /* 13217 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13222 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13228 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 13252 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8309 */;
import WishlistStore from "WishlistStore" /* 8903 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;
import UserStore from "UserStore" /* 1371 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8277 */;
import UserProfileStore from "UserProfileStore" /* 7723 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function CustomStatusBubble(guildId) {
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[16])();
  const items = [UserStore];
  const items1 = [user];
  let stateFromStores = user(channelId[17]).useStateFromStores(items, () => {
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11284, dependencyMap.paths), "UserProfileCustomStatusActionSheet", { user, guildId, channelId }, "stack");
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
  const obj2 = { ref: bubbleRef, customStatusActivity, hasCustomProfileTheme, editEnabled: null, onPressTruncatedStatus: null, style: null, emojiOnlyStyle: null, placeholderText: null, prompt: null };
  const obj = user(channelId[17]);
  if (stateFromStores) {
    stateFromStores = !isPreviewingChanges;
  }
  obj2.editEnabled = stateFromStores;
  let tmp12;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  obj2.onPressTruncatedStatus = tmp12;
  const items3 = [, ];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp3);
  obj2.style = items3;
  obj2.emojiOnlyStyle = tmp3.emojiOnlyCustomStatusBubble;
  obj2.placeholderText = labelResult;
  obj2.prompt = ref.current;
  return closure_20(guildId(channelId[22]), obj2);
}
function RemoveFriendIconButton(user) {
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
  }
  const trackUserProfileAction = user(newestAnalyticsLocation[23]).useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[24])().newestAnalyticsLocation;
  const obj = user(newestAnalyticsLocation[23]);
  const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[26]).useName(user);
  const obj3 = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(newestAnalyticsLocation[28]).UserCheckIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(newestAnalyticsLocation[29]).intl;
  obj3.accessibilityLabel = intl.string(user(newestAnalyticsLocation[29]).t.cvSt1J);
  obj3.onPress = function onPress() {
    UserProfileAlertUtils.confirmRemoveFriend({ userDisplayName, onConfirm: handleConfirm });
  };
  return closure_20(user(newestAnalyticsLocation[27]).IconButton, obj3);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13193, dependencyMap.paths), "UserProfileGameFriendActionSheet", { user, guildId, channelId }, "stack");
  }, items);
  const obj = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(channelId[32]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
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
    obj1 = { user, guildId: null, displayName: null, pronouns: null, badges: null, style: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: null, pendingDisplayNameStyles: null };
    guildId1 = undefined;
    tmpResult = tmp(tmp2[37]);
    if (displayProfile != null) {
      guildId1 = displayProfile.guildId;
    }
    obj1.guildId = guildId1;
    obj1.displayName = tmp7;
    if (pronounsOverride == null) {
      pronouns = undefined;
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      pronounsOverride = pronouns;
    }
    obj1.pronouns = pronounsOverride;
    if (badgesOverride == null) {
      badgesOverride = tmp4;
    }
    obj1.badges = badgesOverride;
    obj1.style = style;
    obj1.badgeContainerBackground = badgeContainerBackground;
    tmp14 = undefined;
    if (!isPreviewingChanges) {
      tmp14 = callback;
    }
    obj1.onPressDisplayName = tmp14;
    intl = tmp8(tmp2[29]).intl;
    obj1.displayNameAccessibilityHint = intl.string(tmp8(tmp2[29]).t.y5MwJy);
    tmp15 = undefined;
    if (!isPreviewingChanges) {
      tmp15 = callback;
    }
    obj1.onPressUserTag = tmp15;
    fn = undefined;
    if (!isPreviewingChanges) {
      fn = () => {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        ToastUtils.presentUserPronouns();
      };
    }
    obj1.onPressPronouns = fn;
    obj1.showBadgeToastOnPress = !isPreviewingChanges;
    obj1.pendingDisplayNameStyles = pendingDisplayNameStyles;
    return tmp10(tmpResult, obj1);
  }
}
function EditSection(guildId) {
  guildId = guildId.guildId;
  let trackUserProfileAction;
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(8357)();
  trackUserProfileAction = guildId(8307).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = guildId(8307);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(9336)();
  closure_3 = trackUserProfileAction(9336)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const obj2 = guildId(504);
  const obj4 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmp7 = trackUserProfileAction(13127);
  obj4.icon = closure_20(guildId(10379).PencilIcon, { size: "sm", color: trackUserProfileAction(576).colors.WHITE });
  if (null != stateFromStores) {
    const intl2 = tmp4(1114).intl;
    let stringResult = intl2.string(tmp4(1114).t.HmFaFB);
  } else {
    const intl = tmp4(1114).intl;
    stringResult = intl.string(tmp4(1114).t.s5vZlQ);
  }
  obj4.text = stringResult;
  obj4.onPress = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  };
  obj3.primaryButton = closure_20(guildId(5056).Button, obj4);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp(576).colors.WHITE };
    obj6.icon = closure_20(tmp4(10379).PencilIcon, obj7);
    const intl3 = tmp4(1114).intl;
    obj6.text = intl3.string(tmp4(1114).t["PKQB/H"]);
    obj6.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = closure_20(tmp4(5056).Button, obj6);
  }
  obj3.secondaryButton = tmp6Result;
  return closure_20(tmp7, obj3);
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
const UserProfileSections = fn(8300).UserProfileSections;
const Constants = fn(7311);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_15, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_16 } = Constants);
let RelationshipTypes = fn(1074).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(7254).ACTION_SHEET_MAX_WIDTH;
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
  let obj8;
  ({ disableMessage, disableStatus, location: _location, initialSection, scrollPosition } = user);
  const tmp3 = channel(displayProfile[16])();
  closure_7 = tmp3;
  const tmp4 = channel(displayProfile[47])(stateFromStoresArray);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(displayProfile[48])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(displayProfile[48])({ scrollPosition, bannerHeight: tmp4 });
  const trackUserProfileAction = user(displayProfile[23]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(displayProfile[23]);
  let items = [userProfileGameFriendApplicationIds];
  const stateFromStores = user(displayProfile[17]).useStateFromStores(items, () => userProfileGameFriendApplicationIds.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  isCurrentUser = tmp9;
  let obj2 = user(displayProfile[17]);
  let items1 = [isCurrentUser];
  const stateFromStoresObject = user(displayProfile[17]).useStateFromStoresObject(items1, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result = user(displayProfile[17]);
  const incomingGameRelationshipsForUser = user(displayProfile[50]).useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result21 = user(displayProfile[50]);
  const isGameFriends = user(displayProfile[51]).useIsGameFriends(user.id);
  const tmp6Result22 = user(displayProfile[51]);
  userProfileGameFriendApplicationIds = user(displayProfile[52]).useUserProfileGameFriendApplicationIds({ userId: user.id });
  if (null != displayProfile) {
    const guildId = displayProfile.guildId;
    guild_id = guildId;
  } else if (channel != null) {
    guild_id = channel.guild_id;
  }
  let obj3 = { userId: user.id };
  const tmp6Result23 = user(displayProfile[52]);
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  name = channel(displayProfile[34]).useName(guild_id, id1, user);
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
  const tmpResult = channel(displayProfile[34]);
  const subscribeGuildMembers = user(displayProfile[53]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(displayProfile[54])(user.id);
  const tmp6Result24 = user(displayProfile[53]);
  const items3 = [guild_id];
  const stateFromStoresObject1 = user(displayProfile[17]).useStateFromStoresObject(items3, () => guild_id.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result25 = user(displayProfile[17]);
  const pendingAvatarSrc = user(displayProfile[55]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp20 = channel(displayProfile[33])(displayProfile, pendingLegacyUsernameDisabled);
  RelationshipTypes = tmp20;
  let obj4 = { userId: user.id, image: pendingAvatar };
  const tmp6Result26 = user(displayProfile[55]);
  const items4 = [closure_7];
  const items5 = [user.id];
  stateFromStoresArray = user(displayProfile[17]).useStateFromStoresArray(items4, () => BadgeDirectoryStore.getBadges(user.id), items5);
  const items6 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = isPreviewingChanges.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_17, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items6);
  let obj5 = { user, displayProfile, pendingThemeColors: null };
  let tmp24;
  const tmp6Result27 = user(displayProfile[17]);
  if (isPreviewingChanges) {
    tmp24 = pendingThemeColors;
  }
  obj5.pendingThemeColors = tmp24;
  const tmpResult1Result = channel(displayProfile[57])(obj5);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp26;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult5 = channel(displayProfile[57]);
  const userProfileColors = user(displayProfile[58]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp6Result28 = user(displayProfile[58]);
  const ref1 = isPreviewingChanges.useRef(null);
  const ref = isPreviewingChanges.useRef(null);
  const items7 = [name];
  stateFromStores1 = user(displayProfile[17]).useStateFromStores(items7, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result29 = user(displayProfile[17]);
  const fetchWishlist = user(displayProfile[59]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj6 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result30 = user(displayProfile[59]);
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
  const tmp6Result31 = user(displayProfile[17]);
  const tmp35 = user(displayProfile[61]).useDisplayableBoardWidgets(user.id).length > 0;
  closure_24 = tmp35;
  const tmp6Result32 = user(displayProfile[61]);
  const tmp36 = user(displayProfile[62]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_25 = tmp36;
  const tmp6Result33 = user(displayProfile[62]);
  const profileTabIndices = user(displayProfile[63]).useProfileTabIndices(tmp35, tmp36, tmp33);
  boardTabIndex = profileTabIndices.boardTabIndex;
  activityTabIndex = profileTabIndices.activityTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp6Result34 = user(displayProfile[63]);
  [tmp39, c29] = showUserProfileActionSheet(isPreviewingChanges.useState(0), 2);
  const callback = obj9.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp38 = showUserProfileActionSheet(isPreviewingChanges.useState(0), 2);
  const pageHeights = user(displayProfile[64]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const tmp6Result35 = user(displayProfile[64]);
  const wishlistViewerCoachmark = user(displayProfile[65]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp33 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items11 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj9.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
    const obj = { action: "PRESS_SECTION", section };
    tmp2 = section === UserProfileSections.WISHLIST && isVisible;
  }, items11);
  const tmp6Result36 = user(displayProfile[65]);
  const profileSectionTabs = user(displayProfile[63]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp45;
  isVisible2 = tmp46;
  const items12 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj9.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items12);
  const items13 = [navigateToShop];
  callback3 = obj9.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items13);
  const items14 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guild_id, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj9.useCallback(() => {
    if (null != user) {
      if (null != stateFromStores) {
        const items = [closure_7.card, ];
        const obj2 = { backgroundColor: containerBackground };
        items[1] = obj2;
        const obj3 = { style: null, children: null };
        const items1 = [, ];
        ({ cards: arr3[0], profileContent: arr3[1] } = closure_7);
        obj3.style = items1;
        let _private;
        if (displayProfile != null) {
          _private = displayProfile.private;
        }
        if (_private) {
          const obj = { username: name, containerBackground };
          _private = closure_2_20(UserProfilePrivateInfoBannerDefault, obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = user.isProvisional;
        if (isProvisional) {
          const obj4 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = closure_2_20(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj4);
        }
        items2[1] = isProvisional;
        let tmp10 = user.id === stateFromStores.id;
        if (tmp10) {
          tmp10 = !isPreviewingChanges;
        }
        if (tmp10) {
          const obj5 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = closure_2_20(UserProfileDismissibleUpsellsDefault, obj5);
        }
        items2[2] = tmp10;
        const obj6 = { user, currentUser: stateFromStores, guildId: guild_id, style: items };
        items2[3] = closure_2_20(UserProfileActivityDefault, obj6);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          const obj7 = { userId: user.id, applicationIds: tmp22 };
          tmp18Result = closure_2_20(UserProfileGameFriendsCardDefault, obj7);
        }
        items2[4] = tmp18Result;
        const obj9 = { userId: user.id, displayProfile, pendingBio: null };
        let tmp26;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        obj9.pendingBio = tmp26;
        items2[5] = closure_2_20(UserProfileAboutMeCardDefault, obj9);
        let tmp18Result4 = null != tmp21;
        if (tmp18Result4) {
          const obj10 = { userId: user.id, guildId: tmp21 };
          tmp18Result4 = closure_2_20(UserProfileRolesCardDefault, obj10);
        }
        items2[6] = tmp18Result4;
        guild_id = undefined;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        let tmp18Result5 = null != guild_id;
        if (tmp18Result5) {
          const obj11 = { user, currentUser: stateFromStores, guildId: null, channelId: null, showUserProfile: null };
          ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
          obj11.showUserProfile = showUserProfileActionSheet;
          tmp18Result5 = closure_2_20(UserProfileModeratorActionsDefault, obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = closure_2_20(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = closure_2_20(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !isPreviewingChanges;
        if (!isPreviewingChanges) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = closure_2_20(UserProfileNoteDefault, obj25);
        }
        items2[10] = tmp18Result6;
        obj3.children = items2;
        return __initData(timestampProducer, obj3);
      }
    }
    return null;
  }, items14);
  const items15 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === pendingBio.WISHLIST, user.id, id === user.id];
  callback5 = obj9.useCallback(() => {
    const obj = { style: closure_7.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = closure_2_20(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp9 = closure_2_20;
    } else {
      const obj2 = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp9 = closure_2_20;
      tmp10 = closure_2_20(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp10, ];
    let tmp9Result = closure_10;
    if (closure_10) {
      const obj3 = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
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
  const memo2 = obj9.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = closure_2_20(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    });
    const items = [obj];
    if (closure_24) {
      const obj3 = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.laViwx);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj5 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      obj4.children = closure_2_20(UserProfileWidgetsBoardContainer, obj5);
      obj3.page = closure_2_20(hasOwnProperty, obj4, boardTabIndex);
      items.push(obj3);
    }
    let tmp12 = closure_25;
    if (closure_25) {
      tmp12 = null != stateFromStores;
    }
    if (tmp12) {
      const obj6 = { id: "activity", label: null, page: null };
      const intl3 = util.intl;
      obj6.label = intl3.string(util.t.chq59f);
      const obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: null
      };
      obj8 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: null, containerBackground: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj8.channelId = id;
      obj8.containerBackground = containerBackground;
      obj7.children = closure_2_20(UserProfileActivityTabContainer, obj8);
      obj6.page = closure_2_20(hasOwnProperty, obj7, activityTabIndex);
      items.push(obj6);
    }
    if (closure_23) {
      const obj9 = { id: "wishlist", label: null, page: null };
      const intl4 = util.intl;
      obj9.label = intl4.string(util.t["7lZ31J"]);
      const obj10 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(wishlistTabIndex, arg0, arg1);
          },
        children: callback5()
      };
      obj9.page = closure_2_20(hasOwnProperty, obj10, wishlistTabIndex);
      items.push(obj9);
    }
    return items;
  }, items16);
  const tmp6Result37 = user(displayProfile[63]);
  const tmp6Result38 = user(displayProfile[78]);
  segmentedControlState = tmp6Result38.useSegmentedControlState({ pageWidth: tmp39, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[42]).space.PX_24, items: memo2, onPageChange: handleTabChange });
  let obj7 = { pageWidth: tmp39, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[42]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  const pagerFillHeight = user(displayProfile[64]).usePagerFillHeight();
  const items17 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj9.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items17);
  const tmp6Result39 = user(displayProfile[64]);
  const items18 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = user(displayProfile[64]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj8 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp99);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp99).OpenableUserProfileAvatar;
      }
      let obj10 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null, privateBanner: null };
      let tmp61;
      if (isPreviewingChanges) {
        tmp61 = pendingBanner;
      }
      obj10.pendingBanner = tmp61;
      let tmp62;
      if (isPreviewingChanges) {
        tmp62 = pendingAvatarSrc;
      }
      obj10.pendingAvatarSrc = tmp62;
      let tmp63;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp63 = pendingAccentColor;
        }
      }
      obj10.pendingAccentColor = tmp63;
      let tmp64;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp64 = pendingThemeColors;
        }
      }
      obj10.pendingThemeColors = tmp64;
      obj10.disableInteraction = isPreviewingChanges;
      obj10.bannerAnimatedStyle = bannerAnimatedStyle;
      obj10.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj10.blurAnimatedProps = blurAnimatedProps;
      obj10.showBlur = showBlur;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp59Result;
      if (true === _private) {
        let obj11 = { primaryColor };
        tmp59Result = tmp59(tmp(tmp2[81]), obj11);
      }
      obj10.privateBanner = tmp59Result;
      const items19 = [containerBackground(tmp(tmp2[80]), obj10), , ];
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
        let obj12 = { style: null, children: null };
        items20[1] = _private1;
        items20[2] = bannerAnimatedStyle;
        obj12.style = items20;
        let tmp69 = null;
        if (null != stateFromStores) {
          tmp69 = null;
          if (user.id !== stateFromStores.id) {
            tmp69 = null;
            if (!user.bot) {
              if (relationshipType === RelationshipTypes.FRIEND) {
                let obj13 = { user };
                let tmp59Result6 = tmp59(closure_24, obj13);
              } else {
                tmp59Result6 = null;
                if (isGameFriends) {
                  const obj14 = { user };
                  tmp59Result6 = tmp59(closure_25, obj14);
                }
              }
            }
          }
        }
        const items21 = [tmp69, ];
        const obj15 = { user, currentUser: stateFromStores, displayProfile, channel };
        items21[1] = tmp59(tmp(tmp2[83]), obj15);
        obj12.children = items21;
        tmp57Result = tmp57(tmp(tmp2[82]).View, obj12);
      }
      items19[1] = tmp57Result;
      const obj16 = { style: contentAnimatedStyle, children: null };
      const obj17 = { user, guildId: guild_id, disableStatus, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      let tmp75;
      if (isPreviewingChanges) {
        tmp75 = pendingAvatarSrc;
      }
      obj17.pendingAvatarSrc = tmp75;
      let tmp76;
      if (isPreviewingChanges) {
        tmp76 = pendingAvatarDecoration;
      }
      obj17.pendingAvatarDecoration = tmp76;
      obj17.backgroundColor = avatarBackground;
      const obj18 = { backgroundColor: statusBackground };
      obj17.statusStyle = obj18;
      const items22 = [containerBackground(OpenableUserProfileAvatar, obj17), ];
      const items23 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        let num2 = 0;
        if (null == tmp17) {
          num2 = pendingBadgeHiddenBadges;
        }
      } else {
        num2 = 0;
      }
      const obj19 = { style: null, children: null };
      const obj20 = { paddingTop: num2, paddingBottom: channel(displayProfile[49])().bottom + pendingBadgeDisplayOrder };
      items23[1] = obj20;
      obj19.style = items23;
      const obj21 = { customStatusActivity: tmp17, user, guildId: guild_id, channelId: null, hasCustomProfileTheme: null, showUserProfileActionSheet: null, isPreviewingChanges: null, bubbleRef: null };
      let id3;
      if (channel != null) {
        id3 = channel.id;
      }
      obj21.channelId = id3;
      obj21.hasCustomProfileTheme = tmp26;
      obj21.showUserProfileActionSheet = showUserProfileActionSheet;
      obj21.isPreviewingChanges = isPreviewingChanges;
      obj21.bubbleRef = ref;
      const items24 = [containerBackground(closure_23, obj21), , ];
      let tmp57Result2 = null;
      if (null != stateFromStores) {
        const obj22 = { style: null, children: null };
        const items25 = [, ];
        ({ primaryInfo: arr29[0], profileContent: arr29[1] } = tmp3);
        obj22.style = items25;
        const obj23 = { user, channelId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null };
        let id4;
        if (channel != null) {
          id4 = channel.id;
        }
        obj23.channelId = id4;
        obj23.displayProfile = displayProfile;
        let tmp84;
        if (isPreviewingChanges) {
          tmp84 = pendingGlobalName;
        }
        obj23.displayNameOverride = tmp84;
        let tmp85;
        if (isPreviewingChanges) {
          tmp85 = pendingPronouns;
        }
        obj23.pronounsOverride = tmp85;
        let tmp86;
        if (isPreviewingChanges) {
          tmp86 = memo1;
        }
        obj23.badgesOverride = tmp86;
        let tmp87;
        if (isPreviewingChanges) {
          tmp87 = pendingDisplayNameStyles;
        }
        obj23.pendingDisplayNameStyles = tmp87;
        obj23.badgeContainerBackground = containerBackground;
        obj23.isPreviewingChanges = isPreviewingChanges;
        const items26 = [tmp59(boardTabIndex, obj23), , , , , , ];
        let tmp59Result7 = user.id !== stateFromStores.id;
        if (tmp59Result7) {
          const obj24 = { user, guildId: guild_id };
          tmp59Result7 = tmp59(tmp(tmp2[84]), obj24);
        }
        items26[1] = tmp59Result7;
        let tmp59Result8 = relationshipType === RelationshipTypes.PENDING_INCOMING;
        if (tmp59Result8) {
          let obj25 = { user, channelId: null, guildId: null, applicationId: null, style: null, showUserProfile: null };
          let id5;
          if (channel != null) {
            id5 = channel.id;
          }
          obj25.channelId = id5;
          obj25.guildId = guild_id;
          obj25.applicationId = originApplicationId;
          obj25.style = obj8;
          obj25.showUserProfile = showUserProfileActionSheet;
          tmp59Result8 = tmp59(tmp(tmp2[85]), obj25);
          const tmpResult7 = tmp(tmp2[85]);
        }
        items26[2] = tmp59Result8;
        items26[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: null, guildId: null, style: null, showUserProfile: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guild_id;
          obj.style = obj8;
          obj.showUserProfile = showUserProfileActionSheet;
          return closure_2_20(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
        });
        const obj26 = { user, style: obj8 };
        items26[4] = tmp59(tmp(tmp2[86]), obj26);
        let tmp59Result9 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp59Result9) {
          const obj27 = { guildId: guild_id };
          tmp59Result9 = tmp59(activityTabIndex, obj27);
        }
        items26[5] = tmp59Result9;
        let tmp59Result10 = user.id !== stateFromStores.id;
        if (tmp59Result10) {
          const obj28 = { user, disableCalls: null, disableMessage: null, location: null, hasCustomProfileTheme: null, style: null };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp89.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj28.disableCalls = disableCalls;
          obj28.disableMessage = disableMessage;
          obj28.location = _location;
          obj28.hasCustomProfileTheme = tmp26;
          obj28.style = tmp3.primaryButtons;
          tmp59Result10 = tmp59(tmp(tmp2[87]), obj28);
          const tmpResult8 = tmp(tmp2[87]);
        }
        items26[6] = tmp59Result10;
        obj22.children = items26;
        tmp57Result2 = tmp57(tmp77, obj22);
        tmp89 = RelationshipTypes;
      }
      items24[1] = tmp57Result2;
      if (!tmp33) {
        if (!tmp35) {
          if (!tmp36) {
            let callback4Result = callback4();
          }
          const obj29 = { children: null };
          items24[2] = callback4Result;
          obj19.children = items24;
          items22[1] = tmp57(tmp77, obj19);
          obj16.children = items22;
          items19[2] = tmp57(tmp(tmp2[82]).View, obj16);
          obj29.children = items19;
          return tmp57(tmp58, obj29);
        }
      }
      const obj30 = { onLayout: callback, children: null };
      const obj31 = { style: tmp3.profileTablist, children: null };
      const obj32 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp26) {
        str = "overlay";
      }
      const obj33 = { children: null };
      obj32.variant = str;
      const items27 = [containerBackground(tmp6(tmp2[89]).Tabs, obj32), ];
      const obj34 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${Math.max(wishlistTabIndex, 0) / arr20.length * 100}%`;
      obj34.style = rect;
      items27[1] = containerBackground(navigateToShop, obj34);
      obj31.children = items27;
      const items28 = [stateFromStores1(navigateToShop, obj31), , ];
      const obj35 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: null };
      const obj36 = { state: segmentedControlState };
      obj35.children = containerBackground(tmp6(tmp2[90]).SegmentedControlPages, obj36);
      items28[1] = containerBackground(tmp(tmp2[82]).View, obj35);
      const obj37 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp56 };
      items28[2] = containerBackground(tmp(tmp2[91]), obj37);
      obj33.children = items28;
      obj30.children = stateFromStores1(tmp6(tmp2[88]).LayerScope, obj33);
      callback4Result = tmp59(tmp77, obj30);
      tmp58 = stateFromStores2;
      const tmpResult6 = tmp(tmp2[80]);
    }
  }
  return null;
});
export { PrimaryInfo };