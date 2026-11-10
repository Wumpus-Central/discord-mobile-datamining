// === Module 8871: getStorefrontNativeStoreQuery ===

// Module 8871 (getStorefrontNativeStoreQuery)
import initialize from "initialize" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8868 */;

require = fn;
const PaymentGateways = fn(1072).PaymentGateways;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/getStorefrontNativeStoreQuery.tsx");

export function getStorefrontNativeStoreQuery() {
  let nativeStorefrontCountry = arg0;
  if (arg0 === undefined) {
    nativeStorefrontCountry = StorefrontProductStore.getNativeStorefrontCountry();
  }
  if (obj.isIOS()) {
    const obj2 = { payment_gateway: PaymentGateways.APPLE, country_code: nativeStorefrontCountry };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  return obj3;
}
export function getStorefrontPricingKey() {
  if (storefrontNativeStoreQuery !== undefined) {
    ({ payment_gateway, country_code } = storefrontNativeStoreQuery);
    let str2 = "";
    if (null != payment_gateway) {
      if (country_code == null) {
        country_code = "";
      }
      const _HermesInternal = HermesInternal;
      str2 = "" + payment_gateway + ":" + country_code;
    }
    return str2;
  } else {
    const nativeStorefrontCountry = StorefrontProductStore.getNativeStorefrontCountry();
    if (obj.isIOS()) {
      const obj2 = { payment_gateway: PaymentGateways.APPLE, country_code: nativeStorefrontCountry };
    } else {
      const obj3 = {};
    }
    obj = PlatformUtils;
  }
}
export function useStorefrontPricingKey() {
  items = [StorefrontProductStore];
  return initialize.useStateFromStores(items, () => {
    nativeStorefrontCountry = nativeStorefrontCountry.getNativeStorefrontCountry();
    if (nativeStorefrontCountry === undefined) {
      nativeStorefrontCountry = nativeStorefrontCountry.getNativeStorefrontCountry();
    }
    if (obj2.isIOS()) {
      const obj3 = { payment_gateway: constants.APPLE, country_code: nativeStorefrontCountry };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    ({ payment_gateway, country_code } = obj4);
    let str = "";
    if (null != payment_gateway) {
      if (country_code == null) {
        country_code = "";
      }
      const _HermesInternal = HermesInternal;
      str = "" + payment_gateway + ":" + country_code;
    }
    return str;
  });
}