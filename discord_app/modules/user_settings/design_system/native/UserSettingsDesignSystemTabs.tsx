// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsxs: error, jsx: closure_8 } = jsxProd);
createCacheKey = { container: { margin: 16, flex: 1, alignItems: "center" }, item: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: ThemesDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
createCacheKey[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default function UserSettingsDesignSystemTabs() {
  const tmp = callback(React.useState(0), 2);
  let first = tmp[1];
  let tmp2 = callback(React.useState(3), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let tmp4 = callback(React.useState(true), 2);
  const first1 = tmp4[0];
  [tmp7, tmp8] = callback(React.useState(false), 2);
  let tmp9 = callback(React.useState(false), 2);
  const first2 = tmp9[0];
  first = tmp7;
  dependencyMap = undefined;
  let tmp6 = callback(React.useState(false), 2);
  const tmp12 = callback3();
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
        let tmp4 = closure_1_8;
        let tmp5 = closure_1_5;
        obj = { style: null, children: null };
        let tmp6 = lib;
        obj[0] = lib.item;
        let tmp7 = closure_1_7;
        let tmp8 = first;
        let tmp9 = lib;
        obj = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj[1] = items1;
        obj[1] = closure_1_7(first(lib[6]).Text, obj);
        obj[3] = closure_1_8(closure_1_5, obj);
        let arr = items.push(obj);
        let tmp11 = first;
        num = sum;
      } while (sum < first);
    }
    return items;
  }, items);
  let obj = first(9171);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp[0], defaultIndex: 1 });
  callback = React.useCallback((nativeEvent) => {
    first(nativeEvent.nativeEvent.layout.width);
  }, []);
  obj1 = first(4165);
  const token = obj1.useToken(first(712).colors.BACKGROUND_BASE_LOW);
  let items1 = [token, ];
  let obj2 = first(4292);
  items1[1] = obj2.hexWithOpacity(token, 0);
  obj = { style: callback3().container, onLayout: callback, children: null };
  const items2 = [callback2(first(12245).Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp20Result = first2;
  if (first2) {
    obj = { state: null, colors: null };
    obj[0] = segmentedControlState;
    obj[1] = items1;
    tmp20Result = tmp20(first(12387), obj);
  }
  obj1 = { children: null };
  obj2 = { spacing: 24, children: null };
  items2[1] = tmp20Result;
  const items3 = [closure_7(closure_5, { children: items2 }), callback2(first(12247).SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj3 = { spacing: 8, direction: "horizontal", children: null };
  const items4 = [
    callback2(first(4879).Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 10,
      onPress() {
        return lib(first + 1);
      }
    }),
    callback2(first(4879).Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        return lib(first - 1);
      }
    })
  ];
  obj3[2] = items4;
  items3[2] = closure_7(first(4877).Stack, obj3);
  const obj6 = { children: null };
  const items5 = [callback2(first(5940).TableSwitchRow, { start: true, label: "Enable Grow", value: first1, onValueChange: tmp4[1] }), callback2(first(5940).TableSwitchRow, { label: "Enable Counts", value: tmp7, onValueChange: tmp8 }), callback2(first(5940).TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first2, onValueChange: tmp9[1] })];
  obj6[0] = items5;
  items3[3] = closure_7(closure_5, obj6);
  obj2[1] = items3;
  obj[2] = closure_7(first(4877).Stack, obj2);
  obj1[0] = callback2(closure_5, obj);
  return callback2(closure_6, obj1);
};