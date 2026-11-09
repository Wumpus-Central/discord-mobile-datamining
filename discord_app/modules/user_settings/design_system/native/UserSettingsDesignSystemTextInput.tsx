// === Module 18122: UserSettingsDesignSystemTextInput ===

// Module 18122 (UserSettingsDesignSystemTextInput)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5388 */;
import Text_Text from "Text/Text" /* 5751 */;
import components_Button_Button from "components/Button/Button" /* 5758 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import Card from "Card" /* 7040 */;
import TextInput from "TextInput" /* 7148 */;
import Input from "Input" /* 7149 */;
import TextField from "TextField" /* 7155 */;
import SplitTextInput from "SplitTextInput" /* 7204 */;
import Search_SearchBar from "Search/SearchBar" /* 7282 */;
import TextArea from "TextArea" /* 7316 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7382 */;
import SettingsIcon from "SettingsIcon" /* 7633 */;
import IconButton from "IconButton" /* 8098 */;
import TextIcon from "TextIcon" /* 8723 */;
import AtIcon from "AtIcon" /* 8733 */;
import GhostInput from "GhostInput" /* 16180 */;
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
  obj.onChange = function handleChange(arr) {
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
  [tmp4, require] = noop.useState(str2);
  const obj = {};
  const merged = Object.assign(defaultValue);
  obj.status = tmp4;
  let str3;
  if ("error" === tmp4) {
    str3 = "Username can't contain spaces";
  }
  obj.errorMessage = str3;
  obj.onChange = function handleChange(arr) {
    let str = "default";
    if (arr.includes(" ")) {
      str = "error";
    }
    require(str);
  };
  return timestampProducer(GhostInput.GhostInput, obj);
}
function GhostInputActionSheet() {
  const obj = { children: null };
  items = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Centered" }), ];
  const obj2 = { style: { padding: 12 }, children: timestampProducer(Sample, { children: timestampProducer(GhostInputUsername, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters" }) }) };
  items[1] = timestampProducer(Stack_Stack.Stack, obj2);
  obj.children = items;
  return metroImportDefault(Sheet_BottomSheet.BottomSheet, obj);
}
function GhostInputActionSheetLeftAligned() {
  const obj = { children: null };
  items = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Left Aligned" }), ];
  const obj2 = { style: { padding: 12 }, children: timestampProducer(Sample, { children: timestampProducer(GhostInputUsername, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters", centered: false, size: "md" }) }) };
  items[1] = timestampProducer(Stack_Stack.Stack, obj2);
  obj.children = items;
  return metroImportDefault(Sheet_BottomSheet.BottomSheet, obj);
}
function CustomAttachmentExample() {
  [tmp2, require] = noop.useState("default");
  const tmp = _slicedToArray(noop.useState("default"), 2);
  [tmp4, importDefault] = noop.useState("");
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
  obj.onChange = function handleChange(arr) {
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
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { padding: 16 }, sample: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx");

export default function UserSettingsDesignSystemTextInput() {
  const obj = { children: null };
  const obj2 = { spacing: 24, style: closure_8().container, children: null };
  const obj3 = { children: null };
  items = [timestampProducer(TextInput.TextInput, { label: "Input Label", placeholder: "Placeholder text", description: "Descriptions give context for the input.", errorMessage: "Error messages communicate invalid states." }), timestampProducer(TextArea.TextArea, { label: "Text Area", maxLength: 100, placeholder: "Multiline inputs use TextArea" }), timestampProducer(TextInput.TextInput, { label: "Password", secureTextEntry: true, placeholder: "Password", clearable: true }), timestampProducer(TextInput.TextInput, { label: "Required Field", placeholder: "Placeholder", description: "Required inputs are indicated with an asterisk.", required: true })];
  obj3.children = items;
  const items1 = [metroImportDefault(Sample, obj3), timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Sizing" }), timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant." }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { children: null };
  const items2 = [timestampProducer(TextInput.TextInput, { label: "Small", size: "sm" }), timestampProducer(TextInput.TextInput, { label: "Medium", size: "md" }), timestampProducer(TextInput.TextInput, { label: "Large (default)" })];
  obj4.children = items2;
  items1[3] = metroImportDefault(Sample, obj4);
  items1[4] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Attachments" });
  items1[5] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence." });
  const obj5 = { children: null };
  const tmp = closure_8();
  const items3 = [timestampProducer(TextInput.TextInput, { label: "Leading icon", leadingIcon: TextIcon.TextIcon }), , , ];
  const obj6 = { label: "Leading icon", leadingIcon: TextIcon.TextIcon };
  items3[1] = timestampProducer(TextInput.TextInput, { label: "Trailing icon", trailingIcon: TextIcon.TextIcon });
  items3[2] = timestampProducer(TextInput.TextInput, { label: "Leading text", leadingText: "To:" });
  const obj7 = { label: "Trailing icon", trailingIcon: TextIcon.TextIcon };
  items3[3] = timestampProducer(TextInput.TextInput, { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon });
  obj5.children = items3;
  items1[6] = metroImportDefault(Sample, obj5);
  items1[7] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing." });
  items1[8] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Pressable Attachments" });
  items1[9] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it." });
  const obj8 = { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon };
  items1[10] = timestampProducer(Sample, { children: timestampProducer(CustomAttachmentExample, {}) });
  items1[11] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself." });
  items1[12] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Rounding" });
  items1[13] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "All inputs except TextArea can use the round prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton." });
  const obj10 = { children: null };
  const obj11 = { children: null };
  const items4 = [timestampProducer(Search_SearchBar.SearchBar, { size: "md", round: true }), ];
  const obj9 = { children: timestampProducer(CustomAttachmentExample, {}) };
  items4[1] = timestampProducer(IconButton.IconButton, {
    icon: timestampProducer(SettingsIcon.SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  });
  obj11.children = items4;
  obj10.children = metroImportDefault(Input.Input, obj11);
  items1[14] = timestampProducer(Sample, obj10);
  items1[15] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Error States" });
  items1[16] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "The status prop communicates the overall state of the input. Setting status to \"error\" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status." });
  const obj13 = { children: null };
  const items5 = [timestampProducer(InputUsername, { defaultValue: "a space" }), timestampProducer(TextArea.TextArea, { label: "About me", maxLength: 100, placeholder: "Long form text use TextArea", errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text" })];
  obj13.children = items5;
  items1[17] = metroImportDefault(Sample, obj13);
  items1[18] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Clearable" });
  items1[19] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Inputs can use the clearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value." });
  const obj12 = {
    icon: timestampProducer(SettingsIcon.SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  };
  items1[20] = timestampProducer(Sample, { children: timestampProducer(TextField.TextField, { defaultValue: "Clear this text", clearable: true }) });
  items1[21] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Certain input types automatically control the clearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present." });
  items1[22] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Revealable" });
  items1[23] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Inputs with secureTextEntry can use the revealable prop to add a button that shows or hides the value. The button replaces the trailing attachment and the clear button." });
  const obj14 = { children: timestampProducer(TextField.TextField, { defaultValue: "Clear this text", clearable: true }) };
  items1[24] = timestampProducer(Sample, { children: timestampProducer(TextInput.TextInput, { label: "Password", secureTextEntry: true, revealable: true, defaultValue: "Hunter2-example!" }) });
  items1[25] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Disableable" });
  items1[26] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  const obj15 = { children: timestampProducer(TextInput.TextInput, { label: "Password", secureTextEntry: true, revealable: true, defaultValue: "Hunter2-example!" }) };
  items1[27] = timestampProducer(Sample, { children: timestampProducer(TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }) });
  items1[28] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  items1[29] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Max Length" });
  items1[30] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up." });
  const obj16 = { children: timestampProducer(TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }) };
  items1[31] = timestampProducer(Sample, { children: timestampProducer(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) });
  items1[32] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length." });
  items1[33] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Ghost Inputs (Deprecated)" });
  items1[34] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area." });
  const obj18 = {
    children: timestampProducer(components_Button_Button.Button, {
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_12), "ghost-input-sheet");
      },
      text: "Show example"
    })
  };
  items1[35] = timestampProducer(Sample, obj18);
  items1[36] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "GhostInputs can also appear left-aligned by setting `centered` to false." });
  const obj20 = {
    children: timestampProducer(components_Button_Button.Button, {
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_13), "ghost-input-sheet-left");
      },
      text: "Show left-aligned example"
    })
  };
  items1[37] = timestampProducer(Sample, obj20);
  items1[38] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Split Text Input" });
  items1[39] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value." });
  const obj22 = { children: null };
  const items6 = [timestampProducer(SplitTextInput.SplitTextInput, { label: "Small", size: "sm", placeholder: "Placeholder", leadingText: "Click", leadingPressableProps: { accessibilityLabel: "Click" } }), timestampProducer(SplitTextInput.SplitTextInput, { label: "Medium", size: "md", placeholder: "Placeholder", leadingText: "Me", leadingPressableProps: { accessibilityLabel: "Me" } }), timestampProducer(SplitTextInput.SplitTextInput, { label: "Large", size: "lg", placeholder: "Placeholder", leadingText: "Here", leadingPressableProps: { accessibilityLabel: "Here" } })];
  obj22.children = items6;
  items1[40] = metroImportDefault(Sample, obj22);
  items1[41] = timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: "Data Types" });
  items1[42] = timestampProducer(Text_Text.Text, { variant: "body-md/normal", children: "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented." });
  obj2.children = items1;
  obj.children = metroImportDefault(Stack_Stack.Stack, obj2);
  return timestampProducer(ScrollView, obj);
};