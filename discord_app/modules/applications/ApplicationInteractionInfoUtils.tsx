// === Module 8143: canViewInteractionInfo ===

// Module 8143 (canViewInteractionInfo)
import set from "set" /* 2 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1955 */;

const result = set.fileFinishedImporting("modules/applications/ApplicationInteractionInfoUtils.tsx");

export const canViewInteractionInfo = function canViewInteractionInfo(message) {
  return null != message.interactionMetadata;
};
export const isPrimaryEntryPointCommandMessage = function isPrimaryEntryPointCommandMessage(interactionMetadata) {
  interactionMetadata = interactionMetadata.interactionMetadata;
  let type;
  if (interactionMetadata != null) {
    type = interactionMetadata.type;
  }
  let tmp4 = type === PermissionOverwriteType.InteractionTypes.APPLICATION_COMMAND;
  if (tmp4) {
    const interactionMetadata2 = interactionMetadata.interactionMetadata;
    let command_type;
    if (interactionMetadata2 != null) {
      command_type = interactionMetadata2.command_type;
    }
    tmp4 = command_type === PermissionOverwriteType.ApplicationCommandType.PRIMARY_ENTRY_POINT;
  }
  return tmp4;
};