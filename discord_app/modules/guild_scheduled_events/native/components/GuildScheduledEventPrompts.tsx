// === Module 9866: GuildScheduledEventPrompts ===

// Module 9866 (GuildScheduledEventPrompts)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Form from "Form" /* 8951 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9867 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { actionBarCTAContainer: { marginVertical: 4 }, iconStyle: null, iconContainerStyle: null, greenIcon: null };
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj2.iconStyle = size;
obj2.iconContainerStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
obj2.greenIcon = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = function ScheduleEventPrompt(isLive) {
  ({ guild: require, channel } = isLive);
  const tmp = closure_4();
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    const obj3 = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(closure_1_0, { channel });
        },
      iconSource: channel(9965),
      iconStyle: null,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    };
    ({ iconStyle: obj2.iconStyle, iconContainerStyle: obj2.iconContainerStyle } = tmp);
    obj3.completed = isLive.isLive;
    const intl = util.intl;
    obj3.title = intl.string(util.t["60lJ0C"]);
    const intl2 = util.intl;
    obj3.subtitle = intl2.string(util.t["EYn7/y"]);
    tmp4 = jsx(Form.FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(closure_1_0, { channel });
        },
      iconSource: channel(9965),
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
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    const obj2 = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(9965),
      iconStyle: tmp.iconStyle,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    };
    const items = [, ];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    obj2.iconContainerStyle = items;
    obj2.completed = isLive;
    const intl = tmp2(1115).intl;
    const obj3 = { eventName: name };
    obj2.title = intl.formatToPlainString(tmp2(1115).t["1vGXqM"], obj3);
    const intl2 = tmp2(1115).intl;
    const obj4 = { startTime: tmp2(4507).calendarFormat(recurrenceId(4416)(scheduled_start_time)) };
    obj2.subtitle = intl2.formatToPlainString(tmp2(1115).t.PTebCR, obj4);
    tmp4 = jsx(tmp2(8951).FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(9965),
      iconStyle: tmp.iconStyle,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    });
    const tmp2Result = tmp2(4507);
  }
  return tmp4;
};