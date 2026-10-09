// === Module 10935: GuildScheduledEventPrompts ===

// Module 10935 (GuildScheduledEventPrompts)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 8518 */;
import Form from "Form" /* 8563 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { actionBarCTAContainer: { marginVertical: 4 }, iconStyle: null, iconContainerStyle: null, greenIcon: null, promptIconStyle: null };
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj2.iconStyle = size;
obj2.iconContainerStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
obj2.greenIcon = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
const size1 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
obj2.promptIconStyle = size1;
let closure_4 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScheduleEventPrompt(guild) {
  const cResult = guild(576).c(10);
  guild = guild.guild;
  const channel = guild.channel;
  const isLive = guild.isLive;
  const tmp4 = closure_4();
  const obj = guild(576);
  if (obj2.useManageResourcePermissions(channel).canCreateGuildEvent) {
    if (cResult[0] === channel) {
      if (cResult[1] === guild) {
        let tmp6 = cResult[2];
      }
      const _Symbol = Symbol;
      ({ actionBarCTAContainer, promptIconStyle } = tmp4);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["60lJ0C"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["EYn7/y"]);
        cResult[3] = stringResult;
        cResult[4] = stringResult1;
        let tmp9 = stringResult1;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === isLive) {
          if (cResult[7] === tmp4.actionBarCTAContainer) {
            if (cResult[8] === tmp4.promptIconStyle) {
              let tmp12 = cResult[9];
            }
            return tmp12;
          }
        }
      }
      const obj3 = { style: actionBarCTAContainer, onPress: tmp6, iconSource: channel(8648), iconStyle: promptIconStyle, completed: isLive, title: tmp8, subtitle: tmp9 };
      const tmp15 = jsx(tmp(8563).FormCTA, { style: actionBarCTAContainer, onPress: tmp6, iconSource: channel(8648), iconStyle: promptIconStyle, completed: isLive, title: tmp8, subtitle: tmp9 });
      cResult[5] = tmp6;
      cResult[6] = isLive;
      cResult[7] = tmp4.actionBarCTAContainer;
      cResult[8] = tmp4.promptIconStyle;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
    function handleScheduleEvent() {
      const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, { channel });
    }
    cResult[0] = channel;
    cResult[1] = guild;
    cResult[2] = handleScheduleEvent;
    tmp6 = handleScheduleEvent;
  } else {
    return null;
  }
  obj2 = guild(8556);
}) : (function ScheduleEventPrompt(isLive) {
  ({ guild: require, channel } = isLive);
  const tmp = closure_4();
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    const obj2 = {
      style: tmp.actionBarCTAContainer,
      onPress: function handleScheduleEvent() {
          const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(closure_1_0, { channel });
        },
      iconSource: channel(8648),
      iconStyle: tmp.promptIconStyle,
      completed: isLive.isLive,
      title: null,
      subtitle: null
    };
    const intl = util.intl;
    obj2.title = intl.string(util.t["60lJ0C"]);
    const intl2 = util.intl;
    obj2.subtitle = intl2.string(util.t["EYn7/y"]);
    tmp4 = jsx(Form.FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress: function handleScheduleEvent() {
          const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(closure_1_0, { channel });
        },
      iconSource: channel(8648),
      iconStyle: tmp.promptIconStyle,
      completed: isLive.isLive,
      title: null,
      subtitle: null
    });
  }
  return tmp4;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = tmp3;
export const StartEventPrompt = ReactCompilerGating.isReactCompilerEnabled() ? (function StartEventPrompt(event) {
  const cResult = event(576).c(18);
  event = event.event;
  const recurrenceId = event.recurrenceId;
  const isLive = event.isLive;
  const tmp4 = closure_4();
  ({ name, scheduled_start_time } = event);
  const obj = event(576);
  if (obj2.useManageResourcePermissions(event.channel).canManageGuildEvent(event)) {
    if (cResult[0] === event) {
      if (cResult[1] === recurrenceId) {
        let tmp6 = cResult[2];
      }
      if (cResult[3] === tmp4.greenIcon) {
        if (cResult[4] === tmp4.iconContainerStyle) {
          let tmp9 = cResult[5];
        }
        if (cResult[6] !== name) {
          const intl = tmp(1126).intl;
          const obj3 = { eventName: name };
          const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["1vGXqM"], obj3);
          cResult[6] = name;
          cResult[7] = formatToPlainStringResult;
          let tmp10 = formatToPlainStringResult;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] !== scheduled_start_time) {
          const intl2 = tmp(1126).intl;
          const obj4 = { startTime: tmp(4752).calendarFormat(recurrenceId(4661)(scheduled_start_time)) };
          const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(1126).t.PTebCR, obj4);
          cResult[8] = scheduled_start_time;
          cResult[9] = formatToPlainStringResult1;
          let tmp12 = formatToPlainStringResult1;
          const tmpResult = tmp(4752);
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] === tmp6) {
          if (cResult[11] === isLive) {
            if (cResult[12] === tmp4.actionBarCTAContainer) {
              if (cResult[13] === tmp4.iconStyle) {
                if (cResult[14] === tmp9) {
                  if (cResult[15] === tmp10) {
                    if (cResult[16] === tmp12) {
                      let tmp15 = cResult[17];
                    }
                    return tmp15;
                  }
                }
              }
            }
          }
        }
        const obj5 = { style: tmp7, onPress: tmp6, iconSource: recurrenceId(8646), iconStyle: tmp8, iconContainerStyle: tmp9, completed: isLive, title: tmp10, subtitle: tmp12 };
        const tmp18 = jsx(tmp(8563).FormCTA, { style: tmp7, onPress: tmp6, iconSource: recurrenceId(8646), iconStyle: tmp8, iconContainerStyle: tmp9, completed: isLive, title: tmp10, subtitle: tmp12 });
        cResult[10] = tmp6;
        cResult[11] = isLive;
        cResult[12] = tmp4.actionBarCTAContainer;
        cResult[13] = tmp4.iconStyle;
        cResult[14] = tmp9;
        cResult[15] = tmp10;
        cResult[16] = tmp12;
        cResult[17] = tmp18;
        tmp15 = tmp18;
      }
      const items = [, ];
      ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp4);
      cResult[3] = tmp4.greenIcon;
      cResult[4] = tmp4.iconContainerStyle;
      cResult[5] = items;
      tmp9 = items;
    }
    function handleStartEvent() {
      const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
    }
    cResult[0] = event;
    cResult[1] = recurrenceId;
    cResult[2] = handleStartEvent;
    tmp6 = handleStartEvent;
  } else {
    return null;
  }
  obj2 = event(8556);
}) : (function StartEventPrompt(event) {
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
          const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(8646),
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
    const intl = tmp2(1126).intl;
    const obj3 = { eventName: name };
    obj2.title = intl.formatToPlainString(tmp2(1126).t["1vGXqM"], obj3);
    const intl2 = tmp2(1126).intl;
    const obj4 = { startTime: tmp2(4752).calendarFormat(recurrenceId(4661)(scheduled_start_time)) };
    obj2.subtitle = intl2.formatToPlainString(tmp2(1126).t.PTebCR, obj4);
    tmp4 = jsx(tmp2(8563).FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress: function handleStartEvent() {
          const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(8646),
      iconStyle: tmp.iconStyle,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    });
    const tmp2Result = tmp2(4752);
  }
  return tmp4;
});