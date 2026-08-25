// === Module 4789: TabsHost ===

// Module 4789 (TabsHost)
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "_objectWithoutProperties" /* 109 */;
import closure_6 from "noop" /* 19 */;
import { useState } from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let closure_3 = ["onNativeFocusChange", "experimentalControlNavigationStateInJS", "bottomAccessory", "nativeContainerStyle"];
({ Platform, StyleSheet, findNodeHandle: closure_8 } = get_ActivityIndicator);
({ jsx, jsxs: c9 } = jsxProd);
const styles = StyleSheet.create({ fillParent: { flex: 1, width: "100%", height: "100%" } });

export default function TabsHost(onNativeFocusChange) {
  let obj = onNativeFocusChange(4790);
  obj.bottomTabsDebugLog("TabsHost render");
  onNativeFocusChange = onNativeFocusChange.onNativeFocusChange;
  let controlledBottomTabs = onNativeFocusChange.experimentalControlNavigationStateInJS;
  if (undefined === controlledBottomTabs) {
    controlledBottomTabs = ref(4765).experiment.controlledBottomTabs;
  }
  ({ bottomAccessory, nativeContainerStyle } = onNativeFocusChange);
  const tmp4 = callback2(onNativeFocusChange, closure_3);
  ref = React.useRef(null);
  dependencyMap = React.useRef(-1);
  const effect = React.useEffect(() => {
    if (null != ref.current) {
      let num2 = closure_1_8(tmp.current);
      if (num2 == null) {
        num2 = -1;
      }
      closure_2.current = num2;
      const tmp3 = closure_2;
    } else {
      closure_2.current = -1;
    }
  }, []);
  const items = [onNativeFocusChange];
  const callback = React.useCallback((nativeEvent) => {
    let num = ref.current;
    if (num == null) {
      num = -1;
    }
    onNativeFocusChange(ref[5]).bottomTabsDebugLog("TabsHost [" + num + "] onNativeFocusChange: " + JSON.stringify(nativeEvent.nativeEvent));
    if (onNativeFocusChange != null) {
      onNativeFocusChange(nativeEvent);
    }
  }, items);
  [r10041, r10042] = callback(useState("regular"), 2);
  obj = { style: fillParent.fillParent, onNativeFocusChange: callback, controlNavigationStateInJS: controlledBottomTabs, nativeContainerBackgroundColor: null, ref: null };
  let backgroundColor;
  const tmp8 = callback(useState("regular"), 2);
  const tmp9 = closure_9;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  obj[3] = backgroundColor;
  obj[4] = ref;
  const merged = Object.assign(tmp4);
  const items1 = [tmp4.children, ];
  if (bottomAccessory) {
    bottomAccessory = false;
  }
  items1[1] = bottomAccessory;
  obj.children = items1;
  return tmp9(ref(4791), obj);
};