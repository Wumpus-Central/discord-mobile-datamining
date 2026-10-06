// === Module 9494: instant_invite/InstantInviteUtils ===

// Module 9494 (instant_invite/InstantInviteUtils)
import _modDef38 from "module_38" /* 38 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4878 */;
import DCDSendUtils from "DCDSendUtils" /* 5029 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import Constants2 from "Constants" /* 7239 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7241 */;
import getInviteURLDefault from "getInviteURL" /* 7268 */;
import showShareActionSheet from "showShareActionSheet" /* 8048 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9497 */;
import InstantInviteConstants from "InstantInviteConstants" /* 9499 */;
import CreateInviteModalActionCreatorsDefault from "CreateInviteModalActionCreators" /* 9500 */;
import openInstantInviteActionSheetDefault from "openInstantInviteActionSheet" /* 9501 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6979 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9495 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import InviteStore from "InviteStore" /* 4877 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import UserStore from "UserStore" /* 1377 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8426 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_14;
let closure_15;
let closure_16;
function showInstantInviteActionSheet(channel, source) {
  let code1;
  let id;
  let id1;
  let name;
  let prop;
  let source1;
  let stackingBehavior;
  let targetApplicationId1;
  source = undefined;
  const track = AnalyticsUtilsDefault.track;
  const OPEN_POPOUT = constants.OPEN_POPOUT;
  AnalyticsUtilsDefault;
  if (source != null) {
    source = source.source;
  }
  track(OPEN_POPOUT, { type: "Instant Invite", source });
  let stream1;
  if (source != null) {
    stream1 = source.stream;
  }
  const obj = { isActionSheet: true, location: "IOS Instant Invite Action Sheet Mount" };
  if (null != stream1) {
    const stream = source.stream;
    obj.targetType = InviteTargetTypes.STREAM;
    obj.targetUserId = stream.ownerId;
    const obj2 = StreamerApplicationSelectors;
    const streamerApplication = obj2.getStreamerApplication(stream, PresenceStore);
    const obj3 = { type: "Send Stream Invite", location: obj.location, other_user_id: stream.ownerId, application_id: id, application_name: name, game_id: id1 };
    id = undefined;
    const track2 = AnalyticsUtilsDefault.track;
    const OPEN_MODAL = constants.OPEN_MODAL;
    AnalyticsUtilsDefault;
    if (streamerApplication != null) {
      id = streamerApplication.id;
    }
    name = undefined;
    if (streamerApplication != null) {
      name = streamerApplication.name;
    }
    id1 = undefined;
    if (streamerApplication != null) {
      id1 = streamerApplication.id;
    }
    track2(OPEN_MODAL, obj3);
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
  let tmp19 = false !== createInvite;
  if (tmp19) {
    let code;
    if (source != null) {
      code = source.code;
    }
    tmp19 = null == code;
  }
  if (tmp19) {
    const tmpResult3 = CreateInviteModalActionCreatorsDefault;
    tmpResult3.init(channel.getGuildId(), channel.id, obj);
  }
  const obj4 = { channel, source: source1, guildScheduledEventId: prop, targetApplicationId: targetApplicationId1, code: code1, vanityURLCode: null, stackingBehavior };
  source1 = undefined;
  const tmpResult4 = openInstantInviteActionSheetDefault;
  if (source != null) {
    source1 = source.source;
  }
  prop = undefined;
  if (source != null) {
    prop = source.guildScheduledEventId;
  }
  targetApplicationId1 = undefined;
  if (source != null) {
    targetApplicationId1 = source.targetApplicationId;
  }
  code1 = undefined;
  if (source != null) {
    code1 = source.code;
  }
  stackingBehavior = undefined;
  if (source != null) {
    stackingBehavior = source.stackingBehavior;
  }
  tmpResult4(obj4);
}
function trackOptionClicked(code, channel, COPY, _location) {
  let guild_id;
  let id1;
  let id2;
  let id3;
  let tmpResult;
  let type;
  const obj = InviteCodeUtils;
  const invite = InviteStore.getInvite(obj.parseExtraDataFromInviteKey(code).baseCode);
  const obj2 = { invite_type: COPY, guild_id, channel_id: id1, invite_code: tmpResult.parseInviteCodeFromInviteKey(code), invite_channel_type: type, invite_inviter_id: id2, location: _location, application_id: id3 };
  const track = AnalyticsUtilsDefault.track;
  const INSTANT_INVITE_OPTION_CLICKED = constants.INSTANT_INVITE_OPTION_CLICKED;
  AnalyticsUtilsDefault;
  if (channel instanceof ChannelRecordBase) {
    guild_id = channel.guild_id;
  } else {
    let id;
    const getChannel = ChannelStore.getChannel;
    if (channel != null) {
      id = channel.id;
    }
    channel = getChannel(id);
    if (channel != null) {
      guild_id = channel.getGuildId();
    }
  }
  id1 = undefined;
  if (channel != null) {
    id1 = channel.id;
  }
  type = undefined;
  tmpResult = InviteCodeUtils;
  if (channel != null) {
    type = channel.type;
  }
  const currentUser = UserStore.getCurrentUser();
  id2 = undefined;
  if (currentUser != null) {
    id2 = currentUser.id;
  }
  id3 = undefined;
  if (invite != null) {
    const target_application = invite.target_application;
    if (target_application != null) {
      id3 = target_application.id;
    }
  }
  track(INSTANT_INVITE_OPTION_CLICKED, obj2);
}
const ChannelRecordBase = ChannelRecord.ChannelRecordBase;
const InviteTargetTypes = Constants2.InviteTargetTypes;
const IOS_COPY_TO_PASTEBOARD = InstantInviteConstants.IOS_COPY_TO_PASTEBOARD;
({ AnalyticEvents: closure_14, InviteOptionsType: closure_15, Permissions: closure_16 } = Constants);
let result = size.fileFinishedImporting("modules/instant_invite/native/InstantInviteUtils.tsx");

export const showInstantInviteActionSheetForChannel = function showInstantInviteActionSheetForChannel(channelId) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    showInstantInviteActionSheet(channel);
  }
};
export { showInstantInviteActionSheet };
export const showVanityUrlInviteActionSheet = function showVanityUrlInviteActionSheet(guild, channel, STAGE_CHANNEL, guildScheduledEventId) {
  let prop;
  let stackingBehavior;
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type: "Vanity URL Invite", source: STAGE_CHANNEL };
  obj.track(constants.OPEN_POPOUT, obj2);
  const obj3 = CreateInviteModalActionCreatorsDefault;
  obj3.init(guild.id, channel.id, { skipCreateInvite: true });
  const obj4 = { vanityURLCode: guild.vanityURLCode, channel, source: STAGE_CHANNEL, guildScheduledEventId: prop, stackingBehavior };
  prop = undefined;
  const tmp3 = openInstantInviteActionSheetDefault;
  if (guildScheduledEventId != null) {
    prop = guildScheduledEventId.guildScheduledEventId;
  }
  stackingBehavior = undefined;
  if (guildScheduledEventId != null) {
    stackingBehavior = guildScheduledEventId.stackingBehavior;
  }
  tmp3(obj4);
};
export { trackOptionClicked };
export function getShareMessage(CreateInviteModalStore) {
  return CreateInviteModalStore;
}
export const handleOpenShareSheet = function handleOpenShareSheet(code, channel, shareMessage, source) {
  let id1;
  let id2;
  let id3;
  let type;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = true;
  }
  if (null != code) {
    let guild_id;
    const obj6 = InviteCodeUtils;
    const result = obj6.parseExtraDataFromInviteKey(code);
    const invite = InviteStore.getInvite(result.baseCode);
    const track = AnalyticsUtilsDefault.track;
    const INSTANT_INVITE_SHARED = constants.INSTANT_INVITE_SHARED;
    AnalyticsUtilsDefault;
    if (channel instanceof ChannelRecordBase) {
      guild_id = channel.guild_id;
    } else {
      let id;
      const getChannel = ChannelStore.getChannel;
      if (channel != null) {
        id = channel.id;
      }
      channel = getChannel(id);
      if (channel != null) {
        guild_id = channel.getGuildId();
      }
    }
    let obj = { guild_id, channel_id: id1, invite_code: result.baseCode, invite_channel_type: type, invite_inviter_id: id2, invite_guild_scheduled_event_id: result.guildScheduledEventId, location: source, application_id: id3 };
    id1 = undefined;
    if (channel != null) {
      id1 = channel.id;
    }
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    const currentUser = UserStore.getCurrentUser();
    id2 = undefined;
    if (currentUser != null) {
      id2 = currentUser.id;
    }
    id3 = undefined;
    if (invite != null) {
      const target_application = invite.target_application;
      if (target_application != null) {
        id3 = target_application.id;
      }
    }
    track(INSTANT_INVITE_SHARED, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.SHARE, source);
    }
    const tmp26Result = ActionSheetActionCreatorsDefault;
    tmp26Result.hideAllActionSheets();
    const obj2 = {
      message: shareMessage,
      iOSOnlyShareCallback(arg0, arr) {
          const tmp = arg0 && null != arr && !arr.includes(IOS_COPY_TO_PASTEBOARD);
          if (tmp) {
            const obj = ToastUtils;
            obj.presentInviteSent();
          }
        }
    };
    const tmp21Result = showShareActionSheet;
    tmp21Result.showShareActionSheet(obj2, source);
  }
};
export const handleCopy = function handleCopy(code, channel, GROUP_DM, arg3) {
  let id1;
  let id2;
  let type;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (null != code) {
    let guild_id;
    const obj4 = InviteCodeUtils;
    const result = obj4.parseExtraDataFromInviteKey(code);
    const tmp17 = getInviteURLDefault(code);
    const obj5 = ClipboardUtils;
    obj5.copy(tmp17);
    const invite = InviteStore.getInvite(result.baseCode);
    const track = AnalyticsUtilsDefault.track;
    const COPY_INSTANT_INVITE = constants.COPY_INSTANT_INVITE;
    AnalyticsUtilsDefault;
    if (channel instanceof ChannelRecordBase) {
      guild_id = channel.guild_id;
    } else {
      let id;
      const getChannel = ChannelStore.getChannel;
      if (channel != null) {
        id = channel.id;
      }
      channel = getChannel(id);
      if (channel != null) {
        guild_id = channel.getGuildId();
      }
    }
    const obj = { server: guild_id, channel: id1, channel_type: type, location: GROUP_DM, code: null, guild_scheduled_event_id: null, application_id: id2 };
    id1 = undefined;
    if (channel != null) {
      id1 = channel.id;
    }
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    ({ baseCode: obj2.code, guildScheduledEventId: obj2.guild_scheduled_event_id } = result);
    id2 = undefined;
    if (invite != null) {
      const target_application = invite.target_application;
      if (target_application != null) {
        id2 = target_application.id;
      }
    }
    track(COPY_INSTANT_INVITE, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.COPY);
    }
    const tmp13Result = ToastUtils;
    tmp13Result.presentLinkCopied();
  }
};
export const handlePressSettings = function handlePressSettings(channel, callbackActionSheet, source) {
  let guild_id;
  let id;
  let closure_0 = channel;
  importDefault = callbackActionSheet;
  let str = source;
  let obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  dependencyMap = CreateInviteModalStore.getPendingSettings();
  ({ guild_id, id } = channel);
  const openSettings = CreateInviteModalActionCreatorsDefault.openSettings;
  CreateInviteModalActionCreatorsDefault;
  if (source == null) {
    str = "Instant Invite Action Sheet";
  }
  openSettings(guild_id, id, str, () => {
    if (null != callbackActionSheet) {
      tmp();
    } else {
      targetApplicationId = undefined;
      if (targetApplicationId != null) {
        targetApplicationId = targetApplicationId.targetApplicationId;
      }
      const obj = { createInvite: false, targetApplicationId };
      showInstantInviteActionSheet(channel, obj);
    }
  });
};
export const isAppInstalled = function isAppInstalled(roblox) {
  const obj = DCDSendUtils;
  return obj.canOpenUrlScheme(roblox);
};
export const handleOpenInviteActionsheet = function handleOpenInviteActionsheet(guild, id, channels, GUILD_HEADER) {
  let channel = ChannelStore.getChannel(id);
  if (channel == null) {
    channel = GuildChannelStore.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
  }
  _modDef38(null != channel, "Channel cannot be null");
  if (null != guild.vanityURLCode) {
    if ("" !== guild.vanityURLCode) {
      const obj3 = { type: "Vanity URL Invite", source: GUILD_HEADER };
      const tmp4Result = AnalyticsUtilsDefault;
      tmp4Result.track(constants.OPEN_POPOUT, obj3);
      const tmp4Result2 = CreateInviteModalActionCreatorsDefault;
      tmp4Result2.init(guild.id, channel.id, { skipCreateInvite: true });
      const obj4 = { vanityURLCode: guild.vanityURLCode, channel, source: GUILD_HEADER, guildScheduledEventId: undefined, stackingBehavior: undefined };
      openInstantInviteActionSheetDefault(obj4);
    }
  }
  const obj2 = utils_InstantInviteUtils;
  const inviteChannelId = obj2.getInviteChannelId(channel.id, channels);
  if (null != inviteChannelId) {
    let channel1 = ChannelStore.getChannel(inviteChannelId);
    if (channel1 == null) {
      channel1 = GuildChannelStore.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
    }
    _modDef38(null != channel1, "Channel cannot be null");
    const obj5 = { source: GUILD_HEADER };
    showInstantInviteActionSheet(channel1, obj5);
  }
};
export const hasDeferredInvite = function hasDeferredInvite() {
  const displayedInviteCode = DisplayedInviteStore.getDisplayedInviteCode();
  const displayedGuildTemplateCode = GuildTemplateStore.getDisplayedGuildTemplateCode();
  let invite = null;
  if (null != displayedInviteCode) {
    invite = InviteStore.getInvite(displayedInviteCode);
  }
  let guildTemplate = null;
  if (null != displayedGuildTemplateCode) {
    guildTemplate = GuildTemplateStore.getGuildTemplate(displayedGuildTemplateCode);
  }
  return null != invite || null != guildTemplate;
};