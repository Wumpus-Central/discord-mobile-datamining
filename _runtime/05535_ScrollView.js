// _runtime/05535_ScrollView.js
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";
import "module_5441";
import 05441__ from "metro/05441__.js";

const require = globalThis.__r;

const require = fn;
let closure_2 = ["children", "refreshControl", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER", "keyboardShouldPersistTaps"];
let closure_3 = ["refreshControl", "ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
const useState = fn(19).useState;
get_ActivityIndicator = fn(17);
({ FlatList: closure_8, RefreshControl, ScrollView: ScrollView2, Switch, TextInput } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_10 = module_5441(ScrollView2, { disallowInterruption: true, shouldCancelWhenOutside: false }, fn(5442).GestureDetectorType.Intercepting);
class ScrollView {
  constructor(arg0) {
    ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: closure_0, keyboardShouldPersistTaps } = global);
    tmp = closure_5(global, closure_2);
    tmp2 = closure_4(useState(null), 2);
    first = tmp2[0];
    closure_1 = first;
    closure_2 = tmp2[1];
    tmp4 = jsx;
    obj = { keyboardShouldPersistTaps, children: null };
    obj1 = {};
    tmp5 = closure_10;
    merged = Object.assign(tmp);
    obj1.ref = global.ref;
    obj1.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
    obj1.disableScrollViewPanResponder = "handled" === keyboardShouldPersistTaps || tmp.disableScrollViewPanResponder;
    obj1.onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER = function onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER(arg0) {
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
      obj1.refreshControl = undefined;
      obj1.children = global.children;
      obj.children = tmp4(tmp5, obj1);
      return tmp4(closure_0(closure_1[8]).ScrollViewResponderProvider, obj);
    } else {
      tmp7 = closure_6;
      if (first) {
        obj5 = { block: null };
        obj5.block = first;
        obj6 = obj5;
      } else {
        obj6 = {};
      }
      cloneElementResult = closure_6.cloneElement(refreshControl, obj6);
    }
    return;
  }
}
const importDefaultResultResult = module_5441(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false }, fn(5442).GestureDetectorType.Virtual);

export const RefreshControl = importDefaultResultResult;
export { ScrollView };
export const Switch = module_5441(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
export const TextInput = module_5441(TextInput);
export (ref) => {
  ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require } = ref);
  const tmp2 = obj2(useState(null), 2);
  const block = tmp2[0];
  closure_2 = tmp2[1];
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
  obj2 = {};
  const entries = Object.entries(_objectWithoutProperties(ref, updateGesture));
  for (const item10028 of entries) {
    let tmp6 = obj2(item10028, 2);
    let first1 = tmp6[0];
    let tmp8 = first1;
    let tmp9 = tmp6[1];
    let NativeWrapperProps = require("resolveInternalConfigProps").NativeWrapperProps;
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
    return <closure_8 {...obj3} />;
  } else {
    if (block) {
      const obj4 = { block };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    noop.cloneElement(refreshControl, obj5);
  }
  let tmp = _objectWithoutProperties(ref, updateGesture);
}