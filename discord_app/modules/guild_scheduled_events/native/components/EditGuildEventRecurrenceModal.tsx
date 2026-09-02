// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useEventExceptionDefault from "../../useEventException.tsx";
import useLazyAPIPromiseDefault from "../../../../utils/LazyAPIPromise.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, cardStyle: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let closure_11 = { TIME: "TIME" };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let result = require("set").fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx",
);

export default function EditGuildEventRecurrenceModal(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
  dependencyMap = undefined;
  let scheduleForRecurrenceWithException;
  let callback;
  let React;
  let first;
  let callback2;
  closure_9 = undefined;
  error = undefined;
  closure_13 = undefined;
  function _handleSave() {
    const self = this;
    const tmp = scheduleForRecurrenceWithException(function* () {
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
              c0 = 0;
              obj1 = closure_1_0(closure_1_3[9]);
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
  let tmp = error();
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp3 = useEventExceptionDefault(recurrenceId, guildEvent.id);
  dependencyMap = tmp3;
  let obj = guildEvent(9647);
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  obj1 = guildEvent(9647);
  scheduleForRecurrenceWithException = obj1.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp3);
  const tmp2 = useSafeAreaInsetsDefault();
  [c5, c6] = callback(React.useState(scheduleForRecurrenceWithException), 2);
  const tmp7 = callback(React.useState(null), 2);
  first = tmp7[0];
  callback2 = tmp7[1];
  const tmp9 = callback(
    useLazyAPIPromiseDefault(() => {
      const result = recurrenceId(1890).dismissGlobalKeyboard();
      return closure_1_1(9685)(guildEvent, recurrenceId, c5, dependencyMap);
    }),
    2,
  );
  closure_9 = tmp9[0];
  error = tmp9[1].error;
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
  const intl = guildEvent(1233).intl;
  obj[1] = intl.string(guildEvent(1233).t["R3BPH+"]);
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
  closure_13 = callback2(guildEvent(4928).Button, obj);
  obj = {
    title: "",
    customNavbar() {
      const obj = { screen: guildEvent(9687).EditGuildEventScreens.DETAILS, onClose: closure_1 };
      return callback(closure_1_1(9690), obj);
    },
    headerLeft() {
      return null;
    },
    render() {
      let obj = { action: closure_13, children: null };
      obj = { guildEvent, recurrenceId, schedule: c5, onChange: handleScheduleChange };
      const items = [callback(closure_1_1(9692), obj)];
      let tmp4Result = null;
      if (null != first) {
        obj = { variant: "text-md/normal", color: "text-feedback-critical", children: null };
        obj[2] = tmp5;
        tmp4Result = callback(guildEvent(4474).Text, obj);
      }
      items[1] = tmp4Result;
      obj[1] = items;
      return closure_9(closure_1_1(9691), obj);
    },
    fullscreen: true,
  };
  obj1 = { style: items1, children: callback2(guildEvent(6016).Navigator, obj2) };
  items1 = [tmp.container, { paddingLeft: left, paddingRight: right }];
  return callback2(first, obj1);
}
