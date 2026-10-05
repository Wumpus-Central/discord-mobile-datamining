// discord_app/modules/threads/ThreadSummaryStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  SUMMARIZE_THREAD_FAILURE: handleSummarizeThreadFinish,
};
const threadSummaryStore = new ThreadSummaryStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/threads/ThreadSummaryStore.tsx");

export default threadSummaryStore;
