// discord_app/modules/rpc/server/commands/store.tsx
import EntitlementActionCreatorsAll from "../../../../actions/EntitlementActionCreators.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import validateTransportType from "../../helpers/validateTransportType.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants_mod from "../../Constants.tsx";
import Constants_mod2 from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4, closure_5, price, subscription_plans;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let hasOwnProperty;
let items2;
let items3;
let metroImportDefault;
let metroRequire;
function getSubscriptionSkusViaListings() {
  return obj(...arguments);
}
let obj = function _getSubscriptionSkusViaListings() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c4;
    let closure_2;
    let value;
    let closure_1 = arg1;
    if (arg0 === 1) {
      throw value;
    }
    if (arg0 === 2) {
      return value;
    }
    let found = closure_1.filter((type) => type.type === constants.SUBSCRIPTION_GROUP);
    await Promise.all(
      found.map(
        (() => {
          closure_0 = closure_1_4(function* (arg0) {
            let obj3;
            closure_0 = arg0;
            if (c1 === 2) {
              c1 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
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
                c1 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c2 = 1;
                    c1 = 1;
                    const obj5 = {
                      value: obj3.fetchAllSubscriptionListingsDataForApplication(closure_0, closure_0.id),
                      done: false,
                    };
                    obj3 = closure_0(closure_2_3[3]);
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  c1 = 3;
                  obj = { value, done: true };
                  return obj;
                }
              } catch (tmp8) {
                c1 = 3;
                throw tmp8;
              }
            }
          });
          return function () {
            return closure_0(...arguments);
          };
        })(),
      ),
    );
    if (arg0 === 1) {
      throw value;
    }
    if (arg0 === 2) {
      return value;
    }
    const tmp = value;
    value = [];
    let item = tmp.forEach((subscription_listings) => {
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
              let obj2;
              let release_date;
              closure_0 = price;
              if (price != null) {
                price = price.price;
              }
              const found = closure_3_1.find((id) => id.id === sku_id.sku_id);
              if (null != found) {
                obj = {
                  id: price.sku_id,
                  name: null,
                  type: null,
                  price: obj2,
                  application_id: null,
                  flags: null,
                  release_date,
                };
                ({ name: obj.name, type: obj.type } = found);
                obj2 = { amount: price, currency: constants.USD };
                ({ application_id: obj.application_id, sku_flags: obj.flags } = closure_0);
                release_date = found.release_date;
                if (release_date == null) {
                  release_date = null;
                }
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
    return value;
  });
  return obj(...arguments);
};
function getSkusHandler() {
  return obj(...arguments);
}
obj = function _getSkusHandler() {
  obj = _asyncToGenerator(async (arg0) => {
    let socket = arg0;
    let c6 = 0;
    let c7 = 0;
    const iter = (async function (arg0) {
      let tmp61Result;
      let tmp61Result2;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let id;
          let closure_3;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              socket = undefined;
              socket = socket.socket;
              id = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              const obj17 = closure_133_0(closure_133_3[4]);
              const result = obj17.validateTransportType(socket.transport);
              id = socket.application.id;
              if (null == id) {
                const self = this;
                const self2 = this;
                const obj5 = { errorCode: closure_133_6.INVALID_COMMAND };
                const tmp30 = new closure_133_1(closure_133_3[5])(obj5, "No application.");
                throw tmp30;
              } else {
                const obj18 = closure_133_0(closure_133_3[6]);
                if (obj18.isTestModeForApplication(id)) {
                  c6 = 2;
                  c7 = 1;
                  const obj6 = { value: tmp61Result.fetchTestSKUsForApplication(id, false), done: false };
                  tmp61Result = closure_133_2(closure_133_3[7]);
                  return obj6;
                } else {
                  c6 = 3;
                  c7 = 1;
                  const obj7 = { value: tmp61Result2.fetchAllStoreListingsForApplication(id), done: false };
                  tmp61Result2 = closure_133_2(closure_133_3[8]);
                  return obj7;
                }
              }
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              c6 = 4;
              c7 = 1;
              const obj9 = { value: closure_133_8(id, closure_2), done: false };
              return obj9;
            }
          } else if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_4 = value;
              closure_2 = 0;
              const found = closure_4.filter((sku) => sku.sku.type !== constants.SUBSCRIPTION_GROUP);
              const mapped = found.map((sku) => sku.sku);
              items = [];
              closure_2 = HermesBuiltin.arraySpread(
                items,
                mapped.filter((price) => null != price.price),
                closure_2,
              );
              c6 = 5;
              c7 = 1;
              const obj11 = {
                value: closure_133_8(
                  id,
                  closure_4.map((sku) => sku.sku),
                ),
                done: false,
              };
              return obj11;
            }
          } else if (4 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              closure_1 = 0;
              const items1 = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(
                items1,
                closure_2.filter((price) => null != price.price),
                closure_1,
              );
              closure_1 = HermesBuiltin.arraySpread(items1, closure_3, arraySpreadResult);
              c7 = 3;
              return { value: items1, done: true };
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_2 = HermesBuiltin.arraySpread(items, value, closure_2);
            c7 = 3;
            return { value: items, done: true };
          }
        } catch (tmp33) {
          c7 = 3;
          throw tmp33;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function getEntitlementsHandler(socket) {
  socket = socket.socket;
  obj = validateTransportType;
  const result = obj.validateTransportType(socket.transport);
  const id = socket.application.id;
  if (null == id) {
    const self = this;
    const self2 = this;
    const obj3 = { errorCode: metroRequire.INVALID_COMMAND };
    const tmp7 = new RPCErrorDefault(obj3, "No application.");
    throw tmp7;
  } else {
    const obj2 = EntitlementActionCreatorsAll;
    return obj2.fetchUserEntitlementsForApplication(id);
  }
}
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ CurrencyCodes: hasOwnProperty, RPCCommands, RPCErrors: metroRequire, SKUTypes: metroImportDefault } = Constants);
let items = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let items1 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj = {
  [RPC_SCOPE_CONFIG.ANY]: items2,
  handler(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let c2;
      let value;
      value = { skus: value };
      await closure_1_10(value);
      return value;
    })();
  },
};
items2 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let obj2 = {
  [RPC_SCOPE_CONFIG.ANY]: items3,
  handler(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let c2;
      let value;
      value = { entitlements: value };
      await closure_1_12(value);
      return value;
    })();
  },
};
items3 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let result = size.fileFinishedImporting("modules/rpc/server/commands/store.tsx");

export default {
  [RPCCommands.GET_SKUS]: { [RPC_SCOPE_CONFIG.ANY]: items, handler: getSkusHandler },
  [RPCCommands.GET_ENTITLEMENTS]: { [RPC_SCOPE_CONFIG.ANY]: items1, handler: getEntitlementsHandler },
  [RPCCommands.GET_SKUS_EMBEDDED]: obj,
  [RPCCommands.GET_ENTITLEMENTS_EMBEDDED]: obj2,
};
