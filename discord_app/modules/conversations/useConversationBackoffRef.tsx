// === Module 12683: useConversationBackoffRef ===

// Module 12683 (useConversationBackoffRef)
import noop from "noop" /* 19 */;
import CONVERSATION_COLORS from "CONVERSATION_COLORS" /* 5016 */;

({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: c4 } = CONVERSATION_COLORS);
const result = require("obj132").fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

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