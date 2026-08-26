// === Module 7639: singleProductAndroidMap ===

// Module 7639 (singleProductAndroidMap)
arg5.AndroidPurchaseState = { purchased: 0, [0]: "purchased", canceled: 1, [1]: "canceled", pending: 2, [2]: "pending" };
arg5.AndroidPurchaseType = { test: 0, [0]: "test", promo: 1, [1]: "promo", rewarded: 2, [2]: "rewarded" };
arg5.AndroidConsumptionState = { yet: 0, [0]: "yet", consumed: 1, [1]: "consumed" };
arg5.AndroidAcknowledgementState = { yet: 0, [0]: "yet", acknowledged: 1, [1]: "acknowledged" };
arg5.FeatureType = { IN_APP_MESSAGING: "IN_APP_MESSAGING", PRICE_CHANGE_CONFIRMATION: "PRICE_CHANGE_CONFIRMATION", PRODUCT_DETAILS: "PRODUCT_DETAILS", SUBSCRIPTIONS: "SUBSCRIPTIONS", SUBSCRIPTIONS_UPDATE: "SUBSCRIPTIONS_UPDATE" };
arg5.singleProductAndroidMap = (oneTimePurchaseOfferDetails) => {
  const obj = {};
  const merged = Object.assign(oneTimePurchaseOfferDetails);
  oneTimePurchaseOfferDetails = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  let formattedPrice;
  if (oneTimePurchaseOfferDetails != null) {
    formattedPrice = oneTimePurchaseOfferDetails.formattedPrice;
  }
  if (formattedPrice == null) {
    formattedPrice = oneTimePurchaseOfferDetails.price;
  }
  obj.price = formattedPrice;
  const oneTimePurchaseOfferDetails2 = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  let formattedPrice1;
  if (oneTimePurchaseOfferDetails2 != null) {
    formattedPrice1 = oneTimePurchaseOfferDetails2.formattedPrice;
  }
  if (formattedPrice1 == null) {
    formattedPrice1 = oneTimePurchaseOfferDetails.price;
  }
  obj.localizedPrice = formattedPrice1;
  const oneTimePurchaseOfferDetails3 = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  let priceCurrencyCode;
  if (oneTimePurchaseOfferDetails3 != null) {
    priceCurrencyCode = oneTimePurchaseOfferDetails3.priceCurrencyCode;
  }
  if (priceCurrencyCode == null) {
    priceCurrencyCode = oneTimePurchaseOfferDetails.currency;
  }
  obj.currency = priceCurrencyCode;
  return obj;
};