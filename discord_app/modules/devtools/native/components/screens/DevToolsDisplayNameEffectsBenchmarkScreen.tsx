// discord_app/modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import _modDef2786 from "../../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import UsernameWithEffectsDefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import types from "../../../../display_name_styles/types.tsx";
import useDisplayNameStylesEffectConfigs from "../../../../display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx";
import _mod10906 from "../../../../../utils/native/StringUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function effectName(arg0) {
  const intl = util.intl;
  let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
  if (OpWJ3f == null) {
    OpWJ3f = _modDef2786.OpWJ3f;
  }
  return intl.string(OpWJ3f);
}
function OptionButtons(children) {
  ({ options, value: require, onChange: importDefault } = children);
  let obj = { spacing: 8, children: null };
  items = [
    closure_8(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: children.caption }),
  ];
  obj = {
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
    }),
  };
  items[1] = closure_8(Stack_Stack.Stack, obj);
  obj.children = items;
  return closure_9(Stack_Stack.Stack, obj);
}
function BenchmarkRow(arg0) {
  ({ userId, effect, userName, style } = arg0);
  let obj = { style, children: null };
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effect);
  obj = {
    userId,
    userName,
    effectDisplayType: types.EffectDisplayType.STATIC,
    pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles,
    variant: "text-md/semibold",
  };
  obj.children = React6(UsernameWithEffectsDefault, obj);
  return React6(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...fn(1389).EFFECT_ORDER, fn(1390).DisplayNameEffect.GUMMY];
let closure_12 = [10, 50, 100, 200];
let items1 = [
  { key: "short", label: "Short", name: "Pixel7" },
  { key: "medium", label: "Medium", name: "NebulaWanderer" },
  { key: "long", label: "Long", name: "GalacticOverlord2049" },
];
fn(4560);
let createStyles = { wrap: null, container: null, batchRow: null, optionButtons: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.wrap = createStyles;
createStyles.container = { paddingVertical: nativeDefault.space.PX_16 };
createStyles.batchRow = { paddingVertical: 2 };
createStyles.optionButtons = { flexWrap: "wrap" };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx",
);

