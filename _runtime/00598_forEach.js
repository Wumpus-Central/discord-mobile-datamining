// _runtime/00598_forEach.js
import { castFunction } from "00633_castFunction.js";
import { 00599__ } from "metro/00599__.js";

export default function forEach(arg0, arg1) {
  if (00599__(arg0)) {
    let tmpResult = tmp(600);
  } else {
    tmpResult = tmp(601);
  }
  return tmpResult(arg0, castFunction(arg1));
};