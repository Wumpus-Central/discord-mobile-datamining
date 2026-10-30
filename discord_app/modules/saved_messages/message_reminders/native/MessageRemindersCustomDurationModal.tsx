// discord_app/modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01995_asyncRequireImpl.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  modal: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  headerLeftContainer: null,
  headerRightContainer: null,
  container: null,
  error: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
const obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
obj.container = { paddingHorizontal: 16, paddingTop: 24, gap: 24 };
obj.error = { marginTop: 8 };
let closure_9 = createStyles.createStyles(obj);
let obj5 = { paddingRight: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx",
);

export default noop.memo(function MessageRemindersCustomDurationScreen(onClose) {
  onClose = onClose.onClose;
  const createReminder = onClose.createReminder;
  const title = onClose.title;
  ({ minimumDate: dependencyMap, maximumDate: _slicedToArray, getError } = onClose);
  first = undefined;
  closure_7 = undefined;
  let onPress;
  function handleSubmitDueDate(arg0) {
    closure_7(arg0);
    let tmp2;
    if (getError != null) {
      tmp2 = getError(arg0);
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    if (null != tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp2);
    }
  }
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
    obj3.onSubmit = handleSubmitDueDate;
    obj2.openLazy(asyncRequireImpl(9000, dependencyMap.paths), "DatePicker", obj3);
    const tmp3 = asyncRequireImpl(9000, dependencyMap.paths);
  }
  const tmp = handleSubmitDueDate();
  [first, closure_7] = getError.useState(onClose.defaultValue);
  let error;
  if (getError != null) {
    error = getError(first);
  }
  if (error == null) {
    error = null;
  }
  const items = [createReminder, first, onClose];
  onPress = getError.useCallback(() => {
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
    num = createReminder(1626)().top;
  }
  obj3.headerStatusBarHeight = num + createReminder(575).space.PX_8;
  obj5 = onClose(1376);
  obj3.headerLeft = onClose(6992).getHeaderCloseButton(onClose);
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  obj3.headerRight = function headerRight() {
    const obj = { text: null, onPress: null, disabled: null };
    const intl = util.intl;
    obj.text = intl.string(util.t["R3BPH+"]);
    obj.onPress = onPress;
    obj.disabled = null != error;
    return React5(HeaderActionButton.HeaderActionButton, obj);
  };
  const items1 = [closure_7(onClose(6999).Header, obj3)];
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { title: null, hasIcons: false, children: null };
  let intl = tmp11(1114).intl;
  obj7.title = intl.string(onClose(1114).t.pSZKvM);
  const obj8 = { label: formatResult, accessibilityLabel: null, accessibilityValue: null, onPress: null };
  const intl2 = tmp11(1114).intl;
  obj8.accessibilityLabel = intl2.string(onClose(1114).t.pSZKvM);
  obj8.accessibilityValue = { text: formatResult };
  obj8.onPress = function onPress() {
    handleOpenDatePicker("date");
  };
  obj7.children = closure_7(onClose(6969).TableRow, obj8);
  const items2 = [closure_7(onClose(7054).TableRowGroup, obj7)];
  const obj9 = { title: null, hasIcons: false, children: null };
  const intl3 = tmp11(1114).intl;
  obj9.title = intl3.string(onClose(1114).t.GOmEb8);
  const obj10 = { label: formatResult1, accessibilityLabel: null, accessibilityValue: null, onPress: null };
  const intl4 = tmp11(1114).intl;
  obj10.accessibilityLabel = intl4.string(onClose(1114).t.GOmEb8);
  obj10.accessibilityValue = { text: formatResult1 };
  obj10.onPress = function onPress() {
    handleOpenDatePicker("time");
  };
  obj9.children = closure_7(onClose(6969).TableRow, obj10);
  const items3 = [closure_7(onClose(7054).TableRowGroup, obj9)];
  let tmp10Result = null != error;
  if (tmp10Result) {
    const obj11 = {
      style: tmp.error,
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: error,
    };
    tmp10Result = tmp10(tmp11(5619).Text, obj11);
  }
  items3[1] = tmp10Result;
  items2[1] = error(first, { children: items3 });
  obj6.children = items2;
  items1[1] = error(first, obj6);
  obj2.children = items1;
  return error(first, obj2);
});
