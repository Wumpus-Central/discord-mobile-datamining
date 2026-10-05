// discord_app/modules/user_profile/native/UserProfileContent.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Constants2 from "../../../Constants.tsx";
import intl5 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import UserProfileRolesCardDefault from "UserProfileRolesCard.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import Constants3 from "../Constants.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard.tsx";
import closeVoicePanelsDefault from "../../voice_panel/native/utils/closeVoicePanels.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import ProvisionalAccountExplainer from "../../provisional_accounts/native/ProvisionalAccountExplainer.tsx";
import UserProfileActivityDefault from "UserProfileActivity.tsx";
import UserProfileModeratorActionsDefault from "UserProfileModeratorActions.tsx";
import UserProfileNoteDefault from "UserProfileNote.tsx";
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice.tsx";
import ConjureCustomWidgetAddOptionDefault from "../../conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx";
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
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";
import Constants from "Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let dependencyMap;

let closure_15;
let closure_16;
let closure_20;
let closure_21;
let closure_22;
let hasOwnProperty;
let metroRequire;
function CustomStatusBubble(guildId) {
  let bubbleRef;
  let customStatusActivity;
  let hasCustomProfileTheme;
  let items3;
  let tmp12;
  let user;
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[16])();
  let obj = user(channelId[17]);
  const items = [UserStore];
  const items1 = [user];
  let stateFromStores = obj.useStateFromStores(
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
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, guildId, channelId };
    obj.openLazy(asyncRequire(10839, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj2, "stack");
  }, items2);
  const useRef = react.useRef;
  if (null == customStatusActivity) {
    tmp7 = null;
    if (stateFromStores) {
      tmp7 = null;
      if (!isPreviewingChanges) {
        tmp7 = tmp(tmp2[21])();
      }
    }
  }
  const ref = useRef(tmp7);
  let labelResult;
  if (null != ref.current) {
    const current = ref.current;
    labelResult = current.label();
  }
  let obj2 = {
    ref: bubbleRef,
    customStatusActivity,
    hasCustomProfileTheme,
    editEnabled: stateFromStores,
    onPressTruncatedStatus: tmp12,
    style: items3,
    emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
    placeholderText: labelResult,
    prompt: ref.current,
  };
  const tmpResult = guildId(channelId[22]);
  if (stateFromStores) {
    stateFromStores = !isPreviewingChanges;
  }
  tmp12 = undefined;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  items3 = [,];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp3);
  return closure_20(tmpResult, obj2);
}
function RemoveGameFriendIconButton(user) {
  let intl;
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, guildId, channelId };
    obj.openLazy(asyncRequire(12883, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj2, "stack");
  }, items);
  let obj = {
    size: "sm",
    variant: "secondary-overlay",
    icon: closure_20(user(channelId[34]).UserPlatformIcon, { size: "sm", color: "white" }),
    accessibilityLabel: intl.string(user(channelId[30]).t.cvSt1J),
    onPress: callback,
  };
  const IconButton = user(channelId[31]).IconButton;
  intl = user(channelId[30]).intl;
  return closure_20(IconButton, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileSections = Constants3.UserProfileSections;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_15, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_16 } = Constants);
