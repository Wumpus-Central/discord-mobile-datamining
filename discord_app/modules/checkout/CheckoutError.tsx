import { RevenueError } from "prototype";

const prototype = function CheckoutError(arg0) {
  tmp = new tmp(arg0, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp.name = "FatalCheckoutError";
  return tmp;
}.prototype;
class prototype extends RevenueError {
}
const result = require("set").fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export const CheckoutError = prototype;