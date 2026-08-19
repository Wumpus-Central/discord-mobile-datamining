// discord_app/modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import noop from "../../../../../_runtime/00019_noop.js";
import tDefault from "../../../../../_runtime/03975_t.js";

const useMemo = noop.useMemo;
const result = obj132.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export const computeDaysUntilNextBadgeDate = function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = tDefault(arg0);
  const addResult = tDefault(arg0).add(arg1, "months");
  return Math.max(0, tDefault(arg0).add(arg1, "months").add(1, "day").diff(tDefault(), "days"));
};
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(12877).useNextTenureBadge();
  let obj = nextTenureBadge(12877);
  const premiumSince = nextTenureBadge(9496).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        let obj = premiumSince(dependencyMap[1])(premiumSince);
        const addResult = obj.add(tenureReqNumMonths, "months");
        obj = { days: null, months: null };
        const _Math = Math;
        const addResult1 = obj.add(tenureReqNumMonths, "months").add(1, "day");
        const obj5 = premiumSince(dependencyMap[1])(premiumSince);
        const addResult2 = premiumSince(dependencyMap[1])(premiumSince).add(tenureReqNumMonths, "months");
        obj[0] = Math.max(0, premiumSince(dependencyMap[1])(premiumSince).add(tenureReqNumMonths, "months").add(1, "day").diff(premiumSince(dependencyMap[1])(), "days"));
        const _Math2 = Math;
        const _Math3 = Math;
        obj[1] = Math.max(0, Math.round(addResult1.diff(premiumSince(dependencyMap[1])(), "months", true)));
        return obj;
      }
    }
    return null;
  }, items);
};