// === Module 9013: EditGuildEventChannelSelection ===

// Module 9013 (EditGuildEventChannelSelection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1889 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import StageChannelUpsellDefault from "StageChannelUpsell" /* 9014 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6849 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ ChannelTypes: closure_9, Permissions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { flexDirection: "column" }, channelSelectorButton: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND }, channelIcon: { marginRight: 8 }, channelTypeText: { flex: 1, marginBottom: 8 }, channelNameText: { flex: 1 } };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  const tmp = closure_13();
  const inputStyles = guild(7091).useInputStyles({ hasLeadingIcon: true });
  closure_5 = tmp5;
  let obj = guild(7091);
  closure_6 = guild(9009).useGetEventChannelsByType(guild.id, channelType);
  let obj2 = guild(9009);
  guild(8995).useChannelsUserCanStartStageIn(guild);
  const tmp7 = channel(5647)(channel);
  let obj3 = guild(8995);
  const items = [closure_5];
  closure_8 = guild(504).useStateFromStores(items, () => PermissionStore.can(constants2.MANAGE_CHANNELS, guild));
  let obj4 = guild(504);
  const items1 = [closure_8];
  const items2 = [guildEventId];
  constants = guild(504).useStateFromStores(items1, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    let channelIcon = tmp2(8595).getChannelIcon(channel);
    const tmp2Result = tmp2(8595);
  } else {
    channelIcon = channel(8997);
  }
  if (null != channel) {
    let LocationIcon = tmp2(8595).getChannelIconComponent(channel);
    const tmp2Result2 = tmp2(8595);
  } else {
    LocationIcon = tmp2(8998).LocationIcon;
  }
  let intl = tmp2(1114).intl;
  let string = intl.string;
  let t = tmp2(1114).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    let stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  const obj6 = { style: null, children: null };
  const items3 = [tmp.container, guild.style];
  obj6.style = items3;
  const items4 = [closure_11(guild(5619).Heading, { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult }), ];
  const obj8 = { accessibilityLabel: stringResult, accessibilityHint: null, accessibilityValue: null, accessibilityRole: "button", style: null, onPress: null, children: null };
  const intl2 = tmp2(1114).intl;
  obj8.accessibilityHint = intl2.string(guild(1114).t.AaXbMD);
  obj8.accessibilityValue = { text: tmp7 };
  const items5 = [, , ];
  ({ padding: arr6[0], radius: arr6[1] } = inputStyles);
  items5[2] = tmp.channelSelectorButton;
  obj8.style = items5;
  obj8.onPress = function handleSelectChannel() {
    let result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    let tmp4 = null;
    const mapped = closure_6.map((id) => {
      const obj = { value: id.id, label: guild(recurrenceId[13]).computeChannelName(id, length, closure_1_6, true) };
      return obj;
    });
    if (0 === length.length) {
      tmp4 = null;
      if (closure_8) {
        let obj2 = {
          guildId: guild.id,
          onCreate(channel) {
                const obj2 = { channel, guildEvent, recurrenceId };
                const result = guild(8976).openCreateOrEditGuildEventModal(closure_1_0, obj2);
                const obj = guild(8976);
              }
        };
        tmp4 = closure_2_11(StageChannelUpsellDefault, obj2);
      }
    }
    const obj3 = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (closure_5) {
      let stringResult = string(t.S7GjDz);
    } else {
      stringResult = string(t["7RYWCP"]);
    }
    const obj4 = {
      title: stringResult,
      items: mapped,
      body: tmp4,
      onItemSelect(arg0) {
        closure_0 = arg0;
        const found = closure_1_6.find((id) => id.id === closure_0);
        if (null != found) {
          closure_1_4(found);
        }
        channel(5253).hideActionSheet();
        const obj = channel(5253);
      },
      selectedItem: null,
      hasIcons: false
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj4.selectedItem = id;
    obj3.openLazy(asyncRequireImpl(8993, dependencyMap.paths), "SelectUpdatesChannel", obj4);
    const tmp9 = asyncRequireImpl(8993, dependencyMap.paths);
  };
  if (null != LocationIcon) {
    const obj9 = { style: tmp.channelIcon };
    let tmp12Result = closure_11(LocationIcon, obj9);
  } else {
    const obj10 = { source: channelIcon, style: tmp.channelIcon };
    tmp12Result = closure_11(tmp2(1188).Icon, obj10);
  }
  const items6 = [tmp12Result, closure_11(guild(5619).Text, { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp7 }), ];
  const obj11 = { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp7 };
  const obj5 = guild(504);
  const obj7 = { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult };
  items6[2] = closure_11(guild(1188).Icon, { source: channel(8994) });
  obj8.children = items6;
  items4[1] = closure_12(guild(6974).PressableOpacity, obj8);
  obj6.children = items4;
  return closure_12(View, obj6);
};