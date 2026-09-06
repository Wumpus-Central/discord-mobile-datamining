// discord_app/modules/instant_invite/native/InstantInviteUtils.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import InviteCodeUtils from "../InviteCodeUtils.tsx";
import DCDSendUtils from "DCDSendUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import StreamerApplicationSelectors from "../../go_live/utils/StreamerApplicationSelectors.tsx";
import getInviteURLDefault from "../getInviteURL.tsx";
import utils_InstantInviteUtils from "../../../utils/native/InstantInviteUtils.tsx";
import CreateInviteModalActionCreatorsDefault from "../../../actions/CreateInviteModalActionCreators.tsx";
import openInstantInviteActionSheetDefault from "components/openInstantInviteActionSheet.tsx";
import GuildTemplateStore from "../../guild_templates/GuildTemplateStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import CreateInviteModalStore from "../../../stores/CreateInviteModalStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import InviteStore from "../../../stores/InviteStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import DisplayedInviteStore from "../../../stores/native/DisplayedInviteStore.tsx";

require = fn;
function showInstantInviteActionSheet(channel, source) {
  let obj = AnalyticsUtilsDefault;
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
    const streamerApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
    let tmpResult = tmp(1242);
    obj = {
      type: "Send Stream Invite",
      location: null,
      other_user_id: null,
      application_id: null,
      application_name: null,
      game_id: null,
    };
    obj.location = obj.location;
    obj.other_user_id = stream.ownerId;
    let id;
    if (streamerApplication != null) {
      id = streamerApplication.id;
    }
    obj.application_id = id;
    let name;
    if (streamerApplication != null) {
      name = streamerApplication.name;
    }
    obj.application_name = name;
    let id1;
    if (streamerApplication != null) {
      id1 = streamerApplication.id;
    }
    obj.game_id = id1;
    tmpResult.track(constants.OPEN_MODAL, obj);
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
    tmpResult = tmp(9826);
    tmpResult.init(channel.getGuildId(), channel.id, obj);
  }
  const obj1 = {
    channel,
    source: null,
    guildScheduledEventId: null,
    targetApplicationId: null,
    code: null,
    vanityURLCode: null,
    stackingBehavior: null,
  };
  let source1;
  if (source != null) {
    source1 = source.source;
  }
  obj1.source = source1;
  let prop;
  if (source != null) {
    prop = source.guildScheduledEventId;
  }
  obj1.guildScheduledEventId = prop;
  let targetApplicationId1;
  if (source != null) {
    targetApplicationId1 = source.targetApplicationId;
  }
  obj1.targetApplicationId = targetApplicationId1;
  let code1;
  if (source != null) {
    code1 = source.code;
  }
  obj1.code = code1;
  let stackingBehavior;
  if (source != null) {
    stackingBehavior = source.stackingBehavior;
  }
  obj1.stackingBehavior = stackingBehavior;
  openInstantInviteActionSheetDefault(obj1);
}
function trackOptionClicked(code, channel, COPY, _location) {
  let obj = InviteCodeUtils;
  const invite = InviteStore.getInvite(obj.parseExtraDataFromInviteKey(code).baseCode);
  obj = {
    invite_type: COPY,
    guild_id: null,
    channel_id: null,
    invite_code: null,
    invite_channel_type: null,
    invite_inviter_id: null,
    location: null,
    application_id: null,
  };
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
  obj.guild_id = guild_id;
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  obj.channel_id = id1;
  const obj2 = AnalyticsUtilsDefault;
  obj.invite_code = InviteCodeUtils.parseInviteCodeFromInviteKey(code);
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
  obj.location = _location;
  let id3;
  if (invite != null) {
    const target_application = invite.target_application;
    if (target_application != null) {
      id3 = target_application.id;
    }
  }
  obj.application_id = id3;
  obj2.track(constants.INSTANT_INVITE_OPTION_CLICKED, obj);
}
const ChannelRecordBase = fn(1961).ChannelRecordBase;
const InviteTargetTypes = fn(7736).InviteTargetTypes;
const IOS_COPY_TO_PASTEBOARD = fn(9825).IOS_COPY_TO_PASTEBOARD;
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
export const showVanityUrlInviteActionSheet = function showVanityUrlInviteActionSheet(
  guild,
  channel,
  GUILD_SCHEDULED_EVENT,
  guildScheduledEventId,
) {
  let obj = { type: "Vanity URL Invite", source: GUILD_SCHEDULED_EVENT };
  obj.track(constants.OPEN_POPOUT, obj);
  CreateInviteModalActionCreatorsDefault.init(guild.id, channel.id, { skipCreateInvite: true });
  obj = {
    vanityURLCode: guild.vanityURLCode,
    channel,
    source: GUILD_SCHEDULED_EVENT,
    guildScheduledEventId: null,
    stackingBehavior: null,
  };
  let prop;
  if (guildScheduledEventId != null) {
    prop = guildScheduledEventId.guildScheduledEventId;
  }
  obj.guildScheduledEventId = prop;
  let stackingBehavior;
  if (guildScheduledEventId != null) {
    stackingBehavior = guildScheduledEventId.stackingBehavior;
  }
  obj.stackingBehavior = stackingBehavior;
  openInstantInviteActionSheetDefault(obj);
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
    const tmp21 = require;
    const tmp26 = importDefault;
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
    let obj = {
      guild_id,
      channel_id: null,
      invite_code: null,
      invite_channel_type: null,
      invite_inviter_id: null,
      invite_guild_scheduled_event_id: null,
      location: null,
      application_id: null,
    };
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
    tmp26(4527).hideAllActionSheets();
    const tmp26Result = tmp26(4527);
    obj = {
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
      },
    };
    tmp21(8361).showShareActionSheet(obj, ADD_FRIENDS_WIDGET);
    const tmp21Result = tmp21(8361);
  }
};
export const handleCopy = function handleCopy(code, channel, GROUP_DM, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = InviteCodeUtils.parseExtraDataFromInviteKey(code);
    const tmp13 = require;
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
    const obj = {
      server: guild_id,
      channel: null,
      channel_type: null,
      location: null,
      code: null,
      guild_scheduled_event_id: null,
      application_id: null,
    };
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
    tmp13(4258).presentLinkCopied();
    const tmp13Result = tmp13(4258);
  }
};
export const handlePressSettings = function handlePressSettings(channel, arg1, arg2) {
  closure_0 = channel;
  importDefault = arg1;
  let str = arg2;
  ActionSheetActionCreatorsDefault.hideActionSheet();
  dependencyMap = CreateInviteModalStore.getPendingSettings();
  ({ guild_id, id } = channel);
  if (arg2 == null) {
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
  let obj = ChannelStore;
  let channel = ChannelStore.getChannel(id);
  if (channel == null) {
    channel = GuildChannelStore.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
  }
  _modDef38(null != channel, "Channel cannot be null");
  if (null != guild.vanityURLCode) {
    if ("" !== guild.vanityURLCode) {
      let tmp4Result = tmp4(1242);
      obj = { type: "Vanity URL Invite", source: GUILD_HEADER };
      tmp4Result.track(constants.OPEN_POPOUT, obj);
      tmp4Result = tmp4(9826);
      tmp4Result.init(guild.id, channel.id, { skipCreateInvite: true });
      obj = {
        vanityURLCode: guild.vanityURLCode,
        channel,
        source: GUILD_HEADER,
        guildScheduledEventId: undefined,
        stackingBehavior: undefined,
      };
      tmp4(9827)(obj);
    }
  }
  let obj1 = utils_InstantInviteUtils;
  const inviteChannelId = obj1.getInviteChannelId(channel.id, channels);
  if (null != inviteChannelId) {
    let channel1 = obj.getChannel(inviteChannelId);
    if (channel1 == null) {
      channel1 = GuildChannelStore.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
    }
    tmp4(38)(null != channel1, "Channel cannot be null");
    obj1 = { source: GUILD_HEADER };
    showInstantInviteActionSheet(channel1, obj1);
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
