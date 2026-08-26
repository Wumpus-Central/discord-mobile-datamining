// discord_app/modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/GuildStore.tsx";
import closure_5 from "../../../../stores/UserGuildSettingsStore.tsx";
import { ReadStateTypes } from "../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  obj1[1] = guildId(5951).GuildIconSizes.LARGE;
  obj[1] = callback(stateFromStores1(5951), obj1);
  obj[0] = callback(View, obj);
  const intl = guildId(1236).intl;
  obj[1] = intl.string(guildId(1236).t.tlopTM);
  const items2 = [callback(guildId(5568).BottomSheetTitleHeader, obj), , ];
  const obj2 = { leading: null, label: null, onPress: null };
  const tmp9 = stateFromStores1(5951);
  obj2[0] = callback(guildId(1297).Icon, { source: stateFromStores1(12018) });
  const obj4 = { text: null };
  const intl2 = guildId(1236).intl;
  obj4[0] = intl2.string(guildId(1236).t.e6RscS);
  obj2[1] = callback(guildId(8185).FormLabel, obj4);
  obj2[2] = function onPress() {
    guildId(closure_1_2[15]).ackGuildFeature(guildId, closure_1_6.GUILD_EVENT);
    const obj = guildId(closure_1_2[15]);
    stateFromStores1(closure_1_2[16]).hideActionSheet();
  };
  items2[1] = callback(guildId(8185).FormRow, obj2);
  const obj5 = { leading: null, label: null, onPress: null };
  const obj3 = { source: stateFromStores1(12018) };
  obj5[0] = callback(guildId(1297).Icon, { source: tmp8(stateFromStores1 ? 12019 : 12020) });
  const intl3 = tmp2(1236).intl;
  const string = intl3.string;
  const t = tmp2(1236).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj7 = { children: null };
  obj5[1] = callback(guildId(8185).FormLabel, { text: stringResult });
  obj5[2] = function onPress() {
    let obj = stateFromStores1(closure_1_2[19]);
    obj = { mute_scheduled_events: !stateFromStores1 };
    const NotificationLabel = guildId(closure_1_2[20]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
  };
  items2[2] = callback(guildId(8185).FormRow, obj5);
  obj7[0] = items2;
  return tmp6(guildId(5936).ActionSheet, obj7);
};