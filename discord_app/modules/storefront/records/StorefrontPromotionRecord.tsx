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
function parseCollectiblesShared(shared) {
  ({ progress_indicator, navigation, help_center } = shared);
  const obj = {
    title: progress_indicator.title,
    description: progress_indicator.description,
    rewardStates: null,
    assets: null,
    style: null,
  };
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
  obj.assets = {
    backgroundUrl: progress_indicator.assets.background_url,
    rewardPreview: {
      hiddenUrl: progress_indicator.assets.reward_preview.hidden_url,
      revealedUrl: progress_indicator.assets.reward_preview.revealed_url,
    },
  };
  let tmp6;
  if (null != progress_indicator.style) {
    const obj9 = {
      contentTheme: progress_indicator.style.content_theme,
      progressColor: progress_indicator.style.progress_color,
    };
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
        };
        tmp18 = obj;
      }
      const obj2 = { discount: tmp18, action: null };
      let tmp19 = null;
      if (tmp14 != reward_config.action) {
        const obj3 = {
          actionType: reward_config.action.action_type,
          deliveryMode: reward_config.action.delivery_mode,
          skuIds: null,
        };
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
    const obj6 = { current: null, target: null, label: null };
    ({ current: obj4.current, target } = progress);
    obj6.target = target;
    obj6.label = progress.label;
    tmp34 = obj6;
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
      let tmp36 = require;
      if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
        const subtype = collectibles.subtype;
        if (tmp36(9417).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER === subtype) {
          const obj8 = {
            type: tmp36(9417).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM,
            subtype: tmp36(9417).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER,
            collectionId: collectibles.collection_id,
            shopHome: null,
            indexPage: null,
            shared: null,
          };
          const obj9 = {
            title: collectibles.shop_home.title,
            description: collectibles.shop_home.description,
            rewardStates: null,
            style: null,
          };
          const reward_states = collectibles.shop_home.reward_states;
          const obj10 = { inProgress: null, earned: null, consumed: null };
          const obj11 = { progressSteps: null };
          const progress_steps = reward_states.in_progress.progress_steps;
          obj11.progressSteps = progress_steps.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj10.inProgress = obj11;
          const obj12 = { heroUrl: reward_states.earned.hero_url };
          obj10.earned = obj12;
          const obj13 = { heroUrl: reward_states.consumed.hero_url };
          obj10.consumed = obj13;
          obj9.rewardStates = obj10;
          let tmp53;
          if (tmp14 != collectibles.shop_home.style) {
            const obj14 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp53 = obj14;
          }
          obj9.style = tmp53;
          obj8.shopHome = obj9;
          const obj15 = { description: collectibles.index_page.description, rewardStates: null, style: null };
          const reward_states2 = collectibles.index_page.reward_states;
          const obj16 = { inProgress: null, earned: null, consumed: null };
          const obj17 = { progressSteps: null };
          const progress_steps1 = reward_states2.in_progress.progress_steps;
          obj17.progressSteps = progress_steps1.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj16.inProgress = obj17;
          const obj18 = { heroUrl: reward_states2.earned.hero_url };
          obj16.earned = obj18;
          const obj19 = { heroUrl: reward_states2.consumed.hero_url };
          obj16.consumed = obj19;
          obj15.rewardStates = obj16;
          tmp14 = tmp14 != collectibles.index_page.style;
          tmp36 = undefined;
          if (tmp14) {
            const obj20 = { contentTheme: collectibles.index_page.style.content_theme };
            tmp36 = obj20;
          }
          obj15.style = tmp36;
          obj8.indexPage = obj15;
          collectibles = parseCollectiblesShared(collectibles.shared);
          obj8.shared = collectibles;
        } else if (tmp36(9417).StorefrontPromotionCollectAndClaimSubtype.BASIC === subtype) {
          const obj21 = {
            type: tmp36(9417).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM,
            subtype: tmp36(9417).StorefrontPromotionCollectAndClaimSubtype.BASIC,
            collectionId: collectibles.collection_id,
            shopHome: null,
            indexPage: null,
            shared: null,
          };
          const obj22 = {
            title: collectibles.shop_home.title,
            description: collectibles.shop_home.description,
            style: null,
          };
          let tmp50;
          if (tmp14 != collectibles.shop_home.style) {
            const obj23 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp50 = obj23;
          }
          obj22.style = tmp50;
          obj21.shopHome = obj22;
          const obj24 = { description: collectibles.index_page.description, style: null };
          let tmp51;
          if (tmp14 != collectibles.index_page.style) {
            const obj25 = { contentTheme: collectibles.index_page.style.content_theme };
            tmp51 = obj25;
          }
          obj24.style = tmp51;
          obj21.indexPage = obj24;
          obj21.shared = parseCollectiblesShared(collectibles.shared);
        }
      } else if (tmp36(9417).StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
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
        let tmp44;
        if (tmp14 != override_title) {
          if ("" !== override_title) {
            tmp44 = override_title;
          }
        }
        let flavor;
        if (reward != tmp14) {
          flavor = reward.flavor;
        }
        if (tmp14 == nagbar) {
          if (tmp14 == offer_notice) {
            if (tmp14 == tmp44) {
              if (tmp14 == flavor) {
                const obj26 = { type: tmp36(9417).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                let obj27 = obj26;
              }
            }
          }
        }
        obj27 = { type: tmp36(9417).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: null };
        let tmp46;
        if (tmp14 != nagbar) {
          const header_text = nagbar.header_text;
          const obj28 = { headerText: header_text, cta: null, helpCenterId: null, icon: null };
          let tmp47;
          if (tmp14 != nagbar.cta) {
            const text = nagbar.cta.text;
            const obj29 = { text };
            tmp47 = obj29;
          }
          obj28.cta = tmp47;
          const help_center_id = nagbar.help_center_id;
          obj28.helpCenterId = help_center_id;
          const icon = nagbar.icon;
          const obj30 = { nagbar: null };
          obj28.icon = icon;
          obj30.nagbar = obj28;
          tmp46 = obj30;
        }
        const obj31 = { storefront: tmp46, checkout: null, collected: null, flavor: null };
        let tmp48;
        if (tmp14 != offer_notice) {
          const icon2 = offer_notice.icon;
          const obj32 = { icon: icon2, text: null };
          const text2 = offer_notice.text;
          const obj33 = { offerNotice: null };
          obj32.text = text2;
          obj33.offerNotice = obj32;
          tmp48 = obj33;
        }
        obj31.checkout = tmp48;
        let tmp49;
        if (tmp14 != tmp44) {
          const obj35 = { overrideTitle: tmp44 };
          tmp49 = obj35;
        }
        obj31.collected = tmp49;
        obj31.flavor = flavor;
        obj27.reward = obj31;
      } else if (tmp36(9417).StorefrontPromotionCollectiblesType.COLLECTION_SALE !== type) {
        if (tmp36(9417).StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER === type) {
          const obj36 = {
            type: tmp36(9417).StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER,
            collectionId: null,
            position: null,
          };
          ({ collection_id: obj34.collectionId, position: obj34.position } = collectibles);
        }
      }
      const navigation = collectibles.navigation;
      const obj71 = {
        type: tmp36(9417).StorefrontPromotionCollectiblesType.COLLECTION_SALE,
        collectionId: null,
        countdownStyle: null,
        showCountdownCta: null,
        countdownPosition: null,
        showUpsellBlocks: null,
        navigation: null,
      };
      ({ collection_id: obj5.collectionId, countdown_style: obj5.countdownStyle, show_countdown_cta } = collectibles);
      if (show_countdown_cta == tmp14) {
        show_countdown_cta = true;
      }
      obj71.showCountdownCta = show_countdown_cta;
      let RIGHT = collectibles.countdown_position;
      if (RIGHT == tmp14) {
        RIGHT = tmp36(9418).CollectiblesPromotionCountdownPosition.RIGHT;
      }
      obj71.countdownPosition = RIGHT;
      let flag = collectibles.show_upsell_blocks;
      if (flag == tmp14) {
        flag = false;
      }
      obj71.showUpsellBlocks = flag;
      let tab;
      if (navigation != tmp14) {
        tab = navigation.tab;
      }
      let tmp40;
      if (tmp14 != tab) {
        const obj72 = { tab: null };
        const obj73 = { title: navigation.tab.title, icon: navigation.tab.icon };
        obj72.tab = obj73;
        tmp40 = obj72;
      }
      obj71.navigation = tmp40;
    }
  }
  if (typeof prototype === "function") {
    const tmp58 = new prototype(
      tmp23,
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
    tmp58.id = id;
    tmp58.applicationId = application_id;
    tmp58.name = name;
    tmp58.displayName = display_name;
    tmp58.rewardType = reward_type;
    tmp58.rewardStatus = reward_status;
    tmp58.rewardConfig = tmp16;
    tmp58.skuIds = tmp20;
    tmp58.appliesToAllSkus = applies_to_all_skus;
    tmp58.includeBundles = include_bundles;
    tmp58.startsAt = date;
    tmp58.endsAt = date1;
    tmp58.redemptionEndsAt = date2;
    tmp58.progress = tmp34;
    tmp58.tenantMetadata = tmp35;
    return tmp58;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp20 = parseSkuIds(display_name.sku_ids);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default prototype;
export function getCollectiblesTargetedOffer(tenantMetadata) {
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
}
export function getCollectiblesCollectAndClaim(tenantMetadata) {
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
}
export function getCollectiblesCollectionSale(tenantMetadata) {
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
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECTION_SALE) {
    tmp3 = collectibles;
  }
  return tmp3;
}
export function getCollectiblesCollectionSequencedOffer(tenantMetadata) {
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
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER) {
    tmp3 = collectibles;
  }
  return tmp3;
}
