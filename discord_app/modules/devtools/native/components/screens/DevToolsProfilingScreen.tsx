// === Module 15943: DevToolsProfilingScreen ===

// Module 15943 (DevToolsProfilingScreen)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import TableRow from "TableRow" /* 6179 */;
import TableRowGroup from "TableRowGroup" /* 6264 */;
import ComponentProfiler from "ComponentProfiler" /* 12634 */;
import DevToolsProfilingUseStateFromStores from "DevToolsProfilingUseStateFromStores" /* 15944 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: null, monospace: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
obj3.padding = 16;
obj2.container = obj3;
obj2.monospace = { fontFamily: fn(1085).Fonts.CODE_BOLD };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsProfilingScreen() {
  const cResult = require("c").c(11);
  _require = _slicedToArray(noop.useState(false), 2)[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const result = ComponentProfiler.clearComponentRenderStats();
      closure_0(true);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = closure_8();
  dependencyMap = tmp5;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const componentRenderStats = tmp(12634).getComponentRenderStats();
    cResult[1] = componentRenderStats;
    let tmp6 = componentRenderStats;
    const tmpResult = tmp(12634);
  } else {
    tmp6 = cResult[1];
  }
  _slicedToArray = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _Object = Object;
    const keys = Object.keys(tmp6);
    cResult[2] = keys;
    let arr = keys;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] !== tmp5.monospace) {
    if (arr.length > 0) {
      let obj2 = { children: null };
      let obj3 = { title: "Component Profiler", hasIcons: false, children: null };
      const obj4 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: first };
      obj3.children = closure_5(tmp(6179).TableRow, obj4);
      let items = [closure_5(tmp(6264).TableRowGroup, obj3), ];
      const _Object2 = Object;
      const keys1 = Object.keys(tmp6);
      items[1] = keys1.map((item) => {
        ({ mount, update, nestedUpdate } = closure_2[item]);
        let obj = { title: "Component Profiler Target: '" + item + "'", hasIcons: false, children: null };
        let items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
        obj.children = items.map((stat, index) => {
          stat = stat.stat;
          const obj = { subLabel: null, label: null };
          const obj2 = { children: null };
          const items = [closure_2_5(closure_0(closure_1[12]).Text, { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Count - " + stat.count }), ];
          const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Count - " + stat.count };
          items[1] = closure_2_5(closure_0(closure_1[12]).Text, { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Mean - " + stat.mean });
          obj2.children = items;
          obj.subLabel = closure_2_7(closure_2_6, obj2);
          obj.label = stat.label;
          return closure_2_5(closure_0(closure_1[11]).TableRow, obj, index);
        });
        return hasOwnProperty(TableRowGroup.TableRowGroup, obj, item);
      });
      obj2.children = items;
      let tmp12 = closure_7(closure_6, obj2);
    } else {
      const obj5 = { title: "Component Profiler", hasIcons: false, children: null };
      const obj6 = { label: "No components rendered yet.", subLabel: null };
      const obj7 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      const obj8 = { variant: "text-xs/semibold", style: tmp5.monospace, children: "<ComponentProfiler />" };
      const items1 = ["Make sure you wrap your component in ", closure_5(tmp(5088).Text, obj8), " to enable measurements."];
      obj7.children = items1;
      obj6.subLabel = closure_7(tmp(5088).Text, obj7);
      obj5.children = closure_5(tmp(6179).TableRow, obj6);
      tmp12 = closure_5(tmp(6264).TableRowGroup, obj5);
    }
    cResult[3] = tmp5.monospace;
    cResult[4] = tmp12;
  } else {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = closure_5(tmp(15944).DevToolsProfilingUseStateFromStores, {});
      cResult[5] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[5];
    }
    if (cResult[6] !== cResult[4]) {
      const obj9 = { spacing: 16, children: null };
      const items2 = [tmp9, tmp17];
      obj9.children = items2;
      const tmp22 = closure_7(tmp(5377).Stack, obj9);
      cResult[6] = tmp9;
      cResult[7] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[7];
    }
    if (cResult[8] === tmp5.container) {
      if (cResult[9] === tmp20) {
        let tmp23 = cResult[10];
      }
      return tmp23;
    }
    const obj10 = { style: tmp5.container, children: tmp20 };
    const tmp26 = closure_5(closure_4, obj10);
    cResult[8] = tmp5.container;
    cResult[9] = tmp20;
    cResult[10] = tmp26;
    tmp23 = tmp26;
  }
  let obj = require("c");
}) : (function DevToolsProfilingScreen() {
  [r10008, require] = componentRenderStats(noop.useState(false), 2);
  const callback = noop.useCallback(() => {
    const result = ComponentProfiler.clearComponentRenderStats();
    _require(true);
  }, []);
  const tmp3 = closure_8();
  dependencyMap = tmp3;
  const tmp = componentRenderStats(noop.useState(false), 2);
  componentRenderStats = ComponentProfiler.getComponentRenderStats();
  let obj2 = { style: tmp3.container, children: null };
  if (tmp7) {
    let obj3 = { children: null };
    const obj4 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj5 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: callback };
    obj4.children = closure_5(TableRow.TableRow, obj5);
    let items = [closure_5(TableRowGroup.TableRowGroup, obj4), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((item) => {
      ({ mount, update, nestedUpdate } = componentRenderStats[item]);
      let obj = { title: "Component Profiler Target: '" + item + "'", hasIcons: false, children: null };
      let items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      obj.children = items.map((stat, index) => {
        stat = stat.stat;
        const obj = { subLabel: null, label: null };
        const obj2 = { children: null };
        const items = [closure_2_5(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Count - " + stat.count }), ];
        const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Count - " + stat.count };
        items[1] = closure_2_5(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Mean - " + stat.mean });
        obj2.children = items;
        obj.subLabel = closure_2_7(closure_2_6, obj2);
        obj.label = stat.label;
        return closure_2_5(require("TableRow").TableRow, obj, index);
      });
      return hasOwnProperty(TableRowGroup.TableRowGroup, obj, item);
    });
    obj3.children = items;
    let tmp8Result = closure_7(closure_6, obj3);
  } else {
    const obj6 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj7 = { label: "No components rendered yet.", subLabel: null };
    const obj8 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const obj9 = { variant: "text-xs/semibold", style: tmp3.monospace, children: "<ComponentProfiler />" };
    const items1 = ["Make sure you wrap your component in ", closure_5(Text_Text.Text, obj9), " to enable measurements."];
    obj8.children = items1;
    obj7.subLabel = closure_7(Text_Text.Text, obj8);
    obj6.children = closure_5(TableRow.TableRow, obj7);
    tmp8Result = closure_5(TableRowGroup.TableRowGroup, obj6);
  }
  const obj10 = { spacing: 16, children: null };
  const items2 = [tmp8Result, closure_5(DevToolsProfilingUseStateFromStores.DevToolsProfilingUseStateFromStores, {})];
  obj10.children = items2;
  obj2.children = closure_7(Stack_Stack.Stack, obj10);
  return closure_5(closure_4, obj2);
});