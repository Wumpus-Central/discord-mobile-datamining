// discord_app/modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx
import "module_5245";
import { View } from "registerAsset";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { ReadStateTypes } from "ReadStateTypes";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ headerIcon: { marginRight: 16 } });
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default function UpcomingEventsLongPressActionSheet(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let obj = guildId(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(guildId));
  let obj1 = guildId(589);
  const items1 = [updateUserGuildSettingsInternal];
  stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.isMuteScheduledEventsEnabled(guildId));
  obj = { leading: null, title: null };
  obj = { style: callback2().headerIcon, children: null };
  obj1 = { guild: stateFromStores, size: null };
  const tmp = callback2();
  const tmp6 = closure_8;
  const tmp8 = stateFromStores1;
  obj1[1] = guildId(5700).GuildIconSizes.LARGE;
  obj[1] = callback(stateFromStores1(5700), obj1);
  obj[0] = callback(View, obj);
  const intl = guildId(1236).intl;
  obj[1] = intl.string(guildId(1236).t.tlopTM);
  const items2 = [callback(guildId(5376).BottomSheetTitleHeader, obj), , ];
  const obj2 = { leading: null, label: null, onPress: null };
  const obj3 = { source: null };
  obj3[0] = stateFromStores1(11668);
  obj2[0] = callback(guildId(1297).Icon, obj3);
  const obj4 = { text: null };
  const intl2 = guildId(1236).intl;
  obj4[0] = intl2.string(guildId(1236).t.e6RscS);
  obj2[1] = callback(guildId(7890).FormLabel, obj4);
  obj2[2] = function onPress() {
    guildId(outer1_2[15]).ackGuildFeature(guildId, outer1_6.GUILD_EVENT);
    const obj = guildId(outer1_2[15]);
    stateFromStores1(outer1_2[16]).hideActionSheet();
  };
  items2[1] = callback(guildId(7890).FormRow, obj2);
  const obj5 = { leading: null, label: null, onPress: null };
  const obj6 = { source: null };
  obj6[0] = tmp8(stateFromStores1 ? 11669 : 11670);
  obj5[0] = callback(guildId(1297).Icon, obj6);
  const intl3 = tmp2(1236).intl;
  const string = intl3.string;
  const t = tmp2(1236).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj7 = { children: null };
  obj5[1] = callback(guildId(7890).FormLabel, { text: stringResult });
  obj5[2] = function onPress() {
    let obj = stateFromStores1(outer1_2[19]);
    obj = { mute_scheduled_events: !stateFromStores1 };
    const NotificationLabel = guildId(outer1_2[20]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
  };
  items2[2] = callback(guildId(7890).FormRow, obj5);
  obj7[0] = items2;
  return tmp6(guildId(5685).ActionSheet, obj7);
};