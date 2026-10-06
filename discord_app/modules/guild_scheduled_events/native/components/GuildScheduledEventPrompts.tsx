// === Module 9208: GuildScheduledEventPrompts ===

// Module 9208 (GuildScheduledEventPrompts)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Form from "Form" /* 8924 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9204 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9209 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let event, guild;

let obj2;
let obj3;
let size;
let size1;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { actionBarCTAContainer: { marginVertical: 4 }, iconStyle: size, iconContainerStyle: obj2, greenIcon: obj3, promptIconStyle: size1 };
size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
size1 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
let closure_4 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let actionBarCTAContainer;
  let promptIconStyle;
  let obj = guild(576);
  const cResult = obj.c(10);
  guild = guild.guild;
  const channel = guild.channel;
  const isLive = guild.isLive;
  const tmp4 = closure_4();
  let obj2 = guild(9204);
  if (obj2.useManageResourcePermissions(channel).canCreateGuildEvent) {
    if (cResult[0] === channel) {
      let tmp6;
      let tmp9;
      let tmp8;
      if (cResult[1] === guild) {
        tmp6 = cResult[2];
      }
      const _Symbol = Symbol;
      ({ actionBarCTAContainer, promptIconStyle } = tmp4);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guild(1126).t["60lJ0C"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(guild(1126).t["EYn7/y"]);
        cResult[3] = stringResult;
        cResult[4] = stringResult1;
        tmp9 = stringResult1;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === isLive) {
          if (cResult[7] === tmp4.actionBarCTAContainer) {
            let tmp12;
            if (cResult[8] === tmp4.promptIconStyle) {
              tmp12 = cResult[9];
            }
            return tmp12;
          }
        }
      }
      const FormCTA = tmp(8924).FormCTA;
      const tmp15 = <FormCTA style={actionBarCTAContainer} onPress={tmp6} iconSource={channel(9311)} iconStyle={promptIconStyle} completed={isLive} title={tmp8} subtitle={tmp9} />;
      cResult[5] = tmp6;
      cResult[6] = isLive;
      cResult[7] = tmp4.actionBarCTAContainer;
      cResult[8] = tmp4.promptIconStyle;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
    const fn = function l() {
      const obj = GuildScheduledEventModalActionCreators;
      const obj2 = { channel };
      const result = obj.openCreateOrEditGuildEventModal(guild, obj2);
    };
    cResult[0] = channel;
    cResult[1] = guild;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    return null;
  }
}) : ((isLive) => {
  let channel;
  ({ guild: require, channel } = isLive);
  isLive = isLive.isLive;
  const tmp = closure_4();
  let obj = useManageResourcePermissions;
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    const FormCTA = Form.FormCTA;
    const intl = intl3.intl;
    const intl2 = intl3.intl;
    tmp4 = <FormCTA style={tmp.actionBarCTAContainer} onPress={function onPress() {
      const obj = GuildScheduledEventModalActionCreators;
      const obj2 = { channel };
      const result = obj.openCreateOrEditGuildEventModal(require, obj2);
    }} iconSource={channel(9311)} iconStyle={tmp.promptIconStyle} completed={isLive} title={intl.string(intl3.t["60lJ0C"])} subtitle={intl2.string(intl3.t["EYn7/y"])} />;
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let name;
  let scheduled_start_time;
  let tmpResult;
  let obj = event(576);
  const cResult = obj.c(18);
  event = event.event;
  const recurrenceId = event.recurrenceId;
  const isLive = event.isLive;
  const channel = event.channel;
  const tmp4 = closure_4();
  ({ name, scheduled_start_time } = event);
  const obj2 = event(9204);
  if (obj2.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    if (cResult[0] === event) {
      let tmp6;
      if (cResult[1] === recurrenceId) {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp4.greenIcon) {
        let tmp9;
        let tmp10;
        let tmp12;
        if (cResult[4] === tmp4.iconContainerStyle) {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== name) {
          const intl = tmp(1126).intl;
          const obj3 = { eventName: name };
          const formatToPlainStringResult = intl.formatToPlainString(event(1126).t["1vGXqM"], obj3);
          cResult[6] = name;
          cResult[7] = formatToPlainStringResult;
          tmp10 = formatToPlainStringResult;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] !== scheduled_start_time) {
          const intl2 = tmp(1126).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj4 = { startTime: tmpResult.calendarFormat(recurrenceId(4467)(scheduled_start_time)) };
          const PTebCR = tmp(1126).t.PTebCR;
          tmpResult = event(4558);
          const formatToPlainStringResult1 = formatToPlainString(PTebCR, obj4);
          cResult[8] = scheduled_start_time;
          cResult[9] = formatToPlainStringResult1;
          tmp12 = formatToPlainStringResult1;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] === tmp6) {
          if (cResult[11] === isLive) {
            if (cResult[12] === tmp4.actionBarCTAContainer) {
              if (cResult[13] === tmp4.iconStyle) {
                if (cResult[14] === tmp9) {
                  if (cResult[15] === tmp10) {
                    let tmp15;
                    if (cResult[16] === tmp12) {
                      tmp15 = cResult[17];
                    }
                    return tmp15;
                  }
                }
              }
            }
          }
        }
        const FormCTA = tmp(8924).FormCTA;
        const tmp18 = <FormCTA style={tmp7} onPress={tmp6} iconSource={recurrenceId(9308)} iconStyle={tmp8} iconContainerStyle={tmp9} completed={isLive} title={tmp10} subtitle={tmp12} />;
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
    const fn = function l() {
      const obj = GuildScheduledEventModalActionCreators;
      const result = obj.openStartGuildEventModal(event, recurrenceId);
    };
    cResult[0] = event;
    cResult[1] = recurrenceId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    return null;
  }
}) : ((event) => {
  let channel;
  let isLive;
  let name;
  let scheduled_start_time;
  let tmp2Result;
  event = event.event;
  const recurrenceId = event.recurrenceId;
  ({ channel, isLive } = event);
  const tmp = closure_4();
  ({ name, scheduled_start_time } = event);
  let obj = event(9204);
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    const FormCTA = tmp2(8924).FormCTA;
    const items = [, ];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    const intl = tmp2(1126).intl;
    const obj3 = { eventName: name };
    const intl2 = tmp2(1126).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const obj4 = { startTime: tmp2Result.calendarFormat(recurrenceId(4467)(scheduled_start_time)) };
    const PTebCR = tmp2(1126).t.PTebCR;
    tmp4 = <FormCTA style={tmp.actionBarCTAContainer} onPress={function onPress() {
      const obj = GuildScheduledEventModalActionCreators;
      const result = obj.openStartGuildEventModal(event, recurrenceId);
    }} iconSource={recurrenceId(9308)} iconStyle={tmp.iconStyle} iconContainerStyle={items} completed={isLive} title={intl.formatToPlainString(event(1126).t["1vGXqM"], obj3)} subtitle={formatToPlainString(PTebCR, obj4)} />;
    tmp2Result = event(4558);
  }
  return tmp4;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = tmp4;
export const StartEventPrompt = tmp5;