// discord_app/modules/rpc/server/commands/store.tsx
import prototype from "prototype";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { validateTransportType } from "../../helpers/validateTransportType.tsx";
import { prototype } from "../../RPCError.tsx";

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let c5;
let closure_6;
let error;
const require = arg1;
function getSubscriptionSkusViaListings() {
  const self = this;
  const apply = _getSubscriptionSkusViaListings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getSubscriptionSkusViaListings() {
  let self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, arg1) {
      let closure_2 = tmp2;
      let found = closure_1.filter((type) => type.type === constants.SUBSCRIPTION_GROUP);
      closure_2 = yield Promise.all(found.map((() => {
        let closure_0 = v3((arg0) => {
          let closure_0 = arg0;
          let c2 = 0;
          let c1 = 0;
          return (/* F120784 */ function*() { ... })();
        });
        return function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
      })()));
      let item = closure_2.forEach((subscription_listings) => {
        if (null == subscription_listings) {
          return null;
        } else {
          const prop = subscription_listings.subscription_listings;
          if (null == prop) {
            return null;
          } else {
            const items = [];
            let item = prop.forEach((subscription_plans) => {
              let closure_0 = subscription_plans;
              subscription_plans = subscription_plans.subscription_plans;
              const item = subscription_plans.forEach(() => { ... });
            });
            let found = items.filter((price) => {
              price = undefined;
              if (price != null) {
                price = price.price;
              }
              return null != price;
            });
            const item1 = found.forEach((arg0) => arr.push(arg0));
          }
        }
      });
      return closure_3;
    })();
  });
  const _getSubscriptionSkusViaListings = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getSkusHandler() {
  const self = this;
  const apply = _getSkusHandler.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getSkusHandler() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_5 = tmp2;
              let prototype = tmp5;
              let socket;
              socket = socket.socket;
              let callback;
              let closure_2;
              let dependencyMap;
              prototype = undefined;
              constants = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const result = socket(13864).validateTransportType(socket.transport);
              callback = socket.application.id;
              if (null == callback) {
                const obj2 = { errorCode: null };
                obj2[0] = constants.INVALID_COMMAND;
                const tmp32 = new callback(8752)(obj2, "No application.");
                throw tmp32;
              } else {
                if (obj18.isTestModeForApplication(callback)) {
                  let tmp65Result = tmp65(7869);
                  constants = 2;
                  c7 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = tmp65Result.fetchTestSKUsForApplication(callback, false);
                  return obj3;
                } else {
                  tmp65Result = tmp65(13865);
                  constants = 3;
                  c7 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = tmp65Result.fetchAllStoreListingsForApplication(callback);
                  return obj4;
                }
                obj18 = socket(7871);
              }
              const obj17 = socket(13864);
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              closure_2 = arg1;
              constants = 4;
              c7 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = callback2(callback, closure_2);
              return obj6;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              prototype = arg1;
              closure_2 = 0;
              const found = prototype.filter((sku) => sku.sku.type !== constants.SUBSCRIPTION_GROUP);
              const mapped = found.map((sku) => sku.sku);
              const items = [];
              dependencyMap = items;
              closure_2 = HermesBuiltin.arraySpread(mapped.filter((price) => null != price.price), closure_2);
              constants = 5;
              c7 = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = callback2(callback, prototype.map((sku) => sku.sku));
              return obj8;
            }
          } else if (4 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = arg1;
              return obj9;
            } else {
              dependencyMap = arg1;
              callback = 0;
              const items1 = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(closure_2.filter((price) => null != price.price), callback);
              callback = arraySpreadResult;
              callback = HermesBuiltin.arraySpread(dependencyMap, arraySpreadResult);
              c7 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = items1;
              return obj10;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = arg1;
            return obj11;
          } else {
            closure_2 = HermesBuiltin.arraySpread(arg1, closure_2);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = dependencyMap;
            return obj;
          }
        } catch (tmp35) {
          c7 = tmp;
          throw tmp35;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getEntitlementsHandler(socket) {
  socket = socket.socket;
  let obj = validateTransportType;
  const result = obj.validateTransportType(socket.transport);
  const id = socket.application.id;
  if (null == id) {
    obj = { errorCode: null };
    obj[0] = constants.INVALID_COMMAND;
    const tmp9 = new prototype(obj, "No application.");
    throw tmp9;
  } else {
    return importAll(5358).fetchUserEntitlementsForApplication(id);
  }
}
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ CurrencyCodes: c5, RPCCommands, RPCErrors: closure_6, SKUTypes: error } = ME);
let items = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let items1 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let obj = {
  [RPC_SCOPE_CONFIG.ANY]: items2,
  handler(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      let closure_0 = {};
      closure_0.skus = yield outer1_10(outer1_0);
      return closure_0;
    })();
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj = {
  [RPC_SCOPE_CONFIG.ANY]: items3,
  handler(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      let closure_0 = {};
      closure_0.entitlements = yield outer1_12(outer1_0);
      return closure_0;
    })();
  }
};
items3 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let result = require("ME").fileFinishedImporting("modules/rpc/server/commands/store.tsx");

export default { [RPCCommands.GET_SKUS]: { [RPC_SCOPE_CONFIG.ANY]: items, handler: getSkusHandler }, [RPCCommands.GET_ENTITLEMENTS]: { [RPC_SCOPE_CONFIG.ANY]: items1, handler: getEntitlementsHandler }, [RPCCommands.GET_SKUS_EMBEDDED]: obj, [RPCCommands.GET_ENTITLEMENTS_EMBEDDED]: obj };