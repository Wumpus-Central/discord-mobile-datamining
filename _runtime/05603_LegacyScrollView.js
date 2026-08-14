// _runtime/05603_LegacyScrollView.js
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let DrawerLayoutAndroid;
let RefreshControl;
let ScrollView;
let Switch;
let TextInput;
let error;
const require = arg1;
let closure_2 = ["refreshControl", "waitFor"];
let closure_3 = ["waitFor", "refreshControl"];
({ FlatList: error, DrawerLayoutAndroid, RefreshControl, ScrollView, Switch, TextInput } = get_ActivityIndicator);
let closure_9 = require("items")(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
class LegacyScrollView {
  constructor(arg0) {
    obj = noop;
    ref = noop.useRef(null);
    ({ refreshControl, waitFor } = global);
    obj = {};
    tmp2 = jsx;
    tmp3 = jsx;
    merged = Object.assign(_objectWithoutProperties(global, closure_2));
    obj3 = require("tagMessage");
    if (waitFor == null) {
      waitFor = [];
    }
    items = [];
    items[HermesBuiltin.arraySpread(obj3.toArray(waitFor), 0)] = ref;
    obj.waitFor = items;
    cloneElementResult = undefined;
    if (refreshControl) {
      obj1 = { ref: null };
      obj1[0] = ref;
      cloneElementResult = obj.cloneElement(refreshControl, obj1);
    }
    obj.refreshControl = cloneElementResult;
    return tmp2(tmp3, obj);
  }
}
const tmp3 = require("items")(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
const tmp4 = require("items")(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });

export const LegacyRefreshControl = tmp3;
export { LegacyScrollView };
export const LegacySwitch = tmp4;
export const LegacyTextInput = require("items")(TextInput);
export const LegacyDrawerLayoutAndroid = require("items")(DrawerLayoutAndroid, { disallowInterruption: true });
export const LegacyFlatList = (arg0) => {
  let dependencyMap;
  let refreshControl;
  const ref = React.useRef(null);
  ({ waitFor: dependencyMap, refreshControl } = arg0);
  let obj = {};
  obj = {};
  const entries = Object.entries(callback2(arg0, closure_3));
  while (tmp3 !== undefined) {
    let tmp5 = callback;
    let tmp6 = callback(tmp4, 2);
    let first = tmp6[0];
    let tmp8 = first;
    let tmp9 = tmp6[1];
    let tmp10 = ref;
    let tmp11 = dependencyMap;
    let nativeViewProps = ref(5530).nativeViewProps;
    let tmp12 = first;
    let tmp13 = tmp9;
    if (nativeViewProps.includes(first)) {
      obj[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  obj = {};
  let merged = Object.assign(obj);
  obj.renderScrollComponent = function renderScrollComponent(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    let items = closure_1;
    if (closure_1 == null) {
      items = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(ref(outer1_1[6]).toArray(items), 0)] = ref;
    obj.waitFor = items1;
    return outer1_8(outer1_10, obj);
  };
  let cloneElementResult;
  if (refreshControl) {
    const obj1 = { ref: null };
    obj1[0] = ref;
    cloneElementResult = React.cloneElement(refreshControl, obj1);
  }
  obj.refreshControl = cloneElementResult;
  return <closure_7 />;
};