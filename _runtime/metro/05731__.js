// _runtime/metro/05731__.js
import react_native from "../00017_react-native.js";
import RNSLog2 from "../05727_RNSLog.js";
import react_mod from "../00019_react.js";

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
    }, items),
  };
  items = [onTabSelected];
  return obj;
};
