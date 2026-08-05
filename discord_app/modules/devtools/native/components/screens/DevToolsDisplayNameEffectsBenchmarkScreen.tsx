// discord_app/modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx
import _slicedToArray from "_slicedToArray";
import FRAME_BUDGET_MS from "FRAME_BUDGET_MS";
import get_ActivityIndicator from "DisplayNameStyleColorPreset";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "TableRowInner";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let metroImportAll;
let require = arg1;
function effectName(arg0) {
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  let OpWJ3f = require("../../../../display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx") /* DISPLAY_NAME_STYLES_EFFECT_NAMES */.DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
  if (OpWJ3f == null) {
    OpWJ3f = require("../../../../display_name_styles/intl/DisplayNameStyles.messages.js").OpWJ3f;
  }
  return intl.string(OpWJ3f);
}
function OptionButtons(children) {
  let importDefault;
  let options;
  let require;
  ({ options, value: require, onChange: importDefault } = children);
  let obj = { spacing: 8, children: null };
  const items = [callback2(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-sm/semibold", color: "text-subtle", children: children.caption }), ];
  obj = { direction: "horizontal", spacing: 8, style: createCacheKey().optionButtons, children: null };
  obj[3] = options.map((label) => {
    let closure_0 = label;
    const obj = { size: "sm", text: label.label, variant: null, onPress: null };
    let str = "secondary";
    if (label.value === closure_0) {
      str = "primary";
    }
    obj[2] = str;
    obj[3] = function onPress() {
      return outer1_1(label.value);
    };
    return outer1_8(outer1_0(outer1_2[15]).Button, obj, String(label.value));
  });
  items[1] = callback2(require("../../../../../design/components/Stack/native/Stack.native.tsx") /* Stack */.Stack, obj);
  obj[1] = items;
  return callback3(require("../../../../../design/components/Stack/native/Stack.native.tsx") /* Stack */.Stack, obj);
}
function BenchmarkRow(arg0) {
  let effect;
  let style;
  let userId;
  let userName;
  ({ userId, effect, userName, style } = arg0);
  let obj = require("../../../../display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx") /* DISPLAY_NAME_STYLES_EFFECT_NAMES */;
  obj = { style, children: null };
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effect);
  obj = { userId, userName, effectDisplayType: null, pendingDisplayNameStyles: null, variant: "text-md/semibold" };
  obj[2] = require("../../../../display_name_styles/types.tsx") /* DisplayNameStyleColorPreset */.EffectDisplayType.STATIC;
  obj[3] = displayNameStylesEffectConfig.previewStyles;
  obj[1] = callback2(require("../../../../display_name_styles/native/UsernameWithEffects.tsx"), obj);
  return callback2(closure_6, obj);
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let items = [...require("items3").EFFECT_ORDER, require("DisplayNameEffect").DisplayNameEffect.GUMMY];
let closure_12 = [10, 50, 100, 200];
let items1 = [{ key: "short", label: "Short", name: "Pixel7" }, { key: "medium", label: "Medium", name: "NebulaWanderer" }, { key: "long", label: "Long", name: "GalacticOverlord2049" }];
createCacheKey = { wrap: null, container: null, batchRow: null, optionButtons: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: require("Themes").space.PX_16 };
createCacheKey[2] = { paddingVertical: 2 };
createCacheKey[3] = { flexWrap: "wrap" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx");

export default function DevToolsDisplayNameEffectsBenchmarkScreen() {
  let clear;
  let results;
  let tmp = memo3();
  const require = tmp;
  let obj = require(first[18]);
  let items = [addScroll];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = addScroll.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const tmp5 = callback(first1.useState(() => {
    const items = [tmp(first[6]).DisplayNameEffect.GUMMY];
    return new Set(items);
  }), 2);
  first = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(first1.useState(100), 2);
  first1 = tmp7[0];
  const tmp9 = callback(first1.useState("long"), 2);
  const first2 = tmp9[0];
  let obj1 = require(first[19]);
  const benchmarkResults = obj1.useBenchmarkResults();
  const addMount = benchmarkResults.addMount;
  addScroll = benchmarkResults.addScroll;
  ({ results, clear } = benchmarkResults);
  let obj2 = require(first[19]);
  const mountTimer = obj2.useMountTimer();
  const run = mountTimer.run;
  const begin = mountTimer.begin;
  const measure = mountTimer.measure;
  const items1 = [addScroll];
  const items2 = [first2];
  callback = first1.useCallback((arg0) => {
    addScroll(arg0);
  }, items1);
  const memo = first1.useMemo(() => memo2.find((key) => key.key === closure_5).name, items2);
  const items3 = [memo];
  const memo1 = first1.useMemo(() => tmp(first[7]).splitGraphemes(memo).length, items3);
  const items4 = [first];
  const memo2 = first1.useMemo(() => measure.filter((arg0) => set.has(arg0)), items4);
  const items5 = [memo2];
  memo3 = first1.useMemo(() => {
    let str = "All (rotation)";
    if (memo2.length !== measure.length) {
      const mapped = memo2.map(memo);
      str = mapped.join(" + ");
    }
    return str;
  }, items5);
  let closure_15 = first1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    callback((items) => {
      const set = new Set(items);
      if (closure_1) {
        set.add(closure_0);
      } else {
        set.delete(closure_0);
      }
      return set;
    });
  }, []);
  const items6 = [begin, memo2, memo3, first1, memo, memo1];
  const items7 = [measure, addMount];
  const callback1 = first1.useCallback(() => {
    if (0 !== memo2.length) {
      const obj = { effects: null, effectLabel: null, rowCount: null, name: null, graphemeCount: null };
      obj[0] = tmp;
      obj[1] = memo3;
      obj[2] = first1;
      obj[3] = memo;
      obj[4] = memo1;
      begin(obj);
    }
  }, items6);
  let closure_16 = first1.useCallback((arg0, effectLabel) => {
    const tmp = measure(arg0);
    if (null != tmp) {
      const _HermesInternal = HermesInternal;
      addMount("" + effectLabel.effectLabel + " \u00B7 " + effectLabel.rowCount + " rows \u00B7 " + effectLabel.graphemeCount + " graphemes", tmp);
    }
  }, items7);
  let tmp18 = null != stateFromStores;
  if (tmp18) {
    tmp18 = memo2.length > 0;
  }
  obj = { style: tmp.wrap, contentContainerStyle: tmp.container, children: null };
  obj = { title: "Configuration", hasIcons: false, children: null };
  obj1 = { label: null };
  obj2 = { spacing: 8, children: null };
  const items8 = [run(require(first[14]).Text, { variant: "text-sm/semibold", color: "text-subtle", children: "Effects (checked render in rotation)" }), ];
  const obj3 = { spacing: 4, children: null };
  obj3[1] = measure.map((arg0) => {
    let tmp = arg0;
    tmp = run;
    const intl = tmp(first[8]).intl;
    let OpWJ3f = tmp(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
    if (OpWJ3f == null) {
      OpWJ3f = stateFromStores(first[10]).OpWJ3f;
    }
    return tmp(tmp(first[22]).Checkbox, {
      label: intl.string(OpWJ3f),
      checked: first.has(arg0),
      onToggle(arg0) {
        return outer1_15(closure_0, arg0);
      }
    }, arg0);
  });
  items8[1] = run(require(first[13]).Stack, obj3);
  obj2[1] = items8;
  obj1[0] = begin(require(first[13]).Stack, obj2);
  const items9 = [run(require(first[21]).TableRow, obj1), , ];
  const obj4 = { label: null };
  const obj5 = { caption: "Rows", value: first1, onChange: tmp7[1], options: null };
  obj5[3] = memo1.map((value) => ({ value, label: String(value) }));
  obj4[0] = run(closure_15, obj5);
  items9[1] = run(require(first[21]).TableRow, obj4);
  const obj6 = { label: null };
  const obj7 = { caption: null, value: null, onChange: null, options: null };
  obj7[0] = "Name length (" + memo1 + " graphemes)";
  obj7[1] = first2;
  obj7[2] = tmp9[1];
  obj7[3] = memo2.map((key) => ({ value: key.key, label: key.label }));
  obj6[0] = run(closure_15, obj7);
  items9[2] = run(require(first[21]).TableRow, obj6);
  obj[2] = items9;
  const items10 = [begin(require(first[20]).TableRowGroup, obj), , , ];
  const obj8 = { title: "Run", hasIcons: false, children: null };
  const items11 = [run(require(first[21]).TableRow, { label: "Measure mount + layout", subLabel: "Mounts the batch and times until native layout completes.", arrow: true, disabled: !tmp18, onPress: callback1 }), run(require(first[19]).ScrollBenchmark, { onResult: callback, subLabel: "Records frame times while you scroll the batch below." })];
  obj8[2] = items11;
  items10[1] = begin(require(first[20]).TableRowGroup, obj8);
  items10[2] = run(require(first[19]).BenchmarkResultsList, { results, onClear: clear });
  let tmp19Result = null;
  if (null != run) {
    tmp19Result = null;
    if (null != stateFromStores) {
      const obj10 = { value: null, children: null };
      obj10[0] = { overrideSettings: true };
      const obj11 = { batchKey: null, onCancel: null, onMeasure: null, children: null };
      obj11[0] = run.batchKey;
      obj11[1] = mountTimer.cancel;
      obj11[2] = function onMeasure(arg0) {
        return callback2(arg0, run.params);
      };
      const _Array = Array;
      const obj12 = { length: null };
      obj12[0] = run.params.rowCount;
      obj11[3] = Array.from(obj12, (arg0, arg1) => {
        const obj = { userId: stateFromStores, effect: run.params.effects[arg1 % run.params.effects.length], userName: null, style: null };
        const length = String(Math.max(run.params.rowCount - 1, 0)).length;
        const padStartResult = String(arg1).padStart(length, "0");
        const StringResult = String(arg1);
        const tmp2 = closure_16;
        const splitGraphemesResult = run(first[7]).splitGraphemes(run.params.name);
        let sum = padStartResult;
        if (splitGraphemesResult.length > length) {
          const substr = splitGraphemesResult.slice(0, splitGraphemesResult.length - length);
          sum = substr.join("") + padStartResult;
        }
        obj[2] = sum;
        obj[3] = run.batchRow;
        return run(tmp2, obj, arg1);
      });
      obj10[1] = tmp19(tmp2(tmp3[19]).MountMeasure, obj11, run.batchKey);
      tmp19Result = tmp19(tmp2(tmp3[23]).DisplayNameStylesContext.Provider, obj10);
    }
  }
  items10[3] = tmp19Result;
  obj[2] = begin(require(first[13]).Stack, { spacing: 16, children: items10 });
  return run(first2, obj);
};