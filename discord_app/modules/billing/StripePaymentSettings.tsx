// === Module 6607: StripePaymentSettings ===

// Module 6607 (StripePaymentSettings)
import checkEnv from "checkEnv" /* 16 */;
import size from "module_2" /* 2 */;

let prop;
if (typeof window !== "undefined") {
  const _window = window;
  prop = window.GLOBAL_ENV.STRIPE_KEYS_BY_MERCHANT_ACCOUNT_ID;
}
const result = size.fileFinishedImporting("modules/billing/StripePaymentSettings.tsx");

export const StripePaymentSettings = { KEYS_BY_MERCHANT_ACCOUNT_ID: prop };