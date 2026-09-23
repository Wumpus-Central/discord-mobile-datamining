// discord_app/modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
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
const createStyles = fn(4827);
let obj = {
  modal: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  headerLeftContainer: null,
  headerRightContainer: null,
  container: null,
  formHeader: null,
  inputContainer: null,
  error: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
const obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
obj.container = { paddingHorizontal: 16, paddingTop: 24, gap: 24 };
obj.formHeader = { marginBottom: 8 };
let obj5 = { paddingRight: nativeDefault.space.PX_16 };
obj.inputContainer = {
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
};
obj.error = { marginTop: 8 };
let closure_9 = createStyles.createStyles(obj);
let obj6 = {
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
  first = undefined;
  onSubmit = undefined;
  let onPress;
  function handleOpenDatePicker(date) {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    const t = util.t;
    const obj3 = {
      title: intl.string("date" === date ? t.pSZKvM : t.GOmEb8),
      startDate: first.toDate(),
      minimumDate: null,
      maximumDate: null,
      mode: null,
      onSubmit: null,
    };
    if ("date" === date) {
      let startOfResult = closure_1_3.clone().startOf("day");
      const cloneResult = closure_1_3.clone();
    } else {
      startOfResult = closure_1_3;
    }
    obj3.minimumDate = startOfResult.toDate();
    let toDateResult;
    if (null != _slicedToArray) {
      let endOfResult = _slicedToArray;
      if (tmp2) {
        endOfResult = _slicedToArray.clone().endOf("day");
        const cloneResult1 = _slicedToArray.clone();
      }
      toDateResult = endOfResult.toDate();
    }
    obj3.maximumDate = toDateResult;
    obj3.mode = date;
    obj3.onSubmit = onSubmit;
    obj2.openLazy(asyncRequireImpl(9881, dependencyMap.paths), "DatePicker", obj3);
    const tmp3 = asyncRequireImpl(9881, dependencyMap.paths);
  }
  const tmp = onPress();
  [first, onSubmit] = first.useState(onClose.defaultValue);
  let error;
  if (getError != null) {
    error = getError(first);
  }
  if (error == null) {
    error = null;
  }
  const items = [createReminder, first, onClose];
  onPress = first.useCallback(() => {
    createReminder(first.toDate());
    onClose();
  }, items);
  const formatResult = first.format("MMM Do YYYY");
  const formatResult1 = first.format("LT");
  let obj2 = { style: tmp.modal, children: null };
  let obj3 = {
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
  let num = 0;
  if (!obj5.isIOS()) {
    num = createReminder(1612)().top;
  }
  obj3.headerStatusBarHeight = num + createReminder(576).space.PX_8;
  obj5 = onClose(1364);
  obj3.headerLeft = onClose(5927).getHeaderCloseButton(onClose);
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  obj3.headerRight = function headerRight() {
    const obj = { accessibilityRole: "button", disabled: null != error, onPress, children: null };
    let str = "control-brand-foreground";
    if (null != error) {
      str = "text-muted";
    }
    const obj2 = { variant: "text-md/semibold", color: str, children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["R3BPH+"]);
    obj.children = React5(Text_Text.Text, obj2);
    return React5(Pressables.PressableOpacity, obj);
  };
  const items1 = [error(onClose(5934).Header, obj3)];
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { children: null };
  const obj8 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl = tmp11(1115).intl;
  obj8.children = intl.string(onClose(1115).t.pSZKvM);
  const items2 = [error(onClose(4823).Text, obj8)];
  const obj9 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityValue: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl2 = tmp11(1115).intl;
  obj9.accessibilityLabel = intl2.string(onClose(1115).t.pSZKvM);
  obj9.accessibilityValue = { text: formatResult };
  obj9.onPress = function onPress() {
    handleOpenDatePicker("date");
  };
  obj9.style = tmp.inputContainer;
  obj9.children = error(onClose(4823).Text, { variant: "text-md/medium", children: formatResult });
  items2[1] = error(onClose(5425).PressableOpacity, obj9);
  obj7.children = items2;
  const items3 = [handleOpenDatePicker(onSubmit, obj7)];
  const obj10 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  const intl3 = tmp11(1115).intl;
  obj10.children = intl3.string(onClose(1115).t.GOmEb8);
  const items4 = [error(onClose(4823).Text, obj10), ,];
  const obj11 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityValue: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl4 = tmp11(1115).intl;
  obj11.accessibilityLabel = intl4.string(onClose(1115).t.GOmEb8);
  obj11.accessibilityValue = { text: formatResult1 };
  obj11.onPress = function onPress() {
    handleOpenDatePicker("time");
  };
  obj11.style = tmp.inputContainer;
  obj11.children = error(onClose(4823).Text, { variant: "text-md/medium", children: formatResult1 });
  items4[1] = error(onClose(5425).PressableOpacity, obj11);
  let tmp10Result = null != error;
  if (tmp10Result) {
    const obj12 = {
      style: tmp.error,
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: error,
    };
    tmp10Result = tmp10(tmp11(4823).Text, obj12);
  }
  items4[2] = tmp10Result;
  items3[1] = handleOpenDatePicker(onSubmit, { children: items4 });
  obj6.children = items3;
  items1[1] = handleOpenDatePicker(onSubmit, obj6);
  obj2.children = items1;
  return handleOpenDatePicker(onSubmit, obj2);
});
