import importDefaultResult from "_slicedToArray";
import noop from "noop";
import { ScrollView } from "dispatcher";
import handleConnectionOpen from "handleConnectionOpen";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import flattenComponents from "flattenComponents";

let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function Select(children) {
  let c0;
  let tmp2;
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
  let obj1 = _require(8014);
  let state = obj1.useComponentState(obj).state;
  obj = { style: { gap: 8 }, children: null };
  const items = [callback(_require(4251).Text, { variant: "heading-lg/medium", children: children.title }), , , ];
  if (obj.type === _require(1906).ComponentType.STRING_SELECT) {
    obj = {};
    const merged1 = Object.assign(obj);
    let tmp7Result = tmp7(importDefault(14895), obj);
    const tmp15 = importDefault(14895);
  } else {
    obj1 = {};
    const merged2 = Object.assign(obj);
    obj1.type = obj.type;
    tmp7Result = tmp7(importDefault(14898), obj1);
    const tmp9 = importDefault(14898);
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
    state[1] = items1;
    tmp6(tmp4(4251).Text, state);
  } else {
    items[2] = tmp7(tmp4(4251).Text, { variant: "text-md/normal", children: "Nothing selected" });
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
    items[3] = tmp7(tmp4(4666).Button, obj2);
    obj[1] = items;
    return tmp6(_require(5288).Card, obj);
  }
}
let c3 = importDefaultResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { wrap: null, contentContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
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
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx");

export default function DevToolsComponentsTestingScreen() {
  const tmp = createCacheKey();
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { spacing: 16, children: null };
  const items = [callback(require(4251) /* Text */.Text, { variant: "text-md/normal", children: "Test screen for embedding native components in RN" }), , ];
  obj = { modal: null, children: null };
  const obj1 = { customId: modal, channelId: null, components: null };
  obj1[1] = channelId.getChannelId();
  obj1[2] = closure_10;
  obj[0] = obj1;
  const merged = Object.assign(closure_12);
  const items1 = [callback(importDefault(14899), {}), , , , , ];
  const obj2 = {};
  const tmp2 = importDefault(14899);
  items1[1] = callback(Select, { title: "String Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.STRING_SELECT });
  const obj3 = { title: "String Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.STRING_SELECT };
  items1[2] = callback(Select, { title: "User Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.USER_SELECT });
  const obj4 = { title: "User Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.USER_SELECT };
  items1[3] = callback(Select, { title: "Role Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT });
  const obj5 = { title: "Role Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT };
  items1[4] = callback(Select, { title: "Mentionable Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT });
  const obj6 = { title: "Mentionable Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT };
  items1[5] = callback(Select, { title: "Channel Select", type: require(1906) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT });
  obj[1] = items1;
  items[1] = callback2(require(8014) /* isInteractionComponent */.ComponentStateContextProvider, obj);
  items[2] = callback(require(4666) /* Button */.Button, {
    onPress() {
      let obj = callback(table[17]);
      obj = { type: "CLEAR_INTERACTION_MODAL_STATE", customId: closure_13 };
      return obj.dispatch(obj);
    },
    text: "Reset Modal State"
  });
  obj[1] = items;
  obj[2] = callback2(require(4664) /* Stack */.Stack, obj);
  return callback(ScrollView, obj);
};