// === Module 9240: EditGuildEventChannelSelection ===

// Module 9240 (EditGuildEventChannelSelection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import StageChannelUpsellDefault from "StageChannelUpsell" /* 9241 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let constants;

let c10;
let c9;
let closure_12;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ ChannelTypes: c9, Permissions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { container: { flexDirection: "column" }, channelSelectorButton: obj2, channelIcon: { marginRight: 8 }, channelTypeText: { flex: 1, marginBottom: 8 }, channelNameText: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
let closure_13 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  let LocationIcon;
  let channel;
  let channelIcon;
  let channelType;
  let closure_9;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let stringResult;
  let tmp12Result;
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  const style = guild.style;
  const tmp = closure_13();
  let obj = guild(6112);
  const inputStyles = obj.useInputStyles({ hasLeadingIcon: true });
  let closure_5 = tmp5;
  let obj2 = guild(9238);
  let closure_6 = obj2.useGetEventChannelsByType(guild.id, channelType);
  let obj3 = guild(9223);
  const length = obj3.useChannelsUserCanStartStageIn(guild);
  const tmp7 = channel(5049)(channel);
  const items = [closure_5];
  const obj4 = guild(504);
  let closure_8 = obj4.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_CHANNELS, guild));
  const items1 = [closure_8];
  const items2 = [guildEventId];
  const obj5 = guild(504);
  constants = obj5.useStateFromStores(items1, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    const tmp2Result = guild(5819);
    channelIcon = tmp2Result.getChannelIcon(channel);
  } else {
    channelIcon = channel(9225);
  }
  if (null != channel) {
    const tmp2Result2 = guild(5819);
    LocationIcon = tmp2Result2.getChannelIconComponent(channel);
  } else {
    LocationIcon = tmp2(9226).LocationIcon;
  }
  let intl = tmp2(1126).intl;
  let string = intl.string;
  let t = tmp2(1126).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  const obj6 = { style: items3, children: items4 };
  items3 = [tmp.container, style];
  items4 = [, ];
  const obj7 = { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult };
  items4[0] = closure_11(guild(4892).Heading, obj7);
  const obj8 = {
    accessibilityLabel: stringResult,
    accessibilityHint: intl2.string(guild(1126).t.AaXbMD),
    accessibilityValue: { text: tmp7 },
    accessibilityRole: "button",
    style: items5,
    onPress() {
      let guildEvent;
      let id;
      let recurrenceId;
      let stringResult;
      let obj = KeyboardManagerUtilsAll;
      let result = obj.dismissGlobalKeyboard();
      let tmp4 = null;
      const mapped = closure_6.map((id) => {
        let obj2;
        const obj = { value: id.id, label: obj2.computeChannelName(id, length, closure_1_6, true) };
        obj2 = guild(recurrenceId[13]);
        return obj;
      });
      if (0 === length.length) {
        tmp4 = null;
        if (closure_8) {
          let obj2 = {
            guildId: guild.id,
            onCreate(channel) {
                  const obj = { channel, guildEvent, recurrenceId };
                  const openCreateOrEditGuildEventModal = guild(dependencyMap[23]).openCreateOrEditGuildEventModal;
                  guild(dependencyMap[23]);
                  const result = openCreateOrEditGuildEventModal(closure_1_0, obj);
                }
          };
          tmp4 = unpackModuleId(StageChannelUpsellDefault, obj2);
        }
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmp10 = asyncRequire(8978, dependencyMap.paths);
      const intl = intl3.intl;
      const string = intl.string;
      const t = intl3.t;
      if (closure_5) {
        stringResult = string(t.S7GjDz);
      } else {
        stringResult = string(t["7RYWCP"]);
      }
      const obj3 = {
        title: stringResult,
        items: mapped,
        body: tmp4,
        onItemSelect(arg0) {
          let closure_0 = arg0;
          const found = closure_1_6.find((id) => id.id === closure_0);
          if (null != found) {
            closure_1_4(found);
          }
          const obj = channel(dependencyMap[24]);
          obj.hideActionSheet();
        },
        selectedItem: id,
        hasIcons: false
      };
      id = undefined;
      if (channel != null) {
        id = channel.id;
      }
      openLazy(tmp10, "SelectUpdatesChannel", obj3);
    },
    children: items6
  };
  const PressableOpacity = tmp2(5916).PressableOpacity;
  intl2 = tmp2(1126).intl;
  items5 = [, , ];
  ({ padding: arr6[0], radius: arr6[1] } = inputStyles);
  items5[2] = tmp.channelSelectorButton;
  if (null != LocationIcon) {
    const obj9 = { style: tmp.channelIcon };
    tmp12Result = closure_11(LocationIcon, obj9);
  } else {
    const obj10 = { source: channelIcon, style: tmp.channelIcon };
    tmp12Result = closure_11(tmp2(1188).Icon, obj10);
  }
  items6 = [tmp12Result, , ];
  const obj11 = { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp7 };
  items6[1] = closure_11(guild(4892).Text, obj11);
  const obj12 = { source: channel(9222) };
  const Icon = tmp2(1188).Icon;
  items6[2] = closure_11(Icon, obj12);
  items4[1] = closure_12(PressableOpacity, obj8);
  return closure_12(View, obj6);
};