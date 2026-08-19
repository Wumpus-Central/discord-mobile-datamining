// discord_app/modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange } = channelId);
  let stateFromStores;
  onChange = undefined;
  const tmp4 = callback2();
  let obj = channelId(stateFromStores[5]);
  const items = [onChange];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => onChange.getChannel(channelId), items1);
  let stringResult = importDefault(stateFromStores[6])(stateFromStores);
  if (onChange == null) {
    onChange = () => {

    };
  }
  obj = {
    style: items2,
    accessibilityRole: "link",
    onPress() {
      importDefault(stateFromStores[8]);
      const obj = { guildId: closure_1, selectedChannelId: null, onChannelSelected: null };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj[1] = id;
      obj[2] = onChange;
      obj.openLazy(channelId(stateFromStores[10])(stateFromStores[9], stateFromStores.paths), "ChannelSelectorActionSheet", obj);
    },
    children: null
  };
  items2 = [tmp4.container, importDefault(stateFromStores[4])().textInput];
  let tmp10 = null;
  const tmp3 = importDefault(stateFromStores[4])();
  if (null != stateFromStores) {
    let TextIcon = tmp5(tmp2[11]).getChannelIconComponent(stateFromStores);
    if (TextIcon == null) {
      TextIcon = tmp5(tmp2[12]).TextIcon;
    }
    tmp10 = callback(TextIcon, { size: "sm" });
    const tmp5Result = tmp5(tmp2[11]);
  }
  const items3 = [tmp10, , ];
  obj = { style: tmp4.content, variant: "text-md/medium", color: null, children: null };
  let str = "text-muted";
  if (null != channelId) {
    str = "text-default";
  }
  obj[2] = str;
  if (stringResult == null) {
    const intl = tmp5(tmp2[14]).intl;
    stringResult = intl.string(tmp5(tmp2[14]).t.r2ptsz);
  }
  obj[3] = stringResult;
  items3[1] = callback(channelId(stateFromStores[13]).Text, obj);
  const tmpResult = importDefault(stateFromStores[7]);
  items3[2] = callback(channelId(stateFromStores[15]).Icon, { size: channelId(stateFromStores[15]).Icon.Sizes.MEDIUM, source: importDefault(stateFromStores[16]) });
  obj[3] = items3;
  return callback(tmpResult, obj);
};