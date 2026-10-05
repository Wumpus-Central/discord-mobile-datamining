// discord_app/modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import Constants from "../../../../../Constants.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import ReferencedMessageStore2 from "../../../../replies/ReferencedMessageStore.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const ReferencedMessageStore = ReferencedMessageStore2;

const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx",
);

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  let intl;
  message = message.message;
  const type = message.type;
  const messageReference = message.messageReference;
  const tmp3 = _modDef38;
  tmp3(
    type === MessageTypes.THREAD_STARTER_MESSAGE,
    "cannot call createThreadStarterSystemMessage on a message of type " + type,
  );
  let tmp5 = null;
  if (ReferencedMessageStore.getMessageByReference(messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = { content: intl.string(intl2.t.OCs36J) };
    intl = intl2.intl;
    const merged = Object.assign(createCommonMessageDefault(message));
    tmp5 = obj;
  }
  return tmp5;
};
