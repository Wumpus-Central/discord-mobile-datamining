// === Module 10270: RoleLabel ===

// Module 10270 (RoleLabel)
import initialize from "initialize" /* 504 */;
import Form from "Form" /* 8593 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row" }, roleDot: { marginRight: 4 } });
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