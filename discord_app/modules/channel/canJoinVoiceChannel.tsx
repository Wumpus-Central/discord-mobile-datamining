// === Module 5416: canJoinVoiceChannel ===

// Module 5416 (canJoinVoiceChannel)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import createChannelRecord from "createChannelRecord" /* 1961 */;

const isPrivate = createChannelRecord.isPrivate;
const BasicPermissions = ME.BasicPermissions;
const result = set.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
};