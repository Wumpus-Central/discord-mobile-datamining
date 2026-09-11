// _runtime/metro/04967__.js
import RNSLog2 from "../04963_RNSLog.js";
import noop from "00019__.js";

require = fn;
const findNodeHandle = fn(17).findNodeHandle;

export const useTabsHost = function useTabsHost(arg0) {
  ({ componentNodeRef: require, onTabSelected } = arg0);
  noop = undefined;
  noop = noop.useRef(-1);
  const effect = noop.useEffect(() => {
    if (null != ref.current) {
      let num2 = findNodeHandle(tmp.current);
      if (num2 == null) {
        num2 = -1;
      }
      closure_2.current = num2;
    } else {
      closure_2.current = -1;
    }
  }, []);
  const obj = { onTabSelected: null };
  const items = [onTabSelected];
  obj.onTabSelected = noop.useCallback((nativeEvent) => {
    const RNSLog = RNSLog2.RNSLog;
    let num = ref2.current;
    if (num == null) {
      num = -1;
    }
    RNSLog.log("TabsHost [" + num + "] onTabSelected: " + JSON.stringify(nativeEvent.nativeEvent));
    if (onTabSelected != null) {
      onTabSelected(nativeEvent);
    }
  }, items);
  return obj;
};
