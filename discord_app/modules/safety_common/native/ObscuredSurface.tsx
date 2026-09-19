// === Module 8981: ObscuredSurface ===

// Module 8981 (ObscuredSurface)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5292 */;
import ObscuredSurfaceContext from "ObscuredSurfaceContext" /* 8982 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { position: "relative", overflow: "hidden" }, content: { pointerEvents: "none", userSelect: "none" }, cover: { position: "absolute", inset: 0, zIndex: 1, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND }, warning: null };
let obj3 = { position: "absolute", inset: 0, zIndex: 1, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
obj2.warning = { position: "absolute", insetInlineStart: "50%", top: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, textAlign: "center", userSelect: "none", zIndex: 2 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/native/ObscuredSurface.tsx");

export default function ObscuredSurface(obscured) {
  ({ heading, description, children } = obscured);
  const tmp = closure_6();
  let tmp3Result = children;
  if (obscured.obscured) {
    const obj = { value: ObscuredSurfaceContext.OBSCURED_VALUE, children: null };
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.content, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessible: false, "aria-hidden": true, children };
    const items = [React4(View, obj3), , ];
    const obj4 = { style: tmp.cover };
    items[1] = React4(View, obj4);
    const obj5 = { style: tmp.warning, children: null };
    const obj6 = { size: "lg", color: nativeDefault.colors.TEXT_DEFAULT };
    const items1 = [React4(ImageWarningIcon.ImageWarningIcon, obj6), , ];
    if (heading == null) {
      const intl = util.intl;
      heading = intl.string(util.t.xC8Saf);
    }
    const obj7 = { variant: "heading-md/semibold", color: "text-strong", children: heading };
    items1[1] = React4(Text_Text.Text, obj7);
    if (description == null) {
      const intl2 = util.intl;
      description = intl2.string(util.t["0fc/DG"]);
    }
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: description };
    items1[2] = React4(Text_Text.Text, obj8);
    obj5.children = items1;
    items[2] = hasOwnProperty(View, obj5);
    obj2.children = items;
    obj.children = hasOwnProperty(View, obj2);
    tmp3Result = React4(ObscuredSurfaceContext.ObscuredSurfaceContext.Provider, obj);
  }
  return tmp3Result;
};