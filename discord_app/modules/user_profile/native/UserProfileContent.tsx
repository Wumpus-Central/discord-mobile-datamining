// === Module 12881: UserProfileContent ===

// Module 12881 (UserProfileContent)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import UserProfileRolesCardDefault from "UserProfileRolesCard" /* 6684 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7913 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8318 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 8987 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9434 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10986 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12286 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 12293 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 12817 */;
import UserProfileModeratorActionsDefault from "UserProfileModeratorActions" /* 12869 */;
import UserProfileNoteDefault from "UserProfileNote" /* 12872 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 12900 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 12901 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 12915 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12923 */;
import WishlistUtils from "WishlistUtils" /* 12924 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 12929 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 12930 */;
import UserProfileGameFriendsCardDefault from "UserProfileGameFriendsCard" /* 12932 */;
import UserProfileConnections from "UserProfileConnections" /* 12933 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 12938 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 12943 */;
import UserProfileMutualsDefault from "UserProfileMutuals" /* 12949 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 12950 */;
import UserProfileRemediatedNoticeDefault from "UserProfileRemediatedNotice" /* 12955 */;
import UserProfileContactButtonsDefault from "UserProfileContactButtons" /* 12956 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import WishlistStore from "WishlistStore" /* 8431 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;

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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10839, dependencyMap.paths), "UserProfileCustomStatusActionSheet", { user, guildId, channelId }, "stack");
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
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12883, dependencyMap.paths), "UserProfileGameFriendActionSheet", { user, guildId, channelId }, "stack");
  }, items);
  const obj = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(channelId[34]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(channelId[30]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[30]).t.cvSt1J);
  obj.onPress = callback;
  return closure_20(user(channelId[31]).IconButton, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(7854).UserProfileSections;
const Constants = fn(6707);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_15, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_16 } = Constants);
let RelationshipTypes = fn(1085).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(6646).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(newestAnalyticsLocation[24]).c(9);
  user = user.user;
  const obj = user(newestAnalyticsLocation[24]);
  const trackUserProfileAction = user(newestAnalyticsLocation[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
  if (cResult[0] === newestAnalyticsLocation) {
    if (cResult[1] === trackUserProfileAction) {
      if (cResult[2] === user) {
        let tmp5 = cResult[3];
      }
      const onConfirm = tmp5;
      const name = tmp4(tmp2[28]).useName(user);
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = closure_20(tmp(tmp2[29]).UserCheckIcon, { size: "sm", color: "white" });
        const intl = tmp(tmp2[30]).intl;
        const stringResult = intl.string(tmp(tmp2[30]).t.cvSt1J);
        cResult[4] = tmp11;
        cResult[5] = stringResult;
        let tmp9 = stringResult;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === name) {
          let tmp13 = cResult[8];
        }
        return tmp13;
      }
      const obj3 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: tmp8,
        accessibilityLabel: tmp9,
        onPress() {
              UserProfileAlertUtils.confirmRemoveFriend({ userDisplayName: name, onConfirm });
            }
      };
      const tmp15 = closure_20(tmp(tmp2[31]).IconButton, obj3);
      cResult[6] = tmp5;
      cResult[7] = name;
      cResult[8] = tmp15;
      tmp13 = tmp15;
      const tmp4Result = tmp4(tmp2[28]);
    }
  }
  const fn = function t() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
  };
  cResult[0] = newestAnalyticsLocation;
  cResult[1] = trackUserProfileAction;
  cResult[2] = user;
  cResult[3] = fn;
  tmp5 = fn;
  const obj2 = user(newestAnalyticsLocation[25]);
  tmp4 = trackUserProfileAction;
}) : ((user) => {
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
  }
  const trackUserProfileAction = user(newestAnalyticsLocation[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
  const obj = user(newestAnalyticsLocation[25]);
  const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[28]).useName(user);
  const obj3 = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(newestAnalyticsLocation[30]).intl;
  obj3.accessibilityLabel = intl.string(user(newestAnalyticsLocation[30]).t.cvSt1J);
  obj3.onPress = function onPress() {
    UserProfileAlertUtils.confirmRemoveFriend({ userDisplayName, onConfirm: handleConfirm });
  };
  return closure_20(user(newestAnalyticsLocation[31]).IconButton, obj3);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = userTag(576).c(38);
  ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, pendingDisplayNameStyles, style, badgeContainerBackground, isPreviewingChanges, showBadgeDirectoryNuxCoachmark } = channelId);
  let tmp4 = undefined !== showBadgeDirectoryNuxCoachmark;
  if (tmp4) {
    tmp4 = showBadgeDirectoryNuxCoachmark;
  }
  let obj = userTag(576);
  userTag = trackUserProfileAction(4722).useUserTag(user);
  const obj2 = trackUserProfileAction(4722);
  if (tmp4) {
    let flag;
    if (displayProfile != null) {
      flag = displayProfile.isLoaded;
    }
    if (flag == null) {
      flag = false;
    }
    tmp4 = flag;
  }
  if (cResult[0] === tmp4) {
    if (cResult[1] === user.id) {
      let tmp9 = cResult[2];
    }
    const variantProps = tmp(12885).useBadgeDirectoryNuxCoachmarkVariant(tmp9).variantProps;
    if (cResult[3] !== variantProps) {
      if (null != variantProps) {
        const items = [tmp(2036).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
        let items1 = items;
      } else {
        items1 = [];
      }
      cResult[3] = variantProps;
      cResult[4] = items1;
    } else {
      const tmpResult4 = tmp(6891);
      [tmp14, tmp15] = tmp(6891).useSelectedDismissibleContent(cResult[4]);
      const tmp16 = tmp14 === tmp(2036).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
      const tmp13 = _slicedToArray(tmp(6891).useSelectedDismissibleContent(cResult[4]), 2);
      const badgeDirectoryNuxEntryPoint = tmp(12888).useBadgeDirectoryNuxEntryPoint(tmp16, tmp15);
      ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
      const tmpResult5 = tmp(12888);
      const name = tmp5(5042).useName(guildId, channelId.channelId, user);
      if (cResult[5] === name) {
        if (cResult[6] === displayNameOverride) {
          let tmp19 = cResult[7];
        }
        trackUserProfileAction = tmp(7861).useUserProfileAnalyticsContext().trackUserProfileAction;
        if (cResult[8] === trackUserProfileAction) {
          if (cResult[9] === userTag) {
            let tmp22 = cResult[10];
          }
          if (cResult[11] !== trackUserProfileAction) {
            const fn = function j() {
              trackUserProfileAction({ action: "PRESS_PRONOUNS" });
              ToastUtils.presentUserPronouns();
            };
            cResult[11] = trackUserProfileAction;
            cResult[12] = fn;
            class G {
              constructor() {
                tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                obj = closure_0(closure_2[41]);
                copyResult = obj.copy(closure_0);
                obj2 = closure_0(closure_2[42]);
                result = obj2.presentUsernameCopied();
                return;
              }
            }
          } else {
            const tmp23 = cResult[12];
          }
          if (pronounsOverride == null) {
            let pronouns;
            if (displayProfile != null) {
              pronouns = displayProfile.pronouns;
            }
            pronounsOverride = pronouns;
          }
          if (badgesOverride == null) {
            badgesOverride = tmp7;
          }
          class G {
            constructor() {
              tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
              obj = closure_0(closure_2[41]);
              copyResult = obj.copy(closure_0);
              obj2 = closure_0(closure_2[42]);
              result = obj2.presentUsernameCopied();
              return;
            }
          }
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            cResult[13] = intl.string(tmp(1126).t.y5MwJy);
            class G {
              constructor() {
                tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                obj = closure_0(closure_2[41]);
                copyResult = obj.copy(closure_0);
                obj2 = closure_0(closure_2[42]);
                result = obj2.presentUsernameCopied();
                return;
              }
            }
            const stringResult = intl.string(tmp(1126).t.y5MwJy);
          } else {
            const tmp28 = cResult[13];
          }
          let tmp30;
          if (!isPreviewingChanges) {
            tmp30 = tmp22;
          }
          let tmp31;
          if (!isPreviewingChanges) {
            tmp31 = tmp23;
          }
          if (cResult[14] === badgeContainerBackground) {
            if (cResult[15] === entryPointRef) {
              if (cResult[16] === guildId) {
                if (cResult[17] === tmp19) {
                  if (cResult[18] === onOpenBadgeDirectory) {
                    if (cResult[19] === pendingDisplayNameStyles) {
                      if (cResult[20] === style) {
                        if (cResult[21] === tmp26) {
                          if (cResult[22] === tmp30) {
                            if (cResult[23] === tmp31) {
                              if (cResult[24] === tmp32) {
                                if (cResult[25] === pronounsOverride) {
                                  if (cResult[26] === badgesOverride) {
                                    if (cResult[27] === user) {
                                      let tmp33 = cResult[28];
                                    }
                                    if (cResult[29] === entryPointRef) {
                                      if (cResult[30] === variantProps) {
                                        if (cResult[31] === tmp16) {
                                          if (cResult[32] === tmp15) {
                                            if (cResult[33] === user.id) {
                                              let tmp36 = cResult[34];
                                            }
                                            if (cResult[35] === tmp33) {
                                              if (cResult[36] === tmp36) {
                                                let tmp39 = cResult[37];
                                              }
                                              return tmp39;
                                            }
                                            const obj3 = { children: null };
                                            class G {
                                              constructor() {
                                                tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                                                obj = closure_0(closure_2[41]);
                                                copyResult = obj.copy(closure_0);
                                                obj2 = closure_0(closure_2[42]);
                                                result = obj2.presentUsernameCopied();
                                                return;
                                              }
                                            }
                                            tmp42[0] = tmp33;
                                            tmp42[1] = tmp36;
                                            obj3.children = tmp42;
                                            const tmp43 = closure_22(closure_21, obj3);
                                            cResult[35] = tmp33;
                                            cResult[36] = tmp36;
                                            cResult[37] = tmp43;
                                            tmp39 = tmp43;
                                          }
                                        }
                                      }
                                    }
                                    let tmp37 = null != variantProps;
                                    if (tmp37) {
                                      const obj4 = { targetRef: entryPointRef, userId: user.id, variantProps, visible: null, markAsDismissed: null };
                                      class G {
                                        constructor() {
                                          tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                                          obj = closure_0(closure_2[41]);
                                          copyResult = obj.copy(closure_0);
                                          obj2 = closure_0(closure_2[42]);
                                          result = obj2.presentUsernameCopied();
                                          return;
                                        }
                                      }
                                      obj4.markAsDismissed = tmp15;
                                      tmp37 = closure_20(tmp5(12889), obj4);
                                    }
                                    class G {
                                      constructor() {
                                        tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                                        obj = closure_0(closure_2[41]);
                                        copyResult = obj.copy(closure_0);
                                        obj2 = closure_0(closure_2[42]);
                                        result = obj2.presentUsernameCopied();
                                        return;
                                      }
                                    }
                                    cResult[30] = variantProps;
                                    cResult[31] = tmp16;
                                    cResult[32] = tmp15;
                                    cResult[33] = user.id;
                                    cResult[34] = tmp37;
                                    tmp36 = tmp37;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj5 = { user, guildId, displayName: tmp19, pronouns: pronounsOverride, badges: badgesOverride, style, badgeContainerBackground, onPressDisplayName: tmp26, displayNameAccessibilityHint: tmp28, onPressUserTag: tmp30, onPressPronouns: tmp31, showBadgeToastOnPress: !isPreviewingChanges, canOpenBadgeDirectory: true, badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles };
          const tmp35 = closure_20(tmp5(10843), obj5);
          cResult[14] = badgeContainerBackground;
          cResult[15] = entryPointRef;
          cResult[16] = guildId;
          cResult[17] = tmp19;
          cResult[18] = onOpenBadgeDirectory;
          cResult[19] = pendingDisplayNameStyles;
          cResult[20] = style;
          cResult[21] = tmp26;
          cResult[22] = tmp30;
          cResult[23] = tmp31;
          cResult[24] = !isPreviewingChanges;
          cResult[25] = pronounsOverride;
          cResult[26] = badgesOverride;
          cResult[27] = user;
          cResult[28] = tmp35;
          tmp33 = tmp35;
        }
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
            obj = closure_0(closure_2[41]);
            copyResult = obj.copy(closure_0);
            obj2 = closure_0(closure_2[42]);
            result = obj2.presentUsernameCopied();
            return;
          }
        }
        cResult[8] = trackUserProfileAction;
        cResult[9] = userTag;
        cResult[10] = G;
        tmp22 = G;
        const tmpResult6 = tmp(7861);
      }
      let tmp21 = name;
      if (null != displayNameOverride) {
        tmp21 = name;
        if (displayNameOverride.trim().length > 0) {
          tmp21 = displayNameOverride;
        }
      }
      cResult[5] = name;
      cResult[6] = displayNameOverride;
      cResult[7] = tmp21;
      tmp19 = tmp21;
      const tmp5Result = tmp5(5042);
    }
    const tmpResult = tmp(12885);
  }
  const obj6 = { userId: user.id, enabled: tmp4, fetchCatalog: false, location: "UserProfileContent" };
  cResult[0] = tmp4;
  cResult[1] = user.id;
  cResult[2] = obj6;
  tmp9 = obj6;
  tmp7 = trackUserProfileAction(7914)(displayProfile);
}) : ((arg0) => {
  ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges, showBadgeDirectoryNuxCoachmark } = arg0);
  ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = arg0);
  if (showBadgeDirectoryNuxCoachmark === undefined) {
    showBadgeDirectoryNuxCoachmark = false;
  }
  let trackUserProfileAction;
  const userTag = trackUserProfileAction(4722).useUserTag(user);
  let obj = trackUserProfileAction(4722);
  const tmp4 = trackUserProfileAction(7914)(displayProfile);
  const obj3 = { userId: user.id, enabled: null, fetchCatalog: false, location: "UserProfileContent" };
  if (showBadgeDirectoryNuxCoachmark) {
    let flag;
    if (displayProfile != null) {
      flag = displayProfile.isLoaded;
    }
    if (flag == null) {
      flag = false;
    }
    showBadgeDirectoryNuxCoachmark = flag;
  }
  obj3.enabled = showBadgeDirectoryNuxCoachmark;
  const variantProps = userTag(12885).useBadgeDirectoryNuxCoachmarkVariant(obj3).variantProps;
  const obj2 = userTag(12885);
  if (null != variantProps) {
    const items = [tmp5(2036).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5Result = userTag(6891);
  [tmp8, tmp9] = userTag(6891).useSelectedDismissibleContent(items1);
  const tmp10 = tmp8 === userTag(2036).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp7 = _slicedToArray(userTag(6891).useSelectedDismissibleContent(items1), 2);
  const badgeDirectoryNuxEntryPoint = userTag(12888).useBadgeDirectoryNuxEntryPoint(tmp10, tmp9);
  ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
  const tmp5Result3 = userTag(12888);
  const name = trackUserProfileAction(5042).useName(guildId, channelId, user);
  let tmp13 = name;
  if (null != displayNameOverride) {
    tmp13 = name;
    if (displayNameOverride.trim().length > 0) {
      tmp13 = displayNameOverride;
    }
  }
  const tmpResult = trackUserProfileAction(5042);
  trackUserProfileAction = userTag(7861).useUserProfileAnalyticsContext().trackUserProfileAction;
  const items2 = [trackUserProfileAction, userTag];
  const callback = noop.useCallback(() => {
    trackUserProfileAction({ action: "COPY_USERNAME" });
    ClipboardUtils.copy(userTag);
    const result = ToastUtils.presentUsernameCopied();
  }, items2);
  const obj4 = { user, guildId, displayName: tmp13, pronouns: null, badges: null, style: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: null, canOpenBadgeDirectory: true, badgeDirectoryEntryPointRef: null, onOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
  const tmp5Result4 = userTag(7861);
  if (pronounsOverride == null) {
    let pronouns;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    pronounsOverride = pronouns;
  }
  obj4.pronouns = pronounsOverride;
  if (badgesOverride == null) {
    badgesOverride = tmp4;
  }
  obj4.badges = badgesOverride;
  obj4.style = style;
  obj4.badgeContainerBackground = badgeContainerBackground;
  let tmp20;
  if (!isPreviewingChanges) {
    tmp20 = callback;
  }
  obj4.onPressDisplayName = tmp20;
  const intl = tmp5(1126).intl;
  obj4.displayNameAccessibilityHint = intl.string(userTag(1126).t.y5MwJy);
  let tmp21;
  if (!isPreviewingChanges) {
    tmp21 = callback;
  }
  obj4.onPressUserTag = tmp21;
  let fn;
  if (!isPreviewingChanges) {
    fn = () => {
      trackUserProfileAction({ action: "PRESS_PRONOUNS" });
      ToastUtils.presentUserPronouns();
    };
  }
  obj4.onPressPronouns = fn;
  obj4.showBadgeToastOnPress = !isPreviewingChanges;
  obj4.badgeDirectoryEntryPointRef = entryPointRef;
  obj4.onOpenBadgeDirectory = onOpenBadgeDirectory;
  obj4.pendingDisplayNameStyles = pendingDisplayNameStyles;
  const children = [closure_20(trackUserProfileAction(10843), obj4), ];
  let tmp17Result = null != variantProps;
  if (tmp17Result) {
    const obj5 = { targetRef: entryPointRef, userId: user.id, variantProps, visible: tmp10, markAsDismissed: tmp9 };
    tmp17Result = closure_20(tmp(12889), obj5);
  }
  children[1] = tmp17Result;
  return closure_22(closure_21, { children });
});
let closure_26 = tmp5;
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(24);
  guildId = guildId.guildId;
  const tmp5 = trackUserProfileAction(7913)();
  const obj = guildId(576);
  trackUserProfileAction = guildId(7861).useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = guildId(7861);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp8);
  const tmp10 = trackUserProfileAction(9416)();
  dependencyMap = tmp10;
  if (cResult[3] !== stateFromStores) {
    const obj3 = { guild: stateFromStores };
    cResult[3] = stateFromStores;
    cResult[4] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  const tmp12 = trackUserProfileAction(9416)(tmp11);
  _slicedToArray = tmp12;
  if (cResult[5] === tmp10) {
    if (cResult[6] === trackUserProfileAction) {
      let tmp13 = cResult[7];
    }
    if (cResult[8] === tmp12) {
      if (cResult[9] === trackUserProfileAction) {
        let tmp14 = cResult[10];
      }
      const _Symbol = Symbol;
      class C {
        constructor() {
          tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
          obj = closure_1(closure_2[18]);
          hideAllActionSheetsResult = obj.hideAllActionSheets();
          tmp3 = closure_1(closure_2[46])();
          tmp4 = closure_3();
          return;
        }
      }
      if (tmp15 === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { size: "sm", color: null };
        class C {
          constructor() {
            tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
            obj = closure_1(closure_2[18]);
            hideAllActionSheetsResult = obj.hideAllActionSheets();
            tmp3 = closure_1(closure_2[46])();
            tmp4 = closure_3();
            return;
          }
        }
        obj4.color = tmp4(587).colors.WHITE;
        const tmp19 = closure_20(tmp18, obj4);
        cResult[11] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] !== stateFromStores) {
        if (null != stateFromStores) {
          const string2 = tmp(1126).intl.string;
          class C {
            constructor() {
              tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
              obj = closure_1(closure_2[18]);
              hideAllActionSheetsResult = obj.hideAllActionSheets();
              tmp3 = closure_1(closure_2[46])();
              tmp4 = closure_3();
              return;
            }
          }
        } else {
          const string = tmp(1126).intl.string;
          class C {
            constructor() {
              tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
              obj = closure_1(closure_2[18]);
              hideAllActionSheetsResult = obj.hideAllActionSheets();
              tmp3 = closure_1(closure_2[46])();
              tmp4 = closure_3();
              return;
            }
          }
        }
        class C {
          constructor() {
            tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
            obj = closure_1(closure_2[18]);
            hideAllActionSheetsResult = obj.hideAllActionSheets();
            tmp3 = closure_1(closure_2[46])();
            tmp4 = closure_3();
            return;
          }
        }
        cResult[12] = stateFromStores;
        cResult[13] = tmp22;
      } else {
        if (cResult[14] === tmp13) {
          if (cResult[15] === tmp20) {
            let tmp24 = cResult[16];
          }
          if (cResult[17] === stateFromStores) {
            if (cResult[18] === tmp14) {
              let tmp26 = cResult[19];
            }
            if (cResult[20] === tmp5.primaryButtons) {
              if (cResult[21] === tmp24) {
                if (cResult[22] === tmp26) {
                  let tmp30 = cResult[23];
                }
                return tmp30;
              }
            }
            class C {
              constructor() {
                tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                obj = closure_1(closure_2[18]);
                hideAllActionSheetsResult = obj.hideAllActionSheets();
                tmp3 = closure_1(closure_2[46])();
                tmp4 = closure_3();
                return;
              }
            }
            const obj5 = { style: tmp5.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: tmp24, secondaryButton: tmp26 };
            const tmp32 = closure_20(tmp4(12815), obj5);
            cResult[20] = tmp5.primaryButtons;
            cResult[21] = tmp24;
            cResult[22] = tmp26;
            cResult[23] = tmp32;
            tmp30 = tmp32;
          }
          class C {
            constructor() {
              tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
              obj = closure_1(closure_2[18]);
              hideAllActionSheetsResult = obj.hideAllActionSheets();
              tmp3 = closure_1(closure_2[46])();
              tmp4 = closure_3();
              return;
            }
          }
          let tmp27;
          if (null != stateFromStores) {
            const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
            class C {
              constructor() {
                tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                obj = closure_1(closure_2[18]);
                hideAllActionSheetsResult = obj.hideAllActionSheets();
                tmp3 = closure_1(closure_2[46])();
                tmp4 = closure_3();
                return;
              }
            }
            const obj7 = { size: "sm", color: tmp4(587).colors.WHITE };
            obj6.icon = closure_20(tmp(10058).PencilIcon, obj7);
            const intl = tmp(1126).intl;
            obj6.text = intl.string(tmp(1126).t["PKQB/H"]);
            obj6.onPress = tmp14;
            tmp27 = closure_20(tmp29, obj6);
          }
          cResult[17] = stateFromStores;
          cResult[18] = tmp14;
          cResult[19] = tmp27;
          tmp26 = tmp27;
        }
        class C {
          constructor() {
            tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
            obj = closure_1(closure_2[18]);
            hideAllActionSheetsResult = obj.hideAllActionSheets();
            tmp3 = closure_1(closure_2[46])();
            tmp4 = closure_3();
            return;
          }
        }
        const obj8 = { variant: "primary", icon: tmp16, text: cResult[13], onPress: tmp13, grow: true };
        const tmp25 = closure_20(tmp(5594).Button, obj8);
        cResult[14] = tmp13;
        cResult[15] = cResult[13];
        cResult[16] = tmp25;
        tmp24 = tmp25;
      }
    }
    class C {
      constructor() {
        tmp = trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
        obj = closure_1(closure_2[18]);
        hideAllActionSheetsResult = obj.hideAllActionSheets();
        tmp3 = closure_1(closure_2[46])();
        tmp4 = closure_3();
        return;
      }
    }
    cResult[8] = tmp12;
    cResult[9] = trackUserProfileAction;
    cResult[10] = C;
    tmp14 = C;
  }
  const fn2 = function b() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  };
  cResult[5] = tmp10;
  cResult[6] = trackUserProfileAction;
  cResult[7] = fn2;
  tmp13 = fn2;
  const tmpResult = guildId(504);
}) : ((guildId) => {
  guildId = guildId.guildId;
  let trackUserProfileAction;
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(7913)();
  trackUserProfileAction = guildId(7861).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = guildId(7861);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(9416)();
  closure_3 = trackUserProfileAction(9416)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const obj2 = guildId(504);
  const obj4 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmp7 = trackUserProfileAction(12815);
  obj4.icon = closure_20(guildId(10058).PencilIcon, { size: "sm", color: trackUserProfileAction(587).colors.WHITE });
  if (null != stateFromStores) {
    const intl2 = tmp4(1126).intl;
    let stringResult = intl2.string(tmp4(1126).t.HmFaFB);
  } else {
    const intl = tmp4(1126).intl;
    stringResult = intl.string(tmp4(1126).t.s5vZlQ);
  }
  obj4.text = stringResult;
  obj4.onPress = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  };
  obj3.primaryButton = closure_20(guildId(5594).Button, obj4);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp(587).colors.WHITE };
    obj6.icon = closure_20(tmp4(10058).PencilIcon, obj7);
    const intl3 = tmp4(1126).intl;
    obj6.text = intl3.string(tmp4(1126).t["PKQB/H"]);
    obj6.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = closure_20(tmp4(5594).Button, obj6);
  }
  obj3.secondaryButton = tmp6Result;
  return closure_20(tmp7, obj3);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ userId, isVisible, isCurrentUser, containerBackground } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  if (cResult[0] !== containerBackground) {
    const obj2 = { backgroundColor: containerBackground };
    cResult[0] = containerBackground;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.card) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] !== isCurrentUser) {
      let tmp8 = isCurrentUser;
      if (isCurrentUser) {
        tmp8 = closure_1_20(UserProfileWidgetsBoardEditNoticeDefault, {});
      }
      cResult[5] = isCurrentUser;
      cResult[6] = tmp8;
      let tmp7 = tmp8;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== isCurrentUser) {
      let tmp11 = isCurrentUser;
      if (isCurrentUser) {
        tmp11 = closure_1_20(ConjureCustomWidgetAddOptionDefault, {});
      }
      cResult[7] = isCurrentUser;
      cResult[8] = tmp11;
      let tmp10 = tmp11;
    } else {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp6) {
      if (cResult[10] === isVisible) {
        if (cResult[11] === userId) {
          let tmp13 = cResult[12];
        }
        if (cResult[13] === tmp4.profileContent) {
          if (cResult[14] === tmp7) {
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp13) {
                let tmp16 = cResult[17];
              }
              return tmp16;
            }
          }
        }
        const obj3 = { style: tmp4.profileContent, children: null };
        const items = [tmp7, tmp10, tmp13];
        obj3.children = items;
        const tmp19 = closure_1_22(timestampProducer, obj3);
        cResult[13] = tmp4.profileContent;
        cResult[14] = tmp7;
        cResult[15] = tmp10;
        cResult[16] = tmp13;
        cResult[17] = tmp19;
        tmp16 = tmp19;
      }
    }
    const obj4 = { userId, isVisible, cardStyle: tmp6 };
    const tmp15 = closure_1_20(UserProfileWidgetsBoardDefault, obj4);
    cResult[9] = tmp6;
    cResult[10] = isVisible;
    cResult[11] = userId;
    cResult[12] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [tmp4.card, tmp5];
  cResult[2] = tmp4.card;
  cResult[3] = tmp5;
  cResult[4] = items1;
  tmp6 = items1;
}) : ((isCurrentUser) => {
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
    isCurrentUser = closure_1_20(ConjureCustomWidgetAddOptionDefault, {});
  }
  items1[1] = isCurrentUser;
  items1[2] = closure_1_20(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
  obj.children = items1;
  return closure_1_22(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  if (cResult[0] !== containerBackground) {
    const obj2 = { backgroundColor: containerBackground };
    cResult[0] = containerBackground;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.card) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.cards) {
      if (cResult[6] === tmp4.profileContent) {
        let tmp7 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === channelId) {
          if (cResult[10] === currentUser) {
            if (cResult[11] === guildId) {
              if (cResult[12] === user) {
                let tmp8 = cResult[13];
              }
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp8) {
                  let tmp11 = cResult[16];
                }
                return tmp11;
              }
              const obj3 = { style: tmp7, children: tmp8 };
              const tmp14 = closure_1_20(timestampProducer, obj3);
              cResult[14] = tmp7;
              cResult[15] = tmp8;
              cResult[16] = tmp14;
              tmp11 = tmp14;
            }
          }
        }
      }
      const obj4 = { user, currentUser, guildId, channelId, cardStyle: tmp6 };
      const tmp10 = closure_1_20(UserProfileActivityTabDefault, obj4);
      cResult[8] = tmp6;
      cResult[9] = channelId;
      cResult[10] = currentUser;
      cResult[11] = guildId;
      cResult[12] = user;
      cResult[13] = tmp10;
      tmp8 = tmp10;
    }
    const items = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = tmp4);
    cResult[5] = tmp4.cards;
    cResult[6] = tmp4.profileContent;
    cResult[7] = items;
    tmp7 = items;
  }
  const items1 = [tmp4.card, tmp5];
  cResult[2] = tmp4.card;
  cResult[3] = tmp5;
  cResult[4] = items1;
  tmp6 = items1;
}) : ((arg0) => {
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  const items = [tmp.card, { backgroundColor: containerBackground }];
  const obj = { style: null, children: closure_1_20(UserProfileActivityTabDefault, { user, currentUser, guildId, channelId, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  obj.style = items1;
  return closure_1_20(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(guildId[24]).c(286);
  user = user.user;
  const channel = user.channel;
  guildId = user.guildId;
  const displayProfile = user.displayProfile;
  noop = user.showUserProfileActionSheet;
  const disableCalls = user.disableCalls;
  const disableMessage = user.disableMessage;
  ({ disableStatus, isPreviewingChanges } = user);
  ({ avatarDecorationOverride, location: _location } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  ({ initialSection, scrollPosition } = user);
  let obj = user(guildId[24]);
  const currentUser = channel(guildId[16])();
  const tmp6 = channel(guildId[55])(isGameFriends);
  if (cResult[0] === tmp6) {
    if (cResult[1] === scrollPosition) {
      let tmp7 = cResult[2];
    }
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp4(tmp2[56])(tmp7));
    const bottom = tmp4(tmp2[57])().bottom;
    const tmp8 = tmp4(tmp2[56])(tmp7);
    const trackUserProfileAction = tmp(tmp2[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [currentUser];
      const fn = function q() {
        return currentUser.getCurrentUser();
      };
      cResult[3] = items;
      cResult[4] = fn;
      let tmp11 = fn;
      let tmp10 = items;
    } else {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    const tmpResult = tmp(tmp2[25]);
    const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp10, tmp11);
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const isWishlistOwner = id === user.id;
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [navigateToShop];
      cResult[5] = items1;
      let tmp16 = items1;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] !== user.id) {
      function le() {
        return { relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) };
      }
      cResult[6] = user.id;
      cResult[7] = le;
      let tmp18 = le;
    } else {
      tmp18 = cResult[7];
    }
    const tmpResult12 = tmp(tmp2[17]);
    const stateFromStoresObject = tmp(tmp2[17]).useStateFromStoresObject(tmp16, tmp18);
    const relationshipType = stateFromStoresObject.relationshipType;
    const originApplicationId = stateFromStoresObject.originApplicationId;
    const tmpResult13 = tmp(tmp2[17]);
    const incomingGameRelationshipsForUser = tmp(tmp2[58]).useIncomingGameRelationshipsForUser(user.id);
    const tmpResult14 = tmp(tmp2[58]);
    isGameFriends = tmp(tmp2[59]).useIsGameFriends(user.id);
    if (cResult[8] !== user.id) {
      let obj2 = { userId: user.id };
      cResult[8] = user.id;
      cResult[9] = obj2;
      let tmp22 = obj2;
    } else {
      tmp22 = cResult[9];
    }
    const tmpResult15 = tmp(tmp2[59]);
    const userProfileGameFriendApplicationIds = tmp(tmp2[60]).useUserProfileGameFriendApplicationIds(tmp22);
    const tmpResult16 = tmp(tmp2[60]);
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    const name = tmp4(tmp2[40]).useName(guildId, id1, user);
    if (cResult[10] === guildId) {
      if (cResult[11] === user) {
        const subscribeGuildMembers = tmp(tmp2[61]).useSubscribeGuildMembers(cResult[12], "UserProfileContent");
        tmp4(tmp2[62])(user.id);
        const _Symbol3 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          let items2 = [trackUserProfileAction];
          class Pe {
            constructor() {
              return trackUserProfileAction.getPendingChanges();
            }
          }
          cResult[13] = items2;
          cResult[14] = Pe;
          let tmp31 = Pe;
          let tmp30 = items2;
        } else {
          tmp30 = cResult[13];
          tmp31 = cResult[14];
        }
        const tmpResult17 = tmp(tmp2[61]);
        const stateFromStoresObject1 = tmp(tmp2[17]).useStateFromStoresObject(tmp30, tmp31);
        ({ pendingAvatar, pendingGlobalName } = stateFromStoresObject1);
        const pendingPronouns = stateFromStoresObject1.pendingPronouns;
        const pendingBio = stateFromStoresObject1.pendingBio;
        ({ pendingAccentColor, pendingThemeColors, pendingDisplayNameStyles } = stateFromStoresObject1);
        ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = stateFromStoresObject1);
        if (cResult[15] === pendingAvatar) {
          const tmp37 = tmp4(tmp2[35])(displayProfile, tmp34);
          const _Symbol4 = Symbol;
          class Pe {
            constructor() {
              return trackUserProfileAction.getPendingChanges();
            }
          }
          if (tmp38 === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [isPreviewingChanges];
            class Pe {
              constructor() {
                return trackUserProfileAction.getPendingChanges();
              }
            }
            cResult[18] = items3;
            let tmp39 = items3;
          } else {
            tmp39 = cResult[18];
          }
          if (cResult[19] !== user.id) {
            class Le {
              constructor() {
                return closure_7.getBadges(user.id);
              }
            }
            const items4 = [user.id];
            class Pe {
              constructor() {
                return trackUserProfileAction.getPendingChanges();
              }
            }
            cResult[19] = user.id;
            cResult[20] = Le;
            cResult[21] = items4;
            let tmp42 = items4;
          } else {
            class Le {
              constructor() {
                return closure_7.getBadges(user.id);
              }
            }
            tmp42 = cResult[21];
          }
          const stateFromStoresArray = tmp(tmp2[17]).useStateFromStoresArray(tmp39, Le, tmp42);
          const _Symbol5 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class Le {
              constructor() {
                return closure_7.getBadges(user.id);
              }
            }
            cResult[22] = tmp45;
            class Pe {
              constructor() {
                return trackUserProfileAction.getPendingChanges();
              }
            }
          } else {
            class Le {
              constructor() {
                return closure_7.getBadges(user.id);
              }
            }
          }
          const tmpResult19 = tmp(tmp2[17]);
          const isBadgeManagementEnabled = tmp(tmp2[64]).useIsBadgeManagementEnabled(tmp44);
          if (cResult[23] === isBadgeManagementEnabled) {
            class Le {
              constructor() {
                return closure_7.getBadges(user.id);
              }
            }
            const effect = noop.useEffect(tmp47, tmp48);
            class Pe {
              constructor() {
                return trackUserProfileAction.getPendingChanges();
              }
            }
            let obj3 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
            const pendingProfileBadges = tmp(tmp2[66]).getPendingProfileBadges(tmp37, stateFromStoresArray, obj3);
            cResult[27] = tmp37;
            cResult[28] = stateFromStoresArray;
            cResult[29] = pendingBadgeDisplayOrder;
            cResult[30] = pendingBadgeHiddenBadges;
            cResult[31] = pendingProfileBadges;
            const tmpResult21 = tmp(tmp2[66]);
          }
          function je() {
            if (isBadgeManagementEnabled) {
              if (!tmp2) {
                const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(user.id);
              }
              tmp2 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
            }
          }
          const items5 = [user.id, isBadgeManagementEnabled];
          cResult[23] = isBadgeManagementEnabled;
          cResult[24] = user.id;
          cResult[25] = je;
          cResult[26] = items5;
          tmp47 = je;
          tmp48 = items5;
          const tmpResult20 = tmp(tmp2[64]);
        }
        const tmpResult18 = tmp(tmp2[17]);
        let obj4 = { userId: user.id, image: pendingAvatar };
        const pendingAvatarSrc = tmp(tmp2[63]).getPendingAvatarSrc(obj4);
        cResult[15] = pendingAvatar;
        cResult[16] = user.id;
        cResult[17] = pendingAvatarSrc;
        const tmpResult22 = tmp(tmp2[63]);
      }
    }
    if (null == guildId) {
      class Le {
        constructor() {
          return closure_7.getBadges(user.id);
        }
      }
      cResult[10] = guildId;
      class Pe {
        constructor() {
          return trackUserProfileAction.getPendingChanges();
        }
      }
      cResult[11] = user;
      cResult[12] = tmp26;
    } else {
      class Le {
        constructor() {
          return closure_7.getBadges(user.id);
        }
      }
    }
    let obj5 = {};
    const items6 = [user.id];
    obj5[guildId] = items6;
    const tmp4Result = tmp4(tmp2[40]);
  }
  let obj6 = { scrollPosition, bannerHeight: tmp6 };
  cResult[0] = tmp6;
  cResult[1] = scrollPosition;
  cResult[2] = obj6;
  tmp7 = obj6;
  const tmp5 = channel(guildId[16])();
}) : ((user) => {
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
  const tmp4 = channel(guildId[55])(stateFromStoresArray);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(guildId[56])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(guildId[56])({ scrollPosition, bannerHeight: tmp4 });
  const trackUserProfileAction = user(guildId[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(guildId[25]);
  let items = [isCurrentUser];
  const stateFromStores = user(guildId[17]).useStateFromStores(items, () => isCurrentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp9 = id === user.id;
  isCurrentUser = tmp9;
  let obj2 = user(guildId[17]);
  let items1 = [stateFromStores];
  const stateFromStoresObject = user(guildId[17]).useStateFromStoresObject(items1, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result = user(guildId[17]);
  const incomingGameRelationshipsForUser = user(guildId[58]).useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result23 = user(guildId[58]);
  const isGameFriends = user(guildId[59]).useIsGameFriends(user.id);
  const tmp6Result24 = user(guildId[59]);
  userProfileGameFriendApplicationIds = user(guildId[60]).useUserProfileGameFriendApplicationIds({ userId: user.id });
  let obj3 = { userId: user.id };
  const tmp6Result25 = user(guildId[60]);
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  name = channel(guildId[40]).useName(guildId, id1, user);
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
  const tmpResult = channel(guildId[40]);
  const subscribeGuildMembers = user(guildId[61]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(guildId[62])(user.id);
  const tmp6Result26 = user(guildId[61]);
  const items3 = [userProfileGameFriendApplicationIds];
  const stateFromStoresObject1 = user(guildId[17]).useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result27 = user(guildId[17]);
  const pendingAvatarSrc = user(guildId[63]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp20 = channel(guildId[35])(displayProfile, pendingLegacyUsernameDisabled);
  RelationshipTypes = tmp20;
  let obj4 = { userId: user.id, image: pendingAvatar };
  const tmp6Result28 = user(guildId[63]);
  const items4 = [navigateToShop];
  const items5 = [user.id];
  stateFromStoresArray = user(guildId[17]).useStateFromStoresArray(items4, () => BadgeDirectoryStore.getBadges(user.id), items5);
  const tmp6Result29 = user(guildId[17]);
  isBadgeManagementEnabled = user(guildId[64]).useIsBadgeManagementEnabled({ location: "UserProfileContent" });
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
  const tmp6Result30 = user(guildId[64]);
  if (isPreviewingChanges) {
    tmp26 = pendingThemeColors;
  }
  obj5.pendingThemeColors = tmp26;
  const tmpResult1Result = channel(guildId[67])(obj5);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp28;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult5 = channel(guildId[67]);
  const userProfileColors = user(guildId[68]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp6Result31 = user(guildId[68]);
  const ref1 = showUserProfileActionSheet.useRef(null);
  const ref = showUserProfileActionSheet.useRef(null);
  const items8 = [name];
  stateFromStores1 = user(guildId[17]).useStateFromStores(items8, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result32 = user(guildId[17]);
  const fetchWishlist = user(guildId[69]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj6 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result33 = user(guildId[69]);
  const items9 = [closure_8];
  const items10 = [stateFromStores1];
  stateFromStores2 = user(guildId[17]).useStateFromStores(items9, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items10);
  const items11 = [stateFromStores2, tmp9];
  let tmp35 = tmp9;
  if (!tmp9) {
    let tmp36 = null != stateFromStores2;
    if (tmp36) {
      tmp36 = arr14.length > 0;
    }
    tmp35 = tmp36;
  }
  closure_24 = tmp35;
  const tmp6Result34 = user(guildId[17]);
  const displayableBoardWidgets = user(guildId[71]).useDisplayableBoardWidgets(user.id);
  const tmp6Result35 = user(guildId[71]);
  const tmp37 = displayableBoardWidgets.length > 0 || user(guildId[72]).useCanConjureCustomWidget("UserProfileContent", tmp9);
  closure_25 = tmp37;
  const tmp6Result36 = user(guildId[72]);
  const tmp38 = user(guildId[73]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp38;
  const tmp6Result37 = user(guildId[73]);
  const profileTabIndices = user(guildId[74]).useProfileTabIndices(tmp37, tmp38, tmp35);
  boardTabIndex = profileTabIndices.boardTabIndex;
  activityTabIndex = profileTabIndices.activityTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp6Result38 = user(guildId[74]);
  [tmp41, c30] = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const callback = obj9.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp40 = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const pageHeights = user(guildId[75]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const tmp6Result39 = user(guildId[75]);
  const wishlistViewerCoachmark = user(guildId[76]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp35 });
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
  const tmp6Result40 = user(guildId[76]);
  const profileSectionTabs = user(guildId[74]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp47;
  isVisible2 = tmp48;
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
        return closure_2_22(timestampProducer, obj3);
      }
    }
    return null;
  }, items15);
  const items16 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === pendingBio.WISHLIST, user.id, tmp9];
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
    return closure_2_22(timestampProducer, obj);
  }, items16);
  const items17 = [handlePageContentSize, callback4, callback5, tmp37, tmp38, tmp35, boardTabIndex, activityTabIndex, wishlistTabIndex, user, stateFromStores, guildId, , , , ];
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  items17[12] = id2;
  items17[13] = activeProfileTabSection === pendingBio.WIDGETS;
  items17[14] = tmp9;
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
      obj4.children = closure_2_20(closure_28, obj5);
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
      obj7.children = closure_2_20(closure_29, obj8);
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
  const tmp6Result41 = user(guildId[74]);
  const tmp6Result42 = user(guildId[89]);
  segmentedControlState = tmp6Result42.useSegmentedControlState({ pageWidth: tmp41, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(guildId[48]).space.PX_24, items: memo2, onPageChange: handleTabChange });
  let obj7 = { pageWidth: tmp41, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(guildId[48]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  const pagerFillHeight = user(guildId[75]).usePagerFillHeight(scrollPosition);
  const items18 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj9.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items18);
  const tmp6Result43 = user(guildId[75]);
  const items19 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = user(guildId[75]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj8 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp101);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp101).OpenableUserProfileAvatar;
      }
      let obj10 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null, privateBanner: null };
      let tmp63;
      if (isPreviewingChanges) {
        tmp63 = pendingBanner;
      }
      obj10.pendingBanner = tmp63;
      let tmp64;
      if (isPreviewingChanges) {
        tmp64 = pendingAvatarSrc;
      }
      obj10.pendingAvatarSrc = tmp64;
      let tmp65;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp65 = pendingAccentColor;
        }
      }
      obj10.pendingAccentColor = tmp65;
      let tmp66;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp66 = pendingThemeColors;
        }
      }
      obj10.pendingThemeColors = tmp66;
      obj10.disableInteraction = isPreviewingChanges;
      obj10.bannerAnimatedStyle = bannerAnimatedStyle;
      obj10.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj10.blurAnimatedProps = blurAnimatedProps;
      obj10.showBlur = showBlur;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp61Result;
      if (true === _private) {
        let obj11 = { primaryColor };
        tmp61Result = tmp61(tmp(tmp2[95]), obj11);
      }
      obj10.privateBanner = tmp61Result;
      const items20 = [hasCustomProfileTheme(tmp(tmp2[96]), obj10), , ];
      let tmp59Result = !isPreviewingChanges;
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
        let tmp71 = null;
        if (null != stateFromStores) {
          tmp71 = null;
          if (user.id !== stateFromStores.id) {
            tmp71 = null;
            if (!user.bot) {
              if (relationshipType === RelationshipTypes.FRIEND) {
                let obj13 = { user };
                let tmp61Result6 = tmp61(closure_24, obj13);
              } else {
                tmp61Result6 = null;
                if (isGameFriends) {
                  const obj14 = { user };
                  tmp61Result6 = tmp61(closure_25, obj14);
                }
              }
            }
          }
        }
        const items22 = [tmp71, ];
        const obj15 = { user, currentUser: stateFromStores, displayProfile, channel };
        items22[1] = tmp61(tmp(tmp2[98]), obj15);
        obj12.children = items22;
        tmp59Result = tmp59(tmp(tmp2[97]).View, obj12);
      }
      items20[1] = tmp59Result;
      const obj16 = { style: contentAnimatedStyle, children: null };
      const obj17 = { user, guildId, disableStatus, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      let tmp77;
      if (isPreviewingChanges) {
        tmp77 = pendingAvatarSrc;
      }
      obj17.pendingAvatarSrc = tmp77;
      let tmp78;
      if (isPreviewingChanges) {
        if (avatarDecorationOverride == null) {
          avatarDecorationOverride = pendingAvatarDecoration;
        }
        tmp78 = avatarDecorationOverride;
      }
      obj17.pendingAvatarDecoration = tmp78;
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
      const obj20 = { paddingTop: num2, paddingBottom: channel(guildId[57])().bottom + pendingBadgeDisplayOrder };
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
      const items25 = [hasCustomProfileTheme(stateFromStores2, obj21), ];
      let tmp59Result2 = null;
      if (null != stateFromStores) {
        const obj22 = { style: null, children: null };
        const items26 = [, ];
        ({ primaryInfo: arr31[0], profileContent: arr31[1] } = tmp3);
        obj22.style = items26;
        const obj23 = { user, channelId: null, guildId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null, showBadgeDirectoryNuxCoachmark: null };
        let id4;
        if (channel != null) {
          id4 = channel.id;
        }
        obj23.channelId = id4;
        obj23.guildId = guildId;
        obj23.displayProfile = displayProfile;
        let tmp86;
        if (isPreviewingChanges) {
          tmp86 = pendingGlobalName;
        }
        obj23.displayNameOverride = tmp86;
        let tmp87;
        if (isPreviewingChanges) {
          tmp87 = pendingPronouns;
        }
        obj23.pronounsOverride = tmp87;
        let tmp88;
        if (isPreviewingChanges) {
          tmp88 = memo1;
        }
        obj23.badgesOverride = tmp88;
        let tmp89;
        if (isPreviewingChanges) {
          tmp89 = pendingDisplayNameStyles;
        }
        obj23.pendingDisplayNameStyles = tmp89;
        obj23.badgeContainerBackground = containerBackground;
        obj23.isPreviewingChanges = isPreviewingChanges;
        if (tmp9) {
          tmp9 = !isPreviewingChanges;
        }
        obj23.showBadgeDirectoryNuxCoachmark = tmp9;
        const items27 = [tmp61(closure_26, obj23), , , , , , ];
        let tmp61Result7 = user.id !== stateFromStores.id;
        if (tmp61Result7) {
          const obj24 = { user, guildId };
          tmp61Result7 = tmp61(tmp(tmp2[90]), obj24);
        }
        items27[1] = tmp61Result7;
        let tmp61Result8 = relationshipType === RelationshipTypes.PENDING_INCOMING;
        if (tmp61Result8) {
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
          tmp61Result8 = tmp61(tmp(tmp2[91]), obj25);
          const tmpResult7 = tmp(tmp2[91]);
        }
        items27[2] = tmp61Result8;
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
        items27[4] = tmp61(tmp(tmp2[92]), obj26);
        let tmp61Result9 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp61Result9) {
          const obj27 = { guildId };
          tmp61Result9 = tmp61(boardTabIndex, obj27);
        }
        items27[5] = tmp61Result9;
        let tmp61Result10 = user.id !== stateFromStores.id;
        if (tmp61Result10) {
          const obj28 = { user, disableCalls: null, disableMessage: null, location: null, hasCustomProfileTheme: null, style: null };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp91.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj28.disableCalls = disableCalls;
          obj28.disableMessage = disableMessage;
          obj28.location = _location;
          obj28.hasCustomProfileTheme = tmp28;
          obj28.style = tmp3.primaryButtons;
          tmp61Result10 = tmp61(tmp(tmp2[93]), obj28);
          const tmpResult8 = tmp(tmp2[93]);
        }
        items27[6] = tmp61Result10;
        obj22.children = items27;
        tmp59Result2 = tmp59(tmp79, obj22);
        tmp91 = RelationshipTypes;
      }
      const items28 = [tmp59Result2, ];
      if (!tmp35) {
        if (!tmp37) {
          if (!tmp38) {
            let callback4Result = callback4();
          }
          const obj29 = { children: null };
          const obj30 = { children: null };
          items28[1] = callback4Result;
          obj30.children = items28;
          items25[1] = tmp59(tmp6(tmp2[99]).LayerScope, obj30);
          obj19.children = items25;
          items23[1] = tmp59(tmp79, obj19);
          obj16.children = items23;
          items20[2] = tmp59(tmp(tmp2[97]).View, obj16);
          obj29.children = items20;
          return tmp59(tmp60, obj29);
        }
      }
      const obj31 = { onLayout: callback, children: null };
      const obj32 = { style: tmp3.profileTablist, children: null };
      const obj33 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp28) {
        str = "overlay";
      }
      const obj34 = { children: null };
      obj33.variant = str;
      const items29 = [hasCustomProfileTheme(tmp6(tmp2[100]).Tabs, obj33), ];
      const obj35 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${Math.max(wishlistTabIndex, 0) / arr22.length * 100}%`;
      obj35.style = rect;
      items29[1] = hasCustomProfileTheme(navigateToPremium, obj35);
      obj32.children = items29;
      const items30 = [stateFromStores1(navigateToPremium, obj32), , ];
      const obj36 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: null };
      const obj37 = { state: segmentedControlState };
      obj36.children = hasCustomProfileTheme(tmp6(tmp2[101]).SegmentedControlPages, obj37);
      items30[1] = hasCustomProfileTheme(tmp(tmp2[97]).View, obj36);
      const obj38 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp58 };
      items30[2] = hasCustomProfileTheme(tmp(tmp2[102]), obj38);
      obj34.children = items30;
      obj31.children = stateFromStores1(tmp6(tmp2[99]).LayerScope, obj34);
      callback4Result = tmp61(tmp79, obj31);
      tmp60 = containerBackground;
      const tmpResult6 = tmp(tmp2[96]);
    }
  }
  return null;
}));
export const PrimaryInfo = tmp5;