// === Module 6792: ReportUtils ===

// Module 6792 (ReportUtils)
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ ChannelTypes: c3, Permissions: closure_4, MessageTypesSets: hasOwnProperty } = Constants);
let result = size.fileFinishedImporting("utils/ReportUtils.tsx");

export const canReportUser = function canReportUser(user) {
  if (null == user) {
    return false;
  } else {
    const id = user.id;
    const currentUser = UserStore.getCurrentUser();
    let tmp3 = null != currentUser;
    if (tmp3) {
      tmp3 = currentUser.id !== id && true !== user.system;
      const tmp4 = currentUser.id !== id && true !== user.system;
    }
    return tmp3;
  }
};
export const canReportMessage = function canReportMessage(message) {
  let tmp = null != message;
  if (tmp) {
    const NON_REPORTABLE = hasOwnProperty.NON_REPORTABLE;
    tmp = !NON_REPORTABLE.has(message.type);
  }
  if (tmp) {
    const author = message.author;
    let flag = false;
    if (null != author) {
      const id = author.id;
      const currentUser = UserStore.getCurrentUser();
      let tmp5 = null != currentUser;
      if (tmp5) {
        tmp5 = currentUser.id !== id && true !== author.system;
        const tmp6 = currentUser.id !== id && true !== author.system;
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
      const NON_REPORTABLE = hasOwnProperty.NON_REPORTABLE;
      tmp2 = !NON_REPORTABLE.has(type.type);
    }
    if (tmp2) {
      const author = type.author;
      let flag = false;
      if (null != author) {
        const id = author.id;
        const currentUser = UserStore.getCurrentUser();
        let tmp6 = null != currentUser;
        if (tmp6) {
          tmp6 = currentUser.id !== id && true !== author.system;
          const tmp7 = currentUser.id !== id && true !== author.system;
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