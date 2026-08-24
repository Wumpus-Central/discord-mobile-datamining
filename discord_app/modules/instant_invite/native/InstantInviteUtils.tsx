// === Module 8955: showInstantInviteActionSheet ===

// Module 8955 (showInstantInviteActionSheet)
import _modDef38 from "module_38" /* 38 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import readSnowflake from "readSnowflake" /* 4364 */;
import sendSMS from "sendSMS" /* 4652 */;
import _copy from "_copy" /* 7205 */;
import _findPlayingActivity from "_findPlayingActivity" /* 7525 */;
import getInviteURLDefault from "getInviteURL" /* 7544 */;
import get_label from "get label" /* 8958 */;
import _modDef8962 from "module_8962" /* 8962 */;
import openInstantInviteActionSheetDefault from "openInstantInviteActionSheet" /* 8963 */;
import closure_3 from "handleGuildTemplateResolveSuccess" /* 7467 */;
import { ChannelRecordBase } from "createChannelRecord" /* 1395 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "updateWithLatestInvite" /* 8956 */;
import closure_7 from "comparator" /* 1981 */;
import closure_8 from "updateInvite" /* 4363 */;
import closure_9 from "sortActivity" /* 4564 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import closure_11 from "getDisplayedInviteCode" /* 8960 */;
import { InviteTargetTypes } from "InviteSendStates" /* 4375 */;
import { IOS_COPY_TO_PASTEBOARD } from "SHARE_APPS_KEY" /* 8961 */;
import ME from "ME" /* 676 */;

require = arg1;
function showInstantInviteActionSheet(channel, source) {
  let obj = expandEventPropertiesDefault;
  source = undefined;
  if (source != null) {
    source = source.source;
  }
  obj.track(constants.OPEN_POPOUT, { type: "Instant Invite", source });
  let stream;
  if (source != null) {
    stream = source.stream;
  }
  obj = { isActionSheet: true, location: "IOS Instant Invite Action Sheet Mount" };
  if (null != stream) {
    stream = source.stream;
    obj.targetType = InviteTargetTypes.STREAM;
    obj.targetUserId = stream.ownerId;
    const streamerApplication = _findPlayingActivity.getStreamerApplication(stream, closure_9);
    let tmpResult = tmp(698);
    obj = { type: "Send Stream Invite", location: null, other_user_id: null, application_id: null, application_name: null, game_id: null };
    obj[1] = obj.location;
    obj[2] = stream.ownerId;
    let id;
    if (streamerApplication != null) {
      id = streamerApplication.id;
    }
    obj[3] = id;
    let name;
    if (streamerApplication != null) {
      name = streamerApplication.name;
    }
    obj[4] = name;
    let id1;
    if (streamerApplication != null) {
      id1 = streamerApplication.id;
    }
    obj[5] = id1;
    tmpResult.track(constants.OPEN_MODAL, obj);
    const obj3 = _findPlayingActivity;
  } else {
    let targetApplicationId;
    if (source != null) {
      targetApplicationId = source.targetApplicationId;
    }
    if (null != targetApplicationId) {
      obj.targetType = InviteTargetTypes.EMBEDDED_APPLICATION;
      obj.targetApplicationId = source.targetApplicationId;
    }
  }
  let createInvite;
  if (source != null) {
    createInvite = source.createInvite;
  }
  let tmp17 = false !== createInvite;
  if (tmp17) {
    let code;
    if (source != null) {
      code = source.code;
    }
    tmp17 = null == code;
  }
  if (tmp17) {
    tmpResult = tmp(8962);
    tmpResult.init(channel.getGuildId(), channel.id, obj);
  }
  obj1 = { channel, source: null, guildScheduledEventId: null, targetApplicationId: null, code: null, vanityURLCode: null, stackingBehavior: null };
  let source1;
  if (source != null) {
    source1 = source.source;
  }
  obj1[1] = source1;
  let prop;
  if (source != null) {
    prop = source.guildScheduledEventId;
  }
  obj1[2] = prop;
  let targetApplicationId1;
  if (source != null) {
    targetApplicationId1 = source.targetApplicationId;
  }
  obj1[3] = targetApplicationId1;
  let code1;
  if (source != null) {
    code1 = source.code;
  }
  obj1[4] = code1;
  let stackingBehavior;
  if (source != null) {
    stackingBehavior = source.stackingBehavior;
  }
  obj1[6] = stackingBehavior;
  openInstantInviteActionSheetDefault(obj1);
}
function trackOptionClicked(code, channel, COPY, _location) {
  let obj = readSnowflake;
  const invite = store3.getInvite(obj.parseExtraDataFromInviteKey(code).baseCode);
  obj = { invite_type: COPY, guild_id: null, channel_id: null, invite_code: null, invite_channel_type: null, invite_inviter_id: null, location: null, application_id: null };
  if (channel instanceof ChannelRecordBase) {
    let guild_id = channel.guild_id;
  } else {
    let id;
    if (channel != null) {
      id = channel.id;
    }
    channel = store.getChannel(id);
    if (channel != null) {
      guild_id = channel.getGuildId();
    }
  }
  obj[1] = guild_id;
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  obj[2] = id1;
  const obj2 = expandEventPropertiesDefault;
  const tmp = require;
  obj[3] = readSnowflake.parseInviteCodeFromInviteKey(code);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  obj[4] = type;
  const currentUser = authStore.getCurrentUser();
  let id2;
  if (currentUser != null) {
    id2 = currentUser.id;
  }
  obj[5] = id2;
  obj[6] = _location;
  let id3;
  if (invite != null) {
    const target_application = invite.target_application;
    if (target_application != null) {
      id3 = target_application.id;
    }
  }
  obj[7] = id3;
  obj2.track(constants.INSTANT_INVITE_OPTION_CLICKED, obj);
}
({ AnalyticEvents: closure_14, InviteOptionsType: closure_15, Permissions: closure_16 } = ME);
let result = require("set").fileFinishedImporting("modules/instant_invite/native/InstantInviteUtils.tsx");

