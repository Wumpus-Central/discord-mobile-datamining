// === Module 13266: useMaybeFetchTieredTenureBadgeData ===

// Module 13266 (useMaybeFetchTieredTenureBadgeData)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7858 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let stateFromStores;
  let tmp4;
  let tmp5;
  const obj = stateFromStores(576);
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult2 = stateFromStores(10847);
  const isPremiumSubscriber = tmpResult2.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  if (cResult[2] === stateFromStores) {
    let tmp9;
    if (cResult[3] === isPremiumSubscriber) {
      tmp9 = cResult[4];
    }
    isPremiumSubscriber(5590)(tmp9);
  }
  const fn2 = function c() {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const tmp3 = null != id && isPremiumSubscriber;
    if (tmp3) {
      maybeFetchUserProfileDefault(stateFromStores.id);
    }
  };
  cResult[2] = stateFromStores;
  cResult[3] = isPremiumSubscriber;
  cResult[4] = fn2;
  tmp9 = fn2;
}) : (() => {
  let closure_1;
  let currentUser;
  let user;
  const items = [UserStore];
  const obj = require("get initialized");
  _require = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("useIsPremiumSubscriber");
  importDefault = obj2.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountEffectDefault(() => {
    let id;
    if (user != null) {
      id = user.id;
    }
    const tmp3 = null != id && closure_1;
    if (tmp3) {
      maybeFetchUserProfileDefault(user.id);
    }
  });
});
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = tmp2;