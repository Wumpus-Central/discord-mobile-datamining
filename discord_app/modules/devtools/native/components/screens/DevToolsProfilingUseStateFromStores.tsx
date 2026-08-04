// discord_app/modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import jsxProd from "jsxProd";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx");

export const DevToolsProfilingUseStateFromStores = function DevToolsProfilingUseStateFromStores() {
  let obj = first(str[3]);
  const tmp3 = callback(str2.useState(obj.getUseStateFromStoresDebuggingEnabled()), 2);
  first = tmp3[0];
  let obj1 = first(str[3]);
  const tmp5 = callback(str2.useState(obj1.getUseStateFromStoresExecutionWindowThresholdMs()), 2);
  str = tmp5[0];
  callback = tmp5[1];
  let obj2 = first(str[3]);
  const tmp6 = callback(str2.useState(obj2.getUseStateFromStoresExecutionTimeWarningThresholdMs()), 2);
  str2 = tmp6[0];
  const callback2 = tmp6[1];
  let obj3 = first(str[3]);
  const tmp7 = callback(str2.useState(obj3.getUseStateFromStoresExecutionCountWarningThreshold()), 2);
  const str3 = tmp7[0];
  let closure_6 = tmp7[1];
  let obj4 = first(str[3]);
  const tmp8 = callback(str2.useState(obj4.getUseStateFromStoresSpecificHookFilter()), 2);
  const first1 = tmp8[0];
  let closure_8 = tmp8[1];
  const items = [first];
  const effect = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresDebuggingEnabled(first);
  }, items);
  const items1 = [str];
  const effect1 = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionWindowThresholdMs(str);
  }, items1);
  const items2 = [str2];
  const effect2 = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionTimeWarningThresholdMs(str2);
  }, items2);
  const items3 = [str3];
  const effect3 = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionCountWarningThreshold(str3);
  }, items3);
  const items4 = [first1];
  const effect4 = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresSpecificHookFilter(first1);
  }, items4);
  const ref = str2.useRef(null);
  obj = { title: "useStateFromStores Profiling", hasIcons: false, children: null };
  obj[2] = callback2(first(str[6]).TableSwitchRow, { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp3[1], value: first });
  const children = [callback2(first(str[5]).TableRowGroup, obj), ];
  let tmp16Result = null;
  if (first) {
    obj = { title: "useStateFromStores Config", hasIcons: false, children: null };
    obj1 = { label: "Execution time window threshold", subLabel: null };
    obj2 = { children: null };
    obj3 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: "Time window to wait for before reporting violations." };
    obj3[2] = { marginBottom: 4 };
    const items6 = [tmp18(tmp(tmp2[4]).Text, obj3), ];
    obj4 = { size: "sm", defaultValue: null, onChange: null, keyboardType: "numeric", leadingIcon: null, trailingText: "ms", ref: null };
    obj4[1] = str.toString();
    obj4[2] = function onChange(arg0) {
      const NumberResult = Number(arg0);
      if (!isNaN(NumberResult)) {
        if (NumberResult > 1000) {
          callback(NumberResult);
        }
      }
      const current = ref.current;
      if (current != null) {
        current.setText("60000");
      }
    };
    obj4[4] = tmp(tmp2[9]).TimerIcon;
    obj4[6] = ref;
    items6[1] = tmp18(tmp(tmp2[8]).TextField, obj4);
    obj2[0] = items6;
    obj1[1] = tmp16(tmp17, obj2);
    const items7 = [tmp18(tmp(tmp2[7]).TableRow, obj1), , , ];
    const obj5 = { label: "Cumulative execution time warning threshold", subLabel: null };
    const obj6 = { children: null };
    const obj7 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: "Total execution time limit for hooks before reporting violations." };
    obj7[2] = { marginBottom: 4 };
    const items8 = [tmp18(tmp(tmp2[4]).Text, obj7), ];
    const obj8 = { size: "sm", defaultValue: null, keyboardType: "numeric", leadingIcon: null, trailingText: "ms", onChange: null };
    obj8[1] = str2.toString();
    obj8[3] = tmp(tmp2[9]).TimerIcon;
    obj8[5] = function onChange(arg0) {
      callback2(Number(arg0));
    };
    items8[1] = tmp18(tmp(tmp2[8]).TextField, obj8);
    obj6[0] = items8;
    obj5[1] = tmp16(tmp17, obj6);
    items7[1] = tmp18(tmp(tmp2[7]).TableRow, obj5);
    const obj9 = { label: "Cumulative execution count warning threshold", subLabel: null };
    const obj10 = { children: null };
    const obj11 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: "Execution counts limit for hooks before reporting violations." };
    obj11[2] = { marginBottom: 4 };
    const items9 = [tmp18(tmp(tmp2[4]).Text, obj11), ];
    const obj12 = { size: "sm", defaultValue: null, keyboardType: "numeric", leadingIcon: null, trailingText: "times", onChange: null };
    obj12[1] = str3.toString();
    obj12[3] = tmp(tmp2[10]).AnalyticsIcon;
    obj12[5] = function onChange(arg0) {
      callback3(Number(arg0));
    };
    items9[1] = tmp18(tmp(tmp2[8]).TextField, obj12);
    obj10[0] = items9;
    obj9[1] = tmp16(tmp17, obj10);
    items7[2] = tmp18(tmp(tmp2[7]).TableRow, obj9);
    const obj13 = { label: "Track specific hook", subLabel: null };
    const obj14 = { children: null };
    const obj15 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: "Include a specific hook in the profiling regardless of limits." };
    obj15[2] = { marginBottom: 4 };
    const items10 = [tmp18(tmp(tmp2[4]).Text, obj15), ];
    const obj16 = { size: "sm", keyboardType: "email-address", autoCapitalize: "none", autoCorrect: false, defaultValue: null, placeholder: "hookName", leadingIcon: null, trailingIcon: null, trailingPressableProps: null, onChange: null };
    obj16[4] = first1;
    obj16[6] = tmp(tmp2[11]).LettersIcon;
    obj16[7] = tmp(tmp2[12]).TrashIcon;
    const obj17 = { accessibilityLabel: null, onPress: null };
    const intl = tmp(tmp2[13]).intl;
    obj17[0] = intl.string(tmp(tmp2[13]).t.VkKicb);
    obj17[1] = function onPress() {
      callback4("");
    };
    obj16[8] = obj17;
    obj16[9] = function onChange(arg0) {
      callback4(arg0);
    };
    items10[1] = tmp18(tmp(tmp2[8]).TextField, obj16);
    obj14[0] = items10;
    obj13[1] = tmp16(tmp17, obj14);
    items7[3] = tmp18(tmp(tmp2[7]).TableRow, obj13);
    obj[2] = items7;
    tmp16Result = tmp16(tmp(tmp2[5]).TableRowGroup, obj);
  }
  children[1] = tmp16Result;
  return closure_6(str3, { children });
};