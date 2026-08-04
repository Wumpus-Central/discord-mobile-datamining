// discord_app/modules/conversations/useConversationBackoffRef.tsx
import noop from "noop";
import CONVERSATION_COLORS from "CONVERSATION_COLORS";

let c3;
let c4;
({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: c4 } = CONVERSATION_COLORS);
const result = require("fails").fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

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