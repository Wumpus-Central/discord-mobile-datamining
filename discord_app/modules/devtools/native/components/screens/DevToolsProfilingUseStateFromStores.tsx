// === Module 15661: DevToolsProfilingUseStateFromStores ===

// Module 15661 (DevToolsProfilingUseStateFromStores)
import useStateFromStoresPerformanceDebugging from "useStateFromStoresPerformanceDebugging" /* 15662 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx");

export const DevToolsProfilingUseStateFromStores = function DevToolsProfilingUseStateFromStores() {
  let obj = value(str[3]);
  const tmp3 = _slicedToArray(str2.useState(obj.getUseStateFromStoresDebuggingEnabled()), 2);
  value = tmp3[0];
  let obj1 = value(str[3]);
  const tmp5 = _slicedToArray(str2.useState(obj1.getUseStateFromStoresExecutionWindowThresholdMs()), 2);
  str = tmp5[0];
  _slicedToArray = tmp5[1];
  let obj2 = value(str[3]);
  const tmp6 = _slicedToArray(str2.useState(obj2.getUseStateFromStoresExecutionTimeWarningThresholdMs()), 2);
  str2 = tmp6[0];
  closure_4 = tmp6[1];
  let obj3 = value(str[3]);
  const tmp7 = _slicedToArray(str2.useState(obj3.getUseStateFromStoresExecutionCountWarningThreshold()), 2);
  const str3 = tmp7[0];
  closure_6 = tmp7[1];
  let obj4 = value(str[3]);
  const tmp8 = _slicedToArray(str2.useState(obj4.getUseStateFromStoresSpecificHookFilter()), 2);
  const first1 = tmp8[0];
  closure_8 = tmp8[1];
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
  obj = { title: "useStateFromStores Profiling", hasIcons: false, children: closure_4(value(str[6]).TableSwitchRow, { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp3[1], value }) };
  const children = [closure_4(value(str[5]).TableRowGroup, obj), ];
  let tmp16Result = null;
  if (value) {
    obj = { title: "useStateFromStores Config", hasIcons: false, children: null };
    obj1 = { label: "Execution time window threshold", subLabel: null };
    obj2 = { children: null };
    obj3 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Time window to wait for before reporting violations." };
    const items6 = [tmp18(tmp(tmp2[4]).Text, obj3), ];
    obj4 = {
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
    items6[1] = tmp18(tmp(tmp2[8]).TextField, obj4);
    obj2.children = items6;
    obj1.subLabel = tmp16(tmp17, obj2);
    const items7 = [tmp18(tmp(tmp2[7]).TableRow, obj1), , , ];
    const obj5 = { label: "Cumulative execution time warning threshold", subLabel: null };
    const obj6 = { children: null };
    const obj7 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Total execution time limit for hooks before reporting violations." };
    const items8 = [tmp18(tmp(tmp2[4]).Text, obj7), ];
    const obj8 = {
      size: "sm",
      defaultValue: str2.toString(),
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[9]).TimerIcon,
      trailingText: "ms",
      onChange(arg0) {
          closure_4(Number(arg0));
        }
    };
    items8[1] = tmp18(tmp(tmp2[8]).TextField, obj8);
    obj6.children = items8;
    obj5.subLabel = tmp16(tmp17, obj6);
    items7[1] = tmp18(tmp(tmp2[7]).TableRow, obj5);
    const obj9 = { label: "Cumulative execution count warning threshold", subLabel: null };
    const obj10 = { children: null };
    const obj11 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Execution counts limit for hooks before reporting violations." };
    const items9 = [tmp18(tmp(tmp2[4]).Text, obj11), ];
    const obj12 = {
      size: "sm",
      defaultValue: str3.toString(),
      keyboardType: "numeric",
      leadingIcon: tmp(tmp2[10]).AnalyticsIcon,
      trailingText: "times",
      onChange(arg0) {
          closure_6(Number(arg0));
        }
    };
    items9[1] = tmp18(tmp(tmp2[8]).TextField, obj12);
    obj10.children = items9;
    obj9.subLabel = tmp16(tmp17, obj10);
    items7[2] = tmp18(tmp(tmp2[7]).TableRow, obj9);
    const obj13 = { label: "Track specific hook", subLabel: null };
    const obj14 = { children: null };
    const obj15 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Include a specific hook in the profiling regardless of limits." };
    const items10 = [tmp18(tmp(tmp2[4]).Text, obj15), ];
    const obj16 = { size: "sm", keyboardType: "email-address", autoCapitalize: "none", autoCorrect: false, defaultValue: first1, placeholder: "hookName", leadingIcon: tmp(tmp2[11]).LettersIcon, trailingIcon: tmp(tmp2[12]).TrashIcon, trailingPressableProps: null, onChange: null };
    const obj17 = { accessibilityLabel: null, onPress: null };
    const intl = tmp(tmp2[13]).intl;
    obj17.accessibilityLabel = intl.string(tmp(tmp2[13]).t.VkKicb);
    obj17.onPress = function onPress() {
      closure_8("");
    };
    obj16.trailingPressableProps = obj17;
    obj16.onChange = function onChange(arg0) {
      closure_8(arg0);
    };
    items10[1] = tmp18(tmp(tmp2[8]).TextField, obj16);
    obj14.children = items10;
    obj13.subLabel = tmp16(tmp17, obj14);
    items7[3] = tmp18(tmp(tmp2[7]).TableRow, obj13);
    obj.children = items7;
    tmp16Result = tmp16(tmp(tmp2[5]).TableRowGroup, obj);
  }
  children[1] = tmp16Result;
  return closure_6(str3, { children });
};