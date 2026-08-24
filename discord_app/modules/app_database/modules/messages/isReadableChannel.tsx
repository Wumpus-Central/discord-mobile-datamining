// === Module 5080: isReadableChannel ===

// Module 5080 (isReadableChannel)
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_1 from "ensureGuildLoaded" /* 1391 */;
import closure_2 from "getUncachedChannelPermissions" /* 4024 */;
import ME from "ME" /* 676 */;

const isTextChannel = createChannelRecord.isTextChannel;
({ ChannelTypes: c3, BasicPermissions } = ME);
let closure_4 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
const result = set.fileFinishedImporting("modules/app_database/modules/messages/isReadableChannel.tsx");

export const isReadableChannel = function isReadableChannel(basicChannel) {
  let tmp = null != basicChannel;
  if (tmp) {
    let tmp3 = basicChannel.type === constants.DM || basicChannel.type === tmp2.GROUP_DM;
    if (!tmp3) {
      let canBasicChannelResult = isTextChannel(basicChannel.type);
      if (canBasicChannelResult) {
        canBasicChannelResult = closure_2.canBasicChannel(closure_4, basicChannel);
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
    basicChannel = basicChannel.getBasicChannel(channelId);
    let tmp4 = null != basicChannel;
    if (tmp4) {
      let tmp6 = basicChannel.type === constants.DM || basicChannel.type === tmp5.GROUP_DM;
      if (!tmp6) {
        let canBasicChannelResult = isTextChannel(basicChannel.type);
        if (canBasicChannelResult) {
          canBasicChannelResult = closure_2.canBasicChannel(closure_4, basicChannel);
        }
        tmp6 = canBasicChannelResult;
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
};