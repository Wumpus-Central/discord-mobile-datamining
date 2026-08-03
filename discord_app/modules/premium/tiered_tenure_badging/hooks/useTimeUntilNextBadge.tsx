import { useMemo } from "noop";

const result = require("useNextTenureBadge").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export const computeDaysUntilNextBadgeDate = function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = importDefault(3775)(arg0);
  const addResult = importDefault(3775)(arg0).add(arg1, "months");
  return Math.max(0, importDefault(3775)(arg0).add(arg1, "months").add(1, "day").diff(importDefault(3775)(), "days"));
};
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(12491).useNextTenureBadge();
  let obj = nextTenureBadge(12491);
  const premiumSince = nextTenureBadge(8434).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        let obj = premiumSince(outer1_2[1])(tmp2);
        const addResult = obj.add(tenureReqNumMonths, "months");
        obj = { days: null, months: null };
        const _Math = Math;
        const addResult1 = obj.add(tenureReqNumMonths, "months").add(1, "day");
        const obj5 = premiumSince(outer1_2[1])(tmp2);
        const addResult2 = premiumSince(outer1_2[1])(tmp2).add(tenureReqNumMonths, "months");
        obj[0] = Math.max(0, premiumSince(outer1_2[1])(tmp2).add(tenureReqNumMonths, "months").add(1, "day").diff(premiumSince(outer1_2[1])(), "days"));
        const _Math2 = Math;
        const _Math3 = Math;
        obj[1] = Math.max(0, Math.round(addResult1.diff(premiumSince(outer1_2[1])(), "months", true)));
        return obj;
      }
    }
    return null;
  }, items);
};