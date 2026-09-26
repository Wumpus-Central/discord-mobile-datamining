// discord_app/modules/slayer_storefront/getStorefrontSkuFetchOptions.native.tsx
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import GenericIAPStore from "../billing/native/GenericIAPStore.tsx";

require = fn;
const PaymentGateways = fn(1074).PaymentGateways;
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/getStorefrontSkuFetchOptions.native.tsx");

export default function getStorefrontSkuFetchOptions() {
  const obj = { withGoogleSkuIds: utils_PlatformUtils.isAndroid(), countryCode: null, paymentGateway: null };
  let tmp3;
  if (obj3.isIOS()) {
    const storeFront = GenericIAPStore.getStoreFront();
    let country;
    if (storeFront != null) {
      country = storeFront.country;
    }
    tmp3 = country;
  }
  obj.countryCode = tmp3;
  obj3 = utils_PlatformUtils;
  let APPLE;
  if (tmpResult.isIOS()) {
    APPLE = PaymentGateways.APPLE;
  }
  obj.paymentGateway = APPLE;
  return obj;
}
