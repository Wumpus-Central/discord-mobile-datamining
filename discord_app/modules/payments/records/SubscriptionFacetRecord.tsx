// === Module 7427: SubscriptionFacetRecord ===

// Module 7427 (SubscriptionFacetRecord)
import Record from "Record" /* 1386 */;

const prototype = function SubscriptionFacetRecord(subscriptionId) {
  const tmp = new prototype(new.target, new.target);
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
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(subscription_id) {
  let tmp2 = null;
  if (null != subscription_id) {
    subscription_id = subscription_id.subscription_id;
    if (subscription_id == null) {
      subscription_id = null;
    }
    const subscription_preview = subscription_id.subscription_preview;
    let tmp5 = null;
    if (null != subscription_preview) {
      let obj = { currency: null, countryCode: null, subscriptionTrialId: null, renewalInfo: null, subscriptionType: null };
      ({ currency: obj.currency, country_code: obj.countryCode, subscription_trial_id } = subscription_preview);
      if (subscription_trial_id == null) {
        subscription_trial_id = null;
      }
      obj.subscriptionTrialId = subscription_trial_id;
      let renewal_info = subscription_preview.renewal_info;
      let tmp6 = null;
      if (null != renewal_info) {
        obj = { price: null, currency: null, renewalLineItems: null };
        ({ price: obj2.price, currency: obj2.currency, renewal_line_items } = renewal_info);
        if (renewal_line_items == null) {
          renewal_line_items = [];
        }
        renewal_info = renewal_line_items.map((refOrderLineItemId) => ({ refOrderLineItemId: refOrderLineItemId.ref_order_line_item_id, price: refOrderLineItemId.price }));
        obj.renewalLineItems = renewal_info;
        tmp6 = obj;
      }
      obj.renewalInfo = tmp6;
      let subscription_type = subscription_preview.subscription_type;
      if (subscription_type == null) {
        subscription_type = null;
      }
      obj.subscriptionType = subscription_type;
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
    if (typeof prototype === "function") {
      const tmp14 = new prototype(tmp, renewal_line_items, tmp7, renewal_info, obj, tmp6, tmp3, new.target);
      if (subscription_id == null) {
        subscription_id = null;
      }
      tmp14.subscriptionId = subscription_id;
      if (tmp5 == null) {
        tmp5 = null;
      }
      tmp14.subscriptionPreview = tmp5;
      if (update_type == null) {
        update_type = null;
      }
      tmp14.updateType = update_type;
      if (flag == null) {
        flag = false;
      }
      tmp14.resetBillingCycle = flag;
      tmp2 = tmp14;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp2;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/records/SubscriptionFacetRecord.tsx");

export default prototype;