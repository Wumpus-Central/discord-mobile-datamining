// discord_app/modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import BottomSheetTitleHeader2 from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import MessageRemindersTypes from "../MessageRemindersTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import SavedMessagesStore from "../../SavedMessagesStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { body: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx",
);

export default function MessageReminderDurationActionSheet(createReminder) {
  let c5;
  let intl;
  let items3;
  let onBack;
  let paths;
  let tmp7;
  createReminder = createReminder.createReminder;
  const removeReminder = createReminder.removeReminder;
  ({ channelId: dependencyMap, messageId: _slicedToArray, onBack } = createReminder);
  c5 = undefined;
  let dueInText;
  let isOverdue;
  const tmp2 = createReminder;
  const tmp = closure_8();
  let obj = createReminder(504);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () =>
    SavedMessagesStore.getSavedMessage(dependencyMap, _slicedToArray),
  );
  const useState = onBack.useState;
  let date = new Date();
  [tmp7, c5] = useState(date);
  _slicedToArray(useState(date), 2);
  const effect = onBack.useEffect(() => {
    let closure_0;
    const interval = setInterval(() => {
      const date = new Date();
      return closure_1_5(date);
    }, removeReminder(dependencyMap[7]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  let dueAt;
  const useDueInString = createReminder(11354).useDueInString;
  createReminder(11354);
  if (stateFromStores != null) {
    dueAt = stateFromStores.saveData.dueAt;
  }
  const obj3 = { dueAt, now: tmp7, type: tmp2(11354).DueInStringTypes.SHORT };
  const dueInString = useDueInString(obj3);
  dueInText = dueInString.dueInText;
  isOverdue = dueInString.isOverdue;
  const items1 = [onBack, dueInText, isOverdue];
  const items2 = [createReminder];
  const memo = onBack.useMemo(() => {
    let intl2;
    let tmpResult;
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    const intl = intl3.intl;
    const string = intl.string;
    const t = intl3.t;
    const obj = { title: string(isOverdue ? t.GtBCnz : t.roMu1H), subtitle: dueInText, leading: tmpResult };
    tmpResult = null != onBack;
    if (tmpResult) {
      const obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: intl2.string(intl3.t["13/7kX"]),
        onPress: tmp4,
        children: metroRequire(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" }),
      };
      const PressableOpacity = Pressables.PressableOpacity;
      intl2 = intl3.intl;
      tmpResult = metroRequire(PressableOpacity, obj2);
    }
    return metroRequire(BottomSheetTitleHeader, obj);
  }, items1);
  const memo1 = onBack.useMemo(() => {
    let intl;
    const prop = MessageRemindersTypes.MESSAGE_REMINDER_DURATION_ITEMS;
    const mapped = prop.map((item) => {
      let closure_0;
      let getLabel;
      ({ getDueAt: closure_0, getLabel } = item);
      let obj = {
        label: getLabel(),
        onPress() {
          createReminder(closure_0());
          const obj = removeReminder(dependencyMap[15]);
          obj.hideActionSheet();
        },
      };
      const TableRow = createReminder(paths[14]).TableRow;
      return dueInText(TableRow, obj, "create-reminder-" + getLabel());
    });
    const push = mapped.push;
    let obj = {
      label: intl.string(intl3.t.OLA8Zi),
      onPress() {
        let arr;
        let intl;
        const obj = removeReminder(dependencyMap[15]);
        obj.hideActionSheet();
        const pushLazy = removeReminder(dependencyMap[16]).pushLazy;
        removeReminder(dependencyMap[16]);
        const obj2 = {
          onClose: arr.pop(),
          createReminder,
          title: intl.string(createReminder(dependencyMap[10]).t.VKsXpY),
          defaultValue: removeReminder(dependencyMap[19])(),
          minimumDate: removeReminder(dependencyMap[19])(),
        };
        const tmp3 = createReminder(dependencyMap[18])(dependencyMap[17], dependencyMap.paths);
        arr = removeReminder(dependencyMap[16]);
        intl = createReminder(dependencyMap[10]).intl;
        pushLazy(tmp3, obj2, "create-reminder-custom", { presentation: "modal" });
      },
      arrow: true,
    };
    let TableRow = TableRow2.TableRow;
    intl = intl3.intl;
    let arr = push(metroRequire(TableRow, obj, "create-reminder-custom"));
    return mapped;
  }, items2);
  const obj4 = { header: memo, bodyStyles: tmp.body, startExpanded: true, children: items3 };
  BottomSheet = tmp2(6652).BottomSheet;
  items3 = [dueInText(tmp2(6081).TableRowGroup, { hasIcons: false, children: memo1 })];
  let tmp15Result = null != removeReminder;
  const tmp14 = isOverdue;
  if (tmp15Result) {
    const obj5 = {
      icon: dueInText(tmp2(4583).CheckmarkLargeIcon, {}),
      label: intl.string(tmp2(1126).t.yjGtdJ),
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        removeReminder();
      },
      start: true,
      end: true,
    };
    let TableRow = tmp2(6000).TableRow;
    intl = tmp2(1126).intl;
    tmp15Result = tmp15(TableRow, obj5, "remove-reminder");
  }
  items3[1] = tmp15Result;
  return tmp14(BottomSheet, obj4);
}
