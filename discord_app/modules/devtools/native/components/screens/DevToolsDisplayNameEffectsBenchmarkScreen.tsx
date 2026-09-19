// === Module 16035: DevToolsDisplayNameEffectsBenchmarkScreen ===

// Module 16035 (DevToolsDisplayNameEffectsBenchmarkScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2872 from "module_2872" /* 2872 */;
import Text_Text from "Text/Text" /* 4752 */;
import Stack_Stack from "Stack/Stack" /* 5184 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 11159 */;
import types from "types" /* 11160 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 11162 */;
import _mod11166 from "module_11166" /* 11166 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function effectName(arg0) {
  const intl = util.intl;
  let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
  if (OpWJ3f == null) {
    OpWJ3f = _modDef2872.OpWJ3f;
  }
  return intl.string(OpWJ3f);
}
function OptionButtons(children) {
  ({ options, value: require, onChange: importDefault } = children);
  let obj = { spacing: 8, children: null };
  items = [closure_8(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: children.caption }), ];
  const tmp = closure_14();
  items[1] = closure_8(Stack_Stack.Stack, {
    direction: "horizontal",
    spacing: 8,
    style: closure_14().optionButtons,
    children: options.map((label) => {
      const obj = { size: "sm", text: label.label, variant: null, onPress: null };
      let str = "secondary";
      if (label.value === label) {
        str = "primary";
      }
      obj.variant = str;
      obj.onPress = function onPress() {
        return importDefault(label.value);
      };
      return closure_1_8(require("components/Button/Button").Button, obj, String(label.value));
    })
  });
  obj.children = items;
  return closure_9(Stack_Stack.Stack, obj);
}
function BenchmarkRow(arg0) {
  ({ userId, effect, userName, style } = arg0);
  const obj2 = { style, children: null };
  const displayNameStylesEffectConfig = useDisplayNameStylesEffectConfigs.useDisplayNameStylesEffectConfig(effect);
  const obj3 = { userId, userName, effectDisplayType: null, pendingDisplayNameStyles: null, variant: "text-md/semibold" };
  obj3.effectDisplayType = types.EffectDisplayType.STATIC;
  obj3.pendingDisplayNameStyles = displayNameStylesEffectConfig.previewStyles;
  obj2.children = React6(UsernameWithEffectsDefault, obj3);
  return React6(timestampProducer, obj2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...fn(1390).EFFECT_ORDER, fn(1391).DisplayNameEffect.GUMMY];
let closure_12 = [10, 50, 100, 200];
let items1 = [{ key: "short", label: "Short", name: "Pixel7" }, { key: "medium", label: "Medium", name: "NebulaWanderer" }, { key: "long", label: "Long", name: "GalacticOverlord2049" }];
const createStyles = fn(4756);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 }, container: null, batchRow: null, optionButtons: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.container = { paddingVertical: nativeDefault.space.PX_16 };
obj2.batchRow = { paddingVertical: 2 };
obj2.optionButtons = { flexWrap: "wrap" };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx");

export default function DevToolsDisplayNameEffectsBenchmarkScreen() {
  let tmp = memo3();
  _require = tmp;
  items = [addScroll];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const currentUser = addScroll.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  [first, _slicedToArray] = first1.useState(() => {
    items = [closure_0(first[6]).DisplayNameEffect.GUMMY];
    return new Set(items);
  });
  const tmp7 = _slicedToArray(first1.useState(100), 2);
  first1 = tmp7[0];
  const tmp9 = _slicedToArray(first1.useState("long"), 2);
  const first2 = tmp9[0];
  let obj = require("initialize");
  const benchmarkResults = require("FRAME_BUDGET_MS").useBenchmarkResults();
  const addMount = benchmarkResults.addMount;
  addScroll = benchmarkResults.addScroll;
  ({ results, clear } = benchmarkResults);
  const obj2 = require("FRAME_BUDGET_MS");
  const mountTimer = require("FRAME_BUDGET_MS").useMountTimer();
  const run = mountTimer.run;
  const begin = mountTimer.begin;
  const measure = mountTimer.measure;
  items1 = [addScroll];
  const items2 = [first2];
  const callback = first1.useCallback((arg0) => {
    addScroll(arg0);
  }, items1);
  const memo = first1.useMemo(() => items1.find((key) => key.key === first2).name, items2);
  const items3 = [memo];
  const memo1 = first1.useMemo(() => _mod11166.splitGraphemes(memo).length, items3);
  const items4 = [first];
  const memo2 = first1.useMemo(() => items.filter((item) => set.has(item)), items4);
  const items5 = [memo2];
  memo3 = first1.useMemo(() => {
    let str = "All (rotation)";
    if (memo2.length !== items.length) {
      const mapped = memo2.map(effectName);
      str = mapped.join(" + ");
    }
    return str;
  }, items5);
  closure_15 = first1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_3((items) => {
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
      const obj = { effects: tmp, effectLabel: memo3, rowCount: first1, name: memo, graphemeCount: memo1 };
      begin(obj);
    }
  }, items6);
  closure_16 = first1.useCallback((arg0, effectLabel) => {
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
  const obj4 = { style: tmp.wrap, contentContainerStyle: tmp.container, children: null };
  const obj5 = { title: "Configuration", hasIcons: false, children: null };
  const obj6 = { label: null };
  const obj7 = { spacing: 8, children: null };
  const items8 = [run(require("Text/Text").Text, { variant: "text-sm/semibold", color: "text-subtle", children: "Effects (checked render in rotation)" }), ];
  const obj3 = require("FRAME_BUDGET_MS");
  const tmp20 = first2;
  const tmp21 = begin;
  items8[1] = run(require("Stack/Stack").Stack, {
    spacing: 4,
    children: measure.map((item) => {
      closure_0 = item;
      const intl = closure_0(first[8]).intl;
      let OpWJ3f = closure_0(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[item];
      if (OpWJ3f == null) {
        OpWJ3f = stateFromStores(first[10]).OpWJ3f;
      }
      return run(closure_0(first[22]).Checkbox, {
        label: intl.string(OpWJ3f),
        checked: first.has(item),
        onToggle(arg0) {
          return closure_15(closure_0, arg0);
        }
      }, item);
    })
  });
  obj7.children = items8;
  obj6.label = begin(require("Stack/Stack").Stack, obj7);
  const items9 = [run(require("TableRow").TableRow, obj6), , ];
  const obj9 = { label: null };
  const obj8 = {
    spacing: 4,
    children: measure.map((item) => {
      closure_0 = item;
      const intl = closure_0(first[8]).intl;
      let OpWJ3f = closure_0(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[item];
      if (OpWJ3f == null) {
        OpWJ3f = stateFromStores(first[10]).OpWJ3f;
      }
      return run(closure_0(first[22]).Checkbox, {
        label: intl.string(OpWJ3f),
        checked: first.has(item),
        onToggle(arg0) {
          return closure_15(closure_0, arg0);
        }
      }, item);
    })
  };
  obj9.label = run(closure_15, { caption: "Rows", value: first1, onChange: tmp7[1], options: memo1.map((value) => ({ value, label: String(value) })) });
  items9[1] = run(require("TableRow").TableRow, obj9);
  const obj11 = { label: null };
  const obj10 = { caption: "Rows", value: first1, onChange: tmp7[1], options: memo1.map((value) => ({ value, label: String(value) })) };
  obj11.label = run(closure_15, { caption: "Name length (" + memo1 + " graphemes)", value: first2, onChange: tmp9[1], options: memo2.map((key) => ({ value: key.key, label: key.label })) });
  items9[2] = run(require("TableRow").TableRow, obj11);
  obj5.children = items9;
  const items10 = [begin(require("TableRowGroup").TableRowGroup, obj5), , , ];
  const obj13 = { title: "Run", hasIcons: false, children: null };
  const items11 = [run(require("TableRow").TableRow, { label: "Measure mount + layout", subLabel: "Mounts the batch and times until native layout completes.", arrow: true, disabled: !tmp18, onPress: callback1 }), run(require("FRAME_BUDGET_MS").ScrollBenchmark, { onResult: callback, subLabel: "Records frame times while you scroll the batch below." })];
  obj13.children = items11;
  items10[1] = begin(require("TableRowGroup").TableRowGroup, obj13);
  items10[2] = run(require("FRAME_BUDGET_MS").BenchmarkResultsList, { results, onClear: clear });
  let tmp19Result = null;
  if (null != run) {
    tmp19Result = null;
    if (null != stateFromStores) {
      const obj15 = { value: { overrideSettings: true }, children: null };
      const obj16 = {
        batchKey: run.batchKey,
        onCancel: mountTimer.cancel,
        onMeasure(onMeasureTruncated) {
              return closure_16(onMeasureTruncated, run.params);
            },
        children: null
      };
      const _Array = Array;
      const obj17 = { length: run.params.rowCount };
      obj16.children = Array.from(obj17, (arg0, arg1) => {
        const obj = { userId: stateFromStores, effect: run.params.effects[arg1 % run.params.effects.length], userName: null, style: null };
        const length = String(Math.max(run.params.rowCount - 1, 0)).length;
        const padStartResult = String(arg1).padStart(length, "0");
        const StringResult = String(arg1);
        const splitGraphemesResult = _mod11166.splitGraphemes(run.params.name);
        let sum = padStartResult;
        if (splitGraphemesResult.length > length) {
          const substr = splitGraphemesResult.slice(0, splitGraphemesResult.length - length);
          sum = substr.join("") + padStartResult;
        }
        obj.userName = sum;
        obj.style = closure_0.batchRow;
        return React6(BenchmarkRow, obj, arg1);
      });
      obj15.children = tmp19(tmp2(tmp3[19]).MountMeasure, obj16, run.batchKey);
      tmp19Result = tmp19(tmp2(tmp3[23]).DisplayNameStylesContext.Provider, obj15);
    }
  }
  items10[3] = tmp19Result;
  obj4.children = tmp21(require("Stack/Stack").Stack, { spacing: 16, children: items10 });
  return run(tmp20, obj4);
};