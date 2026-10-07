// discord_app/modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildBoostSlotStore from "../../../../stores/billing/GuildBoostSlotStore.tsx";

const require = fn;
const PremiumTypes = fn(1379).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(10);
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
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildBoostSlotStore];
        const fn2 = function p() {
          if (hasFetched.hasFetched) {
            const _Object = Object;
            let items = Object.values(tmp.boostSlots);
          } else {
            items = [];
          }
          return items;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp8 = fn2;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = stateFromStores(504);
      const stateFromStoresArray = stateFromStores(504).useStateFromStoresArray(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SortedGuildStore];
        class F {
          constructor() {
            return closure_1_3.getFlattenedGuildIds();
          }
        }
        cResult[4] = items2;
        cResult[5] = F;
        let tmp12 = F;
        let tmp11 = items2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult4 = stateFromStores(504);
      const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp11, tmp12);
      if (cResult[6] === stateFromStoresArray) {
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === stateFromStores1) {
            let tmp15 = cResult[9];
          }
          return tmp15;
        }
      }
      if (null != stateFromStores) {
        const isPremiumGroupMemberResult = stateFromStores.isPremiumGroupMember();
        if (!isPremiumGroupMemberResult) {
          const tmpResult6 = tmp(1976);
          class F {
            constructor() {
              return closure_1_3.getFlattenedGuildIds();
            }
          }
          const isPremiumResult = tmp(1976).isPremium(stateFromStores, PremiumTypes.TIER_2);
        }
        class F {
          constructor() {
            return closure_1_3.getFlattenedGuildIds();
          }
        }
      }
      cResult[6] = stateFromStoresArray;
      cResult[7] = stateFromStores;
      cResult[8] = stateFromStores1;
      cResult[9] = null != stateFromStores;
      tmp15 = tmp16;
      const tmpResult5 = stateFromStores(504);
    }
  : () => {
      let items = [UserStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj = stateFromStores(504);
      const tmp = stateFromStores;
      const items1 = [GuildBoostSlotStore];
      const stateFromStoresArray = stateFromStores(504).useStateFromStoresArray(items1, () => {
        if (hasFetched.hasFetched) {
          const _Object = Object;
          let items = Object.values(tmp.boostSlots);
        } else {
          items = [];
        }
        return items;
      });
      const obj3 = stateFromStores(504);
      const items2 = [SortedGuildStore];
      const stateFromStores1 = stateFromStores(504).useStateFromStores(items2, () =>
        flattenedGuildIds.getFlattenedGuildIds(),
      );
      let tmp3 = null != stateFromStores;
      if (tmp3) {
        const isPremiumGroupMemberResult = stateFromStores.isPremiumGroupMember();
        let tmp5 = !isPremiumGroupMemberResult;
        if (!isPremiumGroupMemberResult) {
          let isPremiumResult = tmp(1976).isPremium(stateFromStores, PremiumTypes.TIER_2);
          if (!isPremiumResult) {
            isPremiumResult =
              stateFromStoresArray.some(
                (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription,
              ) ||
              stateFromStores1.some((item) => {
                const member = GuildMemberStore.getMember(item, currentUser.id);
                let premiumSince;
                if (member != null) {
                  premiumSince = member.premiumSince;
                }
                return null != premiumSince;
              });
            const tmp8 =
              stateFromStoresArray.some(
                (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription,
              ) ||
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
          const tmpResult = tmp(1976);
        }
        tmp3 = tmp5;
      }
      return tmp3;
    };
export const getIsCurrentUserEligibleForPowerupUpsells = function getIsCurrentUserEligibleForPowerupUpsells() {
  const currentUser = UserStore.getCurrentUser();
  if (GuildBoostSlotStore.hasFetched) {
    const _Object = Object;
    let items = Object.values(tmp.boostSlots);
  } else {
    items = [];
  }
  const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
  let tmp3 = null != currentUser;
  if (tmp3) {
    const isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    let tmp5 = !isPremiumGroupMemberResult;
    if (!isPremiumGroupMemberResult) {
      let isPremiumResult = currentUser(1976).isPremium(currentUser, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult =
          items.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) ||
          flattenedGuildIds.some((item) => {
            const member = GuildMemberStore.getMember(item, currentUser.id);
            let premiumSince;
            if (member != null) {
              premiumSince = member.premiumSince;
            }
            return null != premiumSince;
          });
        const tmp10 =
          items.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) ||
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
      const obj3 = currentUser(1976);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
