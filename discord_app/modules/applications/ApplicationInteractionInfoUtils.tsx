import { PermissionOverwriteType } from "../../flow/Server.tsx";
// discord_app/modules/applications/ApplicationInteractionInfoUtils.tsx
const result = require("set").fileFinishedImporting("modules/applications/ApplicationInteractionInfoUtils.tsx");

export const canViewInteractionInfo = function canViewInteractionInfo(message) {
  return null != message.interactionMetadata;
};
export const isPrimaryEntryPointCommandMessage = function isPrimaryEntryPointCommandMessage(interactionMetadata) {
  interactionMetadata = interactionMetadata.interactionMetadata;
  let type;
  if (interactionMetadata != null) {
    type = interactionMetadata.type;
  }
  let tmp4 = type === PermissionOverwriteType /* PermissionOverwriteType */.InteractionTypes.APPLICATION_COMMAND;
  if (tmp4) {
    const interactionMetadata2 = interactionMetadata.interactionMetadata;
    let command_type;
    if (interactionMetadata2 != null) {
      command_type = interactionMetadata2.command_type;
    }
    tmp4 = command_type === PermissionOverwriteType /* PermissionOverwriteType */.ApplicationCommandType.PRIMARY_ENTRY_POINT;
  }
  return tmp4;
};