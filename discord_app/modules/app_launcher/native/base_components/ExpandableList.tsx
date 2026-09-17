// === Module 12259: ExpandableList ===

// Module 12259 (ExpandableList)
import timing from "timing" /* 4641 */;
import timingPresets from "timingPresets" /* 4644 */;
import usePreviousDefault from "usePrevious" /* 8421 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = tmp4(4376);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4640);
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
  let flag = expandedOverride;
  if (expandedOverride == null) {
    flag = false;
  }
  const tmp2 = expandedOverride(noop.useState(flag), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  let obj14 = dependencyMap;
  let tmp5 = usePreviousDefault(first);
  if (tmp5 == null) {
    tmp5 = first;
  }
  first = tmp5;
  const items1 = [first, onExpand, tmp5];
  const effect = noop.useEffect(() => {
    if (tmp) {
      if (closure_1 != null) {
        tmp2();
      }
    }
  }, items1);
  const items2 = [expandedOverride];
  const effect1 = noop.useEffect(() => {
    if (undefined !== expandedOverride) {
      closure_6(tmp);
    }
  }, items2);
  bound = Math.min(4, items.length);
  if (null == showsExpandCTAOverride) {
    showsExpandCTAOverride = items.length > bound;
  }
  sharedValue = memo1(4376).useSharedValue(0);
  let obj3 = memo1(4376);
  sharedValue1 = memo1(4376).useSharedValue(0);
  const obj4 = memo1(4376);
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
  derivedValue = memo1(4376).useDerivedValue(C);
  const items3 = [items, bound];
  const memo = noop.useMemo(() => memo1.slice(0, bound), items3);
  const items4 = [items, bound];
  memo1 = noop.useMemo(() => memo1.slice(bound, memo1.length), items4);
  const obj5 = memo1(4376);
  class A {
    constructor() {
      if (0 !== closure_9.get()) {
        obj1 = { height: null };
        tmp = closure_0;
        tmp2 = closure_2;
        obj3 = closure_0(closure_2[7]);
        tmp3 = closure_11;
        value = closure_11.get();
        obj1.height = obj3.withTiming(value, closure_0(closure_2[8]).timingStandard);
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }
  const obj6 = memo1(4376);
  A.__closure = { collapsedListHeight: sharedValue, withTiming: memo1(4641).withTiming, containerHeight: derivedValue, timingStandard: memo1(4644).timingStandard };
  A.__workletHash = 2086836441465;
  A.__initData = derivedValue;
  const animatedStyle = obj6.useAnimatedStyle(A);
  const obj7 = { style: null, children: null };
  const items5 = [tmp.animatedListContainer, animatedStyle];
  obj7.style = items5;
  const obj8 = {
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
  obj8.children = memo.map((fn, index) => {
    let isLastRow = closure_1;
    if (isLastRow) {
      isLastRow = index === memo1.length - 1;
    }
    return fn({ isLastRow });
  });
  const items6 = [closure_6(first, obj8), ];
  let tmp16Result = memo1.length > 0;
  if (tmp16Result) {
    const obj9 = {
      onLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        },
      accessibilityElementsHidden: !first,
      importantForAccessibility: "no-hide-descendants",
      children: null
    };
    importDefault = !showsExpandCTAOverride;
    obj9.children = memo1.map((fn, index) => {
      let isLastRow = closure_1;
      if (isLastRow) {
        isLastRow = index === memo1.length - 1;
      }
      return fn({ isLastRow });
    });
    tmp16Result = tmp16(tmp17, obj9);
  }
  items6[1] = tmp16Result;
  obj7.children = items6;
  const items7 = [first(ReanimatedRexportDefault.View, obj7), ];
  if (!showsExpandCTAOverride) {
    const obj10 = { children: null };
    items7[1] = showsExpandCTAOverride;
    obj10.children = items7;
    return tmp14(tmp15, obj10);
  } else {
    if (first) {
      const intl2 = tmp9(1115).intl;
      let stringResult = intl2.string(tmp9(1115).t.nPGLFQ);
    } else if (null != title) {
      const intl = tmp9(1115).intl;
      const obj11 = { title };
      stringResult = intl.formatToPlainString(tmp9(1115).t["bj/2kV"], obj11);
    }
    let obj12 = { accessibilityLabel: stringResult, label: null, onPress: null, end: true };
    let obj13 = { style: tmp.expandCTALabelContainer, children: null };
    const intl3 = tmp9(1115).intl;
    if (first) {
      let stringResult1 = intl3.string(tmp9(1115).t.nPGLFQ);
    } else {
      stringResult1 = intl3.format(tmp9(1115).t.gVw57p, {});
    }
    obj14 = { children: null };
    const obj15 = { color: "text-brand", variant: "text-md/semibold", children: stringResult1 };
    obj13.children = tmp16(tmp9(4636).Text, obj15);
    obj13 = tmp16(tmp17, obj13);
    obj12.label = obj13;
    obj12.onPress = function onPress() {
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
    obj12 = tmp16(tmp9(5693).TableRow, obj12);
    obj14.children = obj12;
    tmp16(tmp17, obj14);
  }
  let obj2 = { collapsedListHeight: sharedValue, withTiming: memo1(4641).withTiming, containerHeight: derivedValue, timingStandard: memo1(4644).timingStandard };
  tmp15 = bound;
};
export const COLLAPSED_LIST_ITEM_MAX = 4;