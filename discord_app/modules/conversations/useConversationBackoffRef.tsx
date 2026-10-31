// === Module 9848: useConversationBackoffRef ===

// Module 9848 (useConversationBackoffRef)
import BackoffDefault from "Backoff" /* 559 */;
import noop from "module_19" /* 19 */;

const ConversationConstants = fn(5655);
({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: closure_4 } = ConversationConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export function useConversationBackoffRef() {
  if (items === undefined) {
    items = [];
  }
  const ref = noop.useRef(new BackoffDefault(React4, React3));
  const effect = noop.useEffect(() => {
    const current = ref.current;
    return () => {
      current.succeed();
    };
  }, items);
  return ref;
}