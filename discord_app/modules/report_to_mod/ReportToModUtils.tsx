// === Module 6779: ReportToModUtils ===

// Module 6779 (ReportToModUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6768 */;
import getGuildModeratorReportingEnabledDefault from "getGuildModeratorReportingEnabled" /* 6769 */;
import ReportToModConstants from "ReportToModConstants" /* 6791 */;
import ReportUtils from "ReportUtils" /* 6792 */;
import getGuildModeratorReportChannelIdDefault from "getGuildModeratorReportChannelId" /* 6793 */;
import SelfModUtils from "SelfModUtils" /* 6794 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6795 */;
import HarmTypeConfiguration from "HarmTypeConfiguration" /* 6798 */;
import ForumChannelTypes from "ForumChannelTypes" /* 6806 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6780 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import MessageStore from "MessageStore" /* 5110 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const ReportToModPermissions = ReportToModConstants.ReportToModPermissions;
let result = size.fileFinishedImporting("modules/report_to_mod/ReportToModUtils.tsx");

export const canReportMessageToMods = function canReportMessageToMods(message) {
  const obj = ReportUtils;
  if (obj.canReportUser(message.author)) {
    const channel = ChannelStore.getChannel(message.channel_id);
    if (null == channel) {
      return false;
    } else {
      const guild = GuildStore.getGuild(channel.guild_id);
      if (null == guild) {
        return false;
      } else {
        const tmp8 = getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
        return tmp8;
      }
    }
  } else {
    return false;
  }
};
export const canAccessReportsChannel = function canAccessReportsChannel(arg0) {
  let items;
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, UserStore];
    tmp = items;
  }
  const obj = MemberSafetyPermissionsUtils;
  const contextForPermission = obj.getContextForPermission(arg0, tmp);
  if (null == contextForPermission) {
    return false;
  } else {
    const guild = contextForPermission.guild;
    let tmp7 = null == guild;
    const user = contextForPermission.user;
    if (!tmp7) {
      tmp7 = !getGuildModeratorReportingEnabledDefault(guild);
    }
    if (!tmp7) {
      tmp7 = null == getGuildModeratorReportChannelIdDefault(guild);
    }
    let hasAnyResult = !tmp7;
    if (hasAnyResult) {
      const hasAny = BigFlagUtilsAll.hasAny;
      BigFlagUtilsAll;
      const obj3 = { user, context: guild, checkElevated: false };
      const obj2 = PermissionUtilsAll;
      hasAnyResult = hasAny(obj2.computePermissions(obj3), ReportToModPermissions);
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
      channel.isModeratorReportChannel() && channel.isForumChannel();
    }
    if (!tmp2) {
      let tmp4 = null != channel;
      if (tmp4) {
        tmp4 = channel.isModeratorReportChannel() && channel.isForumPost();
        channel.isModeratorReportChannel() && channel.isForumPost();
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
    channel.isModeratorReportChannel() && channel.isForumChannel();
  }
  return tmp;
};
export const isModeratorReportChannel = function isModeratorReportChannel(isModeratorReportChannel) {
  let tmp = null != isModeratorReportChannel;
  if (tmp) {
    tmp = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumChannel();
    isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumChannel();
  }
  return tmp;
};
export const isModeratorReportPostChannelId = function isModeratorReportPostChannelId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.isModeratorReportChannel() && channel.isForumPost();
    channel.isModeratorReportChannel() && channel.isForumPost();
  }
  return tmp;
};
export const isModeratorReportPostChannel = function isModeratorReportPostChannel(isModeratorReportChannel) {
  let tmp = null != isModeratorReportChannel;
  if (tmp) {
    tmp = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
    isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
  }
  return tmp;
};
export const isModeratorReportOrPostChannel = function isModeratorReportOrPostChannel(isModeratorReportChannel) {
  let tmp = null != isModeratorReportChannel;
  if (tmp) {
    let tmp2 = null != isModeratorReportChannel;
    if (tmp2) {
      tmp2 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumChannel();
      isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumChannel();
    }
    if (!tmp2) {
      let tmp4 = null != isModeratorReportChannel;
      if (tmp4) {
        tmp4 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
        isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isSafeToTransitionToReportForCurrentUser = function isSafeToTransitionToReportForCurrentUser(arg0) {
  let firstMessage;
  let loaded;
  if (null == arg0) {
    return true;
  } else {
    const obj3 = SelfModUtils;
    if (obj3.isCurrentUserTeen()) {
      const channel = ChannelStore.getChannel(arg0);
      let tmp2 = null != channel;
      if (tmp2) {
        let tmp3 = null != channel;
        if (tmp3) {
          tmp3 = channel.isModeratorReportChannel() && channel.isForumChannel();
          channel.isModeratorReportChannel() && channel.isForumChannel();
        }
        if (!tmp3) {
          let tmp5 = null != channel;
          if (tmp5) {
            tmp5 = channel.isModeratorReportChannel() && channel.isForumPost();
            channel.isModeratorReportChannel() && channel.isForumPost();
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
          const tmp10Result = ObscuredMediaUtils;
          tmp9 = !tmp10Result.messageHasObscurableMediaForBitmask(firstMessage, HarmTypeConfiguration.ContentHarmTypeBitMask.EXPLICIT);
        }
        return tmp9;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
};
export const isModeratorReportThreadStarterMessage = function isModeratorReportThreadStarterMessage(isFirstMessageInForumPost, isModeratorReportChannel) {
  const result = isFirstMessageInForumPost.isFirstMessageInForumPost(isModeratorReportChannel);
  let tmp2 = !result;
  if (result) {
    tmp2 = !isFirstMessageInForumPost.isSystemDM();
  }
  let tmp3 = !tmp2;
  if (tmp3) {
    let tmp5 = null != isModeratorReportChannel;
    if (tmp5) {
      tmp5 = isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
      isModeratorReportChannel.isModeratorReportChannel() && isModeratorReportChannel.isForumPost();
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