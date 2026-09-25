// discord_app/modules/user_profile/native/UserProfileOverflowMenu.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import SafetyToastsActionCreatorsDefault from "../../safety_common/SafetyToastsActionCreators.native.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import CallActionCreatorsDefault from "../../../actions/CallActionCreators.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands.tsx";
import GuildInviteUtils from "../../instant_invite/native/GuildInviteUtils.tsx";
import openShopThisLookActionSheet from "../../collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx";
import ShopThisLookAnalyticsUtils from "../../collectibles/shop_this_look/ShopThisLookAnalyticsUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

require = fn;
const View = fn(17).View;
const UserProfileThemeTypes = fn(6624).UserProfileThemeTypes;
const Constants = fn(1074);
({
  AnalyticEvents: closure_11,
  AVATAR_MAX_SIZE: closure_12,
  ChannelTypesSets: map1,
  NOOP: closure_14,
  RelationshipTypes: closure_15,
} = Constants);
const ParticipantTypes = fn(4850).ParticipantTypes;
const RestrictionConfirmationConstants = fn(10913);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_17, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_18 } =
  RestrictionConfirmationConstants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  user = user.user;
  ({ currentUser, displayProfile } = user);
  const channel = user.channel;
  let context;
  let trackUserProfileAction;
  let analyticsLocations;
  let newestAnalyticsLocation;
  let guildId;
  let canRing;
  let userIsInCall;
  closure_12 = undefined;
  let id;
  let guildId1;
  constants2 = undefined;
  let tmp2 = channel;
  let items = [newestAnalyticsLocation];
  const stateFromStoresObject = user(channel[12]).useStateFromStoresObject(items, () => ({
    relationshipType: RelationshipStore.getRelationshipType(user.id),
    isIgnored: RelationshipStore.isIgnored(user.id),
  }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj = user(channel[12]);
  let items1 = [guildId, analyticsLocations];
  const stateFromStoresObject1 = user(channel[12]).useStateFromStoresObject(items1, () => ({
    selectedChannel: analyticsLocations.getChannel(guildId.getChannelId()),
    selectedVoiceChannelId: guildId.getVoiceChannelId(),
  }));
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  let obj2 = user(channel[12]);
  let obj3 = user(channel[13]);
  [arr3, arr4] = selectedChannel(user(channel[13]).useServerInviteRows(user.id), 2);
  const tmp5 = selectedChannel(user(channel[13]).useServerInviteRows(user.id), 2);
  let tmp8 = displayProfile(channel[14])(user.id);
  if (tmp8) {
    tmp8 = arr3.length + arr4.length > 0;
  }
  const tmp6 = null != newestAnalyticsLocation.getNickname(user.id);
  let result = user(tmp2[15]).isIarUserReportingEnabled("User Profile Options - Mobile");
  let tmpResult = user(tmp2[15]);
  const userProfileAnalyticsContext = user(tmp2[16]).useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmpResult8 = user(tmp2[16]);
  const tmp7ResultResult = displayProfile(tmp2[17])(displayProfile(tmp2[18]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  const tmp7Result = displayProfile(tmp2[17]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = displayProfile(tmp2[19])(user.id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmp7Result3 = displayProfile(tmp2[19]);
  const isShopThisLookMobileEnabled = user(tmp2[20]).useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult9 = user(tmp2[20]);
  const equippedCollectibleSkuIds = user(tmp2[21]).useEquippedCollectibleSkuIds(user.id, guildId);
  const ref = selectedVoiceChannelId.useRef(null);
  const tmpResult10 = user(tmp2[21]);
  const tmp20 = displayProfile(tmp2[22])();
  const shopThisLookMarketing = user(tmp2[23]).useShopThisLookMarketing(user.id, guildId, isShopThisLookMobileEnabled);
  const items2 = [user.id, guildId];
  ({ isVisible, markAsDismissed } = shopThisLookMarketing);
  const callback = selectedVoiceChannelId.useCallback(() => {
    const result = openShopThisLookActionSheet.openShopThisLookActionSheet({ userId: user.id, guildId });
  }, items2);
  const tmpResult11 = user(tmp2[23]);
  canRing = user(tmp2[25]).useCanRing(user, selectedVoiceChannelId);
  const tmpResult12 = user(tmp2[25]);
  const tidaWebformEnabled = displayProfile(tmp2[26]).useExperiment(
    { location: "UserProfileOverflowMenu" },
    { autoTrackExposure: false },
  ).tidaWebformEnabled;
  const tmp7Result4 = displayProfile(tmp2[26]);
  const items3 = [trackUserProfileAction];
  const stateFromStoresObject2 = user(tmp2[12]).useStateFromStoresObject(items3, () => {
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
  const items4 = [user.id, , ,];
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  items4[1] = id1;
  items4[2] = context;
  items4[3] = analyticsLocations;
  closure_12 = selectedVoiceChannelId.useCallback((showGuildProfile) => {
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
  let tmp28 = isShopThisLookMobileEnabled;
  if (isShopThisLookMobileEnabled) {
    tmp28 = equippedCollectibleSkuIds.length > 0;
  }
  constants2 = tmp28;
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  const items5 = [];
  if (null != guildId2) {
    let obj4 = { label: null, action: null };
    let intl = tmp(tmp2[28]).intl;
    obj4.label = intl.string(tmp(tmp2[28]).t.GISTta);
    obj4.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      closure_12(false);
    };
    items5.push(obj4);
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
    const obj5 = { label: null, action: null };
    let intl2 = tmp(tmp2[28]).intl;
    obj5.label = intl2.string(tmp(tmp2[28]).t.DisZzB);
    obj5.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations });
      closure_12();
    };
    items5.push(obj5);
  }
  const items6 = [];
  if (currentUser.id !== id) {
    let tmp35 = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (tmp35) {
      const recipients = channel.recipients;
      let hasItem;
      if (recipients != null) {
        hasItem = recipients.includes(id);
      }
      tmp35 = hasItem;
    }
    if (tmp35) {
      let obj6 = { label: null, variant: "destructive", action: null };
      let intl3 = tmp(tmp2[28]).intl;
      obj6.label = intl3.string(tmp(tmp2[28]).t["n5zMI+"]);
      obj6.action = function action() {
        ChannelActionCreatorsDefault.removeRecipient(channel.id, id);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      items6.push(obj6);
    }
    if (relationshipType !== tmp27.FRIEND) {
      if (tmp28) {
        let obj7 = { label: null, action: null };
        let intl5 = tmp(tmp2[28]).intl;
        obj7.label = intl5.string(tmp(tmp2[28]).t.xNdRDO);
        obj7.action = function action() {
          const result = openShopThisLookActionSheet.openShopThisLookActionSheet({ userId: id, guildId });
        };
        items5.push(obj7);
      }
      if (isIgnored) {
        if (!tmp40) {
          let obj8 = { label: null, action: null };
          const intl6 = tmp(tmp2[28]).intl;
          obj8.label = intl6.string(tmp(tmp2[28]).t["8wXU9B"]);
          obj8.action = function action() {
            trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            RelationshipActionCreatorsDefault.unignoreUser(id, newestAnalyticsLocation, id);
            closure_12();
            const obj = { action: "UNIGNORE", analyticsLocations };
          };
          items6.push(obj8);
        }
        const push = items6.push;
        if (tmp40) {
          let obj9 = { label: null, action: null };
          const intl12 = tmp(tmp2[28]).intl;
          obj9.label = intl12.string(tmp(tmp2[28]).t.XyHpKH);
          obj9.action = function action() {
            trackUserProfileAction({ action: "UNBLOCK", analyticsLocations });
            RelationshipActionCreatorsDefault.unblockUser(id, { location: newestAnalyticsLocation });
            closure_12();
            const obj = { action: "UNBLOCK", analyticsLocations };
            const obj3 = { location: newestAnalyticsLocation };
            const tmp2 = id;
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(tmp2, id);
          };
          push(obj9);
        } else {
          const obj10 = { label: null, variant: "destructive", action: null };
          const intl8 = tmp(tmp2[28]).intl;
          obj10.label = intl8.string(tmp(tmp2[28]).t.l4Emac);
          obj10.action = function action() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { userId: id, channelId: null, onSuccess: null, impressionName: null };
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            obj2.channelId = id;
            obj2.onSuccess = onSuccess;
            obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION;
            obj.openLazy(asyncRequireImpl(10914, dependencyMap.paths), closure_2_17, obj2, "stack");
            const tmp3 = asyncRequireImpl(10914, dependencyMap.paths);
          };
          push(obj10);
          if (result) {
            const obj11 = { label: null, variant: "destructive", action: null };
            const intl10 = tmp(tmp2[28]).intl;
            obj11.label = intl10.string(tmp(tmp2[28]).t.wqHXNt);
            obj11.action = function action() {
              trackUserProfileAction({ action: "REPORT", analyticsLocations });
              let tmp3;
              if ("@me" !== guildId1) {
                if (null !== guildId1) {
                  tmp3 = guildId1;
                }
              }
              const result = ReportModals.showReportModalForUser(user, tmp3);
              const obj = { action: "REPORT", analyticsLocations };
              ActionSheetActionCreatorsDefault.hideActionSheet();
            };
            items6.push(obj11);
          } else {
            if (tmpResult14.isAndroid()) {
              const obj12 = { label: null, variant: "destructive", action: null };
              const intl9 = tmp(tmp2[28]).intl;
              obj12.label = intl9.string(tmp(tmp2[28]).t.TbHyMG);
              obj12.action = function action() {
                trackUserProfileAction({ action: "REPORT", analyticsLocations });
                UserProfileAlertUtils.alertUserReported();
                const obj = { action: "REPORT", analyticsLocations };
                AnalyticsUtilsDefault.track(constants.TNS_USER_REPORT_SUBMITTED, { reported_user_id: id });
              };
              items6.push(obj12);
            }
            tmpResult14 = tmp(tmp2[40]);
          }
          if (tmp8) {
            const obj13 = { label: null, action: null };
            const intl11 = tmp(tmp2[28]).intl;
            obj13.label = intl11.string(tmp(tmp2[28]).t.Sd8Ixw);
            obj13.action = function action() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations });
              const result = GuildInviteUtils.showGuildInviteActionSheet(id, newestAnalyticsLocation);
            };
            items5.push(obj13);
          }
        }
      }
      if (relationshipType !== constants2.BLOCKED) {
        const obj14 = { label: null, action: null };
        const intl7 = tmp(tmp2[28]).intl;
        obj14.label = intl7.string(tmp(tmp2[28]).t.ytCpKs);
        obj14.action = function action() {
          trackUserProfileAction({ action: "IGNORE", analyticsLocations });
          const obj = { action: "IGNORE", analyticsLocations };
          const obj2 = ActionSheetActionCreatorsDefault;
          const obj3 = { userId: id, channelId: null, onSuccess: null, impressionName: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj3.channelId = id;
          obj3.onSuccess = onSuccess;
          obj3.impressionName = discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION;
          obj2.openLazy(asyncRequireImpl(10915, dependencyMap.paths), collapsedCategories, obj3, "stack");
          const tmp4 = asyncRequireImpl(10915, dependencyMap.paths);
        };
        items6.push(obj14);
      }
    } else {
      let intl4 = tmp(tmp2[28]).intl;
      const string = intl4.string;
      let t = tmp(tmp2[28]).t;
      if (tmp6) {
        let stringResult = string(t["8pOYUE"]);
      } else {
        stringResult = string(t.BGYkaH);
      }
      const obj15 = {
        label: stringResult,
        action() {
          trackUserProfileAction({ action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations });
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12668, dependencyMap.paths), {
            userId: id,
            showUserProfile,
          });
          const obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
          const obj3 = { userId: id, showUserProfile };
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      };
      t = items5.push(obj15);
    }
  }
  let tmp48 = !canRing;
  if (canRing) {
    tmp48 = null == selectedVoiceChannelId;
  }
  if (!tmp48) {
    let tmp49 = userIsInCall;
    if (userIsInCall) {
      tmp49 = !stateFromStoresObject2.isUserRinging;
    }
    tmp48 = tmp49;
  }
  if (tmp48) {
    const DeveloperMode = tmp(tmp2[44]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp52 = setting;
    if (setting) {
      tmp52 = tidaWebformEnabled;
    }
    if (!tmp52) {
      const obj16 = { label: null, action: null };
      const intl14 = tmp(tmp2[28]).intl;
      obj16.label = intl14.string(tmp(tmp2[28]).t.y5MwJy);
      obj16.action = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = ClipboardUtils;
        obj2.copy(UserUtilsDefault.getUserTag(user, { decoration: "never", identifiable: "always" }));
        const result = ToastUtils.presentUsernameCopied();
      };
      items5.push(obj16);
    }
    if (setting) {
      const push2 = items5.push;
      const obj17 = { label: null, action: null };
      const intl15 = tmp(tmp2[28]).intl;
      const string3 = intl15.string;
      const t3 = tmp(tmp2[28]).t;
      if (tidaWebformEnabled) {
        obj17.label = string3(t3.QvQeLv);
        obj17.action = function action() {
          const items = [];
          let obj = { label: null, onPress: null };
          const intl = user(channel[28]).intl;
          obj.label = intl.string(user(channel[28]).t.y5MwJy);
          obj.onPress = function onPress() {
            trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
            const obj = { action: "COPY_USERNAME", analyticsLocations };
            const obj2 = user(channel[45]);
            obj2.copy(
              displayProfile(channel[46]).getUserTag(bannerURL, { decoration: "never", identifiable: "always" }),
            );
            const obj3 = displayProfile(channel[46]);
            const result = user(channel[47]).presentUsernameCopied();
          };
          items.push(obj);
          let obj2 = { label: null, onPress: null };
          const intl2 = user(channel[28]).intl;
          obj2.label = intl2.string(user(channel[28]).t["/AXYnE"]);
          obj2.onPress = function onPress() {
            trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
            user(channel[45]).copy(id);
            const obj = { action: "COPY_USER_ID", analyticsLocations };
            const obj2 = user(channel[45]);
            user(channel[47]).presentIdCopied();
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
            const intl3 = user(channel[28]).intl;
            obj4.label = intl3.string(user(channel[28]).t.gERDvM);
            obj4.onPress = function onPress() {
              trackUserProfileAction({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations });
              guildId = undefined;
              if (guildId != null) {
                guildId = guildId.guildId;
              }
              const avatarURL = bannerURL.getAvatarURL(guildId, closure_12, true);
              if (null != avatarURL) {
                user(channel[45]).copy(avatarURL);
                const obj2 = user(channel[45]);
                user(channel[47]).presentLinkCopied();
                const obj3 = user(channel[47]);
              }
              const obj = { action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations };
            };
            items.push(obj4);
          }
          if (null != displayProfile) {
            const obj6 = { canAnimate: true, size };
            bannerURL = displayProfile.getBannerURL(obj6);
            if (null != bannerURL) {
              const obj7 = { label: null, onPress: null };
              const intl4 = user(channel[28]).intl;
              obj7.label = intl4.string(user(channel[28]).t.hsNv0R);
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
          const intl5 = user(channel[28]).intl;
          obj9.title = intl5.string(user(channel[28]).t.QvQeLv);
          obj8.header = obj9;
          let result = user(channel[48]).showSimpleActionSheet(obj8);
          obj3 = bannerURL;
          const tmpResult = user(channel[48]);
        };
        push2(obj17);
      } else {
        obj17.label = string3(t3["/AXYnE"]);
        obj17.action = function action() {
          trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
          ClipboardUtils.copy(id);
          const obj = { action: "COPY_USER_ID", analyticsLocations };
          ToastUtils.presentIdCopied();
        };
        push2(obj17);
      }
    }
    let hasItem1 = null != channel && null != selectedChannel;
    if (hasItem1) {
      const TEXTUAL = id.TEXTUAL;
      hasItem1 = TEXTUAL.has(selectedChannel.type);
    }
    if (hasItem1) {
      const obj18 = { label: null, action: null };
      const intl16 = tmp(tmp2[28]).intl;
      obj18.label = intl16.string(tmp(tmp2[28]).t.PHjkRE);
      obj18.action = function action() {
        return openUserContextMenuCommandsDefault({ userId: id, selectedChannel, showUserProfile, analyticsLocations });
      };
      items5.push(obj18);
    }
    if (0 !== items5.length) {
      const obj19 = { value: analyticsLocations, children: null };
      const obj20 = { ref, children: null };
      const obj21 = { style: tmp20, children: null };
      const obj22 = { items: null, onOpen: null, children: null };
      const items7 = [items5, items6];
      obj22.items = items7;
      obj22.onOpen = function onOpen() {
        if (closure_15) {
          const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(
            ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.MENU_VIEWED,
            UserProfileThemeTypes.ACTION_SHEET,
          );
        }
      };
      obj22.children = function children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = user(channel[28]).intl;
        obj.accessibilityLabel = intl.string(user(channel[28]).t["+zofAD"]);
        obj.icon = closure_1_19(user(channel[54]).MoreHorizontalIcon, {
          size: "sm",
          color: displayProfile(channel[55]).colors.WHITE,
        });
        return closure_1_19(user(channel[53]).IconButton, obj);
      };
      obj21.children = closure_19(tmp(tmp2[51]).ContextMenu, obj22);
      obj20.children = closure_19(displayProfile(tmp2[50]).View, obj21);
      const items8 = [closure_19(context, obj20)];
      const obj23 = { targetRef: ref, visible: isVisible, onDismiss: markAsDismissed, onPress: callback };
      items8[1] = closure_19(displayProfile(tmp2[56]), obj23);
      obj19.children = items8;
      let tmp59 = closure_20(tmp(tmp2[17]).AnalyticsLocationProvider, obj19);
    } else {
      tmp59 = null;
    }
    return tmp59;
  } else {
    const intl13 = tmp(tmp2[28]).intl;
    const string2 = intl13.string;
    let t2 = tmp(tmp2[28]).t;
    if (userIsInCall) {
      let string2Result = string2(t2.ygslb0);
    } else {
      string2Result = string2(t2.bHa9kN);
    }
    const obj24 = {
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
      },
    };
    t2 = items5.push(obj24);
  }
  tmp27 = constants2;
  const tmpResult13 = user(tmp2[12]);
}
