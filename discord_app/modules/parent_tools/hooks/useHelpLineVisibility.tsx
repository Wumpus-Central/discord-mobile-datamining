// === Module 9840: useHelpLineVisibility ===

// Module 9840 (useHelpLineVisibility)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8329 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 9841 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7061 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let locale;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  let userCountry;
  let obj = stateFromStores(576);
  const cResult = obj.c(11);
  const tmp4 = useIsInAdultAgeGroupDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function c() {
      return userCountry.getUserCountry();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = stateFromStores(573);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [LocaleStore];
    const fn2 = function p() {
      return locale.locale;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = stateFromStores(573);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[4] !== stateFromStores) {
    const fn3 = function v() {
      if (null == stateFromStores) {
        const obj = MessageRequestActionCreators;
        const userCountryCode = obj.fetchUserCountryCode();
      }
    };
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = fn3;
    cResult[6] = items2;
    tmp14 = items2;
    tmp13 = fn3;
  } else {
    tmp13 = cResult[5];
    tmp14 = cResult[6];
  }
  const effect = react.useEffect(tmp13, tmp14);
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === tmp4) {
      let tmp16;
      if (cResult[9] === stateFromStores1) {
        tmp16 = cResult[10];
      }
      return tmp16;
    }
  }
  const hasItem = !tmp4 && null != stateFromStores && set.has(stateFromStores.alpha2) && set1.has(stateFromStores1);
  cResult[7] = stateFromStores;
  cResult[8] = tmp4;
  cResult[9] = stateFromStores1;
  cResult[10] = hasItem;
  tmp16 = hasItem;
}) : (() => {
  let locale;
  let stateFromStores;
  let userCountry;
  const tmp = useIsInAdultAgeGroupDefault();
  let obj = stateFromStores(573);
  const items = [FamilyCenterStore];
  stateFromStores = obj.useStateFromStores(items, () => userCountry.getUserCountry());
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(573);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => locale.locale);
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      const userCountryCode = obj.fetchUserCountryCode();
    }
  }, items2);
  const hasItem = !tmp && null != stateFromStores && set.has(stateFromStores.alpha2) && set1.has(stateFromStores1);
  return hasItem;
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = useIsInAdultAgeGroupDefault();
  const tmp2 = !tmp && !closure_8();
  return tmp2;
}) : (() => {
  const tmp = useIsInAdultAgeGroupDefault();
  const tmp2 = !tmp && !closure_8();
  return tmp2;
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export const useShouldShowHelplineLink = tmp4;
export const useShouldShowThroughlineLink = tmp5;