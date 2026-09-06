// discord_app/modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = {
  modal: null,
  headerLeftContainer: null,
  headerRightContainer: null,
  container: null,
  formHeader: null,
  inputContainer: null,
  error: null,
};
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.modal = obj;
const createStyles = { paddingLeft: nativeDefault.space.PX_16 };
obj.headerLeftContainer = createStyles;
obj.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
obj.container = { paddingHorizontal: 16, paddingTop: 24, gap: 24 };
obj.formHeader = { marginBottom: 8 };
let obj2 = { paddingRight: nativeDefault.space.PX_16 };
obj.inputContainer = {
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
};
obj.error = { marginTop: 8 };
let closure_9 = createStyles.createStyles(obj);
let obj3 = {
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx",
);

export default noop.memo((onClose) => {
  onClose = onClose.onClose;
  const createReminder = onClose.createReminder;
  const title = onClose.title;
  ({ minimumDate: dependencyMap, maximumDate: _slicedToArray, getError } = onClose);
  let first;
  let onPress;
  function handleOpenDatePicker(date) {
    let obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    const t = util.t;
    obj = {
      title: intl.string(tmp2 ? t.pSZKvM : t.GOmEb8),
      startDate: first.toDate(),
      minimumDate: null,
      maximumDate: null,
      mode: null,
      onSubmit: null,
    };
    if ("date" === date) {
      let startOfResult = obj4.clone().startOf("day");
      const cloneResult = obj4.clone();
    } else {
      startOfResult = obj4;
    }
    obj.minimumDate = startOfResult.toDate();
    let toDateResult;
    if (null != _slicedToArray) {
      let endOfResult = obj7;
      if (tmp2) {
        endOfResult = obj7.clone().endOf("day");
        const cloneResult1 = obj7.clone();
      }
      toDateResult = endOfResult.toDate();
    }
    obj.maximumDate = toDateResult;
    obj.mode = date;
    obj.onSubmit = onSubmit;
    obj2.openLazy(asyncRequireImpl(9717, dependencyMap.paths), "DatePicker", obj);
  }
  const tmp = onPress();
  let obj = first;
  const tmp4 = _slicedToArray(first.useState(onClose.defaultValue), 2);
  first = tmp4[0];
  const onSubmit = tmp4[1];
  let error;
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
  obj = { style: tmp.modal, children: null };
  obj = {
    title,
    headerTitle() {
      return React5(HeaderShared.GenericHeaderTitle, { title });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerRight: null,
  };
  let obj4 = onClose(1115);
  let num = 0;
  if (!obj4.isIOS()) {
    num = createReminder(1611)().top;
  }
  obj.headerStatusBarHeight = num + createReminder(576).space.PX_8;
  obj.headerLeft = onClose(5624).getHeaderCloseButton(onClose);
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  obj.headerRight = function headerRight() {
    let obj = { accessibilityRole: "button", disabled: null != error, onPress, children: null };
    let str = "control-brand-foreground";
    if (null != error) {
      str = "text-muted";
    }
    obj = { variant: "text-md/semibold", color: str, children: null };
    const intl = tmp2(1114).intl;
    obj.children = intl.string(util.t["R3BPH+"]);
    obj.children = React5(Text_Text.Text, obj);
    return React5(Pressables.PressableOpacity, obj);
  };
  const items1 = [error(onClose(5631).Header, obj)];
  const obj1 = { style: tmp.container, children: null };
  let obj2 = { children: null };
  const obj3 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl = tmp11(1114).intl;
  obj3.children = intl.string(onClose(1114).t.pSZKvM);
  const items2 = [error(onClose(4556).Text, obj3)];
  obj4 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityValue: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl2 = tmp11(1114).intl;
  obj4.accessibilityLabel = intl2.string(onClose(1114).t.pSZKvM);
  obj4.accessibilityValue = { text: formatResult };
  obj4.onPress = function onPress() {
    handleOpenDatePicker("date");
  };
  obj4.style = tmp.inputContainer;
  obj4.children = error(onClose(4556).Text, { variant: "text-md/medium", children: formatResult });
  items2[1] = error(onClose(5123).PressableOpacity, obj4);
  obj2.children = items2;
  const items3 = [handleOpenDatePicker(onSubmit, obj2)];
  const obj5 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  const intl3 = tmp11(1114).intl;
  obj5.children = intl3.string(onClose(1114).t.GOmEb8);
  const items4 = [error(onClose(4556).Text, obj5), ,];
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityValue: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl4 = tmp11(1114).intl;
  obj6.accessibilityLabel = intl4.string(onClose(1114).t.GOmEb8);
  obj6.accessibilityValue = { text: formatResult1 };
  obj6.onPress = function onPress() {
    handleOpenDatePicker("time");
  };
  obj6.style = tmp.inputContainer;
  obj6.children = error(onClose(4556).Text, { variant: "text-md/medium", children: formatResult1 });
  items4[1] = error(onClose(5123).PressableOpacity, obj6);
  let tmp10Result = null != error;
  if (tmp10Result) {
    const obj7 = {
      style: tmp.error,
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: error,
    };
    tmp10Result = tmp10(tmp11(4556).Text, obj7);
  }
  items4[2] = tmp10Result;
  items3[1] = handleOpenDatePicker(onSubmit, { children: items4 });
  obj1.children = items3;
  items1[1] = handleOpenDatePicker(onSubmit, obj1);
  obj.children = items1;
  return handleOpenDatePicker(onSubmit, obj);
});
