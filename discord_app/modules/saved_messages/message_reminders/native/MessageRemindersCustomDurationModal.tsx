import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "Text";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
let c5 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { modal: null, headerContainer: null, container: null, formHeader: null, inputContainer: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
obj[1] = createCacheKey;
obj[2] = { paddingHorizontal: 16, paddingTop: 24, gap: 24 };
obj[3] = { marginBottom: 8 };
obj[4] = { paddingHorizontal: 16, paddingVertical: 12, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT };
let closure_9 = createCacheKey.createStyles(obj);
let obj2 = { paddingHorizontal: 16, paddingVertical: 12, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT };
const memoResult = importAllResult.memo((onClose) => {
  onClose = onClose.onClose;
  const createReminder = onClose.createReminder;
  let first;
  let dependencyMap;
  let importAllResult;
  function handleOpenDatePicker(closure_5, arg1) {
    let obj = first(1844);
    const result = obj.dismissGlobalKeyboard();
    if ("date" === closure_5) {
      const intl2 = onClose(1236).intl;
      let stringResult = intl2.string(onClose(1236).t.pSZKvM);
      let tmp3 = onClose;
    } else {
      tmp3 = onClose;
      const intl = onClose(1236).intl;
      stringResult = intl.string(onClose(1236).t.GOmEb8);
    }
    obj = { title: stringResult, startDate: null, minimumDate: null, mode: null, onSubmit: null };
    const obj2 = createReminder(4223);
    const tmp = dependencyMap;
    obj[1] = first.toDate();
    const tmp6 = tmp3(1959)(8564, dependencyMap.paths);
    obj[2] = createReminder(3837)().toDate();
    obj[3] = closure_5;
    obj[4] = dependencyMap;
    obj2.openLazy(tmp6, "DatePicker", obj);
  }
  let tmp = callback();
  const tmp2 = handleOpenDatePicker(importAllResult.useState(() => createReminder(3837)()), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  const items = [createReminder, first, onClose];
  importAllResult = importAllResult.useCallback(() => {
    createReminder(first.toDate());
    onClose();
  }, items);
  const formatResult = first.format("MMM Do YYYY");
  const formatResult1 = first.format("LT");
  let obj = { style: tmp.modal, children: null };
  obj = { style: tmp.headerContainer, children: null };
  const obj1 = { title: null, headerTitle: null, headerTitleAlign: "center", headerStatusBarHeight: null, headerLeft: null, headerRight: null };
  let intl = onClose(1236).intl;
  obj1[0] = intl.string(onClose(1236).t.VKsXpY);
  obj1[1] = function headerTitle() {
    const obj = { title: null };
    const intl = onClose(1236).intl;
    obj[0] = intl.string(onClose(1236).t.VKsXpY);
    return callback(onClose(9300).GenericHeaderTitle, obj);
  };
  let obj4 = onClose(500);
  let num;
  if (obj4.isIOS()) {
    num = 0;
  }
  obj1[3] = num;
  obj1[4] = onClose(5209).getHeaderCloseButton(onClose);
  obj1[5] = function headerRight() {
    let obj = { accessibilityRole: "button", onPress: closure_5, children: null };
    obj = { variant: "text-md/semibold", color: "control-brand-foreground", children: null };
    const intl = onClose(1236).intl;
    obj[2] = intl.string(onClose(1236).t["R3BPH+"]);
    obj[2] = outer1_7(onClose(4251).Text, obj);
    return outer1_7(onClose(4783).PressableOpacity, obj);
  };
  obj[1] = closure_7(onClose(5216).Header, obj1);
  const items1 = [closure_7(View, obj), ];
  let obj2 = { style: tmp.container, children: null };
  const obj3 = { children: null };
  obj4 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl2 = tmp8(1236).intl;
  obj4[3] = intl2.string(onClose(1236).t.pSZKvM);
  const items2 = [closure_7(onClose(4251).Text, obj4), ];
  const obj5 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, style: null, children: null };
  const intl3 = tmp8(1236).intl;
  obj5[1] = intl3.string(onClose(1236).t.pSZKvM);
  obj5[2] = { text: formatResult };
  obj5[3] = function onPress() {
    handleOpenDatePicker("date");
  };
  obj5[4] = tmp.inputContainer;
  obj5[5] = closure_7(onClose(4251).Text, { variant: "text-md/medium", children: formatResult });
  items2[1] = closure_7(onClose(4783).PressableOpacity, obj5);
  obj3[0] = items2;
  const items3 = [closure_8(View, obj3), ];
  const obj6 = { children: null };
  const obj7 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  const intl4 = tmp8(1236).intl;
  obj7[3] = intl4.string(onClose(1236).t.GOmEb8);
  const items4 = [closure_7(onClose(4251).Text, obj7), ];
  const obj8 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, style: null, children: null };
  const intl5 = tmp8(1236).intl;
  obj8[1] = intl5.string(onClose(1236).t.pSZKvM);
  obj8[2] = { text: formatResult1 };
  obj8[3] = function onPress() {
    handleOpenDatePicker("time");
  };
  obj8[4] = tmp.inputContainer;
  obj8[5] = closure_7(onClose(4251).Text, { variant: "text-md/medium", children: formatResult1 });
  items4[1] = closure_7(onClose(4783).PressableOpacity, obj8);
  obj6[0] = items4;
  items3[1] = closure_8(View, obj6);
  obj2[1] = items3;
  items1[1] = closure_8(View, obj2);
  obj[1] = items1;
  return closure_8(View, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx");

export default memoResult;