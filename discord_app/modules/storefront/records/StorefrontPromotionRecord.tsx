// === Module 9381: StorefrontPromotionRecord ===

// Module 9381 (StorefrontPromotionRecord)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9382 */;
import _slicedToArray from "module_32" /* 32 */;
import Record from "Record" /* 1404 */;

require = fn;
function parseSkuIds(sku_ids) {
  if (null == sku_ids) {
    return null;
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(sku_ids);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      let obj2 = { priceTiers: tmp9[1].price_tiers };
      obj[tmp9[0]] = obj2;
      continue;
    }
    return obj;
  }
}
function parseCollectiblesShared(shared) {
  ({ progress_indicator, navigation, help_center } = shared);
  const obj = { title: progress_indicator.title, description: progress_indicator.description, rewardStates: null, assets: null, style: null };
  let tmp;
  if (null != progress_indicator.indicator_reward_states) {
    const indicator_reward_states = progress_indicator.indicator_reward_states;
    let tmp2;
    if (null != indicator_reward_states.in_progress) {
      const obj2 = { progressSteps: null };
      const progress_steps = indicator_reward_states.in_progress.progress_steps;
      obj2.progressSteps = progress_steps.map(parseCollectiblesProgressIndicatorRewardState);
      tmp2 = obj2;
    }
    const obj3 = { inProgress: tmp2, earned: null, consumed: null };
    let tmp4;
    if (null != indicator_reward_states.earned) {
      ({ title: obj4.title, description: obj4.description } = indicator_reward_states.earned);
      tmp4 = { title: null, description: null };
      const obj6 = { title: null, description: null };
    }
    obj3.earned = tmp4;
    let tmp5;
    if (null != indicator_reward_states.consumed) {
      ({ title: obj5.title, description: obj5.description } = indicator_reward_states.consumed);
      tmp5 = { title: null, description: null };
      const obj7 = { title: null, description: null };
    }
    obj3.consumed = tmp5;
    tmp = obj3;
  }
  obj.rewardStates = tmp;
  obj.assets = { backgroundUrl: progress_indicator.assets.background_url, rewardPreview: { hiddenUrl: progress_indicator.assets.reward_preview.hidden_url, revealedUrl: progress_indicator.assets.reward_preview.revealed_url } };
  let tmp6;
  if (null != progress_indicator.style) {
    const obj9 = { contentTheme: progress_indicator.style.content_theme, progressColor: progress_indicator.style.progress_color };
    tmp6 = obj9;
  }
  const obj10 = { progressIndicator: obj, navigation: null, helpCenter: null };
  obj.style = tmp6;
  let tab;
  if (navigation != null) {
    tab = navigation.tab;
  }
  let tmp8;
  if (null != tab) {
    const obj21 = { tab: null };
    const obj22 = { title: navigation.tab.title, icon: navigation.tab.icon };
    obj21.tab = obj22;
    tmp8 = obj21;
  }
  obj10.navigation = tmp8;
  let tmp9;
  if (null != help_center) {
    ({ text: obj11.text, id: obj11.id } = help_center);
    tmp9 = { text: null, id: null };
    const obj23 = { text: null, id: null };
  }
  obj10.helpCenter = tmp9;
  return obj10;
}
function parseCollectiblesProgressIndicatorRewardState(title) {
  return { title: title.title, description: title.description };
}
const prototype = function StorefrontPromotionRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  ({ id: tmp.id, applicationId: tmp.applicationId, name: tmp.name, displayName: tmp.displayName, rewardType: tmp.rewardType, rewardStatus: tmp.rewardStatus, rewardConfig: tmp.rewardConfig, skuIds: tmp.skuIds, appliesToAllSkus: tmp.appliesToAllSkus, includeBundles: tmp.includeBundles, startsAt: tmp.startsAt, endsAt: tmp.endsAt, redemptionEndsAt: tmp.redemptionEndsAt, progress: tmp.progress, tenantMetadata: tmp.tenantMetadata } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(display_name) {
  ({ id, application_id, name } = display_name);
  let tmp14 = null;
  if (name == null) {
    name = null;
  }
  display_name = display_name.display_name;
  if (display_name == tmp14) {
    display_name = null;
  }
  ({ reward_status, reward_type } = display_name);
  if (reward_status == tmp14) {
    reward_status = null;
  }
  let tmp16 = null;
  if (tmp14 != display_name.reward_config) {
    const reward_config = display_name.reward_config;
    let tmp17 = null;
    if (tmp14 != reward_config) {
      let tmp18 = null;
      if (tmp14 != reward_config.discount) {
        const obj = { id: reward_config.discount.id, type: reward_config.discount.type, amount: reward_config.discount.amount, fiatEnabled: reward_config.discount.fiat_enabled, orbsEnabled: reward_config.discount.orbs_enabled };
        tmp18 = obj;
      }
      const obj2 = { discount: tmp18, action: null };
      let tmp19 = null;
      if (tmp14 != reward_config.action) {
        const obj3 = { actionType: reward_config.action.action_type, deliveryMode: reward_config.action.delivery_mode, skuIds: null };
        let sku_ids = reward_config.action.sku_ids;
        if (sku_ids == tmp14) {
          sku_ids = [];
        }
        obj3.skuIds = sku_ids;
        tmp19 = obj3;
      }
      obj2.action = tmp19;
      tmp17 = obj2;
    }
    tmp16 = tmp17;
  }
  let date = null;
  ({ applies_to_all_skus, include_bundles } = display_name);
  if (tmp14 != display_name.starts_at) {
    const _Date = Date;
    date = new Date(display_name.starts_at);
  }
  let date1 = null;
  if (tmp14 != display_name.ends_at) {
    const _Date2 = Date;
    date1 = new Date(display_name.ends_at);
  }
  let date2 = null;
  if (tmp14 != display_name.redemption_ends_at) {
    const _Date3 = Date;
    date2 = new Date(display_name.redemption_ends_at);
  }
  let tmp34 = null;
  if (tmp14 != display_name.progress) {
    const progress = display_name.progress;
    const obj5 = { current: null, target: null, label: null };
    ({ current: obj4.current, target } = progress);
    obj5.target = target;
    obj5.label = progress.label;
    tmp34 = obj5;
  }
  let tmp35 = null;
  if (tmp14 != display_name.tenant_metadata) {
    const tenant_metadata = display_name.tenant_metadata;
    if (tmp14 == tenant_metadata.collectibles) {
      const obj6 = { collectibles: _Date3 };
      tmp35 = obj6;
    } else {
      let collectibles = tenant_metadata.collectibles;
      const type = collectibles.type;
      let tmp36 = require;
      if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
        const subtype = collectibles.subtype;
        if (tmp36(9382).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER === subtype) {
          const obj7 = { type: tmp36(9382).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: tmp36(9382).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER, collectionId: collectibles.collection_id, shopHome: null, indexPage: null, shared: null };
          const obj8 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, rewardStates: null, style: null };
          const reward_states = collectibles.shop_home.reward_states;
          const obj9 = { inProgress: null, earned: null, consumed: null };
          const obj10 = { progressSteps: null };
          const progress_steps = reward_states.in_progress.progress_steps;
          obj10.progressSteps = progress_steps.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj9.inProgress = obj10;
          const obj11 = { heroUrl: reward_states.earned.hero_url };
          obj9.earned = obj11;
          const obj12 = { heroUrl: reward_states.consumed.hero_url };
          obj9.consumed = obj12;
          obj8.rewardStates = obj9;
          let tmp51;
          if (tmp14 != collectibles.shop_home.style) {
            const obj13 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp51 = obj13;
          }
          obj8.style = tmp51;
          obj7.shopHome = obj8;
          const obj14 = { description: collectibles.index_page.description, rewardStates: null, style: null };
          const reward_states2 = collectibles.index_page.reward_states;
          const obj15 = { inProgress: null, earned: null, consumed: null };
          const obj16 = { progressSteps: null };
          const progress_steps1 = reward_states2.in_progress.progress_steps;
          obj16.progressSteps = progress_steps1.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj15.inProgress = obj16;
          const obj17 = { heroUrl: reward_states2.earned.hero_url };
          obj15.earned = obj17;
          const obj18 = { heroUrl: reward_states2.consumed.hero_url };
          obj15.consumed = obj18;
          obj14.rewardStates = obj15;
          tmp14 = tmp14 != collectibles.index_page.style;
          tmp36 = undefined;
          if (tmp14) {
            const obj19 = { contentTheme: collectibles.index_page.style.content_theme };
            tmp36 = obj19;
          }
          obj14.style = tmp36;
          obj7.indexPage = obj14;
          collectibles = parseCollectiblesShared(collectibles.shared);
          obj7.shared = collectibles;
        } else if (tmp36(9382).StorefrontPromotionCollectAndClaimSubtype.BASIC === subtype) {
          const obj20 = { type: tmp36(9382).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: tmp36(9382).StorefrontPromotionCollectAndClaimSubtype.BASIC, collectionId: collectibles.collection_id, shopHome: null, indexPage: null, shared: null };
          const obj21 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, style: null };
          let tmp48;
          if (tmp14 != collectibles.shop_home.style) {
            const obj22 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp48 = obj22;
          }
          obj21.style = tmp48;
          obj20.shopHome = obj21;
          const obj23 = { description: collectibles.index_page.description, style: null };
          let tmp49;
          if (tmp14 != collectibles.index_page.style) {
            const obj24 = { contentTheme: collectibles.index_page.style.content_theme };
            tmp49 = obj24;
          }
          obj23.style = tmp49;
          obj20.indexPage = obj23;
          obj20.shared = parseCollectiblesShared(collectibles.shared);
        }
      } else if (tmp36(9382).StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
        const reward = collectibles.reward;
        let nagbar;
        if (reward != tmp14) {
          const storefront = reward.storefront;
          if (storefront != tmp14) {
            nagbar = storefront.nagbar;
          }
        }
        let offer_notice;
        if (reward != tmp14) {
          const checkout = reward.checkout;
          if (checkout != tmp14) {
            offer_notice = checkout.offer_notice;
          }
        }
        let override_title;
        if (reward != tmp14) {
          const collected = reward.collected;
          if (collected != tmp14) {
            override_title = collected.override_title;
          }
        }
        let tmp41;
        if (tmp14 != override_title) {
          if ("" !== override_title) {
            tmp41 = override_title;
          }
        }
        let flavor;
        if (reward != tmp14) {
          flavor = reward.flavor;
        }
        if (tmp14 == nagbar) {
          if (tmp14 == offer_notice) {
            if (tmp14 == tmp41) {
              if (tmp14 == flavor) {
                const obj25 = { type: tmp36(9382).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                let obj26 = obj25;
              }
            }
          }
        }
        obj26 = { type: tmp36(9382).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: null };
        let tmp43;
        if (tmp14 != nagbar) {
          const header_text = nagbar.header_text;
          const obj27 = { headerText: header_text, cta: null, helpCenterId: null, icon: null };
          let tmp44;
          if (tmp14 != nagbar.cta) {
            const text = nagbar.cta.text;
            const obj28 = { text };
            tmp44 = obj28;
          }
          obj27.cta = tmp44;
          const help_center_id = nagbar.help_center_id;
          obj27.helpCenterId = help_center_id;
          const icon = nagbar.icon;
          const obj29 = { nagbar: null };
          obj27.icon = icon;
          obj29.nagbar = obj27;
          tmp43 = obj29;
        }
        const obj30 = { storefront: tmp43, checkout: null, collected: null, flavor: null };
        let tmp45;
        if (tmp14 != offer_notice) {
          const icon2 = offer_notice.icon;
          const obj31 = { icon: icon2, text: null };
          const text2 = offer_notice.text;
          const obj32 = { offerNotice: null };
          obj31.text = text2;
          obj32.offerNotice = obj31;
          tmp45 = obj32;
        }
        obj30.checkout = tmp45;
        let tmp46;
        if (tmp14 != tmp41) {
          const obj63 = { overrideTitle: tmp41 };
          tmp46 = obj63;
        }
        obj30.collected = tmp46;
        obj30.flavor = flavor;
        obj26.reward = obj30;
      }
    }
  }
  if (typeof prototype === "function") {
    const tmp56 = new prototype(tmp23, tmp12, tmp11, tmp10, tmp9, tmp8, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp, target, _Date3, prototype, new.target, id, application_id, name);
    tmp56.id = id;
    tmp56.applicationId = application_id;
    tmp56.name = name;
    tmp56.displayName = display_name;
    tmp56.rewardType = reward_type;
    tmp56.rewardStatus = reward_status;
    tmp56.rewardConfig = tmp16;
    tmp56.skuIds = tmp20;
    tmp56.appliesToAllSkus = applies_to_all_skus;
    tmp56.includeBundles = include_bundles;
    tmp56.startsAt = date;
    tmp56.endsAt = date1;
    tmp56.redemptionEndsAt = date2;
    tmp56.progress = tmp34;
    tmp56.tenantMetadata = tmp35;
    return tmp56;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp20 = parseSkuIds(display_name.sku_ids);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default prototype;
export const getCollectiblesTargetedOffer = function getCollectiblesTargetedOffer(tenantMetadata) {
  let collectibles;
  if (tenantMetadata != null) {
    tenantMetadata = tenantMetadata.tenantMetadata;
    if (tenantMetadata != null) {
      collectibles = tenantMetadata.collectibles;
    }
  }
  let type;
  if (collectibles != null) {
    type = collectibles.type;
  }
  let tmp3;
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
    tmp3 = collectibles;
  }
  return tmp3;
};
export const getCollectiblesCollectAndClaim = function getCollectiblesCollectAndClaim(tenantMetadata) {
  let collectibles;
  if (tenantMetadata != null) {
    tenantMetadata = tenantMetadata.tenantMetadata;
    if (tenantMetadata != null) {
      collectibles = tenantMetadata.collectibles;
    }
  }
  let type;
  if (collectibles != null) {
    type = collectibles.type;
  }
  let tmp3;
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM) {
    tmp3 = collectibles;
  }
  return tmp3;
};