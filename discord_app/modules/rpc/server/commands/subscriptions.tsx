// discord_app/modules/rpc/server/commands/subscriptions.tsx
import getInitialSubscriptionPayload from "getInitialSubscriptionPayload";
import ME from "ME";
import { prototype } from "../../RPCError.tsx";

let RPCCommands;
let c4;
let c5;
const require = arg1;
({ AnalyticEvents: c4, RPCCommands, RPCErrors: c5 } = ME);
let obj = {
  handler(arg0) {
    let getInitialSubscriptionPayload;
    let dependencyMap;
    let importDefault;
    let require;
    ({ server: require, socket: importDefault, evt: dependencyMap, args: getInitialSubscriptionPayload } = arg0);
    return callback(function*() {
      if (initialSubscriptionPayload === 2) {
        initialSubscriptionPayload = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          initialSubscriptionPayload = 2;
          if (0 === closure_2) {
            if (arg0 === 1) {
              initialSubscriptionPayload = 3;
              throw arg1;
            } else if (arg0 === 2) {
              initialSubscriptionPayload = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = 0;
              let c0 = tmp2;
              c0 = undefined;
              closure_1 = undefined;
              closure_2 = undefined;
              initialSubscriptionPayload = undefined;
              c0 = tmp67;
              if (null == outer1_0.events[dependencyMap]) {
                const obj1 = { errorCode: null };
                obj1[0] = outer1_5.INVALID_EVENT;
                const _HermesInternal = HermesInternal;
                let tmp35 = outer1_1(10711);
                tmp35 = new tmp35(obj1, "Invalid event: " + dependencyMap);
                throw tmp35;
              } else if (outer1_1(13826)(outer1_1.authorization.scopes, tmp67.scope)) {
                const obj2 = { event: null, scope: null, application_id: null, socket_scope: null };
                obj2[0] = dependencyMap;
                if (typeof tmp67.scope === "object") {
                  const _JSON = JSON;
                  let scope = JSON.stringify(tmp67.scope);
                } else {
                  scope = tmp67.scope;
                }
                obj2[1] = scope;
                obj2[2] = outer1_1.application.id;
                obj2[3] = outer1_1.authorization.scopes.toString();
                tmp72(698).track(outer1_4.RPC_SUBSCRIPTION_REQUESTED, obj2);
                if (null != tmp67.validation) {
                  closure_2 = 1;
                  initialSubscriptionPayload = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = obj13.getJoi();
                  return obj3;
                }
                const str2 = outer1_1.authorization.scopes;
                const tmp72Result = tmp72(698);
              } else {
                const obj4 = { errorCode: null };
                obj4[0] = outer1_5.INVALID_PERMISSIONS;
                const tmp10 = new tmp72(10711)(obj4, "Not authenticated or invalid scope");
                throw tmp10;
              }
              obj13 = outer1_0;
            }
          } else if (arg0 === 1) {
            initialSubscriptionPayload = 3;
            throw arg1;
          } else if (arg0 === 2) {
            initialSubscriptionPayload = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = arg1;
            if (null != closure_1.validate(initialSubscriptionPayload, c0.validation(closure_1), { convert: false }).error) {
              let obj5 = { errorCode: null };
              obj5[0] = outer1_5.INVALID_PAYLOAD;
              const tmp64 = new outer1_1(10711)(obj5, "Invalid subscription parameters provided");
              throw tmp64;
            }
          }
          const obj6 = { args: null, socket: null };
          obj6[0] = initialSubscriptionPayload;
          obj6[1] = closure_1;
          closure_2 = c0.handler(obj6);
          obj5 = outer1_0(13827);
          initialSubscriptionPayload = obj5.getInitialSubscriptionPayload(closure_1, closure_2, initialSubscriptionPayload);
          const promise = new Promise((arg0) => {
            setImmediate(() => {
              outer1_0.addSubscription(outer1_1, outer1_2, outer1_3, closure_2);
              if (null != getInitialSubscriptionPayload) {
                const result = outer1_0.dispatchToSubscriptions(outer1_2, (socket) => socket.socket.id === id.id, getInitialSubscriptionPayload);
              }
            });
            arg0({ evt: closure_2 });
          });
          initialSubscriptionPayload = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = promise;
          return obj7;
        } catch (tmp44) {
          initialSubscriptionPayload = tmp;
          throw tmp44;
        }
      }
    })();
  }
};
obj = {
  handler(arg0) {
    let evt;
    let server;
    ({ server, evt } = arg0);
    if (null == server.events[evt]) {
      let obj = { errorCode: null };
      obj[0] = constants.INVALID_EVENT;
      const _HermesInternal = HermesInternal;
      let tmp6 = prototype;
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
let result = require("prototype").fileFinishedImporting("modules/rpc/server/commands/subscriptions.tsx");

export default { [RPCCommands.SUBSCRIBE]: obj, [RPCCommands.UNSUBSCRIBE]: obj };