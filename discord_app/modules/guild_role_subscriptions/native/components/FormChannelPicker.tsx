// discord_app/modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({
  container: { alignItems: "center", flexDirection: "row" },
  content: { marginStart: 8, flexGrow: 1 },
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  let guildId;
  let items2;
  let items3;
  let onChange;
  let str;
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange } = channelId);
  let stateFromStores;
  onChange = undefined;
  let tmp2 = stateFromStores;
  const tmp3 = require("FormStyles")();
  const tmp4 = closure_6();
  let obj = channelId(stateFromStores[5]);
  const items = [onChange];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let stringResult = require("useChannelName")(stateFromStores);
  if (onChange == null) {
    onChange = () => {};
  }
  const obj2 = {
    style: items2,
    accessibilityRole: "link",
    onPress() {
      let id;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj = { guildId: importDefault, selectedChannelId: id, onChannelSelected: onChange };
      id = undefined;
      ActionSheetActionCreatorsDefault;
      const tmp2 = asyncRequire(17996, dependencyMap.paths);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      openLazy(tmp2, "ChannelSelectorActionSheet", obj);
    },
    children: items3,
  };
  items2 = [tmp4.container, tmp3.textInput];
  let tmp10 = null;
  const tmpResult = require("TouchableHitBox");
  if (null != stateFromStores) {
    const tmp5Result = channelId(tmp2[11]);
    let TextIcon = tmp5Result.getChannelIconComponent(stateFromStores);
    if (TextIcon == null) {
      TextIcon = tmp5(tmp2[12]).TextIcon;
    }
    tmp10 = closure_4(TextIcon, { size: "sm" });
  }
  items3 = [tmp10, ,];
  const obj3 = { style: tmp4.content, variant: "text-md/medium", color: str, children: stringResult };
  str = "text-muted";
  const Text = tmp5(tmp2[13]).Text;
  if (null != channelId) {
    str = "text-default";
  }
  if (stringResult == null) {
    const intl = tmp5(tmp2[14]).intl;
    stringResult = intl.string(tmp5(tmp2[14]).t.r2ptsz);
  }
  items3[1] = closure_4(Text, obj3);
  const obj4 = { size: channelId(tmp2[15]).Icon.Sizes.MEDIUM, source: require("AssetRegistry") };
  const Icon = tmp5(tmp2[15]).Icon;
  items3[2] = closure_4(Icon, obj4);
  return closure_5(tmpResult, obj2);
}
