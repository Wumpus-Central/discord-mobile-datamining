// discord_app/modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../../design/components/Button/native/Button.native.tsx";
import AVERAGE_FONT_WIDTH_RATIODefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import DisplayNameStyleColorPreset from "../../../../display_name_styles/types.tsx";
import DISPLAY_NAME_STYLES_EFFECT_NAMES from "../../../../display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function effectName(arg0) {
  const intl = getSystemLocale.intl;
  let OpWJ3f = DISPLAY_NAME_STYLES_EFFECT_NAMES.DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
  if (OpWJ3f == null) {
    OpWJ3f = messagesProxyDefault.OpWJ3f;
  }
  return intl.string(OpWJ3f);
}
function OptionButtons(children) {
  ({ options, value: require, onChange: importDefault } = children);
  items = [callback2(Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: children.caption }), ];
  let obj = {
    direction: "horizontal",
    spacing: 8,
    style: callback4().optionButtons,
    children: options.map((item, index) => {
      closure_0 = item;
      const obj = { size: "sm", text: item.label, variant: null, onPress: null };
      let str = "secondary";
      if (item.value === closure_0) {
        str = "primary";
      }
      obj[2] = str;
      obj[3] = function onPress() {
        return closure_1_1(item.value);
      };
      return closure_1_8(Button.Button, obj, String(item.value));
    })
  };
  items[1] = callback2(Stack.Stack, obj);
  obj[1] = items;
  return callback3(Stack.Stack, obj);
}
function BenchmarkRow(arg0) {
  ({ userId, effect, userName, style } = arg0);
  let obj = { style, children: null };
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effect);
  obj = { userId, userName, effectDisplayType: DisplayNameStyleColorPreset.EffectDisplayType.STATIC, pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles, variant: "text-md/semibold" };
  obj[1] = callback2(AVERAGE_FONT_WIDTH_RATIODefault, obj);
  return callback2(closure_6, obj);
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let items = [...require("items3").EFFECT_ORDER, require("DisplayNameEffect").DisplayNameEffect.GUMMY];
let closure_12 = [10, 50, 100, 200];
let items1 = [{ key: "short", label: "Short", name: "Pixel7" }, { key: "medium", label: "Medium", name: "NebulaWanderer" }, { key: "long", label: "Long", name: "GalacticOverlord2049" }];
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingVertical: 2 };
createCacheKey[3] = { flexWrap: "wrap" };
let closure_14 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx");

