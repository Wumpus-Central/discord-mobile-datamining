// discord_app/modules/conversations/useConversationBackoffRef.tsx
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const ConversationConstants = fn(7598);
({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: closure_4 } = ConversationConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export const useConversationBackoffRef = function useConversationBackoffRef() {
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
};
