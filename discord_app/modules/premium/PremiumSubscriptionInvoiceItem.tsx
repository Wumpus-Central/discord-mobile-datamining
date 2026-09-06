// discord_app/modules/premium/PremiumSubscriptionInvoiceItem.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionInvoiceItem.tsx");

export const coalesceInvoiceItems = function coalesceInvoiceItems(arr) {
  const items = [];
  const set = new Set();
  const mapped = arr.map((subscriptionPlanId) => {
    for (const item10009 of items) {
      let tmp = item10009;
      let tmp3 = item10009;
      if (item10009.subscriptionPlanId === arg0.subscriptionPlanId) {
        if (tmp3.subscriptionPlanPrice === arg0.subscriptionPlanPrice) {
          if (tmp3.amount === arg0.amount) {
            let obj2 = _modDef12;
            if (obj2.isEqual(tmp3.discounts, arg0.discounts)) {
              let addResult = set.add(tmp.subscriptionPlanId);
              tmp.quantity = tmp.quantity + arg0.quantity;
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
  return {
    id: id.id,
    subscriptionPlanId: id.subscription_plan_id,
    subscriptionPlanPrice: id.subscription_plan_price,
    amount: id.amount,
    quantity: id.quantity,
    discounts: id.discounts,
    unitPrice: id.unit_price,
    tax: id.tax,
    taxCode: id.tax_code,
    nominalTaxRate: id.nominal_tax_rate,
  };
};
