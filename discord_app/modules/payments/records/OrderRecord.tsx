import "toJS";
import { BaseInvoiceRecord } from "createFromServer";
import createFromServer from "createFromServer";
import closure_2 from "createFromServer";

let prototype;
prototype = function BillingFacetRecord(invoicePreview) {
  let paymentSourceId;
  const tmp = new prototype(new.target, new.target, invoicePreview);
  // ThrowIfThisInitialized (0x7c)
  ({ paymentGateway: tmp.paymentGateway, paymentSourceId } = invoicePreview);
  if (paymentSourceId == null) {
    paymentSourceId = null;
  }
  tmp.paymentSourceId = paymentSourceId;
  invoicePreview = invoicePreview.invoicePreview;
  if (invoicePreview == null) {
    invoicePreview = null;
  }
  tmp.invoicePreview = invoicePreview;
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromOrder"] = function createFromOrder(billing_facet) {
  let payment_gateway;
  let payment_source_id;
  billing_facet = billing_facet.billing_facet;
  let tmp = null;
  if (null != billing_facet) {
    ({ payment_gateway, payment_source_id } = billing_facet);
    if (payment_source_id == null) {
      payment_source_id = null;
    }
    let invoiceFromOrder = BaseInvoiceRecord.createInvoiceFromOrder(billing_facet);
    if (typeof prototype !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp9 = new prototype("Trying to call a non-function", billing_facet, prototype, new.target, payment_gateway, payment_source_id, invoiceFromOrder);
    // ThrowIfThisInitialized (0x7c)
    tmp9.paymentGateway = payment_gateway;
    if (payment_source_id == null) {
      payment_source_id = null;
    }
    tmp9.paymentSourceId = payment_source_id;
    if (invoiceFromOrder == null) {
      invoiceFromOrder = null;
    }
    tmp9.invoicePreview = invoiceFromOrder;
    tmp = tmp9;
  }
  return tmp;
};
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
const prototype2 = OrderRecord.prototype;
OrderRecord["createFromServer"] = function createFromServer(id) {
  let unsatisfied_constraints;
  const obj = { id: id.id, status: id.status, revision: id.revision, orderLineItems: id.order_line_items, billingFacetRecord: prototype.createFromOrder(id), externalGatewayFacet: null, giftingFacet: null, checkoutContextRecord: null, createdAt: null, unsatisfiedConstraints: null, subscriptionFacet: null };
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
  obj[7] = createFromServer.createFromOrder(id);
  ({ created_at: obj[8], unsatisfied_constraints } = id);
  if (unsatisfied_constraints == null) {
    unsatisfied_constraints = [];
  }
  obj[9] = unsatisfied_constraints;
  obj[10] = closure_2.createFromServer(id.subscription_facet);
  return new OrderRecord(obj);
};
prototype2["getInvoicePreview"] = function getInvoicePreview() {
  let invoicePreview = null;
  if (null != this.billingFacetRecord) {
    invoicePreview = this.billingFacetRecord.invoicePreview;
  }
  return invoicePreview;
};
prototype2["firstUnsatisfiedConstraintReasonCode"] = function firstUnsatisfiedConstraintReasonCode() {
  let reason_code = null;
  if (this.unsatisfiedConstraints.length > 0) {
    reason_code = this.unsatisfiedConstraints[0].reason_code;
  }
  return reason_code;
};
const result = require("createFromServer").fileFinishedImporting("modules/payments/records/OrderRecord.tsx");

export default OrderRecord;
export const BillingFacetRecord = prototype;