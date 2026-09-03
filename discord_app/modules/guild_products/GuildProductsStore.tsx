// === Module 13597: secondaryIndexMap ===

// Module 13597 (secondaryIndexMap)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 586 */;
import setDefault from "set" /* 684 */;
import dispatcherDefault from "dispatcher" /* 706 */;

let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let closure_3 = {};
let closure_4 = {};
let closure_5 = {};
let closure_6 = 10 * setDefault.Millis.MINUTE;
const secondaryIndexMap = new require("version").SecondaryIndexMap((guild_id) => {
  const items = ["guild:" + guild_id.guild_id];
  if (guild_id.published) {
    const _HermesInternal = HermesInternal;
    items.push("guild:" + guild_id.guild_id + ":published");
  }
  return items;
}, (id) => {
  const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(id.id);
  if (id.published) {
    let diff = -extractTimestampResult;
  } else {
    diff = 1000000000000 - extractTimestampResult;
  }
  return diff;
});
let closure_8 = [];
const Store = initializeDefault.Store;
class GuildProductsStore extends Store {
}
const prototype = GuildProductsStore.prototype;
prototype["getGuildProductsForGuildFetchState"] = function getGuildProductsForGuildFetchState(arg0) {
  let NOT_FETCHED = table[arg0];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getGuildProduct"] = function getGuildProduct(arg0) {
  return secondaryIndexMap.get(arg0);
};
prototype["getGuildProductsForGuild"] = function getGuildProductsForGuild(arg0, arg1) {
  if (null == arg0) {
    let values = closure_8;
  } else {
    const _HermesInternal = HermesInternal;
    if (tmp) {
      let combined = concat(arg0, ":published");
    } else {
      combined = concat(arg0);
    }
    values = secondaryIndexMap.values(combined);
  }
  return values;
};
prototype["getGuildProductFetchState"] = function getGuildProductFetchState(arg0) {
  let NOT_FETCHED = table2[arg0];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["isGuildProductsCacheExpired"] = function isGuildProductsCacheExpired(arg0) {
  let num = table3[arg0];
  const timestamp = Date.now();
  if (num == null) {
    num = 0;
  }
  return timestamp - num > closure_6;
};
GuildProductsStore.displayName = "GuildProductsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    secondaryIndexMap.clear();
    closure_3 = {};
    closure_4 = {};
    closure_5 = {};
  },
  GUILD_PRODUCTS_FETCH: function handleFetchGuildProducts(guildId) {
    guildId = guildId.guildId;
    closure_3[guildId] = obj.FETCHING;
    const items = [...secondaryIndexMap.values("guild:" + guildId)];
    const item = items.forEach((id) => {
      set.delete(id.id);
    });
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function handleFetchProductsSuccess(arg0) {
    ({ guildId, products } = arg0);
    closure_3[guildId] = obj.FETCHED;
    closure_5[guildId] = Date.now();
    const item = products.forEach((id) => {
      const result = closure_7.set(id.id, id);
      closure_4[id.id] = constants.FETCHED;
    });
  },
  GUILD_PRODUCTS_FETCH_FAILURE: function handleFetchProductsFailure(guildId) {
    closure_3[guildId.guildId] = obj.FETCHED;
  },
  GUILD_PRODUCT_CREATE: function handleCreateProduct(product) {
    product = product.product;
    const result = secondaryIndexMap.set(product.id, product);
  },
  GUILD_PRODUCT_UPDATE: function handleUpdateProduct(product) {
    product = product.product;
    const result = secondaryIndexMap.set(product.id, product);
  },
  GUILD_PRODUCT_DELETE: function handleDeleteProduct(productId) {
    secondaryIndexMap.delete(productId.productId);
  },
  GUILD_PRODUCT_FETCH: function handleFetchGuildProduct(productId) {
    closure_4[productId.productId] = obj.FETCHING;
  },
  GUILD_PRODUCT_FETCH_SUCCESS: function handleFetchProductSuccess(product) {
    product = product.product;
    closure_4[product.id] = obj.FETCHED;
    const result = secondaryIndexMap.set(product.id, product);
  },
  GUILD_PRODUCT_FETCH_FAILURE: function handleFetchProductFailure(productId) {
    productId = productId.productId;
    closure_4[productId] = obj.FETCHED;
    if (404 === productId.error.status) {
      secondaryIndexMap.delete(productId);
    }
  }
};
const guildProductsStore = new GuildProductsStore(dispatcherDefault, obj);
let result = require("set").fileFinishedImporting("modules/guild_products/GuildProductsStore.tsx");

export default guildProductsStore;
export const FetchState = obj;