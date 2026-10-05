// === Module 4758: react ===

// Module 4758 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 4755 */;

const useContext = react.useContext;

export const usePortalState = function(name) {
  const tmp = useContext(react2.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};