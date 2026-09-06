// === Module 9728: EditGuildEventChannelSelection ===

// Module 9728 (EditGuildEventChannelSelection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import StageChannelUpsellDefault from "StageChannelUpsell" /* 9729 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelTypes: closure_9, Permissions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: { flexDirection: "column" }, channelSelectorButton: null, channelIcon: null, channelTypeText: null, channelNameText: null };
createStyles = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createStyles.channelSelectorButton = createStyles;
createStyles.channelIcon = { marginRight: 8 };
createStyles.channelTypeText = { flex: 1, marginBottom: 8 };
createStyles.channelNameText = { flex: 1 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  const tmp = closure_13();
  let obj = guild(6621);
  const inputStyles = obj.useInputStyles({ hasLeadingIcon: true });
  closure_5 = tmp5;
  let obj1 = guild(9726);
  closure_6 = obj1.useGetEventChannelsByType(guild.id, channelType);
  let obj2 = guild(9712);
  obj2.useChannelsUserCanStartStageIn(guild);
  const tmp7 = channel(4713)(channel);
  let obj3 = guild(504);
  const items = [closure_5];
  closure_8 = obj3.useStateFromStores(items, () => PermissionStore.can(constants2.MANAGE_CHANNELS, guild));
  let obj4 = guild(504);
  const items1 = [closure_8];
  const items2 = [guildEventId];
  constants = obj4.useStateFromStores(items1, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    let tmp2Result = tmp2(5028);
    let channelIcon = tmp2Result.getChannelIcon(channel);
  } else {
    channelIcon = channel(9714);
  }
  if (null != channel) {
    tmp2Result = tmp2(5028);
    let LocationIcon = tmp2Result.getChannelIconComponent(channel);
  } else {
    LocationIcon = tmp2(9715).LocationIcon;
  }
  let intl = tmp2(1114).intl;
  let string = intl.string;
  let t = tmp2(1114).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    let stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  obj = { style: null, children: null };
  const items3 = [tmp.container, guild.style];
  obj.style = items3;
  obj = { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult };
  const items4 = [closure_11(guild(4556).Heading, obj), ];
  obj1 = { accessibilityLabel: stringResult, accessibilityHint: null, accessibilityValue: null, accessibilityRole: "button", style: null, onPress: null, children: null };
  const intl2 = tmp2(1114).intl;
  obj1.accessibilityHint = intl2.string(guild(1114).t.AaXbMD);
  obj1.accessibilityValue = { text: tmp7 };
  const items5 = [, , ];
  ({ padding: arr6[0], radius: arr6[1] } = inputStyles);
  items5[2] = tmp.channelSelectorButton;
  obj1.style = items5;
  obj1.onPress = function onPress() {
    let obj = KeyboardManagerUtilsAll;
    let result = obj.dismissGlobalKeyboard();
    let tmp4 = null;
    const mapped = closure_6.map((id) => {
      const obj = { value: id.id, label: guild(recurrenceId[13]).computeChannelName(id, length, closure_1_6, true) };
      return obj;
    });
    if (0 === length.length) {
      tmp4 = null;
      if (closure_8) {
        obj = {
          guildId: guild.id,
          onCreate(channel) {
                guild(9698);
                const obj = { channel, guildEvent, recurrenceId };
                const result = obj.openCreateOrEditGuildEventModal(closure_1_0, obj);
              }
        };
        tmp4 = closure_2_11(StageChannelUpsellDefault, obj);
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
    obj = {
      title: stringResult,
      items: mapped,
      body: tmp4,
      onItemSelect(arg0) {
        closure_0 = arg0;
        const found = closure_1_6.find((id) => id.id === closure_0);
        if (null != found) {
          closure_1_4(found);
        }
        channel(4527).hideActionSheet();
        const obj = channel(4527);
      },
      selectedItem: null,
      hasIcons: false
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj.selectedItem = id;
    obj3.openLazy(asyncRequireImpl(9426, dependencyMap.paths), "SelectUpdatesChannel", obj);
    const tmp9 = asyncRequireImpl(9426, dependencyMap.paths);
  };
  if (null != LocationIcon) {
    obj2 = { style: tmp.channelIcon };
    let tmp12Result = closure_11(LocationIcon, obj2);
  } else {
    obj3 = { source: channelIcon, style: tmp.channelIcon };
    tmp12Result = closure_11(tmp2(1178).Icon, obj3);
  }
  const items6 = [tmp12Result, , ];
  obj4 = { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp7 };
  items6[1] = closure_11(guild(4556).Text, obj4);
  items6[2] = closure_11(guild(1178).Icon, { source: channel(9711) });
  obj1.children = items6;
  items4[1] = closure_12(guild(5123).PressableOpacity, obj1);
  obj.children = items4;
  return closure_12(View, obj);
};