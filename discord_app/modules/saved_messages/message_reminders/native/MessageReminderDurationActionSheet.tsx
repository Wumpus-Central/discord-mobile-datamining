// === Module 11710: MessageReminderDurationActionSheet ===

// Module 11710 (MessageReminderDurationActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Pressables from "Pressables" /* 5123 */;
import TableRow from "TableRow" /* 5605 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5628 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import MessageRemindersTypes from "MessageRemindersTypes" /* 11712 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11660 */;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { body: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles.body = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx");

export default function MessageReminderDurationActionSheet(createReminder) {
  createReminder = createReminder.createReminder;
  const removeReminder = createReminder.removeReminder;
  ({ channelId: dependencyMap, messageId: _slicedToArray, onBack } = createReminder);
  c5 = undefined;
  let dueInText;
  let isOverdue;
  let obj = createReminder(504);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => SavedMessagesStore.getSavedMessage(paths, _slicedToArray));
  let obj1 = onBack;
  const tmp = closure_8();
  const date = new Date();
  [tmp7, c5] = _slicedToArray(onBack.useState(new Date()), 2);
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
  obj = { dueAt, now: tmp7, type: tmp2(11711).DueInStringTypes.SHORT };
  const dueInString = createReminder(11711).useDueInString(obj);
  dueInText = dueInString.dueInText;
  isOverdue = dueInString.isOverdue;
  const items1 = [onBack, dueInText, isOverdue];
  const items2 = [createReminder];
  const memo = obj1.useMemo(() => {
    const intl = util.intl;
    const t = util.t;
    let obj = { title: intl.string(isOverdue ? t.GtBCnz : t.roMu1H), subtitle: dueInText, leading: null };
    let tmpResult = null != onBack;
    if (tmpResult) {
      obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl2 = util.intl;
      obj.accessibilityLabel = intl2.string(util.t["13/7kX"]);
      obj.onPress = tmp4;
      obj.children = timestampProducer(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
      tmpResult = timestampProducer(Pressables.PressableOpacity, obj);
    }
    obj.leading = tmpResult;
    return timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  }, items1);
  const memo1 = obj1.useMemo(() => {
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
      let obj = removeReminder(paths[15]);
      obj.hideActionSheet();
      const obj2 = removeReminder(paths[16]);
      obj = { onClose: null, createReminder: null, title: null, defaultValue: null, minimumDate: null };
      const tmp2 = createReminder(paths[18])(paths[17], paths.paths);
      obj.onClose = removeReminder(paths[16]).pop();
      obj.createReminder = createReminder;
      const intl = createReminder(paths[10]).intl;
      obj.title = intl.string(createReminder(paths[10]).t.VKsXpY);
      obj.defaultValue = removeReminder(paths[19])();
      obj.minimumDate = removeReminder(paths[19])();
      obj2.pushLazy(tmp2, obj, "create-reminder-custom", { presentation: "modal" });
    };
    mapped.push(timestampProducer(TableRow.TableRow, obj, "create-reminder-custom"));
    return mapped;
  }, items2);
  obj = { header: memo, bodyStyles: tmp.body, startExpanded: true, children: null };
  const items3 = [dueInText(createReminder(5687).TableRowGroup, { hasIcons: false, children: memo1 }), ];
  let tmp14Result = null != removeReminder;
  if (tmp14Result) {
    obj1 = { icon: tmp14(tmp2(4511).CheckmarkLargeIcon, {}), label: null, onPress: null, start: true, end: true };
    let intl = tmp2(1114).intl;
    obj1.label = intl.string(tmp2(1114).t.yjGtdJ);
    obj1.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      removeReminder();
    };
    tmp14Result = tmp14(tmp2(5605).TableRow, obj1, "remove-reminder");
  }
  items3[1] = tmp14Result;
  obj.children = items3;
  return isOverdue(createReminder(7150).BottomSheet, obj);
};