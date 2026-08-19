// === Module 4987: canJoinVoiceChannel ===

// Module 4987 (canJoinVoiceChannel)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;

const isPrivate = createChannelRecord.isPrivate;
const BasicPermissions = ME.BasicPermissions;
const result = obj132.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
};