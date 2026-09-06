// discord_app/modules/rpc/server/commands/subscriptions.tsx
import RPCErrorDefault from "../../RPCError.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
let obj = {
  handler(arg0) {
    ({ server: require, socket: importDefault, evt: dependencyMap, args: asyncGeneratorStep } = arg0);
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const v0 = 0;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              let initialSubscriptionPayload;
              closure_128_0 = tmp66;
              if (null == events.events[event]) {
                const obj1 = { errorCode: constants2.INVALID_EVENT };
                const _HermesInternal = HermesInternal;
                let tmp35 = v0(9554);
                tmp35 = new tmp35(obj1, "Invalid event: " + event);
                throw tmp35;
              } else if (v0(14502)(importDefault.authorization.scopes, tmp66.scope)) {
                const obj2 = { event, scope: null, application_id: null, socket_scope: null };
                if (typeof tmp66.scope === "object") {
                  const _JSON = JSON;
                  let scope = JSON.stringify(tmp66.scope);
                } else {
                  scope = tmp66.scope;
                }
                obj2.scope = scope;
                obj2.application_id = importDefault.application.id;
                obj2.socket_scope = importDefault.authorization.scopes.toString();
                tmp71(1242).track(constants.RPC_SUBSCRIPTION_REQUESTED, obj2);
                if (null != tmp66.validation) {
                  dependencyMap = 1;
                  c3 = 1;
                  const obj3 = { value: events.getJoi(), done: false };
                  return obj3;
                }
                const tmp71Result = tmp71(1242);
              } else {
                const obj4 = { errorCode: constants2.INVALID_PERMISSIONS };
                const tmp10 = new tmp71(9554)(obj4, "Not authenticated or invalid scope");
                throw tmp10;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_1 = value;
            if (
              null !=
              closure_128_1.validate(closure_129_3, closure_128_0.validation(closure_128_1), { convert: false }).error
            ) {
              let obj5 = { errorCode: constants2.INVALID_PAYLOAD };
              const tmp63 = new v0(9554)(obj5, "Invalid subscription parameters provided");
              throw tmp63;
            }
          }
          const obj6 = { args: closure_129_3, socket: closure_129_1 };
          closure_128_2 = closure_128_0.handler(obj6);
          obj5 = tmp2(14503);
          initialSubscriptionPayload = obj5.getInitialSubscriptionPayload(closure_129_1, closure_129_2, closure_129_3);
          const promise = new Promise((fn) => {
            setImmediate(() => {
              closure_2_0.addSubscription(v0, closure_2_2, closure_2_3, closure_1_2);
              if (null != closure_1_3) {
                const result = closure_2_0.dispatchToSubscriptions(
                  closure_2_2,
                  (socket) => socket.socket.id === id.id,
                  closure_1_3,
                );
              }
            });
            fn({ evt });
          });
          c3 = 3;
          const obj7 = { value: promise, done: true };
          return obj7;
        } catch (tmp44) {
          c3 = tmp;
          throw tmp44;
        }
      }
    })();
  },
};
obj = {
  handler(arg0) {
    ({ server, evt } = arg0);
    if (null == server.events[evt]) {
      let obj = { errorCode: constants.INVALID_EVENT };
      const _HermesInternal = HermesInternal;
      let tmp6 = RPCErrorDefault;
      tmp6 = new tmp6(obj, "Invalid event: " + evt);
      throw tmp6;
    } else {
      server.removeSubscription(tmp, evt, tmp2);
      obj = { evt };
      return obj;
    }
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/subscriptions.tsx");

export default { [RPCCommands.SUBSCRIBE]: obj, [RPCCommands.UNSUBSCRIBE]: obj };
