// _runtime/05767_LegacyScrollView.js
import tagMessage from "05657_tagMessage.js";
import itemsDefault from "05766_items.js";
import closure_4 from "metro/00032__slicedToArray.js";
import closure_5 from "metro/00109__objectWithoutProperties.js";
import closure_6 from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

require = arg1;
let closure_2 = ["refreshControl", "waitFor"];
let closure_3 = ["waitFor", "refreshControl"];
({ FlatList: error, DrawerLayoutAndroid, RefreshControl, ScrollView, Switch, TextInput } = get_ActivityIndicator);
let closure_9 = itemsDefault(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
class LegacyScrollView {
  constructor(arg0) {
    obj = closure_6;
    ref = closure_6.useRef(null);
    ({ refreshControl, waitFor } = global);
    obj = {};
    tmp2 = jsx;
    tmp3 = closure_9;
    merged = Object.assign(closure_5(global, closure_2));
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
const tmp3 = itemsDefault(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
const tmp4 = itemsDefault(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });

export const LegacyRefreshControl = tmp3;
export { LegacyScrollView };
export const LegacySwitch = tmp4;
export const LegacyTextInput = itemsDefault(TextInput);
export const LegacyDrawerLayoutAndroid = itemsDefault(DrawerLayoutAndroid, { disallowInterruption: true });
export const LegacyFlatList = (arg0) => {
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
    let nativeViewProps = ref(5694).nativeViewProps;
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
    obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    let items = closure_1;
    if (closure_1 == null) {
      items = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(ref(closure_1_1[6]).toArray(items), 0)] = ref;
    obj.waitFor = items1;
    return closure_1_8(closure_1_10, obj);
  };
  let cloneElementResult;
  if (refreshControl) {
    obj1 = { ref: null };
    obj1[0] = ref;
    cloneElementResult = React.cloneElement(refreshControl, obj1);
  }
  obj.refreshControl = cloneElementResult;
  return <closure_7 />;
};