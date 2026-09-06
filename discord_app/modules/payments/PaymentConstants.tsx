// === Module 4542: CustomCheckoutFlow ===

// Module 4542 (CustomCheckoutFlow)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/payments/PaymentConstants.tsx");

export const CustomCheckoutFlow = { MOBILE_WEB_REDIRECT_CHECKOUT: "mobile_web_redirect_checkout", META_QUEST_WEB_REDIRECT_CHECKOUT: "meta_quest_web_redirect_checkout", DEV_STORYBOOK_CHECKOUT: "dev_storybook_checkout" };
export const MobileWebRedirectCheckoutDeepLinkActions = { PREMIUM_CHECKOUT_SUCCESS: "premium_checkout_success", PREMIUM_SUBSCRIPTION_UPDATE: "premium_subscription_update", GUILD_BOOST_CHECKOUT_SUCCESS: "guild_boost_checkout_success", DEFAULT: "default" };
export const MobileWebRedirectCheckoutDeepLinkQueryKeys = { FLOW_TYPE: "flow_type", DEEP_LINK_ACTION: "deep_link_action", GUILD_ID: "guild_id" };
export const EUR_TO_HRK_CONVERSION_RATE = 7.5345;
export const OrderStatus = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DRAFT: 1, [1]: "DRAFT", SIGNED: 2, [2]: "SIGNED", DISCARDED: 3, [3]: "DISCARDED", SIGNING_IN_PROGRESS: 4, [4]: "SIGNING_IN_PROGRESS", SIGNING_FAILED: 5, [5]: "SIGNING_FAILED" };
export const ItemPurchaseType = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ONE_TIME: 1, [1]: "ONE_TIME", SUBSCRIPTION: 2, [2]: "SUBSCRIPTION" };