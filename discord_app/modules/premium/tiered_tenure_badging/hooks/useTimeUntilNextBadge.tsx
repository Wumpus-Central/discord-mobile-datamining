// === Module 14776: useTimeUntilNextBadge ===

// Module 14776 (useTimeUntilNextBadge)
import _mod19 from "module_19" /* 19 */;
import _modDef2046 from "module_2046" /* 2046 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export const computeDaysUntilNextBadgeDate = function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = _modDef2046(arg0);
  const addResult = _modDef2046(arg0).add(arg1, "months");
  return Math.max(0, _modDef2046(arg0).add(arg1, "months").add(1, "day").diff(_modDef2046(), "days"));
};
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(14777).useNextTenureBadge();
  let obj = nextTenureBadge(14777);
  const premiumSince = nextTenureBadge(11114).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        const obj = _modDef2046(premiumSince);
        const addResult = _modDef2046(premiumSince).add(tenureReqNumMonths, "months");
        const obj2 = { days: null, months: null };
        const _Math = Math;
        const addResult1 = _modDef2046(premiumSince).add(tenureReqNumMonths, "months").add(1, "day");
        const obj5 = _modDef2046(premiumSince);
        const addResult2 = _modDef2046(premiumSince).add(tenureReqNumMonths, "months");
        obj2.days = Math.max(0, _modDef2046(premiumSince).add(tenureReqNumMonths, "months").add(1, "day").diff(_modDef2046(), "days"));
        const _Math2 = Math;
        const _Math3 = Math;
        obj2.months = Math.max(0, Math.round(addResult1.diff(_modDef2046(), "months", true)));
        return obj2;
      }
    }
    return null;
  }, items);
};