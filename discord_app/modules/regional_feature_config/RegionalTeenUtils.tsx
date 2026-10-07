// discord_app/modules/regional_feature_config/RegionalTeenUtils.tsx
import c from "../../../_runtime/00576_c.js";
import useUserIsTeen from "../self_mod/hooks/useUserIsTeen.tsx";
import MessageRequestActionCreators from "../message_request/MessageRequestActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore.tsx";

require = fn;
let items = ["GB", "AU"];
HermesBuiltin.arraySpread(fn(5113).CountryCodesSets.EU_COUNTRIES, 2);
const set = new Set(items);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(5);
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
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function l() {
          if (null == stateFromStores) {
            userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
          }
        };
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp9 = items1;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      return stateFromStores;
    }
  : () => {
      const items = [RegionalFeatureConfigStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
      const items1 = [stateFromStores];
      const effect = noop.useEffect(() => {
        if (null == stateFromStores) {
          userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
        }
      }, items1);
      return stateFromStores;
    };
let closure_5 = tmp4;
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (has) => {
      const cResult = c.c(4);
      const tmp2 = closure_5();
      const userIsTeen = useUserIsTeen.useUserIsTeen();
      if (cResult[0] === has) {
        if (cResult[1] === tmp2) {
          if (cResult[2] === userIsTeen) {
            let tmp4 = cResult[3];
          }
          return tmp4;
        }
      }
      let hasItem = userIsTeen;
      if (userIsTeen) {
        hasItem = null != tmp2;
      }
      if (hasItem) {
        hasItem = has.has(tmp2.alpha2);
      }
      cResult[0] = has;
      cResult[1] = tmp2;
      cResult[2] = userIsTeen;
      cResult[3] = hasItem;
      tmp4 = hasItem;
    }
  : (has) => {
      const tmp = closure_5();
      let userIsTeen = useUserIsTeen.useUserIsTeen();
      if (userIsTeen) {
        userIsTeen = null != tmp;
      }
      if (userIsTeen) {
        userIsTeen = has.has(tmp.alpha2);
      }
      return userIsTeen;
    };
let closure_6 = tmp5;
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export const useUserCountryCode = tmp4;
export const useIsTeenInCountrySet = tmp5;
export const useIsTeenInStrictCountry = () => closure_6(set);
