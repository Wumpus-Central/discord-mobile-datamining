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
    redemptionEndsAt: tmp.redemptionEndsAt,
    progress: tmp.progress,
    tenantMetadata: tmp.tenantMetadata,
  } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {}
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
  let tmp33 = null;
  if (tmp14 != display_name.progress) {
    const progress = display_name.progress;
    const obj4 = { current: null, target: null, label: null };
    ({ current: obj3.current, target } = progress);
    obj4.target = target;
    obj4.label = progress.label;
    tmp33 = obj4;
  }
  let tmp34 = null;
  if (tmp14 != display_name.tenant_metadata) {
    const tenant_metadata = display_name.tenant_metadata;
    if (tmp14 == tenant_metadata.collectibles) {
      const obj6 = { collectibles: _Date3 };
      tmp34 = obj6;
    } else {
      let collectibles = tenant_metadata.collectibles;
      const type = collectibles.type;
      let obj31 = require;
      let tmp35 = dependencyMap;
      if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
        if (collectibles.subtype === obj31(9069).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER) {
          const obj7 = {
            type: obj31(9069).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM,
            subtype: obj31(9069).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER,
            collectionId: collectibles.collection_id,
            shopHome: null,
            indexPage: null,
            shared: null,
          };
          const obj8 = {
            title: collectibles.shop_home.title,
            description: collectibles.shop_home.description,
            rewardStates: null,
            style: null,
          };
          const reward_states2 = collectibles.shop_home.reward_states;
          const obj9 = { inProgress: null, earned: null, consumed: null };
          const obj10 = { progressSteps: null };
          const progress_steps = reward_states2.in_progress.progress_steps;
          obj10.progressSteps = progress_steps.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj9.inProgress = obj10;
          const obj11 = { heroUrl: reward_states2.earned.hero_url };
          obj9.earned = obj11;
          const obj12 = { heroUrl: reward_states2.consumed.hero_url };
          obj9.consumed = obj12;
          obj8.rewardStates = obj9;
          let tmp47;
          if (tmp14 != collectibles.shop_home.style) {
            const obj13 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp47 = obj13;
          }
          obj8.style = tmp47;
          obj7.shopHome = obj8;
          const obj14 = { description: collectibles.index_page.description, rewardStates: null, style: null };
          const reward_states = collectibles.index_page.reward_states;
          const obj15 = { inProgress: null, earned: null, consumed: null };
          const obj16 = { progressSteps: null };
          const progress_steps1 = reward_states.in_progress.progress_steps;
          obj16.progressSteps = progress_steps1.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj15.inProgress = obj16;
          const obj17 = { heroUrl: reward_states.earned.hero_url };
          obj15.earned = obj17;
          const obj18 = { heroUrl: reward_states.consumed.hero_url };
          obj15.consumed = obj18;
          obj14.rewardStates = obj15;
          let tmp48;
          if (tmp14 != collectibles.index_page.style) {
            const obj19 = { contentTheme: collectibles.index_page.style.content_theme };
            tmp48 = obj19;
          }
          obj14.style = tmp48;
          obj7.indexPage = obj14;
          ({ progress_indicator, navigation, help_center } = collectibles.shared);
          const obj20 = { title: null, description: null, rewardStates: null, assets: null, style: null };
          ({ title: obj22.title, description: obj22.description } = progress_indicator);
          let tmp49;
          if (tmp14 != progress_indicator.indicator_reward_states) {
            const indicator_reward_states = progress_indicator.indicator_reward_states;
            let tmp50;
            if (tmp14 != indicator_reward_states.in_progress) {
              const obj21 = { progressSteps: null };
              const progress_steps2 = indicator_reward_states.in_progress.progress_steps;
              obj21.progressSteps = progress_steps2.map(parseCollectiblesProgressIndicatorRewardState);
              tmp50 = obj21;
            }
            const obj23 = { inProgress: tmp50, earned: null, consumed: null };
            let tmp52;
            if (tmp14 != indicator_reward_states.earned) {
              ({ title: obj25.title, description: obj25.description } = indicator_reward_states.earned);
              tmp52 = { title: null, description: null };
              const obj24 = { title: null, description: null };
            }
            obj23.earned = tmp52;
            let tmp53;
            if (tmp14 != indicator_reward_states.consumed) {
              ({ title: obj26.title, description: obj26.description } = indicator_reward_states.consumed);
              tmp53 = { title: null, description: null };
              const obj27 = { title: null, description: null };
            }
            obj23.consumed = tmp53;
            tmp49 = obj23;
          }
          obj20.rewardStates = tmp49;
          const obj28 = { backgroundUrl: progress_indicator.assets.background_url, rewardPreview: null };
          const obj29 = {
            hiddenUrl: progress_indicator.assets.reward_preview.hidden_url,
            revealedUrl: progress_indicator.assets.reward_preview.revealed_url,
          };
          obj28.rewardPreview = obj29;
          obj20.assets = obj28;
          obj31 = undefined;
          if (tmp14 != progress_indicator.style) {
            const obj30 = {
              contentTheme: progress_indicator.style.content_theme,
              progressColor: progress_indicator.style.progress_color,
            };
            obj31 = obj30;
          }
          collectibles = { progressIndicator: null, navigation: null, helpCenter: null };
          obj20.style = obj31;
          collectibles.progressIndicator = obj20;
          let tab;
          if (navigation != tmp14) {
            tab = navigation.tab;
          }
          let tmp55;
          if (tmp14 != tab) {
            obj31 = { tab: null };
            const obj32 = { title: navigation.tab.title, icon: navigation.tab.icon };
            obj31.tab = obj32;
            tmp55 = obj31;
          }
          collectibles.navigation = tmp55;
          tmp14 = tmp14 != help_center;
          tmp35 = undefined;
          if (tmp14) {
            obj31 = { text: null, id: null };
            ({ text: obj5.text, id: obj5.id } = help_center);
            tmp35 = obj31;
          }
          collectibles.helpCenter = tmp35;
          obj7.shared = collectibles;
        }
      } else if (obj31(9069).StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
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
        let tmp39;
        if (tmp14 != override_title) {
          if ("" !== override_title) {
            tmp39 = override_title;
          }
        }
        let flavor;
        if (reward != tmp14) {
          flavor = reward.flavor;
        }
        if (tmp14 == nagbar) {
          if (tmp14 == offer_notice) {
            if (tmp14 == tmp39) {
              if (tmp14 == flavor) {
                const obj33 = { type: obj31(9069).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                let obj34 = obj33;
              }
            }
          }
        }
        obj34 = { type: obj31(9069).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: null };
        let tmp41;
        if (tmp14 != nagbar) {
          const header_text = nagbar.header_text;
          const obj35 = { headerText: header_text, cta: null, helpCenterId: null, icon: null };
          let tmp42;
          if (tmp14 != nagbar.cta) {
            const text = nagbar.cta.text;
            const obj36 = { text };
            tmp42 = obj36;
          }
          obj35.cta = tmp42;
          const help_center_id = nagbar.help_center_id;
          obj35.helpCenterId = help_center_id;
          const icon = nagbar.icon;
          const obj37 = { nagbar: null };
          obj35.icon = icon;
          obj37.nagbar = obj35;
          tmp41 = obj37;
        }
        const obj72 = { storefront: tmp41, checkout: null, collected: null, flavor: null };
        let tmp43;
        if (tmp14 != offer_notice) {
          const icon2 = offer_notice.icon;
          const obj73 = { icon: icon2, text: null };
          const text2 = offer_notice.text;
          const obj74 = { offerNotice: null };
          obj73.text = text2;
          obj74.offerNotice = obj73;
          tmp43 = obj74;
        }
        obj72.checkout = tmp43;
        let tmp44;
        if (tmp14 != tmp39) {
          const obj75 = { overrideTitle: tmp39 };
          tmp44 = obj75;
        }
        obj72.collected = tmp44;
        obj72.flavor = flavor;
        obj34.reward = obj72;
      }
    }
  }
  if (typeof prototype === "function") {
    const tmp60 = new prototype(
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
      target,
      _Date3,
      prototype,
      new.target,
      id,
      application_id,
      name,
    );
    tmp60.id = id;
    tmp60.applicationId = application_id;
    tmp60.name = name;
    tmp60.displayName = display_name;
    tmp60.rewardType = reward_type;
    tmp60.rewardStatus = reward_status;
    tmp60.rewardConfig = tmp16;
    tmp60.skuIds = tmp19;
    tmp60.appliesToAllSkus = applies_to_all_skus;
    tmp60.includeBundles = include_bundles;
    tmp60.startsAt = date;
    tmp60.endsAt = date1;
    tmp60.redemptionEndsAt = date2;
    tmp60.progress = tmp33;
    tmp60.tenantMetadata = tmp34;
    return tmp60;
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
