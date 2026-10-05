// discord_app/modules/conversations/useConversationBackoffRef.tsx
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import react from "../../../_runtime/00019_react.js";
import ConversationConstants from "ConversationConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: closure_4 } = ConversationConstants);
const result = size.fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export const useConversationBackoffRef = function useConversationBackoffRef() {
  let items;
  if (items === undefined) {
    items = [];
  }
  const useRef = react.useRef;
  const tmp = new BackoffDefault(React3, _false);
  const ref = useRef(tmp);
  const effect = react.useEffect(() => {
    const current = ref.current;
    return () => {
      current.succeed();
    };
  }, items);
  return ref;
};
