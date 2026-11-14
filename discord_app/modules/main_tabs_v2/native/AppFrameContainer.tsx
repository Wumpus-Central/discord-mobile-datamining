// discord_app/modules/main_tabs_v2/native/AppFrameContainer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useAppFrameDefault from "useAppFrame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5306);
let closure_5 = createStyles.createStyles((arg0, arg1, arg2) => {
  const container = {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    paddingLeft: null,
    paddingRight: null,
  };
  let num = 0;
  if (!arg2) {
    num = arg0;
  }
  container.paddingLeft = num;
  let num2 = 0;
  if (!arg2) {
    num2 = arg1;
  }
  container.paddingRight = num2;
  return { container, content: { flex: 1 } };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppFrameContainer.tsx");

export default function AppFrameContainer(children) {
  let flag = children.ignoreHorizontalSafeArea;
  if (flag === undefined) {
    flag = false;
  }
  ({ insets, hasFrame, styles } = useAppFrameDefault({ enabled: !flag }));
  const tmp2 = closure_5(insets.left, insets.right, flag);
  const obj2 = { style: null, children: null };
  items = [tmp2.container, styles.container];
  obj2.style = items;
  const obj3 = { style: null, children: null };
  const items1 = [tmp2.content, styles.content];
  obj3.style = items1;
  const obj4 = { style: null, collapsable: !hasFrame, children: children.children };
  const items2 = [tmp2.content, styles.body];
  obj4.style = items2;
  const items3 = [React3(View, obj4)];
  let tmp3Result = null;
  if (hasFrame) {
    const obj5 = { style: styles.border, pointerEvents: "none" };
    tmp3Result = React3(View, obj5);
  }
  items3[1] = tmp3Result;
  obj3.children = items3;
  obj2.children = React4(View, obj3);
  return React3(View, obj2);
}
