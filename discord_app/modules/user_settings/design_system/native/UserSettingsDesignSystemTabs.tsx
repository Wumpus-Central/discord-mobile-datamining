// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsxs: error, jsx: metroImportAll } = jsxProd);
createCacheKey = { container: { margin: 16, flex: 1, alignItems: "center" }, item: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: require("Themes").colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default function UserSettingsDesignSystemTabs() {
  let tmp7;
  let tmp8;
  const tmp = callback(React.useState(0), 2);
  let first = tmp[1];
  let tmp2 = callback(React.useState(3), 2);
  first = tmp2[0];
  let dependencyMap = tmp2[1];
  let tmp4 = callback(React.useState(true), 2);
  const first1 = tmp4[0];
  [tmp7, tmp8] = callback(React.useState(false), 2);
  let tmp9 = callback(React.useState(false), 2);
  const first2 = tmp9[0];
  first = tmp7;
  dependencyMap = undefined;
  let tmp6 = callback(React.useState(false), 2);
  const tmp12 = createCacheKey();
  dependencyMap = tmp12;
  let items = [first, tmp12.item, tmp7];
  const memo = React.useMemo(() => {
    let sum;
    const items = [];
    let num = 0;
    if (0 < first) {
      do {
        let obj = { label: null, count: null, id: null, page: null };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        obj[0] = "Item " + sum;
        let tmp2 = first;
        let rounded;
        if (first) {
          let _Math = Math;
          let _Math2 = Math;
          rounded = Math.floor(100 * Math.random());
        }
        obj[1] = rounded;
        let _HermesInternal2 = HermesInternal;
        obj[2] = "item-" + sum;
        let tmp4 = outer1_8;
        let tmp5 = outer1_5;
        obj = { style: null, children: null };
        let tmp6 = _undefined;
        obj[0] = _undefined.item;
        let tmp7 = outer1_7;
        let tmp8 = first;
        let tmp9 = _undefined;
        obj = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj[1] = items1;
        obj[1] = outer1_7(first(_undefined[6]).Text, obj);
        obj[3] = outer1_8(outer1_5, obj);
        let arr = items.push(obj);
        let tmp11 = first;
        num = sum;
      } while (sum < first);
    }
    return items;
  }, items);
  let obj = first(8962);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp[0], defaultIndex: 1 });
  callback = React.useCallback((nativeEvent) => {
    first(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj1 = first(4024);
  const token = obj1.useToken(first(712).colors.BACKGROUND_BASE_LOW);
  let items1 = [token, ];
  let obj2 = first(4152);
  items1[1] = obj2.hexWithOpacity(token, 0);
  obj = { style: createCacheKey().container, onLayout: callback, children: null };
  const items2 = [callback2(first(11976).Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp20Result = first2;
  if (first2) {
    obj = { state: null, colors: null };
    obj[0] = segmentedControlState;
    obj[1] = items1;
    tmp20Result = tmp20(first(12117), obj);
  }
  obj1 = { children: null };
  obj2 = { spacing: 24, children: null };
  items2[1] = tmp20Result;
  const items3 = [closure_7(closure_5, { children: items2 }), callback2(first(9567).SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj3 = { spacing: 8, direction: "horizontal", children: null };
  const items4 = [
    callback2(first(4714).Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 10,
      onPress() {
        return _undefined(first + 1);
      }
    }),
    callback2(first(4714).Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        return _undefined(first - 1);
      }
    })
  ];
  obj3[2] = items4;
  items3[2] = closure_7(first(4712).Stack, obj3);
  const obj6 = { children: null };
  const items5 = [callback2(first(5768).TableSwitchRow, { start: true, label: "Enable Grow", value: first1, onValueChange: tmp4[1] }), callback2(first(5768).TableSwitchRow, { label: "Enable Counts", value: tmp7, onValueChange: tmp8 }), callback2(first(5768).TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first2, onValueChange: tmp9[1] })];
  obj6[0] = items5;
  items3[3] = closure_7(closure_5, obj6);
  obj2[1] = items3;
  obj[2] = closure_7(first(4712).Stack, obj2);
  obj1[0] = callback2(closure_5, obj);
  return callback2(closure_6, obj1);
};