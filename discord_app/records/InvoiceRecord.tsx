// discord_app/records/InvoiceRecord.tsx
import PremiumSubscriptionInvoiceItem from "../modules/premium/PremiumSubscriptionInvoiceItem.tsx";
import Record from "../lib/Record.tsx";

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
  let mapped = invoice_items.map((skuId) => ({
    skuId: skuId.sku_id,
    quantity: skuId.quantity,
    description: skuId.description,
  }));
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
        let obj = { skuId: found.sku_id, unitPrice: null, quantity: null };
        obj = { amount: unit_price.unit_price, currency: invoice_preview.currency };
        obj.unitPrice = obj;
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
    ({
      taxInclusive: tmp.taxInclusive,
      subscriptionPeriodStart: tmp.subscriptionPeriodStart,
      subscriptionPeriodEnd: tmp.subscriptionPeriodEnd,
      status: tmp.status,
      orbsReward: tmp.orbsReward,
      checkoutContext: tmp.checkoutContext,
    } = global);
    return tmp;
  }
}
const prototype2 = InvoiceRecord.prototype;
InvoiceRecord["createInvoiceFromServer"] = function createInvoiceFromServer(body) {
  const obj = {
    id: body.id,
    invoiceItems: null,
    total: null,
    subtotal: null,
    currency: null,
    tax: null,
    taxInclusive: null,
    subscriptionPeriodStart: null,
    subscriptionPeriodEnd: null,
    status: null,
    orbsReward: null,
    checkoutContext: null,
  };
  const invoice_items = body.invoice_items;
  let mapped;
  if (invoice_items != null) {
    mapped = invoice_items.map(PremiumSubscriptionInvoiceItem.createInvoiceItemFromServer);
  }
  obj.invoiceItems = mapped;
  ({
    total: obj.total,
    subtotal: obj.subtotal,
    currency: obj.currency,
    tax: obj.tax,
    tax_inclusive: obj.taxInclusive,
  } = body);
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
    ({
      taxInclusive: tmp12.taxInclusive,
      subscriptionPeriodStart: tmp12.subscriptionPeriodStart,
      subscriptionPeriodEnd: tmp12.subscriptionPeriodEnd,
      status: tmp12.status,
      orbsReward: tmp12.orbsReward,
      checkoutContext: tmp12.checkoutContext,
    } = obj);
    return tmp12;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const date1 = new Date(body.subscription_period_end);
};
InvoiceRecord["createFromOTPPreview"] = function createFromOTPPreview(invoice_items) {
  invoice_items = invoice_items.invoice_items;
  let mapped;
  if (invoice_items != null) {
    mapped = invoice_items.map(PremiumSubscriptionInvoiceItem.createInvoiceItemFromServer);
  }
  const obj = {
    id: "",
    invoiceItems: mapped,
    total: invoice_items.amount,
    subtotal: invoice_items.subtotal,
    currency: invoice_items.currency,
    tax: invoice_items.tax,
    taxInclusive: invoice_items.tax_inclusive,
    subscriptionPeriodStart: new Date(0),
    subscriptionPeriodEnd: null,
    orbsReward: null,
    checkoutContext: null,
  };
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
    ({
      taxInclusive: tmp13.taxInclusive,
      subscriptionPeriodStart: tmp13.subscriptionPeriodStart,
      subscriptionPeriodEnd: tmp13.subscriptionPeriodEnd,
      status: tmp13.status,
      orbsReward: tmp13.orbsReward,
      checkoutContext: tmp13.checkoutContext,
    } = obj);
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
