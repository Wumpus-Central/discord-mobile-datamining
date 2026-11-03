// discord_app/modules/premium/promotions/selectActiveMarketingComponent.tsx
import size from "../../../../_runtime/metro/00002__.js";

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
const result = size.fileFinishedImporting("modules/premium/promotions/selectActiveMarketingComponent.tsx");

export default function selectActiveMarketingComponent(arr, date, arg2) {
  if (arg2 === undefined) {
    const fn = function o() {
      return true;
    };
  }
  const found = arr.filter((isTimed) => {
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
  let tmp = null;
  if (0 !== found.length) {
    items = [];
    HermesBuiltin.arraySpread(found, 0);
    let first = items.sort(comparePriorityDescending)[0];
    if (first == null) {
      first = null;
    }
    tmp = first;
  }
  return tmp;
}
