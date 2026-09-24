// === Module 10167: instant_invite/InstantInviteUtils ===

// Module 10167 (instant_invite/InstantInviteUtils)
import _modDef38 from "module_38" /* 38 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastUtils from "ToastUtils" /* 4522 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4814 */;
import DCDSendUtils from "DCDSendUtils" /* 4962 */;
import ClipboardUtils from "ClipboardUtils" /* 7522 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 8067 */;
import getInviteURLDefault from "getInviteURL" /* 8088 */;
import showShareActionSheet from "showShareActionSheet" /* 8711 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 10170 */;
import CreateInviteModalActionCreatorsDefault from "CreateInviteModalActionCreators" /* 10173 */;
import openInstantInviteActionSheetDefault from "openInstantInviteActionSheet" /* 10174 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7787 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 10168 */;
import GuildChannelStore from "GuildChannelStore" /* 4462 */;
import InviteStore from "InviteStore" /* 4813 */;
import PresenceStore from "PresenceStore" /* 4869 */;
import UserStore from "UserStore" /* 1372 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9099 */;

require = fn;
function showInstantInviteActionSheet(channel, source) {
  source = undefined;
  if (source != null) {
    source = source.source;
  }
  AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, { type: "Instant Invite", source });
  let stream1;
  if (source != null) {
    stream1 = source.stream;
  }
  const obj2 = { isActionSheet: true, location: "IOS Instant Invite Action Sheet Mount" };
  if (null != stream1) {
    const stream = source.stream;
    obj2.targetType = InviteTargetTypes.STREAM;
    obj2.targetUserId = stream.ownerId;
    const streamerApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
    const obj4 = { type: "Send Stream Invite", location: obj2.location, other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
    let id;
    if (streamerApplication != null) {
      id = streamerApplication.id;
    }
    obj4.application_id = id;
    let name;
    if (streamerApplication != null) {
      name = streamerApplication.name;
    }
    obj4.application_name = name;
    let id1;
    if (streamerApplication != null) {
      id1 = streamerApplication.id;
    }
    obj4.game_id = id1;
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj4);
    const tmpResult = AnalyticsUtilsDefault;
  } else {
    let targetApplicationId;
    if (source != null) {
      targetApplicationId = source.targetApplicationId;
    }
    if (null != targetApplicationId) {
      obj2.targetType = InviteTargetTypes.EMBEDDED_APPLICATION;
      obj2.targetApplicationId = source.targetApplicationId;
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
    CreateInviteModalActionCreatorsDefault.init(channel.getGuildId(), channel.id, obj2);
    const tmpResult3 = CreateInviteModalActionCreatorsDefault;
  }
  const obj5 = { channel, source: null, guildScheduledEventId: null, targetApplicationId: null, code: null, vanityURLCode: null, stackingBehavior: null };
  let source1;
  if (source != null) {
    source1 = source.source;
  }
  obj5.source = source1;
  let prop;
  if (source != null) {
    prop = source.guildScheduledEventId;
  }
  obj5.guildScheduledEventId = prop;
  let targetApplicationId1;
  if (source != null) {
    targetApplicationId1 = source.targetApplicationId;
  }
  obj5.targetApplicationId = targetApplicationId1;
  let code1;
  if (source != null) {
    code1 = source.code;
  }
  obj5.code = code1;
  let stackingBehavior;
  if (source != null) {
    stackingBehavior = source.stackingBehavior;
  }
  obj5.stackingBehavior = stackingBehavior;
  openInstantInviteActionSheetDefault(obj5);
  const tmpResult4 = openInstantInviteActionSheetDefault;
}
function trackOptionClicked(code, channel, COPY, _location) {
  const invite = InviteStore.getInvite(InviteCodeUtils.parseExtraDataFromInviteKey(code).baseCode);
  const obj3 = { invite_type: COPY, guild_id: null, channel_id: null, invite_code: null, invite_channel_type: null, invite_inviter_id: null, location: null, application_id: null };
  if (channel instanceof ChannelRecordBase) {
    let guild_id = channel.guild_id;
  } else {
    let id;
    if (channel != null) {
      id = channel.id;
    }
    channel = ChannelStore.getChannel(id);
    if (channel != null) {
      guild_id = channel.getGuildId();
    }
  }
  obj3.guild_id = guild_id;
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  obj3.channel_id = id1;
  const obj2 = AnalyticsUtilsDefault;
  obj3.invite_code = InviteCodeUtils.parseInviteCodeFromInviteKey(code);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  obj3.invite_channel_type = type;
  const currentUser = UserStore.getCurrentUser();
  let id2;
  if (currentUser != null) {
    id2 = currentUser.id;
  }
  obj3.invite_inviter_id = id2;
  obj3.location = _location;
  let id3;
  if (invite != null) {
    const target_application = invite.target_application;
    if (target_application != null) {
      id3 = target_application.id;
    }
  }
  obj3.application_id = id3;
  obj2.track(constants.INSTANT_INVITE_OPTION_CLICKED, obj3);
  const tmpResult = InviteCodeUtils;
}
const ChannelRecordBase = fn(2048).ChannelRecordBase;
const InviteTargetTypes = fn(8065).InviteTargetTypes;
const IOS_COPY_TO_PASTEBOARD = fn(10172).IOS_COPY_TO_PASTEBOARD;
const Constants = fn(1074);
({ AnalyticEvents: closure_14, InviteOptionsType: closure_15, Permissions: closure_16 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/instant_invite/native/InstantInviteUtils.tsx");

export const showInstantInviteActionSheetForChannel = function showInstantInviteActionSheetForChannel(channelId) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    showInstantInviteActionSheet(channel);
  }
};
export { showInstantInviteActionSheet };
export const showVanityUrlInviteActionSheet = function showVanityUrlInviteActionSheet(guild, channel, GUILD_SCHEDULED_EVENT, guildScheduledEventId) {
  AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, { type: "Vanity URL Invite", source: GUILD_SCHEDULED_EVENT });
  const obj2 = { type: "Vanity URL Invite", source: GUILD_SCHEDULED_EVENT };
  CreateInviteModalActionCreatorsDefault.init(guild.id, channel.id, { skipCreateInvite: true });
  const obj4 = { vanityURLCode: guild.vanityURLCode, channel, source: GUILD_SCHEDULED_EVENT, guildScheduledEventId: null, stackingBehavior: null };
  let prop;
  if (guildScheduledEventId != null) {
    prop = guildScheduledEventId.guildScheduledEventId;
  }
  obj4.guildScheduledEventId = prop;
  let stackingBehavior;
  if (guildScheduledEventId != null) {
    stackingBehavior = guildScheduledEventId.stackingBehavior;
  }
  obj4.stackingBehavior = stackingBehavior;
  openInstantInviteActionSheetDefault(obj4);
};
export { trackOptionClicked };
export function getShareMessage(arg0) {
  return arg0;
}
export const handleOpenShareSheet = function handleOpenShareSheet(code, channel, intl, ADD_FRIENDS_WIDGET) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = InviteCodeUtils.parseExtraDataFromInviteKey(code);
    const invite = InviteStore.getInvite(result.baseCode);
    if (channel instanceof ChannelRecordBase) {
      let guild_id = channel.guild_id;
    } else {
      let id;
      if (channel != null) {
        id = channel.id;
      }
      channel = ChannelStore.getChannel(id);
      if (channel != null) {
        guild_id = channel.getGuildId();
      }
    }
    let obj = { guild_id, channel_id: null, invite_code: null, invite_channel_type: null, invite_inviter_id: null, invite_guild_scheduled_event_id: null, location: null, application_id: null };
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    obj.channel_id = id1;
    obj.invite_code = result.baseCode;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.invite_channel_type = type;
    const currentUser = UserStore.getCurrentUser();
    let id2;
    if (currentUser != null) {
      id2 = currentUser.id;
    }
    obj.invite_inviter_id = id2;
    obj.invite_guild_scheduled_event_id = result.guildScheduledEventId;
    obj.location = ADD_FRIENDS_WIDGET;
    let id3;
    if (invite != null) {
      const target_application = invite.target_application;
      if (target_application != null) {
        id3 = target_application.id;
      }
    }
    obj.application_id = id3;
    AnalyticsUtilsDefault.track(constants.INSTANT_INVITE_SHARED, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.SHARE, ADD_FRIENDS_WIDGET);
    }
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const tmp26Result = ActionSheetActionCreatorsDefault;
    const obj2 = {
      message: intl,
      iOSOnlyShareCallback(arg0, arr) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != arr;
          }
          if (tmp) {
            tmp = !arr.includes(IOS_COPY_TO_PASTEBOARD);
          }
          if (tmp) {
            ToastUtils.presentInviteSent();
          }
        }
    };
    showShareActionSheet.showShareActionSheet(obj2, ADD_FRIENDS_WIDGET);
    const tmp21Result = showShareActionSheet;
  }
};
export const handleCopy = function handleCopy(code, channel, GROUP_DM, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = InviteCodeUtils.parseExtraDataFromInviteKey(code);
    const tmp17 = getInviteURLDefault(code);
    ClipboardUtils.copy(tmp17);
    const invite = InviteStore.getInvite(result.baseCode);
    if (channel instanceof ChannelRecordBase) {
      let guild_id = channel.guild_id;
    } else {
      let id;
      if (channel != null) {
        id = channel.id;
      }
      channel = ChannelStore.getChannel(id);
      if (channel != null) {
        guild_id = channel.getGuildId();
      }
    }
    const obj = { server: guild_id, channel: null, channel_type: null, location: null, code: null, guild_scheduled_event_id: null, application_id: null };
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    obj.channel = id1;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.channel_type = type;
    obj.location = GROUP_DM;
    ({ baseCode: obj2.code, guildScheduledEventId: obj2.guild_scheduled_event_id } = result);
    let id2;
    if (invite != null) {
      const target_application = invite.target_application;
      if (target_application != null) {
        id2 = target_application.id;
      }
    }
    obj.application_id = id2;
    AnalyticsUtilsDefault.track(constants.COPY_INSTANT_INVITE, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.COPY);
    }
    ToastUtils.presentLinkCopied();
    const tmp13Result = ToastUtils;
  }
};
export const handlePressSettings = function handlePressSettings(channel, dependencyMap, inviteSettings) {
  closure_0 = channel;
  importDefault = dependencyMap;
  let str = inviteSettings;
  ActionSheetActionCreatorsDefault.hideActionSheet();
  dependencyMap = CreateInviteModalStore.getPendingSettings();
  ({ guild_id, id } = channel);
  if (inviteSettings == null) {
    str = "Instant Invite Action Sheet";
  }
  CreateInviteModalActionCreatorsDefault.openSettings(guild_id, id, str, () => {
    if (null != closure_1) {
      tmp();
    } else {
      targetApplicationId = undefined;
      if (targetApplicationId != null) {
        targetApplicationId = targetApplicationId.targetApplicationId;
      }
      const obj = { createInvite: false, targetApplicationId };
      showInstantInviteActionSheet(closure_0, obj);
    }
  });
};
export const isAppInstalled = function isAppInstalled(roblox) {
  return DCDSendUtils.canOpenUrlScheme(roblox);
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
      AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, obj3);
      const tmp4Result = AnalyticsUtilsDefault;
      CreateInviteModalActionCreatorsDefault.init(guild.id, channel.id, { skipCreateInvite: true });
      const obj4 = { vanityURLCode: guild.vanityURLCode, channel, source: GUILD_HEADER, guildScheduledEventId: undefined, stackingBehavior: undefined };
      openInstantInviteActionSheetDefault(obj4);
      const tmp4Result2 = CreateInviteModalActionCreatorsDefault;
    }
  }
  const inviteChannelId = utils_InstantInviteUtils.getInviteChannelId(channel.id, channels);
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