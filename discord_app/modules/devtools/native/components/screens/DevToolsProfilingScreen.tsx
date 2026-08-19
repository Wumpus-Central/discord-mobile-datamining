// === Module 15114: DevToolsProfilingScreen ===

// Module 15114 (DevToolsProfilingScreen)
import ThemesDefault from "Themes" /* 712 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import addValue from "addValue" /* 10137 */;
import DevToolsProfilingUseStateFromStores from "DevToolsProfilingUseStateFromStores" /* 15115 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ ScrollView: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOW;
createCacheKey.padding = 16;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontFamily: require("ME").Fonts.CODE_BOLD };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default function DevToolsProfilingScreen() {
  [r10008, require] = componentRenderStats(React.useState(false), 2);
  const callback = React.useCallback(() => {
    const result = addValue.clearComponentRenderStats();
    callback(true);
  }, []);
  const tmp3 = callback();
  dependencyMap = tmp3;
  let obj = addValue;
  componentRenderStats = obj.getComponentRenderStats();
  obj = { style: tmp3.container, children: null };
  const tmp = componentRenderStats(React.useState(false), 2);
  if (tmp7) {
    obj = { children: null };
    obj1 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj2 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: null };
    obj2[3] = callback;
    obj1[2] = callback(TableRowInner.TableRow, obj2);
    let items = [callback(TableRowGroupTitle.TableRowGroup, obj1), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((item, index) => {
      ({ mount, update, nestedUpdate } = componentRenderStats[item]);
      let items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      return closure_1_5(TableRowGroupTitle.TableRowGroup, {
        title: "Component Profiler Target: '" + item + "'",
        hasIcons: false,
        children: items.map((item, index) => {
          const stat = item.stat;
          const obj = { variant: "text-sm/medium", color: "text-subtle", style: closure_1.monospace, children: "Count - " + stat.count };
          const items = [closure_1_5(closure_1_0(closure_1_1[11]).Text, obj), closure_1_5(closure_1_0(closure_1_1[11]).Text, { variant: "text-sm/medium", color: "text-subtle", style: closure_1.monospace, children: "Mean - " + stat.mean })];
          obj[0] = items;
          obj[0] = closure_1_7(closure_1_6, obj);
          obj[1] = item.label;
          return closure_1_5(closure_1_0(closure_1_1[10]).TableRow, obj, index);
        })
      }, item);
    });
    obj[0] = items;
    let tmp8Result = callback2(closure_6, obj);
  } else {
    const obj3 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj4 = { label: "No components rendered yet.", subLabel: null };
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const obj6 = { variant: "text-xs/semibold", style: null, children: "<ComponentProfiler />" };
    obj6[1] = tmp3.monospace;
    const items1 = ["Make sure you wrap your component in ", callback(Text.Text, obj6), " to enable measurements."];
    obj5[2] = items1;
    obj4[1] = callback2(Text.Text, obj5);
    obj3[2] = callback(TableRowInner.TableRow, obj4);
    tmp8Result = callback(TableRowGroupTitle.TableRowGroup, obj3);
  }
  const obj7 = { spacing: 16, children: null };
  const items2 = [tmp8Result, callback(DevToolsProfilingUseStateFromStores.DevToolsProfilingUseStateFromStores, {})];
  obj7[1] = items2;
  obj[1] = callback2(Stack.Stack, obj7);
  return callback(closure_4, obj);
};