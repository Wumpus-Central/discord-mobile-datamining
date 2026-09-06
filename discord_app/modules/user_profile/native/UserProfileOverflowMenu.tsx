// === Module 13097: UserProfileOverflowMenu ===

// Module 13097 (UserProfileOverflowMenu)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8404 */;
import ReportModals from "ReportModals" /* 8629 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9182 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12620 */;
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands" /* 12992 */;
import GuildInviteUtils from "GuildInviteUtils" /* 13098 */;
import openShopThisLookActionSheet from "openShopThisLookActionSheet" /* 13106 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 13114 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const discord_common_AnalyticsUtils = tmp3(1250);
require = fn;
const View = fn(17).View;
const UserProfileThemeTypes = fn(7208).UserProfileThemeTypes;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, AVATAR_MAX_SIZE: closure_12, ChannelTypesSets: map1, NOOP: closure_14, RelationshipTypes: closure_15 } = Constants);
const ParticipantTypes = fn(4581).ParticipantTypes;
const RestrictionConfirmationConstants = fn(11382);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_17, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_18 } = RestrictionConfirmationConstants);
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
  let enabled;
  let userIsInCall;
  let showUserProfile;
  let id;
  let guildId1;
  closure_17 = undefined;
  let tmp2 = channel;
  let obj = user(channel[12]);
  let items = [analyticsLocations];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), isIgnored: RelationshipStore.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj1 = user(channel[12]);
  let items1 = [newestAnalyticsLocation, trackUserProfileAction];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => ({ selectedChannel: trackUserProfileAction.getChannel(newestAnalyticsLocation.getChannelId()), selectedVoiceChannelId: newestAnalyticsLocation.getVoiceChannelId(), selectedVoiceChannel: trackUserProfileAction.getChannel(newestAnalyticsLocation.getVoiceChannelId()) }));
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  const selectedVoiceChannel = stateFromStoresObject1.selectedVoiceChannel;
  let obj2 = user(channel[13]);
  [arr3, arr4] = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  const tmp5 = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  let tmp8 = displayProfile(channel[14])(user.id);
  if (tmp8) {
    tmp8 = arr2.length + arr3.length > 0;
  }
  let tmpResult = tmp(tmp2[15]);
  let result = tmpResult.isIarUserReportingEnabled("User Profile Options - Mobile");
  tmpResult = tmp(tmp2[16]);
  const userProfileAnalyticsContext = tmpResult.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let tmp7Result = tmp7(tmp2[17]);
  const tmp7ResultResult = tmp7Result(displayProfile(tmp2[18]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  tmp7Result = tmp7(tmp2[19]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = tmp7Result(user.id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmp6 = null != analyticsLocations.getNickname(user.id);
  const isShopThisLookMobileEnabled = user(tmp2[20]).useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult1 = user(tmp2[20]);
  let obj7 = selectedVoiceChannelId;
  const equippedCollectibleSkuIds = user(tmp2[21]).useEquippedCollectibleSkuIds(user.id, guildId);
  const ref = selectedVoiceChannelId.useRef(null);
  const tmpResult2 = user(tmp2[21]);
  const tmp19 = displayProfile(tmp2[22])();
  const shopThisLookMarketing = user(tmp2[23]).useShopThisLookMarketing(user.id, guildId, isShopThisLookMobileEnabled);
  const items2 = [user.id, guildId];
  ({ isVisible, markAsDismissed } = shopThisLookMarketing);
  const callback = selectedVoiceChannelId.useCallback(() => {
    const obj = { userId: user.id, guildId };
    const result = obj.openShopThisLookActionSheet(obj);
  }, items2);
  const tmpResult3 = user(tmp2[23]);
  canRing = user(tmp2[25]).useCanRing(user, "UserProfileOverflowMenu", selectedVoiceChannelId);
  const tmpResult4 = user(tmp2[25]);
  let guild_id1;
  if (selectedVoiceChannel != null) {
    guild_id1 = selectedVoiceChannel.guild_id;
  }
  enabled = displayProfile(tmp2[26]).useExperiment({ guildId: guild_id1, location: "UserProfileOverflowMenu" }).enabled;
  const tmp7Result1 = displayProfile(tmp2[26]);
  const tidaWebformEnabled = displayProfile(tmp2[27]).useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const tmp7Result2 = displayProfile(tmp2[27]);
  const items3 = [context];
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
  if (canRing) {
    canRing = null != selectedVoiceChannelId;
  }
  if (canRing) {
    let isUserRinging = !userIsInCall;
    if (userIsInCall) {
      isUserRinging = stateFromStoresObject2.isUserRinging;
    }
    canRing = isUserRinging;
  }
  obj = { type: null, name: null, properties: null };
  const tmpResult5 = user(tmp2[12]);
  obj.type = user(tmp2[29]).ImpressionTypes.MENU;
  obj.name = user(tmp2[29]).ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
  obj = { voice_channel_id: selectedVoiceChannelId, voice_guild_id: null };
  let guild_id2;
  if (selectedVoiceChannel != null) {
    guild_id2 = selectedVoiceChannel.guild_id;
  }
  obj.voice_guild_id = guild_id2;
  obj.properties = obj;
  if (enabled) {
    enabled = canRing;
  }
  obj1 = { disableTrack: !enabled };
  const items4 = [user.id];
  displayProfile(tmp2[28])(obj, obj1, items4);
  const items5 = [user.id, , , ];
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  items5[1] = id;
  items5[2] = context;
  items5[3] = analyticsLocations;
  showUserProfile = obj7.useCallback((showGuildProfile) => {
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
  }, items5);
  id = user.id;
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  let tmp31 = isShopThisLookMobileEnabled;
  if (isShopThisLookMobileEnabled) {
    tmp31 = equippedCollectibleSkuIds.length > 0;
  }
  closure_17 = tmp31;
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  const items6 = [];
  if (null != guildId2) {
    obj2 = { label: null, action: null };
    let intl = tmp(tmp2[31]).intl;
    obj2.label = intl.string(tmp(tmp2[31]).t.GISTta);
    obj2.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      showUserProfile(false);
    };
    items6.push(obj2);
  }
  let guildId3;
  if (tmp7Result1Result != null) {
    guildId3 = tmp7Result1Result.guildId;
  }
  let tmp35 = null != guildId3;
  if (tmp35) {
    let guildId4;
    if (displayProfile != null) {
      guildId4 = displayProfile.guildId;
    }
    tmp35 = null == guildId4;
  }
  if (tmp35) {
    let obj3 = { label: null, action: null };
    let intl2 = tmp(tmp2[31]).intl;
    obj3.label = intl2.string(tmp(tmp2[31]).t.DisZzB);
    obj3.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations });
      showUserProfile();
    };
    items6.push(obj3);
  }
  const items7 = [];
  if (currentUser.id !== id) {
    let tmp38 = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (tmp38) {
      const recipients = channel.recipients;
      let hasItem;
      if (recipients != null) {
        hasItem = recipients.includes(id);
      }
      tmp38 = hasItem;
    }
    if (tmp38) {
      let obj4 = { label: null, variant: "destructive", action: null };
      let intl3 = tmp(tmp2[31]).intl;
      obj4.label = intl3.string(tmp(tmp2[31]).t["n5zMI+"]);
      obj4.action = function action() {
        ChannelActionCreatorsDefault.removeRecipient(channel.id, id);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      items7.push(obj4);
    }
    if (relationshipType !== id.FRIEND) {
      if (tmp31) {
        const obj5 = { label: null, action: null };
        let intl5 = tmp(tmp2[31]).intl;
        obj5.label = intl5.string(tmp(tmp2[31]).t.xNdRDO);
        obj5.action = function action() {
          const obj = { userId: id, guildId };
          const result = obj.openShopThisLookActionSheet(obj);
        };
        arr2 = items6.push(obj5);
      }
      if (isIgnored) {
        if (!tmp43) {
          const obj6 = { label: null, action: null };
          const intl6 = tmp(tmp2[31]).intl;
          obj6.label = intl6.string(tmp(tmp2[31]).t["8wXU9B"]);
          obj6.action = function action() {
            trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            RelationshipActionCreatorsDefault.unignoreUser(id, newestAnalyticsLocation, id);
            showUserProfile();
          };
          arr3 = items7.push(obj6);
        }
        const push = items7.push;
        if (tmp43) {
          obj7 = { label: null, action: null };
          const intl12 = tmp(tmp2[31]).intl;
          obj7.label = intl12.string(tmp(tmp2[31]).t.XyHpKH);
          obj7.action = function action() {
            let obj = { action: "UNBLOCK", analyticsLocations };
            trackUserProfileAction(obj);
            obj = { location: newestAnalyticsLocation };
            RelationshipActionCreatorsDefault.unblockUser(id, obj);
            showUserProfile();
            const tmp2 = id;
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(tmp2, id);
          };
          push(obj7);
        } else {
          const obj8 = { label: null, variant: "destructive", action: null };
          const intl8 = tmp(tmp2[31]).intl;
          obj8.label = intl8.string(tmp(tmp2[31]).t.l4Emac);
          obj8.action = function action() {
            const obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            obj.channelId = id;
            obj.onSuccess = function onSuccess() {
              id = undefined;
              if (id != null) {
                id = id.id;
              }
              const result = displayProfile(channel[39]).showBlockSuccessToast(closure_1_15, id);
            };
            obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION;
            obj.openLazy(asyncRequireImpl(11383, dependencyMap.paths), closure_2_17, obj, "stack");
          };
          push(obj8);
          if (result) {
            const obj9 = { label: null, variant: "destructive", action: null };
            const intl10 = tmp(tmp2[31]).intl;
            obj9.label = intl10.string(tmp(tmp2[31]).t.wqHXNt);
            obj9.action = function action() {
              trackUserProfileAction({ action: "REPORT", analyticsLocations });
              let tmp3;
              if ("@me" !== guildId1) {
                if (null !== tmp2) {
                  tmp3 = tmp2;
                }
              }
              const result = ReportModals.showReportModalForUser(user, tmp3);
              const obj = { action: "REPORT", analyticsLocations };
              ActionSheetActionCreatorsDefault.hideActionSheet();
            };
            items7.push(obj9);
          } else {
            if (tmpResult6.isAndroid()) {
              const obj10 = { label: null, variant: "destructive", action: null };
              const intl9 = tmp(tmp2[31]).intl;
              obj10.label = intl9.string(tmp(tmp2[31]).t.TbHyMG);
              obj10.action = function action() {
                let obj = { action: "REPORT", analyticsLocations };
                trackUserProfileAction(obj);
                UserProfileAlertUtils.alertUserReported();
                obj = { reported_user_id: id };
                AnalyticsUtilsDefault.track(constants.TNS_USER_REPORT_SUBMITTED, obj);
              };
              items7.push(obj10);
            }
            tmpResult6 = tmp(tmp2[42]);
          }
          if (tmp8) {
            const obj11 = { label: null, action: null };
            const intl11 = tmp(tmp2[31]).intl;
            obj11.label = intl11.string(tmp(tmp2[31]).t.Sd8Ixw);
            obj11.action = function action() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations });
              const result = GuildInviteUtils.showGuildInviteActionSheet(id, newestAnalyticsLocation);
            };
            items6.push(obj11);
          }
        }
      }
      if (relationshipType !== id.BLOCKED) {
        const obj12 = { label: null, action: null };
        const intl7 = tmp(tmp2[31]).intl;
        obj12.label = intl7.string(tmp(tmp2[31]).t.ytCpKs);
        obj12.action = function action() {
          let obj = { action: "IGNORE", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.onSuccess = onSuccess;
          obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION;
          obj2.openLazy(asyncRequireImpl(11384, dependencyMap.paths), collapsedCategories, obj, "stack");
        };
        items7.push(obj12);
      }
    } else {
      let intl4 = tmp(tmp2[31]).intl;
      const string = intl4.string;
      let t = tmp(tmp2[31]).t;
      if (tmp6) {
        let stringResult = string(t["8pOYUE"]);
      } else {
        stringResult = string(t.BGYkaH);
      }
      const obj13 = {
        label: stringResult,
        action() {
              let obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
              trackUserProfileAction(obj);
              obj = { userId: id, showUserProfile };
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13115, dependencyMap.paths), obj);
              ActionSheetActionCreatorsDefault.hideActionSheet();
            }
      };
      t = items6.push(obj13);
    }
  }
  if (!canRing) {
    const DeveloperMode = tmp(tmp2[47]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp53 = setting;
    if (setting) {
      tmp53 = tidaWebformEnabled;
    }
    if (!tmp53) {
      const obj14 = { label: null, action: null };
      const intl14 = tmp(tmp2[31]).intl;
      obj14.label = intl14.string(tmp(tmp2[31]).t.y5MwJy);
      obj14.action = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = ClipboardUtils;
        obj2.copy(UserUtilsDefault.getUserTag(user, { decoration: "never", identifiable: "always" }));
        const result = ToastUtils.presentUsernameCopied();
      };
      items6.push(obj14);
    }
    if (setting) {
      const push2 = items6.push;
      const obj15 = { label: null, action: null };
      const intl15 = tmp(tmp2[31]).intl;
      const string3 = intl15.string;
      const t3 = tmp(tmp2[31]).t;
      if (tidaWebformEnabled) {
        obj15.label = string3(t3.QvQeLv);
        obj15.action = function action() {
          const items = [];
          let obj = { label: null, onPress: null };
          const intl = user(channel[31]).intl;
          obj.label = intl.string(user(channel[31]).t.y5MwJy);
          obj.onPress = function onPress() {
            trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
            const obj = { action: "COPY_USERNAME", analyticsLocations };
            const obj2 = user(channel[48]);
            obj2.copy(displayProfile(channel[49]).getUserTag(bannerURL, { decoration: "never", identifiable: "always" }));
            const obj3 = displayProfile(channel[49]);
            const result = user(channel[50]).presentUsernameCopied();
          };
          items.push(obj);
          obj = { label: null, onPress: null };
          const intl2 = user(channel[31]).intl;
          obj.label = intl2.string(user(channel[31]).t["/AXYnE"]);
          obj.onPress = function onPress() {
            trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
            user(channel[48]).copy(id);
            const obj = { action: "COPY_USER_ID", analyticsLocations };
            const obj2 = user(channel[48]);
            user(channel[50]).presentIdCopied();
          };
          items.push(obj);
          let obj2 = bannerURL;
          let hasAvatarForGuildResult = null != bannerURL.avatar;
          if (!hasAvatarForGuildResult) {
            guildId = undefined;
            if (displayProfile != null) {
              guildId = displayProfile.guildId;
            }
            hasAvatarForGuildResult = obj2.hasAvatarForGuild(guildId);
          }
          if (hasAvatarForGuildResult) {
            obj = { label: null, onPress: null };
            const intl3 = tmp(tmp2[31]).intl;
            obj.label = intl3.string(tmp(tmp2[31]).t.gERDvM);
            obj.onPress = function onPress() {
              trackUserProfileAction({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations });
              guildId = undefined;
              if (guildId != null) {
                guildId = guildId.guildId;
              }
              const avatarURL = bannerURL.getAvatarURL(guildId, enabled, true);
              if (null != avatarURL) {
                user(channel[48]).copy(avatarURL);
                const obj2 = user(channel[48]);
                user(channel[50]).presentLinkCopied();
                const obj3 = user(channel[50]);
              }
            };
            items.push(obj);
          }
          let obj4 = displayProfile;
          if (null != displayProfile) {
            const obj1 = { canAnimate: true, size: enabled };
            bannerURL = obj4.getBannerURL(obj1);
            if (null != bannerURL) {
              obj2 = { label: null, onPress: null };
              const intl4 = tmp(tmp2[31]).intl;
              obj2.label = intl4.string(tmp(tmp2[31]).t.hsNv0R);
              obj2.onPress = function onPress() {
                trackUserProfileAction({ action: "COPY_BANNER_IMAGE_LINK", analyticsLocations });
                ClipboardUtils.copy(bannerURL);
                const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations };
                ToastUtils.presentLinkCopied();
              };
              items.push(obj2);
            }
          }
          let obj3 = { options: items, key: "copy-info", header: null, stackingBehavior: "stack", hasIcons: false };
          obj4 = { title: null };
          const intl5 = tmp(tmp2[31]).intl;
          obj4.title = intl5.string(user(channel[31]).t.QvQeLv);
          obj3.header = obj4;
          let result = user(channel[51]).showSimpleActionSheet(obj3);
        };
        push2(obj15);
      } else {
        obj15.label = string3(t3["/AXYnE"]);
        obj15.action = function action() {
          trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
          ClipboardUtils.copy(id);
          const obj = { action: "COPY_USER_ID", analyticsLocations };
          ToastUtils.presentIdCopied();
        };
        push2(obj15);
      }
    }
    let hasItem1 = null != channel && null != selectedChannel;
    if (hasItem1) {
      const TEXTUAL = userIsInCall.TEXTUAL;
      hasItem1 = TEXTUAL.has(selectedChannel.type);
    }
    if (hasItem1) {
      const obj16 = { label: null, action: null };
      const intl16 = tmp(tmp2[31]).intl;
      obj16.label = intl16.string(tmp(tmp2[31]).t.PHjkRE);
      obj16.action = function action() {
        return openUserContextMenuCommandsDefault({ userId: id, selectedChannel, showUserProfile, analyticsLocations });
      };
      items6.push(obj16);
    }
    if (0 !== items6.length) {
      const obj17 = { value: analyticsLocations, children: null };
      const obj18 = { ref, children: null };
      const obj19 = { style: tmp19, children: null };
      const obj20 = { items: null, onOpen: null, children: null };
      const items8 = [items6, items7];
      obj20.items = items8;
      obj20.onOpen = function onOpen() {
        if (closure_17) {
          const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.MENU_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
        }
      };
      obj20.children = function children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = user(channel[31]).intl;
        obj.accessibilityLabel = intl.string(user(channel[31]).t["+zofAD"]);
        obj = { size: "sm", color: displayProfile(channel[58]).colors.WHITE };
        obj.icon = closure_1_19(user(channel[57]).MoreHorizontalIcon, obj);
        return closure_1_19(user(channel[56]).IconButton, obj);
      };
      obj19.children = closure_19(tmp(tmp2[54]).ContextMenu, obj20);
      obj18.children = closure_19(tmp7(tmp2[53]).View, obj19);
      const items9 = [closure_19(selectedVoiceChannel, obj18), ];
      const obj21 = { targetRef: ref, visible: isVisible, onDismiss: markAsDismissed, onPress: callback };
      items9[1] = closure_19(tmp7(tmp2[59]), obj21);
      obj17.children = items9;
      let tmp60 = closure_20(tmp(tmp2[17]).AnalyticsLocationProvider, obj17);
    } else {
      tmp60 = null;
    }
    return tmp60;
  } else {
    const intl13 = tmp(tmp2[31]).intl;
    const string2 = intl13.string;
    let t2 = tmp(tmp2[31]).t;
    if (userIsInCall) {
      let string2Result = string2(t2.ygslb0);
    } else {
      string2Result = string2(t2.bHa9kN);
    }
    const obj22 = {
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
            let tmp7 = enabled;
            if (enabled) {
              tmp7 = null != selectedVoiceChannel;
            }
            if (tmp7) {
              ActionSheetActionCreatorsDefault.hideAllActionSheets();
              PrivateChannelCallUtils.openChannelCallModal(selectedVoiceChannel);
            }
          }
        }
    };
    t2 = items6.push(obj22);
  }
};