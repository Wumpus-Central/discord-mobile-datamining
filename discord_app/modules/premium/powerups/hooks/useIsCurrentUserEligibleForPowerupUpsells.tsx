// discord_app/modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildBoostSlotStore from "../../../../stores/billing/GuildBoostSlotStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const f123121 = (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription;
const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let flattenedGuildIds;
      let hasFetched;
      let stateFromStores;
      let tmp11;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      const tmp = stateFromStores;
      const obj = stateFromStores(576);
      const cResult = obj.c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
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
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildBoostSlotStore];
        const fn2 = function p() {
          let items;
          if (hasFetched.hasFetched) {
            const _Object = Object;
            items = Object.values(tmp.boostSlots);
          } else {
            items = [];
          }
          return items;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp8 = fn2;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult4 = tmp(504);
      const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SortedGuildStore];
        class F {
          constructor() {
            return flattenedGuildIds.getFlattenedGuildIds();
          }
        }
        cResult[4] = items2;
        cResult[5] = F;
        tmp12 = F;
        tmp11 = items2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult5 = tmp(504);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp11, tmp12);
      if (cResult[6] === stateFromStoresArray) {
        if (cResult[7] === stateFromStores) {
          let tmp15;
          if (cResult[8] === stateFromStores1) {
            tmp15 = cResult[9];
          }
          return tmp15;
        }
      }
      if (null != stateFromStores) {
        let tmp18 = !stateFromStores.isPremiumGroupMember();
        stateFromStores.isPremiumGroupMember();
        if (tmp18) {
          const tmpResult6 = tmp(1976);
          const isPremiumResult = tmpResult6.isPremium(stateFromStores, PremiumTypes.TIER_2);
          class F {
            constructor() {
              return flattenedGuildIds.getFlattenedGuildIds();
            }
          }
          tmp18 = isPremiumResult;
        }
        class F {
          constructor() {
            return flattenedGuildIds.getFlattenedGuildIds();
          }
        }
      }
      cResult[6] = stateFromStoresArray;
      cResult[7] = stateFromStores;
      cResult[8] = stateFromStores1;
      cResult[9] = null != stateFromStores;
      tmp15 = tmp16;
    }
  : () => {
      let currentUser;
      let flattenedGuildIds;
      let hasFetched;
      let stateFromStores;
      const tmp = stateFromStores;
      let items = [UserStore];
      const obj = stateFromStores(504);
      stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [GuildBoostSlotStore];
      const obj3 = stateFromStores(504);
      const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
        let items;
        if (hasFetched.hasFetched) {
          const _Object = Object;
          items = Object.values(tmp.boostSlots);
        } else {
          items = [];
        }
        return items;
      });
      const items2 = [SortedGuildStore];
      const obj5 = stateFromStores(504);
      const stateFromStores1 = obj5.useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
      let tmp3 = null != stateFromStores;
      if (tmp3) {
        let tmp5 = !stateFromStores.isPremiumGroupMember();
        stateFromStores.isPremiumGroupMember();
        if (tmp5) {
          const tmpResult = tmp(1976);
          let isPremiumResult = tmpResult.isPremium(stateFromStores, PremiumTypes.TIER_2);
          if (!isPremiumResult) {
            isPremiumResult =
              stateFromStoresArray.some(f123121) ||
              stateFromStores1.some((item) => {
                const member = GuildMemberStore.getMember(item, currentUser.id);
                let premiumSince;
                if (member != null) {
                  premiumSince = member.premiumSince;
                }
                return null != premiumSince;
              });
            stateFromStoresArray.some(f123121) ||
              stateFromStores1.some((item) => {
                const member = GuildMemberStore.getMember(item, currentUser.id);
                let premiumSince;
                if (member != null) {
                  premiumSince = member.premiumSince;
                }
                return null != premiumSince;
              });
          }
          tmp5 = isPremiumResult;
        }
        tmp3 = tmp5;
      }
      return tmp3;
    };
const result = size.fileFinishedImporting(
  "modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx",
);

export default tmp2;
export const getIsCurrentUserEligibleForPowerupUpsells = function getIsCurrentUserEligibleForPowerupUpsells() {
  let items;
  const currentUser = UserStore.getCurrentUser();
  if (GuildBoostSlotStore.hasFetched) {
    const _Object = Object;
    items = Object.values(tmp.boostSlots);
  } else {
    items = [];
  }
  const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
  let tmp3 = null != currentUser;
  if (tmp3) {
    let tmp5 = !currentUser.isPremiumGroupMember();
    currentUser.isPremiumGroupMember();
    if (tmp5) {
      const obj3 = currentUser(1976);
      let isPremiumResult = obj3.isPremium(currentUser, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult =
          items.some(f123121) ||
          flattenedGuildIds.some((item) => {
            const member = GuildMemberStore.getMember(item, currentUser.id);
            let premiumSince;
            if (member != null) {
              premiumSince = member.premiumSince;
            }
            return null != premiumSince;
          });
        items.some(f123121) ||
          flattenedGuildIds.some((item) => {
            const member = GuildMemberStore.getMember(item, currentUser.id);
            let premiumSince;
            if (member != null) {
              premiumSince = member.premiumSince;
            }
            return null != premiumSince;
          });
      }
      tmp5 = isPremiumResult;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
