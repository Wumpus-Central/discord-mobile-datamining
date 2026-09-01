// === Module 15383: Sample ===

// Module 15383 (Sample)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4474 */;
import Stack from "Stack" /* 4926 */;
import Button from "Button" /* 4928 */;
import TextIcon from "TextIcon" /* 5029 */;
import AtIcon from "AtIcon" /* 5039 */;
import PressableCard from "PressableCard" /* 5601 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5621 */;
import Background from "Background" /* 5622 */;
import SearchField from "SearchField" /* 6221 */;
import TextField from "TextField" /* 6222 */;
import SettingsIcon from "SettingsIcon" /* 6240 */;
import TextInput from "TextInput" /* 7705 */;
import Input from "Input" /* 7706 */;
import SplitTextInput from "SplitTextInput" /* 7739 */;
import TextArea from "TextArea" /* 7808 */;
import IconButton from "IconButton" /* 8006 */;
import GhostInput from "GhostInput" /* 13813 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function Sample(children) {
  const tmp = callback4();
  return callback2(PressableCard.Card, { shadow: "low", style: callback4().sample, children: callback2(Stack.Stack, { spacing: 24, children: children.children }) });
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
  [tmp4, require] = callback(React.useState(str2), 2);
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
    closure_0(str);
  };
  return closure_6(TextInput.TextInput, obj);
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
  [tmp4, require] = callback(React.useState(str2), 2);
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
    closure_0(str);
  };
  return closure_6(GhostInput.GhostInput, obj);
}
function GhostInputActionSheet() {
  let obj = { children: null };
  const items = [callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Ghost Input - Centered" }), ];
  obj = { style: { padding: 12 }, children: null };
  obj = { children: callback2(GhostInputUsername, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters" }) };
  obj[1] = callback2(Sample, obj);
  items[1] = callback2(Stack.Stack, obj);
  obj[0] = items;
  return callback3(Background.BottomSheet, obj);
}
function GhostInputActionSheetLeftAligned() {
  let obj = { children: null };
  const items = [callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Ghost Input - Left Aligned" }), ];
  obj = { style: { padding: 12 }, children: null };
  obj = { children: callback2(GhostInputUsername, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters", isCentered: false, size: "md" }) };
  obj[1] = callback2(Sample, obj);
  items[1] = callback2(Stack.Stack, obj);
  obj[0] = items;
  return callback3(Background.BottomSheet, obj);
}
function CustomAttachmentExample() {
  [tmp2, require] = callback(React.useState("default"), 2);
  const tmp = callback(React.useState("default"), 2);
  [tmp4, importDefault] = callback(React.useState(""), 2);
  const obj = { status: tmp2, errorMessage: null, label: "Pressable Attachment", value: null, trailingPressableProps: null, trailingIcon: null, onChange: null };
  let str;
  if ("error" === tmp2) {
    str = "Username can't contain spaces";
  }
  obj[1] = str;
  obj[3] = tmp4;
  obj[4] = {
    onPress() {
      return callback("You pressed the icon");
    },
    accessibilityLabel: "Press"
  };
  obj[5] = AtIcon.AtIcon;
  obj[6] = function onChange(arr) {
    callback(arr);
    let str = "default";
    if (arr.includes(" ")) {
      str = "error";
    }
    closure_0(str);
  };
  return closure_6(TextInput.TextInput, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { padding: 16 }, sample: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.xl };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx");

export default function UserSettingsDesignSystemTextInput() {
  let obj = { children: null };
  obj = { spacing: 24, style: callback4().container, children: null };
  obj = { children: null };
  const items = [callback2(TextInput.TextInput, { label: "Input Label", placeholder: "Placeholder text", description: "Descriptions give context for the input.", errorMessage: "Error messages communicate invalid states." }), callback2(TextArea.TextArea, { label: "Text Area", maxLength: 100, placeholder: "Multiline inputs use TextArea" }), callback2(TextInput.TextInput, { label: "Password", secureTextEntry: true, placeholder: "Password", isClearable: true }), callback2(TextInput.TextInput, { label: "Required Field", placeholder: "Placeholder", description: "Required inputs are indicated with an asterisk.", required: true })];
  obj[0] = items;
  const items1 = [callback3(Sample, obj), callback2(Text.Text, { variant: "heading-lg/bold", children: "Sizing" }), callback2(Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant." }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj1 = { children: null };
  const items2 = [callback2(TextInput.TextInput, { label: "Small", size: "sm" }), callback2(TextInput.TextInput, { label: "Medium", size: "md" }), callback2(TextInput.TextInput, { label: "Large (default)" })];
  obj1[0] = items2;
  items1[3] = callback3(Sample, obj1);
  items1[4] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Attachments" });
  items1[5] = callback2(Text.Text, { variant: "text-md/normal", children: "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence." });
  const obj2 = { children: null };
  const tmp = callback4();
  const items3 = [callback2(TextInput.TextInput, { label: "Leading icon", leadingIcon: TextIcon.TextIcon }), , , ];
  const obj3 = { label: "Leading icon", leadingIcon: TextIcon.TextIcon };
  items3[1] = callback2(TextInput.TextInput, { label: "Trailing icon", trailingIcon: TextIcon.TextIcon });
  items3[2] = callback2(TextInput.TextInput, { label: "Leading text", leadingText: "To:" });
  const obj4 = { label: "Trailing icon", trailingIcon: TextIcon.TextIcon };
  items3[3] = callback2(TextInput.TextInput, { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon });
  obj2[0] = items3;
  items1[6] = callback3(Sample, obj2);
  items1[7] = callback2(Text.Text, { variant: "text-md/normal", children: "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing." });
  items1[8] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Pressable Attachments" });
  items1[9] = callback2(Text.Text, { variant: "text-md/normal", children: "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it." });
  const obj5 = { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon };
  items1[10] = callback2(Sample, { children: callback2(CustomAttachmentExample, {}) });
  items1[11] = callback2(Text.Text, { variant: "text-md/normal", children: "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself." });
  items1[12] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Rounding" });
  items1[13] = callback2(Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea can use the isRound prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton." });
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items4 = [callback2(SearchField.SearchField, { size: "md", isRound: true }), ];
  const obj6 = { children: callback2(CustomAttachmentExample, {}) };
  items4[1] = callback2(IconButton.IconButton, {
    icon: callback2(SettingsIcon.SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  });
  obj8[0] = items4;
  obj7[0] = callback3(Input.Input, obj8);
  items1[14] = callback2(Sample, obj7);
  items1[15] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Error States" });
  items1[16] = callback2(Text.Text, { variant: "text-md/normal", children: "The status prop communicates the overall state of the input. Setting status to \"error\" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status." });
  const obj10 = { children: null };
  const items5 = [callback2(InputUsername, { defaultValue: "a space" }), callback2(TextArea.TextArea, { label: "About me", maxLength: 100, placeholder: "Long form text use TextArea", errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text" })];
  obj10[0] = items5;
  items1[17] = callback3(Sample, obj10);
  items1[18] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Clearable" });
  items1[19] = callback2(Text.Text, { variant: "text-md/normal", children: "Inputs can use the isClearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value." });
  const obj9 = {
    icon: callback2(SettingsIcon.SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  };
  items1[20] = callback2(Sample, { children: callback2(TextField.TextField, { defaultValue: "Clear this text", isClearable: true }) });
  items1[21] = callback2(Text.Text, { variant: "text-md/normal", children: "Certain input types automatically control the isClearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present." });
  items1[22] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Disableable" });
  items1[23] = callback2(Text.Text, { variant: "text-md/normal", children: "The isDisabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  const obj11 = { children: callback2(TextField.TextField, { defaultValue: "Clear this text", isClearable: true }) };
  items1[24] = callback2(Sample, { children: callback2(TextInput.TextInput, { defaultValue: "Can't edit this value", isDisabled: true }) });
  items1[25] = callback2(Text.Text, { variant: "text-md/normal", children: "The isDisabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  items1[26] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Max Length" });
  items1[27] = callback2(Text.Text, { variant: "text-md/normal", children: "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up." });
  const obj12 = { children: callback2(TextInput.TextInput, { defaultValue: "Can't edit this value", isDisabled: true }) };
  items1[28] = callback2(Sample, { children: callback2(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) });
  items1[29] = callback2(Text.Text, { variant: "text-md/normal", children: "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length." });
  items1[30] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Ghost Inputs (Deprecated)" });
  items1[31] = callback2(Text.Text, { variant: "text-md/normal", children: "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area." });
  const obj13 = { children: callback2(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) };
  items1[32] = callback2(Sample, { children: callback2(Button.Button, obj15) });
  items1[33] = callback2(Text.Text, { variant: "text-md/normal", children: "GhostInputs can also appear left-aligned by setting `isCentered` to false." });
  const obj14 = { children: callback2(Button.Button, obj15) };
  items1[34] = callback2(Sample, { children: callback2(Button.Button, obj17) });
  items1[35] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Split Text Input" });
  items1[36] = callback2(Text.Text, { variant: "text-md/normal", children: "SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value." });
  const obj18 = { children: null };
  const items6 = [callback2(SplitTextInput.SplitTextInput, { label: "Small", size: "sm", placeholder: "Placeholder", leadingText: "Click", leadingPressableProps: { accessibilityLabel: "Click" } }), callback2(SplitTextInput.SplitTextInput, { label: "Medium", size: "md", placeholder: "Placeholder", leadingText: "Me", leadingPressableProps: { accessibilityLabel: "Me" } }), callback2(SplitTextInput.SplitTextInput, { label: "Large", size: "lg", placeholder: "Placeholder", leadingText: "Here", leadingPressableProps: { accessibilityLabel: "Here" } })];
  obj18[0] = items6;
  items1[37] = callback3(Sample, obj18);
  items1[38] = callback2(Text.Text, { variant: "heading-lg/bold", children: "Data Types" });
  items1[39] = callback2(Text.Text, { variant: "text-md/normal", children: "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented." });
  obj[2] = items1;
  obj[0] = callback3(Stack.Stack, obj);
  return callback2(ScrollView, obj);
};