// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemFormPrimitives.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import VoiceNormalIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup2 from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup3 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow5 from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import Checkbox from "../../../../design/components/Checkbox/native/Checkbox.native.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import Slider2 from "../../../../design/components/Slider/native/Slider.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
let metroRequire;
const ScrollView = react_native.ScrollView;
const NOOP = Constants.NOOP;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 32 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let items1;
      let tmp4;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Radio" });
        const tmp8 = metroRequire(Text_Text.Text, {
          variant: "text-md/normal",
          children: "Select a single option from a short list of multiple options",
        });
        cResult[0] = tmp7;
        cResult[1] = tmp8;
        tmp4 = tmp7;
        tmp5 = tmp8;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [tmp4, tmp5];
        const obj3 = {
          title: "Role Colors",
          hasIcons: false,
          defaultValue: "color-in-names",
          onChange: NOOP,
          children: items1,
        };
        const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
        items1 = [
          metroRequire(TableRadioRow.TableRadioRow, { label: "Show role colors in names", value: "color-in-names" }),
          metroRequire(TableRadioRow.TableRadioRow, {
            label: "Show role colors next to names",
            value: "color-next-to-names",
          }),
          metroRequire(TableRadioRow.TableRadioRow, { label: "Don't show role colors", value: "no-color" }),
          metroRequire(TableRadioRow.TableRadioRow, {
            label: "Disabled Item",
            subLabel: "This should not be selectable",
            value: "option4",
            disabled: true,
          }),
        ];
        items[2] = metroImportDefault(TableRadioGroup, obj3);
        const tmp14 = metroImportDefault(metroImportAll, obj2);
        cResult[2] = tmp14;
        tmp9 = tmp14;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : () => {
      let items;
      let items1;
      const obj = { children: items };
      items = [
        metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Radio" }),
        metroRequire(Text_Text.Text, {
          variant: "text-md/normal",
          children: "Select a single option from a short list of multiple options",
        }),
      ];
      const obj2 = {
        title: "Role Colors",
        hasIcons: false,
        defaultValue: "color-in-names",
        onChange: NOOP,
        children: items1,
      };
      const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
      items1 = [
        metroRequire(TableRadioRow.TableRadioRow, { label: "Show role colors in names", value: "color-in-names" }),
        metroRequire(TableRadioRow.TableRadioRow, {
          label: "Show role colors next to names",
          value: "color-next-to-names",
        }),
        metroRequire(TableRadioRow.TableRadioRow, { label: "Don't show role colors", value: "no-color" }),
        metroRequire(TableRadioRow.TableRadioRow, {
          label: "Disabled Item",
          subLabel: "This should not be selectable",
          value: "option4",
          disabled: true,
        }),
      ];
      items[2] = metroImportDefault(TableRadioGroup, obj2);
      return metroImportDefault(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_129_0;
      let first;
      let tmp4;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(3);
      [tmp4, closure_129_0] = react.useState(undefined === arg0 || arg0);
      _slicedToArray(react.useState(undefined === arg0 || arg0), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          closure_1_0(arg0);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const obj2 = { value: tmp4, onValueChange: first };
        cResult[1] = tmp4;
        cResult[2] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const tmp = _slicedToArray(react.useState(flag), 2);
      let closure_0 = tmp[1];
      const obj = {
        value: tmp[0],
        onValueChange: react.useCallback((arg0) => {
          closure_0(arg0);
        }, []),
      };
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let TableSwitchRow;
      let items;
      let items1;
      let obj3;
      let tmp13;
      let tmp19;
      let tmp25;
      let tmp31;
      let tmp37;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(18);
      const tmp4 = closure_11();
      const tmp5 = closure_11(false);
      const tmp6 = closure_11();
      const tmp7 = closure_11(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Switch" });
        const tmp12 = metroRequire(Text_Text.Text, {
          variant: "text-md/normal",
          children: "Toggle the state of a single setting on or off, immediately",
        });
        cResult[0] = tmp11;
        cResult[1] = tmp12;
        tmp8 = tmp11;
        tmp9 = tmp12;
      } else {
        [tmp8, tmp9] = cResult;
      }
      if (cResult[2] !== tmp4) {
        const obj2 = { title: "Emoji", hasIcons: false, children: metroRequire(TableSwitchRow, obj3) };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        obj3 = { label: "Show emoji reactions on messages", subLabel: "Show more information in less space" };
        TableSwitchRow = TableSwitchRow5.TableSwitchRow;
        const merged = Object.assign(tmp4);
        const tmp18 = metroRequire(TableRowGroup, obj2);
        cResult[2] = tmp4;
        cResult[3] = tmp18;
        tmp13 = tmp18;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj4 = { label: "When posted as links to chat" };
        const TableSwitchRow2 = TableSwitchRow5.TableSwitchRow;
        const merged1 = Object.assign(tmp5);
        const tmp24 = metroRequire(TableSwitchRow2, obj4);
        cResult[4] = tmp5;
        cResult[5] = tmp24;
        tmp19 = tmp24;
      } else {
        tmp19 = cResult[5];
      }
      if (cResult[6] !== tmp6) {
        const obj5 = { label: "When uploaded directly to Discord" };
        const TableSwitchRow3 = TableSwitchRow5.TableSwitchRow;
        const merged2 = Object.assign(tmp6);
        const tmp30 = metroRequire(TableSwitchRow3, obj5);
        cResult[6] = tmp6;
        cResult[7] = tmp30;
        tmp25 = tmp30;
      } else {
        tmp25 = cResult[7];
      }
      if (cResult[8] !== tmp7) {
        const obj6 = { label: "With image descriptions" };
        const TableSwitchRow4 = TableSwitchRow5.TableSwitchRow;
        const merged3 = Object.assign(tmp7);
        const tmp36 = metroRequire(TableSwitchRow4, obj6);
        cResult[8] = tmp7;
        cResult[9] = tmp36;
        tmp31 = tmp36;
      } else {
        tmp31 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = {
          label: "Disabled switch item",
          subLabel: "This should not be switchable",
          disabled: true,
          value: false,
          onValueChange: NOOP,
        };
        const tmp40 = metroRequire(TableSwitchRow5.TableSwitchRow, obj7);
        cResult[10] = tmp40;
        tmp37 = tmp40;
      } else {
        tmp37 = cResult[10];
      }
      if (cResult[11] === tmp19) {
        if (cResult[12] === tmp25) {
          let tmp41;
          if (cResult[13] === tmp31) {
            tmp41 = cResult[14];
          }
          if (cResult[15] === tmp13) {
            let tmp43;
            if (cResult[16] === tmp41) {
              tmp43 = cResult[17];
            }
            return tmp43;
          }
          const obj8 = { children: items };
          items = [tmp8, tmp9, tmp13, tmp41];
          const tmp46 = metroImportDefault(metroImportAll, obj8);
          cResult[15] = tmp13;
          cResult[16] = tmp41;
          cResult[17] = tmp46;
          tmp43 = tmp46;
        }
      }
      const obj9 = { title: "Display images, videos, and lolcats", hasIcons: false, children: items1 };
      items1 = [tmp19, tmp25, tmp31, tmp37];
      const tmp42 = metroImportDefault(TableRowGroup3.TableRowGroup, obj9);
      cResult[11] = tmp19;
      cResult[12] = tmp25;
      cResult[13] = tmp31;
      cResult[14] = tmp42;
      tmp41 = tmp42;
    }
  : () => {
      let TableSwitchRow;
      let items;
      let items1;
      let obj3;
      const tmp = closure_11();
      const tmp2 = closure_11(false);
      const obj = { children: items };
      items = [, , ,];
      const tmp3 = closure_11();
      const tmp4 = closure_11(false);
      items[0] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Switch" });
      items[1] = metroRequire(Text_Text.Text, {
        variant: "text-md/normal",
        children: "Toggle the state of a single setting on or off, immediately",
      });
      const obj2 = { title: "Emoji", hasIcons: false, children: metroRequire(TableSwitchRow, obj3) };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      obj3 = { label: "Show emoji reactions on messages", subLabel: "Show more information in less space" };
      TableSwitchRow = TableSwitchRow5.TableSwitchRow;
      const merged = Object.assign(tmp);
      items[2] = metroRequire(TableRowGroup, obj2);
      const obj4 = { title: "Display images, videos, and lolcats", hasIcons: false, children: items1 };
      const TableRowGroup2 = TableRowGroup3.TableRowGroup;
      const obj5 = { label: "When posted as links to chat" };
      const TableSwitchRow2 = TableSwitchRow5.TableSwitchRow;
      const merged1 = Object.assign(tmp2);
      items1 = [metroRequire(TableSwitchRow2, obj5), , ,];
      const obj6 = { label: "When uploaded directly to Discord" };
      const TableSwitchRow3 = TableSwitchRow5.TableSwitchRow;
      const merged2 = Object.assign(tmp3);
      items1[1] = metroRequire(TableSwitchRow3, obj6);
      const obj7 = { label: "With image descriptions" };
      const TableSwitchRow4 = TableSwitchRow5.TableSwitchRow;
      const merged3 = Object.assign(tmp4);
      items1[2] = metroRequire(TableSwitchRow4, obj7);
      const obj8 = {
        label: "Disabled switch item",
        subLabel: "This should not be switchable",
        disabled: true,
        value: false,
        onValueChange: NOOP,
      };
      items1[3] = metroRequire(TableSwitchRow5.TableSwitchRow, obj8);
      items[3] = metroImportDefault(TableRowGroup2, obj4);
      return metroImportDefault(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_129_0;
      let first;
      let tmp4;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(3);
      [tmp4, closure_129_0] = react.useState(undefined === arg0 || arg0);
      _slicedToArray(react.useState(undefined === arg0 || arg0), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          closure_1_0(arg0);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const obj2 = { checked: tmp4, onPress: first };
        cResult[1] = tmp4;
        cResult[2] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const tmp = _slicedToArray(react.useState(flag), 2);
      let closure_0 = tmp[1];
      const obj = {
        checked: tmp[0],
        onPress: react.useCallback((arg0) => {
          closure_0(arg0);
        }, []),
      };
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let checked;
      let description;
      let label;
      let onPress;
      let required;
      let startChecked;
      const obj = react2;
      const cResult = obj.c(6);
      ({ label, description, required, startChecked } = arg0);
      ({ checked, onPress } = closure_13(undefined !== startChecked && startChecked));
      closure_13(undefined !== startChecked && startChecked);
      if (cResult[0] === checked) {
        if (cResult[1] === description) {
          if (cResult[2] === label) {
            if (cResult[3] === onPress) {
              let tmp7;
              if (cResult[4] === required) {
                tmp7 = cResult[5];
              }
              return tmp7;
            }
          }
        }
      }
      const tmp8 = metroRequire(Checkbox.Checkbox, { label, description, required, checked, onToggle: onPress });
      cResult[0] = checked;
      cResult[1] = description;
      cResult[2] = label;
      cResult[3] = onPress;
      cResult[4] = required;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (startChecked) => {
      let checked;
      let description;
      let label;
      let onPress;
      let required;
      let flag = startChecked.startChecked;
      ({ label, description, required } = startChecked);
      if (flag === undefined) {
        flag = false;
      }
      ({ checked, onPress } = closure_13(flag));
      closure_13(flag);
      return metroRequire(Checkbox.Checkbox, { label, description, required, checked, onToggle });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [
          metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Inline Checkbox" }),
          metroRequire(closure_14, {
            label: "Checkbox label",
            description: "This is a description",
            startChecked: true,
          }),
          metroRequire(closure_14, { label: "Trust google.com links from now on" }),
          metroRequire(closure_14, { label: "I agree to the Terms of Service", required: true }),
        ];
        const tmp9 = metroImportDefault(metroImportAll, obj2);
        cResult[0] = tmp9;
        first = tmp9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let items;
      const obj = { children: items };
      items = [
        metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Inline Checkbox" }),
        metroRequire(closure_14, { label: "Checkbox label", description: "This is a description", startChecked: true }),
        metroRequire(closure_14, { label: "Trust google.com links from now on" }),
        metroRequire(closure_14, { label: "I agree to the Terms of Service", required: true }),
      ];
      return metroImportDefault(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let items1;
      let tmp4;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Checkbox" });
        const tmp8 = metroRequire(Text_Text.Text, {
          variant: "text-md/normal",
          children: "Select one or more options from a short list of options",
        });
        cResult[0] = tmp7;
        cResult[1] = tmp8;
        tmp4 = tmp7;
        tmp5 = tmp8;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [tmp4, tmp5];
        const obj3 = { title: "Who can send you a friend request?", hasIcons: false, children: items1 };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        const obj4 = {
          label: "Everyone",
          subLabel: "Anyone can send you a friend request",
          checked: false,
          onPress: NOOP,
        };
        items1 = [metroRequire(TableCheckboxRow.TableCheckboxRow, obj4), ,];
        const obj5 = {
          label: "Friends of Friends",
          subLabel: "Anyone who is friends with your friends can send you a friend request",
          checked: true,
          onPress: NOOP,
        };
        items1[1] = metroRequire(TableCheckboxRow.TableCheckboxRow, obj5);
        const obj6 = {
          label: "Server Members",
          subLabel: "Anyone who is in a server with you can send you a friend request",
          checked: true,
          onPress: NOOP,
        };
        items1[2] = metroRequire(TableCheckboxRow.TableCheckboxRow, obj6);
        items[2] = metroImportDefault(TableRowGroup, obj3);
        const tmp14 = metroImportDefault(metroImportAll, obj2);
        cResult[2] = tmp14;
        tmp9 = tmp14;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : () => {
      let items;
      let items1;
      const obj = { children: items };
      items = [
        metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Checkbox" }),
        metroRequire(Text_Text.Text, {
          variant: "text-md/normal",
          children: "Select one or more options from a short list of options",
        }),
      ];
      const obj2 = { title: "Who can send you a friend request?", hasIcons: false, children: items1 };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      items1 = [, ,];
      const obj3 = {
        label: "Everyone",
        subLabel: "Anyone can send you a friend request",
        checked: false,
        onPress: NOOP,
      };
      items1[0] = metroRequire(TableCheckboxRow.TableCheckboxRow, obj3);
      const obj4 = {
        label: "Friends of Friends",
        subLabel: "Anyone who is friends with your friends can send you a friend request",
        checked: true,
        onPress: NOOP,
      };
      items1[1] = metroRequire(TableCheckboxRow.TableCheckboxRow, obj4);
      const obj5 = {
        label: "Server Members",
        subLabel: "Anyone who is in a server with you can send you a friend request",
        checked: true,
        onPress: NOOP,
      };
      items1[2] = metroRequire(TableCheckboxRow.TableCheckboxRow, obj5);
      items[2] = metroImportDefault(TableRowGroup, obj2);
      return metroImportDefault(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Slider;
      let first;
      let items;
      let obj4;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Slider" });
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [first];
        const obj3 = { start: true, end: true, label: "Volume", subLabel: metroRequire(Slider, obj4) };
        const TableRow = TableRow2.TableRow;
        obj4 = {
          startIcon: metroRequire(VoiceXIcon.VoiceXIcon, {}),
          endIcon: metroRequire(VoiceNormalIcon.VoiceNormalIcon, {}),
          onValueChange: NOOP,
        };
        Slider = Slider2.Slider;
        items[1] = metroRequire(TableRow, obj3);
        const tmp12 = metroImportDefault(metroImportAll, obj2);
        cResult[1] = tmp12;
        tmp7 = tmp12;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      let Slider;
      let items;
      let obj3;
      const obj = { children: items };
      items = [metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Slider" })];
      const obj2 = { start: true, end: true, label: "Volume", subLabel: metroRequire(Slider, obj3) };
      const TableRow = TableRow2.TableRow;
      obj3 = {
        startIcon: metroRequire(VoiceXIcon.VoiceXIcon, {}),
        endIcon: metroRequire(VoiceNormalIcon.VoiceNormalIcon, {}),
        onValueChange: NOOP,
      };
      Slider = Slider2.Slider;
      items[1] = metroRequire(TableRow, obj2);
      return metroImportDefault(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let obj3;
      let tmp21;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = metroRequire(closure_10, {});
        const tmp14 = metroRequire(closure_12, {});
        const tmp16 = metroRequire(closure_16, {});
        const tmp18 = metroRequire(closure_15, {});
        const tmp20 = metroRequire(closure_17, {});
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
        const obj2 = { children: metroImportDefault(Stack_Stack.Stack, obj3) };
        obj3 = { spacing: 24, style: tmp4.container, children: items };
        items = [tmp5, tmp6, tmp7, tmp8, tmp9];
        const tmp25 = metroRequire(ScrollView, obj2);
        cResult[5] = tmp4.container;
        cResult[6] = tmp25;
        tmp21 = tmp25;
      } else {
        tmp21 = cResult[6];
      }
      return tmp21;
    }
  : () => {
      let Stack;
      let items;
      let obj2;
      const obj = { children: metroImportDefault(Stack, obj2) };
      obj2 = { spacing: 24, style: closure_9().container, children: items };
      Stack = Stack_Stack.Stack;
      items = [
        metroRequire(closure_10, {}),
        metroRequire(closure_12, {}),
        metroRequire(closure_16, {}),
        metroRequire(closure_15, {}),
        metroRequire(closure_17, {}),
      ];
      return metroRequire(ScrollView, obj);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemFormPrimitives.tsx",
);

export default tmp3;
