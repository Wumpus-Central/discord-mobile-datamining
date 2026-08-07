// _runtime/04569_ToString.js
import { 00541__ } from "metro/00541__.js";
let closure_2 = require("getEvalledConstructor")("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new 00541__("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return callback(arg0);
  }
};