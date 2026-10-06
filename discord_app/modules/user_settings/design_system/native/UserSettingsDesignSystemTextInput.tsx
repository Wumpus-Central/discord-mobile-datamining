// === Module 15682: UserSettingsDesignSystemTextInput ===

// Module 15682 (UserSettingsDesignSystemTextInput)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import TextIcon from "TextIcon" /* 5871 */;
import AtIcon from "AtIcon" /* 5881 */;
import Card_Card from "Card/Card" /* 6002 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6105 */;
import TextField from "TextField" /* 6107 */;
import Input2 from "Input" /* 6430 */;
import SplitTextInput from "SplitTextInput" /* 6461 */;
import SearchField from "SearchField" /* 6554 */;
import TextArea from "TextArea" /* 6587 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6651 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import SettingsIcon from "SettingsIcon" /* 6893 */;
import IconButton2 from "IconButton" /* 7586 */;
import GhostInput2 from "GhostInput" /* 14285 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, children, defaultValue;

let metroImportDefault;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { padding: 16 }, sample: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  children = children.children;
  const tmp4 = closure_8();
  if (cResult[0] !== children) {
    const obj2 = { spacing: 24, children };
    const tmp7 = metroRequire(Stack_Stack.Stack, obj2);
    cResult[0] = children;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.sample) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { shadow: "low", style: tmp4.sample, children: tmp5 };
  const tmp9 = metroRequire(Card_Card.Card, obj3);
  cResult[2] = tmp4.sample;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((children) => {
  children = children.children;
  const obj = { shadow: "low", style: closure_8().sample, children: metroRequire(Stack_Stack.Stack, { spacing: 24, children }) };
  const Card = Card_Card.Card;
  return metroRequire(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((defaultValue) => {
  let closure_129_0;
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(5);
  defaultValue = defaultValue.defaultValue;
  let hasItem;
  const useState = react.useState;
  if (defaultValue != null) {
    let str = " ";
    hasItem = defaultValue.includes(" ");
  }
  let str2 = "default";
  if (hasItem) {
    str2 = "error";
  }
  [tmp7, closure_129_0] = useState(str2);
  _slicedToArray(useState(str2), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arr) {
      let str = "default";
      if (arr.includes(" ")) {
        str = "error";
      }
      closure_1_0(str);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let str3;
  if ("error" === tmp7) {
    str3 = "Username can't contain spaces";
  }
  if (cResult[1] === defaultValue) {
    if (cResult[2] === tmp7) {
      let tmp9;
      if (cResult[3] === str3) {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  }
  const obj2 = { status: tmp7, errorMessage: str3, label: "Username", leadingIcon: AtIcon.AtIcon, onChange: first };
  const TextInput = TextInput_TextInput.TextInput;
  const merged = Object.assign(defaultValue);
  const tmp11 = metroRequire(TextInput, obj2);
  cResult[1] = defaultValue;
  cResult[2] = tmp7;
  cResult[3] = str3;
  cResult[4] = tmp11;
  tmp9 = tmp11;
}) : ((defaultValue) => {
  let closure_129_0;
  let str3;
  let tmp4;
  defaultValue = defaultValue.defaultValue;
  let hasItem;
  const useState = react.useState;
  if (defaultValue != null) {
    let str = " ";
    hasItem = defaultValue.includes(" ");
  }
  let str2 = "default";
  if (hasItem) {
    str2 = "error";
  }
  [tmp4, closure_129_0] = useState(str2);
  const obj = {
    status: tmp4,
    errorMessage: str3,
    label: "Username",
    leadingIcon: AtIcon.AtIcon,
    onChange(arr) {
      let str = "default";
      if (arr.includes(" ")) {
        str = "error";
      }
      closure_1_0(str);
    }
  };
  _slicedToArray(useState(str2), 2);
  const TextInput = TextInput_TextInput.TextInput;
  const merged = Object.assign(defaultValue);
  str3 = undefined;
  if ("error" === tmp4) {
    str3 = "Username can't contain spaces";
  }
  return metroRequire(TextInput, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((defaultValue) => {
  let closure_129_0;
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(5);
  defaultValue = defaultValue.defaultValue;
  let hasItem;
  const useState = react.useState;
  if (defaultValue != null) {
    let str = " ";
    hasItem = defaultValue.includes(" ");
  }
  let str2 = "default";
  if (hasItem) {
    str2 = "error";
  }
  [tmp7, closure_129_0] = useState(str2);
  _slicedToArray(useState(str2), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arr) {
      let str = "default";
      if (arr.includes(" ")) {
        str = "error";
      }
      closure_1_0(str);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let str3;
  if ("error" === tmp7) {
    str3 = "Username can't contain spaces";
  }
  if (cResult[1] === defaultValue) {
    if (cResult[2] === tmp7) {
      let tmp9;
      if (cResult[3] === str3) {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  }
  const obj2 = { status: tmp7, errorMessage: str3, onChange: first };
  const GhostInput = GhostInput2.GhostInput;
  const merged = Object.assign(defaultValue);
  const tmp11 = metroRequire(GhostInput, obj2);
  cResult[1] = defaultValue;
  cResult[2] = tmp7;
  cResult[3] = str3;
  cResult[4] = tmp11;
  tmp9 = tmp11;
}) : ((defaultValue) => {
  let closure_129_0;
  let str3;
  let tmp4;
  defaultValue = defaultValue.defaultValue;
  let hasItem;
  const useState = react.useState;
  if (defaultValue != null) {
    let str = " ";
    hasItem = defaultValue.includes(" ");
  }
  let str2 = "default";
  if (hasItem) {
    str2 = "error";
  }
  [tmp4, closure_129_0] = useState(str2);
  const obj = {
    status: tmp4,
    errorMessage: str3,
    onChange(arr) {
      let str = "default";
      if (arr.includes(" ")) {
        str = "error";
      }
      closure_1_0(str);
    }
  };
  _slicedToArray(useState(str2), 2);
  const GhostInput = GhostInput2.GhostInput;
  const merged = Object.assign(defaultValue);
  str3 = undefined;
  if ("error" === tmp4) {
    str3 = "Username can't contain spaces";
  }
  return metroRequire(GhostInput, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let obj5;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = metroRequire(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Centered" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { padding: 12 };
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { children: items };
    items = [first, ];
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    const obj4 = { style: tmp7, children: metroRequire(closure_9, obj5) };
    obj5 = { children: metroRequire(closure_11, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters" }) };
    const Stack = Stack_Stack.Stack;
    items[1] = metroRequire(Stack, obj4);
    const tmp13 = metroImportDefault(BottomSheet, obj3);
    cResult[2] = tmp13;
    tmp8 = tmp13;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  let items;
  let obj3;
  const obj = { children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [metroRequire(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Centered" }), ];
  const obj2 = { style: { padding: 12 }, children: metroRequire(closure_9, obj3) };
  obj3 = { children: metroRequire(closure_11, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters" }) };
  const Stack = Stack_Stack.Stack;
  items[1] = metroRequire(Stack, obj2);
  return metroImportDefault(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let obj5;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = metroRequire(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Left Aligned" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { padding: 12 };
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { children: items };
    items = [first, ];
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    const obj4 = { style: tmp7, children: metroRequire(closure_9, obj5) };
    obj5 = { children: metroRequire(closure_11, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters", centered: false, size: "md" }) };
    const Stack = Stack_Stack.Stack;
    items[1] = metroRequire(Stack, obj4);
    const tmp13 = metroImportDefault(BottomSheet, obj3);
    cResult[2] = tmp13;
    tmp8 = tmp13;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  let items;
  let obj3;
  const obj = { children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [metroRequire(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Left Aligned" }), ];
  const obj2 = { style: { padding: 12 }, children: metroRequire(closure_9, obj3) };
  obj3 = { children: metroRequire(closure_11, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters", centered: false, size: "md" }) };
  const Stack = Stack_Stack.Stack;
  items[1] = metroRequire(Stack, obj2);
  return metroImportDefault(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_0;
  let closure_129_1;
  let first;
  let tmp5;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(6);
  [tmp5, closure_129_0] = react.useState("default");
  _slicedToArray(react.useState("default"), 2);
  [tmp7, closure_129_1] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arr) {
      closure_1_1(arr);
      let str = "default";
      if (arr.includes(" ")) {
        str = "error";
      }
      closure_1_0(str);
    };
    cResult[0] = fn;
    first = fn;
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
          return closure_1_1("You pressed the icon");
        },
      accessibilityLabel: "Press"
    };
    cResult[1] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === str) {
      let tmp10;
      if (cResult[4] === tmp7) {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
  }
  const obj3 = { status: tmp5, errorMessage: str, label: "Pressable Attachment", value: tmp7, trailingPressableProps: tmp9, trailingIcon: AtIcon.AtIcon, onChange: first };
  const TextInput = TextInput_TextInput.TextInput;
  const tmp11 = metroRequire(TextInput, obj3);
  cResult[2] = tmp5;
  cResult[3] = str;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let closure_129_0;
  let closure_129_1;
  let str;
  let tmp2;
  let tmp4;
  [tmp2, closure_129_0] = _slicedToArray(react.useState("default"), 2);
  const tmp = _slicedToArray(react.useState("default"), 2);
  [tmp4, closure_129_1] = react.useState("");
  const obj = {
    status: tmp2,
    errorMessage: str,
    label: "Pressable Attachment",
    value: tmp4,
    trailingPressableProps: {
      onPress() {
        return closure_1_1("You pressed the icon");
      },
      accessibilityLabel: "Press"
    },
    trailingIcon: AtIcon.AtIcon,
    onChange(arr) {
      closure_1_1(arr);
      let str = "default";
      if (arr.includes(" ")) {
        str = "error";
      }
      closure_1_0(str);
    }
  };
  str = undefined;
  _slicedToArray(react.useState(""), 2);
  const TextInput = TextInput_TextInput.TextInput;
  if ("error" === tmp2) {
    str = "Username can't contain spaces";
  }
  return metroRequire(TextInput, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Input;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj17;
  let obj19;
  let obj25;
  let tmp100;
  let tmp101;
  let tmp106;
  let tmp107;
  let tmp108;
  let tmp114;
  let tmp117;
  let tmp120;
  let tmp121;
  let tmp122;
  let tmp129;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp45;
  let tmp48;
  let tmp5;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp6;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp7;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let obj = react2;
  const cResult = obj.c(46);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: items };
    items = [metroRequire(TextInput_TextInput.TextInput, { label: "Input Label", placeholder: "Placeholder text", description: "Descriptions give context for the input.", errorMessage: "Error messages communicate invalid states." }), metroRequire(TextArea.TextArea, { label: "Text Area", maxLength: 100, placeholder: "Multiline inputs use TextArea" }), metroRequire(TextInput_TextInput.TextInput, { label: "Password", secureTextEntry: true, placeholder: "Password", clearable: true }), metroRequire(TextInput_TextInput.TextInput, { label: "Required Field", placeholder: "Placeholder", description: "Required inputs are indicated with an asterisk.", required: true })];
    const tmp11 = metroImportDefault(closure_9, obj2);
    const tmp12 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Sizing" });
    const tmp13 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant." });
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
    const obj3 = { children: items1 };
    items1 = [metroRequire(TextInput_TextInput.TextInput, { label: "Small", size: "sm" }), metroRequire(TextInput_TextInput.TextInput, { label: "Medium", size: "md" }), metroRequire(TextInput_TextInput.TextInput, { label: "Large (default)" })];
    const tmp20 = metroImportDefault(closure_9, obj3);
    const tmp21 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Attachments" });
    const tmp22 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence." });
    cResult[3] = tmp20;
    cResult[4] = tmp21;
    cResult[5] = tmp22;
    tmp16 = tmp22;
    tmp15 = tmp21;
    tmp14 = tmp20;
  } else {
    tmp14 = cResult[3];
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { children: items2 };
    const obj5 = { label: "Leading icon", leadingIcon: TextIcon.TextIcon };
    const TextInput = TextInput_TextInput.TextInput;
    items2 = [metroRequire(TextInput, obj5), , , ];
    const obj6 = { label: "Trailing icon", trailingIcon: TextIcon.TextIcon };
    const TextInput2 = TextInput_TextInput.TextInput;
    items2[1] = metroRequire(TextInput2, obj6);
    items2[2] = metroRequire(TextInput_TextInput.TextInput, { label: "Leading text", leadingText: "To:" });
    const obj7 = { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon };
    const TextInput3 = TextInput_TextInput.TextInput;
    items2[3] = metroRequire(TextInput3, obj7);
    const tmp30 = metroImportDefault(closure_9, obj4);
    const tmp31 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing." });
    const tmp32 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Pressable Attachments" });
    const tmp33 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it." });
    cResult[6] = tmp30;
    cResult[7] = tmp31;
    cResult[8] = tmp32;
    cResult[9] = tmp33;
    tmp26 = tmp33;
    tmp25 = tmp32;
    tmp24 = tmp31;
    tmp23 = tmp30;
  } else {
    tmp23 = cResult[6];
    tmp24 = cResult[7];
    tmp25 = cResult[8];
    tmp26 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { children: metroRequire(closure_14, {}) };
    const tmp41 = metroRequire(closure_9, obj8);
    const tmp42 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself." });
    const tmp43 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Rounding" });
    const tmp44 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea can use the round prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton." });
    cResult[10] = tmp41;
    cResult[11] = tmp42;
    cResult[12] = tmp43;
    cResult[13] = tmp44;
    tmp37 = tmp44;
    tmp36 = tmp43;
    tmp35 = tmp42;
    tmp34 = tmp41;
  } else {
    tmp34 = cResult[10];
    tmp35 = cResult[11];
    tmp36 = cResult[12];
    tmp37 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp47 = metroRequire(SearchField.SearchField, { size: "md", round: true });
    cResult[14] = tmp47;
    tmp45 = tmp47;
  } else {
    tmp45 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp50 = metroRequire(SettingsIcon.SettingsIcon, { size: "sm" });
    cResult[15] = tmp50;
    tmp48 = tmp50;
  } else {
    tmp48 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { children: metroImportDefault(Input, obj10) };
    obj10 = { children: items3 };
    items3 = [tmp45, ];
    Input = Input2.Input;
    const obj11 = {
      icon: tmp48,
      accessibilityLabel: "Settings",
      onPress() {
          return null;
        },
      variant: "tertiary"
    };
    items3[1] = metroRequire(IconButton2.IconButton, obj11);
    const tmp57 = metroRequire(closure_9, obj9);
    const tmp58 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Error States" });
    const tmp59 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The status prop communicates the overall state of the input. Setting status to \"error\" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status." });
    cResult[16] = tmp57;
    cResult[17] = tmp58;
    cResult[18] = tmp59;
    tmp53 = tmp59;
    tmp52 = tmp58;
    tmp51 = tmp57;
  } else {
    tmp51 = cResult[16];
    tmp52 = cResult[17];
    tmp53 = cResult[18];
  }
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const obj12 = { children: items4 };
    items4 = [metroRequire(closure_10, { defaultValue: "a space" }), metroRequire(TextArea.TextArea, { label: "About me", maxLength: 100, placeholder: "Long form text use TextArea", errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text" })];
    const tmp67 = metroImportDefault(closure_9, obj12);
    const tmp68 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Clearable" });
    const tmp69 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can use the clearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value." });
    cResult[19] = tmp67;
    cResult[20] = tmp68;
    cResult[21] = tmp69;
    tmp62 = tmp69;
    tmp61 = tmp68;
    tmp60 = tmp67;
  } else {
    tmp60 = cResult[19];
    tmp61 = cResult[20];
    tmp62 = cResult[21];
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { children: metroRequire(TextField.TextField, { defaultValue: "Clear this text", clearable: true }) };
    const tmp76 = metroRequire(closure_9, obj13);
    const tmp77 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Certain input types automatically control the clearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present." });
    const tmp78 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Disableable" });
    const tmp79 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
    cResult[22] = tmp76;
    cResult[23] = tmp77;
    cResult[24] = tmp78;
    cResult[25] = tmp79;
    tmp73 = tmp79;
    tmp72 = tmp78;
    tmp71 = tmp77;
    tmp70 = tmp76;
  } else {
    tmp70 = cResult[22];
    tmp71 = cResult[23];
    tmp72 = cResult[24];
    tmp73 = cResult[25];
  }
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    const obj14 = { children: metroRequire(TextInput_TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }) };
    const tmp86 = metroRequire(closure_9, obj14);
    const tmp87 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
    const tmp88 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Max Length" });
    const tmp89 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up." });
    cResult[26] = tmp86;
    cResult[27] = tmp87;
    cResult[28] = tmp88;
    cResult[29] = tmp89;
    tmp83 = tmp89;
    tmp82 = tmp88;
    tmp81 = tmp87;
    tmp80 = tmp86;
  } else {
    tmp80 = cResult[26];
    tmp81 = cResult[27];
    tmp82 = cResult[28];
    tmp83 = cResult[29];
  }
  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
    const obj15 = { children: metroRequire(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) };
    const tmp96 = metroRequire(closure_9, obj15);
    const tmp97 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length." });
    const tmp98 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Ghost Inputs (Deprecated)" });
    const tmp99 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area." });
    cResult[30] = tmp96;
    cResult[31] = tmp97;
    cResult[32] = tmp98;
    cResult[33] = tmp99;
    tmp93 = tmp99;
    tmp92 = tmp98;
    tmp91 = tmp97;
    tmp90 = tmp96;
  } else {
    tmp90 = cResult[30];
    tmp91 = cResult[31];
    tmp92 = cResult[32];
    tmp93 = cResult[33];
  }
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    const obj16 = { children: metroRequire(components_Button_Button.Button, obj17) };
    obj17 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(() => Promise.resolve(closure_1_12), "ghost-input-sheet");
        },
      text: "Show example"
    };
    const tmp104 = metroRequire(closure_9, obj16);
    const tmp105 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "GhostInputs can also appear left-aligned by setting `centered` to false." });
    cResult[34] = tmp104;
    cResult[35] = tmp105;
    tmp101 = tmp105;
    tmp100 = tmp104;
  } else {
    tmp100 = cResult[34];
    tmp101 = cResult[35];
  }
  if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
    const obj18 = { children: metroRequire(components_Button_Button.Button, obj19) };
    obj19 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(() => Promise.resolve(closure_1_13), "ghost-input-sheet-left");
        },
      text: "Show left-aligned example"
    };
    const tmp111 = metroRequire(closure_9, obj18);
    const tmp112 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Split Text Input" });
    const tmp113 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value." });
    cResult[36] = tmp111;
    cResult[37] = tmp112;
    cResult[38] = tmp113;
    tmp108 = tmp113;
    tmp107 = tmp112;
    tmp106 = tmp111;
  } else {
    tmp106 = cResult[36];
    tmp107 = cResult[37];
    tmp108 = cResult[38];
  }
  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
    const obj20 = { label: "Small", size: "sm", placeholder: "Placeholder", leadingText: "Click", leadingPressableProps: { accessibilityLabel: "Click" } };
    const tmp116 = metroRequire(SplitTextInput.SplitTextInput, obj20);
    cResult[39] = tmp116;
    tmp114 = tmp116;
  } else {
    tmp114 = cResult[39];
  }
  if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
    const obj21 = { label: "Medium", size: "md", placeholder: "Placeholder", leadingText: "Me", leadingPressableProps: { accessibilityLabel: "Me" } };
    const tmp119 = metroRequire(SplitTextInput.SplitTextInput, obj21);
    cResult[40] = tmp119;
    tmp117 = tmp119;
  } else {
    tmp117 = cResult[40];
  }
  if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
    const obj22 = { children: items5 };
    items5 = [tmp114, tmp117, ];
    const obj23 = { label: "Large", size: "lg", placeholder: "Placeholder", leadingText: "Here", leadingPressableProps: { accessibilityLabel: "Here" } };
    items5[2] = metroRequire(SplitTextInput.SplitTextInput, obj23);
    const tmp126 = metroImportDefault(closure_9, obj22);
    const tmp127 = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Data Types" });
    const tmp128 = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented." });
    cResult[41] = tmp126;
    cResult[42] = tmp127;
    cResult[43] = tmp128;
    tmp122 = tmp128;
    tmp121 = tmp127;
    tmp120 = tmp126;
  } else {
    tmp120 = cResult[41];
    tmp121 = cResult[42];
    tmp122 = cResult[43];
  }
  if (cResult[44] !== tmp4.container) {
    const obj24 = { children: metroImportDefault(Stack_Stack.Stack, obj25) };
    obj25 = { spacing: 24, style: tmp4.container, children: items6 };
    items6 = [tmp5, tmp6, tmp7, tmp14, tmp15, tmp16, tmp23, tmp24, tmp25, tmp26, tmp34, tmp35, tmp36, tmp37, tmp51, tmp52, tmp53, tmp60, tmp61, tmp62, tmp70, tmp71, tmp72, tmp73, tmp80, tmp81, tmp82, tmp83, tmp90, tmp91, tmp92, tmp93, tmp100, tmp101, tmp106, tmp107, tmp108, tmp120, tmp121, tmp122];
    const tmp133 = metroRequire(ScrollView, obj24);
    cResult[44] = tmp4.container;
    cResult[45] = tmp133;
    tmp129 = tmp133;
  } else {
    tmp129 = cResult[45];
  }
  return tmp129;
}) : (() => {
  let Input;
  let Stack;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj18;
  let obj2;
  let obj20;
  let obj = { children: metroImportDefault(Stack, obj2) };
  obj2 = { spacing: 24, style: closure_8().container, children: items1 };
  const obj3 = { children: items };
  Stack = Stack_Stack.Stack;
  items = [metroRequire(TextInput_TextInput.TextInput, { label: "Input Label", placeholder: "Placeholder text", description: "Descriptions give context for the input.", errorMessage: "Error messages communicate invalid states." }), metroRequire(TextArea.TextArea, { label: "Text Area", maxLength: 100, placeholder: "Multiline inputs use TextArea" }), metroRequire(TextInput_TextInput.TextInput, { label: "Password", secureTextEntry: true, placeholder: "Password", clearable: true }), metroRequire(TextInput_TextInput.TextInput, { label: "Required Field", placeholder: "Placeholder", description: "Required inputs are indicated with an asterisk.", required: true })];
  items1 = [metroImportDefault(closure_9, obj3), metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Sizing" }), metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant." }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { children: items2 };
  items2 = [metroRequire(TextInput_TextInput.TextInput, { label: "Small", size: "sm" }), metroRequire(TextInput_TextInput.TextInput, { label: "Medium", size: "md" }), metroRequire(TextInput_TextInput.TextInput, { label: "Large (default)" })];
  items1[3] = metroImportDefault(closure_9, obj4);
  items1[4] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Attachments" });
  items1[5] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence." });
  const obj5 = { children: items3 };
  const obj6 = { label: "Leading icon", leadingIcon: TextIcon.TextIcon };
  const TextInput = TextInput_TextInput.TextInput;
  items3 = [metroRequire(TextInput, obj6), , , ];
  const obj7 = { label: "Trailing icon", trailingIcon: TextIcon.TextIcon };
  const TextInput2 = TextInput_TextInput.TextInput;
  items3[1] = metroRequire(TextInput2, obj7);
  items3[2] = metroRequire(TextInput_TextInput.TextInput, { label: "Leading text", leadingText: "To:" });
  const obj8 = { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon };
  const TextInput3 = TextInput_TextInput.TextInput;
  items3[3] = metroRequire(TextInput3, obj8);
  items1[6] = metroImportDefault(closure_9, obj5);
  items1[7] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing." });
  items1[8] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Pressable Attachments" });
  items1[9] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it." });
  const obj9 = { children: metroRequire(closure_14, {}) };
  items1[10] = metroRequire(closure_9, obj9);
  items1[11] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself." });
  items1[12] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Rounding" });
  items1[13] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea can use the round prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton." });
  const obj10 = { children: metroImportDefault(Input, obj11) };
  obj11 = { children: items4 };
  Input = Input2.Input;
  items4 = [metroRequire(SearchField.SearchField, { size: "md", round: true }), ];
  const obj12 = {
    icon: metroRequire(SettingsIcon.SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  };
  const IconButton = IconButton2.IconButton;
  items4[1] = metroRequire(IconButton, obj12);
  items1[14] = metroRequire(closure_9, obj10);
  items1[15] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Error States" });
  items1[16] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The status prop communicates the overall state of the input. Setting status to \"error\" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status." });
  const obj13 = { children: items5 };
  items5 = [metroRequire(closure_10, { defaultValue: "a space" }), metroRequire(TextArea.TextArea, { label: "About me", maxLength: 100, placeholder: "Long form text use TextArea", errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text" })];
  items1[17] = metroImportDefault(closure_9, obj13);
  items1[18] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Clearable" });
  items1[19] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can use the clearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value." });
  const obj14 = { children: metroRequire(TextField.TextField, { defaultValue: "Clear this text", clearable: true }) };
  items1[20] = metroRequire(closure_9, obj14);
  items1[21] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Certain input types automatically control the clearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present." });
  items1[22] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Disableable" });
  items1[23] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  const obj15 = { children: metroRequire(TextInput_TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }) };
  items1[24] = metroRequire(closure_9, obj15);
  items1[25] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  items1[26] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Max Length" });
  items1[27] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up." });
  const obj16 = { children: metroRequire(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) };
  items1[28] = metroRequire(closure_9, obj16);
  items1[29] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length." });
  items1[30] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Ghost Inputs (Deprecated)" });
  items1[31] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area." });
  const obj17 = { children: metroRequire(components_Button_Button.Button, obj18) };
  obj18 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_12), "ghost-input-sheet");
    },
    text: "Show example"
  };
  items1[32] = metroRequire(closure_9, obj17);
  items1[33] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "GhostInputs can also appear left-aligned by setting `centered` to false." });
  const obj19 = { children: metroRequire(components_Button_Button.Button, obj20) };
  obj20 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_13), "ghost-input-sheet-left");
    },
    text: "Show left-aligned example"
  };
  items1[34] = metroRequire(closure_9, obj19);
  items1[35] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Split Text Input" });
  items1[36] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value." });
  const obj21 = { children: items6 };
  items6 = [metroRequire(SplitTextInput.SplitTextInput, { label: "Small", size: "sm", placeholder: "Placeholder", leadingText: "Click", leadingPressableProps: { accessibilityLabel: "Click" } }), metroRequire(SplitTextInput.SplitTextInput, { label: "Medium", size: "md", placeholder: "Placeholder", leadingText: "Me", leadingPressableProps: { accessibilityLabel: "Me" } }), metroRequire(SplitTextInput.SplitTextInput, { label: "Large", size: "lg", placeholder: "Placeholder", leadingText: "Here", leadingPressableProps: { accessibilityLabel: "Here" } })];
  items1[37] = metroImportDefault(closure_9, obj21);
  items1[38] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Data Types" });
  items1[39] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented." });
  return metroRequire(ScrollView, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx");

export default tmp3;