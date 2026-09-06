// _runtime/metro/00409__.js
import noop from "00019__.js";

const context = fn(19).createContext(null);
const frozen = Object.freeze({ horizontal: true });

export default context;
export const HORIZONTAL = frozen;
export const VERTICAL = Object.freeze({ horizontal: false });
