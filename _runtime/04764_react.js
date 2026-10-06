// _runtime/04764_react.js
import react from "00019_react.js";
import react2 from "04761_react.js";

const useContext = react.useContext;

export const usePortalState = function (name) {
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
