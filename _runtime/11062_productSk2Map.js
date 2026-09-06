// _runtime/11062_productSk2Map.js
import ReplacementModesAndroid from "11050_ReplacementModesAndroid.js";

require = arg1;
const dependencyMap = arg6;

export const productSk2Map = (displayName) => {
  ({ description, price, currency, displayPrice } = displayName);
  return {
    title: displayName.displayName,
    productId: String(displayName.id),
    description,
    type: "iap",
    price: String(price),
    localizedPrice: displayPrice,
    currency,
  };
};
export const subscriptionSk2Map = (subscription) => {
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
    subscriptionPeriodNumberIOS: null,
    subscriptionPeriodUnitIOS: null,
    introductoryPriceAsAmountIOS: null,
    introductoryPricePaymentModeIOS: null,
    introductoryPriceNumberOfPeriodsIOS: null,
    introductoryPriceSubscriptionPeriodIOS: null,
  };
  ({ id, description, displayName, price, currency, displayPrice } = subscription);
  value = undefined;
  if (subscription != null) {
    if (subscription.subscriptionPeriod != null) {
      value = iter.value;
    }
  }
  obj.subscriptionPeriodNumberIOS = "" + value;
  let formatted;
  if (subscription != null) {
    const subscriptionPeriod = subscription.subscriptionPeriod;
    if (subscriptionPeriod != null) {
      let str = subscriptionPeriod.unit;
      formatted = str.toUpperCase();
    }
  }
  obj.subscriptionPeriodUnitIOS = formatted;
  displayPrice = undefined;
  if (subscription != null) {
    const introductoryOffer = subscription.introductoryOffer;
    if (introductoryOffer != null) {
      displayPrice = introductoryOffer.displayPrice;
    }
  }
  obj.introductoryPriceAsAmountIOS = displayPrice;
  let formatted1;
  if (subscription != null) {
    const introductoryOffer2 = subscription.introductoryOffer;
    if (introductoryOffer2 != null) {
      formatted1 = introductoryOffer2.paymentMode.toUpperCase();
    }
  }
  obj.introductoryPricePaymentModeIOS = formatted1;
  str = undefined;
  if (subscription != null) {
    const introductoryOffer3 = subscription.introductoryOffer;
    if (introductoryOffer3 != null) {
      if (introductoryOffer3.period != null) {
        if (iter2.value != null) {
          str = str3.toString();
        }
      }
    }
  }
  obj.introductoryPriceNumberOfPeriodsIOS = str;
  let unit;
  if (subscription != null) {
    const introductoryOffer4 = subscription.introductoryOffer;
    if (introductoryOffer4 != null) {
      const period = introductoryOffer4.period;
      if (period != null) {
        unit = period.unit;
      }
    }
  }
  obj.introductoryPriceSubscriptionPeriodIOS = unit;
  return obj;
};
export const transactionSk2ToPurchaseMap = (arg0) => {
  ({ verificationResult, appAccountToken } = arg0);
  try {
    const _JSON = JSON;
    let str = JSON.parse(tmp7).transactionReason;
    const obj = {
      productId: tmp3,
      transactionId: null,
      transactionDate: null,
      transactionReceipt: "",
      purchaseToken: "",
      quantityIOS: null,
      originalTransactionDateIOS: null,
      originalTransactionIdentifierIOS: null,
      verificationResultIOS: null,
      appAccountToken: null,
      transactionReasonIOS: null,
    };
    const _String = String;
    obj.transactionId = String(tmp);
    obj.transactionDate = tmp4;
    obj.quantityIOS = tmp5;
    obj.originalTransactionDateIOS = tmp2;
    obj.originalTransactionIdentifierIOS = tmp6;
    obj.verificationResultIOS = verificationResult;
    if (appAccountToken == null) {
      appAccountToken = "";
    }
    obj.appAccountToken = appAccountToken;
    if (str == null) {
      str = "";
    }
    obj.transactionReasonIOS = str;
    return obj;
  } catch (tmp9) {
    const _console = console;
    console.log("AppleSK2.ts react-native-iap: Error parsing jsonRepresentation", tmp9);
  }
};
export const offerSk2Map = (arg0) => {
  if (arg0) {
    const obj = { offerID: null, keyID: null, nonce: null, signature: null, timestamp: null };
    ({
      identifier: obj.offerID,
      keyIdentifier: obj.keyID,
      nonce: obj.nonce,
      signature: obj.signature,
      timestamp,
    } = arg0);
    obj.timestamp = timestamp.toString();
    return obj;
  }
};
