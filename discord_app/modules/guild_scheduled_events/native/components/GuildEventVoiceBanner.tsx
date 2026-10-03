// discord_app/modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildScheduledEventModalActionCreators from "../GuildScheduledEventModalActionCreators.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../GuildScheduledEventModalActionCreators.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(7037).isGuildScheduledEventActive;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj = {
  header: {
    margin: 12,
    padding: 12,
    borderRadius: nativeDefault.radii.sm,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderWidth: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  descriptionContainerStyle: { paddingTop: 4 },
  buttonContainer: { marginTop: 12 },
};
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  margin: 12,
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(event[8]).c(34);
        channel = channel.channel;
        const tmp4 = closure_9();
        let obj = channel(event[8]);
        const activeEvent = channel(event[9]).useActiveEvent(channel.id);
        let obj2 = channel(event[9]);
        const imminentUpcomingGuildEvents = channel(event[9]).useImminentUpcomingGuildEvents(channel.id);
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
        let obj3 = channel(event[9]);
        let tmp11 = activeEvent;
        const stateFromStores = channel(event[10]).useStateFromStores(tmp7, tmp8);
        if (activeEvent == null) {
          event = undefined;
          if (imminentUpcomingGuildEvents != null) {
            event = imminentUpcomingGuildEvents[0];
          }
          tmp11 = event;
        }
        event = tmp11;
        const tmpResult = channel(event[10]);
        const canManageGuildEvent = channel(event[11]).useManageResourcePermissions(channel).canManageGuildEvent;
        if (cResult[2] === canManageGuildEvent) {
          if (cResult[5] !== tmp11) {
            const nextRecurrenceIdInEvent = tmp(tmp2[12]).getNextRecurrenceIdInEvent(tmp11);
            cResult[5] = tmp11;
            cResult[6] = nextRecurrenceIdInEvent;
            let tmp15 = nextRecurrenceIdInEvent;
            const tmpResult4 = tmp(tmp2[12]);
          } else {
            tmp15 = cResult[6];
          }
          closure_3 = tmp15;
          if (cResult[7] === activeEvent) {
            if (cResult[8] === channel) {
              if (cResult[9] === tmp11) {
                if (cResult[12] !== tmp11) {
                  class P {
                    constructor() {
                      tmp = closure_2;
                      if (null != closure_2) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[13]);
                        hideActionSheetResult = obj.hideActionSheet();
                        tmp5 = closure_0;
                        obj2 = closure_0(closure_2[16]);
                        obj1 = { eventId: null, event: null };
                        obj1.eventId = tmp.id;
                        obj1.event = tmp;
                        result = obj2.openGuildEventDetails(obj1);
                      }
                      return;
                    }
                  }
                  cResult[12] = tmp11;
                  cResult[13] = P;
                } else {
                  class P {
                    constructor() {
                      tmp = closure_2;
                      if (null != closure_2) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[13]);
                        hideActionSheetResult = obj.hideActionSheet();
                        tmp5 = closure_0;
                        obj2 = closure_0(closure_2[16]);
                        obj1 = { eventId: null, event: null };
                        obj1.eventId = tmp.id;
                        obj1.event = tmp;
                        result = obj2.openGuildEventDetails(obj1);
                      }
                      return;
                    }
                  }
                }
                if (null == tmp11) {
                  class P {
                    constructor() {
                      tmp = closure_2;
                      if (null != closure_2) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[13]);
                        hideActionSheetResult = obj.hideActionSheet();
                        tmp5 = closure_0;
                        obj2 = closure_0(closure_2[16]);
                        obj1 = { eventId: null, event: null };
                        obj1.eventId = tmp.id;
                        obj1.event = tmp;
                        result = obj2.openGuildEventDetails(obj1);
                      }
                      return;
                    }
                  }
                } else {
                  class P {
                    constructor() {
                      tmp = closure_2;
                      if (null != closure_2) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[13]);
                        hideActionSheetResult = obj.hideActionSheet();
                        tmp5 = closure_0;
                        obj2 = closure_0(closure_2[16]);
                        obj1 = { eventId: null, event: null };
                        obj1.eventId = tmp.id;
                        obj1.event = tmp;
                        result = obj2.openGuildEventDetails(obj1);
                      }
                      return;
                    }
                  }
                  if (cResult[16] !== tmp11) {
                    class P {
                      constructor() {
                        tmp = closure_2;
                        if (null != closure_2) {
                          tmp2 = closure_1;
                          tmp3 = closure_2;
                          obj = closure_1(closure_2[13]);
                          hideActionSheetResult = obj.hideActionSheet();
                          tmp5 = closure_0;
                          obj2 = closure_0(closure_2[16]);
                          obj1 = { eventId: null, event: null };
                          obj1.eventId = tmp.id;
                          obj1.event = tmp;
                          result = obj2.openGuildEventDetails(obj1);
                        }
                        return;
                      }
                    }
                    const obj4 = { event: tmp11, showUserCount: false };
                    const tmp20 = closure_7(tmp(tmp2[17]).GuildEventCardHeader, obj4);
                    cResult[16] = tmp11;
                    cResult[17] = tmp20;
                  } else {
                    class P {
                      constructor() {
                        tmp = closure_2;
                        if (null != closure_2) {
                          tmp2 = closure_1;
                          tmp3 = closure_2;
                          obj = closure_1(closure_2[13]);
                          hideActionSheetResult = obj.hideActionSheet();
                          tmp5 = closure_0;
                          obj2 = closure_0(closure_2[16]);
                          obj1 = { eventId: null, event: null };
                          obj1.eventId = tmp.id;
                          obj1.event = tmp;
                          result = obj2.openGuildEventDetails(obj1);
                        }
                        return;
                      }
                    }
                  }
                  if (cResult[18] === tmp11) {
                    class P {
                      constructor() {
                        tmp = closure_2;
                        if (null != closure_2) {
                          tmp2 = closure_1;
                          tmp3 = closure_2;
                          obj = closure_1(closure_2[13]);
                          hideActionSheetResult = obj.hideActionSheet();
                          tmp5 = closure_0;
                          obj2 = closure_0(closure_2[16]);
                          obj1 = { eventId: null, event: null };
                          obj1.eventId = tmp.id;
                          obj1.event = tmp;
                          result = obj2.openGuildEventDetails(obj1);
                        }
                        return;
                      }
                    }
                  }
                  const obj5 = {
                    event: tmp11,
                    descriptionContainerStyle: tmp4.descriptionContainerStyle,
                    condensed: stateFromStores === channel.id,
                  };
                  const tmp24 = closure_7(tmp(tmp2[17]).GuildEventCardMetaInfo, obj5);
                  cResult[18] = tmp11;
                  cResult[19] = stateFromStores === channel.id;
                  cResult[20] = tmp4.descriptionContainerStyle;
                  cResult[21] = tmp24;
                }
              }
            }
          }
          const fn2 = function _() {
            let tmp = null == activeEvent;
            if (tmp) {
              tmp = null != first;
            }
            if (tmp) {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              let result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(first, closure_3, () => {
                const result = channel(first[15]).openVoiceChannelActionSheet(closure_1_0);
              });
            }
          };
          cResult[7] = activeEvent;
          cResult[8] = channel;
          cResult[9] = tmp11;
          cResult[10] = tmp15;
          cResult[11] = fn2;
        }
        const tmpResult3 = channel(event[11]);
        cResult[2] = canManageGuildEvent;
        cResult[3] = tmp11;
        cResult[4] = canManageGuildEvent(tmp11);
        const canManageGuildEventResult = canManageGuildEvent(tmp11);
      }
    : (channel) => {
        channel = channel.channel;
        let event;
        let nextRecurrenceIdInEvent;
        let tmp = closure_9();
        const activeEvent = channel(event[9]).useActiveEvent(channel.id);
        let obj = channel(event[9]);
        const imminentUpcomingGuildEvents = channel(event[9]).useImminentUpcomingGuildEvents(channel.id);
        let obj2 = channel(event[9]);
        const items = [SelectedChannelStore];
        let tmp7 = activeEvent;
        const stateFromStores = channel(event[10]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
        if (activeEvent == null) {
          event = undefined;
          if (imminentUpcomingGuildEvents != null) {
            event = imminentUpcomingGuildEvents[0];
          }
          tmp7 = event;
        }
        event = tmp7;
        let obj3 = channel(event[10]);
        const tmp2Result = channel(event[11]);
        const canManageGuildEventResult = channel(event[11])
          .useManageResourcePermissions(channel)
          .canManageGuildEvent(tmp7);
        nextRecurrenceIdInEvent = channel(event[12]).getNextRecurrenceIdInEvent(tmp7);
        const items1 = [tmp7, channel, activeEvent, nextRecurrenceIdInEvent];
        [][0] = tmp7;
        const callback = nextRecurrenceIdInEvent.useCallback(() => {
          let tmp = null == activeEvent;
          if (tmp) {
            tmp = null != first;
          }
          if (tmp) {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            let result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(
              first,
              nextRecurrenceIdInEvent,
              () => {
                const result = channel(first[15]).openVoiceChannelActionSheet(closure_1_0);
              },
            );
          }
        }, items1);
        if (null == tmp7) {
          return null;
        } else {
          let tmp18Result = stateFromStores === channel.id;
          const obj4 = { accessibilityRole: "button", onPress: tmp12, style: tmp.header, children: null };
          const obj5 = { event: tmp7, showUserCount: false };
          const items2 = [closure_7(tmp2(tmp3[17]).GuildEventCardHeader, obj5), ,];
          const obj6 = {
            event: tmp7,
            descriptionContainerStyle: tmp.descriptionContainerStyle,
            condensed: tmp18Result,
          };
          items2[1] = closure_7(tmp2(tmp3[17]).GuildEventCardMetaInfo, obj6);
          if (tmp18Result) {
            tmp18Result = canManageGuildEventResult;
          }
          if (tmp18Result) {
            tmp18Result = !tmp16;
          }
          if (tmp18Result) {
            const obj7 = { style: tmp.buttonContainer, children: null };
            const obj8 = { text: null, onPress: null, variant: "active", size: "sm", grow: true };
            const intl = tmp2(tmp3[19]).intl;
            obj8.text = intl.string(tmp2(tmp3[19]).t.cK1GGY);
            obj8.onPress = callback;
            obj7.children = closure_7(tmp2(tmp3[18]).Button, obj8);
            tmp18Result = closure_7(View, obj7);
          }
          items2[2] = tmp18Result;
          obj4.children = items2;
          return closure_8(tmp2(tmp3[20]).PressableOpacity, obj4);
        }
        const tmp2Result2 = channel(event[12]);
      },
);
