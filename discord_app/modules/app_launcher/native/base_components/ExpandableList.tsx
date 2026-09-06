// === Module 12108: ExpandableList ===

// Module 12108 (ExpandableList)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import usePreviousDefault from "usePrevious" /* 8272 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
let closure_10 = { code: "function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
let closure_11 = { code: "function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default function ExpandableList(onExpand) {
  const items = onExpand.items;
  let memo1 = items;
  onExpand = onExpand.onExpand;
  importDefault = onExpand;
  ({ onExpandCTAPress: dependencyMap, expandedOverride } = onExpand);
  ({ showsExpandCTAOverride, disableExpanding: noop, title } = onExpand);
  closure_6 = undefined;
  let first;
  let bound;
  let sharedValue;
  let sharedValue1;
  let derivedValue;
  let tmp = sharedValue();
  let obj = noop;
  let flag = expandedOverride;
  if (expandedOverride == null) {
    flag = false;
  }
  const tmp2 = expandedOverride(noop.useState(flag), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  let obj7 = dependencyMap;
  let tmp5 = usePreviousDefault(first);
  if (tmp5 == null) {
    tmp5 = first;
  }
  first = tmp5;
  const items1 = [first, onExpand, tmp5];
  const effect = obj.useEffect(() => {
    if (tmp) {
      if (closure_1 != null) {
        tmp2();
      }
    }
  }, items1);
  const items2 = [expandedOverride];
  const effect1 = obj.useEffect(() => {
    if (undefined !== expandedOverride) {
      closure_6(tmp);
    }
  }, items2);
  bound = Math.min(4, items.length);
  if (null == showsExpandCTAOverride) {
    showsExpandCTAOverride = items.length > bound;
  }
  let obj2 = memo1(4296);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = memo1(4296);
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = memo1(4296);
  class C {
    constructor() {
      if (closure_5) {
        obj = closure_9;
        num = 0;
        if (0 !== closure_9.get()) {
          obj2 = closure_10;
          if (0 !== closure_10.get()) {
            value = obj.get();
            sum = value + obj2.get();
          }
          return sum;
        }
      }
      sum = closure_9.get();
      return;
    }
  }
  C.__closure = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
  C.__workletHash = 17033418452229;
  C.__initData = sharedValue1;
  derivedValue = obj4.useDerivedValue(C);
  const items3 = [items, bound];
  const memo = obj.useMemo(() => memo1.slice(0, bound), items3);
  const items4 = [items, bound];
  memo1 = obj.useMemo(() => memo1.slice(bound, memo1.length), items4);
  let obj5 = memo1(4296);
  class A {
    constructor() {
      if (0 !== closure_9.get()) {
        obj = { height: null };
        tmp = closure_0;
        tmp2 = closure_2;
        obj3 = closure_0(closure_2[7]);
        tmp3 = closure_11;
        value = closure_11.get();
        obj.height = obj3.withTiming(value, closure_0(closure_2[8]).timingStandard);
      } else {
        obj = {};
      }
      return obj;
    }
  }
  obj = { collapsedListHeight: sharedValue, withTiming: memo1(4561).withTiming, containerHeight: derivedValue, timingStandard: memo1(4564).timingStandard };
  A.__closure = obj;
  A.__workletHash = 2086836441465;
  A.__initData = derivedValue;
  const animatedStyle = obj5.useAnimatedStyle(A);
  obj = { style: null, children: null };
  const items5 = [tmp.animatedListContainer, animatedStyle];
  obj.style = items5;
  const obj1 = {
    onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  let tmp18 = !showsExpandCTAOverride;
  if (!showsExpandCTAOverride) {
    tmp18 = !first;
  }
  memo1 = memo;
  importDefault = tmp18;
  obj1.children = memo.map((fn, index) => {
    let isLastRow = closure_1;
    if (isLastRow) {
      isLastRow = index === memo1.length - 1;
    }
    return fn({ isLastRow });
  });
  const items6 = [closure_6(first, obj1), ];
  let tmp16Result = memo1.length > 0;
  if (tmp16Result) {
    obj2 = {
      onLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        },
      accessibilityElementsHidden: !first,
      importantForAccessibility: "no-hide-descendants",
      children: null
    };
    importDefault = !showsExpandCTAOverride;
    obj2.children = memo1.map((fn, index) => {
      let isLastRow = closure_1;
      if (isLastRow) {
        isLastRow = index === memo1.length - 1;
      }
      return fn({ isLastRow });
    });
    tmp16Result = tmp16(tmp17, obj2);
  }
  items6[1] = tmp16Result;
  obj.children = items6;
  const items7 = [first(ReanimatedRexportDefault.View, obj), ];
  if (!showsExpandCTAOverride) {
    obj3 = { children: null };
    items7[1] = showsExpandCTAOverride;
    obj3.children = items7;
    return tmp14(bound, obj3);
  } else {
    if (first) {
      const intl2 = tmp9(1114).intl;
      let stringResult = intl2.string(tmp9(1114).t.nPGLFQ);
    } else if (null != title) {
      const intl = tmp9(1114).intl;
      obj4 = { title };
      stringResult = intl.formatToPlainString(tmp9(1114).t["bj/2kV"], obj4);
    }
    obj5 = { accessibilityLabel: stringResult, label: null, onPress: null, end: true };
    let obj6 = { style: tmp.expandCTALabelContainer, children: null };
    const intl3 = tmp9(1114).intl;
    if (first) {
      let stringResult1 = intl3.string(tmp9(1114).t.nPGLFQ);
    } else {
      stringResult1 = intl3.format(tmp9(1114).t.gVw57p, {});
    }
    obj7 = { children: null };
    const obj8 = { color: "text-brand", variant: "text-md/semibold", children: stringResult1 };
    obj6.children = tmp16(tmp9(4556).Text, obj8);
    obj6 = tmp16(tmp17, obj6);
    obj5.label = obj6;
    obj5.onPress = function onPress() {
      let tmp = true !== noop;
      if (tmp) {
        tmp = !first;
      }
      closure_6(tmp);
      if (dependencyMap != null) {
        const obj = { expanded: tmp };
        tmp4(obj);
      }
    };
    obj5 = tmp16(tmp9(5605).TableRow, obj5);
    obj7.children = obj5;
    tmp16Result = tmp16(tmp17, obj7);
  }
};
export const COLLAPSED_LIST_ITEM_MAX = 4;