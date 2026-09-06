// === Module 15799: UserSettingsDesignSystemFormPrimitives ===

// Module 15799 (UserSettingsDesignSystemFormPrimitives)
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5101 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5604 */;
import TableRow from "TableRow" /* 5605 */;
import TableRadioGroup from "TableRadioGroup" /* 5685 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import Checkbox from "Checkbox" /* 9429 */;
import VoiceXIcon from "VoiceXIcon" /* 9987 */;
import Slider from "Slider" /* 14178 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Radio() {
  let obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Radio" }), timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Select a single option from a short list of multiple options" }), ];
  obj = { title: "Role Colors", hasIcons: false, defaultValue: "color-in-names", onChange: NOOP, children: null };
  const items1 = [timestampProducer(TableRadioRow.TableRadioRow, { label: "Show role colors in names", value: "color-in-names" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Show role colors next to names", value: "color-next-to-names" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Don't show role colors", value: "no-color" }), timestampProducer(TableRadioRow.TableRadioRow, { label: "Disabled Item", subLabel: "This should not be selectable", value: "option4", disabled: true })];
  obj.children = items1;
  items[2] = React5(TableRadioGroup.TableRadioGroup, obj);
  obj.children = items;
  return React5(React6, obj);
}
function Switch() {
  [tmp2, c0] = _slicedToArray(noop.useState(true), 2);
  let obj = {
    value: tmp2,
    onValueChange: noop.useCallback((arg0) => {
      _undefined(arg0);
    }, [])
  };
  const tmp = _slicedToArray(noop.useState(true), 2);
  [tmp4, c0] = _slicedToArray(noop.useState(false), 2);
  obj = {
    value: tmp4,
    onValueChange: noop.useCallback((arg0) => {
      _undefined(arg0);
    }, [])
  };
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  [tmp6, c0] = _slicedToArray(noop.useState(true), 2);
  obj = {
    value: tmp6,
    onValueChange: noop.useCallback((arg0) => {
      _undefined(arg0);
    }, [])
  };
  c0 = undefined;
  const tmp5 = _slicedToArray(noop.useState(true), 2);
  [tmp8, c0] = _slicedToArray(noop.useState(false), 2);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const obj2 = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Switch" }), timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Toggle the state of a single setting on or off, immediately" }), , ];
  const obj3 = { title: "Emoji", hasIcons: false, children: null };
  const merged = Object.assign(obj);
  obj3.children = timestampProducer(TableSwitchRow.TableSwitchRow, { label: "Show emoji reactions on messages", subLabel: "Show more information in less space" });
  items[2] = timestampProducer(TableRowGroup.TableRowGroup, obj3);
  const obj5 = { title: "Display images, videos, and lolcats", hasIcons: false, children: null };
  const merged1 = Object.assign(obj);
  const items1 = [timestampProducer(TableSwitchRow.TableSwitchRow, { label: "When posted as links to chat" }), , , ];
  const merged2 = Object.assign(obj);
  items1[1] = timestampProducer(TableSwitchRow.TableSwitchRow, { label: "When uploaded directly to Discord" });
  const merged3 = Object.assign({
    value: tmp8,
    onValueChange: noop.useCallback((arg0) => {
      _undefined(arg0);
    }, [])
  });
  items1[2] = timestampProducer(TableSwitchRow.TableSwitchRow, { label: "With image descriptions" });
  items1[3] = timestampProducer(TableSwitchRow.TableSwitchRow, { label: "Disabled switch item", subLabel: "This should not be switchable", disabled: true, value: false, onValueChange: NOOP });
  obj5.children = items1;
  items[3] = React5(TableRowGroup.TableRowGroup, obj5);
  obj2.children = items;
  return React5(React6, obj2);
}
function InlineCheckbox(startChecked) {
  let flag = startChecked.startChecked;
  ({ label, description, required } = startChecked);
  if (flag === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = true;
  }
  c0 = undefined;
  [tmp2, c0] = _slicedToArray(noop.useState(flag), 2);
  const onToggle = noop.useCallback((arg0) => {
    _undefined(arg0);
  }, []);
  return timestampProducer(Checkbox.Checkbox, { label, description, required, checked, onToggle });
}
function InlineCheckboxDemo() {
  const obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Inline Checkbox" }), timestampProducer(InlineCheckbox, { label: "Checkbox label", description: "This is a description", startChecked: true }), timestampProducer(InlineCheckbox, { label: "Trust google.com links from now on" }), timestampProducer(InlineCheckbox, { label: "I agree to the Terms of Service", required: true })];
  obj.children = items;
  return React5(React6, obj);
}
function CheckboxRowDemo() {
  let obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Checkbox" }), timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Select one or more options from a short list of options" }), ];
  obj = { title: "Who can send you a friend request?", hasIcons: false, children: null };
  obj = { label: "Everyone", subLabel: "Anyone can send you a friend request", checked: false, onPress: NOOP };
  const items1 = [timestampProducer(TableCheckboxRow.TableCheckboxRow, obj), timestampProducer(TableCheckboxRow.TableCheckboxRow, { label: "Friends of Friends", subLabel: "Anyone who is friends with your friends can send you a friend request", checked: true, onPress: NOOP }), timestampProducer(TableCheckboxRow.TableCheckboxRow, { label: "Server Members", subLabel: "Anyone who is in a server with you can send you a friend request", checked: true, onPress: NOOP })];
  obj.children = items1;
  items[2] = React5(TableRowGroup.TableRowGroup, obj);
  obj.children = items;
  return React5(React6, obj);
}
function SliderDemo() {
  let obj = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Slider" }), ];
  obj = { start: true, end: true, label: "Volume", subLabel: null };
  obj = { startIcon: timestampProducer(VoiceXIcon.VoiceXIcon, {}), endIcon: timestampProducer(VoiceNormalIcon.VoiceNormalIcon, {}), onValueChange: NOOP };
  obj.subLabel = timestampProducer(Slider.Slider, obj);
  items[1] = timestampProducer(TableRow.TableRow, obj);
  obj.children = items;
  return React5(React6, obj);
}
const ScrollView = fn(17).ScrollView;
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemFormPrimitives.tsx");

export default function UserSettingsDesignSystemFormPrimitives() {
  let obj = { children: null };
  obj = { spacing: 24, style: closure_9().container, children: null };
  const items = [timestampProducer(Radio, {}), timestampProducer(Switch, {}), timestampProducer(CheckboxRowDemo, {}), timestampProducer(InlineCheckboxDemo, {}), timestampProducer(SliderDemo, {})];
  obj.children = items;
  obj.children = React5(Stack_Stack.Stack, obj);
  return timestampProducer(ScrollView, obj);
};