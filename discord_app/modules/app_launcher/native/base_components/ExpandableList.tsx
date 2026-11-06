// === Module 12629: ExpandableList ===

// Module 12629 (ExpandableList)
import util from "util" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5400 */;
import timingPresets from "timingPresets" /* 5403 */;
import Text_Text from "Text/Text" /* 5781 */;
import usePreviousDefault from "usePrevious" /* 6812 */;
import TableRow from "TableRow" /* 7063 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = tmp4(1652);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5170);
let closure_9 = createStyles.createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
let closure_10 = { code: "(function ExpandableListTsx1(){let[expanded,collapsedListHeight,remainingListHeight]=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();})" };
let closure_11 = { code: "(function ExpandableListTsx2(){let[collapsedListHeight,withTiming,containerHeight,timingStandard]=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default function ExpandableList(onExpand) {
  items = onExpand.items;
  let memo1 = items;
  onExpand = onExpand.onExpand;
  importDefault = onExpand;
  ({ onExpandCTAPress: c2, expandedOverride } = onExpand);
  c3 = expandedOverride;
  ({ showsExpandCTAOverride, disableExpanding: noop, title } = onExpand);
  closure_6 = undefined;
  first = undefined;
  let bound;
  let sharedValue;
  let sharedValue1;
  let tmp = closure_9();
  let flag = expandedOverride;
  if (expandedOverride == null) {
    flag = false;
  }
  [first, closure_6] = noop.useState(flag);
  let obj12 = dependencyMap;
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
    if (undefined !== c3) {
      closure_6(tmp);
    }
  }, items2);
  bound = Math.min(4, items.length);
  if (null == showsExpandCTAOverride) {
    showsExpandCTAOverride = items.length > bound;
  }
  sharedValue = _mod1652.useSharedValue(0);
  sharedValue1 = _mod1652.useSharedValue(0);
  const items3 = [closure_10, first, sharedValue, sharedValue1];
  memo1 = undefined;
  importDefault = undefined;
  c2 = undefined;
  [tmp12, tmp13, tmp14, tmp15] = items3;
  class ExpandableListTsx1 {
    constructor() {
      if (closure_0) {
        obj = closure_1;
        num = 0;
        if (0 !== closure_1.get()) {
          obj2 = closure_2;
          if (0 !== closure_2.get()) {
            value = obj.get();
            sum = value + obj2.get();
          }
          return sum;
        }
      }
      sum = closure_1.get();
      return;
    }
  }
  const items4 = [tmp13, tmp14, tmp15];
  ExpandableListTsx1.__closure = items4;
  ExpandableListTsx1.__workletHash = 3023496786140;
  ExpandableListTsx1.__initData = tmp12;
  const items5 = [items, bound];
  const derivedValue = _mod1652.useDerivedValue(ExpandableListTsx1);
  const memo = noop.useMemo(() => memo1.slice(0, bound), items5);
  const items6 = [items, bound];
  noop.useMemo(() => memo1.slice(bound, memo1.length), items6);
  const items7 = [closure_11, sharedValue, timing_timing.withTiming, derivedValue, timingPresets.timingStandard];
  memo1 = undefined;
  importDefault = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21] = items7;
  class ExpandableListTsx2 {
    constructor() {
      if (0 !== closure_0.get()) {
        obj1 = { height: null };
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        obj1.height = closure_1(closure_2.get(), closure_3);
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }
  const items8 = [tmp18, tmp19, tmp20, tmp21];
  ExpandableListTsx2.__closure = items8;
  ExpandableListTsx2.__workletHash = 10519564962816;
  ExpandableListTsx2.__initData = tmp17;
  const animatedStyle = _mod1652.useAnimatedStyle(ExpandableListTsx2);
  let obj2 = { style: null, children: null };
  const items9 = [tmp.animatedListContainer, animatedStyle];
  obj2.style = items9;
  const obj6 = {
    onLayout: function handleCollapsedListLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  let tmp27 = !showsExpandCTAOverride;
  if (!showsExpandCTAOverride) {
    tmp27 = !first;
  }
  memo1 = memo;
  importDefault = tmp27;
  obj6.children = memo.map((fn, index) => {
    let isLastRow = closure_1;
    if (isLastRow) {
      isLastRow = index === memo1.length - 1;
    }
    return fn({ isLastRow });
  });
  const items10 = [timestampProducer(View, obj6), ];
  let tmp25Result = memo1.length > 0;
  if (tmp25Result) {
    const obj7 = {
      onLayout: function handleRemainingListLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        },
      accessibilityElementsHidden: !first,
      importantForAccessibility: "no-hide-descendants",
      children: null
    };
    importDefault = !showsExpandCTAOverride;
    obj7.children = memo1.map((fn, index) => {
      let isLastRow = closure_1;
      if (isLastRow) {
        isLastRow = index === memo1.length - 1;
      }
      return fn({ isLastRow });
    });
    tmp25Result = timestampProducer(View, obj7);
  }
  items10[1] = tmp25Result;
  obj2.children = items10;
  const items11 = [metroImportDefault(_modDef1652.View, obj2), ];
  if (!showsExpandCTAOverride) {
    const obj8 = { children: null };
    items11[1] = showsExpandCTAOverride;
    obj8.children = items11;
    return metroImportDefault(React5, obj8);
  } else {
    if (first) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.nPGLFQ);
    } else if (null != title) {
      const intl = util.intl;
      const obj9 = { title };
      stringResult = intl.formatToPlainString(util.t["bj/2kV"], obj9);
    }
    let obj10 = { accessibilityLabel: stringResult, label: null, onPress: null, end: true };
    let obj11 = { style: tmp.expandCTALabelContainer, children: null };
    const intl3 = util.intl;
    if (first) {
      let stringResult1 = intl3.string(util.t.nPGLFQ);
    } else {
      stringResult1 = intl3.format(util.t.gVw57p, {});
    }
    obj12 = { children: null };
    const obj13 = { color: "text-brand", variant: "body-md/semibold", children: stringResult1 };
    obj11.children = timestampProducer(Text_Text.Text, obj13);
    obj11 = timestampProducer(View, obj11);
    obj10.label = obj11;
    obj10.onPress = function handleExpandCTAPress() {
      let tmp = true !== noop;
      if (tmp) {
        tmp = !first;
      }
      closure_6(tmp);
      if (c2 != null) {
        const obj = { expanded: tmp };
        tmp4(obj);
      }
    };
    obj10 = timestampProducer(TableRow.TableRow, obj10);
    obj12.children = obj10;
    timestampProducer(View, obj12);
  }
  const tmp9Result = _mod1652;
};
export const COLLAPSED_LIST_ITEM_MAX = 4;