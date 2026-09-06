// === Module 15710: DevToolsComponentsTestingScreen ===

// Module 15710 (DevToolsComponentsTestingScreen)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import Server from "Server" /* 1894 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import Card from "Card" /* 5607 */;
import ComponentStateContext from "ComponentStateContext" /* 8112 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15711 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15714 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15715 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
function Select(children) {
  let type = children.type;
  c0 = undefined;
  [tmp2, c0] = _slicedToArray(noop.useState(false), 2);
  let obj = {};
  const merged = Object.assign(closure_1_11);
  let num = 1;
  if (tmp2) {
    num = 4;
  }
  obj.maxValues = num;
  obj.type = type;
  obj.id = String(type);
  let obj1 = ComponentStateContext;
  let state = obj1.useComponentState(obj).state;
  obj = { style: { gap: 8 }, children: null };
  const items = [React5(Text_Text.Text, { variant: "heading-lg/medium", children: children.title }), , , ];
  if (obj.type === Server.ComponentType.STRING_SELECT) {
    obj = {};
    const merged1 = Object.assign(obj);
    let tmp7Result = React5(StringSelectActionComponentDefault, obj);
  } else {
    obj1 = {};
    const merged2 = Object.assign(obj);
    obj1.type = obj.type;
    tmp7Result = React5(SearchableSelectActionComponentDefault, obj1);
  }
  items[1] = tmp7Result;
  type = undefined;
  if (state != null) {
    type = state.type;
  }
  if (type === obj.type) {
    if ("values" in state) {
      let mapped = state.values;
    } else {
      const selectedOptions = state.selectedOptions;
      mapped = selectedOptions.map((label) => label.label);
    }
    state = { variant: "text-md/normal", children: null };
    const items1 = ["Selected values: ", mapped.join(", ")];
    state.children = items1;
    React6(Text_Text.Text, state);
  } else {
    items[2] = React5(Text_Text.Text, { variant: "text-md/normal", children: "Nothing selected" });
    let str3 = "off";
    if (tmp2) {
      str3 = "on";
    }
    const obj2 = { text: null, onPress: null, size: "sm" };
    const _HermesInternal = HermesInternal;
    obj2.text = "Toggle Multi Select (" + str3 + ")";
    obj2.onPress = function onPress() {
      return _undefined((arg0) => !arg0);
    };
    items[3] = React5(components_Button_Button.Button, obj2);
    obj.children = items;
    return React6(Card.Card, obj);
  }
  const tmp = _slicedToArray(noop.useState(false), 2);
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { wrap: null, contentContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.wrap = createStyles;
createStyles.contentContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_9 = createStyles.createStyles(createStyles);
const InteractionComponentUtils = fn(4785);
let obj2 = { type: fn(1894).ComponentType.STRING_SELECT, custom_id: "test", max_values: 1, min_values: 1, placeholder: "Choose...", options: null };
let items = [{ label: "test with a long label", value: "test" }, { label: "test 2 with a long label", value: "test2", description: "with description!" }, { label: "star with a long label", value: "star", emoji: { name: "\u2B50" } }, { label: "advaith", value: "advaith", emoji: { id: "889887673425199124", name: "advaith_anim", animated: true } }];
obj2.options = items;
let items1 = [obj2, ];
let obj1 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
items1[1] = { type: fn(1894).ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
const transformComponentsResult = InteractionComponentUtils.transformComponents(items1);
let c10 = transformComponentsResult;
let obj3 = { type: fn(1894).ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
[closure_11, closure_12] = _slicedToArray(transformComponentsResult, 2);
const modal = "modal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx");

export default function DevToolsComponentsTestingScreen() {
  const tmp = closure_9();
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { spacing: 16, children: null };
  const items = [React5(Text_Text.Text, { variant: "text-md/normal", children: "Test screen for embedding native components in RN" }), , ];
  obj = { modal: { customId: modal, channelId: SelectedChannelStore.getChannelId(), components: transformComponentsResult }, children: null };
  const obj1 = { customId: modal, channelId: SelectedChannelStore.getChannelId(), components: transformComponentsResult };
  const obj2 = {};
  const merged = Object.assign(closure_1_12);
  const items1 = [React5(TextDisplayComponentDefault, obj2), , , , , ];
  items1[1] = React5(Select, { title: "String Select", type: Server.ComponentType.STRING_SELECT });
  const obj3 = { title: "String Select", type: Server.ComponentType.STRING_SELECT };
  items1[2] = React5(Select, { title: "User Select", type: Server.ComponentType.USER_SELECT });
  const obj4 = { title: "User Select", type: Server.ComponentType.USER_SELECT };
  items1[3] = React5(Select, { title: "Role Select", type: Server.ComponentType.ROLE_SELECT });
  const obj5 = { title: "Role Select", type: Server.ComponentType.ROLE_SELECT };
  items1[4] = React5(Select, { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT });
  const obj6 = { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT };
  items1[5] = React5(Select, { title: "Channel Select", type: Server.ComponentType.CHANNEL_SELECT });
  obj.children = items1;
  items[1] = React6(ComponentStateContext.ComponentStateContextProvider, obj);
  items[2] = React5(components_Button_Button.Button, {
    onPress() {
      const obj = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
      return obj.dispatch(obj);
    },
    text: "Reset Modal State"
  });
  obj.children = items;
  obj.children = React6(Stack_Stack.Stack, obj);
  return React5(ScrollView, obj);
};