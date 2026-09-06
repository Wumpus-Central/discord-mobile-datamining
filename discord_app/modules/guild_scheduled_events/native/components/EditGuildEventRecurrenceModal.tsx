// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useEventExceptionDefault from "../../useEventException.tsx";
import LazyAPIPromiseDefault from "../../../../utils/LazyAPIPromise.tsx";
import saveGuildEventRecurrenceDefault from "../../saveGuildEventRecurrence.tsx";
import EditGuildEventUtils from "../../utils/EditGuildEventUtils.tsx";
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar.tsx";
import EditGuildEventStepContainerDefault from "EditGuildEventStepContainer.tsx";
import GuildEventScheduleDefault from "GuildEventSchedule.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, cardStyle: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.cardStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(createStyles);
let constants = { TIME: "TIME" };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx",
);

export default function EditGuildEventRecurrenceModal(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
  _slicedToArray = undefined;
  noop = undefined;
  let error;
  constants = async function _handleSave(arg0, value) {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const v0 = 0;
            let obj1 = v0(closure_1_3[9]);
            if (obj1.areSchedulesIdentical(schedule, scheduleForRecurrenceWithException)) {
              onClose();
              c2 = 3;
            } else {
              c1 = 1;
              c2 = 1;
              obj1 = { value: React7(), done: false };
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (null != value) {
            closure_128_1();
          }
        }
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        c2 = tmp;
        throw tmp13;
      }
    }
  };
  function handleScheduleChange(arg0) {
    ({ startDate, endDate } = arg0);
    let addResult = endDate;
    if (tmp) {
      addResult = startDate.clone().add(1, "hour");
      const cloneResult = startDate.clone();
    }
    _undefined({ startDate, endDate: addResult });
    closure_8(null);
  }
  const tmp = error();
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp3 = useEventExceptionDefault(recurrenceId, guildEvent.id);
  dependencyMap = tmp3;
  let obj = guildEvent(9665);
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  let obj1 = guildEvent(9665);
  const scheduleForRecurrenceWithException = obj1.getScheduleForRecurrenceWithException(
    baseScheduleForRecurrence,
    tmp3,
  );
  const tmp2 = useSafeAreaInsetsDefault();
  [c5, c6] = _slicedToArray(noop.useState(scheduleForRecurrenceWithException), 2);
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  const first = tmp7[0];
  closure_8 = tmp7[1];
  const tmp9 = _slicedToArray(
    LazyAPIPromiseDefault(() => {
      const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
      return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, c5, closure_3);
    }),
    2,
  );
  closure_9 = tmp9[0];
  error = tmp9[1].error;
  let items = [error];
  const effect = noop.useEffect(() => {
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
  const intl = guildEvent(1114).intl;
  obj.text = intl.string(guildEvent(1114).t["R3BPH+"]);
  obj.onPress = function handleSave() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj.disabled = null != first;
  const action = closure_8(guildEvent(4975).Button, obj);
  obj = {
    title: "",
    customNavbar() {
      const obj = { screen: EditGuildEventUtils.EditGuildEventScreens.DETAILS, onClose };
      return React6(EditGuildEventModalNavbarDefault, obj);
    },
    headerLeft() {
      return null;
    },
    render() {
      let obj = { action, children: null };
      obj = { guildEvent, recurrenceId, schedule, onChange: handleScheduleChange };
      const items = [React6(GuildEventScheduleDefault, obj)];
      let tmp4Result = null;
      if (null != first) {
        obj = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp5 };
        tmp4Result = React6(Text_Text.Text, obj);
      }
      items[1] = tmp4Result;
      obj.children = items;
      return React7(EditGuildEventStepContainerDefault, obj);
    },
    fullscreen: true,
  };
  obj1 = {
    style: null,
    children: closure_8(guildEvent(7000).Navigator, {
      screens: { [closure_11.TIME]: obj },
      initialRouteName: constants.TIME,
      cardShadowEnabled: false,
      cardOverlayEnabled: false,
      cardStyle: tmp.cardStyle,
    }),
  };
  const items1 = [tmp.container, { paddingLeft: left, paddingRight: right }];
  obj1.style = items1;
  return closure_8(first, obj1);
}
