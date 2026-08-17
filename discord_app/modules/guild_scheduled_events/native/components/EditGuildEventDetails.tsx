// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { isGuildScheduledEventActive as closure_6 } from "../../GuildScheduledEventStore.tsx";
import { GuildScheduledEventEntityTypes as closure_7 } from "../../GuildScheduledEventsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ error: { paddingVertical: 8 } });
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx");

export default function EditGuildEventDetails(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const onChange = guildEvent.onChange;
  scheduledStartTime = undefined;
  let scheduledEndTime;
  let recurrenceRule;
  let memo;
  let memo1;
  let constants;
  let callback;
  let ref;
  closure_10 = undefined;
  let callback2;
  closure_12 = undefined;
  ({ description, scheduledStartTime } = guildEvent);
  scheduledEndTime = guildEvent.scheduledEndTime;
  recurrenceRule = guildEvent.recurrenceRule;
  const items = [scheduledStartTime];
  ({ name, entityType } = guildEvent);
  memo = memo.useMemo(() => onChange(scheduledEndTime[7])(scheduledStartTime), items);
  const items1 = [scheduledEndTime, scheduledStartTime];
  memo1 = memo.useMemo(() => {
    if (null != scheduledEndTime) {
      let addResult = onChange(scheduledEndTime[7])(tmp);
    } else {
      addResult = onChange(scheduledEndTime[7])(scheduledStartTime).add(1, "hour");
      const obj = onChange(scheduledEndTime[7])(scheduledStartTime);
    }
    return addResult;
  }, items1);
  const tmp = callback2();
  [c7, c8] = recurrenceRule(memo.useState(() => guildEvent(scheduledEndTime[8]).recurrenceRuleToOption(onChange(scheduledEndTime[7])(scheduledStartTime), recurrenceRule)), 2);
  const memo2 = memo.useMemo(() => onChange(scheduledEndTime[7])(), []);
  const items2 = [memo];
  const memo3 = memo.useMemo(() => onChange(scheduledEndTime[7])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"), []);
  const memo4 = memo.useMemo(() => onChange(scheduledEndTime[7])(memo).add(15, "minutes"), items2);
  const memo5 = memo.useMemo(() => onChange(scheduledEndTime[7])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"), []);
  ref = memo.useRef(null);
  const tmp10 = memo1(guildEvent.initialGuildEvent);
  closure_10 = tmp10;
  const tmp4 = recurrenceRule(memo.useState(() => guildEvent(scheduledEndTime[8]).recurrenceRuleToOption(onChange(scheduledEndTime[7])(scheduledStartTime), recurrenceRule)), 2);
  [tmp12, c11] = recurrenceRule(memo.useState(null), 2);
  let obj = guildEvent(scheduledEndTime[9]);
  closure_12 = obj.useNavigation();
  let tmp17 = null;
  if (null != tmp12) {
    obj = { style: null, variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    obj[0] = tmp.error;
    obj[3] = tmp12;
    tmp17 = callback(tmp13(tmp14[10]).Text, obj);
  }
  obj = { children: null };
  const items3 = [tmp17, ];
  obj1 = { text: null, variant: "primary", onPress: null, disabled: null };
  let intl = tmp13(tmp14[6]).intl;
  obj1[0] = intl.string(guildEvent(scheduledEndTime[6]).t.PDTjLN);
  obj1[2] = function onPress() {
    const result = scheduledStartTime(scheduledEndTime[12]).dismissGlobalKeyboard();
    try {
      _undefined2(null);
      (function assertGuildEventDetailsValid(guildEvent) {
        if (0 === guildEvent.name.length) {
          const _Error = Error;
          const intl = callback(1236).intl;
          error = new Error(intl.string(callback(1236).t.GoV0uR));
          throw error;
        }
      })(guildEvent);
      navigation.navigate(guildEvent(scheduledEndTime[13]).EditGuildEventScreens.PREVIEW);
    } catch (tmp13) {
      _undefined2(tmp13.message);
      const AccessibilityAnnouncer = guildEvent(tmp2[14]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp13.message);
    }
  };
  obj1[3] = null != tmp12;
  items3[1] = callback(guildEvent(scheduledEndTime[11]).Button, obj1);
  obj[0] = items3;
  const tmp11 = recurrenceRule(memo.useState(null), 2);
  const tmp16 = ref;
  let obj2 = { action: closure_10(ref, obj), ref, children: null };
  const tmp15Result = closure_10(ref, obj);
  const obj3 = { title: null, subtitle: null };
  const tmp21 = onChange(scheduledEndTime[15]);
  const intl2 = tmp13(tmp14[6]).intl;
  obj3[0] = intl2.string(guildEvent(scheduledEndTime[6]).t.GG6vbr);
  const intl3 = tmp13(tmp14[6]).intl;
  obj3[1] = intl3.string(guildEvent(scheduledEndTime[6]).t.q5lgwV);
  const items4 = [
    callback(onChange(scheduledEndTime[16]), obj3),
    callback(guildEvent(scheduledEndTime[17]).GuildEventTopic, {
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
        const intl = guildEvent(scheduledEndTime[6]).intl;
        return _undefined2(intl.string(guildEvent(scheduledEndTime[6]).t.nKIaRG));
      } else {
        const obj = { scheduledStartTime: null };
        obj[0] = toISOString.toISOString();
        let isBeforeResult = null != scheduledEndTime;
        if (isBeforeResult) {
          isBeforeResult = memo1.isBefore(toISOString);
        }
        if (isBeforeResult) {
          const obj2 = onChange(scheduledEndTime[7])(toISOString);
          obj.scheduledEndTime = onChange(scheduledEndTime[7])(toISOString).add(1, "hour").toISOString();
          const addResult = onChange(scheduledEndTime[7])(toISOString).add(1, "hour");
        }
        let tmp8 = null != toISOString;
        if (tmp8) {
          tmp8 = null != c7;
        }
        if (tmp8) {
          obj.recurrenceRule = guildEvent(scheduledEndTime[8]).recurrenceOptionToRecurrenceRule(c7, toISOString);
          const obj4 = guildEvent(scheduledEndTime[8]);
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
  obj5[5] = intl4.string(guildEvent(scheduledEndTime[6]).t.kKOIwJ);
  const intl5 = tmp13(tmp14[6]).intl;
  obj5[6] = intl5.string(guildEvent(scheduledEndTime[6]).t["6dGmCD"]);
  items4[2] = callback(guildEvent(scheduledEndTime[17]).GuildEventDatetime, obj5);
  let tmp19Result = entityType === constants.EXTERNAL;
  if (tmp19Result) {
    const obj6 = { date: null, onChange: null, minimumDate: null, maximumDate: null, dateLabel: null, timeLabel: null };
    obj6[0] = memo1;
    obj6[1] = function onChange(toISOString) {
      _undefined2(null);
      onChange({ scheduledEndTime: toISOString.toISOString() });
    };
    obj6[2] = memo4;
    obj6[3] = memo5;
    const intl6 = tmp13(tmp14[6]).intl;
    obj6[4] = intl6.string(tmp13(tmp14[6]).t.CTLgZJ);
    const intl7 = tmp13(tmp14[6]).intl;
    obj6[5] = intl7.string(tmp13(tmp14[6]).t.j2RuXF);
    tmp19Result = tmp19(tmp13(tmp14[17]).GuildEventDatetime, obj6);
  }
  items4[3] = tmp19Result;
  items4[4] = callback(guildEvent(scheduledEndTime[17]).GuildEventRecurrence, {
    startDate: memo,
    recurrenceRule,
    onRecurrenceChange(c7) {
      if (null != memo) {
        let obj = guildEvent(scheduledEndTime[8]);
        obj = { recurrenceRule: null };
        obj[0] = obj.recurrenceOptionToRecurrenceRule(c7, tmp);
        onChange(obj);
        _undefined(c7);
      }
    }
  });
  if (description == null) {
    description = "";
  }
  items4[5] = callback(guildEvent(scheduledEndTime[17]).GuildEventDescription, {
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
  obj2[2] = items4;
  return closure_10(tmp21, obj2);
};