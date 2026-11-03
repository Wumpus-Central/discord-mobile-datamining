// _runtime/01725_setupRunLoop.js
import setupTaskQueue from "01726_setupTaskQueue.js";
import setupQueueMicrotask from "01727_setupQueueMicrotask.js";
import setupSetTimeout from "01728_setupSetTimeout.js";
import setupRequestAnimationFrame from "01729_setupRequestAnimationFrame.js";
import setupSetImmediate from "01730_setupSetImmediate.js";
import setupSetInterval from "01731_setupSetInterval.js";

const items = [
  {
    code: "(function setupRunLoop_Pnpm_indexTs1(animationQueuePollingRate){let[setupTaskQueue,setupQueueMicrotask,setupSetTimeout,setupRequestAnimationFrame,setupSetImmediate,setupSetInterval]=this.__closure;setupTaskQueue();setupQueueMicrotask();setupSetTimeout();setupRequestAnimationFrame(animationQueuePollingRate);setupSetImmediate();setupSetInterval();})",
  },
  setupTaskQueue.setupTaskQueue,
  setupQueueMicrotask.setupQueueMicrotask,
  setupSetTimeout.setupSetTimeout,
  setupRequestAnimationFrame.setupRequestAnimationFrame,
  setupSetImmediate.setupSetImmediate,
  setupSetInterval.setupSetInterval,
];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
function setupRunLoop(arg0) {
  _undefined();
  _undefined2();
  _undefined3();
  _undefined4(arg0);
  _undefined5();
  _undefined6();
}
const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
setupRunLoop.__closure = items1;
setupRunLoop.__workletHash = 16318616616210;
setupRunLoop.__initData = tmp2;

export { setupRunLoop };
