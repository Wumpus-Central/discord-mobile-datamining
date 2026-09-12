// discord_app/modules/storefront/records/StorefrontPromotionRecord.tsx
import StorefrontCollectiblesTypes from "../collectibles/StorefrontCollectiblesTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import Record from "../../../lib/Record.tsx";

require = fn;
function parseSkuIds(sku_ids) {
  if (null == sku_ids) {
    return null;
  } else {
    let obj = {};
    const _Object = Object;
    const entries = Object.entries(sku_ids);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      obj = { priceTiers: tmp9[1].price_tiers };
      obj[tmp9[0]] = obj;
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
        let obj = {
          id: reward_config.discount.id,
          type: reward_config.discount.type,
          amount: reward_config.discount.amount,
          fiatEnabled: reward_config.discount.fiat_enabled,
          orbsEnabled: reward_config.discount.orbs_enabled,
        };
        tmp18 = obj;
      }
      obj = { discount: tmp18 };
      tmp17 = obj;
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
      obj = { collectibles: _Date };
      tmp28 = obj;
    } else {
      let collectibles = tenant_metadata.collectibles;
      let obj31 = require;
      let tmp29 = dependencyMap;
      if (collectibles.type !== StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM) {
        if (collectibles.type === obj31(8915).StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
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
          let tmp34;
          if (tmp14 != override_title) {
            if ("" !== override_title) {
              tmp34 = override_title;
            }
          }
          let flavor;
          if (reward != tmp14) {
            flavor = reward.flavor;
          }
          if (tmp14 == nagbar) {
            if (tmp14 == offer_notice) {
              const obj1 = { type: obj31(8915).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
              let obj2 = obj1;
            }
          }
          obj2 = { type: obj31(8915).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: null };
          let tmp36;
          if (tmp14 != nagbar) {
            const header_text = nagbar.header_text;
            const obj3 = { headerText: header_text, cta: null, helpCenterId: null, icon: null };
            let tmp37;
            if (tmp14 != nagbar.cta) {
              const text = nagbar.cta.text;
              const obj4 = { text };
              tmp37 = obj4;
            }
            obj3.cta = tmp37;
            const help_center_id = nagbar.help_center_id;
            obj3.helpCenterId = help_center_id;
            const icon = nagbar.icon;
            const obj5 = { nagbar: null };
            obj3.icon = icon;
            obj5.nagbar = obj3;
            tmp36 = obj5;
          }
          const obj6 = { storefront: tmp36, checkout: null, collected: null, flavor: null };
          let tmp38;
          if (tmp14 != offer_notice) {
            const icon2 = offer_notice.icon;
            const obj7 = { icon: icon2, text: null };
            const text2 = offer_notice.text;
            const obj8 = { offerNotice: null };
            obj7.text = text2;
            obj8.offerNotice = obj7;
            tmp38 = obj8;
          }
          obj6.checkout = tmp38;
          let tmp39;
          if (tmp14 != tmp34) {
            const obj9 = { overrideTitle: tmp34 };
            tmp39 = obj9;
          }
          obj6.collected = tmp39;
          obj6.flavor = flavor;
          obj2.reward = obj6;
        }
      }
      const obj10 = {
        type: obj31(8915).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM,
        subtype: obj31(8915).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER,
        collectionId: collectibles.collection_id,
        shopHome: null,
        indexPage: null,
        shared: null,
      };
      const obj11 = {
        title: collectibles.shop_home.title,
        description: collectibles.shop_home.description,
        rewardStates: null,
        style: null,
      };
      const reward_states = collectibles.shop_home.reward_states;
      const obj12 = { inProgress: null, earned: null, consumed: null };
      const obj13 = { progressSteps: null };
      const progress_steps = reward_states.in_progress.progress_steps;
      obj13.progressSteps = progress_steps.map((heroAssetPath) => ({ heroAssetPath: heroAssetPath.hero_asset_path }));
      obj12.inProgress = obj13;
      const obj14 = { heroAssetPath: reward_states.earned.hero_asset_path };
      obj12.earned = obj14;
      const obj15 = { heroAssetPath: reward_states.consumed.hero_asset_path };
      obj12.consumed = obj15;
      obj11.rewardStates = obj12;
      let tmp41;
      if (tmp14 != collectibles.shop_home.style) {
        const obj16 = { contentTheme: collectibles.shop_home.style.content_theme };
        tmp41 = obj16;
      }
      obj11.style = tmp41;
      obj10.shopHome = obj11;
      const obj17 = { description: collectibles.index_page.description, rewardStates: null, style: null };
      const reward_states2 = collectibles.index_page.reward_states;
      const obj18 = { inProgress: null, earned: null, consumed: null };
      const obj19 = { progressSteps: null };
      const progress_steps1 = reward_states2.in_progress.progress_steps;
      obj19.progressSteps = progress_steps1.map((heroAssetPath) => ({ heroAssetPath: heroAssetPath.hero_asset_path }));
      obj18.inProgress = obj19;
      const obj20 = { heroAssetPath: reward_states2.earned.hero_asset_path };
      obj18.earned = obj20;
      const obj21 = { heroAssetPath: reward_states2.consumed.hero_asset_path };
      obj18.consumed = obj21;
      obj17.rewardStates = obj18;
      let tmp42;
      if (tmp14 != collectibles.index_page.style) {
        const obj22 = { contentTheme: collectibles.index_page.style.content_theme };
        tmp42 = obj22;
      }
      obj17.style = tmp42;
      obj10.indexPage = obj17;
      ({ progress_indicator, navigation, help_center } = collectibles.shared);
      const obj23 = { title: null, description: null, rewardStates: null, assets: null, style: null };
      ({ title: obj27.title, description: obj27.description } = progress_indicator);
      let tmp43;
      if (tmp14 != progress_indicator.indicator_reward_states) {
        const indicator_reward_states = progress_indicator.indicator_reward_states;
        let tmp44;
        if (tmp14 != indicator_reward_states.in_progress) {
          const obj24 = { progressSteps: null };
          const progress_steps2 = indicator_reward_states.in_progress.progress_steps;
          obj24.progressSteps = progress_steps2.map(parseCollectiblesProgressIndicatorRewardState);
          tmp44 = obj24;
        }
        const obj25 = { inProgress: tmp44, earned: null, consumed: null };
        let tmp46;
        if (tmp14 != indicator_reward_states.earned) {
          ({ title: obj30.title, description: obj30.description } = indicator_reward_states.earned);
          tmp46 = { title: null, description: null };
          const obj26 = { title: null, description: null };
        }
        obj25.earned = tmp46;
        let tmp47;
        if (tmp14 != indicator_reward_states.consumed) {
          const obj27 = { title: null, description: null };
          ({ title: obj31.title, description: obj31.description } = indicator_reward_states.consumed);
          tmp47 = obj27;
        }
        obj25.consumed = tmp47;
        tmp43 = obj25;
      }
      obj23.rewardStates = tmp43;
      const obj28 = { backgroundAssetPath: progress_indicator.assets.background_asset_path, rewardPreview: null };
      const obj29 = {
        hiddenAssetPath: progress_indicator.assets.reward_preview.hidden_asset_path,
        revealedAssetPath: progress_indicator.assets.reward_preview.revealed_asset_path,
      };
      obj28.rewardPreview = obj29;
      obj23.assets = obj28;
      obj31 = undefined;
      if (tmp14 != progress_indicator.style) {
        const obj30 = {
          contentTheme: progress_indicator.style.content_theme,
          progressColor: progress_indicator.style.progress_color,
        };
        obj31 = obj30;
      }
      collectibles = { progressIndicator: null, navigation: null, helpCenter: null };
      obj23.style = obj31;
      collectibles.progressIndicator = obj23;
      let tab;
      if (navigation != tmp14) {
        tab = navigation.tab;
      }
      let tmp49;
      if (tmp14 != tab) {
        obj31 = { tab: null };
        const obj32 = { title: navigation.tab.title, icon: navigation.tab.icon };
        obj31.tab = obj32;
        tmp49 = obj31;
      }
      collectibles.navigation = tmp49;
      tmp14 = tmp14 != help_center;
      tmp29 = undefined;
      if (tmp14) {
        obj31 = { text: null, id: null };
        ({ text: obj4.text, id: obj4.id } = help_center);
        tmp29 = obj31;
      }
      collectibles.helpCenter = tmp29;
      obj10.shared = collectibles;
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
