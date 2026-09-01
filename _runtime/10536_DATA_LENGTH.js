// _runtime/10536_DATA_LENGTH.js
import cancelAnimation from "01653_cancelAnimation.js";

const obj = { easeOutQuart: null };
const Easing = cancelAnimation.Easing;
obj[0] = Easing.bezier(0.25, 1, 0.5, 1);

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export const Easing = obj;