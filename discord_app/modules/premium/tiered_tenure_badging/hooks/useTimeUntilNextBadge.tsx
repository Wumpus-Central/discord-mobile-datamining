// === Module 15274: useTimeUntilNextBadge ===

// Module 15274 (useTimeUntilNextBadge)
import _mod19 from "module_19" /* 19 */;
import _modDef2044 from "module_2044" /* 2044 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = _modDef2044(arg0);
  const addResult = _modDef2044(arg0).add(arg1, "months");
  return Math.max(0, _modDef2044(arg0).add(arg1, "months").add(1, "day").diff(_modDef2044(), "days"));
}
export function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(15275).useNextTenureBadge();
  let obj = nextTenureBadge(15275);
  const premiumSince = nextTenureBadge(11408).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        const obj = _modDef2044(premiumSince);
        const addResult = _modDef2044(premiumSince).add(tenureReqNumMonths, "months");
        const obj2 = { days: null, months: null };
        const _Math = Math;
        const addResult1 = _modDef2044(premiumSince).add(tenureReqNumMonths, "months").add(1, "day");
        const obj5 = _modDef2044(premiumSince);
        const addResult2 = _modDef2044(premiumSince).add(tenureReqNumMonths, "months");
        obj2.days = Math.max(0, _modDef2044(premiumSince).add(tenureReqNumMonths, "months").add(1, "day").diff(_modDef2044(), "days"));
        const _Math2 = Math;
        const _Math3 = Math;
        obj2.months = Math.max(0, Math.round(addResult1.diff(_modDef2044(), "months", true)));
        return obj2;
      }
    }
    return null;
  }, items);
}