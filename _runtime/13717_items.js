// _runtime/13717_items.js
import { call } from "13696_call.js";
import { 13678__ } from "metro/13678__.js";
import { 13718__ } from "metro/13718__.js";
let closure_2 = require("call")([].push);

export default (arg0, arg1) => {
  const tmp = 13678__(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp11 = key10010;
    let tmp12 = require;
    let tmp13 = dependencyMap;
    let tmp14 = call;
    let tmp14Result = tmp14(13718__, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(13696)(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp3 = callback;
      let tmp4 = callback(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let tmp7 = arg1[num];
    let tmp8 = num;
    if (call(tmp, tmp7)) {
      let tmp5Result = tmp5(13719);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp9 = callback;
        let tmp10 = callback(items, tmp7);
      }
    }
  }
  return items;
};