export const showInstantInviteActionSheetForChannel = function showInstantInviteActionSheetForChannel(channelId) {
  const channel = store.getChannel(channelId);
  if (null != channel) {
    showInstantInviteActionSheet(channel);
  }
};
export { showInstantInviteActionSheet };
export const showVanityUrlInviteActionSheet = function showVanityUrlInviteActionSheet(guild, channel, GUILD_SCHEDULED_EVENT, guildScheduledEventId) {
  let obj = expandEventPropertiesDefault;
  obj = { type: "Vanity URL Invite", source: GUILD_SCHEDULED_EVENT };
  obj.track(constants.OPEN_POPOUT, obj);
  _modDef8962.init(guild.id, channel.id, { skipCreateInvite: true });
  obj = { vanityURLCode: guild.vanityURLCode, channel, source: GUILD_SCHEDULED_EVENT, guildScheduledEventId: null, stackingBehavior: null };
  let prop;
  const obj3 = _modDef8962;
  if (guildScheduledEventId != null) {
    prop = guildScheduledEventId.guildScheduledEventId;
  }
  obj[3] = prop;
  let stackingBehavior;
  if (guildScheduledEventId != null) {
    stackingBehavior = guildScheduledEventId.stackingBehavior;
  }
  obj[4] = stackingBehavior;
  openInstantInviteActionSheetDefault(obj);
};
export { trackOptionClicked };
export function getShareMessage(closure_10) {
  return closure_10;
}
export const handleOpenShareSheet = function handleOpenShareSheet(code, channel, intl, ADD_FRIENDS_WIDGET) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = readSnowflake.parseExtraDataFromInviteKey(code);
    const invite = store3.getInvite(result.baseCode);
    const obj6 = readSnowflake;
    const tmp21 = require;
    const tmp26 = importDefault;
    if (channel instanceof ChannelRecordBase) {
      let guild_id = channel.guild_id;
    } else {
      let id;
      if (channel != null) {
        id = channel.id;
      }
      channel = store.getChannel(id);
      if (channel != null) {
        guild_id = channel.getGuildId();
      }
    }
    let obj = { guild_id: null, channel_id: null, invite_code: null, invite_channel_type: null, invite_inviter_id: null, invite_guild_scheduled_event_id: null, location: null, application_id: null };
    obj[0] = guild_id;
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    obj[1] = id1;
    obj[2] = result.baseCode;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[3] = type;
    const currentUser = authStore.getCurrentUser();
    let id2;
    if (currentUser != null) {
      id2 = currentUser.id;
    }
    obj[4] = id2;
    obj[5] = result.guildScheduledEventId;
    obj[6] = ADD_FRIENDS_WIDGET;
    let id3;
    if (invite != null) {
      const target_application = invite.target_application;
      if (target_application != null) {
        id3 = target_application.id;
      }
    }
    obj[7] = id3;
    expandEventPropertiesDefault.track(constants.INSTANT_INVITE_SHARED, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.SHARE, ADD_FRIENDS_WIDGET);
    }
    const obj7 = expandEventPropertiesDefault;
    tmp26(4346).hideAllActionSheets();
    const tmp26Result = tmp26(4346);
    obj = { message: null, iOSOnlyShareCallback: null };
    obj[0] = intl;
    obj[1] = function iOSOnlyShareCallback(arg0, arr) {
      let tmp = arg0;
      if (arg0) {
        tmp = null != arr;
      }
      if (tmp) {
        tmp = !arr.includes(closure_13);
      }
      if (tmp) {
        callback(table[19]).presentInviteSent();
        const obj = callback(table[19]);
      }
    };
    tmp21(9104).showShareActionSheet(obj, ADD_FRIENDS_WIDGET);
    const tmp21Result = tmp21(9104);
  }
};
export const handleCopy = function handleCopy(code, channel, GROUP_DM, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = readSnowflake.parseExtraDataFromInviteKey(code);
    const obj4 = readSnowflake;
    const tmp13 = require;
    const tmp17 = getInviteURLDefault(code);
    _copy.copy(tmp17);
    const invite = store3.getInvite(result.baseCode);
    const obj5 = _copy;
    if (channel instanceof ChannelRecordBase) {
      let guild_id = channel.guild_id;
    } else {
      let id;
      if (channel != null) {
        id = channel.id;
      }
      channel = store.getChannel(id);
      if (channel != null) {
        guild_id = channel.getGuildId();
      }
    }
    const obj = { server: null, channel: null, channel_type: null, location: null, code: null, guild_scheduled_event_id: null, application_id: null };
    obj[0] = guild_id;
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    obj[1] = id1;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[2] = type;
    obj[3] = GROUP_DM;
    ({ baseCode: obj2[4], guildScheduledEventId: obj2[5] } = result);
    let id2;
    if (invite != null) {
      const target_application = invite.target_application;
      if (target_application != null) {
        id2 = target_application.id;
      }
    }
    obj[6] = id2;
    expandEventPropertiesDefault.track(constants.COPY_INSTANT_INVITE, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.COPY);
    }
    const obj6 = expandEventPropertiesDefault;
    tmp13(4096).presentLinkCopied();
    const tmp13Result = tmp13(4096);
  }
};
export const handlePressSettings = function handlePressSettings(channel, closure_1, closure_3) {
  closure_0 = channel;
  importDefault = closure_1;
  let str = closure_3;
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  dependencyMap = pendingSettings.getPendingSettings();
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ({ guild_id, id } = channel);
  if (closure_3 == null) {
    str = "Instant Invite Action Sheet";
  }
  _modDef8962.openSettings(guild_id, id, str, () => {
    if (null != closure_1) {
      tmp();
    } else {
      let targetApplicationId;
      if (targetApplicationId != null) {
        targetApplicationId = targetApplicationId.targetApplicationId;
      }
      const obj = { createInvite: false, targetApplicationId: null };
      obj[1] = targetApplicationId;
      closure_1_17(closure_0, obj);
      const tmp2 = closure_1_17;
      const tmp3 = closure_0;
    }
  });
};
export const isAppInstalled = function isAppInstalled(closure_3) {
  return sendSMS.canOpenUrlScheme(closure_3);
};
export const handleOpenInviteActionsheet = function handleOpenInviteActionsheet(guild, id, channels, GUILD_HEADER) {
  let obj = store;
  let channel = store.getChannel(id);
  if (channel == null) {
    channel = store2.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
  }
  _modDef38(null != channel, "Channel cannot be null");
  if (null != guild.vanityURLCode) {
    if ("" !== guild.vanityURLCode) {
      let tmp4Result = tmp4(698);
      obj = { type: "Vanity URL Invite", source: null };
      obj[1] = GUILD_HEADER;
      tmp4Result.track(constants.OPEN_POPOUT, obj);
      tmp4Result = tmp4(8962);
      tmp4Result.init(guild.id, channel.id, { skipCreateInvite: true });
      obj = { vanityURLCode: null, channel: null, source: null, guildScheduledEventId: null, stackingBehavior: null };
      obj[0] = guild.vanityURLCode;
      obj[1] = channel;
      obj[2] = GUILD_HEADER;
      obj[3] = undefined;
      obj[4] = undefined;
      tmp4(8963)(obj);
    }
  }
  obj1 = get_label;
  const inviteChannelId = obj1.getInviteChannelId(channel.id, channels);
  if (null != inviteChannelId) {
    let channel1 = obj.getChannel(inviteChannelId);
    if (channel1 == null) {
      channel1 = store2.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
    }
    tmp4(38)(null != channel1, "Channel cannot be null");
    obj1 = { source: null };
    obj1[0] = GUILD_HEADER;
    showInstantInviteActionSheet(channel1, obj1);
  }
};
export const hasDeferredInvite = function hasDeferredInvite() {
  displayedInviteCode = displayedInviteCode.getDisplayedInviteCode();
  displayedGuildTemplateCode = displayedGuildTemplateCode.getDisplayedGuildTemplateCode();
  let invite = null;
  if (null != displayedInviteCode) {
    invite = store3.getInvite(displayedInviteCode);
  }
  let guildTemplate = null;
  if (null != displayedGuildTemplateCode) {
    guildTemplate = displayedGuildTemplateCode.getGuildTemplate(displayedGuildTemplateCode);
  }
  return null != invite || null != guildTemplate;
};