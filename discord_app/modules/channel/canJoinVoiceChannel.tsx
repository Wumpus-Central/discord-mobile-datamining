// discord_app/modules/channel/canJoinVoiceChannel.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";

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