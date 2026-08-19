// discord_app/modules/premium/hooks/useGeoForUser.native.tsx
import _deletePaymentSourceAll from "../../billing/actions/BillingActionCreators.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import handlePaymentSourceCreateEnd from "../../../stores/billing/BillingInfoStore.tsx";
import updateProduct from "../../../stores/native/IAPStore.android.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

export default function useGeoForUser() {
  let obj = stateFromStores2(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    product = product.getProduct(stateFromStores2(table[5]).ProductIds.PREMIUM_TIER_2_MONTHLY);
    let countryCode;
    if (product != null) {
      countryCode = product.countryCode;
    }
    return countryCode;
  });
  const items1 = [closure_5];
  const stateFromStores1 = stateFromStores2(589).useStateFromStores(items1, () => ipLocation.ipLocation);
  const obj2 = stateFromStores2(589);
  const items2 = [closure_4];
  stateFromStores2 = stateFromStores2(589).useStateFromStores(items2, () => authenticated.isAuthenticated());
  const items3 = [stateFromStores1, stateFromStores2];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores2;
    if (stateFromStores2) {
      tmp = !closure_1_5.ipLocationLoaded;
    }
    if (tmp) {
      const ipLocation = _deletePaymentSourceAll.fetchIpLocation();
    }
  }, items3);
  obj = { defaultBillingCountryCode: stateFromStores, ipCountryCode: null, ipSubdivisionCode: null };
  let countryCode;
  if (stateFromStores1 != null) {
    countryCode = stateFromStores1.countryCode;
  }
  obj[1] = countryCode;
  let subdivisionCode;
  if (stateFromStores1 != null) {
    subdivisionCode = stateFromStores1.subdivisionCode;
  }
  obj[2] = subdivisionCode;
  return obj;
};