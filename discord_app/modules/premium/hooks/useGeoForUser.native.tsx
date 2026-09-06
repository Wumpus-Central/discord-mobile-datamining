// === Module 7418: useGeoForUser ===

// Module 7418 (useGeoForUser)
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 4884 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BillingInfoStore from "BillingInfoStore" /* 4220 */;
import IAPStore from "IAPStore" /* 7237 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

export default function useGeoForUser() {
  let obj = stateFromStores2(504);
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    product = product.getProduct(stateFromStores2(dependencyMap[5]).ProductIds.PREMIUM_TIER_2_MONTHLY);
    let countryCode;
    if (product != null) {
      countryCode = product.countryCode;
    }
    return countryCode;
  });
  const items1 = [BillingInfoStore];
  const stateFromStores1 = stateFromStores2(504).useStateFromStores(items1, () => ipLocation.ipLocation);
  const obj2 = stateFromStores2(504);
  const items2 = [AuthenticationStore];
  stateFromStores2 = stateFromStores2(504).useStateFromStores(items2, () => authenticated.isAuthenticated());
  const items3 = [stateFromStores1, stateFromStores2];
  const effect = noop.useEffect(() => {
    let tmp = stateFromStores2;
    if (stateFromStores2) {
      tmp = !BillingInfoStore.ipLocationLoaded;
    }
    if (tmp) {
      ipLocation = actions_BillingActionCreatorsAll.fetchIpLocation();
    }
  }, items3);
  obj = { defaultBillingCountryCode: stateFromStores, ipCountryCode: null, ipSubdivisionCode: null };
  let countryCode;
  if (stateFromStores1 != null) {
    countryCode = stateFromStores1.countryCode;
  }
  obj.ipCountryCode = countryCode;
  let subdivisionCode;
  if (stateFromStores1 != null) {
    subdivisionCode = stateFromStores1.subdivisionCode;
  }
  obj.ipSubdivisionCode = subdivisionCode;
  return obj;
};