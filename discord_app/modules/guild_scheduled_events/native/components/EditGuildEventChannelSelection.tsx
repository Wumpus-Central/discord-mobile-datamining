// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx
import "Text";
import { View } from "LocationIcon";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import scheduledEventSort from "scheduledEventSort";
import ME from "ME";
import jsxProd from "dismissGlobalKeyboard";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let unpackModuleId;
const require = arg1;
({ ChannelTypes: c9, Permissions: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: { flexDirection: "column" }, channelSelectorButton: null, channelIcon: null, channelTypeText: null, channelNameText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginRight: 8 };
createCacheKey[3] = { flex: 1, marginBottom: 8 };
createCacheKey[4] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  let View;
  let channel;
  let channelType;
  let dependencyMap;
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  let c5;
  let markAllUserIdListsStale;
  let mergeGuildAvatar;
  let scheduledEventSort;
  let constants;
  const tmp = createCacheKey();
  let obj = guild(6002);
  const inputStyles = obj.useInputStyles({ hasLeadingIcon: true });
  c5 = tmp5;
  let obj1 = guild(8990);
  markAllUserIdListsStale = obj1.useGetEventChannelsByType(guild.id, channelType);
  let obj2 = guild(8976);
  mergeGuildAvatar = obj2.useChannelsUserCanStartStageIn(guild);
  const tmp7 = channel(4494)(channel);
  let obj3 = guild(589);
  const items = [c5];
  scheduledEventSort = obj3.useStateFromStores(items, () => _undefined.can(outer1_10.MANAGE_CHANNELS, guild));
  let obj4 = guild(589);
  const items1 = [scheduledEventSort];
  const items2 = [guildEventId];
  constants = obj4.useStateFromStores(items1, () => guildScheduledEvent.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    let tmp2Result = tmp2(4764);
    let channelIcon = tmp2Result.getChannelIcon(channel);
  } else {
    channelIcon = tmp6(8978);
  }
  if (null != channel) {
    tmp2Result = tmp2(4764);
    let LocationIcon = tmp2Result.getChannelIconComponent(channel);
  } else {
    LocationIcon = tmp2(8979).LocationIcon;
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
  const items4 = [callback(guild(4299).Text, obj), ];
  obj1 = { accessibilityLabel: stringResult, accessibilityHint: null, accessibilityValue: null, accessibilityRole: "button", style: null, onPress: null, children: null };
  const intl2 = tmp2(1236).intl;
  obj1[1] = intl2.string(guild(1236).t.AaXbMD);
  obj1[2] = { text: tmp7 };
  const items5 = [, , ];
  ({ padding: arr6[0], radius: arr6[1] } = inputStyles);
  items5[2] = tmp.channelSelectorButton;
  obj1[4] = items5;
  obj1[5] = function onPress() {
    let obj = guildEventId(outer1_3[21]);
    let result = obj.dismissGlobalKeyboard();
    let tmp4 = null;
    const mapped = markAllUserIdListsStale.map((id) => {
      const obj = { value: id.id, label: null };
      obj[1] = callback(table[13]).computeChannelName(id, mergeGuildAvatar, markAllUserIdListsStale, true);
      return obj;
    });
    if (0 === length.length) {
      tmp4 = null;
      if (scheduledEventSort) {
        obj = { guildId: null, onCreate: null };
        obj[0] = guild.id;
        obj[1] = function onCreate(channel) {
          let obj = outer1_0(outer1_3[23]);
          obj = { channel, guildEvent: null, recurrenceId: null };
          obj[1] = closure_9;
          obj[2] = closure_3;
          const result = obj.openCreateOrEditGuildEventModal(closure_0, obj);
        };
        tmp4 = outer1_11(channel(tmp[22]), obj);
      }
    }
    const obj3 = channel(outer1_3[24]);
    const intl = guild(tmp[18]).intl;
    const string = intl.string;
    const t = guild(tmp[18]).t;
    if (c5) {
      let stringResult = string(t.S7GjDz);
    } else {
      stringResult = string(t["7RYWCP"]);
    }
    obj = {
      title: stringResult,
      items: mapped,
      body: tmp4,
      onItemSelect(arg0) {
        let closure_0 = arg0;
        const found = markAllUserIdListsStale.find((id) => id.id === closure_0);
        if (null != found) {
          callback2(found);
        }
        outer1_1(outer1_3[24]).hideActionSheet();
      },
      selectedItem: null,
      hasIcons: false
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj[4] = id;
    obj3.openLazy(guild(outer1_3[26])(outer1_3[25], outer1_3.paths), "SelectUpdatesChannel", obj);
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
  items6[1] = callback(guild(4299).Text, obj4);
  const obj5 = { source: null };
  obj5[0] = channel(8975);
  items6[2] = callback(guild(1297).Icon, obj5);
  obj1[6] = items6;
  items4[1] = closure_12(guild(4846).PressableOpacity, obj1);
  obj[1] = items4;
  return closure_12(View, obj);
};