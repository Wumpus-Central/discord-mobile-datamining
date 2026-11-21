// discord_app/modules/user_profile/native/UserProfileReorderActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4913);
let obj2 = { content: { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileReorderActionSheet.tsx");

export default function UserProfileReorderActionSheet(returnFocusRef) {
  returnFocusRef = returnFocusRef.returnFocusRef;
  ({ dismissAccessibilityLabel, children } = returnFocusRef);
  items = [returnFocusRef];
  const effect = noop.useEffect(
    () => () => returnFocusRef(dependencyMap[5]).setAccessibilityFocus({ ref, delay: 100 }),
    items,
  );
  const obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel, children: null };
  const obj2 = { contentContainerStyle: null, children: null };
  const items1 = [closure_6().content, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.contentContainerStyle = items1;
  const obj3 = { variant: "body-sm/medium", color: "text-subtle", children: null };
  const intl = returnFocusRef(1112).intl;
  obj3.children = intl.string(returnFocusRef(1112).t["S7X7/T"]);
  const items2 = [closure_4(returnFocusRef(5504).Text, obj3), children];
  obj2.children = items2;
  obj.children = closure_5(returnFocusRef(5145).BottomSheetScrollView, obj2);
  return closure_4(returnFocusRef(7553).ActionSheet, obj);
}
