// === Module 11598: UpcomingEventsLongPressActionSheet ===

// Module 11598 (UpcomingEventsLongPressActionSheet)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "updateUserGuildSettingsInternal" /* 5048 */;
import { ReadStateTypes } from "ReadStateTypes" /* 5049 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ headerIcon: { marginRight: 16 } });
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default function UpcomingEventsLongPressActionSheet(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let obj = guildId(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(guildId));
  obj1 = guildId(589);
  const items1 = [closure_5];
  stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_5.isMuteScheduledEventsEnabled(guildId));
  obj = { leading: null, title: null };
  obj = { style: callback2().headerIcon, children: null };
  obj1 = { guild: stateFromStores, size: null };
  const tmp = callback2();
  const tmp6 = closure_8;
  const tmp8 = stateFromStores1;
  obj1[1] = guildId(7226).GuildIconSizes.LARGE;
  obj[1] = callback(stateFromStores1(7226), obj1);
  obj[0] = callback(View, obj);
  const intl = guildId(1236).intl;
  obj[1] = intl.string(guildId(1236).t.tlopTM);
  const items2 = [callback(guildId(6987).BottomSheetTitleHeader, obj), , ];
  const obj2 = { leading: null, label: null, onPress: null };
  const tmp9 = stateFromStores1(7226);
  obj2[0] = callback(guildId(1297).Icon, { source: stateFromStores1(11599) });
  const obj4 = { text: null };
  const intl2 = guildId(1236).intl;
  obj4[0] = intl2.string(guildId(1236).t.e6RscS);
  obj2[1] = callback(guildId(8122).FormLabel, obj4);
  obj2[2] = function onPress() {
    guildId(closure_1_2[15]).ackGuildFeature(guildId, closure_1_6.GUILD_EVENT);
    const obj = guildId(closure_1_2[15]);
    stateFromStores1(closure_1_2[16]).hideActionSheet();
  };
  items2[1] = callback(guildId(8122).FormRow, obj2);
  const obj5 = { leading: null, label: null, onPress: null };
  const obj3 = { source: stateFromStores1(11599) };
  obj5[0] = callback(guildId(1297).Icon, { source: tmp8(stateFromStores1 ? 11600 : 11601) });
  const intl3 = tmp2(1236).intl;
  const string = intl3.string;
  const t = tmp2(1236).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj7 = { children: null };
  obj5[1] = callback(guildId(8122).FormLabel, { text: stringResult });
  obj5[2] = function onPress() {
    let obj = stateFromStores1(closure_1_2[19]);
    obj = { mute_scheduled_events: !stateFromStores1 };
    const NotificationLabel = guildId(closure_1_2[20]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
  };
  items2[2] = callback(guildId(8122).FormRow, obj5);
  obj7[0] = items2;
  return tmp6(guildId(7213).ActionSheet, obj7);
};