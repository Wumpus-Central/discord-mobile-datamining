// discord_app/design/void/Easing/native/Easing.tsx
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const Easing = _mod1655.Easing;
const Easing2 = _mod1655.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = Easing2.bezier(0, 0, 0.2, 1);
