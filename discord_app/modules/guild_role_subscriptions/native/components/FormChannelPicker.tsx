// === Module 17909: FormChannelPicker ===

// Module 17909 (FormChannelPicker)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4639);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange } = channelId);
  let stateFromStores;
  onChange = undefined;
  const tmp4 = closure_6();
  const tmp3 = require("FormStyles")();
  const items = [onChange];
  const items1 = [channelId];
  stateFromStores = channelId(stateFromStores[5]).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let stringResult = require("useChannelName")(stateFromStores);
  if (onChange == null) {
    onChange = () => {

    };
  }
  let obj2 = {
    style: null,
    accessibilityRole: "link",
    onPress() {
      const obj2 = { guildId, selectedChannelId: null, onChannelSelected: null };
      let id;
      const obj = ActionSheetActionCreatorsDefault;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj2.selectedChannelId = id;
      obj2.onChannelSelected = onChange;
      obj.openLazy(asyncRequireImpl(17910, dependencyMap.paths), "ChannelSelectorActionSheet", obj2);
    },
    children: null
  };
  const items2 = [tmp4.container, tmp3.textInput];
  obj2.style = items2;
  let tmp10 = null;
  let obj = channelId(stateFromStores[5]);
  if (null != stateFromStores) {
    let TextIcon = tmp5(tmp2[11]).getChannelIconComponent(stateFromStores);
    if (TextIcon == null) {
      TextIcon = tmp5(tmp2[12]).TextIcon;
    }
    tmp10 = closure_4(TextIcon, { size: "sm" });
    const tmp5Result = tmp5(tmp2[11]);
  }
  const items3 = [tmp10, , ];
  const obj3 = { style: tmp4.content, variant: "text-md/medium", color: null, children: null };
  let str = "text-muted";
  if (null != channelId) {
    str = "text-default";
  }
  obj3.color = str;
  if (stringResult == null) {
    const intl = tmp5(tmp2[14]).intl;
    stringResult = intl.string(tmp5(tmp2[14]).t.r2ptsz);
  }
  obj3.children = stringResult;
  items3[1] = closure_4(channelId(stateFromStores[13]).Text, obj3);
  const tmpResult = require("TouchableHitBox");
  items3[2] = closure_4(channelId(stateFromStores[15]).Icon, { size: channelId(stateFromStores[15]).Icon.Sizes.MEDIUM, source: require("module_10071") });
  obj2.children = items3;
  return closure_5(tmpResult, obj2);
};