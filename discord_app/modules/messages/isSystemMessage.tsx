// discord_app/modules/messages/isSystemMessage.tsx
const result = require("set").fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = require("../../../discord_common/js/shared/shared-constants/MessageTypes.tsx") /* set */.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};