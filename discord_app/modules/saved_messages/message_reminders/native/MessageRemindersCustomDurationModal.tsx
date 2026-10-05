// === Module 11343: MessageRemindersCustomDurationModal ===

// Module 11343 (MessageRemindersCustomDurationModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let onClose;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { modal: obj2, headerLeftContainer: obj3, headerRightContainer: obj4, container: { paddingHorizontal: 16, paddingTop: 24, gap: 24 }, formHeader: { marginBottom: 8 }, inputContainer: obj5, error: { marginTop: 8 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: 16, paddingVertical: 12, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
let closure_9 = createStyles(obj);
const memoResult = react.memo((onClose) => {
  let first;
  let getError;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let num;
  let onSubmit;
  let tmp11Result;
  onClose = onClose.onClose;
  const createReminder = onClose.createReminder;
  const title = onClose.title;
  ({ minimumDate: dependencyMap, maximumDate: _slicedToArray, getError } = onClose);
  first = undefined;
  onSubmit = undefined;
  let onPress;
  function handleOpenDatePicker(date) {
    let startOfResult;
    let toDateResult;
    const obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const tmp4 = asyncRequire(9194, dependencyMap.paths);
    const intl = intl5.intl;
    const string = intl.string;
    const t = intl5.t;
    const obj2 = { title: string("date" === date ? t.pSZKvM : t.GOmEb8), startDate: first.toDate(), minimumDate: startOfResult.toDate(), maximumDate: toDateResult, mode: date, onSubmit };
    if ("date" === date) {
      const cloneResult = dependencyMap.clone();
      startOfResult = cloneResult.startOf("day");
    } else {
      startOfResult = dependencyMap;
    }
    toDateResult = undefined;
    if (null != _slicedToArray) {
      let endOfResult = _slicedToArray;
      if ("date" === date) {
        const cloneResult1 = _slicedToArray.clone();
        endOfResult = cloneResult1.endOf("day");
      }
      toDateResult = endOfResult.toDate();
    }
    openLazy(tmp4, "DatePicker", obj2);
  }
  const defaultValue = onClose.defaultValue;
  const tmp = onPress();
  let obj = first;
  const top = createReminder(1618)().top;
  [first, onSubmit] = first.useState(defaultValue);
  let error;
  const tmp2 = createReminder;
  if (getError != null) {
    error = getError(first);
  }
  if (error == null) {
    error = null;
  }
  const items = [createReminder, first, onClose];
  onPress = obj.useCallback(() => {
    createReminder(first.toDate());
    onClose();
  }, items);
  const formatResult = first.format("MMM Do YYYY");
  const formatResult1 = first.format("LT");
  let obj2 = { style: tmp.modal, children: items1 };
  const obj3 = {
    title,
    headerTitle() {
      const obj = { title };
      return metroImportDefault(HeaderShared.GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: num + tmp2(587).space.PX_8,
    headerLeft: tmp11Result.getHeaderCloseButton(onClose),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerRight() {
      let Text;
      let intl;
      let obj2;
      const obj = { accessibilityRole: "button", disabled: null != error, onPress, children: metroImportDefault(Text, obj2) };
      const PressableOpacity = Pressables.PressableOpacity;
      let str = "control-brand-foreground";
      Text = Text_Text.Text;
      if (null != error) {
        str = "text-muted";
      }
      obj2 = { variant: "text-md/semibold", color: str, children: intl.string(intl5.t["R3BPH+"]) };
      intl = intl5.intl;
      return metroImportDefault(PressableOpacity, obj);
    }
  };
  const Header = onClose(6019).Header;
  num = 0;
  const obj5 = onClose(1369);
  if (!obj5.isIOS()) {
    num = top;
  }
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  tmp11Result = onClose(6010);
  items1 = [error(Header, obj3), ];
  const obj6 = { style: tmp.container, children: items3 };
  const obj7 = { children: items2 };
  const obj8 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: intl.string(onClose(1126).t.pSZKvM) };
  let Text = tmp11(4886).Text;
  intl = tmp11(1126).intl;
  items2 = [error(Text, obj8), ];
  const obj9 = {
    accessibilityRole: "button",
    accessibilityLabel: intl2.string(onClose(1126).t.pSZKvM),
    accessibilityValue: { text: formatResult },
    onPress() {
      handleOpenDatePicker("date");
    },
    style: tmp.inputContainer,
    children: error(onClose(4886).Text, { variant: "text-md/medium", children: formatResult })
  };
  let PressableOpacity = tmp11(5909).PressableOpacity;
  intl2 = tmp11(1126).intl;
  items2[1] = error(PressableOpacity, obj9);
  items3 = [handleOpenDatePicker(onSubmit, obj7), ];
  const obj10 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: intl3.string(onClose(1126).t.GOmEb8) };
  const Text2 = tmp11(4886).Text;
  intl3 = tmp11(1126).intl;
  const items4 = [error(Text2, obj10), , ];
  const obj11 = {
    accessibilityRole: "button",
    accessibilityLabel: intl4.string(onClose(1126).t.GOmEb8),
    accessibilityValue: { text: formatResult1 },
    onPress() {
      handleOpenDatePicker("time");
    },
    style: tmp.inputContainer,
    children: error(onClose(4886).Text, { variant: "text-md/medium", children: formatResult1 })
  };
  const PressableOpacity2 = tmp11(5909).PressableOpacity;
  intl4 = tmp11(1126).intl;
  items4[1] = error(PressableOpacity2, obj11);
  let tmp10Result = null != error;
  if (tmp10Result) {
    const obj12 = { style: tmp.error, variant: "text-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp10Result = tmp10(tmp11(4886).Text, obj12);
  }
  items4[2] = tmp10Result;
  items3[1] = handleOpenDatePicker(onSubmit, { children: items4 });
  items1[1] = handleOpenDatePicker(onSubmit, obj6);
  return handleOpenDatePicker(onSubmit, obj2);
});
let result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx");

export default memoResult;