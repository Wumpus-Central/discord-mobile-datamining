// discord_app/modules/app_launcher/native/base_components/ExpandableList.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { usePrevious } from "../../../../hooks/usePrevious.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
let closure_10 = { code: "function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
let closure_11 = { code: "function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default function ExpandableList(items) {
  let noop;
  let dependencyMap;
  let expandedOverride;
  let showsExpandCTAOverride;
  let title;
  items = items.items;
  let memo1 = items;
  const onExpand = items.onExpand;
  let importDefault = onExpand;
  ({ onExpandCTAPress: dependencyMap, expandedOverride } = items);
  ({ showsExpandCTAOverride, disableExpanding: noop, title } = items);
  let first;
  let closure_6;
  let c7;
  let bound;
  let sharedValue;
  let sharedValue1;
  let derivedValue;
  let tmp = sharedValue();
  let obj = React;
  let flag = expandedOverride;
  if (expandedOverride == null) {
    flag = false;
  }
  const tmp2 = expandedOverride(React.useState(flag), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  let obj7 = dependencyMap;
  let tmp5 = usePrevious(first);
  if (tmp5 == null) {
    tmp5 = first;
  }
  c7 = tmp5;
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
      callback(tmp);
    }
  }, items2);
  bound = Math.min(4, items.length);
  if (null == showsExpandCTAOverride) {
    showsExpandCTAOverride = items.length > bound;
  }
  let obj2 = memo1(4145);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = memo1(4145);
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = memo1(4145);
  class C {
    constructor() {
      if (c5) {
        obj = onExpand;
        num = 0;
        if (0 !== onExpand.get()) {
          obj2 = c10;
          if (0 !== c10.get()) {
            value = obj.get();
            sum = value + obj2.get();
          }
          return sum;
        }
      }
      sum = onExpand.get();
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
  let obj5 = memo1(4145);
  class A {
    constructor() {
      if (0 !== onExpand.get()) {
        obj = { height: null };
        tmp = useMemo;
        tmp2 = onExpandCTAPress;
        obj3 = useMemo(onExpandCTAPress[7]);
        tmp3 = useEffect;
        value = useEffect.get();
        obj[0] = obj3.withTiming(value, useMemo(onExpandCTAPress[8]).timingStandard);
      } else {
        obj = {};
      }
      return obj;
    }
  }
  obj = { collapsedListHeight: sharedValue, withTiming: memo1(4286).withTiming, containerHeight: derivedValue, timingStandard: memo1(4289).timingStandard };
  A.__closure = obj;
  A.__workletHash = 2086836441465;
  A.__initData = derivedValue;
  const animatedStyle = obj5.useAnimatedStyle(A);
  obj = { style: items5, children: null };
  items5 = [tmp.animatedListContainer, animatedStyle];
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
  obj1[1] = memo.map((arg0, arg1) => {
    let isLastRow = closure_1;
    if (isLastRow) {
      isLastRow = arg1 === memo1.length - 1;
    }
    return arg0({ isLastRow });
  });
  const items6 = [closure_6(first, obj1), ];
  let tmp16Result = memo1.length > 0;
  if (tmp16Result) {
    obj2 = { onLayout: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj2[0] = function onLayout(nativeEvent) {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
    };
    obj2[1] = !first;
    obj2[2] = "no-hide-descendants";
    importDefault = !showsExpandCTAOverride;
    obj2[3] = memo1.map((arg0, arg1) => {
      let isLastRow = closure_1;
      if (isLastRow) {
        isLastRow = arg1 === memo1.length - 1;
      }
      return arg0({ isLastRow });
    });
    tmp16Result = tmp16(tmp17, obj2);
  }
  items6[1] = tmp16Result;
  obj[1] = items6;
  const items7 = [c7(ReanimatedRexport.View, obj), ];
  if (!showsExpandCTAOverride) {
    obj3 = { children: null };
    items7[1] = showsExpandCTAOverride;
    obj3[0] = items7;
    return tmp14(bound, obj3);
  } else {
    if (first) {
      const intl2 = tmp9(1236).intl;
      let stringResult = intl2.string(tmp9(1236).t.nPGLFQ);
    } else if (null != title) {
      const intl = tmp9(1236).intl;
      obj4 = { title: null };
      obj4[0] = title;
      stringResult = intl.formatToPlainString(tmp9(1236).t["bj/2kV"], obj4);
    }
    obj5 = { accessibilityLabel: null, label: null, onPress: null, end: true };
    obj5[0] = stringResult;
    let obj6 = { style: null, children: null };
    obj6[0] = tmp.expandCTALabelContainer;
    const intl3 = tmp9(1236).intl;
    if (first) {
      let stringResult1 = intl3.string(tmp9(1236).t.nPGLFQ);
    } else {
      stringResult1 = intl3.format(tmp9(1236).t.gVw57p, {});
    }
    obj7 = { children: null };
    const obj8 = { color: "text-brand", variant: "text-md/semibold", children: null };
    obj8[2] = stringResult1;
    obj6[1] = tmp16(tmp9(4281).Text, obj8);
    obj6 = tmp16(tmp17, obj6);
    obj5[1] = obj6;
    obj5[2] = function onPress() {
      let tmp = true !== noop;
      if (tmp) {
        tmp = !first;
      }
      callback(tmp);
      if (closure_2 != null) {
        const obj = { expanded: null };
        obj[0] = tmp;
        tmp4(obj);
      }
    };
    obj5 = tmp16(tmp9(5354).TableRow, obj5);
    obj7[0] = obj5;
    tmp16Result = tmp16(tmp17, obj7);
  }
};
export const COLLAPSED_LIST_ITEM_MAX = 4;