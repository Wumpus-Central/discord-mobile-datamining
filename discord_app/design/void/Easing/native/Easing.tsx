// === Module 16438: Easing/Easing ===

// Module 16438 (Easing/Easing)
import _mod1655 from "module_1655" /* 1655 */;
import size from "module_2" /* 2 */;

const Easing = _mod1655.Easing;
const Easing2 = _mod1655.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = Easing2.bezier(0, 0, 0.2, 1);