// discord_app/modules/user_profile/native/UserProfileContent.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02123_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserProfileRolesCardDefault from "UserProfileRolesCard.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import closeVoicePanelsDefault from "../../voice_panel/native/utils/closeVoicePanels.tsx";
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import ProvisionalAccountExplainer from "../../provisional_accounts/native/ProvisionalAccountExplainer.tsx";
import UserProfileActivityDefault from "UserProfileActivity.tsx";
import UserProfileModeratorActionsDefault from "UserProfileModeratorActions.tsx";
import UserProfileNoteDefault from "UserProfileNote.tsx";
import WishlistUtils from "../../wishlists/WishlistUtils.tsx";
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice.tsx";
import ConjureCustomWidgetAddOptionDefault from "../../conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx";
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard.tsx";
import UserProfileActivityTabDefault from "UserProfileActivityTab.tsx";
import PendingBadgeSettings from "../../badges/PendingBadgeSettings.tsx";
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner.tsx";
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells.tsx";
import UserProfileGameFriendsCardDefault from "UserProfileGameFriendsCard.tsx";
import UserProfileConnections from "UserProfileConnections.tsx";
import UserProfileWishlistGrid from "UserProfileWishlistGrid.tsx";
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid.tsx";
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

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
  items = [UserStore];
  const items1 = [user];
  let stateFromStores = user(channelId[18]).useStateFromStores(
    items,
    () => {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id === user.id;
    },
    items1,
  );
  const items2 = [channelId, guildId, user];
  let tmp7 = null;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(11599, dependencyMap.paths),
      "UserProfileCustomStatusActionSheet",
      { user, guildId, channelId },
      "stack",
    );
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
  const obj2 = {
    ref: bubbleRef,
    customStatusActivity,
    hasCustomProfileTheme,
    editEnabled: null,
    onPressTruncatedStatus: null,
    style: null,
    emojiOnlyStyle: null,
    placeholderText: null,
    prompt: null,
  };
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
  const items3 = [,];
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
  const trackUserProfileAction = user(newestAnalyticsLocation[24]).useUserProfileAnalyticsContext()
    .trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[25])().newestAnalyticsLocation;
  const obj = user(newestAnalyticsLocation[24]);
  const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[27]).useName(user);
  const obj3 = {
    size: "sm",
    variant: "secondary-overlay",
    icon: closure_19(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" }),
    accessibilityLabel: null,
    onPress: null,
  };
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
  items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(15129, dependencyMap.paths),
      "UserProfileGameFriendActionSheet",
      { user, guildId, channelId },
      "stack",
    );
  }, items);
  const obj = {
    size: "sm",
    variant: "secondary-overlay",
    icon: closure_19(user(channelId[33]).UserPlatformIcon, { size: "sm", color: "white" }),
    accessibilityLabel: null,
    onPress: null,
  };
  const intl = user(channelId[30]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[30]).t.cvSt1J);
  obj.onPress = callback;
  return closure_19(user(channelId[28]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({
      user,
      guildId,
      displayProfile,
      displayNameOverride,
      pronounsOverride,
      badgesOverride,
      isPreviewingChanges,
      showBadgeDirectoryNuxCoachmark,
    } = global);
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground, profileBackgroundColor } = global);
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
    items2 = [,];
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
    obj10 = {
      user,
      guildId,
      displayName: tmp13,
      pronouns: null,
      badges: null,
      style: null,
      badgeContainerBackground: null,
      profileBackgroundColor: null,
      onPressDisplayName: null,
      displayNameAccessibilityHint: null,
      onPressUserTag: null,
      onPressPronouns: null,
      showBadgeToastOnPress: null,
      canOpenBadgeDirectory: true,
      badgeDirectoryEntryPointRef: null,
      onOpenBadgeDirectory: null,
      pendingDisplayNameStyles: null,
    };
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
    obj10.profileBackgroundColor = profileBackgroundColor;
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
    items3 = [,];
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
  const tmp3 = trackUserProfileAction(8955)();
  trackUserProfileAction = guildId(8902).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = guildId(8902);
  items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(11707)();
  closure_3 = trackUserProfileAction(11707)({ guild: stateFromStores });
  const obj3 = {
    style: tmp3.primaryButtons,
    maxWidth: ACTION_SHEET_MAX_WIDTH,
    primaryButton: null,
    secondaryButton: null,
  };
  const obj2 = guildId(504);
  const obj4 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmp7 = trackUserProfileAction(15052);
  obj4.icon = closure_19(guildId(10410).PencilIcon, { size: "sm", color: trackUserProfileAction(575).colors.WHITE });
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
  obj3.primaryButton = closure_19(guildId(5768).Button, obj4);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp(575).colors.WHITE };
    obj6.icon = closure_19(tmp4(10410).PencilIcon, obj7);
    const intl3 = tmp4(1113).intl;
    obj6.text = intl3.string(tmp4(1113).t["PKQB/H"]);
    obj6.onPress = function handleEditGuildProfile() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = closure_19(tmp4(5768).Button, obj6);
  }
  obj3.secondaryButton = tmp6Result;
  return closure_19(tmp7, obj3);
}
function UserProfileWidgetsBoardContainer(isCurrentUser) {
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp3 = UserProfileSharedStylesDefault();
  items = [tmp3.card, { backgroundColor: containerBackground }];
  const obj = { style: tmp3.profileContent, children: null };
  let tmp6 = isCurrentUser;
  if (isCurrentUser) {
    tmp6 = expandedHeight(UserProfileWidgetsBoardEditNoticeDefault, {});
  }
  const items1 = [tmp6, ,];
  if (isCurrentUser) {
    isCurrentUser = expandedHeight(ConjureCustomWidgetAddOptionDefault, {});
  }
  items1[1] = isCurrentUser;
  items1[2] = expandedHeight(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
  obj.children = items1;
  return guild(View, obj);
}
function UserProfileActivityTabContainer(arg0) {
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  items = [tmp.card, { backgroundColor: containerBackground }];
  const obj = {
    style: null,
    children: expandedHeight(UserProfileActivityTabDefault, {
      user,
      currentUser,
      guildId,
      channelId,
      cardStyle: items,
    }),
  };
  const items1 = [,];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  obj.style = items1;
  return expandedHeight(View, obj);
}
const View = fn(17).View;
const UserProfileSections = fn(8895).UserProfileSections;
const Constants = fn(7513);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = Constants);
const RelationshipTypes = fn(1072).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(5397).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(4987).ContentDismissActionType;
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
  hasNewWishlistItems = undefined;
  let ref;
  let wishlistTabIndex;
  c30 = undefined;
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
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(
    guildId[55],
  )({ scrollPosition, bannerHeight: tmp4 }));
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
  let obj2 = user(guildId[18]);
  let obj3 = { isItemShown: stateFromStores1 };
  ({ shouldLogExposure, hasNewWishlistItems } = channel(guildId[57])(user, { isItemShown: stateFromStores1 }));
  let tmp10 = channel(guildId[57])(user, { isItemShown: stateFromStores1 });
  let items2 = [trackUserProfileAction];
  const stateFromStoresObject = user(guildId[18]).useStateFromStoresObject(items2, () => ({
    relationshipType: RelationshipStore.getRelationshipType(user.id),
    originApplicationId: RelationshipStore.getOriginApplicationId(user.id),
  }));
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
        items = [tmp2.id];
        obj[tmp] = items;
      }
      return {};
    }
  }, items3);
  const tmpResult = channel(guildId[39]);
  const subscribeGuildMembers = user(guildId[61]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp18 = channel(guildId[62])(user.id);
  const tmp6Result24 = user(guildId[61]);
  const items4 = [isCurrentUser];
  const stateFromStoresObject1 = user(guildId[18]).useStateFromStoresObject(items4, () =>
    isCurrentUser.getPendingChanges(),
  );
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({
    pendingBanner,
    pendingAvatar,
    pendingAvatarDecoration,
    pendingGlobalName,
    pendingPronouns,
    pendingLegacyUsernameDisabled,
    pendingDisplayNameStyles,
  } = stateFromStoresObject1);
  const tmp6Result25 = user(guildId[18]);
  const pendingAvatarSrc = user(guildId[63]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp21 = channel(guildId[34])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp21;
  let obj5 = { userId: user.id, image: pendingAvatar };
  const tmp6Result26 = user(guildId[63]);
  const items5 = [navigateToPremium];
  const items6 = [user.id];
  stateFromStoresArray = user(guildId[18]).useStateFromStoresArray(
    items5,
    () => BadgeDirectoryStore.getBadges(user.id),
    items6,
  );
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
  const items8 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = showUserProfileActionSheet.useMemo(
    () =>
      PendingBadgeSettings.getPendingProfileBadges(closure_17, stateFromStoresArray, {
        pendingBadgeDisplayOrder,
        pendingBadgeHiddenBadges,
      }),
    items8,
  );
  let obj6 = { user, displayProfile, pendingThemeColors: null };
  let tmp27;
  const tmp6Result28 = user(guildId[64]);
  if (isPreviewingChanges) {
    tmp27 = pendingThemeColors;
  }
  obj6.pendingThemeColors = tmp27;
  const tmpResult1Result = channel(guildId[67])(obj6);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp29;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult5 = channel(guildId[67]);
  const userProfileColors = user(guildId[68]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ statusBackground, avatarBackground } = userProfileColors);
  ref = obj10.useRef(null);
  const ref1 = showUserProfileActionSheet.useRef(null);
  const tmp6Result29 = user(guildId[68]);
  const items9 = [userProfileGameFriendApplicationIds];
  stateFromStores1 = user(guildId[18]).useStateFromStores(items9, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result30 = user(guildId[18]);
  const fetchWishlist = user(guildId[69]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj7 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result31 = user(guildId[69]);
  const items10 = [navigateToShop];
  const items11 = [stateFromStores1];
  stateFromStores2 = user(guildId[18]).useStateFromStores(
    items10,
    () => {
      let wishlist = null;
      if (null != stateFromStores1) {
        wishlist = WishlistStore.getWishlist(tmp);
      }
      return wishlist;
    },
    items11,
  );
  const items12 = [stateFromStores2, tmp9];
  let tmp36 = tmp9;
  if (!tmp9) {
    let tmp37 = null != stateFromStores2;
    if (tmp37) {
      tmp37 = arr14.length > 0;
    }
    tmp36 = tmp37;
  }
  closure_24 = tmp36;
  const tmp6Result32 = user(guildId[18]);
  const displayableBoardWidgets = user(guildId[70]).useDisplayableBoardWidgets(user.id);
  const tmp6Result33 = user(guildId[70]);
  const tmp38 =
    displayableBoardWidgets.length > 0 || user(guildId[71]).useCanConjureCustomWidget("UserProfileContent", tmp9);
  closure_25 = tmp38;
  const tmp6Result34 = user(guildId[71]);
  const tmp39 = user(guildId[72]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp39;
  let tmp40 = tmp36;
  if (tmp36) {
    tmp40 = hasNewWishlistItems;
  }
  hasNewWishlistItems = tmp40;
  ref = obj10.useRef(false);
  const items13 = [tmp40, trackUserProfileAction];
  const effect1 = obj10.useEffect(() => {
    let tmp = hasNewWishlistItems;
    if (hasNewWishlistItems) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      trackUserProfileAction({ action: "VIEW_NEW_CONTENT_TAB_BADGE" });
    }
  }, items13);
  const tmp6Result35 = user(guildId[72]);
  const profileTabIndices = user(guildId[73]).useProfileTabIndices(tmp38, tmp39, tmp36);
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  ({ boardTabIndex, activityTabIndex } = profileTabIndices);
  const tmp6Result36 = user(guildId[73]);
  [tmp44, c30] = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const callback = obj10.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp43 = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const wishlistViewerCoachmark = user(guildId[74]).useWishlistViewerCoachmark({
    isCurrentUser: tmp9,
    shouldShowWishlistTab: tmp36,
  });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items14 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj10.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
    const obj = { action: "PRESS_SECTION", section };
    tmp2 = section === UserProfileSections.WISHLIST && isVisible;
  }, items14);
  const tmp6Result37 = user(guildId[74]);
  const profileSectionTabs = user(guildId[73]).useProfileSectionTabs({
    initialUserProfileSection: initialSection,
    wishlistTabIndex,
    boardTabIndex,
    activityTabIndex,
    onTabChange: callback1,
  });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp49;
  isVisible2 = tmp50;
  const items15 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj10.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items15);
  const items16 = [navigateToShop];
  callback3 = obj10.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items16);
  const items17 = [
    user,
    stateFromStores,
    containerBackground,
    tmp3,
    isPreviewingChanges,
    callback2,
    callback3,
    null != primaryColor,
    guildId,
    userProfileGameFriendApplicationIds,
    displayProfile,
    name,
    pendingBio,
    channel,
    showUserProfileActionSheet,
  ];
  callback4 = obj10.useCallback(() => {
    if (null != user) {
      if (null != stateFromStores) {
        items = [closure_8.card];
        const obj2 = { backgroundColor: containerBackground };
        items[1] = obj2;
        const obj3 = { style: null, children: null };
        const items1 = [,];
        ({ cards: arr3[0], profileContent: arr3[1] } = closure_8);
        obj3.style = items1;
        let _private;
        if (displayProfile != null) {
          _private = displayProfile.private;
        }
        if (_private) {
          const obj = { username: name, containerBackground };
          _private = expandedHeight(UserProfilePrivateInfoBannerDefault, obj);
        }
        const items2 = [_private, , , , , , , , , ,];
        let isProvisional = user.isProvisional;
        if (isProvisional) {
          const obj4 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = expandedHeight(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj4);
        }
        items2[1] = isProvisional;
        let tmp10 = user.id === stateFromStores.id;
        if (tmp10) {
          tmp10 = !isPreviewingChanges;
        }
        if (tmp10) {
          const obj5 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = expandedHeight(UserProfileDismissibleUpsellsDefault, obj5);
        }
        items2[2] = tmp10;
        const obj6 = { user, currentUser: stateFromStores, guildId, style: items };
        items2[3] = expandedHeight(UserProfileActivityDefault, obj6);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          const obj7 = { userId: user.id, applicationIds: tmp22 };
          tmp18Result = expandedHeight(UserProfileGameFriendsCardDefault, obj7);
        }
        items2[4] = tmp18Result;
        obj9 = { userId: user.id, displayProfile, pendingBio: null };
        let tmp26;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        obj9.pendingBio = tmp26;
        items2[5] = expandedHeight(UserProfileAboutMeCardDefault, obj9);
        let tmp18Result4 = null != guildId;
        if (tmp18Result4) {
          const obj10 = { userId: user.id, guildId };
          tmp18Result4 = expandedHeight(UserProfileRolesCardDefault, obj10);
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
          tmp18Result5 = expandedHeight(UserProfileModeratorActionsDefault, obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = expandedHeight(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = expandedHeight(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !isPreviewingChanges;
        if (!isPreviewingChanges) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = expandedHeight(UserProfileNoteDefault, obj25);
        }
        items2[10] = tmp18Result6;
        obj3.children = items2;
        return guild(View, obj3);
      }
    }
    return null;
  }, items17);
  const items18 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, tmp9];
  callback5 = obj10.useCallback(() => {
    const obj = { style: closure_8.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = expandedHeight(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp9 = expandedHeight;
    } else {
      const obj2 = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp9 = expandedHeight;
      tmp10 = expandedHeight(UserProfileWishlistGridDefault, obj2);
    }
    items = [tmp10];
    let tmp9Result = closure_11;
    if (closure_11) {
      const obj3 = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
    }
    items[1] = tmp9Result;
    obj.children = items;
    return guild(View, obj);
  }, items18);
  const items19 = [callback4, callback5, tmp40, tmp38, tmp39, tmp36, user, stateFromStores, guildId, , , ,];
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  items19[9] = id2;
  items19[10] = activeProfileTabSection === name.WIDGETS;
  items19[11] = tmp9;
  items19[12] = containerBackground;
  const memo2 = obj10.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = callback4();
    items = [obj];
    if (closure_25) {
      const obj2 = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.laViwx);
      const obj3 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      obj2.page = expandedHeight(UserProfileWidgetsBoardContainer, obj3);
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
      obj4.page = expandedHeight(UserProfileActivityTabContainer, obj5);
      items.push(obj4);
    }
    if (closure_24) {
      const obj6 = { id: "wishlist", label: null, page: null, indicatorDot: null };
      const intl4 = util.intl;
      obj6.label = intl4.string(util.t["7lZ31J"]);
      obj6.page = callback5();
      let tmp24;
      if (hasNewWishlistItems) {
        const obj7 = { accessibilityLabel: null };
        const intl5 = util.intl;
        obj7.accessibilityLabel = intl5.string(util.t.ceMCll);
        tmp24 = obj7;
      }
      obj6.indicatorDot = tmp24;
      items.push(obj6);
    }
    return items;
  }, items19);
  const tmp6Result38 = user(guildId[73]);
  const measuredTabItems = user(guildId[87]).useMeasuredTabItems(memo2);
  ({ items, pageHeights } = measuredTabItems);
  const tmp6Result39 = user(guildId[87]);
  const tmp6Result40 = user(guildId[88]);
  segmentedControlState = tmp6Result40.useSegmentedControlState({
    pageWidth: tmp44,
    defaultIndex: activeProfileTabSectionIndex,
    itemSpacing: channel(guildId[48]).space.PX_24,
    items,
    onPageChange: handleTabChange,
  });
  const items20 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj10.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items20);
  const items21 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  if (null != user) {
    if (null != stateFromStores) {
      obj9 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp103);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp103).OpenableUserProfileAvatar;
      }
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp63 = true === _private;
      if (tmp63) {
        let obj11 = { style: null, children: null };
        const items22 = [tmp3.privateBanner, bannerAnimatedStyle];
        obj11.style = items22;
        let obj12 = { primaryColor };
        obj11.children = isBadgeManagementEnabled(tmp(tmp2[91]), obj12);
        tmp63 = isBadgeManagementEnabled(tmp(tmp2[90]).View, obj11);
      }
      const items23 = [tmp63, , ,];
      let obj13 = {
        user,
        displayProfile,
        bannerHeight: tmp4,
        pendingBanner: null,
        pendingAvatarSrc: null,
        pendingAccentColor: null,
        pendingThemeColors: null,
        disableInteraction: null,
        bannerAnimatedStyle: null,
        bannerImageAnimatedStyle: null,
        blurAnimatedProps: null,
        showBlur: null,
      };
      let tmp67;
      if (isPreviewingChanges) {
        tmp67 = pendingBanner;
      }
      obj13.pendingBanner = tmp67;
      let tmp68;
      if (isPreviewingChanges) {
        tmp68 = pendingAvatarSrc;
      }
      obj13.pendingAvatarSrc = tmp68;
      let tmp69;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp69 = pendingAccentColor;
        }
      }
      obj13.pendingAccentColor = tmp69;
      let tmp70;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp70 = pendingThemeColors;
        }
      }
      obj13.pendingThemeColors = tmp70;
      obj13.disableInteraction = isPreviewingChanges;
      obj13.bannerAnimatedStyle = bannerAnimatedStyle;
      obj13.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj13.blurAnimatedProps = blurAnimatedProps;
      obj13.showBlur = showBlur;
      items23[1] = isBadgeManagementEnabled(tmp(tmp2[92]), obj13);
      let tmp60Result = !isPreviewingChanges;
      if (!isPreviewingChanges) {
        const items24 = [tmp3.bannerButtons, ,];
        let _private1;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        const obj14 = { style: null, children: null };
        items24[1] = _private1;
        items24[2] = bannerAnimatedStyle;
        obj14.style = items24;
        let tmp73 = null;
        if (null != stateFromStores) {
          tmp73 = null;
          if (user.id !== stateFromStores.id) {
            tmp73 = null;
            if (!user.bot) {
              if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                const obj15 = { user };
                let tmp65Result = tmp65(closure_24, obj15);
              } else {
                tmp65Result = null;
                if (isGameFriends) {
                  const obj16 = { user };
                  tmp65Result = tmp65(closure_25, obj16);
                }
              }
            }
          }
        }
        const items25 = [tmp73];
        const obj17 = { user, currentUser: stateFromStores, displayProfile, channel };
        items25[1] = tmp65(tmp(tmp2[93]), obj17);
        obj14.children = items25;
        tmp60Result = tmp60(tmp(tmp2[90]).View, obj14);
      }
      items23[2] = tmp60Result;
      const obj18 = { style: contentAnimatedStyle, children: null };
      const obj19 = {
        user,
        guildId,
        disableStatus,
        pendingAvatarSrc: null,
        pendingAvatarDecoration: null,
        backgroundColor: null,
        statusStyle: null,
      };
      let tmp79;
      if (isPreviewingChanges) {
        tmp79 = pendingAvatarSrc;
      }
      obj19.pendingAvatarSrc = tmp79;
      let tmp80;
      if (isPreviewingChanges) {
        if (avatarDecorationOverride == null) {
          avatarDecorationOverride = pendingAvatarDecoration;
        }
        tmp80 = avatarDecorationOverride;
      }
      obj19.pendingAvatarDecoration = tmp80;
      obj19.backgroundColor = avatarBackground;
      const obj20 = { backgroundColor: statusBackground };
      obj19.statusStyle = obj20;
      const items26 = [isBadgeManagementEnabled(OpenableUserProfileAvatar, obj19)];
      const items27 = [tmp3.profileContentWrapper];
      if (!tmp9) {
        let num2 = 0;
        if (null == tmp18) {
          num2 = pendingBadgeDisplayOrder;
        }
      } else {
        num2 = 0;
      }
      const obj21 = { style: null, children: null };
      const obj22 = { paddingTop: num2, paddingBottom: channel(guildId[56])().bottom + pendingBio };
      items27[1] = obj22;
      obj21.style = items27;
      const obj23 = {
        customStatusActivity: tmp18,
        user,
        guildId,
        channelId: null,
        hasCustomProfileTheme: null,
        showUserProfileActionSheet: null,
        isPreviewingChanges: null,
        bubbleRef: null,
      };
      let id3;
      if (channel != null) {
        id3 = channel.id;
      }
      obj23.channelId = id3;
      obj23.hasCustomProfileTheme = tmp29;
      obj23.showUserProfileActionSheet = showUserProfileActionSheet;
      obj23.isPreviewingChanges = isPreviewingChanges;
      obj23.bubbleRef = ref;
      const items28 = [isBadgeManagementEnabled(stateFromStores2, obj23)];
      let tmp60Result2 = null;
      if (null != stateFromStores) {
        const obj24 = { style: null, children: null };
        const items29 = [,];
        ({ primaryInfo: arr33[0], profileContent: arr33[1] } = tmp3);
        obj24.style = items29;
        let obj25 = {
          user,
          channelId: null,
          guildId: null,
          displayProfile: null,
          displayNameOverride: null,
          pronounsOverride: null,
          badgesOverride: null,
          pendingDisplayNameStyles: null,
          badgeContainerBackground: null,
          profileBackgroundColor: null,
          isPreviewingChanges: null,
          showBadgeDirectoryNuxCoachmark: null,
        };
        let id4;
        if (channel != null) {
          id4 = channel.id;
        }
        obj25.channelId = id4;
        obj25.guildId = guildId;
        obj25.displayProfile = displayProfile;
        let tmp88;
        if (isPreviewingChanges) {
          tmp88 = pendingGlobalName;
        }
        obj25.displayNameOverride = tmp88;
        let tmp89;
        if (isPreviewingChanges) {
          tmp89 = pendingPronouns;
        }
        obj25.pronounsOverride = tmp89;
        let tmp90;
        if (isPreviewingChanges) {
          tmp90 = memo1;
        }
        obj25.badgesOverride = tmp90;
        let tmp91;
        if (isPreviewingChanges) {
          tmp91 = pendingDisplayNameStyles;
        }
        obj25.pendingDisplayNameStyles = tmp91;
        obj25.badgeContainerBackground = containerBackground;
        obj25.profileBackgroundColor = statusBackground;
        obj25.isPreviewingChanges = isPreviewingChanges;
        if (tmp9) {
          tmp9 = !isPreviewingChanges;
        }
        obj25.showBadgeDirectoryNuxCoachmark = tmp9;
        const items30 = [tmp65(closure_26, obj25), , , , , ,];
        let tmp65Result5 = user.id !== stateFromStores.id;
        if (tmp65Result5) {
          const obj26 = { user, guildId };
          tmp65Result5 = tmp65(tmp(tmp2[95]), obj26);
        }
        items30[1] = tmp65Result5;
        let tmp65Result6 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        if (tmp65Result6) {
          const obj27 = {
            user,
            channelId: null,
            guildId: null,
            applicationId: null,
            style: null,
            showUserProfile: null,
          };
          let id5;
          if (channel != null) {
            id5 = channel.id;
          }
          obj27.channelId = id5;
          obj27.guildId = guildId;
          obj27.applicationId = originApplicationId;
          obj27.style = obj9;
          obj27.showUserProfile = showUserProfileActionSheet;
          tmp65Result6 = tmp65(tmp(tmp2[96]), obj27);
          const tmpResult7 = tmp(tmp2[96]);
        }
        items30[2] = tmp65Result6;
        items30[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = {
            user,
            isGameRelationship: true,
            applicationId: applicationId.applicationId,
            channelId: null,
            guildId: null,
            style: null,
            showUserProfile: null,
          };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guildId;
          obj.style = obj9;
          obj.showUserProfile = showUserProfileActionSheet;
          return expandedHeight(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
        });
        const obj28 = { user, style: obj9 };
        items30[4] = tmp65(tmp(tmp2[97]), obj28);
        let tmp65Result7 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp65Result7) {
          const obj29 = { guildId };
          tmp65Result7 = tmp65(hasNewWishlistItems, obj29);
        }
        items30[5] = tmp65Result7;
        let tmp65Result8 = user.id !== stateFromStores.id;
        if (tmp65Result8) {
          const obj30 = {
            user,
            disableCalls: null,
            disableMessage: null,
            navigationReplace: null,
            location: null,
            hasCustomProfileTheme: null,
            style: null,
          };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp93.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj30.disableCalls = disableCalls;
          obj30.disableMessage = disableMessage;
          obj30.navigationReplace = navigationReplace;
          obj30.location = _location;
          obj30.hasCustomProfileTheme = tmp29;
          obj30.style = tmp3.primaryButtons;
          tmp65Result8 = tmp65(tmp(tmp2[98]), obj30);
          const tmpResult8 = tmp(tmp2[98]);
        }
        items30[6] = tmp65Result8;
        obj24.children = items30;
        tmp60Result2 = tmp60(tmp81, obj24);
        tmp93 = pendingBadgeHiddenBadges;
      }
      const items31 = [tmp60Result2];
      if (!tmp36) {
        if (!tmp38) {
          if (!tmp39) {
            let callback4Result = callback4();
          }
          const obj31 = { children: null };
          const obj32 = { children: null };
          items31[1] = callback4Result;
          obj32.children = items31;
          items28[1] = tmp60(tmp6(tmp2[94]).LayerScope, obj32);
          obj21.children = items28;
          items26[1] = tmp60(tmp81, obj21);
          obj18.children = items26;
          items23[3] = tmp60(tmp(tmp2[90]).View, obj18);
          obj31.children = items23;
          return tmp60(tmp61, obj31);
        }
      }
      const obj33 = { onLayout: callback, children: null };
      const obj34 = { style: tmp3.profileTablist, children: null };
      if (shouldLogExposure) {
        shouldLogExposure = tmp65(tmp6(tmp2[99]).ProfileReadStateExposure, { location: "UserProfileContent" });
      }
      const items32 = [shouldLogExposure, ,];
      const obj35 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp29) {
        str = "overlay";
      }
      const obj36 = { children: null };
      obj35.variant = str;
      items32[1] = isBadgeManagementEnabled(tmp6(tmp2[100]).Tabs, obj35);
      const obj37 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${(Math.max(wishlistTabIndex, 0) / arr23.length) * 100}%`;
      obj37.style = rect;
      items32[2] = isBadgeManagementEnabled(isPreviewingChanges, obj37);
      obj34.children = items32;
      const items33 = [containerBackground(isPreviewingChanges, obj34), ,];
      const obj38 = { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef };
      items33[1] = isBadgeManagementEnabled(tmp(tmp2[87]), obj38);
      const obj39 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp59 };
      items33[2] = isBadgeManagementEnabled(tmp(tmp2[101]), obj39);
      obj36.children = items33;
      obj33.children = containerBackground(tmp6(tmp2[94]).LayerScope, obj36);
      callback4Result = tmp65(tmp81, obj33);
      tmp61 = hasCustomProfileTheme;
      const tmpResult6 = tmp(tmp2[92]);
    }
  }
  return null;
});
export { PrimaryInfo };
