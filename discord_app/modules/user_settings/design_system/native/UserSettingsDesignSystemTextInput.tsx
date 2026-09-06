// === Module 15783: UserSettingsDesignSystemTextInput ===

// Module 15783 (UserSettingsDesignSystemTextInput)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import TextIcon from "TextIcon" /* 5080 */;
import AtIcon from "AtIcon" /* 5090 */;
import Card from "Card" /* 5607 */;
import TextInput from "TextInput" /* 6606 */;
import Input from "Input" /* 6607 */;
import TextField from "TextField" /* 6613 */;
import SplitTextInput from "SplitTextInput" /* 6966 */;
import SearchField from "SearchField" /* 7050 */;
import TextArea from "TextArea" /* 7085 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import SettingsIcon from "SettingsIcon" /* 7380 */;
import IconButton from "IconButton" /* 8097 */;
import GhostInput from "GhostInput" /* 14170 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Sample(children) {
  const tmp = closure_8();
  return timestampProducer(Card.Card, { shadow: "low", style: closure_8().sample, children: timestampProducer(Stack_Stack.Stack, { spacing: 24, children: children.children }) });
}
function InputUsername(defaultValue) {
  defaultValue = defaultValue.defaultValue;
  let hasItem;
  if (defaultValue != null) {
    hasItem = defaultValue.includes(" ");
  }
  let str2 = "default";
  if (hasItem) {
    str2 = "error";
  }
  [tmp4, require] = _slicedToArray(noop.useState(str2), 2);
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
}
function GhostInputUsername(defaultValue) {
  defaultValue = defaultValue.defaultValue;
  let hasItem;
  if (defaultValue != null) {
    hasItem = defaultValue.includes(" ");
  }
  let str2 = "default";
  if (hasItem) {
    str2 = "error";
  }
  [tmp4, require] = _slicedToArray(noop.useState(str2), 2);
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
}
function GhostInputActionSheet() {
  let obj = { children: null };
  const items = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Centered" }), ];
  obj = { style: { padding: 12 }, children: null };
  obj = { children: timestampProducer(GhostInputUsername, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters" }) };
  obj.children = timestampProducer(Sample, obj);
  items[1] = timestampProducer(Stack_Stack.Stack, obj);
  obj.children = items;
  return React5(Sheet_BottomSheet.BottomSheet, obj);
}
function GhostInputActionSheetLeftAligned() {
  let obj = { children: null };
  const items = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Left Aligned" }), ];
  obj = { style: { padding: 12 }, children: null };
  obj = { children: timestampProducer(GhostInputUsername, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters", isCentered: false, size: "md" }) };
  obj.children = timestampProducer(Sample, obj);
  items[1] = timestampProducer(Stack_Stack.Stack, obj);
  obj.children = items;
  return React5(Sheet_BottomSheet.BottomSheet, obj);
}
function CustomAttachmentExample() {
  [tmp2, require] = _slicedToArray(noop.useState("default"), 2);
  const tmp = _slicedToArray(noop.useState("default"), 2);
  [tmp4, importDefault] = _slicedToArray(noop.useState(""), 2);
  const obj = { status: tmp2, errorMessage: null, label: "Pressable Attachment", value: null, trailingPressableProps: null, trailingIcon: null, onChange: null };
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
    accessibilityLabel: "Press"
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
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { padding: 16 }, sample: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl };
createStyles.sample = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx");

export default function UserSettingsDesignSystemTextInput() {
  let obj = { children: null };
  obj = { spacing: 24, style: closure_8().container, children: null };
  obj = { children: null };
  const items = [timestampProducer(TextInput.TextInput, { label: "Input Label", placeholder: "Placeholder text", description: "Descriptions give context for the input.", errorMessage: "Error messages communicate invalid states." }), timestampProducer(TextArea.TextArea, { label: "Text Area", maxLength: 100, placeholder: "Multiline inputs use TextArea" }), timestampProducer(TextInput.TextInput, { label: "Password", secureTextEntry: true, placeholder: "Password", isClearable: true }), timestampProducer(TextInput.TextInput, { label: "Required Field", placeholder: "Placeholder", description: "Required inputs are indicated with an asterisk.", required: true })];
  obj.children = items;
  const items1 = [React5(Sample, obj), timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Sizing" }), timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant." }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj1 = { children: null };
  const items2 = [timestampProducer(TextInput.TextInput, { label: "Small", size: "sm" }), timestampProducer(TextInput.TextInput, { label: "Medium", size: "md" }), timestampProducer(TextInput.TextInput, { label: "Large (default)" })];
  obj1.children = items2;
  items1[3] = React5(Sample, obj1);
  items1[4] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Attachments" });
  items1[5] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence." });
  const obj2 = { children: null };
  const tmp = closure_8();
  const items3 = [timestampProducer(TextInput.TextInput, { label: "Leading icon", leadingIcon: TextIcon.TextIcon }), , , ];
  const obj3 = { label: "Leading icon", leadingIcon: TextIcon.TextIcon };
  items3[1] = timestampProducer(TextInput.TextInput, { label: "Trailing icon", trailingIcon: TextIcon.TextIcon });
  items3[2] = timestampProducer(TextInput.TextInput, { label: "Leading text", leadingText: "To:" });
  const obj4 = { label: "Trailing icon", trailingIcon: TextIcon.TextIcon };
  items3[3] = timestampProducer(TextInput.TextInput, { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon });
  obj2.children = items3;
  items1[6] = React5(Sample, obj2);
  items1[7] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing." });
  items1[8] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Pressable Attachments" });
  items1[9] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it." });
  const obj5 = { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon };
  items1[10] = timestampProducer(Sample, { children: timestampProducer(CustomAttachmentExample, {}) });
  items1[11] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself." });
  items1[12] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Rounding" });
  items1[13] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea can use the isRound prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton." });
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items4 = [timestampProducer(SearchField.SearchField, { size: "md", isRound: true }), ];
  const obj6 = { children: timestampProducer(CustomAttachmentExample, {}) };
  items4[1] = timestampProducer(IconButton.IconButton, {
    icon: timestampProducer(SettingsIcon.SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  });
  obj8.children = items4;
  obj7.children = React5(Input.Input, obj8);
  items1[14] = timestampProducer(Sample, obj7);
  items1[15] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Error States" });
  items1[16] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "The status prop communicates the overall state of the input. Setting status to \"error\" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status." });
  const obj10 = { children: null };
  const items5 = [timestampProducer(InputUsername, { defaultValue: "a space" }), timestampProducer(TextArea.TextArea, { label: "About me", maxLength: 100, placeholder: "Long form text use TextArea", errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text" })];
  obj10.children = items5;
  items1[17] = React5(Sample, obj10);
  items1[18] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Clearable" });
  items1[19] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can use the isClearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value." });
  const obj9 = {
    icon: timestampProducer(SettingsIcon.SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  };
  items1[20] = timestampProducer(Sample, { children: timestampProducer(TextField.TextField, { defaultValue: "Clear this text", isClearable: true }) });
  items1[21] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Certain input types automatically control the isClearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present." });
  items1[22] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Disableable" });
  items1[23] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "The isDisabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  const obj11 = { children: timestampProducer(TextField.TextField, { defaultValue: "Clear this text", isClearable: true }) };
  items1[24] = timestampProducer(Sample, { children: timestampProducer(TextInput.TextInput, { defaultValue: "Can't edit this value", isDisabled: true }) });
  items1[25] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "The isDisabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  items1[26] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Max Length" });
  items1[27] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up." });
  const obj12 = { children: timestampProducer(TextInput.TextInput, { defaultValue: "Can't edit this value", isDisabled: true }) };
  items1[28] = timestampProducer(Sample, { children: timestampProducer(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) });
  items1[29] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length." });
  items1[30] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Ghost Inputs (Deprecated)" });
  items1[31] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area." });
  const obj14 = {
    children: timestampProducer(components_Button_Button.Button, {
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_12), "ghost-input-sheet");
      },
      text: "Show example"
    })
  };
  items1[32] = timestampProducer(Sample, obj14);
  items1[33] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "GhostInputs can also appear left-aligned by setting `isCentered` to false." });
  const obj16 = {
    children: timestampProducer(components_Button_Button.Button, {
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_13), "ghost-input-sheet-left");
      },
      text: "Show left-aligned example"
    })
  };
  items1[34] = timestampProducer(Sample, obj16);
  items1[35] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Split Text Input" });
  items1[36] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value." });
  const obj18 = { children: null };
  const items6 = [timestampProducer(SplitTextInput.SplitTextInput, { label: "Small", size: "sm", placeholder: "Placeholder", leadingText: "Click", leadingPressableProps: { accessibilityLabel: "Click" } }), timestampProducer(SplitTextInput.SplitTextInput, { label: "Medium", size: "md", placeholder: "Placeholder", leadingText: "Me", leadingPressableProps: { accessibilityLabel: "Me" } }), timestampProducer(SplitTextInput.SplitTextInput, { label: "Large", size: "lg", placeholder: "Placeholder", leadingText: "Here", leadingPressableProps: { accessibilityLabel: "Here" } })];
  obj18.children = items6;
  items1[37] = React5(Sample, obj18);
  items1[38] = timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: "Data Types" });
  items1[39] = timestampProducer(Text_Text.Text, { variant: "text-md/normal", children: "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented." });
  obj.children = items1;
  obj.children = React5(Stack_Stack.Stack, obj);
  return timestampProducer(ScrollView, obj);
};