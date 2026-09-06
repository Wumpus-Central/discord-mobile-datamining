// discord_app/modules/report_to_mod/ReportToModUtils.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import MemberSafetyPermissionsUtils from "../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx";
import getGuildModeratorReportingEnabledDefault from "getGuildModeratorReportingEnabled.tsx";
import ReportUtils from "../../utils/ReportUtils.tsx";
import getGuildModeratorReportChannelIdDefault from "getGuildModeratorReportChannelId.tsx";
import SelfModUtils from "../self_mod/SelfModUtils.tsx";
import ObscuredMediaUtils from "../explicit_media_redaction/ObscuredMediaUtils.tsx";
import HarmTypeConfiguration from "../explicit_media_redaction/HarmTypeConfiguration.tsx";
import ForumChannelTypes from "../forums/ForumChannelTypes.tsx";
import ForumPostMessagesStore from "../forums/ForumPostMessagesStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const ReportToModPermissions = fn(7288).ReportToModPermissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/report_to_mod/ReportToModUtils.tsx");

export const canReportMessageToMods = function canReportMessageToMods(message) {
  if (obj.canReportUser(message.author)) {
    const channel = ChannelStore.getChannel(message.channel_id);
    if (null == channel) {
      return false;
    } else {
      const guild = GuildStore.getGuild(channel.guild_id);
      if (null == guild) {
        return false;
      } else {
        return (
          getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild)
        );
      }
    }
  } else {
    return false;
  }
  obj = ReportUtils;
};
export const canAccessReportsChannel = function canAccessReportsChannel(arg0) {
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, UserStore];
    tmp = items;
  }
  let obj = MemberSafetyPermissionsUtils;
  const contextForPermission = obj.getContextForPermission(arg0, tmp);
  if (null == contextForPermission) {
    return false;
  } else {
    const guild = contextForPermission.guild;
    let tmp7 = null == guild;
    if (!tmp7) {
      tmp7 = !getGuildModeratorReportingEnabledDefault(guild);
    }
    if (!tmp7) {
      tmp7 = null == getGuildModeratorReportChannelIdDefault(guild);
    }
    let hasAnyResult = !tmp7;
    if (!tmp7) {
      const obj2 = BigFlagUtilsAll;
      obj = { user: contextForPermission.user, context: guild, checkElevated: false };
      hasAnyResult = obj2.hasAny(PermissionUtilsAll.computePermissions(obj), ReportToModPermissions);
    }
    return hasAnyResult;
  }
};
export const getReportToModChannelId = function getReportToModChannelId(arg0) {
  const guild = GuildStore.getGuild(arg0);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = getGuildModeratorReportChannelIdDefault(guild);
  }
  return tmp2;
};
export const isModeratorReportOrPostChannelId = function isModeratorReportOrPostChannelId(channelId2) {
  const channel = ChannelStore.getChannel(channelId2);
  let tmp = null != channel;
  if (tmp) {
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = channel.isModeratorReportChannel() && channel.isForumChannel();
      const tmp3 = channel.isModeratorReportChannel() && channel.isForumChannel();
    }
    if (!tmp2) {
      let tmp4 = null != channel;
      if (tmp4) {
        tmp4 = channel.isModeratorReportChannel() && channel.isForumPost();
        const tmp5 = channel.isModeratorReportChannel() && channel.isForumPost();
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isModeratorReportChannelId = function isModeratorReportChannelId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.isModeratorReportChannel() && channel.isForumChannel();
    const tmp2 = channel.isModeratorReportChannel() && channel.isForumChannel();
  }
  return tmp;
};
export const isModeratorReportChannel = function isModeratorReportChannel(isModeratorReportChannel) {
  let tmp = null != isModeratorReportChannel;
  if (tmp) {
    tmp = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumChannel();
    const tmp2 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumChannel();
  }
  return tmp;
};
export const isModeratorReportPostChannelId = function isModeratorReportPostChannelId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.isModeratorReportChannel() && channel.isForumPost();
    const tmp2 = channel.isModeratorReportChannel() && channel.isForumPost();
  }
  return tmp;
};
export const isModeratorReportPostChannel = function isModeratorReportPostChannel(isModeratorReportChannel) {
  let tmp = null != isModeratorReportChannel;
  if (tmp) {
    tmp = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
    const tmp2 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
  }
  return tmp;
};
export const isModeratorReportOrPostChannel = function isModeratorReportOrPostChannel(isModeratorReportChannel) {
  let tmp = null != isModeratorReportChannel;
  if (tmp) {
    let tmp2 = null != isModeratorReportChannel;
    if (tmp2) {
      tmp2 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumChannel();
      const tmp3 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumChannel();
    }
    if (!tmp2) {
      let tmp4 = null != isModeratorReportChannel;
      if (tmp4) {
        tmp4 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
        const tmp5 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isSafeToTransitionToReportForCurrentUser = function isSafeToTransitionToReportForCurrentUser(arg0) {
  if (null == arg0) {
    return true;
  } else {
    if (obj3.isCurrentUserTeen()) {
      const channel = ChannelStore.getChannel(arg0);
      let tmp2 = null != channel;
      if (tmp2) {
        let tmp3 = null != channel;
        if (tmp3) {
          tmp3 = channel.isModeratorReportChannel() && channel.isForumChannel();
          const tmp4 = channel.isModeratorReportChannel() && channel.isForumChannel();
        }
        if (!tmp3) {
          let tmp5 = null != channel;
          if (tmp5) {
            tmp5 = channel.isModeratorReportChannel() && channel.isForumPost();
            const tmp6 = channel.isModeratorReportChannel() && channel.isForumPost();
          }
          tmp3 = tmp5;
        }
        tmp2 = tmp3;
      }
      if (tmp2) {
        const message = ForumPostMessagesStore.getMessage(arg0);
        ({ loaded, firstMessage } = message);
        let tmp9 = !loaded;
        if (loaded) {
          tmp9 = null == firstMessage;
        }
        if (!tmp9) {
          tmp9 = !ObscuredMediaUtils.messageHasObscurableMediaForBitmask(
            firstMessage,
            HarmTypeConfiguration.ContentHarmTypeBitMask.EXPLICIT,
          );
          const tmp10Result = ObscuredMediaUtils;
        }
        return tmp9;
      } else {
        return true;
      }
    } else {
      return true;
    }
    obj3 = SelfModUtils;
  }
};
export const isModeratorReportThreadStarterMessage = function isModeratorReportThreadStarterMessage(
  isFirstMessageInForumPost,
  isModeratorReportChannel,
) {
  const result = isFirstMessageInForumPost.isFirstMessageInForumPost(isModeratorReportChannel);
  let tmp2 = !result;
  if (result) {
    tmp2 = !isFirstMessageInForumPost.isSystemDM();
  }
  let tmp3 = !tmp2;
  if (!tmp2) {
    let tmp5 = null != isModeratorReportChannel;
    if (tmp5) {
      tmp5 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
      const tmp6 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const sortedModeratorReportTags = function sortedModeratorReportTags(found) {
  return found.sort((id, id2) => {
    let num = -1;
    if (id.id != ForumChannelTypes.ReservedTagIds.MULTIPLE_REPORTS) {
      let num2 = 0;
      if (id2.id == ForumChannelTypes.ReservedTagIds.MULTIPLE_REPORTS) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
};
export const isModeratorReportMessage = function isModeratorReportMessage(messageSnapshots) {
  messageSnapshots = messageSnapshots.messageSnapshots;
  return messageSnapshots.some((moderatorReport) => null != moderatorReport.moderatorReport);
};
export const isUserAuthorOfReportedMessage = function isUserAuthorOfReportedMessage(arg0, arg1) {
  const channel = ChannelStore.getChannel(arg0);
  if (null != channel) {
    if (channel.isModeratorReportChannel()) {
      const messages = MessageStore.getMessages(arg0);
      const firstResult = messages.first();
      let reported_user_id;
      if (firstResult != null) {
        const messageSnapshots = firstResult.messageSnapshots;
        if (messageSnapshots != null) {
          const first = messageSnapshots[0];
          if (first != null) {
            const moderatorReport = first.moderatorReport;
            if (moderatorReport != null) {
              reported_user_id = moderatorReport.reported_user_id;
            }
          }
        }
      }
      return reported_user_id === arg1;
    }
  }
  return false;
};
