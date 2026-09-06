// === Module 9697: GuildScheduledEventPrompts ===

// Module 9697 (GuildScheduledEventPrompts)
import nativeDefault from "native" /* 576 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9671 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9698 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { actionBarCTAContainer: { marginVertical: 4 }, iconStyle: null, iconContainerStyle: null, greenIcon: null };
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
createStyles.iconStyle = size;
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
createStyles.iconContainerStyle = createStyles;
createStyles.greenIcon = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_4 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = function ScheduleEventPrompt(isLive) {
  ({ guild: require, channel } = isLive);
  const tmp = closure_4();
  let obj = useManageResourcePermissions;
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    obj = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const obj = { channel };
          const result = obj.openCreateOrEditGuildEventModal(closure_1_0, obj);
        },
      iconSource: channel(9783),
      iconStyle: null,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    };
    ({ iconStyle: obj2.iconStyle, iconContainerStyle: obj2.iconContainerStyle } = tmp);
    obj.completed = isLive.isLive;
    const intl = tmp2(1114).intl;
    obj.title = intl.string(tmp2(1114).t["60lJ0C"]);
    const intl2 = tmp2(1114).intl;
    obj.subtitle = intl2.string(tmp2(1114).t["EYn7/y"]);
    tmp4 = jsx(tmp2(8593).FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const obj = { channel };
          const result = obj.openCreateOrEditGuildEventModal(closure_1_0, obj);
        },
      iconSource: channel(9783),
      iconStyle: null,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    });
  }
  return tmp4;
};
export const StartEventPrompt = function StartEventPrompt(event) {
  event = event.event;
  const recurrenceId = event.recurrenceId;
  ({ channel, isLive } = event);
  const tmp = closure_4();
  ({ name, scheduled_start_time } = event);
  let obj = event(9671);
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    obj = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(9783),
      iconStyle: tmp.iconStyle,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    };
    const items = [, ];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    obj.iconContainerStyle = items;
    obj.completed = isLive;
    const intl = tmp2(1114).intl;
    obj = { eventName: name };
    obj.title = intl.formatToPlainString(tmp2(1114).t["1vGXqM"], obj);
    const intl2 = tmp2(1114).intl;
    const obj1 = { startTime: tmp2(4242).calendarFormat(recurrenceId(4153)(scheduled_start_time)) };
    obj.subtitle = intl2.formatToPlainString(tmp2(1114).t.PTebCR, obj1);
    tmp4 = jsx(tmp2(8593).FormCTA, { eventName: name });
    const tmp2Result = tmp2(4242);
  }
  return tmp4;
};