// discord_app/modules/rpc/server/commands/store.tsx
import EntitlementActionCreatorsAll from "../../../../actions/EntitlementActionCreators.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import validateTransportType from "../../helpers/validateTransportType.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function isRPCCompatibleSku(name) {
  return null != name.name && null != name.price;
}
function transformSku(id) {
  const obj = {
    id: id.id,
    name: id.name,
    type: id.type,
    price: id.price,
    application_id: id.application_id,
    flags: id.flags,
    release_date: null,
  };
  let release_date = id.release_date;
  if (release_date == null) {
    release_date = null;
  }
  obj.release_date = release_date;
  return obj;
}
function getSubscriptionSkusViaListings() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _getSubscriptionSkusViaListings() {
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  closure_130_1 = importDefault;
  let found = importDefault.filter((type) => type.type === constants2.SUBSCRIPTION_GROUP);
  await Promise.all(
    found.map(
      (() => {
        closure_0 = closure_1_4(function* (arg0) {
          yield closure_0(closure_2_3[3]).fetchAllSubscriptionListingsDataForApplication(closure_0, closure_0.id);
          return value;
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
  closure_130_2 = value;
  closure_130_3 = [];
  let item = closure_130_2.forEach((subscription_listings) => {
    if (null == subscription_listings) {
      return null;
    } else {
      const prop = subscription_listings.subscription_listings;
      if (null == prop) {
        return null;
      } else {
        let item = prop.forEach((subscription_plans) => {
          closure_0 = subscription_plans;
          subscription_plans = subscription_plans.subscription_plans;
          const item = subscription_plans.forEach((sku_id) => {
            const found = closure_2_1.find((id) => id.id === sku_id.sku_id);
            let name;
            if (found != null) {
              name = found.name;
            }
            if (null != name) {
              const obj = {
                id: sku_id.sku_id,
                name: null,
                type: null,
                price: null,
                application_id: null,
                flags: null,
                release_date: null,
              };
              ({ name: obj.name, type: obj.type } = found);
              const obj2 = { amount: sku_id.price, currency: constants.USD };
              obj.price = obj2;
              ({ application_id: obj.application_id, sku_flags: obj.flags } = sku_id);
              let release_date = found.release_date;
              if (release_date == null) {
                release_date = null;
              }
              obj.release_date = release_date;
              closure_2_3.push(obj);
            }
          });
        });
      }
    }
  });
  return closure_130_3;
};
function getSkusHandler() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _getSkusHandler(arg0) {
  let socket = arg0;
  c5 = 0;
  c6 = 0;
  let iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp2;
            closure_3 = tmp5;
            let socket2;
            socket2 = socket.socket;
            let id;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            closure_131_6 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const result = closure_132_0(closure_132_3[4]).validateTransportType(socket2.transport);
            id = socket2.application.id;
            if (null == id) {
              const obj5 = { errorCode: closure_132_6.INVALID_COMMAND };
              const tmp42 = new closure_132_1(closure_132_3[5])(obj5, "No application.");
              throw tmp42;
            } else {
              if (obj18.isTestModeForApplication(id)) {
                c5 = 2;
                c6 = 1;
                const obj6 = {
                  value: closure_132_2(closure_132_3[7]).fetchTestSKUsForApplication(id, false),
                  done: false,
                };
                return obj6;
              } else {
                c5 = 3;
                c6 = 1;
                const obj7 = {
                  value: closure_132_2(closure_132_3[8]).fetchAllStoreListingsForApplication(id),
                  done: false,
                };
                return obj7;
              }
              obj18 = closure_132_0(closure_132_3[6]);
            }
            const obj17 = closure_132_0(closure_132_3[4]);
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_131_2 = value;
            c5 = 4;
            c6 = 1;
            const obj9 = { value: closure_132_10(id, closure_131_2), done: false };
            return obj9;
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_131_4 = value;
            const found = closure_131_4.filter((sku) => sku.sku.type !== constants.SUBSCRIPTION_GROUP);
            closure_131_5 = found.map((sku) => sku.sku);
            c5 = 5;
            c6 = 1;
            const obj11 = {
              value: closure_132_10(
                id,
                closure_131_4.map((sku) => sku.sku),
              ),
              done: false,
            };
            return obj11;
          }
        } else if (4 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_131_3 = value;
            closure_1 = 0;
            const found1 = closure_131_2.filter(closure_132_8);
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(found1.map(closure_132_9), closure_1);
            closure_1 = arraySpreadResult;
            closure_1 = HermesBuiltin.arraySpread(closure_131_3, arraySpreadResult);
            c6 = 3;
            const obj13 = { value: items, done: true };
            return obj13;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_131_6 = value;
          closure_2 = 0;
          const found2 = closure_131_5.filter(closure_132_8);
          const items1 = [];
          const arraySpreadResult2 = HermesBuiltin.arraySpread(found2.map(closure_132_9), closure_2);
          closure_2 = arraySpreadResult2;
          closure_2 = HermesBuiltin.arraySpread(closure_131_6, arraySpreadResult2);
          c6 = 3;
          const obj = { value: items1, done: true };
          return obj;
        }
      } catch (tmp45) {
        c6 = tmp;
        throw tmp45;
      }
    }
  })();
  iter.next();
  return iter;
};
function getEntitlementsHandler(socket) {
  socket = socket.socket;
  const result = validateTransportType.validateTransportType(socket.transport);
  const id = socket.application.id;
  if (null == id) {
    const obj3 = { errorCode: constants.INVALID_COMMAND };
    const tmp9 = new RPCErrorDefault(obj3, "No application.");
    throw tmp9;
  } else {
    return EntitlementActionCreatorsAll.fetchUserEntitlementsForApplication(id);
  }
}
let Constants = fn(5895);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1087);
({ CurrencyCodes: hasOwnProperty, RPCCommands, RPCErrors: metroRequire, SKUTypes: closure_7 } = Constants);
let obj = { [RPCCommands.GET_SKUS]: obj2, [RPCCommands.GET_ENTITLEMENTS]: obj3 };
obj2 = { scope: null, handler: getSkusHandler };
let items = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj2.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj3 = { scope: null, handler: getEntitlementsHandler };
let items1 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
let CONTEXT_MENU_ICON_NAMES = fn(15503);
let obj5 = {
  scope: null,
  handler(arg0) {
    closure_0 = arg0;
    return (async () => {
      value = {};
      await closure_1_12(value);
      value.skus = value;
      return value;
    })();
  },
};
const items2 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj5.scope = { [RPC_SCOPE_CONFIG.ANY]: items2 };
obj[RPCCommands.GET_SKUS_EMBEDDED] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_SKUS_EMBEDDED, obj5);
CONTEXT_MENU_ICON_NAMES = fn(15503);
let obj7 = {
  scope: null,
  handler(arg0) {
    closure_0 = arg0;
    return (async () => {
      value = {};
      await closure_1_14(value);
      value.entitlements = value;
      return value;
    })();
  },
};
const items3 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj7.scope = { [RPC_SCOPE_CONFIG.ANY]: items3 };
obj[RPCCommands.GET_ENTITLEMENTS_EMBEDDED] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_ENTITLEMENTS_EMBEDDED,
  obj7,
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/store.tsx");

export default obj;
