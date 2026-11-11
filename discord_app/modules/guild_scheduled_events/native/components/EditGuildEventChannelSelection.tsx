// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageChannelUpsellDefault from "StageChannelUpsell.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildScheduledEventStore from "../../GuildScheduledEventStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ ChannelTypes: closure_9, Permissions: closure_10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5243);
let closure_13 = createStyles.createStyles({
  container: { flexDirection: "column" },
  channelTypeText: { flex: 1, marginBottom: 8 },
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx",
);

export default function EditGuildEventChannelSelection(guild) {
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  const tmp = closure_13();
  closure_5 = tmp2;
  closure_6 = guild(7963).useGetEventChannelsByType(guild.id, channelType);
  let obj = guild(7963);
  guild(7946).useChannelsUserCanStartStageIn(guild);
  const tmp6 = channel(5891)(channel);
  let obj2 = guild(7946);
  items = [closure_5];
  closure_8 = guild(504).useStateFromStores(items, () => PermissionStore.can(constants2.MANAGE_CHANNELS, guild));
  let obj3 = guild(504);
  const items1 = [closure_8];
  const items2 = [guildEventId];
  constants = guild(504).useStateFromStores(
    items1,
    () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId),
    items2,
  );
  if (null != channel) {
    let channelIcon = tmp3(7968).getChannelIcon(channel);
    const tmp3Result = tmp3(7968);
  } else {
    channelIcon = channel(7948);
  }
  if (null != channel) {
    let LocationIcon = tmp3(7968).getChannelIconComponent(channel);
    const tmp3Result2 = tmp3(7968);
  } else {
    LocationIcon = tmp3(7949).LocationIcon;
  }
  let intl = tmp3(1113).intl;
  let string = intl.string;
  let t = tmp3(1113).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    let stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  const obj5 = { style: null, children: null };
  const items3 = [tmp.container, guild.style];
  obj5.style = items3;
  const items4 = [
    closure_11(guild(5866).Heading, {
      style: tmp.channelTypeText,
      variant: "body-sm/semibold",
      color: "text-subtle",
      children: stringResult,
    }),
  ];
  const obj7 = {
    start: true,
    end: true,
    accessibilityLabel: stringResult,
    accessibilityHint: null,
    accessibilityValue: null,
    accessibilityRole: "button",
    onPress: null,
    icon: null,
    label: null,
    trailing: null,
    arrow: false,
  };
  const intl2 = tmp3(1113).intl;
  obj7.accessibilityHint = intl2.string(guild(1113).t.AaXbMD);
  obj7.accessibilityValue = { text: tmp6 };
  obj7.onPress = function handleSelectChannel() {
    let result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    let tmp4 = null;
    const mapped = closure_6.map((id) => {
      const obj = { value: id.id, label: guild(recurrenceId[11]).computeChannelName(id, length, closure_1_6, true) };
      return obj;
    });
    if (0 === length.length) {
      tmp4 = null;
      if (closure_8) {
        let obj2 = {
          guildId: guild.id,
          onCreate(channel) {
            const obj2 = { channel, guildEvent, recurrenceId };
            const result = guild(7924).openCreateOrEditGuildEventModal(closure_1_0, obj2);
            const obj = guild(7924);
          },
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
        channel(5489).hideActionSheet();
        const obj = channel(5489);
      },
      selectedItem: null,
      hasIcons: false,
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj4.selectedItem = id;
    obj3.openLazy(asyncRequireImpl(7944, dependencyMap.paths), "SelectUpdatesChannel", obj4);
    const tmp9 = asyncRequireImpl(7944, dependencyMap.paths);
  };
  if (null != LocationIcon) {
    let tmp11Result = closure_11(LocationIcon, {});
  } else {
    const obj8 = { source: channelIcon };
    tmp11Result = closure_11(tmp3(1187).Icon, obj8);
  }
  obj7.icon = tmp11Result;
  obj7.label = closure_11(guild(5866).Text, {
    variant: "body-md/medium",
    color: "interactive-text-active",
    children: tmp6,
  });
  let obj4 = guild(504);
  const obj6 = {
    style: tmp.channelTypeText,
    variant: "body-sm/semibold",
    color: "text-subtle",
    children: stringResult,
  };
  obj7.trailing = closure_11(guild(1187).Icon, { source: channel(7945) });
  items4[1] = closure_11(guild(7379).TableRow, obj7);
  obj5.children = items4;
  return closure_12(View, obj5);
}
