// === Module 409: react ===

// Module 409 (react)
import react2 from "react" /* 19 */;

const context = react2.createContext(null);
const frozen = Object.freeze({ horizontal: true });

export default context;
export const HORIZONTAL = frozen;
export const VERTICAL = Object.freeze({ horizontal: false });