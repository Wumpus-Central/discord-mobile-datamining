// === Module 13869: ? ===

// Module 13869
import prototypeDefault from "prototype" /* 8752 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 676 */;

const require = fn;
({ AnalyticEvents: c4, RPCCommands, RPCErrors: c5 } = ME);
let obj = {
  handler(arg0) {
    ({ server, evt } = arg0);
    if (null == server.events[evt]) {
      let obj = { errorCode: null };
      obj[0] = constants.INVALID_EVENT;
      const _HermesInternal = HermesInternal;
      let tmp6 = prototypeDefault;
      tmp6 = new tmp6(obj, "Invalid event: " + evt);
      throw tmp6;
    } else {
      server.removeSubscription(tmp, evt, tmp2);
      obj = { evt: null };
      obj[0] = evt;
      return obj;
    }
  }
};
let result = require("obj132").fileFinishedImporting("modules/rpc/server/commands/subscriptions.tsx");

export default { [RPCCommands.SUBSCRIBE]: obj, [RPCCommands.UNSUBSCRIBE]: obj };