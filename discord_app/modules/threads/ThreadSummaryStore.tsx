// === Module 7404: ThreadSummaryStore ===

// Module 7404 (ThreadSummaryStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function handleSummarizeThreadFinish() {
  c0 = false;
}
let c0 = false;
const Store = get_initializedDefault.Store;
class ThreadSummaryStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.summaryInProgress = false;
    return applyArgumentsResult;
  }
  initialize() {
    c0 = false;
  }
  isInProgress() {
    return c0;
  }
}
const prototype = ThreadSummaryStore.prototype;
ThreadSummaryStore.displayName = "ThreadSummaryStore";
const obj = {
  SUMMARIZE_THREAD_START: function handleSummarizeThreadStart() {
    c0 = true;
  },
  SUMMARIZE_THREAD_SUCCESS: handleSummarizeThreadFinish,
  SUMMARIZE_THREAD_FAILURE: handleSummarizeThreadFinish
};
const threadSummaryStore = new ThreadSummaryStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/threads/ThreadSummaryStore.tsx");

export default threadSummaryStore;