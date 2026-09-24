// === Module 4492: InvoiceRecord ===

// Module 4492 (InvoiceRecord)
import PremiumSubscriptionInvoiceItem from "PremiumSubscriptionInvoiceItem" /* 4493 */;
import Record from "Record" /* 1387 */;

require = fn;
let BaseInvoiceRecord;
class BaseInvoiceRecord extends tmp2 {
  constructor(arg0) {
    tmp = new BaseInvoiceRecord(new.target, new.target, global);
    ({ total: tmp.total, subtotal: tmp.subtotal, tax: tmp.tax, currency: tmp.currency, invoiceItems } = global);
    if (invoiceItems == null) {
      invoiceItems = [];
    }
    tmp.invoiceItems = invoiceItems;
    return tmp;
  }
}
const prototype = BaseInvoiceRecord.prototype;
BaseInvoiceRecord["createFromServer"] = function createFromServer(currency) {
  ({ total, subtotal, tax, invoice_items } = currency);
  let mapped = invoice_items.map((skuId) => ({ skuId: skuId.sku_id, quantity: skuId.quantity, description: skuId.description }));
  if (typeof BaseInvoiceRecord === "function") {
    const tmp6 = new BaseInvoiceRecord(tmp, invoice_items, BaseInvoiceRecord, new.target, total, subtotal, tax);
    tmp6.total = total;
    tmp6.subtotal = subtotal;
    tmp6.tax = tax;
    tmp6.currency = currency.currency;
    if (mapped == null) {
      mapped = [];
    }
    tmp6.invoiceItems = mapped;
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
BaseInvoiceRecord["createInvoiceFromOrder"] = function createInvoiceFromOrder(billing_facet) {
  billing_facet = billing_facet.billing_facet;
  let invoice_preview = null;
  if (null != billing_facet) {
    invoice_preview = billing_facet.invoice_preview;
  }
  if (null == invoice_preview) {
    return null;
  } else {
    const line_items = invoice_preview.line_items;
    const mapped = line_items.map((unit_price) => {
      billing_facet = unit_price;
      const order_line_items = billing_facet.order_line_items;
      const found = order_line_items.find((id) => id.id === unit_price.ref_order_line_item_id);
      let tmp2 = null;
      if (null != found) {
        const obj = { skuId: found.sku_id, unitPrice: null, quantity: null };
        const obj2 = { amount: unit_price.unit_price, currency: invoice_preview.currency };
        obj.unitPrice = obj2;
        obj.quantity = unit_price.quantity;
        tmp2 = obj;
      }
      return tmp2;
    });
    let found = mapped.filter((item) => null != item);
    ({ total, subtotal, tax, currency } = invoice_preview);
    if (typeof BaseInvoiceRecord === "function") {
      const tmp6 = new BaseInvoiceRecord(tmp, tmp8, new.target, total, subtotal, tax, currency, found);
      tmp6.total = total;
      tmp6.subtotal = subtotal;
      tmp6.tax = tax;
      tmp6.currency = currency;
      if (found == null) {
        found = [];
      }
      tmp6.invoiceItems = found;
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
prototype["getInvoicePreviewLineItemForSku"] = function getInvoicePreviewLineItemForSku(arg0) {
  closure_0 = arg0;
  const invoiceItems = this.invoiceItems;
  let found = invoiceItems.find((skuId) => skuId.skuId === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getInvoicePreviewLineItemUnitPriceForSku"] = function getInvoicePreviewLineItemUnitPriceForSku(arg0) {
  const invoicePreviewLineItemForSku = this.getInvoicePreviewLineItemForSku(arg0);
  let amount = null;
  if (null != invoicePreviewLineItemForSku) {
    amount = null;
    if (null != invoicePreviewLineItemForSku.unitPrice) {
      amount = invoicePreviewLineItemForSku.unitPrice.amount;
    }
  }
  return amount;
};
let InvoiceRecord;
class InvoiceRecord extends BaseInvoiceRecord {
  constructor(arg0) {
    tmp = new InvoiceRecord(global, new.target, new.target);
    ({ id: tmp.id, invoiceItems } = global);
    if (invoiceItems == null) {
      invoiceItems = [];
    }
    tmp.invoiceItems = invoiceItems;
    ({ taxInclusive: tmp.taxInclusive, subscriptionPeriodStart: tmp.subscriptionPeriodStart, subscriptionPeriodEnd: tmp.subscriptionPeriodEnd, status: tmp.status, orbsReward: tmp.orbsReward, checkoutContext: tmp.checkoutContext } = global);
    return tmp;
  }
}
const prototype2 = InvoiceRecord.prototype;
InvoiceRecord["createInvoiceFromServer"] = function createInvoiceFromServer(body) {
  const obj = { id: body.id, invoiceItems: null, total: null, subtotal: null, currency: null, tax: null, taxInclusive: null, subscriptionPeriodStart: null, subscriptionPeriodEnd: null, status: null, orbsReward: null, checkoutContext: null };
  const invoice_items = body.invoice_items;
  let mapped;
  if (invoice_items != null) {
    mapped = invoice_items.map(PremiumSubscriptionInvoiceItem.createInvoiceItemFromServer);
  }
  obj.invoiceItems = mapped;
  ({ total: obj.total, subtotal: obj.subtotal, currency: obj.currency, tax: obj.tax, tax_inclusive: obj.taxInclusive } = body);
  obj.subscriptionPeriodStart = new Date(body.subscription_period_start);
  const date = new Date(body.subscription_period_start);
  const tmp6 = new.target;
  obj.subscriptionPeriodEnd = new Date(body.subscription_period_end);
  ({ status: obj.status, orbs_reward: obj.orbsReward, checkout_context: obj.checkoutContext } = body);
  if (typeof InvoiceRecord === "function") {
    const tmp12 = new InvoiceRecord(obj, require, Date, Date, tmp6);
    ({ id: tmp12.id, invoiceItems } = obj);
    if (invoiceItems == null) {
      invoiceItems = [];
    }
    tmp12.invoiceItems = invoiceItems;
    ({ taxInclusive: tmp12.taxInclusive, subscriptionPeriodStart: tmp12.subscriptionPeriodStart, subscriptionPeriodEnd: tmp12.subscriptionPeriodEnd, status: tmp12.status, orbsReward: tmp12.orbsReward, checkoutContext: tmp12.checkoutContext } = obj);
    return tmp12;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const date1 = new Date(body.subscription_period_end);
};
InvoiceRecord["createFromOrder"] = function createFromOrder(billing_facet) {
  billing_facet = billing_facet.billing_facet;
  let invoice_preview = null;
  if (null != billing_facet) {
    invoice_preview = billing_facet.invoice_preview;
  }
  if (null == invoice_preview) {
    return null;
  } else {
    const line_items = invoice_preview.line_items;
    const mapped = line_items.map((ref_order_line_item_id) => {
      billing_facet = ref_order_line_item_id;
      const order_line_items = billing_facet.order_line_items;
      const found = order_line_items.find((id) => id.id === closure_0.ref_order_line_item_id);
      let tmp2 = null;
      if (null != found) {
        let obj = { id: ref_order_line_item_id.ref_order_line_item_id, skuId: null, subscriptionPlanId: null, subscriptionPlanPrice: null, amount: null, quantity: null, unitPrice: null, discounts: null };
        ({ sku_id: obj.skuId, subscription_plan_id } = found);
        if (subscription_plan_id == null) {
          subscription_plan_id = "";
        }
        obj.subscriptionPlanId = subscription_plan_id;
        ({ unit_price: obj.subscriptionPlanPrice, total: obj.amount, quantity: obj.quantity } = ref_order_line_item_id);
        const obj2 = { amount: ref_order_line_item_id.unit_price, currency: invoice_preview.currency };
        obj.unitPrice = obj2;
        const discounts = ref_order_line_item_id.discounts;
        obj.discounts = discounts.map((type) => {
          const obj = { type: type.type, amount: type.amount, description: null, percentage_amount: null, discount_id: null };
          let str = type.description;
          if (str == null) {
            str = "";
          }
          obj.description = str;
          const percentage_amount = type.percentage_amount;
          obj.percentage_amount = percentage_amount;
          const discount_id = type.discount_id;
          obj.discount_id = discount_id;
          return obj;
        });
        tmp2 = obj;
      }
      return tmp2;
    });
    const line_items1 = invoice_preview.line_items;
    let found = mapped.filter((item) => null != item);
    const reduced = line_items1.reduce((acc, orbs_reward) => {
      let num = orbs_reward.orbs_reward;
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    let obj = { id: "", invoiceItems: found, total: null, subtotal: null, currency: null, tax: null, taxInclusive: null, subscriptionPeriodStart: null, subscriptionPeriodEnd: null, orbsReward: null, checkoutContext: null };
    ({ total: obj.total, subtotal: obj.subtotal, currency: obj.currency, tax: obj.tax, tax_inclusive: obj.taxInclusive } = invoice_preview);
    const _Date = Date;
    const date = new Date(0);
    obj.subscriptionPeriodStart = date;
    const _Date2 = Date;
    const date1 = new Date(0);
    obj.subscriptionPeriodEnd = date1;
    let tmp3;
    if (reduced > 0) {
      tmp3 = reduced;
    }
    obj.orbsReward = tmp3;
    const checkout_context = billing_facet.checkout_context;
    obj.checkoutContext = checkout_context;
    if (typeof InvoiceRecord === "function") {
      const tmp9 = new InvoiceRecord(obj, tmp, tmp15, tmp19, reduced, tmp3);
      ({ id: tmp9.id, invoiceItems } = obj);
      if (invoiceItems == null) {
        invoiceItems = [];
      }
      tmp9.invoiceItems = invoiceItems;
      ({ taxInclusive: tmp9.taxInclusive, subscriptionPeriodStart: tmp9.subscriptionPeriodStart, subscriptionPeriodEnd: tmp9.subscriptionPeriodEnd, status: tmp9.status, orbsReward: tmp9.orbsReward, checkoutContext: tmp9.checkoutContext } = obj);
      return tmp9;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    tmp15 = new.target;
    tmp19 = new.target;
  }
};
InvoiceRecord["createFromOTPPreview"] = function createFromOTPPreview(invoice_items) {
  invoice_items = invoice_items.invoice_items;
  let mapped;
  if (invoice_items != null) {
    mapped = invoice_items.map(PremiumSubscriptionInvoiceItem.createInvoiceItemFromServer);
  }
  const obj = { id: "", invoiceItems: mapped, total: invoice_items.amount, subtotal: invoice_items.subtotal, currency: invoice_items.currency, tax: invoice_items.tax, taxInclusive: invoice_items.tax_inclusive, subscriptionPeriodStart: new Date(0), subscriptionPeriodEnd: null, orbsReward: null, checkoutContext: null };
  const date = new Date(0);
  const tmp5 = new.target;
  const tmp7 = new.target;
  obj.subscriptionPeriodEnd = new Date(0);
  const orbs_reward = invoice_items.orbs_reward;
  obj.orbsReward = orbs_reward;
  obj.checkoutContext = invoice_items.checkout_context;
  if (typeof InvoiceRecord === "function") {
    const tmp13 = new InvoiceRecord(obj, require, tmp5, tmp7, orbs_reward, InvoiceRecord);
    ({ id: tmp13.id, invoiceItems } = obj);
    if (invoiceItems == null) {
      invoiceItems = [];
    }
    tmp13.invoiceItems = invoiceItems;
    ({ taxInclusive: tmp13.taxInclusive, subscriptionPeriodStart: tmp13.subscriptionPeriodStart, subscriptionPeriodEnd: tmp13.subscriptionPeriodEnd, status: tmp13.status, orbsReward: tmp13.orbsReward, checkoutContext: tmp13.checkoutContext } = obj);
    return tmp13;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const date1 = new Date(0);
};
prototype2["findInvoiceItemByPlanId"] = function findInvoiceItemByPlanId(id) {
  closure_0 = id;
  const invoiceItems = this.invoiceItems;
  let found = invoiceItems.find((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype2["getDiscountIdIfExists"] = function getDiscountIdIfExists() {
  const invoiceItems = this.invoiceItems;
  const found = invoiceItems.find((discounts) => discounts.discounts.length > 0);
  if (null != found) {
    if (0 !== found.discounts.length) {
      const first = found.discounts[0];
      if (null != first) {
        return first.discount_id;
      }
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("records/InvoiceRecord.tsx");

export default InvoiceRecord;
export { BaseInvoiceRecord };