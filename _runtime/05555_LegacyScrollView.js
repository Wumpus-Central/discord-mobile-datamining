// _runtime/05555_LegacyScrollView.js
import _mod17 from "metro/00017__.js";
import tagMessage from "05434_tagMessage.js";
import _modDef5554 from "metro/05554__.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_2 = ["refreshControl", "waitFor", "ref"];
let closure_3 = ["waitFor", "refreshControl"];
get_ActivityIndicator = fn(17);
({ FlatList: closure_8, RefreshControl, ScrollView, Switch, TextInput } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_10 = _modDef5554(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
class LegacyScrollView {
  constructor(arg0) {
    obj = closure_7;
    ref = closure_7.useRef(null);
    ({ refreshControl, waitFor } = global);
    obj1 = {};
    tmp2 = jsx;
    tmp3 = closure_10;
    merged = Object.assign(closure_6(global, closure_2));
    obj1.ref = global.ref;
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
const tmp3 = _modDef5554(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
class LazyDrawerLayoutAndroid {
  constructor(arg0) {
    tmp = DrawerLayoutAndroid;
    if (!DrawerLayoutAndroid) {
      tmp2 = closure_0;
      tmp3 = closure_1;
      DrawerLayoutAndroid = closure_0(closure_1[3]).DrawerLayoutAndroid;
      tmp = DrawerLayoutAndroid;
    }
    obj = {};
    merged = Object.assign(global);
    return jsx(tmp, obj);
  }
}
LazyDrawerLayoutAndroid.displayName = "DrawerLayoutAndroid";
const tmp4 = _modDef5554(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });

export const LegacyRefreshControl = tmp3;
export { LegacyScrollView };
export const LegacySwitch = tmp4;
export const LegacyTextInput = _modDef5554(TextInput);
export const LegacyDrawerLayoutAndroid = _modDef5554(LazyDrawerLayoutAndroid, { disallowInterruption: true });
export (arg0) => {
  const ref = noop.useRef(null);
  ({ waitFor: dependencyMap, refreshControl } = arg0);
  let obj = {};
  const entries = Object.entries(_objectWithoutProperties(arg0, closure_3));
  while (tmp3 !== undefined) {
    [first, tmp9] = tmp4;
    let tmp8 = first;
    let nativeViewProps = ref(5473).nativeViewProps;
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
    items = dependencyMap;
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
  return <closure_8 />;
}