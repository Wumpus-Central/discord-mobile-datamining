// === Module 18238: DevToolsComponentsTestingScreen ===

// Module 18238 (DevToolsComponentsTestingScreen)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import Server from "Server" /* 2116 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import Card from "Card" /* 7381 */;
import ComponentStateContext from "ComponentStateContext" /* 8591 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 18239 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 18242 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 18243 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;

require = fn;
function Select(children) {
  const type = children.type;
  c0 = undefined;
  [tmp2, c0] = noop.useState(false);
  const obj = {};
  const merged = Object.assign(closure_1_11);
  let num = 1;
  if (tmp2) {
    num = 4;
  }
  obj.maxValues = num;
  obj.type = type;
  obj.id = String(type);
  const tmp = _slicedToArray(noop.useState(false), 2);
  state = ComponentStateContext.useComponentState(obj).state;
  const obj3 = { style: { gap: 8 }, children: null };
  items = [metroImportDefault(Text_Text.Text, { variant: "heading-lg/medium", children: children.title }), , , ];
  if (obj.type === Server.ComponentType.STRING_SELECT) {
    const obj4 = {};
    const merged1 = Object.assign(obj);
    let tmp7Result = metroImportDefault(StringSelectActionComponentDefault, obj4);
  } else {
    const obj5 = {};
    const merged2 = Object.assign(obj);
    obj5.type = obj.type;
    tmp7Result = metroImportDefault(SearchableSelectActionComponentDefault, obj5);
  }
  items[1] = tmp7Result;
  let type1;
  if (state != null) {
    type1 = state.type;
  }
  if (type1 === obj.type) {
    if ("values" in state) {
      let mapped = state.values;
    } else {
      const selectedOptions = state.selectedOptions;
      mapped = selectedOptions.map((label) => label.label);
    }
    state = { variant: "body-md/normal", children: null };
    const items1 = ["Selected values: ", mapped.join(", ")];
    state.children = items1;
    React5(Text_Text.Text, state);
  } else {
    items[2] = metroImportDefault(Text_Text.Text, { variant: "body-md/normal", children: "Nothing selected" });
    let str3 = "off";
    if (tmp2) {
      str3 = "on";
    }
    const obj6 = { text: null, onPress: null, size: "sm" };
    const _HermesInternal = HermesInternal;
    obj6.text = "Toggle Multi Select (" + str3 + ")";
    obj6.onPress = function onPress() {
      return _undefined((arg0) => !arg0);
    };
    items[3] = metroImportDefault(components_Button_Button.Button, obj6);
    obj3.children = items;
    return React5(Card.Card, obj3);
  }
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_9 = createStyles.createStyles(obj2);
const InteractionComponentUtils = fn(6313);
let obj6 = { type: fn(2116).ComponentType.STRING_SELECT, custom_id: "test", max_values: 1, min_values: 1, placeholder: "Choose...", options: null };
let items = [{ label: "test with a long label", value: "test" }, { label: "test 2 with a long label", value: "test2", description: "with description!" }, { label: "star with a long label", value: "star", emoji: { name: "\u2B50" } }, { label: "advaith", value: "advaith", emoji: { id: "889887673425199124", name: "advaith_anim", animated: true } }];
obj6.options = items;
let items1 = [obj6, ];
let obj4 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
items1[1] = { type: fn(2116).ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
const transformComponentsResult = InteractionComponentUtils.transformComponents(items1);
let obj7 = { type: fn(2116).ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
[closure_11, closure_12] = transformComponentsResult;
const modal = "modal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx");

export default function DevToolsComponentsTestingScreen() {
  const tmp = closure_9();
  const obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  const obj2 = { spacing: 16, children: null };
  items = [metroImportDefault(Text_Text.Text, { variant: "body-md/normal", children: "Test screen for embedding native components in RN" }), , ];
  const obj3 = { modal: { customId: modal, channelId: SelectedChannelStore.getChannelId(), components: transformComponentsResult }, children: null };
  const obj4 = { customId: modal, channelId: SelectedChannelStore.getChannelId(), components: transformComponentsResult };
  const obj5 = {};
  const merged = Object.assign(application_id);
  const items1 = [metroImportDefault(TextDisplayComponentDefault, obj5), , , , , ];
  items1[1] = metroImportDefault(Select, { title: "String Select", type: Server.ComponentType.STRING_SELECT });
  const obj6 = { title: "String Select", type: Server.ComponentType.STRING_SELECT };
  items1[2] = metroImportDefault(Select, { title: "User Select", type: Server.ComponentType.USER_SELECT });
  const obj7 = { title: "User Select", type: Server.ComponentType.USER_SELECT };
  items1[3] = metroImportDefault(Select, { title: "Role Select", type: Server.ComponentType.ROLE_SELECT });
  const obj8 = { title: "Role Select", type: Server.ComponentType.ROLE_SELECT };
  items1[4] = metroImportDefault(Select, { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT });
  const obj9 = { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT };
  items1[5] = metroImportDefault(Select, { title: "Channel Select", type: Server.ComponentType.CHANNEL_SELECT });
  obj3.children = items1;
  items[1] = React5(ComponentStateContext.ComponentStateContextProvider, obj3);
  items[2] = metroImportDefault(components_Button_Button.Button, {
    onPress() {
      return DispatcherDefault.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId });
    },
    text: "Reset Modal State"
  });
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return metroImportDefault(ScrollView, obj);
};