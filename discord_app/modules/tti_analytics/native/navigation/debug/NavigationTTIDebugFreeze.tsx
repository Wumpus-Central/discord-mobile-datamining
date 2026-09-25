// === Module 16156: NavigationTTIDebugFreeze ===

// Module 16156 (NavigationTTIDebugFreeze)
import NativeTTIManagerModule from "NativeTTIManagerModule" /* 4695 */;
import size from "module_2" /* 2 */;

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
  let target;
  if (_null != null) {
    target = _null.target;
  }
  if (target == null) {
    target = null;
  }
  return target;
};
export const subscribeNavigationTTIDebugFreezeTarget = function subscribeNavigationTTIDebugFreezeTarget(arg0) {
  closure_0 = arg0;
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
  c3 = { target: freeze, armedDuringTraceId, destinationKey };
  notify();
};
export const disarmNavigationTTIDebugFreeze = function disarmNavigationTTIDebugFreeze() {
  if (null != c3) {
    c3 = null;
    notify();
  }
};
export const emitNavigationTTIDebugCheckpoint = function emitNavigationTTIDebugCheckpoint(traceId, logActiveBundle) {
  if (null != c3) {
    let name2 = traceId;
    if (traceId.traceId !== tmp.armedDuringTraceId) {
      if (null == tmp.destinationKey) {
        let name = tmp.target;
        if (name.kind !== name2.kind) {
          if (tmp2) {
            const _default = NativeTTIManagerModule.default;
            c3 = null;
            notify();
            if (runningTTIAutomationResult) {
              let tmp11;
              if (logActiveBundle != null) {
                tmp11 = logActiveBundle();
              }
              if (null != tmp11) {
                _default.logToDevice(tmp11);
              }
              const result = _default.freezeNavigationTTIDebuggerAfterNextFrame();
              return true;
            } else {
              return false;
            }
            runningTTIAutomationResult = _default.runningTTIAutomation();
          }
        } else {
          if ("milestone" !== name.kind) {
            let tmp3 = "component" === name.kind && "component" === name2.kind && name.spanComponent === name2.spanComponent;
          }
          name = name.name;
          name2 = name2.name;
          tmp3 = name === name2;
        }
      }
    }
  }
  return false;
};