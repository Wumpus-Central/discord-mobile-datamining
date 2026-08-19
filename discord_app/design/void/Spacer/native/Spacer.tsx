// discord_app/design/void/Spacer/native/Spacer.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import apply from "../../../../../_runtime/00012_apply.js";

noopAll;
let closure_2 = apply.memoize((width) => ({ width, height: width }));
const result = require("obj132").fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default function Spacer(pointerEvents) {
  return <View style={callback(pointerEvents.size)} pointerEvents={pointerEvents.pointerEvents} />;
};