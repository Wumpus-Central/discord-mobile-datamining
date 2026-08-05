// discord_app/modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
import processMessage from "processMessage";
import { ReferencedMessageState } from "processMessage";
import { MessageTypes } from "ME";
import { 00038__ } from "../../../../../../_runtime/metro/00038__.js";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { createCommonMessage } from "createCommonMessage.tsx";

const require = arg1;
const result = require("module_38").fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  00038__(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  let tmp5 = null;
  if (messageByReference.getMessageByReference(message.messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = { content: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.OCs36J);
    const merged = Object.assign(createCommonMessage(message));
    tmp5 = obj;
  }
  return tmp5;
};