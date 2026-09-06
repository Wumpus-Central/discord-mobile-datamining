// discord_app/modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import util from "../../../../../intl/index.native.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ReferencedMessageStore from "../../../../replies/ReferencedMessageStore.tsx";

require = fn;
const ReferencedMessageState = fn(7595).ReferencedMessageState;
const MessageTypes = fn(1074).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx",
);

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  _modDef38(
    type === MessageTypes.THREAD_STARTER_MESSAGE,
    "cannot call createThreadStarterSystemMessage on a message of type " + type,
  );
  let tmp5 = null;
  if (ReferencedMessageStore.getMessageByReference(message.messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = { content: null };
    const intl = util.intl;
    obj.content = intl.string(util.t.OCs36J);
    const merged = Object.assign(createCommonMessageDefault(message));
    tmp5 = obj;
  }
  return tmp5;
};
