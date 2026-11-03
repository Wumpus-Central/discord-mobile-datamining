// === Module 1727: setupQueueMicrotask ===

// Module 1727 (setupQueueMicrotask)
const items = [{ code: "(function setupQueueMicrotask_Pnpm_queueMicrotaskPolyfillTs1(){globalThis.queueMicrotask=globalThis.HermesInternal.enqueueJob;})" }];
[tmp2] = items;
function setupQueueMicrotask() {
  globalThis.queueMicrotask = HermesInternal.enqueueJob;
}
setupQueueMicrotask.__workletHash = 10179751347972;
setupQueueMicrotask.__initData = tmp2;

export { setupQueueMicrotask };