// discord_app/modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({
  container: { alignItems: "center", flexDirection: "row" },
  content: { marginStart: 8, flexGrow: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange } = channelId);
  let stateFromStores;
  onChange = undefined;
  const tmp4 = closure_6();
  let obj = channelId(stateFromStores[5]);
  const items = [onChange];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let stringResult = require("useChannelName")(stateFromStores);
  if (onChange == null) {
    onChange = () => {};
  }
  obj = {
    style: null,
    accessibilityRole: "link",
    onPress() {
      const obj = { guildId, selectedChannelId: null, onChannelSelected: null };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj.selectedChannelId = id;
      obj.onChannelSelected = onChange;
      obj.openLazy(asyncRequireImpl(17755, dependencyMap.paths), "ChannelSelectorActionSheet", obj);
    },
    children: null,
  };
  const items2 = [tmp4.container, require("FormStyles")().textInput];
  obj.style = items2;
  let tmp10 = null;
  const tmp3 = require("FormStyles")();
  if (null != stateFromStores) {
    let TextIcon = tmp5(tmp2[11]).getChannelIconComponent(stateFromStores);
    if (TextIcon == null) {
      TextIcon = tmp5(tmp2[12]).TextIcon;
    }
    tmp10 = closure_4(TextIcon, { size: "sm" });
    const tmp5Result = tmp5(tmp2[11]);
  }
  const items3 = [tmp10, ,];
  obj = { style: tmp4.content, variant: "text-md/medium", color: null, children: null };
  let str = "text-muted";
  if (null != channelId) {
    str = "text-default";
  }
  obj.color = str;
  if (stringResult == null) {
    const intl = tmp5(tmp2[14]).intl;
    stringResult = intl.string(tmp5(tmp2[14]).t.r2ptsz);
  }
  obj.children = stringResult;
  items3[1] = closure_4(channelId(stateFromStores[13]).Text, obj);
  const tmpResult = require("TouchableHitBox");
  items3[2] = closure_4(channelId(stateFromStores[15]).Icon, {
    size: channelId(stateFromStores[15]).Icon.Sizes.MEDIUM,
    source: require("../../../../../_runtime/metro/09939__.js"),
  });
  obj.children = items3;
  return closure_5(tmpResult, obj);
}
