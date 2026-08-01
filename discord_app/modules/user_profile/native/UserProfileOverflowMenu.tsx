// === Module 12219: UserProfileOverflowMenu ===

// Module 12219 (UserProfileOverflowMenu)
import asyncRequireImpl from "asyncRequireImpl";
import useEquippedCollectibleSkuIds from "useEquippedCollectibleSkuIds";
import getParticipants from "getParticipants";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import { jsx } from "experiment";

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
const require = arg1;
({ AnalyticEvents: c9, AVATAR_MAX_SIZE: c10, ChannelTypesSets: unpackModuleId, NOOP: closure_12, RelationshipTypes: map1 } = ME);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_15, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_16 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
let result = require("getParticipants").fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  let arr3;
  let arr4;
  let currentUser;
  let displayProfile;
  let isIgnored;
  let relationshipType;
  user = user.user;
  ({ currentUser, displayProfile } = user);
  const channel = user.channel;
  let selectedChannel;
  let selectedVoiceChannelId;
  let selectedVoiceChannel;
  let context;
  let trackUserProfileAction;
  let analyticsLocations;
  let newestAnalyticsLocation;
  let guildId;
  let canRing;
  let enabled;
  let userIsInCall;
  let closure_14;
  let id;
  let guildId1;
  let tmp2 = channel;
  let obj = user(channel[10]);
  let items = [trackUserProfileAction];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ relationshipType: trackUserProfileAction.getRelationshipType(user.id), isIgnored: trackUserProfileAction.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj1 = user(channel[10]);
  let items1 = [analyticsLocations, context];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => {
    let getChannel;
    let getChannel2;
    ({ getChannel, getChannel: getChannel2 } = context);
    return { selectedChannel: getChannel(analyticsLocations.getChannelId()), selectedVoiceChannelId: analyticsLocations.getVoiceChannelId(), selectedVoiceChannel: getChannel2(analyticsLocations.getVoiceChannelId()) };
  });
  selectedChannel = stateFromStoresObject1.selectedChannel;
  selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  selectedVoiceChannel = stateFromStoresObject1.selectedVoiceChannel;
  let obj2 = user(channel[11]);
  [arr3, arr4] = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  const tmp5 = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  let tmp8 = displayProfile(channel[12])(user.id);
  if (tmp8) {
    tmp8 = arr2.length + arr3.length > 0;
  }
  let tmpResult = tmp(tmp2[13]);
  let result = tmpResult.isIarUserReportingEnabled("User Profile Options - Mobile");
  tmpResult = tmp(tmp2[14]);
  const userProfileAnalyticsContext = tmpResult.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let tmp7Result = tmp7(tmp2[15]);
  const tmp7ResultResult = tmp7Result(displayProfile(tmp2[16]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  tmp7Result = tmp7(tmp2[17]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = tmp7Result(user.id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmp6 = null != trackUserProfileAction.getNickname(user.id);
  let isShopThisLookMobileEnabled = user(tmp2[18]).useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult1 = user(tmp2[18]);
  const equippedCollectibleSkuIds = user(tmp2[19]).useEquippedCollectibleSkuIds(user.id, guildId);
  const tmpResult2 = user(tmp2[19]);
  canRing = user(tmp2[20]).useCanRing(user, "UserProfileOverflowMenu", selectedVoiceChannelId);
  const tmpResult3 = user(tmp2[20]);
  let guild_id1;
  if (selectedVoiceChannel != null) {
    guild_id1 = selectedVoiceChannel.guild_id;
  }
  enabled = displayProfile(tmp2[21]).useExperiment({ guildId: guild_id1, location: "UserProfileOverflowMenu" }).enabled;
  const tmp7Result1 = displayProfile(tmp2[21]);
  const tidaWebformEnabled = displayProfile(tmp2[22]).useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const tmp7Result2 = displayProfile(tmp2[22]);
  const items2 = [selectedVoiceChannel];
  const stateFromStoresObject2 = user(tmp2[10]).useStateFromStoresObject(items2, () => {
    let tmp = canRing;
    if (canRing) {
      tmp = null != selectedVoiceChannelId;
    }
    let participant = null;
    if (tmp) {
      participant = selectedVoiceChannel.getParticipant(selectedVoiceChannelId, user.id);
    }
    const obj = { userIsInCall: null != participant, isUserRinging: null };
    let ringing = null != participant;
    if (ringing) {
      ringing = participant.type === lib.USER;
    }
    if (ringing) {
      ringing = participant.ringing;
    }
    obj[1] = ringing;
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
  const tmpResult4 = user(tmp2[10]);
  obj[0] = user(tmp2[24]).ImpressionTypes.MENU;
  obj[1] = user(tmp2[24]).ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
  obj = { voice_channel_id: selectedVoiceChannelId, voice_guild_id: null };
  let guild_id2;
  if (selectedVoiceChannel != null) {
    guild_id2 = selectedVoiceChannel.guild_id;
  }
  obj[1] = guild_id2;
  obj[2] = obj;
  if (enabled) {
    enabled = canRing;
  }
  obj1 = { disableTrack: !enabled };
  const items3 = [user.id];
  displayProfile(tmp2[23])(obj, obj1, items3);
  const items4 = [user.id, , , ];
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  items4[1] = id;
  items4[2] = context;
  items4[3] = analyticsLocations;
  closure_14 = selectedVoiceChannelId.useCallback((showGuildProfile) => {
    const obj = {};
    const merged = Object.assign(context);
    obj.showGuildProfile = showGuildProfile;
    obj.userId = user.id;
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj.channelId = id;
    obj.sourceAnalyticsLocations = analyticsLocations;
    obj.ignoreBlockedSpeedBump = true;
    displayProfile(channel[25])(obj);
  }, items4);
  id = user.id;
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  if (isShopThisLookMobileEnabled) {
    isShopThisLookMobileEnabled = equippedCollectibleSkuIds.length > 0;
  }
  const items5 = [];
  if (isShopThisLookMobileEnabled) {
    obj2 = { label: null, action: null };
    let intl = tmp(tmp2[26]).intl;
    obj2[0] = intl.string(tmp(tmp2[26]).t.xNdRDO);
    obj2[1] = function action() {
      let obj = user(channel[27]);
      obj = { userId: id, guildId };
      const result = obj.openShopThisLookActionSheet(obj);
    };
    items5.push(obj2);
  }
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  if (null != guildId2) {
    let obj3 = { label: null, action: null };
    let intl2 = tmp(tmp2[26]).intl;
    obj3[0] = intl2.string(tmp(tmp2[26]).t.GISTta);
    obj3[1] = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      lib(false);
    };
    items5.push(obj3);
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
    let obj4 = { label: null, action: null };
    let intl3 = tmp(tmp2[26]).intl;
    obj4[0] = intl3.string(tmp(tmp2[26]).t.DisZzB);
    obj4[1] = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations });
      lib();
    };
    items5.push(obj4);
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
      const obj5 = { label: null, variant: "destructive", action: null };
      let intl4 = tmp(tmp2[26]).intl;
      obj5[0] = intl4.string(tmp(tmp2[26]).t["n5zMI+"]);
      obj5[2] = function action() {
        displayProfile(channel[28]).removeRecipient(channel.id, id);
        const obj = displayProfile(channel[28]);
        displayProfile(channel[29]).hideActionSheet();
      };
      arr2 = items6.push(obj5);
    }
    if (relationshipType !== userIsInCall.FRIEND) {
      if (isIgnored) {
        if (!tmp39) {
          const obj6 = { label: null, action: null };
          const intl6 = tmp(tmp2[26]).intl;
          obj6[0] = intl6.string(tmp(tmp2[26]).t["8wXU9B"]);
          obj6[1] = function action() {
            trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
            let id;
            if (channel != null) {
              id = channel.id;
            }
            displayProfile(channel[33]).unignoreUser(id, newestAnalyticsLocation, id);
            lib();
          };
          arr3 = items6.push(obj6);
        }
        const push = items6.push;
        if (tmp39) {
          const obj7 = { label: null, action: null };
          const intl12 = tmp(tmp2[26]).intl;
          obj7[0] = intl12.string(tmp(tmp2[26]).t.XyHpKH);
          obj7[1] = function action() {
            let obj = { action: "UNBLOCK", analyticsLocations };
            trackUserProfileAction(obj);
            obj = { location: newestAnalyticsLocation };
            displayProfile(channel[33]).unblockUser(id, obj);
            lib();
            const obj2 = displayProfile(channel[33]);
            const tmp2 = id;
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            const result = displayProfile(channel[35]).showUnblockSuccessToast(tmp2, id);
          };
          push(obj7);
        } else {
          const obj8 = { label: null, variant: "destructive", action: null };
          const intl8 = tmp(tmp2[26]).intl;
          obj8[0] = intl8.string(tmp(tmp2[26]).t.l4Emac);
          obj8[2] = function action() {
            let obj = displayProfile(channel[29]);
            obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            obj[1] = id;
            obj[2] = function onSuccess() {
              let id;
              if (id != null) {
                id = id.id;
              }
              const result = outer1_1(outer1_2[35]).showBlockSuccessToast(closure_15, id);
            };
            obj[3] = user(channel[24]).ImpressionNames.BLOCK_USER_CONFIRMATION;
            obj.openLazy(user(channel[32])(channel[36], channel.paths), id, obj, "stack");
          };
          push(obj8);
          if (result) {
            const obj9 = { label: null, variant: "destructive", action: null };
            const intl10 = tmp(tmp2[26]).intl;
            obj9[0] = intl10.string(tmp(tmp2[26]).t.wqHXNt);
            obj9[2] = function action() {
              trackUserProfileAction({ action: "REPORT", analyticsLocations });
              let tmp3;
              if ("@me" !== guildId1) {
                if (null !== tmp2) {
                  tmp3 = tmp2;
                }
              }
              const result = user(channel[37]).showReportModalForUser(user, tmp3);
              const obj = { action: "REPORT", analyticsLocations };
              const obj2 = user(channel[37]);
              displayProfile(channel[29]).hideActionSheet();
            };
            items6.push(obj9);
          } else {
            if (tmpResult5.isAndroid()) {
              const obj10 = { label: null, variant: "destructive", action: null };
              const intl9 = tmp(tmp2[26]).intl;
              obj10[0] = intl9.string(tmp(tmp2[26]).t.TbHyMG);
              obj10[2] = function action() {
                let obj = { action: "REPORT", analyticsLocations };
                trackUserProfileAction(obj);
                user(channel[39]).alertUserReported();
                const obj2 = user(channel[39]);
                obj = { reported_user_id: id };
                displayProfile(channel[40]).track(newestAnalyticsLocation.TNS_USER_REPORT_SUBMITTED, obj);
              };
              items6.push(obj10);
            }
            tmpResult5 = tmp(tmp2[38]);
          }
          if (tmp8) {
            const obj11 = { label: null, action: null };
            const intl11 = tmp(tmp2[26]).intl;
            obj11[0] = intl11.string(tmp(tmp2[26]).t.Sd8Ixw);
            obj11[1] = function action() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations });
              const result = user(channel[11]).showGuildInviteActionSheet(id, newestAnalyticsLocation);
            };
            items5.push(obj11);
          }
        }
      }
      if (relationshipType !== userIsInCall.BLOCKED) {
        const obj12 = { label: null, action: null };
        const intl7 = tmp(tmp2[26]).intl;
        obj12[0] = intl7.string(tmp(tmp2[26]).t.ytCpKs);
        obj12[1] = function action() {
          let obj = { action: "IGNORE", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = displayProfile(channel[29]);
          const tmp2 = channel;
          const tmp3 = user;
          obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj[1] = id;
          obj[2] = enabled;
          obj[3] = tmp3(tmp2[24]).ImpressionNames.IGNORE_USER_CONFIRMATION;
          obj2.openLazy(user(channel[32])(channel[34], channel.paths), guildId1, obj, "stack");
        };
        items6.push(obj12);
      }
    } else {
      let intl5 = tmp(tmp2[26]).intl;
      const string = intl5.string;
      let t = tmp(tmp2[26]).t;
      if (tmp6) {
        let stringResult = string(t["8pOYUE"]);
      } else {
        stringResult = string(t.BGYkaH);
      }
      const obj13 = { label: null, action: null };
      obj13[0] = stringResult;
      obj13[1] = function action() {
        let obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
        trackUserProfileAction(obj);
        obj = { userId: id, showUserProfile: closure_14 };
        displayProfile(channel[30]).pushLazy(user(channel[32])(channel[31], channel.paths), obj);
        const obj2 = displayProfile(channel[30]);
        displayProfile(channel[29]).hideActionSheet();
      };
      t = items5.push(obj13);
    }
  }
  if (!canRing) {
    const DeveloperMode = tmp(tmp2[43]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp49 = setting;
    if (setting) {
      tmp49 = tidaWebformEnabled;
    }
    if (!tmp49) {
      const obj14 = { label: null, action: null };
      const intl14 = tmp(tmp2[26]).intl;
      obj14[0] = intl14.string(tmp(tmp2[26]).t.y5MwJy);
      obj14[1] = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = user(channel[44]);
        obj2.copy(displayProfile(channel[45]).getUserTag(user, { decoration: "never", identifiable: "always" }));
        const obj3 = displayProfile(channel[45]);
        const result = user(channel[46]).presentUsernameCopied();
      };
      items5.push(obj14);
    }
    if (setting) {
      const push2 = items5.push;
      const obj15 = { label: null, action: null };
      const intl15 = tmp(tmp2[26]).intl;
      const string3 = intl15.string;
      const t3 = tmp(tmp2[26]).t;
      if (tidaWebformEnabled) {
        obj15[0] = string3(t3.QvQeLv);
        obj15[1] = function action() {
          const items = [];
          let obj = { label: null, onPress: null };
          const intl = user(channel[26]).intl;
          obj[0] = intl.string(user(channel[26]).t.y5MwJy);
          obj[1] = function onPress() {
            callback({ action: "COPY_USERNAME", analyticsLocations: handleConnectionOpen });
            const obj = { action: "COPY_USERNAME", analyticsLocations: handleConnectionOpen };
            const obj2 = bannerURL(outer1_2[44]);
            obj2.copy(outer1_1(outer1_2[45]).getUserTag(bannerURL, { decoration: "never", identifiable: "always" }));
            const obj3 = outer1_1(outer1_2[45]);
            const result = bannerURL(outer1_2[46]).presentUsernameCopied();
          };
          items.push(obj);
          obj = { label: null, onPress: null };
          const intl2 = user(channel[26]).intl;
          obj[0] = intl2.string(user(channel[26]).t["/AXYnE"]);
          obj[1] = function onPress() {
            callback({ action: "COPY_USER_ID", analyticsLocations: handleConnectionOpen });
            bannerURL(outer1_2[44]).copy(closure_15);
            const obj = { action: "COPY_USER_ID", analyticsLocations: handleConnectionOpen };
            const obj2 = bannerURL(outer1_2[44]);
            bannerURL(outer1_2[46]).presentIdCopied();
          };
          items.push(obj);
          let obj2 = bannerURL;
          let hasAvatarForGuildResult = null != bannerURL.avatar;
          if (!hasAvatarForGuildResult) {
            let guildId;
            if (displayProfile != null) {
              guildId = displayProfile.guildId;
            }
            hasAvatarForGuildResult = obj2.hasAvatarForGuild(guildId);
          }
          if (hasAvatarForGuildResult) {
            obj = { label: null, onPress: null };
            const intl3 = tmp(tmp2[26]).intl;
            obj[0] = intl3.string(tmp(tmp2[26]).t.gERDvM);
            obj[1] = function onPress() {
              callback({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations: handleConnectionOpen });
              let guildId;
              if (guildId != null) {
                guildId = guildId.guildId;
              }
              const avatarURL = bannerURL.getAvatarURL(guildId, outer1_10, true);
              if (null != avatarURL) {
                bannerURL(outer1_2[44]).copy(avatarURL);
                const obj2 = bannerURL(outer1_2[44]);
                bannerURL(outer1_2[46]).presentLinkCopied();
                const obj3 = bannerURL(outer1_2[46]);
              }
            };
            items.push(obj);
          }
          let obj4 = displayProfile;
          if (null != displayProfile) {
            const obj1 = { canAnimate: true, size: null };
            obj1[1] = guildId;
            bannerURL = obj4.getBannerURL(obj1);
            if (null != bannerURL) {
              obj2 = { label: null, onPress: null };
              const intl4 = tmp(tmp2[26]).intl;
              obj2[0] = intl4.string(tmp(tmp2[26]).t.hsNv0R);
              obj2[1] = function onPress() {
                outer1_7({ action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: outer1_8 });
                user(channel[44]).copy(bannerURL);
                const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: outer1_8 };
                const obj2 = user(channel[44]);
                user(channel[46]).presentLinkCopied();
              };
              items.push(obj2);
            }
          }
          let obj3 = { options: items, key: "copy-info", header: null, stackingBehavior: "stack", hasIcons: false };
          obj4 = { title: null };
          const intl5 = tmp(tmp2[26]).intl;
          obj4[0] = intl5.string(user(channel[26]).t.QvQeLv);
          obj3[2] = obj4;
          let result = user(channel[47]).showSimpleActionSheet(obj3);
        };
        push2(obj15);
      } else {
        obj15[0] = string3(t3["/AXYnE"]);
        obj15[1] = function action() {
          trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
          user(channel[44]).copy(id);
          const obj = { action: "COPY_USER_ID", analyticsLocations };
          const obj2 = user(channel[44]);
          user(channel[46]).presentIdCopied();
        };
        push2(obj15);
      }
    }
    let hasItem1 = null != channel && null != selectedChannel;
    if (hasItem1) {
      const TEXTUAL = canRing.TEXTUAL;
      hasItem1 = TEXTUAL.has(selectedChannel.type);
    }
    if (hasItem1) {
      const obj16 = { label: null, action: null };
      const intl16 = tmp(tmp2[26]).intl;
      obj16[0] = intl16.string(tmp(tmp2[26]).t.PHjkRE);
      obj16[1] = function action() {
        return displayProfile(channel[48])({ userId: id, selectedChannel, showUserProfile: closure_14, analyticsLocations });
      };
      items5.push(obj16);
    }
    if (0 !== items5.length) {
      const obj17 = { value: null, children: null };
      obj17[0] = analyticsLocations;
      const obj18 = { items: null, children: null };
      const items7 = [items5, items6];
      obj18[0] = items7;
      obj18[1] = function children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = user(channel[26]).intl;
        obj.accessibilityLabel = intl.string(user(channel[26]).t["+zofAD"]);
        obj = { size: "sm", color: null };
        obj[1] = displayProfile(channel[52]).colors.WHITE;
        obj.icon = callback(user(channel[51]).MoreHorizontalIcon, obj);
        return callback(user(channel[50]).IconButton, obj);
      };
      obj17[1] = jsx(tmp(tmp2[49]).ContextMenu, { items: null, children: null });
      let tmp56 = jsx(tmp(tmp2[15]).AnalyticsLocationProvider, { value: null, children: null });
    } else {
      tmp56 = null;
    }
    return tmp56;
  } else {
    const intl13 = tmp(tmp2[26]).intl;
    const string2 = intl13.string;
    let t2 = tmp(tmp2[26]).t;
    if (userIsInCall) {
      let string2Result = string2(t2.ygslb0);
    } else {
      string2Result = string2(t2.bHa9kN);
    }
    const obj19 = { label: null, action: null };
    obj19[0] = string2Result;
    obj19[1] = function action() {
      let str = "RING";
      if (userIsInCall) {
        str = "STOP_RINGING";
      }
      trackUserProfileAction({ action: str, analyticsLocations });
      const obj2 = displayProfile(channel[41]);
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
          displayProfile(channel[29]).hideActionSheet();
          const obj3 = displayProfile(channel[29]);
          user(channel[42]).openChannelCallModal(selectedVoiceChannel);
          const obj4 = user(channel[42]);
        }
      }
    };
    t2 = items5.push(obj19);
  }
};