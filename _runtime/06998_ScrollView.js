// === Module 6998: ScrollView ===

// Module 6998 (ScrollView)
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6967 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import "module_6911";
import module_6911 from "module_6911" /* 6911 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["children", "refreshControl", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER", "keyboardShouldPersistTaps"];
let closure_4 = ["refreshControl", "ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
const useState = fn(19).useState;
get_ActivityIndicator = fn(17);
({ FlatList: closure_9, RefreshControl, ScrollView: ScrollView2, Switch, TextInput } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_11 = module_6911(ScrollView2, { disallowInterruption: true, shouldCancelWhenOutside: false }, fn(6912).GestureDetectorType.Intercepting);
class ScrollView {
  constructor(arg0) {
    ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: closure_0, keyboardShouldPersistTaps } = global);
    tmp = closure_6(global, closure_3);
    tmp2 = closure_5(useState(null), 2);
    first = tmp2[0];
    closure_1 = first;
    closure_2 = tmp2[1];
    tmp4 = jsx;
    obj = {};
    tmp5 = closure_11;
    merged = Object.assign(tmp);
    obj.ref = global.ref;
    obj.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
    obj.onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER = function onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER(arg0) {
      const handlerTag = arg0;
      require("ghQueueMicrotask").ghQueueMicrotask(() => {
        let tmp = first;
        if (first) {
          tmp = first.handlerTag === handlerTag.handlerTag;
        }
        if (!tmp) {
          closure_2(handlerTag);
          if (require != null) {
            require(handlerTag);
          }
        }
      });
    };
    if (!refreshControl) {
      obj.refreshControl = undefined;
      tmp9 = closure_1;
      tmp10 = closure_2;
      obj1 = { keyboardShouldPersistTaps: null, children: null };
      obj1.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
      obj1.children = global.children;
      obj.children = tmp4(closure_1(closure_2[8]), obj1);
      return tmp4(tmp5, obj);
    } else {
      tmp7 = closure_7;
      if (first) {
        obj5 = { block: null };
        obj5.block = first;
        obj6 = obj5;
      } else {
        obj6 = {};
      }
      cloneElementResult = closure_7.cloneElement(refreshControl, obj6);
    }
    return;
  }
}
const importDefaultResultResult = module_6911(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false }, fn(6912).GestureDetectorType.Virtual);

export const RefreshControl = importDefaultResultResult;
export { ScrollView };
export const Switch = module_6911(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
export const TextInput = module_6911(TextInput);
export const FlatList = (ref) => {
  ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require } = ref);
  [block, dependencyMap] = useState(null);
  function updateGesture(arg0) {
    const handlerTag = arg0;
    require("ghQueueMicrotask").ghQueueMicrotask(() => {
      let tmp = first;
      if (first) {
        tmp = first.handlerTag === handlerTag.handlerTag;
      }
      if (!tmp) {
        closure_2(handlerTag);
        if (require != null) {
          require(handlerTag);
        }
      }
    });
  }
  const obj = {};
  const obj2 = {};
  const entries = Object.entries(_objectWithoutProperties(ref, obj2));
  for (const item10028 of entries) {
    [first1, tmp9] = item10028;
    let tmp8 = first1;
    let NativeWrapperProps = DEFAULT_PROPS_TRANSFORMER.NativeWrapperProps;
    if (NativeWrapperProps.has(first1)) {
      obj2[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  const obj3 = { ref: ref.ref };
  let merged = Object.assign(obj);
  obj3.renderScrollComponent = function renderScrollComponent(arg0) {
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj2);
    return <ScrollView onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER={updateGesture} />;
  };
  if (!refreshControl) {
    obj3.refreshControl = undefined;
    return <closure_9 {...obj3} />;
  } else {
    if (block) {
      const obj4 = { block };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    noop.cloneElement(refreshControl, obj5);
  }
  let tmp = _objectWithoutProperties(ref, obj2);
};