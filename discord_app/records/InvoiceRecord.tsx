// === Module 4543: InvoiceRecord ===

// Module 4543 (InvoiceRecord)
import PremiumSubscriptionInvoiceItem from "PremiumSubscriptionInvoiceItem" /* 4544 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

let billing_facet, order_line_items;

class BaseInvoiceRecord extends Record {
  constructor(currency) {
    let invoiceItems;
    const tmp = new BaseInvoiceRecord(new.target, this, currency);
    ({ id: tmp.id, total: tmp.total, subtotal: tmp.subtotal, tax: tmp.tax, currency: tmp.currency, invoiceItems } = currency);
    if (invoiceItems == null) {
      invoiceItems = [];
    }
    tmp.invoiceItems = invoiceItems;
    return tmp;
  }
  static createFromServer(currency) {
    let id;
    let invoice_items;
    let subtotal;
    let tax;
    let total;
    ({ id, total, subtotal, tax, invoice_items } = currency);
    currency = currency.currency;
    let mapped = invoice_items.map((skuId) => ({ skuId: skuId.sku_id, quantity: skuId.quantity, description: skuId.description }));
    if (typeof BaseInvoiceRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp4 = new BaseInvoiceRecord(tmp, invoice_items, BaseInvoiceRecord, this, id, total, subtotal, tax);
      tmp4.id = id;
      tmp4.total = total;
      tmp4.subtotal = subtotal;
      tmp4.tax = tax;
      tmp4.currency = currency;
      if (mapped == null) {
        mapped = [];
      }
      tmp4.invoiceItems = mapped;
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static createInvoiceFromOrder(billing_facet) {
    let currency;
    let invoiceItems;
    let tax;
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
        let obj2;
        order_line_items = unit_price;
        order_line_items = order_line_items.order_line_items;
        const found = order_line_items.find((id) => id.id === closure_0.ref_order_line_item_id);
        let tmp2 = null;
        if (null != found) {
          const obj = { skuId: found.sku_id, unitPrice: obj2, quantity: unit_price.quantity };
          tmp2 = obj;
          obj2 = { amount: unit_price.unit_price, currency: invoice_preview.currency };
        }
        return tmp2;
      });
      let obj = { total: null, subtotal: null, tax, currency, invoiceItems: mapped.filter((item) => null != item) };
      ({ total: obj.total, subtotal: obj.subtotal, tax } = invoice_preview);
      currency = invoice_preview.currency;
      const self3 = this;
      if (typeof BaseInvoiceRecord === "function") {
        const self = this;
        const self2 = this;
        const tmp4 = new BaseInvoiceRecord(tmp, tax, currency, tmp6);
        ({ id: tmp4.id, total: tmp4.total, subtotal: tmp4.subtotal, tax: tmp4.tax, currency: tmp4.currency, invoiceItems } = obj);
        if (invoiceItems == null) {
          invoiceItems = [];
        }
        tmp4.invoiceItems = invoiceItems;
        return tmp4;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  getInvoicePreviewLineItemForSku(arg0) {
    let closure_0 = arg0;
    const invoiceItems = this.invoiceItems;
    let found = invoiceItems.find((skuId) => skuId.skuId === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  }
  getInvoicePreviewLineItemUnitPriceForSku(arg0) {
    const invoicePreviewLineItemForSku = this.getInvoicePreviewLineItemForSku(arg0);
    let amount = null;
    if (null != invoicePreviewLineItemForSku) {
      amount = null;
      if (null != invoicePreviewLineItemForSku.unitPrice) {
        amount = invoicePreviewLineItemForSku.unitPrice.amount;
      }
    }
    return amount;
  }
}
const prototype = BaseInvoiceRecord.prototype;
class InvoiceRecord extends BaseInvoiceRecord {
  constructor(arg0) {
    let invoiceItems;
    const tmp = new InvoiceRecord(arg0, new.target, this);
    ({ id: tmp.id, invoiceItems } = arg0);
    if (invoiceItems == null) {
      invoiceItems = [];
    }
    tmp.invoiceItems = invoiceItems;
    ({ taxInclusive: tmp.taxInclusive, subscriptionPeriodStart: tmp.subscriptionPeriodStart, subscriptionPeriodEnd: tmp.subscriptionPeriodEnd, status: tmp.status, orbsReward: tmp.orbsReward, checkoutContext: tmp.checkoutContext, applyWalletBalance: tmp.applyWalletBalance } = arg0);
    return tmp;
  }
  static createInvoiceFromServer(body) {
    let invoiceItems;
    let mapped;
    const obj = { id: body.id, invoiceItems: mapped, total: null, subtotal: null, currency: null, tax: null, taxInclusive: null, subscriptionPeriodStart: new Date(body.subscription_period_start), subscriptionPeriodEnd: new Date(body.subscription_period_end), status: null, orbsReward: null, checkoutContext: null };
    const invoice_items = body.invoice_items;
    mapped = undefined;
    if (invoice_items != null) {
      mapped = invoice_items.map(PremiumSubscriptionInvoiceItem.createInvoiceItemFromServer);
    }
    ({ total: obj.total, subtotal: obj.subtotal, currency: obj.currency, tax: obj.tax, tax_inclusive: obj.taxInclusive } = body);
    const _Date = Date;
    const _Date2 = Date;
    new Date(body.subscription_period_start);
    ({ status: obj.status, orbs_reward: obj.orbsReward, checkout_context: obj.checkoutContext } = body);
    new Date(body.subscription_period_end);
    if (typeof InvoiceRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp9 = new InvoiceRecord(obj, require, _Date, _Date2, this);
      ({ id: tmp9.id, invoiceItems } = obj);
      if (invoiceItems == null) {
        invoiceItems = [];
      }
      tmp9.invoiceItems = invoiceItems;
      ({ taxInclusive: tmp9.taxInclusive, subscriptionPeriodStart: tmp9.subscriptionPeriodStart, subscriptionPeriodEnd: tmp9.subscriptionPeriodEnd, status: tmp9.status, orbsReward: tmp9.orbsReward, checkoutContext: tmp9.checkoutContext, applyWalletBalance: tmp9.applyWalletBalance } = obj);
      return tmp9;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static createFromOrder(billing_facet) {
    let checkout_context;
    let date;
    let date1;
    let invoiceItems;
    let tmp3;
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
      const mapped = line_items.map((ref_order_line_item_id) => {
        let discounts;
        let obj2;
        let subscription_plan_id;
        order_line_items = ref_order_line_item_id;
        order_line_items = order_line_items.order_line_items;
        const found = order_line_items.find((id) => id.id === closure_0.ref_order_line_item_id);
        let tmp2 = null;
        if (null != found) {
          let obj = {
            id: ref_order_line_item_id.ref_order_line_item_id,
            skuId: null,
            subscriptionPlanId: subscription_plan_id,
            subscriptionPlanPrice: null,
            amount: null,
            quantity: null,
            unitPrice: obj2,
            discounts: discounts.map((type) => {
                let discount_id;
                let percentage_amount;
                let str;
                const obj = { type: type.type, amount: type.amount, description: str, percentage_amount, discount_id };
                str = type.description;
                if (str == null) {
                  str = "";
                }
                percentage_amount = type.percentage_amount;
                discount_id = type.discount_id;
                return obj;
              })
          };
          ({ sku_id: obj.skuId, subscription_plan_id } = found);
          if (subscription_plan_id == null) {
            subscription_plan_id = "";
          }
          ({ unit_price: obj.subscriptionPlanPrice, total: obj.amount, quantity: obj.quantity } = ref_order_line_item_id);
          discounts = ref_order_line_item_id.discounts;
          tmp2 = obj;
          obj2 = { amount: ref_order_line_item_id.unit_price, currency: invoice_preview.currency };
        }
        return tmp2;
      });
      const line_items1 = invoice_preview.line_items;
      let num = 0;
      let found = mapped.filter((item) => null != item);
      const reduced = line_items1.reduce((acc, orbs_reward) => {
        let num = orbs_reward.orbs_reward;
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0);
      let obj = { id: "", invoiceItems: found, total: null, subtotal: null, currency: null, tax: null, taxInclusive: null, subscriptionPeriodStart: date, subscriptionPeriodEnd: date1, orbsReward: tmp3, checkoutContext: checkout_context };
      ({ total: obj.total, subtotal: obj.subtotal, currency: obj.currency, tax: obj.tax, tax_inclusive: obj.taxInclusive } = invoice_preview);
      const _Date = Date;
      const self5 = this;
      const self4 = this;
      const _Date2 = Date;
      const self7 = this;
      const self6 = this;
      date = new Date(0);
      tmp3 = undefined;
      date1 = new Date(0);
      if (reduced > 0) {
        tmp3 = reduced;
      }
      checkout_context = billing_facet.checkout_context;
      const self = this;
      if (typeof InvoiceRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp6 = new InvoiceRecord(obj, tmp, self4, self6, reduced, tmp3);
        ({ id: tmp6.id, invoiceItems } = obj);
        if (invoiceItems == null) {
          invoiceItems = [];
        }
        tmp6.invoiceItems = invoiceItems;
        ({ taxInclusive: tmp6.taxInclusive, subscriptionPeriodStart: tmp6.subscriptionPeriodStart, subscriptionPeriodEnd: tmp6.subscriptionPeriodEnd, status: tmp6.status, orbsReward: tmp6.orbsReward, checkoutContext: tmp6.checkoutContext, applyWalletBalance: tmp6.applyWalletBalance } = obj);
        return tmp6;
      } else {
        let str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  static createFromOTPPreview(invoice_items) {
    let checkout_context;
    let invoiceItems;
    invoice_items = invoice_items.invoice_items;
    let mapped;
    if (invoice_items != null) {
      mapped = invoice_items.map(PremiumSubscriptionInvoiceItem.createInvoiceItemFromServer);
    }
    const obj = { id: "", invoiceItems: mapped, total: invoice_items.amount, subtotal: invoice_items.subtotal, currency: invoice_items.currency, tax: invoice_items.tax, taxInclusive: invoice_items.tax_inclusive, subscriptionPeriodStart: new Date(0), subscriptionPeriodEnd: new Date(0), orbsReward: null, checkoutContext: checkout_context, applyWalletBalance: invoice_items.apply_wallet_balance };
    new Date(0);
    ({ orbs_reward: obj.orbsReward, checkout_context } = invoice_items);
    new Date(0);
    if (typeof InvoiceRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp9 = new InvoiceRecord(obj, require, this, this, checkout_context, InvoiceRecord);
      ({ id: tmp9.id, invoiceItems } = obj);
      if (invoiceItems == null) {
        invoiceItems = [];
      }
      tmp9.invoiceItems = invoiceItems;
      ({ taxInclusive: tmp9.taxInclusive, subscriptionPeriodStart: tmp9.subscriptionPeriodStart, subscriptionPeriodEnd: tmp9.subscriptionPeriodEnd, status: tmp9.status, orbsReward: tmp9.orbsReward, checkoutContext: tmp9.checkoutContext, applyWalletBalance: tmp9.applyWalletBalance } = obj);
      return tmp9;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  findInvoiceItemByPlanId(id) {
    let closure_0 = id;
    const invoiceItems = this.invoiceItems;
    let found = invoiceItems.find((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId === id);
    if (found == null) {
      found = null;
    }
    return found;
  }
  getDiscountIdIfExists() {
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
  }
}
const prototype2 = InvoiceRecord.prototype;
const result = size.fileFinishedImporting("records/InvoiceRecord.tsx");

export default InvoiceRecord;
export { BaseInvoiceRecord };