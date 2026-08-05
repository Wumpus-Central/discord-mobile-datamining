// discord_app/modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import DeleteEventAlert from "DeleteEventAlert";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import closure_8 from "getUncachedChannelPermissions";
import scheduledEventSort from "scheduledEventSort";
import closure_11 from "scheduledEventSort";
import { GuildScheduledEventUserResponses as closure_12 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import CREATE_GUILD_EVENT_MODAL_KEY from "CREATE_GUILD_EVENT_MODAL_KEY";
import ME from "ME";
import { jsx } from "module_8862";

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
const require = arg1;
function openCreateOrEditGuildEventModal(guild, arg1) {
  let guildEvent;
  let recurrenceId;
  let require;
  ({ guildEvent, onClose: require, recurrenceId } = arg1);
  function handleClose() {
    outer1_1(outer1_2[11]).popWithKey(outer1_13);
    if (callback != null) {
      callback();
    }
  }
  if (null != recurrenceId) {
    require("../../../../_runtime/metro/00038__.js")(null != guildEvent, "recurrence editing requires a guild event");
    let obj = { guildEvent: null, recurrenceId: null, onCloseModal: null };
    obj[0] = guildEvent;
    obj[1] = recurrenceId;
    obj[2] = handleClose;
    require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8884, dependencyMap.paths), obj, closure_13);
    const obj4 = require("../../../actions/ModalActionCreators.tsx");
  } else {
    obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
    obj.hideAllActionSheets();
    obj = { guild: null, targetChannel: null, initialGuildEvent: null, onCloseModal: null };
    obj[0] = guild;
    obj[1] = tmp;
    obj[2] = guildEvent;
    obj[3] = handleClose;
    require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8905, dependencyMap.paths), obj, closure_13);
    const obj2 = require("../../../actions/ModalActionCreators.tsx");
  }
}
function _transitionToEventDetailsFromInvite() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let getUncachedChannelPermissions = tmp5;
              const table = tmp2;
              let obj3 = lib(outer1_2[32]);
              c4 = 1;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj3.transitionToGuildFromEventInvite(lib);
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let tmp10 = null != lib.channel_id;
            if (tmp10) {
              tmp10 = callback(lib);
            }
            if (!tmp10) {
              obj = lib(table[33]);
              obj3 = { eventId: null, event: null, recurrenceId: null };
              obj3[0] = lib.id;
              obj3[1] = lib;
              obj3[2] = closure_1;
              const result = obj.openGuildEventDetails(obj3);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp23) {
          c5 = tmp;
          throw tmp23;
        }
      }
    })();
  });
  const _transitionToEventDetailsFromInvite = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ isGuildEventEnded: c9, isGuildScheduledEventActive: c10 } = scheduledEventSort);
({ CREATE_GUILD_EVENT_MODAL_KEY: map1, GUILD_EVENTS_LIST_ACTION_SHEET_KEY: closure_14, START_EVENT_MODAL_KEY: closure_15 } = CREATE_GUILD_EVENT_MODAL_KEY);
({ InstantInviteSources: closure_16, Permissions: closure_17, Routes: closure_18 } = ME);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx");

