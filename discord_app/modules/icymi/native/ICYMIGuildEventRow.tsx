// discord_app/modules/icymi/native/ICYMIGuildEventRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import GuildScheduledEventModalActionCreators from "../../guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx";
import ScheduleUtils from "../../guild_scheduled_events/utils/ScheduleUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildScheduledEventStore_mod from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let GuildScheduledEventStore = fn(6059);
({ isGuildEventEnded: metroRequire, isGuildScheduledEventActive: closure_7 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createICYMIStyles = fn(16694);
let closure_13 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = { container: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin, marginLeft: marginHorizontal.margin + marginHorizontal.inset }, card: { marginTop: nativeDefault.space.PX_12 }, title: null, timeAndUserPillContainer: null, separator: null, eventsChannelIcon: null, infoContainer: null, locationContainer: null };
  const obj2 = { marginTop: nativeDefault.space.PX_12 };
  obj.title = { marginBottom: nativeDefault.space.PX_4 };
  const obj3 = { marginBottom: nativeDefault.space.PX_4 };
  obj.timeAndUserPillContainer = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_8, justifyContent: "space-between" };
  const size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_12 };
  obj.separator = size;
  const obj4 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_8, justifyContent: "space-between" };
  obj.eventsChannelIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.infoContainer = { gap: nativeDefault.space.PX_4 };
  const obj6 = { gap: nativeDefault.space.PX_4 };
  obj.locationContainer = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMIGuildEventRow(event) {
  const cResult = event(576).c(82);
  event = event.event;
  ({ channel, guild } = event);
  const tmp4 = closure_13();
  const tmp6 = guild(8502)(event, null);
  if (cResult[0] !== event) {
    const tmp9 = closure_7(event);
    cResult[0] = event;
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  let startTime1;
  if (tmp6 != null) {
    startTime1 = tmp6.startTime;
  }
  if (cResult[2] !== startTime1) {
    let toISOStringResult;
    if (tmp6 != null) {
      const startTime = tmp6.startTime;
      toISOStringResult = startTime.toISOString();
    }
    let startTime2;
    if (tmp6 != null) {
      startTime2 = tmp6.startTime;
    }
    cResult[2] = startTime2;
    cResult[3] = toISOStringResult;
    let tmp11 = toISOStringResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp7) {
    if (cResult[5] === tmp11) {
      const startDateTimeString = cResult[6].startDateTimeString;
      guild(5417)(channel);
      const locationFromEvent = tmp(8499).getLocationFromEvent(event);
      if (cResult[7] === channel) {
        if (cResult[10] === channel) {
          if (cResult[13] !== event) {
            const nextRecurrenceIdInEvent = tmp(8496).getNextRecurrenceIdInEvent(event);
            cResult[13] = event;
            class M {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[18]);
                transitionToGuildResult = obj4.transitionToGuild(guild.id);
                return;
              }
            }
            cResult[14] = nextRecurrenceIdInEvent;
            let tmp23 = nextRecurrenceIdInEvent;
            const tmpResult4 = tmp(8496);
          } else {
            tmp23 = cResult[14];
          }
          if (cResult[15] !== event) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
            cResult[15] = event;
            class M {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[18]);
                transitionToGuildResult = obj4.transitionToGuild(guild.id);
                return;
              }
            }
          } else {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
          }
          if (cResult[17] === event.id) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
            let tmp27 = null != event.description;
            if (tmp27) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
              tmp27 = event.description.length > 0;
            }
            class M {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[18]);
                transitionToGuildResult = obj4.transitionToGuild(guild.id);
                return;
              }
            }
            if (event != null) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
            }
            if (event != null) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
            }
            const tmp28Result = tmp28(undefined, undefined, tmp23);
            guild(16742);
            const _Symbol = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
              class M {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[18]);
                  transitionToGuildResult = obj4.transitionToGuild(guild.id);
                  return;
                }
              }
              const stringResult = obj6.string(tmp(1126).t["6pFsLQ"]);
            } else {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
            }
            const id = event.id;
            if (channel != null) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
            }
            const id2 = guild.id;
            if (cResult[21] !== event.id) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
              const extractTimestampResult = obj7.extractTimestamp(event.id);
              cResult[21] = event.id;
              class M {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[18]);
                  transitionToGuildResult = obj4.transitionToGuild(guild.id);
                  return;
                }
              }
              cResult[22] = extractTimestampResult;
            } else {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
            }
            const container = tmp4.container;
            if (tmp7) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
            }
            if (cResult[23] === startDateTimeString) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
              if (cResult[26] === tmp4.timeAndUserPillContainer) {
                class F {
                  constructor() {
                    obj = closure_1(closure_2[16]);
                    itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                    obj2 = closure_1(closure_2[16]);
                    obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                    obj4 = closure_0(closure_2[17]);
                    obj6 = { eventId: event.id, event };
                    result = obj4.openGuildEventDetails(obj6);
                    return;
                  }
                }
                if (tmp27) {
                  class F {
                    constructor() {
                      obj = closure_1(closure_2[16]);
                      itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                      obj2 = closure_1(closure_2[16]);
                      obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                      feedItemActionedResult = obj2.feedItemActioned(obj1);
                      obj4 = closure_0(closure_2[17]);
                      obj6 = { eventId: event.id, event };
                      result = obj4.openGuildEventDetails(obj6);
                      return;
                    }
                  }
                }
                if (cResult[29] === event.name) {
                  class F {
                    constructor() {
                      obj = closure_1(closure_2[16]);
                      itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                      obj2 = closure_1(closure_2[16]);
                      obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                      feedItemActionedResult = obj2.feedItemActioned(obj1);
                      obj4 = closure_0(closure_2[17]);
                      obj6 = { eventId: event.id, event };
                      result = obj4.openGuildEventDetails(obj6);
                      return;
                    }
                  }
                  if (cResult[32] === event.description) {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                    if (cResult[35] !== tmp4.separator) {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                      { style: null }.style = tmp4.separator;
                      class M {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[18]);
                          transitionToGuildResult = obj4.transitionToGuild(guild.id);
                          return;
                        }
                      }
                      cResult[35] = tmp4.separator;
                      cResult[36] = tmp55;
                      let obj3 = { style: null };
                    } else {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                    }
                    const infoContainer = tmp4.infoContainer;
                    class M {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[18]);
                        transitionToGuildResult = obj4.transitionToGuild(guild.id);
                        return;
                      }
                    }
                    if (cResult[37] !== tmp4.eventsChannelIcon) {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                      const obj4 = { size: "xs", style: tmp4.eventsChannelIcon };
                      const tmp59 = closure_11(tmp(8192).GroupIcon, obj4);
                      class M {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[18]);
                          transitionToGuildResult = obj4.transitionToGuild(guild.id);
                          return;
                        }
                      }
                      cResult[37] = tmp4.eventsChannelIcon;
                      cResult[38] = tmp59;
                    } else {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                    }
                    if (cResult[39] !== tmp28Result) {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                      const format = tmp61.format;
                      { count: null }.count = tmp28Result;
                      class M {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[18]);
                          transitionToGuildResult = obj4.transitionToGuild(guild.id);
                          return;
                        }
                      }
                      cResult[39] = tmp28Result;
                      cResult[40] = tmp62;
                      const obj5 = { count: null };
                    } else {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                    }
                    if (cResult[41] !== tmp62) {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                      const obj8 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: tmp62 };
                      const tmp64 = closure_11(tmp(5086).Text, obj8);
                      class M {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[18]);
                          transitionToGuildResult = obj4.transitionToGuild(guild.id);
                          return;
                        }
                      }
                      cResult[41] = tmp62;
                      cResult[42] = tmp64;
                    } else {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                    }
                    if (cResult[43] === tmp4.locationContainer) {
                      class F {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[17]);
                          obj6 = { eventId: event.id, event };
                          result = obj4.openGuildEventDetails(obj6);
                          return;
                        }
                      }
                    }
                    const obj9 = { style: tmp57, children: null };
                    const items = [tmp58, tmp63];
                    obj9.children = items;
                    const tmp67 = closure_12(closure_5, obj9);
                    cResult[43] = tmp4.locationContainer;
                    cResult[44] = tmp58;
                    cResult[45] = tmp63;
                    cResult[46] = tmp67;
                  }
                  let tmp52 = null != event.description;
                  if (tmp52) {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                    tmp52 = event.description.length > 0;
                  }
                  class M {
                    constructor() {
                      obj = closure_1(closure_2[16]);
                      itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                      obj2 = closure_1(closure_2[16]);
                      obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                      feedItemActionedResult = obj2.feedItemActioned(obj1);
                      obj4 = closure_0(closure_2[18]);
                      transitionToGuildResult = obj4.transitionToGuild(guild.id);
                      return;
                    }
                  }
                  cResult[32] = event.description;
                  cResult[33] = guild.id;
                  cResult[34] = tmp52;
                }
                class M {
                  constructor() {
                    obj = closure_1(closure_2[16]);
                    itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                    obj2 = closure_1(closure_2[16]);
                    obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                    obj4 = closure_0(closure_2[18]);
                    transitionToGuildResult = obj4.transitionToGuild(guild.id);
                    return;
                  }
                }
                tmp49[0] = tmp27;
                tmp49[2] = event.name;
                const tmp50 = closure_11(tmp(5086).Text, tmp49);
                cResult[29] = event.name;
                cResult[30] = tmp27;
                cResult[31] = tmp50;
              }
              class M {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[18]);
                  transitionToGuildResult = obj4.transitionToGuild(guild.id);
                  return;
                }
              }
              tmp45[0] = tmp4.timeAndUserPillContainer;
              tmp45[1] = tmp39;
              const tmp46 = closure_11(closure_5, tmp45);
              cResult[26] = tmp4.timeAndUserPillContainer;
              cResult[27] = tmp39;
              cResult[28] = tmp46;
            }
            const obj10 = { variant: "text-sm/semibold", color: "text-brand", children: startDateTimeString };
            const tmp41 = closure_11(tmp(5086).Text, obj10);
            cResult[23] = startDateTimeString;
            cResult[24] = "text-brand";
            cResult[25] = tmp41;
          }
          class M {
            constructor() {
              obj = closure_1(closure_2[16]);
              itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
              obj2 = closure_1(closure_2[16]);
              obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
              feedItemActionedResult = obj2.feedItemActioned(obj1);
              obj4 = closure_0(closure_2[18]);
              transitionToGuildResult = obj4.transitionToGuild(guild.id);
              return;
            }
          }
          cResult[17] = event.id;
          cResult[18] = guild.id;
          cResult[19] = M;
        }
        tmp(8624);
        cResult[10] = channel;
        cResult[11] = event;
        cResult[12] = tmp22;
      }
      const tmpResult = tmp(8499);
      const eventLocationIconSource = tmp(8624).getEventLocationIconSource(event, channel, true);
      cResult[7] = channel;
      cResult[8] = event;
      cResult[9] = eventLocationIconSource;
      const tmpResult6 = tmp(8624);
    }
  }
  if (tmp7) {
    class F {
      constructor() {
        obj = closure_1(closure_2[16]);
        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
        obj2 = closure_1(closure_2[16]);
        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
        feedItemActionedResult = obj2.feedItemActioned(obj1);
        obj4 = closure_0(closure_2[17]);
        obj6 = { eventId: event.id, event };
        result = obj4.openGuildEventDetails(obj6);
        return;
      }
    }
    const intl = tmp(1126).intl;
    tmp15[0] = intl.string(tmp(1126).t.TxqPQR);
    class M {
      constructor() {
        obj = closure_1(closure_2[16]);
        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
        obj2 = closure_1(closure_2[16]);
        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
        feedItemActionedResult = obj2.feedItemActioned(obj1);
        obj4 = closure_0(closure_2[18]);
        transitionToGuildResult = obj4.transitionToGuild(guild.id);
        return;
      }
    }
  } else {
    class F {
      constructor() {
        obj = closure_1(closure_2[16]);
        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
        obj2 = closure_1(closure_2[16]);
        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
        feedItemActionedResult = obj2.feedItemActioned(obj1);
        obj4 = closure_0(closure_2[17]);
        obj6 = { eventId: event.id, event };
        result = obj4.openGuildEventDetails(obj6);
        return;
      }
    }
    const eventTimeData = obj2.getEventTimeData(tmp11);
  }
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  cResult[6] = eventTimeData;
  let obj = event(576);
}) : (function ICYMIGuildEventRow(event) {
  event = event.event;
  ({ channel, guild } = event);
  noop = undefined;
  const tmp = closure_13();
  const tmp4 = guild(8502)(event, null);
  const tmp5 = closure_7(event);
  dependencyMap = tmp5;
  let toISOStringResult;
  if (tmp4 != null) {
    const startTime = tmp4.startTime;
    toISOStringResult = startTime.toISOString();
  }
  noop = toISOStringResult;
  const items = [toISOStringResult, tmp5];
  const tmp7 = guild(5417)(channel);
  const locationFromEvent = event(8499).getLocationFromEvent(event);
  let obj = event(8499);
  const eventLocationIconSource = event(8624).getEventLocationIconSource(event, channel, true);
  let obj2 = event(8624);
  const eventLocationIconComponent = event(8624).getEventLocationIconComponent(event, channel, true);
  let obj3 = event(8624);
  const items1 = [event];
  const nextRecurrenceIdInEvent = event(8496).getNextRecurrenceIdInEvent(event);
  const items2 = [guild.id, event.id];
  const callback = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(event.id, "guild_event", "press_event");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } });
    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
    const result = GuildScheduledEventModalActionCreators.openGuildEventDetails({ eventId: event.id, event });
  }, items1);
  const callback1 = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(event.id, "guild_event", "press_event");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } });
    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
    transitionToGuild.transitionToGuild(guild.id);
  }, items2);
  let title = null != event.description;
  if (title) {
    title = event.description.length > 0;
  }
  let guild_id;
  const obj4 = event(8496);
  if (event != null) {
    guild_id = event.guild_id;
  }
  let id;
  if (event != null) {
    id = event.id;
  }
  const tmp2Result = guild(8492);
  const obj5 = { actionLabel: null, id: null, interactionType: "guild_event", channelId: null, guildId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, children: null };
  const tmp2ResultResult = guild(8492)(guild_id, id, nextRecurrenceIdInEvent);
  let intl = tmp8(1126).intl;
  obj5.actionLabel = intl.string(event(1126).t["6pFsLQ"]);
  obj5.id = event.id;
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  obj5.channelId = id1;
  obj5.guildId = guild.id;
  const tmp2Result3 = guild(16742);
  obj5.timestamp = guild(11).extractTimestamp(event.id);
  obj5.onHeaderPress = callback1;
  obj5.onHeaderLongPress = callback1;
  const obj6 = { onPress: callback, style: tmp.container, children: null };
  const obj7 = { style: tmp.timeAndUserPillContainer, children: null };
  let str = "text-brand";
  if (tmp5) {
    str = "status-positive";
  }
  obj7.children = closure_11(event(5086).Text, {
    variant: "text-sm/semibold",
    color: str,
    children: noop.useMemo(() => {
      if (closure_2) {
        const obj = { startDateTimeString: null };
        const intl = util.intl;
        obj.startDateTimeString = intl.string(util.t.TxqPQR);
        let eventTimeData = obj;
      } else {
        eventTimeData = ScheduleUtils.getEventTimeData(c3);
        const tmpResult = ScheduleUtils;
      }
      return eventTimeData;
    }, items).startDateTimeString
  });
  const items3 = [closure_11(closure_5, obj7), , , , ];
  if (title) {
    title = tmp.title;
  }
  items3[1] = closure_11(event(5086).Text, { style: title, variant: "text-lg/semibold", children: event.name });
  let tmp19Result = null != event.description;
  if (tmp19Result) {
    tmp19Result = event.description.length > 0;
  }
  if (tmp19Result) {
    const obj9 = { variant: "text-md/normal", color: "text-subtle", lineClamp: 5, children: null };
    const obj10 = { guildId: guild.id };
    obj9.children = tmp8(8625).guildEventDetailsParser(event.description, true, obj10);
    tmp19Result = closure_11(tmp8(5086).Text, obj9);
    const tmp8Result = tmp8(8625);
  }
  items3[2] = tmp19Result;
  items3[3] = closure_11(closure_5, { style: tmp.separator });
  const obj12 = { style: tmp.infoContainer, children: null };
  const obj13 = { style: tmp.locationContainer, children: null };
  const items4 = [closure_11(event(8192).GroupIcon, { size: "xs", style: tmp.eventsChannelIcon }), ];
  const obj15 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = tmp8(1126).intl;
  obj15.children = intl2.format(event(1126).t["+DLsD8"], { count: tmp2ResultResult });
  items4[1] = closure_11(event(5086).Text, obj15);
  obj13.children = items4;
  const items5 = [closure_12(closure_5, obj13), ];
  const obj16 = { style: tmp.locationContainer, children: null };
  if (null != eventLocationIconComponent) {
    const obj17 = { size: "xs", style: tmp.eventsChannelIcon };
    let tmp19Result2 = closure_11(eventLocationIconComponent, obj17);
  } else {
    tmp19Result2 = null != eventLocationIconSource;
    if (tmp19Result2) {
      const obj18 = { source: eventLocationIconSource, size: tmp8(1200).Icon.Sizes.EXTRA_SMALL, style: tmp.eventsChannelIcon, disableColor: true };
      tmp19Result2 = closure_11(tmp8(1200).Icon, obj18);
    }
  }
  const items6 = [tmp19Result2, ];
  let tmp27 = tmp7;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      result = tmp8(8625).guildEventLocationParser(locationFromEvent, true);
      const tmp8Result2 = tmp8(8625);
    }
    tmp27 = result;
  }
  items6[1] = closure_11(event(5086).Text, { lineClamp: 2, variant: "text-xs/normal", color: "text-muted", children: tmp27 });
  obj16.children = items6;
  items5[1] = closure_12(closure_5, obj16);
  obj12.children = items5;
  items3[4] = closure_12(closure_5, obj12);
  obj6.children = items3;
  obj5.children = closure_12(closure_4, obj6);
  return closure_11(tmp2Result3, obj5);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIGuildEventRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMIGuildEventRowWrapper(eventId) {
  const cResult = eventId(576).c(13);
  eventId = eventId.eventId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== eventId) {
    const fn = function l() {
      return GuildScheduledEventStore.getGuildScheduledEvent(eventId);
    };
    cResult[1] = eventId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = eventId(576);
  const stateFromStores = eventId(504).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[4] !== guild_id) {
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    const fn2 = function h() {
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return GuildStore.getGuild(guild_id);
    };
    cResult[4] = guild_id1;
    cResult[5] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult = eventId(504);
  const stateFromStores1 = eventId(504).useStateFromStores(tmp8, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[6] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  let channel_id;
  if (stateFromStores != null) {
    channel_id = stateFromStores.channel_id;
  }
  if (cResult[7] !== channel_id) {
    let channel_id1;
    if (stateFromStores != null) {
      channel_id1 = stateFromStores.channel_id;
    }
    const fn3 = function x() {
      let channel_id;
      if (stateFromStores != null) {
        channel_id = stateFromStores.channel_id;
      }
      return ChannelStore.getChannel(channel_id);
    };
    cResult[7] = channel_id1;
    cResult[8] = fn3;
    let tmp17 = fn3;
  } else {
    tmp17 = cResult[8];
  }
  const tmpResult3 = eventId(504);
  const stateFromStores2 = eventId(504).useStateFromStores(tmp14, tmp17);
  let tmp20 = null;
  if (null != stateFromStores) {
    tmp20 = null;
    if (null != stateFromStores1) {
      tmp20 = null;
      if (!closure_6(stateFromStores)) {
        if (cResult[9] === stateFromStores2) {
          if (cResult[10] === stateFromStores) {
          }
        }
        const obj2 = { event: stateFromStores, channel: stateFromStores2, guild: stateFromStores1 };
        const tmp25 = closure_11(closure_14, obj2);
        cResult[9] = stateFromStores2;
        cResult[10] = stateFromStores;
        cResult[11] = stateFromStores1;
        cResult[12] = tmp25;
      }
    }
  }
  return tmp20;
}) : (function ICYMIGuildEventRowWrapper(eventId) {
  eventId = eventId.eventId;
  const items = [GuildScheduledEventStore];
  const stateFromStores = eventId(504).useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(eventId));
  const obj = eventId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = eventId(504).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  eventId(504);
  [][0] = ChannelStore;
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (null != stateFromStores1) {
      tmp5 = null;
      if (!closure_6(stateFromStores)) {
        const obj3 = { event: stateFromStores, channel: tmp4, guild: stateFromStores1 };
        tmp5 = closure_11(closure_14, obj3);
      }
    }
  }
  return tmp5;
});