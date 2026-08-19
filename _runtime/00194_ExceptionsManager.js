// === Module 194: ExceptionsManager ===

// Module 194 (ExceptionsManager)
import getAll from "get" /* 30 */;

const enforcing = getAll.getEnforcing("ExceptionsManager");
const obj = {
  reportFatalException(message, stack, id) {
    closure_0.reportFatalException(message, stack, id);
  },
  reportSoftException(message, stack, id) {
    closure_0.reportSoftException(message, stack, id);
  },
  dismissRedbox() {
    if (closure_0.dismissRedbox) {
      closure_0.dismissRedbox();
    }
  },
  reportException(isFatal) {
    if (closure_0.reportException) {
      closure_0.reportException(isFatal);
    } else if (isFatal.isFatal) {
      closure_0.reportFatalException(isFatal.message, isFatal.stack, isFatal.id);
    } else {
      closure_0.reportSoftException(isFatal.message, isFatal.stack, isFatal.id);
    }
  }
};

export default obj;