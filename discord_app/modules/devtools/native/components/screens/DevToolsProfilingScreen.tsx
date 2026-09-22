// === Module 15952: DevToolsProfilingScreen ===

// Module 15952 (DevToolsProfilingScreen)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4753 */;
import Stack_Stack from "Stack/Stack" /* 5185 */;
import TableRow from "TableRow" /* 5824 */;
import TableRowGroup from "TableRowGroup" /* 5906 */;
import ComponentProfiler from "ComponentProfiler" /* 10457 */;
import DevToolsProfilingUseStateFromStores from "DevToolsProfilingUseStateFromStores" /* 15953 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: null, monospace: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
obj3.padding = 16;
obj2.container = obj3;
obj2.monospace = { fontFamily: fn(1074).Fonts.CODE_BOLD };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default function DevToolsProfilingScreen() {
  [r10008, require] = componentRenderStats(noop.useState(false), 2);
  const callback = noop.useCallback(() => {
    const result = ComponentProfiler.clearComponentRenderStats();
    closure_1_0(true);
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
};