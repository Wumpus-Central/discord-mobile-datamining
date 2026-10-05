// discord_app/modules/user_profile/native/UserProfileOverflowMenu.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import CallConstants from "../../calls/CallConstants.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import Constants2 from "Constants.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import SafetyToastsActionCreatorsDefault from "../../safety_common/SafetyToastsActionCreators.native.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import CallActionCreatorsDefault from "../../../actions/CallActionCreators.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import getApplicationInstallURL2 from "../../applications/getApplicationInstallURL.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import GuildInviteUtils from "../../instant_invite/native/GuildInviteUtils.tsx";
import openShopThisLookActionSheet from "../../collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx";
import ShopThisLookAnalyticsUtils from "../../collectibles/shop_this_look/ShopThisLookAnalyticsUtils.tsx";
import BotReportChooser from "../../in_app_reports/native/BotReportChooser.tsx";
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import Constants from "../../../Constants.tsx";
import RestrictionConfirmationConstants from "../../relationships/native/RestrictionConfirmationConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let map1;
let unpackModuleId;
let View = react_native.View;
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
({
  AnalyticEvents: unpackModuleId,
  AVATAR_MAX_SIZE: closure_12,
  ChannelTypesSets: map1,
  NOOP: closure_14,
  RelationshipTypes: closure_15,
} = Constants);
const ParticipantTypes = CallConstants.ParticipantTypes;
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_17, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_18 } =
  RestrictionConfirmationConstants);
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  let arr3;
  let arr4;
  let closure_19;
  let intl;
  let intl11;
  let intl12;
  let intl14;
  let intl16;
  let intl17;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isIgnored;
  let isVisible;
  let items7;
  let items8;
  let markAsDismissed;
  let obj23;
  let obj24;
  let relationshipType;
  let tmp62;
  user = user.user;
  const currentUser = user.currentUser;
  const application = user.application;
  const displayProfile = user.displayProfile;
  const channel = user.channel;
  let context;
  let trackUserProfileAction;
  let analyticsLocations;
  let guildId;
  let canRing;
  let userIsInCall;
  let showUserProfile;
  let id2;
  let guildId1;
  let closure_17;
  let closure_18;
  let installAppPropsFromProfileApplication;
  let tmp = user;
  const tmp2 = application;
  let obj = user(application[12]);
  let items = [trackUserProfileAction];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {
      relationshipType: RelationshipStore.getRelationshipType(user.id),
      isIgnored: RelationshipStore.isIgnored(user.id),
    };
    return obj;
  });
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj2 = user(application[12]);
  let items1 = [analyticsLocations, context];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
    const obj = {
      selectedChannel: context.getChannel(analyticsLocations.getChannelId()),
      selectedVoiceChannelId: analyticsLocations.getVoiceChannelId(),
    };
    return obj;
  });
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  let obj3 = user(application[13]);
  let tmp5 = displayProfile(obj3.useServerInviteRows(user.id), 2);
  [arr3, arr4] = tmp5;
  const tmp6 = null != trackUserProfileAction.getNickname(user.id);
  const tmp8 = currentUser(application[14])(user.id) && arr3.length + arr4.length > 0;
  const tmpResult = tmp(tmp2[15]);
  let result = tmpResult.isIarUserReportingEnabled("User Profile Options - Mobile");
  const tmpResult10 = tmp(tmp2[16]);
  const userProfileAnalyticsContext = tmpResult10.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp7Result = currentUser(tmp2[17]);
  const tmp7ResultResult = tmp7Result(currentUser(tmp2[18]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  const newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  let id = user.id;
  const tmp7Result3 = currentUser(tmp2[19]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = tmp7Result3(id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmpResult11 = tmp(tmp2[20]);
  const isShopThisLookMobileEnabled = tmpResult11.useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult12 = tmp(tmp2[21]);
  const equippedCollectibleSkuIds = tmpResult12.useEquippedCollectibleSkuIds(user.id, guildId);
  const ref = channel.useRef(null);
  const tmp20 = currentUser(tmp2[22])();
  const tmpResult13 = tmp(tmp2[23]);
  const shopThisLookMarketing = tmpResult13.useShopThisLookMarketing(user.id, guildId, isShopThisLookMobileEnabled);
  const items2 = [user.id, guildId];
  ({ isVisible, markAsDismissed } = shopThisLookMarketing);
  const callback = channel.useCallback(() => {
    const obj = openShopThisLookActionSheet;
    const obj2 = { userId: user.id, guildId };
    const result = obj.openShopThisLookActionSheet(obj2);
  }, items2);
  const tmpResult14 = tmp(tmp2[25]);
  canRing = tmpResult14.useCanRing(user, selectedVoiceChannelId);
  const tmp7Result4 = currentUser(tmp2[26]);
  const tidaWebformEnabled = tmp7Result4.useExperiment(
    { location: "UserProfileOverflowMenu" },
    { autoTrackExposure: false },
  ).tidaWebformEnabled;
  const items3 = [selectedVoiceChannelId];
  const tmpResult15 = tmp(tmp2[12]);
  const stateFromStoresObject2 = tmpResult15.useStateFromStoresObject(items3, () => {
    let ringing;
    let participant = null;
    const tmp = canRing && null != selectedVoiceChannelId;
    if (tmp) {
      participant = ChannelRTCStore.getParticipant(selectedVoiceChannelId, user.id);
    }
    const obj = { userIsInCall: null != participant, isUserRinging: ringing };
    ringing = null != participant && participant.type === ParticipantTypes.USER && participant.ringing;
    return obj;
  });
  userIsInCall = stateFromStoresObject2.userIsInCall;
  const items4 = [user.id, , ,];
  let id1;
  const isUserRinging = stateFromStoresObject2.isUserRinging;
  const useCallback = channel.useCallback;
  if (channel != null) {
    id1 = channel.id;
  }
  items4[1] = id1;
  items4[2] = context;
  items4[3] = analyticsLocations;
  showUserProfile = useCallback((showGuildProfile) => {
    let id;
    const obj = {
      showGuildProfile,
      userId: user.id,
      channelId: id,
      sourceAnalyticsLocations: analyticsLocations,
      ignoreBlockedSpeedBump: true,
    };
    const tmp = showUserProfileActionSheetDefault;
    const merged = Object.assign(context);
    id = undefined;
    if (channel != null) {
      id = channel.id;
    }
    tmp(obj);
  }, items4);
  id2 = user.id;
  guildId1 = undefined;
  const id3 = currentUser.id;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  let tmp28 = isShopThisLookMobileEnabled;
  const BLOCKED = id2.BLOCKED;
  const tmp27 = id2;
  if (isShopThisLookMobileEnabled) {
    tmp28 = equippedCollectibleSkuIds.length > 0;
  }
  closure_17 = tmp28;
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  const items5 = [];
  if (null != guildId2) {
    let obj4 = {
      label: intl.string(tmp(tmp2[28]).t.GISTta),
      action() {
        const obj = { action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations };
        trackUserProfileAction(obj);
        showUserProfile(false);
      },
    };
    let push = items5.push;
    intl = tmp(tmp2[28]).intl;
    push(obj4);
  }
  let guildId3;
  if (tmp7Result1Result != null) {
    guildId3 = tmp7Result1Result.guildId;
  }
  let tmp32 = null != guildId3;
  if (tmp32) {
    let guildId4;
    if (displayProfile != null) {
      guildId4 = displayProfile.guildId;
    }
    tmp32 = null == guildId4;
  }
  if (tmp32) {
    let obj5 = {
      label: intl2.string(tmp(tmp2[28]).t.DisZzB),
      action() {
        const obj = { action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations };
        trackUserProfileAction(obj);
        showUserProfile();
      },
    };
    let push2 = items5.push;
    intl2 = tmp(tmp2[28]).intl;
    push2(obj5);
  }
  const items6 = [];
  if (id3 !== id2) {
    let tmp35 = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (tmp35) {
      const recipients = channel.recipients;
      let hasItem;
      if (recipients != null) {
        hasItem = recipients.includes(id2);
      }
      tmp35 = hasItem;
    }
    if (tmp35) {
      let obj6 = {
        label: intl3.string(tmp(tmp2[28]).t["n5zMI+"]),
        variant: "destructive",
        action() {
          const obj = ChannelActionCreatorsDefault;
          obj.removeRecipient(channel.id, id2);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        },
      };
      let push3 = items6.push;
      intl3 = tmp(tmp2[28]).intl;
      push3(obj6);
    }
    if (relationshipType === tmp27.FRIEND) {
      let stringResult;
      let push4 = items5.push;
      let intl4 = tmp(tmp2[28]).intl;
      const string = intl4.string;
      const t = tmp(tmp2[28]).t;
      if (tmp6) {
        stringResult = string(t["8pOYUE"]);
      } else {
        stringResult = string(t.BGYkaH);
      }
      let obj7 = {
        label: stringResult,
        action() {
          const obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = ModalActionCreatorsDefault;
          const obj3 = { userId: id2, showUserProfile };
          obj2.pushLazy(asyncRequire(12806, dependencyMap.paths), obj3);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
        },
      };
      push4(obj7);
    }
    if (tmp28) {
      let obj8 = {
        label: intl5.string(tmp(tmp2[28]).t.xNdRDO),
        action() {
          const obj = openShopThisLookActionSheet;
          const obj2 = { userId: id2, guildId };
          const result = obj.openShopThisLookActionSheet(obj2);
        },
      };
      const push5 = items5.push;
      intl5 = tmp(tmp2[28]).intl;
      push5(obj8);
    }
    if (isIgnored) {
      if (relationshipType !== BLOCKED) {
        const push6 = items6.push;
        const obj9 = {
          label: intl6.string(tmp(tmp2[28]).t["8wXU9B"]),
          action() {
            const obj = { action: "UNIGNORE", analyticsLocations };
            trackUserProfileAction(obj);
            let id;
            const unignoreUser = RelationshipActionCreatorsDefault.unignoreUser;
            RelationshipActionCreatorsDefault;
            if (channel != null) {
              id = channel.id;
            }
            unignoreUser(id2, newestAnalyticsLocation, id);
            showUserProfile();
          },
        };
        intl6 = tmp(tmp2[28]).intl;
        push6(obj9);
      }
      const push8 = items6.push;
      if (relationshipType === BLOCKED) {
        const obj10 = {
          label: intl12.string(tmp(tmp2[28]).t.XyHpKH),
          action() {
            const obj = { action: "UNBLOCK", analyticsLocations };
            trackUserProfileAction(obj);
            const obj2 = RelationshipActionCreatorsDefault;
            const obj3 = { location: newestAnalyticsLocation };
            obj2.unblockUser(id2, obj3);
            showUserProfile();
            let id;
            const showUnblockSuccessToast = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast;
            SafetyToastsActionCreatorsDefault;
            if (channel != null) {
              id = channel.id;
            }
            const result = showUnblockSuccessToast(id2, id);
          },
        };
        intl12 = tmp(tmp2[28]).intl;
        push8(obj10);
      } else {
        const obj11 = {
          label: intl8.string(tmp(tmp2[28]).t.l4Emac),
          variant: "destructive",
          action() {
            let id;
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            ActionSheetActionCreatorsDefault;
            let obj = {
              userId: id2,
              channelId: id,
              onBlock() {
                const obj = { action: "BLOCK", analyticsLocations };
                return trackUserProfileAction(obj);
              },
              onIgnore() {
                const obj = { action: "IGNORE", analyticsLocations };
                return trackUserProfileAction(obj);
              },
              onSuccess,
              impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION,
            };
            id = undefined;
            const tmp4 = asyncRequire(9817, dependencyMap.paths);
            if (channel != null) {
              id = channel.id;
            }
            openLazy(tmp4, closure_17, obj, "stack");
          },
        };
        intl8 = tmp(tmp2[28]).intl;
        push8(obj11);
        if (result) {
          const push10 = items6.push;
          const intl10 = tmp(tmp2[28]).intl;
          const string2 = intl10.string;
          const bot = user.bot;
          const t2 = tmp(tmp2[28]).t;
          const obj12 = {
            label: string2(bot ? t2.jhJzez : t2.wqHXNt),
            variant: "destructive",
            action() {
              let id;
              const obj = { action: "REPORT", analyticsLocations };
              trackUserProfileAction(obj);
              if (user.bot) {
                const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                const tmp19 = asyncRequire(12807, dependencyMap.paths);
                const BOT_REPORT_CHOOSER_KEY = BotReportChooser.BOT_REPORT_CHOOSER_KEY;
                const obj4 = {
                  user,
                  entrypoint: "UserProfileOverflowMenu",
                  contextualGuildId: guildId1,
                  contextualChannelId: id,
                };
                id = undefined;
                if (channel != null) {
                  id = channel.id;
                }
                openLazy(tmp19, BOT_REPORT_CHOOSER_KEY, obj4, "replaceAll");
              } else {
                const obj2 = ReportModals;
                const result = obj2.showReportModalForUser(user, guildId1);
                const obj3 = ActionSheetActionCreatorsDefault;
                obj3.hideActionSheet();
              }
            },
          };
          push10(obj12);
        } else {
          const tmpResult16 = tmp(tmp2[42]);
          if (tmpResult16.isAndroid()) {
            const push9 = items6.push;
            const obj13 = {
              label: intl9.string(tmp(tmp2[28]).t.TbHyMG),
              variant: "destructive",
              action() {
                const obj = { action: "REPORT", analyticsLocations };
                trackUserProfileAction(obj);
                const obj2 = UserProfileAlertUtils;
                obj2.alertUserReported();
                const obj3 = AnalyticsUtilsDefault;
                const obj4 = { reported_user_id: id2 };
                obj3.track(unpackModuleId.TNS_USER_REPORT_SUBMITTED, obj4);
              },
            };
            intl9 = tmp(tmp2[28]).intl;
            push9(obj13);
          }
        }
        const tmp47 = !user.bot && tmp8;
        if (tmp47) {
          const push11 = items5.push;
          const obj14 = {
            label: intl11.string(tmp(tmp2[28]).t.Sd8Ixw),
            action() {
              const obj = { action: "PRESS_INVITE_TO_SERVER", analyticsLocations };
              trackUserProfileAction(obj);
              const obj2 = GuildInviteUtils;
              const result = obj2.showGuildInviteActionSheet(id2, newestAnalyticsLocation);
            },
          };
          intl11 = tmp(tmp2[28]).intl;
          push11(obj14);
        }
      }
    }
    if (relationshipType !== BLOCKED) {
      const push7 = items6.push;
      const obj15 = {
        label: intl7.string(tmp(tmp2[28]).t.ytCpKs),
        action() {
          let id;
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          ActionSheetActionCreatorsDefault;
          let obj = {
            userId: id2,
            channelId: id,
            onBlock() {
              const obj = { action: "BLOCK", analyticsLocations };
              return trackUserProfileAction(obj);
            },
            onIgnore() {
              const obj = { action: "IGNORE", analyticsLocations };
              return trackUserProfileAction(obj);
            },
            onSuccess,
            impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION,
          };
          id = undefined;
          const tmp4 = asyncRequire(9818, dependencyMap.paths);
          if (channel != null) {
            id = channel.id;
          }
          openLazy(tmp4, authStore4, obj, "stack");
        },
      };
      intl7 = tmp(tmp2[28]).intl;
      push7(obj15);
    }
  }
  let tmp50 = !canRing;
  if (canRing) {
    tmp50 = null == selectedVoiceChannelId;
  }
  if (!tmp50) {
    tmp50 = userIsInCall && !isUserRinging;
  }
  if (!tmp50) {
    let string3Result;
    const push12 = items5.push;
    const intl13 = tmp(tmp2[28]).intl;
    const string3 = intl13.string;
    const t3 = tmp(tmp2[28]).t;
    if (userIsInCall) {
      string3Result = string3(t3.ygslb0);
    } else {
      string3Result = string3(t3.bHa9kN);
    }
    const obj16 = {
      label: string3Result,
      action() {
        let str = "RING";
        if (userIsInCall) {
          str = "STOP_RINGING";
        }
        const obj = { action: str, analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = CallActionCreatorsDefault;
        if (userIsInCall) {
          const items = [user.id];
          obj2.stopRinging(selectedVoiceChannelId, items);
        } else {
          const items1 = [user.id];
          obj2.ring(selectedVoiceChannelId, items1, "user_profile_overflow_menu");
        }
      },
    };
    push12(obj16);
  }
  const DeveloperMode = tmp(tmp2[46]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const tmp55 = setting && tidaWebformEnabled;
  if (!tmp55) {
    const push13 = items5.push;
    const obj17 = {
      label: intl14.string(tmp(tmp2[28]).t.y5MwJy),
      action() {
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        trackUserProfileAction(obj);
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj2 = UserUtilsDefault;
        copy(obj2.getUserTag(user, { decoration: "never", identifiable: "always" }));
        const obj3 = ToastUtils;
        const result = obj3.presentUsernameCopied();
      },
    };
    intl14 = tmp(tmp2[28]).intl;
    push13(obj17);
  }
  if (user.bot) {
    if (null != application) {
      const tmpResult17 = tmp(tmp2[50]);
      closure_18 = tmpResult17.supportsEmbeddedSurface(application, tmp(tmp2[51]).EmbeddedSurfaceType.MAIN);
      const tmpResult18 = tmp(tmp2[52]);
      installAppPropsFromProfileApplication = tmpResult18.getInstallAppPropsFromProfileApplication(application);
      const push16 = items5.push;
      const obj18 = {
        label: intl17.string(tmp(tmp2[28]).t.WqhZss),
        action() {
          let activityLaunchURL;
          const obj = { action: "COPY_APP_LINK", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = getApplicationInstallURL2;
          if (closure_18) {
            const obj3 = { applicationId: application.id, referrerId: currentUser.id };
            activityLaunchURL = obj2.getActivityLaunchURL(obj3);
          } else {
            const getApplicationInstallURL = obj2.getApplicationInstallURL;
            const obj4 = { id: application.id };
            const merged = Object.assign(closure_19);
            activityLaunchURL = getApplicationInstallURL(obj4);
          }
          const obj5 = ClipboardUtils;
          obj5.copy(activityLaunchURL);
          const obj6 = ToastUtils;
          obj6.presentLinkCopied();
        },
      };
      intl17 = tmp(tmp2[28]).intl;
      push16(obj18);
    }
  }
  if (setting) {
    const push14 = items5.push;
    const obj19 = { label: null, action: null };
    const intl15 = tmp(tmp2[28]).intl;
    const string4 = intl15.string;
    const t4 = tmp(tmp2[28]).t;
    if (tidaWebformEnabled) {
      obj19.label = string4(t4.QvQeLv);
      obj19.action = function action() {
        let bannerURL;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let obj8;
        const items = [];
        let obj = {
          label: intl.string(user(application[28]).t.y5MwJy),
          onPress() {
            const obj = { action: "COPY_USERNAME", analyticsLocations };
            trackUserProfileAction(obj);
            const copy = user(application[47]).copy;
            user(application[47]);
            const obj2 = currentUser(application[48]);
            copy(obj2.getUserTag(bannerURL, { decoration: "never", identifiable: "always" }));
            const obj3 = user(application[49]);
            const result = obj3.presentUsernameCopied();
          },
        };
        const push = items.push;
        intl = user(application[28]).intl;
        push(obj);
        let obj2 = {
          label: intl2.string(user(application[28]).t["/AXYnE"]),
          onPress() {
            const obj = { action: "COPY_USER_ID", analyticsLocations };
            trackUserProfileAction(obj);
            const obj2 = user(application[47]);
            obj2.copy(id2);
            const obj3 = user(application[49]);
            obj3.presentIdCopied();
          },
        };
        const push2 = items.push;
        intl2 = user(application[28]).intl;
        push2(obj2);
        let hasAvatarForGuildResult = null != bannerURL.avatar;
        const tmp5 = bannerURL;
        if (!hasAvatarForGuildResult) {
          guildId = undefined;
          const hasAvatarForGuild = tmp5.hasAvatarForGuild;
          if (displayProfile != null) {
            guildId = displayProfile.guildId;
          }
          hasAvatarForGuildResult = hasAvatarForGuild(guildId);
        }
        if (hasAvatarForGuildResult) {
          let obj3 = {
            label: intl3.string(user(application[28]).t.gERDvM),
            onPress() {
              const obj = { action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations };
              trackUserProfileAction(obj);
              guildId = undefined;
              const getAvatarURL = bannerURL.getAvatarURL;
              if (guildId != null) {
                guildId = guildId.guildId;
              }
              const avatarURL = getAvatarURL(guildId, canRing, true);
              if (null != avatarURL) {
                const obj2 = user(application[47]);
                obj2.copy(avatarURL);
                const obj3 = user(application[49]);
                obj3.presentLinkCopied();
              }
            },
          };
          const push3 = items.push;
          intl3 = user(application[28]).intl;
          push3(obj3);
        }
        if (null != displayProfile) {
          const obj5 = { canAnimate: true, size: canRing };
          bannerURL = displayProfile.getBannerURL(obj5);
          if (null != bannerURL) {
            const push4 = items.push;
            const obj6 = {
              label: intl4.string(user(application[28]).t.hsNv0R),
              onPress() {
                const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations };
                trackUserProfileAction(obj);
                const obj2 = ClipboardUtils;
                obj2.copy(bannerURL);
                const obj3 = ToastUtils;
                obj3.presentLinkCopied();
              },
            };
            intl4 = user(application[28]).intl;
            push4(obj6);
          }
        }
        const obj7 = { options: items, key: "copy-info", header: obj8, stackingBehavior: "stack", hasIcons: false };
        obj8 = { title: intl5.string(user(application[28]).t.QvQeLv) };
        const showSimpleActionSheet = user(application[54]).showSimpleActionSheet;
        user(application[54]);
        intl5 = user(application[28]).intl;
        let result = showSimpleActionSheet(obj7);
      };
      push14(obj19);
    } else {
      obj19.label = string4(t4["/AXYnE"]);
      obj19.action = function action() {
        const obj = { action: "COPY_USER_ID", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = ClipboardUtils;
        obj2.copy(id2);
        const obj3 = ToastUtils;
        obj3.presentIdCopied();
      };
      push14(obj19);
    }
  }
  let hasItem1 = null != channel && null != selectedChannel;
  if (hasItem1) {
    const TEXTUAL = userIsInCall.TEXTUAL;
    hasItem1 = TEXTUAL.has(selectedChannel.type);
  }
  if (hasItem1) {
    const push15 = items5.push;
    const obj20 = {
      label: intl16.string(tmp(tmp2[28]).t.PHjkRE),
      action() {
        const obj = { userId: id2, selectedChannel, showUserProfile, analyticsLocations };
        return openUserContextMenuCommandsDefault(obj);
      },
    };
    intl16 = tmp(tmp2[28]).intl;
    push15(obj20);
  }
  if (0 !== items5.length) {
    const obj21 = { value: analyticsLocations, children: items8 };
    const obj22 = { ref, children: installAppPropsFromProfileApplication(View, obj23) };
    const AnalyticsLocationProvider = tmp(tmp2[17]).AnalyticsLocationProvider;
    obj23 = { style: tmp20, children: installAppPropsFromProfileApplication(tmp(tmp2[57]).ContextMenu, obj24) };
    View = tmp7(tmp2[56]).View;
    obj24 = {
      items: items7,
      onOpen() {
        if (closure_17) {
          const obj = ShopThisLookAnalyticsUtils;
          const result = obj.trackShopThisLookMenuAction(
            ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.MENU_VIEWED,
            UserProfileThemeTypes.ACTION_SHEET,
          );
        }
      },
      children(ref) {
        let MoreHorizontalIcon;
        let intl;
        let obj2;
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = {
          ref: ref.ref,
          size: "sm",
          variant: "secondary-overlay",
          accessibilityLabel: intl.string(user(application[28]).t["+zofAD"]),
          icon: closure_19(MoreHorizontalIcon, obj2),
        };
        const IconButton = user(application[59]).IconButton;
        const merged1 = Object.assign(merged);
        intl = user(application[28]).intl;
        obj2 = { size: "sm", color: currentUser(application[61]).colors.WHITE };
        MoreHorizontalIcon = user(application[60]).MoreHorizontalIcon;
        return closure_19(IconButton, obj);
      },
    };
    items7 = [items5, items6];
    items8 = [installAppPropsFromProfileApplication(selectedChannel, obj22)];
    const obj25 = { targetRef: ref, visible: isVisible, onDismiss: markAsDismissed, onPress: callback };
    items8[1] = installAppPropsFromProfileApplication(currentUser(tmp2[62]), obj25);
    tmp62 = closure_20(AnalyticsLocationProvider, obj21);
  } else {
    tmp62 = null;
  }
  return tmp62;
}
