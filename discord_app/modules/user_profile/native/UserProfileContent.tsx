// === Module 14912: UserProfileContent ===

// Module 14912 (UserProfileContent)
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import UserProfileRolesCardDefault from "UserProfileRolesCard" /* 7354 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7488 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8768 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8814 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 10929 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11491 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 14180 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 14187 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14838 */;
import UserProfileModeratorActionsDefault from "UserProfileModeratorActions" /* 14900 */;
import UserProfileNoteDefault from "UserProfileNote" /* 14903 */;
import WishlistUtils from "WishlistUtils" /* 14913 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 14942 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 14943 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14946 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 14969 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14981 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 14985 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 14986 */;
import UserProfileGameFriendsCardDefault from "UserProfileGameFriendsCard" /* 14988 */;
import UserProfileConnections from "UserProfileConnections" /* 14989 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 14994 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 15000 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 15009 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8763 */;
import WishlistStore from "WishlistStore" /* 9471 */;
import GuildStore from "GuildStore" /* 4885 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8731 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function isWishlistItemShownToViewer(sku) {
  let result = null != sku.sku;
  if (result) {
    result = WishlistUtils.isEligibleWishlistItemOnMobile(sku, { isWishlistOwner: false });
  }
  return result;
}
function CustomStatusBubble(guildId) {
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[17])();
  const items = [UserStore];
  const items1 = [user];
  let stateFromStores = user(channelId[18]).useStateFromStores(items, () => {
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11409, dependencyMap.paths), "UserProfileCustomStatusActionSheet", { user, guildId, channelId }, "stack");
  }, items2);
  if (null == customStatusActivity) {
    tmp7 = null;
    if (stateFromStores) {
      tmp7 = null;
      if (!isPreviewingChanges) {
        tmp7 = tmp(tmp2[22])();
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
  const obj = user(channelId[18]);
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
  return closure_19(guildId(channelId[23]), obj2);
}
function RemoveFriendIconButton(user) {
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
  }
  const trackUserProfileAction = user(newestAnalyticsLocation[24]).useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[25])().newestAnalyticsLocation;
  const obj = user(newestAnalyticsLocation[24]);
  const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[27]).useName(user);
  const obj3 = { size: "sm", variant: "secondary-overlay", icon: closure_19(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(newestAnalyticsLocation[30]).intl;
  obj3.accessibilityLabel = intl.string(user(newestAnalyticsLocation[30]).t.cvSt1J);
  obj3.onPress = function onPress() {
    UserProfileAlertUtils.confirmRemoveFriend({ userDisplayName, onConfirm: handleConfirm });
  };
  return closure_19(user(newestAnalyticsLocation[28]).IconButton, obj3);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14915, dependencyMap.paths), "UserProfileGameFriendActionSheet", { user, guildId, channelId }, "stack");
  }, items);
  const obj = { size: "sm", variant: "secondary-overlay", icon: closure_19(user(channelId[33]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(channelId[30]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[30]).t.cvSt1J);
  obj.onPress = callback;
  return closure_19(user(channelId[28]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges, showBadgeDirectoryNuxCoachmark } = global);
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = global);
    if (showBadgeDirectoryNuxCoachmark === undefined) {
      showBadgeDirectoryNuxCoachmark = false;
    }
    closure_0 = undefined;
    trackUserProfileAction = undefined;
    tmp = trackUserProfileAction;
    tmp2 = closure_2;
    obj = trackUserProfileAction(closure_2[27]);
    userTag = obj.useUserTag(user);
    closure_0 = userTag;
    tmp5 = closure_0;
    tmp4 = trackUserProfileAction(closure_2[34])(displayProfile);
    obj2 = closure_0(closure_2[35]);
    obj1 = { userId: user.id, enabled: null, fetchCatalog: false, location: "UserProfileContent" };
    if (showBadgeDirectoryNuxCoachmark) {
      tmp6 = null;
      flag = undefined;
      if (displayProfile != null) {
        flag = displayProfile.isLoaded;
      }
      if (flag == null) {
        flag = false;
      }
      showBadgeDirectoryNuxCoachmark = flag;
    }
    obj1.enabled = showBadgeDirectoryNuxCoachmark;
    variantProps = obj2.useBadgeDirectoryNuxCoachmarkVariant(obj1).variantProps;
    tmp5Result = tmp5(tmp2[36]);
    if (null != variantProps) {
      items = [];
      items[0] = tmp5(tmp2[37]).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
      items1 = items;
    } else {
      items1 = [];
    }
    tmp7 = closure_3(tmp5Result.useSelectedDismissibleContent(items1), 2);
    [tmp8, tmp9] = tmp7;
    tmp10 = tmp8 === tmp5(tmp2[37]).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
    tmp5Result1 = tmp5(tmp2[38]);
    badgeDirectoryNuxEntryPoint = tmp5Result1.useBadgeDirectoryNuxEntryPoint(tmp10, tmp9);
    ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
    tmpResult = tmp(tmp2[39]);
    name = tmpResult.useName(guildId, channelId, user);
    tmp13 = name;
    if (null != displayNameOverride) {
      num = 0;
      tmp13 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp13 = displayNameOverride;
      }
    }
    tmp5Result2 = tmp5(tmp2[24]);
    trackUserProfileAction = tmp5Result2.useUserProfileAnalyticsContext().trackUserProfileAction;
    items2 = [, ];
    items2[0] = trackUserProfileAction;
    items2[1] = userTag;
    callback = closure_4.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      ClipboardUtils.copy(userTag);
      const result = ToastUtils.presentUsernameCopied();
    }, items2);
    tmp17 = jsx;
    tmp15 = jsxs;
    tmp16 = Fragment;
    obj10 = { user, guildId, displayName: tmp13, pronouns: null, badges: null, style: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: null, canOpenBadgeDirectory: true, badgeDirectoryEntryPointRef: null, onOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
    tmpResult1 = tmp(tmp2[42]);
    if (pronounsOverride == null) {
      pronouns = undefined;
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      pronounsOverride = pronouns;
    }
    obj10.pronouns = pronounsOverride;
    if (badgesOverride == null) {
      badgesOverride = tmp4;
    }
    obj10.badges = badgesOverride;
    obj10.style = style;
    obj10.badgeContainerBackground = badgeContainerBackground;
    tmp20 = undefined;
    if (!isPreviewingChanges) {
      tmp20 = callback;
    }
    obj10.onPressDisplayName = tmp20;
    intl = tmp5(tmp2[30]).intl;
    obj10.displayNameAccessibilityHint = intl.string(tmp5(tmp2[30]).t.y5MwJy);
    tmp21 = undefined;
    if (!isPreviewingChanges) {
      tmp21 = callback;
    }
    obj10.onPressUserTag = tmp21;
    handlePressPronouns = undefined;
    if (!isPreviewingChanges) {
      handlePressPronouns = function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        ToastUtils.presentUserPronouns();
      };
    }
    obj10.onPressPronouns = handlePressPronouns;
    obj10.showBadgeToastOnPress = !isPreviewingChanges;
    obj10.badgeDirectoryEntryPointRef = entryPointRef;
    obj10.onOpenBadgeDirectory = onOpenBadgeDirectory;
    obj10.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items3 = [, ];
    items3[0] = tmp17(tmpResult1, obj10);
    tmp17Result = null != variantProps;
    if (tmp17Result) {
      obj11 = { targetRef: null, userId: null, variantProps: null, visible: null, markAsDismissed: null };
      obj11.targetRef = entryPointRef;
      obj11.userId = user.id;
      obj11.variantProps = variantProps;
      obj11.visible = tmp10;
      obj11.markAsDismissed = tmp9;
      tmp17Result = tmp17(tmp(tmp2[43]), obj11);
    }
    items3[1] = tmp17Result;
    return tmp15(tmp16, { children: items3 });
  }
}
function EditSection(guildId) {
  guildId = guildId.guildId;
  let trackUserProfileAction;
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(8814)();
  trackUserProfileAction = guildId(8761).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = guildId(8761);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(11517)();
  closure_3 = trackUserProfileAction(11517)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const obj2 = guildId(504);
  const obj4 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmp7 = trackUserProfileAction(14836);
  obj4.icon = closure_19(guildId(10232).PencilIcon, { size: "sm", color: trackUserProfileAction(575).colors.WHITE });
  if (null != stateFromStores) {
    const intl2 = tmp4(1113).intl;
    let stringResult = intl2.string(tmp4(1113).t.HmFaFB);
  } else {
    const intl = tmp4(1113).intl;
    stringResult = intl.string(tmp4(1113).t.s5vZlQ);
  }
  obj4.text = stringResult;
  obj4.onPress = function handleEditProfile() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  };
  obj3.primaryButton = closure_19(guildId(5634).Button, obj4);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp(575).colors.WHITE };
    obj6.icon = closure_19(tmp4(10232).PencilIcon, obj7);
    const intl3 = tmp4(1113).intl;
    obj6.text = intl3.string(tmp4(1113).t["PKQB/H"]);
    obj6.onPress = function handleEditGuildProfile() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = closure_19(tmp4(5634).Button, obj6);
  }
  obj3.secondaryButton = tmp6Result;
  return closure_19(tmp7, obj3);
}
function UserProfileWidgetsBoardContainer(isCurrentUser) {
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp3 = UserProfileSharedStylesDefault();
  const items = [tmp3.card, { backgroundColor: containerBackground }];
  const obj = { style: tmp3.profileContent, children: null };
  let tmp6 = isCurrentUser;
  if (isCurrentUser) {
    tmp6 = closure_1_19(UserProfileWidgetsBoardEditNoticeDefault, {});
  }
  const items1 = [tmp6, , ];
  if (isCurrentUser) {
    isCurrentUser = closure_1_19(ConjureCustomWidgetAddOptionDefault, {});
  }
  items1[1] = isCurrentUser;
  items1[2] = closure_1_19(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
  obj.children = items1;
  return __initData(View, obj);
}
function UserProfileActivityTabContainer(arg0) {
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  const items = [tmp.card, { backgroundColor: containerBackground }];
  const obj = { style: null, children: closure_1_19(UserProfileActivityTabDefault, { user, currentUser, guildId, channelId, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  obj.style = items1;
  return closure_1_19(View, obj);
}
const View = fn(17).View;
const UserProfileSections = fn(8754).UserProfileSections;
const Constants = fn(7377);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = Constants);
const RelationshipTypes = fn(1072).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(5273).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
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
  let stateFromStores;
  let isCurrentUser;
  let userProfileGameFriendApplicationIds;
  let name;
  let pendingBio;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  closure_17 = undefined;
  let stateFromStoresArray;
  let isBadgeManagementEnabled;
  let hasCustomProfileTheme;
  let containerBackground;
  let stateFromStores1;
  let stateFromStores2;
  closure_24 = undefined;
  closure_25 = undefined;
  closure_26 = undefined;
  let wishlistTabIndex;
  c28 = undefined;
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
  let obj9;
  ({ disableMessage, navigationReplace, disableStatus, location: _location, initialSection, scrollViewRef } = user);
  const tmp3 = channel(guildId[17])();
  closure_8 = tmp3;
  const tmp4 = channel(guildId[54])(closure_17);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(guildId[55])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(guildId[55])({ scrollPosition, bannerHeight: tmp4 });
  const trackUserProfileAction = user(guildId[24]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(guildId[24]);
  let items1 = [stateFromStores];
  stateFromStores = user(guildId[18]).useStateFromStores(items1, () => stateFromStores.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp9 = id === user.id;
  isCurrentUser = tmp9;
  let shouldLogExposure = tmp(tmp2[57])(user, { isItemShown: stateFromStores1 }).shouldLogExposure;
  let obj2 = user(guildId[18]);
  let obj3 = { isItemShown: stateFromStores1 };
  let items2 = [trackUserProfileAction];
  const stateFromStoresObject = user(guildId[18]).useStateFromStoresObject(items2, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result = user(guildId[18]);
  const incomingGameRelationshipsForUser = user(guildId[58]).useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result21 = user(guildId[58]);
  const isGameFriends = user(guildId[59]).useIsGameFriends(user.id);
  const tmp6Result22 = user(guildId[59]);
  userProfileGameFriendApplicationIds = user(guildId[60]).useUserProfileGameFriendApplicationIds({ userId: user.id });
  let obj4 = { userId: user.id };
  const tmp6Result23 = user(guildId[60]);
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  name = channel(guildId[39]).useName(guildId, id1, user);
  const items3 = [guildId, user];
  const memo = showUserProfileActionSheet.useMemo(() => {
    if (null != guildId) {
      if (null != user) {
        const obj = {};
        const items = [tmp2.id];
        obj[tmp] = items;
      }
      return {};
    }
  }, items3);
  const tmpResult = channel(guildId[39]);
  const subscribeGuildMembers = user(guildId[61]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(guildId[62])(user.id);
  const tmp6Result24 = user(guildId[61]);
  const items4 = [isCurrentUser];
  const stateFromStoresObject1 = user(guildId[18]).useStateFromStoresObject(items4, () => isCurrentUser.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result25 = user(guildId[18]);
  const pendingAvatarSrc = user(guildId[63]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp20 = channel(guildId[34])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp20;
  let obj5 = { userId: user.id, image: pendingAvatar };
  const tmp6Result26 = user(guildId[63]);
  const items5 = [navigateToPremium];
  const items6 = [user.id];
  stateFromStoresArray = user(guildId[18]).useStateFromStoresArray(items5, () => BadgeDirectoryStore.getBadges(user.id), items6);
  const tmp6Result27 = user(guildId[18]);
  isBadgeManagementEnabled = user(guildId[64]).useIsBadgeManagementEnabled({ location: "UserProfileContent" });
  const items7 = [user.id, isBadgeManagementEnabled];
  const effect = showUserProfileActionSheet.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(user.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
    }
  }, items7);
  const items8 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = showUserProfileActionSheet.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_17, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items8);
  let obj6 = { user, displayProfile, pendingThemeColors: null };
  let tmp26;
  const tmp6Result28 = user(guildId[64]);
  if (isPreviewingChanges) {
    tmp26 = pendingThemeColors;
  }
  obj6.pendingThemeColors = tmp26;
  const tmpResult1Result = channel(guildId[67])(obj6);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp28;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult5 = channel(guildId[67]);
  const userProfileColors = user(guildId[68]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp6Result29 = user(guildId[68]);
  const ref1 = showUserProfileActionSheet.useRef(null);
  const ref = showUserProfileActionSheet.useRef(null);
  const items9 = [userProfileGameFriendApplicationIds];
  stateFromStores1 = user(guildId[18]).useStateFromStores(items9, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result30 = user(guildId[18]);
  const fetchWishlist = user(guildId[69]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj7 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result31 = user(guildId[69]);
  const items10 = [navigateToShop];
  const items11 = [stateFromStores1];
  stateFromStores2 = user(guildId[18]).useStateFromStores(items10, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items11);
  const items12 = [stateFromStores2, tmp9];
  let tmp35 = tmp9;
  if (!tmp9) {
    let tmp36 = null != stateFromStores2;
    if (tmp36) {
      tmp36 = arr14.length > 0;
    }
    tmp35 = tmp36;
  }
  closure_24 = tmp35;
  const tmp6Result32 = user(guildId[18]);
  const displayableBoardWidgets = user(guildId[70]).useDisplayableBoardWidgets(user.id);
  const tmp6Result33 = user(guildId[70]);
  const tmp37 = displayableBoardWidgets.length > 0 || user(guildId[71]).useCanConjureCustomWidget("UserProfileContent", tmp9);
  closure_25 = tmp37;
  const tmp6Result34 = user(guildId[71]);
  const tmp38 = user(guildId[72]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp38;
  const tmp6Result35 = user(guildId[72]);
  const profileTabIndices = user(guildId[73]).useProfileTabIndices(tmp37, tmp38, tmp35);
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  ({ boardTabIndex, activityTabIndex } = profileTabIndices);
  const tmp6Result36 = user(guildId[73]);
  [tmp41, c28] = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const callback = obj10.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp40 = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const wishlistViewerCoachmark = user(guildId[74]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp35 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items13 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj10.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
    const obj = { action: "PRESS_SECTION", section };
    tmp2 = section === UserProfileSections.WISHLIST && isVisible;
  }, items13);
  const tmp6Result37 = user(guildId[74]);
  const profileSectionTabs = user(guildId[73]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp46;
  isVisible2 = tmp47;
  const items14 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj10.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items14);
  const items15 = [navigateToShop];
  callback3 = obj10.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items15);
  const items16 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guildId, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj10.useCallback(() => {
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
          _private = closure_2_19(UserProfilePrivateInfoBannerDefault, obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = user.isProvisional;
        if (isProvisional) {
          const obj4 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = closure_2_19(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj4);
        }
        items2[1] = isProvisional;
        let tmp10 = user.id === stateFromStores.id;
        if (tmp10) {
          tmp10 = !isPreviewingChanges;
        }
        if (tmp10) {
          const obj5 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = closure_2_19(UserProfileDismissibleUpsellsDefault, obj5);
        }
        items2[2] = tmp10;
        const obj6 = { user, currentUser: stateFromStores, guildId, style: items };
        items2[3] = closure_2_19(UserProfileActivityDefault, obj6);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          const obj7 = { userId: user.id, applicationIds: tmp22 };
          tmp18Result = closure_2_19(UserProfileGameFriendsCardDefault, obj7);
        }
        items2[4] = tmp18Result;
        obj9 = { userId: user.id, displayProfile, pendingBio: null };
        let tmp26;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        obj9.pendingBio = tmp26;
        items2[5] = closure_2_19(UserProfileAboutMeCardDefault, obj9);
        let tmp18Result4 = null != guildId;
        if (tmp18Result4) {
          const obj10 = { userId: user.id, guildId };
          tmp18Result4 = closure_2_19(UserProfileRolesCardDefault, obj10);
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
          tmp18Result5 = closure_2_19(UserProfileModeratorActionsDefault, obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = closure_2_19(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = closure_2_19(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !isPreviewingChanges;
        if (!isPreviewingChanges) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = closure_2_19(UserProfileNoteDefault, obj25);
        }
        items2[10] = tmp18Result6;
        obj3.children = items2;
        return __initData(View, obj3);
      }
    }
    return null;
  }, items16);
  const items17 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, tmp9];
  callback5 = obj10.useCallback(() => {
    const obj = { style: closure_8.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = closure_2_19(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp9 = closure_2_19;
    } else {
      const obj2 = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp9 = closure_2_19;
      tmp10 = closure_2_19(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp10, ];
    let tmp9Result = closure_11;
    if (closure_11) {
      const obj3 = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
    }
    items[1] = tmp9Result;
    obj.children = items;
    return __initData(View, obj);
  }, items17);
  const items18 = [callback4, callback5, tmp37, tmp38, tmp35, user, stateFromStores, guildId, , , , ];
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  items18[8] = id2;
  items18[9] = activeProfileTabSection === name.WIDGETS;
  items18[10] = tmp9;
  items18[11] = containerBackground;
  const memo2 = obj10.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = callback4();
    const items = [obj];
    if (closure_25) {
      const obj2 = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.laViwx);
      const obj3 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      obj2.page = closure_2_19(UserProfileWidgetsBoardContainer, obj3);
      items.push(obj2);
    }
    let tmp10 = closure_26;
    if (closure_26) {
      tmp10 = null != stateFromStores;
    }
    if (tmp10) {
      const obj4 = { id: "activity", label: null, page: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.chq59f);
      const obj5 = { user, currentUser: stateFromStores, guildId, channelId: null, containerBackground: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj5.channelId = id;
      obj5.containerBackground = containerBackground;
      obj4.page = closure_2_19(UserProfileActivityTabContainer, obj5);
      items.push(obj4);
    }
    if (closure_24) {
      const obj6 = { id: "wishlist", label: null, page: null };
      const intl4 = util.intl;
      obj6.label = intl4.string(util.t["7lZ31J"]);
      obj6.page = callback5();
      items.push(obj6);
    }
    return items;
  }, items18);
  const tmp6Result38 = user(guildId[73]);
  const measuredTabItems = user(guildId[87]).useMeasuredTabItems(memo2);
  ({ items, pageHeights } = measuredTabItems);
  const tmp6Result39 = user(guildId[87]);
  const tmp6Result40 = user(guildId[88]);
  segmentedControlState = tmp6Result40.useSegmentedControlState({ pageWidth: tmp41, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(guildId[48]).space.PX_24, items, onPageChange: handleTabChange });
  const items19 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj10.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items19);
  const items20 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  if (null != user) {
    if (null != stateFromStores) {
      obj9 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp100);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp100).OpenableUserProfileAvatar;
      }
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp60 = true === _private;
      if (tmp60) {
        let obj11 = { style: null, children: null };
        const items21 = [tmp3.privateBanner, bannerAnimatedStyle];
        obj11.style = items21;
        let obj12 = { primaryColor };
        obj11.children = isBadgeManagementEnabled(tmp(tmp2[91]), obj12);
        tmp60 = isBadgeManagementEnabled(tmp(tmp2[90]).View, obj11);
      }
      const items22 = [tmp60, , , ];
      let obj13 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null };
      let tmp64;
      if (isPreviewingChanges) {
        tmp64 = pendingBanner;
      }
      obj13.pendingBanner = tmp64;
      let tmp65;
      if (isPreviewingChanges) {
        tmp65 = pendingAvatarSrc;
      }
      obj13.pendingAvatarSrc = tmp65;
      let tmp66;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp66 = pendingAccentColor;
        }
      }
      obj13.pendingAccentColor = tmp66;
      let tmp67;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp67 = pendingThemeColors;
        }
      }
      obj13.pendingThemeColors = tmp67;
      obj13.disableInteraction = isPreviewingChanges;
      obj13.bannerAnimatedStyle = bannerAnimatedStyle;
      obj13.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj13.blurAnimatedProps = blurAnimatedProps;
      obj13.showBlur = showBlur;
      items22[1] = isBadgeManagementEnabled(tmp(tmp2[92]), obj13);
      let tmp57Result = !isPreviewingChanges;
      if (!isPreviewingChanges) {
        const items23 = [tmp3.bannerButtons, , ];
        let _private1;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        const obj14 = { style: null, children: null };
        items23[1] = _private1;
        items23[2] = bannerAnimatedStyle;
        obj14.style = items23;
        let tmp70 = null;
        if (null != stateFromStores) {
          tmp70 = null;
          if (user.id !== stateFromStores.id) {
            tmp70 = null;
            if (!user.bot) {
              if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                const obj15 = { user };
                let tmp62Result = tmp62(closure_24, obj15);
              } else {
                tmp62Result = null;
                if (isGameFriends) {
                  const obj16 = { user };
                  tmp62Result = tmp62(closure_25, obj16);
                }
              }
            }
          }
        }
        const items24 = [tmp70, ];
        const obj17 = { user, currentUser: stateFromStores, displayProfile, channel };
        items24[1] = tmp62(tmp(tmp2[93]), obj17);
        obj14.children = items24;
        tmp57Result = tmp57(tmp(tmp2[90]).View, obj14);
      }
      items22[2] = tmp57Result;
      const obj18 = { style: contentAnimatedStyle, children: null };
      const obj19 = { user, guildId, disableStatus, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      let tmp76;
      if (isPreviewingChanges) {
        tmp76 = pendingAvatarSrc;
      }
      obj19.pendingAvatarSrc = tmp76;
      let tmp77;
      if (isPreviewingChanges) {
        if (avatarDecorationOverride == null) {
          avatarDecorationOverride = pendingAvatarDecoration;
        }
        tmp77 = avatarDecorationOverride;
      }
      obj19.pendingAvatarDecoration = tmp77;
      obj19.backgroundColor = avatarBackground;
      const obj20 = { backgroundColor: statusBackground };
      obj19.statusStyle = obj20;
      const items25 = [isBadgeManagementEnabled(OpenableUserProfileAvatar, obj19), ];
      const items26 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        let num2 = 0;
        if (null == tmp17) {
          num2 = pendingBadgeDisplayOrder;
        }
      } else {
        num2 = 0;
      }
      const obj21 = { style: null, children: null };
      const obj22 = { paddingTop: num2, paddingBottom: channel(guildId[56])().bottom + pendingBio };
      items26[1] = obj22;
      obj21.style = items26;
      const obj23 = { customStatusActivity: tmp17, user, guildId, channelId: null, hasCustomProfileTheme: null, showUserProfileActionSheet: null, isPreviewingChanges: null, bubbleRef: null };
      let id3;
      if (channel != null) {
        id3 = channel.id;
      }
      obj23.channelId = id3;
      obj23.hasCustomProfileTheme = tmp28;
      obj23.showUserProfileActionSheet = showUserProfileActionSheet;
      obj23.isPreviewingChanges = isPreviewingChanges;
      obj23.bubbleRef = ref;
      const items27 = [isBadgeManagementEnabled(stateFromStores2, obj23), ];
      let tmp57Result2 = null;
      if (null != stateFromStores) {
        const obj24 = { style: null, children: null };
        const items28 = [, ];
        ({ primaryInfo: arr32[0], profileContent: arr32[1] } = tmp3);
        obj24.style = items28;
        let obj25 = { user, channelId: null, guildId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null, showBadgeDirectoryNuxCoachmark: null };
        let id4;
        if (channel != null) {
          id4 = channel.id;
        }
        obj25.channelId = id4;
        obj25.guildId = guildId;
        obj25.displayProfile = displayProfile;
        let tmp85;
        if (isPreviewingChanges) {
          tmp85 = pendingGlobalName;
        }
        obj25.displayNameOverride = tmp85;
        let tmp86;
        if (isPreviewingChanges) {
          tmp86 = pendingPronouns;
        }
        obj25.pronounsOverride = tmp86;
        let tmp87;
        if (isPreviewingChanges) {
          tmp87 = memo1;
        }
        obj25.badgesOverride = tmp87;
        let tmp88;
        if (isPreviewingChanges) {
          tmp88 = pendingDisplayNameStyles;
        }
        obj25.pendingDisplayNameStyles = tmp88;
        obj25.badgeContainerBackground = containerBackground;
        obj25.isPreviewingChanges = isPreviewingChanges;
        if (tmp9) {
          tmp9 = !isPreviewingChanges;
        }
        obj25.showBadgeDirectoryNuxCoachmark = tmp9;
        const items29 = [tmp62(closure_26, obj25), , , , , , ];
        let tmp62Result5 = user.id !== stateFromStores.id;
        if (tmp62Result5) {
          const obj26 = { user, guildId };
          tmp62Result5 = tmp62(tmp(tmp2[95]), obj26);
        }
        items29[1] = tmp62Result5;
        let tmp62Result6 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        if (tmp62Result6) {
          const obj27 = { user, channelId: null, guildId: null, applicationId: null, style: null, showUserProfile: null };
          let id5;
          if (channel != null) {
            id5 = channel.id;
          }
          obj27.channelId = id5;
          obj27.guildId = guildId;
          obj27.applicationId = originApplicationId;
          obj27.style = obj9;
          obj27.showUserProfile = showUserProfileActionSheet;
          tmp62Result6 = tmp62(tmp(tmp2[96]), obj27);
          const tmpResult7 = tmp(tmp2[96]);
        }
        items29[2] = tmp62Result6;
        items29[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: null, guildId: null, style: null, showUserProfile: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guildId;
          obj.style = obj9;
          obj.showUserProfile = showUserProfileActionSheet;
          return closure_2_19(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
        });
        const obj28 = { user, style: obj9 };
        items29[4] = tmp62(tmp(tmp2[97]), obj28);
        let tmp62Result7 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp62Result7) {
          const obj29 = { guildId };
          tmp62Result7 = tmp62(wishlistTabIndex, obj29);
        }
        items29[5] = tmp62Result7;
        let tmp62Result8 = user.id !== stateFromStores.id;
        if (tmp62Result8) {
          const obj30 = { user, disableCalls: null, disableMessage: null, navigationReplace: null, location: null, hasCustomProfileTheme: null, style: null };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp90.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj30.disableCalls = disableCalls;
          obj30.disableMessage = disableMessage;
          obj30.navigationReplace = navigationReplace;
          obj30.location = _location;
          obj30.hasCustomProfileTheme = tmp28;
          obj30.style = tmp3.primaryButtons;
          tmp62Result8 = tmp62(tmp(tmp2[98]), obj30);
          const tmpResult8 = tmp(tmp2[98]);
        }
        items29[6] = tmp62Result8;
        obj24.children = items29;
        tmp57Result2 = tmp57(tmp78, obj24);
        tmp90 = pendingBadgeHiddenBadges;
      }
      const items30 = [tmp57Result2, ];
      if (!tmp35) {
        if (!tmp37) {
          if (!tmp38) {
            let callback4Result = callback4();
          }
          const obj31 = { children: null };
          const obj32 = { children: null };
          items30[1] = callback4Result;
          obj32.children = items30;
          items27[1] = tmp57(tmp6(tmp2[94]).LayerScope, obj32);
          obj21.children = items27;
          items25[1] = tmp57(tmp78, obj21);
          obj18.children = items25;
          items22[3] = tmp57(tmp(tmp2[90]).View, obj18);
          obj31.children = items22;
          return tmp57(tmp58, obj31);
        }
      }
      const obj33 = { onLayout: callback, children: null };
      const obj34 = { style: tmp3.profileTablist, children: null };
      if (shouldLogExposure) {
        shouldLogExposure = tmp62(tmp6(tmp2[99]).ProfileReadStateExposure, { location: "UserProfileContent" });
      }
      const items31 = [shouldLogExposure, , ];
      const obj35 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp28) {
        str = "overlay";
      }
      const obj36 = { children: null };
      obj35.variant = str;
      items31[1] = isBadgeManagementEnabled(tmp6(tmp2[100]).Tabs, obj35);
      const obj37 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${Math.max(wishlistTabIndex, 0) / arr22.length * 100}%`;
      obj37.style = rect;
      items31[2] = isBadgeManagementEnabled(isPreviewingChanges, obj37);
      obj34.children = items31;
      const items32 = [containerBackground(isPreviewingChanges, obj34), , ];
      const obj38 = { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef };
      items32[1] = isBadgeManagementEnabled(tmp(tmp2[87]), obj38);
      const obj39 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp56 };
      items32[2] = isBadgeManagementEnabled(tmp(tmp2[101]), obj39);
      obj36.children = items32;
      obj33.children = containerBackground(tmp6(tmp2[94]).LayerScope, obj36);
      callback4Result = tmp62(tmp78, obj33);
      tmp58 = hasCustomProfileTheme;
      const tmpResult6 = tmp(tmp2[92]);
    }
  }
  return null;
});
export { PrimaryInfo };