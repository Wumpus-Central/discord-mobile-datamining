// discord_app/modules/messages/isSystemMessage.tsx
import set from "../../../_runtime/00002_set.js";
import set2 from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";

const result = set.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = set2.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};