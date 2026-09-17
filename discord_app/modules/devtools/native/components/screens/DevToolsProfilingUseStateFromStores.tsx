// === Module 15785: DevToolsProfilingUseStateFromStores ===

// Module 15785 (DevToolsProfilingUseStateFromStores)
import useStateFromStoresPerformanceDebugging from "useStateFromStoresPerformanceDebugging" /* 15786 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx");

export const DevToolsProfilingUseStateFromStores = function DevToolsProfilingUseStateFromStores() {
  const tmp3 = _slicedToArray(str2.useState(value(str[3]).getUseStateFromStoresDebuggingEnabled()), 2);
  value = tmp3[0];
  const obj = value(str[3]);
  [str, _slicedToArray] = str2.useState(value(str[3]).getUseStateFromStoresExecutionWindowThresholdMs());
  const obj2 = value(str[3]);
  [str2, closure_4] = str2.useState(value(str[3]).getUseStateFromStoresExecutionTimeWarningThresholdMs());
  const obj3 = value(str[3]);
  [str3, closure_6] = str2.useState(value(str[3]).getUseStateFromStoresExecutionCountWarningThreshold());
  const obj4 = value(str[3]);
  [first1, closure_8] = str2.useState(value(str[3]).getUseStateFromStoresSpecificHookFilter());
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
  const obj5 = value(str[3]);
  const children = [closure_4(value(str[5]).TableRowGroup, { title: "useStateFromStores Profiling", hasIcons: false, children: closure_4(value(str[6]).TableSwitchRow, { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp3[1], value }) }), ];
  let tmp16Result = null;
  if (value) {
    const obj7 = { title: "useStateFromStores Config", hasIcons: false, children: null };
    const obj8 = { label: "Execution time window threshold", subLabel: null };
    const obj9 = { children: null };
    const obj10 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Time window to wait for before reporting violations." };
    const items6 = [tmp18(tmp(tmp2[4]).Text, obj10), ];
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
      leadingIcon: tmp(tmp2[9]).TimerIcon,
      trailingText: "ms",
      ref
    };
    items6[1] = tmp18(tmp(tmp2[8]).TextField, obj11);
    obj9.children = items6;
    obj8.subLabel = tmp16(tmp17, obj9);
    const items7 = [tmp18(tmp(tmp2[7]).TableRow, obj8), , , ];
    const obj12 = { label: "Cumulative execution time warning threshold", subLabel: null };
    const obj13 = { children: null };
    const obj14 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Total execution time limit for hooks before reporting violations." };
    const items8 = [tmp18(tmp(tmp2[4]).Text, obj14), ];
    const obj15 = {
      size: "sm",
      defaultValue: str2.toString(),
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[9]).TimerIcon,
      trailingText: "ms",
      onChange(arg0) {
          closure_4(Number(arg0));
        }
    };
    items8[1] = tmp18(tmp(tmp2[8]).TextField, obj15);
    obj13.children = items8;
    obj12.subLabel = tmp16(tmp17, obj13);
    items7[1] = tmp18(tmp(tmp2[7]).TableRow, obj12);
    const obj16 = { label: "Cumulative execution count warning threshold", subLabel: null };
    const obj17 = { children: null };
    const obj18 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Execution counts limit for hooks before reporting violations." };
    const items9 = [tmp18(tmp(tmp2[4]).Text, obj18), ];
    const obj19 = {
      size: "sm",
      defaultValue: str3.toString(),
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[10]).AnalyticsIcon,
      trailingText: "times",
      onChange(arg0) {
          closure_6(Number(arg0));
        }
    };
    items9[1] = tmp18(tmp(tmp2[8]).TextField, obj19);
    obj17.children = items9;
    obj16.subLabel = tmp16(tmp17, obj17);
    items7[2] = tmp18(tmp(tmp2[7]).TableRow, obj16);
    const obj20 = { label: "Track specific hook", subLabel: null };
    const obj21 = { children: null };
    const obj22 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Include a specific hook in the profiling regardless of limits." };
    const items10 = [tmp18(tmp(tmp2[4]).Text, obj22), ];
    const obj23 = { size: "sm", keyboardType: "email-address", autoCapitalize: "none", autoCorrect: false, defaultValue: first1, placeholder: "hookName", leadingIcon: tmp(tmp2[11]).LettersIcon, trailingIcon: tmp(tmp2[12]).TrashIcon, trailingPressableProps: null, onChange: null };
    const obj24 = { accessibilityLabel: null, onPress: null };
    const intl = tmp(tmp2[13]).intl;
    obj24.accessibilityLabel = intl.string(tmp(tmp2[13]).t.VkKicb);
    obj24.onPress = function onPress() {
      closure_8("");
    };
    obj23.trailingPressableProps = obj24;
    obj23.onChange = function onChange(arg0) {
      closure_8(arg0);
    };
    items10[1] = tmp18(tmp(tmp2[8]).TextField, obj23);
    obj21.children = items10;
    obj20.subLabel = tmp16(tmp17, obj21);
    items7[3] = tmp18(tmp(tmp2[7]).TableRow, obj20);
    obj7.children = items7;
    tmp16Result = tmp16(tmp(tmp2[5]).TableRowGroup, obj7);
  }
  children[1] = tmp16Result;
  return closure_6(str3, { children });
};