// === Module 14342: subscriptions ===

// Module 14342 (subscriptions)
import _modDef12 from "module_12" /* 12 */;
import RPCErrorDefault from "RPCError" /* 9026 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let constants;

let RPCCommands;
let closure_4;
let hasOwnProperty;
function removePendingSubscription(arg0, arg1) {
  const value = weakMap.get(arg0);
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
let _asyncToGenerator = _asyncToGenerator_mod;
({ AnalyticEvents: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const weakMap = new WeakMap();
let obj = {
  handler(arg0) {
    let event;
    let events;
    ({ server: require, socket: importDefault, evt: dependencyMap, args: _asyncToGenerator } = arg0);
    return (async function() {
      let closure_1;
      let closure_2;
      let constants2;
      let scope;
      let str2;
      let value;
      function addPendingSubscription(importDefault, evt, args) {
        const obj = { evt, args, cancelled: false };
        const value = closure_1_6.get(importDefault);
        if (null == value) {
          const items = [obj];
          const result = closure_1_6.set(importDefault, items);
        } else {
          value.push(obj);
        }
        return obj;
      }
      if (constants2 === 2) {
        constants2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp45;
        let c3;
        try {
          let tmp;
          let _setImmediate;
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
              tmp = undefined;
              tmp45 = undefined;
              _asyncToGenerator = undefined;
              let initialSubscriptionPayload;
              _setImmediate = tmp67;
              if (null == require.events[dependencyMap]) {
                _setImmediate = tmp(tmp45[3]);
                const obj4 = { errorCode: constants2.INVALID_EVENT };
                const _HermesInternal = HermesInternal;
                const self3 = this;
                const self4 = this;
                const _setImmediate1 = new _setImmediate(obj4, "Invalid event: " + dependencyMap);
                throw _setImmediate1;
              } else if (tmp(tmp45[4])(importDefault.authorization.scopes, require.events[dependencyMap].scope)) {
                const obj6 = { event: dependencyMap, scope, application_id: importDefault.application.id, socket_scope: str2.toString() };
                const track = tmp(tmp45[5]).track;
                const RPC_SUBSCRIPTION_REQUESTED = constants.RPC_SUBSCRIPTION_REQUESTED;
                const tmp71Result = tmp(tmp45[5]);
                if (typeof require.events[dependencyMap].scope === "object") {
                  const _JSON = JSON;
                  scope = JSON.stringify(tmp67.scope);
                } else {
                  scope = tmp67.scope;
                }
                str2 = importDefault.authorization.scopes;
                track(RPC_SUBSCRIPTION_REQUESTED, obj6);
                tmp = addPendingSubscription(importDefault, dependencyMap, _asyncToGenerator);
                c3 = 1;
                if (null != require.events[dependencyMap].validation) {
                  constants = 2;
                  constants2 = 1;
                  const obj7 = { value: require.getJoi(), done: false };
                  return obj7;
                }
              } else {
                const obj8 = { errorCode: constants2.INVALID_PERMISSIONS };
                const self = this;
                const self2 = this;
                const tmp15 = new tmp(tmp45[3])(obj8, "Not authenticated or invalid scope");
                throw tmp15;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            let closure_5 = tmp45;
            _setImmediate = removePendingSubscription;
            removePendingSubscription(closure_129_1, tmp);
            throw closure_5;
          } else if (arg0 === 1) {
            constants2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            constants2 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            tmp45 = value;
            if (null != tmp45.validate(closure_129_3, _setImmediate.validation(tmp45), { convert: false }).error) {
              const obj9 = { errorCode: constants2.INVALID_PAYLOAD };
              const self5 = this;
              const self6 = this;
              const tmp64 = new tmp(tmp45[3])(obj9, "Invalid subscription parameters provided");
              throw tmp64;
            }
          }
          const obj10 = { args: closure_129_3, socket: closure_129_1 };
          _asyncToGenerator = _setImmediate.handler(obj10);
          const obj5 = _setImmediate(tmp45[6]);
          initialSubscriptionPayload = obj5.getInitialSubscriptionPayload(closure_129_1, closure_129_2, closure_129_3);
          _setImmediate = setImmediate;
          setImmediate(() => {
            const value = weakMap.get(id);
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
              _setImmediate.addSubscription(id, event, c3, closure_1_3);
              if (null != constants) {
                const result = _setImmediate.dispatchToSubscriptions(event, (socket) => socket.socket.id === id.id, constants);
              }
            }
          });
          const obj11 = { evt: closure_129_2 };
          c3 = 0;
          constants2 = 3;
          const obj12 = { value: obj11, done: true };
          return obj12;
        } catch (tmp45) {
          if (0 === c3) {
            constants2 = 3;
            throw tmp45;
          } else {
            constants = 1;
          }
        }
      }
    })();
  }
};
let obj2 = {
  handler(arg0) {
    let args;
    let evt;
    let server;
    let socket;
    function cancelPendingSubscriptions(socket, evt, args) {
      const value = weakMap.get(socket);
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
    }
    ({ server, socket, evt, args } = arg0);
    if (null == server.events[evt]) {
      const _HermesInternal = HermesInternal;
      const obj2 = { errorCode: hasOwnProperty.INVALID_EVENT };
      const self = this;
      const self2 = this;
      const tmp5 = RPCErrorDefault;
      const tmp52 = new tmp5(obj2, "Invalid event: " + evt);
      let tmp10 = tmp52;
      throw tmp52;
    } else {
      cancelPendingSubscriptions(socket, evt, args);
      server.removeSubscription(socket, evt, args);
      let obj = { evt };
      return obj;
    }
  }
};
let result = size.fileFinishedImporting("modules/rpc/server/commands/subscriptions.tsx");

export default { [RPCCommands.SUBSCRIBE]: obj, [RPCCommands.UNSUBSCRIBE]: obj2 };