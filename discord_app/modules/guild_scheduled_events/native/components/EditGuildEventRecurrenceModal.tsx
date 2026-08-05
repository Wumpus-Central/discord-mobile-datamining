// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx
import Themes from "Themes";
import _slicedToArray from "_slicedToArray";
import set from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useLazyAPIPromise } from "../../../../utils/LazyAPIPromise.tsx";
import { useEventException } from "../../useEventException.tsx";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { cardStyle: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { TIME: "TIME" };
let result = require("noop").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx");

export default function EditGuildEventRecurrenceModal(guildEvent) {
  let c5;
  let c6;
  let importDefault;
  let recurrenceId;
  guildEvent = guildEvent.guildEvent;
  ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
  let dependencyMap;
  let scheduleForRecurrenceWithException;
  let callback;
  let React;
  let first;
  let closure_8;
  let createCacheKey;
  let error;
  let closure_13;
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
          return { value: "HermesInternal", done: null };
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
              let c0 = 0;
              let obj1 = outer1_0(outer1_3[7]);
              if (obj1.areSchedulesIdentical(outer1_5, outer1_4)) {
                v0();
                c2 = 3;
              } else {
                v0 = 1;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = outer1_9();
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
    const _handleSave = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function handleScheduleChange(arg0) {
    let endDate;
    let startDate;
    ({ startDate, endDate } = arg0);
    let addResult = endDate;
    if (tmp) {
      addResult = startDate.clone().add(1, "hour");
      const cloneResult = startDate.clone();
    }
    _undefined2({ startDate, endDate: addResult });
    callback(null);
  }
  const tmp2 = useEventException(recurrenceId, guildEvent.id);
  dependencyMap = tmp2;
  let obj = guildEvent(8864);
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  let obj1 = guildEvent(8864);
  scheduleForRecurrenceWithException = obj1.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp2);
  let tmp = createCacheKey();
  [c5, c6] = callback(React.useState(scheduleForRecurrenceWithException), 2);
  const tmp6 = callback(React.useState(null), 2);
  first = tmp6[0];
  closure_8 = tmp6[1];
  const tmp8 = callback(useLazyAPIPromise(() => {
    const result = recurrenceId(_undefined[9]).dismissGlobalKeyboard();
    return outer1_1(_undefined[10])(guildEvent, recurrenceId, c5, _undefined);
  }), 2);
  createCacheKey = tmp8[0];
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
    closure_8(anyErrorMessage);
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
  closure_13 = first(guildEvent(4695).Button, obj);
  obj = {
    title: "",
    customNavbar() {
      const obj = { screen: null, onClose: null };
      obj[0] = guildEvent(_undefined[14]).EditGuildEventScreens.DETAILS;
      obj[1] = closure_1;
      return first(outer1_1(_undefined[13]), obj);
    },
    headerLeft() {
      return null;
    },
    render() {
      let obj = { action: closure_13, children: null };
      obj = { guildEvent, recurrenceId, schedule: c5, onChange: handleScheduleChange };
      const items = [first(outer1_1(_undefined[16]), obj), ];
      let tmp4Result = null;
      if (null != first) {
        obj = { variant: "text-md/normal", color: "text-feedback-critical", children: null };
        obj[2] = tmp5;
        tmp4Result = first(guildEvent(_undefined[17]).Text, obj);
      }
      items[1] = tmp4Result;
      obj[1] = items;
      return closure_8(outer1_1(_undefined[15]), obj);
    },
    fullscreen: true
  };
  obj1 = { screens: { [closure_10.TIME]: obj }, initialRouteName: error.TIME, cardShadowEnabled: false, cardOverlayEnabled: false, cardStyle: tmp.cardStyle };
  return first(guildEvent(5665).Navigator, obj1);
};