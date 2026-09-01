// _runtime/00409_context.js
import noopAll from "00019_noop.js";

noopAll;
const context = require("noop").createContext(null);
const frozen = Object.freeze({ horizontal: true });

export default context;
export const HORIZONTAL = frozen;
export const VERTICAL = Object.freeze({ horizontal: false });
