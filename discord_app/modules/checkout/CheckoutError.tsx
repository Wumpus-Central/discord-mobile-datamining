// discord_app/modules/checkout/CheckoutError.tsx
import set from "../../../_runtime/00002_set.js";
import prototype2 from "../revenue_components/errors/RevenueError.tsx";

const RevenueError = prototype2.RevenueError;
const prototype = function CheckoutError(arg0) {
  tmp = new tmp(arg0, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp.name = "FatalCheckoutError";
  return tmp;
}.prototype;
class prototype extends RevenueError {}
const result = set.fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export const CheckoutError = prototype;