export default function DevToolsDisplayNameEffectsBenchmarkScreen() {
  let tmp = memo3();
  _require = tmp;
  let obj = require("initialize");
  items = [addScroll];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = addScroll.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const tmp5 = _slicedToArray(
    first1.useState(() => {
      items = [closure_0(first[6]).DisplayNameEffect.GUMMY];
      return new Set(items);
    }),
    2,
  );
  first = tmp5[0];
  _slicedToArray = tmp5[1];
  const tmp7 = _slicedToArray(first1.useState(100), 2);
  first1 = tmp7[0];
  const tmp9 = _slicedToArray(first1.useState("long"), 2);
  const first2 = tmp9[0];
  let obj1 = require("FRAME_BUDGET_MS");
  const benchmarkResults = obj1.useBenchmarkResults();
  const addMount = benchmarkResults.addMount;
  addScroll = benchmarkResults.addScroll;
  ({ results, clear } = benchmarkResults);
  let obj2 = require("FRAME_BUDGET_MS");
  const mountTimer = obj2.useMountTimer();
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
  const memo1 = first1.useMemo(() => _mod10906.splitGraphemes(memo).length, items3);
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
      addMount(
        "" +
          effectLabel.effectLabel +
          " \u00B7 " +
          effectLabel.rowCount +
          " rows \u00B7 " +
          effectLabel.graphemeCount +
          " graphemes",
        tmp,
      );
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
  const items8 = [
    run(require("Text/Text").Text, {
      variant: "text-sm/semibold",
      color: "text-subtle",
      children: "Effects (checked render in rotation)",
    }),
    run(require("Stack/Stack").Stack, {
      spacing: 4,
      children: measure.map((item) => {
        closure_0 = item;
        const intl = closure_0(first[8]).intl;
        let OpWJ3f = closure_0(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[item];
        if (OpWJ3f == null) {
          OpWJ3f = stateFromStores(first[10]).OpWJ3f;
        }
        return run(
          closure_0(first[22]).Checkbox,
          {
            label: intl.string(OpWJ3f),
            checked: first.has(item),
            onToggle(arg0) {
              return closure_15(closure_0, arg0);
            },
          },
          item,
        );
      }),
    }),
  ];
  obj2.children = items8;
  obj1.label = begin(require("Stack/Stack").Stack, obj2);
  const items9 = [run(require("TableRow").TableRow, obj1), ,];
  const obj4 = { label: null };
  const obj3 = {
    spacing: 4,
    children: measure.map((item) => {
      closure_0 = item;
      const intl = closure_0(first[8]).intl;
      let OpWJ3f = closure_0(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[item];
      if (OpWJ3f == null) {
        OpWJ3f = stateFromStores(first[10]).OpWJ3f;
      }
      return run(
        closure_0(first[22]).Checkbox,
        {
          label: intl.string(OpWJ3f),
          checked: first.has(item),
          onToggle(arg0) {
            return closure_15(closure_0, arg0);
          },
        },
        item,
      );
    }),
  };
  const tmp20 = first2;
  const tmp21 = begin;
  obj4.label = run(closure_15, {
    caption: "Rows",
    value: first1,
    onChange: tmp7[1],
    options: memo1.map((value) => ({ value, label: String(value) })),
  });
  items9[1] = run(require("TableRow").TableRow, obj4);
  const obj6 = { label: null };
  const obj5 = {
    caption: "Rows",
    value: first1,
    onChange: tmp7[1],
    options: memo1.map((value) => ({ value, label: String(value) })),
  };
  obj6.label = run(closure_15, {
    caption: "Name length (" + memo1 + " graphemes)",
    value: first2,
    onChange: tmp9[1],
    options: memo2.map((key) => ({ value: key.key, label: key.label })),
  });
  items9[2] = run(require("TableRow").TableRow, obj6);
  obj.children = items9;
  const items10 = [begin(require("TableRowGroup").TableRowGroup, obj), , ,];
  const obj8 = { title: "Run", hasIcons: false, children: null };
  const items11 = [
    run(require("TableRow").TableRow, {
      label: "Measure mount + layout",
      subLabel: "Mounts the batch and times until native layout completes.",
      arrow: true,
      disabled: !tmp18,
      onPress: callback1,
    }),
    run(require("FRAME_BUDGET_MS").ScrollBenchmark, {
      onResult: callback,
      subLabel: "Records frame times while you scroll the batch below.",
    }),
  ];
  obj8.children = items11;
  items10[1] = begin(require("TableRowGroup").TableRowGroup, obj8);
  items10[2] = run(require("FRAME_BUDGET_MS").BenchmarkResultsList, { results, onClear: clear });
  let tmp19Result = null;
  if (null != run) {
    tmp19Result = null;
    if (null != stateFromStores) {
      const obj10 = { value: { overrideSettings: true }, children: null };
      const obj11 = {
        batchKey: run.batchKey,
        onCancel: mountTimer.cancel,
        onMeasure(onMeasureTruncated) {
          return closure_16(onMeasureTruncated, run.params);
        },
        children: null,
      };
      const _Array = Array;
      const obj12 = { length: run.params.rowCount };
      obj11.children = Array.from(obj12, (arg0, arg1) => {
        const obj = {
          userId: stateFromStores,
          effect: run.params.effects[arg1 % run.params.effects.length],
          userName: null,
          style: null,
        };
        const length = String(Math.max(run.params.rowCount - 1, 0)).length;
        const padStartResult = String(arg1).padStart(length, "0");
        const StringResult = String(arg1);
        const tmp = React6;
        const tmp2 = BenchmarkRow;
        const splitGraphemesResult = _mod10906.splitGraphemes(run.params.name);
        let sum = padStartResult;
        if (splitGraphemesResult.length > length) {
          const substr = splitGraphemesResult.slice(0, splitGraphemesResult.length - length);
          sum = substr.join("") + padStartResult;
        }
        obj.userName = sum;
        obj.style = closure_0.batchRow;
        return tmp(tmp2, obj, arg1);
      });
      obj10.children = tmp19(tmp2(tmp3[19]).MountMeasure, obj11, run.batchKey);
      tmp19Result = tmp19(tmp2(tmp3[23]).DisplayNameStylesContext.Provider, obj10);
    }
  }
  items10[3] = tmp19Result;
  obj.children = tmp21(require("Stack/Stack").Stack, { spacing: 16, children: items10 });
  return run(tmp20, obj);
}
