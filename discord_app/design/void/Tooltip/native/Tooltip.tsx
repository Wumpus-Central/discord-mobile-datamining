// discord_app/design/void/Tooltip/native/Tooltip.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { UP: "UP", DOWN: "DOWN" };
obj = { CENTER: "CENTER", RIGHT: "RIGHT", LEFT: "LEFT" };
fn(4560);
obj = {
  container: {
    padding: 10,
    borderRadius: nativeDefault.radii.xs,
    alignSelf: "flex-start",
    minWidth: 60,
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  },
  label: null,
  title: null,
  arrow: null,
};
const createStyles = { fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM, fontSize: 12, color: nativeDefault.colors.WHITE };
obj.label = createStyles;
obj.title = { marginBottom: 4 };
let size = {
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderTopColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj.arrow = size;
let closure_8 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("design/void/Tooltip/native/Tooltip.tsx");

export default function Tooltip(arrowHeight) {
  ({ arrowStyle, label, title, arrowWidth } = arrowHeight);
  ({ style, containerStyle, labelStyle, children } = arrowHeight);
  if (arrowWidth === undefined) {
    arrowWidth = 16;
  }
  let num = arrowHeight.arrowHeight;
  if (num === undefined) {
    num = 8;
  }
  let num2 = arrowHeight.arrowOffset;
  if (num2 === undefined) {
    num2 = 0;
  }
  let LEFT = arrowHeight.arrowPosition;
  if (LEFT === undefined) {
    LEFT = obj.LEFT;
  }
  let UP = arrowHeight.arrowDirection;
  if (UP === undefined) {
    UP = obj.UP;
  }
  const tmp3 = closure_8();
  const items = [LEFT, num2];
  const memo = noop.useMemo(() => {
    if (obj.LEFT === LEFT) {
      obj = { alignSelf: "flex-start", left: num2 };
      return obj;
    } else if (tmp2.CENTER === tmp) {
      return { alignSelf: "center" };
    } else if (tmp2.RIGHT === tmp) {
      obj = { alignSelf: "flex-end", right: num2 };
      return obj;
    } else {
      obj = GlobalUtils;
      obj.assertNever(tmp);
    }
  }, items);
  obj = { style, children: null };
  let tmp8 = UP === obj.UP;
  if (tmp8) {
    obj = { style: null };
    const items1 = [tmp3.arrow, , ,];
    obj = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderBottomWidth: num };
    items1[1] = obj;
    items1[2] = memo;
    items1[3] = arrowStyle;
    obj.style = items1;
    tmp8 = closure_4(tmp6, obj);
  }
  const items2 = [tmp8, ,];
  const obj1 = { onLayout: arrowHeight.onLayout, style: null, children: null };
  const items3 = [tmp3.container, containerStyle];
  obj1.style = items3;
  let tmp10 = null;
  if (null != title) {
    const obj2 = { style: tmp3.title, variant: "text-md/semibold", color: "text-overlay-light", children: title };
    tmp10 = closure_4(num2(LEFT[7]).Heading, obj2);
  }
  const items4 = [tmp10, ,];
  let tmp14 = null;
  if (null != label) {
    const obj3 = { style: null, children: null };
    const items5 = [tmp3.label, labelStyle];
    obj3.style = items5;
    obj3.children = label;
    tmp14 = closure_4(num2(LEFT[8]).LegacyText, obj3);
  }
  items4[1] = tmp14;
  items4[2] = children;
  obj1.children = items4;
  items2[1] = closure_5(View, obj1);
  let tmp18 = UP === obj.DOWN;
  if (tmp18) {
    const obj4 = { style: null };
    const items6 = [tmp3.arrow, , ,];
    const obj5 = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderTopWidth: num };
    items6[1] = obj5;
    items6[2] = memo;
    items6[3] = arrowStyle;
    obj4.style = items6;
    tmp18 = closure_4(tmp6, obj4);
  }
  items2[2] = tmp18;
  obj.children = items2;
  return closure_5(View, obj);
}
export const TooltipArrowDirections = obj;
export const TooltipArrowPositions = obj;
