// discord_app/modules/rpc/server/commands/store.tsx
import EntitlementActionCreatorsAll from "../../../../actions/EntitlementActionCreators.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import validateTransportType from "../../helpers/validateTransportType.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function getSubscriptionSkusViaListings() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _getSubscriptionSkusViaListings() {
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  closure_130_1 = importDefault;
  let found = importDefault.filter((type) => type.type === constants.SUBSCRIPTION_GROUP);
  closure_130_2 = await Promise.all(
    found.map(
      (() => {
        closure_0 = closure_1_4(function* (arg0) {
          yield closure_0(closure_2_3[3]).fetchAllSubscriptionListingsDataForApplication(closure_0, closure_0.id);
          return arg1;
        });
        return function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
      })(),
    ),
  );
  closure_130_3 = [];
  let item = closure_130_2.forEach((subscription_listings) => {
    if (null == subscription_listings) {
      return null;
    } else {
      const prop = subscription_listings.subscription_listings;
      if (null == prop) {
        return null;
      } else {
        const items = [];
        let item = prop.forEach((subscription_plans) => {
          closure_0 = subscription_plans;
          subscription_plans = subscription_plans.subscription_plans;
          const item = subscription_plans.forEach((price) => {
            if (price != null) {
              price = price.price;
            }
            const found = closure_3_1.find((id) => id.id === price.sku_id);
            if (null != found) {
              let obj = {
                id: price.sku_id,
                name: null,
                type: null,
                price: null,
                application_id: null,
                flags: null,
                release_date: null,
              };
              ({ name: obj.name, type: obj.type } = found);
              obj = { amount: price, currency: constants.USD };
              obj.price = obj;
              ({ application_id: obj.application_id, sku_flags: obj.flags } = price);
              let release_date = found.release_date;
              if (release_date == null) {
                release_date = null;
              }
              obj.release_date = release_date;
              items.push(obj);
            }
          });
        });
        let found = items.filter((price) => {
          price = undefined;
          if (price != null) {
            price = price.price;
          }
          return null != price;
        });
        const item1 = found.forEach((item) => closure_1_3.push(item));
      }
    }
  });
  return closure_130_3;
};
function getSkusHandler() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _getSkusHandler(arg0) {
  let socket = arg0;
  c6 = 0;
  c7 = 0;
  let iter = (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp2;
            closure_4 = tmp5;
            let socket2;
            socket2 = socket.socket;
            let id;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            const result = closure_133_0(closure_133_3[4]).validateTransportType(socket2.transport);
            id = socket2.application.id;
            if (null == id) {
              const obj2 = { errorCode: closure_133_6.INVALID_COMMAND };
              const tmp32 = new closure_133_1(closure_133_3[5])(obj2, "No application.");
              throw tmp32;
            } else {
              if (obj18.isTestModeForApplication(id)) {
                let tmp64Result = tmp64(tmp65[7]);
                c6 = 2;
                c7 = 1;
                const obj3 = { value: tmp64Result.fetchTestSKUsForApplication(id, false), done: false };
                return obj3;
              } else {
                tmp64Result = tmp64(tmp65[8]);
                c6 = 3;
                c7 = 1;
                const obj4 = { value: tmp64Result.fetchAllStoreListingsForApplication(id), done: false };
                return obj4;
              }
              obj18 = closure_133_0(closure_133_3[6]);
            }
            const obj17 = closure_133_0(closure_133_3[4]);
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_132_2 = value;
            c6 = 4;
            c7 = 1;
            const obj6 = { value: closure_133_8(id, closure_132_2), done: false };
            return obj6;
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_132_4 = value;
            closure_2 = 0;
            const found = closure_132_4.filter((sku) => sku.sku.type !== constants.SUBSCRIPTION_GROUP);
            const mapped = found.map((sku) => sku.sku);
            items = [];
            closure_2 = HermesBuiltin.arraySpread(
              mapped.filter((price) => null != price.price),
              closure_2,
            );
            c6 = 5;
            c7 = 1;
            const obj8 = {
              value: closure_133_8(
                id,
                closure_132_4.map((sku) => sku.sku),
              ),
              done: false,
            };
            return obj8;
          }
        } else if (4 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_132_3 = value;
            closure_1 = 0;
            const items1 = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(
              closure_132_2.filter((price) => null != price.price),
              closure_1,
            );
            closure_1 = arraySpreadResult;
            closure_1 = HermesBuiltin.arraySpread(closure_132_3, arraySpreadResult);
            c7 = 3;
            const obj10 = { value: items1, done: true };
            return obj10;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_2 = HermesBuiltin.arraySpread(value, closure_2);
          c7 = 3;
          obj = { value: items, done: true };
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
};
function getEntitlementsHandler(socket) {
  socket = socket.socket;
  let obj = validateTransportType;
  const result = obj.validateTransportType(socket.transport);
  const id = socket.application.id;
  if (null == id) {
    obj = { errorCode: constants.INVALID_COMMAND };
    const tmp9 = new RPCErrorDefault(obj, "No application.");
    throw tmp9;
  } else {
    return EntitlementActionCreatorsAll.fetchUserEntitlementsForApplication(id);
  }
}
let Constants = fn(4465);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1074);
({ CurrencyCodes: hasOwnProperty, RPCCommands, RPCErrors: metroRequire, SKUTypes: closure_7 } = Constants);
let items = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let items1 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let obj = {
  [RPC_SCOPE_CONFIG.ANY]: items2,
  handler(arg0) {
    closure_0 = arg0;
    return (async () => {
      value = {};
      value.skus = await closure_1_10(value);
      return value;
    })();
  },
};
items2 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj = {
  [RPC_SCOPE_CONFIG.ANY]: items3,
  handler(arg0) {
    closure_0 = arg0;
    return (async () => {
      value = {};
      value.entitlements = await closure_1_12(value);
      return value;
    })();
  },
};
items3 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/store.tsx");

export default {
  [RPCCommands.GET_SKUS]: { [RPC_SCOPE_CONFIG.ANY]: items, handler: getSkusHandler },
  [RPCCommands.GET_ENTITLEMENTS]: { [RPC_SCOPE_CONFIG.ANY]: items1, handler: getEntitlementsHandler },
  [RPCCommands.GET_SKUS_EMBEDDED]: obj,
  [RPCCommands.GET_ENTITLEMENTS_EMBEDDED]: obj,
};
