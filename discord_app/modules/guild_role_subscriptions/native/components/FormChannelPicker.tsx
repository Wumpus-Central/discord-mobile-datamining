// === Module 19907: FormChannelPicker ===

// Module 19907 (FormChannelPicker)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import FormStylesDefault from "FormStyles" /* 15680 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange: dependencyMap } = channelId);
  const tmp2 = FormStylesDefault();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp6Result = useChannelNameDefault(stateFromStores);
  if (null != stateFromStores) {
    let TextIcon = tmp3(17163).getChannelIconComponentOrDefault(stateFromStores);
    const tmp3Result = tmp3(17163);
  } else {
    TextIcon = tmp3(8644).TextIcon;
  }
  let obj2 = { style: tmp2.inputContainer, children: null };
  const obj3 = { start: true, end: true, icon: jsx(channelId(6969).TableRow.Icon, { IconComponent: TextIcon }), label: null, arrow: true, onPress: null };
  if (tmp6Result == null) {
    const obj4 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp3(1114).intl;
    obj4.children = intl.string(tmp3(1114).t.r2ptsz);
    tmp6Result = jsx(tmp3(5619).Text, { variant: "text-md/medium", color: "text-muted", children: null });
  }
  obj3.label = tmp6Result;
  obj3.onPress = function handleSelectChannel() {
    const obj2 = { guildId, selectedChannelId: null, onChannelSelected: null };
    let id;
    const obj = ActionSheetActionCreatorsDefault;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj2.selectedChannelId = id;
    obj2.onChannelSelected = onChannelSelected;
    obj.openLazy(asyncRequireImpl(19908, dependencyMap.paths), "ChannelSelectorActionSheet", obj2);
  };
  obj2.children = jsx(channelId(6969).TableRow, { start: true, end: true, icon: jsx(channelId(6969).TableRow.Icon, { IconComponent: TextIcon }), label: null, arrow: true, onPress: null });
  return <stateFromStores style={tmp2.inputContainer}>{null}</stateFromStores>;
};