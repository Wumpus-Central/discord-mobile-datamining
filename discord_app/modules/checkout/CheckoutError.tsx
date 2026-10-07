// discord_app/modules/checkout/CheckoutError.tsx
import RevenueError2 from "../revenue_components/errors/RevenueError.tsx";
import size from "../../../_runtime/metro/00002__.js";

const RevenueError = RevenueError2.RevenueError;
const prototype = function CheckoutError(arg0) {
  const tmp2 = new tmp(arg0, new.target);
  tmp2.name = "FatalCheckoutError";
  return tmp2;
}.prototype;
class prototype extends RevenueError {}
const result = size.fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export const CheckoutError = prototype;
