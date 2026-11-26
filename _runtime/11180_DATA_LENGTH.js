// === Module 11180: DATA_LENGTH ===

// Module 11180 (DATA_LENGTH)
import _mod1654 from "module_1654" /* 1654 */;

const obj = { easeOutQuart: null };
const Easing = _mod1654.Easing;
obj.easeOutQuart = Easing.bezier(0.25, 1, 0.5, 1);

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export const Easing = obj;