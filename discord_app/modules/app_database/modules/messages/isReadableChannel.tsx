// === Module 6840: isReadableChannel ===

// Module 6840 (isReadableChannel)
import { isTextChannel } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let BasicPermissions;
let c3;
({ ChannelTypes: c3, BasicPermissions } = ME);
let closure_4 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/app_database/modules/messages/isReadableChannel.tsx");

export const isReadableChannel = function isReadableChannel(basicChannel) {
  let tmp = null != basicChannel;
  if (tmp) {
    let tmp3 = basicChannel.type === constants.DM || basicChannel.type === tmp2.GROUP_DM;
    if (!tmp3) {
      let canBasicChannelResult = isTextChannel(basicChannel.type);
      if (canBasicChannelResult) {
        canBasicChannelResult = getUncachedChannelPermissions.canBasicChannel(closure_4, basicChannel);
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
          canBasicChannelResult = getUncachedChannelPermissions.canBasicChannel(closure_4, basicChannel);
        }
        tmp6 = canBasicChannelResult;
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
};