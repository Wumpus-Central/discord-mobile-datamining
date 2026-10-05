// === Module 9174: GuildScheduledEventModalActionCreators ===

// Module 9174 (GuildScheduledEventModalActionCreators)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import intl18 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import AssetRegistryDefault from "AssetRegistry" /* 4808 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ReportModals from "ReportModals" /* 8279 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9178 */;
import GuildEventRsvpUtils from "GuildEventRsvpUtils" /* 9181 */;
import useCanInviteForGuildEvent from "useCanInviteForGuildEvent" /* 9262 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import restoreEventRecurrenceDefault from "restoreEventRecurrence" /* 9557 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 7037 */;
import GuildEventModalConstants from "GuildEventModalConstants" /* 9175 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, closure_3, vanityURLCode;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
const f99674 = () => event(paths[14])(paths[19], paths.paths);
function openCreateOrEditGuildEventModal(guild, arg1) {
  let guildEvent;
  let recurrenceId;
  let require;
  ({ guildEvent, onClose: require, recurrenceId } = arg1);
  function handleClose() {
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(map1);
    if (_require != null) {
      _require();
    }
  }
  if (null != recurrenceId) {
    _modDef38(null != guildEvent, "recurrence editing requires a guild event");
    const obj3 = { guildEvent, recurrenceId, onCloseModal: handleClose };
    const obj4 = ModalActionCreatorsDefault;
    obj4.pushLazy(asyncRequire(9176, dependencyMap.paths), obj3, closure_13);
  } else {
    obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj5 = { guild, targetChannel: tmp, initialGuildEvent: guildEvent, onCloseModal: handleClose };
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(9202, dependencyMap.paths), obj5, closure_13);
  }
}
let obj = function _transitionToEventDetailsFromInvite() {
  obj = _asyncToGenerator(async (event, recurrenceId) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj4.transitionToGuildFromEventInvite(event), done: false };
              obj4 = require("InstantInviteActionCreators");
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const tmp9 = null != event.channel_id && closure_131_10(event);
            if (!tmp9) {
              const obj7 = { eventId: event.id, event, recurrenceId };
              obj = closure_131_0(closure_131_2[35]);
              const result = obj.openGuildEventDetails(obj7);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          c5 = 3;
          throw tmp22;
        }
      }
    })();
  });
  return obj(...arguments);
};
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildEventEnded: c9, isGuildScheduledEventActive: c10 } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
let closure_12 = GuildScheduledEventsConstants.GuildScheduledEventUserResponses;
({ CREATE_GUILD_EVENT_MODAL_KEY: map1, GUILD_EVENTS_LIST_ACTION_SHEET_KEY: closure_14, START_EVENT_MODAL_KEY: closure_15 } = GuildEventModalConstants);
({ InstantInviteSources: closure_16, Permissions: closure_17, Routes: closure_18 } = Constants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx");

export { openCreateOrEditGuildEventModal };
export const openGuildEventListActionSheet = function openGuildEventListActionSheet(guild) {
  obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guild };
  obj.openLazy(asyncRequire(9278, dependencyMap.paths), authStore2, obj2);
};
export const closeGuildEventListActionSheet = function closeGuildEventListActionSheet() {
  obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(authStore2);
};
export const openStartGuildEventModal = function openStartGuildEventModal(event, recurrenceId, onCloseActionSheet) {
  obj = ActionSheetActionCreatorsDefault;
  obj.hideAllActionSheets();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { event, recurrenceId, onCloseActionSheet };
  obj2.pushLazy(asyncRequire(9470, dependencyMap.paths), obj3, closure_15);
};
export const openDeleteGuildEventActionSheet = function openDeleteGuildEventActionSheet(eventId, guildId, recurrenceId) {
  react.lazy(f99674);
  obj = useAlertStore;
  obj.openAlert("DeleteEventAlert", <lazyResult eventId={eventId} guildId={guildId} recurrenceId={recurrenceId} />);
};
export const updateRsvp = function updateRsvp(id, importDefault, dependencyMap, arg3) {
  let closure_0 = arg3;
  obj = GuildScheduledEventsActionCreatorsDefault;
  obj.updateRsvp(id, importDefault, dependencyMap, arg3, (arg0) => {
    let intl2;
    let intl3;
    let stringResult;
    if (null != arg0) {
      obj = id(onRsvp[22]);
      const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("GuildScheduledEventModalActionCreators");
      const tmp8 = guildId(onRsvp[23]);
      if (designSystemsNotificationComponents) {
        let obj3;
        let str3 = "GUILD_EVENT_INTERESTED_NOTIFICATION";
        const openMana = tmp8.openMana;
        if (null != arg0) {
          str3 = "ERROR_OCCURRED_TRY_AGAIN";
        }
        if (null != arg0) {
          const obj2 = { text: intl3.string(id(onRsvp[24]).t.fEptJP), variant: "critical" };
          intl3 = id(onRsvp[24]).intl;
          obj3 = obj2;
        } else {
          obj3 = { text: intl2.string(id(onRsvp[24]).t.osvXlf), icon: id(onRsvp[25]).CalendarIcon };
          intl2 = id(onRsvp[24]).intl;
        }
        openMana(str3, obj3);
      } else {
        let str2 = "GUILD_EVENT_INTERESTED_NOTIFICATION";
        const open = tmp8.open;
        if (null != arg0) {
          str2 = "ERROR_OCCURRED_TRY_AGAIN";
        }
        const obj4 = { key: str2, content: stringResult, icon: guildId(null != arg0 ? onRsvp[26] : onRsvp[27]) };
        const intl = id(onRsvp[24]).intl;
        const string = intl.string;
        const t = id(onRsvp[24]).t;
        if (null != arg0) {
          stringResult = string(t.fEptJP);
        } else {
          stringResult = string(t.osvXlf);
        }
        open(obj4);
      }
    }
  });
};
export const handleGuildScheduledEventRsvp = function handleGuildScheduledEventRsvp(id, recurrenceId, guild_id, onRsvp) {
  _require = id;
  let closure_1 = guild_id;
  dependencyMap = onRsvp;
  obj = require("GuildEventRsvpUtils");
  const obj2 = {
    eventId: id,
    recurrenceId,
    guildId: guild_id,
    updateRsvp(arg0, arg1, arg2, arg3) {
      let closure_0 = arg3;
      obj = guild_id(paths[21]);
      obj.updateRsvp(id, arg1, guildId, arg3, (arg0) => {
        let intl2;
        let intl3;
        let stringResult;
        if (null != arg0) {
          obj = id(onRsvp[22]);
          const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("GuildScheduledEventModalActionCreators");
          const tmp8 = guildId(onRsvp[23]);
          if (designSystemsNotificationComponents) {
            let obj3;
            let str3 = "GUILD_EVENT_INTERESTED_NOTIFICATION";
            const openMana = tmp8.openMana;
            if (null != arg0) {
              str3 = "ERROR_OCCURRED_TRY_AGAIN";
            }
            if (null != arg0) {
              const obj2 = { text: intl3.string(id(onRsvp[24]).t.fEptJP), variant: "critical" };
              intl3 = id(onRsvp[24]).intl;
              obj3 = obj2;
            } else {
              obj3 = { text: intl2.string(id(onRsvp[24]).t.osvXlf), icon: id(onRsvp[25]).CalendarIcon };
              intl2 = id(onRsvp[24]).intl;
            }
            openMana(str3, obj3);
          } else {
            let str2 = "GUILD_EVENT_INTERESTED_NOTIFICATION";
            const open = tmp8.open;
            if (null != arg0) {
              str2 = "ERROR_OCCURRED_TRY_AGAIN";
            }
            const obj4 = { key: str2, content: stringResult, icon: guildId(null != arg0 ? onRsvp[26] : onRsvp[27]) };
            const intl = id(onRsvp[24]).intl;
            const string = intl.string;
            const t = id(onRsvp[24]).t;
            if (null != arg0) {
              stringResult = string(t.fEptJP);
            } else {
              stringResult = string(t.osvXlf);
            }
            open(obj4);
          }
        }
      });
    },
    openRsvpPicker(guildScheduledEvent, recurrenceId) {
      obj = guild_id(paths[15]);
      const obj2 = { event: guildScheduledEvent, recurrenceId, guildId, onRsvp };
      obj.openLazy(event(paths[14])(paths[29], paths.paths), "GuildEventRsvpPickerActionSheet", obj2, "stack");
    },
    onRsvp
  };
  obj.handleRsvp(obj2);
};
export const openShareEvent = function openShareEvent(event, id) {
  let intl;
  let channel = ChannelStore.getChannel(event.channel_id);
  if (channel == null) {
    channel = GuildChannelStore.getDefaultChannel(event.guild_id);
  }
  if (null != channel) {
    const obj2 = useCanInviteForGuildEvent;
    const result = obj2.isGuildEventInvitable(event);
    if (result) {
      const guild = GuildStore.getGuild(event.guild_id);
      vanityURLCode = undefined;
      if (guild != null) {
        vanityURLCode = guild.vanityURLCode;
      }
      if (null != vanityURLCode) {
        if ("" !== guild.vanityURLCode) {
          if (!PermissionStore.can(constants2.CREATE_INSTANT_INVITE, channel)) {
            const obj3 = { guildScheduledEventId: event.id, stackingBehavior: "stack" };
            const tmp8Result = instant_invite_InstantInviteUtils;
            const result1 = tmp8Result.showVanityUrlInviteActionSheet(guild, channel, constants.GUILD_SCHEDULED_EVENT, obj3);
          }
        }
      }
      const obj4 = { createInvite: result, guildScheduledEventId: event.id, stackingBehavior: "stack", source: constants.GUILD_SCHEDULED_EVENT };
      const tmp8Result4 = instant_invite_InstantInviteUtils;
      const result2 = tmp8Result4.showInstantInviteActionSheet(channel, obj4);
    } else {
      const tmp12 = null != id && "" !== id;
      if (tmp12) {
        const tmp8Result5 = ClipboardUtils;
        tmp8Result5.copy(id);
        const tmp8Result6 = ToastUtils;
        tmp8Result6.presentLinkCopied();
      }
    }
  } else {
    obj = { key: "ERROR_OCCURRED_TRY_AGAIN", content: intl.string(intl18.t.fEptJP), icon: AssetRegistryDefault };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl18.intl;
    open(obj);
  }
};
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  return obj(...arguments);
};
export const showGuildEventModeratorActionSheet = function showGuildEventModeratorActionSheet(event, canManageGuildEventResult, recurrenceId) {
  let intl10;
  let intl11;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl2;
  let intl3;
  let intl6;
  let intl7;
  _require = event;
  importDefault = recurrenceId;
  const guild_id = event.guild_id;
  const guild = GuildStore.getGuild(guild_id);
  let result = GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, recurrenceId);
  obj = require("useEventException");
  const eventException = obj.getEventException(recurrenceId, event.id);
  let flag;
  if (eventException != null) {
    flag = eventException.is_canceled;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp6 = closure_10(event);
  const tmp3Result = require("ScheduleUtils");
  const withinStartWindow = tmp3Result.getEventTimeData(event.scheduled_start_time).withinStartWindow;
  let tmp7 = null;
  if (!tmp6) {
    tmp7 = null;
    if (!flag) {
      let stringResult;
      let intl = tmp3(tmp4[24]).intl;
      let string = intl.string;
      let t = tmp3(tmp4[24]).t;
      if (result) {
        stringResult = string(t["7M5gaN"]);
      } else {
        stringResult = string(t.FXixvH);
      }
      let obj2 = {
        label: stringResult,
        onPress() {
              let paths;
              const id = event.id;
              recurrenceId = guild_id;
              let c2;
              obj = GuildEventRsvpUtils;
              let obj2 = {
                eventId: id,
                recurrenceId,
                guildId: guild_id,
                updateRsvp(arg0, arg1, arg2, arg3) {
                  let closure_0 = arg3;
                  obj = guild_id(paths[21]);
                  obj.updateRsvp(id, arg1, guildId, arg3, (arg0) => {
                    let intl2;
                    let intl3;
                    let stringResult;
                    if (null != arg0) {
                      obj = id(onRsvp[22]);
                      const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("GuildScheduledEventModalActionCreators");
                      const tmp8 = guildId(onRsvp[23]);
                      if (designSystemsNotificationComponents) {
                        let obj3;
                        let str3 = "GUILD_EVENT_INTERESTED_NOTIFICATION";
                        const openMana = tmp8.openMana;
                        if (null != arg0) {
                          str3 = "ERROR_OCCURRED_TRY_AGAIN";
                        }
                        if (null != arg0) {
                          const obj2 = { text: intl3.string(id(onRsvp[24]).t.fEptJP), variant: "critical" };
                          intl3 = id(onRsvp[24]).intl;
                          obj3 = obj2;
                        } else {
                          obj3 = { text: intl2.string(id(onRsvp[24]).t.osvXlf), icon: id(onRsvp[25]).CalendarIcon };
                          intl2 = id(onRsvp[24]).intl;
                        }
                        openMana(str3, obj3);
                      } else {
                        let str2 = "GUILD_EVENT_INTERESTED_NOTIFICATION";
                        const open = tmp8.open;
                        if (null != arg0) {
                          str2 = "ERROR_OCCURRED_TRY_AGAIN";
                        }
                        const obj4 = { key: str2, content: stringResult, icon: guildId(null != arg0 ? onRsvp[26] : onRsvp[27]) };
                        const intl = id(onRsvp[24]).intl;
                        const string = intl.string;
                        const t = id(onRsvp[24]).t;
                        if (null != arg0) {
                          stringResult = string(t.fEptJP);
                        } else {
                          stringResult = string(t.osvXlf);
                        }
                        open(obj4);
                      }
                    }
                  });
                },
                openRsvpPicker(guildScheduledEvent, recurrenceId) {
                  obj = guild_id(paths[15]);
                  const obj2 = { event: guildScheduledEvent, recurrenceId, guildId, onRsvp };
                  obj.openLazy(event(paths[14])(paths[29], paths.paths), "GuildEventRsvpPickerActionSheet", obj2, "stack");
                },
                onRsvp: "applicationId"
              };
              obj.handleRsvp(obj2);
            }
      };
      tmp7 = obj2;
    }
  }
  const items = [];
  if (null != guild) {
    const tmp34 = canManageGuildEventResult;
    if (tmp34) {
      let stringResult3;
      if (!closure_9(event)) {
        if (!tmp6) {
          if (withinStartWindow) {
            if (!result) {
              if (null != tmp7) {
                items.push(tmp7);
              }
            }
          }
          if (!flag) {
            let obj3 = {
              label: intl2.string(require("intl").t.cK1GGY),
              onPress() {
                          obj = ActionSheetActionCreatorsDefault;
                          obj.hideAllActionSheets();
                          const obj2 = ModalActionCreatorsDefault;
                          const obj3 = { event, recurrenceId, onCloseActionSheet: "r" };
                          obj2.pushLazy(asyncRequire(9470, dependencyMap.paths), obj3, closure_15);
                        }
            };
            const push = items.push;
            intl2 = tmp3(tmp4[24]).intl;
            push(obj3);
          }
        }
        const tmp12 = !tmp6 && withinStartWindow && !result || null == tmp7;
        if (!tmp12) {
          items.push(tmp7);
        }
        const tmp14 = null == recurrenceId || flag;
        if (!tmp14) {
          let obj4 = {
            label: intl3.string(require("intl").t.wmVmXN),
            onPress() {
                      obj = { guildEvent: event, recurrenceId };
                      openCreateOrEditGuildEventModal(guild, obj);
                    }
          };
          const push2 = items.push;
          intl3 = tmp3(tmp4[24]).intl;
          push2(obj4);
        }
        if (!flag) {
          let stringResult1;
          const push3 = items.push;
          if (null != recurrenceId) {
            const intl5 = tmp3(tmp4[24]).intl;
            stringResult1 = intl5.string(tmp3(tmp4[24]).t.BW1Qoh);
          } else {
            const intl4 = tmp3(tmp4[24]).intl;
            stringResult1 = intl4.string(tmp3(tmp4[24]).t.Rgy2dU);
          }
          const obj5 = {
            label: stringResult1,
            onPress() {
                      obj = { guildEvent: event };
                      openCreateOrEditGuildEventModal(guild, obj);
                    }
          };
          push3(obj5);
        }
        if (tmp6) {
          const push7 = items.push;
          const obj6 = {
            label: intl10.string(require("intl").t.qaYzPA),
            isDestructive: true,
            onPress() {
                      obj = GuildScheduledEventsActionCreatorsDefault;
                      obj.endEvent(event.id, event.guild_id);
                    }
          };
          intl10 = tmp3(tmp4[24]).intl;
          push7(obj6);
        } else {
          let stringResult2;
          if (null != recurrenceId) {
            if (null != eventException) {
              if (eventException.is_canceled) {
                const push5 = items.push;
                const obj7 = {
                  label: intl7.string(require("intl").t.b8606G),
                  onPress() {
                                  restoreEventRecurrenceDefault(eventException, guild.id, event.id, recurrenceId);
                                }
                };
                intl7 = tmp3(tmp4[24]).intl;
                push5(obj7);
              }
            }
            const push4 = items.push;
            const obj8 = {
              label: intl6.string(require("intl").t.tqClly),
              isDestructive: true,
              onPress() {
                          let id;
                          ({ id, guild_id } = event);
                          react.lazy(f99674);
                          obj = useAlertStore;
                          obj.openAlert("DeleteEventAlert", <lazyResult eventId={id} guildId={guild_id} recurrenceId={recurrenceId} />);
                        }
            };
            intl6 = tmp3(tmp4[24]).intl;
            push4(obj8);
          }
          const push6 = items.push;
          if (null != event.recurrence_rule) {
            const intl9 = tmp3(tmp4[24]).intl;
            stringResult2 = intl9.string(tmp3(tmp4[24]).t.wr33rW);
          } else {
            const intl8 = tmp3(tmp4[24]).intl;
            stringResult2 = intl8.string(tmp3(tmp4[24]).t.B9sJLX);
          }
          const obj9 = {
            label: stringResult2,
            isDestructive: true,
            onPress() {
                      let id;
                      let paths;
                      ({ id, guild_id } = event);
                      react.lazy(f99674);
                      obj = useAlertStore;
                      obj.openAlert("DeleteEventAlert", <lazyResult eventId={id} guildId={guild_id} recurrenceId="r" />);
                    }
          };
          push6(obj9);
        }
      }
      const push8 = items.push;
      const obj10 = {
        label: intl11.string(require("intl").t.IBA5wX),
        isDestructive: true,
        onPress() {
              obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = ReportModals;
              const result = obj2.showReportModalForGuildScheduledEvent(event);
            }
      };
      intl11 = tmp3(tmp4[24]).intl;
      push8(obj10);
      const push9 = items.push;
      if (null != event.recurrence_rule) {
        const intl13 = tmp3(tmp4[24]).intl;
        stringResult3 = intl13.string(tmp3(tmp4[24]).t.AYnhB7);
      } else {
        const intl12 = tmp3(tmp4[24]).intl;
        stringResult3 = intl12.string(tmp3(tmp4[24]).t["9o+VKx"]);
      }
      const obj11 = {
        label: stringResult3,
        onPress() {
              obj = ClipboardUtils;
              obj.copy("" + location.protocol + "//" + location.host + authStore4.GUILD_EVENT_DETAILS(guild_id, event.id, null));
            }
      };
      push9(obj11);
      if (null != recurrenceId) {
        const push10 = items.push;
        const obj12 = {
          label: intl14.string(require("intl").t.QLtDqP),
          onPress() {
                  obj = ClipboardUtils;
                  obj.copy("" + location.protocol + "//" + location.host + authStore4.GUILD_EVENT_DETAILS(guild_id, event.id, recurrenceId));
                }
        };
        intl14 = tmp3(tmp4[24]).intl;
        push10(obj12);
      }
      const DeveloperMode = tmp3(tmp4[40]).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        const push11 = items.push;
        const obj13 = {
          label: intl15.string(require("intl").t.WZwPO4),
          onPress() {
                  obj = ClipboardUtils;
                  obj.copy(event.id);
                }
        };
        intl15 = tmp3(tmp4[24]).intl;
        push11(obj13);
        if (null != recurrenceId) {
          const push12 = items.push;
          const obj14 = {
            label: intl16.string(require("intl").t.NZRGQo),
            onPress() {
                      obj = ClipboardUtils;
                      obj.copy(recurrenceId);
                    }
          };
          intl16 = tmp3(tmp4[24]).intl;
          push12(obj14);
        }
        const obj16 = require("TidaWebformExperiment");
        let tidaWebformEnabled = obj16.getCurrentConfig({ location: "showGuildEventModeratorActionSheet" }).tidaWebformEnabled;
        const tmp3Result3 = require("useWindowDimensions");
        const tmp31 = require("getGuildEventImage")(event, tmp3Result3.getWindowDimensions().width);
        let closure_5 = tmp31;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = null != tmp31;
        }
        if (tidaWebformEnabled) {
          const push13 = items.push;
          const obj15 = {
            label: intl17.string(require("intl").t["8xHmxo"]),
            onPress() {
                      obj = ClipboardUtils;
                      obj.copy(closure_5);
                      const obj2 = ToastUtils;
                      const result = obj2.presentCopiedToClipboard();
                    }
          };
          intl17 = tmp3(tmp4[24]).intl;
          push13(obj15);
        }
      }
      const obj17 = { key: "GuildEvent", stackingBehavior: "stack", options: items, hasIcons: false };
      const tmp3Result4 = require("showSimpleActionSheet");
      const result1 = tmp3Result4.showSimpleActionSheet(obj17);
    }
  }
  if (null != tmp7) {
    items.push(tmp7);
  }
};