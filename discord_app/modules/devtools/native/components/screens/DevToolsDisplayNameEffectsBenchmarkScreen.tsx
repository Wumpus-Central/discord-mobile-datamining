// discord_app/modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import DisplayNameStylesConstants from "../../../../display_name_styles/DisplayNameStylesConstants.tsx";
import DisplayNameEffect from "../../../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import _modDef2911 from "../../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import UsernameWithEffectsDefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import types from "../../../../display_name_styles/types.tsx";
import useDisplayNameStylesEffectConfigs from "../../../../display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx";
import _mod10653 from "../../../../../utils/native/StringUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let _require, closure_0, onChange, set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
function effectName(arg0) {
  const intl = intl2.intl;
  const string = intl.string;
  let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
  if (OpWJ3f == null) {
    OpWJ3f = _modDef2911.OpWJ3f;
  }
  return string(OpWJ3f);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let items = [...EFFECT_ORDER, DisplayNameEffect.DisplayNameEffect.GUMMY];
let closure_12 = [10, 50, 100, 200];
let items1 = [
  { key: "short", label: "Short", name: "Pixel7" },
  { key: "medium", label: "Medium", name: "NebulaWanderer" },
  { key: "long", label: "Long", name: "GalacticOverlord2049" },
];
let createStyles = createStyles_mod;
let obj = { wrap: obj2, container: obj3, batchRow: { paddingVertical: 2 }, optionButtons: { flexWrap: "wrap" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onChange) => {
      let caption;
      let options;
      let tmp5;
      let tmp9;
      let value;
      let obj = react2;
      const cResult = obj.c(15);
      ({ caption, options, value } = onChange);
      const require = value;
      onChange = onChange.onChange;
      const tmp4 = closure_14();
      if (cResult[0] !== caption) {
        const obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: caption };
        const tmp7 = closure_8(Text_Text.Text, obj2);
        cResult[0] = caption;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === onChange) {
        if (cResult[3] === options) {
          if (cResult[4] === value) {
            tmp9 = cResult[5];
          }
          if (cResult[9] === tmp4.optionButtons) {
            let tmp12;
            if (cResult[10] === tmp9) {
              tmp12 = cResult[11];
            }
            if (cResult[12] === tmp5) {
              let tmp15;
              if (cResult[13] === tmp12) {
                tmp15 = cResult[14];
              }
              return tmp15;
            }
            const obj3 = { spacing: 8, children: items };
            items = [tmp5, tmp12];
            const tmp17 = closure_9(Stack_Stack.Stack, obj3);
            cResult[12] = tmp5;
            cResult[13] = tmp12;
            cResult[14] = tmp17;
            tmp15 = tmp17;
          }
          const obj4 = { direction: "horizontal", spacing: 8, style: tmp8, children: tmp9 };
          const tmp14 = closure_8(Stack_Stack.Stack, obj4);
          cResult[9] = tmp4.optionButtons;
          cResult[10] = tmp9;
          cResult[11] = tmp14;
          tmp12 = tmp14;
        }
      }
      if (cResult[6] === onChange) {
        let tmp10;
        if (cResult[7] === value) {
          tmp10 = cResult[8];
        }
        const mapped = options.map(tmp10);
        cResult[2] = onChange;
        cResult[3] = options;
        cResult[4] = value;
        cResult[5] = mapped;
        tmp9 = mapped;
      }
      const fn = function y(label) {
        let str;
        const obj = {
          size: "sm",
          text: label.label,
          variant: str,
          onPress() {
            return onChange(label.value);
          },
        };
        str = "secondary";
        const Button = components_Button_Button.Button;
        if (label.value === label) {
          str = "primary";
        }
        return closure_1_8(Button, obj, String(label.value));
      };
      cResult[6] = onChange;
      cResult[7] = value;
      cResult[8] = fn;
      tmp10 = fn;
    }
  : (caption) => {
      let options;
      let require;
      ({ options, value: require, onChange: importDefault } = caption);
      caption = caption.caption;
      let obj = { spacing: 8, children: items };
      const tmp = closure_14();
      const Stack = Stack_Stack.Stack;
      items = [closure_8(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: caption })];
      const obj2 = {
        direction: "horizontal",
        spacing: 8,
        style: tmp.optionButtons,
        children: options.map((label) => {
          let str;
          const obj = {
            size: "sm",
            text: label.label,
            variant: str,
            onPress() {
              return importDefault(label.value);
            },
          };
          str = "secondary";
          const Button = require("components/Button/Button").Button;
          if (label.value === label) {
            str = "primary";
          }
          return closure_1_8(Button, obj, String(label.value));
        }),
      };
      const Stack2 = Stack_Stack.Stack;
      items[1] = closure_8(Stack2, obj2);
      return closure_9(Stack, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let effect;
      let style;
      let userId;
      let userName;
      const obj = react2;
      const cResult = obj.c(7);
      ({ userId, userName, style, effect } = arg0);
      const obj2 = useDisplayNameStylesEffectConfigs;
      const displayNameStylesEffectConfig = obj2.useDisplayNameStylesEffectConfig(effect);
      if (cResult[0] === displayNameStylesEffectConfig.previewStyles) {
        if (cResult[1] === userId) {
          let tmp5;
          if (cResult[2] === userName) {
            tmp5 = cResult[3];
          }
          if (cResult[4] === style) {
            let tmp8;
            if (cResult[5] === tmp5) {
              tmp8 = cResult[6];
            }
            return tmp8;
          }
          const obj3 = { style, children: tmp5 };
          const tmp11 = metroImportAll(metroRequire, obj3);
          cResult[4] = style;
          cResult[5] = tmp5;
          cResult[6] = tmp11;
          tmp8 = tmp11;
        }
      }
      const obj4 = {
        userId,
        userName,
        effectDisplayType: types.EffectDisplayType.STATIC,
        pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles,
        variant: "text-md/semibold",
      };
      const tmp6 = UsernameWithEffectsDefault;
      const tmp7 = metroImportAll(tmp6, obj4);
      cResult[0] = displayNameStylesEffectConfig.previewStyles;
      cResult[1] = userId;
      cResult[2] = userName;
      cResult[3] = tmp7;
      tmp5 = tmp7;
    }
  : (arg0) => {
      let effect;
      let obj3;
      let style;
      let tmp2;
      let userId;
      let userName;
      ({ userId, effect, userName, style } = arg0);
      const obj2 = { style, children: metroImportAll(tmp2, obj3) };
      const obj = useDisplayNameStylesEffectConfigs;
      const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effect);
      obj3 = {
        userId,
        userName,
        effectDisplayType: types.EffectDisplayType.STATIC,
        pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles,
        variant: "text-md/semibold",
      };
      tmp2 = UsernameWithEffectsDefault;
      return metroImportAll(metroRequire, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let addMount;
      let addScroll;
      let arr2;
      let arr3;
      let closure_3;
      let first;
      let first1;
      let results;
      let str;
      let tmp19;
      let tmp5;
      let tmp6;
      let tmp9;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(66);
      _require = str();
      str();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [addScroll];
        const fn = function s() {
          const currentUser = addScroll.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          return id;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(first[20]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function k() {
          items = [closure_0(first[6]).DisplayNameEffect.GUMMY];
          set = new Set(items);
          return set;
        };
        cResult[2] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[2];
      }
      [first, _slicedToArray] = first1.useState(tmp9);
      [first1] = first1.useState(100);
      const first2 = _slicedToArray(first1.useState("long"), 2)[0];
      _slicedToArray(first1.useState("long"), 2);
      const tmpResult3 = tmp(first[21]);
      const benchmarkResults = tmpResult3.useBenchmarkResults();
      ({ results, addMount } = benchmarkResults);
      addScroll = benchmarkResults.addScroll;
      const tmpResult4 = tmp(first[21]);
      const mountTimer = tmpResult4.useMountTimer();
      const run = mountTimer.run;
      const begin = mountTimer.begin;
      const measure = mountTimer.measure;
      if (cResult[3] !== addScroll) {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
        cResult[3] = addScroll;
        cResult[4] = T;
      } else {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
      }
      if (cResult[5] !== first2) {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
        const found = arr3.find((key) => key.key === first2);
        cResult[5] = first2;
        cResult[6] = found;
        tmp19 = found;
      } else {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
      }
      let name = tmp19.name;
      if (cResult[7] !== name) {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
        let splitGraphemesResult = obj5.splitGraphemes(name);
        cResult[7] = name;
        cResult[8] = splitGraphemesResult;
        arr2 = splitGraphemesResult;
      } else {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
      }
      let length = arr2.length;
      if (cResult[9] !== first) {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
        const found1 = measure.filter((item) => first.has(item));
        cResult[9] = first;
        cResult[10] = found1;
        arr3 = found1;
      } else {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
      }
      str = "All (rotation)";
      if (arr3.length !== measure.length) {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
        str = tmp23;
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
        cResult[13] = tmp25;
      } else {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
      }
      closure_15 = tmp25;
      if (cResult[14] === begin) {
        class T {
          constructor(arg0) {
            addScroll(arg0);
          }
        }
      }
      function re() {
        if (0 !== arr3.length) {
          const obj = { effects: tmp, effectLabel: str, rowCount: first1, name, graphemeCount: length };
          begin(obj);
        }
      }
      cResult[14] = begin;
      cResult[15] = str;
      cResult[16] = length;
      cResult[17] = name;
      cResult[18] = first1;
      cResult[19] = arr3;
      cResult[20] = re;
    }
  : () => {
      let MountMeasure;
      let Stack;
      let Stack2;
      let addScroll;
      let clear;
      let closure_3;
      let first;
      let first1;
      let first2;
      let items10;
      let items11;
      let items8;
      let items9;
      let memo3;
      let obj10;
      let obj12;
      let obj16;
      let obj17;
      let obj7;
      let results;
      let tmp12;
      let tmp23;
      let tmp9;
      let tmp = memo3();
      _require = tmp;
      let obj = require("get initialized");
      items = [addScroll];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const currentUser = addScroll.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      });
      [first, _slicedToArray] = first1.useState(() => {
        items = [closure_0(first[6]).DisplayNameEffect.GUMMY];
        set = new Set(items);
        return set;
      });
      [first1, tmp9] = first1.useState(100);
      [first2, tmp12] = first1.useState("long");
      const obj2 = require("FRAME_BUDGET_MS");
      const benchmarkResults = obj2.useBenchmarkResults();
      const addMount = benchmarkResults.addMount;
      addScroll = benchmarkResults.addScroll;
      ({ results, clear } = benchmarkResults);
      let obj3 = require("FRAME_BUDGET_MS");
      const mountTimer = obj3.useMountTimer();
      const run = mountTimer.run;
      const begin = mountTimer.begin;
      const measure = mountTimer.measure;
      items1 = [addScroll];
      const cancel = mountTimer.cancel;
      const items2 = [first2];
      const callback = first1.useCallback((arg0) => {
        addScroll(arg0);
      }, items1);
      const memo = first1.useMemo(() => items1.find((key) => key.key === first2).name, items2);
      const items3 = [memo];
      const memo1 = first1.useMemo(() => {
        const obj = _mod10653;
        return obj.splitGraphemes(memo).length;
      }, items3);
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
        let closure_1 = arg1;
        closure_3((items) => {
          set = new Set(items);
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
      const tmp20 = null != stateFromStores && memo2.length > 0;
      const obj4 = {
        style: tmp.wrap,
        contentContainerStyle: tmp.container,
        children: tmp23(Stack, { spacing: 16, children: items10 }),
      };
      Stack = tmp2(tmp3[17]).Stack;
      const obj5 = { title: "Configuration", hasIcons: false, children: items9 };
      const TableRowGroup = tmp2(tmp3[24]).TableRowGroup;
      const obj6 = { label: begin(Stack2, obj7) };
      const TableRow = tmp2(tmp3[23]).TableRow;
      obj7 = { spacing: 8, children: items8 };
      Stack2 = tmp2(tmp3[17]).Stack;
      items8 = [
        run(tmp2(tmp3[15]).Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: "Effects (checked render in rotation)",
        }),
      ];
      const obj8 = {
        spacing: 4,
        children: measure.map((item) => {
          closure_0 = item;
          const Checkbox = closure_0(first[22]).Checkbox;
          const intl = closure_0(first[8]).intl;
          const string = intl.string;
          let OpWJ3f = closure_0(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[item];
          if (OpWJ3f == null) {
            OpWJ3f = stateFromStores(first[10]).OpWJ3f;
          }
          const obj = {
            label: string(OpWJ3f),
            checked: first.has(item),
            onToggle(arg0) {
              return closure_15(item, arg0);
            },
          };
          return run(Checkbox, obj, item);
        }),
      };
      const Stack3 = tmp2(tmp3[17]).Stack;
      items8[1] = run(Stack3, obj8);
      items9 = [run(TableRow, obj6), ,];
      const obj9 = { label: run(closure_15, obj10) };
      obj10 = {
        caption: "Rows",
        value: first1,
        onChange: tmp9,
        options: memo1.map((value) => {
          const obj = { value, label: String(value) };
          return obj;
        }),
      };
      const TableRow2 = tmp2(tmp3[23]).TableRow;
      items9[1] = run(TableRow2, obj9);
      const obj11 = { label: run(closure_15, obj12) };
      obj12 = {
        caption: "Name length (" + memo1 + " graphemes)",
        value: first2,
        onChange: tmp12,
        options: memo2.map((key) => ({ value: key.key, label: key.label })),
      };
      const TableRow3 = tmp2(tmp3[23]).TableRow;
      items9[2] = run(TableRow3, obj11);
      items10 = [begin(TableRowGroup, obj5), , ,];
      const obj13 = { title: "Run", hasIcons: false, children: items11 };
      const TableRowGroup2 = tmp2(tmp3[24]).TableRowGroup;
      items11 = [,];
      const obj14 = {
        label: "Measure mount + layout",
        subLabel: "Mounts the batch and times until native layout completes.",
        arrow: true,
        disabled: !tmp20,
        onPress: callback1,
      };
      items11[0] = run(require("TableRow").TableRow, obj14);
      items11[1] = run(require("FRAME_BUDGET_MS").ScrollBenchmark, {
        onResult: callback,
        subLabel: "Records frame times while you scroll the batch below.",
      });
      items10[1] = begin(TableRowGroup2, obj13);
      items10[2] = run(require("FRAME_BUDGET_MS").BenchmarkResultsList, { results, onClear: clear });
      let tmp21Result = null;
      const tmp22 = first2;
      tmp23 = begin;
      if (null != run) {
        tmp21Result = null;
        if (null != stateFromStores) {
          const obj15 = { value: { overrideSettings: true }, children: run(MountMeasure, obj16, run.batchKey) };
          const Provider = tmp2(tmp3[25]).DisplayNameStylesContext.Provider;
          const _Array = Array;
          obj16 = {
            batchKey: run.batchKey,
            onCancel: cancel,
            onMeasure(arg0) {
              return closure_16(arg0, run.params);
            },
            children: Array.from(obj17, (arg0, id) => {
              let sum;
              const name = run.params.name;
              const obj = {
                userId: stateFromStores,
                effect: run.params.effects[id % run.params.effects.length],
                userName: sum,
                style: closure_0.batchRow,
              };
              const length = String(Math.max(run.params.rowCount - 1, 0)).length;
              const StringResult = String(id);
              const padStartResult = StringResult.padStart(length, "0");
              const obj3 = _mod10653;
              const splitGraphemesResult = obj3.splitGraphemes(name);
              sum = padStartResult;
              if (splitGraphemesResult.length > length) {
                const substr = splitGraphemesResult.slice(0, splitGraphemesResult.length - length);
                sum = substr.join("") + padStartResult;
              }
              return metroImportAll(closure_16, obj, id);
            }),
          };
          obj17 = { length: run.params.rowCount };
          MountMeasure = tmp2(tmp3[21]).MountMeasure;
          tmp21Result = tmp21(Provider, obj15);
        }
      }
      items10[3] = tmp21Result;
      return run(tmp22, obj4);
    };
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx",
);

export default tmp5;
