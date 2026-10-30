// === Module 14770: UserProfileOverflowMenu ===

// Module 14770 (UserProfileOverflowMenu)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7481 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import openGameOrganizationInvitePickerDefault from "openGameOrganizationInvitePicker" /* 11611 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12284 */;
import GuildInviteUtils from "GuildInviteUtils" /* 14771 */;
import openShopThisLookActionSheet from "openShopThisLookActionSheet" /* 14780 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 14784 */;
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands" /* 14789 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;

require = fn;
const View = fn(17).View;
const UserProfileThemeTypes = fn(7371).UserProfileThemeTypes;
const Constants = fn(1072);
({ AVATAR_MAX_SIZE: closure_11, ChannelTypesSets: closure_12, RelationshipTypes: map1 } = Constants);
const ParticipantTypes = fn(5676).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  user = user.user;
  const currentUser = user.currentUser;
  const application = user.application;
  ({ displayProfile, channel } = user);
  let context;
  let trackUserProfileAction;
  let analyticsLocations;
  let newestAnalyticsLocation;
  let guildId;
  let canRing;
  let userIsInCall;
  let callback1;
  let id;
  closure_15 = undefined;
  closure_16 = undefined;
  let installAppPropsFromProfileApplication;
  let items = [analyticsLocations];
  const stateFromStoresObject = user(application[11]).useStateFromStoresObject(items, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), isIgnored: RelationshipStore.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj = user(application[11]);
  let items1 = [newestAnalyticsLocation, trackUserProfileAction];
  const stateFromStoresObject1 = user(application[11]).useStateFromStoresObject(items1, () => ({ selectedChannel: trackUserProfileAction.getChannel(newestAnalyticsLocation.getChannelId()), selectedVoiceChannelId: newestAnalyticsLocation.getVoiceChannelId() }));
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  let obj2 = user(application[11]);
  let obj3 = user(application[12]);
  [arr3, arr4] = channel(user(application[12]).useServerInviteRows(user.id), 2);
  const tmp5 = channel(user(application[12]).useServerInviteRows(user.id), 2);
  const tmp8 = currentUser(application[13])(user.id);
  let tmp9 = tmp8;
  if (tmp8) {
    tmp9 = arr3.length + arr4.length > 0;
  }
  const tmp6 = null != analyticsLocations.getNickname(user.id);
  const tmp10 = currentUser(application[14])("user_profile_overflow_menu");
  let result = user(application[15]).isIarUserReportingEnabled("User Profile Options - Mobile");
  const tmpResult = user(application[15]);
  const userProfileAnalyticsContext = user(application[16]).useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmpResult13 = user(application[16]);
  const tmp7ResultResult = currentUser(application[17])(currentUser(application[18]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  const tmp7Result = currentUser(application[17]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = currentUser(application[19])(user.id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmp7Result3 = currentUser(application[19]);
  const isShopThisLookMobileEnabled = user(application[20]).useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult14 = user(application[20]);
  const equippedCollectibleSkuIds = user(application[21]).useEquippedCollectibleSkuIds(user.id, guildId);
  const ref = selectedChannel.useRef(null);
  const tmpResult15 = user(application[21]);
  const tmp22 = currentUser(application[22])();
  const shopThisLookMarketing = user(application[23]).useShopThisLookMarketing(user.id, guildId, isShopThisLookMobileEnabled);
  const items2 = [user.id, guildId];
  ({ isVisible, markAsDismissed } = shopThisLookMarketing);
  const callback = selectedChannel.useCallback(() => {
    const result = openShopThisLookActionSheet.openShopThisLookActionSheet({ userId: user.id, guildId });
  }, items2);
  const tmpResult16 = user(application[23]);
  canRing = user(application[25]).useCanRing(user, selectedVoiceChannelId);
  const tmpResult17 = user(application[25]);
  const tidaWebformEnabled = currentUser(application[26]).useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const tmp7Result4 = currentUser(application[26]);
  const items3 = [context];
  const stateFromStoresObject2 = user(application[11]).useStateFromStoresObject(items3, () => {
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
  callback1 = selectedChannel.useCallback((showGuildProfile) => {
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
  if (channel != null) {
    const guildId1 = channel.getGuildId();
  }
  let obj4 = { user, channelId: null, location: null, analyticsLocations: null, trackUserProfileAction: null, showUserProfile: null };
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  obj4.channelId = id2;
  obj4.location = newestAnalyticsLocation;
  obj4.analyticsLocations = analyticsLocations;
  obj4.trackUserProfileAction = trackUserProfileAction;
  obj4.showUserProfile = callback1;
  let tmp32 = isShopThisLookMobileEnabled;
  if (isShopThisLookMobileEnabled) {
    tmp32 = equippedCollectibleSkuIds.length > 0;
  }
  closure_15 = tmp32;
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  const items5 = [];
  if (null != guildId2) {
    let obj5 = { label: null, action: null };
    let intl = tmp(tmp2[28]).intl;
    obj5.label = intl.string(tmp(tmp2[28]).t.GISTta);
    obj5.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      callback1(false);
    };
    items5.push(obj5);
  }
  let guildId3;
  if (tmp7Result1Result != null) {
    guildId3 = tmp7Result1Result.guildId;
  }
  let tmp36 = null != guildId3;
  if (tmp36) {
    let guildId4;
    if (displayProfile != null) {
      guildId4 = displayProfile.guildId;
    }
    tmp36 = null == guildId4;
  }
  if (tmp36) {
    let obj6 = { label: null, action: null };
    const intl2 = tmp(tmp2[28]).intl;
    obj6.label = intl2.string(tmp(tmp2[28]).t.DisZzB);
    obj6.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations });
      callback1();
    };
    items5.push(obj6);
  }
  const items6 = [];
  if (currentUser.id !== id) {
    let tmp39 = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (tmp39) {
      const recipients = channel.recipients;
      let hasItem;
      if (recipients != null) {
        hasItem = recipients.includes(id);
      }
      tmp39 = hasItem;
    }
    if (tmp39) {
      const obj7 = { label: null, variant: "destructive", action: null };
      const intl3 = tmp(tmp2[28]).intl;
      obj7.label = intl3.string(tmp(tmp2[28]).t["n5zMI+"]);
      obj7.action = function action() {
        ChannelActionCreatorsDefault.removeRecipient(channel.id, id);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      items6.push(obj7);
    }
    if (relationshipType !== callback1.FRIEND) {
      if (tmp32) {
        const obj8 = { label: null, action: null };
        const intl5 = tmp(tmp2[28]).intl;
        obj8.label = intl5.string(tmp(tmp2[28]).t.xNdRDO);
        obj8.action = function action() {
          const result = openShopThisLookActionSheet.openShopThisLookActionSheet({ userId: id, guildId });
        };
        items5.push(obj8);
      }
      const obj9 = { isIgnored, isBlocked: relationshipType === callback1.BLOCKED };
      const ignoreMenuItem = tmp(tmp2[34]).getIgnoreMenuItem(obj4, obj9);
      if (null != ignoreMenuItem) {
        items6.push(ignoreMenuItem);
      }
      const tmpResult19 = tmp(tmp2[34]);
      const obj10 = { isBlocked: relationshipType === callback1.BLOCKED };
      items6.push(tmp(tmp2[34]).getBlockMenuItem(obj4, obj10));
      if (relationshipType !== callback1.BLOCKED) {
        const obj11 = { isInIarUserReportingExperiment: result, guildId: guildId1, reportEntrypoint: "UserProfileOverflowMenu" };
        const reportMenuItem = tmp(tmp2[34]).getReportMenuItem(obj4, obj11);
        if (null != reportMenuItem) {
          items6.push(reportMenuItem);
        }
        const bot = user.bot;
        let tmp50 = !bot;
        if (!bot) {
          tmp50 = tmp9;
        }
        if (tmp50) {
          const obj12 = { label: null, action: null };
          const intl6 = tmp(tmp2[28]).intl;
          obj12.label = intl6.string(tmp(tmp2[28]).t.Sd8Ixw);
          obj12.action = function action() {
            trackUserProfileAction({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations });
            const result = GuildInviteUtils.showGuildInviteActionSheet(id, newestAnalyticsLocation);
          };
          items5.push(obj12);
        }
        const bot2 = user.bot;
        let tmp52 = !bot2;
        if (!bot2) {
          tmp52 = !user.isSystemUser();
        }
        if (tmp52) {
          tmp52 = tmp8;
        }
        if (tmp52) {
          tmp52 = tmp10;
        }
        if (tmp52) {
          const obj13 = { label: null, action: null };
          const intl7 = tmp(tmp2[28]).intl;
          obj13.label = intl7.string(tmp7(tmp2[35])["wkSug+"]);
          obj13.action = function action() {
            return openGameOrganizationInvitePickerDefault(id);
          };
          items5.push(obj13);
        }
        const tmpResult21 = tmp(tmp2[34]);
      }
      const tmpResult20 = tmp(tmp2[34]);
    } else {
      const intl4 = tmp(tmp2[28]).intl;
      const string = intl4.string;
      let t = tmp(tmp2[28]).t;
      if (tmp6) {
        let stringResult = string(t["8pOYUE"]);
      } else {
        stringResult = string(t.BGYkaH);
      }
      const obj14 = {
        label: stringResult,
        action() {
              trackUserProfileAction({ action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations });
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14786, dependencyMap.paths), { userId: id, showUserProfile: callback1 });
              const obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
              const obj3 = { userId: id, showUserProfile: callback1 };
              ActionSheetActionCreatorsDefault.hideActionSheet();
            }
      };
      t = items5.push(obj14);
    }
  }
  let tmp54 = !canRing;
  if (canRing) {
    tmp54 = null == selectedVoiceChannelId;
  }
  if (!tmp54) {
    let tmp55 = userIsInCall;
    if (userIsInCall) {
      tmp55 = !stateFromStoresObject2.isUserRinging;
    }
    tmp54 = tmp55;
  }
  if (tmp54) {
    const DeveloperMode = tmp(tmp2[38]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp58 = setting;
    if (setting) {
      tmp58 = tidaWebformEnabled;
    }
    if (!tmp58) {
      const obj15 = { label: null, action: null };
      const intl9 = tmp(tmp2[28]).intl;
      obj15.label = intl9.string(tmp(tmp2[28]).t.y5MwJy);
      obj15.action = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = ClipboardUtils;
        obj2.copy(UserUtilsDefault.getUserTag(user, { decoration: "never", identifiable: "always" }));
        const result = ToastUtils.presentUsernameCopied();
      };
      items5.push(obj15);
    }
    if (user.bot) {
      if (null != application) {
        closure_16 = tmp(tmp2[42]).supportsEmbeddedSurface(application, tmp(tmp2[43]).EmbeddedSurfaceType.MAIN);
        const tmpResult22 = tmp(tmp2[42]);
        installAppPropsFromProfileApplication = tmp(tmp2[44]).getInstallAppPropsFromProfileApplication(application);
        const obj16 = { label: null, action: null };
        const intl11 = tmp(tmp2[28]).intl;
        obj16.label = intl11.string(tmp(tmp2[28]).t.WqhZss);
        obj16.action = function action() {
          trackUserProfileAction({ action: "COPY_APP_LINK", analyticsLocations });
          const obj2 = getApplicationInstallURL;
          if (closure_16) {
            const obj3 = { applicationId: application.id, referrerId: currentUser.id };
            let activityLaunchURL = obj2.getActivityLaunchURL(obj3);
          } else {
            const obj4 = { id: application.id };
            const merged = Object.assign(closure_17);
            activityLaunchURL = obj2.getApplicationInstallURL(obj4);
          }
          ClipboardUtils.copy(activityLaunchURL);
          const obj = { action: "COPY_APP_LINK", analyticsLocations };
          ToastUtils.presentLinkCopied();
        };
        items5.push(obj16);
        const tmpResult23 = tmp(tmp2[44]);
      }
    }
    if (setting) {
      const obj17 = { tidaWebformEnabled, avatarGuildId: null, bannerUrl: null };
      let guildId5;
      if (displayProfile != null) {
        guildId5 = displayProfile.guildId;
      }
      obj17.avatarGuildId = guildId5;
      let bannerURL;
      if (displayProfile != null) {
        const obj18 = { canAnimate: true, size: canRing };
        bannerURL = displayProfile.getBannerURL(obj18);
      }
      obj17.bannerUrl = bannerURL;
      items5.push(tmp(tmp2[34]).getDeveloperCopyMenuItem(obj4, obj17));
      const tmpResult24 = tmp(tmp2[34]);
    }
    let hasItem1 = null != channel && null != selectedChannel;
    if (hasItem1) {
      const TEXTUAL = userIsInCall.TEXTUAL;
      hasItem1 = TEXTUAL.has(selectedChannel.type);
    }
    if (hasItem1) {
      const obj19 = { label: null, action: null };
      const intl10 = tmp(tmp2[28]).intl;
      obj19.label = intl10.string(tmp(tmp2[28]).t.PHjkRE);
      obj19.action = function action() {
        return openUserContextMenuCommandsDefault({ userId: id, selectedChannel, showUserProfile: callback1, analyticsLocations });
      };
      items5.push(obj19);
    }
    if (0 !== items5.length) {
      const obj20 = { value: analyticsLocations, children: null };
      const obj21 = { ref, children: null };
      const obj22 = { style: tmp22, children: null };
      const obj23 = { items: null, onOpen: null, children: null };
      const items7 = [items5, items6];
      obj23.items = items7;
      obj23.onOpen = function onOpen() {
        if (closure_15) {
          const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.MENU_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
        }
      };
      obj23.children = function children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = user(application[28]).intl;
        obj.accessibilityLabel = intl.string(user(application[28]).t["+zofAD"]);
        obj.icon = closure_15(user(application[51]).MoreHorizontalIcon, { size: "sm", color: currentUser(application[52]).colors.WHITE });
        return closure_15(user(application[50]).IconButton, obj);
      };
      obj22.children = closure_15(tmp(tmp2[48]).ContextMenu, obj23);
      obj21.children = closure_15(tmp7(tmp2[47]).View, obj22);
      const items8 = [closure_15(selectedVoiceChannelId, obj21), ];
      const obj24 = { targetRef: ref, visible: isVisible, onDismiss: markAsDismissed, onPress: callback };
      items8[1] = closure_15(tmp7(tmp2[53]), obj24);
      obj20.children = items8;
      let tmp67 = closure_16(tmp(tmp2[17]).AnalyticsLocationProvider, obj20);
    } else {
      tmp67 = null;
    }
    return tmp67;
  } else {
    const intl8 = tmp(tmp2[28]).intl;
    const string2 = intl8.string;
    let t2 = tmp(tmp2[28]).t;
    if (userIsInCall) {
      let string2Result = string2(t2.ygslb0);
    } else {
      string2Result = string2(t2.bHa9kN);
    }
    const obj25 = {
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
    t2 = items5.push(obj25);
  }
};