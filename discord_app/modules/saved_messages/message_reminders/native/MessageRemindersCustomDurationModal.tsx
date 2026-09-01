// discord_app/modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c5 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = {
  modal: null,
  headerLeftContainer: null,
  headerRightContainer: null,
  container: null,
  formHeader: null,
  inputContainer: null,
  error: null,
};
obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
createCacheKey = { paddingLeft: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { paddingRight: ThemesDefault.space.PX_16 };
obj[3] = { paddingHorizontal: 16, paddingTop: 24, gap: 24 };
obj[4] = { marginBottom: 8 };
let obj2 = { paddingRight: ThemesDefault.space.PX_16 };
obj[5] = {
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: ThemesDefault.radii.lg,
  backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT,
};
obj[6] = { marginTop: 8 };
let closure_9 = createCacheKey.createStyles(obj);
let obj3 = {
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: ThemesDefault.radii.lg,
  backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT,
};
const memoResult = importAllResult.memo((onClose) => {
  onClose = onClose.onClose;
  const createReminder = onClose.createReminder;
  const title = onClose.title;
  ({ minimumDate: dependencyMap, maximumDate: closure_4, getError } = onClose);
  let first;
  closure_6 = undefined;
  error = undefined;
  let callback2;
  function handleOpenDatePicker(date) {
    let obj = title(closure_1_3[7]);
    const result = obj.dismissGlobalKeyboard();
    const obj2 = createReminder(closure_1_3[8]);
    const intl = onClose(closure_1_3[11]).intl;
    const t = onClose(closure_1_3[11]).t;
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
    obj[2] = startOfResult.toDate();
    let toDateResult;
    if (null != closure_4) {
      let endOfResult = obj7;
      if (tmp2) {
        endOfResult = obj7.clone().endOf("day");
        const cloneResult1 = obj7.clone();
      }
      toDateResult = endOfResult.toDate();
    }
    obj[3] = toDateResult;
    obj[4] = date;
    obj[5] = closure_6;
    obj2.openLazy(onClose(closure_1_3[10])(closure_1_3[9], closure_1_3.paths), "DatePicker", obj);
  }
  const tmp = callback2();
  let obj = first;
  const tmp4 = callback(first.useState(onClose.defaultValue), 2);
  first = tmp4[0];
  closure_6 = tmp4[1];
  error = undefined;
  if (getError != null) {
    error = getError(first);
  }
  if (error == null) {
    error = null;
  }
  const items = [createReminder, first, onClose];
  callback2 = obj.useCallback(() => {
    createReminder(first.toDate());
    onClose();
  }, items);
  const formatResult = first.format("MMM Do YYYY");
  const formatResult1 = first.format("LT");
  obj = { style: tmp.modal, children: null };
  obj = {
    title,
    headerTitle() {
      return error(onClose(closure_1_3[13]).GenericHeaderTitle, { title });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerRight: null,
  };
  let obj4 = onClose(500);
  let num = 0;
  if (!obj4.isIOS()) {
    num = createReminder(1628)().top;
  }
  obj[3] = num + createReminder(712).space.PX_8;
  obj[4] = onClose(5495).getHeaderCloseButton(onClose);
  ({ headerLeftContainer: obj4[5], headerRightContainer: obj4[6] } = tmp);
  obj[7] = function headerRight() {
    let obj = { accessibilityRole: "button", disabled: null != error, onPress: closure_9, children: null };
    let str = "control-brand-foreground";
    if (null != error) {
      str = "text-muted";
    }
    obj = { variant: "text-md/semibold", color: str, children: null };
    const intl = tmp2(tmp3[11]).intl;
    obj[2] = intl.string(onClose(closure_1_3[11]).t["R3BPH+"]);
    obj[3] = error(onClose(closure_1_3[17]).Text, obj);
    return error(onClose(closure_1_3[16]).PressableOpacity, obj);
  };
  const items1 = [error(onClose(5502).Header, obj)];
  obj1 = { style: tmp.container, children: null };
  let obj2 = { children: null };
  const obj3 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl = tmp11(1236).intl;
  obj3[3] = intl.string(onClose(1236).t.pSZKvM);
  const items2 = [error(onClose(4474).Text, obj3)];
  obj4 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityValue: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl2 = tmp11(1236).intl;
  obj4[1] = intl2.string(onClose(1236).t.pSZKvM);
  obj4[2] = { text: formatResult };
  obj4[3] = function onPress() {
    handleOpenDatePicker("date");
  };
  obj4[4] = tmp.inputContainer;
  obj4[5] = error(onClose(4474).Text, { variant: "text-md/medium", children: formatResult });
  items2[1] = error(onClose(5068).PressableOpacity, obj4);
  obj2[0] = items2;
  const items3 = [handleOpenDatePicker(closure_6, obj2)];
  const obj5 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  const intl3 = tmp11(1236).intl;
  obj5[3] = intl3.string(onClose(1236).t.GOmEb8);
  const items4 = [error(onClose(4474).Text, obj5), ,];
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityValue: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl4 = tmp11(1236).intl;
  obj6[1] = intl4.string(onClose(1236).t.GOmEb8);
  obj6[2] = { text: formatResult1 };
  obj6[3] = function onPress() {
    handleOpenDatePicker("time");
  };
  obj6[4] = tmp.inputContainer;
  obj6[5] = error(onClose(4474).Text, { variant: "text-md/medium", children: formatResult1 });
  items4[1] = error(onClose(5068).PressableOpacity, obj6);
  let tmp10Result = null != error;
  if (tmp10Result) {
    const obj7 = {
      style: null,
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: null,
    };
    obj7[0] = tmp.error;
    obj7[4] = error;
    tmp10Result = tmp10(tmp11(4474).Text, obj7);
  }
  items4[2] = tmp10Result;
  items3[1] = handleOpenDatePicker(closure_6, { children: items4 });
  obj1[1] = items3;
  items1[1] = handleOpenDatePicker(closure_6, obj1);
  obj[1] = items1;
  return handleOpenDatePicker(closure_6, obj);
});
let result = require("set").fileFinishedImporting(
  "modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx",
);

export default memoResult;
