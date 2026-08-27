// === Module 11212: ? ===

// Module 11212
import ThemesDefault from "Themes" /* 712 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
let c5 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { modal: null, headerLeftContainer: null, headerRightContainer: null, container: null, formHeader: null, inputContainer: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
createCacheKey = { paddingLeft: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { paddingRight: ThemesDefault.space.PX_16 };
obj[3] = { paddingHorizontal: 16, paddingTop: 24, gap: 24 };
obj[4] = { marginBottom: 8 };
let obj2 = { paddingRight: ThemesDefault.space.PX_16 };
obj[5] = { paddingHorizontal: 16, paddingVertical: 12, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT };
let closure_9 = createCacheKey.createStyles(obj);
let obj3 = { paddingHorizontal: 16, paddingVertical: 12, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT };
const memoResult = importAllResult.memo((onClose) => {
  onClose = onClose.onClose;
  const createReminder = onClose.createReminder;
  let first;
  dependencyMap = undefined;
  importAllResult = undefined;
  function handleOpenDatePicker(closure_5, arg1) {
    let obj = first(1892);
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
    const obj2 = createReminder(4412);
    const tmp = dependencyMap;
    obj[1] = first.toDate();
    const tmp6 = tmp3(2009)(9608, dependencyMap.paths);
    obj[2] = createReminder(4043)().toDate();
    obj[3] = closure_5;
    obj[4] = dependencyMap;
    obj2.openLazy(tmp6, "DatePicker", obj);
  }
  let tmp = callback();
  const tmp4 = handleOpenDatePicker(importAllResult.useState(() => createReminder(4043)()), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
  const items = [createReminder, first, onClose];
  importAllResult = importAllResult.useCallback(() => {
    createReminder(first.toDate());
    onClose();
  }, items);
  const formatResult = first.format("MMM Do YYYY");
  const formatResult1 = first.format("LT");
  let obj = { style: tmp.modal, children: null };
  obj = { title: null, headerTitle: null, headerTitleAlign: "center", headerStatusBarHeight: null, headerLeft: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerRight: null };
  let intl = onClose(1236).intl;
  obj[0] = intl.string(onClose(1236).t.VKsXpY);
  obj[1] = function headerTitle() {
    const obj = { title: null };
    const intl = onClose(1236).intl;
    obj[0] = intl.string(onClose(1236).t.VKsXpY);
    return callback(onClose(7540).GenericHeaderTitle, obj);
  };
  let obj3 = onClose(500);
  let num = 0;
  if (!obj3.isIOS()) {
    num = createReminder(1629)().top;
  }
  obj[3] = num + createReminder(712).space.PX_8;
  obj[4] = onClose(5447).getHeaderCloseButton(onClose);
  ({ headerLeftContainer: obj3[5], headerRightContainer: obj3[6] } = tmp);
  obj[7] = function headerRight() {
    let obj = { accessibilityRole: "button", onPress: closure_5, children: null };
    obj = { variant: "text-md/semibold", color: "control-brand-foreground", children: null };
    const intl = onClose(1236).intl;
    obj[2] = intl.string(onClose(1236).t["R3BPH+"]);
    obj[2] = closure_1_7(onClose(4441).Text, obj);
    return closure_1_7(onClose(5020).PressableOpacity, obj);
  };
  const items1 = [closure_7(onClose(5454).Header, obj), ];
  obj1 = { style: tmp.container, children: null };
  let obj2 = { children: null };
  obj3 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl2 = tmp10(1236).intl;
  obj3[3] = intl2.string(onClose(1236).t.pSZKvM);
  const items2 = [closure_7(onClose(4441).Text, obj3), ];
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, style: null, children: null };
  const intl3 = tmp10(1236).intl;
  obj4[1] = intl3.string(onClose(1236).t.pSZKvM);
  obj4[2] = { text: formatResult };
  obj4[3] = function onPress() {
    handleOpenDatePicker("date");
  };
  obj4[4] = tmp.inputContainer;
  obj4[5] = closure_7(onClose(4441).Text, { variant: "text-md/medium", children: formatResult });
  items2[1] = closure_7(onClose(5020).PressableOpacity, obj4);
  obj2[0] = items2;
  const items3 = [closure_8(View, obj2), ];
  const obj5 = { children: null };
  const obj6 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: null };
  const intl4 = tmp10(1236).intl;
  obj6[3] = intl4.string(onClose(1236).t.GOmEb8);
  const items4 = [closure_7(onClose(4441).Text, obj6), ];
  const obj7 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, style: null, children: null };
  const intl5 = tmp10(1236).intl;
  obj7[1] = intl5.string(onClose(1236).t.pSZKvM);
  obj7[2] = { text: formatResult1 };
  obj7[3] = function onPress() {
    handleOpenDatePicker("time");
  };
  obj7[4] = tmp.inputContainer;
  obj7[5] = closure_7(onClose(4441).Text, { variant: "text-md/medium", children: formatResult1 });
  items4[1] = closure_7(onClose(5020).PressableOpacity, obj7);
  obj5[0] = items4;
  items3[1] = closure_8(View, obj5);
  obj1[1] = items3;
  items1[1] = closure_8(View, obj1);
  obj[1] = items1;
  return closure_8(View, obj);
});
let result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx");

export default memoResult;