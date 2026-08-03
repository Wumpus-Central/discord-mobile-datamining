// === Module 6788: createFromServer ===

// Module 6788 (createFromServer)
import "toJS";

let prototype;
prototype = function SubscriptionFacetRecord(subscriptionId) {
  const tmp = new prototype(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
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
  let renewal_line_items;
  let subscription_trial_id;
  let tmp = null;
  if (null != subscription_id) {
    subscription_id = subscription_id.subscription_id;
    if (subscription_id == null) {
      subscription_id = null;
    }
    const subscription_preview = subscription_id.subscription_preview;
    let tmp4 = null;
    if (null != subscription_preview) {
      let obj = { currency: null, countryCode: null, subscriptionTrialId: null, renewalInfo: null, subscriptionType: null };
      ({ currency: obj[0], country_code: obj[1], subscription_trial_id } = subscription_preview);
      if (subscription_trial_id == null) {
        subscription_trial_id = null;
      }
      obj[2] = subscription_trial_id;
      let renewal_info = subscription_preview.renewal_info;
      let tmp5 = null;
      if (null != renewal_info) {
        obj = { price: null, currency: null, renewalLineItems: null };
        ({ price: obj2[0], currency: obj2[1], renewal_line_items } = renewal_info);
        if (renewal_line_items == null) {
          renewal_line_items = [];
        }
        renewal_info = renewal_line_items.map((refOrderLineItemId) => ({ refOrderLineItemId: refOrderLineItemId.ref_order_line_item_id, price: refOrderLineItemId.price }));
        obj[2] = renewal_info;
        tmp5 = obj;
      }
      obj[3] = tmp5;
      let subscription_type = subscription_preview.subscription_type;
      if (subscription_type == null) {
        subscription_type = null;
      }
      obj[4] = subscription_type;
      tmp4 = obj;
    }
    let update_type = subscription_id.update_type;
    if (update_type == null) {
      update_type = null;
    }
    let flag = subscription_id.reset_billing_cycle;
    if (flag == null) {
      flag = false;
    }
    if (typeof prototype !== "error") {
      HermesBuiltin.throwTypeError();
    }
    const tmp13 = new prototype("Trying to call a non-function", renewal_line_items, tmp6, renewal_info, obj, tmp5, prototype, new.target);
    // ThrowIfThisInitialized (0x7c)
    if (subscription_id == null) {
      subscription_id = null;
    }
    tmp13.subscriptionId = subscription_id;
    if (tmp4 == null) {
      tmp4 = null;
    }
    tmp13.subscriptionPreview = tmp4;
    if (update_type == null) {
      update_type = null;
    }
    tmp13.updateType = update_type;
    if (flag == null) {
      flag = false;
    }
    tmp13.resetBillingCycle = flag;
    tmp = tmp13;
  }
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/payments/records/SubscriptionFacetRecord.tsx");

export default prototype;