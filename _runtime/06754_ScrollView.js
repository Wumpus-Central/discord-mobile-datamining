// _runtime/06754_ScrollView.js
import DEFAULT_PROPS_TRANSFORMER from "06723_DEFAULT_PROPS_TRANSFORMER.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";
import "module_6667";
import 06667__ from "metro/06667__.js";

require = fn;
let closure_3 = ["children", "refreshControl", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER", "keyboardShouldPersistTaps"];
let closure_4 = ["refreshControl", "ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
const useState = fn(19).useState;
get_ActivityIndicator = fn(17);
({ FlatList: closure_9, RefreshControl, ScrollView: ScrollView2, Switch, TextInput } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_11 = module_6667(ScrollView2, { disallowInterruption: true, shouldCancelWhenOutside: false }, fn(6668).GestureDetectorType.Intercepting);
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
            require(tmp4);
          }
          tmp4 = handlerTag;
        }
      });
    };
    if (!refreshControl) {
      obj.refreshControl = undefined;
      tmp9 = closure_1;
      tmp10 = closure_2;
      obj = { keyboardShouldPersistTaps: null, children: null };
      obj.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
      obj.children = global.children;
      obj.children = tmp4(closure_1(closure_2[8]), obj);
      return tmp4(tmp5, obj);
    } else {
      tmp7 = closure_7;
      if (first) {
        obj1 = { block: null };
        obj1.block = first;
        obj2 = obj1;
      } else {
        obj2 = {};
      }
      cloneElementResult = closure_7.cloneElement(refreshControl, obj2);
    }
    return;
  }
}
const importDefaultResultResult = module_6667(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false }, fn(6668).GestureDetectorType.Virtual);

export const RefreshControl = importDefaultResultResult;
export { ScrollView };
export const Switch = module_6667(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
export const TextInput = module_6667(TextInput);
export const FlatList = (ref) => {
  ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require } = ref);
  const tmp2 = _slicedToArray(useState(null), 2);
  const block = tmp2[0];
  dependencyMap = tmp2[1];
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
          require(tmp4);
        }
        tmp4 = handlerTag;
      }
    });
  }
  let obj = {};
  obj = {};
  const entries = Object.entries(_objectWithoutProperties(ref, obj));
  for (const item10028 of entries) {
    let tmp6 = _slicedToArray(item10028, 2);
    let first1 = tmp6[0];
    let tmp8 = first1;
    let tmp9 = tmp6[1];
    let NativeWrapperProps = DEFAULT_PROPS_TRANSFORMER.NativeWrapperProps;
    if (NativeWrapperProps.has(first1)) {
      obj[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  obj = { ref: ref.ref };
  let merged = Object.assign(obj);
  obj.renderScrollComponent = function renderScrollComponent(arg0) {
    obj = { onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: updateGesture };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return <ScrollView onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER={updateGesture} />;
  };
  if (!refreshControl) {
    obj.refreshControl = undefined;
    return <closure_9 {...obj} />;
  } else {
    if (block) {
      const obj1 = { block };
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    noop.cloneElement(refreshControl, obj2);
  }
};