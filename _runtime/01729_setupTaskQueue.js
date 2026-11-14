// === Module 1729: setupTaskQueue ===

// Module 1729 (setupTaskQueue)
const items = [{ code: "(function setupTaskQueue_Pnpm_taskQueueTs1(){const queue={timeoutCallbacks:new Map()};globalThis._taskQueue=queue;globalThis.__runTimeoutCallback=function(handlerId){const task=queue.timeoutCallbacks.get(handlerId);task===null||task===void 0||task();queue.timeoutCallbacks.delete(handlerId);};})" }];
[tmp2] = items;
function setupTaskQueue() {
  const _taskQueue = { timeoutCallbacks: new Map() };
  globalThis._taskQueue = _taskQueue;
  globalThis.__runTimeoutCallback = (arg0) => {
    value = obj.timeoutCallbacks.get(arg0);
    if (value != null) {
      value();
    }
    obj.timeoutCallbacks.delete(arg0);
    const timeoutCallbacks = obj.timeoutCallbacks;
    const timeoutCallbacks2 = obj.timeoutCallbacks;
  };
}
setupTaskQueue.__workletHash = 15970174102900;
setupTaskQueue.__initData = tmp2;
const items1 = [{ code: "(function pushTask_Pnpm_taskQueueTs2(callback,handlerId,delay){const queue=globalThis._taskQueue;queue.timeoutCallbacks.set(handlerId,callback);globalThis._scheduleTimeoutCallback(delay,handlerId);})" }];
[tmp3] = items1;
function pushTask(arg0, arg1, arg2) {
  const result = globalThis._taskQueue.timeoutCallbacks.set(arg1, arg0);
  const result1 = globalThis._scheduleTimeoutCallback(arg2, arg1);
}
pushTask.__workletHash = 2906871399844;
pushTask.__initData = tmp3;

export { setupTaskQueue };
export { pushTask };