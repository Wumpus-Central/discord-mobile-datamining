// discord_app/modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import PermissionOverwriteType from "../../../../../flow/Server.tsx";
import Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../../design/components/Button/native/Button.native.tsx";
import isInteractionComponent from "../../../../interaction_components/ComponentStateContext.tsx";
import StringSelectActionComponentDefault from "../../../../interaction_components/native/actions/StringSelectActionComponent.tsx";
import SearchableSelectActionComponentDefault from "../../../../interaction_components/native/actions/SearchableSelectActionComponent.tsx";
import TextDisplayComponentDefault from "../../../../interaction_components/native/display/TextDisplayComponent.tsx";
import importDefaultResult from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import handleConnectionOpen from "../../../../../stores/SelectedChannelStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import flattenComponents from "../../../../interaction_components/InteractionComponentUtils.tsx";
import { isInteractionComponent } from "../../../../interaction_components/ComponentStateContext.tsx";

require = fn;
function Select(children) {
  let type = children.type;
  let _require;
  [tmp2, c0] = importDefaultResult(React.useState(false), 2);
  let obj = {};
  const merged = Object.assign(closure_11);
  let num = 1;
  if (tmp2) {
    num = 4;
  }
  obj.maxValues = num;
  obj.type = type;
  obj.id = String(type);
  obj1 = isInteractionComponent;
  let state = obj1.useComponentState(obj).state;
  obj = { style: { gap: 8 }, children: null };
  const items = [callback(require("../../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/medium", children: children.title }), , , ];
  if (obj.type === require("../../../../../flow/Server.tsx").ComponentType.STRING_SELECT) {
    obj = {};
    const merged1 = Object.assign(obj);
    let tmp7Result = callback(StringSelectActionComponentDefault, obj);
  } else {
    obj1 = {};
    const merged2 = Object.assign(obj);
    obj1.type = obj.type;
    tmp7Result = callback(SearchableSelectActionComponentDefault, obj1);
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
      mapped = selectedOptions.map((item, index) => item.label);
    }
    state = { variant: "text-md/normal", children: null };
    const items1 = ["Selected values: ", mapped.join(", ")];
    state[1] = items1;
    callback(tmp4(4734).Text, state);
  } else {
    items[2] = callback(tmp4(4734).Text, { variant: "text-md/normal", children: "Nothing selected" });
    let str3 = "off";
    if (tmp2) {
      str3 = "on";
    }
    const obj2 = { text: null, onPress: null, size: "sm" };
    const _HermesInternal = HermesInternal;
    obj2[0] = "Toggle Multi Select (" + str3 + ")";
    obj2[1] = function onPress() {
      return _undefined((arg0) => !arg0);
    };
    items[3] = callback(tmp4(4745).Button, obj2);
    obj[1] = items;
    return callback(require("../../../../../design/components/Card/native/Card.native.tsx").Card, obj);
  }
  const tmp = importDefaultResult(React.useState(false), 2);
}
let c3 = importDefaultResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let items = [{ label: "test with a long label", value: "test" }, { label: "test 2 with a long label", value: "test2", description: "with description!" }, { label: "star with a long label", value: "star", emoji: { name: "\u2B50" } }, { label: "advaith", value: "advaith", emoji: { id: "889887673425199124", name: "advaith_anim", animated: true } }];
let items1 = [{ type: require("PermissionOverwriteType").ComponentType.STRING_SELECT, custom_id: "test", max_values: 1, min_values: 1, placeholder: "Choose...", options: items }, ];
let obj2 = { type: require("PermissionOverwriteType").ComponentType.STRING_SELECT, custom_id: "test", max_values: 1, min_values: 1, placeholder: "Choose...", options: items };
items1[1] = { type: require("PermissionOverwriteType").ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
const transformComponentsResult = flattenComponents.transformComponents(items1);
let c10 = transformComponentsResult;
let obj3 = { type: require("PermissionOverwriteType").ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
[unpackModuleId, closure_12] = importDefaultResult(transformComponentsResult, 2);
const modal = "modal";
const importDefaultResultResult = importDefaultResult(transformComponentsResult, 2);
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx");

export default function DevToolsComponentsTestingScreen() {
  const tmp = callback3();
  const items = [callback(Text.Text, { variant: "text-md/normal", children: "Test screen for embedding native components in RN" }), , ];
  let obj = { modal: { customId: modal, channelId: channelId.getChannelId(), components: closure_10 }, children: null };
  obj1 = { customId: modal, channelId: channelId.getChannelId(), components: closure_10 };
  const obj2 = {};
  const merged = Object.assign(closure_12);
  const items1 = [callback(TextDisplayComponentDefault, obj2), , , , , ];
  items1[1] = callback(Select, { title: "String Select", type: PermissionOverwriteType.ComponentType.STRING_SELECT });
  items1[2] = callback(Select, { title: "User Select", type: PermissionOverwriteType.ComponentType.USER_SELECT });
  items1[3] = callback(Select, { title: "Role Select", type: PermissionOverwriteType.ComponentType.ROLE_SELECT });
  items1[4] = callback(Select, { title: "Mentionable Select", type: PermissionOverwriteType.ComponentType.MENTIONABLE_SELECT });
  items1[5] = callback(Select, { title: "Channel Select", type: PermissionOverwriteType.ComponentType.CHANNEL_SELECT });
  obj[1] = items1;
  items[1] = callback2(isInteractionComponent.ComponentStateContextProvider, obj);
  items[2] = callback(Button.Button, {
    onPress() {
      callback(table[17]);
      const obj = { type: "CLEAR_INTERACTION_MODAL_STATE", customId: closure_13 };
      return obj.dispatch(obj);
    },
    text: "Reset Modal State"
  });
  obj[1] = items;
  obj[2] = callback2(Stack.Stack, obj);
  return callback(ScrollView, obj);
};