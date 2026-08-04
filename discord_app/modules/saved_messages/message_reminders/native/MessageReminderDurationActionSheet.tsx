// discord_app/modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import Background from "Background";
import getTimeSafe from "getTimeSafe";
import jsxProd from "CheckmarkLargeIcon";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { body: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("getTimeSafe").fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx");

export default function MessageReminderDurationActionSheet(createReminder) {
  let c5;
  let _slicedToArray;
  let dependencyMap;
  let onBack;
  let tmp7;
  createReminder = createReminder.createReminder;
  const removeReminder = createReminder.removeReminder;
  ({ channelId: dependencyMap, messageId: _slicedToArray, onBack } = createReminder);
  c5 = undefined;
  let dueInText;
  let obj = createReminder(589);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.getSavedMessage(closure_2, _slicedToArray));
  let obj1 = onBack;
  const tmp = createCacheKey();
  const date = new Date();
  [tmp7, c5] = callback(onBack.useState(new Date()), 2);
  const effect = onBack.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), removeReminder(outer1_2[7]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  const tmp6 = callback(onBack.useState(new Date()), 2);
  let dueAt;
  if (stateFromStores != null) {
    dueAt = stateFromStores.saveData.dueAt;
  }
  obj = { dueAt, now: tmp7, type: tmp2(9955).DueInStringTypes.SHORT };
  dueInText = createReminder(9955).useDueInString(obj).dueInText;
  const items1 = [onBack, dueInText];
  const items2 = [createReminder];
  const memo = obj1.useMemo(() => {
    let obj = { title: null, subtitle: null, leading: null };
    const intl = createReminder(outer1_2[10]).intl;
    obj[0] = intl.string(createReminder(outer1_2[10]).t.roMu1H);
    obj[1] = dueInText;
    let tmpResult = null != onBack;
    if (tmpResult) {
      obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl2 = tmp2(tmp3[10]).intl;
      obj[1] = intl2.string(tmp2(tmp3[10]).t["13/7kX"]);
      obj[2] = tmp4;
      obj[3] = tmp(tmp2(tmp3[12]).ArrowLargeLeftIcon, { size: "md" });
      tmpResult = tmp(tmp2(tmp3[11]).PressableOpacity, obj);
    }
    obj[2] = tmpResult;
    return dueInText(createReminder(outer1_2[9]).BottomSheetTitleHeader, obj);
  }, items1);
  const memo1 = obj1.useMemo(() => {
    const prop = createReminder(outer1_2[13]).MESSAGE_REMINDER_DURATION_ITEMS;
    const mapped = prop.map((arg0) => {
      let closure_0;
      let getLabel;
      ({ getDueAt: closure_0, getLabel } = arg0);
      const obj = { label: null, onPress: null };
      obj[0] = getLabel();
      obj[1] = function onPress() {
        outer1_0(callback());
        outer2_1(outer2_2[15]).hideActionSheet();
      };
      return outer1_6(outer1_0(outer1_2[14]).TableRow, obj, "create-reminder-" + getLabel());
    });
    let obj = { label: null, onPress: null, arrow: true };
    const intl = createReminder(outer1_2[10]).intl;
    obj[0] = intl.string(createReminder(outer1_2[10]).t.OLA8Zi);
    obj[1] = function onPress() {
      let obj = outer1_1(outer1_2[15]);
      obj.hideActionSheet();
      const obj2 = outer1_1(outer1_2[16]);
      obj = { onClose: null, createReminder: null };
      const tmp2 = outer1_0(outer1_2[18])(outer1_2[17], outer1_2.paths);
      obj[0] = outer1_1(outer1_2[16]).pop();
      obj[1] = closure_0;
      obj2.pushLazy(tmp2, obj, "create-reminder-custom", { presentation: "modal" });
    };
    mapped.push(dueInText(createReminder(outer1_2[14]).TableRow, obj, "create-reminder-custom"));
    return mapped;
  }, items2);
  obj = { header: memo, bodyStyles: tmp.body, startExpanded: true, children: null };
  const items3 = [dueInText(createReminder(5558).TableRowGroup, { hasIcons: false, children: memo1 }), ];
  let tmp13Result = null != removeReminder;
  if (tmp13Result) {
    obj1 = { icon: null, label: null, onPress: null, start: true, end: true };
    obj1[0] = tmp13(tmp2(4145).CheckmarkLargeIcon, {});
    let intl = tmp2(1236).intl;
    obj1[1] = intl.string(tmp2(1236).t.yjGtdJ);
    obj1[2] = function onPress() {
      removeReminder(outer1_2[15]).hideActionSheet();
      removeReminder();
    };
    tmp13Result = tmp13(tmp2(5224).TableRow, obj1, "remove-reminder");
  }
  items3[1] = tmp13Result;
  obj[3] = items3;
  return closure_7(createReminder(5247).BottomSheet, obj);
};