// discord_app/modules/checkout/CheckoutError.tsx
import RevenueError2 from "../revenue_components/errors/RevenueError.tsx";
import size from "../../../_runtime/metro/00002__.js";

const RevenueError = RevenueError2.RevenueError;
class CheckoutError extends RevenueError {
  constructor(arg0) {
    const tmp2 = new tmp(arg0, new.target);
    tmp2.name = "FatalCheckoutError";
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export { CheckoutError };
