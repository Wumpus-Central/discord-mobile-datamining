import _slicedToArray from "_slicedToArray";
import "toJS";

function parseSkuIds(sku_ids) {
  if (null == sku_ids) {
    return null;
  } else {
    let obj = {};
    const _Object = Object;
    const entries = Object.entries(sku_ids);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp8 = callback;
      let tmp9 = callback(tmp6, 2);
      obj = { priceTiers: null };
      obj[0] = tmp9[1].price_tiers;
      obj[tmp9[0]] = obj;
      continue;
    }
    return obj;
  }
}
let prototype;
prototype = function StorefrontPromotionRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp.id, applicationId: tmp.applicationId, name: tmp.name, displayName: tmp.displayName, rewardType: tmp.rewardType, rewardStatus: tmp.rewardStatus, rewardConfig: tmp.rewardConfig, skuIds: tmp.skuIds, appliesToAllSkus: tmp.appliesToAllSkus, includeBundles: tmp.includeBundles, startsAt: tmp.startsAt, endsAt: tmp.endsAt, tenantMetadata: tmp.tenantMetadata } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(display_name) {
  let application_id;
  let applies_to_all_skus;
  let id;
  let include_bundles;
  let name;
  let reward_status;
  let reward_type;
  ({ id, application_id, name } = display_name);
  if (name == null) {
    name = null;
  }
  display_name = display_name.display_name;
  if (display_name == null) {
    display_name = null;
  }
  ({ reward_type, reward_status } = display_name);
  if (reward_status == null) {
    reward_status = null;
  }
  let tmp10 = null;
  if (null != display_name.reward_config) {
    const reward_config = display_name.reward_config;
    let tmp11 = null;
    if (null != reward_config) {
      let tmp12 = null;
      if (null != reward_config.discount) {
        let obj = { id: null, type: null, amount: null, fiatEnabled: null, orbsEnabled: null };
        obj[0] = reward_config.discount.id;
        obj[1] = reward_config.discount.type;
        obj[2] = reward_config.discount.amount;
        obj[3] = reward_config.discount.fiat_enabled;
        obj[4] = reward_config.discount.orbs_enabled;
        tmp12 = obj;
      }
      obj = { discount: null };
      obj[0] = tmp12;
      tmp11 = obj;
    }
    tmp10 = tmp11;
  }
  let date = null;
  ({ applies_to_all_skus, include_bundles } = display_name);
  if (null != display_name.starts_at) {
    let _Date = Date;
    date = new Date(display_name.starts_at);
  }
  let date1 = null;
  if (null != display_name.ends_at) {
    _Date = new.target;
    const _Date2 = Date;
    date1 = new Date(display_name.ends_at);
  }
  let tmp21 = null;
  if (null != display_name.tenant_metadata) {
    const tenant_metadata = display_name.tenant_metadata;
    if (null == tenant_metadata.collectibles) {
      obj = { collectibles: null };
      obj[0] = _Date;
      tmp21 = obj;
    } else {
      const collectibles = tenant_metadata.collectibles;
      const reward = collectibles.reward;
      let nagbar;
      if (reward != null) {
        const storefront = reward.storefront;
        if (storefront != null) {
          nagbar = storefront.nagbar;
        }
      }
      const reward2 = collectibles.reward;
      let offer_notice;
      if (reward2 != null) {
        const checkout = reward2.checkout;
        if (checkout != null) {
          offer_notice = checkout.offer_notice;
        }
      }
      const reward3 = collectibles.reward;
      let override_title;
      if (reward3 != null) {
        const collected = reward3.collected;
        if (collected != null) {
          override_title = collected.override_title;
        }
      }
      let tmp25;
      if (null != override_title) {
        if ("" !== override_title) {
          tmp25 = override_title;
        }
      }
      const reward4 = collectibles.reward;
      let flavor;
      if (reward4 != null) {
        flavor = reward4.flavor;
      }
      if (null == nagbar) {
        if (null == offer_notice) {
          let obj1 = {};
        }
      }
      let tmp27;
      if (null != nagbar) {
        const header_text = nagbar.header_text;
        const obj2 = { headerText: null, cta: null, helpCenterId: null, icon: null };
        obj2[0] = header_text;
        let tmp28;
        if (null != nagbar.cta) {
          const text = nagbar.cta.text;
          const obj3 = { text: null };
          obj3[0] = text;
          tmp28 = obj3;
        }
        obj2[1] = tmp28;
        const help_center_id = nagbar.help_center_id;
        obj2[2] = help_center_id;
        const icon = nagbar.icon;
        const obj4 = { nagbar: null };
        obj2[3] = icon;
        obj4[0] = obj2;
        tmp27 = obj4;
      }
      const obj5 = { storefront: null, checkout: null, collected: null, flavor: null };
      obj5[0] = tmp27;
      let tmp29;
      if (null != offer_notice) {
        const icon2 = offer_notice.icon;
        const obj6 = { icon: null, text: null };
        obj6[0] = icon2;
        const text2 = offer_notice.text;
        const obj7 = { offerNotice: null };
        obj6[1] = text2;
        obj7[0] = obj6;
        tmp29 = obj7;
      }
      obj5[1] = tmp29;
      let tmp30;
      if (null != tmp25) {
        const obj8 = { overrideTitle: null };
        obj8[0] = tmp25;
        tmp30 = obj8;
      }
      obj5[2] = tmp30;
      obj1 = { reward: null };
      obj5[3] = flavor;
      obj1[0] = obj5;
    }
  }
  if (typeof prototype !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const tmp32 = new prototype(str, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp, _Date2, _Date, prototype, new.target, id, application_id, name, display_name, reward_type, reward_status);
  // ThrowIfThisInitialized (0x7c)
  tmp32.id = id;
  tmp32.applicationId = application_id;
  tmp32.name = name;
  tmp32.displayName = display_name;
  tmp32.rewardType = reward_type;
  tmp32.rewardStatus = reward_status;
  tmp32.rewardConfig = tmp10;
  tmp32.skuIds = parseSkuIds(display_name.sku_ids);
  tmp32.appliesToAllSkus = applies_to_all_skus;
  tmp32.includeBundles = include_bundles;
  tmp32.startsAt = date;
  tmp32.endsAt = date1;
  tmp32.tenantMetadata = tmp21;
  return tmp32;
};
const result = require("set").fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default prototype;