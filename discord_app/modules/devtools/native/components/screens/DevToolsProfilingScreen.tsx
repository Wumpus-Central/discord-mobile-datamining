import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ ScrollView: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, monospace: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOW;
createCacheKey.padding = 16;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontFamily: require("ME").Fonts.CODE_BOLD };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default function DevToolsProfilingScreen() {
  let require;
  [r10008, require] = componentRenderStats(React.useState(false), 2);
  const callback = React.useCallback(() => {
    const result = outer1_0(tmp3[7]).clearComponentRenderStats();
    callback(true);
  }, []);
  const tmp3 = createCacheKey();
  const dependencyMap = tmp3;
  let obj = require(10368) /* addValue */;
  componentRenderStats = obj.getComponentRenderStats();
  obj = { style: tmp3.container, children: null };
  const tmp = componentRenderStats(React.useState(false), 2);
  if (tmp7) {
    obj = { children: null };
    let obj1 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj2 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: null };
    obj2[3] = callback;
    obj1[2] = tmp8(tmp4(5224).TableRow, obj2);
    let items = [tmp8(tmp4(5558).TableRowGroup, obj1), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((arg0) => {
      let mount;
      let nestedUpdate;
      let update;
      ({ mount, update, nestedUpdate } = componentRenderStats[arg0]);
      let obj = { title: null, hasIcons: false, children: null };
      obj[0] = "Component Profiler Target: '" + arg0 + "'";
      let items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      obj[2] = items.map((stat) => {
        stat = stat.stat;
        let obj = { subLabel: null, label: null };
        obj = { children: null };
        obj = { variant: "text-sm/medium", color: "text-subtle", style: closure_1.monospace, children: null };
        obj[3] = "Count - " + stat.count;
        const items = [outer1_5(outer1_0(outer1_1[11]).Text, obj), ];
        const obj1 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1.monospace, children: null };
        obj1[3] = "Mean - " + stat.mean;
        items[1] = outer1_5(outer1_0(outer1_1[11]).Text, obj1);
        obj[0] = items;
        obj[0] = outer1_7(outer1_6, obj);
        obj[1] = stat.label;
        return outer1_5(outer1_0(outer1_1[10]).TableRow, obj, arg1);
      });
      return outer1_5(outer1_0(tmp3[9]).TableRowGroup, obj, arg0);
    });
    obj[0] = items;
    let tmp8Result = tmp10(closure_6, obj);
  } else {
    const obj3 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj4 = { label: "No components rendered yet.", subLabel: null };
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const obj6 = { variant: "text-xs/semibold", style: null, children: "<ComponentProfiler />" };
    obj6[1] = tmp3.monospace;
    const items1 = ["Make sure you wrap your component in ", tmp8(tmp4(4189).Text, obj6), " to enable measurements."];
    obj5[2] = items1;
    obj4[1] = tmp10(tmp4(4189).Text, obj5);
    obj3[2] = tmp8(tmp4(5224).TableRow, obj4);
    tmp8Result = tmp8(tmp4(5558).TableRowGroup, obj3);
  }
  const obj7 = { spacing: 16, children: null };
  const items2 = [tmp8Result, closure_5(require(14778) /* DevToolsProfilingUseStateFromStores */.DevToolsProfilingUseStateFromStores, {})];
  obj7[1] = items2;
  obj[1] = closure_7(require(4602) /* Stack */.Stack, obj7);
  return closure_5(closure_4, obj);
};