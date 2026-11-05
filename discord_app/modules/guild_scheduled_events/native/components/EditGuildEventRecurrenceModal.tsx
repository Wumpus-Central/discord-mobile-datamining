// === Module 9137: EditGuildEventRecurrenceModal ===

// Module 9137 (EditGuildEventRecurrenceModal)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2017 */;
import Text_Text from "Text/Text" /* 5763 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9119 */;
import useEventExceptionDefault from "useEventException" /* 9127 */;
import LazyAPIPromiseDefault from "LazyAPIPromise" /* 9130 */;
import saveGuildEventRecurrenceDefault from "saveGuildEventRecurrence" /* 9138 */;
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar" /* 9139 */;
import EditGuildEventStepContainerDefault from "EditGuildEventStepContainer" /* 9140 */;
import GuildEventScheduleDefault from "GuildEventSchedule" /* 9142 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, cardStyle: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.cardStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(obj2);
let constants = { TIME: "TIME" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx");

export default function EditGuildEventRecurrenceModal(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
  _slicedToArray = undefined;
  noop = undefined;
  first = undefined;
  closure_8 = undefined;
  let error;
  constants = async function _handleSave() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const v0 = 0;
            if (obj2.areSchedulesIdentical(schedule, scheduleForRecurrenceWithException)) {
              onClose();
              c2 = 3;
            } else {
              c1 = 1;
              c2 = 1;
              const obj5 = { value: React6(), done: false };
              return obj5;
            }
            obj2 = v0(closure_1_3[9]);
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
        const obj = { value, done: true };
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
  const tmp2 = useSafeAreaInsetsDefault();
  const baseScheduleForRecurrence = guildEvent(9120).getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  let obj = guildEvent(9120);
  const scheduleForRecurrenceWithException = guildEvent(9120).getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp3);
  let obj2 = guildEvent(9120);
  [c5, c6] = noop.useState(scheduleForRecurrenceWithException);
  [first, closure_8] = noop.useState(null);
  const tmp9 = _slicedToArray(LazyAPIPromiseDefault(() => {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, c5, closure_3);
  }), 2);
  closure_9 = tmp9[0];
  error = tmp9[1].error;
  items = [error];
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
  let obj3 = { size: "md", text: null, onPress: null, disabled: null };
  const intl = guildEvent(1113).intl;
  obj3.text = intl.string(guildEvent(1113).t["R3BPH+"]);
  obj3.onPress = function handleSave() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj3.disabled = null != first;
  const action = closure_8(guildEvent(5770).Button, obj3);
  let obj5 = {
    style: null,
    children: closure_8(guildEvent(7309).Navigator, {
      screens: {
        [closure_11.TIME]: {
          title: "",
          customNavbar() {
            const obj = { screen: EditGuildEventUtils.EditGuildEventScreens.DETAILS, onClose };
            return React5(EditGuildEventModalNavbarDefault, obj);
          },
          headerLeft() {
            return null;
          },
          render() {
            const obj = { action, children: null };
            items = [React5(GuildEventScheduleDefault, { guildEvent, recurrenceId, schedule, onChange: handleScheduleChange }), ];
            let tmp4Result = null;
            if (null != first) {
              const obj3 = { variant: "body-md/normal", color: "text-feedback-critical", children: tmp5 };
              tmp4Result = React5(Text_Text.Text, obj3);
            }
            items[1] = tmp4Result;
            obj.children = items;
            return React6(EditGuildEventStepContainerDefault, obj);
          },
          fullscreen: true
        }
      },
      initialRouteName: constants.TIME,
      cardShadowEnabled: false,
      cardOverlayEnabled: false,
      cardStyle: tmp.cardStyle
    })
  };
  const items1 = [tmp.container, { paddingLeft: left, paddingRight: right }];
  obj5.style = items1;
  return closure_8(first, obj5);
};