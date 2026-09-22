// discord_app/modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import _modDef9719 from "../../../../_runtime/metro/09719__.js";
import GuildScheduledEventsActionCreatorsDefault from "../GuildScheduledEventsActionCreators.tsx";
import GuildEventRsvpUtils from "../utils/GuildEventRsvpUtils.tsx";
import useCanInviteForGuildEvent from "../useCanInviteForGuildEvent.tsx";
import instant_invite_InstantInviteUtils from "../../instant_invite/native/InstantInviteUtils.tsx";
import restoreEventRecurrenceDefault from "../restoreEventRecurrence.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildScheduledEventStore_mod from "../GuildScheduledEventStore.tsx";

const require = globalThis.__r;

require = fn;
function openCreateOrEditGuildEventModal(guild, arg1) {
  ({ guildEvent, onClose: require, recurrenceId } = arg1);
  function handleClose() {
    ModalActionCreatorsDefault.popWithKey(map1);
    if (_require != null) {
      _require();
    }
  }
  if (null != recurrenceId) {
    _modDef38(null != guildEvent, "recurrence editing requires a guild event");
    const obj3 = { guildEvent, recurrenceId, onCloseModal: handleClose };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9791, dependencyMap.paths), obj3, closure_13);
  } else {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const obj5 = { guild, targetChannel: tmp, initialGuildEvent: guildEvent, onCloseModal: handleClose };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9816, dependencyMap.paths), obj5, closure_13);
  }
}
let closure_21 = async function _transitionToEventDetailsFromInvite(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          c4 = 1;
          c5 = 1;
          const obj5 = {
            value: require("InstantInviteActionCreators").transitionToGuildFromEventInvite(closure_0),
            done: false,
          };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        let tmp10 = null != closure_130_0.channel_id;
        if (tmp10) {
          tmp10 = closure_131_10(closure_130_0);
        }
        if (!tmp10) {
          const obj7 = { eventId: closure_130_0.id, event: closure_130_0, recurrenceId: closure_130_1 };
          const result = closure_131_0(closure_131_2[33]).openGuildEventDetails(obj7);
          const obj = closure_131_0(closure_131_2[33]);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp23) {
      c5 = tmp;
      throw tmp23;
    }
  }
};
let GuildScheduledEventStore = fn(7771);
({ isGuildEventEnded: closure_9, isGuildScheduledEventActive: c10 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
let closure_12 = fn(2048).GuildScheduledEventUserResponses;
const GuildEventModalConstants = fn(9790);
({
  CREATE_GUILD_EVENT_MODAL_KEY: map1,
  GUILD_EVENTS_LIST_ACTION_SHEET_KEY: closure_14,
  START_EVENT_MODAL_KEY: closure_15,
} = GuildEventModalConstants);
const Constants = fn(1074);
({ InstantInviteSources: closure_16, Permissions: closure_17, Routes: closure_18 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx",
);

export { openCreateOrEditGuildEventModal };
export const openGuildEventListActionSheet = function openGuildEventListActionSheet(guild) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9892, dependencyMap.paths), closure_1_14, { guild });
};
export const closeGuildEventListActionSheet = function closeGuildEventListActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_14);
};
export const openStartGuildEventModal = function openStartGuildEventModal(event, recurrenceId, onCloseActionSheet) {
  ActionSheetActionCreatorsDefault.hideAllActionSheets();
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(10071, dependencyMap.paths),
    { event, recurrenceId, onCloseActionSheet },
    __initData,
  );
};
export const openDeleteGuildEventActionSheet = function openDeleteGuildEventActionSheet(
  eventId,
  guildId,
  recurrenceId,
) {
  const lazyResult = noop.lazy(() => event(paths[14])(paths[19], paths.paths));
  useAlertStore.openAlert(
    "DeleteEventAlert",
    <lazyResult eventId={eventId} guildId={guildId} recurrenceId={recurrenceId} />,
  );
};
export const updateRsvp = function updateRsvp(id, arg1, dependencyMap, arg3) {
  closure_0 = arg3;
  GuildScheduledEventsActionCreatorsDefault.updateRsvp(id, arg1, dependencyMap, arg3, (arg0) => {
    let tmp2 = tmp;
    if (null == arg0) {
      tmp2 = closure_0 === constants.INTERESTED;
    }
    if (tmp2) {
      let str = "GUILD_EVENT_INTERESTED_NOTIFICATION";
      if (tmp) {
        str = "ERROR_OCCURRED_TRY_AGAIN";
      }
      let obj2 = { key: str, content: null, icon: null };
      const intl = id(dependencyMap[23]).intl;
      const string = intl.string;
      const t = id(dependencyMap[23]).t;
      if (tmp) {
        let stringResult = string(t.fEptJP);
      } else {
        stringResult = string(t.osvXlf);
      }
      obj2.content = stringResult;
      obj2.icon = closure_1(tmp ? dependencyMap[24] : dependencyMap[25]);
      obj2 = closure_1(dependencyMap[22]).open(obj2);
      const obj = closure_1(dependencyMap[22]);
    }
  });
};
export const handleGuildScheduledEventRsvp = function handleGuildScheduledEventRsvp(id, c1, guild_id, onRsvp) {
  _require = id;
  closure_1 = guild_id;
  dependencyMap = onRsvp;
  require("GuildEventRsvpUtils").handleRsvp({
    eventId: id,
    recurrenceId: importDefault,
    guildId: guild_id,
    updateRsvp(arg0, arg1, arg2, arg3) {
      closure_0 = arg3;
      guildId(guild_id[21]).updateRsvp(id, arg1, guildId, arg3, (arg0) => {
        let tmp2 = tmp;
        if (null == arg0) {
          tmp2 = closure_0 === constants.INTERESTED;
        }
        if (tmp2) {
          let str = "GUILD_EVENT_INTERESTED_NOTIFICATION";
          if (tmp) {
            str = "ERROR_OCCURRED_TRY_AGAIN";
          }
          let obj2 = { key: str, content: null, icon: null };
          const intl = id(dependencyMap[23]).intl;
          const string = intl.string;
          const t = id(dependencyMap[23]).t;
          if (tmp) {
            let stringResult = string(t.fEptJP);
          } else {
            stringResult = string(t.osvXlf);
          }
          obj2.content = stringResult;
          obj2.icon = closure_1(tmp ? dependencyMap[24] : dependencyMap[25]);
          obj2 = closure_1(dependencyMap[22]).open(obj2);
          const obj = closure_1(dependencyMap[22]);
        }
      });
    },
    openRsvpPicker(guildScheduledEvent, recurrenceId) {
      guildId(guild_id[15]).openLazy(
        id(guild_id[14])(guild_id[27], guild_id.paths),
        "GuildEventRsvpPickerActionSheet",
        { event: guildScheduledEvent, recurrenceId, guildId, onRsvp },
        "stack",
      );
    },
    onRsvp,
  });
};
export const openShareEvent = function openShareEvent(event, id) {
  let channel = ChannelStore.getChannel(event.channel_id);
  if (channel == null) {
    channel = GuildChannelStore.getDefaultChannel(event.guild_id);
  }
  if (null != channel) {
    const result = useCanInviteForGuildEvent.isGuildEventInvitable(event);
    if (result) {
      const guild = GuildStore.getGuild(event.guild_id);
      let vanityURLCode;
      if (guild != null) {
        vanityURLCode = guild.vanityURLCode;
      }
      if (null != vanityURLCode) {
        if ("" !== guild.vanityURLCode) {
          if (!PermissionStore.can(constants2.CREATE_INSTANT_INVITE, channel)) {
            const tmp7Result = instant_invite_InstantInviteUtils;
            const obj2 = { guildScheduledEventId: event.id, stackingBehavior: "stack" };
            const result1 = tmp7Result.showVanityUrlInviteActionSheet(
              guild,
              channel,
              constants.GUILD_SCHEDULED_EVENT,
              obj2,
            );
          }
        }
      }
      const obj4 = {
        createInvite: result,
        guildScheduledEventId: event.id,
        stackingBehavior: "stack",
        source: constants.GUILD_SCHEDULED_EVENT,
      };
      const result2 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, obj4);
      const tmp7Result4 = instant_invite_InstantInviteUtils;
    } else {
      let tmp11 = null != id;
      if (tmp11) {
        tmp11 = "" !== id;
      }
      if (tmp11) {
        ClipboardUtils.copy(id);
        const tmp7Result5 = ClipboardUtils;
        ToastUtils.presentLinkCopied();
        const tmp7Result6 = ToastUtils;
      }
    }
  } else {
    const obj5 = { key: "ERROR_OCCURRED_TRY_AGAIN", content: null, icon: null };
    const intl = util.intl;
    obj5.content = intl.string(util.t.fEptJP);
    obj5.icon = _modDef9719;
    ToastActionCreatorsDefault.open(obj5);
  }
};
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const showGuildEventModeratorActionSheet = function showGuildEventModeratorActionSheet(
  event,
  arg1,
  recurrenceId,
) {
  _require = event;
  importDefault = recurrenceId;
  const guild_id = event.guild_id;
  const guild = GuildStore.getGuild(guild_id);
  let result = GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, recurrenceId);
  const eventException = require("useEventException").getEventException(recurrenceId, event.id);
  let flag;
  if (eventException != null) {
    flag = eventException.is_canceled;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp6 = closure_10(event);
  let obj = require("useEventException");
  const withinStartWindow = require("ScheduleUtils").getEventTimeData(event.scheduled_start_time).withinStartWindow;
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
      t = {
        label: stringResult,
        onPress() {
          const id = event.id;
          recurrenceId = guild_id;
          c2 = undefined;
          GuildEventRsvpUtils.handleRsvp({
            eventId: id,
            recurrenceId,
            guildId: guild_id,
            updateRsvp(arg0, arg1, arg2, arg3) {
              closure_0 = arg3;
              guildId(guild_id[21]).updateRsvp(id, arg1, guildId, arg3, (arg0) => {
                let tmp2 = tmp;
                if (null == arg0) {
                  tmp2 = closure_0 === constants.INTERESTED;
                }
                if (tmp2) {
                  let str = "GUILD_EVENT_INTERESTED_NOTIFICATION";
                  if (tmp) {
                    str = "ERROR_OCCURRED_TRY_AGAIN";
                  }
                  let obj2 = { key: str, content: null, icon: null };
                  const intl = id(dependencyMap[23]).intl;
                  const string = intl.string;
                  const t = id(dependencyMap[23]).t;
                  if (tmp) {
                    let stringResult = string(t.fEptJP);
                  } else {
                    stringResult = string(t.osvXlf);
                  }
                  obj2.content = stringResult;
                  obj2.icon = closure_1(tmp ? dependencyMap[24] : dependencyMap[25]);
                  obj2 = closure_1(dependencyMap[22]).open(obj2);
                  const obj = closure_1(dependencyMap[22]);
                }
              });
            },
            openRsvpPicker(guildScheduledEvent, recurrenceId) {
              guildId(guild_id[15]).openLazy(
                id(guild_id[14])(guild_id[27], guild_id.paths),
                "GuildEventRsvpPickerActionSheet",
                { event: guildScheduledEvent, recurrenceId, guildId, onRsvp },
                "stack",
              );
            },
            onRsvp: "padding",
          });
        },
      };
    }
  }
  const items = [];
  if (null != guild) {
    if (arg1) {
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
            let obj2 = { label: null, onPress: null };
            const intl2 = tmp3(tmp4[23]).intl;
            obj2.label = intl2.string(tmp3(tmp4[23]).t.cK1GGY);
            obj2.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideAllActionSheets();
              ModalActionCreatorsDefault.pushLazy(
                asyncRequireImpl(10071, dependencyMap.paths),
                { event, recurrenceId, onCloseActionSheet: "Array" },
                __initData,
              );
            };
            items.push(obj2);
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
          const obj3 = { label: null, onPress: null };
          const intl3 = tmp3(tmp4[23]).intl;
          obj3.label = intl3.string(tmp3(tmp4[23]).t.wmVmXN);
          obj3.onPress = function onPress() {
            openCreateOrEditGuildEventModal(guild, { guildEvent: event, recurrenceId });
          };
          items.push(obj3);
        }
        if (flag) {
          if (tmp6) {
            const obj4 = { label: null, isDestructive: true, onPress: null };
            const intl10 = tmp3(tmp4[23]).intl;
            obj4.label = intl10.string(tmp3(tmp4[23]).t.qaYzPA);
            obj4.onPress = function onPress() {
              GuildScheduledEventsActionCreatorsDefault.endEvent(event.id, event.guild_id);
            };
            items.push(obj4);
          } else {
            if (null != recurrenceId) {
              if (null != eventException) {
                if (eventException.is_canceled) {
                  const obj5 = { label: null, onPress: null };
                  const intl7 = tmp3(tmp4[23]).intl;
                  obj5.label = intl7.string(tmp3(tmp4[23]).t.b8606G);
                  obj5.onPress = function onPress() {
                    restoreEventRecurrenceDefault(eventException, guild.id, event.id, closure_1);
                  };
                  items.push(obj5);
                }
              }
              const obj6 = { label: null, isDestructive: true, onPress: null };
              const intl6 = tmp3(tmp4[23]).intl;
              obj6.label = intl6.string(tmp3(tmp4[23]).t.tqClly);
              obj6.onPress = function onPress() {
                ({ id, guild_id } = closure_0);
                const lazyResult = noop.lazy(() => event(paths[14])(paths[19], paths.paths));
                useAlertStore.openAlert(
                  "DeleteEventAlert",
                  <lazyResult eventId={id} guildId={guild_id} recurrenceId={recurrenceId} />,
                );
              };
              items.push(obj6);
            }
            if (null != event.recurrence_rule) {
              const intl9 = tmp3(tmp4[23]).intl;
              let stringResult1 = intl9.string(tmp3(tmp4[23]).t.wr33rW);
            } else {
              const intl8 = tmp3(tmp4[23]).intl;
              stringResult1 = intl8.string(tmp3(tmp4[23]).t.B9sJLX);
            }
            const obj7 = {
              label: stringResult1,
              isDestructive: true,
              onPress() {
                ({ id, guild_id } = closure_0);
                const lazyResult = noop.lazy(() => event(paths[14])(paths[19], paths.paths));
                useAlertStore.openAlert(
                  "DeleteEventAlert",
                  <lazyResult eventId={id} guildId={guild_id} recurrenceId="Array" />,
                );
              },
            };
            items.push(obj7);
          }
        } else {
          if (null != recurrenceId) {
            const intl5 = tmp3(tmp4[23]).intl;
            let stringResult2 = intl5.string(tmp3(tmp4[23]).t.BW1Qoh);
          } else {
            const intl4 = tmp3(tmp4[23]).intl;
            stringResult2 = intl4.string(tmp3(tmp4[23]).t.Rgy2dU);
          }
          const obj8 = {
            label: stringResult2,
            onPress() {
              openCreateOrEditGuildEventModal(guild, { guildEvent: event });
            },
          };
          items.push(obj8);
        }
        tmp15 = null == recurrenceId || flag;
      }
      const obj9 = { label: null, isDestructive: true, onPress: null };
      const intl11 = tmp3(tmp4[23]).intl;
      obj9.label = intl11.string(tmp3(tmp4[23]).t.IBA5wX);
      obj9.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        const result = ReportModals.showReportModalForGuildScheduledEvent(closure_0);
      };
      items.push(obj9);
      if (null != event.recurrence_rule) {
        const intl13 = tmp3(tmp4[23]).intl;
        let stringResult3 = intl13.string(tmp3(tmp4[23]).t.AYnhB7);
      } else {
        const intl12 = tmp3(tmp4[23]).intl;
        stringResult3 = intl12.string(tmp3(tmp4[23]).t["9o+VKx"]);
      }
      const obj10 = {
        label: stringResult3,
        onPress() {
          ClipboardUtils.copy(
            "" +
              location.protocol +
              "//" +
              location.host +
              collapsedCategories.GUILD_EVENT_DETAILS(guild_id, event.id, null),
          );
        },
      };
      items.push(obj10);
      if (null != recurrenceId) {
        const obj11 = { label: null, onPress: null };
        const intl14 = tmp3(tmp4[23]).intl;
        obj11.label = intl14.string(tmp3(tmp4[23]).t.QLtDqP);
        obj11.onPress = function onPress() {
          ClipboardUtils.copy(
            "" +
              location.protocol +
              "//" +
              location.host +
              collapsedCategories.GUILD_EVENT_DETAILS(guild_id, event.id, closure_1),
          );
        };
        items.push(obj11);
      }
      const DeveloperMode = tmp3(tmp4[38]).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        const obj12 = { label: null, onPress: null };
        const intl15 = tmp3(tmp4[23]).intl;
        obj12.label = intl15.string(tmp3(tmp4[23]).t.WZwPO4);
        obj12.onPress = function onPress() {
          ClipboardUtils.copy(event.id);
        };
        items.push(obj12);
        if (null != recurrenceId) {
          const obj13 = { label: null, onPress: null };
          const intl16 = tmp3(tmp4[23]).intl;
          obj13.label = intl16.string(tmp3(tmp4[23]).t.NZRGQo);
          obj13.onPress = function onPress() {
            ClipboardUtils.copy(closure_1);
          };
          items.push(obj13);
        }
        let tidaWebformEnabled = require("TidaWebformExperiment").getCurrentConfig({
          location: "showGuildEventModeratorActionSheet",
        }).tidaWebformEnabled;
        const obj16 = require("TidaWebformExperiment");
        const tmp32 = require("getGuildEventImage")(event, tmp3(tmp4[40]).getWindowDimensions().width);
        closure_5 = tmp32;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = null != tmp32;
        }
        if (tidaWebformEnabled) {
          const obj14 = { label: null, onPress: null };
          const intl17 = tmp3(tmp4[23]).intl;
          obj14.label = intl17.string(tmp3(tmp4[23]).t["8xHmxo"]);
          obj14.onPress = function onPress() {
            ClipboardUtils.copy(closure_5);
            const result = ToastUtils.presentCopiedToClipboard();
          };
          items.push(obj14);
        }
        const tmp3Result3 = tmp3(tmp4[40]);
      }
      const obj15 = { key: "GuildEvent", stackingBehavior: "stack", options: items, hasIcons: false };
      const result1 = tmp3(tmp4[42]).showSimpleActionSheet(obj15);
      const tmp3Result4 = tmp3(tmp4[42]);
    }
  }
  if (null != tmp7) {
    items.push(tmp7);
  }
  const tmp3Result = require("ScheduleUtils");
};
