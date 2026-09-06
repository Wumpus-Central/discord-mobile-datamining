// === Module 4949: ? ===

// Module 4949
import bottomTabsDebugLog from "bottomTabsDebugLog" /* 4950 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["onNativeFocusChange", "experimentalControlNavigationStateInJS", "bottomAccessory", "nativeContainerStyle"];
const useState = fn(19).useState;
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet, findNodeHandle: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx, jsxs: closure_9 } = jsxProd);
const fillParent = StyleSheet.create({ fillParent: { flex: 1, width: "100%", height: "100%" } });

export default function TabsHost(onNativeFocusChange) {
  let obj = onNativeFocusChange(4950);
  obj.bottomTabsDebugLog("TabsHost render");
  onNativeFocusChange = onNativeFocusChange.onNativeFocusChange;
  let controlledBottomTabs = onNativeFocusChange.experimentalControlNavigationStateInJS;
  if (undefined === controlledBottomTabs) {
    controlledBottomTabs = ref(4925).experiment.controlledBottomTabs;
  }
  ({ bottomAccessory, nativeContainerStyle } = onNativeFocusChange);
  const tmp4 = _objectWithoutProperties(onNativeFocusChange, closure_3);
  ref = noop.useRef(null);
  dependencyMap = noop.useRef(-1);
  const effect = noop.useEffect(() => {
    if (null != ref.current) {
      let num2 = React6(tmp.current);
      if (num2 == null) {
        num2 = -1;
      }
      closure_2.current = num2;
    } else {
      closure_2.current = -1;
    }
  }, []);
  const items = [onNativeFocusChange];
  const callback = noop.useCallback((nativeEvent) => {
    let num = ref.current;
    if (num == null) {
      num = -1;
    }
    bottomTabsDebugLog.bottomTabsDebugLog("TabsHost [" + num + "] onNativeFocusChange: " + JSON.stringify(nativeEvent.nativeEvent));
    if (onNativeFocusChange != null) {
      onNativeFocusChange(nativeEvent);
    }
  }, items);
  [r10041, r10042] = _slicedToArray(useState("regular"), 2);
  obj = { style: fillParent.fillParent, onNativeFocusChange: callback, controlNavigationStateInJS: controlledBottomTabs, nativeContainerBackgroundColor: null, ref: null };
  let backgroundColor;
  const tmp8 = _slicedToArray(useState("regular"), 2);
  const tmp9 = closure_9;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  obj.nativeContainerBackgroundColor = backgroundColor;
  obj.ref = ref;
  const merged = Object.assign(tmp4);
  const items1 = [tmp4.children, ];
  if (bottomAccessory) {
    bottomAccessory = false;
  }
  items1[1] = bottomAccessory;
  obj.children = items1;
  return tmp9(ref(4951), obj);
};