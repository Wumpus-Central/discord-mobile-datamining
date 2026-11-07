// === Module 13000: useConjureSharedProjectCoverAction ===

// Module 13000 (useConjureSharedProjectCoverAction)
import openFrameDefault from "openFrame" /* 11894 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectCoverAction.tsx");

export default function useConjureSharedProjectCoverAction(applicationId, arg1, arg2) {
  importDefault = applicationId;
  const tmp = require("useConjureSharedProjectLaunch")(applicationId, arg1, arg2);
  launch = tmp.launch;
  ({ canLaunch, launching, failed } = tmp);
  const tmp2 = require("useConjureSharedProjectAppChannel")(applicationId, arg1, arg2);
  noop = tmp2;
  let str = "launch";
  if (!canLaunch) {
    let str2 = null;
    if (null != tmp2) {
      str2 = "open";
    }
    str = str2;
  }
  items = [str, launch, applicationId, tmp2];
  return {
    type: str,
    launching,
    launchFailed: failed,
    run: noop.useCallback(() => {
      if ("launch" === str) {
        let resolved = launch();
      } else {
        if ("open" === tmp) {
          if (null != closure_2) {
            const obj = { applicationId, channel: tmp2 };
            openFrameDefault(obj);
            resolved = Promise.resolve(true);
          }
        }
        resolved = Promise.resolve(false);
      }
      return resolved;
    }, items)
  };
};