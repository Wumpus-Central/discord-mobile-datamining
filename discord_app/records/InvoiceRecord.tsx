// === Module 3848: createFromServer ===

// Module 3848 (createFromServer)
import "toJS";

const require = arg1;
let BaseInvoiceRecord;
class BaseInvoiceRecord extends tmp2 {
  constructor(arg0) {
    tmp = new BaseInvoiceRecord(new.target, new.target, global);
    // ThrowIfThisInitialized (0x7c)
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
  let invoice_items;
  let subtotal;
  let tax;
  let total;
  ({ total, subtotal, tax, invoice_items } = currency);
  let mapped = invoice_items.map((skuId) => ({ skuId: skuId.sku_id, quantity: skuId.quantity, description: skuId.description }));
  if (typeof BaseInvoiceRecord !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new BaseInvoiceRecord("Trying to call a non-function", invoice_items, BaseInvoiceRecord, new.target, total, subtotal, tax);
  // ThrowIfThisInitialized (0x7c)
  tmp2.total = total;
  tmp2.subtotal = subtotal;
  tmp2.tax = tax;
  tmp2.currency = currency.currency;
  if (mapped == null) {
    mapped = [];
  }
  tmp2.invoiceItems = mapped;
  return tmp2;
};
BaseInvoiceRecord["createInvoiceFromOrder"] = function createInvoiceFromOrder(billing_facet) {
  let currency;
  let subtotal;
  let tax;
  let total;
  let closure_0 = billing_facet;
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
      const billing_facet = unit_price;
      const order_line_items = billing_facet.order_line_items;
      const found = order_line_items.find((id) => id.id === unit_price.ref_order_line_item_id);
      let tmp2 = null;
      if (null != found) {
        let obj = { skuId: null, unitPrice: null, quantity: null };
        obj[0] = found.sku_id;
        obj = { amount: null, currency: null };
        obj[0] = unit_price.unit_price;
        obj[1] = invoice_preview.currency;
        obj[1] = obj;
        obj[2] = unit_price.quantity;
        tmp2 = obj;
      }
      return tmp2;
    });
    let found = mapped.filter((arg0) => null != arg0);
    ({ total, subtotal, tax, currency } = invoice_preview);
    if (typeof BaseInvoiceRecord !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    const tmp5 = new BaseInvoiceRecord("Trying to call a non-function", BaseInvoiceRecord, new.target, total, subtotal, tax, currency, found);
    // ThrowIfThisInitialized (0x7c)
    tmp5.total = total;
    tmp5.subtotal = subtotal;
    tmp5.tax = tax;
    tmp5.currency = currency;
    if (found == null) {
      found = [];
    }
    tmp5.invoiceItems = found;
    return tmp5;
  }
};
prototype["getInvoicePreviewLineItemForSku"] = function getInvoicePreviewLineItemForSku(arg0) {
  let closure_0 = arg0;
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
    // ThrowIfThisInitialized (0x7c)
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
  let invoiceItems;
  const obj = { id: body.id, invoiceItems: null, total: null, subtotal: null, currency: null, tax: null, taxInclusive: null, subscriptionPeriodStart: null, subscriptionPeriodEnd: null, status: null, orbsReward: null, checkoutContext: null };
  const invoice_items = body.invoice_items;
  let mapped;
  if (invoice_items != null) {
    mapped = invoice_items.map(require(3849) /* coalesceInvoiceItems */.createInvoiceItemFromServer);
    const tmp3 = require;
  }
  obj[1] = mapped;
  ({ total: obj[2], subtotal: obj[3], currency: obj[4], tax: obj[5], tax_inclusive: obj[6] } = body);
  obj[7] = new Date(body.subscription_period_start);
  const date = new Date(body.subscription_period_start);
  const tmp = InvoiceRecord;
  const tmp6 = new.target;
  obj[8] = new Date(body.subscription_period_end);
  ({ status: obj[9], orbs_reward: obj[10], checkout_context: obj[11] } = body);
  if (typeof tmp !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const tmp8 = new InvoiceRecord(obj, tmp3, Date, Date, tmp6);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp8.id, invoiceItems } = obj);
  if (invoiceItems == null) {
    invoiceItems = [];
  }
  tmp8.invoiceItems = invoiceItems;
  ({ taxInclusive: tmp8.taxInclusive, subscriptionPeriodStart: tmp8.subscriptionPeriodStart, subscriptionPeriodEnd: tmp8.subscriptionPeriodEnd, status: tmp8.status, orbsReward: tmp8.orbsReward, checkoutContext: tmp8.checkoutContext } = obj);
  return tmp8;
};
InvoiceRecord["createFromOTPPreview"] = function createFromOTPPreview(invoice_items) {
  let invoiceItems;
  invoice_items = invoice_items.invoice_items;
  let mapped;
  if (invoice_items != null) {
    mapped = invoice_items.map(require(3849) /* coalesceInvoiceItems */.createInvoiceItemFromServer);
    const tmp3 = require;
  }
  const obj = { id: "", invoiceItems: mapped, total: invoice_items.amount, subtotal: invoice_items.subtotal, currency: invoice_items.currency, tax: invoice_items.tax, taxInclusive: invoice_items.tax_inclusive, subscriptionPeriodStart: null, subscriptionPeriodEnd: null, orbsReward: null, checkoutContext: null };
  obj[7] = new Date(0);
  const date = new Date(0);
  const tmp5 = new.target;
  const tmp7 = new.target;
  obj[8] = new Date(0);
  const orbs_reward = invoice_items.orbs_reward;
  obj[9] = orbs_reward;
  obj[10] = invoice_items.checkout_context;
  if (typeof InvoiceRecord !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const tmp9 = new InvoiceRecord(obj, tmp3, tmp5, tmp7, orbs_reward, InvoiceRecord);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp9.id, invoiceItems } = obj);
  if (invoiceItems == null) {
    invoiceItems = [];
  }
  tmp9.invoiceItems = invoiceItems;
  ({ taxInclusive: tmp9.taxInclusive, subscriptionPeriodStart: tmp9.subscriptionPeriodStart, subscriptionPeriodEnd: tmp9.subscriptionPeriodEnd, status: tmp9.status, orbsReward: tmp9.orbsReward, checkoutContext: tmp9.checkoutContext } = obj);
  return tmp9;
};
prototype2["findInvoiceItemByPlanId"] = function findInvoiceItemByPlanId(id) {
  let closure_0 = id;
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
const result = require("set").fileFinishedImporting("records/InvoiceRecord.tsx");

export default InvoiceRecord;
export { BaseInvoiceRecord };