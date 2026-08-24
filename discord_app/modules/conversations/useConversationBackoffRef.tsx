// discord_app/modules/conversations/useConversationBackoffRef.tsx
import closure_2 from "../../../_runtime/00019_noop.js";
import CONVERSATION_COLORS from "ConversationConstants.tsx";

({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: c4 } = CONVERSATION_COLORS);
const result = require("set").fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export const useConversationBackoffRef = function useConversationBackoffRef(items) {
  if (items === undefined) {
    items = [];
  }
  let ref;
  ref = React.useRef(new ref(584)(closure_4, closure_3));
  const effect = React.useEffect(() => {
    current = current.current;
    return () => {
      current.succeed();
    };
  }, items);
  return ref;
};