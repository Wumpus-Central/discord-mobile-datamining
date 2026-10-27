// discord_app/modules/user_profile/native/UserProfileContent.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
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
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice.tsx";
import ConjureCustomWidgetAddOptionDefault from "../../conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx";
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard.tsx";
import UserProfileActivityTabDefault from "UserProfileActivityTab.tsx";
import PendingBadgeSettings from "../../badges/PendingBadgeSettings.tsx";
import WishlistUtils from "../../wishlists/WishlistUtils.tsx";
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner.tsx";
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells.tsx";
import UserProfileGameFriendsCardDefault from "UserProfileGameFriendsCard.tsx";
import UserProfileConnections from "UserProfileConnections.tsx";
import UserProfileWishlistGrid from "UserProfileWishlistGrid.tsx";
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid.tsx";
import UserProfileMutualsDefault from "UserProfileMutuals.tsx";
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest.tsx";
import UserProfileRemediatedNoticeDefault from "UserProfileRemediatedNotice.tsx";
import UserProfileContactButtonsDefault from "UserProfileContactButtons.tsx";
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
function CustomStatusBubble(guildId) {
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[16])();
  const items = [UserStore];
  const items1 = [user];
  let stateFromStores = user(channelId[17]).useStateFromStores(
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
      asyncRequireImpl(11078, dependencyMap.paths),
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
  const items3 = [,];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp3);
  obj2.style = items3;
  obj2.emojiOnlyStyle = tmp3.emojiOnlyCustomStatusBubble;
  obj2.placeholderText = labelResult;
  obj2.prompt = ref.current;
  return closure_19(guildId(channelId[22]), obj2);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(14384, dependencyMap.paths),
      "UserProfileGameFriendActionSheet",
      { user, guildId, channelId },
      "stack",
    );
  }, items);
  const obj = {
    size: "sm",
    variant: "secondary-overlay",
    icon: closure_19(user(channelId[34]).UserPlatformIcon, { size: "sm", color: "white" }),
    accessibilityLabel: null,
    onPress: null,
  };
  const intl = user(channelId[30]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[30]).t.cvSt1J);
  obj.onPress = callback;
  return closure_19(user(channelId[31]).IconButton, obj);
}
const View = fn(17).View;
const UserProfileSections = fn(8672).UserProfileSections;
const Constants = fn(7306);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = Constants);
const RelationshipTypes = fn(1084).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(5267).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(4821).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RemoveFriendIconButton(user) {
      const cResult = user(newestAnalyticsLocation[24]).c(9);
      user = user.user;
      const obj = user(newestAnalyticsLocation[24]);
      const trackUserProfileAction = user(newestAnalyticsLocation[25]).useUserProfileAnalyticsContext()
        .trackUserProfileAction;
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
            const tmp11 = closure_19(tmp(tmp2[29]).UserCheckIcon, { size: "sm", color: "white" });
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
            },
          };
          const tmp15 = closure_19(tmp(tmp2[31]).IconButton, obj3);
          cResult[6] = tmp5;
          cResult[7] = name;
          cResult[8] = tmp15;
          tmp13 = tmp15;
          const tmp4Result = tmp4(tmp2[28]);
        }
      }
      function handleConfirm() {
        trackUserProfileAction({ action: "REMOVE_FRIEND" });
        RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
      }
      cResult[0] = newestAnalyticsLocation;
      cResult[1] = trackUserProfileAction;
      cResult[2] = user;
      cResult[3] = handleConfirm;
      tmp5 = handleConfirm;
      const obj2 = user(newestAnalyticsLocation[25]);
      tmp4 = trackUserProfileAction;
    }
  : function RemoveFriendIconButton(user) {
      user = user.user;
      let newestAnalyticsLocation;
      function handleConfirm() {
        trackUserProfileAction({ action: "REMOVE_FRIEND" });
        RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
      }
      const trackUserProfileAction = user(newestAnalyticsLocation[25]).useUserProfileAnalyticsContext()
        .trackUserProfileAction;
      newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
      const obj = user(newestAnalyticsLocation[25]);
      const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[28]).useName(user);
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
      return closure_19(user(newestAnalyticsLocation[31]).IconButton, obj3);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PrimaryInfo(channelId) {
      const cResult = userTag(576).c(38);
      ({
        user,
        guildId,
        displayProfile,
        displayNameOverride,
        pronounsOverride,
        badgesOverride,
        pendingDisplayNameStyles,
        style,
        badgeContainerBackground,
        isPreviewingChanges,
        showBadgeDirectoryNuxCoachmark,
      } = channelId);
      let tmp4 = undefined !== showBadgeDirectoryNuxCoachmark;
      if (tmp4) {
        tmp4 = showBadgeDirectoryNuxCoachmark;
      }
      let obj = userTag(576);
      userTag = trackUserProfileAction(5026).useUserTag(user);
      const obj2 = trackUserProfileAction(5026);
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
        const variantProps = tmp(14386).useBadgeDirectoryNuxCoachmarkVariant(tmp9).variantProps;
        if (cResult[3] !== variantProps) {
          if (null != variantProps) {
            const items = [tmp(4808).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
            let items1 = items;
          } else {
            items1 = [];
          }
          cResult[3] = variantProps;
          cResult[4] = items1;
        } else {
          const tmpResult4 = tmp(7497);
          [tmp14, tmp15] = tmp(7497).useSelectedDismissibleContent(cResult[4]);
          const tmp16 = tmp14 === tmp(4808).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
          const tmp13 = _slicedToArray(tmp(7497).useSelectedDismissibleContent(cResult[4]), 2);
          const badgeDirectoryNuxEntryPoint = tmp(14389).useBadgeDirectoryNuxEntryPoint(tmp16, tmp15);
          ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
          const tmpResult5 = tmp(14389);
          const name = tmp5(5990).useName(guildId, channelId.channelId, user);
          if (cResult[5] === name) {
            if (cResult[6] === displayNameOverride) {
              let tmp19 = cResult[7];
            }
            trackUserProfileAction = tmp(8679).useUserProfileAnalyticsContext().trackUserProfileAction;
            if (cResult[8] === trackUserProfileAction) {
              if (cResult[9] === userTag) {
                let tmp22 = cResult[10];
              }
              if (cResult[11] !== trackUserProfileAction) {
                function handlePressPronouns() {
                  trackUserProfileAction({ action: "PRESS_PRONOUNS" });
                  ToastUtils.presentUserPronouns();
                }
                cResult[11] = trackUserProfileAction;
                cResult[12] = handlePressPronouns;
                class H {
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
              class H {
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
                const intl = tmp(1125).intl;
                cResult[13] = intl.string(tmp(1125).t.y5MwJy);
                class H {
                  constructor() {
                    tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                    obj = closure_0(closure_2[41]);
                    copyResult = obj.copy(closure_0);
                    obj2 = closure_0(closure_2[42]);
                    result = obj2.presentUsernameCopied();
                    return;
                  }
                }
                const stringResult = intl.string(tmp(1125).t.y5MwJy);
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
                                                class H {
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
                                                const tmp43 = closure_21(closure_20, obj3);
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
                                          const obj4 = {
                                            targetRef: entryPointRef,
                                            userId: user.id,
                                            variantProps,
                                            visible: null,
                                            markAsDismissed: null,
                                          };
                                          class H {
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
                                          tmp37 = closure_19(tmp5(14390), obj4);
                                        }
                                        class H {
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
              const obj5 = {
                user,
                guildId,
                displayName: tmp19,
                pronouns: pronounsOverride,
                badges: badgesOverride,
                style,
                badgeContainerBackground,
                onPressDisplayName: tmp26,
                displayNameAccessibilityHint: tmp28,
                onPressUserTag: tmp30,
                onPressPronouns: tmp31,
                showBadgeToastOnPress: !isPreviewingChanges,
                canOpenBadgeDirectory: true,
                badgeDirectoryEntryPointRef: entryPointRef,
                onOpenBadgeDirectory,
                pendingDisplayNameStyles,
              };
              const tmp35 = closure_19(tmp5(11082), obj5);
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
            class H {
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
            cResult[10] = H;
            tmp22 = H;
            const tmpResult6 = tmp(8679);
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
          const tmp5Result = tmp5(5990);
        }
        const tmpResult = tmp(14386);
      }
      const obj6 = { userId: user.id, enabled: tmp4, fetchCatalog: false, location: "UserProfileContent" };
      cResult[0] = tmp4;
      cResult[1] = user.id;
      cResult[2] = obj6;
      tmp9 = obj6;
      tmp7 = trackUserProfileAction(8733)(displayProfile);
    }
  : function PrimaryInfo(arg0) {
      ({
        user,
        guildId,
        displayProfile,
        displayNameOverride,
        pronounsOverride,
        badgesOverride,
        isPreviewingChanges,
        showBadgeDirectoryNuxCoachmark,
      } = arg0);
      ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = arg0);
      if (showBadgeDirectoryNuxCoachmark === undefined) {
        showBadgeDirectoryNuxCoachmark = false;
      }
      let trackUserProfileAction;
      const userTag = trackUserProfileAction(5026).useUserTag(user);
      let obj = trackUserProfileAction(5026);
      const tmp4 = trackUserProfileAction(8733)(displayProfile);
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
      const variantProps = userTag(14386).useBadgeDirectoryNuxCoachmarkVariant(obj3).variantProps;
      const obj2 = userTag(14386);
      if (null != variantProps) {
        const items = [tmp5(4808).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
        let items1 = items;
      } else {
        items1 = [];
      }
      const tmp5Result = userTag(7497);
      [tmp8, tmp9] = userTag(7497).useSelectedDismissibleContent(items1);
      const tmp10 = tmp8 === userTag(4808).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
      const tmp7 = _slicedToArray(userTag(7497).useSelectedDismissibleContent(items1), 2);
      const badgeDirectoryNuxEntryPoint = userTag(14389).useBadgeDirectoryNuxEntryPoint(tmp10, tmp9);
      ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
      const tmp5Result3 = userTag(14389);
      const name = trackUserProfileAction(5990).useName(guildId, channelId, user);
      let tmp13 = name;
      if (null != displayNameOverride) {
        tmp13 = name;
        if (displayNameOverride.trim().length > 0) {
          tmp13 = displayNameOverride;
        }
      }
      const tmpResult = trackUserProfileAction(5990);
      trackUserProfileAction = userTag(8679).useUserProfileAnalyticsContext().trackUserProfileAction;
      const items2 = [trackUserProfileAction, userTag];
      const callback = noop.useCallback(() => {
        trackUserProfileAction({ action: "COPY_USERNAME" });
        ClipboardUtils.copy(userTag);
        const result = ToastUtils.presentUsernameCopied();
      }, items2);
      const obj4 = {
        user,
        guildId,
        displayName: tmp13,
        pronouns: null,
        badges: null,
        style: null,
        badgeContainerBackground: null,
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
      const tmp5Result4 = userTag(8679);
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
      const intl = tmp5(1125).intl;
      obj4.displayNameAccessibilityHint = intl.string(userTag(1125).t.y5MwJy);
      let tmp21;
      if (!isPreviewingChanges) {
        tmp21 = callback;
      }
      obj4.onPressUserTag = tmp21;
      let handlePressPronouns;
      if (!isPreviewingChanges) {
        handlePressPronouns = function handlePressPronouns() {
          trackUserProfileAction({ action: "PRESS_PRONOUNS" });
          ToastUtils.presentUserPronouns();
        };
      }
      obj4.onPressPronouns = handlePressPronouns;
      obj4.showBadgeToastOnPress = !isPreviewingChanges;
      obj4.badgeDirectoryEntryPointRef = entryPointRef;
      obj4.onOpenBadgeDirectory = onOpenBadgeDirectory;
      obj4.pendingDisplayNameStyles = pendingDisplayNameStyles;
      const children = [closure_19(trackUserProfileAction(11082), obj4)];
      let tmp17Result = null != variantProps;
      if (tmp17Result) {
        const obj5 = { targetRef: entryPointRef, userId: user.id, variantProps, visible: tmp10, markAsDismissed: tmp9 };
        tmp17Result = closure_19(tmp(14390), obj5);
      }
      children[1] = tmp17Result;
      return closure_21(closure_20, { children });
    };
let closure_25 = tmp4;
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditSection(guildId) {
      const cResult = guildId(576).c(24);
      guildId = guildId.guildId;
      const tmp5 = trackUserProfileAction(8732)();
      const obj = guildId(576);
      trackUserProfileAction = guildId(8679).useUserProfileAnalyticsContext().trackUserProfileAction;
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
      const obj2 = guildId(8679);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp8);
      const tmp10 = trackUserProfileAction(11191)();
      dependencyMap = tmp10;
      if (cResult[3] !== stateFromStores) {
        const obj3 = { guild: stateFromStores };
        cResult[3] = stateFromStores;
        cResult[4] = obj3;
        let tmp11 = obj3;
      } else {
        tmp11 = cResult[4];
      }
      const tmp12 = trackUserProfileAction(11191)(tmp11);
      closure_3 = tmp12;
      if (cResult[5] === tmp10) {
        if (cResult[6] === trackUserProfileAction) {
          let tmp13 = cResult[7];
        }
        if (cResult[8] === tmp12) {
          if (cResult[9] === trackUserProfileAction) {
            let tmp14 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { size: "sm", color: tmp4(587).colors.WHITE };
            const tmp17 = closure_19(tmp(10122).PencilIcon, obj4);
            cResult[11] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] !== stateFromStores) {
            if (null != stateFromStores) {
              const intl2 = tmp(1125).intl;
              let stringResult = intl2.string(tmp(1125).t.HmFaFB);
            } else {
              const intl = tmp(1125).intl;
              stringResult = intl.string(tmp(1125).t.s5vZlQ);
            }
            cResult[12] = stateFromStores;
            cResult[13] = stringResult;
          } else {
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp18) {
                let tmp22 = cResult[16];
              }
              if (cResult[17] === stateFromStores) {
                if (cResult[18] === tmp14) {
                  let tmp25 = cResult[19];
                }
                if (cResult[20] === tmp5.primaryButtons) {
                  if (cResult[21] === tmp22) {
                    if (cResult[22] === tmp25) {
                      let tmp29 = cResult[23];
                    }
                    return tmp29;
                  }
                }
                const obj5 = {
                  style: tmp5.primaryButtons,
                  maxWidth: ACTION_SHEET_MAX_WIDTH,
                  primaryButton: tmp22,
                  secondaryButton: tmp25,
                };
                const tmp32 = closure_19(tmp4(14306), obj5);
                cResult[20] = tmp5.primaryButtons;
                cResult[21] = tmp22;
                cResult[22] = tmp25;
                cResult[23] = tmp32;
                tmp29 = tmp32;
              }
              let tmp27;
              if (null != stateFromStores) {
                const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
                const obj7 = { size: "sm", color: tmp4(587).colors.WHITE };
                obj6.icon = closure_19(tmp(10122).PencilIcon, obj7);
                const intl3 = tmp(1125).intl;
                obj6.text = intl3.string(tmp(1125).t["PKQB/H"]);
                obj6.onPress = tmp14;
                tmp27 = closure_19(tmp(5245).Button, obj6);
              }
              cResult[17] = stateFromStores;
              cResult[18] = tmp14;
              cResult[19] = tmp27;
              tmp25 = tmp27;
            }
            const obj8 = { variant: "primary", icon: tmp15, text: cResult[13], onPress: tmp13, grow: true };
            const tmp24 = closure_19(tmp(5245).Button, obj8);
            cResult[14] = tmp13;
            cResult[15] = cResult[13];
            cResult[16] = tmp24;
            tmp22 = tmp24;
          }
        }
        function handleEditGuildProfile() {
          trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          closeVoicePanelsDefault();
          closure_3();
        }
        cResult[8] = tmp12;
        cResult[9] = trackUserProfileAction;
        cResult[10] = handleEditGuildProfile;
        tmp14 = handleEditGuildProfile;
      }
      function handleEditProfile() {
        trackUserProfileAction({ action: "EDIT_PROFILE" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        closeVoicePanelsDefault();
        closure_2();
      }
      cResult[5] = tmp10;
      cResult[6] = trackUserProfileAction;
      cResult[7] = handleEditProfile;
      tmp13 = handleEditProfile;
      const tmpResult = guildId(504);
    }
  : function EditSection(guildId) {
      guildId = guildId.guildId;
      let trackUserProfileAction;
      const tmp = trackUserProfileAction;
      const tmp3 = trackUserProfileAction(8732)();
      trackUserProfileAction = guildId(8679).useUserProfileAnalyticsContext().trackUserProfileAction;
      const obj = guildId(8679);
      const items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      dependencyMap = trackUserProfileAction(11191)();
      closure_3 = trackUserProfileAction(11191)({ guild: stateFromStores });
      const obj3 = {
        style: tmp3.primaryButtons,
        maxWidth: ACTION_SHEET_MAX_WIDTH,
        primaryButton: null,
        secondaryButton: null,
      };
      const obj2 = guildId(504);
      const obj4 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
      const tmp7 = trackUserProfileAction(14306);
      obj4.icon = closure_19(guildId(10122).PencilIcon, {
        size: "sm",
        color: trackUserProfileAction(587).colors.WHITE,
      });
      if (null != stateFromStores) {
        const intl2 = tmp4(1125).intl;
        let stringResult = intl2.string(tmp4(1125).t.HmFaFB);
      } else {
        const intl = tmp4(1125).intl;
        stringResult = intl.string(tmp4(1125).t.s5vZlQ);
      }
      obj4.text = stringResult;
      obj4.onPress = function handleEditProfile() {
        trackUserProfileAction({ action: "EDIT_PROFILE" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        closeVoicePanelsDefault();
        closure_2();
      };
      obj3.primaryButton = closure_19(guildId(5245).Button, obj4);
      let tmp6Result;
      if (null != stateFromStores) {
        const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
        const obj7 = { size: "sm", color: tmp(587).colors.WHITE };
        obj6.icon = closure_19(tmp4(10122).PencilIcon, obj7);
        const intl3 = tmp4(1125).intl;
        obj6.text = intl3.string(tmp4(1125).t["PKQB/H"]);
        obj6.onPress = function handleEditGuildProfile() {
          trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          closeVoicePanelsDefault();
          closure_3();
        };
        tmp6Result = closure_19(tmp4(5245).Button, obj6);
      }
      obj3.secondaryButton = tmp6Result;
      return closure_19(tmp7, obj3);
    };
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileWidgetsBoardContainer(arg0) {
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
            tmp8 = closure_1_19(UserProfileWidgetsBoardEditNoticeDefault, {});
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
            tmp11 = closure_1_19(ConjureCustomWidgetAddOptionDefault, {});
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
            const tmp19 = guild(View, obj3);
            cResult[13] = tmp4.profileContent;
            cResult[14] = tmp7;
            cResult[15] = tmp10;
            cResult[16] = tmp13;
            cResult[17] = tmp19;
            tmp16 = tmp19;
          }
        }
        const obj4 = { userId, isVisible, cardStyle: tmp6 };
        const tmp15 = closure_1_19(UserProfileWidgetsBoardDefault, obj4);
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
    }
  : function UserProfileWidgetsBoardContainer(isCurrentUser) {
      isCurrentUser = isCurrentUser.isCurrentUser;
      ({ userId, isVisible, containerBackground } = isCurrentUser);
      const tmp3 = UserProfileSharedStylesDefault();
      const items = [tmp3.card, { backgroundColor: containerBackground }];
      const obj = { style: tmp3.profileContent, children: null };
      let tmp6 = isCurrentUser;
      if (isCurrentUser) {
        tmp6 = closure_1_19(UserProfileWidgetsBoardEditNoticeDefault, {});
      }
      const items1 = [tmp6, ,];
      if (isCurrentUser) {
        isCurrentUser = closure_1_19(ConjureCustomWidgetAddOptionDefault, {});
      }
      items1[1] = isCurrentUser;
      items1[2] = closure_1_19(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
      obj.children = items1;
      return guild(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileActivityTabContainer(arg0) {
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
                  const tmp14 = closure_1_19(View, obj3);
                  cResult[14] = tmp7;
                  cResult[15] = tmp8;
                  cResult[16] = tmp14;
                  tmp11 = tmp14;
                }
              }
            }
          }
          const obj4 = { user, currentUser, guildId, channelId, cardStyle: tmp6 };
          const tmp10 = closure_1_19(UserProfileActivityTabDefault, obj4);
          cResult[8] = tmp6;
          cResult[9] = channelId;
          cResult[10] = currentUser;
          cResult[11] = guildId;
          cResult[12] = user;
          cResult[13] = tmp10;
          tmp8 = tmp10;
        }
        const items = [,];
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
    }
  : function UserProfileActivityTabContainer(arg0) {
      ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
      const tmp = UserProfileSharedStylesDefault();
      const items = [tmp.card, { backgroundColor: containerBackground }];
      const obj = {
        style: null,
        children: closure_1_19(UserProfileActivityTabDefault, {
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
      return closure_1_19(View, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function UserProfileContent(user) {
        const cResult = user(guildId[24]).c(261);
        user = user.user;
        const channel = user.channel;
        guildId = user.guildId;
        const displayProfile = user.displayProfile;
        noop = user.showUserProfileActionSheet;
        const disableCalls = user.disableCalls;
        const disableMessage = user.disableMessage;
        const navigationReplace = user.navigationReplace;
        ({ disableStatus, isPreviewingChanges } = user);
        ({ avatarDecorationOverride, location: _location } = user);
        const navigateToPremium = user.navigateToPremium;
        const navigateToShop = user.navigateToShop;
        ({ initialSection, scrollPosition, scrollViewRef } = user);
        let obj = user(guildId[24]);
        closure_12 = channel(guildId[16])();
        const tmp6 = channel(guildId[55])(originApplicationId);
        if (cResult[0] === tmp6) {
          if (cResult[1] === scrollPosition) {
            let tmp7 = cResult[2];
          }
          ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp4(
            tmp2[56],
          )(tmp7));
          const bottom = tmp4(tmp2[57])().bottom;
          const tmp8 = tmp4(tmp2[56])(tmp7);
          const trackUserProfileAction = tmp(tmp2[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [navigateToPremium];
            const fn = function $() {
              return navigateToPremium.getCurrentUser();
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
            let items1 = [_location];
            cResult[5] = items1;
            let tmp16 = items1;
          } else {
            tmp16 = cResult[5];
          }
          if (cResult[6] !== user.id) {
            function de() {
              return {
                relationshipType: RelationshipStore.getRelationshipType(user.id),
                originApplicationId: RelationshipStore.getOriginApplicationId(user.id),
              };
            }
            cResult[6] = user.id;
            cResult[7] = de;
            let tmp18 = de;
          } else {
            tmp18 = cResult[7];
          }
          const tmpResult12 = tmp(tmp2[17]);
          const stateFromStoresObject = tmp(tmp2[17]).useStateFromStoresObject(tmp16, tmp18);
          const relationshipType = stateFromStoresObject.relationshipType;
          originApplicationId = stateFromStoresObject.originApplicationId;
          const tmpResult13 = tmp(tmp2[17]);
          const incomingGameRelationshipsForUser = tmp(tmp2[58]).useIncomingGameRelationshipsForUser(user.id);
          const tmpResult14 = tmp(tmp2[58]);
          const isGameFriends = tmp(tmp2[59]).useIsGameFriends(user.id);
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
                let items2 = [navigateToShop];
                class Se {
                  constructor() {
                    return navigateToShop.getPendingChanges();
                  }
                }
                cResult[13] = items2;
                cResult[14] = Se;
                let tmp31 = Se;
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
                class Se {
                  constructor() {
                    return navigateToShop.getPendingChanges();
                  }
                }
                if (tmp38 === Symbol.for("react.memo_cache_sentinel")) {
                  const items3 = [disableMessage];
                  class Se {
                    constructor() {
                      return navigateToShop.getPendingChanges();
                    }
                  }
                  cResult[18] = items3;
                  let tmp39 = items3;
                } else {
                  tmp39 = cResult[18];
                }
                if (cResult[19] !== user.id) {
                  class Ve {
                    constructor() {
                      return closure_6.getBadges(user.id);
                    }
                  }
                  const items4 = [user.id];
                  class Se {
                    constructor() {
                      return navigateToShop.getPendingChanges();
                    }
                  }
                  cResult[19] = user.id;
                  cResult[20] = Ve;
                  cResult[21] = items4;
                  let tmp42 = items4;
                } else {
                  class Ve {
                    constructor() {
                      return closure_6.getBadges(user.id);
                    }
                  }
                  tmp42 = cResult[21];
                }
                const stateFromStoresArray = tmp(tmp2[17]).useStateFromStoresArray(tmp39, Ve, tmp42);
                const _Symbol5 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  class Ve {
                    constructor() {
                      return closure_6.getBadges(user.id);
                    }
                  }
                  cResult[22] = tmp45;
                  class Se {
                    constructor() {
                      return navigateToShop.getPendingChanges();
                    }
                  }
                } else {
                  class Ve {
                    constructor() {
                      return closure_6.getBadges(user.id);
                    }
                  }
                }
                const tmpResult19 = tmp(tmp2[17]);
                const isBadgeManagementEnabled = tmp(tmp2[64]).useIsBadgeManagementEnabled(tmp44);
                if (cResult[23] === isBadgeManagementEnabled) {
                  class Ve {
                    constructor() {
                      return closure_6.getBadges(user.id);
                    }
                  }
                  const effect = noop.useEffect(Xe, tmp48);
                  class Se {
                    constructor() {
                      return navigateToShop.getPendingChanges();
                    }
                  }
                  let obj3 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
                  const pendingProfileBadges = tmp(tmp2[66]).getPendingProfileBadges(tmp37, stateFromStoresArray, obj3);
                  cResult[27] = tmp37;
                  cResult[28] = stateFromStoresArray;
                  cResult[29] = pendingBadgeDisplayOrder;
                  class Xe {
                    constructor() {
                      if (closure_26) {
                        obj = closure_6;
                        tmp = user;
                        tmp2 = closure_6.hasCatalogFor(user.id) && !obj.isCatalogStaleFor(tmp.id);
                        if (!tmp2) {
                          tmp3 = closure_0;
                          tmp4 = closure_2;
                          obj2 = closure_0(closure_2[65]);
                          badgeDirectory = obj2.fetchBadgeDirectory(tmp.id);
                        }
                      }
                      return;
                    }
                  }
                  cResult[30] = pendingBadgeHiddenBadges;
                  cResult[31] = pendingProfileBadges;
                  const tmpResult21 = tmp(tmp2[66]);
                }
                class Xe {
                  constructor() {
                    if (closure_26) {
                      obj = closure_6;
                      tmp = user;
                      tmp2 = closure_6.hasCatalogFor(user.id) && !obj.isCatalogStaleFor(tmp.id);
                      if (!tmp2) {
                        tmp3 = closure_0;
                        tmp4 = closure_2;
                        obj2 = closure_0(closure_2[65]);
                        badgeDirectory = obj2.fetchBadgeDirectory(tmp.id);
                      }
                    }
                    return;
                  }
                }
                const items5 = [user.id, isBadgeManagementEnabled];
                cResult[23] = isBadgeManagementEnabled;
                cResult[24] = user.id;
                cResult[25] = Xe;
                cResult[26] = items5;
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
            class Ve {
              constructor() {
                return closure_6.getBadges(user.id);
              }
            }
            cResult[10] = guildId;
            class Se {
              constructor() {
                return navigateToShop.getPendingChanges();
              }
            }
            cResult[11] = user;
            cResult[12] = tmp26;
          } else {
            class Ve {
              constructor() {
                return closure_6.getBadges(user.id);
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
      }
    : function UserProfileContent(user) {
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
        let obj8;
        ({
          disableMessage,
          navigationReplace,
          disableStatus,
          location: _location,
          initialSection,
          scrollViewRef,
        } = user);
        const tmp3 = channel(guildId[16])();
        closure_8 = tmp3;
        const tmp4 = channel(guildId[55])(closure_17);
        ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(
          guildId[56],
        )({ scrollPosition, bannerHeight: tmp4 }));
        const tmp5 = channel(guildId[56])({ scrollPosition, bannerHeight: tmp4 });
        const trackUserProfileAction = user(guildId[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
        let obj = user(guildId[25]);
        let items1 = [stateFromStores];
        stateFromStores = user(guildId[17]).useStateFromStores(items1, () => stateFromStores.getCurrentUser());
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        let tmp9 = id === user.id;
        isCurrentUser = tmp9;
        let obj2 = user(guildId[17]);
        let items2 = [trackUserProfileAction];
        const stateFromStoresObject = user(guildId[17]).useStateFromStoresObject(items2, () => ({
          relationshipType: RelationshipStore.getRelationshipType(user.id),
          originApplicationId: RelationshipStore.getOriginApplicationId(user.id),
        }));
        ({ relationshipType, originApplicationId } = stateFromStoresObject);
        const tmp6Result = user(guildId[17]);
        const incomingGameRelationshipsForUser = user(guildId[58]).useIncomingGameRelationshipsForUser(user.id);
        const tmp6Result21 = user(guildId[58]);
        const isGameFriends = user(guildId[59]).useIsGameFriends(user.id);
        const tmp6Result22 = user(guildId[59]);
        userProfileGameFriendApplicationIds = user(guildId[60]).useUserProfileGameFriendApplicationIds({
          userId: user.id,
        });
        let obj3 = { userId: user.id };
        const tmp6Result23 = user(guildId[60]);
        let id1;
        if (channel != null) {
          id1 = channel.id;
        }
        name = channel(guildId[40]).useName(guildId, id1, user);
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
        const tmpResult = channel(guildId[40]);
        const subscribeGuildMembers = user(guildId[61]).useSubscribeGuildMembers(memo, "UserProfileContent");
        const tmp17 = channel(guildId[62])(user.id);
        const tmp6Result24 = user(guildId[61]);
        const items4 = [isCurrentUser];
        const stateFromStoresObject1 = user(guildId[17]).useStateFromStoresObject(items4, () =>
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
        const tmp6Result25 = user(guildId[17]);
        const pendingAvatarSrc = user(guildId[63]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
        const tmp20 = channel(guildId[35])(displayProfile, pendingLegacyUsernameDisabled);
        closure_17 = tmp20;
        let obj4 = { userId: user.id, image: pendingAvatar };
        const tmp6Result26 = user(guildId[63]);
        const items5 = [navigateToPremium];
        const items6 = [user.id];
        stateFromStoresArray = user(guildId[17]).useStateFromStoresArray(
          items5,
          () => BadgeDirectoryStore.getBadges(user.id),
          items6,
        );
        const tmp6Result27 = user(guildId[17]);
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
        const memo1 = showUserProfileActionSheet.useMemo(
          () =>
            PendingBadgeSettings.getPendingProfileBadges(closure_17, stateFromStoresArray, {
              pendingBadgeDisplayOrder,
              pendingBadgeHiddenBadges,
            }),
          items8,
        );
        let obj5 = { user, displayProfile, pendingThemeColors: null };
        let tmp26;
        const tmp6Result28 = user(guildId[64]);
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
        const tmp6Result29 = user(guildId[68]);
        const ref1 = showUserProfileActionSheet.useRef(null);
        const ref = showUserProfileActionSheet.useRef(null);
        const items9 = [userProfileGameFriendApplicationIds];
        stateFromStores1 = user(guildId[17]).useStateFromStores(items9, () =>
          UserProfileStore.getFirstWishlistId(user.id),
        );
        const tmp6Result30 = user(guildId[17]);
        const fetchWishlist = user(guildId[69]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
        let obj6 = { wishlistId: stateFromStores1, userId: user.id };
        const tmp6Result31 = user(guildId[69]);
        const items10 = [navigateToShop];
        const items11 = [stateFromStores1];
        stateFromStores2 = user(guildId[17]).useStateFromStores(
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
        let tmp35 = tmp9;
        if (!tmp9) {
          let tmp36 = null != stateFromStores2;
          if (tmp36) {
            tmp36 = arr14.length > 0;
          }
          tmp35 = tmp36;
        }
        closure_24 = tmp35;
        const tmp6Result32 = user(guildId[17]);
        const displayableBoardWidgets = user(guildId[71]).useDisplayableBoardWidgets(user.id);
        const tmp6Result33 = user(guildId[71]);
        const tmp37 =
          displayableBoardWidgets.length > 0 || user(guildId[72]).useCanConjureCustomWidget("UserProfileContent", tmp9);
        closure_25 = tmp37;
        const tmp6Result34 = user(guildId[72]);
        const tmp38 =
          user(guildId[73]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
        closure_26 = tmp38;
        const tmp6Result35 = user(guildId[73]);
        const profileTabIndices = user(guildId[74]).useProfileTabIndices(tmp37, tmp38, tmp35);
        wishlistTabIndex = profileTabIndices.wishlistTabIndex;
        ({ boardTabIndex, activityTabIndex } = profileTabIndices);
        const tmp6Result36 = user(guildId[74]);
        [tmp41, c28] = displayProfile(showUserProfileActionSheet.useState(0), 2);
        const callback = obj9.useCallback((nativeEvent) => {
          _undefined(nativeEvent.nativeEvent.layout.width);
        }, []);
        const tmp40 = displayProfile(showUserProfileActionSheet.useState(0), 2);
        const wishlistViewerCoachmark = user(guildId[75]).useWishlistViewerCoachmark({
          isCurrentUser: tmp9,
          shouldShowWishlistTab: tmp35,
        });
        isVisible = wishlistViewerCoachmark.isVisible;
        markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
        const items13 = [trackUserProfileAction, isVisible, markAsDismissed];
        const callback1 = obj9.useCallback((section) => {
          trackUserProfileAction({ action: "PRESS_SECTION", section });
          if (tmp2) {
            markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
          }
          const obj = { action: "PRESS_SECTION", section };
          tmp2 = section === UserProfileSections.WISHLIST && isVisible;
        }, items13);
        const tmp6Result37 = user(guildId[75]);
        const profileSectionTabs = user(guildId[74]).useProfileSectionTabs({
          initialUserProfileSection: initialSection,
          wishlistTabIndex,
          boardTabIndex,
          activityTabIndex,
          onTabChange: callback1,
        });
        ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
        restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
        isVisible = tmp46;
        isVisible2 = tmp47;
        const items14 = [navigateToPremium];
        ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
        callback2 = obj9.useCallback(() => {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          if (navigateToPremium != null) {
            navigateToPremium();
          }
        }, items14);
        const items15 = [navigateToShop];
        callback3 = obj9.useCallback(() => {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          if (navigateToShop != null) {
            navigateToShop();
          }
        }, items15);
        const items16 = [
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
        callback4 = obj9.useCallback(() => {
          if (null != user) {
            if (null != stateFromStores) {
              const items = [closure_8.card];
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
                _private = closure_2_19(UserProfilePrivateInfoBannerDefault, obj);
              }
              const items2 = [_private, , , , , , , , , ,];
              let isProvisional = user.isProvisional;
              if (isProvisional) {
                const obj4 = { style: items, userId: user.id, iconSize: 16 };
                isProvisional = closure_2_19(
                  ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard,
                  obj4,
                );
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
              const obj9 = { userId: user.id, displayProfile, pendingBio: null };
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
                const obj11 = {
                  user,
                  currentUser: stateFromStores,
                  guildId: null,
                  channelId: null,
                  showUserProfile: null,
                };
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
              return guild(View, obj3);
            }
          }
          return null;
        }, items16);
        const items17 = [
          tmp3.profileContent,
          stateFromStores1,
          activeProfileTabSection === name.WISHLIST,
          user.id,
          tmp9,
        ];
        callback5 = obj9.useCallback(() => {
          const obj = { style: closure_8.profileContent, children: null };
          if (null == stateFromStores1) {
            let tmp10 = closure_2_19(UserProfileWishlistGrid.WishlistEmptyState, {});
            let tmp9 = closure_2_19;
          } else {
            const obj2 = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
            tmp9 = closure_2_19;
            tmp10 = closure_2_19(UserProfileWishlistGridDefault, obj2);
          }
          const items = [tmp10];
          let tmp9Result = closure_11;
          if (closure_11) {
            const obj3 = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
            tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
          }
          items[1] = tmp9Result;
          obj.children = items;
          return guild(View, obj);
        }, items17);
        const items18 = [callback4, callback5, tmp37, tmp38, tmp35, user, stateFromStores, guildId, , , ,];
        let id2;
        if (channel != null) {
          id2 = channel.id;
        }
        items18[8] = id2;
        items18[9] = activeProfileTabSection === name.WIDGETS;
        items18[10] = tmp9;
        items18[11] = containerBackground;
        const memo2 = obj9.useMemo(() => {
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
            obj2.page = closure_2_19(closure_27, obj3);
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
            obj4.page = closure_2_19(closure_28, obj5);
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
        const tmp6Result38 = user(guildId[74]);
        const measuredTabItems = user(guildId[88]).useMeasuredTabItems(memo2);
        ({ items, pageHeights } = measuredTabItems);
        const tmp6Result39 = user(guildId[88]);
        const tmp6Result40 = user(guildId[89]);
        segmentedControlState = tmp6Result40.useSegmentedControlState({
          pageWidth: tmp41,
          defaultIndex: activeProfileTabSectionIndex,
          itemSpacing: channel(guildId[48]).space.PX_24,
          items,
          onPageChange: handleTabChange,
        });
        const items19 = [segmentedControlState, restoreActiveIndex];
        const layoutEffect = obj9.useLayoutEffect(() => {
          restoreActiveIndex(segmentedControlState);
        }, items19);
        const items20 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
        if (null != user) {
          if (null != stateFromStores) {
            obj8 = { backgroundColor: containerBackground };
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
              let obj10 = { style: null, children: null };
              const items21 = [tmp3.privateBanner, bannerAnimatedStyle];
              obj10.style = items21;
              let obj11 = { primaryColor };
              obj10.children = isBadgeManagementEnabled(tmp(tmp2[96]), obj11);
              tmp60 = isBadgeManagementEnabled(tmp(tmp2[95]).View, obj10);
            }
            const items22 = [tmp60, , ,];
            let obj12 = {
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
            let tmp64;
            if (isPreviewingChanges) {
              tmp64 = pendingBanner;
            }
            obj12.pendingBanner = tmp64;
            let tmp65;
            if (isPreviewingChanges) {
              tmp65 = pendingAvatarSrc;
            }
            obj12.pendingAvatarSrc = tmp65;
            let tmp66;
            if (isPreviewingChanges) {
              if (null != pendingAccentColor) {
                tmp66 = pendingAccentColor;
              }
            }
            obj12.pendingAccentColor = tmp66;
            let tmp67;
            if (isPreviewingChanges) {
              if (null != pendingThemeColors) {
                tmp67 = pendingThemeColors;
              }
            }
            obj12.pendingThemeColors = tmp67;
            obj12.disableInteraction = isPreviewingChanges;
            obj12.bannerAnimatedStyle = bannerAnimatedStyle;
            obj12.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
            obj12.blurAnimatedProps = blurAnimatedProps;
            obj12.showBlur = showBlur;
            items22[1] = isBadgeManagementEnabled(tmp(tmp2[97]), obj12);
            let tmp57Result = !isPreviewingChanges;
            if (!isPreviewingChanges) {
              const items23 = [tmp3.bannerButtons, ,];
              let _private1;
              if (displayProfile != null) {
                _private1 = displayProfile.private;
              }
              if (_private1) {
                _private1 = tmp3.bannerButtonsWithPrivateBanner;
              }
              let obj13 = { style: null, children: null };
              items23[1] = _private1;
              items23[2] = bannerAnimatedStyle;
              obj13.style = items23;
              let tmp70 = null;
              if (null != stateFromStores) {
                tmp70 = null;
                if (user.id !== stateFromStores.id) {
                  tmp70 = null;
                  if (!user.bot) {
                    if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                      const obj14 = { user };
                      let tmp62Result = tmp62(stateFromStores2, obj14);
                    } else {
                      tmp62Result = null;
                      if (isGameFriends) {
                        const obj15 = { user };
                        tmp62Result = tmp62(closure_24, obj15);
                      }
                    }
                  }
                }
              }
              const items24 = [tmp70];
              const obj16 = { user, currentUser: stateFromStores, displayProfile, channel };
              items24[1] = tmp62(tmp(tmp2[98]), obj16);
              obj13.children = items24;
              tmp57Result = tmp57(tmp(tmp2[95]).View, obj13);
            }
            items22[2] = tmp57Result;
            const obj17 = { style: contentAnimatedStyle, children: null };
            const obj18 = {
              user,
              guildId,
              disableStatus,
              pendingAvatarSrc: null,
              pendingAvatarDecoration: null,
              backgroundColor: null,
              statusStyle: null,
            };
            let tmp76;
            if (isPreviewingChanges) {
              tmp76 = pendingAvatarSrc;
            }
            obj18.pendingAvatarSrc = tmp76;
            let tmp77;
            if (isPreviewingChanges) {
              if (avatarDecorationOverride == null) {
                avatarDecorationOverride = pendingAvatarDecoration;
              }
              tmp77 = avatarDecorationOverride;
            }
            obj18.pendingAvatarDecoration = tmp77;
            obj18.backgroundColor = avatarBackground;
            const obj19 = { backgroundColor: statusBackground };
            obj18.statusStyle = obj19;
            const items25 = [isBadgeManagementEnabled(OpenableUserProfileAvatar, obj18)];
            const items26 = [tmp3.profileContentWrapper];
            if (!tmp9) {
              let num2 = 0;
              if (null == tmp17) {
                num2 = pendingBadgeDisplayOrder;
              }
            } else {
              num2 = 0;
            }
            const obj20 = { style: null, children: null };
            const obj21 = { paddingTop: num2, paddingBottom: channel(guildId[57])().bottom + pendingBio };
            items26[1] = obj21;
            obj20.style = items26;
            const obj22 = {
              customStatusActivity: tmp17,
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
            obj22.channelId = id3;
            obj22.hasCustomProfileTheme = tmp28;
            obj22.showUserProfileActionSheet = showUserProfileActionSheet;
            obj22.isPreviewingChanges = isPreviewingChanges;
            obj22.bubbleRef = ref;
            const items27 = [isBadgeManagementEnabled(stateFromStores1, obj22)];
            let tmp57Result2 = null;
            if (null != stateFromStores) {
              const obj23 = { style: null, children: null };
              const items28 = [,];
              ({ primaryInfo: arr32[0], profileContent: arr32[1] } = tmp3);
              obj23.style = items28;
              const obj24 = {
                user,
                channelId: null,
                guildId: null,
                displayProfile: null,
                displayNameOverride: null,
                pronounsOverride: null,
                badgesOverride: null,
                pendingDisplayNameStyles: null,
                badgeContainerBackground: null,
                isPreviewingChanges: null,
                showBadgeDirectoryNuxCoachmark: null,
              };
              let id4;
              if (channel != null) {
                id4 = channel.id;
              }
              obj24.channelId = id4;
              obj24.guildId = guildId;
              obj24.displayProfile = displayProfile;
              let tmp85;
              if (isPreviewingChanges) {
                tmp85 = pendingGlobalName;
              }
              obj24.displayNameOverride = tmp85;
              let tmp86;
              if (isPreviewingChanges) {
                tmp86 = pendingPronouns;
              }
              obj24.pronounsOverride = tmp86;
              let tmp87;
              if (isPreviewingChanges) {
                tmp87 = memo1;
              }
              obj24.badgesOverride = tmp87;
              let tmp88;
              if (isPreviewingChanges) {
                tmp88 = pendingDisplayNameStyles;
              }
              obj24.pendingDisplayNameStyles = tmp88;
              obj24.badgeContainerBackground = containerBackground;
              obj24.isPreviewingChanges = isPreviewingChanges;
              if (tmp9) {
                tmp9 = !isPreviewingChanges;
              }
              obj24.showBadgeDirectoryNuxCoachmark = tmp9;
              const items29 = [tmp62(closure_25, obj24), , , , , ,];
              let tmp62Result5 = user.id !== stateFromStores.id;
              if (tmp62Result5) {
                let obj25 = { user, guildId };
                tmp62Result5 = tmp62(tmp(tmp2[90]), obj25);
              }
              items29[1] = tmp62Result5;
              let tmp62Result6 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
              if (tmp62Result6) {
                const obj26 = {
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
                obj26.channelId = id5;
                obj26.guildId = guildId;
                obj26.applicationId = originApplicationId;
                obj26.style = obj8;
                obj26.showUserProfile = showUserProfileActionSheet;
                tmp62Result6 = tmp62(tmp(tmp2[91]), obj26);
                const tmpResult7 = tmp(tmp2[91]);
              }
              items29[2] = tmp62Result6;
              items29[3] = incomingGameRelationshipsForUser.map((applicationId) => {
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
                obj.style = obj8;
                obj.showUserProfile = showUserProfileActionSheet;
                return closure_2_19(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
              });
              const obj27 = { user, style: obj8 };
              items29[4] = tmp62(tmp(tmp2[92]), obj27);
              let tmp62Result7 = user.id === stateFromStores.id && !isPreviewingChanges;
              if (tmp62Result7) {
                const obj28 = { guildId };
                tmp62Result7 = tmp62(closure_26, obj28);
              }
              items29[5] = tmp62Result7;
              let tmp62Result8 = user.id !== stateFromStores.id;
              if (tmp62Result8) {
                const obj29 = {
                  user,
                  disableCalls: null,
                  disableMessage: null,
                  navigationReplace: null,
                  location: null,
                  hasCustomProfileTheme: null,
                  style: null,
                };
                if (!disableCalls) {
                  disableCalls = relationshipType === tmp90.BLOCKED;
                }
                if (!disableCalls) {
                  disableCalls = user.isProvisional;
                }
                obj29.disableCalls = disableCalls;
                obj29.disableMessage = disableMessage;
                obj29.navigationReplace = navigationReplace;
                obj29.location = _location;
                obj29.hasCustomProfileTheme = tmp28;
                obj29.style = tmp3.primaryButtons;
                tmp62Result8 = tmp62(tmp(tmp2[93]), obj29);
                const tmpResult8 = tmp(tmp2[93]);
              }
              items29[6] = tmp62Result8;
              obj23.children = items29;
              tmp57Result2 = tmp57(tmp78, obj23);
              tmp90 = pendingBadgeHiddenBadges;
            }
            const items30 = [tmp57Result2];
            if (!tmp35) {
              if (!tmp37) {
                if (!tmp38) {
                  let callback4Result = callback4();
                }
                const obj30 = { children: null };
                const obj31 = { children: null };
                items30[1] = callback4Result;
                obj31.children = items30;
                items27[1] = tmp57(tmp6(tmp2[99]).LayerScope, obj31);
                obj20.children = items27;
                items25[1] = tmp57(tmp78, obj20);
                obj17.children = items25;
                items22[3] = tmp57(tmp(tmp2[95]).View, obj17);
                obj30.children = items22;
                return tmp57(tmp58, obj30);
              }
            }
            const obj32 = { onLayout: callback, children: null };
            const obj33 = { style: tmp3.profileTablist, children: null };
            const obj34 = { state: segmentedControlState, variant: null };
            let str;
            if (tmp28) {
              str = "overlay";
            }
            const obj35 = { children: null };
            obj34.variant = str;
            const items31 = [isBadgeManagementEnabled(tmp6(tmp2[100]).Tabs, obj34)];
            const obj36 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
            const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
            const _Math = Math;
            rect.left = `${(Math.max(wishlistTabIndex, 0) / arr22.length) * 100}%`;
            obj36.style = rect;
            items31[1] = isBadgeManagementEnabled(isPreviewingChanges, obj36);
            obj33.children = items31;
            const items32 = [containerBackground(isPreviewingChanges, obj33), ,];
            const obj37 = { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef };
            items32[1] = isBadgeManagementEnabled(tmp(tmp2[88]), obj37);
            const obj38 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp56 };
            items32[2] = isBadgeManagementEnabled(tmp(tmp2[101]), obj38);
            obj35.children = items32;
            obj32.children = containerBackground(tmp6(tmp2[99]).LayerScope, obj35);
            callback4Result = tmp62(tmp78, obj32);
            tmp58 = hasCustomProfileTheme;
            const tmpResult6 = tmp(tmp2[97]);
          }
        }
        return null;
      },
);
export const PrimaryInfo = tmp4;
