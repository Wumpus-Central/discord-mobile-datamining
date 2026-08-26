// _runtime/07645_productSk2Map.js
import _mod7633 from "metro/07633__.js";

require = arg1;
const dependencyMap = arg6;
arg5.productSk2Map = (displayName) => {
  ({ description, price, currency, displayPrice } = displayName);
  return { title: displayName.displayName, productId: String(displayName.id), description, type: "iap", price: String(price), localizedPrice: displayPrice, currency };
};
arg5.subscriptionSk2Map = (subscription) => {
  subscription = subscription.subscription;
  const obj = { platform: _mod7633.SubscriptionPlatform.ios, title: displayName, productId: String(id), description, type: "subs", price: String(price), localizedPrice: displayPrice, currency, subscriptionPeriodNumberIOS: null, subscriptionPeriodUnitIOS: null, introductoryPriceAsAmountIOS: null, introductoryPricePaymentModeIOS: null, introductoryPriceNumberOfPeriodsIOS: null, introductoryPriceSubscriptionPeriodIOS: null };
  ({ id, description, displayName, price, currency, displayPrice } = subscription);
  let value;
  if (subscription != null) {
    if (subscription.subscriptionPeriod != null) {
      value = iter.value;
    }
  }
  obj[8] = "" + value;
  let formatted;
  if (subscription != null) {
    const subscriptionPeriod = subscription.subscriptionPeriod;
    if (subscriptionPeriod != null) {
      let str = subscriptionPeriod.unit;
      formatted = str.toUpperCase();
    }
  }
  obj[9] = formatted;
  displayPrice = undefined;
  if (subscription != null) {
    const introductoryOffer = subscription.introductoryOffer;
    if (introductoryOffer != null) {
      displayPrice = introductoryOffer.displayPrice;
    }
  }
  obj[10] = displayPrice;
  let formatted1;
  if (subscription != null) {
    const introductoryOffer2 = subscription.introductoryOffer;
    if (introductoryOffer2 != null) {
      formatted1 = introductoryOffer2.paymentMode.toUpperCase();
      const str2 = introductoryOffer2.paymentMode;
    }
  }
  obj[11] = formatted1;
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
  obj[12] = str;
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
  obj[13] = unit;
  return obj;
};
arg5.transactionSk2ToPurchaseMap = (arg0) => {
  ({ verificationResult, appAccountToken } = arg0);
  try {
    const _JSON = JSON;
    let str = JSON.parse(tmp7).transactionReason;
    const obj = { productId: null, transactionId: null, transactionDate: null, transactionReceipt: "", purchaseToken: "", quantityIOS: null, originalTransactionDateIOS: null, originalTransactionIdentifierIOS: null, verificationResultIOS: null, appAccountToken: null, transactionReasonIOS: null };
    obj[0] = tmp3;
    const _String = String;
    obj[1] = String(tmp);
    obj[2] = tmp4;
    obj[5] = tmp5;
    obj[6] = tmp2;
    obj[7] = tmp6;
    obj[8] = verificationResult;
    if (appAccountToken == null) {
      appAccountToken = "";
    }
    obj[9] = appAccountToken;
    if (str == null) {
      str = "";
    }
    obj[10] = str;
    return obj;
  } catch (tmp9) {
    const _console = console;
    console.log("AppleSK2.ts react-native-iap: Error parsing jsonRepresentation", tmp9);
  }
};
arg5.offerSk2Map = (arg0) => {
  if (arg0) {
    const obj = { offerID: null, keyID: null, nonce: null, signature: null, timestamp: null };
    ({ identifier: obj[0], keyIdentifier: obj[1], nonce: obj[2], signature: obj[3], timestamp } = arg0);
    obj[4] = timestamp.toString();
    return obj;
  }
};