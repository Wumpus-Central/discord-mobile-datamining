// === Module 6065: canReportUser ===

// Module 6065 (canReportUser)
import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c4;
let c5;
({ ChannelTypes: c4, Permissions: c5 } = ME);
const result = require("getUncachedChannelPermissions").fileFinishedImporting("utils/ReportUtils.tsx");

export const canReportUser = function canReportUser(user) {
  if (null == user) {
    return false;
  } else {
    const currentUser = authStore.getCurrentUser();
    let tmp3 = null != currentUser;
    if (tmp3) {
      let tmp4 = currentUser.id !== user.id;
      if (tmp4) {
        tmp4 = true !== user.system;
      }
      tmp3 = tmp4;
    }
    return tmp3;
  }
};
export const canReportMessage = function canReportMessage(message) {
  let tmp = null != message;
  if (tmp) {
    const author = message.author;
    let flag = false;
    if (null != author) {
      const currentUser = authStore.getCurrentUser();
      let tmp4 = null != currentUser;
      if (tmp4) {
        let tmp5 = currentUser.id !== author.id;
        if (tmp5) {
          tmp5 = true !== author.system;
        }
        tmp4 = tmp5;
      }
      flag = tmp4;
    }
    tmp = flag;
  }
  return tmp;
};
export const canReportAndDeleteInChannel = function canReportAndDeleteInChannel(arg0) {
  const channel = store.getChannel(arg0);
  if (null == channel) {
    return false;
  } else {
    if (channel.type !== constants.DM) {
      if (channel.type !== tmp6.GROUP_DM) {
        const obj = { channelId: null };
        obj[0] = arg0;
        if (getUncachedChannelPermissions.canWithPartialContext(constants2.MANAGE_MESSAGES, obj)) {
          const memberCount = store2.getMemberCount(channel.getGuildId());
          let tmp5 = null != memberCount;
          if (tmp5) {
            tmp5 = memberCount >= 50;
          }
          return tmp5;
        } else {
          return false;
        }
      }
    }
    return true;
  }
};
export const canDeleteAndReportMessage = function canDeleteAndReportMessage(author) {
  let tmp = null != author;
  if (tmp) {
    let tmp2 = null != author;
    if (tmp2) {
      author = author.author;
      let flag = false;
      if (null != author) {
        const currentUser = authStore.getCurrentUser();
        let tmp5 = null != currentUser;
        if (tmp5) {
          let tmp6 = currentUser.id !== author.id;
          if (tmp6) {
            tmp6 = true !== author.system;
          }
          tmp5 = tmp6;
        }
        flag = tmp5;
      }
      tmp2 = flag;
    }
    tmp = tmp2;
  }
  if (tmp) {
    const channelId = author.getChannelId();
    const channel = store.getChannel(channelId);
    let flag3 = false;
    if (null != channel) {
      flag3 = true;
      if (channel.type !== constants.DM) {
        flag3 = true;
        if (channel.type !== tmp9.GROUP_DM) {
          const obj = { channelId: null };
          obj[0] = channelId;
          flag3 = false;
          if (getUncachedChannelPermissions.canWithPartialContext(constants2.MANAGE_MESSAGES, obj)) {
            const memberCount = store2.getMemberCount(channel.getGuildId());
            let tmp14 = null != memberCount;
            if (tmp14) {
              tmp14 = memberCount >= 50;
            }
            flag3 = tmp14;
          }
        }
      }
    }
    tmp = flag3;
  }
  return tmp;
};