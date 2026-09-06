// === Module 15660: DevToolsProfilingScreen ===

// Module 15660 (DevToolsProfilingScreen)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import ComponentProfiler from "ComponentProfiler" /* 10194 */;
import DevToolsProfilingUseStateFromStores from "DevToolsProfilingUseStateFromStores" /* 15661 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, monospace: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
createStyles.padding = 16;
createStyles.container = createStyles;
createStyles.monospace = { fontFamily: fn(1074).Fonts.CODE_BOLD };
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = ComponentProfiler;
  componentRenderStats = obj.getComponentRenderStats();
  obj = { style: tmp3.container, children: null };
  const tmp = componentRenderStats(noop.useState(false), 2);
  if (tmp7) {
    obj = { children: null };
    const obj1 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj2 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: callback };
    obj1.children = closure_5(TableRow.TableRow, obj2);
    let items = [closure_5(TableRowGroup.TableRowGroup, obj1), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((item) => {
      ({ mount, update, nestedUpdate } = componentRenderStats[item]);
      let obj = { title: "Component Profiler Target: '" + item + "'", hasIcons: false, children: null };
      let items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      obj.children = items.map((stat, index) => {
        stat = stat.stat;
        let obj = { subLabel: null, label: null };
        obj = { children: null };
        obj = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Count - " + stat.count };
        const items = [closure_2_5(require("Text/Text").Text, obj), closure_2_5(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Mean - " + stat.mean })];
        obj.children = items;
        obj.subLabel = closure_2_7(closure_2_6, obj);
        obj.label = stat.label;
        return closure_2_5(require("TableRow").TableRow, obj, index);
      });
      return hasOwnProperty(TableRowGroup.TableRowGroup, obj, item);
    });
    obj.children = items;
    let tmp8Result = closure_7(closure_6, obj);
  } else {
    const obj3 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj4 = { label: "No components rendered yet.", subLabel: null };
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const obj6 = { variant: "text-xs/semibold", style: tmp3.monospace, children: "<ComponentProfiler />" };
    const items1 = ["Make sure you wrap your component in ", closure_5(Text_Text.Text, obj6), " to enable measurements."];
    obj5.children = items1;
    obj4.subLabel = closure_7(Text_Text.Text, obj5);
    obj3.children = closure_5(TableRow.TableRow, obj4);
    tmp8Result = closure_5(TableRowGroup.TableRowGroup, obj3);
  }
  const obj7 = { spacing: 16, children: null };
  const items2 = [tmp8Result, closure_5(DevToolsProfilingUseStateFromStores.DevToolsProfilingUseStateFromStores, {})];
  obj7.children = items2;
  obj.children = closure_7(Stack_Stack.Stack, obj7);
  return closure_5(closure_4, obj);
};