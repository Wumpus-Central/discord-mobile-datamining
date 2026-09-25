// === Module 8242: StorefrontPromotionRecord ===

// Module 8242 (StorefrontPromotionRecord)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 8243 */;
import _slicedToArray from "module_32" /* 32 */;
import Record from "Record" /* 1387 */;

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
      const obj7 = { collectibles: _Date3 };
      tmp35 = obj7;
    } else {
      let collectibles = tenant_metadata.collectibles;
      const type = collectibles.type;
      let obj32 = require;
      let tmp36 = dependencyMap;
      if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
        if (collectibles.subtype === obj32(8243).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER) {
          const obj8 = { type: obj32(8243).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: obj32(8243).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER, collectionId: collectibles.collection_id, shopHome: null, indexPage: null, shared: null };
          const obj9 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, rewardStates: null, style: null };
          const reward_states2 = collectibles.shop_home.reward_states;
          const obj10 = { inProgress: null, earned: null, consumed: null };
          const obj11 = { progressSteps: null };
          const progress_steps = reward_states2.in_progress.progress_steps;
          obj11.progressSteps = progress_steps.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj10.inProgress = obj11;
          const obj12 = { heroUrl: reward_states2.earned.hero_url };
          obj10.earned = obj12;
          const obj13 = { heroUrl: reward_states2.consumed.hero_url };
          obj10.consumed = obj13;
          obj9.rewardStates = obj10;
          let tmp48;
          if (tmp14 != collectibles.shop_home.style) {
            const obj14 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp48 = obj14;
          }
          obj9.style = tmp48;
          obj8.shopHome = obj9;
          const obj15 = { description: collectibles.index_page.description, rewardStates: null, style: null };
          const reward_states = collectibles.index_page.reward_states;
          const obj16 = { inProgress: null, earned: null, consumed: null };
          const obj17 = { progressSteps: null };
          const progress_steps1 = reward_states.in_progress.progress_steps;
          obj17.progressSteps = progress_steps1.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj16.inProgress = obj17;
          const obj18 = { heroUrl: reward_states.earned.hero_url };
          obj16.earned = obj18;
          const obj19 = { heroUrl: reward_states.consumed.hero_url };
          obj16.consumed = obj19;
          obj15.rewardStates = obj16;
          let tmp49;
          if (tmp14 != collectibles.index_page.style) {
            const obj20 = { contentTheme: collectibles.index_page.style.content_theme };
            tmp49 = obj20;
          }
          obj15.style = tmp49;
          obj8.indexPage = obj15;
          ({ progress_indicator, navigation, help_center } = collectibles.shared);
          const obj21 = { title: null, description: null, rewardStates: null, assets: null, style: null };
          ({ title: obj23.title, description: obj23.description } = progress_indicator);
          let tmp50;
          if (tmp14 != progress_indicator.indicator_reward_states) {
            const indicator_reward_states = progress_indicator.indicator_reward_states;
            let tmp51;
            if (tmp14 != indicator_reward_states.in_progress) {
              const obj22 = { progressSteps: null };
              const progress_steps2 = indicator_reward_states.in_progress.progress_steps;
              obj22.progressSteps = progress_steps2.map(parseCollectiblesProgressIndicatorRewardState);
              tmp51 = obj22;
            }
            const obj24 = { inProgress: tmp51, earned: null, consumed: null };
            let tmp53;
            if (tmp14 != indicator_reward_states.earned) {
              ({ title: obj26.title, description: obj26.description } = indicator_reward_states.earned);
              tmp53 = { title: null, description: null };
              const obj25 = { title: null, description: null };
            }
            obj24.earned = tmp53;
            let tmp54;
            if (tmp14 != indicator_reward_states.consumed) {
              ({ title: obj27.title, description: obj27.description } = indicator_reward_states.consumed);
              tmp54 = { title: null, description: null };
              const obj28 = { title: null, description: null };
            }
            obj24.consumed = tmp54;
            tmp50 = obj24;
          }
          obj21.rewardStates = tmp50;
          const obj29 = { backgroundUrl: progress_indicator.assets.background_url, rewardPreview: null };
          const obj30 = { hiddenUrl: progress_indicator.assets.reward_preview.hidden_url, revealedUrl: progress_indicator.assets.reward_preview.revealed_url };
          obj29.rewardPreview = obj30;
          obj21.assets = obj29;
          obj32 = undefined;
          if (tmp14 != progress_indicator.style) {
            const obj31 = { contentTheme: progress_indicator.style.content_theme, progressColor: progress_indicator.style.progress_color };
            obj32 = obj31;
          }
          collectibles = { progressIndicator: null, navigation: null, helpCenter: null };
          obj21.style = obj32;
          collectibles.progressIndicator = obj21;
          let tab;
          if (navigation != tmp14) {
            tab = navigation.tab;
          }
          let tmp56;
          if (tmp14 != tab) {
            obj32 = { tab: null };
            const obj33 = { title: navigation.tab.title, icon: navigation.tab.icon };
            obj32.tab = obj33;
            tmp56 = obj32;
          }
          collectibles.navigation = tmp56;
          tmp14 = tmp14 != help_center;
          tmp36 = undefined;
          if (tmp14) {
            obj32 = { text: null, id: null };
            ({ text: obj6.text, id: obj6.id } = help_center);
            tmp36 = obj32;
          }
          collectibles.helpCenter = tmp36;
          obj8.shared = collectibles;
        }
      } else if (obj32(8243).StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
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
        let tmp40;
        if (tmp14 != override_title) {
          if ("" !== override_title) {
            tmp40 = override_title;
          }
        }
        let flavor;
        if (reward != tmp14) {
          flavor = reward.flavor;
        }
        if (tmp14 == nagbar) {
          if (tmp14 == offer_notice) {
            if (tmp14 == tmp40) {
              if (tmp14 == flavor) {
                const obj34 = { type: obj32(8243).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                let obj35 = obj34;
              }
            }
          }
        }
        obj35 = { type: obj32(8243).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: null };
        let tmp42;
        if (tmp14 != nagbar) {
          const header_text = nagbar.header_text;
          const obj36 = { headerText: header_text, cta: null, helpCenterId: null, icon: null };
          let tmp43;
          if (tmp14 != nagbar.cta) {
            const text = nagbar.cta.text;
            const obj37 = { text };
            tmp43 = obj37;
          }
          obj36.cta = tmp43;
          const help_center_id = nagbar.help_center_id;
          obj36.helpCenterId = help_center_id;
          const icon = nagbar.icon;
          const obj38 = { nagbar: null };
          obj36.icon = icon;
          obj38.nagbar = obj36;
          tmp42 = obj38;
        }
        const obj74 = { storefront: tmp42, checkout: null, collected: null, flavor: null };
        let tmp44;
        if (tmp14 != offer_notice) {
          const icon2 = offer_notice.icon;
          const obj75 = { icon: icon2, text: null };
          const text2 = offer_notice.text;
          const obj76 = { offerNotice: null };
          obj75.text = text2;
          obj76.offerNotice = obj75;
          tmp44 = obj76;
        }
        obj74.checkout = tmp44;
        let tmp45;
        if (tmp14 != tmp40) {
          const obj77 = { overrideTitle: tmp40 };
          tmp45 = obj77;
        }
        obj74.collected = tmp45;
        obj74.flavor = flavor;
        obj35.reward = obj74;
      }
    }
  }
  if (typeof prototype === "function") {
    const tmp61 = new prototype(tmp23, tmp12, tmp11, tmp10, tmp9, tmp8, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp, target, _Date3, prototype, new.target, id, application_id, name);
    tmp61.id = id;
    tmp61.applicationId = application_id;
    tmp61.name = name;
    tmp61.displayName = display_name;
    tmp61.rewardType = reward_type;
    tmp61.rewardStatus = reward_status;
    tmp61.rewardConfig = tmp16;
    tmp61.skuIds = tmp20;
    tmp61.appliesToAllSkus = applies_to_all_skus;
    tmp61.includeBundles = include_bundles;
    tmp61.startsAt = date;
    tmp61.endsAt = date1;
    tmp61.redemptionEndsAt = date2;
    tmp61.progress = tmp34;
    tmp61.tenantMetadata = tmp35;
    return tmp61;
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