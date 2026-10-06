// === Module 6262: LegacyRefreshControl ===

// Module 6262 (LegacyRefreshControl)
import Fragment from "Fragment" /* 21 */;
import tagMessage from "tagMessage" /* 6152 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6261 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let DrawerLayoutAndroid;
let RefreshControl;
let ScrollView;
let Switch;
let TextInput;
let metroImportDefault;
let closure_2 = ["refreshControl", "waitFor"];
let closure_3 = ["waitFor", "refreshControl"];
({ FlatList: metroImportDefault, DrawerLayoutAndroid, RefreshControl, ScrollView, Switch, TextInput } = react_native);
const jsx = Fragment.jsx;
let tmp3 = createNativeWrapperDefault(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
let closure_9 = createNativeWrapperDefault(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
class LegacyScrollView {
  constructor(arg0) {
    let refreshControl;
    let waitFor;
    const ref = react.useRef(null);
    ({ refreshControl, waitFor } = arg0);
    const merged = Object.assign(_objectWithoutProperties(arg0, closure_2));
    const toArray = tagMessage.toArray;
    tagMessage;
    if (waitFor == null) {
      waitFor = [];
    }
    const items = [];
    items[HermesBuiltin.arraySpread(items, toArray(waitFor), 0)] = ref;
    let cloneElementResult;
    if (refreshControl) {
      const obj3 = { ref };
      cloneElementResult = react.cloneElement(refreshControl, obj3);
    }
    return <closure_9 waitFor={items} refreshControl={cloneElementResult} />;
  }
}
const tmp4 = createNativeWrapperDefault(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
createNativeWrapperDefault(TextInput);

export const LegacyRefreshControl = tmp3;
export { LegacyScrollView };
export const LegacySwitch = tmp4;
export const LegacyTextInput = createNativeWrapperDefault(TextInput);
export const LegacyDrawerLayoutAndroid = createNativeWrapperDefault(DrawerLayoutAndroid, { disallowInterruption: true });
export const LegacyFlatList = (arg0) => {
  let first;
  let refreshControl;
  let tmp9;
  const ref = react.useRef(null);
  ({ waitFor: dependencyMap, refreshControl } = arg0);
  const obj = {};
  const obj2 = {};
  const entries = Object.entries(_objectWithoutProperties(arg0, closure_3));
  const tmp3 = entries[Symbol.iterator]();
  while (tmp3 !== undefined) {
    [first, tmp9] = tmp4;
    let tmp8 = first;
    let nativeViewProps = ref(6189).nativeViewProps;
    if (nativeViewProps.includes(first)) {
      obj2[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  let merged = Object.assign(obj);
  let cloneElementResult;
  if (refreshControl) {
    const obj4 = { ref };
    cloneElementResult = react.cloneElement(refreshControl, obj4);
  }
  return <closure_7 renderScrollComponent={function renderScrollComponent(arg0) {
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj2);
    let items = dependencyMap;
    const toArray = tagMessage.toArray;
    tagMessage;
    if (dependencyMap == null) {
      items = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items1, toArray(items), 0)] = ref;
    return <LegacyScrollView waitFor={items1} />;
  }} refreshControl={cloneElementResult} />;
};