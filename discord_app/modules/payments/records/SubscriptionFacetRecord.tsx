// === Module 6946: SubscriptionFacetRecord ===

// Module 6946 (SubscriptionFacetRecord)
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

let subscription_id;

class SubscriptionFacetRecord extends Record {
  constructor(subscriptionId) {
    const tmp = new SubscriptionFacetRecord(this, new.target);
    subscriptionId = subscriptionId.subscriptionId;
    if (subscriptionId == null) {
      subscriptionId = null;
    }
    tmp.subscriptionId = subscriptionId;
    let subscriptionPreview = subscriptionId.subscriptionPreview;
    if (subscriptionPreview == null) {
      subscriptionPreview = null;
    }
    tmp.subscriptionPreview = subscriptionPreview;
    let updateType = subscriptionId.updateType;
    if (updateType == null) {
      updateType = null;
    }
    tmp.updateType = updateType;
    let flag = subscriptionId.resetBillingCycle;
    if (flag == null) {
      flag = false;
    }
    tmp.resetBillingCycle = flag;
    return tmp;
  }
  static createFromServer(subscription_id) {
    let renewal_line_items;
    let subscription_trial_id;
    let subscription_type;
    let tmp6;
    let tmp2 = null;
    if (null != subscription_id) {
      let renewal_info;
      let obj3;
      subscription_id = subscription_id.subscription_id;
      if (subscription_id == null) {
        subscription_id = null;
      }
      const subscription_preview = subscription_id.subscription_preview;
      let tmp5 = null;
      if (null != subscription_preview) {
        const obj = { currency: null, countryCode: null, subscriptionTrialId: subscription_trial_id, renewalInfo: tmp6, subscriptionType: subscription_type };
        ({ currency: obj.currency, country_code: obj.countryCode, subscription_trial_id } = subscription_preview);
        if (subscription_trial_id == null) {
          subscription_trial_id = null;
        }
        renewal_info = subscription_preview.renewal_info;
        tmp6 = null;
        if (null != renewal_info) {
          obj3 = { price: null, currency: null, renewalLineItems: renewal_info };
          ({ price: obj2.price, currency: obj2.currency, renewal_line_items } = renewal_info);
          if (renewal_line_items == null) {
            renewal_line_items = [];
          }
          renewal_info = renewal_line_items.map((refOrderLineItemId) => ({ refOrderLineItemId: refOrderLineItemId.ref_order_line_item_id, price: refOrderLineItemId.price }));
          tmp6 = obj3;
        }
        subscription_type = subscription_preview.subscription_type;
        if (subscription_type == null) {
          subscription_type = null;
        }
        tmp5 = obj;
      }
      let update_type = subscription_id.update_type;
      if (update_type == null) {
        update_type = null;
      }
      let flag = subscription_id.reset_billing_cycle;
      if (flag == null) {
        flag = false;
      }
      const self = this;
      if (typeof SubscriptionFacetRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp11 = new SubscriptionFacetRecord(tmp, renewal_line_items, tmp7, renewal_info, obj3, tmp6, SubscriptionFacetRecord, this);
        if (subscription_id == null) {
          subscription_id = null;
        }
        tmp11.subscriptionId = subscription_id;
        if (tmp5 == null) {
          tmp5 = null;
        }
        tmp11.subscriptionPreview = tmp5;
        if (update_type == null) {
          update_type = null;
        }
        tmp11.updateType = update_type;
        if (flag == null) {
          flag = false;
        }
        tmp11.resetBillingCycle = flag;
        tmp2 = tmp11;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/payments/records/SubscriptionFacetRecord.tsx");

export default SubscriptionFacetRecord;