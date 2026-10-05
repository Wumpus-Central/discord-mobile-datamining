// discord_app/modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let stateFromStoresArray;
      let tmp11;
      let tmp12;
      let tmp14;
      let tmp15;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp9;
      let obj = stateFromStoresArray(576);
      const cResult = obj.c(14);
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
      const tmpResult = stateFromStoresArray(504);
      stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        cResult[2] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== stateFromStoresArray) {
        const fn2 = function u() {
          let user;
          const mapped = stateFromStoresArray.map((item) => user.getUser(item));
          return mapped.filter((item) => null != item);
        };
        cResult[3] = stateFromStoresArray;
        cResult[4] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[4];
      }
      const tmpResult3 = stateFromStoresArray(504);
      const stateFromStoresArray1 = tmpResult3.useStateFromStoresArray(tmp7, tmp9);
      if (cResult[5] !== stateFromStoresArray) {
        const fn3 = function h() {
          const item = stateFromStoresArray.forEach((item) => {
            const obj = stateFromStoresArray(closure_1_1[6]);
            const user = obj.getUser(item);
          });
        };
        const items2 = [stateFromStoresArray];
        cResult[5] = stateFromStoresArray;
        cResult[6] = fn3;
        cResult[7] = items2;
        tmp12 = items2;
        tmp11 = fn3;
      } else {
        tmp11 = cResult[6];
        tmp12 = cResult[7];
      }
      const effect = react.useEffect(tmp11, tmp12);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [ReferralTrialStore];
        const fn4 = function v() {
          return authStore.getRefreshAt();
        };
        cResult[8] = items3;
        cResult[9] = fn4;
        tmp15 = fn4;
        tmp14 = items3;
      } else {
        tmp14 = cResult[8];
        tmp15 = cResult[9];
      }
      const tmpResult4 = stateFromStoresArray(504);
      const stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15);
      if ((cResult[10] === 3) === stateFromStoresArray.length) {
        if (cResult[11] === stateFromStores) {
          let tmp19;
          if (cResult[12] === stateFromStoresArray1) {
            tmp19 = cResult[13];
          }
          return tmp19;
        }
      }
      const obj2 = {
        referralSentUsers: stateFromStoresArray1,
        hasSentAllReferrals: 3 === stateFromStoresArray.length,
        refreshAt: stateFromStores,
      };
      cResult[10] = 3 === stateFromStoresArray.length;
      cResult[11] = stateFromStores;
      cResult[12] = stateFromStoresArray1;
      cResult[13] = obj2;
      tmp19 = obj2;
    }
  : () => {
      let items3;
      let obj4;
      let stateFromStoresArray;
      let obj = stateFromStoresArray(504);
      const items = [ReferralTrialStore];
      stateFromStoresArray = obj.useStateFromStoresArray(items, () => authStore.getSentUserIds());
      const items1 = [UserStore];
      const items2 = [stateFromStoresArray];
      const obj2 = stateFromStoresArray(504);
      const stateFromStoresArray1 = obj2.useStateFromStoresArray(items1, () => {
        let user;
        const mapped = stateFromStoresArray.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      });
      const effect = react.useEffect(() => {
        const item = stateFromStoresArray.forEach((item) => {
          const obj = stateFromStoresArray(closure_1_1[6]);
          const user = obj.getUser(item);
        });
      }, items2);
      const obj3 = {
        referralSentUsers: stateFromStoresArray1,
        hasSentAllReferrals: 3 === stateFromStoresArray.length,
        refreshAt: obj4.useStateFromStores(items3, () => authStore.getRefreshAt()),
      };
      items3 = [ReferralTrialStore];
      obj4 = stateFromStoresArray(504);
      return obj3;
    };
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = tmp2;
