// === Module 7032: createFromOrder ===

// Module 7032 (createFromOrder)
import toJSDefault from "toJS" /* 1931 */;
import { BaseInvoiceRecord } from "createFromServer" /* 4052 */;
import closure_1 from "createFromServer" /* 7033 */;
import closure_2 from "createFromServer" /* 7034 */;
import { PaymentGateways } from "sum" /* 505 */;

toJSDefault;
let BillingFacetRecord;
class BillingFacetRecord extends tmp2 {
  constructor(arg0) {
    tmp = new BillingFacetRecord(new.target, new.target, global);
    // ThrowIfThisInitialized (0x7c)
    ({ paymentGateway: tmp.paymentGateway, paymentSourceId } = global);
    if (paymentSourceId == null) {
      paymentSourceId = null;
    }
    tmp.paymentSourceId = paymentSourceId;
    currency = global.currency;
    if (currency == null) {
      currency = null;
    }
    tmp.currency = currency;
    invoicePreview = global.invoicePreview;
    if (invoicePreview == null) {
      invoicePreview = null;
    }
    tmp.invoicePreview = invoicePreview;
    return tmp;
  }
}
BillingFacetRecord["createFromOrder"] = function createFromOrder(billing_facet) {
  billing_facet = billing_facet.billing_facet;
  let tmp = null;
  if (null != billing_facet) {
    ({ payment_gateway, payment_source_id } = billing_facet);
    if (payment_source_id == null) {
      payment_source_id = null;
    }
    let currency = billing_facet.currency;
    if (currency == null) {
      currency = null;
    }
    let invoiceFromOrder = BaseInvoiceRecord.createInvoiceFromOrder(billing_facet);
    if (typeof BillingFacetRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp10 = new BillingFacetRecord("Trying to call a non-function", billing_facet, BillingFacetRecord, new.target, payment_gateway, payment_source_id, currency, invoiceFromOrder);
    // ThrowIfThisInitialized (0x7c)
    tmp10.paymentGateway = payment_gateway;
    if (payment_source_id == null) {
      payment_source_id = null;
    }
    tmp10.paymentSourceId = payment_source_id;
    if (currency == null) {
      currency = null;
    }
    tmp10.currency = currency;
    if (invoiceFromOrder == null) {
      invoiceFromOrder = null;
    }
    tmp10.invoicePreview = invoiceFromOrder;
    tmp = tmp10;
  }
  return tmp;
};
Object.defineProperty(BillingFacetRecord.prototype, "fiatCurrency", {
  get: function fiatCurrency() {
    let currency = null;
    if (this.paymentGateway !== PaymentGateways.VIRTUAL_CURRENCY) {
      currency = this.currency;
    }
    return currency;
  },
  set: undefined
});
let OrderRecord;
class OrderRecord extends tmp2 {
  constructor(arg0) {
    tmp = new OrderRecord(new.target, new.target, global);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, status: tmp.status, revision: tmp.revision, orderLineItems } = global);
    if (orderLineItems == null) {
      orderLineItems = [];
    }
    tmp.orderLineItems = orderLineItems;
    billingFacetRecord = global.billingFacetRecord;
    if (billingFacetRecord == null) {
      billingFacetRecord = null;
    }
    tmp.billingFacetRecord = billingFacetRecord;
    externalGatewayFacet = global.externalGatewayFacet;
    if (externalGatewayFacet == null) {
      externalGatewayFacet = null;
    }
    tmp.externalGatewayFacet = externalGatewayFacet;
    giftingFacet = global.giftingFacet;
    if (giftingFacet == null) {
      giftingFacet = null;
    }
    tmp.giftingFacet = giftingFacet;
    subscriptionFacet = global.subscriptionFacet;
    if (subscriptionFacet == null) {
      subscriptionFacet = null;
    }
    tmp.subscriptionFacet = subscriptionFacet;
    prop = global.checkoutContextRecord;
    if (prop == null) {
      prop = null;
    }
    tmp.checkoutContextRecord = prop;
    ({ createdAt: tmp.createdAt, unsatisfiedConstraints } = global);
    if (unsatisfiedConstraints == null) {
      unsatisfiedConstraints = [];
    }
    tmp.unsatisfiedConstraints = unsatisfiedConstraints;
    return tmp;
  }
}
const prototype = OrderRecord.prototype;
OrderRecord["createFromServer"] = function createFromServer(id) {
  const obj = { id: id.id, status: id.status, revision: id.revision, orderLineItems: id.order_line_items, billingFacetRecord: BillingFacetRecord.createFromOrder(id), externalGatewayFacet: null, giftingFacet: null, checkoutContextRecord: null, createdAt: null, unsatisfiedConstraints: null, subscriptionFacet: null };
  let prop = id.external_gateway_facet;
  if (prop == null) {
    prop = null;
  }
  obj[5] = prop;
  let gifting_facet = id.gifting_facet;
  if (gifting_facet == null) {
    gifting_facet = null;
  }
  obj[6] = gifting_facet;
  obj[7] = closure_1.createFromOrder(id);
  ({ created_at: obj[8], unsatisfied_constraints } = id);
  if (unsatisfied_constraints == null) {
    unsatisfied_constraints = [];
  }
  obj[9] = unsatisfied_constraints;
  obj[10] = closure_2.createFromServer(id.subscription_facet);
  return new OrderRecord(obj);
};
prototype["getInvoicePreview"] = function getInvoicePreview() {
  let invoicePreview = null;
  if (null != this.billingFacetRecord) {
    invoicePreview = this.billingFacetRecord.invoicePreview;
  }
  return invoicePreview;
};
prototype["firstUnsatisfiedConstraintReasonCode"] = function firstUnsatisfiedConstraintReasonCode() {
  let reason_code = null;
  if (this.unsatisfiedConstraints.length > 0) {
    reason_code = this.unsatisfiedConstraints[0].reason_code;
  }
  return reason_code;
};
const result = require("set").fileFinishedImporting("modules/payments/records/OrderRecord.tsx");

export default OrderRecord;
export { BillingFacetRecord };