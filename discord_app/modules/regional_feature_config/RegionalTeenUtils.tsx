// === Module 12061: RegionalTeenUtils ===

// Module 12061 (RegionalTeenUtils)
import react2 from "react" /* 576 */;
import CountryCodes from "CountryCodes" /* 5107 */;
import useUserIsTeen from "useUserIsTeen" /* 8294 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 9828 */;
import react from "react" /* 19 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5104 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let userCountryCode;

let items = ["GB", "AU", ...CountryCodes.CountryCodesSets.EU_COUNTRIES];
const set = new Set(items);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(5);
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RegionalFeatureConfigStore];
    const fn = function s() {
      return userCountryCode.getUserCountryCode();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function l() {
      if (null == stateFromStores) {
        const obj = MessageRequestActionCreators;
        userCountryCode = obj.fetchUserCountryCode();
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = react.useEffect(tmp8, tmp9);
  return stateFromStores;
}) : (() => {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [RegionalFeatureConfigStore];
  stateFromStores = obj.useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      userCountryCode = obj.fetchUserCountryCode();
    }
  }, items1);
  return stateFromStores;
});
let closure_5 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((has) => {
  const obj = react2;
  const cResult = obj.c(4);
  const tmp2 = closure_5();
  const obj2 = useUserIsTeen;
  const userIsTeen = obj2.useUserIsTeen();
  if (cResult[0] === has) {
    if (cResult[1] === tmp2) {
      let tmp4;
      if (cResult[2] === userIsTeen) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const hasItem = userIsTeen && null != tmp2 && has.has(tmp2.alpha2);
  cResult[0] = has;
  cResult[1] = tmp2;
  cResult[2] = userIsTeen;
  cResult[3] = hasItem;
  tmp4 = hasItem;
}) : ((has) => {
  const tmp = closure_5();
  const obj = useUserIsTeen;
  const userIsTeen = obj.useUserIsTeen() && null != tmp && has.has(tmp.alpha2);
  return userIsTeen;
});
let closure_6 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export const useUserCountryCode = tmp3;
export const useIsTeenInCountrySet = tmp4;
export const useIsTeenInStrictCountry = () => closure_6(set);