// === Module 15506: DevToolsProfilingScreen ===

// Module 15506 (DevToolsProfilingScreen)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import TableRow2 from "TableRow" /* 6000 */;
import TableRowGroup3 from "TableRowGroup" /* 6081 */;
import ComponentProfiler from "ComponentProfiler" /* 12549 */;
import DevToolsProfilingUseStateFromStores from "DevToolsProfilingUseStateFromStores" /* 15507 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, stat;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: closure_4, StyleSheet } = react_native);
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, monospace: { fontFamily: Fonts.CODE_BOLD } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TableRow;
  let Text;
  let arr;
  let closure_0;
  let closure_1;
  let closure_2;
  let first;
  let items;
  let items1;
  let items2;
  let obj4;
  let obj6;
  let obj7;
  let tmp16;
  let tmp19;
  let tmp6;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(11);
  _require = _slicedToArray(react.useState(false), 2)[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = ComponentProfiler;
      const result = obj.clearComponentRenderStats();
      closure_0(true);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = closure_8();
  dependencyMap = tmp5;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = require("ComponentProfiler");
    const componentRenderStats = tmpResult.getComponentRenderStats();
    cResult[1] = componentRenderStats;
    tmp6 = componentRenderStats;
  } else {
    tmp6 = cResult[1];
  }
  _slicedToArray = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _Object = Object;
    const keys = Object.keys(tmp6);
    cResult[2] = keys;
    arr = keys;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] !== tmp5.monospace) {
    let tmp12;
    if (arr.length > 0) {
      let obj2 = { children: items };
      let obj3 = { title: "Component Profiler", hasIcons: false, children: closure_5(require("TableRow").TableRow, obj4) };
      const TableRowGroup2 = tmp(6081).TableRowGroup;
      obj4 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: first };
      items = [closure_5(TableRowGroup2, obj3), ];
      const _Object2 = Object;
      const keys1 = Object.keys(tmp6);
      items[1] = keys1.map((item) => {
        let items;
        let mount;
        let nestedUpdate;
        let update;
        ({ mount, update, nestedUpdate } = closure_2[item]);
        let obj = {
          title: "Component Profiler Target: '" + item + "'",
          hasIcons: false,
          children: items.map((stat, index) => {
            let items;
            let obj2;
            stat = stat.stat;
            const label = stat.label;
            const obj = { subLabel: closure_2_7(closure_2_6, obj2), label };
            obj2 = { children: items };
            const TableRow = closure_0(closure_1[11]).TableRow;
            const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Count - " + stat.count };
            const Text = closure_0(closure_1[12]).Text;
            items = [closure_2_5(Text, obj3), ];
            const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Mean - " + stat.mean };
            const Text2 = closure_0(closure_1[12]).Text;
            items[1] = closure_2_5(Text2, obj4);
            return closure_2_5(TableRow, obj, index);
          })
        };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
        return hasOwnProperty(TableRowGroup, obj, item);
      });
      tmp12 = closure_7(closure_6, obj2);
    } else {
      const obj5 = { title: "Component Profiler", hasIcons: false, children: closure_5(TableRow, obj6) };
      let TableRowGroup = tmp(6081).TableRowGroup;
      obj6 = { label: "No components rendered yet.", subLabel: closure_7(Text, obj7) };
      TableRow = tmp(6000).TableRow;
      obj7 = { variant: "text-xs/medium", color: "text-subtle", children: items1 };
      Text = tmp(4892).Text;
      const obj8 = { variant: "text-xs/semibold", style: tmp5.monospace, children: "<ComponentProfiler />" };
      items1 = ["Make sure you wrap your component in ", closure_5(require("Text/Text").Text, obj8), " to enable measurements."];
      tmp12 = closure_5(TableRowGroup, obj5);
    }
    cResult[3] = tmp5.monospace;
    cResult[4] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = closure_5(require("DevToolsProfilingUseStateFromStores").DevToolsProfilingUseStateFromStores, {});
    cResult[5] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] !== tmp9) {
    const obj9 = { spacing: 16, children: items2 };
    items2 = [tmp9, tmp16];
    const tmp21 = closure_7(require("Stack/Stack").Stack, obj9);
    cResult[6] = tmp9;
    cResult[7] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[7];
  }
  if (cResult[8] === tmp5.container) {
    let tmp22;
    if (cResult[9] === tmp19) {
      tmp22 = cResult[10];
    }
    return tmp22;
  }
  const obj10 = { style: tmp5.container, children: tmp19 };
  const tmp23 = closure_5(closure_4, obj10);
  cResult[8] = tmp5.container;
  cResult[9] = tmp19;
  cResult[10] = tmp23;
  tmp22 = tmp23;
}) : (() => {
  let Stack;
  let TableRow;
  let Text;
  let closure_1;
  let componentRenderStats;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj5;
  let obj7;
  let obj8;
  let require;
  let tmp8Result;
  [r10008, require] = componentRenderStats(react.useState(false), 2);
  componentRenderStats(react.useState(false), 2);
  const callback = react.useCallback(() => {
    const obj = ComponentProfiler;
    const result = obj.clearComponentRenderStats();
    _require(true);
  }, []);
  const tmp3 = closure_8();
  dependencyMap = tmp3;
  let obj = ComponentProfiler;
  componentRenderStats = obj.getComponentRenderStats();
  let obj2 = { style: tmp3.container, children: closure_7(Stack, obj10) };
  const tmp7 = Object.keys(componentRenderStats).length > 0;
  Stack = Stack_Stack.Stack;
  if (tmp7) {
    let obj3 = { children: items };
    let obj4 = { title: "Component Profiler", hasIcons: false, children: closure_5(TableRow2.TableRow, obj5) };
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    obj5 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: callback };
    items = [closure_5(TableRowGroup2, obj4), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((item) => {
      let items;
      let mount;
      let nestedUpdate;
      let update;
      ({ mount, update, nestedUpdate } = componentRenderStats[item]);
      let obj = {
        title: "Component Profiler Target: '" + item + "'",
        hasIcons: false,
        children: items.map((stat, index) => {
          let items;
          let obj2;
          stat = stat.stat;
          const label = stat.label;
          const obj = { subLabel: closure_2_7(closure_2_6, obj2), label };
          obj2 = { children: items };
          const TableRow = require("TableRow").TableRow;
          const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Count - " + stat.count };
          const Text = require("Text/Text").Text;
          items = [closure_2_5(Text, obj3), ];
          const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Mean - " + stat.mean };
          const Text2 = require("Text/Text").Text;
          items[1] = closure_2_5(Text2, obj4);
          return closure_2_5(TableRow, obj, index);
        })
      };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      return hasOwnProperty(TableRowGroup, obj, item);
    });
    tmp8Result = closure_7(closure_6, obj3);
  } else {
    const obj6 = { title: "Component Profiler", hasIcons: false, children: closure_5(TableRow, obj7) };
    let TableRowGroup = TableRowGroup3.TableRowGroup;
    obj7 = { label: "No components rendered yet.", subLabel: closure_7(Text, obj8) };
    TableRow = TableRow2.TableRow;
    obj8 = { variant: "text-xs/medium", color: "text-subtle", children: items1 };
    Text = Text_Text.Text;
    const obj9 = { variant: "text-xs/semibold", style: tmp3.monospace, children: "<ComponentProfiler />" };
    items1 = ["Make sure you wrap your component in ", closure_5(Text_Text.Text, obj9), " to enable measurements."];
    tmp8Result = closure_5(TableRowGroup, obj6);
  }
  obj10 = { spacing: 16, children: items2 };
  items2 = [tmp8Result, closure_5(DevToolsProfilingUseStateFromStores.DevToolsProfilingUseStateFromStores, {})];
  return closure_5(closure_4, obj2);
});
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default tmp6;