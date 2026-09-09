// === Module 9729: GuildScheduledEventPrompts ===

// Module 9729 (GuildScheduledEventPrompts)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Form from "Form" /* 8626 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9703 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9730 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4574);
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
      iconSource: channel(9815),
      iconStyle: null,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    };
    ({ iconStyle: obj2.iconStyle, iconContainerStyle: obj2.iconContainerStyle } = tmp);
    obj.completed = isLive.isLive;
    const intl = util.intl;
    obj.title = intl.string(util.t["60lJ0C"]);
    const intl2 = util.intl;
    obj.subtitle = intl2.string(util.t["EYn7/y"]);
    tmp4 = jsx(Form.FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const obj = { channel };
          const result = obj.openCreateOrEditGuildEventModal(closure_1_0, obj);
        },
      iconSource: channel(9815),
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
  let obj = event(9703);
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    obj = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(9815),
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
    const obj1 = { startTime: tmp2(4255).calendarFormat(recurrenceId(4166)(scheduled_start_time)) };
    obj.subtitle = intl2.formatToPlainString(tmp2(1114).t.PTebCR, obj1);
    tmp4 = jsx(tmp2(8626).FormCTA, { eventName: name });
    const tmp2Result = tmp2(4255);
  }
  return tmp4;
};