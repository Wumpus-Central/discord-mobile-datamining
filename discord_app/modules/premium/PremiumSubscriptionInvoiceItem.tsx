// === Module 4049: coalesceInvoiceItems ===

// Module 4049 (coalesceInvoiceItems)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/premium/PremiumSubscriptionInvoiceItem.tsx");

export const coalesceInvoiceItems = function coalesceInvoiceItems(arr) {
  const items = [];
  const set = new Set();
  const mapped = arr.map((item, index) => {
    for (const item10009 of items) {
      if (item10009.subscriptionPlanId === arg0.subscriptionPlanId) {
        if (item10009.subscriptionPlanPrice === arg0.subscriptionPlanPrice) {
          if (item10009.amount === arg0.amount) {
            let obj2 = items(set[0]);
            if (obj2.isEqual(item10009.discounts, arg0.discounts)) {
              let addResult = set.add(item10009.subscriptionPlanId);
              item10009.quantity = item10009.quantity + arg0.quantity;
              obj.return();
            }
          }
        }
      }
      continue;
    }
    const obj = {};
    const merged = Object.assign(item);
    items.push(obj);
  });
  return items.map((item, index) => {
    let obj = {};
    let merged = Object.assign(item);
    if (set.has(item.subscriptionPlanId)) {
      obj.amount = obj.amount * obj.quantity;
      const discounts = obj.discounts;
      obj.discounts = discounts.map((item, index) => {
        obj = {};
        const merged = Object.assign(item);
        obj.amount = item.amount * obj.quantity;
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