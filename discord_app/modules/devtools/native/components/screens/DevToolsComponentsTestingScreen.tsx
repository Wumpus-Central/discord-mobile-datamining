// === Module 15590: DevToolsComponentsTestingScreen ===

// Module 15590 (DevToolsComponentsTestingScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import Server from "Server" /* 1985 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Card_Card from "Card/Card" /* 5995 */;
import ComponentStateContext from "ComponentStateContext" /* 7795 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15591 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15594 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15595 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5114 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_12;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
const ScrollView = react_native.ScrollView;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, contentContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_9 = createStyles(obj);
let obj4 = { type: Server.ComponentType.STRING_SELECT, custom_id: "test", max_values: 1, min_values: 1, placeholder: "Choose...", options: items };
const transformComponents = InteractionComponentUtils.transformComponents;
items = [{ label: "test with a long label", value: "test" }, { label: "test 2 with a long label", value: "test2", description: "with description!" }, { label: "star with a long label", value: "star", emoji: { name: "\u2B50" } }, { label: "advaith", value: "advaith", emoji: { id: "889887673425199124", name: "advaith_anim", animated: true } }];
let items1 = [obj4, ];
let obj5 = { type: Server.ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
items1[1] = obj5;
const transformComponentsResult = transformComponents(items1);
let c10 = transformComponentsResult;
[unpackModuleId, closure_12] = transformComponentsResult;
const modal = "modal";
_slicedToArray(transformComponentsResult, 2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_0;
  let items;
  let items1;
  let title;
  let tmp5;
  let type;
  const obj = react2;
  const cResult = obj.c(20);
  ({ type, title } = arg0);
  [tmp5, closure_129_0] = react.useState(false);
  let num = 1;
  _slicedToArray(react.useState(false), 2);
  if (tmp5) {
    num = 4;
  }
  const StringResult = String(type);
  if (cResult[0] === num) {
    if (cResult[1] === StringResult) {
      let tmp7;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp32Result;
      if (cResult[2] === type) {
        tmp7 = cResult[3];
      }
      const tmpResult = ComponentStateContext;
      const state = tmpResult.useComponentState(tmp7).state;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { gap: 8 };
        cResult[4] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== title) {
        const obj3 = { variant: "heading-lg/medium", children: title };
        const tmp13 = metroImportDefault(Text_Text.Text, obj3);
        cResult[5] = title;
        cResult[6] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp7) {
        let tmp21;
        if (tmp7.type === Server.ComponentType.STRING_SELECT) {
          const obj4 = {};
          const tmp24 = StringSelectActionComponentDefault;
          const merged = Object.assign(tmp9);
          tmp21 = metroImportDefault(tmp24, obj4);
        } else {
          const obj5 = { type: tmp7.type };
          const tmp17 = SearchableSelectActionComponentDefault;
          const merged1 = Object.assign(tmp9);
          tmp21 = metroImportDefault(tmp17, obj5);
        }
        cResult[7] = tmp7;
        cResult[8] = tmp21;
        tmp14 = tmp21;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === tmp7.type) {
        let tmp28;
        if (cResult[10] === state) {
          tmp28 = cResult[11];
        }
        let str4 = "off";
        if (tmp5) {
          str4 = "on";
        }
        const _HermesInternal = HermesInternal;
        const combined = "Toggle Multi Select (" + str4 + ")";
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              return closure_0((arg0) => !arg0);
            }
          }
          cResult[12] = I;
        } else {
          class I {
            constructor() {
              return closure_0((arg0) => !arg0);
            }
          }
        }
        if (cResult[13] !== combined) {
          class I {
            constructor() {
              return closure_0((arg0) => !arg0);
            }
          }
          const obj6 = { text: combined, onPress: I, size: "sm" };
          cResult[13] = combined;
          cResult[14] = metroImportDefault(components_Button_Button.Button, obj6);
          const tmp36 = metroImportDefault(components_Button_Button.Button, obj6);
        } else {
          class I {
            constructor() {
              return closure_0((arg0) => !arg0);
            }
          }
        }
        if (cResult[15] === tmp35) {
          class I {
            constructor() {
              return closure_0((arg0) => !arg0);
            }
          }
        }
        const obj7 = { style: tmp10, children: items };
        items = [tmp11, tmp14, tmp28, tmp35];
        cResult[15] = tmp35;
        cResult[16] = tmp11;
        cResult[17] = tmp14;
        cResult[18] = tmp28;
        cResult[19] = metroImportAll(Card_Card.Card, obj7);
        const tmp39 = metroImportAll(Card_Card.Card, obj7);
      }
      if (state != null) {
        class I {
          constructor() {
            return closure_0((arg0) => !arg0);
          }
        }
      }
      if (undefined === tmp7.type) {
        let mapped;
        class I {
          constructor() {
            return closure_0((arg0) => !arg0);
          }
        }
        const Text = Text_Text.Text;
        if ("values" in state) {
          class I {
            constructor() {
              return closure_0((arg0) => !arg0);
            }
          }
        } else {
          class I {
            constructor() {
              return closure_0((arg0) => !arg0);
            }
          }
          mapped = arr.map((label) => label.label);
        }
        const obj8 = { variant: "text-md/normal", children: items1 };
        items1 = ["Selected values: ", mapped.join(", ")];
        tmp32Result = tmp32(Text, obj8);
      } else {
        class I {
          constructor() {
            return closure_0((arg0) => !arg0);
          }
        }
        tmp32Result = metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Nothing selected" });
      }
      cResult[9] = tmp7.type;
      cResult[10] = state;
      cResult[11] = tmp32Result;
      tmp28 = tmp32Result;
    }
  }
  const obj9 = { maxValues: num, type, id: StringResult };
  const merged2 = Object.assign(unpackModuleId);
  cResult[0] = num;
  cResult[1] = StringResult;
  cResult[2] = type;
  cResult[3] = obj9;
  tmp7 = obj9;
}) : ((type) => {
  let c0;
  let items;
  let items1;
  let num;
  let tmp2;
  let tmp7Result;
  let tmp7Result1;
  type = type.type;
  c0 = undefined;
  const title = type.title;
  [tmp2, c0] = react.useState(false);
  const obj = { maxValues: num, type, id: String(type) };
  _slicedToArray(react.useState(false), 2);
  const merged = Object.assign(unpackModuleId);
  num = 1;
  if (tmp2) {
    num = 4;
  }
  const obj2 = ComponentStateContext;
  const state = obj2.useComponentState(obj).state;
  const obj3 = { style: { gap: 8 }, children: items };
  const Card = Card_Card.Card;
  items = [metroImportDefault(Text_Text.Text, { variant: "heading-lg/medium", children: title }), , , ];
  if (obj.type === Server.ComponentType.STRING_SELECT) {
    const obj4 = {};
    const tmp15 = StringSelectActionComponentDefault;
    const merged1 = Object.assign(obj);
    tmp7Result = metroImportDefault(tmp15, obj4);
  } else {
    const obj5 = { type: obj.type };
    const tmp9 = SearchableSelectActionComponentDefault;
    const merged2 = Object.assign(obj);
    tmp7Result = metroImportDefault(tmp9, obj5);
  }
  items[1] = tmp7Result;
  let type1;
  if (state != null) {
    type1 = state.type;
  }
  if (type1 === obj.type) {
    let mapped;
    const Text = Text_Text.Text;
    if ("values" in state) {
      mapped = state.values;
    } else {
      const selectedOptions = state.selectedOptions;
      mapped = selectedOptions.map((label) => label.label);
    }
    const obj6 = { variant: "text-md/normal", children: items1 };
    items1 = ["Selected values: ", mapped.join(", ")];
    tmp7Result1 = metroImportAll(Text, obj6);
  } else {
    tmp7Result1 = metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Nothing selected" });
  }
  items[2] = tmp7Result1;
  let str3 = "off";
  const Button = components_Button_Button.Button;
  if (tmp2) {
    str3 = "on";
  }
  const obj7 = {
    text: "Toggle Multi Select (" + str3 + ")",
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    size: "sm"
  };
  items[3] = metroImportDefault(Button, obj7);
  return metroImportAll(Card, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let customId;
  let first;
  let items;
  let items1;
  let tmp12;
  let tmp22;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Test screen for embedding native components in RN" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { customId: modal, channelId: SelectedChannelStore.getChannelId(), components };
    cResult[1] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { modal: tmp8, children: items };
    const ComponentStateContextProvider = ComponentStateContext.ComponentStateContextProvider;
    const obj4 = {};
    const tmp16 = TextDisplayComponentDefault;
    const merged = Object.assign(closure_12);
    items = [metroImportDefault(tmp16, obj4), , , , , ];
    const obj5 = { title: "String Select", type: Server.ComponentType.STRING_SELECT };
    items[1] = metroImportDefault(closure_14, obj5);
    const obj6 = { title: "User Select", type: Server.ComponentType.USER_SELECT };
    items[2] = metroImportDefault(closure_14, obj6);
    const obj7 = { title: "Role Select", type: Server.ComponentType.ROLE_SELECT };
    items[3] = metroImportDefault(closure_14, obj7);
    const obj8 = { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT };
    items[4] = metroImportDefault(closure_14, obj8);
    const obj9 = { title: "Channel Select", type: Server.ComponentType.CHANNEL_SELECT };
    items[5] = metroImportDefault(closure_14, obj9);
    const tmp21 = metroImportAll(ComponentStateContextProvider, obj3);
    cResult[2] = tmp21;
    tmp12 = tmp21;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { spacing: 16, children: items1 };
    items1 = [first, tmp12, ];
    const Stack = Stack_Stack.Stack;
    const obj11 = {
      onPress() {
          const obj = DispatcherDefault;
          const obj2 = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
          return obj.dispatch(obj2);
        },
      text: "Reset Modal State"
    };
    items1[2] = metroImportDefault(components_Button_Button.Button, obj11);
    const tmp25 = metroImportAll(Stack, obj10);
    cResult[3] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp22 = cResult[3];
  }
  if (cResult[4] === tmp4.contentContainer) {
    let tmp26;
    if (cResult[5] === tmp4.wrap) {
      tmp26 = cResult[6];
    }
    return tmp26;
  }
  const obj12 = { style: tmp4.wrap, contentContainerStyle: tmp4.contentContainer, children: tmp22 };
  const tmp27 = metroImportDefault(ScrollView, obj12);
  cResult[4] = tmp4.contentContainer;
  cResult[5] = tmp4.wrap;
  cResult[6] = tmp27;
  tmp26 = tmp27;
}) : (() => {
  let Stack;
  let customId;
  let items;
  let items1;
  let obj2;
  let obj4;
  const tmp = closure_9();
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: metroImportAll(Stack, obj2) };
  obj2 = { spacing: 16, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Test screen for embedding native components in RN" }), , ];
  const obj3 = { modal: obj4, children: items1 };
  obj4 = { customId: modal, channelId: SelectedChannelStore.getChannelId(), components };
  const ComponentStateContextProvider = ComponentStateContext.ComponentStateContextProvider;
  const obj5 = {};
  const tmp2 = TextDisplayComponentDefault;
  const merged = Object.assign(closure_12);
  items1 = [metroImportDefault(tmp2, obj5), , , , , ];
  const obj6 = { title: "String Select", type: Server.ComponentType.STRING_SELECT };
  items1[1] = metroImportDefault(closure_14, obj6);
  const obj7 = { title: "User Select", type: Server.ComponentType.USER_SELECT };
  items1[2] = metroImportDefault(closure_14, obj7);
  const obj8 = { title: "Role Select", type: Server.ComponentType.ROLE_SELECT };
  items1[3] = metroImportDefault(closure_14, obj8);
  const obj9 = { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT };
  items1[4] = metroImportDefault(closure_14, obj9);
  const obj10 = { title: "Channel Select", type: Server.ComponentType.CHANNEL_SELECT };
  items1[5] = metroImportDefault(closure_14, obj10);
  items[1] = metroImportAll(ComponentStateContextProvider, obj3);
  const obj11 = {
    onPress() {
      const obj = DispatcherDefault;
      const obj2 = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
      return obj.dispatch(obj2);
    },
    text: "Reset Modal State"
  };
  items[2] = metroImportDefault(components_Button_Button.Button, obj11);
  return metroImportDefault(ScrollView, obj);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx");

export default tmp8;