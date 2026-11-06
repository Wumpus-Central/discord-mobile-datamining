// discord_app/modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import util from "../../../../../intl/index.native.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ReferencedMessageStore from "../../../../replies/ReferencedMessageStore.tsx";

require = fn;
const ReferencedMessageState = fn(7865).ReferencedMessageState;
const MessageTypes = fn(1072).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx",
);

export function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  let merged = dependencyMap;
  _modDef38(
    type === MessageTypes.THREAD_STARTER_MESSAGE,
    "cannot call createThreadStarterSystemMessage on a message of type " + type,
  );
  const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
  if (messageByReference.state === ReferencedMessageState.LOADED) {
    return null;
  } else {
    const intl = util.intl;
    if (messageByReference.state === tmp6.DELETED) {
      let OCs36J = util.t.mE3KJN;
    } else {
      OCs36J = util.t.OCs36J;
    }
    const obj = { content: intl.string(OCs36J) };
    merged = Object.assign(createCommonMessageDefault(message));
  }
}
