// discord_common/js/packages/kv-storage/js/util/Key.tsx
import { TableId } from "../types/index.tsx";
const result = require("set").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/util/Key.tsx");

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
    if (items1.length <= TableId /* TableId */.MAXIMUM_KEY_BITS) {
      return items1;
    }
  }
  const error = new Error("combination results in an invalid key that has " + items1.length + " elements: " + JSON.stringify(items1));
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
  if (items1.length <= TableId /* TableId */.MAXIMUM_KEY_BITS) {
    return items1;
  } else {
    const _Error = Error;
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const error = new Error("combination results in an invalid prefix key that has " + items1.length + " elements: " + JSON.stringify(items1));
    throw error;
  }
};