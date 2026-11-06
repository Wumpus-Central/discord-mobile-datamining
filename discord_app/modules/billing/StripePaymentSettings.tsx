// discord_app/modules/billing/StripePaymentSettings.tsx
import checkEnv from "../../utils/checkEnv.tsx";
import size from "../../../_runtime/metro/00002__.js";

let prop;
if (typeof window !== "undefined") {
  const _window = window;
  prop = window.GLOBAL_ENV.STRIPE_KEYS_BY_MERCHANT_ACCOUNT_ID;
}
const result = size.fileFinishedImporting("modules/billing/StripePaymentSettings.tsx");

export const StripePaymentSettings = { KEYS_BY_MERCHANT_ACCOUNT_ID: prop };
