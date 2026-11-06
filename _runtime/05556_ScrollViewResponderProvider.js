// _runtime/05556_ScrollViewResponderProvider.js
import jsxProd from "react/00021_jsxProd.js";
import noop_mod from "metro/00019__.js";
import get_ActivityIndicator from "metro/00017__.js";

let noop = noop_mod;
({ useCallback: c2, useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let noop = noop_mod;
({ Keyboard: closure_6, Platform: metroImportDefault, StyleSheet, TextInput: closure_8, View: closure_9 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let c11 = 0;
let closure_12 = [];
const logicalResponder = StyleSheet.create({ logicalResponder: { display: "contents" } });

export (keyboardShouldPersistTaps) => {
  keyboardShouldPersistTaps = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  const tmp = closure_5(false);
  dependencyMap = tmp;
  const ref = closure_5(false);
  items = [tmp, keyboardShouldPersistTaps];
  closure_3(() => {
    sum = sum + 1;
    if (1 >= sum) {
      let addListener;
      if (closure_1_6 != null) {
        addListener = closure_1_6.addListener;
      }
      if (null != addListener) {
        const metrics = closure_1_6.metrics;
        let height;
        if (metrics != null) {
          const metricsResult = metrics();
          if (metricsResult != null) {
            height = metricsResult.height;
          }
        }
        let tmp5 = null != height;
        if (tmp5) {
          tmp5 = height > 0;
        }
        function setVisible(endCoordinates) {
          endCoordinates = endCoordinates.endCoordinates;
          let height;
          if (endCoordinates != null) {
            height = endCoordinates.height;
          }
          let tmp2 = null != height;
          if (tmp2) {
            tmp2 = height > 0;
          }
          const result = keyboardShouldPersistTaps(5525).setKeyboardVisibility(tmp2);
        }
        let result = keyboardShouldPersistTaps(isRNGHResponderEvent[3]).setKeyboardVisibility(tmp5);
        items = [
          closure_1_6.addListener("keyboardDidShow", setVisible),
          closure_1_6.addListener("keyboardWillShow", setVisible),
          closure_1_6.addListener("keyboardDidHide", () => {
                const result = keyboardShouldPersistTaps(5525).setKeyboardVisibility(false);
              })
        ];
        const obj2 = keyboardShouldPersistTaps(isRNGHResponderEvent[3]);
      }
    }
    return () => {
      (function unsubscribeFromKeyboardVisibility() {
        diff = diff - 1;
        if (0 >= diff) {
          for (const item10008 of closure_12) {
            let removeResult = item10008.remove();
            continue;
          }
          closure_12 = [];
          const result = closure_1_0(dependencyMap[3]).setKeyboardVisibility(false);
          const obj = closure_1_0(dependencyMap[3]);
        }
      })();
    };
  }, []);
  let tmp2 = closure_4(() => ({ isRNGHResponderEvent, keyboardShouldPersistTaps }), items);
  const tmp4 = ref(() => {
    closure_1.current = false;
    return false;
  }, []);
  let tmp5 = ref((target) => {
    if (isRNGHResponderEvent.current) {
      tmp.current = false;
      closure_2.current = false;
      return true;
    } else {
      const State = React5.State;
      let flag = false;
      if (null != State.currentlyFocusedInput()) {
        const metrics = timestampProducer.metrics;
        let metricsResult;
        if (metrics != null) {
          metricsResult = metrics();
        }
        let tmp5 = null != metricsResult;
        if (!tmp5) {
          const _Number = Number;
          tmp5 = Number(metroImportDefault.Version) < 30;
        }
        let tmp8 = null != metricsResult;
        if (tmp8) {
          tmp8 = 0 === metricsResult.height;
        }
        if (tmp5) {
          tmp5 = !tmp8;
        }
        flag = tmp5;
      }
      if (flag) {
        const State2 = React5.State;
        flag = target.target !== State2.currentlyFocusedInput();
      }
      closure_2.current = flag;
      return flag;
    }
  }, []);
  const tmp6 = ref((target) => {
    if (ref.current) {
      tmp.current = false;
      const State = React5.State;
      const result = State.currentlyFocusedInput();
      let tmp5 = null != result;
      if (tmp5) {
        const State2 = React5.State;
        let flag2 = false;
        if (null != State2.currentlyFocusedInput()) {
          const metrics = timestampProducer.metrics;
          let metricsResult;
          if (metrics != null) {
            metricsResult = metrics();
          }
          let tmp7 = null != metricsResult;
          if (!tmp7) {
            const _Number = Number;
            tmp7 = Number(metroImportDefault.Version) < 30;
          }
          let tmp10 = null != metricsResult;
          if (tmp10) {
            tmp10 = 0 === metricsResult.height;
          }
          if (tmp7) {
            tmp7 = !tmp10;
          }
          flag2 = tmp7;
        }
        tmp5 = flag2;
      }
      if (tmp5) {
        tmp5 = target.target !== result;
      }
      if (tmp5) {
        const State3 = React5.State;
        State3.blurTextInput(result);
      }
    }
  }, []);
  let obj = { value: tmp2, children: null };
  let obj2 = { collapsable: false, pointerEvents: "box-none", style: logicalResponder.logicalResponder, onStartShouldSetResponderCapture: null, onStartShouldSetResponder: null, onResponderRelease: null, onResponderTerminate: null, children: null };
  let tmp11;
  if ("handled" === keyboardShouldPersistTaps) {
    tmp11 = tmp4;
  }
  obj2.onStartShouldSetResponderCapture = tmp11;
  let tmp12;
  if ("handled" === keyboardShouldPersistTaps) {
    tmp12 = tmp5;
  }
  obj2.onStartShouldSetResponder = tmp12;
  let tmp13;
  if ("handled" === keyboardShouldPersistTaps) {
    tmp13 = tmp6;
  }
  obj2.onResponderRelease = tmp13;
  let tmp14;
  if ("handled" === keyboardShouldPersistTaps) {
    tmp14 = tmp7;
  }
  obj2.onResponderTerminate = tmp14;
  obj2.children = keyboardShouldPersistTaps.children;
  obj.children = <closure_9 collapsable={false} pointerEvents="box-none" style={logicalResponder.logicalResponder} onStartShouldSetResponderCapture={null} onStartShouldSetResponder={null} onResponderRelease={null} onResponderTerminate={null}>{null}</closure_9>;
  return jsx(keyboardShouldPersistTaps(5525).JSResponderContext, { value: tmp2, children: null });
}