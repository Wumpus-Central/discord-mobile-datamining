// === Module 6792: ReportUtils ===

// Module 6792 (ReportUtils)
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;

const Constants = fn(1085);
({ ChannelTypes: c3, Permissions: closure_4, MessageTypesSets: hasOwnProperty } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("utils/ReportUtils.tsx");

export const canReportUser = function canReportUser(user) {
  if (null == user) {
    return false;
  } else {
    const currentUser = UserStore.getCurrentUser();
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
      const currentUser = UserStore.getCurrentUser();
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
export const canReportAndDeleteInChannel = function canReportAndDeleteInChannel(channelId) {
  const channel = ChannelStore.getChannel(channelId);
  let tmp2 = null != channel;
  if (tmp2) {
    let result = channel.type === constants.DM || channel.type === tmp3.GROUP_DM;
    if (!result) {
      const obj = { channelId };
      result = PermissionStore.canWithPartialContext(constants2.MANAGE_MESSAGES, obj);
    }
    tmp2 = result;
  }
  return tmp2;
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
        const currentUser = UserStore.getCurrentUser();
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
    const channel = ChannelStore.getChannel(channelId);
    let tmp11 = null != channel;
    if (tmp11) {
      let result = channel.type === constants.DM || channel.type === tmp12.GROUP_DM;
      if (!result) {
        const obj = { channelId };
        result = PermissionStore.canWithPartialContext(constants2.MANAGE_MESSAGES, obj);
      }
      tmp11 = result;
    }
    tmp = tmp11;
  }
  return tmp;
};