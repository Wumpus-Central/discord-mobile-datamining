// discord_app/design/void/PassthroughTouchView/native/PassthroughTouchView.tsx
import "noop";
import { jsx } from "jsxProd";
import { __INTERNAL_VIEW_CONFIG } from "../../../../../discord_common/js/packages/rtn-codegen/js/PassthroughTouchNativeComponent.tsx";

const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default function PassthroughTouchView(onTouchDown) {
  const merged = Object.assign(onTouchDown, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onTouchDown = onTouchDown.onTouchDown;
  obj.pointerEvents = "box-none";
  return jsx(__INTERNAL_VIEW_CONFIG, {});
};