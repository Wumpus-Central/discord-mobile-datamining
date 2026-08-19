// discord_app/modules/rpc/server/commands/subscriptions.tsx
import prototypeDefault from "../../RPCError.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../../../../Constants.tsx";

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