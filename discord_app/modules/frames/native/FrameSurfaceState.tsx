// === Module 18629: FrameSurfaceState ===

// Module 18629 (FrameSurfaceState)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6947 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 }, action: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
obj2.action = { marginTop: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameSurfaceState.tsx");

export function FrameSurfaceExplanation(icon) {
  ({ heading, description, error, action } = icon);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const items = [icon.icon, , , , ];
  let tmp4 = null;
  if (null != heading) {
    const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
    tmp4 = React3(Text_Text.Heading, obj2);
  }
  items[1] = tmp4;
  let tmp8 = null;
  if (null != description) {
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
    tmp8 = React3(Text_Text.Text, obj3);
  }
  items[2] = tmp8;
  let tmp12 = null;
  if (null != error) {
    const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp12 = React3(Text_Text.Text, obj4);
  }
  items[3] = tmp12;
  let tmp16 = null;
  if (null != action) {
    const obj5 = { style: tmp.action, children: action };
    tmp16 = React3(View, obj5);
  }
  items[4] = tmp16;
  obj.children = items;
  return React4(View, obj);
}
export function FrameSurfaceLoading() {
  return React3(View, { style: closure_5().container, children: React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
}