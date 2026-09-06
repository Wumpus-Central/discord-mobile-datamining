// discord_app/modules/safety_common/native/ObscuredSurface.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ImageWarningIcon from "../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import ObscuredSurfaceContext from "../ObscuredSurfaceContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: { position: "relative", overflow: "hidden" },
  content: { pointerEvents: "none", userSelect: "none" },
  cover: null,
  warning: null,
};
createStyles = {
  position: "absolute",
  inset: 0,
  zIndex: 1,
  backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND,
};
createStyles.cover = createStyles;
createStyles.warning = {
  position: "absolute",
  insetInlineStart: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
  textAlign: "center",
  userSelect: "none",
  zIndex: 2,
};
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/native/ObscuredSurface.tsx");

export default function ObscuredSurface(obscured) {
  ({ heading, description, children } = obscured);
  const tmp = closure_6();
  let tmp3Result = children;
  if (obscured.obscured) {
    let obj = { value: ObscuredSurfaceContext.OBSCURED_VALUE, children: null };
    obj = { style: tmp.container, children: null };
    obj = {
      style: tmp.content,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      accessible: false,
      "aria-hidden": true,
      children,
    };
    const items = [React4(View, obj), ,];
    const obj1 = { style: tmp.cover };
    items[1] = React4(View, obj1);
    const obj2 = { style: tmp.warning, children: null };
    const obj3 = { size: "lg", color: nativeDefault.colors.TEXT_DEFAULT };
    const items1 = [React4(ImageWarningIcon.ImageWarningIcon, obj3), ,];
    if (heading == null) {
      const intl = util.intl;
      heading = intl.string(util.t.xC8Saf);
    }
    const obj4 = { variant: "heading-md/semibold", color: "text-strong", children: heading };
    items1[1] = React4(Text_Text.Text, obj4);
    if (description == null) {
      const intl2 = util.intl;
      description = intl2.string(util.t["0fc/DG"]);
    }
    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: description };
    items1[2] = React4(Text_Text.Text, obj5);
    obj2.children = items1;
    items[2] = hasOwnProperty(View, obj2);
    obj.children = items;
    obj.children = hasOwnProperty(View, obj);
    tmp3Result = React4(ObscuredSurfaceContext.ObscuredSurfaceContext.Provider, obj);
  }
  return tmp3Result;
}
