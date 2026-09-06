// discord_app/modules/messages/isSystemMessage.tsx
import MessageTypes from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
}
