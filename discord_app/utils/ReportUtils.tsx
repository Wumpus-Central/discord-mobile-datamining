// === Module 6143: canReportUser ===

// Module 6143 (canReportUser)
import closure_0 from "ensureGuildLoaded" /* 1386 */;
import closure_1 from "handleInviteData" /* 4398 */;
import closure_2 from "getUncachedChannelPermissions" /* 4120 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;

({ ChannelTypes: c4, Permissions: c5, MessageTypesSets: closure_6 } = ME);
const result = require("set").fileFinishedImporting("utils/ReportUtils.tsx");

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
    const NON_REPORTABLE = constants3.NON_REPORTABLE;
    tmp = !NON_REPORTABLE.has(message.type);
  }
  if (tmp) {
    const author = message.author;
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
        if (closure_2.canWithPartialContext(constants2.MANAGE_MESSAGES, obj)) {
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
export const canDeleteAndReportMessage = function canDeleteAndReportMessage(type) {
  let tmp = null != type;
  if (tmp) {
    let tmp2 = null != type;
    if (tmp2) {
      const NON_REPORTABLE = constants3.NON_REPORTABLE;
      tmp2 = !NON_REPORTABLE.has(type.type);
    }
    if (tmp2) {
      const author = type.author;
      let flag = false;
      if (null != author) {
        const currentUser = authStore.getCurrentUser();
        let tmp6 = null != currentUser;
        if (tmp6) {
          let tmp7 = currentUser.id !== author.id;
          if (tmp7) {
            tmp7 = true !== author.system;
          }
          tmp6 = tmp7;
        }
        flag = tmp6;
      }
      tmp2 = flag;
    }
    tmp = tmp2;
  }
  if (tmp) {
    const channelId = type.getChannelId();
    const channel = store.getChannel(channelId);
    let flag3 = false;
    if (null != channel) {
      flag3 = true;
      if (channel.type !== constants.DM) {
        flag3 = true;
        if (channel.type !== tmp10.GROUP_DM) {
          const obj = { channelId: null };
          obj[0] = channelId;
          flag3 = false;
          if (closure_2.canWithPartialContext(constants2.MANAGE_MESSAGES, obj)) {
            const memberCount = store2.getMemberCount(channel.getGuildId());
            let tmp15 = null != memberCount;
            if (tmp15) {
              tmp15 = memberCount >= 50;
            }
            flag3 = tmp15;
          }
        }
      }
    }
    tmp = flag3;
  }
  return tmp;
};