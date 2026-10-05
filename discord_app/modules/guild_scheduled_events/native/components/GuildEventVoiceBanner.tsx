// === Module 13591: GuildEventVoiceBanner ===

// Module 13591 (GuildEventVoiceBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9174 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9279 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
let closure_6 = GuildScheduledEventStore.isGuildScheduledEventActive;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { header: obj2, descriptionContainerStyle: { paddingTop: 4 }, buttonContainer: { marginTop: 12 } };
obj2 = { margin: 12, padding: 12, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let event;
  let tmp7;
  let tmp8;
  let voiceChannelId;
  let tmp = channel;
  let obj = channel(event[8]);
  const cResult = obj.c(34);
  channel = channel.channel;
  const tmp4 = closure_9();
  let obj2 = channel(event[9]);
  const activeEvent = obj2.useActiveEvent(channel.id);
  let obj3 = channel(event[9]);
  const imminentUpcomingGuildEvents = obj3.useImminentUpcomingGuildEvents(channel.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    const fn = function h() {
      return voiceChannelId.getVoiceChannelId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let tmp11 = activeEvent;
  const tmpResult = tmp(event[10]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const id = channel.id;
  if (activeEvent == null) {
    event = undefined;
    if (imminentUpcomingGuildEvents != null) {
      event = imminentUpcomingGuildEvents[0];
    }
    tmp11 = event;
  }
  event = tmp11;
  const tmpResult3 = tmp(event[11]);
  const canManageGuildEvent = tmpResult3.useManageResourcePermissions(channel).canManageGuildEvent;
  if (cResult[2] === canManageGuildEvent) {
    let tmp15;
    if (cResult[5] !== tmp11) {
      const tmpResult4 = tmp(event[12]);
      const nextRecurrenceIdInEvent = tmpResult4.getNextRecurrenceIdInEvent(tmp11);
      cResult[5] = tmp11;
      cResult[6] = nextRecurrenceIdInEvent;
      tmp15 = nextRecurrenceIdInEvent;
    } else {
      tmp15 = cResult[6];
    }
    let closure_3 = tmp15;
    if (cResult[7] === activeEvent) {
      if (cResult[8] === channel) {
        if (cResult[9] === tmp11) {
          if (cResult[12] !== tmp11) {
            class P {
              constructor() {
                if (null != event) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj3 = { eventId: event.id, event };
                  const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
                  const result = obj2.openGuildEventDetails(obj3);
                }
              }
            }
            cResult[12] = tmp11;
            cResult[13] = P;
          } else {
            class P {
              constructor() {
                if (null != event) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj3 = { eventId: event.id, event };
                  const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
                  const result = obj2.openGuildEventDetails(obj3);
                }
              }
            }
          }
          if (null == tmp11) {
            class P {
              constructor() {
                if (null != event) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj3 = { eventId: event.id, event };
                  const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
                  const result = obj2.openGuildEventDetails(obj3);
                }
              }
            }
          } else {
            class P {
              constructor() {
                if (null != event) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj3 = { eventId: event.id, event };
                  const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
                  const result = obj2.openGuildEventDetails(obj3);
                }
              }
            }
            if (cResult[16] !== tmp11) {
              class P {
                constructor() {
                  if (null != event) {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                    const obj3 = { eventId: event.id, event };
                    const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
                    const result = obj2.openGuildEventDetails(obj3);
                  }
                }
              }
              const obj4 = { event: tmp11, showUserCount: false };
              cResult[16] = tmp11;
              cResult[17] = closure_7(tmp(event[17]).GuildEventCardHeader, obj4);
              const tmp20 = closure_7(tmp(event[17]).GuildEventCardHeader, obj4);
            } else {
              class P {
                constructor() {
                  if (null != event) {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                    const obj3 = { eventId: event.id, event };
                    const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
                    const result = obj2.openGuildEventDetails(obj3);
                  }
                }
              }
            }
            if (cResult[18] === tmp11) {
              class P {
                constructor() {
                  if (null != event) {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                    const obj3 = { eventId: event.id, event };
                    const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
                    const result = obj2.openGuildEventDetails(obj3);
                  }
                }
              }
            }
            const obj5 = { event: tmp11, descriptionContainerStyle: tmp4.descriptionContainerStyle, condensed: stateFromStores === id };
            cResult[18] = tmp11;
            cResult[19] = stateFromStores === id;
            cResult[20] = tmp4.descriptionContainerStyle;
            cResult[21] = closure_7(tmp(event[17]).GuildEventCardMetaInfo, obj5);
            const tmp24 = closure_7(tmp(event[17]).GuildEventCardMetaInfo, obj5);
          }
        }
      }
    }
    const fn2 = function _() {
      const tmp = null == activeEvent && null != first;
      if (tmp) {
        let obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = GuildScheduledEventModalActionCreators;
        let result = obj2.openStartGuildEventModal(first, closure_3, () => {
          const obj = channel(first[15]);
          const result = obj.openVoiceChannelActionSheet(closure_1_0);
        });
      }
    };
    cResult[7] = activeEvent;
    cResult[8] = channel;
    cResult[9] = tmp11;
    cResult[10] = tmp15;
    cResult[11] = fn2;
  }
  cResult[2] = canManageGuildEvent;
  cResult[3] = tmp11;
  cResult[4] = canManageGuildEvent(tmp11);
  canManageGuildEvent(tmp11);
}) : ((channel) => {
  let Button;
  let intl;
  let items2;
  let obj8;
  let voiceChannelId;
  channel = channel.channel;
  let event;
  let nextRecurrenceIdInEvent;
  let tmp = closure_9();
  let obj = channel(event[9]);
  const activeEvent = obj.useActiveEvent(channel.id);
  let obj2 = channel(event[9]);
  const imminentUpcomingGuildEvents = obj2.useImminentUpcomingGuildEvents(channel.id);
  let obj3 = channel(event[10]);
  const items = [SelectedChannelStore];
  let tmp7 = activeEvent;
  const stateFromStores = obj3.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const id = channel.id;
  if (activeEvent == null) {
    event = undefined;
    if (imminentUpcomingGuildEvents != null) {
      event = imminentUpcomingGuildEvents[0];
    }
    tmp7 = event;
  }
  event = tmp7;
  const tmp2Result = channel(event[11]);
  const canManageGuildEventResult = tmp2Result.useManageResourcePermissions(channel).canManageGuildEvent(tmp7);
  const tmp2Result2 = channel(event[12]);
  nextRecurrenceIdInEvent = tmp2Result2.getNextRecurrenceIdInEvent(tmp7);
  const items1 = [tmp7, channel, activeEvent, nextRecurrenceIdInEvent];
  [][0] = tmp7;
  const callback = nextRecurrenceIdInEvent.useCallback(() => {
    const tmp = null == activeEvent && null != first;
    if (tmp) {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = GuildScheduledEventModalActionCreators;
      let result = obj2.openStartGuildEventModal(first, nextRecurrenceIdInEvent, () => {
        const obj = channel(first[15]);
        const result = obj.openVoiceChannelActionSheet(closure_1_0);
      });
    }
  }, items1);
  if (null == tmp7) {
    return null;
  } else {
    let tmp18Result = stateFromStores === id;
    const obj4 = { accessibilityRole: "button", onPress: tmp12, style: tmp.header, children: items2 };
    const tmp16 = closure_6(tmp7);
    const PressableOpacity = tmp2(tmp3[20]).PressableOpacity;
    const obj5 = { event: tmp7, showUserCount: false };
    items2 = [closure_7(channel(event[17]).GuildEventCardHeader, obj5), , ];
    const obj6 = { event: tmp7, descriptionContainerStyle: tmp.descriptionContainerStyle, condensed: tmp18Result };
    items2[1] = closure_7(channel(event[17]).GuildEventCardMetaInfo, obj6);
    if (tmp18Result) {
      tmp18Result = canManageGuildEventResult;
    }
    if (tmp18Result) {
      tmp18Result = !tmp16;
    }
    if (tmp18Result) {
      const obj7 = { style: tmp.buttonContainer, children: closure_7(Button, obj8) };
      obj8 = { text: intl.string(channel(event[19]).t.cK1GGY), onPress: callback, variant: "active", size: "sm", grow: true };
      Button = tmp2(tmp3[18]).Button;
      intl = tmp2(tmp3[19]).intl;
      tmp18Result = closure_7(View, obj7);
    }
    items2[2] = tmp18Result;
    return closure_8(PressableOpacity, obj4);
  }
}));
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default memoResult;