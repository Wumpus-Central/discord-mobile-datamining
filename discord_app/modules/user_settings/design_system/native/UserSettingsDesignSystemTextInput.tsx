// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import TextIcon from "../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import AtIcon from "../../../../design/components/Icon/native/redesign/generated/AtIcon.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import TextField from "../../../../design/components/TextField/native/TextField.native.tsx";
import Input from "../../../../design/components/Input/native/Input.native.tsx";
import SplitTextInput from "../../../../design/components/SplitTextInput/native/SplitTextInput.native.tsx";
import SearchField from "../../../../design/components/TextField/native/SearchField.native.tsx";
import TextArea from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import GhostInput from "../../../../design/components/TextInput/native/GhostInput.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { padding: 16 },
  sample: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl },
};
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(5);
      children = children.children;
      const tmp4 = closure_8();
      if (cResult[0] !== children) {
        const obj2 = { spacing: 24, children };
        const tmp7 = timestampProducer(Stack_Stack.Stack, obj2);
        cResult[0] = children;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.sample) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = timestampProducer(Card.Card, { shadow: "low", style: tmp4.sample, children: tmp5 });
      cResult[2] = tmp4.sample;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { shadow: "low", style: tmp4.sample, children: tmp5 };
    }
  : (children) => {
      const tmp = closure_8();
      return timestampProducer(Card.Card, {
        shadow: "low",
        style: closure_8().sample,
        children: timestampProducer(Stack_Stack.Stack, { spacing: 24, children: children.children }),
      });
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (defaultValue) => {
      const cResult = c.c(5);
      defaultValue = defaultValue.defaultValue;
      let hasItem;
      if (defaultValue != null) {
        hasItem = defaultValue.includes(" ");
      }
      let str2 = "default";
      if (hasItem) {
        str2 = "error";
      }
      [tmp7, require] = noop.useState(str2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(arr) {
          let str = "default";
          if (arr.includes(" ")) {
            str = "error";
          }
          require(str);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      let str3;
      if ("error" === tmp7) {
        str3 = "Username can't contain spaces";
      }
      if (cResult[1] === defaultValue) {
        if (cResult[2] === tmp7) {
          if (cResult[3] === str3) {
            let tmp9 = cResult[4];
          }
          return tmp9;
        }
      }
      const obj2 = {};
      const merged = Object.assign(defaultValue);
      obj2.status = tmp7;
      obj2.errorMessage = str3;
      obj2.label = "Username";
      obj2.leadingIcon = AtIcon.AtIcon;
      obj2.onChange = first;
      const tmp11 = timestampProducer(TextInput.TextInput, obj2);
      cResult[1] = defaultValue;
      cResult[2] = tmp7;
      cResult[3] = str3;
      cResult[4] = tmp11;
      tmp9 = tmp11;
      const tmp6 = _slicedToArray(noop.useState(str2), 2);
    }
  : (defaultValue) => {
      defaultValue = defaultValue.defaultValue;
      let hasItem;
      if (defaultValue != null) {
        hasItem = defaultValue.includes(" ");
      }
      let str2 = "default";
      if (hasItem) {
        str2 = "error";
      }
      [tmp4, require] = noop.useState(str2);
      const obj = {};
      const merged = Object.assign(defaultValue);
      obj.status = tmp4;
      let str3;
      if ("error" === tmp4) {
        str3 = "Username can't contain spaces";
      }
      obj.errorMessage = str3;
      obj.label = "Username";
      obj.leadingIcon = AtIcon.AtIcon;
      obj.onChange = function onChange(arr) {
        let str = "default";
        if (arr.includes(" ")) {
          str = "error";
        }
        require(str);
      };
      return timestampProducer(TextInput.TextInput, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (defaultValue) => {
      const cResult = c.c(5);
      defaultValue = defaultValue.defaultValue;
      let hasItem;
      if (defaultValue != null) {
        hasItem = defaultValue.includes(" ");
      }
      let str2 = "default";
      if (hasItem) {
        str2 = "error";
      }
      [tmp7, require] = noop.useState(str2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(arr) {
          let str = "default";
          if (arr.includes(" ")) {
            str = "error";
          }
          require(str);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      let str3;
      if ("error" === tmp7) {
        str3 = "Username can't contain spaces";
      }
      if (cResult[1] === defaultValue) {
        if (cResult[2] === tmp7) {
          if (cResult[3] === str3) {
            let tmp9 = cResult[4];
          }
          return tmp9;
        }
      }
      const obj2 = {};
      const merged = Object.assign(defaultValue);
      obj2.status = tmp7;
      obj2.errorMessage = str3;
      obj2.onChange = first;
      const tmp11 = timestampProducer(GhostInput.GhostInput, obj2);
      cResult[1] = defaultValue;
      cResult[2] = tmp7;
      cResult[3] = str3;
      cResult[4] = tmp11;
      tmp9 = tmp11;
      const tmp6 = _slicedToArray(noop.useState(str2), 2);
    }
  : (defaultValue) => {
      defaultValue = defaultValue.defaultValue;
      let hasItem;
      if (defaultValue != null) {
        hasItem = defaultValue.includes(" ");
      }
      let str2 = "default";
      if (hasItem) {
        str2 = "error";
      }
      [tmp4, require] = noop.useState(str2);
      const obj = {};
      const merged = Object.assign(defaultValue);
      obj.status = tmp4;
      let str3;
      if ("error" === tmp4) {
        str3 = "Username can't contain spaces";
      }
      obj.errorMessage = str3;
      obj.onChange = function onChange(arr) {
        let str = "default";
        if (arr.includes(" ")) {
          str = "error";
        }
        require(str);
      };
      return timestampProducer(GhostInput.GhostInput, obj);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, {
          title: "Ghost Input - Centered",
        });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { padding: 12 };
        cResult[1] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: null };
        const items = [first];
        const obj4 = { style: tmp7, children: null };
        const obj5 = {
          children: timestampProducer(closure_11, {
            placeholder: "@wumpus",
            description: "You can use up to 16 alpha-numeric characters",
          }),
        };
        obj4.children = timestampProducer(closure_9, obj5);
        items[1] = timestampProducer(Stack_Stack.Stack, obj4);
        obj3.children = items;
        const tmp13 = React5(Sheet_BottomSheet.BottomSheet, obj3);
        cResult[2] = tmp13;
        let tmp8 = tmp13;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => {
      const obj = { children: null };
      const items = [
        timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Centered" }),
      ];
      const obj2 = {
        style: { padding: 12 },
        children: timestampProducer(closure_9, {
          children: timestampProducer(closure_11, {
            placeholder: "@wumpus",
            description: "You can use up to 16 alpha-numeric characters",
          }),
        }),
      };
      items[1] = timestampProducer(Stack_Stack.Stack, obj2);
      obj.children = items;
      return React5(Sheet_BottomSheet.BottomSheet, obj);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, {
          title: "Ghost Input - Left Aligned",
        });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { padding: 12 };
        cResult[1] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: null };
        const items = [first];
        const obj4 = { style: tmp7, children: null };
        const obj5 = {
          children: timestampProducer(closure_11, {
            placeholder: "@wumpus",
            description: "You can use up to 16 alpha-numeric characters",
            centered: false,
            size: "md",
          }),
        };
        obj4.children = timestampProducer(closure_9, obj5);
        items[1] = timestampProducer(Stack_Stack.Stack, obj4);
        obj3.children = items;
        const tmp13 = React5(Sheet_BottomSheet.BottomSheet, obj3);
        cResult[2] = tmp13;
        let tmp8 = tmp13;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => {
      const obj = { children: null };
      const items = [
        timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Left Aligned" }),
      ];
      const obj2 = {
        style: { padding: 12 },
        children: timestampProducer(closure_9, {
          children: timestampProducer(closure_11, {
            placeholder: "@wumpus",
            description: "You can use up to 16 alpha-numeric characters",
            centered: false,
            size: "md",
          }),
        }),
      };
      items[1] = timestampProducer(Stack_Stack.Stack, obj2);
      obj.children = items;
      return React5(Sheet_BottomSheet.BottomSheet, obj);
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(6);
      [tmp5, require] = noop.useState("default");
      const tmp4 = _slicedToArray(noop.useState("default"), 2);
      [tmp7, importDefault] = noop.useState("");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(arr) {
          importDefault(arr);
          let str = "default";
          if (arr.includes(" ")) {
            str = "error";
          }
          require(str);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      let str;
      if ("error" === tmp5) {
        str = "Username can't contain spaces";
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          onPress() {
            return importDefault("You pressed the icon");
          },
          accessibilityLabel: "Press",
        };
        cResult[1] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === str) {
          if (cResult[4] === tmp7) {
            let tmp10 = cResult[5];
          }
          return tmp10;
        }
      }
      const tmp6 = _slicedToArray(noop.useState(""), 2);
      const tmp11 = timestampProducer(TextInput.TextInput, {
        status: tmp5,
        errorMessage: str,
        label: "Pressable Attachment",
        value: tmp7,
        trailingPressableProps: tmp9,
        trailingIcon: AtIcon.AtIcon,
        onChange: first,
      });
      cResult[2] = tmp5;
      cResult[3] = str;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
      const obj3 = {
        status: tmp5,
        errorMessage: str,
        label: "Pressable Attachment",
        value: tmp7,
        trailingPressableProps: tmp9,
        trailingIcon: AtIcon.AtIcon,
        onChange: first,
      };
    }
  : () => {
      [tmp2, require] = noop.useState("default");
      const tmp = _slicedToArray(noop.useState("default"), 2);
      [tmp4, importDefault] = noop.useState("");
      const obj = {
        status: tmp2,
        errorMessage: null,
        label: "Pressable Attachment",
        value: null,
        trailingPressableProps: null,
        trailingIcon: null,
        onChange: null,
      };
      let str;
      if ("error" === tmp2) {
        str = "Username can't contain spaces";
      }
      obj.errorMessage = str;
      obj.value = tmp4;
      obj.trailingPressableProps = {
        onPress() {
          return importDefault("You pressed the icon");
        },
        accessibilityLabel: "Press",
      };
      obj.trailingIcon = AtIcon.AtIcon;
      obj.onChange = function onChange(arr) {
        importDefault(arr);
        let str = "default";
        if (arr.includes(" ")) {
          str = "error";
        }
        require(str);
      };
      return timestampProducer(TextInput.TextInput, obj);
    };
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(46);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: null };
        const items = [
          timestampProducer(TextInput.TextInput, {
            label: "Input Label",
            placeholder: "Placeholder text",
            description: "Descriptions give context for the input.",
            errorMessage: "Error messages communicate invalid states.",
          }),
          timestampProducer(TextArea.TextArea, {
            label: "Text Area",
            maxLength: 100,
            placeholder: "Multiline inputs use TextArea",
          }),
          timestampProducer(TextInput.TextInput, {
            label: "Password",
            secureTextEntry: true,
            placeholder: "Password",
            clearable: true,
          }),
          timestampProducer(TextInput.TextInput, {
            label: "Required Field",
            placeholder: "Placeholder",
            description: "Required inputs are indicated with an asterisk.",
            required: true,
          }),
        ];
        obj2.children = items;
        const tmp11 = React5(closure_9, obj2);
        const tmp12 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Sizing" });
        const tmp13 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant.",
        });
        cResult[0] = tmp11;
        cResult[1] = tmp12;
        cResult[2] = tmp13;
        tmp5 = tmp11;
        tmp6 = tmp12;
        tmp7 = tmp13;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: null };
        const items1 = [
          timestampProducer(TextInput.TextInput, { label: "Small", size: "sm" }),
          timestampProducer(TextInput.TextInput, { label: "Medium", size: "md" }),
          timestampProducer(TextInput.TextInput, { label: "Large (default)" }),
        ];
        obj3.children = items1;
        const tmp20 = React5(closure_9, obj3);
        const tmp21 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Attachments" });
        const tmp22 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence.",
        });
        cResult[3] = tmp20;
        cResult[4] = tmp21;
        cResult[5] = tmp22;
        let tmp16 = tmp22;
        let tmp15 = tmp21;
        let tmp14 = tmp20;
      } else {
        tmp14 = cResult[3];
        tmp15 = cResult[4];
        tmp16 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { children: null };
        const obj5 = { label: "Leading icon", leadingIcon: TextIcon.TextIcon };
        const items2 = [timestampProducer(TextInput.TextInput, obj5), , ,];
        const obj6 = { label: "Trailing icon", trailingIcon: TextIcon.TextIcon };
        items2[1] = timestampProducer(TextInput.TextInput, obj6);
        items2[2] = timestampProducer(TextInput.TextInput, { label: "Leading text", leadingText: "To:" });
        const obj7 = { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon };
        items2[3] = timestampProducer(TextInput.TextInput, obj7);
        obj4.children = items2;
        const tmp30 = React5(closure_9, obj4);
        const tmp31 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing.",
        });
        const tmp32 = timestampProducer(Text_Text.Text, {
          variant: "heading-lg/bold",
          children: "Pressable Attachments",
        });
        const tmp33 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it.",
        });
        cResult[6] = tmp30;
        cResult[7] = tmp31;
        cResult[8] = tmp32;
        cResult[9] = tmp33;
        let tmp26 = tmp33;
        let tmp25 = tmp32;
        let tmp24 = tmp31;
        let tmp23 = tmp30;
      } else {
        tmp23 = cResult[6];
        tmp24 = cResult[7];
        tmp25 = cResult[8];
        tmp26 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { children: timestampProducer(closure_14, {}) };
        const tmp41 = timestampProducer(closure_9, obj8);
        const tmp42 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself.",
        });
        const tmp43 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Rounding" });
        const tmp44 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "All inputs except TextArea can use the round prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton.",
        });
        cResult[10] = tmp41;
        cResult[11] = tmp42;
        cResult[12] = tmp43;
        cResult[13] = tmp44;
        let tmp37 = tmp44;
        let tmp36 = tmp43;
        let tmp35 = tmp42;
        let tmp34 = tmp41;
      } else {
        tmp34 = cResult[10];
        tmp35 = cResult[11];
        tmp36 = cResult[12];
        tmp37 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp47 = timestampProducer(SearchField.SearchField, { size: "md", round: true });
        cResult[14] = tmp47;
        let tmp45 = tmp47;
      } else {
        tmp45 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp50 = timestampProducer(SettingsIcon.SettingsIcon, { size: "sm" });
        cResult[15] = tmp50;
        let tmp48 = tmp50;
      } else {
        tmp48 = cResult[15];
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { children: null };
        const obj10 = { children: null };
        const items3 = [tmp45];
        const obj11 = {
          icon: tmp48,
          accessibilityLabel: "Settings",
          onPress() {
            return null;
          },
          variant: "tertiary",
        };
        items3[1] = timestampProducer(IconButton.IconButton, obj11);
        obj10.children = items3;
        obj9.children = React5(Input.Input, obj10);
        const tmp57 = timestampProducer(closure_9, obj9);
        const tmp58 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Error States" });
        const tmp59 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            'The status prop communicates the overall state of the input. Setting status to "error" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status.',
        });
        cResult[16] = tmp57;
        cResult[17] = tmp58;
        cResult[18] = tmp59;
        let tmp53 = tmp59;
        let tmp52 = tmp58;
        let tmp51 = tmp57;
      } else {
        tmp51 = cResult[16];
        tmp52 = cResult[17];
        tmp53 = cResult[18];
      }
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const obj12 = { children: null };
        const items4 = [
          timestampProducer(closure_10, { defaultValue: "a space" }),
          timestampProducer(TextArea.TextArea, {
            label: "About me",
            maxLength: 100,
            placeholder: "Long form text use TextArea",
            errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text",
          }),
        ];
        obj12.children = items4;
        const tmp67 = React5(closure_9, obj12);
        const tmp68 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Clearable" });
        const tmp69 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Inputs can use the clearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value.",
        });
        cResult[19] = tmp67;
        cResult[20] = tmp68;
        cResult[21] = tmp69;
        let tmp62 = tmp69;
        let tmp61 = tmp68;
        let tmp60 = tmp67;
      } else {
        tmp60 = cResult[19];
        tmp61 = cResult[20];
        tmp62 = cResult[21];
      }
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        const obj13 = {
          children: timestampProducer(TextField.TextField, { defaultValue: "Clear this text", clearable: true }),
        };
        const tmp76 = timestampProducer(closure_9, obj13);
        const tmp77 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Certain input types automatically control the clearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present.",
        });
        const tmp78 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Disableable" });
        const tmp79 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed.",
        });
        cResult[22] = tmp76;
        cResult[23] = tmp77;
        cResult[24] = tmp78;
        cResult[25] = tmp79;
        let tmp73 = tmp79;
        let tmp72 = tmp78;
        let tmp71 = tmp77;
        let tmp70 = tmp76;
      } else {
        tmp70 = cResult[22];
        tmp71 = cResult[23];
        tmp72 = cResult[24];
        tmp73 = cResult[25];
      }
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        const obj14 = {
          children: timestampProducer(TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }),
        };
        const tmp86 = timestampProducer(closure_9, obj14);
        const tmp87 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed.",
        });
        const tmp88 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Max Length" });
        const tmp89 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up.",
        });
        cResult[26] = tmp86;
        cResult[27] = tmp87;
        cResult[28] = tmp88;
        cResult[29] = tmp89;
        let tmp83 = tmp89;
        let tmp82 = tmp88;
        let tmp81 = tmp87;
        let tmp80 = tmp86;
      } else {
        tmp80 = cResult[26];
        tmp81 = cResult[27];
        tmp82 = cResult[28];
        tmp83 = cResult[29];
      }
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        const obj15 = { children: timestampProducer(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) };
        const tmp96 = timestampProducer(closure_9, obj15);
        const tmp97 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length.",
        });
        const tmp98 = timestampProducer(Text_Text.Text, {
          variant: "heading-lg/bold",
          children: "Ghost Inputs (Deprecated)",
        });
        const tmp99 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area.",
        });
        cResult[30] = tmp96;
        cResult[31] = tmp97;
        cResult[32] = tmp98;
        cResult[33] = tmp99;
        let tmp93 = tmp99;
        let tmp92 = tmp98;
        let tmp91 = tmp97;
        let tmp90 = tmp96;
      } else {
        tmp90 = cResult[30];
        tmp91 = cResult[31];
        tmp92 = cResult[32];
        tmp93 = cResult[33];
      }
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        const obj16 = { children: null };
        const obj17 = {
          onPress() {
            ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_12), "ghost-input-sheet");
          },
          text: "Show example",
        };
        obj16.children = timestampProducer(components_Button_Button.Button, obj17);
        const tmp104 = timestampProducer(closure_9, obj16);
        const tmp105 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children: "GhostInputs can also appear left-aligned by setting `centered` to false.",
        });
        cResult[34] = tmp104;
        cResult[35] = tmp105;
        let tmp101 = tmp105;
        let tmp100 = tmp104;
      } else {
        tmp100 = cResult[34];
        tmp101 = cResult[35];
      }
      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
        const obj18 = { children: null };
        const obj19 = {
          onPress() {
            ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_13), "ghost-input-sheet-left");
          },
          text: "Show left-aligned example",
        };
        obj18.children = timestampProducer(components_Button_Button.Button, obj19);
        const tmp111 = timestampProducer(closure_9, obj18);
        const tmp112 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Split Text Input" });
        const tmp113 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value.",
        });
        cResult[36] = tmp111;
        cResult[37] = tmp112;
        cResult[38] = tmp113;
        let tmp108 = tmp113;
        let tmp107 = tmp112;
        let tmp106 = tmp111;
      } else {
        tmp106 = cResult[36];
        tmp107 = cResult[37];
        tmp108 = cResult[38];
      }
      if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
        const obj20 = {
          label: "Small",
          size: "sm",
          placeholder: "Placeholder",
          leadingText: "Click",
          leadingPressableProps: { accessibilityLabel: "Click" },
        };
        const tmp116 = timestampProducer(SplitTextInput.SplitTextInput, obj20);
        cResult[39] = tmp116;
        let tmp114 = tmp116;
      } else {
        tmp114 = cResult[39];
      }
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        const obj21 = {
          label: "Medium",
          size: "md",
          placeholder: "Placeholder",
          leadingText: "Me",
          leadingPressableProps: { accessibilityLabel: "Me" },
        };
        const tmp119 = timestampProducer(SplitTextInput.SplitTextInput, obj21);
        cResult[40] = tmp119;
        let tmp117 = tmp119;
      } else {
        tmp117 = cResult[40];
      }
      if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
        const obj22 = { children: null };
        const items5 = [tmp114, tmp117];
        const obj23 = {
          label: "Large",
          size: "lg",
          placeholder: "Placeholder",
          leadingText: "Here",
          leadingPressableProps: { accessibilityLabel: "Here" },
        };
        items5[2] = timestampProducer(SplitTextInput.SplitTextInput, obj23);
        obj22.children = items5;
        const tmp126 = React5(closure_9, obj22);
        const tmp127 = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Data Types" });
        const tmp128 = timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented.",
        });
        cResult[41] = tmp126;
        cResult[42] = tmp127;
        cResult[43] = tmp128;
        let tmp122 = tmp128;
        let tmp121 = tmp127;
        let tmp120 = tmp126;
      } else {
        tmp120 = cResult[41];
        tmp121 = cResult[42];
        tmp122 = cResult[43];
      }
      if (cResult[44] !== tmp4.container) {
        const obj24 = { children: null };
        const obj25 = { spacing: 24, style: tmp4.container, children: null };
        const items6 = [
          tmp5,
          tmp6,
          tmp7,
          tmp14,
          tmp15,
          tmp16,
          tmp23,
          tmp24,
          tmp25,
          tmp26,
          tmp34,
          tmp35,
          tmp36,
          tmp37,
          tmp51,
          tmp52,
          tmp53,
          tmp60,
          tmp61,
          tmp62,
          tmp70,
          tmp71,
          tmp72,
          tmp73,
          tmp80,
          tmp81,
          tmp82,
          tmp83,
          tmp90,
          tmp91,
          tmp92,
          tmp93,
          tmp100,
          tmp101,
          tmp106,
          tmp107,
          tmp108,
          tmp120,
          tmp121,
          tmp122,
        ];
        obj25.children = items6;
        obj24.children = React5(Stack_Stack.Stack, obj25);
        const tmp133 = timestampProducer(ScrollView, obj24);
        cResult[44] = tmp4.container;
        cResult[45] = tmp133;
        let tmp129 = tmp133;
      } else {
        tmp129 = cResult[45];
      }
      return tmp129;
    }
  : () => {
      const obj = { children: null };
      const obj2 = { spacing: 24, style: closure_8().container, children: null };
      const obj3 = { children: null };
      const items = [
        timestampProducer(TextInput.TextInput, {
          label: "Input Label",
          placeholder: "Placeholder text",
          description: "Descriptions give context for the input.",
          errorMessage: "Error messages communicate invalid states.",
        }),
        timestampProducer(TextArea.TextArea, {
          label: "Text Area",
          maxLength: 100,
          placeholder: "Multiline inputs use TextArea",
        }),
        timestampProducer(TextInput.TextInput, {
          label: "Password",
          secureTextEntry: true,
          placeholder: "Password",
          clearable: true,
        }),
        timestampProducer(TextInput.TextInput, {
          label: "Required Field",
          placeholder: "Placeholder",
          description: "Required inputs are indicated with an asterisk.",
          required: true,
        }),
      ];
      obj3.children = items;
      const items1 = [
        React5(closure_9, obj3),
        timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Sizing" }),
        timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          children:
            "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant.",
        }),
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
      ];
      const obj4 = { children: null };
      const items2 = [
        timestampProducer(TextInput.TextInput, { label: "Small", size: "sm" }),
        timestampProducer(TextInput.TextInput, { label: "Medium", size: "md" }),
        timestampProducer(TextInput.TextInput, { label: "Large (default)" }),
      ];
      obj4.children = items2;
      items1[3] = React5(closure_9, obj4);
      items1[4] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Attachments" });
      items1[5] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence.",
      });
      const obj5 = { children: null };
      const tmp = closure_8();
      const items3 = [
        timestampProducer(TextInput.TextInput, { label: "Leading icon", leadingIcon: TextIcon.TextIcon }),
        ,
        ,
      ];
      const obj6 = { label: "Leading icon", leadingIcon: TextIcon.TextIcon };
      items3[1] = timestampProducer(TextInput.TextInput, { label: "Trailing icon", trailingIcon: TextIcon.TextIcon });
      items3[2] = timestampProducer(TextInput.TextInput, { label: "Leading text", leadingText: "To:" });
      const obj7 = { label: "Trailing icon", trailingIcon: TextIcon.TextIcon };
      items3[3] = timestampProducer(TextInput.TextInput, {
        label: "Combination",
        leadingText: "To:",
        trailingIcon: AtIcon.AtIcon,
      });
      obj5.children = items3;
      items1[6] = React5(closure_9, obj5);
      items1[7] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing.",
      });
      items1[8] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Pressable Attachments" });
      items1[9] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it.",
      });
      const obj8 = { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon };
      items1[10] = timestampProducer(closure_9, { children: timestampProducer(closure_14, {}) });
      items1[11] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself.",
      });
      items1[12] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Rounding" });
      items1[13] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "All inputs except TextArea can use the round prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton.",
      });
      const obj10 = { children: null };
      const obj11 = { children: null };
      const items4 = [timestampProducer(SearchField.SearchField, { size: "md", round: true })];
      const obj9 = { children: timestampProducer(closure_14, {}) };
      items4[1] = timestampProducer(IconButton.IconButton, {
        icon: timestampProducer(SettingsIcon.SettingsIcon, { size: "sm" }),
        accessibilityLabel: "Settings",
        onPress() {
          return null;
        },
        variant: "tertiary",
      });
      obj11.children = items4;
      obj10.children = React5(Input.Input, obj11);
      items1[14] = timestampProducer(closure_9, obj10);
      items1[15] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Error States" });
      items1[16] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          'The status prop communicates the overall state of the input. Setting status to "error" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status.',
      });
      const obj13 = { children: null };
      const items5 = [
        timestampProducer(closure_10, { defaultValue: "a space" }),
        timestampProducer(TextArea.TextArea, {
          label: "About me",
          maxLength: 100,
          placeholder: "Long form text use TextArea",
          errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text",
        }),
      ];
      obj13.children = items5;
      items1[17] = React5(closure_9, obj13);
      items1[18] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Clearable" });
      items1[19] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Inputs can use the clearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value.",
      });
      const obj12 = {
        icon: timestampProducer(SettingsIcon.SettingsIcon, { size: "sm" }),
        accessibilityLabel: "Settings",
        onPress() {
          return null;
        },
        variant: "tertiary",
      };
      items1[20] = timestampProducer(closure_9, {
        children: timestampProducer(TextField.TextField, { defaultValue: "Clear this text", clearable: true }),
      });
      items1[21] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Certain input types automatically control the clearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present.",
      });
      items1[22] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Disableable" });
      items1[23] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed.",
      });
      const obj14 = {
        children: timestampProducer(TextField.TextField, { defaultValue: "Clear this text", clearable: true }),
      };
      items1[24] = timestampProducer(closure_9, {
        children: timestampProducer(TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }),
      });
      items1[25] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed.",
      });
      items1[26] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Max Length" });
      items1[27] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up.",
      });
      const obj15 = {
        children: timestampProducer(TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }),
      };
      items1[28] = timestampProducer(closure_9, {
        children: timestampProducer(TextArea.TextArea, { label: "Limited length", maxLength: 124 }),
      });
      items1[29] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length.",
      });
      items1[30] = timestampProducer(Text_Text.Text, {
        variant: "heading-lg/bold",
        children: "Ghost Inputs (Deprecated)",
      });
      items1[31] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area.",
      });
      const obj17 = {
        children: timestampProducer(components_Button_Button.Button, {
          onPress() {
            ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_12), "ghost-input-sheet");
          },
          text: "Show example",
        }),
      };
      items1[32] = timestampProducer(closure_9, obj17);
      items1[33] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children: "GhostInputs can also appear left-aligned by setting `centered` to false.",
      });
      const obj19 = {
        children: timestampProducer(components_Button_Button.Button, {
          onPress() {
            ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_13), "ghost-input-sheet-left");
          },
          text: "Show left-aligned example",
        }),
      };
      items1[34] = timestampProducer(closure_9, obj19);
      items1[35] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Split Text Input" });
      items1[36] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value.",
      });
      const obj21 = { children: null };
      const items6 = [
        timestampProducer(SplitTextInput.SplitTextInput, {
          label: "Small",
          size: "sm",
          placeholder: "Placeholder",
          leadingText: "Click",
          leadingPressableProps: { accessibilityLabel: "Click" },
        }),
        timestampProducer(SplitTextInput.SplitTextInput, {
          label: "Medium",
          size: "md",
          placeholder: "Placeholder",
          leadingText: "Me",
          leadingPressableProps: { accessibilityLabel: "Me" },
        }),
        timestampProducer(SplitTextInput.SplitTextInput, {
          label: "Large",
          size: "lg",
          placeholder: "Placeholder",
          leadingText: "Here",
          leadingPressableProps: { accessibilityLabel: "Here" },
        }),
      ];
      obj21.children = items6;
      items1[37] = React5(closure_9, obj21);
      items1[38] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Data Types" });
      items1[39] = timestampProducer(Text_Text.Text, {
        variant: "text-md/normal",
        children:
          "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented.",
      });
      obj2.children = items1;
      obj.children = React5(Stack_Stack.Stack, obj2);
      return timestampProducer(ScrollView, obj);
    };