export default function DevToolsDisplayNameEffectsBenchmarkScreen() {
  let tmp = memo3();
  const _require = tmp;
  let obj = _require(first[18]);
  items = [addScroll];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = addScroll.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const tmp5 = callback(first1.useState(() => {
    items = [lib(first[6]).DisplayNameEffect.GUMMY];
    return new Set(items);
  }), 2);
  first = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(first1.useState(100), 2);
  first1 = tmp7[0];
  const tmp9 = callback(first1.useState("long"), 2);
  const first2 = tmp9[0];
  obj1 = _require(first[19]);
  const benchmarkResults = obj1.useBenchmarkResults();
  const addMount = benchmarkResults.addMount;
  addScroll = benchmarkResults.addScroll;
  ({ results, clear } = benchmarkResults);
  let obj2 = _require(first[19]);
  const mountTimer = obj2.useMountTimer();
  const run = mountTimer.run;
  const begin = mountTimer.begin;
  const measure = mountTimer.measure;
  items1 = [addScroll];
  const items2 = [first2];
  callback = first1.useCallback((arg0) => {
    addScroll(arg0);
  }, items1);
  const memo = first1.useMemo(() => memo2.find((item, index) => item.key === closure_5).name, items2);
  const items3 = [memo];
  const memo1 = first1.useMemo(() => lib(first[7]).splitGraphemes(memo).length, items3);
  const items4 = [first];
  const memo2 = first1.useMemo(() => measure.filter((item, index) => set.has(item)), items4);
  const items5 = [memo2];
  memo3 = first1.useMemo(() => {
    let str = "All (rotation)";
    if (memo2.length !== measure.length) {
      const mapped = memo2.map(memo);
      str = mapped.join(" + ");
    }
    return str;
  }, items5);
  closure_15 = first1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
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
  obj = { title: "Configuration", hasIcons: false, children: null };
  obj1 = { label: null };
  obj2 = { spacing: 8, children: null };
  const items8 = [
    run(_require(first[14]).Text, { variant: "text-sm/semibold", color: "text-subtle", children: "Effects (checked render in rotation)" }),
    run(_require(first[13]).Stack, {
      spacing: 4,
      children: measure.map((item, index) => {
        const lib = item;
        const intl = lib(first[8]).intl;
        let OpWJ3f = lib(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[item];
        if (OpWJ3f == null) {
          OpWJ3f = stateFromStores(first[10]).OpWJ3f;
        }
        return run(lib(first[22]).Checkbox, {
          label: intl.string(OpWJ3f),
          checked: first.has(item),
          onToggle(arg0) {
            return closure_1_15(closure_0, arg0);
          }
        }, item);
      })
    })
  ];
  obj2[1] = items8;
  obj1[0] = begin(_require(first[13]).Stack, obj2);
  const items9 = [run(_require(first[21]).TableRow, obj1), , ];
  const obj4 = { label: null };
  const obj3 = {
    spacing: 4,
    children: measure.map((item, index) => {
      const lib = item;
      const intl = lib(first[8]).intl;
      let OpWJ3f = lib(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[item];
      if (OpWJ3f == null) {
        OpWJ3f = stateFromStores(first[10]).OpWJ3f;
      }
      return run(lib(first[22]).Checkbox, {
        label: intl.string(OpWJ3f),
        checked: first.has(item),
        onToggle(arg0) {
          return closure_1_15(closure_0, arg0);
        }
      }, item);
    })
  };
  const tmp20 = first2;
  const tmp21 = begin;
  obj4[0] = run(closure_15, { caption: "Rows", value: first1, onChange: tmp7[1], options: memo1.map((item, index) => ({ value: item, label: String(item) })) });
  items9[1] = run(_require(first[21]).TableRow, obj4);
  const obj6 = { label: null };
  const obj5 = { caption: "Rows", value: first1, onChange: tmp7[1], options: memo1.map((item, index) => ({ value: item, label: String(item) })) };
  obj6[0] = run(closure_15, { caption: "Name length (" + memo1 + " graphemes)", value: first2, onChange: tmp9[1], options: memo2.map((item, index) => ({ value: item.key, label: item.label })) });
  items9[2] = run(_require(first[21]).TableRow, obj6);
  obj[2] = items9;
  const items10 = [begin(_require(first[20]).TableRowGroup, obj), , , ];
  const obj8 = { title: "Run", hasIcons: false, children: null };
  const items11 = [run(_require(first[21]).TableRow, { label: "Measure mount + layout", subLabel: "Mounts the batch and times until native layout completes.", arrow: true, disabled: !tmp18, onPress: callback1 }), run(_require(first[19]).ScrollBenchmark, { onResult: callback, subLabel: "Records frame times while you scroll the batch below." })];
  obj8[2] = items11;
  items10[1] = begin(_require(first[20]).TableRowGroup, obj8);
  items10[2] = run(_require(first[19]).BenchmarkResultsList, { results, onClear: clear });
  let tmp19Result = null;
  if (null != run) {
    tmp19Result = null;
    if (null != stateFromStores) {
      const obj10 = { value: null, children: null };
      obj10[0] = { overrideSettings: true };
      const obj11 = { batchKey: null, onCancel: null, onMeasure: null, children: null };
      obj11[0] = run.batchKey;
      obj11[1] = mountTimer.cancel;
      obj11[2] = function onMeasure(onMeasureTruncated) {
        return callback2(onMeasureTruncated, run.params);
      };
      const _Array = Array;
      const obj12 = { length: null };
      obj12[0] = run.params.rowCount;
      obj11[3] = Array.from(obj12, (arg0, arg1) => {
        const obj = { userId: stateFromStores, effect: run.params.effects[arg1 % run.params.effects.length], userName: null, style: null };
        const length = String(Math.max(run.params.rowCount - 1, 0)).length;
        const padStartResult = String(arg1).padStart(length, "0");
        const StringResult = String(arg1);
        const splitGraphemesResult = lib(first[7]).splitGraphemes(run.params.name);
        let sum = padStartResult;
        if (splitGraphemesResult.length > length) {
          const substr = splitGraphemesResult.slice(0, splitGraphemesResult.length - length);
          sum = substr.join("") + padStartResult;
        }
        obj[2] = sum;
        obj[3] = lib.batchRow;
        return run(closure_16, obj, arg1);
      });
      obj10[1] = tmp19(tmp2(tmp3[19]).MountMeasure, obj11, run.batchKey);
      tmp19Result = tmp19(tmp2(tmp3[23]).DisplayNameStylesContext.Provider, obj10);
    }
  }
  items10[3] = tmp19Result;
  obj[2] = tmp21(_require(first[13]).Stack, { spacing: 16, children: items10 });
  return run(tmp20, obj);
};