// === Module 5731: ? ===

// Module 5731
import react_native from "react-native" /* 17 */;
import RNSLog2 from "RNSLog" /* 5727 */;
import react_mod from "react" /* 19 */;

let react = react_mod;
const findNodeHandle = react_native.findNodeHandle;

export const useTabsHost = function useTabsHost(arg0) {
  let items;
  let onTabSelected;
  let ref;
  let ref2;
  ({ componentNodeRef: require, onTabSelected } = arg0);
  react = undefined;
  react = react.useRef(-1);
  const effect = react.useEffect(() => {
    if (null != require.current) {
      let num2 = findNodeHandle(tmp.current);
      if (num2 == null) {
        num2 = -1;
      }
      ref2.current = num2;
    } else {
      ref2.current = -1;
    }
  }, []);
  const obj = {
    onTabSelected: react.useCallback((nativeEvent) => {
      const RNSLog = RNSLog2.RNSLog;
      let num = ref2.current;
      const log = RNSLog.log;
      if (num == null) {
        num = -1;
      }
      log("TabsHost [" + num + "] onTabSelected: " + JSON.stringify(nativeEvent.nativeEvent));
      if (onTabSelected != null) {
        onTabSelected(nativeEvent);
      }
    }, items)
  };
  items = [onTabSelected];
  return obj;
};