// _runtime/10799_productSk2Map.js
import ReplacementModesAndroid from "10787_ReplacementModesAndroid.js";

export const productSk2Map = (displayName) => {
  let currency;
  let description;
  let displayPrice;
  let price;
  const obj = {
    title: displayName.displayName,
    productId: String(displayName.id),
    description,
    type: "iap",
    price: String(price),
    localizedPrice: displayPrice,
    currency,
  };
  ({ description, price, currency, displayPrice } = displayName);
  return obj;
};
export const subscriptionSk2Map = (subscription) => {
  let currency;
  let description;
  let displayName;
  let displayPrice;
  let displayPrice1;
  let formatted;
  let formatted1;
  let id;
  let price;
  let str1;
  let unit;
  let value;
  subscription = subscription.subscription;
  const obj = {
    platform: ReplacementModesAndroid.SubscriptionPlatform.ios,
    title: displayName,
    productId: String(id),
    description,
    type: "subs",
    price: String(price),
    localizedPrice: displayPrice,
    currency,
    subscriptionPeriodNumberIOS: "" + value,
    subscriptionPeriodUnitIOS: formatted,
    introductoryPriceAsAmountIOS: displayPrice1,
    introductoryPricePaymentModeIOS: formatted1,
    introductoryPriceNumberOfPeriodsIOS: str1,
    introductoryPriceSubscriptionPeriodIOS: unit,
  };
  ({ id, description, displayName, price, currency, displayPrice } = subscription);
  value = undefined;
  if (subscription != null) {
    if (subscription.subscriptionPeriod != null) {
      value = iter.value;
    }
  }
  formatted = undefined;
  if (subscription != null) {
    const subscriptionPeriod = subscription.subscriptionPeriod;
    if (subscriptionPeriod != null) {
      const str = subscriptionPeriod.unit;
      formatted = str.toUpperCase();
    }
  }
  displayPrice1 = undefined;
  if (subscription != null) {
    const introductoryOffer = subscription.introductoryOffer;
    if (introductoryOffer != null) {
      displayPrice1 = introductoryOffer.displayPrice;
    }
  }
  formatted1 = undefined;
  if (subscription != null) {
    const introductoryOffer2 = subscription.introductoryOffer;
    if (introductoryOffer2 != null) {
      const str2 = introductoryOffer2.paymentMode;
      formatted1 = str2.toUpperCase();
    }
  }
  str1 = undefined;
  if (subscription != null) {
    const introductoryOffer3 = subscription.introductoryOffer;
    if (introductoryOffer3 != null) {
      if (introductoryOffer3.period != null) {
        if (introductoryOffer3.period.value != null) {
          str1 = str3.toString();
        }
      }
    }
  }
  unit = undefined;
  if (subscription != null) {
    const introductoryOffer4 = subscription.introductoryOffer;
    if (introductoryOffer4 != null) {
      const period = introductoryOffer4.period;
      if (period != null) {
        unit = period.unit;
      }
    }
  }
  return obj;
};
export const transactionSk2ToPurchaseMap = (arg0) => {
  let appAccountToken;
  let id;
  let originalID;
  let originalPurchaseDate;
  let productID;
  let purchaseDate;
  let purchasedQuantity;
  let verificationResult;
  ({ verificationResult, appAccountToken } = arg0);
  let str;
  ({ id, originalPurchaseDate, productID, purchaseDate, purchasedQuantity, originalID } = arg0);
  try {
    const _JSON = JSON;
    str = JSON.parse(tmp).transactionReason;
  } catch (tmp3) {
    const _console = console;
    console.log("AppleSK2.ts react-native-iap: Error parsing jsonRepresentation", tmp3);
  }
  const obj = {
    productId: productID,
    transactionId: String(id),
    transactionDate: purchaseDate,
    transactionReceipt: "",
    purchaseToken: "",
    quantityIOS: purchasedQuantity,
    originalTransactionDateIOS: originalPurchaseDate,
    originalTransactionIdentifierIOS: originalID,
    verificationResultIOS: verificationResult,
    appAccountToken,
    transactionReasonIOS: str,
  };
  if (appAccountToken == null) {
    appAccountToken = "";
  }
  if (str == null) {
    str = "";
  }
  return obj;
};
export const offerSk2Map = (arg0) => {
  let timestamp;
  const tmp = arg0;
  if (tmp) {
    const obj = { offerID: null, keyID: null, nonce: null, signature: null, timestamp: timestamp.toString() };
    ({
      identifier: obj.offerID,
      keyIdentifier: obj.keyID,
      nonce: obj.nonce,
      signature: obj.signature,
      timestamp,
    } = arg0);
    return obj;
  }
};
