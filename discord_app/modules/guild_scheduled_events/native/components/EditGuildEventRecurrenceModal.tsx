// === Module 8805: EditGuildEventRecurrenceModal ===

// Module 8805 (EditGuildEventRecurrenceModal)
import ThemesDefault from "Themes" /* 712 */;
import useEventExceptionDefault from "useEventException" /* 8790 */;
import useLazyAPIPromiseDefault from "useLazyAPIPromise" /* 8798 */;
import saveGuildEventRecurrenceDefault from "saveGuildEventRecurrence" /* 8806 */;
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar" /* 8807 */;
import _modDef8808 from "module_8808" /* 8808 */;
import GuildEventScheduleDefault from "GuildEventSchedule" /* 8809 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { TIME: "TIME" };
let result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx");

export default function EditGuildEventRecurrenceModal(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
  let callback;
  let React;
  let callback2;
  function _handleSave() {
    const self = this;
    const tmp = scheduleForRecurrenceWithException(function*() {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c0 = 0;
              obj1 = closure_1_0(closure_1_3[7]);
              if (obj1.areSchedulesIdentical(closure_1_5, closure_1_4)) {
                v0();
                c2 = 3;
              } else {
                v0 = 1;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_9();
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            if (null != arg1) {
              v0();
            }
          }
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp13) {
          c2 = tmp;
          throw tmp13;
        }
      }
    });
    closure_11 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function handleScheduleChange(arg0) {
    ({ startDate, endDate } = arg0);
    let addResult = endDate;
    if (tmp) {
      addResult = startDate.clone().add(1, "hour");
      const cloneResult = startDate.clone();
    }
    _undefined({ startDate, endDate: addResult });
    callback(null);
  }
  const tmp2 = useEventExceptionDefault(recurrenceId, guildEvent.id);
  dependencyMap = tmp2;
  let obj = guildEvent(8785);
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  obj1 = guildEvent(8785);
  const scheduleForRecurrenceWithException = obj1.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp2);
  let tmp = callback2();
  [c5, c6] = callback(React.useState(scheduleForRecurrenceWithException), 2);
  const tmp6 = callback(React.useState(null), 2);
  const first = tmp6[0];
  closure_8 = tmp6[1];
  const tmp8 = callback(useLazyAPIPromiseDefault(() => {
    const result = recurrenceId(1892).dismissGlobalKeyboard();
    return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, c5, dependencyMap);
  }), 2);
  callback2 = tmp8[0];
  error = tmp8[1].error;
  let items = [error];
  const effect = React.useEffect(() => {
    let anyErrorMessage;
    if (error != null) {
      anyErrorMessage = error.getAnyErrorMessage();
    }
    if (anyErrorMessage == null) {
      anyErrorMessage = null;
    }
    callback(anyErrorMessage);
  }, items);
  obj = { size: "md", text: null, onPress: null, disabled: null };
  const intl = guildEvent(1236).intl;
  obj[1] = intl.string(guildEvent(1236).t["R3BPH+"]);
  obj[2] = function handleSave() {
    const self = this;
    const apply = _handleSave.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj[3] = null != first;
  closure_13 = first(guildEvent(4745).Button, obj);
  obj = {
    title: "",
    customNavbar() {
      const obj = { screen: guildEvent(8784).EditGuildEventScreens.DETAILS, onClose: closure_1 };
      return first(EditGuildEventModalNavbarDefault, obj);
    },
    headerLeft() {
      return null;
    },
    render() {
      let obj = { guildEvent, recurrenceId, schedule: c5, onChange: handleScheduleChange };
      const items = [first(GuildEventScheduleDefault, obj), ];
      let tmp4Result = null;
      if (null != first) {
        obj = { variant: "text-md/normal", color: "text-feedback-critical", children: null };
        obj[2] = tmp5;
        tmp4Result = first(guildEvent(4734).Text, obj);
      }
      items[1] = tmp4Result;
      obj[1] = items;
      return callback(_modDef8808, obj);
    },
    fullscreen: true
  };
  obj1 = { screens: { [closure_10.TIME]: obj }, initialRouteName: error.TIME, cardShadowEnabled: false, cardOverlayEnabled: false, cardStyle: tmp.cardStyle };
  return first(guildEvent(6312).Navigator, obj1);
};