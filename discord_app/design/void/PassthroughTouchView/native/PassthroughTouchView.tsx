// discord_app/design/void/PassthroughTouchView/native/PassthroughTouchView.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/PassthroughTouchNativeComponent.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

noopAll;
const result = require("obj132").fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default function PassthroughTouchView(onTouchDown) {
  const merged = Object.assign(onTouchDown, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onTouchDown = onTouchDown.onTouchDown;
  obj.pointerEvents = "box-none";
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};