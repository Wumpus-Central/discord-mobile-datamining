// === Module 11861: MessageReminderDurationActionSheet ===

// Module 11861 (MessageReminderDurationActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import Pressables from "Pressables" /* 5210 */;
import TableRow from "TableRow" /* 5693 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5716 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7263 */;
import MessageRemindersTypes from "MessageRemindersTypes" /* 11863 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11810 */;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { body: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx");

export default function MessageReminderDurationActionSheet(createReminder) {
  createReminder = createReminder.createReminder;
  const removeReminder = createReminder.removeReminder;
  ({ channelId: dependencyMap, messageId: _slicedToArray, onBack } = createReminder);
  c5 = undefined;
  let dueInText;
  let isOverdue;
  const tmp = closure_8();
  const items = [c5];
  const stateFromStores = createReminder(504).useStateFromStores(items, () => SavedMessagesStore.getSavedMessage(paths, _slicedToArray));
  let obj = createReminder(504);
  const date = new Date();
  [tmp7, c5] = onBack.useState(new Date());
  const effect = onBack.useEffect(() => {
    const interval = setInterval(() => closure_1_5(new Date()), removeReminder(paths[7]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  const tmp6 = _slicedToArray(onBack.useState(new Date()), 2);
  let dueAt;
  if (stateFromStores != null) {
    dueAt = stateFromStores.saveData.dueAt;
  }
  let obj3 = createReminder(11862);
  const dueInString = obj3.useDueInString({ dueAt, now: tmp7, type: createReminder(11862).DueInStringTypes.SHORT });
  dueInText = dueInString.dueInText;
  isOverdue = dueInString.isOverdue;
  const items1 = [onBack, dueInText, isOverdue];
  const items2 = [createReminder];
  const memo = onBack.useMemo(() => {
    const intl = util.intl;
    const t = util.t;
    const obj = { title: intl.string(isOverdue ? t.GtBCnz : t.roMu1H), subtitle: dueInText, leading: null };
    let tmpResult = null != onBack;
    if (tmpResult) {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(util.t["13/7kX"]);
      obj2.onPress = tmp4;
      obj2.children = timestampProducer(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
      tmpResult = timestampProducer(Pressables.PressableOpacity, obj2);
    }
    obj.leading = tmpResult;
    return timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  }, items1);
  const memo1 = onBack.useMemo(() => {
    const prop = MessageRemindersTypes.MESSAGE_REMINDER_DURATION_ITEMS;
    const mapped = prop.map((item) => {
      ({ getDueAt: closure_0, getLabel } = item);
      return dueInText(createReminder(paths[14]).TableRow, {
        label: getLabel(),
        onPress() {
          createReminder(closure_1_0());
          removeReminder(paths[15]).hideActionSheet();
        }
      }, "create-reminder-" + getLabel());
    });
    let obj = { label: null, onPress: null, arrow: true };
    let intl = util.intl;
    obj.label = intl.string(util.t.OLA8Zi);
    obj.onPress = function onPress() {
      removeReminder(paths[15]).hideActionSheet();
      const obj = removeReminder(paths[15]);
      const obj2 = removeReminder(paths[16]);
      const obj3 = { onClose: null, createReminder: null, title: null, defaultValue: null, minimumDate: null };
      const tmp2 = createReminder(paths[18])(paths[17], paths.paths);
      obj3.onClose = removeReminder(paths[16]).pop();
      obj3.createReminder = createReminder;
      const intl = createReminder(paths[10]).intl;
      obj3.title = intl.string(createReminder(paths[10]).t.VKsXpY);
      obj3.defaultValue = removeReminder(paths[19])();
      obj3.minimumDate = removeReminder(paths[19])();
      obj2.pushLazy(tmp2, obj3, "create-reminder-custom", { presentation: "modal" });
    };
    mapped.push(timestampProducer(TableRow.TableRow, obj, "create-reminder-custom"));
    return mapped;
  }, items2);
  const obj5 = { header: memo, bodyStyles: tmp.body, startExpanded: true, children: null };
  const items3 = [dueInText(createReminder(5775).TableRowGroup, { hasIcons: false, children: memo1 }), ];
  let tmp14Result = null != removeReminder;
  if (tmp14Result) {
    const obj6 = { icon: tmp14(tmp2(4590).CheckmarkLargeIcon, {}), label: null, onPress: null, start: true, end: true };
    let intl = tmp2(1115).intl;
    obj6.label = intl.string(tmp2(1115).t.yjGtdJ);
    obj6.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      removeReminder();
    };
    tmp14Result = tmp14(tmp2(5693).TableRow, obj6, "remove-reminder");
  }
  items3[1] = tmp14Result;
  obj5.children = items3;
  return isOverdue(createReminder(7264).BottomSheet, obj5);
};