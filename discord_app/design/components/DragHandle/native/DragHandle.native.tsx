// discord_app/design/components/DragHandle/native/DragHandle.native.tsx
import apply from "../../../../../_runtime/00012_apply.js";
import util from "../../../../intl/index.native.tsx";
import BaseIconButton from "../../Button/native/BaseIconButton.native.tsx";
import DragIcon from "../../Icon/native/redesign/generated/DragIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let closure_3 = ["onPress", "onPressIn", "onPressOut", "onLongPress"];
const createStyles = fn(5306);
let closure_4 = createStyles.createStyles({
  stretchButton: { flexDirection: "row", alignItems: "stretch", alignSelf: "stretch" },
  stretchPill: { height: "100%", alignSelf: "stretch" },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/DragHandle/native/DragHandle.native.tsx");

export function DragHandle(variant) {
  let str = variant.variant;
  ({ ref, style } = variant);
  if (str === undefined) {
    str = "default";
  }
  let str2 = variant.size;
  if (str2 === undefined) {
    str2 = "md";
  }
  ({ stretch, accessibilityLabel, borderRadius } = variant);
  const merged = Object.assign(
    variant,
    Object.assign({ ref: 0, style: 0, variant: 0, size: 0, stretch: 0, accessibilityLabel: 0, borderRadius: 0 }),
  );
  const tmp2 = closure_4();
  if (null == borderRadius) {
    let obj3 = {};
  } else {
    if (obj.isNumber(borderRadius)) {
      const obj4 = { borderRadius };
      obj3 = obj4;
    } else {
      obj3 = {
        borderTopStartRadius: null,
        borderTopEndRadius: null,
        borderBottomStartRadius: null,
        borderBottomEndRadius: null,
      };
      ({
        topStart: obj2.borderTopStartRadius,
        topEnd: obj2.borderTopEndRadius,
        bottomStart: obj2.borderBottomStartRadius,
        bottomEnd: obj2.borderBottomEndRadius,
      } = borderRadius);
    }
    obj = apply;
  }
  const obj7 = { ref };
  const merged1 = Object.assign(merged);
  let stretchButton;
  if (stretch) {
    stretchButton = tmp2.stretchButton;
  }
  items = [stretchButton, style];
  obj7.style = items;
  let stretchPill;
  if (stretch) {
    stretchPill = tmp2.stretchPill;
  }
  const items1 = [stretchPill, obj3];
  obj7.pillStyle = items1;
  let str3 = "none";
  if (someResult) {
    str3 = "button";
  }
  obj7.accessibilityRole = str3;
  if (accessibilityLabel == null) {
    const intl = util.intl;
    accessibilityLabel = intl.string(util.t["0dOFq+"]);
  }
  obj7.accessibilityLabel = accessibilityLabel;
  let str4 = "icon-only";
  if ("overlay" === str) {
    str4 = "secondary-overlay";
  }
  obj7.variant = str4;
  obj7.size = str2;
  obj7.scaleAmountInPx = 0;
  obj7.icon = jsx(DragIcon.DragIcon, {});
  obj7.onPress = merged.onPress;
  return jsx(BaseIconButton.BaseIconButton, { ref });
}
