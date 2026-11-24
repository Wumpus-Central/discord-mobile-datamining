// === Module 9082: filterActiveMarketingComponentsUnprioritized ===

// Module 9082 (filterActiveMarketingComponentsUnprioritized)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/promotions/utils/filterActiveMarketingComponentsUnprioritized.tsx");

export default function filterActiveMarketingComponentsUnprioritized(arr, date, arg2) {
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function o() {
      return true;
    };
  }
  return arr.filter((isTimed) => {
    ({ effectiveStartDate, effectiveEndDate } = isTimed);
    let tmp = null != effectiveStartDate;
    if (tmp) {
      const time = date.getTime();
      tmp = time < effectiveStartDate.getTime();
    }
    if (!tmp) {
      let tmp3 = null != effectiveEndDate;
      if (tmp3) {
        const time1 = date.getTime();
        tmp3 = time1 > effectiveEndDate.getTime();
      }
      tmp = tmp3;
    }
    let tmp5 = !tmp;
    if (tmp5) {
      isTimed = isTimed.isTimed;
      let tmp6 = !isTimed;
      if (isTimed) {
        tmp6 = fn(isTimed);
      }
      tmp5 = tmp6;
    }
    return tmp5;
  });
};