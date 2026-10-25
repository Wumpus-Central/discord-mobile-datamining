// === Module 14251: UserProfileOverflowMenu ===

// Module 14251 (UserProfileOverflowMenu)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1275 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import UserUtilsDefault from "UserUtils" /* 5025 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import ToastUtils from "ToastUtils" /* 5662 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import ClipboardUtils from "ClipboardUtils" /* 7285 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7411 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7413 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7414 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7422 */;
import ReportModals from "ReportModals" /* 8108 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8668 */;
import openGameOrganizationInvitePickerDefault from "openGameOrganizationInvitePicker" /* 11311 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12122 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 13545 */;
import GuildInviteUtils from "GuildInviteUtils" /* 14252 */;
import openShopThisLookActionSheet from "openShopThisLookActionSheet" /* 14261 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 14265 */;
import BotReportChooser from "BotReportChooser" /* 14268 */;
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands" /* 14269 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;

require = fn;
const View = fn(17).View;
const UserProfileThemeTypes = fn(7304).UserProfileThemeTypes;
const Constants = fn(1087);
({ AnalyticEvents: closure_11, AVATAR_MAX_SIZE: closure_12, ChannelTypesSets: map1, NOOP: closure_14, RelationshipTypes: closure_15 } = Constants);
const ParticipantTypes = fn(5632).ParticipantTypes;
const RestrictionConfirmationConstants = fn(10957);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_17, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_18 } = RestrictionConfirmationConstants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  user = user.user;
  const currentUser = user.currentUser;
  const application = user.application;
  const displayProfile = user.displayProfile;
  const channel = user.channel;
  let context;
  let trackUserProfileAction;
  let analyticsLocations;
  let newestAnalyticsLocation;
  let guildId;
  let canRing;
  let userIsInCall;
  let showUserProfile;
  let id;
  let guildId1;
  closure_17 = undefined;
  closure_18 = undefined;
  let installAppPropsFromProfileApplication;
  let tmp = user;
  let tmp2 = application;
  let items = [trackUserProfileAction];
  const stateFromStoresObject = user(application[12]).useStateFromStoresObject(items, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), isIgnored: RelationshipStore.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj = user(application[12]);
  let items1 = [analyticsLocations, context];
  const stateFromStoresObject1 = user(application[12]).useStateFromStoresObject(items1, () => ({ selectedChannel: context.getChannel(analyticsLocations.getChannelId()), selectedVoiceChannelId: analyticsLocations.getVoiceChannelId() }));
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  let obj2 = user(application[12]);
  let obj3 = user(application[13]);
  [arr3, arr4] = displayProfile(user(application[13]).useServerInviteRows(user.id), 2);
  const tmp5 = displayProfile(user(application[13]).useServerInviteRows(user.id), 2);
  const tmp8 = currentUser(application[14])(user.id);
  let tmp9 = tmp8;
  if (tmp8) {
    tmp9 = arr3.length + arr4.length > 0;
  }
  const tmp6 = null != trackUserProfileAction.getNickname(user.id);
  const tmp10 = currentUser(tmp2[15])("user_profile_overflow_menu");
  let result = tmp(tmp2[16]).isIarUserReportingEnabled("User Profile Options - Mobile");
  let tmpResult = tmp(tmp2[16]);
  const userProfileAnalyticsContext = tmp(tmp2[17]).useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmpResult10 = tmp(tmp2[17]);
  const tmp7ResultResult = currentUser(tmp2[18])(currentUser(tmp2[19]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  const tmp7Result = currentUser(tmp2[18]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = currentUser(tmp2[20])(user.id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmp7Result3 = currentUser(tmp2[20]);
  const isShopThisLookMobileEnabled = tmp(tmp2[21]).useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult11 = tmp(tmp2[21]);
  const equippedCollectibleSkuIds = tmp(tmp2[22]).useEquippedCollectibleSkuIds(user.id, guildId);
  const ref = channel.useRef(null);
  const tmpResult12 = tmp(tmp2[22]);
  const tmp22 = currentUser(tmp2[23])();
  const shopThisLookMarketing = tmp(tmp2[24]).useShopThisLookMarketing(user.id, guildId, isShopThisLookMobileEnabled);
  const items2 = [user.id, guildId];
  ({ isVisible, markAsDismissed } = shopThisLookMarketing);
  const callback = channel.useCallback(() => {
    const result = openShopThisLookActionSheet.openShopThisLookActionSheet({ userId: user.id, guildId });
  }, items2);
  const tmpResult13 = tmp(tmp2[24]);
  canRing = tmp(tmp2[26]).useCanRing(user, selectedVoiceChannelId);
  const tmpResult14 = tmp(tmp2[26]);
  const tidaWebformEnabled = currentUser(tmp2[27]).useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const tmp7Result4 = currentUser(tmp2[27]);
  const items3 = [selectedVoiceChannelId];
  const stateFromStoresObject2 = tmp(tmp2[12]).useStateFromStoresObject(items3, () => {
    let tmp = canRing;
    if (canRing) {
      tmp = null != selectedVoiceChannelId;
    }
    let participant = null;
    if (tmp) {
      participant = ChannelRTCStore.getParticipant(selectedVoiceChannelId, user.id);
    }
    const obj = { userIsInCall: null != participant, isUserRinging: null };
    let ringing = null != participant;
    if (ringing) {
      ringing = participant.type === ParticipantTypes.USER;
    }
    if (ringing) {
      ringing = participant.ringing;
    }
    obj.isUserRinging = ringing;
    return obj;
  });
  userIsInCall = stateFromStoresObject2.userIsInCall;
  const items4 = [user.id, , , ];
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  items4[1] = id1;
  items4[2] = context;
  items4[3] = analyticsLocations;
  showUserProfile = channel.useCallback((showGuildProfile) => {
    const obj = {};
    const merged = Object.assign(context);
    obj.showGuildProfile = showGuildProfile;
    obj.userId = user.id;
    id = undefined;
    if (channel != null) {
      id = channel.id;
    }
    obj.channelId = id;
    obj.sourceAnalyticsLocations = analyticsLocations;
    obj.ignoreBlockedSpeedBump = true;
    showUserProfileActionSheetDefault(obj);
  }, items4);
  id = user.id;
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  let tmp30 = isShopThisLookMobileEnabled;
  if (isShopThisLookMobileEnabled) {
    tmp30 = equippedCollectibleSkuIds.length > 0;
  }
  closure_17 = tmp30;
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  const items5 = [];
  if (null != guildId2) {
    let obj4 = { label: null, action: null };
    let intl = tmp(tmp2[29]).intl;
    obj4.label = intl.string(tmp(tmp2[29]).t.GISTta);
    obj4.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      showUserProfile(false);
    };
    items5.push(obj4);
  }
  let guildId3;
  if (tmp7Result1Result != null) {
    guildId3 = tmp7Result1Result.guildId;
  }
  let tmp34 = null != guildId3;
  if (tmp34) {
    let guildId4;
    if (displayProfile != null) {
      guildId4 = displayProfile.guildId;
    }
    tmp34 = null == guildId4;
  }
  if (tmp34) {
    let obj5 = { label: null, action: null };
    let intl2 = tmp(tmp2[29]).intl;
    obj5.label = intl2.string(tmp(tmp2[29]).t.DisZzB);
    obj5.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations });
      showUserProfile();
    };
    items5.push(obj5);
  }
  const items6 = [];
  if (currentUser.id !== id) {
    let tmp37 = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (tmp37) {
      const recipients = channel.recipients;
      let hasItem;
      if (recipients != null) {
        hasItem = recipients.includes(id);
      }
      tmp37 = hasItem;
    }
    if (tmp37) {
      let obj6 = { label: null, variant: "destructive", action: null };
      let intl3 = tmp(tmp2[29]).intl;
      obj6.label = intl3.string(tmp(tmp2[29]).t["n5zMI+"]);
      obj6.action = function action() {
        ChannelActionCreatorsDefault.removeRecipient(channel.id, id);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      items6.push(obj6);
    }
    if (relationshipType !== tmp29.FRIEND) {
      if (tmp30) {
        let obj7 = { label: null, action: null };
        let intl5 = tmp(tmp2[29]).intl;
        obj7.label = intl5.string(tmp(tmp2[29]).t.xNdRDO);
        obj7.action = function action() {
          const result = openShopThisLookActionSheet.openShopThisLookActionSheet({ userId: id, guildId });
        };
        items5.push(obj7);
      }
      if (isIgnored) {
        if (!tmp42) {
          let obj8 = { label: null, action: null };
          const intl6 = tmp(tmp2[29]).intl;
          obj8.label = intl6.string(tmp(tmp2[29]).t["8wXU9B"]);
          obj8.action = function action() {
            trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            RelationshipActionCreatorsDefault.unignoreUser(id, newestAnalyticsLocation, id);
            showUserProfile();
            const obj = { action: "UNIGNORE", analyticsLocations };
          };
          items6.push(obj8);
        }
        const push = items6.push;
        if (tmp42) {
          let obj9 = { label: null, action: null };
          const intl13 = tmp(tmp2[29]).intl;
          obj9.label = intl13.string(tmp(tmp2[29]).t.XyHpKH);
          obj9.action = function action() {
            trackUserProfileAction({ action: "UNBLOCK", analyticsLocations });
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            RelationshipActionCreatorsDefault.unblockUser(id, { location: newestAnalyticsLocation }, id);
            showUserProfile();
            const obj = { action: "UNBLOCK", analyticsLocations };
            const obj3 = { location: newestAnalyticsLocation };
            let id1;
            if (channel != null) {
              id1 = channel.id;
            }
            const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(tmp4, id1);
            const tmp2Result = SafetyToastsActionCreatorsDefault;
          };
          push(obj9);
        } else {
          const obj10 = { label: null, variant: "destructive", action: null };
          const intl8 = tmp(tmp2[29]).intl;
          obj10.label = intl8.string(tmp(tmp2[29]).t.l4Emac);
          obj10.action = function action() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { userId: id, channelId: null, onBlock: null, onIgnore: null, onSuccess: null, impressionName: null };
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            obj2.channelId = id;
            obj2.onBlock = function onBlock() {
              return trackUserProfileAction({ action: "BLOCK", analyticsLocations });
            };
            obj2.onIgnore = function onIgnore() {
              return trackUserProfileAction({ action: "IGNORE", analyticsLocations });
            };
            obj2.onSuccess = onSuccess;
            obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION;
            obj.openLazy(asyncRequireImpl(10958, dependencyMap.paths), constants, obj2, "stack");
            const tmp3 = asyncRequireImpl(10958, dependencyMap.paths);
          };
          push(obj10);
          if (result) {
            const intl10 = tmp(tmp2[29]).intl;
            let t2 = tmp(tmp2[29]).t;
            const obj11 = {
              label: intl10.string(user.bot ? t2.jhJzez : t2.A1MM3D),
              variant: "destructive",
              action() {
                          trackUserProfileAction({ action: "REPORT", analyticsLocations });
                          if (user.bot) {
                            const obj4 = ActionSheetActionCreatorsDefault;
                            const tmp18 = asyncRequireImpl(14268, dependencyMap.paths);
                            const BOT_REPORT_CHOOSER_KEY = BotReportChooser.BOT_REPORT_CHOOSER_KEY;
                            const obj5 = { user, entrypoint: "UserProfileOverflowMenu", contextualGuildId: guildId1, contextualChannelId: null };
                            id = undefined;
                            if (channel != null) {
                              id = channel.id;
                            }
                            obj5.contextualChannelId = id;
                            obj4.openLazy(tmp18, BOT_REPORT_CHOOSER_KEY, obj5, "replaceAll");
                          } else {
                            const result = ReportModals.showReportModalForUser(user, guildId1);
                            ActionSheetActionCreatorsDefault.hideActionSheet();
                          }
                          const obj = { action: "REPORT", analyticsLocations };
                        }
            };
            t2 = items6.push(obj11);
          } else {
            if (tmpResult16.isAndroid()) {
              const obj12 = { label: null, variant: "destructive", action: null };
              const intl9 = tmp(tmp2[29]).intl;
              obj12.label = intl9.string(tmp(tmp2[29]).t.TbHyMG);
              obj12.action = function action() {
                trackUserProfileAction({ action: "REPORT", analyticsLocations });
                UserProfileAlertUtils.alertUserReported();
                const obj = { action: "REPORT", analyticsLocations };
                AnalyticsUtilsDefault.track(constants.TNS_USER_REPORT_SUBMITTED, { reported_user_id: id });
              };
              items6.push(obj12);
            }
            const bot = user.bot;
            let tmp47 = !bot;
            if (!bot) {
              tmp47 = tmp9;
            }
            if (tmp47) {
              const obj13 = { label: null, action: null };
              const intl11 = tmp(tmp2[29]).intl;
              obj13.label = intl11.string(tmp(tmp2[29]).t.Sd8Ixw);
              obj13.action = function action() {
                trackUserProfileAction({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations });
                const result = GuildInviteUtils.showGuildInviteActionSheet(id, newestAnalyticsLocation);
              };
              items5.push(obj13);
            }
            const bot2 = user.bot;
            let tmp49 = !bot2;
            if (!bot2) {
              tmp49 = !user.isSystemUser();
            }
            if (tmp49) {
              tmp49 = tmp8;
            }
            if (tmp49) {
              tmp49 = tmp10;
            }
            if (tmp49) {
              const obj14 = { label: null, action: null };
              const intl12 = tmp(tmp2[29]).intl;
              obj14.label = intl12.string(tmp7(tmp2[46])["wkSug+"]);
              obj14.action = function action() {
                return openGameOrganizationInvitePickerDefault(id);
              };
              items5.push(obj14);
            }
            tmpResult16 = tmp(tmp2[43]);
          }
        }
      }
      if (relationshipType !== id.BLOCKED) {
        const obj15 = { label: null, action: null };
        const intl7 = tmp(tmp2[29]).intl;
        obj15.label = intl7.string(tmp(tmp2[29]).t.ytCpKs);
        obj15.action = function action() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { userId: id, channelId: null, onBlock: null, onIgnore: null, onSuccess: null, impressionName: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj2.channelId = id;
          obj2.onBlock = function onBlock() {
            return trackUserProfileAction({ action: "BLOCK", analyticsLocations });
          };
          obj2.onIgnore = function onIgnore() {
            return trackUserProfileAction({ action: "IGNORE", analyticsLocations });
          };
          obj2.onSuccess = onSuccess;
          obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION;
          obj.openLazy(asyncRequireImpl(10959, dependencyMap.paths), collapsedCategories, obj2, "stack");
          const tmp3 = asyncRequireImpl(10959, dependencyMap.paths);
        };
        items6.push(obj15);
      }
    } else {
      let intl4 = tmp(tmp2[29]).intl;
      const string = intl4.string;
      let t = tmp(tmp2[29]).t;
      if (tmp6) {
        let stringResult = string(t["8pOYUE"]);
      } else {
        stringResult = string(t.BGYkaH);
      }
      const obj16 = {
        label: stringResult,
        action() {
              trackUserProfileAction({ action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations });
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14267, dependencyMap.paths), { userId: id, showUserProfile });
              const obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
              const obj3 = { userId: id, showUserProfile };
              ActionSheetActionCreatorsDefault.hideActionSheet();
            }
      };
      t = items5.push(obj16);
    }
  }
  let tmp52 = !canRing;
  if (canRing) {
    tmp52 = null == selectedVoiceChannelId;
  }
  if (!tmp52) {
    let tmp53 = userIsInCall;
    if (userIsInCall) {
      tmp53 = !stateFromStoresObject2.isUserRinging;
    }
    tmp52 = tmp53;
  }
  if (tmp52) {
    const DeveloperMode = tmp(tmp2[49]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp56 = setting;
    if (setting) {
      tmp56 = tidaWebformEnabled;
    }
    if (!tmp56) {
      const obj17 = { label: null, action: null };
      const intl15 = tmp(tmp2[29]).intl;
      obj17.label = intl15.string(tmp(tmp2[29]).t.y5MwJy);
      obj17.action = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = ClipboardUtils;
        obj2.copy(UserUtilsDefault.getUserTag(user, { decoration: "never", identifiable: "always" }));
        const result = ToastUtils.presentUsernameCopied();
      };
      items5.push(obj17);
    }
    if (user.bot) {
      if (null != application) {
        closure_18 = tmp(tmp2[53]).supportsEmbeddedSurface(application, tmp(tmp2[54]).EmbeddedSurfaceType.MAIN);
        const tmpResult17 = tmp(tmp2[53]);
        installAppPropsFromProfileApplication = tmp(tmp2[55]).getInstallAppPropsFromProfileApplication(application);
        const obj18 = { label: null, action: null };
        const intl18 = tmp(tmp2[29]).intl;
        obj18.label = intl18.string(tmp(tmp2[29]).t.WqhZss);
        obj18.action = function action() {
          trackUserProfileAction({ action: "COPY_APP_LINK", analyticsLocations });
          const obj2 = getApplicationInstallURL;
          if (closure_18) {
            const obj3 = { applicationId: application.id, referrerId: currentUser.id };
            let activityLaunchURL = obj2.getActivityLaunchURL(obj3);
          } else {
            const obj4 = { id: application.id };
            const merged = Object.assign(closure_19);
            activityLaunchURL = obj2.getApplicationInstallURL(obj4);
          }
          ClipboardUtils.copy(activityLaunchURL);
          const obj = { action: "COPY_APP_LINK", analyticsLocations };
          ToastUtils.presentLinkCopied();
        };
        items5.push(obj18);
        const tmpResult18 = tmp(tmp2[55]);
      }
    }
    if (setting) {
      const push2 = items5.push;
      const obj19 = { label: null, action: null };
      const intl16 = tmp(tmp2[29]).intl;
      const string3 = intl16.string;
      const t4 = tmp(tmp2[29]).t;
      if (tidaWebformEnabled) {
        obj19.label = string3(t4.QvQeLv);
        obj19.action = function action() {
          const items = [];
          let obj = { label: null, onPress: null };
          const intl = user(application[29]).intl;
          obj.label = intl.string(user(application[29]).t.y5MwJy);
          obj.onPress = function onPress() {
            trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
            const obj = { action: "COPY_USERNAME", analyticsLocations };
            const obj2 = user(application[50]);
            obj2.copy(currentUser(application[51]).getUserTag(bannerURL, { decoration: "never", identifiable: "always" }));
            const obj3 = currentUser(application[51]);
            const result = user(application[52]).presentUsernameCopied();
          };
          items.push(obj);
          let obj2 = { label: null, onPress: null };
          const intl2 = user(application[29]).intl;
          obj2.label = intl2.string(user(application[29]).t["/AXYnE"]);
          obj2.onPress = function onPress() {
            trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
            user(application[50]).copy(id);
            const obj = { action: "COPY_USER_ID", analyticsLocations };
            const obj2 = user(application[50]);
            user(application[52]).presentIdCopied();
          };
          items.push(obj2);
          let hasAvatarForGuildResult = null != bannerURL.avatar;
          if (!hasAvatarForGuildResult) {
            guildId = undefined;
            if (displayProfile != null) {
              guildId = displayProfile.guildId;
            }
            hasAvatarForGuildResult = obj3.hasAvatarForGuild(guildId);
          }
          if (hasAvatarForGuildResult) {
            const obj4 = { label: null, onPress: null };
            const intl3 = user(application[29]).intl;
            obj4.label = intl3.string(user(application[29]).t.gERDvM);
            obj4.onPress = function onPress() {
              trackUserProfileAction({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations });
              guildId = undefined;
              if (guildId != null) {
                guildId = guildId.guildId;
              }
              const avatarURL = bannerURL.getAvatarURL(guildId, canRing, true);
              if (null != avatarURL) {
                user(application[50]).copy(avatarURL);
                const obj2 = user(application[50]);
                user(application[52]).presentLinkCopied();
                const obj3 = user(application[52]);
              }
              const obj = { action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations };
            };
            items.push(obj4);
          }
          if (null != displayProfile) {
            const obj6 = { canAnimate: true, size: canRing };
            bannerURL = displayProfile.getBannerURL(obj6);
            if (null != bannerURL) {
              const obj7 = { label: null, onPress: null };
              const intl4 = user(application[29]).intl;
              obj7.label = intl4.string(user(application[29]).t.hsNv0R);
              obj7.onPress = function onPress() {
                trackUserProfileAction({ action: "COPY_BANNER_IMAGE_LINK", analyticsLocations });
                ClipboardUtils.copy(bannerURL);
                const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations };
                ToastUtils.presentLinkCopied();
              };
              items.push(obj7);
            }
          }
          const obj8 = { options: items, key: "copy-info", header: null, stackingBehavior: "stack", hasIcons: false };
          const obj9 = { title: null };
          const intl5 = user(application[29]).intl;
          obj9.title = intl5.string(user(application[29]).t.QvQeLv);
          obj8.header = obj9;
          let result = user(application[57]).showSimpleActionSheet(obj8);
          obj3 = bannerURL;
          const tmpResult = user(application[57]);
        };
        push2(obj19);
      } else {
        obj19.label = string3(t4["/AXYnE"]);
        obj19.action = function action() {
          trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
          ClipboardUtils.copy(id);
          const obj = { action: "COPY_USER_ID", analyticsLocations };
          ToastUtils.presentIdCopied();
        };
        push2(obj19);
      }
    }
    let hasItem1 = null != channel && null != selectedChannel;
    if (hasItem1) {
      const TEXTUAL = userIsInCall.TEXTUAL;
      hasItem1 = TEXTUAL.has(selectedChannel.type);
    }
    if (hasItem1) {
      const obj20 = { label: null, action: null };
      const intl17 = tmp(tmp2[29]).intl;
      obj20.label = intl17.string(tmp(tmp2[29]).t.PHjkRE);
      obj20.action = function action() {
        return openUserContextMenuCommandsDefault({ userId: id, selectedChannel, showUserProfile, analyticsLocations });
      };
      items5.push(obj20);
    }
    if (0 !== items5.length) {
      const obj21 = { value: analyticsLocations, children: null };
      const obj22 = { ref, children: null };
      const obj23 = { style: tmp22, children: null };
      const obj24 = { items: null, onOpen: null, children: null };
      const items7 = [items5, items6];
      obj24.items = items7;
      obj24.onOpen = function onOpen() {
        if (closure_17) {
          const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.MENU_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
        }
      };
      obj24.children = function children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = user(application[29]).intl;
        obj.accessibilityLabel = intl.string(user(application[29]).t["+zofAD"]);
        obj.icon = closure_19(user(application[63]).MoreHorizontalIcon, { size: "sm", color: currentUser(application[64]).colors.WHITE });
        return closure_19(user(application[62]).IconButton, obj);
      };
      obj23.children = installAppPropsFromProfileApplication(tmp(tmp2[60]).ContextMenu, obj24);
      obj22.children = installAppPropsFromProfileApplication(tmp7(tmp2[59]).View, obj23);
      const items8 = [installAppPropsFromProfileApplication(selectedChannel, obj22), ];
      const obj25 = { targetRef: ref, visible: isVisible, onDismiss: markAsDismissed, onPress: callback };
      items8[1] = installAppPropsFromProfileApplication(tmp7(tmp2[65]), obj25);
      obj21.children = items8;
      let tmp63 = closure_20(tmp(tmp2[18]).AnalyticsLocationProvider, obj21);
    } else {
      tmp63 = null;
    }
    return tmp63;
  } else {
    const intl14 = tmp(tmp2[29]).intl;
    const string2 = intl14.string;
    let t3 = tmp(tmp2[29]).t;
    if (userIsInCall) {
      let string2Result = string2(t3.ygslb0);
    } else {
      string2Result = string2(t3.bHa9kN);
    }
    const obj26 = {
      label: string2Result,
      action() {
          let str = "RING";
          if (userIsInCall) {
            str = "STOP_RINGING";
          }
          trackUserProfileAction({ action: str, analyticsLocations });
          const obj2 = CallActionCreatorsDefault;
          if (userIsInCall) {
            const items = [user.id];
            obj2.stopRinging(selectedVoiceChannelId, items);
          } else {
            const items1 = [user.id];
            obj2.ring(selectedVoiceChannelId, items1, "user_profile_overflow_menu");
          }
          const obj = { action: str, analyticsLocations };
        }
    };
    t3 = items5.push(obj26);
  }
  tmp29 = id;
  const tmpResult15 = tmp(tmp2[12]);
};