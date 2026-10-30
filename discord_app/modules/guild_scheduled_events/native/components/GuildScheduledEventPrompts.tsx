// discord_app/modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../GuildScheduledEventModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = {
  actionBarCTAContainer: { marginVertical: 4 },
  iconStyle: null,
  iconContainerStyle: null,
  greenIcon: null,
  promptIconStyle: null,
};
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj2.iconStyle = size;
obj2.iconContainerStyle = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.lg,
  padding: 4,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
obj2.greenIcon = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
const size1 = {
  tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT,
  width: nativeDefault.space.PX_24,
  height: nativeDefault.space.PX_24,
};
obj2.promptIconStyle = size1;
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx",
);

export function ScheduleEventPrompt(isLive) {
  ({ guild: require, channel } = isLive);
  const tmp = closure_4();
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    const obj2 = {
      style: tmp.actionBarCTAContainer,
      onPress: function handleScheduleEvent() {
        const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(
          closure_1_0,
          { channel },
        );
      },
      iconSource: channel(9097),
      iconStyle: tmp.promptIconStyle,
      completed: isLive.isLive,
      title: null,
      subtitle: null,
    };
    const intl = util.intl;
    obj2.title = intl.string(util.t["60lJ0C"]);
    const intl2 = util.intl;
    obj2.subtitle = intl2.string(util.t["EYn7/y"]);
    tmp4 = jsx(Form.FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress: function handleScheduleEvent() {
        const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(
          closure_1_0,
          { channel },
        );
      },
      iconSource: channel(9097),
      iconStyle: tmp.promptIconStyle,
      completed: isLive.isLive,
      title: null,
      subtitle: null,
    });
  }
  return tmp4;
}
export function StartEventPrompt(event) {
  event = event.event;
  const recurrenceId = event.recurrenceId;
  ({ channel, isLive } = event);
  const tmp = closure_4();
  ({ name, scheduled_start_time } = event);
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    const obj2 = {
      style: tmp.actionBarCTAContainer,
      onPress: function handleStartEvent() {
        const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(
          event,
          recurrenceId,
        );
      },
      iconSource: recurrenceId(9193),
      iconStyle: tmp.iconStyle,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null,
    };
    const items = [,];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    obj2.iconContainerStyle = items;
    obj2.completed = isLive;
    const intl = tmp2(1114).intl;
    const obj3 = { eventName: name };
    obj2.title = intl.formatToPlainString(tmp2(1114).t["1vGXqM"], obj3);
    const intl2 = tmp2(1114).intl;
    const obj4 = { startTime: tmp2(4831).calendarFormat(recurrenceId(2044)(scheduled_start_time)) };
    obj2.subtitle = intl2.formatToPlainString(tmp2(1114).t.PTebCR, obj4);
    tmp4 = jsx(tmp2(8169).FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress: function handleStartEvent() {
        const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(
          event,
          recurrenceId,
        );
      },
      iconSource: recurrenceId(9193),
      iconStyle: tmp.iconStyle,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null,
    });
    const tmp2Result = tmp2(4831);
  }
  return tmp4;
}
