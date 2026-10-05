// discord_app/modules/premium/hooks/useGeoForUser.native.tsx
import actions_BillingActionCreatorsAll from "../../billing/actions/BillingActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import BillingInfoStore from "../../../stores/billing/BillingInfoStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ipLocation, product;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let authenticated;
      let stateFromStores2;
      let tmp12;
      let tmp13;
      let tmp17;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let tmp = stateFromStores2;
      let obj = stateFromStores2(576);
      const cResult = obj.c(15);
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
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [BillingInfoStore];
        class C {
          constructor() {
            return ipLocation.ipLocation;
          }
        }
        cResult[2] = items1;
        cResult[3] = C;
        tmp9 = C;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult3 = tmp(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [AuthenticationStore];
        class C {
          constructor() {
            return ipLocation.ipLocation;
          }
        }
        cResult[4] = items2;
        cResult[5] = tmp15;
        tmp13 = tmp15;
        tmp12 = items2;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult4 = tmp(504);
      stateFromStores2 = tmpResult4.useStateFromStores(tmp12, tmp13);
      if (cResult[6] !== stateFromStores2) {
        const fn2 = function y() {
          const tmp = stateFromStores2 && !BillingInfoStore.ipLocationLoaded;
          if (tmp) {
            const obj = actions_BillingActionCreatorsAll;
            ipLocation = obj.fetchIpLocation();
          }
        };
        cResult[6] = stateFromStores2;
        class C {
          constructor() {
            return ipLocation.ipLocation;
          }
        }
        cResult[7] = fn2;
        tmp17 = fn2;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === stateFromStores1) {
        let tmp18;
        if (cResult[9] === stateFromStores2) {
          tmp18 = cResult[10];
        }
        const effect = react.useEffect(tmp17, tmp18);
        class C {
          constructor() {
            return ipLocation.ipLocation;
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
            let tmp23;
            if (cResult[13] === subdivisionCode) {
              tmp23 = cResult[14];
            }
            return tmp23;
          }
        }
        const obj2 = {
          defaultBillingCountryCode: stateFromStores,
          ipCountryCode: countryCode,
          ipSubdivisionCode: subdivisionCode,
        };
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
    }
  : () => {
      let authenticated;
      let countryCode;
      let stateFromStores2;
      let subdivisionCode;
      let obj = stateFromStores2(504);
      const items = [IAPStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        product = product.getProduct(stateFromStores2(dependencyMap[6]).ProductIds.PREMIUM_TIER_2_MONTHLY);
        let countryCode;
        if (product != null) {
          countryCode = product.countryCode;
        }
        return countryCode;
      });
      const items1 = [BillingInfoStore];
      const obj2 = stateFromStores2(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => ipLocation.ipLocation);
      const items2 = [AuthenticationStore];
      const obj3 = stateFromStores2(504);
      stateFromStores2 = obj3.useStateFromStores(items2, () => authenticated.isAuthenticated());
      const items3 = [stateFromStores1, stateFromStores2];
      const effect = react.useEffect(() => {
        const tmp = stateFromStores2 && !BillingInfoStore.ipLocationLoaded;
        if (tmp) {
          const obj = actions_BillingActionCreatorsAll;
          ipLocation = obj.fetchIpLocation();
        }
      }, items3);
      const obj4 = {
        defaultBillingCountryCode: stateFromStores,
        ipCountryCode: countryCode,
        ipSubdivisionCode: subdivisionCode,
      };
      countryCode = undefined;
      if (stateFromStores1 != null) {
        countryCode = stateFromStores1.countryCode;
      }
      subdivisionCode = undefined;
      if (stateFromStores1 != null) {
        subdivisionCode = stateFromStores1.subdivisionCode;
      }
      return obj4;
    };
const result = size.fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

export default tmp2;
