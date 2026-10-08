// === Module 15982: UserSettingsDesignSystemFormPrimitives ===

// Module 15982 (UserSettingsDesignSystemFormPrimitives)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6181 */;
import TableRow from "TableRow" /* 6184 */;
import TableRadioRow from "TableRadioRow" /* 6264 */;
import TableRadioGroup from "TableRadioGroup" /* 6265 */;
import TableRowGroup from "TableRowGroup" /* 6267 */;
import TableSwitchRow from "TableSwitchRow" /* 6882 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8204 */;
import VoiceXIcon from "VoiceXIcon" /* 10869 */;
import Checkbox from "Checkbox" /* 12885 */;
import Slider from "Slider" /* 14118 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 32 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function Radio() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Radio" });
    const tmp8 = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Select a single option from a short list of multiple options" });
    cResult[0] = tmp7;
    cResult[1] = tmp8;
    tmp4 = tmp7;
    tmp5 = tmp8;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const items = [tmp4, tmp5, ];
    const obj3 = { title: "Role Colors", hasIcons: false, defaultValue: "color-in-names", onChange: NOOP, children: null };
    const items1 = [timestampProducer(TableRadioRow.TableRadioRow, { label: "Show role colors in names", value: "color-in-names" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Show role colors next to names", value: "color-next-to-names" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Don't show role colors", value: "no-color" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Disabled Item", subLabel: "This should not be selectable", value: "option4", disabled: true })];
    obj3.children = items1;
    items[2] = React5(TableRadioGroup.TableRadioGroup, obj3);
    obj2.children = items;
    const tmp14 = React5(closure_1_8, obj2);
    cResult[2] = tmp14;
    let tmp9 = tmp14;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function Radio() {
  const obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Radio" }), timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Select a single option from a short list of multiple options" }), ];
  const obj2 = { title: "Role Colors", hasIcons: false, defaultValue: "color-in-names", onChange: NOOP, children: null };
  const items1 = [timestampProducer(TableRadioRow.TableRadioRow, { label: "Show role colors in names", value: "color-in-names" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Show role colors next to names", value: "color-next-to-names" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Don't show role colors", value: "no-color" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Disabled Item", subLabel: "This should not be selectable", value: "option4", disabled: true })];
  obj2.children = items1;
  items[2] = React5(TableRadioGroup.TableRadioGroup, obj2);
  obj.children = items;
  return React5(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSwitchState(arg0) {
  const cResult = c.c(3);
  const tmp2 = undefined === arg0 || arg0;
  [tmp4, require] = noop.useState(undefined === arg0 || arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      require(arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const obj2 = { value: tmp4, onValueChange: first };
    cResult[1] = tmp4;
    cResult[2] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (function useSwitchState() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(noop.useState(flag), 2);
  closure_0 = tmp[1];
  return {
    value: tmp[0],
    onValueChange: noop.useCallback((arg0) => {
      closure_0(arg0);
    }, [])
  };
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function Switch() {
  const cResult = c.c(18);
  const tmp4 = closure_11();
  const tmp5 = closure_11(false);
  const tmp6 = closure_11();
  const tmp7 = closure_11(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Switch" });
    const tmp12 = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Toggle the state of a single setting on or off, immediately" });
    cResult[0] = tmp11;
    cResult[1] = tmp12;
    tmp8 = tmp11;
    tmp9 = tmp12;
  } else {
    [tmp8, tmp9] = cResult;
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { title: "Emoji", hasIcons: false, children: null };
    const obj3 = { label: "Show emoji reactions on messages", subLabel: "Show more information in less space" };
    const merged = Object.assign(tmp4);
    obj2.children = timestampProducer(TableSwitchRow.TableSwitchRow, obj3);
    const tmp18 = timestampProducer(TableRowGroup.TableRowGroup, obj2);
    cResult[2] = tmp4;
    cResult[3] = tmp18;
    let tmp13 = tmp18;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const obj4 = { label: "When posted as links to chat" };
    const merged1 = Object.assign(tmp5);
    const tmp24 = timestampProducer(TableSwitchRow.TableSwitchRow, obj4);
    cResult[4] = tmp5;
    cResult[5] = tmp24;
    let tmp19 = tmp24;
  } else {
    tmp19 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    const obj5 = { label: "When uploaded directly to Discord" };
    const merged2 = Object.assign(tmp6);
    const tmp30 = timestampProducer(TableSwitchRow.TableSwitchRow, obj5);
    cResult[6] = tmp6;
    cResult[7] = tmp30;
    let tmp25 = tmp30;
  } else {
    tmp25 = cResult[7];
  }
  if (cResult[8] !== tmp7) {
    const obj6 = { label: "With image descriptions" };
    const merged3 = Object.assign(tmp7);
    const tmp36 = timestampProducer(TableSwitchRow.TableSwitchRow, obj6);
    cResult[8] = tmp7;
    cResult[9] = tmp36;
    let tmp31 = tmp36;
  } else {
    tmp31 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { label: "Disabled switch item", subLabel: "This should not be switchable", disabled: true, value: false, onValueChange: NOOP };
    const tmp40 = timestampProducer(TableSwitchRow.TableSwitchRow, obj7);
    cResult[10] = tmp40;
    let tmp37 = tmp40;
  } else {
    tmp37 = cResult[10];
  }
  if (cResult[11] === tmp19) {
    if (cResult[12] === tmp25) {
      if (cResult[13] === tmp31) {
        let tmp41 = cResult[14];
      }
      if (cResult[15] === tmp13) {
        if (cResult[16] === tmp41) {
          let tmp43 = cResult[17];
        }
        return tmp43;
      }
      const obj8 = { children: null };
      const items = [tmp8, tmp9, tmp13, tmp41];
      obj8.children = items;
      const tmp46 = React5(closure_1_8, obj8);
      cResult[15] = tmp13;
      cResult[16] = tmp41;
      cResult[17] = tmp46;
      tmp43 = tmp46;
    }
  }
  const obj9 = { title: "Display images, videos, and lolcats", hasIcons: false, children: null };
  const items1 = [tmp19, tmp25, tmp31, tmp37];
  obj9.children = items1;
  const tmp42 = React5(TableRowGroup.TableRowGroup, obj9);
  cResult[11] = tmp19;
  cResult[12] = tmp25;
  cResult[13] = tmp31;
  cResult[14] = tmp42;
  tmp41 = tmp42;
}) : (function Switch() {
  const tmp = closure_11();
  const tmp2 = closure_11(false);
  const tmp3 = closure_11();
  const obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Switch" }), timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Toggle the state of a single setting on or off, immediately" }), , ];
  const obj2 = { title: "Emoji", hasIcons: false, children: null };
  const merged = Object.assign(tmp);
  obj2.children = timestampProducer(TableSwitchRow.TableSwitchRow, { label: "Show emoji reactions on messages", subLabel: "Show more information in less space" });
  items[2] = timestampProducer(TableRowGroup.TableRowGroup, obj2);
  const obj4 = { title: "Display images, videos, and lolcats", hasIcons: false, children: null };
  const merged1 = Object.assign(tmp2);
  const items1 = [timestampProducer(TableSwitchRow.TableSwitchRow, { label: "When posted as links to chat" }), , , ];
  const merged2 = Object.assign(tmp3);
  items1[1] = timestampProducer(TableSwitchRow.TableSwitchRow, { label: "When uploaded directly to Discord" });
  const merged3 = Object.assign(closure_11(false));
  items1[2] = timestampProducer(TableSwitchRow.TableSwitchRow, { label: "With image descriptions" });
  items1[3] = timestampProducer(TableSwitchRow.TableSwitchRow, { label: "Disabled switch item", subLabel: "This should not be switchable", disabled: true, value: false, onValueChange: NOOP });
  obj4.children = items1;
  items[3] = React5(TableRowGroup.TableRowGroup, obj4);
  obj.children = items;
  return React5(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckboxState(arg0) {
  const cResult = c.c(3);
  const tmp2 = undefined === arg0 || arg0;
  [tmp4, require] = noop.useState(undefined === arg0 || arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      require(arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const obj2 = { checked: tmp4, onPress: first };
    cResult[1] = tmp4;
    cResult[2] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (function useCheckboxState() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(noop.useState(flag), 2);
  closure_0 = tmp[1];
  return {
    checked: tmp[0],
    onPress: noop.useCallback((arg0) => {
      closure_0(arg0);
    }, [])
  };
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function InlineCheckbox(arg0) {
  const cResult = c.c(6);
  ({ label, description, required, startChecked } = arg0);
  let tmp5 = undefined !== startChecked;
  if (tmp5) {
    tmp5 = startChecked;
  }
  ({ checked, onPress } = closure_13(tmp5));
  if (cResult[0] === checked) {
    if (cResult[1] === description) {
      if (cResult[2] === label) {
        if (cResult[3] === onPress) {
          if (cResult[4] === required) {
            let tmp7 = cResult[5];
          }
          return tmp7;
        }
      }
    }
  }
  const tmp8 = timestampProducer(Checkbox.Checkbox, { label, description, required, checked, onToggle: onPress });
  cResult[0] = checked;
  cResult[1] = description;
  cResult[2] = label;
  cResult[3] = onPress;
  cResult[4] = required;
  cResult[5] = tmp8;
  tmp7 = tmp8;
  const tmp4Result = closure_13(tmp5);
}) : (function InlineCheckbox(startChecked) {
  let flag = startChecked.startChecked;
  ({ label, description, required } = startChecked);
  if (flag === undefined) {
    flag = false;
  }
  ({ checked, onPress } = closure_13(flag));
  return timestampProducer(Checkbox.Checkbox, { label, description, required, checked, onToggle });
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function InlineCheckboxDemo() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Inline Checkbox" }), timestampProducer(closure_14, { label: "Checkbox label", description: "This is a description", startChecked: true }), timestampProducer(closure_14, { label: "Trust google.com links from now on" }), timestampProducer(closure_14, { label: "I agree to the Terms of Service", required: true })];
    obj2.children = items;
    const tmp9 = React5(closure_1_8, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function InlineCheckboxDemo() {
  const obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Inline Checkbox" }), timestampProducer(closure_14, { label: "Checkbox label", description: "This is a description", startChecked: true }), timestampProducer(closure_14, { label: "Trust google.com links from now on" }), timestampProducer(closure_14, { label: "I agree to the Terms of Service", required: true })];
  obj.children = items;
  return React5(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckboxRowDemo() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Checkbox" });
    const tmp8 = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Select one or more options from a short list of options" });
    cResult[0] = tmp7;
    cResult[1] = tmp8;
    tmp4 = tmp7;
    tmp5 = tmp8;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const items = [tmp4, tmp5, ];
    const obj3 = { title: "Who can send you a friend request?", hasIcons: false, children: null };
    const obj4 = { label: "Everyone", subLabel: "Anyone can send you a friend request", checked: false, onPress: NOOP };
    const items1 = [timestampProducer(TableCheckboxRow.TableCheckboxRow, obj4), , ];
    const obj5 = { label: "Friends of Friends", subLabel: "Anyone who is friends with your friends can send you a friend request", checked: true, onPress: NOOP };
    items1[1] = timestampProducer(TableCheckboxRow.TableCheckboxRow, obj5);
    const obj6 = { label: "Server Members", subLabel: "Anyone who is in a server with you can send you a friend request", checked: true, onPress: NOOP };
    items1[2] = timestampProducer(TableCheckboxRow.TableCheckboxRow, obj6);
    obj3.children = items1;
    items[2] = React5(TableRowGroup.TableRowGroup, obj3);
    obj2.children = items;
    const tmp14 = React5(closure_1_8, obj2);
    cResult[2] = tmp14;
    let tmp9 = tmp14;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function CheckboxRowDemo() {
  const obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Checkbox" }), timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Select one or more options from a short list of options" }), ];
  const obj2 = { title: "Who can send you a friend request?", hasIcons: false, children: null };
  const items1 = [timestampProducer(TableCheckboxRow.TableCheckboxRow, { label: "Everyone", subLabel: "Anyone can send you a friend request", checked: false, onPress: NOOP }), timestampProducer(TableCheckboxRow.TableCheckboxRow, { label: "Friends of Friends", subLabel: "Anyone who is friends with your friends can send you a friend request", checked: true, onPress: NOOP }), timestampProducer(TableCheckboxRow.TableCheckboxRow, { label: "Server Members", subLabel: "Anyone who is in a server with you can send you a friend request", checked: true, onPress: NOOP })];
  obj2.children = items1;
  items[2] = React5(TableRowGroup.TableRowGroup, obj2);
  obj.children = items;
  return React5(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function SliderDemo() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Slider" });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const items = [first, ];
    const obj3 = { start: true, end: true, label: "Volume", subLabel: null };
    const obj4 = { startIcon: timestampProducer(VoiceXIcon.VoiceXIcon, {}), endIcon: timestampProducer(VoiceNormalIcon.VoiceNormalIcon, {}), onValueChange: NOOP };
    obj3.subLabel = timestampProducer(Slider.Slider, obj4);
    items[1] = timestampProducer(TableRow.TableRow, obj3);
    obj2.children = items;
    const tmp12 = React5(closure_1_8, obj2);
    cResult[1] = tmp12;
    let tmp7 = tmp12;
  } else {
    tmp7 = cResult[1];
  }
  return tmp7;
}) : (function SliderDemo() {
  const obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Slider" }), ];
  const obj2 = { start: true, end: true, label: "Volume", subLabel: timestampProducer(Slider.Slider, { startIcon: timestampProducer(VoiceXIcon.VoiceXIcon, {}), endIcon: timestampProducer(VoiceNormalIcon.VoiceNormalIcon, {}), onValueChange: NOOP }) };
  items[1] = timestampProducer(TableRow.TableRow, obj2);
  obj.children = items;
  return React5(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemFormPrimitives.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsDesignSystemFormPrimitives() {
  const cResult = c.c(7);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = timestampProducer(closure_10, {});
    const tmp14 = timestampProducer(closure_12, {});
    const tmp16 = timestampProducer(closure_16, {});
    const tmp18 = timestampProducer(closure_15, {});
    const tmp20 = timestampProducer(closure_17, {});
    cResult[0] = tmp12;
    cResult[1] = tmp14;
    cResult[2] = tmp16;
    cResult[3] = tmp18;
    cResult[4] = tmp20;
    tmp5 = tmp12;
    tmp6 = tmp14;
    tmp7 = tmp16;
    tmp8 = tmp18;
    tmp9 = tmp20;
  } else {
    [tmp5, tmp6, tmp7, tmp8, tmp9] = cResult;
  }
  if (cResult[5] !== tmp4.container) {
    const obj2 = { children: null };
    const obj3 = { spacing: 24, style: tmp4.container, children: null };
    const items = [tmp5, tmp6, tmp7, tmp8, tmp9];
    obj3.children = items;
    obj2.children = React5(Stack_Stack.Stack, obj3);
    const tmp25 = timestampProducer(ScrollView, obj2);
    cResult[5] = tmp4.container;
    cResult[6] = tmp25;
    let tmp21 = tmp25;
  } else {
    tmp21 = cResult[6];
  }
  return tmp21;
}) : (function UserSettingsDesignSystemFormPrimitives() {
  const obj = { children: null };
  const obj2 = { spacing: 24, style: closure_9().container, children: null };
  const items = [timestampProducer(closure_10, {}), timestampProducer(closure_12, {}), timestampProducer(closure_16, {}), timestampProducer(closure_15, {}), timestampProducer(closure_17, {})];
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return timestampProducer(ScrollView, obj);
});