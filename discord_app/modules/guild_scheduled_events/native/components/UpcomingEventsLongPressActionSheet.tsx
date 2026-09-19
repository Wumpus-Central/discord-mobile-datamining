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
const ReadStateTypes = fn(4938).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let closure_9 = createStyles.createStyles({ headerIcon: { marginRight: 16 } });
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx",
);

export default function UpcomingEventsLongPressActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_9();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(504);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () =>
    UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId),
  );
  const obj3 = { leading: null, title: null };
  const obj4 = { style: tmp.headerIcon, children: null };
  const obj5 = { guild: stateFromStores, size: null };
  const obj2 = guildId(504);
  const tmp8 = stateFromStores1;
  obj5.size = guildId(5796).GuildIconSizes.LARGE;
  obj4.children = closure_7(stateFromStores1(5796), obj5);
  obj3.leading = closure_7(View, obj4);
  const intl = guildId(1115).intl;
  obj3.title = intl.string(guildId(1115).t.tlopTM);
  const items2 = [closure_7(guildId(7389).BottomSheetTitleHeader, obj3), ,];
  const obj6 = { leading: null, label: null, onPress: null };
  const tmp9 = stateFromStores1(5796);
  obj6.leading = closure_7(guildId(1177).Icon, { source: stateFromStores1(12628) });
  const obj8 = { text: null };
  const intl2 = guildId(1115).intl;
  obj8.text = intl2.string(guildId(1115).t.e6RscS);
  obj6.label = closure_7(guildId(8870).FormLabel, obj8);
  obj6.onPress = function onPress() {
    ReadStateActionCreators.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items2[1] = closure_7(guildId(8870).FormRow, obj6);
  const obj9 = { leading: null, label: null, onPress: null };
  const obj7 = { source: stateFromStores1(12628) };
  obj9.leading = closure_7(guildId(1177).Icon, { source: tmp8(stateFromStores1 ? 12629 : 12630) });
  const intl3 = tmp2(1115).intl;
  const string = intl3.string;
  const t = tmp2(1115).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj11 = { children: null };
  obj9.label = closure_7(guildId(8870).FormLabel, { text: stringResult });
  obj9.onPress = function onPress() {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
      guildId,
      { mute_scheduled_events: !stateFromStores1 },
      NotificationLabel.mutedEvents(!stateFromStores1),
    );
  };
  items2[2] = closure_7(guildId(8870).FormRow, obj9);
  obj11.children = items2;
  return closure_8(guildId(7437).ActionSheet, obj11);
}
