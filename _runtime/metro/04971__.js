// _runtime/metro/04971__.js
import RNSLog2 from "../04963_RNSLog.js";
import noop from "00019__.js";

require = fn;
const findNodeHandle = fn(17).findNodeHandle;

export const useTabsScreen = function useTabsScreen(componentNodeRef) {
  componentNodeRef = componentNodeRef.componentNodeRef;
  const onDidAppear = componentNodeRef.onDidAppear;
  const onDidDisappear = componentNodeRef.onDidDisappear;
  const onWillAppear = componentNodeRef.onWillAppear;
  const onWillDisappear = componentNodeRef.onWillDisappear;
  const ref = onDidDisappear.useRef(-1);
  const effect = onDidDisappear.useEffect(() => {
    if (null != componentNodeRef.current) {
      let num2 = findNodeHandle(tmp.current);
      if (num2 == null) {
        num2 = -1;
      }
      ref.current = num2;
    } else {
      ref.current = -1;
    }
  }, []);
  const items = [onWillAppear];
  const items1 = [onDidAppear];
  const callback = onDidDisappear.useCallback((arg0) => {
    const RNSLog = RNSLog2.RNSLog;
    RNSLog.log("TabsScreen [" + ref.current + "] onWillAppear received");
    if (onWillAppear != null) {
      tmp2(arg0);
    }
  }, items);
  const items2 = [onWillDisappear];
  const callback1 = onDidDisappear.useCallback((arg0) => {
    const RNSLog = RNSLog2.RNSLog;
    RNSLog.log("TabsScreen [" + ref.current + "] onDidAppear received");
    if (onDidAppear != null) {
      tmp2(arg0);
    }
  }, items1);
  const items3 = [onDidDisappear];
  const callback2 = onDidDisappear.useCallback((arg0) => {
    const RNSLog = RNSLog2.RNSLog;
    RNSLog.log("TabsScreen [" + ref.current + "] onWillDisappear received");
    if (onWillDisappear != null) {
      tmp2(arg0);
    }
  }, items2);
  const callback3 = onDidDisappear.useCallback((arg0) => {
    const RNSLog = RNSLog2.RNSLog;
    RNSLog.log("TabsScreen [" + ref.current + "] onDidDisappear received");
    if (onDidDisappear != null) {
      tmp2(arg0);
    }
  }, items3);
  let RNSLog = componentNodeRef(onDidAppear[2]).RNSLog;
  let num = ref.current;
  if (num == null) {
    num = -1;
  }
  RNSLog.log("TabsScreen [" + num + "] render; screenKey: " + componentNodeRef.screenKey);
  return {
    componentNodeRef,
    lifecycleCallbacks: {
      onWillAppear: callback,
      onDidAppear: callback1,
      onWillDisappear: callback2,
      onDidDisappear: callback3,
    },
  };
};
