// discord_app/modules/payments/records/OrderRecord.tsx
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import InvoiceRecord from "../../../records/InvoiceRecord.tsx";
import Record from "../../../lib/Record.tsx";
import CheckoutContextRecord from "CheckoutContextRecord.tsx";
import SubscriptionFacetRecord from "SubscriptionFacetRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let billing_facet;

const BaseInvoiceRecord = InvoiceRecord.BaseInvoiceRecord;
const PaymentGateways = Constants.PaymentGateways;
class BillingFacetRecord extends Record {
  constructor(currency) {
    let paymentSourceId;
    const tmp = new BillingFacetRecord(new.target, this, currency);
    ({ paymentGateway: tmp.paymentGateway, paymentSourceId } = currency);
    if (paymentSourceId == null) {
      paymentSourceId = null;
    }
    tmp.paymentSourceId = paymentSourceId;
    currency = currency.currency;
    if (currency == null) {
      currency = null;
    }
    tmp.currency = currency;
    let invoicePreview = currency.invoicePreview;
    if (invoicePreview == null) {
      invoicePreview = null;
    }
    tmp.invoicePreview = invoicePreview;
    return tmp;
  }
  static createFromOrder(billing_facet) {
    let payment_gateway;
    let payment_source_id;
    billing_facet = billing_facet.billing_facet;
    let tmp2 = null;
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
      const self = this;
      if (typeof BillingFacetRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp8 = new BillingFacetRecord(
          tmp,
          billing_facet,
          BillingFacetRecord,
          this,
          payment_gateway,
          payment_source_id,
          currency,
          invoiceFromOrder,
        );
        tmp8.paymentGateway = payment_gateway;
        if (payment_source_id == null) {
          payment_source_id = null;
        }
        tmp8.paymentSourceId = payment_source_id;
        if (currency == null) {
          currency = null;
        }
        tmp8.currency = currency;
        if (invoiceFromOrder == null) {
          invoiceFromOrder = null;
        }
        tmp8.invoicePreview = invoiceFromOrder;
        tmp2 = tmp8;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp2;
  }
}
Object.defineProperty(BillingFacetRecord.prototype, "fiatCurrency", {
  get: function fiatCurrency() {
    let currency = null;
    if (this.paymentGateway !== PaymentGateways.VIRTUAL_CURRENCY) {
      currency = this.currency;
    }
    return currency;
  },
  set: undefined,
});
class OrderRecord extends Record {
  constructor(billingFacetRecord) {
    let orderLineItems;
    let unsatisfiedConstraints;
    const tmp = new OrderRecord(new.target, this, billingFacetRecord);
    ({ id: tmp.id, status: tmp.status, revision: tmp.revision, orderLineItems } = billingFacetRecord);
    if (orderLineItems == null) {
      orderLineItems = [];
    }
    tmp.orderLineItems = orderLineItems;
    billingFacetRecord = billingFacetRecord.billingFacetRecord;
    if (billingFacetRecord == null) {
      billingFacetRecord = null;
    }
    tmp.billingFacetRecord = billingFacetRecord;
    let externalGatewayFacet = billingFacetRecord.externalGatewayFacet;
    if (externalGatewayFacet == null) {
      externalGatewayFacet = null;
    }
    tmp.externalGatewayFacet = externalGatewayFacet;
    let giftingFacet = billingFacetRecord.giftingFacet;
    if (giftingFacet == null) {
      giftingFacet = null;
    }
    tmp.giftingFacet = giftingFacet;
    let subscriptionFacet = billingFacetRecord.subscriptionFacet;
    if (subscriptionFacet == null) {
      subscriptionFacet = null;
    }
    tmp.subscriptionFacet = subscriptionFacet;
    let prop = billingFacetRecord.checkoutContextRecord;
    if (prop == null) {
      prop = null;
    }
    tmp.checkoutContextRecord = prop;
    ({ createdAt: tmp.createdAt, unsatisfiedConstraints } = billingFacetRecord);
    if (unsatisfiedConstraints == null) {
      unsatisfiedConstraints = [];
    }
    tmp.unsatisfiedConstraints = unsatisfiedConstraints;
    return tmp;
  }
  static createFromServer(id) {
    let gifting_facet;
    let prop;
    let unsatisfied_constraints;
    const obj = {
      id: id.id,
      status: id.status,
      revision: id.revision,
      orderLineItems: id.order_line_items,
      billingFacetRecord: BillingFacetRecord.createFromOrder(id),
      externalGatewayFacet: prop,
      giftingFacet: gifting_facet,
      checkoutContextRecord: CheckoutContextRecord.createFromOrder(id),
      createdAt: null,
      unsatisfiedConstraints: unsatisfied_constraints,
      subscriptionFacet: SubscriptionFacetRecord.createFromServer(id.subscription_facet),
    };
    prop = id.external_gateway_facet;
    if (prop == null) {
      prop = null;
    }
    gifting_facet = id.gifting_facet;
    if (gifting_facet == null) {
      gifting_facet = null;
    }
    ({ created_at: obj.createdAt, unsatisfied_constraints } = id);
    if (unsatisfied_constraints == null) {
      unsatisfied_constraints = [];
    }
    return new OrderRecord(obj);
  }
  getInvoicePreview() {
    let invoicePreview = null;
    if (null != this.billingFacetRecord) {
      invoicePreview = this.billingFacetRecord.invoicePreview;
    }
    return invoicePreview;
  }
  firstUnsatisfiedConstraintReasonCode() {
    let reason_code = null;
    if (this.unsatisfiedConstraints.length > 0) {
      reason_code = this.unsatisfiedConstraints[0].reason_code;
    }
    return reason_code;
  }
}
const prototype = OrderRecord.prototype;
const result = size.fileFinishedImporting("modules/payments/records/OrderRecord.tsx");

export default OrderRecord;
export { BillingFacetRecord };
