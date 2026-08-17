// discord_app/modules/premium/hooks/useGeoForUser.native.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "handlePaymentSourceCreateEnd" /* 4041 */;
import closure_6 from "updateProduct" /* 5319 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

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
      const ipLocation = closure_1_1(closure_1_2[6]).fetchIpLocation();
      const obj = closure_1_1(closure_1_2[6]);
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