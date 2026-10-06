// === Module 16525: NavigationTTIDebugFreeze ===

// Module 16525 (NavigationTTIDebugFreeze)
import react_native from "react-native" /* 4749 */;
import size from "module_2" /* 2 */;

let target;

function notify() {
  for (const item10005 of set) {
    let item10005Result = item10005();
    continue;
  }
}
const set = new Set();
let c3 = null;
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIDebugFreeze.tsx");

export const getNavigationTTIDebugFreezeTarget = function getNavigationTTIDebugFreezeTarget() {
  target = undefined;
  if (target != null) {
    target = target.target;
  }
  if (target == null) {
    target = null;
  }
  return target;
};
export const subscribeNavigationTTIDebugFreezeTarget = function subscribeNavigationTTIDebugFreezeTarget(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  return () => set.delete(closure_0);
};
export const armNavigationTTIDebugFreeze = function armNavigationTTIDebugFreeze(freeze, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let armedDuringTraceId = obj.armedDuringTraceId;
  if (armedDuringTraceId === undefined) {
    armedDuringTraceId = null;
  }
  let destinationKey = obj.destinationKey;
  if (destinationKey === undefined) {
    destinationKey = null;
  }
  let c3 = { target: freeze, armedDuringTraceId, destinationKey };
  notify();
};
export const disarmNavigationTTIDebugFreeze = function disarmNavigationTTIDebugFreeze() {
  if (null != c3) {
    c3 = null;
    notify();
  }
};
export const emitNavigationTTIDebugCheckpoint = function emitNavigationTTIDebugCheckpoint(traceId, logActiveBundle) {
  if (null != target) {
    if (traceId.traceId !== target.armedDuringTraceId) {
      if (null == target.destinationKey) {
        target = tmp.target;
        let tmp2 = target.kind === traceId.kind;
        if (tmp2) {
          if ("milestone" === target.kind) {
            let tmp3;
            if ("milestone" === traceId.kind) {
              tmp3 = target.name === traceId.name;
            }
            tmp2 = tmp3;
          }
          tmp3 = "component" === target.kind && "component" === traceId.kind && target.spanComponent === traceId.spanComponent;
        }
        if (tmp2) {
          const _default = react_native.default;
          target = null;
          const runningTTIAutomationResult = _default.runningTTIAutomation();
          notify();
          if (runningTTIAutomationResult) {
            let tmp10;
            if (logActiveBundle != null) {
              tmp10 = logActiveBundle();
            }
            if (null != tmp10) {
              _default.logToDevice(tmp10);
            }
            const result = _default.freezeNavigationTTIDebuggerAfterNextFrame();
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }
  return false;
};