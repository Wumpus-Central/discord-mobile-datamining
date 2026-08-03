// === Module 14682: Radio ===

// Module 14682 (Radio)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ScrollView } from "Stack";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function Radio() {
  let obj = { children: null };
  const items = [callback2(require(4251) /* Text */.Text, { variant: "heading-lg/bold", children: "Radio" }), callback2(require(4251) /* Text */.Text, { variant: "text-md/normal", children: "Select a single option from a short list of multiple options" }), ];
  obj = { title: "Role Colors", hasIcons: false, defaultValue: "color-in-names", onChange: NOOP, children: null };
  const items1 = [callback2(require(7782) /* TableRadioRow */.TableRadioRow, { label: "Show role colors in names", value: "color-in-names" }), callback2(require(7782) /* TableRadioRow */.TableRadioRow, { label: "Show role colors next to names", value: "color-next-to-names" }), callback2(require(7782) /* TableRadioRow */.TableRadioRow, { label: "Don't show role colors", value: "no-color" }), callback2(require(7782) /* TableRadioRow */.TableRadioRow, { label: "Disabled Item", subLabel: "This should not be selectable", value: "option4", disabled: true })];
  obj[4] = items1;
  items[2] = callback3(require(7783) /* context */.TableRadioGroup, obj);
  obj[0] = items;
  return callback3(closure_8, obj);
}
function Switch() {
  let c0;
  let tmp2;
  let tmp4;
  let tmp6;
  let tmp8;
  [tmp2, c0] = callback(React.useState(true), 2);
  let obj = {
    value: tmp2,
    onValueChange: React.useCallback((arg0) => {
      _undefined(arg0);
    }, [])
  };
  let _require;
  const tmp = callback(React.useState(true), 2);
  [tmp4, c0] = callback(React.useState(false), 2);
  obj = {
    value: tmp4,
    onValueChange: React.useCallback((arg0) => {
      _undefined(arg0);
    }, [])
  };
  _require = undefined;
  const tmp3 = callback(React.useState(false), 2);
  [tmp6, c0] = callback(React.useState(true), 2);
  obj = {
    value: tmp6,
    onValueChange: React.useCallback((arg0) => {
      _undefined(arg0);
    }, [])
  };
  _require = undefined;
  const tmp5 = callback(React.useState(true), 2);
  [tmp8, c0] = callback(React.useState(false), 2);
  const tmp7 = callback(React.useState(false), 2);
  const obj2 = { children: null };
  const items = [callback2(_require(4251).Text, { variant: "heading-lg/bold", children: "Switch" }), callback2(_require(4251).Text, { variant: "text-md/normal", children: "Toggle the state of a single setting on or off, immediately" }), , ];
  const obj3 = { title: "Emoji", hasIcons: false, children: null };
  const merged = Object.assign(obj);
  obj3[2] = callback2(_require(5621).TableSwitchRow, { label: "Show emoji reactions on messages", subLabel: "Show more information in less space" });
  items[2] = callback2(_require(5620).TableRowGroup, obj3);
  const obj5 = { title: "Display images, videos, and lolcats", hasIcons: false, children: null };
  const merged1 = Object.assign(obj);
  const items1 = [callback2(_require(5621).TableSwitchRow, { label: "When posted as links to chat" }), , , ];
  const merged2 = Object.assign(obj);
  items1[1] = callback2(_require(5621).TableSwitchRow, { label: "When uploaded directly to Discord" });
  const merged3 = Object.assign({
    value: tmp8,
    onValueChange: React.useCallback((arg0) => {
      _undefined(arg0);
    }, [])
  });
  items1[2] = callback2(_require(5621).TableSwitchRow, { label: "With image descriptions" });
  items1[3] = callback2(_require(5621).TableSwitchRow, { label: "Disabled switch item", subLabel: "This should not be switchable", disabled: true, value: false, onValueChange: NOOP });
  obj5[2] = items1;
  items[3] = callback3(_require(5620).TableRowGroup, obj5);
  obj2[0] = items;
  return callback3(closure_8, obj2);
}
function InlineCheckbox(startChecked) {
  let c0;
  let description;
  let label;
  let required;
  let tmp2;
  let flag = startChecked.startChecked;
  ({ label, description, required } = startChecked);
  if (flag === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = true;
  }
  let _require;
  [tmp2, c0] = callback(React.useState(flag), 2);
  const onToggle = React.useCallback((arg0) => {
    _undefined(arg0);
  }, []);
  return callback2(_require(9202).Checkbox, { label, description, required, checked, onToggle });
}
function InlineCheckboxDemo() {
  const obj = { children: null };
  const items = [callback2(require(4251) /* Text */.Text, { variant: "heading-lg/bold", children: "Inline Checkbox" }), callback2(InlineCheckbox, { label: "Checkbox label", description: "This is a description", startChecked: true }), callback2(InlineCheckbox, { label: "Trust google.com links from now on" }), callback2(InlineCheckbox, { label: "I agree to the Terms of Service", required: true })];
  obj[0] = items;
  return callback3(closure_8, obj);
}
function CheckboxRowDemo() {
  let obj = { children: null };
  const items = [callback2(require(4251) /* Text */.Text, { variant: "heading-lg/bold", children: "Checkbox" }), callback2(require(4251) /* Text */.Text, { variant: "text-md/normal", children: "Select one or more options from a short list of options" }), ];
  obj = { title: "Who can send you a friend request?", hasIcons: false, children: null };
  obj = { label: "Everyone", subLabel: "Anyone can send you a friend request", checked: false, onPress: NOOP };
  const items1 = [callback2(require(9272) /* TableCheckboxRow */.TableCheckboxRow, obj), callback2(require(9272) /* TableCheckboxRow */.TableCheckboxRow, { label: "Friends of Friends", subLabel: "Anyone who is friends with your friends can send you a friend request", checked: true, onPress: NOOP }), callback2(require(9272) /* TableCheckboxRow */.TableCheckboxRow, { label: "Server Members", subLabel: "Anyone who is in a server with you can send you a friend request", checked: true, onPress: NOOP })];
  obj[2] = items1;
  items[2] = callback3(require(5620) /* TableRowGroupTitle */.TableRowGroup, obj);
  obj[0] = items;
  return callback3(closure_8, obj);
}
function SliderDemo() {
  let obj = { children: null };
  const items = [callback2(require(4251) /* Text */.Text, { variant: "heading-lg/bold", children: "Slider" }), ];
  obj = { start: true, end: true, label: "Volume", subLabel: null };
  obj = { startIcon: null, endIcon: null, onValueChange: null };
  obj[0] = callback2(require(10895) /* VoiceXIcon */.VoiceXIcon, {});
  obj[1] = callback2(require(4781) /* VoiceNormalIcon */.VoiceNormalIcon, {});
  obj[2] = NOOP;
  obj[3] = callback2(require(13303) /* Slider */.Slider, obj);
  items[1] = callback2(require(5286) /* TableRowInner */.TableRow, obj);
  obj[0] = items;
  return callback3(closure_8, obj);
}
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { padding: 16, paddingBottom: 32 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemFormPrimitives.tsx");

export default function UserSettingsDesignSystemFormPrimitives() {
  let obj = { children: null };
  obj = { spacing: 24, style: callback4().container, children: null };
  const items = [callback2(Radio, {}), callback2(Switch, {}), callback2(CheckboxRowDemo, {}), callback2(InlineCheckboxDemo, {}), callback2(SliderDemo, {})];
  obj[2] = items;
  obj[0] = callback3(require(4664) /* Stack */.Stack, obj);
  return callback2(ScrollView, obj);
};