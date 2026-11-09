// === Module 20377: FormChannelPicker ===

// Module 20377 (FormChannelPicker)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import useChannelNameDefault from "useChannelName" /* 5776 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange: dependencyMap } = channelId);
  let stateFromStores;
  items = [stateFromStores];
  const items1 = [channelId];
  stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp5Result = useChannelNameDefault(stateFromStores);
  if (null != stateFromStores) {
    let TextIcon = tmp(17554).getChannelIconComponentOrDefault(stateFromStores);
    const tmpResult = tmp(17554);
  } else {
    TextIcon = tmp(8723).TextIcon;
  }
  let obj2 = { icon: jsx(channelId(7038).TableRow.Icon, { IconComponent: TextIcon }), label: null, arrow: true, onPress: null };
  if (tmp5Result == null) {
    const obj3 = { variant: "body-md/medium", color: "text-muted", children: null };
    const intl = tmp(1113).intl;
    obj3.children = intl.string(tmp(1113).t.r2ptsz);
    tmp5Result = jsx(tmp(5751).Text, { variant: "body-md/medium", color: "text-muted", children: null });
  }
  obj2.label = tmp5Result;
  obj2.onPress = function handleSelectChannel() {
    const obj2 = { guildId, selectedChannelId: null, onChannelSelected: null };
    let id;
    const obj = ActionSheetActionCreatorsDefault;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj2.selectedChannelId = id;
    obj2.onChannelSelected = onChannelSelected;
    obj.openLazy(asyncRequireImpl(20378, dependencyMap.paths), "ChannelSelectorActionSheet", obj2);
  };
  return jsx(channelId(7038).TableRow, { icon: jsx(channelId(7038).TableRow.Icon, { IconComponent: TextIcon }), label: null, arrow: true, onPress: null });
};