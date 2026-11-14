// === Module 1749: ? ===

// Module 1749
let items = [{ code: "(function setupRequestAnimationFrame_Pnpm_requestAnimationFrameTs1(){let queuedCallbacks=[];let queuedCallbacksBegin=0;let queuedCallbacksEnd=0;let flushedCallbacks=queuedCallbacks;let flushedCallbacksBegin=0;let flushedCallbacksEnd=0;let queuedFinalizers=[];function executeQueue(timestamp){flushedCallbacks=queuedCallbacks;queuedCallbacks=[];flushedCallbacksBegin=queuedCallbacksBegin;flushedCallbacksEnd=queuedCallbacksEnd;queuedCallbacksBegin=queuedCallbacksEnd;if(flushedCallbacks.length>0){for(const callback of flushedCallbacks){callback(timestamp);globalThis.__drainMicrotasks();}}else{globalThis.__drainMicrotasks();}flushedCallbacksBegin=flushedCallbacksEnd;const finalizers=queuedFinalizers;queuedFinalizers=[];for(const finalizer of finalizers){finalizer();}}function requestAnimationFrame(callback){const handle=queuedCallbacksEnd++;queuedCallbacks.push(callback);return handle;}function cancelAnimationFrame(handle){if(handle<flushedCallbacksBegin||handle>=queuedCallbacksEnd){return;}if(handle<flushedCallbacksEnd){flushedCallbacks[handle-flushedCallbacksBegin]=function(){};}else{queuedCallbacks[handle-queuedCallbacksBegin]=function(){};}}function nativeFlushQueue(timestamp){flushQueue(timestamp);globalThis.__nativeRequestAnimationFrame(nativeFlushQueue);}function flushQueue(timestamp){globalThis.__frameTimestamp=timestamp;executeQueue(timestamp);globalThis.__frameTimestamp=undefined;}globalThis.requestAnimationFrame=requestAnimationFrame;globalThis.cancelAnimationFrame=cancelAnimationFrame;globalThis.requestAnimationFrameFinalizer=function(callback){queuedFinalizers.push(callback);};globalThis.__nativeRequestAnimationFrame(nativeFlushQueue);globalThis.__flushAnimationFrame=function(eventTimestamp){flushQueue(eventTimestamp);};})" }];
[tmp2] = items;
function setupRequestAnimationFrame() {
  items = [];
  c1 = 0;
  closure_2 = 0;
  c4 = 0;
  c5 = 0;
  closure_6 = [];
  globalThis.requestAnimationFrame = function requestAnimationFrame(arg0) {
    closure_2 = closure_2 + 1;
    items.push(arg0);
    return closure_2;
  };
  globalThis.cancelAnimationFrame = function cancelAnimationFrame(arg0) {
    let tmp = arg0 < c4;
    if (!tmp) {
      tmp = arg0 >= closure_2;
    }
    if (!tmp) {
      if (arg0 < c5) {
        items[arg0 - c4] = () => {

        };
      } else {
        items[arg0 - c1] = () => {

        };
      }
    }
  };
  globalThis.requestAnimationFrameFinalizer = (arg0) => {
    closure_6.push(arg0);
  };
  function nativeFlushQueue(__frameTimestamp) {
    globalThis.__frameTimestamp = __frameTimestamp;
    (function executeQueue(__frameTimestamp) {
      dependencyMap = length;
      length = [];
      closure_4 = closure_1;
      closure_5 = closure_1_2;
      closure_1 = closure_1_2;
      if (length.length > 0) {
        const iter = dependencyMap[Symbol.iterator]();
        while (iter !== undefined) {
          let tmp8 = iter.next()(__frameTimestamp);
          let _globalThis2 = globalThis;
          let __drainMicrotasksResult = globalThis.__drainMicrotasks();
          continue;
        }
      } else {
        const _globalThis = globalThis;
        globalThis.__drainMicrotasks();
      }
      closure_4 = closure_5;
      dependencyMap2 = [];
      dependencyMap2[Symbol.iterator]();
    })(__frameTimestamp);
    globalThis.__frameTimestamp = undefined;
    const result = globalThis.__nativeRequestAnimationFrame(nativeFlushQueue);
  }
  let result = globalThis.__nativeRequestAnimationFrame(nativeFlushQueue);
  globalThis.__flushAnimationFrame = (__frameTimestamp) => {
    globalThis.__frameTimestamp = __frameTimestamp;
    (function executeQueue(__frameTimestamp) {
      dependencyMap = length;
      length = [];
      closure_4 = closure_1;
      closure_5 = closure_1_2;
      closure_1 = closure_1_2;
      if (length.length > 0) {
        const iter = dependencyMap[Symbol.iterator]();
        while (iter !== undefined) {
          let tmp8 = iter.next()(__frameTimestamp);
          let _globalThis2 = globalThis;
          let __drainMicrotasksResult = globalThis.__drainMicrotasks();
          continue;
        }
      } else {
        const _globalThis = globalThis;
        globalThis.__drainMicrotasks();
      }
      closure_4 = closure_5;
      dependencyMap2 = [];
      dependencyMap2[Symbol.iterator]();
    })(__frameTimestamp);
    globalThis.__frameTimestamp = undefined;
  };
}
setupRequestAnimationFrame.__workletHash = 4828216215772;
setupRequestAnimationFrame.__initData = tmp2;

export { setupRequestAnimationFrame };