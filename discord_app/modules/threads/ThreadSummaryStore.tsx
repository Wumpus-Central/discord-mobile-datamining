// discord_app/modules/threads/ThreadSummaryStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

function handleSummarizeThreadFinish() {
  c0 = false;
}
let c0 = false;
const Store = initializeDefault.Store;
class ThreadSummaryStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.summaryInProgress = false;
    return applyArgumentsResult;
  }
}
const prototype = ThreadSummaryStore.prototype;
prototype["initialize"] = function initialize() {
  c0 = false;
};
prototype["isInProgress"] = function isInProgress() {
  return c0;
};
ThreadSummaryStore.displayName = "ThreadSummaryStore";
const threadSummaryStore = new ThreadSummaryStore(DispatcherDefault, {
  SUMMARIZE_THREAD_START: function handleSummarizeThreadStart() {
    c0 = true;
  },
  SUMMARIZE_THREAD_SUCCESS: handleSummarizeThreadFinish,
  SUMMARIZE_THREAD_FAILURE: handleSummarizeThreadFinish,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/ThreadSummaryStore.tsx");

export default threadSummaryStore;
