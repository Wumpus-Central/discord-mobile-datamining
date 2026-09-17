// discord_app/modules/storefront/records/StorefrontPromotionRecord.tsx
import StorefrontCollectiblesTypes from "../collectibles/StorefrontCollectiblesTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import Record from "../../../lib/Record.tsx";

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
  ({
    id: tmp.id,
    applicationId: tmp.applicationId,
    name: tmp.name,
    displayName: tmp.displayName,
    rewardType: tmp.rewardType,
    rewardStatus: tmp.rewardStatus,
    rewardConfig: tmp.rewardConfig,
    skuIds: tmp.skuIds,
    appliesToAllSkus: tmp.appliesToAllSkus,
    includeBundles: tmp.includeBundles,
    startsAt: tmp.startsAt,
    endsAt: tmp.endsAt,
    tenantMetadata: tmp.tenantMetadata,
  } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {}
prototype["createFromServer"] = function createFromServer(display_name) {
  ({ id, name } = display_name);
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
        const obj = {
          id: reward_config.discount.id,
          type: reward_config.discount.type,
          amount: reward_config.discount.amount,
          fiatEnabled: reward_config.discount.fiat_enabled,
          orbsEnabled: reward_config.discount.orbs_enabled,
        };
        tmp18 = obj;
      }
      const obj2 = { discount: tmp18 };
      tmp17 = obj2;
    }
    tmp16 = tmp17;
  }
  let date = null;
  ({ applies_to_all_skus, include_bundles } = display_name);
  if (tmp14 != display_name.starts_at) {
    let _Date = Date;
    date = new Date(display_name.starts_at);
  }
  let date1 = null;
  if (tmp14 != display_name.ends_at) {
    _Date = new.target;
    const _Date2 = Date;
    date1 = new Date(display_name.ends_at);
  }
  let tmp28 = null;
  if (tmp14 != display_name.tenant_metadata) {
    const tenant_metadata = display_name.tenant_metadata;
    if (tmp14 == tenant_metadata.collectibles) {
      const obj3 = { collectibles: _Date };
      tmp28 = obj3;
    } else {
      let collectibles = tenant_metadata.collectibles;
      const type = collectibles.type;
      let obj29 = require;
      let tmp29 = dependencyMap;
      if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
        if (collectibles.subtype === obj29(8945).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER) {
          const obj5 = {
            type: obj29(8945).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM,
            subtype: obj29(8945).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER,
            collectionId: collectibles.collection_id,
            shopHome: null,
            indexPage: null,
            shared: null,
          };
          const obj6 = {
            title: collectibles.shop_home.title,
            description: collectibles.shop_home.description,
            rewardStates: null,
            style: null,
          };
          const reward_states2 = collectibles.shop_home.reward_states;
          const obj7 = { inProgress: null, earned: null, consumed: null };
          const obj8 = { progressSteps: null };
          const progress_steps = reward_states2.in_progress.progress_steps;
          obj8.progressSteps = progress_steps.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj7.inProgress = obj8;
          const obj9 = { heroUrl: reward_states2.earned.hero_url };
          obj7.earned = obj9;
          const obj10 = { heroUrl: reward_states2.consumed.hero_url };
          obj7.consumed = obj10;
          obj6.rewardStates = obj7;
          let tmp41;
          if (tmp14 != collectibles.shop_home.style) {
            const obj11 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp41 = obj11;
          }
          obj6.style = tmp41;
          obj5.shopHome = obj6;
          const obj12 = { description: collectibles.index_page.description, rewardStates: null, style: null };
          const reward_states = collectibles.index_page.reward_states;
          const obj13 = { inProgress: null, earned: null, consumed: null };
          const obj14 = { progressSteps: null };
          const progress_steps1 = reward_states.in_progress.progress_steps;
          obj14.progressSteps = progress_steps1.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj13.inProgress = obj14;
          const obj15 = { heroUrl: reward_states.earned.hero_url };
          obj13.earned = obj15;
          const obj16 = { heroUrl: reward_states.consumed.hero_url };
          obj13.consumed = obj16;
          obj12.rewardStates = obj13;
          let tmp42;
          if (tmp14 != collectibles.index_page.style) {
            const obj17 = { contentTheme: collectibles.index_page.style.content_theme };
            tmp42 = obj17;
          }
          obj12.style = tmp42;
          obj5.indexPage = obj12;
          ({ progress_indicator, navigation, help_center } = collectibles.shared);
          const obj18 = { title: null, description: null, rewardStates: null, assets: null, style: null };
          ({ title: obj21.title, description: obj21.description } = progress_indicator);
          let tmp43;
          if (tmp14 != progress_indicator.indicator_reward_states) {
            const indicator_reward_states = progress_indicator.indicator_reward_states;
            let tmp44;
            if (tmp14 != indicator_reward_states.in_progress) {
              const obj19 = { progressSteps: null };
              const progress_steps2 = indicator_reward_states.in_progress.progress_steps;
              obj19.progressSteps = progress_steps2.map(parseCollectiblesProgressIndicatorRewardState);
              tmp44 = obj19;
            }
            const obj20 = { inProgress: tmp44, earned: null, consumed: null };
            let tmp46;
            if (tmp14 != indicator_reward_states.earned) {
              ({ title: obj24.title, description: obj24.description } = indicator_reward_states.earned);
              tmp46 = { title: null, description: null };
              const obj22 = { title: null, description: null };
            }
            obj20.earned = tmp46;
            let tmp47;
            if (tmp14 != indicator_reward_states.consumed) {
              ({ title: obj25.title, description: obj25.description } = indicator_reward_states.consumed);
              tmp47 = { title: null, description: null };
              const obj23 = { title: null, description: null };
            }
            obj20.consumed = tmp47;
            tmp43 = obj20;
          }
          obj18.rewardStates = tmp43;
          const obj26 = { backgroundUrl: progress_indicator.assets.background_url, rewardPreview: null };
          const obj27 = {
            hiddenUrl: progress_indicator.assets.reward_preview.hidden_url,
            revealedUrl: progress_indicator.assets.reward_preview.revealed_url,
          };
          obj26.rewardPreview = obj27;
          obj18.assets = obj26;
          obj29 = undefined;
          if (tmp14 != progress_indicator.style) {
            const obj28 = {
              contentTheme: progress_indicator.style.content_theme,
              progressColor: progress_indicator.style.progress_color,
            };
            obj29 = obj28;
          }
          collectibles = { progressIndicator: null, navigation: null, helpCenter: null };
          obj18.style = obj29;
          collectibles.progressIndicator = obj18;
          let tab;
          if (navigation != tmp14) {
            tab = navigation.tab;
          }
          let tmp49;
          if (tmp14 != tab) {
            obj29 = { tab: null };
            const obj30 = { title: navigation.tab.title, icon: navigation.tab.icon };
            obj29.tab = obj30;
            tmp49 = obj29;
          }
          collectibles.navigation = tmp49;
          tmp14 = tmp14 != help_center;
          tmp29 = undefined;
          if (tmp14) {
            obj29 = { text: null, id: null };
            ({ text: obj4.text, id: obj4.id } = help_center);
            tmp29 = obj29;
          }
          collectibles.helpCenter = tmp29;
          obj5.shared = collectibles;
        }
      } else if (obj29(8945).StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
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
        let tmp33;
        if (tmp14 != override_title) {
          if ("" !== override_title) {
            tmp33 = override_title;
          }
        }
        let flavor;
        if (reward != tmp14) {
          flavor = reward.flavor;
        }
        if (tmp14 == nagbar) {
          if (tmp14 == offer_notice) {
            if (tmp14 == tmp33) {
              if (tmp14 == flavor) {
                const obj31 = { type: obj29(8945).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                let obj32 = obj31;
              }
            }
          }
        }
        obj32 = { type: obj29(8945).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: null };
        let tmp35;
        if (tmp14 != nagbar) {
          const header_text = nagbar.header_text;
          const obj33 = { headerText: header_text, cta: null, helpCenterId: null, icon: null };
          let tmp36;
          if (tmp14 != nagbar.cta) {
            const text = nagbar.cta.text;
            const obj34 = { text };
            tmp36 = obj34;
          }
          obj33.cta = tmp36;
          const help_center_id = nagbar.help_center_id;
          obj33.helpCenterId = help_center_id;
          const icon = nagbar.icon;
          const obj35 = { nagbar: null };
          obj33.icon = icon;
          obj35.nagbar = obj33;
          tmp35 = obj35;
        }
        const obj36 = { storefront: tmp35, checkout: null, collected: null, flavor: null };
        let tmp37;
        if (tmp14 != offer_notice) {
          const icon2 = offer_notice.icon;
          const obj70 = { icon: icon2, text: null };
          const text2 = offer_notice.text;
          const obj71 = { offerNotice: null };
          obj70.text = text2;
          obj71.offerNotice = obj70;
          tmp37 = obj71;
        }
        obj36.checkout = tmp37;
        let tmp38;
        if (tmp14 != tmp33) {
          const obj72 = { overrideTitle: tmp33 };
          tmp38 = obj72;
        }
        obj36.collected = tmp38;
        obj36.flavor = flavor;
        obj32.reward = obj36;
      }
    }
  }
  if (typeof prototype === "function") {
    const tmp54 = new prototype(
      tmp22,
      tmp12,
      tmp11,
      tmp10,
      tmp9,
      tmp8,
      tmp7,
      tmp6,
      tmp5,
      tmp4,
      tmp3,
      tmp2,
      tmp,
      _Date2,
      _Date,
      prototype,
      new.target,
      id,
    );
    tmp54.id = id;
    tmp54.applicationId = display_name.application_id;
    tmp54.name = name;
    tmp54.displayName = display_name;
    tmp54.rewardType = reward_type;
    tmp54.rewardStatus = reward_status;
    tmp54.rewardConfig = tmp16;
    tmp54.skuIds = tmp19;
    tmp54.appliesToAllSkus = applies_to_all_skus;
    tmp54.includeBundles = include_bundles;
    tmp54.startsAt = date;
    tmp54.endsAt = date1;
    tmp54.tenantMetadata = tmp28;
    return tmp54;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp19 = parseSkuIds(display_name.sku_ids);
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
