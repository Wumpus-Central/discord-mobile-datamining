// discord_app/modules/conjure/chat/conjureAgentHiddenMessages.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentHiddenMessages.tsx");

export function isConjureAgentHiddenMessage(content) {
  return content.trimStart().startsWith("!!");
}
