// === Module 16732: HomeDrawerShared ===

// Module 16732 (HomeDrawerShared)
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_1, jsx: c2 } = jsxProd);
const createStyles = fn(4829);
let closure_3 = createStyles.createStyles({ container: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }, titleContainer: { flex: 1, flexDirection: "column", justifyContent: "center", gap: 2 }, rightContainer: { overflow: "hidden" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerShared.tsx");

export const HomeDrawerSharedItem = function HomeDrawerSharedItem(right) {
  right = right.right;
  ({ title, subtitle } = right);
  const tmp = closure_3();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.titleContainer, children: null };
  const items = [title, subtitle];
  obj2.children = items;
  const items1 = [framebus(View, obj2), ];
  let tmp4 = null;
  if (null != right) {
    const obj3 = { style: tmp.rightContainer, children: right };
    tmp4 = React2(View, obj3);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return framebus(View, obj);
};