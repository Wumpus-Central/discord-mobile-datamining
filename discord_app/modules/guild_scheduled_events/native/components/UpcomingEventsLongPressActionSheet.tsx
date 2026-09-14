// === Module 12505: UpcomingEventsLongPressActionSheet ===

// Module 12505 (UpcomingEventsLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7213 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7217 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7222 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;

require = fn;
const View = fn(17).View;
const ReadStateTypes = fn(4818).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let closure_9 = createStyles.createStyles({ headerIcon: { marginRight: 16 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default function UpcomingEventsLongPressActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_9();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(504);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId));
  const obj3 = { leading: null, title: null };
  const obj4 = { style: tmp.headerIcon, children: null };
  const obj5 = { guild: stateFromStores, size: null };
  const obj2 = guildId(504);
  const tmp8 = stateFromStores1;
  obj5.size = guildId(5665).GuildIconSizes.LARGE;
  obj4.children = closure_7(stateFromStores1(5665), obj5);
  obj3.leading = closure_7(View, obj4);
  const intl = guildId(1114).intl;
  obj3.title = intl.string(guildId(1114).t.tlopTM);
  const items2 = [closure_7(guildId(7252).BottomSheetTitleHeader, obj3), , ];
  const obj6 = { leading: null, label: null, onPress: null };
  const tmp9 = stateFromStores1(5665);
  obj6.leading = closure_7(guildId(1176).Icon, { source: stateFromStores1(12506) });
  const obj8 = { text: null };
  const intl2 = guildId(1114).intl;
  obj8.text = intl2.string(guildId(1114).t.e6RscS);
  obj6.label = closure_7(guildId(8716).FormLabel, obj8);
  obj6.onPress = function onPress() {
    ReadStateActionCreators.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items2[1] = closure_7(guildId(8716).FormRow, obj6);
  const obj9 = { leading: null, label: null, onPress: null };
  const obj7 = { source: stateFromStores1(12506) };
  obj9.leading = closure_7(guildId(1176).Icon, { source: tmp8(stateFromStores1 ? 12507 : 12508) });
  const intl3 = tmp2(1114).intl;
  const string = intl3.string;
  const t = tmp2(1114).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj11 = { children: null };
  obj9.label = closure_7(guildId(8716).FormLabel, { text: stringResult });
  obj9.onPress = function onPress() {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId, { mute_scheduled_events: !stateFromStores1 }, NotificationLabel.mutedEvents(!stateFromStores1));
  };
  items2[2] = closure_7(guildId(8716).FormRow, obj9);
  obj11.children = items2;
  return closure_8(guildId(7300).ActionSheet, obj11);
};