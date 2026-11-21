// === Module 15214: Easing/Easing ===

// Module 15214 (Easing/Easing)
import _mod1653 from "module_1653" /* 1653 */;
import size from "module_2" /* 2 */;

const Easing = _mod1653.Easing;
const Easing2 = _mod1653.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = Easing2.bezier(0, 0, 0.2, 1);