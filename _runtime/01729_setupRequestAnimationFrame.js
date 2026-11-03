// === Module 1729: setupRequestAnimationFrame ===

// Module 1729 (setupRequestAnimationFrame)
let items = [{ code: "(function setupRequestAnimationFrame_Pnpm_requestAnimationFramePolyfillTs1(animationQueuePollingRate){const timeoutInterval=animationQueuePollingRate;let queuedCallbacks=[];let queuedCallbacksBegin=0;let queuedCallbacksEnd=0;let flushedCallbacks=queuedCallbacks;let flushedCallbacksBegin=0;let flushedCallbacksEnd=0;let flushRequested=false;function flushAnimationFrame(){flushRequested=false;const timestamp=performance.now();flushedCallbacks=queuedCallbacks;queuedCallbacks=[];flushedCallbacksBegin=queuedCallbacksBegin;flushedCallbacksEnd=queuedCallbacksEnd;queuedCallbacksBegin=queuedCallbacksEnd;for(const callback of flushedCallbacks){callback(timestamp);globalThis.__drainMicrotasks();}flushedCallbacksBegin=flushedCallbacksEnd;}globalThis.requestAnimationFrame=function(callback){const handle=queuedCallbacksEnd++;queuedCallbacks.push(callback);if(!flushRequested){flushRequested=true;setTimeout(flushAnimationFrame,timeoutInterval);}return handle;};globalThis.cancelAnimationFrame=function(handle){if(handle<flushedCallbacksBegin||handle>=queuedCallbacksEnd){return;}if(handle<flushedCallbacksEnd){flushedCallbacks[handle-flushedCallbacksBegin]=function(){};}else{queuedCallbacks[handle-queuedCallbacksBegin]=function(){};}};})" }];
[tmp2] = items;
function setupRequestAnimationFrame(arg0) {
  function flushAnimationFrame() {
    c7 = false;
    closure_4 = closure_1;
    closure_1 = [];
    closure_5 = closure_2;
    closure_6 = closure_3;
    closure_2 = closure_3;
    for (const item10013 of closure_1) {
      let item10013Result = item10013(performance.now());
      let _globalThis = globalThis;
      let __drainMicrotasksResult = globalThis.__drainMicrotasks();
      continue;
    }
    closure_5 = closure_6;
  }
  closure_0 = arg0;
  items = [];
  closure_1 = items;
  closure_2 = 0;
  closure_3 = 0;
  closure_4 = items;
  closure_5 = 0;
  closure_6 = 0;
  c7 = false;
  globalThis.requestAnimationFrame = (arg0) => {
    closure_3 = closure_3 + 1;
    closure_1.push(arg0);
    if (!c7) {
      c7 = true;
      const _setTimeout = setTimeout;
      const timerId = setTimeout(flushAnimationFrame, closure_0);
    }
    return closure_3;
  };
  globalThis.cancelAnimationFrame = (arg0) => {
    let tmp = arg0 < closure_5;
    if (!tmp) {
      tmp = arg0 >= closure_3;
    }
    if (!tmp) {
      if (arg0 < closure_6) {
        closure_4[arg0 - closure_5] = () => {

        };
      } else {
        closure_1[arg0 - closure_2] = () => {

        };
      }
    }
  };
}
setupRequestAnimationFrame.__workletHash = 5793041144224;
setupRequestAnimationFrame.__initData = tmp2;

export { setupRequestAnimationFrame };