// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/PermissionStore.tsx";
import closure_6 from "../../../../stores/RelationshipStore.tsx";
import closure_7 from "../../../../stores/UserStore.tsx";
import closure_8 from "../../GuildScheduledEventStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ ChannelTypes: c9, Permissions: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: { flexDirection: "column" }, channelSelectorButton: null, channelIcon: null, channelTypeText: null, channelNameText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginRight: 8 };
createCacheKey[3] = { flex: 1, marginBottom: 8 };
createCacheKey[4] = { flex: 1 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let constants;
  const tmp = callback2();
  let obj = guild(6109);
  const inputStyles = obj.useInputStyles({ hasLeadingIcon: true });
  closure_5 = tmp5;
  obj1 = guild(9131);
  closure_6 = obj1.useGetEventChannelsByType(guild.id, channelType);
  let obj2 = guild(9117);
  closure_7 = obj2.useChannelsUserCanStartStageIn(guild);
  const tmp7 = channel(4574)(channel);
  let obj3 = guild(589);
  const items = [closure_5];
  closure_8 = obj3.useStateFromStores(items, () => closure_5.can(closure_1_10.MANAGE_CHANNELS, guild));
  let obj4 = guild(589);
  const items1 = [closure_8];
  const items2 = [guildEventId];
  constants = obj4.useStateFromStores(items1, () => guildScheduledEvent.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    let tmp2Result = tmp2(4866);
    let channelIcon = tmp2Result.getChannelIcon(channel);
  } else {
    channelIcon = tmp6(9119);
  }
  if (null != channel) {
    tmp2Result = tmp2(4866);
    let LocationIcon = tmp2Result.getChannelIconComponent(channel);
  } else {
    LocationIcon = tmp2(9120).LocationIcon;
  }
  let intl = tmp2(1236).intl;
  let string = intl.string;
  let t = tmp2(1236).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    let stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  obj = { style: items3, children: null };
  items3 = [tmp.container, guild.style];
  obj = { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult };
  const items4 = [callback(guild(4376).Text, obj), ];
  obj1 = { accessibilityLabel: stringResult, accessibilityHint: null, accessibilityValue: null, accessibilityRole: "button", style: null, onPress: null, children: null };
  const intl2 = tmp2(1236).intl;
  obj1[1] = intl2.string(guild(1236).t.AaXbMD);
  obj1[2] = { text: tmp7 };
  const items5 = [, , ];
  ({ padding: arr6[0], radius: arr6[1] } = inputStyles);
  items5[2] = tmp.channelSelectorButton;
  obj1[4] = items5;
  obj1[5] = function onPress() {
    let obj = guildEventId(closure_1_3[21]);
    let result = obj.dismissGlobalKeyboard();
    let tmp4 = null;
    const mapped = closure_6.map((id) => {
      const obj = { value: id.id, label: callback(table[13]).computeChannelName(id, closure_7, closure_6, true) };
      return obj;
    });
    if (0 === length.length) {
      tmp4 = null;
      if (closure_8) {
        obj = { guildId: null, onCreate: null };
        obj[0] = guild.id;
        obj[1] = function onCreate(channel) {
          let obj = closure_1_0(closure_1_3[23]);
          obj = { channel, guildEvent: closure_9, recurrenceId: closure_3 };
          const result = obj.openCreateOrEditGuildEventModal(closure_0, obj);
        };
        tmp4 = closure_1_11(channel(tmp[22]), obj);
      }
    }
    const obj3 = channel(closure_1_3[24]);
    const intl = guild(tmp[18]).intl;
    const string = intl.string;
    const t = guild(tmp[18]).t;
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
        const found = closure_6.find((id) => id.id === closure_0);
        if (null != found) {
          callback2(found);
        }
        closure_1_1(closure_1_3[24]).hideActionSheet();
      },
      selectedItem: null,
      hasIcons: false
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj[4] = id;
    obj3.openLazy(guild(closure_1_3[26])(closure_1_3[25], closure_1_3.paths), "SelectUpdatesChannel", obj);
  };
  if (null != LocationIcon) {
    obj2 = { style: null };
    obj2[0] = tmp.channelIcon;
    let tmp12Result = tmp12(LocationIcon, obj2);
  } else {
    obj3 = { source: null, style: null };
    obj3[0] = channelIcon;
    obj3[1] = tmp.channelIcon;
    tmp12Result = tmp12(tmp2(1297).Icon, obj3);
  }
  const items6 = [tmp12Result, , ];
  obj4 = { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp7 };
  items6[1] = callback(guild(4376).Text, obj4);
  items6[2] = callback(guild(1297).Icon, { source: channel(9116) });
  obj1[6] = items6;
  items4[1] = closure_12(guild(4949).PressableOpacity, obj1);
  obj[1] = items4;
  return closure_12(View, obj);
};