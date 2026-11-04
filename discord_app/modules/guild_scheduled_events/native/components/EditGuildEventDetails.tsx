// === Module 9227: EditGuildEventDetails ===

// Module 9227 (EditGuildEventDetails)
import util from "util" /* 1113 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2017 */;
import _modDef2171 from "module_2171" /* 2171 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9113 */;
import ScheduleUtils from "ScheduleUtils" /* 9114 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_6 = fn(6990).isGuildScheduledEventActive;
let constants = fn(4996).GuildScheduledEventEntityTypes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
let closure_11 = createStyles.createStyles({ error: { paddingVertical: 8 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx");

export default function EditGuildEventDetails(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const onChange = guildEvent.onChange;
  scheduledStartTime = undefined;
  let memo;
  c6 = undefined;
  constants = undefined;
  c10 = undefined;
  c11 = undefined;
  let navigation;
  ({ description, scheduledStartTime } = guildEvent);
  let scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  items = [scheduledStartTime];
  ({ name, entityType } = guildEvent);
  memo = memo.useMemo(() => _modDef2171(scheduledStartTime), items);
  const items1 = [scheduledEndTime, scheduledStartTime];
  const memo1 = memo.useMemo(() => {
    if (null != scheduledEndTime) {
      let addResult = _modDef2171(tmp);
    } else {
      addResult = _modDef2171(scheduledStartTime).add(1, "hour");
      const obj = _modDef2171(scheduledStartTime);
    }
    return addResult;
  }, items1);
  const tmp = c11();
  [c6, c7] = recurrenceRule(memo.useState(() => ScheduleUtils.recurrenceRuleToOption(_modDef2171(scheduledStartTime), recurrenceRule)), 2);
  const memo2 = memo.useMemo(() => onChange(scheduledEndTime[6])(), []);
  const items2 = [memo];
  const memo3 = memo.useMemo(() => onChange(scheduledEndTime[6])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"), []);
  const memo4 = memo.useMemo(() => _modDef2171(memo).add(15, "minutes"), items2);
  const memo5 = memo.useMemo(() => onChange(scheduledEndTime[6])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"), []);
  let ref = memo.useRef(null);
  const tmp10 = c6(guildEvent.initialGuildEvent);
  closure_9 = tmp10;
  const tmp4 = recurrenceRule(memo.useState(() => ScheduleUtils.recurrenceRuleToOption(_modDef2171(scheduledStartTime), recurrenceRule)), 2);
  [tmp12, c10] = recurrenceRule(memo.useState(null), 2);
  let stringResult = null;
  if (null != scheduledEndTime) {
    let obj2 = onChange(scheduledEndTime[6])(scheduledEndTime);
    let startOfResult = onChange(scheduledEndTime[6])(scheduledEndTime).startOf("minute");
    stringResult = null;
    if (!startOfResult.isAfter(obj4.startOf("minute"))) {
      let intl = guildEvent(tmp15[7]).intl;
      stringResult = intl.string(guildEvent(tmp15[7]).t.LpjF4K);
    }
    obj4 = onChange(scheduledEndTime[6])(scheduledStartTime);
  }
  c11 = stringResult;
  ref = obj.useRef(null);
  const items3 = [stringResult];
  const effect = obj.useEffect(() => {
    let tmp2 = null != current;
    if (tmp2) {
      tmp2 = null == ref.current;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(current);
    }
    ref.current = current;
  }, items3);
  const tmp11 = recurrenceRule(memo.useState(null), 2);
  navigation = guildEvent(scheduledEndTime[10]).useNavigation();
  let tmp22 = null;
  if (null != tmp12) {
    let obj3 = { style: tmp.error, variant: "body-sm/normal", color: "text-feedback-critical", children: tmp12 };
    tmp22 = ref(tmp18(tmp19[11]).Text, obj3);
  }
  let obj6 = { children: null };
  const items4 = [tmp22, ];
  const obj7 = { text: null, variant: "primary", onPress: null, disabled: null };
  let intl2 = tmp18(tmp19[7]).intl;
  obj7.text = intl2.string(guildEvent(scheduledEndTime[7]).t.PDTjLN);
  obj7.onPress = function handleNext() {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    try {
      _undefined2(null);
      (function assertGuildEventDetailsValid(guildEvent) {
        scheduledEndTime = guildEvent.scheduledEndTime;
        if (0 === guildEvent.name.length) {
          const _Error2 = Error;
          const intl2 = guildEvent(1113).intl;
          const error = new Error(intl2.string(guildEvent(1113).t.GoV0uR));
          throw error;
        } else if (null != scheduledEndTime) {
          const obj = onChange(2171)(scheduledEndTime);
          const startOfResult = onChange(2171)(scheduledEndTime).startOf("minute");
          if (!startOfResult.isAfter(obj3.startOf("minute"))) {
            const _Error = Error;
            const intl = guildEvent(1113).intl;
            const error1 = new Error(intl.string(guildEvent(1113).t.LpjF4K));
            throw error1;
          }
          obj3 = onChange(2171)(tmp);
        }
      })(guildEvent);
      navigation.navigate(EditGuildEventUtils.EditGuildEventScreens.PREVIEW);
    } catch (tmp13) {
      _undefined2(tmp13.message);
      const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp13.message);
    }
  };
  obj7.disabled = null != tmp12;
  items4[1] = ref(guildEvent(scheduledEndTime[12]).Button, obj7);
  obj6.children = items4;
  const obj5 = guildEvent(scheduledEndTime[10]);
  let obj8 = { action: c10(closure_9, obj6), ref, children: null };
  const tmp20Result = c10(closure_9, obj6);
  const obj9 = { title: null, subtitle: null };
  const tmp26 = onChange(scheduledEndTime[15]);
  const intl3 = tmp18(tmp19[7]).intl;
  obj9.title = intl3.string(guildEvent(scheduledEndTime[7]).t.GG6vbr);
  const intl4 = tmp18(tmp19[7]).intl;
  obj9.subtitle = intl4.string(guildEvent(scheduledEndTime[7]).t.q5lgwV);
  const items5 = [
    ref(onChange(scheduledEndTime[16]), obj9),
    ref(guildEvent(scheduledEndTime[17]).GuildEventTopic, {
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
  const obj11 = {
    date: memo,
    onChange: function handleChangeEventStartTime(arg0) {
      if (closure_9) {
        const intl = util.intl;
        return _undefined2(intl.string(util.t.nKIaRG));
      } else {
        const startOfResult = _modDef2171(arg0).startOf("minute");
        const obj2 = { scheduledStartTime: startOfResult.toISOString() };
        let isBeforeResult = null != scheduledEndTime;
        if (isBeforeResult) {
          const obj4 = _modDef2171(tmp4);
          isBeforeResult = _modDef2171(tmp4).startOf("minute").isBefore(startOfResult);
          const startOfResult1 = _modDef2171(tmp4).startOf("minute");
        }
        if (isBeforeResult) {
          const obj6 = _modDef2171(startOfResult);
          obj2.scheduledEndTime = _modDef2171(startOfResult).add(1, "hour").toISOString();
          const addResult = _modDef2171(startOfResult).add(1, "hour");
        }
        let tmp9 = null != arg0;
        if (tmp9) {
          tmp9 = null != c6;
        }
        if (tmp9) {
          obj2.recurrenceRule = ScheduleUtils.recurrenceOptionToRecurrenceRule(c6, startOfResult);
        }
        _undefined2(null);
        onChange(obj2);
        const obj = _modDef2171(arg0);
      }
    },
    disabled: tmp10,
    minimumDate: memo2,
    maximumDate: memo3,
    dateLabel: null,
    timeLabel: null
  };
  const intl5 = tmp18(tmp19[7]).intl;
  obj11.dateLabel = intl5.string(guildEvent(scheduledEndTime[7]).t.kKOIwJ);
  const intl6 = tmp18(tmp19[7]).intl;
  obj11.timeLabel = intl6.string(guildEvent(scheduledEndTime[7]).t["6dGmCD"]);
  items5[2] = ref(guildEvent(scheduledEndTime[17]).GuildEventDatetime, obj11);
  let tmp24Result = entityType === constants.EXTERNAL;
  if (tmp24Result) {
    const obj12 = {
      date: memo1,
      onChange: function handleChangeEventEndTime(arg0) {
          const obj = { scheduledEndTime: null };
          const obj2 = _modDef2171(arg0);
          obj.scheduledEndTime = _modDef2171(arg0).startOf("minute").toISOString();
          _undefined2(null);
          onChange(obj);
        },
      minimumDate: memo4,
      maximumDate: memo5,
      dateLabel: null,
      timeLabel: null
    };
    const intl7 = tmp18(tmp19[7]).intl;
    obj12.dateLabel = intl7.string(tmp18(tmp19[7]).t.CTLgZJ);
    const intl8 = tmp18(tmp19[7]).intl;
    obj12.timeLabel = intl8.string(tmp18(tmp19[7]).t.j2RuXF);
    tmp24Result = tmp24(tmp18(tmp19[17]).GuildEventDatetime, obj12);
  }
  items5[3] = tmp24Result;
  items5[4] = ref(guildEvent(scheduledEndTime[17]).GuildEventRecurrence, {
    startDate: memo,
    recurrenceRule,
    onRecurrenceChange: function handleRecurrenceChange(c6) {
      if (null != memo) {
        const obj2 = { recurrenceRule: ScheduleUtils.recurrenceOptionToRecurrenceRule(c6, tmp) };
        onChange(obj2);
        _undefined(c6);
      }
    }
  });
  if (description == null) {
    description = "";
  }
  items5[5] = ref(guildEvent(scheduledEndTime[17]).GuildEventDescription, {
    description,
    onChange(description) {
      _undefined2(null);
      onChange({ description });
    },
    onFocus() {
      const timerId = setTimeout(() => {
        if (null != ref.current) {
          current = ref.current;
          current.scrollToEnd();
        }
      }, 100);
    }
  });
  obj8.children = items5;
  return c10(tmp26, obj8);
};