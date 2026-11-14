// === Module 12122: UserProfileReorderActionSheet ===

// Module 12122 (UserProfileReorderActionSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { content: { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, list: null };
let obj3 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.list = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileReorderActionSheet.tsx");

export default function UserProfileReorderActionSheet(returnFocusRef) {
  returnFocusRef = returnFocusRef.returnFocusRef;
  ({ dismissAccessibilityLabel, children } = returnFocusRef);
  const tmp = closure_7();
  items = [returnFocusRef];
  const effect = noop.useEffect(() => () => returnFocusRef(dependencyMap[6]).setAccessibilityFocus({ ref, delay: 100 }), items);
  const obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel, children: null };
  const obj2 = { contentContainerStyle: null, children: null };
  const items1 = [tmp.content, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.contentContainerStyle = items1;
  const obj3 = { variant: "body-sm/medium", color: "text-subtle", children: null };
  const intl = returnFocusRef(1113).intl;
  obj3.children = intl.string(returnFocusRef(1113).t["S7X7/T"]);
  const items2 = [closure_5(returnFocusRef(5929).Text, obj3), closure_5(View, { accessibilityRole: "list", style: tmp.list, children })];
  obj2.children = items2;
  obj.children = closure_6(returnFocusRef(5570).BottomSheetScrollView, obj2);
  return closure_5(returnFocusRef(7951).ActionSheet, obj);
};