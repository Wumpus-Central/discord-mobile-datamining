// discord_app/design/void/RoleLabel/native/RoleLabel.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import Form from "../../Form/native/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../modules/a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({
  container: { display: "flex", flexDirection: "row" },
  roleDot: { marginRight: 4 },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export const RoleLabel = function RoleLabel(color) {
  color = color.color;
  ({ name, colors } = color);
  const tmp = closure_6();
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  let tmp5 = "username" === stateFromStores;
  if (tmp5) {
    tmp5 = null != color;
  }
  if (tmp5) {
    obj = { color };
  }
  obj = { style: tmp.container, children: null };
  let tmp10 = "dot" === stateFromStores;
  if (tmp10) {
    tmp10 = null != color;
  }
  if (tmp10) {
    const obj1 = { color, colors, containerStyles: tmp.roleDot };
    tmp10 = React4(tmp2(1178).RoleDot, obj1);
  }
  const items1 = [tmp10, React4(Form.FormLabel, { style: {}, text: name })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
};
