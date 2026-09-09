// === Module 13467: useTimeUntilNextBadge ===

// Module 13467 (useTimeUntilNextBadge)
import _mod19 from "module_19" /* 19 */;
import _modDef4166 from "module_4166" /* 4166 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export const computeDaysUntilNextBadgeDate = function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = _modDef4166(arg0);
  const addResult = _modDef4166(arg0).add(arg1, "months");
  return Math.max(0, _modDef4166(arg0).add(arg1, "months").add(1, "day").diff(_modDef4166(), "days"));
};
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(13468).useNextTenureBadge();
  let obj = nextTenureBadge(13468);
  const premiumSince = nextTenureBadge(11216).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        let obj = _modDef4166(premiumSince);
        const addResult = obj.add(tenureReqNumMonths, "months");
        obj = { days: null, months: null };
        const _Math = Math;
        const addResult1 = obj.add(tenureReqNumMonths, "months").add(1, "day");
        const obj5 = _modDef4166(premiumSince);
        const addResult2 = _modDef4166(premiumSince).add(tenureReqNumMonths, "months");
        obj.days = Math.max(0, _modDef4166(premiumSince).add(tenureReqNumMonths, "months").add(1, "day").diff(_modDef4166(), "days"));
        const _Math2 = Math;
        const _Math3 = Math;
        obj.months = Math.max(0, Math.round(addResult1.diff(_modDef4166(), "months", true)));
        return obj;
      }
    }
    return null;
  }, items);
};