// === Module 13130: UserProfileContent ===

// Module 13130 (UserProfileContent)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4302 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import UserProfileRolesCardDefault from "UserProfileRolesCard" /* 7237 */;
import ClipboardUtils from "ClipboardUtils" /* 7241 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8304 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8744 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9111 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 9578 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11279 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12690 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 12697 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13068 */;
import UserProfileModeratorActionsDefault from "UserProfileModeratorActions" /* 13118 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13121 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13134 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13135 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13143 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 13149 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 13150 */;
import UserProfileGameFriendsCardDefault from "UserProfileGameFriendsCard" /* 13155 */;
import UserProfileConnections from "UserProfileConnections" /* 13156 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13161 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13167 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 13195 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WishlistStore from "WishlistStore" /* 8847 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4253 */;
import UserStore from "UserStore" /* 1371 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8223 */;
import UserProfileStore from "UserProfileStore" /* 7672 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function CustomStatusBubble(guildId) {
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[15])();
  let obj = user(channelId[16]);
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
    obj.openLazy(asyncRequireImpl(11221, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
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
  return closure_19(guildId(channelId[21]), obj);
}
function RemoveFriendIconButton(user) {
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    const obj = { location: newestAnalyticsLocation };
    obj.removeFriend(user.id, obj);
  }
  let obj = user(newestAnalyticsLocation[22]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[23])().newestAnalyticsLocation;
  const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[25]).useName(user);
  obj = { size: "sm", variant: "secondary-overlay", icon: closure_19(user(newestAnalyticsLocation[27]).UserCheckIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(newestAnalyticsLocation[28]).intl;
  obj.accessibilityLabel = intl.string(user(newestAnalyticsLocation[28]).t.cvSt1J);
  obj.onPress = function onPress() {
    const obj = { userDisplayName, onConfirm: handleConfirm };
    obj.confirmRemoveFriend(obj);
  };
  return closure_19(user(newestAnalyticsLocation[26]).IconButton, obj);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    const obj = { user, guildId, channelId };
    obj.openLazy(asyncRequireImpl(13132, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj, "stack");
  }, items);
  let obj = { size: "sm", variant: "secondary-overlay", icon: closure_19(user(channelId[31]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(channelId[28]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[28]).t.cvSt1J);
  obj.onPress = callback;
  return closure_19(user(channelId[26]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({ user, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = global);
    closure_0 = undefined;
    trackUserProfileAction = undefined;
    tmp2 = closure_2;
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = global);
    tmp = trackUserProfileAction;
    obj = trackUserProfileAction(closure_2[25]);
    userTag = obj.useUserTag(user);
    closure_0 = userTag;
    tmp4 = trackUserProfileAction(closure_2[32])(displayProfile);
    obj2 = trackUserProfileAction(closure_2[33]);
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
    obj3 = closure_0(tmp2[22]);
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
    tmpResult = tmp(tmp2[36]);
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
    intl = tmp8(tmp2[28]).intl;
    obj.displayNameAccessibilityHint = intl.string(tmp8(tmp2[28]).t.y5MwJy);
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
  let obj = guildId(8253);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(9276)();
  closure_3 = trackUserProfileAction(9276)({ guild: stateFromStores });
  obj = { style: trackUserProfileAction(8304)().primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(8304)();
  obj = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  obj1 = { size: "sm", color: trackUserProfileAction(576).colors.WHITE };
  obj.icon = closure_19(guildId(10320).PencilIcon, obj1);
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
  obj.primaryButton = closure_19(guildId(5025).Button, obj);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj2 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj3 = { size: "sm", color: tmp(576).colors.WHITE };
    obj2.icon = closure_19(tmp4(10320).PencilIcon, obj3);
    const intl3 = tmp4(1114).intl;
    obj2.text = intl3.string(tmp4(1114).t["PKQB/H"]);
    obj2.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = closure_19(tmp4(5025).Button, obj2);
  }
  obj.secondaryButton = tmp6Result;
  return closure_19(trackUserProfileAction(13066), obj);
}
function UserProfileWidgetsBoardContainer(isCurrentUser) {
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp3 = UserProfileSharedStylesDefault();
  const items = [tmp3.card, { backgroundColor: containerBackground }];
  const obj = { style: tmp3.profileContent, children: null };
  if (isCurrentUser) {
    isCurrentUser = closure_1_19(UserProfileWidgetsBoardEditNoticeDefault, {});
  }
  const items1 = [isCurrentUser, closure_1_19(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items })];
  obj.children = items1;
  return closure_1_20(timestampProducer, obj);
}
function UserProfileActivityTabContainer(arg0) {
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  const items = [tmp.card, { backgroundColor: containerBackground }];
  const obj = { style: null, children: closure_1_19(UserProfileActivityTabDefault, { user, currentUser, guildId, channelId, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  obj.style = items1;
  return closure_1_19(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(8246).UserProfileSections;
const Constants = fn(7260);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = Constants);
const RelationshipTypes = fn(1074).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(7203).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
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
  closure_17 = undefined;
  let hasCustomProfileTheme;
  let containerBackground;
  let stateFromStores1;
  let stateFromStores2;
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  let boardTabIndex;
  let activityTabIndex;
  let wishlistTabIndex;
  c28 = undefined;
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
  const tmp3 = channel(displayProfile[15])();
  closure_7 = tmp3;
  const tmp4 = channel(displayProfile[46])(closure_17);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(displayProfile[47])({ scrollPosition, bannerHeight: tmp4 }));
  let obj = user(displayProfile[22]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = user(displayProfile[16]);
  let items = [isCurrentUser];
  const stateFromStores = obj1.useStateFromStores(items, () => isCurrentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  isCurrentUser = tmp9;
  let tmp6Result = tmp6(tmp2[16]);
  let items1 = [stateFromStores];
  const stateFromStoresObject = tmp6Result.useStateFromStoresObject(items1, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  tmp6Result = tmp6(tmp2[49]);
  const incomingGameRelationshipsForUser = tmp6Result.useIncomingGameRelationshipsForUser(user.id);
  const tmp5 = channel(displayProfile[47])({ scrollPosition, bannerHeight: tmp4 });
  const isGameFriends = user(displayProfile[50]).useIsGameFriends(user.id);
  const tmp6Result1 = user(displayProfile[50]);
  obj = { userId: user.id };
  userProfileGameFriendApplicationIds = user(displayProfile[51]).useUserProfileGameFriendApplicationIds(obj);
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
  const tmp6Result2 = user(displayProfile[51]);
  const subscribeGuildMembers = user(displayProfile[52]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(displayProfile[53])(user.id);
  const tmp6Result3 = user(displayProfile[52]);
  const items3 = [userProfileGameFriendApplicationIds];
  const stateFromStoresObject1 = user(displayProfile[16]).useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result4 = user(displayProfile[16]);
  obj = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = user(displayProfile[54]).getPendingAvatarSrc(obj);
  const tmp20 = channel(displayProfile[32])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp20;
  const items4 = [tmp20, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = isPreviewingChanges.useMemo(() => {
    const obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettingsToProfileBadges(closure_17, obj);
  }, items4);
  obj1 = { user, displayProfile, pendingThemeColors: null };
  let tmp23;
  tmpResult = tmp(tmp2[56]);
  if (isPreviewingChanges) {
    tmp23 = pendingThemeColors;
  }
  obj1.pendingThemeColors = tmp23;
  const tmpResult1Result = tmpResult(obj1);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp25;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result5 = user(displayProfile[54]);
  const userProfileColors = user(displayProfile[57]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp6Result6 = user(displayProfile[57]);
  const ref1 = obj8.useRef(null);
  const ref = obj8.useRef(null);
  const items5 = [guild_id];
  stateFromStores1 = user(displayProfile[16]).useStateFromStores(items5, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result7 = user(displayProfile[16]);
  const fetchWishlist = user(displayProfile[58]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj2 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result8 = user(displayProfile[58]);
  const items6 = [closure_7];
  const items7 = [stateFromStores1];
  stateFromStores2 = user(displayProfile[16]).useStateFromStores(items6, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items7);
  const items8 = [stateFromStores2, id === user.id];
  let tmp32 = tmp9;
  if (id !== user.id) {
    let tmp33 = null != stateFromStores2;
    if (tmp33) {
      tmp33 = arr11.length > 0;
    }
    tmp32 = tmp33;
  }
  closure_22 = tmp32;
  const tmp6Result9 = user(displayProfile[16]);
  const tmp34 = user(displayProfile[60]).useDisplayableBoardWidgets(user.id).length > 0;
  closure_23 = tmp34;
  const tmp6Result10 = user(displayProfile[60]);
  const tmp35 = user(displayProfile[61]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_24 = tmp35;
  const tmp6Result11 = user(displayProfile[61]);
  const profileTabIndices = user(displayProfile[62]).useProfileTabIndices(tmp34, tmp35, tmp32);
  boardTabIndex = profileTabIndices.boardTabIndex;
  activityTabIndex = profileTabIndices.activityTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp6Result12 = user(displayProfile[62]);
  [tmp38, c28] = showUserProfileActionSheet(obj8.useState(0), 2);
  const callback = obj8.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp37 = showUserProfileActionSheet(obj8.useState(0), 2);
  const pageHeights = user(displayProfile[63]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const tmp6Result13 = user(displayProfile[63]);
  const wishlistViewerCoachmark = user(displayProfile[64]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp32 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items9 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj8.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
    const obj = { action: "PRESS_SECTION", section };
    tmp2 = section === UserProfileSections.WISHLIST && isVisible;
  }, items9);
  const tmp6Result14 = user(displayProfile[64]);
  const profileSectionTabs = user(displayProfile[62]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp44;
  isVisible2 = tmp45;
  const items10 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj8.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items10);
  const items11 = [navigateToShop];
  callback3 = obj8.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items11);
  const items12 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guild_id, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
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
          _private = closure_2_19(UserProfilePrivateInfoBannerDefault, obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = user.isProvisional;
        if (isProvisional) {
          const obj1 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = closure_2_19(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj1);
        }
        items2[1] = isProvisional;
        let tmp10 = user.id === stateFromStores.id;
        if (tmp10) {
          tmp10 = !isPreviewingChanges;
        }
        if (tmp10) {
          const obj2 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = closure_2_19(UserProfileDismissibleUpsellsDefault, obj2);
        }
        items2[2] = tmp10;
        const obj3 = { user, currentUser: stateFromStores, guildId: guild_id, style: items };
        items2[3] = closure_2_19(UserProfileActivityDefault, obj3);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          obj4 = { userId: user.id, applicationIds: tmp22 };
          tmp18Result = closure_2_19(UserProfileGameFriendsCardDefault, obj4);
        }
        items2[4] = tmp18Result;
        const obj5 = { userId: user.id, displayProfile, pendingBio: null };
        let tmp26;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        obj5.pendingBio = tmp26;
        items2[5] = closure_2_19(UserProfileAboutMeCardDefault, obj5);
        tmp18Result = null != tmp21;
        if (tmp18Result) {
          const obj6 = { userId: user.id, guildId: tmp21 };
          tmp18Result = closure_2_19(UserProfileRolesCardDefault, obj6);
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
          tmp18Result1 = closure_2_19(UserProfileModeratorActionsDefault, obj7);
        }
        items2[7] = tmp18Result1;
        const obj8 = { userId: user.id };
        items2[8] = closure_2_19(UserProfileConnections.UserProfileAccountConnectionsCard, obj8);
        const obj9 = { userId: user.id };
        items2[9] = closure_2_19(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj9);
        let tmp18Result2 = !isPreviewingChanges;
        if (!isPreviewingChanges) {
          const obj10 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result2 = closure_2_19(UserProfileNoteDefault, obj10);
        }
        items2[10] = tmp18Result2;
        obj.children = items2;
        return closure_2_20(timestampProducer, obj);
      }
    }
    return null;
  }, items12);
  const items13 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, id === user.id];
  callback5 = obj8.useCallback(() => {
    let obj = { style: closure_7.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = closure_2_19(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp9 = closure_2_19;
    } else {
      obj = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp9 = closure_2_19;
      tmp10 = closure_2_19(UserProfileWishlistGridDefault, obj);
    }
    const items = [tmp10, ];
    let tmp9Result = closure_10;
    if (closure_10) {
      obj = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj);
    }
    items[1] = tmp9Result;
    obj.children = items;
    return closure_2_20(timestampProducer, obj);
  }, items13);
  const items14 = [handlePageContentSize, callback4, callback5, tmp34, tmp35, tmp32, boardTabIndex, activityTabIndex, wishlistTabIndex, user, stateFromStores, guild_id, , , , ];
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  items14[12] = id2;
  items14[13] = activeProfileTabSection === name.WIDGETS;
  items14[14] = id === user.id;
  items14[15] = containerBackground;
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
    obj.page = closure_2_19(hasOwnProperty, obj);
    const items = [obj];
    if (closure_23) {
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
      obj1.children = closure_2_19(UserProfileWidgetsBoardContainer, obj2);
      obj.page = closure_2_19(hasOwnProperty, obj1, boardTabIndex);
      items.push(obj);
    }
    let tmp12 = closure_24;
    if (closure_24) {
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
      obj4.children = closure_2_19(UserProfileActivityTabContainer, obj5);
      obj3.page = closure_2_19(hasOwnProperty, obj4, activityTabIndex);
      items.push(obj3);
    }
    if (closure_22) {
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
      obj6.page = closure_2_19(hasOwnProperty, obj7, wishlistTabIndex);
      items.push(obj6);
    }
    return items;
  }, items14);
  const tmp6Result15 = user(displayProfile[62]);
  const tmp6Result16 = user(displayProfile[77]);
  segmentedControlState = tmp6Result16.useSegmentedControlState({ pageWidth: tmp38, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[41]).space.PX_24, items: memo2, onPageChange: handleTabChange });
  let obj3 = { pageWidth: tmp38, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[41]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  const pagerFillHeight = user(displayProfile[63]).usePagerFillHeight();
  const items15 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj8.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items15);
  const tmp6Result17 = user(displayProfile[63]);
  const items16 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = user(displayProfile[63]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj4 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp98);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp98).OpenableUserProfileAvatar;
      }
      let obj5 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null, privateBanner: null };
      let tmp60;
      if (isPreviewingChanges) {
        tmp60 = pendingBanner;
      }
      obj5.pendingBanner = tmp60;
      let tmp61;
      if (isPreviewingChanges) {
        tmp61 = pendingAvatarSrc;
      }
      obj5.pendingAvatarSrc = tmp61;
      let tmp62;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp62 = pendingAccentColor;
        }
      }
      obj5.pendingAccentColor = tmp62;
      let tmp63;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp63 = pendingThemeColors;
        }
      }
      obj5.pendingThemeColors = tmp63;
      obj5.disableInteraction = isPreviewingChanges;
      obj5.bannerAnimatedStyle = bannerAnimatedStyle;
      obj5.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj5.blurAnimatedProps = blurAnimatedProps;
      obj5.showBlur = showBlur;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp58Result;
      if (true === _private) {
        let obj6 = { primaryColor };
        tmp58Result = tmp58(tmp(tmp2[80]), obj6);
      }
      obj5.privateBanner = tmp58Result;
      const items17 = [containerBackground(tmp(tmp2[79]), obj5), , ];
      let tmp56Result = !isPreviewingChanges;
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
        obj7.style = items18;
        let tmp68 = null;
        if (null != stateFromStores) {
          tmp68 = null;
          if (user.id !== stateFromStores.id) {
            tmp68 = null;
            if (!user.bot) {
              if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                obj8 = { user };
                tmp58Result = tmp58(closure_23, obj8);
              } else {
                tmp58Result = null;
                if (isGameFriends) {
                  let obj9 = { user };
                  tmp58Result = tmp58(closure_24, obj9);
                }
              }
            }
          }
        }
        const items19 = [tmp68, ];
        let obj10 = { user, currentUser: stateFromStores, displayProfile, channel };
        items19[1] = tmp58(tmp(tmp2[82]), obj10);
        obj7.children = items19;
        tmp56Result = tmp56(tmp(tmp2[81]).View, obj7);
      }
      items17[1] = tmp56Result;
      const obj11 = { style: contentAnimatedStyle, children: null };
      const obj12 = { user, guildId: guild_id, disableStatus, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      let tmp74;
      if (isPreviewingChanges) {
        tmp74 = pendingAvatarSrc;
      }
      obj12.pendingAvatarSrc = tmp74;
      let tmp75;
      if (isPreviewingChanges) {
        tmp75 = pendingAvatarDecoration;
      }
      obj12.pendingAvatarDecoration = tmp75;
      obj12.backgroundColor = avatarBackground;
      const obj13 = { backgroundColor: statusBackground };
      obj12.statusStyle = obj13;
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
      const obj15 = { paddingTop: num2, paddingBottom: channel(displayProfile[48])().bottom + pendingBio };
      items21[1] = obj15;
      obj14.style = items21;
      const obj16 = { customStatusActivity: tmp17, user, guildId: guild_id, channelId: null, hasCustomProfileTheme: null, showUserProfileActionSheet: null, isPreviewingChanges: null, bubbleRef: null };
      let id3;
      if (channel != null) {
        id3 = channel.id;
      }
      obj16.channelId = id3;
      obj16.hasCustomProfileTheme = tmp25;
      obj16.showUserProfileActionSheet = showUserProfileActionSheet;
      obj16.isPreviewingChanges = isPreviewingChanges;
      obj16.bubbleRef = ref;
      const items22 = [containerBackground(closure_22, obj16), , ];
      tmp56Result = null;
      if (null != stateFromStores) {
        const obj17 = { style: null, children: null };
        const items23 = [, ];
        ({ primaryInfo: arr27[0], profileContent: arr27[1] } = tmp3);
        obj17.style = items23;
        const obj18 = { user, channelId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null };
        let id4;
        if (channel != null) {
          id4 = channel.id;
        }
        obj18.channelId = id4;
        obj18.displayProfile = displayProfile;
        let tmp83;
        if (isPreviewingChanges) {
          tmp83 = pendingGlobalName;
        }
        obj18.displayNameOverride = tmp83;
        let tmp84;
        if (isPreviewingChanges) {
          tmp84 = pendingPronouns;
        }
        obj18.pronounsOverride = tmp84;
        let tmp85;
        if (isPreviewingChanges) {
          tmp85 = memo1;
        }
        obj18.badgesOverride = tmp85;
        let tmp86;
        if (isPreviewingChanges) {
          tmp86 = pendingDisplayNameStyles;
        }
        obj18.pendingDisplayNameStyles = tmp86;
        obj18.badgeContainerBackground = containerBackground;
        obj18.isPreviewingChanges = isPreviewingChanges;
        const items24 = [tmp58(boardTabIndex, obj18), , , , , , ];
        let tmp58Result1 = user.id !== stateFromStores.id;
        if (tmp58Result1) {
          const obj19 = { user, guildId: guild_id };
          tmp58Result1 = tmp58(tmp(tmp2[83]), obj19);
        }
        items24[1] = tmp58Result1;
        let tmp58Result2 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        if (tmp58Result2) {
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
          tmp58Result2 = tmp58(tmp(tmp2[84]), obj20);
          const tmpResult2 = tmp(tmp2[84]);
        }
        items24[2] = tmp58Result2;
        items24[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: null, guildId: null, style: null, showUserProfile: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guild_id;
          obj.style = obj4;
          obj.showUserProfile = showUserProfileActionSheet;
          return closure_2_19(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
        });
        const obj21 = { user, style: obj4 };
        items24[4] = tmp58(tmp(tmp2[85]), obj21);
        let tmp58Result3 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp58Result3) {
          const obj22 = { guildId: guild_id };
          tmp58Result3 = tmp58(activityTabIndex, obj22);
        }
        items24[5] = tmp58Result3;
        let tmp58Result4 = user.id !== stateFromStores.id;
        if (tmp58Result4) {
          const obj23 = { user, disableCalls: null, disableMessage: null, location: null, hasCustomProfileTheme: null, style: null };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp88.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj23.disableCalls = disableCalls;
          obj23.disableMessage = disableMessage;
          obj23.location = _location;
          obj23.hasCustomProfileTheme = tmp25;
          obj23.style = tmp3.primaryButtons;
          tmp58Result4 = tmp58(tmp(tmp2[86]), obj23);
          const tmpResult3 = tmp(tmp2[86]);
        }
        items24[6] = tmp58Result4;
        obj17.children = items24;
        tmp56Result = tmp56(tmp76, obj17);
        tmp88 = pendingBadgeHiddenBadges;
      }
      items22[1] = tmp56Result;
      if (!tmp32) {
        if (!tmp34) {
          if (!tmp35) {
            let callback4Result = callback4();
          }
          const obj24 = { children: null };
          items22[2] = callback4Result;
          obj14.children = items22;
          items20[1] = tmp56(tmp76, obj14);
          obj11.children = items20;
          items17[2] = tmp56(tmp(tmp2[81]).View, obj11);
          obj24.children = items17;
          return tmp56(tmp57, obj24);
        }
      }
      const obj25 = { onLayout: callback, children: null };
      const obj26 = { style: tmp3.profileTablist, children: null };
      const obj27 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp25) {
        str = "gradient-background";
      }
      const obj28 = { children: null };
      obj27.variant = str;
      const items25 = [containerBackground(tmp6(tmp2[88]).Tabs, obj27), ];
      const obj29 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${Math.max(wishlistTabIndex, 0) / arr18.length * 100}%`;
      obj29.style = rect;
      items25[1] = containerBackground(navigateToShop, obj29);
      obj26.children = items25;
      const items26 = [stateFromStores1(navigateToShop, obj26), , ];
      const obj30 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: null };
      const obj31 = { state: segmentedControlState };
      obj30.children = containerBackground(tmp6(tmp2[89]).SegmentedControlPages, obj31);
      items26[1] = containerBackground(tmp(tmp2[81]).View, obj30);
      const obj32 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp55 };
      items26[2] = containerBackground(tmp(tmp2[90]), obj32);
      obj28.children = items26;
      obj25.children = stateFromStores1(tmp6(tmp2[87]).LayerScope, obj28);
      callback4Result = tmp58(tmp76, obj25);
      tmp57 = stateFromStores2;
      const tmpResult1 = tmp(tmp2[79]);
    }
  }
  return null;
});
export { PrimaryInfo };