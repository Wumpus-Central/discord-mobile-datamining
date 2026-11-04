// === Module 16063: Easing/Easing ===

// Module 16063 (Easing/Easing)
import _mod1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

const Easing = _mod1652.Easing;
const Easing2 = _mod1652.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = Easing2.bezier(0, 0, 0.2, 1);