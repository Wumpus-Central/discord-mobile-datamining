// === Module 13650: useReferralProgramBannerDetails ===

// Module 13650 (useReferralProgramBannerDetails)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7168 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = ReactCompilerGating.isReactCompilerEnabled() ? (function useReferralProgramBannerDetails() {
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
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    cResult[3] = stateFromStoresArray;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
  }
  const tmpResult = stateFromStoresArray(504);
  const stateFromStoresArray1 = stateFromStoresArray(504).useStateFromStoresArray(tmp7, S);
  if (cResult[5] !== stateFromStoresArray) {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    const items2 = [stateFromStoresArray];
    cResult[5] = stateFromStoresArray;
    cResult[6] = tmp13;
    cResult[7] = items2;
    let tmp12 = items2;
  } else {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    tmp12 = cResult[7];
  }
  const effect = noop.useEffect(tmp13, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    const items3 = [ReferralTrialStore];
    const fn2 = function v() {
      return authStore.getRefreshAt();
    };
    cResult[8] = items3;
    cResult[9] = fn2;
    let tmp16 = fn2;
    const tmp15 = items3;
  } else {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    tmp16 = cResult[9];
  }
  const tmpResult3 = stateFromStoresArray(504);
  const stateFromStores = stateFromStoresArray(504).useStateFromStores(tmp15, tmp16);
  if (cResult[10] === 3 === stateFromStoresArray.length) {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
  }
  cResult[10] = 3 === stateFromStoresArray.length;
  cResult[11] = stateFromStores;
  cResult[12] = stateFromStoresArray1;
  cResult[13] = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: stateFromStores };
  const obj2 = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: stateFromStores };
  const tmpResult4 = stateFromStoresArray(504);
}) : (function useReferralProgramBannerDetails() {
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