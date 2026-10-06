// === Module 10806: AndroidPurchaseState ===

// Module 10806 (AndroidPurchaseState)

export const AndroidPurchaseState = { purchased: 0, [0]: "purchased", canceled: 1, [1]: "canceled", pending: 2, [2]: "pending" };
export const AndroidPurchaseType = { test: 0, [0]: "test", promo: 1, [1]: "promo", rewarded: 2, [2]: "rewarded" };
export const AndroidConsumptionState = { yet: 0, [0]: "yet", consumed: 1, [1]: "consumed" };
export const AndroidAcknowledgementState = { yet: 0, [0]: "yet", acknowledged: 1, [1]: "acknowledged" };
export const FeatureType = { IN_APP_MESSAGING: "IN_APP_MESSAGING", PRICE_CHANGE_CONFIRMATION: "PRICE_CHANGE_CONFIRMATION", PRODUCT_DETAILS: "PRODUCT_DETAILS", SUBSCRIPTIONS: "SUBSCRIPTIONS", SUBSCRIPTIONS_UPDATE: "SUBSCRIPTIONS_UPDATE" };
export const singleProductAndroidMap = (oneTimePurchaseOfferDetails) => {
  let formattedPrice;
  let formattedPrice1;
  let priceCurrencyCode;
  const obj = { price: formattedPrice, localizedPrice: formattedPrice1, currency: priceCurrencyCode };
  const merged = Object.assign(oneTimePurchaseOfferDetails);
  oneTimePurchaseOfferDetails = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  formattedPrice = undefined;
  if (oneTimePurchaseOfferDetails != null) {
    formattedPrice = oneTimePurchaseOfferDetails.formattedPrice;
  }
  if (formattedPrice == null) {
    formattedPrice = oneTimePurchaseOfferDetails.price;
  }
  const oneTimePurchaseOfferDetails2 = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  formattedPrice1 = undefined;
  if (oneTimePurchaseOfferDetails2 != null) {
    formattedPrice1 = oneTimePurchaseOfferDetails2.formattedPrice;
  }
  if (formattedPrice1 == null) {
    formattedPrice1 = oneTimePurchaseOfferDetails.price;
  }
  const oneTimePurchaseOfferDetails3 = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  priceCurrencyCode = undefined;
  if (oneTimePurchaseOfferDetails3 != null) {
    priceCurrencyCode = oneTimePurchaseOfferDetails3.priceCurrencyCode;
  }
  if (priceCurrencyCode == null) {
    priceCurrencyCode = oneTimePurchaseOfferDetails.currency;
  }
  return obj;
};