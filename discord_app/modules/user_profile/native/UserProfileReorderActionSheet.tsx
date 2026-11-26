// === Module 14596: UserProfileReorderActionSheet ===

// Module 14596 (UserProfileReorderActionSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj2 = { content: { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileReorderActionSheet.tsx");

export default function UserProfileReorderActionSheet(returnFocusRef) {
  returnFocusRef = returnFocusRef.returnFocusRef;
  ({ dismissAccessibilityLabel, children, scrollRef } = returnFocusRef);
  items = [returnFocusRef];
  const effect = noop.useEffect(() => () => returnFocusRef(dependencyMap[5]).setAccessibilityFocus({ ref, delay: 100 }), items);
  const obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel, children: null };
  const obj2 = { ref: scrollRef, contentContainerStyle: null, children: null };
  const items1 = [closure_6().content, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.contentContainerStyle = items1;
  const obj3 = { variant: "body-sm/medium", color: "text-subtle", children: null };
  const intl = returnFocusRef(1112).intl;
  obj3.children = intl.string(returnFocusRef(1112).t["S7X7/T"]);
  const items2 = [closure_4(returnFocusRef(5634).Text, obj3), children];
  obj2.children = items2;
  obj.children = closure_5(returnFocusRef(5275).BottomSheetScrollView, obj2);
  return closure_4(returnFocusRef(7546).ActionSheet, obj);
};