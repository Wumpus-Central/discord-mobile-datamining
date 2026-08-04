// discord_app/modules/threads/ThreadSummaryStore.tsx
import { Store } from "initialize";

function handleSummarizeThreadFinish() {
  let c0 = false;
}
let c0 = false;
class ThreadSummaryStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.summaryInProgress = false;
    return applyArgumentsResult;
  }
}
const prototype = ThreadSummaryStore.prototype;
prototype["initialize"] = function initialize() {
  let c0 = false;
};
prototype["isInProgress"] = function isInProgress() {
  return c0;
};
ThreadSummaryStore.displayName = "ThreadSummaryStore";
const threadSummaryStore = new ThreadSummaryStore(require("dispatcher"), {
  SUMMARIZE_THREAD_START: function handleSummarizeThreadStart() {
    let c0 = true;
  },
  SUMMARIZE_THREAD_SUCCESS: handleSummarizeThreadFinish,
  SUMMARIZE_THREAD_FAILURE: handleSummarizeThreadFinish
});
const result = require("set").fileFinishedImporting("modules/threads/ThreadSummaryStore.tsx");

export default threadSummaryStore;