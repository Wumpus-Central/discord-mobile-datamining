// _runtime/06881_LegacyScrollView.js
import tagMessage from "06771_tagMessage.js";
import _modDef6880 from "metro/06880__.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_2 = ["refreshControl", "waitFor"];
let closure_3 = ["waitFor", "refreshControl"];
get_ActivityIndicator = fn(17);
({ FlatList: closure_7, DrawerLayoutAndroid, RefreshControl, ScrollView, Switch, TextInput } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_9 = _modDef6880(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
class LegacyScrollView {
  constructor(arg0) {
    obj = closure_6;
    ref = closure_6.useRef(null);
    ({ refreshControl, waitFor } = global);
    obj1 = {};
    tmp2 = jsx;
    tmp3 = closure_9;
    merged = Object.assign(closure_5(global, closure_2));
    obj3 = closure_0(closure_1[6]);
    if (waitFor == null) {
      waitFor = [];
    }
    items = [];
    items[HermesBuiltin.arraySpread(obj3.toArray(waitFor), 0)] = ref;
    obj1.waitFor = items;
    cloneElementResult = undefined;
    if (refreshControl) {
      obj5 = { ref: null };
      obj5.ref = ref;
      cloneElementResult = obj.cloneElement(refreshControl, obj5);
    }
    obj1.refreshControl = cloneElementResult;
    return tmp2(tmp3, obj1);
  }
}
const tmp3 = _modDef6880(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
const tmp4 = _modDef6880(Switch, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: true,
  disallowInterruption: true,
});

export const LegacyRefreshControl = tmp3;
export { LegacyScrollView };
export const LegacySwitch = tmp4;
export const LegacyTextInput = _modDef6880(TextInput);
export const LegacyDrawerLayoutAndroid = _modDef6880(DrawerLayoutAndroid, { disallowInterruption: true });
export const LegacyFlatList = (arg0) => {
  const ref = noop.useRef(null);
  ({ waitFor: dependencyMap, refreshControl } = arg0);
  let obj = {};
  const entries = Object.entries(_objectWithoutProperties(arg0, closure_3));
  while (tmp3 !== undefined) {
    [first, tmp9] = tmp4;
    let tmp8 = first;
    let nativeViewProps = ref(6808).nativeViewProps;
    if (nativeViewProps.includes(first)) {
      obj2[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  const obj3 = {};
  let merged = Object.assign(obj);
  obj3.renderScrollComponent = function renderScrollComponent(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj2);
    obj2 = tagMessage;
    let items = dependencyMap;
    if (dependencyMap == null) {
      items = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(obj2.toArray(items), 0)] = ref;
    obj.waitFor = items1;
    return <LegacyScrollView />;
  };
  let cloneElementResult;
  if (refreshControl) {
    const obj4 = { ref };
    cloneElementResult = noop.cloneElement(refreshControl, obj4);
  }
  obj3.refreshControl = cloneElementResult;
  return <closure_7 />;
};
