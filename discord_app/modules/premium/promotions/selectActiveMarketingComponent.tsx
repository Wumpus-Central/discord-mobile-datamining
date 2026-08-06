// discord_app/modules/premium/promotions/selectActiveMarketingComponent.tsx
function comparePriorityDescending(effectiveStartDate, effectiveStartDate2) {
  effectiveStartDate = effectiveStartDate.effectiveStartDate;
  let num;
  if (effectiveStartDate != null) {
    num = effectiveStartDate.getTime();
  }
  if (num == null) {
    num = -Infinity;
  }
  effectiveStartDate2 = effectiveStartDate2.effectiveStartDate;
  let num2;
  if (effectiveStartDate2 != null) {
    num2 = effectiveStartDate2.getTime();
  }
  if (num2 == null) {
    num2 = -Infinity;
  }
  if (num !== num2) {
    return num2 - num;
  } else {
    const effectiveEndDate2 = effectiveStartDate.effectiveEndDate;
    let num3;
    if (effectiveEndDate2 != null) {
      num3 = effectiveEndDate2.getTime();
    }
    if (num3 == null) {
      num3 = Infinity;
    }
    const effectiveEndDate = effectiveStartDate2.effectiveEndDate;
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
      const BigIntResult = BigInt(effectiveStartDate.id);
      const _BigInt2 = BigInt;
      const BigIntResult1 = BigInt(effectiveStartDate2.id);
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
const result = require("set").fileFinishedImporting("modules/premium/promotions/selectActiveMarketingComponent.tsx");

export default function selectActiveMarketingComponent(arr) {
  let closure_0 = arg1;
  const found = arr.filter((arg0) => {
    let effectiveEndDate;
    let effectiveStartDate;
    ({ effectiveStartDate, effectiveEndDate } = arg0);
    let tmp = null != effectiveStartDate;
    if (tmp) {
      const time = obj.getTime();
      tmp = time < effectiveStartDate.getTime();
    }
    if (!tmp) {
      let tmp3 = null != effectiveEndDate;
      if (tmp3) {
        const time1 = obj.getTime();
        tmp3 = time1 > effectiveEndDate.getTime();
      }
      tmp = tmp3;
    }
    return !tmp;
  });
  let tmp = null;
  if (0 !== found.length) {
    const items = [];
    HermesBuiltin.arraySpread(found, 0);
    let first = items.sort(closure_0)[0];
    if (first == null) {
      first = null;
    }
    tmp = first;
  }
  return tmp;
};