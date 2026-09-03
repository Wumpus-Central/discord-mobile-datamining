// === Module 7827: useConversationBackoffRef ===

// Module 7827 (useConversationBackoffRef)
import closure_2 from "noop" /* 19 */;
import CONVERSATION_COLORS from "CONVERSATION_COLORS" /* 7353 */;

({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: c4 } = CONVERSATION_COLORS);
const result = require("set").fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export const useConversationBackoffRef = function useConversationBackoffRef(items) {
  if (items === undefined) {
    items = [];
  }
  let ref;
  ref = React.useRef(new ref(581)(closure_4, closure_3));
  const effect = React.useEffect(() => {
    current = current.current;
    return () => {
      current.succeed();
    };
  }, items);
  return ref;
};