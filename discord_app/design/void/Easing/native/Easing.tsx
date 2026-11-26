// === Module 15407: Easing/Easing ===

// Module 15407 (Easing/Easing)
import _mod1654 from "module_1654" /* 1654 */;
import size from "module_2" /* 2 */;

const Easing = _mod1654.Easing;
const Easing2 = _mod1654.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = Easing2.bezier(0, 0, 0.2, 1);