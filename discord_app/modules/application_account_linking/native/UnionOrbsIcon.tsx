// === Module 19843: UnionOrbsIcon ===

// Module 19843 (UnionOrbsIcon)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 6020 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import _modDef18520 from "module_18520" /* 18520 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5306);
const obj2 = { container: { width: "auto" }, dot: null, orb: null };
let size = { width: 5, height: 5, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_SUBTLE };
obj2.dot = size;
const size1 = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
obj2.orb = size1;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/UnionOrbsIcon.tsx");

export function UnionOrbsIcon() {
  const tmp = closure_6();
  const obj = { direction: "horizontal", align: "center", spacing: 4, style: tmp.container, children: null };
  items = [React4(View, { style: tmp.dot }), , ];
  const obj3 = { source: null, style: null };
  const obj4 = { uri: _modDef18520 };
  obj3.source = obj4;
  obj3.style = tmp.orb;
  items[1] = React4(FastImageDefault, obj3);
  items[2] = React4(View, { style: tmp.dot });
  obj.children = items;
  return hasOwnProperty(Stack_Stack.Stack, obj);
}