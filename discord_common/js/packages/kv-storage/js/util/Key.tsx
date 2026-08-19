// === Module 1961: combineKey ===

// Module 1961 (combineKey)
import obj132 from "obj132" /* 2 */;
import TableId from "TableId" /* 1962 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/util/Key.tsx");

export const combineKey = function combineKey(prefix, key) {
  if (Array.isArray(key)) {
    const items = [];
    HermesBuiltin.arraySpread(key, HermesBuiltin.arraySpread(prefix, 0));
    let items1 = items;
  } else {
    items1 = [];
    items1[HermesBuiltin.arraySpread(prefix, 0)] = key;
  }
  if (items1.length >= 1) {
    if (items1.length <= TableId.MAXIMUM_KEY_BITS) {
      return items1;
    }
  }
  error = new Error("combination results in an invalid key that has " + items1.length + " elements: " + JSON.stringify(items1));
  throw error;
};
export const combineKeyPrefix = function combineKeyPrefix(prefix, items) {
  if (Array.isArray(items)) {
    items = [];
    HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(prefix, 0));
    let items1 = items;
  } else {
    items1 = [];
    items1[HermesBuiltin.arraySpread(prefix, 0)] = items;
  }
  if (items1.length <= TableId.MAXIMUM_KEY_BITS) {
    return items1;
  } else {
    const _Error = Error;
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    error = new Error("combination results in an invalid prefix key that has " + items1.length + " elements: " + JSON.stringify(items1));
    throw error;
  }
};