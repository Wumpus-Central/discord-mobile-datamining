// === Module 9767: EditGuildEventDetails ===

// Module 9767 (EditGuildEventDetails)
import util from "util" /* 1114 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import _modDef4153 from "module_4153" /* 4153 */;
import ScheduleUtils from "ScheduleUtils" /* 9665 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9704 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_6 = fn(7526).isGuildScheduledEventActive;
let constants = fn(1963).GuildScheduledEventEntityTypes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ error: { paddingVertical: 8 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx");

export default function EditGuildEventDetails(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const onChange = guildEvent.onChange;
  scheduledStartTime = undefined;
  let memo;
  constants = undefined;
  c8 = undefined;
  c11 = undefined;
  ({ description, scheduledStartTime } = guildEvent);
  const scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  const items = [scheduledStartTime];
  ({ name, entityType } = guildEvent);
  memo = memo.useMemo(() => _modDef4153(scheduledStartTime), items);
  const items1 = [scheduledEndTime, scheduledStartTime];
  const memo1 = memo.useMemo(() => {
    if (null != scheduledEndTime) {
      let addResult = _modDef4153(tmp);
    } else {
      addResult = _modDef4153(scheduledStartTime).add(1, "hour");
      const obj = _modDef4153(scheduledStartTime);
    }
    return addResult;
  }, items1);
  const tmp = c11();
  [c7, c8] = recurrenceRule(memo.useState(() => ScheduleUtils.recurrenceRuleToOption(_modDef4153(scheduledStartTime), recurrenceRule)), 2);
  const memo2 = memo.useMemo(() => onChange(scheduledEndTime[7])(), []);
  const items2 = [memo];
  const memo3 = memo.useMemo(() => onChange(scheduledEndTime[7])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"), []);
  const memo4 = memo.useMemo(() => _modDef4153(memo).add(15, "minutes"), items2);
  const memo5 = memo.useMemo(() => onChange(scheduledEndTime[7])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"), []);
  const ref = memo.useRef(null);
  const tmp10 = memo1(guildEvent.initialGuildEvent);
  closure_10 = tmp10;
  const tmp4 = recurrenceRule(memo.useState(() => ScheduleUtils.recurrenceRuleToOption(_modDef4153(scheduledStartTime), recurrenceRule)), 2);
  [tmp12, c11] = recurrenceRule(memo.useState(null), 2);
  let obj = guildEvent(scheduledEndTime[9]);
  const navigation = obj.useNavigation();
  let tmp17 = null;
  if (null != tmp12) {
    obj = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp12 };
    tmp17 = c8(tmp13(tmp14[10]).Text, obj);
  }
  obj = { children: null };
  const items3 = [tmp17, ];
  const obj1 = { text: null, variant: "primary", onPress: null, disabled: null };
  let intl = tmp13(tmp14[6]).intl;
  obj1.text = intl.string(guildEvent(scheduledEndTime[6]).t.PDTjLN);
  obj1.onPress = function onPress() {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    try {
      _undefined2(null);
      (function assertGuildEventDetailsValid(guildEvent) {
        if (0 === guildEvent.name.length) {
          const _Error = Error;
          const intl = guildEvent(1114).intl;
          const error = new Error(intl.string(guildEvent(1114).t.GoV0uR));
          throw error;
        }
      })(guildEvent);
      navigation.navigate(EditGuildEventUtils.EditGuildEventScreens.PREVIEW);
    } catch (tmp13) {
      _undefined2(tmp13.message);
      const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp13.message);
    }
  };
  obj1.disabled = null != tmp12;
  items3[1] = c8(guildEvent(scheduledEndTime[11]).Button, obj1);
  obj.children = items3;
  const tmp11 = recurrenceRule(memo.useState(null), 2);
  let obj2 = { action: closure_10(ref, obj), ref, children: null };
  const tmp15Result = closure_10(ref, obj);
  const obj3 = { title: null, subtitle: null };
  const tmp21 = onChange(scheduledEndTime[15]);
  const intl2 = tmp13(tmp14[6]).intl;
  obj3.title = intl2.string(guildEvent(scheduledEndTime[6]).t.GG6vbr);
  const intl3 = tmp13(tmp14[6]).intl;
  obj3.subtitle = intl3.string(guildEvent(scheduledEndTime[6]).t.q5lgwV);
  const items4 = [
    c8(onChange(scheduledEndTime[16]), obj3),
    c8(guildEvent(scheduledEndTime[17]).GuildEventTopic, {
      topic: name,
      onChange(name) {
        _undefined2(null);
        onChange({ name });
      }
    }),
  ,
  ,
  ,

  ];
  const obj5 = {
    date: memo,
    onChange(toISOString) {
      if (closure_10) {
        const intl = util.intl;
        return _undefined2(intl.string(util.t.nKIaRG));
      } else {
        const obj = { scheduledStartTime: toISOString.toISOString() };
        let isBeforeResult = null != scheduledEndTime;
        if (isBeforeResult) {
          isBeforeResult = memo1.isBefore(toISOString);
        }
        if (isBeforeResult) {
          const obj2 = _modDef4153(toISOString);
          obj.scheduledEndTime = _modDef4153(toISOString).add(1, "hour").toISOString();
          const addResult = _modDef4153(toISOString).add(1, "hour");
        }
        let tmp8 = null != toISOString;
        if (tmp8) {
          tmp8 = null != c7;
        }
        if (tmp8) {
          obj.recurrenceRule = ScheduleUtils.recurrenceOptionToRecurrenceRule(c7, toISOString);
        }
        _undefined2(null);
        onChange(obj);
      }
    },
    disabled: tmp10,
    minimumDate: memo2,
    maximumDate: memo3,
    dateLabel: null,
    timeLabel: null
  };
  const intl4 = tmp13(tmp14[6]).intl;
  obj5.dateLabel = intl4.string(guildEvent(scheduledEndTime[6]).t.kKOIwJ);
  const intl5 = tmp13(tmp14[6]).intl;
  obj5.timeLabel = intl5.string(guildEvent(scheduledEndTime[6]).t["6dGmCD"]);
  items4[2] = c8(guildEvent(scheduledEndTime[17]).GuildEventDatetime, obj5);
  let tmp19Result = entityType === constants.EXTERNAL;
  if (tmp19Result) {
    const obj6 = {
      date: memo1,
      onChange(toISOString) {
          _undefined2(null);
          onChange({ scheduledEndTime: toISOString.toISOString() });
        },
      minimumDate: memo4,
      maximumDate: memo5,
      dateLabel: null,
      timeLabel: null
    };
    const intl6 = tmp13(tmp14[6]).intl;
    obj6.dateLabel = intl6.string(tmp13(tmp14[6]).t.CTLgZJ);
    const intl7 = tmp13(tmp14[6]).intl;
    obj6.timeLabel = intl7.string(tmp13(tmp14[6]).t.j2RuXF);
    tmp19Result = tmp19(tmp13(tmp14[17]).GuildEventDatetime, obj6);
  }
  items4[3] = tmp19Result;
  items4[4] = c8(guildEvent(scheduledEndTime[17]).GuildEventRecurrence, {
    startDate: memo,
    recurrenceRule,
    onRecurrenceChange(c7) {
      if (null != memo) {
        const obj = { recurrenceRule: null };
        obj.recurrenceRule = obj.recurrenceOptionToRecurrenceRule(c7, tmp);
        onChange(obj);
        _undefined(c7);
      }
    }
  });
  if (description == null) {
    description = "";
  }
  items4[5] = c8(guildEvent(scheduledEndTime[17]).GuildEventDescription, {
    description,
    onChange(description) {
      _undefined2(null);
      onChange({ description });
    },
    onFocus() {
      const timerId = setTimeout(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.scrollToEnd();
        }
      }, 100);
    }
  });
  obj2.children = items4;
  return closure_10(tmp21, obj2);
};