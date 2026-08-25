// === Module 15208: DevToolsProfilingScreen ===

// Module 15208 (DevToolsProfilingScreen)
import ThemesDefault from "Themes" /* 712 */;
import Stack from "Stack" /* 4813 */;
import addValue from "addValue" /* 10026 */;
import DevToolsProfilingUseStateFromStores from "DevToolsProfilingUseStateFromStores" /* 15209 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
({ ScrollView: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, monospace: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOW;
createCacheKey.padding = 16;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontFamily: require("ME").Fonts.CODE_BOLD };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default function DevToolsProfilingScreen() {
  [r10008, require] = componentRenderStats(React.useState(false), 2);
  const callback = React.useCallback(() => {
    const result = closure_1_0(10026).clearComponentRenderStats();
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
    obj1[2] = tmp8(tmp4(5480).TableRow, obj2);
    let items = [tmp8(tmp4(5873).TableRowGroup, obj1), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((arg0) => {
      ({ mount, update, nestedUpdate } = componentRenderStats[arg0]);
      let items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      return closure_1_5(closure_1_0(5873).TableRowGroup, {
        title: "Component Profiler Target: '" + arg0 + "'",
        hasIcons: false,
        children: items.map((stat) => {
          stat = stat.stat;
          let obj = { subLabel: null, label: null };
          obj = { children: null };
          obj = { variant: "text-sm/medium", color: "text-subtle", style: closure_1.monospace, children: "Count - " + stat.count };
          const items = [closure_1_5(closure_1_0(closure_1_1[11]).Text, obj), closure_1_5(closure_1_0(closure_1_1[11]).Text, { variant: "text-sm/medium", color: "text-subtle", style: closure_1.monospace, children: "Mean - " + stat.mean })];
          obj[0] = items;
          obj[0] = closure_1_7(closure_1_6, obj);
          obj[1] = stat.label;
          return closure_1_5(closure_1_0(closure_1_1[10]).TableRow, obj, arg1);
        })
      }, arg0);
    });
    obj[0] = items;
    let tmp8Result = tmp10(closure_6, obj);
  } else {
    const obj3 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj4 = { label: "No components rendered yet.", subLabel: null };
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const obj6 = { variant: "text-xs/semibold", style: null, children: "<ComponentProfiler />" };
    obj6[1] = tmp3.monospace;
    const items1 = ["Make sure you wrap your component in ", tmp8(tmp4(4376).Text, obj6), " to enable measurements."];
    obj5[2] = items1;
    obj4[1] = tmp10(tmp4(4376).Text, obj5);
    obj3[2] = tmp8(tmp4(5480).TableRow, obj4);
    tmp8Result = tmp8(tmp4(5873).TableRowGroup, obj3);
  }
  const obj7 = { spacing: 16, children: null };
  const items2 = [tmp8Result, closure_5(DevToolsProfilingUseStateFromStores.DevToolsProfilingUseStateFromStores, {})];
  obj7[1] = items2;
  obj[1] = closure_7(Stack.Stack, obj7);
  return closure_5(closure_4, obj);
};