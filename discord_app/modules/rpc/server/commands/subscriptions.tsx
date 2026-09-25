// === Module 14039: subscriptions ===

// Module 14039 (subscriptions)
import _modDef12 from "module_12" /* 12 */;
import RPCErrorDefault from "RPCError" /* 8762 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function removePendingSubscription(arg0, arg1) {
  value = weakMap.get(arg0);
  if (null != value) {
    const index = value.indexOf(arg1);
    if (-1 !== index) {
      value.splice(index, 1);
    }
    if (0 === value.length) {
      weakMap.delete(arg0);
    }
  }
}
const Constants = fn(1074);
({ AnalyticEvents: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const weakMap = new WeakMap();
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/subscriptions.tsx");

export default {
  [RPCCommands.SUBSCRIBE]: {
    handler(arg0) {
      ({ server: require, socket: importDefault, evt: dependencyMap, args: asyncGeneratorStep } = arg0);
      return (async () => {
        if (constants2 === 2) {
          constants2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
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
            constants2 = 2;
            if (0 === constants) {
              if (arg0 === 1) {
                constants2 = 3;
                throw value;
              } else if (arg0 === 2) {
                constants2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                closure_128_2 = undefined;
                closure_128_3 = undefined;
                let initialSubscriptionPayload;
                closure_128_0 = tmp79;
                if (null == events.events[event]) {
                  const obj4 = { errorCode: constants2.INVALID_EVENT };
                  const _HermesInternal = HermesInternal;
                  const tmp462 = new tmp3(tmp54[3])(obj4, "Invalid event: " + event);
                  throw tmp462;
                } else if (tmp3(tmp54[4])(importDefault.authorization.scopes, tmp79.scope)) {
                  const obj5 = { event, scope: null, application_id: null, socket_scope: null };
                  if (typeof tmp79.scope === "object") {
                    const _JSON = JSON;
                    let scope = JSON.stringify(tmp79.scope);
                  } else {
                    scope = tmp79.scope;
                  }
                  obj5.scope = scope;
                  obj5.application_id = importDefault.application.id;
                  obj5.socket_scope = importDefault.authorization.scopes.toString();
                  tmp3(tmp54[5]).track(constants.RPC_SUBSCRIPTION_REQUESTED, obj5);
                  closure_128_1 = (function addPendingSubscription(importDefault, evt, args) {
                    const obj = { evt, args, cancelled: false };
                    value = closure_1_6.get(importDefault);
                    if (null == value) {
                      const items = [obj];
                      const result = closure_1_6.set(importDefault, items);
                    } else {
                      value.push(obj);
                    }
                    return obj;
                  })(importDefault, event, asyncGeneratorStep);
                  c3 = 1;
                  if (null != tmp79.validation) {
                    constants = 2;
                    constants2 = 1;
                    const obj7 = { value: events.getJoi(), done: false };
                    return obj7;
                  }
                  const tmp83Result = tmp3(tmp54[5]);
                } else {
                  const obj8 = { errorCode: constants2.INVALID_PERMISSIONS };
                  const tmp22 = new tmp3(tmp54[3])(obj8, "Not authenticated or invalid scope");
                  throw tmp22;
                }
              }
            } else if (1 === tmp8) {
              c3 = 0;
              closure_128_5 = tmp54;
              removePendingSubscription(closure_129_1, closure_128_1);
              throw closure_128_5;
            } else if (arg0 === 1) {
              constants2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              constants2 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              closure_128_2 = value;
              if (null != closure_128_2.validate(closure_129_3, closure_128_0.validation(closure_128_2), { convert: false }).error) {
                const obj9 = { errorCode: constants2.INVALID_PAYLOAD };
                const tmp76 = new tmp3(tmp54[3])(obj9, "Invalid subscription parameters provided");
                throw tmp76;
              }
            }
            const obj10 = { args: closure_129_3, socket: closure_129_1 };
            closure_128_3 = closure_128_0.handler(obj10);
            initialSubscriptionPayload = tmp5(tmp54[6]).getInitialSubscriptionPayload(closure_129_1, closure_129_2, closure_129_3);
            const _setImmediate = setImmediate;
            setImmediate(() => {
              value = weakMap.get(id);
              if (null != value) {
                const index = value.indexOf(cancelled);
                if (-1 !== index) {
                  value.splice(index, 1);
                }
                if (0 === value.length) {
                  weakMap.delete(id);
                }
              }
              if (!cancelled.cancelled) {
                closure_0.addSubscription(id, closure_2, c3, closure_1_3);
                if (null != constants) {
                  const result = closure_0.dispatchToSubscriptions(closure_2, (socket) => socket.socket.id === id.id, constants);
                }
              }
            });
            const obj11 = { evt: closure_129_2 };
            c3 = 0;
            constants2 = 3;
            const obj12 = { value: obj11, done: true };
            return obj12;
          } catch (tmp54) {
            if (tmp4 === c3) {
              constants2 = tmp2;
              throw tmp54;
            } else {
              constants = tmp;
            }
          }
        }
      })();
    }
  },
  [RPCCommands.UNSUBSCRIBE]: {
    handler(arg0) {
      ({ server, socket, evt, args } = arg0);
      if (null == server.events[evt]) {
        const obj2 = { errorCode: constants.INVALID_EVENT };
        const _HermesInternal = HermesInternal;
        const tmp52 = new RPCErrorDefault(obj2, "Invalid event: " + evt);
        throw tmp52;
      } else {
        (function cancelPendingSubscriptions(socket, evt, args) {
          value = weakMap.get(socket);
          if (null != value) {
            const iter = value[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp6 = nextResult;
              let isEqualResult = nextResult.evt === evt;
              if (isEqualResult) {
                let obj = _modDef12;
                isEqualResult = obj.isEqual(tmp6.args, args);
              }
              if (isEqualResult) {
                tmp6.cancelled = true;
              }
              continue;
            }
          }
        })(socket, evt, args);
        server.removeSubscription(socket, evt, args);
        let obj = { evt };
        return obj;
      }
    }
  }
};