// discord_app/modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import _modDef4153 from "../../../../../_runtime/metro/04153__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export const computeDaysUntilNextBadgeDate = function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = _modDef4153(arg0);
  const addResult = _modDef4153(arg0).add(arg1, "months");
  return Math.max(0, _modDef4153(arg0).add(arg1, "months").add(1, "day").diff(_modDef4153(), "days"));
};
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(13441).useNextTenureBadge();
  let obj = nextTenureBadge(13441);
  const premiumSince = nextTenureBadge(11184).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        let obj = _modDef4153(premiumSince);
        const addResult = obj.add(tenureReqNumMonths, "months");
        obj = { days: null, months: null };
        const _Math = Math;
        const addResult1 = obj.add(tenureReqNumMonths, "months").add(1, "day");
        const obj5 = _modDef4153(premiumSince);
        const addResult2 = _modDef4153(premiumSince).add(tenureReqNumMonths, "months");
        obj.days = Math.max(
          0,
          _modDef4153(premiumSince).add(tenureReqNumMonths, "months").add(1, "day").diff(_modDef4153(), "days"),
        );
        const _Math2 = Math;
        const _Math3 = Math;
        obj.months = Math.max(0, Math.round(addResult1.diff(_modDef4153(), "months", true)));
        return obj;
      }
    }
    return null;
  }, items);
};
