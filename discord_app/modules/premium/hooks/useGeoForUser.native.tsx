// === Module 7126: useGeoForUser ===

// Module 7126 (useGeoForUser)
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 5720 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BillingInfoStore from "BillingInfoStore" /* 4728 */;
import IAPStore from "IAPStore" /* 7120 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGeoForUser() {
  const cResult = stateFromStores2(576).c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    const fn = function c() {
      product = product.getProduct(stateFromStores2(dependencyMap[6]).ProductIds.PREMIUM_TIER_2_MONTHLY);
      let countryCode;
      if (product != null) {
        countryCode = product.countryCode;
      }
      return countryCode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores2(576);
  const stateFromStores = stateFromStores2(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [BillingInfoStore];
    class C {
      constructor() {
        return closure_1_5.ipLocation;
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    let tmp9 = C;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = stateFromStores2(504);
  const stateFromStores1 = stateFromStores2(504).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore];
    class C {
      constructor() {
        return closure_1_5.ipLocation;
      }
    }
    cResult[4] = items2;
    cResult[5] = tmp15;
    let tmp13 = tmp15;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult3 = stateFromStores2(504);
  stateFromStores2 = stateFromStores2(504).useStateFromStores(tmp12, tmp13);
  if (cResult[6] !== stateFromStores2) {
    const fn2 = function y() {
      let tmp = stateFromStores2;
      if (stateFromStores2) {
        tmp = !BillingInfoStore.ipLocationLoaded;
      }
      if (tmp) {
        ipLocation = actions_BillingActionCreatorsAll.fetchIpLocation();
      }
    };
    cResult[6] = stateFromStores2;
    class C {
      constructor() {
        return closure_1_5.ipLocation;
      }
    }
    cResult[7] = fn2;
    let tmp17 = fn2;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === stateFromStores1) {
    if (cResult[9] === stateFromStores2) {
      let tmp18 = cResult[10];
    }
    const effect = noop.useEffect(tmp17, tmp18);
    class C {
      constructor() {
        return closure_1_5.ipLocation;
      }
    }
    let countryCode;
    if (stateFromStores1 != null) {
      countryCode = stateFromStores1.countryCode;
    }
    let subdivisionCode;
    if (stateFromStores1 != null) {
      subdivisionCode = stateFromStores1.subdivisionCode;
    }
    if (cResult[11] === stateFromStores) {
      if (cResult[12] === countryCode) {
        if (cResult[13] === subdivisionCode) {
          let tmp23 = cResult[14];
        }
        return tmp23;
      }
    }
    const obj2 = { defaultBillingCountryCode: stateFromStores, ipCountryCode: countryCode, ipSubdivisionCode: subdivisionCode };
    cResult[11] = stateFromStores;
    cResult[12] = countryCode;
    cResult[13] = subdivisionCode;
    cResult[14] = obj2;
    tmp23 = obj2;
  }
  const items3 = [stateFromStores1, stateFromStores2];
  cResult[8] = stateFromStores1;
  cResult[9] = stateFromStores2;
  cResult[10] = items3;
  tmp18 = items3;
  const tmpResult4 = stateFromStores2(504);
}) : (function useGeoForUser() {
  const items = [IAPStore];
  const stateFromStores = stateFromStores2(504).useStateFromStores(items, () => {
    product = product.getProduct(stateFromStores2(dependencyMap[6]).ProductIds.PREMIUM_TIER_2_MONTHLY);
    let countryCode;
    if (product != null) {
      countryCode = product.countryCode;
    }
    return countryCode;
  });
  let obj = stateFromStores2(504);
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
  const obj4 = { defaultBillingCountryCode: stateFromStores, ipCountryCode: null, ipSubdivisionCode: null };
  let countryCode;
  if (stateFromStores1 != null) {
    countryCode = stateFromStores1.countryCode;
  }
  obj4.ipCountryCode = countryCode;
  let subdivisionCode;
  if (stateFromStores1 != null) {
    subdivisionCode = stateFromStores1.subdivisionCode;
  }
  obj4.ipSubdivisionCode = subdivisionCode;
  return obj4;
});