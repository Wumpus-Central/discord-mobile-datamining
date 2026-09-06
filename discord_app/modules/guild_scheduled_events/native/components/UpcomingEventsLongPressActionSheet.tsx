// discord_app/modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const View = fn(17).View;
const ReadStateTypes = fn(4742).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ headerIcon: { marginRight: 16 } });
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx",
);

export default function UpcomingEventsLongPressActionSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj1 = guildId(504);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () =>
    UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId),
  );
  obj = { leading: null, title: null };
  obj = { style: closure_9().headerIcon, children: null };
  obj1 = { guild: stateFromStores, size: null };
  const tmp = closure_9();
  const tmp8 = stateFromStores1;
  obj1.size = guildId(5584).GuildIconSizes.LARGE;
  obj.children = closure_7(stateFromStores1(5584), obj1);
  obj.leading = closure_7(View, obj);
  const intl = guildId(1114).intl;
  obj.title = intl.string(guildId(1114).t.tlopTM);
  const items2 = [closure_7(guildId(7149).BottomSheetTitleHeader, obj), ,];
  const obj2 = { leading: null, label: null, onPress: null };
  const tmp9 = stateFromStores1(5584);
  obj2.leading = closure_7(guildId(1178).Icon, { source: stateFromStores1(12376) });
  const obj4 = { text: null };
  const intl2 = guildId(1114).intl;
  obj4.text = intl2.string(guildId(1114).t.e6RscS);
  obj2.label = closure_7(guildId(8593).FormLabel, obj4);
  obj2.onPress = function onPress() {
    ReadStateActionCreators.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items2[1] = closure_7(guildId(8593).FormRow, obj2);
  const obj5 = { leading: null, label: null, onPress: null };
  const obj3 = { source: stateFromStores1(12376) };
  obj5.leading = closure_7(guildId(1178).Icon, { source: tmp8(stateFromStores1 ? 12377 : 12378) });
  const intl3 = tmp2(1114).intl;
  const string = intl3.string;
  const t = tmp2(1114).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj7 = { children: null };
  obj5.label = closure_7(guildId(8593).FormLabel, { text: stringResult });
  obj5.onPress = function onPress() {
    const obj = { mute_scheduled_events: !stateFromStores1 };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
  };
  items2[2] = closure_7(guildId(8593).FormRow, obj5);
  obj7.children = items2;
  return closure_8(guildId(7198).ActionSheet, obj7);
}
