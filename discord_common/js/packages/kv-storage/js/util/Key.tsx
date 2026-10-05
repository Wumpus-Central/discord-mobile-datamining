// === Module 2084: Key ===

// Module 2084 (Key)
import TableId from "TableId" /* 2085 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/util/Key.tsx");

export const combineKey = function combineKey(prefix, key) {
  let items1;
  if (Array.isArray(key)) {
    const items = [];
    HermesBuiltin.arraySpread(items, key, HermesBuiltin.arraySpread(items, prefix, 0));
    items1 = items;
  } else {
    items1 = [];
    items1[HermesBuiltin.arraySpread(items1, prefix, 0)] = key;
  }
  if (items1.length >= 1) {
    if (items1.length <= TableId.MAXIMUM_KEY_BITS) {
      return items1;
    }
  }
  const error = new Error("combination results in an invalid key that has " + items1.length + " elements: " + JSON.stringify(items1));
  throw error;
};
export const combineKeyPrefix = function combineKeyPrefix(prefix, items) {
  let items1;
  if (Array.isArray(items)) {
    items = [];
    HermesBuiltin.arraySpread(items, items, HermesBuiltin.arraySpread(items, prefix, 0));
    items1 = items;
  } else {
    items1 = [];
    items1[HermesBuiltin.arraySpread(items1, prefix, 0)] = items;
  }
  if (items1.length <= TableId.MAXIMUM_KEY_BITS) {
    return items1;
  } else {
    const _Error = Error;
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("combination results in an invalid prefix key that has " + items1.length + " elements: " + JSON.stringify(items1));
    throw error;
  }
};