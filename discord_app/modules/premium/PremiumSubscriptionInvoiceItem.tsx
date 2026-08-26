// === Module 4117: coalesceInvoiceItems ===

// Module 4117 (coalesceInvoiceItems)
import set2 from "set" /* 2 */;

const result = set2.fileFinishedImporting("modules/premium/PremiumSubscriptionInvoiceItem.tsx");

export const coalesceInvoiceItems = function coalesceInvoiceItems(arr) {
  const items = [];
  const set = new Set();
  const mapped = arr.map((subscriptionPlanId) => {
    for (const item10009 of items) {
      let tmp = item10009;
      let tmp2 = arg0;
      let tmp3 = item10009;
      if (item10009.subscriptionPlanId === arg0.subscriptionPlanId) {
        let tmp4 = item10009;
        let tmp5 = arg0;
        if (tmp3.subscriptionPlanPrice === arg0.subscriptionPlanPrice) {
          let tmp6 = item10009;
          let tmp7 = arg0;
          if (tmp3.amount === arg0.amount) {
            let tmp8 = items;
            let tmp9 = set;
            let obj2 = items(set[0]);
            let tmp10 = item10009;
            let tmp11 = arg0;
            if (obj2.isEqual(tmp3.discounts, arg0.discounts)) {
              let tmp12 = set;
              let tmp13 = item10009;
              let addResult = set.add(tmp.subscriptionPlanId);
              tmp.quantity = tmp.quantity + arg0.quantity;
              let tmp15 = obj;
              obj.return();
            }
          }
        }
      }
      continue;
    }
    const obj = {};
    const merged = Object.assign(subscriptionPlanId);
    items.push(obj);
  });
  return items.map((subscriptionPlanId) => {
    let obj = {};
    let merged = Object.assign(subscriptionPlanId);
    if (set.has(subscriptionPlanId.subscriptionPlanId)) {
      obj.amount = obj.amount * obj.quantity;
      const discounts = obj.discounts;
      obj.discounts = discounts.map((amount) => {
        obj = {};
        const merged = Object.assign(amount);
        obj.amount = amount.amount * obj.quantity;
        return obj;
      });
      if (null != obj.tax) {
        obj.tax = obj.tax * obj.quantity;
      }
    }
    return obj;
  });
};
export const createInvoiceItemFromServer = function createInvoiceItemFromServer(id) {
  return { id: id.id, subscriptionPlanId: id.subscription_plan_id, subscriptionPlanPrice: id.subscription_plan_price, amount: id.amount, quantity: id.quantity, discounts: id.discounts, unitPrice: id.unit_price, tax: id.tax, taxCode: id.tax_code, nominalTaxRate: id.nominal_tax_rate };
};