export { openCreateOrEditGuildEventModal };
export const openGuildEventListActionSheet = function openGuildEventListActionSheet(closure_0) {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { guild: closure_0 };
  obj.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8958, dependencyMap.paths), closure_14, obj);
};
export const closeGuildEventListActionSheet = function closeGuildEventListActionSheet() {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet(closure_14);
};
export const openStartGuildEventModal = function openStartGuildEventModal(event, nextRecurrenceIdInEvent, onCloseActionSheet) {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj.hideAllActionSheets();
  obj = { event, recurrenceId: nextRecurrenceIdInEvent, onCloseActionSheet };
  require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8974, dependencyMap.paths), obj, closure_15);
};
export const openDeleteGuildEventActionSheet = function openDeleteGuildEventActionSheet(eventId, guildId, recurrenceId) {
  let obj = require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  obj = { eventId, guildId, recurrenceId };
  obj.openAlert("DeleteEventAlert", jsx(React.lazy(() => callback(paths[14])(paths[19], paths.paths)), { eventId, guildId, recurrenceId }));
};
export const updateRsvp = function updateRsvp(arg0, arg1, arg2, arg3) {
  let closure_0 = arg3;
  require("../GuildScheduledEventsActionCreators.tsx").updateRsvp(arg0, arg1, arg2, arg3, (arg0) => {
    let tmp2 = tmp;
    if (null == arg0) {
      tmp2 = callback === outer1_12.INTERESTED;
    }
    if (tmp2) {
      let openResult = outer1_1(outer1_2[22]);
      let str = "GUILD_EVENT_INTERESTED_NOTIFICATION";
      if (tmp) {
        str = "ERROR_OCCURRED_TRY_AGAIN";
      }
      openResult = { key: null, content: null, icon: null };
      openResult[0] = str;
      const intl = callback(tmp6[23]).intl;
      const string = intl.string;
      const t = callback(tmp6[23]).t;
      if (tmp) {
        let stringResult = string(t.fEptJP);
      } else {
        stringResult = string(t.osvXlf);
      }
      openResult[1] = stringResult;
      openResult[2] = outer1_1(tmp ? outer1_2[24] : outer1_2[25]);
      openResult = openResult.open(openResult);
      const tmp5 = outer1_1;
    }
  });
};
export const handleGuildScheduledEventRsvp = function handleGuildScheduledEventRsvp(id, c1, guild_id) {
  const _require = id;
  let closure_1 = guild_id;
  const dependencyMap = arg3;
  let obj = _require("../utils/GuildEventRsvpUtils.tsx");
  obj = {
    eventId: id,
    recurrenceId: c1,
    guildId: guild_id,
    updateRsvp(arg0, arg1, arg2, arg3) {
      let closure_0 = arg3;
      callback(_undefined[21]).updateRsvp(closure_0, arg1, callback, arg3, (arg0) => {
        let tmp2 = tmp;
        if (null == arg0) {
          tmp2 = callback === outer1_12.INTERESTED;
        }
        if (tmp2) {
          let openResult = outer1_1(outer1_2[22]);
          let str = "GUILD_EVENT_INTERESTED_NOTIFICATION";
          if (tmp) {
            str = "ERROR_OCCURRED_TRY_AGAIN";
          }
          openResult = { key: null, content: null, icon: null };
          openResult[0] = str;
          const intl = callback(tmp6[23]).intl;
          const string = intl.string;
          const t = callback(tmp6[23]).t;
          if (tmp) {
            let stringResult = string(t.fEptJP);
          } else {
            stringResult = string(t.osvXlf);
          }
          openResult[1] = stringResult;
          openResult[2] = outer1_1(tmp ? outer1_2[24] : outer1_2[25]);
          openResult = openResult.open(openResult);
          const tmp5 = outer1_1;
        }
      });
    },
    openRsvpPicker(guildScheduledEvent, recurrenceId) {
      let obj = callback(_undefined[15]);
      obj = { event: guildScheduledEvent, recurrenceId, guildId: callback, onRsvp: _undefined };
      obj.openLazy(id(_undefined[14])(_undefined[27], _undefined.paths), "GuildEventRsvpPickerActionSheet", obj, "stack");
    },
    onRsvp: arg3
  };
  obj.handleRsvp(obj);
};
export const openShareEvent = function openShareEvent(event, arg1) {
  channel = channel.getChannel(event.channel_id);
  if (channel == null) {
    channel = defaultChannel.getDefaultChannel(event.guild_id);
  }
  if (null != channel) {
    const result = require("../useCanInviteForGuildEvent.tsx") /* canEveryoneRoleViewEvent */.isGuildEventInvitable(event);
    if (result) {
      const guild = store.getGuild(event.guild_id);
      let vanityURLCode;
      if (guild != null) {
        vanityURLCode = guild.vanityURLCode;
      }
      if (null != vanityURLCode) {
        if ("" !== guild.vanityURLCode) {
          if (!closure_8.can(constants2.CREATE_INSTANT_INVITE, channel)) {
            let tmp7Result = tmp7(8987);
            let obj = { guildScheduledEventId: null, stackingBehavior: "stack" };
            obj[0] = event.id;
            const result1 = tmp7Result.showVanityUrlInviteActionSheet(guild, channel, constants.GUILD_SCHEDULED_EVENT, obj);
          }
        }
      }
      tmp7Result = tmp7(8987);
      obj = { createInvite: null, guildScheduledEventId: null, stackingBehavior: "stack", source: null };
      obj[0] = result;
      obj[1] = event.id;
      obj[3] = constants.GUILD_SCHEDULED_EVENT;
      const result2 = tmp7Result.showInstantInviteActionSheet(channel, obj);
    } else {
      let tmp11 = null != arg1;
      if (tmp11) {
        tmp11 = "" !== arg1;
      }
      if (tmp11) {
        tmp7(5638).copy(arg1);
        const tmp7Result1 = tmp7(5638);
        tmp7(3985).presentLinkCopied();
        const tmp7Result2 = tmp7(3985);
      }
    }
    const obj3 = require("../useCanInviteForGuildEvent.tsx") /* canEveryoneRoleViewEvent */;
  } else {
    obj = require("../../toast/native/ToastActionCreators.tsx");
    const obj1 = { key: "ERROR_OCCURRED_TRY_AGAIN", content: null, icon: null };
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj1[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.fEptJP);
    obj1[2] = require("../../../../_runtime/08985_registerAsset.js");
    obj.open(obj1);
  }
};
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  const self = this;
  const apply = _transitionToEventDetailsFromInvite.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const showGuildEventModeratorActionSheet = function showGuildEventModeratorActionSheet(event, getUncachedChannelPermissions, recurrenceId) {
  const _require = event;
  const importDefault = recurrenceId;
  const guild_id = event.guild_id;
  const guild = store.getGuild(guild_id);
  let result = interestedInEventRecurrence.isInterestedInEventRecurrence(event.id, recurrenceId);
  let obj = _require(guild_id[34]);
  const eventException = obj.getEventException(recurrenceId, event.id);
  let flag;
  if (eventException != null) {
    flag = eventException.is_canceled;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp6 = callback3(event);
  let tmp3Result = tmp3(tmp4[35]);
  const withinStartWindow = tmp3Result.getEventTimeData(event.scheduled_start_time).withinStartWindow;
  let tmp7 = null;
  if (!tmp6) {
    tmp7 = null;
    if (!flag) {
      let intl = tmp3(tmp4[23]).intl;
      let string = intl.string;
      let t = tmp3(tmp4[23]).t;
      if (result) {
        let stringResult = string(t["7M5gaN"]);
      } else {
        stringResult = string(t.FXixvH);
      }
      t = { label: null, onPress: null };
      t[0] = stringResult;
      t[1] = function onPress() {
        id = id.id;
        let closure_1 = c2;
        c2 = undefined;
        let obj = event(guild_id[26]);
        obj = {
          eventId: id,
          recurrenceId: closure_1,
          guildId: c2,
          updateRsvp(arg0, arg1, arg2, arg3) {
            let closure_0 = arg3;
            callback(_undefined[21]).updateRsvp(closure_0, arg1, callback, arg3, (arg0) => {
              let tmp2 = tmp;
              if (null == arg0) {
                tmp2 = callback === outer1_12.INTERESTED;
              }
              if (tmp2) {
                let openResult = outer1_1(outer1_2[22]);
                let str = "GUILD_EVENT_INTERESTED_NOTIFICATION";
                if (tmp) {
                  str = "ERROR_OCCURRED_TRY_AGAIN";
                }
                openResult = { key: null, content: null, icon: null };
                openResult[0] = str;
                const intl = callback(tmp6[23]).intl;
                const string = intl.string;
                const t = callback(tmp6[23]).t;
                if (tmp) {
                  let stringResult = string(t.fEptJP);
                } else {
                  stringResult = string(t.osvXlf);
                }
                openResult[1] = stringResult;
                openResult[2] = outer1_1(tmp ? outer1_2[24] : outer1_2[25]);
                openResult = openResult.open(openResult);
                const tmp5 = outer1_1;
              }
            });
          },
          openRsvpPicker(guildScheduledEvent, recurrenceId) {
            let obj = callback(_undefined[15]);
            obj = { event: guildScheduledEvent, recurrenceId, guildId: callback, onRsvp: _undefined };
            obj.openLazy(id(_undefined[14])(_undefined[27], _undefined.paths), "GuildEventRsvpPickerActionSheet", obj, "stack");
          },
          onRsvp: "Boolean"
        };
        obj.handleRsvp(obj);
      };
    }
  }
  const items = [];
  if (null != guild) {
    if (getUncachedChannelPermissions) {
      if (!callback2(event)) {
        if (!tmp6) {
          if (withinStartWindow) {
            if (!result) {
              if (null != tmp7) {
                items.push(tmp7);
              }
            }
          }
          if (!flag) {
            obj = { label: null, onPress: null };
            const intl2 = tmp3(tmp4[23]).intl;
            obj[0] = intl2.string(tmp3(tmp4[23]).t.cK1GGY);
            obj[1] = function onPress() {
              let obj = callback(guild_id[15]);
              obj.hideAllActionSheets();
              obj = { event, recurrenceId: callback, onCloseActionSheet: "disabled" };
              callback(guild_id[11]).pushLazy(event(guild_id[14])(guild_id[18], guild_id.paths), obj, outer1_15);
            };
            items.push(obj);
          }
        }
        let tmp13 = !tmp6;
        if (!tmp6) {
          tmp13 = withinStartWindow;
        }
        if (tmp13) {
          tmp13 = !result;
        }
        if (!tmp13) {
          tmp13 = null == tmp7;
        }
        if (!tmp13) {
          items.push(tmp7);
        }
        if (!tmp15) {
          obj = { label: null, onPress: null };
          const intl3 = tmp3(tmp4[23]).intl;
          obj[0] = intl3.string(tmp3(tmp4[23]).t.wmVmXN);
          obj[1] = function onPress() {
            outer1_20(guild, { guildEvent: closure_0, recurrenceId: closure_1 });
          };
          items.push(obj);
        }
        if (flag) {
          if (tmp6) {
            const obj1 = { label: null, isDestructive: true, onPress: null };
            const intl10 = tmp3(tmp4[23]).intl;
            obj1[0] = intl10.string(tmp3(tmp4[23]).t.qaYzPA);
            obj1[2] = function onPress() {
              callback(guild_id[21]).endEvent(event.id, event.guild_id);
            };
            items.push(obj1);
          } else {
            if (null != recurrenceId) {
              if (null != eventException) {
                if (eventException.is_canceled) {
                  const obj2 = { label: null, onPress: null };
                  const intl7 = tmp3(tmp4[23]).intl;
                  obj2[0] = intl7.string(tmp3(tmp4[23]).t.b8606G);
                  obj2[1] = function onPress() {
                    callback(guild_id[36])(eventException, guild.id, event.id, callback);
                  };
                  items.push(obj2);
                }
              }
              const obj3 = { label: null, isDestructive: true, onPress: null };
              const intl6 = tmp3(tmp4[23]).intl;
              obj3[0] = intl6.string(tmp3(tmp4[23]).t.tqClly);
              obj3[2] = function onPress() {
                let guild_id;
                let id;
                ({ id, guild_id } = event);
                let obj = event(guild_id[20]);
                obj = { eventId: id, guildId: guild_id, recurrenceId: closure_1 };
                obj.openAlert("DeleteEventAlert", outer1_19(eventException.lazy(() => callback(paths[14])(paths[19], paths.paths)), obj));
              };
              items.push(obj3);
            }
            if (null != event.recurrence_rule) {
              const intl9 = tmp3(tmp4[23]).intl;
              let stringResult1 = intl9.string(tmp3(tmp4[23]).t.wr33rW);
            } else {
              const intl8 = tmp3(tmp4[23]).intl;
              stringResult1 = intl8.string(tmp3(tmp4[23]).t.B9sJLX);
            }
            const obj4 = { label: null, isDestructive: true, onPress: null };
            obj4[0] = stringResult1;
            obj4[2] = function onPress() {
              let guild_id;
              let id;
              ({ id, guild_id } = event);
              const lazyResult = eventException.lazy(() => callback(paths[14])(paths[19], paths.paths));
              event(guild_id[20]).openAlert("DeleteEventAlert", outer1_19(lazyResult, { eventId: id, guildId: guild_id, recurrenceId: "disabled" }));
            };
            items.push(obj4);
          }
        } else {
          if (null != recurrenceId) {
            const intl5 = tmp3(tmp4[23]).intl;
            let stringResult2 = intl5.string(tmp3(tmp4[23]).t.BW1Qoh);
          } else {
            const intl4 = tmp3(tmp4[23]).intl;
            stringResult2 = intl4.string(tmp3(tmp4[23]).t.Rgy2dU);
          }
          const obj5 = { label: null, onPress: null };
          obj5[0] = stringResult2;
          obj5[1] = function onPress() {
            outer1_20(guild, { guildEvent: closure_0 });
          };
          items.push(obj5);
        }
        tmp15 = null == recurrenceId || flag;
      }
      const obj6 = { label: null, isDestructive: true, onPress: null };
      const intl11 = tmp3(tmp4[23]).intl;
      obj6[0] = intl11.string(tmp3(tmp4[23]).t.IBA5wX);
      obj6[2] = function onPress() {
        callback(guild_id[15]).hideAllActionSheets();
        const obj = callback(guild_id[15]);
        const result = event(guild_id[37]).showReportModalForGuildScheduledEvent(event);
      };
      items.push(obj6);
      if (null != event.recurrence_rule) {
        const intl13 = tmp3(tmp4[23]).intl;
        let stringResult3 = intl13.string(tmp3(tmp4[23]).t.AYnhB7);
      } else {
        const intl12 = tmp3(tmp4[23]).intl;
        stringResult3 = intl12.string(tmp3(tmp4[23]).t["9o+VKx"]);
      }
      const obj7 = { label: null, onPress: null };
      obj7[0] = stringResult3;
      obj7[1] = function onPress() {
        event(guild_id[29]).copy("" + location.protocol + "//" + location.host + outer1_18.GUILD_EVENT_DETAILS(guild_id, event.id, null));
      };
      items.push(obj7);
      if (null != recurrenceId) {
        const obj8 = { label: null, onPress: null };
        const intl14 = tmp3(tmp4[23]).intl;
        obj8[0] = intl14.string(tmp3(tmp4[23]).t.QLtDqP);
        obj8[1] = function onPress() {
          event(guild_id[29]).copy("" + location.protocol + "//" + location.host + outer1_18.GUILD_EVENT_DETAILS(guild_id, event.id, closure_1));
        };
        items.push(obj8);
      }
      const DeveloperMode = tmp3(tmp4[38]).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        const obj9 = { label: null, onPress: null };
        const intl15 = tmp3(tmp4[23]).intl;
        obj9[0] = intl15.string(tmp3(tmp4[23]).t.WZwPO4);
        obj9[1] = function onPress() {
          event(guild_id[29]).copy(event.id);
        };
        items.push(obj9);
        if (null != recurrenceId) {
          const obj10 = { label: null, onPress: null };
          const intl16 = tmp3(tmp4[23]).intl;
          obj10[0] = intl16.string(tmp3(tmp4[23]).t.NZRGQo);
          obj10[1] = function onPress() {
            event(guild_id[29]).copy(closure_1);
          };
          items.push(obj10);
        }
        let tidaWebformEnabled = importDefault(tmp4[39]).getCurrentConfig({ location: "showGuildEventModeratorActionSheet" }).tidaWebformEnabled;
        tmp3Result = tmp3(tmp4[40]);
        const tmp32 = importDefault(tmp4[41])(event, tmp3Result.getWindowDimensions().width);
        let ensureGuildLoaded = tmp32;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = null != tmp32;
        }
        if (tidaWebformEnabled) {
          const obj11 = { label: null, onPress: null };
          const intl17 = tmp3(tmp4[23]).intl;
          obj11[0] = intl17.string(tmp3(tmp4[23]).t["8xHmxo"]);
          obj11[1] = function onPress() {
            event(guild_id[29]).copy(ensureGuildLoaded);
            const obj = event(guild_id[29]);
            const result = event(guild_id[30]).presentCopiedToClipboard();
          };
          items.push(obj11);
        }
        const obj16 = importDefault(tmp4[39]);
      }
      const obj12 = { key: "GuildEvent", stackingBehavior: "stack", options: null, hasIcons: false };
      obj12[2] = items;
      const result1 = tmp3(tmp4[42]).showSimpleActionSheet(obj12);
    }
  }
  if (null != tmp7) {
    items.push(tmp7);
  }
};