// === Module 15491: DevToolsProfilingUseStateFromStores ===

// Module 15491 (DevToolsProfilingUseStateFromStores)
import useStateFromStoresPerformanceDebugging from "useStateFromStoresPerformanceDebugging" /* 15492 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx");

export const DevToolsProfilingUseStateFromStores = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first1(str[4]).c(32);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const useStateFromStoresDebuggingEnabled = tmp(tmp2[5]).getUseStateFromStoresDebuggingEnabled();
    cResult[0] = useStateFromStoresDebuggingEnabled;
    let first = useStateFromStoresDebuggingEnabled;
    const tmpResult = tmp(tmp2[5]);
  } else {
    first = cResult[0];
  }
  const tmp7 = _slicedToArray(str2.useState(first), 2);
  first1 = tmp7[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const useStateFromStoresExecutionWindowThresholdMs = tmp(tmp2[5]).getUseStateFromStoresExecutionWindowThresholdMs();
    cResult[1] = useStateFromStoresExecutionWindowThresholdMs;
    let tmp9 = useStateFromStoresExecutionWindowThresholdMs;
    const tmpResult5 = tmp(tmp2[5]);
  } else {
    tmp9 = cResult[1];
  }
  const tmp6Result = _slicedToArray(str2.useState(tmp9), 2);
  _slicedToArray = tmp6Result[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const useStateFromStoresExecutionTimeWarningThresholdMs = tmp(tmp2[5]).getUseStateFromStoresExecutionTimeWarningThresholdMs();
    cResult[2] = useStateFromStoresExecutionTimeWarningThresholdMs;
    let tmp12 = useStateFromStoresExecutionTimeWarningThresholdMs;
    const tmpResult6 = tmp(tmp2[5]);
  } else {
    tmp12 = cResult[2];
  }
  const tmp6Result4 = _slicedToArray(str2.useState(tmp12), 2);
  closure_4 = tmp6Result4[1];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const useStateFromStoresExecutionCountWarningThreshold = tmp(tmp2[5]).getUseStateFromStoresExecutionCountWarningThreshold();
    cResult[3] = useStateFromStoresExecutionCountWarningThreshold;
    let tmp15 = useStateFromStoresExecutionCountWarningThreshold;
    const tmpResult7 = tmp(tmp2[5]);
  } else {
    tmp15 = cResult[3];
  }
  const tmp6Result5 = _slicedToArray(str2.useState(tmp15), 2);
  closure_6 = tmp6Result5[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const useStateFromStoresSpecificHookFilter = tmp(tmp2[5]).getUseStateFromStoresSpecificHookFilter();
    cResult[4] = useStateFromStoresSpecificHookFilter;
    let tmp18 = useStateFromStoresSpecificHookFilter;
    const tmpResult8 = tmp(tmp2[5]);
  } else {
    tmp18 = cResult[4];
  }
  [first2, closure_8] = str2.useState(tmp18);
  if (cResult[5] !== first1) {
    class V {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresDebuggingEnabled(closure_0);
        return;
      }
    }
    const items = [first1];
    cResult[5] = first1;
    cResult[6] = V;
    cResult[7] = items;
    let tmp23 = items;
  } else {
    class V {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresDebuggingEnabled(closure_0);
        return;
      }
    }
    tmp23 = cResult[7];
  }
  const effect = obj3.useEffect(V, tmp23);
  if (cResult[8] !== tmp6Result[0]) {
    class M {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresExecutionWindowThresholdMs(closure_1);
        return;
      }
    }
    const items1 = [str];
    cResult[8] = str;
    cResult[9] = M;
    cResult[10] = items1;
    let tmp26 = items1;
  } else {
    class M {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresExecutionWindowThresholdMs(closure_1);
        return;
      }
    }
    tmp26 = cResult[10];
  }
  const effect1 = obj3.useEffect(M, tmp26);
  if (cResult[11] !== tmp6Result4[0]) {
    class D {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresExecutionTimeWarningThresholdMs(closure_3);
        return;
      }
    }
    const items2 = [str2];
    cResult[11] = str2;
    cResult[12] = items2;
    cResult[13] = D;
    let tmp29 = D;
    const tmp28 = items2;
  } else {
    class D {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresExecutionTimeWarningThresholdMs(closure_3);
        return;
      }
    }
    tmp29 = cResult[13];
  }
  const effect2 = obj3.useEffect(tmp29, tmp28);
  if (cResult[14] !== tmp6Result5[0]) {
    class G {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresExecutionCountWarningThreshold(closure_5);
        return;
      }
    }
    const items3 = [str3];
    cResult[14] = str3;
    cResult[15] = G;
    cResult[16] = items3;
    let tmp32 = items3;
  } else {
    class G {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresExecutionCountWarningThreshold(closure_5);
        return;
      }
    }
    tmp32 = cResult[16];
  }
  const effect3 = obj3.useEffect(G, tmp32);
  if (cResult[17] !== first2) {
    class G {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresExecutionCountWarningThreshold(closure_5);
        return;
      }
    }
    const items4 = [first2];
    cResult[17] = first2;
    cResult[18] = tmp36;
    cResult[19] = items4;
    let tmp35 = items4;
  } else {
    class G {
      constructor() {
        obj = closure_0(closure_1[5]);
        result = obj.setUseStateFromStoresExecutionCountWarningThreshold(closure_5);
        return;
      }
    }
    tmp35 = cResult[19];
  }
  const effect4 = obj3.useEffect(tmp36, tmp35);
  const obj = first1(str[4]);
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(arg0) {
        obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: arg0 };
        return closure_4(closure_0(closure_1[6]).Text, obj);
      }
    }
    cResult[20] = J;
  } else {
    class J {
      constructor(arg0) {
        obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: arg0 };
        return closure_4(closure_0(closure_1[6]).Text, obj);
      }
    }
  }
  if (cResult[21] !== first1) {
    class J {
      constructor(arg0) {
        obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: arg0 };
        return closure_4(closure_0(closure_1[6]).Text, obj);
      }
    }
    const obj2 = { title: "useStateFromStores Profiling", hasIcons: false, children: null };
    const obj4 = { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp7[1], value: first1 };
    obj2.children = closure_4(tmp(tmp2[8]).TableSwitchRow, obj4);
    const tmp41 = closure_4(tmp(tmp2[7]).TableRowGroup, obj2);
    cResult[21] = first1;
    cResult[22] = tmp41;
  } else {
    class J {
      constructor(arg0) {
        obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: arg0 };
        return closure_4(closure_0(closure_1[6]).Text, obj);
      }
    }
  }
  if (cResult[23] === tmp6Result5[0]) {
    class J {
      constructor(arg0) {
        obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: arg0 };
        return closure_4(closure_0(closure_1[6]).Text, obj);
      }
    }
  }
  let tmp42 = null;
  if (first1) {
    class J {
      constructor(arg0) {
        obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: arg0 };
        return closure_4(closure_0(closure_1[6]).Text, obj);
      }
    }
    const obj5 = { title: "useStateFromStores Config", hasIcons: false, children: null };
    const obj6 = { label: "Execution time window threshold", subLabel: null };
    const obj7 = { children: null };
    const items5 = [J("Time window to wait for before reporting violations."), ];
    const obj8 = {
      size: "sm",
      defaultValue: str.toString(),
      onChange(arg0) {
          const NumberResult = Number(arg0);
          if (!isNaN(NumberResult)) {
            if (NumberResult > 1000) {
              closure_2(NumberResult);
            }
          }
          const current = ref.current;
          if (current != null) {
            current.setText("60000");
          }
        },
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[11]).TimerIcon,
      trailingText: "ms",
      ref
    };
    items5[1] = closure_4(tmp(tmp2[10]).TextField, obj8);
    obj7.children = items5;
    obj6.subLabel = closure_6(str3, obj7);
    const items6 = [closure_4(tmp(tmp2[9]).TableRow, obj6), , , ];
    const obj9 = { label: "Cumulative execution time warning threshold", subLabel: null };
    const obj10 = { children: null };
    const items7 = [J("Total execution time limit for hooks before reporting violations."), ];
    const obj11 = {
      size: "sm",
      defaultValue: str2.toString(),
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[11]).TimerIcon,
      trailingText: "ms",
      onChange(arg0) {
          closure_4(Number(arg0));
        }
    };
    items7[1] = closure_4(tmp(tmp2[10]).TextField, obj11);
    obj10.children = items7;
    obj9.subLabel = closure_6(str3, obj10);
    items6[1] = closure_4(tmp(tmp2[9]).TableRow, obj9);
    const obj12 = { label: "Cumulative execution count warning threshold", subLabel: null };
    const obj13 = { children: null };
    const items8 = [J("Execution counts limit for hooks before reporting violations."), ];
    const obj14 = {
      size: "sm",
      defaultValue: str3.toString(),
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[12]).AnalyticsIcon,
      trailingText: "times",
      onChange(arg0) {
          closure_6(Number(arg0));
        }
    };
    items8[1] = closure_4(tmp(tmp2[10]).TextField, obj14);
    obj13.children = items8;
    obj12.subLabel = closure_6(str3, obj13);
    items6[2] = closure_4(tmp(tmp2[9]).TableRow, obj12);
    const obj15 = { label: "Track specific hook", subLabel: null };
    const obj16 = { children: null };
    const items9 = [J("Include a specific hook in the profiling regardless of limits."), ];
    const obj17 = { size: "sm", keyboardType: "email-address", autoCapitalize: "none", autoCorrect: false, defaultValue: first2, placeholder: "hookName", leadingIcon: tmp(tmp2[13]).LettersIcon, trailingIcon: tmp(tmp2[14]).TrashIcon, trailingPressableProps: null, onChange: null };
    const obj18 = { accessibilityLabel: null, onPress: null };
    const intl = tmp(tmp2[15]).intl;
    obj18.accessibilityLabel = intl.string(tmp(tmp2[15]).t.VkKicb);
    obj18.onPress = function onPress() {
      closure_8("");
    };
    obj17.trailingPressableProps = obj18;
    obj17.onChange = function onChange(arg0) {
      closure_8(arg0);
    };
    items9[1] = closure_4(tmp(tmp2[10]).TextField, obj17);
    obj16.children = items9;
    obj15.subLabel = closure_6(str3, obj16);
    items6[3] = closure_4(tmp(tmp2[9]).TableRow, obj15);
    obj5.children = items6;
    tmp42 = closure_6(tmp(tmp2[7]).TableRowGroup, obj5);
  }
  cResult[23] = tmp6Result5[0];
  cResult[24] = tmp6Result4[0];
  cResult[25] = tmp6Result[0];
  cResult[26] = first2;
  cResult[27] = first1;
  cResult[28] = tmp42;
  ref = str2.useRef(null);
}) : (() => {
  const tmp3 = _slicedToArray(str2.useState(value(str[5]).getUseStateFromStoresDebuggingEnabled()), 2);
  value = tmp3[0];
  const obj = value(str[5]);
  [str, _slicedToArray] = str2.useState(value(str[5]).getUseStateFromStoresExecutionWindowThresholdMs());
  const obj2 = value(str[5]);
  [str2, closure_4] = str2.useState(value(str[5]).getUseStateFromStoresExecutionTimeWarningThresholdMs());
  const obj3 = value(str[5]);
  [str3, closure_6] = str2.useState(value(str[5]).getUseStateFromStoresExecutionCountWarningThreshold());
  const obj4 = value(str[5]);
  [first1, closure_8] = str2.useState(value(str[5]).getUseStateFromStoresSpecificHookFilter());
  const items = [value];
  const effect = str2.useEffect(() => {
    const result = useStateFromStoresPerformanceDebugging.setUseStateFromStoresDebuggingEnabled(first);
  }, items);
  const items1 = [str];
  const effect1 = str2.useEffect(() => {
    const result = useStateFromStoresPerformanceDebugging.setUseStateFromStoresExecutionWindowThresholdMs(str);
  }, items1);
  const items2 = [str2];
  const effect2 = str2.useEffect(() => {
    const result = useStateFromStoresPerformanceDebugging.setUseStateFromStoresExecutionTimeWarningThresholdMs(str2);
  }, items2);
  const items3 = [str3];
  const effect3 = str2.useEffect(() => {
    const result = useStateFromStoresPerformanceDebugging.setUseStateFromStoresExecutionCountWarningThreshold(str3);
  }, items3);
  const items4 = [first1];
  const effect4 = str2.useEffect(() => {
    const result = useStateFromStoresPerformanceDebugging.setUseStateFromStoresSpecificHookFilter(first1);
  }, items4);
  const ref = str2.useRef(null);
  const obj5 = value(str[5]);
  const children = [closure_4(value(str[7]).TableRowGroup, { title: "useStateFromStores Profiling", hasIcons: false, children: closure_4(value(str[8]).TableSwitchRow, { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp3[1], value }) }), ];
  let tmp16Result = null;
  if (value) {
    const obj7 = { title: "useStateFromStores Config", hasIcons: false, children: null };
    const obj8 = { label: "Execution time window threshold", subLabel: null };
    const obj9 = { children: null };
    const obj10 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Time window to wait for before reporting violations." };
    const items6 = [tmp18(tmp(tmp2[6]).Text, obj10), ];
    const obj11 = {
      size: "sm",
      defaultValue: str.toString(),
      onChange(arg0) {
          const NumberResult = Number(arg0);
          if (!isNaN(NumberResult)) {
            if (NumberResult > 1000) {
              closure_2(NumberResult);
            }
          }
          const current = ref.current;
          if (current != null) {
            current.setText("60000");
          }
        },
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[11]).TimerIcon,
      trailingText: "ms",
      ref
    };
    items6[1] = tmp18(tmp(tmp2[10]).TextField, obj11);
    obj9.children = items6;
    obj8.subLabel = tmp16(tmp17, obj9);
    const items7 = [tmp18(tmp(tmp2[9]).TableRow, obj8), , , ];
    const obj12 = { label: "Cumulative execution time warning threshold", subLabel: null };
    const obj13 = { children: null };
    const obj14 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Total execution time limit for hooks before reporting violations." };
    const items8 = [tmp18(tmp(tmp2[6]).Text, obj14), ];
    const obj15 = {
      size: "sm",
      defaultValue: str2.toString(),
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[11]).TimerIcon,
      trailingText: "ms",
      onChange(arg0) {
          closure_4(Number(arg0));
        }
    };
    items8[1] = tmp18(tmp(tmp2[10]).TextField, obj15);
    obj13.children = items8;
    obj12.subLabel = tmp16(tmp17, obj13);
    items7[1] = tmp18(tmp(tmp2[9]).TableRow, obj12);
    const obj16 = { label: "Cumulative execution count warning threshold", subLabel: null };
    const obj17 = { children: null };
    const obj18 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Execution counts limit for hooks before reporting violations." };
    const items9 = [tmp18(tmp(tmp2[6]).Text, obj18), ];
    const obj19 = {
      size: "sm",
      defaultValue: str3.toString(),
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[12]).AnalyticsIcon,
      trailingText: "times",
      onChange(arg0) {
          closure_6(Number(arg0));
        }
    };
    items9[1] = tmp18(tmp(tmp2[10]).TextField, obj19);
    obj17.children = items9;
    obj16.subLabel = tmp16(tmp17, obj17);
    items7[2] = tmp18(tmp(tmp2[9]).TableRow, obj16);
    const obj20 = { label: "Track specific hook", subLabel: null };
    const obj21 = { children: null };
    const obj22 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Include a specific hook in the profiling regardless of limits." };
    const items10 = [tmp18(tmp(tmp2[6]).Text, obj22), ];
    const obj23 = { size: "sm", keyboardType: "email-address", autoCapitalize: "none", autoCorrect: false, defaultValue: first1, placeholder: "hookName", leadingIcon: tmp(tmp2[13]).LettersIcon, trailingIcon: tmp(tmp2[14]).TrashIcon, trailingPressableProps: null, onChange: null };
    const obj24 = { accessibilityLabel: null, onPress: null };
    const intl = tmp(tmp2[15]).intl;
    obj24.accessibilityLabel = intl.string(tmp(tmp2[15]).t.VkKicb);
    obj24.onPress = function onPress() {
      closure_8("");
    };
    obj23.trailingPressableProps = obj24;
    obj23.onChange = function onChange(arg0) {
      closure_8(arg0);
    };
    items10[1] = tmp18(tmp(tmp2[10]).TextField, obj23);
    obj21.children = items10;
    obj20.subLabel = tmp16(tmp17, obj21);
    items7[3] = tmp18(tmp(tmp2[9]).TableRow, obj20);
    obj7.children = items7;
    tmp16Result = tmp16(tmp(tmp2[7]).TableRowGroup, obj7);
  }
  children[1] = tmp16Result;
  return closure_6(str3, { children });
});