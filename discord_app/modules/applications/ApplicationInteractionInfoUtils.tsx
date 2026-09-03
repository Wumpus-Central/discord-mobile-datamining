// === Module 8155: canViewInteractionInfo ===

// Module 8155 (canViewInteractionInfo)
import set from "set" /* 2 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;

const result = set.fileFinishedImporting("modules/applications/ApplicationInteractionInfoUtils.tsx");

export const canViewInteractionInfo = function canViewInteractionInfo(message) {
  return null != message.interactionMetadata;
};
export const isPrimaryEntryPointCommandMessage = function isPrimaryEntryPointCommandMessage(message) {
  const interactionMetadata = message.interactionMetadata;
  let type;
  if (interactionMetadata != null) {
    type = interactionMetadata.type;
  }
  let tmp4 = type === PermissionOverwriteType.InteractionTypes.APPLICATION_COMMAND;
  if (tmp4) {
    const interactionMetadata2 = message.interactionMetadata;
    let command_type;
    if (interactionMetadata2 != null) {
      command_type = interactionMetadata2.command_type;
    }
    tmp4 = command_type === PermissionOverwriteType.ApplicationCommandType.PRIMARY_ENTRY_POINT;
  }
  return tmp4;
};