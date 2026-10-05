// _runtime/06239_RefreshControl.js
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import GestureDetectorType from "06153_GestureDetectorType.js";
import maybeExtractNativeEvent from "06208_maybeExtractNativeEvent.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react_native from "00017_react-native.js";
import createNativeWrapper_mod from "06152_createNativeWrapper.js";

const require = globalThis.__r;
const react = react2;

let RefreshControl;
let ScrollView2;
let Switch;
let TextInput;
let c9;
let closure_3 = [
  "children",
  "refreshControl",
  "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER",
  "keyboardShouldPersistTaps",
];
let closure_4 = ["refreshControl", "ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
const useState = react2.useState;
({ FlatList: c9, RefreshControl, ScrollView: ScrollView2, Switch, TextInput } = react_native);
const jsx = Fragment.jsx;
let createNativeWrapper = createNativeWrapper_mod;
const importDefaultResultResult = createNativeWrapper(
  RefreshControl,
  { disallowInterruption: true, shouldCancelWhenOutside: false },
  GestureDetectorType.GestureDetectorType.Virtual,
);
createNativeWrapper = createNativeWrapper_mod;
let closure_11 = createNativeWrapper(
  ScrollView2,
  { disallowInterruption: true, shouldCancelWhenOutside: false },
  GestureDetectorType.GestureDetectorType.Intercepting,
);
class ScrollView {
  constructor(children) {
    let block;
    let closure_2;
    let keyboardShouldPersistTaps;
    let refreshControl;
    ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require, keyboardShouldPersistTaps } = children);
    children = children.children;
    let tmp = _objectWithoutProperties(children, closure_3);
    [block, dependencyMap] = useState(null);
    const merged = Object.assign(tmp);
    let cloneElementResult;
    if (refreshControl) {
      let obj3;
      const cloneElement = react.cloneElement;
      if (block) {
        obj3 = { block };
        const obj2 = { block };
      } else {
        obj3 = {};
      }
      cloneElementResult = cloneElement(refreshControl, obj3);
    }
    return (
      <closure_11
        ref={children.ref}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER={function onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER(arg0) {
          const handlerTag = arg0;
          const obj = require("ghQueueMicrotask");
          obj.ghQueueMicrotask(() => {
            const tmp = first && first.handlerTag === handlerTag.handlerTag;
            if (!tmp) {
              closure_2(handlerTag);
              if (require != null) {
                require(handlerTag);
              }
            }
          });
        }}
        refreshControl={cloneElementResult}
      >
        {jsx(block(6212), { keyboardShouldPersistTaps, children })}
      </closure_11>
    );
  }
}
const tmp6 = createNativeWrapper(Switch, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: true,
  disallowInterruption: true,
});
const RefreshControl_export = importDefaultResultResult;
const Switch_export = tmp6;
const TextInput_export = createNativeWrapper(TextInput);

export { RefreshControl_export as RefreshControl };
export { ScrollView };
export { Switch_export as Switch };
export { TextInput_export as TextInput };
export const FlatList = (ref) => {
  let block;
  let closure_2;
  let first1;
  let obj2;
  let refreshControl;
  let tmp9;
  ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require } = ref);
  let tmp = _objectWithoutProperties(ref, obj2);
  [block, dependencyMap] = useState(null);
  function updateGesture(arg0) {
    const handlerTag = arg0;
    const obj = require("ghQueueMicrotask");
    obj.ghQueueMicrotask(() => {
      const tmp = first && first.handlerTag === handlerTag.handlerTag;
      if (!tmp) {
        closure_2(handlerTag);
        if (require != null) {
          require(handlerTag);
        }
      }
    });
  }
  let obj = {};
  obj2 = {};
  const entries = Object.entries(tmp);
  for (const item10028 of entries) {
    [first1, tmp9] = item10028;
    let tmp8 = first1;
    let NativeWrapperProps = maybeExtractNativeEvent.NativeWrapperProps;
    if (NativeWrapperProps.has(first1)) {
      obj2[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  let merged = Object.assign(obj);
  let cloneElementResult;
  if (refreshControl) {
    let obj5;
    const cloneElement = react.cloneElement;
    if (block) {
      obj5 = { block };
      const obj4 = { block };
    } else {
      obj5 = {};
    }
    cloneElementResult = cloneElement(refreshControl, obj5);
  }
  return (
    <closure_9
      ref={ref.ref}
      renderScrollComponent={function renderScrollComponent(arg0) {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj2);
        return <ScrollView onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER={updateGesture} />;
      }}
      refreshControl={cloneElementResult}
    />
  );
};
