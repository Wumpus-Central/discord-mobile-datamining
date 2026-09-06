// === Module 7484: isReadableChannel ===

// Module 7484 (isReadableChannel)
import ChannelRecord from "ChannelRecord" /* 1961 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const isTextChannel = ChannelRecord.isTextChannel;
({ ChannelTypes: c3, BasicPermissions } = Constants);
let closure_4 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
const result = size.fileFinishedImporting("modules/app_database/modules/messages/isReadableChannel.tsx");

export const isReadableChannel = function isReadableChannel(basicChannel) {
  let tmp = null != basicChannel;
  if (tmp) {
    let tmp3 = basicChannel.type === constants.DM || basicChannel.type === tmp2.GROUP_DM;
    if (!tmp3) {
      let canBasicChannelResult = isTextChannel(basicChannel.type);
      if (canBasicChannelResult) {
        canBasicChannelResult = PermissionStore.canBasicChannel(closure_4, basicChannel);
      }
      tmp3 = canBasicChannelResult;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isReadableChannelId = function isReadableChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    let tmp4 = null != basicChannel;
    if (tmp4) {
      let tmp6 = basicChannel.type === constants.DM || basicChannel.type === tmp5.GROUP_DM;
      if (!tmp6) {
        let canBasicChannelResult = isTextChannel(basicChannel.type);
        if (canBasicChannelResult) {
          canBasicChannelResult = PermissionStore.canBasicChannel(closure_4, basicChannel);
        }
        tmp6 = canBasicChannelResult;
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
};