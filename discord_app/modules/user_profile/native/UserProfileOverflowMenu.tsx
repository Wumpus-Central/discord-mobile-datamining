// discord_app/modules/user_profile/native/UserProfileOverflowMenu.tsx
import module_4490 from "module_4490";
import apexExperiment from "apexExperiment";
import { View } from "QUICK_SWITCHER";
import getParticipants from "getParticipants";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import jsxProd from "useShopThisLookMarketing";

let c10;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
let unpackModuleId;
const require = arg1;
({ AnalyticEvents: c10, AVATAR_MAX_SIZE: unpackModuleId, ChannelTypesSets: closure_12, NOOP: map1, RelationshipTypes: closure_14 } = ME);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_16, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_17 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  let arr3;
  let arr4;
  let currentUser;
  let displayProfile;
  let isIgnored;
  let isVisible;
  let markAsDismissed;
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
  let constants;
  let id;
  let guildId1;
  let tmp2 = channel;
  let obj = user(channel[11]);
  let items = [analyticsLocations];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ relationshipType: analyticsLocations.getRelationshipType(user.id), isIgnored: analyticsLocations.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj1 = user(channel[11]);
  let items1 = [newestAnalyticsLocation, trackUserProfileAction];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => {
    let getChannel;
    let getChannel2;
    ({ getChannel, getChannel: getChannel2 } = trackUserProfileAction);
    return { selectedChannel: getChannel(newestAnalyticsLocation.getChannelId()), selectedVoiceChannelId: newestAnalyticsLocation.getVoiceChannelId(), selectedVoiceChannel: getChannel2(newestAnalyticsLocation.getVoiceChannelId()) };
  });
  selectedChannel = stateFromStoresObject1.selectedChannel;
  selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  selectedVoiceChannel = stateFromStoresObject1.selectedVoiceChannel;
  let obj2 = user(channel[12]);
  [arr3, arr4] = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  const tmp5 = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  let tmp8 = displayProfile(channel[13])(user.id);
  if (tmp8) {
    tmp8 = arr2.length + arr3.length > 0;
  }
  let tmpResult = tmp(tmp2[14]);
  let result = tmpResult.isIarUserReportingEnabled("User Profile Options - Mobile");
  tmpResult = tmp(tmp2[15]);
  const userProfileAnalyticsContext = tmpResult.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let tmp7Result = tmp7(tmp2[16]);
  const tmp7ResultResult = tmp7Result(displayProfile(tmp2[17]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  tmp7Result = tmp7(tmp2[18]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = tmp7Result(user.id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmp6 = null != analyticsLocations.getNickname(user.id);
  let isShopThisLookMobileEnabled = user(tmp2[19]).useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult1 = user(tmp2[19]);
  let obj7 = selectedVoiceChannelId;
  const equippedCollectibleSkuIds = user(tmp2[20]).useEquippedCollectibleSkuIds(user.id, guildId);
  const ref = selectedVoiceChannelId.useRef(null);
  const tmpResult2 = user(tmp2[20]);
  const shopThisLookMarketing = user(tmp2[21]).useShopThisLookMarketing(user.id, guildId, isShopThisLookMobileEnabled);
  const items2 = [user.id, guildId];
  ({ isVisible, markAsDismissed } = shopThisLookMarketing);
  const callback = selectedVoiceChannelId.useCallback(() => {
    let obj = user(channel[22]);
    obj = { userId: user.id, guildId };
    const result = obj.openShopThisLookActionSheet(obj);
  }, items2);
  const tmpResult3 = user(tmp2[21]);
  canRing = user(tmp2[23]).useCanRing(user, "UserProfileOverflowMenu", selectedVoiceChannelId);
  const tmpResult4 = user(tmp2[23]);
  let guild_id1;
  if (selectedVoiceChannel != null) {
    guild_id1 = selectedVoiceChannel.guild_id;
  }
  enabled = displayProfile(tmp2[24]).useExperiment({ guildId: guild_id1, location: "UserProfileOverflowMenu" }).enabled;
  const tmp7Result1 = displayProfile(tmp2[24]);
  const tidaWebformEnabled = displayProfile(tmp2[25]).useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const tmp7Result2 = displayProfile(tmp2[25]);
  const items3 = [context];
  const stateFromStoresObject2 = user(tmp2[11]).useStateFromStoresObject(items3, () => {
    let tmp = canRing;
    if (canRing) {
      tmp = null != selectedVoiceChannelId;
    }
    let participant = null;
    if (tmp) {
      participant = context.getParticipant(selectedVoiceChannelId, user.id);
    }
    const obj = { userIsInCall: null != participant, isUserRinging: null };
    let ringing = null != participant;
    if (ringing) {
      ringing = participant.type === id.USER;
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
  const tmpResult5 = user(tmp2[11]);
  obj[0] = user(tmp2[27]).ImpressionTypes.MENU;
  obj[1] = user(tmp2[27]).ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
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
  const items4 = [user.id];
  displayProfile(tmp2[26])(obj, obj1, items4);
  const items5 = [user.id, , , ];
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  items5[1] = id;
  items5[2] = context;
  items5[3] = analyticsLocations;
  constants = obj7.useCallback((showGuildProfile) => {
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
    displayProfile(channel[28])(obj);
  }, items5);
  id = user.id;
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  if (isShopThisLookMobileEnabled) {
    isShopThisLookMobileEnabled = equippedCollectibleSkuIds.length > 0;
  }
  const items6 = [];
  if (isShopThisLookMobileEnabled) {
    obj2 = { label: null, action: null };
    let intl = tmp(tmp2[29]).intl;
    obj2[0] = intl.string(tmp(tmp2[29]).t.xNdRDO);
    obj2[1] = function action() {
      let obj = user(channel[22]);
      obj = { userId: id, guildId };
      const result = obj.openShopThisLookActionSheet(obj);
    };
    items6.push(obj2);
  }
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  if (null != guildId2) {
    let obj3 = { label: null, action: null };
    let intl2 = tmp(tmp2[29]).intl;
    obj3[0] = intl2.string(tmp(tmp2[29]).t.GISTta);
    obj3[1] = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      callback(false);
    };
    items6.push(obj3);
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
    let obj4 = { label: null, action: null };
    let intl3 = tmp(tmp2[29]).intl;
    obj4[0] = intl3.string(tmp(tmp2[29]).t.DisZzB);
    obj4[1] = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations });
      callback();
    };
    items6.push(obj4);
  }
  const items7 = [];
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
      const obj5 = { label: null, variant: "destructive", action: null };
      let intl4 = tmp(tmp2[29]).intl;
      obj5[0] = intl4.string(tmp(tmp2[29]).t["n5zMI+"]);
      obj5[2] = function action() {
        displayProfile(channel[30]).removeRecipient(channel.id, id);
        const obj = displayProfile(channel[30]);
        displayProfile(channel[31]).hideActionSheet();
      };
      arr2 = items7.push(obj5);
    }
    if (relationshipType !== constants.FRIEND) {
      if (isIgnored) {
        if (!tmp41) {
          const obj6 = { label: null, action: null };
          const intl6 = tmp(tmp2[29]).intl;
          obj6[0] = intl6.string(tmp(tmp2[29]).t["8wXU9B"]);
          obj6[1] = function action() {
            trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
            let id;
            if (channel != null) {
              id = channel.id;
            }
            displayProfile(channel[35]).unignoreUser(id, newestAnalyticsLocation, id);
            callback();
          };
          arr3 = items7.push(obj6);
        }
        const push = items7.push;
        if (tmp41) {
          obj7 = { label: null, action: null };
          const intl12 = tmp(tmp2[29]).intl;
          obj7[0] = intl12.string(tmp(tmp2[29]).t.XyHpKH);
          obj7[1] = function action() {
            let obj = { action: "UNBLOCK", analyticsLocations };
            trackUserProfileAction(obj);
            obj = { location: newestAnalyticsLocation };
            displayProfile(channel[35]).unblockUser(id, obj);
            callback();
            const obj2 = displayProfile(channel[35]);
            const tmp2 = id;
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            const result = displayProfile(channel[37]).showUnblockSuccessToast(tmp2, id);
          };
          push(obj7);
        } else {
          const obj8 = { label: null, variant: "destructive", action: null };
          const intl8 = tmp(tmp2[29]).intl;
          obj8[0] = intl8.string(tmp(tmp2[29]).t.l4Emac);
          obj8[2] = function action() {
            let obj = displayProfile(channel[31]);
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
              const result = outer1_1(outer1_2[37]).showBlockSuccessToast(closure_15, id);
            };
            obj[3] = user(channel[27]).ImpressionNames.BLOCK_USER_CONFIRMATION;
            obj.openLazy(user(channel[34])(channel[38], channel.paths), guildId1, obj, "stack");
          };
          push(obj8);
          if (result) {
            const obj9 = { label: null, variant: "destructive", action: null };
            const intl10 = tmp(tmp2[29]).intl;
            obj9[0] = intl10.string(tmp(tmp2[29]).t.wqHXNt);
            obj9[2] = function action() {
              trackUserProfileAction({ action: "REPORT", analyticsLocations });
              let tmp3;
              if ("@me" !== guildId1) {
                if (null !== tmp2) {
                  tmp3 = tmp2;
                }
              }
              const result = user(channel[39]).showReportModalForUser(user, tmp3);
              const obj = { action: "REPORT", analyticsLocations };
              const obj2 = user(channel[39]);
              displayProfile(channel[31]).hideActionSheet();
            };
            items7.push(obj9);
          } else {
            if (tmpResult6.isAndroid()) {
              const obj10 = { label: null, variant: "destructive", action: null };
              const intl9 = tmp(tmp2[29]).intl;
              obj10[0] = intl9.string(tmp(tmp2[29]).t.TbHyMG);
              obj10[2] = function action() {
                let obj = { action: "REPORT", analyticsLocations };
                trackUserProfileAction(obj);
                user(channel[41]).alertUserReported();
                const obj2 = user(channel[41]);
                obj = { reported_user_id: id };
                displayProfile(channel[42]).track(guildId.TNS_USER_REPORT_SUBMITTED, obj);
              };
              items7.push(obj10);
            }
            tmpResult6 = tmp(tmp2[40]);
          }
          if (tmp8) {
            const obj11 = { label: null, action: null };
            const intl11 = tmp(tmp2[29]).intl;
            obj11[0] = intl11.string(tmp(tmp2[29]).t.Sd8Ixw);
            obj11[1] = function action() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations });
              const result = user(channel[12]).showGuildInviteActionSheet(id, newestAnalyticsLocation);
            };
            items6.push(obj11);
          }
        }
      }
      if (relationshipType !== constants.BLOCKED) {
        const obj12 = { label: null, action: null };
        const intl7 = tmp(tmp2[29]).intl;
        obj12[0] = intl7.string(tmp(tmp2[29]).t.ytCpKs);
        obj12[1] = function action() {
          let obj = { action: "IGNORE", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = displayProfile(channel[31]);
          const tmp2 = channel;
          const tmp3 = user;
          obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj[1] = id;
          obj[2] = userIsInCall;
          obj[3] = tmp3(tmp2[27]).ImpressionNames.IGNORE_USER_CONFIRMATION;
          obj2.openLazy(user(channel[34])(channel[36], channel.paths), outer1_17, obj, "stack");
        };
        items7.push(obj12);
      }
    } else {
      let intl5 = tmp(tmp2[29]).intl;
      const string = intl5.string;
      let t = tmp(tmp2[29]).t;
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
        displayProfile(channel[32]).pushLazy(user(channel[34])(channel[33], channel.paths), obj);
        const obj2 = displayProfile(channel[32]);
        displayProfile(channel[31]).hideActionSheet();
      };
      t = items6.push(obj13);
    }
  }
  if (!canRing) {
    const DeveloperMode = tmp(tmp2[45]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp51 = setting;
    if (setting) {
      tmp51 = tidaWebformEnabled;
    }
    if (!tmp51) {
      const obj14 = { label: null, action: null };
      const intl14 = tmp(tmp2[29]).intl;
      obj14[0] = intl14.string(tmp(tmp2[29]).t.y5MwJy);
      obj14[1] = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = user(channel[46]);
        obj2.copy(displayProfile(channel[47]).getUserTag(user, { decoration: "never", identifiable: "always" }));
        const obj3 = displayProfile(channel[47]);
        const result = user(channel[48]).presentUsernameCopied();
      };
      items6.push(obj14);
    }
    if (setting) {
      const push2 = items6.push;
      const obj15 = { label: null, action: null };
      const intl15 = tmp(tmp2[29]).intl;
      const string3 = intl15.string;
      const t3 = tmp(tmp2[29]).t;
      if (tidaWebformEnabled) {
        obj15[0] = string3(t3.QvQeLv);
        obj15[1] = function action() {
          const items = [];
          let obj = { label: null, onPress: null };
          const intl = user(channel[29]).intl;
          obj[0] = intl.string(user(channel[29]).t.y5MwJy);
          obj[1] = function onPress() {
            callback({ action: "COPY_USERNAME", analyticsLocations: upsertRelationship });
            const obj = { action: "COPY_USERNAME", analyticsLocations: upsertRelationship };
            const obj2 = bannerURL(outer1_2[46]);
            obj2.copy(outer1_1(outer1_2[47]).getUserTag(bannerURL, { decoration: "never", identifiable: "always" }));
            const obj3 = outer1_1(outer1_2[47]);
            const result = bannerURL(outer1_2[48]).presentUsernameCopied();
          };
          items.push(obj);
          obj = { label: null, onPress: null };
          const intl2 = user(channel[29]).intl;
          obj[0] = intl2.string(user(channel[29]).t["/AXYnE"]);
          obj[1] = function onPress() {
            callback({ action: "COPY_USER_ID", analyticsLocations: upsertRelationship });
            bannerURL(outer1_2[46]).copy(closure_15);
            const obj = { action: "COPY_USER_ID", analyticsLocations: upsertRelationship };
            const obj2 = bannerURL(outer1_2[46]);
            bannerURL(outer1_2[48]).presentIdCopied();
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
            const intl3 = tmp(tmp2[29]).intl;
            obj[0] = intl3.string(tmp(tmp2[29]).t.gERDvM);
            obj[1] = function onPress() {
              callback({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations: upsertRelationship });
              let guildId;
              if (guildId != null) {
                guildId = guildId.guildId;
              }
              const avatarURL = bannerURL.getAvatarURL(guildId, outer1_11, true);
              if (null != avatarURL) {
                bannerURL(outer1_2[46]).copy(avatarURL);
                const obj2 = bannerURL(outer1_2[46]);
                bannerURL(outer1_2[48]).presentLinkCopied();
                const obj3 = bannerURL(outer1_2[48]);
              }
            };
            items.push(obj);
          }
          let obj4 = displayProfile;
          if (null != displayProfile) {
            const obj1 = { canAnimate: true, size: null };
            obj1[1] = canRing;
            bannerURL = obj4.getBannerURL(obj1);
            if (null != bannerURL) {
              obj2 = { label: null, onPress: null };
              const intl4 = tmp(tmp2[29]).intl;
              obj2[0] = intl4.string(tmp(tmp2[29]).t.hsNv0R);
              obj2[1] = function onPress() {
                outer1_7({ action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: outer1_8 });
                user(channel[46]).copy(bannerURL);
                const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: outer1_8 };
                const obj2 = user(channel[46]);
                user(channel[48]).presentLinkCopied();
              };
              items.push(obj2);
            }
          }
          let obj3 = { options: items, key: "copy-info", header: null, stackingBehavior: "stack", hasIcons: false };
          obj4 = { title: null };
          const intl5 = tmp(tmp2[29]).intl;
          obj4[0] = intl5.string(user(channel[29]).t.QvQeLv);
          obj3[2] = obj4;
          let result = user(channel[49]).showSimpleActionSheet(obj3);
        };
        push2(obj15);
      } else {
        obj15[0] = string3(t3["/AXYnE"]);
        obj15[1] = function action() {
          trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
          user(channel[46]).copy(id);
          const obj = { action: "COPY_USER_ID", analyticsLocations };
          const obj2 = user(channel[46]);
          user(channel[48]).presentIdCopied();
        };
        push2(obj15);
      }
    }
    let hasItem1 = null != channel && null != selectedChannel;
    if (hasItem1) {
      const TEXTUAL = enabled.TEXTUAL;
      hasItem1 = TEXTUAL.has(selectedChannel.type);
    }
    if (hasItem1) {
      const obj16 = { label: null, action: null };
      const intl16 = tmp(tmp2[29]).intl;
      obj16[0] = intl16.string(tmp(tmp2[29]).t.PHjkRE);
      obj16[1] = function action() {
        return displayProfile(channel[50])({ userId: id, selectedChannel, showUserProfile: closure_14, analyticsLocations });
      };
      items6.push(obj16);
    }
    if (0 !== items6.length) {
      const obj17 = { value: null, children: null };
      obj17[0] = analyticsLocations;
      const obj18 = { ref: null, children: null };
      obj18[0] = ref;
      const obj19 = { items: null, children: null };
      const items8 = [items6, items7];
      obj19[0] = items8;
      obj19[1] = function children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = user(channel[29]).intl;
        obj.accessibilityLabel = intl.string(user(channel[29]).t["+zofAD"]);
        obj = { size: "sm", color: null };
        obj[1] = displayProfile(channel[54]).colors.WHITE;
        obj.icon = callback2(user(channel[53]).MoreHorizontalIcon, obj);
        return callback2(user(channel[52]).IconButton, obj);
      };
      obj18[1] = callback(tmp(tmp2[51]).ContextMenu, obj19);
      const items9 = [callback(selectedVoiceChannel, obj18), ];
      const obj20 = { targetRef: null, visible: null, onDismiss: null, onPress: null };
      obj20[0] = ref;
      obj20[1] = isVisible;
      obj20[2] = markAsDismissed;
      obj20[3] = callback;
      items9[1] = callback(tmp7(tmp2[55]), obj20);
      obj17[1] = items9;
      let tmp58 = callback2(tmp(tmp2[16]).AnalyticsLocationProvider, obj17);
    } else {
      tmp58 = null;
    }
    return tmp58;
  } else {
    const intl13 = tmp(tmp2[29]).intl;
    const string2 = intl13.string;
    let t2 = tmp(tmp2[29]).t;
    if (userIsInCall) {
      let string2Result = string2(t2.ygslb0);
    } else {
      string2Result = string2(t2.bHa9kN);
    }
    const obj21 = { label: null, action: null };
    obj21[0] = string2Result;
    obj21[1] = function action() {
      let str = "RING";
      if (userIsInCall) {
        str = "STOP_RINGING";
      }
      trackUserProfileAction({ action: str, analyticsLocations });
      const obj2 = displayProfile(channel[43]);
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
          displayProfile(channel[31]).hideActionSheet();
          const obj3 = displayProfile(channel[31]);
          user(channel[44]).openChannelCallModal(selectedVoiceChannel);
          const obj4 = user(channel[44]);
        }
      }
    };
    t2 = items6.push(obj21);
  }
};