// === Module 5348: RefreshControl ===

// Module 5348 (RefreshControl)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
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
({ FlatList: error, ScrollView, Switch, TextInput, DrawerLayoutAndroid, RefreshControl } = get_ActivityIndicator);
let closure_9 = require("items")(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let refreshControl;
  let waitFor;
  let obj = importAllResult;
  ref = importAllResult.useRef(null);
  ({ refreshControl, waitFor } = arg0);
  obj = {};
  const merged = Object.assign(callback2(arg0, closure_2));
  obj.ref = ref;
  if (waitFor == null) {
    waitFor = [];
  }
  const items = [];
  items[HermesBuiltin.arraySpread(require(5281) /* toArray */.toArray(waitFor), 0)] = ref;
  obj.waitFor = items;
  let cloneElementResult;
  if (refreshControl) {
    obj = { ref: null };
    obj[0] = ref;
    cloneElementResult = obj.cloneElement(refreshControl, obj);
  }
  obj.refreshControl = cloneElementResult;
  return <closure_9 />;
});
let c10 = forwardRefResult;
const tmp3 = require("items")(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
let tmp5 = require("items")(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
let tmp6 = require("items")(TextInput);

export const RefreshControl = tmp3;
export const ScrollView = forwardRefResult;
export const Switch = tmp5;
export const TextInput = tmp6;
export const DrawerLayoutAndroid = require("items")(DrawerLayoutAndroid, { disallowInterruption: true });
export const FlatList = importAllResult.forwardRef((arg0, ref) => {
  let dependencyMap;
  let refreshControl;
  ref = importAllResult.useRef(null);
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
    let nativeViewProps = ref(5312).nativeViewProps;
    let tmp12 = first;
    let tmp13 = tmp9;
    if (nativeViewProps.includes(first)) {
      obj[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  obj = { ref };
  let merged = Object.assign(obj);
  obj.renderScrollComponent = function renderScrollComponent(CompatView, arg1) {
    const obj = {};
    const merged = Object.assign(CompatView);
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
    cloneElementResult = importAllResult.cloneElement(refreshControl, obj1);
  }
  obj.refreshControl = cloneElementResult;
  return <closure_7 ref={arg1} />;
});