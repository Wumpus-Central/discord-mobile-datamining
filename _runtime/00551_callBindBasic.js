// _runtime/00551_callBindBasic.js
import { bind } from "00554_bind.js";
import { 00541__ } from "metro/00541__.js";
import { 00552__ } from "metro/00552__.js";
import { 00556__ } from "metro/00556__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = 00552__;
      return tmp4(bind, 00556__, items);
    }
  }
  throw new 00541__("a function is required");
};