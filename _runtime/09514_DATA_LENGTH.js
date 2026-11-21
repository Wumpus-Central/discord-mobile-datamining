// _runtime/09514_DATA_LENGTH.js
import _mod1653 from "metro/01653__.js";

const obj = { easeOutQuart: null };
const Easing = _mod1653.Easing;
obj.easeOutQuart = Easing.bezier(0.25, 1, 0.5, 1);

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export const Easing = obj;
