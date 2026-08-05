// discord_app/modules/messages/isSystemMessage.tsx
import { set } from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
const result = require("set").fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = set /* set */.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};