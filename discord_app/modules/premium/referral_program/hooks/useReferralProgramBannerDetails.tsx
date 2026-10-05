// === Module 13242: useReferralProgramBannerDetails ===

// Module 13242 (useReferralProgramBannerDetails)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6961 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStoresArray(576).c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReferralTrialStore];
    const fn = function n() {
      return authStore.getSentUserIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStoresArray(576);
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== stateFromStoresArray) {
    const fn2 = function u() {
      const mapped = stateFromStoresArray.map((item) => user.getUser(item));
      return mapped.filter((item) => null != item);
    };
    cResult[3] = stateFromStoresArray;
    cResult[4] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult = stateFromStoresArray(504);
  const stateFromStoresArray1 = stateFromStoresArray(504).useStateFromStoresArray(tmp7, tmp9);
  if (cResult[5] !== stateFromStoresArray) {
    const fn3 = function h() {
      const item = stateFromStoresArray.forEach((item) => {
        const user = stateFromStoresArray(closure_1_1[6]).getUser(item);
      });
    };
    const items2 = [stateFromStoresArray];
    cResult[5] = stateFromStoresArray;
    cResult[6] = fn3;
    cResult[7] = items2;
    let tmp12 = items2;
    let tmp11 = fn3;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const effect = noop.useEffect(tmp11, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [ReferralTrialStore];
    const fn4 = function v() {
      return authStore.getRefreshAt();
    };
    cResult[8] = items3;
    cResult[9] = fn4;
    let tmp15 = fn4;
    let tmp14 = items3;
  } else {
    tmp14 = cResult[8];
    tmp15 = cResult[9];
  }
  const tmpResult3 = stateFromStoresArray(504);
  const stateFromStores = stateFromStoresArray(504).useStateFromStores(tmp14, tmp15);
  if (cResult[10] === 3 === stateFromStoresArray.length) {
    if (cResult[11] === stateFromStores) {
      if (cResult[12] === stateFromStoresArray1) {
        let tmp19 = cResult[13];
      }
      return tmp19;
    }
  }
  const obj2 = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: stateFromStores };
  cResult[10] = 3 === stateFromStoresArray.length;
  cResult[11] = stateFromStores;
  cResult[12] = stateFromStoresArray1;
  cResult[13] = obj2;
  tmp19 = obj2;
  const tmpResult4 = stateFromStoresArray(504);
}) : (() => {
  const items = [ReferralTrialStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => authStore.getSentUserIds());
  const obj = stateFromStoresArray(504);
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  const stateFromStoresArray1 = stateFromStoresArray(504).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  });
  const effect = noop.useEffect(() => {
    const item = stateFromStoresArray.forEach((item) => {
      const user = stateFromStoresArray(closure_1_1[6]).getUser(item);
    });
  }, items2);
  const obj3 = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: null };
  const obj2 = stateFromStoresArray(504);
  const items3 = [ReferralTrialStore];
  obj3.refreshAt = stateFromStoresArray(504).useStateFromStores(items3, () => authStore.getRefreshAt());
  return obj3;
});