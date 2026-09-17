// === Module 14626: subscriptions ===

// Module 14626 (subscriptions)
import RPCErrorDefault from "RPCError" /* 9708 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/subscriptions.tsx");

export default {
  [RPCCommands.SUBSCRIBE]: {
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
            const obj2 = { value, done: true };
            return obj2;
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const v0 = 0;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                closure_128_2 = undefined;
                let initialSubscriptionPayload;
                closure_128_0 = tmp66;
                if (null == events.events[event]) {
                  const obj4 = { errorCode: constants2.INVALID_EVENT };
                  const _HermesInternal = HermesInternal;
                  const tmp352 = new v0(9708)(obj4, "Invalid event: " + event);
                  throw tmp352;
                } else if (v0(14627)(importDefault.authorization.scopes, tmp66.scope)) {
                  const obj5 = { event, scope: null, application_id: null, socket_scope: null };
                  if (typeof tmp66.scope === "object") {
                    const _JSON = JSON;
                    let scope = JSON.stringify(tmp66.scope);
                  } else {
                    scope = tmp66.scope;
                  }
                  obj5.scope = scope;
                  obj5.application_id = importDefault.application.id;
                  obj5.socket_scope = importDefault.authorization.scopes.toString();
                  tmp71(1241).track(constants.RPC_SUBSCRIPTION_REQUESTED, obj5);
                  if (null != tmp66.validation) {
                    dependencyMap = 1;
                    c3 = 1;
                    const obj7 = { value: events.getJoi(), done: false };
                    return obj7;
                  }
                  const tmp71Result = tmp71(1241);
                } else {
                  const obj8 = { errorCode: constants2.INVALID_PERMISSIONS };
                  const tmp10 = new tmp71(9708)(obj8, "Not authenticated or invalid scope");
                  throw tmp10;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_1 = value;
              if (null != closure_128_1.validate(closure_129_3, closure_128_0.validation(closure_128_1), { convert: false }).error) {
                const obj9 = { errorCode: constants2.INVALID_PAYLOAD };
                const tmp63 = new v0(9708)(obj9, "Invalid subscription parameters provided");
                throw tmp63;
              }
            }
            const obj10 = { args: closure_129_3, socket: closure_129_1 };
            closure_128_2 = closure_128_0.handler(obj10);
            initialSubscriptionPayload = tmp2(14628).getInitialSubscriptionPayload(closure_129_1, closure_129_2, closure_129_3);
            const promise = new Promise((fn) => {
              setImmediate(() => {
                closure_2_0.addSubscription(v0, closure_2_2, closure_2_3, closure_1_2);
                if (null != closure_1_3) {
                  const result = closure_2_0.dispatchToSubscriptions(closure_2_2, (socket) => socket.socket.id === id.id, closure_1_3);
                }
              });
              fn({ evt });
            });
            c3 = 3;
            const obj11 = { value: promise, done: true };
            return obj11;
          } catch (tmp44) {
            c3 = tmp;
            throw tmp44;
          }
        }
      })();
    }
  },
  [RPCCommands.UNSUBSCRIBE]: {
    handler(arg0) {
      ({ server, evt } = arg0);
      if (null == server.events[evt]) {
        const obj2 = { errorCode: constants.INVALID_EVENT };
        const _HermesInternal = HermesInternal;
        const tmp62 = new RPCErrorDefault(obj2, "Invalid event: " + evt);
        throw tmp62;
      } else {
        server.removeSubscription(tmp, evt, tmp2);
        const obj = { evt };
        return obj;
      }
    }
  }
};