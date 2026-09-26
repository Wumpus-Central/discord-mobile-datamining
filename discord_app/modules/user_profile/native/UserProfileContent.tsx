// === Module 12616: UserProfileContent ===

// Module 12616 (UserProfileContent)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import UserProfileRolesCardDefault from "UserProfileRolesCard" /* 6606 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7642 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8127 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 8761 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10777 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12117 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 12124 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 12554 */;
import UserProfileModeratorActionsDefault from "UserProfileModeratorActions" /* 12604 */;
import UserProfileNoteDefault from "UserProfileNote" /* 12607 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 12620 */;
import VibegrationsCustomWidgetAddOptionDefault from "VibegrationsCustomWidgetAddOption" /* 12621 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 12632 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12640 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 12646 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 12647 */;
import UserProfileGameFriendsCardDefault from "UserProfileGameFriendsCard" /* 12652 */;
import UserProfileConnections from "UserProfileConnections" /* 12653 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 12658 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 12664 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 12690 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import WishlistStore from "WishlistStore" /* 8239 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;

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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10611, dependencyMap.paths), "UserProfileCustomStatusActionSheet", { user, guildId, channelId }, "stack");
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12618, dependencyMap.paths), "UserProfileGameFriendActionSheet", { user, guildId, channelId }, "stack");
  }, items);
  const obj = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(channelId[32]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(channelId[29]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[29]).t.cvSt1J);
  obj.onPress = callback;
  return closure_20(user(channelId[27]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = global);
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
    name = obj2.useName(guildId, channelId, user);
    tmp6 = name;
    if (null != displayNameOverride) {
      num = 0;
      tmp6 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp6 = displayNameOverride;
      }
    }
    tmp7 = closure_0;
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
    tmp9 = jsx;
    obj1 = { user, guildId, displayName: tmp6, pronouns: null, badges: null, style: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: null, canOpenBadgeDirectory: true, pendingDisplayNameStyles: null };
    tmpResult = tmp(tmp2[37]);
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
    tmp12 = undefined;
    if (!isPreviewingChanges) {
      tmp12 = callback;
    }
    obj1.onPressDisplayName = tmp12;
    intl = tmp7(tmp2[29]).intl;
    obj1.displayNameAccessibilityHint = intl.string(tmp7(tmp2[29]).t.y5MwJy);
    tmp13 = undefined;
    if (!isPreviewingChanges) {
      tmp13 = callback;
    }
    obj1.onPressUserTag = tmp13;
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
    return tmp9(tmpResult, obj1);
  }
}
function EditSection(guildId) {
  guildId = guildId.guildId;
  let trackUserProfileAction;
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(7687)();
  trackUserProfileAction = guildId(7635).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = guildId(7635);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(9226)();
  closure_3 = trackUserProfileAction(9226)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const obj2 = guildId(504);
  const obj4 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmp7 = trackUserProfileAction(12552);
  obj4.icon = closure_20(guildId(9713).PencilIcon, { size: "sm", color: trackUserProfileAction(576).colors.WHITE });
  if (null != stateFromStores) {
    const intl2 = tmp4(1115).intl;
    let stringResult = intl2.string(tmp4(1115).t.HmFaFB);
  } else {
    const intl = tmp4(1115).intl;
    stringResult = intl.string(tmp4(1115).t.s5vZlQ);
  }
  obj4.text = stringResult;
  obj4.onPress = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  };
  obj3.primaryButton = closure_20(guildId(5281).Button, obj4);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp(576).colors.WHITE };
    obj6.icon = closure_20(tmp4(9713).PencilIcon, obj7);
    const intl3 = tmp4(1115).intl;
    obj6.text = intl3.string(tmp4(1115).t["PKQB/H"]);
    obj6.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = closure_20(tmp4(5281).Button, obj6);
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
  let tmp6 = isCurrentUser;
  if (isCurrentUser) {
    tmp6 = closure_1_20(UserProfileWidgetsBoardEditNoticeDefault, {});
  }
  const items1 = [tmp6, , ];
  if (isCurrentUser) {
    isCurrentUser = closure_1_20(VibegrationsCustomWidgetAddOptionDefault, {});
  }
  items1[1] = isCurrentUser;
  items1[2] = closure_1_20(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
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
const UserProfileSections = fn(7628).UserProfileSections;
const Constants = fn(6629);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_15, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_16 } = Constants);
let RelationshipTypes = fn(1074).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(6572).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default noop.memo(function UserProfileContent(user) {
  user = user.user;
  const channel = user.channel;
  const guildId = user.guildId;
  const displayProfile = user.displayProfile;
  const showUserProfileActionSheet = user.showUserProfileActionSheet;
  ({ disableCalls, isPreviewingChanges } = user);
  ({ avatarDecorationOverride, navigateToPremium } = user);
  const navigateToShop = user.navigateToShop;
  const scrollPosition = user.scrollPosition;
  let isCurrentUser;
  let userProfileGameFriendApplicationIds;
  let name;
  let pendingBio;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  RelationshipTypes = undefined;
  let stateFromStoresArray;
  let isBadgeManagementEnabled;
  let hasCustomProfileTheme;
  let containerBackground;
  let stateFromStores1;
  let stateFromStores2;
  closure_24 = undefined;
  closure_25 = undefined;
  closure_26 = undefined;
  let boardTabIndex;
  let activityTabIndex;
  let wishlistTabIndex;
  c30 = undefined;
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
  ({ disableMessage, disableStatus, location: _location, initialSection } = user);
  const tmp3 = channel(guildId[16])();
  closure_8 = tmp3;
  const tmp4 = channel(guildId[48])(stateFromStoresArray);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(guildId[49])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(guildId[49])({ scrollPosition, bannerHeight: tmp4 });
  const trackUserProfileAction = user(guildId[23]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(guildId[23]);
  let items = [isCurrentUser];
  const stateFromStores = user(guildId[17]).useStateFromStores(items, () => isCurrentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  isCurrentUser = tmp9;
  let obj2 = user(guildId[17]);
  let items1 = [stateFromStores];
  const stateFromStoresObject = user(guildId[17]).useStateFromStoresObject(items1, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result = user(guildId[17]);
  const incomingGameRelationshipsForUser = user(guildId[51]).useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result24 = user(guildId[51]);
  const isGameFriends = user(guildId[52]).useIsGameFriends(user.id);
  const tmp6Result25 = user(guildId[52]);
  userProfileGameFriendApplicationIds = user(guildId[53]).useUserProfileGameFriendApplicationIds({ userId: user.id });
  let obj3 = { userId: user.id };
  const tmp6Result26 = user(guildId[53]);
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  name = channel(guildId[34]).useName(guildId, id1, user);
  let items2 = [guildId, user];
  const memo = showUserProfileActionSheet.useMemo(() => {
    if (null != guildId) {
      if (null != user) {
        const obj = {};
        const items = [tmp2.id];
        obj[tmp] = items;
      }
      return {};
    }
  }, items2);
  const tmpResult = channel(guildId[34]);
  const subscribeGuildMembers = user(guildId[54]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(guildId[55])(user.id);
  const tmp6Result27 = user(guildId[54]);
  const items3 = [userProfileGameFriendApplicationIds];
  const stateFromStoresObject1 = user(guildId[17]).useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result28 = user(guildId[17]);
  const pendingAvatarSrc = user(guildId[56]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp20 = channel(guildId[33])(displayProfile, pendingLegacyUsernameDisabled);
  RelationshipTypes = tmp20;
  let obj4 = { userId: user.id, image: pendingAvatar };
  const tmp6Result29 = user(guildId[56]);
  const items4 = [navigateToShop];
  const items5 = [user.id];
  stateFromStoresArray = user(guildId[17]).useStateFromStoresArray(items4, () => BadgeDirectoryStore.getBadges(user.id), items5);
  const tmp6Result30 = user(guildId[17]);
  isBadgeManagementEnabled = user(guildId[57]).useIsBadgeManagementEnabled({ location: "UserProfileContent" });
  const items6 = [user.id, isBadgeManagementEnabled];
  const effect = showUserProfileActionSheet.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(user.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
    }
  }, items6);
  const items7 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = showUserProfileActionSheet.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_17, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items7);
  let obj5 = { user, displayProfile, pendingThemeColors: null };
  let tmp26;
  const tmp6Result31 = user(guildId[57]);
  if (isPreviewingChanges) {
    tmp26 = pendingThemeColors;
  }
  obj5.pendingThemeColors = tmp26;
  const tmpResult1Result = channel(guildId[60])(obj5);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp28;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult5 = channel(guildId[60]);
  const userProfileColors = user(guildId[61]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp6Result32 = user(guildId[61]);
  const ref1 = showUserProfileActionSheet.useRef(null);
  const ref = showUserProfileActionSheet.useRef(null);
  const items8 = [name];
  stateFromStores1 = user(guildId[17]).useStateFromStores(items8, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result33 = user(guildId[17]);
  const fetchWishlist = user(guildId[62]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj6 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result34 = user(guildId[62]);
  const items9 = [closure_8];
  const items10 = [stateFromStores1];
  stateFromStores2 = user(guildId[17]).useStateFromStores(items9, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items10);
  const items11 = [stateFromStores2, id === user.id];
  let tmp35 = tmp9;
  if (id !== user.id) {
    let tmp36 = null != stateFromStores2;
    if (tmp36) {
      tmp36 = arr14.length > 0;
    }
    tmp35 = tmp36;
  }
  closure_24 = tmp35;
  const tmp6Result35 = user(guildId[17]);
  const displayableBoardWidgets = user(guildId[64]).useDisplayableBoardWidgets(user.id);
  const tmp6Result36 = user(guildId[64]);
  const isMobileGameCollectionExperimentEnabled = user(guildId[65]).useIsMobileGameCollectionExperimentEnabled("UserProfileContent");
  const tmp6Result37 = user(guildId[65]);
  let tmp38 = tmp9;
  if (id === user.id) {
    tmp38 = isMobileGameCollectionExperimentEnabled;
  }
  const tmp39 = displayableBoardWidgets.length > 0 || user(guildId[66]).useCanConjureVibegrationsCustomWidget("UserProfileContent", tmp38);
  closure_25 = tmp39;
  const tmp6Result38 = user(guildId[66]);
  const tmp40 = user(guildId[67]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp40;
  const tmp6Result39 = user(guildId[67]);
  const profileTabIndices = user(guildId[68]).useProfileTabIndices(tmp39, tmp40, tmp35);
  boardTabIndex = profileTabIndices.boardTabIndex;
  activityTabIndex = profileTabIndices.activityTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp6Result40 = user(guildId[68]);
  [tmp43, c30] = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const callback = obj9.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp42 = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const pageHeights = user(guildId[69]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const tmp6Result41 = user(guildId[69]);
  const wishlistViewerCoachmark = user(guildId[70]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp35 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items12 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj9.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
    const obj = { action: "PRESS_SECTION", section };
    tmp2 = section === UserProfileSections.WISHLIST && isVisible;
  }, items12);
  const tmp6Result42 = user(guildId[70]);
  const profileSectionTabs = user(guildId[68]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp49;
  isVisible2 = tmp50;
  const items13 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj9.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items13);
  const items14 = [navigateToShop];
  callback3 = obj9.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items14);
  const items15 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guildId, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj9.useCallback(() => {
    if (null != user) {
      if (null != stateFromStores) {
        const items = [closure_8.card, ];
        const obj2 = { backgroundColor: containerBackground };
        items[1] = obj2;
        const obj3 = { style: null, children: null };
        const items1 = [, ];
        ({ cards: arr3[0], profileContent: arr3[1] } = closure_8);
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
        const obj6 = { user, currentUser: stateFromStores, guildId, style: items };
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
        let tmp18Result4 = null != guildId;
        if (tmp18Result4) {
          const obj10 = { userId: user.id, guildId };
          tmp18Result4 = closure_2_20(UserProfileRolesCardDefault, obj10);
        }
        items2[6] = tmp18Result4;
        let guild_id;
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
  }, items15);
  const items16 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === pendingBio.WISHLIST, user.id, id === user.id];
  callback5 = obj9.useCallback(() => {
    const obj = { style: closure_8.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = closure_2_20(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp9 = closure_2_20;
    } else {
      const obj2 = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp9 = closure_2_20;
      tmp10 = closure_2_20(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp10, ];
    let tmp9Result = closure_11;
    if (closure_11) {
      const obj3 = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
    }
    items[1] = tmp9Result;
    obj.children = items;
    return __initData(timestampProducer, obj);
  }, items16);
  const items17 = [handlePageContentSize, callback4, callback5, tmp39, tmp40, tmp35, boardTabIndex, activityTabIndex, wishlistTabIndex, user, stateFromStores, guildId, , , , ];
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  items17[12] = id2;
  items17[13] = activeProfileTabSection === pendingBio.WIDGETS;
  items17[14] = id === user.id;
  items17[15] = containerBackground;
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
    if (closure_25) {
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
    let tmp12 = closure_26;
    if (closure_26) {
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
      obj8 = { user, currentUser: stateFromStores, guildId, channelId: null, containerBackground: null };
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
    if (closure_24) {
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
  }, items17);
  const tmp6Result43 = user(guildId[68]);
  const tmp6Result44 = user(guildId[83]);
  segmentedControlState = tmp6Result44.useSegmentedControlState({ pageWidth: tmp43, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(guildId[42]).space.PX_24, items: memo2, onPageChange: handleTabChange });
  let obj7 = { pageWidth: tmp43, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(guildId[42]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  const pagerFillHeight = user(guildId[69]).usePagerFillHeight(scrollPosition);
  const items18 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj9.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items18);
  const tmp6Result45 = user(guildId[69]);
  const items19 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = user(guildId[69]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj8 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp103);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp103).OpenableUserProfileAvatar;
      }
      let obj10 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null, privateBanner: null };
      let tmp65;
      if (isPreviewingChanges) {
        tmp65 = pendingBanner;
      }
      obj10.pendingBanner = tmp65;
      let tmp66;
      if (isPreviewingChanges) {
        tmp66 = pendingAvatarSrc;
      }
      obj10.pendingAvatarSrc = tmp66;
      let tmp67;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp67 = pendingAccentColor;
        }
      }
      obj10.pendingAccentColor = tmp67;
      let tmp68;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp68 = pendingThemeColors;
        }
      }
      obj10.pendingThemeColors = tmp68;
      obj10.disableInteraction = isPreviewingChanges;
      obj10.bannerAnimatedStyle = bannerAnimatedStyle;
      obj10.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj10.blurAnimatedProps = blurAnimatedProps;
      obj10.showBlur = showBlur;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp63Result;
      if (true === _private) {
        let obj11 = { primaryColor };
        tmp63Result = tmp63(tmp(tmp2[86]), obj11);
      }
      obj10.privateBanner = tmp63Result;
      const items20 = [hasCustomProfileTheme(tmp(tmp2[85]), obj10), , ];
      let tmp61Result = !isPreviewingChanges;
      if (!isPreviewingChanges) {
        const items21 = [tmp3.bannerButtons, , ];
        let _private1;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        let obj12 = { style: null, children: null };
        items21[1] = _private1;
        items21[2] = bannerAnimatedStyle;
        obj12.style = items21;
        let tmp73 = null;
        if (null != stateFromStores) {
          tmp73 = null;
          if (user.id !== stateFromStores.id) {
            tmp73 = null;
            if (!user.bot) {
              if (relationshipType === RelationshipTypes.FRIEND) {
                let obj13 = { user };
                let tmp63Result6 = tmp63(closure_24, obj13);
              } else {
                tmp63Result6 = null;
                if (isGameFriends) {
                  const obj14 = { user };
                  tmp63Result6 = tmp63(closure_25, obj14);
                }
              }
            }
          }
        }
        const items22 = [tmp73, ];
        const obj15 = { user, currentUser: stateFromStores, displayProfile, channel };
        items22[1] = tmp63(tmp(tmp2[88]), obj15);
        obj12.children = items22;
        tmp61Result = tmp61(tmp(tmp2[87]).View, obj12);
      }
      items20[1] = tmp61Result;
      const obj16 = { style: contentAnimatedStyle, children: null };
      const obj17 = { user, guildId, disableStatus, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      let tmp79;
      if (isPreviewingChanges) {
        tmp79 = pendingAvatarSrc;
      }
      obj17.pendingAvatarSrc = tmp79;
      let tmp80;
      if (isPreviewingChanges) {
        if (avatarDecorationOverride == null) {
          avatarDecorationOverride = pendingAvatarDecoration;
        }
        tmp80 = avatarDecorationOverride;
      }
      obj17.pendingAvatarDecoration = tmp80;
      obj17.backgroundColor = avatarBackground;
      const obj18 = { backgroundColor: statusBackground };
      obj17.statusStyle = obj18;
      const items23 = [hasCustomProfileTheme(OpenableUserProfileAvatar, obj17), ];
      const items24 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        let num2 = 0;
        if (null == tmp17) {
          num2 = pendingBadgeHiddenBadges;
        }
      } else {
        num2 = 0;
      }
      const obj19 = { style: null, children: null };
      const obj20 = { paddingTop: num2, paddingBottom: channel(guildId[50])().bottom + pendingBadgeDisplayOrder };
      items24[1] = obj20;
      obj19.style = items24;
      const obj21 = { customStatusActivity: tmp17, user, guildId, channelId: null, hasCustomProfileTheme: null, showUserProfileActionSheet: null, isPreviewingChanges: null, bubbleRef: null };
      let id3;
      if (channel != null) {
        id3 = channel.id;
      }
      obj21.channelId = id3;
      obj21.hasCustomProfileTheme = tmp28;
      obj21.showUserProfileActionSheet = showUserProfileActionSheet;
      obj21.isPreviewingChanges = isPreviewingChanges;
      obj21.bubbleRef = ref;
      const items25 = [hasCustomProfileTheme(stateFromStores2, obj21), , ];
      let tmp61Result2 = null;
      if (null != stateFromStores) {
        const obj22 = { style: null, children: null };
        const items26 = [, ];
        ({ primaryInfo: arr31[0], profileContent: arr31[1] } = tmp3);
        obj22.style = items26;
        const obj23 = { user, channelId: null, guildId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null };
        let id4;
        if (channel != null) {
          id4 = channel.id;
        }
        obj23.channelId = id4;
        obj23.guildId = guildId;
        obj23.displayProfile = displayProfile;
        let tmp88;
        if (isPreviewingChanges) {
          tmp88 = pendingGlobalName;
        }
        obj23.displayNameOverride = tmp88;
        let tmp89;
        if (isPreviewingChanges) {
          tmp89 = pendingPronouns;
        }
        obj23.pronounsOverride = tmp89;
        let tmp90;
        if (isPreviewingChanges) {
          tmp90 = memo1;
        }
        obj23.badgesOverride = tmp90;
        let tmp91;
        if (isPreviewingChanges) {
          tmp91 = pendingDisplayNameStyles;
        }
        obj23.pendingDisplayNameStyles = tmp91;
        obj23.badgeContainerBackground = containerBackground;
        obj23.isPreviewingChanges = isPreviewingChanges;
        const items27 = [tmp63(closure_26, obj23), , , , , , ];
        let tmp63Result7 = user.id !== stateFromStores.id;
        if (tmp63Result7) {
          const obj24 = { user, guildId };
          tmp63Result7 = tmp63(tmp(tmp2[89]), obj24);
        }
        items27[1] = tmp63Result7;
        let tmp63Result8 = relationshipType === RelationshipTypes.PENDING_INCOMING;
        if (tmp63Result8) {
          let obj25 = { user, channelId: null, guildId: null, applicationId: null, style: null, showUserProfile: null };
          let id5;
          if (channel != null) {
            id5 = channel.id;
          }
          obj25.channelId = id5;
          obj25.guildId = guildId;
          obj25.applicationId = originApplicationId;
          obj25.style = obj8;
          obj25.showUserProfile = showUserProfileActionSheet;
          tmp63Result8 = tmp63(tmp(tmp2[90]), obj25);
          const tmpResult7 = tmp(tmp2[90]);
        }
        items27[2] = tmp63Result8;
        items27[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: null, guildId: null, style: null, showUserProfile: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guildId;
          obj.style = obj8;
          obj.showUserProfile = showUserProfileActionSheet;
          return closure_2_20(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
        });
        const obj26 = { user, style: obj8 };
        items27[4] = tmp63(tmp(tmp2[91]), obj26);
        let tmp63Result9 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp63Result9) {
          const obj27 = { guildId };
          tmp63Result9 = tmp63(boardTabIndex, obj27);
        }
        items27[5] = tmp63Result9;
        let tmp63Result10 = user.id !== stateFromStores.id;
        if (tmp63Result10) {
          const obj28 = { user, disableCalls: null, disableMessage: null, location: null, hasCustomProfileTheme: null, style: null };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp93.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj28.disableCalls = disableCalls;
          obj28.disableMessage = disableMessage;
          obj28.location = _location;
          obj28.hasCustomProfileTheme = tmp28;
          obj28.style = tmp3.primaryButtons;
          tmp63Result10 = tmp63(tmp(tmp2[92]), obj28);
          const tmpResult8 = tmp(tmp2[92]);
        }
        items27[6] = tmp63Result10;
        obj22.children = items27;
        tmp61Result2 = tmp61(tmp81, obj22);
        tmp93 = RelationshipTypes;
      }
      items25[1] = tmp61Result2;
      if (!tmp35) {
        if (!tmp39) {
          if (!tmp40) {
            let callback4Result = callback4();
          }
          const obj29 = { children: null };
          items25[2] = callback4Result;
          obj19.children = items25;
          items23[1] = tmp61(tmp81, obj19);
          obj16.children = items23;
          items20[2] = tmp61(tmp(tmp2[87]).View, obj16);
          obj29.children = items20;
          return tmp61(tmp62, obj29);
        }
      }
      const obj30 = { onLayout: callback, children: null };
      const obj31 = { style: tmp3.profileTablist, children: null };
      const obj32 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp28) {
        str = "overlay";
      }
      const obj33 = { children: null };
      obj32.variant = str;
      const items28 = [hasCustomProfileTheme(tmp6(tmp2[94]).Tabs, obj32), ];
      const obj34 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${Math.max(wishlistTabIndex, 0) / arr22.length * 100}%`;
      obj34.style = rect;
      items28[1] = hasCustomProfileTheme(navigateToPremium, obj34);
      obj31.children = items28;
      const items29 = [containerBackground(navigateToPremium, obj31), , ];
      const obj35 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: null };
      const obj36 = { state: segmentedControlState };
      obj35.children = hasCustomProfileTheme(tmp6(tmp2[95]).SegmentedControlPages, obj36);
      items29[1] = hasCustomProfileTheme(tmp(tmp2[87]).View, obj35);
      const obj37 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp60 };
      items29[2] = hasCustomProfileTheme(tmp(tmp2[96]), obj37);
      obj33.children = items29;
      obj30.children = containerBackground(tmp6(tmp2[93]).LayerScope, obj33);
      callback4Result = tmp63(tmp81, obj30);
      tmp62 = stateFromStores1;
      const tmpResult6 = tmp(tmp2[85]);
    }
  }
  return null;
});
export { PrimaryInfo };