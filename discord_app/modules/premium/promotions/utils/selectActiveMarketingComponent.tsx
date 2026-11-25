// === Module 9180: selectActiveMarketingComponent ===

// Module 9180 (selectActiveMarketingComponent)
import filterActiveMarketingComponentsUnprioritizedDefault from "filterActiveMarketingComponentsUnprioritized" /* 9181 */;
import size from "module_2" /* 2 */;

function comparePriorityDescending(promotionPriority, promotionPriority2) {
  if (promotionPriority.promotionPriority !== promotionPriority2.promotionPriority) {
    return promotionPriority.promotionPriority - promotionPriority2.promotionPriority;
  } else {
    const effectiveStartDate2 = promotionPriority.effectiveStartDate;
    let num;
    if (effectiveStartDate2 != null) {
      num = effectiveStartDate2.getTime();
    }
    if (num == null) {
      num = -Infinity;
    }
    const effectiveStartDate = promotionPriority2.effectiveStartDate;
    let num2;
    if (effectiveStartDate != null) {
      num2 = effectiveStartDate.getTime();
    }
    if (num2 == null) {
      num2 = -Infinity;
    }
    if (num !== num2) {
      return num2 - num;
    } else {
      const effectiveEndDate2 = promotionPriority.effectiveEndDate;
      let num3;
      if (effectiveEndDate2 != null) {
        num3 = effectiveEndDate2.getTime();
      }
      if (num3 == null) {
        num3 = Infinity;
      }
      const effectiveEndDate = promotionPriority2.effectiveEndDate;
      let num4;
      if (effectiveEndDate != null) {
        num4 = effectiveEndDate.getTime();
      }
      if (num4 == null) {
        num4 = Infinity;
      }
      if (num3 !== num4) {
        return num4 - num3;
      } else {
        const _BigInt = BigInt;
        const BigIntResult = BigInt(promotionPriority.id);
        const _BigInt2 = BigInt;
        const BigIntResult1 = BigInt(promotionPriority2.id);
        let num5 = 0;
        if (BigIntResult !== BigIntResult1) {
          let num6 = -1;
          if (BigIntResult1 > BigIntResult) {
            num6 = 1;
          }
          num5 = num6;
        }
        return num5;
      }
    }
  }
}
const result = size.fileFinishedImporting("modules/premium/promotions/utils/selectActiveMarketingComponent.tsx");

export default function selectActiveMarketingComponent(items1, date, arg2) {
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function o() {
      return true;
    };
  }
  const arr = filterActiveMarketingComponentsUnprioritizedDefault(items1, date, fn);
  let tmp = null;
  if (0 !== arr.length) {
    items = [];
    HermesBuiltin.arraySpread(arr, 0);
    let first = items.sort(comparePriorityDescending)[0];
    if (first == null) {
      first = null;
    }
    tmp = first;
  }
  return tmp;
};