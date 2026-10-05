// _runtime/00409_react.js
import react2 from "00019_react.js";

const context = react2.createContext(null);
const frozen = Object.freeze({ horizontal: true });

export default context;
export const HORIZONTAL = frozen;
export const VERTICAL = Object.freeze({ horizontal: false });
