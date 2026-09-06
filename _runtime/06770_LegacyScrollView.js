// _runtime/06770_LegacyScrollView.js
import tagMessage from "06660_tagMessage.js";
import _modDef6769 from "metro/06769__.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_2 = ["refreshControl", "waitFor"];
let closure_3 = ["waitFor", "refreshControl"];
get_ActivityIndicator = fn(17);
({ FlatList: closure_7, DrawerLayoutAndroid, RefreshControl, ScrollView, Switch, TextInput } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_9 = _modDef6769(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
class LegacyScrollView {
  constructor(arg0) {
    obj = closure_6;
    ref = closure_6.useRef(null);
    ({ refreshControl, waitFor } = global);
    obj = {};
    tmp2 = jsx;
    tmp3 = closure_9;
    merged = Object.assign(closure_5(global, closure_2));
    obj3 = closure_0(closure_1[6]);
    if (waitFor == null) {
      waitFor = [];
    }
    items = [];
    items[HermesBuiltin.arraySpread(obj3.toArray(waitFor), 0)] = ref;
    obj.waitFor = items;
    cloneElementResult = undefined;
    if (refreshControl) {
      obj1 = { ref: null };
      obj1.ref = ref;
      cloneElementResult = obj.cloneElement(refreshControl, obj1);
    }
    obj.refreshControl = cloneElementResult;
    return tmp2(tmp3, obj);
  }
}
const tmp3 = _modDef6769(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
const tmp4 = _modDef6769(Switch, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: true,
  disallowInterruption: true,
});

export const LegacyRefreshControl = tmp3;
export { LegacyScrollView };
export const LegacySwitch = tmp4;
export const LegacyTextInput = _modDef6769(TextInput);
export const LegacyDrawerLayoutAndroid = _modDef6769(DrawerLayoutAndroid, { disallowInterruption: true });
export const LegacyFlatList = (arg0) => {
  const ref = noop.useRef(null);
  ({ waitFor: dependencyMap, refreshControl } = arg0);
  let obj = {};
  obj = {};
  const entries = Object.entries(_objectWithoutProperties(arg0, closure_3));
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    let first = tmp6[0];
    let tmp8 = first;
    let tmp9 = tmp6[1];
    let nativeViewProps = ref(6697).nativeViewProps;
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
    let items = dependencyMap;
    if (dependencyMap == null) {
      items = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(tagMessage.toArray(items), 0)] = ref;
    obj.waitFor = items1;
    return <LegacyScrollView />;
  };
  let cloneElementResult;
  if (refreshControl) {
    const obj1 = { ref };
    cloneElementResult = noop.cloneElement(refreshControl, obj1);
  }
  obj.refreshControl = cloneElementResult;
  return <closure_7 />;
};
