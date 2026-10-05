// === Module 15491: DevToolsProfilingUseStateFromStores ===

// Module 15491 (DevToolsProfilingUseStateFromStores)
import useStateFromStoresPerformanceDebugging from "useStateFromStoresPerformanceDebugging" /* 15492 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let closure_4;
  let closure_6;
  let closure_8;
  let first;
  let first1;
  let first2;
  let intl;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj13;
  let obj16;
  let obj18;
  let obj4;
  let obj7;
  let str;
  let str2;
  let str3;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp19;
  let tmp24;
  let tmp27;
  let tmp29;
  let tmp30;
  let tmp33;
  let tmp36;
  let tmp9;
  let obj = first1(str[4]);
  const cResult = obj.c(32);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = first1(str[5]);
    const useStateFromStoresDebuggingEnabled = tmpResult.getUseStateFromStoresDebuggingEnabled();
    cResult[0] = useStateFromStoresDebuggingEnabled;
    first = useStateFromStoresDebuggingEnabled;
  } else {
    first = cResult[0];
  }
  [first1, tmp9] = str2.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult5 = first1(str[5]);
    const useStateFromStoresExecutionWindowThresholdMs = tmpResult5.getUseStateFromStoresExecutionWindowThresholdMs();
    cResult[1] = useStateFromStoresExecutionWindowThresholdMs;
    tmp10 = useStateFromStoresExecutionWindowThresholdMs;
  } else {
    tmp10 = cResult[1];
  }
  [str, _slicedToArray] = str2.useState(tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult6 = first1(str[5]);
    const useStateFromStoresExecutionTimeWarningThresholdMs = tmpResult6.getUseStateFromStoresExecutionTimeWarningThresholdMs();
    cResult[2] = useStateFromStoresExecutionTimeWarningThresholdMs;
    tmp13 = useStateFromStoresExecutionTimeWarningThresholdMs;
  } else {
    tmp13 = cResult[2];
  }
  [str2, closure_4] = str2.useState(tmp13);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult7 = first1(str[5]);
    const useStateFromStoresExecutionCountWarningThreshold = tmpResult7.getUseStateFromStoresExecutionCountWarningThreshold();
    cResult[3] = useStateFromStoresExecutionCountWarningThreshold;
    tmp16 = useStateFromStoresExecutionCountWarningThreshold;
  } else {
    tmp16 = cResult[3];
  }
  [str3, closure_6] = str2.useState(tmp16);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult8 = first1(str[5]);
    const useStateFromStoresSpecificHookFilter = tmpResult8.getUseStateFromStoresSpecificHookFilter();
    cResult[4] = useStateFromStoresSpecificHookFilter;
    tmp19 = useStateFromStoresSpecificHookFilter;
  } else {
    tmp19 = cResult[4];
  }
  [first2, closure_8] = str2.useState(tmp19);
  if (cResult[5] !== first1) {
    class V {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresDebuggingEnabled(first1);
      }
    }
    const items = [first1];
    cResult[5] = first1;
    cResult[6] = V;
    cResult[7] = items;
    tmp24 = items;
  } else {
    class V {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresDebuggingEnabled(first1);
      }
    }
    tmp24 = cResult[7];
  }
  const effect = obj3.useEffect(V, tmp24);
  if (cResult[8] !== str) {
    class M {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresExecutionWindowThresholdMs(str);
      }
    }
    const items1 = [str];
    cResult[8] = str;
    cResult[9] = M;
    cResult[10] = items1;
    tmp27 = items1;
  } else {
    class M {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresExecutionWindowThresholdMs(str);
      }
    }
    tmp27 = cResult[10];
  }
  const effect1 = obj3.useEffect(M, tmp27);
  if (cResult[11] !== str2) {
    class D {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresExecutionTimeWarningThresholdMs(str2);
      }
    }
    const items2 = [str2];
    cResult[11] = str2;
    cResult[12] = items2;
    cResult[13] = D;
    tmp30 = D;
    tmp29 = items2;
  } else {
    class D {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresExecutionTimeWarningThresholdMs(str2);
      }
    }
    tmp30 = cResult[13];
  }
  const effect2 = obj3.useEffect(tmp30, tmp29);
  if (cResult[14] !== str3) {
    class G {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresExecutionCountWarningThreshold(str3);
      }
    }
    const items3 = [str3];
    cResult[14] = str3;
    cResult[15] = G;
    cResult[16] = items3;
    tmp33 = items3;
  } else {
    class G {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresExecutionCountWarningThreshold(str3);
      }
    }
    tmp33 = cResult[16];
  }
  const effect3 = obj3.useEffect(G, tmp33);
  if (cResult[17] !== first2) {
    class G {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresExecutionCountWarningThreshold(str3);
      }
    }
    const items4 = [first2];
    cResult[17] = first2;
    cResult[18] = tmp37;
    cResult[19] = items4;
    tmp36 = items4;
  } else {
    class G {
      constructor() {
        const obj = useStateFromStoresPerformanceDebugging;
        const result = obj.setUseStateFromStoresExecutionCountWarningThreshold(str3);
      }
    }
    tmp36 = cResult[19];
  }
  const effect4 = obj3.useEffect(tmp37, tmp36);
  const ref = obj3.useRef(null);
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(children) {
        const obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children };
        return closure_4(first1(str[6]).Text, obj);
      }
    }
    cResult[20] = J;
  } else {
    class J {
      constructor(children) {
        const obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children };
        return closure_4(first1(str[6]).Text, obj);
      }
    }
  }
  if (cResult[21] !== first1) {
    class J {
      constructor(children) {
        const obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children };
        return closure_4(first1(str[6]).Text, obj);
      }
    }
    const obj2 = { title: "useStateFromStores Profiling", hasIcons: false, children: closure_4(first1(str[8]).TableSwitchRow, obj4) };
    const TableRowGroup = tmp(tmp2[7]).TableRowGroup;
    obj4 = { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp9, value: first1 };
    cResult[21] = first1;
    cResult[22] = closure_4(TableRowGroup, obj2);
    const tmp42 = closure_4(TableRowGroup, obj2);
  } else {
    class J {
      constructor(children) {
        const obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children };
        return closure_4(first1(str[6]).Text, obj);
      }
    }
  }
  if (cResult[23] === str3) {
    class J {
      constructor(children) {
        const obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children };
        return closure_4(first1(str[6]).Text, obj);
      }
    }
  }
  let tmp43 = null;
  if (first1) {
    class J {
      constructor(children) {
        const obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children };
        return closure_4(first1(str[6]).Text, obj);
      }
    }
    const obj5 = { title: "useStateFromStores Config", hasIcons: false, children: items6 };
    const TableRowGroup2 = tmp(tmp2[7]).TableRowGroup;
    const obj6 = { label: "Execution time window threshold", subLabel: closure_6(str3, obj7) };
    obj7 = { children: items5 };
    const TableRow = tmp(tmp2[9]).TableRow;
    items5 = [J("Time window to wait for before reporting violations."), ];
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
      leadingIcon: first1(str[11]).TimerIcon,
      trailingText: "ms",
      ref
    };
    const TextField = tmp(tmp2[10]).TextField;
    items5[1] = closure_4(TextField, obj8);
    items6 = [closure_4(TableRow, obj6), , , ];
    const obj9 = { label: "Cumulative execution time warning threshold", subLabel: closure_6(str3, obj10) };
    obj10 = { children: items7 };
    const TableRow2 = tmp(tmp2[9]).TableRow;
    items7 = [J("Total execution time limit for hooks before reporting violations."), ];
    const obj11 = {
      size: "sm",
      defaultValue: str2.toString(),
      keyboardType: "numeric",
      leadingIcon: first1(str[11]).TimerIcon,
      trailingText: "ms",
      onChange(arg0) {
          closure_4(Number(arg0));
        }
    };
    const TextField2 = tmp(tmp2[10]).TextField;
    items7[1] = closure_4(TextField2, obj11);
    items6[1] = closure_4(TableRow2, obj9);
    const obj12 = { label: "Cumulative execution count warning threshold", subLabel: closure_6(str3, obj13) };
    obj13 = { children: items8 };
    const TableRow3 = tmp(tmp2[9]).TableRow;
    items8 = [J("Execution counts limit for hooks before reporting violations."), ];
    const obj14 = {
      size: "sm",
      defaultValue: str3.toString(),
      keyboardType: "numeric",
      leadingIcon: first1(str[12]).AnalyticsIcon,
      trailingText: "times",
      onChange(arg0) {
          closure_6(Number(arg0));
        }
    };
    const TextField3 = tmp(tmp2[10]).TextField;
    items8[1] = closure_4(TextField3, obj14);
    items6[2] = closure_4(TableRow3, obj12);
    const obj15 = { label: "Track specific hook", subLabel: closure_6(str3, obj16) };
    obj16 = { children: items9 };
    const TableRow4 = tmp(tmp2[9]).TableRow;
    items9 = [J("Include a specific hook in the profiling regardless of limits."), ];
    const obj17 = {
      size: "sm",
      keyboardType: "email-address",
      autoCapitalize: "none",
      autoCorrect: false,
      defaultValue: first2,
      placeholder: "hookName",
      leadingIcon: first1(str[13]).LettersIcon,
      trailingIcon: first1(str[14]).TrashIcon,
      trailingPressableProps: obj18,
      onChange(arg0) {
          closure_8(arg0);
        }
    };
    const TextField4 = tmp(tmp2[10]).TextField;
    obj18 = {
      accessibilityLabel: intl.string(first1(str[15]).t.VkKicb),
      onPress() {
          closure_8("");
        }
    };
    intl = tmp(tmp2[15]).intl;
    items9[1] = closure_4(TextField4, obj17);
    items6[3] = closure_4(TableRow4, obj15);
    tmp43 = closure_6(TableRowGroup2, obj5);
  }
  cResult[23] = str3;
  cResult[24] = str2;
  cResult[25] = str;
  cResult[26] = first2;
  cResult[27] = first1;
  cResult[28] = tmp43;
}) : (() => {
  let closure_2;
  let closure_4;
  let closure_6;
  let closure_8;
  let first1;
  let intl;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj17;
  let obj21;
  let obj24;
  let obj9;
  let str;
  let str2;
  let str3;
  let tmp5;
  let value;
  const useState = str2.useState;
  let obj = value(str[5]);
  [value, tmp5] = useState(obj.getUseStateFromStoresDebuggingEnabled());
  const useState2 = str2.useState;
  const obj2 = value(str[5]);
  [str, _slicedToArray] = useState2(obj2.getUseStateFromStoresExecutionWindowThresholdMs());
  const useState3 = str2.useState;
  const obj3 = value(str[5]);
  [str2, closure_4] = useState3(obj3.getUseStateFromStoresExecutionTimeWarningThresholdMs());
  const useState4 = str2.useState;
  const obj4 = value(str[5]);
  [str3, closure_6] = useState4(obj4.getUseStateFromStoresExecutionCountWarningThreshold());
  const useState5 = str2.useState;
  const obj5 = value(str[5]);
  [first1, closure_8] = useState5(obj5.getUseStateFromStoresSpecificHookFilter());
  const items = [value];
  const effect = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresDebuggingEnabled(first);
  }, items);
  const items1 = [str];
  const effect1 = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresExecutionWindowThresholdMs(str);
  }, items1);
  const items2 = [str2];
  const effect2 = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresExecutionTimeWarningThresholdMs(str2);
  }, items2);
  const items3 = [str3];
  const effect3 = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresExecutionCountWarningThreshold(str3);
  }, items3);
  const items4 = [first1];
  const effect4 = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresSpecificHookFilter(first1);
  }, items4);
  const ref = str2.useRef(null);
  const obj6 = { title: "useStateFromStores Profiling", hasIcons: false, children: closure_4(value(str[8]).TableSwitchRow, { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp5, value }) };
  const TableRowGroup = value(str[7]).TableRowGroup;
  const children = [closure_4(TableRowGroup, obj6), ];
  let tmp17Result = null;
  if (value) {
    const obj7 = { title: "useStateFromStores Config", hasIcons: false, children: items7 };
    const TableRowGroup2 = tmp(tmp2[7]).TableRowGroup;
    const obj8 = { label: "Execution time window threshold", subLabel: closure_6(str3, obj9) };
    obj9 = { children: items6 };
    const TableRow = tmp(tmp2[9]).TableRow;
    const obj10 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Time window to wait for before reporting violations." };
    items6 = [closure_4(tmp(str[6]).Text, obj10), ];
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
      leadingIcon: value(str[11]).TimerIcon,
      trailingText: "ms",
      ref
    };
    const TextField = tmp(tmp2[10]).TextField;
    items6[1] = closure_4(TextField, obj11);
    items7 = [closure_4(TableRow, obj8), , , ];
    const obj12 = { label: "Cumulative execution time warning threshold", subLabel: closure_6(str3, obj13) };
    obj13 = { children: items8 };
    const TableRow2 = tmp(tmp2[9]).TableRow;
    const obj14 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Total execution time limit for hooks before reporting violations." };
    items8 = [closure_4(tmp(str[6]).Text, obj14), ];
    const obj15 = {
      size: "sm",
      defaultValue: str2.toString(),
      keyboardType: "numeric",
      leadingIcon: value(str[11]).TimerIcon,
      trailingText: "ms",
      onChange(arg0) {
          closure_4(Number(arg0));
        }
    };
    const TextField2 = tmp(tmp2[10]).TextField;
    items8[1] = closure_4(TextField2, obj15);
    items7[1] = closure_4(TableRow2, obj12);
    const obj16 = { label: "Cumulative execution count warning threshold", subLabel: closure_6(str3, obj17) };
    obj17 = { children: items9 };
    const TableRow3 = tmp(tmp2[9]).TableRow;
    const obj18 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Execution counts limit for hooks before reporting violations." };
    items9 = [closure_4(tmp(str[6]).Text, obj18), ];
    const obj19 = {
      size: "sm",
      defaultValue: str3.toString(),
      keyboardType: "numeric",
      leadingIcon: value(str[12]).AnalyticsIcon,
      trailingText: "times",
      onChange(arg0) {
          closure_6(Number(arg0));
        }
    };
    const TextField3 = tmp(tmp2[10]).TextField;
    items9[1] = closure_4(TextField3, obj19);
    items7[2] = closure_4(TableRow3, obj16);
    const obj20 = { label: "Track specific hook", subLabel: closure_6(str3, obj21) };
    obj21 = { children: items10 };
    const TableRow4 = tmp(tmp2[9]).TableRow;
    const obj22 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Include a specific hook in the profiling regardless of limits." };
    items10 = [closure_4(tmp(str[6]).Text, obj22), ];
    const obj23 = {
      size: "sm",
      keyboardType: "email-address",
      autoCapitalize: "none",
      autoCorrect: false,
      defaultValue: first1,
      placeholder: "hookName",
      leadingIcon: value(str[13]).LettersIcon,
      trailingIcon: value(str[14]).TrashIcon,
      trailingPressableProps: obj24,
      onChange(arg0) {
          closure_8(arg0);
        }
    };
    const TextField4 = tmp(tmp2[10]).TextField;
    obj24 = {
      accessibilityLabel: intl.string(value(str[15]).t.VkKicb),
      onPress() {
          closure_8("");
        }
    };
    intl = tmp(tmp2[15]).intl;
    items10[1] = closure_4(TextField4, obj23);
    items7[3] = closure_4(TableRow4, obj20);
    tmp17Result = tmp17(TableRowGroup2, obj7);
  }
  children[1] = tmp17Result;
  return closure_6(str3, { children });
});
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx");

export const DevToolsProfilingUseStateFromStores = tmp3;