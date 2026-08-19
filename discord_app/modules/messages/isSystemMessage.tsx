// discord_app/modules/messages/isSystemMessage.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import set from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";

const result = obj132.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = set.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};