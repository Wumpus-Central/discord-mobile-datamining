// === Module 11209: MessageReminderDurationActionSheet ===

// Module 11209 (MessageReminderDurationActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "getTimeSafe" /* 11159 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { body: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx");

export default function MessageReminderDurationActionSheet(createReminder) {
  createReminder = createReminder.createReminder;
  const removeReminder = createReminder.removeReminder;
  ({ channelId: dependencyMap, messageId: closure_3, onBack } = createReminder);
  c5 = undefined;
  let dueInText;
  let isOverdue;
  let obj = createReminder(589);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.getSavedMessage(closure_2, closure_3));
  obj1 = onBack;
  const tmp = callback2();
  const date = new Date();
  [tmp7, c5] = callback(onBack.useState(new Date()), 2);
  const effect = onBack.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), removeReminder(closure_1_2[7]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  const tmp6 = callback(onBack.useState(new Date()), 2);
  let dueAt;
  if (stateFromStores != null) {
    dueAt = stateFromStores.saveData.dueAt;
  }
  obj = { dueAt, now: tmp7, type: tmp2(11210).DueInStringTypes.SHORT };
  const dueInString = createReminder(11210).useDueInString(obj);
  dueInText = dueInString.dueInText;
  isOverdue = dueInString.isOverdue;
  const items1 = [onBack, dueInText, isOverdue];
  const items2 = [createReminder];
  const memo = obj1.useMemo(() => {
    const intl = createReminder(closure_1_2[10]).intl;
    const t = createReminder(closure_1_2[10]).t;
    let obj = { title: intl.string(isOverdue ? t.GtBCnz : t.roMu1H), subtitle: dueInText, leading: null };
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
    return dueInText(createReminder(closure_1_2[9]).BottomSheetTitleHeader, obj);
  }, items1);
  const memo1 = obj1.useMemo(() => {
    const prop = createReminder(closure_1_2[13]).MESSAGE_REMINDER_DURATION_ITEMS;
    const mapped = prop.map((arg0) => {
      ({ getDueAt: closure_0, getLabel } = arg0);
      return closure_1_6(closure_1_0(closure_1_2[14]).TableRow, {
        label: getLabel(),
        onPress() {
          closure_1_0(callback());
          closure_2_1(closure_2_2[15]).hideActionSheet();
        }
      }, "create-reminder-" + getLabel());
    });
    let obj = { label: null, onPress: null, arrow: true };
    const intl = createReminder(closure_1_2[10]).intl;
    obj[0] = intl.string(createReminder(closure_1_2[10]).t.OLA8Zi);
    obj[1] = function onPress() {
      let obj = closure_1_1(closure_1_2[15]);
      obj.hideActionSheet();
      const obj2 = closure_1_1(closure_1_2[16]);
      obj = { onClose: null, createReminder: null };
      const tmp2 = closure_1_0(closure_1_2[18])(closure_1_2[17], closure_1_2.paths);
      obj[0] = closure_1_1(closure_1_2[16]).pop();
      obj[1] = closure_0;
      obj2.pushLazy(tmp2, obj, "create-reminder-custom", { presentation: "modal" });
    };
    mapped.push(dueInText(createReminder(closure_1_2[14]).TableRow, obj, "create-reminder-custom"));
    return mapped;
  }, items2);
  obj = { header: memo, bodyStyles: tmp.body, startExpanded: true, children: null };
  const items3 = [dueInText(createReminder(5944).TableRowGroup, { hasIcons: false, children: memo1 }), ];
  let tmp14Result = null != removeReminder;
  if (tmp14Result) {
    obj1 = { icon: null, label: null, onPress: null, start: true, end: true };
    obj1[0] = tmp14(tmp2(4396).CheckmarkLargeIcon, {});
    let intl = tmp2(1236).intl;
    obj1[1] = intl.string(tmp2(1236).t.yjGtdJ);
    obj1[2] = function onPress() {
      removeReminder(closure_1_2[15]).hideActionSheet();
      removeReminder();
    };
    tmp14Result = tmp14(tmp2(5551).TableRow, obj1, "remove-reminder");
  }
  items3[1] = tmp14Result;
  obj[3] = items3;
  return isOverdue(createReminder(5574).BottomSheet, obj);
};