let RelationshipTypes = Constants2.RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let newestAnalyticsLocation;
      let obj = user(newestAnalyticsLocation[24]);
      const cResult = obj.c(9);
      user = user.user;
      let obj2 = user(newestAnalyticsLocation[25]);
      const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
      newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
      const tmp4 = trackUserProfileAction;
      if (cResult[0] === newestAnalyticsLocation) {
        if (cResult[1] === trackUserProfileAction) {
          let tmp5;
          let tmp9;
          let tmp8;
          if (cResult[2] === user) {
            tmp5 = cResult[3];
          }
          const onConfirm = tmp5;
          const tmp4Result = tmp4(newestAnalyticsLocation[28]);
          const name = tmp4Result.useName(user);
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp11 = closure_20(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" });
            const intl = tmp(tmp2[30]).intl;
            const stringResult = intl.string(user(newestAnalyticsLocation[30]).t.cvSt1J);
            cResult[4] = tmp11;
            cResult[5] = stringResult;
            tmp9 = stringResult;
            tmp8 = tmp11;
          } else {
            tmp8 = cResult[4];
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp5) {
            let tmp13;
            if (cResult[7] === name) {
              tmp13 = cResult[8];
            }
            return tmp13;
          }
          const obj3 = {
            size: "sm",
            variant: "secondary-overlay",
            icon: tmp8,
            accessibilityLabel: tmp9,
            onPress() {
              const obj = UserProfileAlertUtils;
              const obj2 = { userDisplayName: name, onConfirm };
              obj.confirmRemoveFriend(obj2);
            },
          };
          const tmp15 = closure_20(user(newestAnalyticsLocation[31]).IconButton, obj3);
          cResult[6] = tmp5;
          cResult[7] = name;
          cResult[8] = tmp15;
          tmp13 = tmp15;
        }
      }
      const fn = function t() {
        trackUserProfileAction({ action: "REMOVE_FRIEND" });
        const obj = RelationshipActionCreatorsDefault;
        const obj2 = { location: newestAnalyticsLocation };
        obj.removeFriend(user.id, obj2);
      };
      cResult[0] = newestAnalyticsLocation;
      cResult[1] = trackUserProfileAction;
      cResult[2] = user;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (user) => {
      let intl;
      user = user.user;
      let newestAnalyticsLocation;
      function handleConfirm() {
        trackUserProfileAction({ action: "REMOVE_FRIEND" });
        const obj = RelationshipActionCreatorsDefault;
        const obj2 = { location: newestAnalyticsLocation };
        obj.removeFriend(user.id, obj2);
      }
      let obj = user(newestAnalyticsLocation[25]);
      const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
      newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
      let obj2 = trackUserProfileAction(newestAnalyticsLocation[28]);
      const userDisplayName = obj2.useName(user);
      const obj3 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: closure_20(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" }),
        accessibilityLabel: intl.string(user(newestAnalyticsLocation[30]).t.cvSt1J),
        onPress() {
          const obj = UserProfileAlertUtils;
          const obj2 = { userDisplayName, onConfirm: handleConfirm };
          obj.confirmRemoveFriend(obj2);
        },
      };
      const IconButton = user(newestAnalyticsLocation[31]).IconButton;
      intl = user(newestAnalyticsLocation[30]).intl;
      return closure_20(IconButton, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let badgeContainerBackground;
      let badgesOverride;
      let displayNameOverride;
      let displayProfile;
      let entryPointRef;
      let guildId;
      let isPreviewingChanges;
      let onOpenBadgeDirectory;
      let pendingDisplayNameStyles;
      let pronounsOverride;
      let showBadgeDirectoryNuxCoachmark;
      let style;
      let tmp14;
      let tmp15;
      let trackUserProfileAction;
      let user;
      let userTag;
      let obj = userTag(576);
      const cResult = obj.c(38);
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
      channelId = channelId.channelId;
      if (tmp4) {
        tmp4 = showBadgeDirectoryNuxCoachmark;
      }
      let obj2 = trackUserProfileAction(4722);
      userTag = obj2.useUserTag(user);
      const tmp7 = trackUserProfileAction(7914)(displayProfile);
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
        let tmp9;
        let tmp10;
        if (cResult[1] === user.id) {
          tmp9 = cResult[2];
        }
        const tmpResult = userTag(12885);
        const variantProps = tmpResult.useBadgeDirectoryNuxCoachmarkVariant(tmp9).variantProps;
        if (cResult[3] !== variantProps) {
          let items1;
          if (null != variantProps) {
            const items = [tmp(2036).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
            items1 = items;
          } else {
            items1 = [];
          }
          cResult[3] = variantProps;
          cResult[4] = items1;
          tmp10 = items1;
        } else {
          tmp10 = cResult[4];
        }
        const tmpResult4 = userTag(6891);
        [tmp14, tmp15] = tmpResult4.useSelectedDismissibleContent(tmp10);
        _slicedToArray(tmpResult4.useSelectedDismissibleContent(tmp10), 2);
        const tmp16 = tmp14 === userTag(2036).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
        const tmpResult5 = userTag(12888);
        const badgeDirectoryNuxEntryPoint = tmpResult5.useBadgeDirectoryNuxEntryPoint(tmp16, tmp15);
        ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
        const tmp5Result = trackUserProfileAction(5042);
        const name = tmp5Result.useName(guildId, channelId, user);
        if (cResult[5] === name) {
          let tmp19;
          if (cResult[6] === displayNameOverride) {
            tmp19 = cResult[7];
          }
          const tmpResult6 = userTag(7861);
          trackUserProfileAction = tmpResult6.useUserProfileAnalyticsContext().trackUserProfileAction;
          if (cResult[8] === trackUserProfileAction) {
            let tmp22;
            let tmp23;
            let tmp28;
            if (cResult[9] === userTag) {
              tmp22 = cResult[10];
            }
            if (cResult[11] !== trackUserProfileAction) {
              const fn = function j() {
                trackUserProfileAction({ action: "PRESS_PRONOUNS" });
                const obj = ToastUtils;
                obj.presentUserPronouns();
              };
              cResult[11] = trackUserProfileAction;
              cResult[12] = fn;
              class G {
                constructor() {
                  trackUserProfileAction({ action: "COPY_USERNAME" });
                  const obj = ClipboardUtils;
                  obj.copy(userTag);
                  const obj2 = ToastUtils;
                  const result = obj2.presentUsernameCopied();
                }
              }
            } else {
              tmp23 = cResult[12];
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
                trackUserProfileAction({ action: "COPY_USERNAME" });
                const obj = ClipboardUtils;
                obj.copy(userTag);
                const obj2 = ToastUtils;
                const result = obj2.presentUsernameCopied();
              }
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              cResult[13] = intl.string(userTag(1126).t.y5MwJy);
              intl.string(userTag(1126).t.y5MwJy);
              class G {
                constructor() {
                  trackUserProfileAction({ action: "COPY_USERNAME" });
                  const obj = ClipboardUtils;
                  obj.copy(userTag);
                  const obj2 = ToastUtils;
                  const result = obj2.presentUsernameCopied();
                }
              }
            } else {
              tmp28 = cResult[13];
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
                                if (cResult[24] === !isPreviewingChanges) {
                                  if (cResult[25] === pronounsOverride) {
                                    if (cResult[26] === badgesOverride) {
                                      let tmp33;
                                      if (cResult[27] === user) {
                                        tmp33 = cResult[28];
                                      }
                                      if (cResult[29] === entryPointRef) {
                                        if (cResult[30] === variantProps) {
                                          if (cResult[31] === tmp16) {
                                            if (cResult[32] === tmp15) {
                                              let tmp36;
                                              if (cResult[33] === user.id) {
                                                tmp36 = cResult[34];
                                              }
                                              if (cResult[35] === tmp33) {
                                                let tmp39;
                                                if (cResult[36] === tmp36) {
                                                  tmp39 = cResult[37];
                                                }
                                                return tmp39;
                                              }
                                              const obj3 = { children: tmp42 };
                                              class G {
                                                constructor() {
                                                  trackUserProfileAction({ action: "COPY_USERNAME" });
                                                  const obj = ClipboardUtils;
                                                  obj.copy(userTag);
                                                  const obj2 = ToastUtils;
                                                  const result = obj2.presentUsernameCopied();
                                                }
                                              }
                                              tmp42[0] = tmp33;
                                              tmp42[1] = tmp36;
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
                                        const obj4 = {
                                          targetRef: entryPointRef,
                                          userId: user.id,
                                          variantProps,
                                          visible: null,
                                          markAsDismissed: tmp15,
                                        };
                                        class G {
                                          constructor() {
                                            trackUserProfileAction({ action: "COPY_USERNAME" });
                                            const obj = ClipboardUtils;
                                            obj.copy(userTag);
                                            const obj2 = ToastUtils;
                                            const result = obj2.presentUsernameCopied();
                                          }
                                        }
                                        tmp37 = closure_20(tmp5(12889), obj4);
                                      }
                                      class G {
                                        constructor() {
                                          trackUserProfileAction({ action: "COPY_USERNAME" });
                                          const obj = ClipboardUtils;
                                          obj.copy(userTag);
                                          const obj2 = ToastUtils;
                                          const result = obj2.presentUsernameCopied();
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
            const tmp35 = closure_20(trackUserProfileAction(10843), obj5);
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
              trackUserProfileAction({ action: "COPY_USERNAME" });
              const obj = ClipboardUtils;
              obj.copy(userTag);
              const obj2 = ToastUtils;
              const result = obj2.presentUsernameCopied();
            }
          }
          cResult[8] = trackUserProfileAction;
          cResult[9] = userTag;
          cResult[10] = G;
          tmp22 = G;
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
      }
      const obj6 = { userId: user.id, enabled: tmp4, fetchCatalog: false, location: "UserProfileContent" };
      cResult[0] = tmp4;
      cResult[1] = user.id;
      cResult[2] = obj6;
      tmp9 = obj6;
    }
  : (arg0) => {
      let badgeContainerBackground;
      let badgesOverride;
      let channelId;
      let displayNameOverride;
      let displayProfile;
      let entryPointRef;
      let fn;
      let guildId;
      let intl;
      let isPreviewingChanges;
      let items1;
      let onOpenBadgeDirectory;
      let pendingDisplayNameStyles;
      let pronounsOverride;
      let showBadgeDirectoryNuxCoachmark;
      let style;
      let tmp10;
      let tmp11;
      let tmp22;
      let tmp23;
      let user;
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
      let obj = trackUserProfileAction(4722);
      const userTag = obj.useUserTag(user);
      let obj2 = {
        userId: user.id,
        enabled: showBadgeDirectoryNuxCoachmark,
        fetchCatalog: false,
        location: "UserProfileContent",
      };
      const tmp4 = trackUserProfileAction(7914)(displayProfile);
      const useBadgeDirectoryNuxCoachmarkVariant = userTag(12885).useBadgeDirectoryNuxCoachmarkVariant;
      userTag(12885);
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
      const variantProps = useBadgeDirectoryNuxCoachmarkVariant(obj2).variantProps;
      const useSelectedDismissibleContent = userTag(6891).useSelectedDismissibleContent;
      userTag(6891);
      if (null != variantProps) {
        const items = [userTag(2036).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
        items1 = items;
      } else {
        items1 = [];
      }
      [tmp10, tmp11] = useSelectedDismissibleContent(items1);
      _slicedToArray(useSelectedDismissibleContent(items1), 2);
      const tmp12 = tmp10 === userTag(2036).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
      const tmp5Result3 = userTag(12888);
      const badgeDirectoryNuxEntryPoint = tmp5Result3.useBadgeDirectoryNuxEntryPoint(tmp12, tmp11);
      ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
      const tmpResult = trackUserProfileAction(5042);
      const name = tmpResult.useName(guildId, channelId, user);
      let tmp15 = name;
      if (null != displayNameOverride) {
        tmp15 = name;
        if (displayNameOverride.trim().length > 0) {
          tmp15 = displayNameOverride;
        }
      }
      const tmp5Result4 = userTag(7861);
      trackUserProfileAction = tmp5Result4.useUserProfileAnalyticsContext().trackUserProfileAction;
      const items2 = [trackUserProfileAction, userTag];
      const callback = react.useCallback(() => {
        trackUserProfileAction({ action: "COPY_USERNAME" });
        const obj = ClipboardUtils;
        obj.copy(userTag);
        const obj2 = ToastUtils;
        const result = obj2.presentUsernameCopied();
      }, items2);
      const obj3 = {
        user,
        guildId,
        displayName: tmp15,
        pronouns: pronounsOverride,
        badges: badgesOverride,
        style,
        badgeContainerBackground,
        onPressDisplayName: tmp22,
        displayNameAccessibilityHint: intl.string(userTag(1126).t.y5MwJy),
        onPressUserTag: tmp23,
        onPressPronouns: fn,
        showBadgeToastOnPress: !isPreviewingChanges,
        canOpenBadgeDirectory: true,
        badgeDirectoryEntryPointRef: entryPointRef,
        onOpenBadgeDirectory,
        pendingDisplayNameStyles,
      };
      const tmpResult2 = trackUserProfileAction(10843);
      if (pronounsOverride == null) {
        let pronouns;
        if (displayProfile != null) {
          pronouns = displayProfile.pronouns;
        }
        pronounsOverride = pronouns;
      }
      if (badgesOverride == null) {
        badgesOverride = tmp4;
      }
      tmp22 = undefined;
      if (!isPreviewingChanges) {
        tmp22 = callback;
      }
      intl = tmp5(1126).intl;
      tmp23 = undefined;
      if (!isPreviewingChanges) {
        tmp23 = callback;
      }
      fn = undefined;
      if (!isPreviewingChanges) {
        fn = () => {
          trackUserProfileAction({ action: "PRESS_PRONOUNS" });
          const obj = ToastUtils;
          obj.presentUserPronouns();
        };
      }
      const children = [closure_20(tmpResult2, obj3)];
      let tmp19Result = null != variantProps;
      if (tmp19Result) {
        const obj4 = {
          targetRef: entryPointRef,
          userId: user.id,
          variantProps,
          visible: tmp12,
          markAsDismissed: tmp11,
        };
        tmp19Result = closure_20(tmp(12889), obj4);
      }
      children[1] = tmp19Result;
      return closure_22(closure_21, { children });
    };
let closure_26 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let PencilIcon;
      let closure_2;
      let closure_3;
      let first;
      let intl;
      let obj7;
      let tmp11;
      let tmp8;
      let trackUserProfileAction;
      let obj = guildId(576);
      const cResult = obj.c(24);
      guildId = guildId.guildId;
      const tmp5 = trackUserProfileAction(7913)();
      const obj2 = guildId(7861);
      trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function o() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      const tmp10 = trackUserProfileAction(9416)();
      dependencyMap = tmp10;
      if (cResult[3] !== stateFromStores) {
        const obj3 = { guild: stateFromStores };
        cResult[3] = stateFromStores;
        cResult[4] = obj3;
        tmp11 = obj3;
      } else {
        tmp11 = cResult[4];
      }
      const tmp12 = trackUserProfileAction(9416)(tmp11);
      _slicedToArray = tmp12;
      if (cResult[5] === tmp10) {
        let tmp13;
        if (cResult[6] === trackUserProfileAction) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === tmp12) {
          let tmp14;
          let tmp16;
          let tmp20;
          if (cResult[9] === trackUserProfileAction) {
            tmp14 = cResult[10];
          }
          const _Symbol = Symbol;
          class C {
            constructor() {
              trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              closeVoicePanelsDefault();
              closure_3();
            }
          }
          if (tmp15 === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { size: "sm", color: trackUserProfileAction(587).colors.WHITE };
            class C {
              constructor() {
                trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideAllActionSheets();
                closeVoicePanelsDefault();
                closure_3();
              }
            }
            const tmp19 = closure_20(tmp18, obj4);
            cResult[11] = tmp19;
            tmp16 = tmp19;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] !== stateFromStores) {
            if (null != stateFromStores) {
              const string2 = tmp(1126).intl.string;
              class C {
                constructor() {
                  trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideAllActionSheets();
                  closeVoicePanelsDefault();
                  closure_3();
                }
              }
            } else {
              const string = tmp(1126).intl.string;
              class C {
                constructor() {
                  trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideAllActionSheets();
                  closeVoicePanelsDefault();
                  closure_3();
                }
              }
            }
            class C {
              constructor() {
                trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideAllActionSheets();
                closeVoicePanelsDefault();
                closure_3();
              }
            }
            cResult[12] = stateFromStores;
            cResult[13] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === tmp13) {
            let tmp23;
            if (cResult[15] === tmp20) {
              tmp23 = cResult[16];
            }
            if (cResult[17] === stateFromStores) {
              let tmp26;
              if (cResult[18] === tmp14) {
                tmp26 = cResult[19];
              }
              if (cResult[20] === tmp5.primaryButtons) {
                if (cResult[21] === tmp23) {
                  let tmp30;
                  if (cResult[22] === tmp26) {
                    tmp30 = cResult[23];
                  }
                  return tmp30;
                }
              }
              class C {
                constructor() {
                  trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideAllActionSheets();
                  closeVoicePanelsDefault();
                  closure_3();
                }
              }
              const obj5 = {
                style: tmp5.primaryButtons,
                maxWidth: ACTION_SHEET_MAX_WIDTH,
                primaryButton: tmp23,
                secondaryButton: tmp26,
              };
              const tmp32 = closure_20(trackUserProfileAction(12815), obj5);
              cResult[20] = tmp5.primaryButtons;
              cResult[21] = tmp23;
              cResult[22] = tmp26;
              cResult[23] = tmp32;
              tmp30 = tmp32;
            }
            class C {
              constructor() {
                trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideAllActionSheets();
                closeVoicePanelsDefault();
                closure_3();
              }
            }
            let tmp27;
            if (null != stateFromStores) {
              const obj6 = {
                variant: "primary",
                icon: closure_20(PencilIcon, obj7),
                text: intl.string(guildId(1126).t["PKQB/H"]),
                onPress: tmp14,
                grow: true,
              };
              class C {
                constructor() {
                  trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideAllActionSheets();
                  closeVoicePanelsDefault();
                  closure_3();
                }
              }
              obj7 = { size: "sm", color: trackUserProfileAction(587).colors.WHITE };
              PencilIcon = tmp(10058).PencilIcon;
              intl = tmp(1126).intl;
              tmp27 = closure_20(tmp29, obj6);
            }
            cResult[17] = stateFromStores;
            cResult[18] = tmp14;
            cResult[19] = tmp27;
            tmp26 = tmp27;
          }
          const obj8 = { variant: "primary", icon: tmp16, text: tmp20, onPress: tmp13, grow: true };
          const tmp25 = closure_20(guildId(5594).Button, obj8);
          cResult[14] = tmp13;
          cResult[15] = tmp20;
          cResult[16] = tmp25;
          tmp23 = tmp25;
        }
        class C {
          constructor() {
            trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideAllActionSheets();
            closeVoicePanelsDefault();
            closure_3();
          }
        }
        cResult[8] = tmp12;
        cResult[9] = trackUserProfileAction;
        cResult[10] = C;
        tmp14 = C;
      }
      const fn2 = function b() {
        trackUserProfileAction({ action: "EDIT_PROFILE" });
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideAllActionSheets();
        closeVoicePanelsDefault();
        closure_2();
      };
      cResult[5] = tmp10;
      cResult[6] = trackUserProfileAction;
      cResult[7] = fn2;
      tmp13 = fn2;
    }
  : (guildId) => {
      let Button;
      let PencilIcon;
      let PencilIcon2;
      let closure_2;
      let intl3;
      let obj4;
      let obj5;
      let obj7;
      let stringResult;
      let tmp6Result;
      guildId = guildId.guildId;
      let trackUserProfileAction;
      const tmp3 = trackUserProfileAction(7913)();
      let obj = guildId(7861);
      const tmp = trackUserProfileAction;
      trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
      const items = [GuildStore];
      const obj2 = guildId(504);
      const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      dependencyMap = trackUserProfileAction(9416)();
      let closure_3 = trackUserProfileAction(9416)({ guild: stateFromStores });
      const obj3 = {
        style: tmp3.primaryButtons,
        maxWidth: ACTION_SHEET_MAX_WIDTH,
        primaryButton: closure_20(Button, obj4),
        secondaryButton: tmp6Result,
      };
      obj4 = {
        variant: "primary",
        icon: closure_20(PencilIcon, obj5),
        text: stringResult,
        onPress() {
          trackUserProfileAction({ action: "EDIT_PROFILE" });
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          closeVoicePanelsDefault();
          closure_2();
        },
        grow: true,
      };
      const tmp7 = trackUserProfileAction(12815);
      Button = guildId(5594).Button;
      obj5 = { size: "sm", color: trackUserProfileAction(587).colors.WHITE };
      PencilIcon = guildId(10058).PencilIcon;
      if (null != stateFromStores) {
        const intl2 = tmp4(1126).intl;
        stringResult = intl2.string(tmp4(1126).t.HmFaFB);
      } else {
        const intl = tmp4(1126).intl;
        stringResult = intl.string(tmp4(1126).t.s5vZlQ);
      }
      tmp6Result = undefined;
      if (null != stateFromStores) {
        const obj6 = {
          variant: "primary",
          icon: closure_20(PencilIcon2, obj7),
          text: intl3.string(guildId(1126).t["PKQB/H"]),
          onPress() {
            trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideAllActionSheets();
            closeVoicePanelsDefault();
            closure_3();
          },
          grow: true,
        };
        const Button2 = tmp4(5594).Button;
        obj7 = { size: "sm", color: tmp(587).colors.WHITE };
        PencilIcon2 = tmp4(10058).PencilIcon;
        intl3 = tmp4(1126).intl;
        tmp6Result = closure_20(Button2, obj6);
      }
      return closure_20(tmp7, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let containerBackground;
      let isCurrentUser;
      let isVisible;
      let items;
      let tmp5;
      let userId;
      const obj = react2;
      const cResult = obj.c(18);
      ({ userId, isVisible, isCurrentUser, containerBackground } = arg0);
      const tmp4 = UserProfileSharedStylesDefault();
      if (cResult[0] !== containerBackground) {
        const obj2 = { backgroundColor: containerBackground };
        cResult[0] = containerBackground;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.card) {
        let tmp6;
        let tmp7;
        let tmp10;
        if (cResult[3] === tmp5) {
          tmp6 = cResult[4];
        }
        if (cResult[5] !== isCurrentUser) {
          const tmp8 = isCurrentUser && closure_20(UserProfileWidgetsBoardEditNoticeDefault, {});
          cResult[5] = isCurrentUser;
          cResult[6] = tmp8;
          tmp7 = tmp8;
        } else {
          tmp7 = cResult[6];
        }
        if (cResult[7] !== isCurrentUser) {
          const tmp11 = isCurrentUser && closure_20(ConjureCustomWidgetAddOptionDefault, {});
          cResult[7] = isCurrentUser;
          cResult[8] = tmp11;
          tmp10 = tmp11;
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === isVisible) {
            let tmp13;
            if (cResult[11] === userId) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === tmp4.profileContent) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp10) {
                  let tmp16;
                  if (cResult[16] === tmp13) {
                    tmp16 = cResult[17];
                  }
                  return tmp16;
                }
              }
            }
            const obj3 = { style: tmp4.profileContent, children: items };
            items = [tmp7, tmp10, tmp13];
            const tmp19 = afk(metroRequire, obj3);
            cResult[13] = tmp4.profileContent;
            cResult[14] = tmp7;
            cResult[15] = tmp10;
            cResult[16] = tmp13;
            cResult[17] = tmp19;
            tmp16 = tmp19;
          }
        }
        const obj4 = { userId, isVisible, cardStyle: tmp6 };
        const tmp15 = closure_20(UserProfileWidgetsBoardDefault, obj4);
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
  : (isCurrentUser) => {
      let containerBackground;
      let isVisible;
      let items1;
      let userId;
      isCurrentUser = isCurrentUser.isCurrentUser;
      ({ userId, isVisible, containerBackground } = isCurrentUser);
      const tmp3 = UserProfileSharedStylesDefault();
      const items = [tmp3.card, { backgroundColor: containerBackground }];
      const obj = { style: tmp3.profileContent, children: items1 };
      items1 = [isCurrentUser && closure_20(UserProfileWidgetsBoardEditNoticeDefault, {}), ,];
      const tmp6 = isCurrentUser && closure_20(UserProfileWidgetsBoardEditNoticeDefault, {});
      if (isCurrentUser) {
        isCurrentUser = closure_20(ConjureCustomWidgetAddOptionDefault, {});
      }
      items1[1] = isCurrentUser;
      items1[2] = closure_20(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
      return afk(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let containerBackground;
      let currentUser;
      let guildId;
      let tmp5;
      let user;
      const obj = react2;
      const cResult = obj.c(17);
      ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
      const tmp4 = UserProfileSharedStylesDefault();
      if (cResult[0] !== containerBackground) {
        const obj2 = { backgroundColor: containerBackground };
        cResult[0] = containerBackground;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.card) {
        let tmp6;
        if (cResult[3] === tmp5) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === tmp4.cards) {
          let tmp7;
          if (cResult[6] === tmp4.profileContent) {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            if (cResult[9] === channelId) {
              if (cResult[10] === currentUser) {
                if (cResult[11] === guildId) {
                  let tmp8;
                  if (cResult[12] === user) {
                    tmp8 = cResult[13];
                  }
                  if (cResult[14] === tmp7) {
                    let tmp11;
                    if (cResult[15] === tmp8) {
                      tmp11 = cResult[16];
                    }
                    return tmp11;
                  }
                  const obj3 = { style: tmp7, children: tmp8 };
                  const tmp14 = closure_20(metroRequire, obj3);
                  cResult[14] = tmp7;
                  cResult[15] = tmp8;
                  cResult[16] = tmp14;
                  tmp11 = tmp14;
                }
              }
            }
          }
          const obj4 = { user, currentUser, guildId, channelId, cardStyle: tmp6 };
          const tmp10 = closure_20(UserProfileActivityTabDefault, obj4);
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
  : (arg0) => {
      let channelId;
      let containerBackground;
      let currentUser;
      let guildId;
      let items1;
      let user;
      ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
      const tmp = UserProfileSharedStylesDefault();
      const items = [tmp.card, { backgroundColor: containerBackground }];
      const obj = {
        style: items1,
        children: closure_20(UserProfileActivityTabDefault, {
          user,
          currentUser,
          guildId,
          channelId,
          cardStyle: items,
        }),
      };
      items1 = [,];
      ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
      return closure_20(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (user) => {
        let _location;
        let activeIndex;
        let avatarDecorationOverride;
        let bannerAnimatedStyle;
        let bannerImageAnimatedStyle;
        let blurAnimatedProps;
        let closure_4;
        let contentAnimatedStyle;
        let disableStatus;
        let guildId;
        let hasCustomProfileTheme;
        let initialSection;
        let isGameFriends;
        let isPreviewingChanges;
        let isVisible;
        let obj5;
        let pendingAccentColor;
        let pendingAvatar;
        let pendingBadgeDisplayOrder;
        let pendingBadgeHiddenBadges;
        let pendingDisplayNameStyles;
        let pendingGlobalName;
        let pendingThemeColors;
        let scrollPosition;
        let showBlur;
        let style;
        let tmp47;
        let tmp48;
        let wishlistId;
        const tmp = user;
        let tmp2 = guildId;
        let obj = user(guildId[24]);
        const cResult = obj.c(286);
        user = user.user;
        const channel = user.channel;
        guildId = user.guildId;
        const displayProfile = user.displayProfile;
        react = user.showUserProfileActionSheet;
        const disableCalls = user.disableCalls;
        const disableMessage = user.disableMessage;
        ({ disableStatus, isPreviewingChanges } = user);
        ({ avatarDecorationOverride, location: _location } = user);
        const navigateToPremium = user.navigateToPremium;
        const navigateToShop = user.navigateToShop;
        ({ initialSection, scrollPosition } = user);
        const currentUser = channel(guildId[16])();
        const tmp5 = channel(guildId[16])();
        const tmp6 = channel(guildId[55])(isGameFriends);
        if (cResult[0] === tmp6) {
          let tmp7;
          let tmp11;
          let tmp10;
          let tmp16;
          let tmp18;
          let tmp22;
          let tmp27;
          if (cResult[1] === scrollPosition) {
            tmp7 = cResult[2];
          }
          ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } =
            channel(tmp2[56])(tmp7));
          channel(tmp2[56])(tmp7);
          const bottom = tmp4(tmp2[57])().bottom;
          const tmpResult = tmp(tmp2[25]);
          const trackUserProfileAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileAction;
          let tmp9 = globalThis;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [currentUser];
            const fn = function q() {
              return currentUser.getCurrentUser();
            };
            cResult[3] = items;
            cResult[4] = fn;
            tmp11 = fn;
            tmp10 = items;
          } else {
            tmp10 = cResult[3];
            tmp11 = cResult[4];
          }
          const tmpResult12 = tmp(tmp2[17]);
          const stateFromStores = tmpResult12.useStateFromStores(tmp10, tmp11);
          let tmp14 = null;
          let id;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          const isWishlistOwner = id === user.id;
          const _Symbol2 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            let tmp17 = navigateToShop;
            let items1 = [navigateToShop];
            cResult[5] = items1;
            tmp16 = items1;
          } else {
            tmp16 = cResult[5];
          }
          if (cResult[6] !== user.id) {
            function le() {
              const obj = {
                relationshipType: RelationshipStore.getRelationshipType(user.id),
                originApplicationId: RelationshipStore.getOriginApplicationId(user.id),
              };
              return obj;
            }
            cResult[6] = user.id;
            cResult[7] = le;
            tmp18 = le;
          } else {
            tmp18 = cResult[7];
          }
          const tmpResult13 = tmp(tmp2[17]);
          const stateFromStoresObject = tmpResult13.useStateFromStoresObject(tmp16, tmp18);
          const relationshipType = stateFromStoresObject.relationshipType;
          const originApplicationId = stateFromStoresObject.originApplicationId;
          const tmpResult14 = tmp(tmp2[58]);
          const incomingGameRelationshipsForUser = tmpResult14.useIncomingGameRelationshipsForUser(user.id);
          const tmpResult15 = tmp(tmp2[59]);
          isGameFriends = tmpResult15.useIsGameFriends(user.id);
          if (cResult[8] !== user.id) {
            let obj2 = { userId: user.id };
            cResult[8] = user.id;
            cResult[9] = obj2;
            tmp22 = obj2;
          } else {
            tmp22 = cResult[9];
          }
          const tmpResult16 = tmp(tmp2[60]);
          const userProfileGameFriendApplicationIds = tmpResult16.useUserProfileGameFriendApplicationIds(tmp22);
          let id1;
          const useName = tmp4(tmp2[40]).useName;
          channel(tmp2[40]);
          if (channel != null) {
            id1 = channel.id;
          }
          const name = useName(guildId, id1, user);
          if (cResult[10] === guildId) {
            let tmp31;
            let tmp30;
            if (cResult[11] === user) {
              tmp27 = cResult[12];
            }
            const tmpResult17 = tmp(tmp2[61]);
            const subscribeGuildMembers = tmpResult17.useSubscribeGuildMembers(tmp27, "UserProfileContent");
            channel(tmp2[62])(user.id);
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
              tmp31 = Pe;
              tmp30 = items2;
            } else {
              tmp30 = cResult[13];
              tmp31 = cResult[14];
            }
            const tmpResult18 = tmp(tmp2[17]);
            const stateFromStoresObject1 = tmpResult18.useStateFromStoresObject(tmp30, tmp31);
            ({ pendingAvatar, pendingGlobalName } = stateFromStoresObject1);
            const pendingPronouns = stateFromStoresObject1.pendingPronouns;
            const pendingBio = stateFromStoresObject1.pendingBio;
            ({ pendingAccentColor, pendingThemeColors, pendingDisplayNameStyles } = stateFromStoresObject1);
            ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = stateFromStoresObject1);
            if (cResult[15] === pendingAvatar) {
              let tmp39;
              let tmp42;
              const tmp37 = channel(tmp2[35])(displayProfile, tmp34);
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
                tmp39 = items3;
              } else {
                tmp39 = cResult[18];
              }
              if (cResult[19] !== user.id) {
                class Le {
                  constructor() {
                    return BadgeDirectoryStore.getBadges(user.id);
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
                tmp42 = items4;
              } else {
                class Le {
                  constructor() {
                    return BadgeDirectoryStore.getBadges(user.id);
                  }
                }
                tmp42 = cResult[21];
              }
              const tmpResult19 = tmp(tmp2[17]);
              const stateFromStoresArray = tmpResult19.useStateFromStoresArray(tmp39, Le, tmp42);
              const _Symbol5 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                class Le {
                  constructor() {
                    return BadgeDirectoryStore.getBadges(user.id);
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
                    return BadgeDirectoryStore.getBadges(user.id);
                  }
                }
              }
              const tmpResult20 = tmp(tmp2[64]);
              const isBadgeManagementEnabled = tmpResult20.useIsBadgeManagementEnabled(tmp44);
              if (cResult[23] === isBadgeManagementEnabled) {
                class Le {
                  constructor() {
                    return BadgeDirectoryStore.getBadges(user.id);
                  }
                }
                const effect = react.useEffect(tmp47, tmp48);
                class Pe {
                  constructor() {
                    return trackUserProfileAction.getPendingChanges();
                  }
                }
                let obj3 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
                const tmpResult21 = tmp(tmp2[66]);
                const pendingProfileBadges = tmpResult21.getPendingProfileBadges(tmp37, stateFromStoresArray, obj3);
                cResult[27] = tmp37;
                cResult[28] = stateFromStoresArray;
                cResult[29] = pendingBadgeDisplayOrder;
                cResult[30] = pendingBadgeHiddenBadges;
                cResult[31] = pendingProfileBadges;
              }
              function je() {
                if (isBadgeManagementEnabled) {
                  const tmp3 =
                    BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
                  if (!tmp3) {
                    const obj2 = BadgeDirectoryActionCreators;
                    const badgeDirectory = obj2.fetchBadgeDirectory(user.id);
                  }
                }
              }
              const items5 = [user.id, isBadgeManagementEnabled];
              cResult[23] = isBadgeManagementEnabled;
              cResult[24] = user.id;
              cResult[25] = je;
              cResult[26] = items5;
              tmp47 = je;
              tmp48 = items5;
            }
            let obj4 = { userId: user.id, image: pendingAvatar };
            const tmpResult22 = tmp(tmp2[63]);
            const pendingAvatarSrc = tmpResult22.getPendingAvatarSrc(obj4);
            cResult[15] = pendingAvatar;
            cResult[16] = user.id;
            cResult[17] = pendingAvatarSrc;
          }
          if (null != guildId) {
            class Le {
              constructor() {
                return BadgeDirectoryStore.getBadges(user.id);
              }
            }
            cResult[10] = guildId;
            class Pe {
              constructor() {
                return trackUserProfileAction.getPendingChanges();
              }
            }
            cResult[11] = user;
            cResult[12] = obj5;
            tmp27 = obj5;
          }
          obj5 = {};
        }
        let obj6 = { scrollPosition, bannerHeight: tmp6 };
        cResult[0] = tmp6;
        cResult[1] = scrollPosition;
        cResult[2] = obj6;
        tmp7 = obj6;
      }
    : (user) => {
        let LayerScope2;
        let _location;
        let _undefined;
        let activeProfileTabSection;
        let activeProfileTabSectionIndex;
        let avatarBackground;
        let avatarDecorationOverride;
        let bannerAnimatedStyle;
        let bannerImageAnimatedStyle;
        let blurAnimatedProps;
        let c30;
        let closure_17;
        let contentAnimatedStyle;
        let disableCalls;
        let disableMessage;
        let disableStatus;
        let fillHeight;
        let handleTabChange;
        let id3;
        let id4;
        let id5;
        let initialSection;
        let isPreviewingChanges;
        let items22;
        let items26;
        let items27;
        let items29;
        let items30;
        let measureFill;
        let navigateToPremium;
        let obj18;
        let obj34;
        let obj37;
        let originApplicationId;
        let pagerRef;
        let pendingAccentColor;
        let pendingAvatar;
        let pendingAvatarDecoration;
        let pendingBadgeDisplayOrder;
        let pendingBanner;
        let pendingDisplayNameStyles;
        let pendingGlobalName;
        let pendingLegacyUsernameDisabled;
        let pendingPronouns;
        let pendingThemeColors;
        let rect;
        let relationshipType;
        let secondaryColor;
        let setActiveProfileTabSection;
        let showBlur;
        let statusBackground;
        let str;
        let theme;
        let tmp27;
        let tmp42;
        let tmp62Result;
        let tmp64;
        let tmp65;
        let tmp66;
        let tmp67;
        let tmp77;
        let tmp78;
        let tmp86;
        let tmp87;
        let tmp88;
        let tmp89;
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
        let closure_25;
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
        let obj9;
        const tmp = channel;
        let tmp2 = guildId;
        ({ disableMessage, disableStatus, location: _location, initialSection } = user);
        let tmp3 = channel(guildId[16])();
        let closure_8 = tmp3;
        const tmp4 = channel(guildId[55])(stateFromStoresArray);
        ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(
          guildId[56],
        )({ scrollPosition, bannerHeight: tmp4 }));
        const tmp5 = channel(guildId[56])({ scrollPosition, bannerHeight: tmp4 });
        const bottom = channel(guildId[57])().bottom;
        let obj = user(guildId[25]);
        const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
        let obj2 = user(guildId[17]);
        let items = [isCurrentUser];
        const stateFromStores = obj2.useStateFromStores(items, () => isCurrentUser.getCurrentUser());
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        let tmp9 = id === user.id;
        isCurrentUser = tmp9;
        let items1 = [stateFromStores];
        const tmp6Result = user(tmp2[17]);
        const stateFromStoresObject = tmp6Result.useStateFromStoresObject(items1, () => {
          const obj = {
            relationshipType: RelationshipStore.getRelationshipType(user.id),
            originApplicationId: RelationshipStore.getOriginApplicationId(user.id),
          };
          return obj;
        });
        ({ relationshipType, originApplicationId } = stateFromStoresObject);
        const tmp6Result23 = user(tmp2[58]);
        const incomingGameRelationshipsForUser = tmp6Result23.useIncomingGameRelationshipsForUser(user.id);
        const tmp6Result24 = user(tmp2[59]);
        const isGameFriends = tmp6Result24.useIsGameFriends(user.id);
        let obj3 = { userId: user.id };
        const tmp6Result25 = user(tmp2[60]);
        userProfileGameFriendApplicationIds = tmp6Result25.useUserProfileGameFriendApplicationIds(obj3);
        let id1;
        const useName = tmp(tmp2[40]).useName;
        tmp(tmp2[40]);
        if (channel != null) {
          id1 = channel.id;
        }
        name = useName(guildId, id1, user);
        let obj8 = showUserProfileActionSheet;
        let items2 = [guildId, user];
        const memo = showUserProfileActionSheet.useMemo(() => {
          if (null != guildId) {
            if (null != user) {
              const items = [tmp2.id];
              const obj = {};
              obj[tmp] = items;
            }
            return {};
          }
        }, items2);
        const tmp6Result26 = user(tmp2[61]);
        const subscribeGuildMembers = tmp6Result26.useSubscribeGuildMembers(memo, "UserProfileContent");
        const tmp18 = tmp(tmp2[62])(user.id);
        const items3 = [userProfileGameFriendApplicationIds];
        const tmp6Result27 = user(tmp2[17]);
        const stateFromStoresObject1 = tmp6Result27.useStateFromStoresObject(items3, () =>
          userProfileGameFriendApplicationIds.getPendingChanges(),
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
        let obj4 = { userId: user.id, image: pendingAvatar };
        const tmp6Result28 = user(tmp2[63]);
        const pendingAvatarSrc = tmp6Result28.getPendingAvatarSrc(obj4);
        const tmp21 = tmp(tmp2[35])(displayProfile, pendingLegacyUsernameDisabled);
        RelationshipTypes = tmp21;
        const items4 = [navigateToShop];
        const items5 = [user.id];
        const tmp6Result29 = user(tmp2[17]);
        stateFromStoresArray = tmp6Result29.useStateFromStoresArray(
          items4,
          () => BadgeDirectoryStore.getBadges(user.id),
          items5,
        );
        const tmp6Result30 = user(tmp2[64]);
        isBadgeManagementEnabled = tmp6Result30.useIsBadgeManagementEnabled({ location: "UserProfileContent" });
        const items6 = [user.id, isBadgeManagementEnabled];
        const effect = showUserProfileActionSheet.useEffect(() => {
          if (isBadgeManagementEnabled) {
            const tmp3 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
            if (!tmp3) {
              const obj2 = BadgeDirectoryActionCreators;
              const badgeDirectory = obj2.fetchBadgeDirectory(user.id);
            }
          }
        }, items6);
        const items7 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
        const memo1 = showUserProfileActionSheet.useMemo(() => {
          const obj = PendingBadgeSettings;
          const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
          return obj.getPendingProfileBadges(closure_17, stateFromStoresArray, obj2);
        }, items7);
        let obj5 = { user, displayProfile, pendingThemeColors: tmp27 };
        tmp27 = undefined;
        const tmpResult5 = tmp(tmp2[67]);
        if (isPreviewingChanges) {
          tmp27 = pendingThemeColors;
        }
        const tmpResult1Result = tmpResult5(obj5);
        const primaryColor = tmpResult1Result.primaryColor;
        hasCustomProfileTheme = tmp29;
        ({ theme, secondaryColor } = tmpResult1Result);
        const tmp6Result31 = user(tmp2[68]);
        const userProfileColors = tmp6Result31.useUserProfileColors({ theme, primaryColor, secondaryColor });
        containerBackground = userProfileColors.containerBackground;
        ({ avatarBackground, statusBackground } = userProfileColors);
        const ref = obj8.useRef(null);
        const ref1 = obj8.useRef(null);
        const items8 = [name];
        const tmp6Result32 = user(tmp2[17]);
        stateFromStores1 = tmp6Result32.useStateFromStores(items8, () => UserProfileStore.getFirstWishlistId(user.id));
        let obj6 = { wishlistId: stateFromStores1, userId: user.id };
        const tmp6Result33 = user(tmp2[69]);
        const fetchWishlist = tmp6Result33.useFetchWishlist(obj6);
        const items9 = [closure_8];
        const items10 = [stateFromStores1];
        const tmp6Result34 = user(tmp2[17]);
        stateFromStores2 = tmp6Result34.useStateFromStores(
          items9,
          () => {
            let wishlist = null;
            if (null != stateFromStores1) {
              wishlist = WishlistStore.getWishlist(tmp);
            }
            return wishlist;
          },
          items10,
        );
        const items11 = [stateFromStores2, tmp9];
        let tmp36 = tmp9;
        if (!tmp36) {
          let tmp37 = null != stateFromStores2;
          if (tmp37) {
            tmp37 = arr14.length > 0;
          }
          tmp36 = tmp37;
        }
        closure_24 = tmp36;
        const tmp6Result35 = user(tmp2[71]);
        const displayableBoardWidgets = tmp6Result35.useDisplayableBoardWidgets(user.id);
        const tmp6Result36 = user(tmp2[72]);
        const tmp38 =
          displayableBoardWidgets.length > 0 || tmp6Result36.useCanConjureCustomWidget("UserProfileContent", tmp9);
        closure_25 = tmp38;
        const tmp6Result37 = user(tmp2[73]);
        const tmp39 = tmp6Result37.useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
        closure_26 = tmp39;
        const tmp6Result38 = user(tmp2[74]);
        const profileTabIndices = tmp6Result38.useProfileTabIndices(tmp38, tmp39, tmp36);
        boardTabIndex = profileTabIndices.boardTabIndex;
        activityTabIndex = profileTabIndices.activityTabIndex;
        wishlistTabIndex = profileTabIndices.wishlistTabIndex;
        [tmp42, c30] = displayProfile(obj8.useState(0), 2);
        displayProfile(obj8.useState(0), 2);
        const callback = obj8.useCallback((nativeEvent) => {
          _undefined(nativeEvent.nativeEvent.layout.width);
        }, []);
        const tmp6Result39 = user(tmp2[75]);
        const pageHeights1 = tmp6Result39.usePageHeights();
        handlePageContentSize = pageHeights1.handlePageContentSize;
        const pageHeights = pageHeights1.pageHeights;
        const tmp6Result40 = user(tmp2[76]);
        const wishlistViewerCoachmark = tmp6Result40.useWishlistViewerCoachmark({
          isCurrentUser: tmp9,
          shouldShowWishlistTab: tmp36,
        });
        isVisible = wishlistViewerCoachmark.isVisible;
        markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
        const items12 = [trackUserProfileAction, isVisible, markAsDismissed];
        const callback1 = obj8.useCallback((section) => {
          const obj = { action: "PRESS_SECTION", section };
          trackUserProfileAction(obj);
          const tmp2 = section === UserProfileSections.WISHLIST && isVisible;
          if (tmp2) {
            markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
          }
        }, items12);
        const tmp6Result41 = user(tmp2[74]);
        const profileSectionTabs = tmp6Result41.useProfileSectionTabs({
          initialUserProfileSection: initialSection,
          wishlistTabIndex,
          boardTabIndex,
          activityTabIndex,
          onTabChange: callback1,
        });
        ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
        restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
        isVisible = tmp48;
        isVisible2 = tmp49;
        const items13 = [navigateToPremium];
        ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
        callback2 = obj8.useCallback(() => {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          if (navigateToPremium != null) {
            navigateToPremium();
          }
        }, items13);
        const items14 = [navigateToShop];
        callback3 = obj8.useCallback(() => {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          if (navigateToShop != null) {
            navigateToShop();
          }
        }, items14);
        const items15 = [
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
        callback4 = obj8.useCallback(() => {
          let items1;
          let items2;
          let tmp26;
          if (null != user) {
            if (null != stateFromStores) {
              const items = [closure_8.card];
              const obj2 = { backgroundColor: containerBackground };
              items[1] = obj2;
              const obj3 = { style: items1, children: items2 };
              items1 = [,];
              ({ cards: arr3[0], profileContent: arr3[1] } = closure_8);
              let _private;
              if (displayProfile != null) {
                _private = displayProfile.private;
              }
              if (_private) {
                const obj = { username: name, containerBackground };
                _private = hasCustomProfileTheme(UserProfilePrivateInfoBannerDefault, obj);
              }
              items2 = [_private, , , , , , , , , ,];
              let isProvisional = user.isProvisional;
              if (isProvisional) {
                const obj4 = { style: items, userId: user.id, iconSize: 16 };
                isProvisional = hasCustomProfileTheme(
                  ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard,
                  obj4,
                );
              }
              items2[1] = isProvisional;
              let tmp10 = user.id === stateFromStores.id && !isPreviewingChanges;
              if (tmp10) {
                const obj5 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
                tmp10 = hasCustomProfileTheme(UserProfileDismissibleUpsellsDefault, obj5);
              }
              items2[2] = tmp10;
              const obj6 = { user, currentUser: stateFromStores, guildId, style: items };
              items2[3] = hasCustomProfileTheme(UserProfileActivityDefault, obj6);
              let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
              if (tmp18Result) {
                const obj7 = { userId: user.id, applicationIds: tmp22 };
                tmp18Result = hasCustomProfileTheme(UserProfileGameFriendsCardDefault, obj7);
              }
              items2[4] = tmp18Result;
              obj9 = { userId: user.id, displayProfile, pendingBio: tmp26 };
              tmp26 = undefined;
              const tmp19Result = UserProfileAboutMeCardDefault;
              if (isPreviewingChanges) {
                tmp26 = pendingBio;
              }
              items2[5] = hasCustomProfileTheme(tmp19Result, obj9);
              let tmp18Result4 = null != guildId;
              if (tmp18Result4) {
                const obj10 = { userId: user.id, guildId };
                tmp18Result4 = hasCustomProfileTheme(UserProfileRolesCardDefault, obj10);
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
                  showUserProfile: showUserProfileActionSheet,
                };
                ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
                tmp18Result5 = hasCustomProfileTheme(UserProfileModeratorActionsDefault, obj11);
              }
              items2[7] = tmp18Result5;
              const obj12 = { userId: user.id };
              items2[8] = hasCustomProfileTheme(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
              const obj13 = { userId: user.id };
              items2[9] = hasCustomProfileTheme(
                UserProfileConnections.UserProfileApplicationRoleConnectionsCard,
                obj13,
              );
              let tmp18Result6 = !isPreviewingChanges;
              if (tmp18Result6) {
                const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
                tmp18Result6 = hasCustomProfileTheme(UserProfileNoteDefault, obj25);
              }
              items2[10] = tmp18Result6;
              return afk(metroRequire, obj3);
            }
          }
          return null;
        }, items15);
        const items16 = [
          tmp3.profileContent,
          stateFromStores1,
          activeProfileTabSection === pendingBio.WISHLIST,
          user.id,
          tmp9,
        ];
        callback5 = obj8.useCallback(() => {
          let items;
          let tmp10;
          let tmp9;
          const obj = { style: closure_8.profileContent, children: items };
          if (null == stateFromStores1) {
            tmp10 = hasCustomProfileTheme(UserProfileWishlistGrid.WishlistEmptyState, {});
            tmp9 = hasCustomProfileTheme;
          } else {
            tmp9 = hasCustomProfileTheme;
            const obj2 = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
            tmp10 = hasCustomProfileTheme(UserProfileWishlistGridDefault, obj2);
          }
          items = [tmp10];
          let tmp9Result = isCurrentUser;
          if (tmp9Result) {
            const obj3 = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
            tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
          }
          items[1] = tmp9Result;
          return afk(metroRequire, obj);
        }, items16);
        const items17 = [
          handlePageContentSize,
          callback4,
          callback5,
          tmp38,
          tmp39,
          tmp36,
          boardTabIndex,
          activityTabIndex,
          wishlistTabIndex,
          user,
          stateFromStores,
          guildId,
          ,
          ,
          ,
        ];
        let id2;
        const useMemo = obj8.useMemo;
        if (channel != null) {
          id2 = channel.id;
        }
        items17[12] = id2;
        items17[13] = activeProfileTabSection === pendingBio.WIDGETS;
        items17[14] = tmp9;
        items17[15] = containerBackground;
        const memo2 = useMemo(() => {
          let id;
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let obj10;
          let obj2;
          let obj4;
          let obj5;
          let obj7;
          let obj8;
          const obj = {
            id: "main",
            label: intl.string(intl5.t.LXw470),
            page: hasCustomProfileTheme(hasOwnProperty, obj2),
          };
          intl = intl5.intl;
          const items = [obj];
          obj2 = {
            scrollEnabled: false,
            onContentSizeChange(arg0, arg1) {
              return handlePageContentSize(0, arg0, arg1);
            },
            children: callback4(),
          };
          if (closure_25) {
            const push = items.push;
            const obj3 = {
              id: "board",
              label: intl2.string(intl5.t.laViwx),
              page: hasCustomProfileTheme(hasOwnProperty, obj4, boardTabIndex),
            };
            intl2 = intl5.intl;
            obj4 = {
              scrollEnabled: false,
              onContentSizeChange(arg0, arg1) {
                return handlePageContentSize(boardTabIndex, arg0, arg1);
              },
              children: hasCustomProfileTheme(closure_28, obj5),
            };
            obj5 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
            push(obj3);
          }
          const tmp13 = closure_26 && null != stateFromStores;
          if (tmp13) {
            const push2 = items.push;
            const obj6 = {
              id: "activity",
              label: intl3.string(intl5.t.chq59f),
              page: hasCustomProfileTheme(hasOwnProperty, obj7, activityTabIndex),
            };
            intl3 = intl5.intl;
            obj7 = {
              scrollEnabled: false,
              onContentSizeChange(arg0, arg1) {
                return handlePageContentSize(activityTabIndex, arg0, arg1);
              },
              children: hasCustomProfileTheme(closure_29, obj8),
            };
            obj8 = { user, currentUser: stateFromStores, guildId, channelId: id, containerBackground };
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            push2(obj6);
          }
          if (closure_24) {
            const push3 = items.push;
            obj9 = {
              id: "wishlist",
              label: intl4.string(intl5.t["7lZ31J"]),
              page: hasCustomProfileTheme(hasOwnProperty, obj10, wishlistTabIndex),
            };
            intl4 = intl5.intl;
            obj10 = {
              scrollEnabled: false,
              onContentSizeChange(arg0, arg1) {
                return handlePageContentSize(wishlistTabIndex, arg0, arg1);
              },
              children: callback5(),
            };
            push3(obj9);
          }
          return items;
        }, items17);
        const tmp6Result42 = user(tmp2[89]);
        let obj7 = {
          pageWidth: tmp42,
          defaultIndex: activeProfileTabSectionIndex,
          itemSpacing: tmp(tmp2[48]).space.PX_24,
          items: memo2,
          onPageChange: handleTabChange,
        };
        segmentedControlState = tmp6Result42.useSegmentedControlState(obj7);
        const tmp6Result43 = user(tmp2[75]);
        const pagerFillHeight = tmp6Result43.usePagerFillHeight(scrollPosition);
        const items18 = [segmentedControlState, restoreActiveIndex];
        ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
        const layoutEffect = obj8.useLayoutEffect(() => {
          restoreActiveIndex(segmentedControlState);
        }, items18);
        const items19 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
        const tmp6Result44 = user(tmp2[75]);
        const pagesHeightStyle = tmp6Result44.usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight);
        if (null != user) {
          if (null != stateFromStores) {
            let OpenableUserProfileAvatar;
            let num2;
            obj9 = { backgroundColor: containerBackground };
            if (isPreviewingChanges) {
              OpenableUserProfileAvatar = tmp(tmp101);
            } else {
              OpenableUserProfileAvatar = tmp6(tmp101).OpenableUserProfileAvatar;
            }
            let obj10 = {
              user,
              displayProfile,
              bannerHeight: tmp4,
              pendingBanner: tmp64,
              pendingAvatarSrc: tmp65,
              pendingAccentColor: tmp66,
              pendingThemeColors: tmp67,
              disableInteraction: isPreviewingChanges,
              bannerAnimatedStyle,
              bannerImageAnimatedStyle,
              blurAnimatedProps,
              showBlur,
              privateBanner: tmp62Result,
            };
            tmp64 = undefined;
            const tmp61 = containerBackground;
            const tmpResult6 = tmp(tmp2[96]);
            if (isPreviewingChanges) {
              tmp64 = pendingBanner;
            }
            tmp65 = undefined;
            if (isPreviewingChanges) {
              tmp65 = pendingAvatarSrc;
            }
            tmp66 = undefined;
            if (isPreviewingChanges) {
              if (null != pendingAccentColor) {
                tmp66 = pendingAccentColor;
              }
            }
            tmp67 = undefined;
            if (isPreviewingChanges) {
              if (null != pendingThemeColors) {
                tmp67 = pendingThemeColors;
              }
            }
            let _private;
            if (displayProfile != null) {
              _private = displayProfile.private;
            }
            tmp62Result = undefined;
            if (true === _private) {
              let obj11 = { primaryColor };
              tmp62Result = tmp62(tmp(tmp2[95]), obj11);
            }
            const items20 = [hasCustomProfileTheme(tmpResult6, obj10), ,];
            let tmp60Result = !isPreviewingChanges;
            if (tmp60Result) {
              const items21 = [tmp3.bannerButtons, ,];
              let _private1;
              const View = tmp(tmp2[97]).View;
              if (displayProfile != null) {
                _private1 = displayProfile.private;
              }
              if (_private1) {
                _private1 = tmp3.bannerButtonsWithPrivateBanner;
              }
              let obj12 = { style: items21, children: items22 };
              items21[1] = _private1;
              items21[2] = bannerAnimatedStyle;
              let tmp72 = null;
              if (null != stateFromStores) {
                tmp72 = null;
                if (user.id !== stateFromStores.id) {
                  tmp72 = null;
                  if (!user.bot) {
                    let tmp62Result6;
                    if (relationshipType === RelationshipTypes.FRIEND) {
                      let obj13 = { user };
                      tmp62Result6 = tmp62(closure_24, obj13);
                    } else {
                      tmp62Result6 = null;
                      if (isGameFriends) {
                        const obj14 = { user };
                        tmp62Result6 = tmp62(closure_25, obj14);
                      }
                    }
                    tmp72 = tmp62Result6;
                  }
                }
              }
              items22 = [tmp72];
              const obj15 = { user, currentUser: stateFromStores, displayProfile, channel };
              items22[1] = hasCustomProfileTheme(tmp(tmp2[98]), obj15);
              tmp60Result = tmp60(View, obj12);
            }
            items20[1] = tmp60Result;
            const obj16 = { style: contentAnimatedStyle, children: null };
            const obj17 = {
              user,
              guildId,
              disableStatus,
              pendingAvatarSrc: tmp77,
              pendingAvatarDecoration: tmp78,
              backgroundColor: avatarBackground,
              statusStyle: obj18,
            };
            tmp77 = undefined;
            const View2 = tmp(tmp2[97]).View;
            if (isPreviewingChanges) {
              tmp77 = pendingAvatarSrc;
            }
            tmp78 = undefined;
            if (isPreviewingChanges) {
              if (avatarDecorationOverride == null) {
                avatarDecorationOverride = pendingAvatarDecoration;
              }
              tmp78 = avatarDecorationOverride;
            }
            obj18 = { backgroundColor: statusBackground };
            const items23 = [hasCustomProfileTheme(OpenableUserProfileAvatar, obj17)];
            const items24 = [tmp3.profileContentWrapper];
            if (!tmp9) {
              num2 = 0;
              if (null == tmp18) {
                num2 = pendingBadgeHiddenBadges;
              }
            } else {
              num2 = 0;
            }
            const obj19 = { style: items24, children: null };
            const obj20 = { paddingTop: num2, paddingBottom: bottom + pendingBadgeDisplayOrder };
            items24[1] = obj20;
            const obj21 = {
              customStatusActivity: tmp18,
              user,
              guildId,
              channelId: id3,
              hasCustomProfileTheme: null != primaryColor,
              showUserProfileActionSheet,
              isPreviewingChanges,
              bubbleRef: ref,
            };
            id3 = undefined;
            const tmp81 = stateFromStores2;
            if (channel != null) {
              id3 = channel.id;
            }
            const items25 = [hasCustomProfileTheme(tmp81, obj21)];
            let tmp60Result2 = null;
            const LayerScope = tmp6(tmp2[99]).LayerScope;
            if (null != stateFromStores) {
              const obj22 = { style: items26, children: items27 };
              items26 = [,];
              ({ primaryInfo: arr31[0], profileContent: arr31[1] } = tmp3);
              const obj23 = {
                user,
                channelId: id4,
                guildId,
                displayProfile,
                displayNameOverride: tmp86,
                pronounsOverride: tmp87,
                badgesOverride: tmp88,
                pendingDisplayNameStyles: tmp89,
                badgeContainerBackground: containerBackground,
                isPreviewingChanges,
                showBadgeDirectoryNuxCoachmark: tmp9,
              };
              id4 = undefined;
              const tmp84 = closure_26;
              if (channel != null) {
                id4 = channel.id;
              }
              tmp86 = undefined;
              if (isPreviewingChanges) {
                tmp86 = pendingGlobalName;
              }
              tmp87 = undefined;
              if (isPreviewingChanges) {
                tmp87 = pendingPronouns;
              }
              tmp88 = undefined;
              if (isPreviewingChanges) {
                tmp88 = memo1;
              }
              tmp89 = undefined;
              if (isPreviewingChanges) {
                tmp89 = pendingDisplayNameStyles;
              }
              if (tmp9) {
                tmp9 = !isPreviewingChanges;
              }
              items27 = [hasCustomProfileTheme(tmp84, obj23), , , , , ,];
              let tmp62Result7 = user.id !== stateFromStores.id;
              if (tmp62Result7) {
                const obj24 = { user, guildId };
                tmp62Result7 = tmp62(tmp(tmp2[90]), obj24);
              }
              items27[1] = tmp62Result7;
              let tmp62Result8 = relationshipType === RelationshipTypes.PENDING_INCOMING;
              const tmp91 = RelationshipTypes;
              if (tmp62Result8) {
                let obj25 = {
                  user,
                  channelId: id5,
                  guildId,
                  applicationId: originApplicationId,
                  style: obj9,
                  showUserProfile: showUserProfileActionSheet,
                };
                id5 = undefined;
                const tmpResult7 = tmp(tmp2[91]);
                if (channel != null) {
                  id5 = channel.id;
                }
                tmp62Result8 = tmp62(tmpResult7, obj25);
              }
              items27[2] = tmp62Result8;
              items27[3] = incomingGameRelationshipsForUser.map((applicationId) => {
                let id;
                const obj = {
                  user,
                  isGameRelationship: true,
                  applicationId: applicationId.applicationId,
                  channelId: id,
                  guildId,
                  style: obj9,
                  showUserProfile: showUserProfileActionSheet,
                };
                id = undefined;
                const tmp2 = UserProfileIncomingFriendRequestDefault;
                if (channel != null) {
                  id = channel.id;
                }
                return hasCustomProfileTheme(tmp2, obj, applicationId.applicationId);
              });
              const obj26 = { user, style: obj9 };
              items27[4] = hasCustomProfileTheme(tmp(tmp2[92]), obj26);
              let tmp62Result9 = user.id === stateFromStores.id && !isPreviewingChanges;
              if (tmp62Result9) {
                const obj27 = { guildId };
                tmp62Result9 = tmp62(boardTabIndex, obj27);
              }
              items27[5] = tmp62Result9;
              let tmp62Result10 = user.id !== stateFromStores.id;
              if (tmp62Result10) {
                const obj28 = {
                  user,
                  disableCalls,
                  disableMessage,
                  location: _location,
                  hasCustomProfileTheme: null != primaryColor,
                  style: tmp3.primaryButtons,
                };
                const tmpResult8 = tmp(tmp2[93]);
                if (!disableCalls) {
                  disableCalls = relationshipType === tmp91.BLOCKED;
                }
                if (!disableCalls) {
                  disableCalls = user.isProvisional;
                }
                tmp62Result10 = tmp62(tmpResult8, obj28);
              }
              items27[6] = tmp62Result10;
              tmp60Result2 = tmp60(tmp79, obj22);
            }
            const items28 = [tmp60Result2];
            if (!tmp36) {
              if (!tmp38) {
                let callback4Result;
                if (!tmp39) {
                  callback4Result = callback4();
                }
                const obj29 = { children: items20 };
                const obj30 = { children: items28 };
                items28[1] = callback4Result;
                items25[1] = stateFromStores1(LayerScope, obj30);
                obj19.children = items25;
                items23[1] = stateFromStores1(navigateToPremium, obj19);
                obj16.children = items23;
                items20[2] = stateFromStores1(View2, obj16);
                return stateFromStores1(tmp61, obj29);
              }
            }
            const obj31 = { onLayout: callback, children: stateFromStores1(LayerScope2, obj34) };
            const obj32 = { style: tmp3.profileTablist, children: items29 };
            LayerScope2 = tmp6(tmp2[99]).LayerScope;
            const obj33 = { state: segmentedControlState, variant: str };
            str = undefined;
            const Tabs = tmp6(tmp2[100]).Tabs;
            if (null != primaryColor) {
              str = "overlay";
            }
            obj34 = { children: items30 };
            items29 = [hasCustomProfileTheme(Tabs, obj33)];
            const obj35 = { ref: ref1, style: rect, collapsable: false, pointerEvents: "box-none" };
            rect = {
              position: "absolute",
              left: `${(Math.max(wishlistTabIndex, 0) / arr22.length) * 100}%`,
              top: 0,
              right: 0,
              bottom: 0,
            };
            const _Math = Math;
            items29[1] = hasCustomProfileTheme(navigateToPremium, obj35);
            items30 = [stateFromStores1(navigateToPremium, obj32), ,];
            const obj36 = {
              ref: pagerRef,
              onLayout: measureFill,
              style: pagesHeightStyle,
              children: hasCustomProfileTheme(user(tmp2[101]).SegmentedControlPages, obj37),
            };
            const View3 = tmp(tmp2[97]).View;
            obj37 = { state: segmentedControlState };
            items30[1] = hasCustomProfileTheme(View3, obj36);
            const obj38 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp59 };
            items30[2] = hasCustomProfileTheme(tmp(tmp2[102]), obj38);
            callback4Result = tmp62(tmp79, obj31);
          }
        }
        return null;
      },
);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export const PrimaryInfo = tmp5;
