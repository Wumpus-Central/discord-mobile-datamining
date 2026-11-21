// === Module 8927: StorefrontPromotionRecord ===

// Module 8927 (StorefrontPromotionRecord)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 8928 */;
import CollectiblesPromotionIcon from "CollectiblesPromotionIcon" /* 8929 */;
import CollectiblesPromotionBlockTarget from "CollectiblesPromotionBlockTarget" /* 8930 */;
import CollectiblesPromotionBlockStyle2 from "CollectiblesPromotionBlockStyle" /* 8931 */;
import CollectiblesPromotionCountdownUnit from "CollectiblesPromotionCountdownUnit" /* 8932 */;
import Record from "Record" /* 1406 */;

require = fn;
function isEnumValue(CollectiblesPromotionBlockStyle, countdown_unit) {
  const values = Object.values(CollectiblesPromotionBlockStyle);
  return values.includes(countdown_unit);
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
const prototype = function StorefrontPromotionRecord(skuIds) {
  const tmp3 = new prototype(tmp2, tmp);
  ({ id: tmp3.id, applicationId: tmp3.applicationId, name: tmp3.name, displayName: tmp3.displayName, rewardType: tmp3.rewardType, rewardStatus: tmp3.rewardStatus, rewardConfig: tmp3.rewardConfig } = skuIds);
  skuIds = null;
  if (Array.isArray(skuIds.skuIds)) {
    skuIds = skuIds.skuIds;
  }
  tmp3.skuIds = skuIds;
  ({ appliesToAllSkus: tmp3.appliesToAllSkus, includeBundles: tmp3.includeBundles, startsAt: tmp3.startsAt, endsAt: tmp3.endsAt, redemptionEndsAt: tmp3.redemptionEndsAt, progress: tmp3.progress, tenantMetadata: tmp3.tenantMetadata } = skuIds);
  return tmp3;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(display_name) {
  ({ id, application_id, name } = display_name);
  if (name == null) {
    name = null;
  }
  display_name = display_name.display_name;
  if (display_name == null) {
    display_name = null;
  }
  ({ reward_status, reward_type } = display_name);
  if (reward_status == null) {
    reward_status = null;
  }
  let tmp3 = null;
  if (null != display_name.reward_config) {
    const reward_config = display_name.reward_config;
    let tmp4 = null;
    if (null != reward_config) {
      let tmp5 = null;
      if (null != reward_config.discount) {
        let obj = { id: reward_config.discount.id, type: reward_config.discount.type, amount: reward_config.discount.amount, fiatEnabled: reward_config.discount.fiat_enabled };
        tmp5 = obj;
      }
      let obj2 = { discount: tmp5, action: null };
      let tmp6 = null;
      if (null != reward_config.action) {
        const obj3 = { actionType: reward_config.action.action_type, deliveryMode: reward_config.action.delivery_mode, skuIds: null, orbsBackQuantity: null };
        let sku_ids = reward_config.action.sku_ids;
        if (sku_ids == null) {
          sku_ids = [];
        }
        obj3.skuIds = sku_ids;
        const orbs_back = reward_config.action.orbs_back;
        let orbs_quantity;
        if (orbs_back != null) {
          const first = orbs_back.tiers[0];
          if (first != null) {
            orbs_quantity = first.orbs_quantity;
          }
        }
        if (orbs_quantity == null) {
          orbs_quantity = null;
        }
        obj3.orbsBackQuantity = orbs_quantity;
        tmp6 = obj3;
      }
      obj2.action = tmp6;
      tmp4 = obj2;
    }
    tmp3 = tmp4;
  }
  let sku_ids1 = display_name.sku_ids;
  if (sku_ids1 == null) {
    sku_ids1 = null;
  }
  let date = null;
  ({ applies_to_all_skus, include_bundles } = display_name);
  if (null != display_name.starts_at) {
    const _Date = Date;
    date = new Date(display_name.starts_at);
  }
  let date1 = null;
  if (null != display_name.ends_at) {
    const _Date2 = Date;
    date1 = new Date(display_name.ends_at);
  }
  let date2 = null;
  if (null != display_name.redemption_ends_at) {
    let _Date1 = Date;
    date2 = new Date(display_name.redemption_ends_at);
  }
  let tmp24 = null;
  if (null != display_name.progress) {
    const progress = display_name.progress;
    const obj5 = { current: null, target: null, label: null };
    ({ current: obj4.current, target } = progress);
    obj5.target = target;
    obj5.label = progress.label;
    tmp24 = obj5;
  }
  let tmp25 = null;
  if (null != display_name.tenant_metadata) {
    const tenant_metadata = display_name.tenant_metadata;
    _Date1 = undefined;
    if (null != tenant_metadata.collectibles) {
      const collectibles = tenant_metadata.collectibles;
      let type = collectibles.type;
      let tmp27 = require;
      if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
        type = collectibles.subtype;
        if (tmp27(8928).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER === type) {
          const obj6 = { type: tmp27(8928).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: tmp27(8928).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER, collectionId: collectibles.collection_id, shopHome: null, indexPage: null, shared: null };
          const obj7 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, rewardStates: null, style: null };
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
          obj7.rewardStates = obj9;
          let tmp40;
          if (null != collectibles.shop_home.style) {
            const obj13 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp40 = obj13;
          }
          obj7.style = tmp40;
          obj6.shopHome = obj7;
          const obj14 = { description: collectibles.index_page.description, rewardStates: null, style: null };
          const reward_states2 = collectibles.index_page.reward_states;
          const obj15 = { inProgress: null, earned: null, consumed: null };
          const obj16 = { progressSteps: null };
          let progress_steps1 = reward_states2.in_progress.progress_steps;
          obj16.progressSteps = progress_steps1.map((heroUrl) => ({ heroUrl: heroUrl.hero_url }));
          obj15.inProgress = obj16;
          const obj17 = { heroUrl: reward_states2.earned.hero_url };
          obj15.earned = obj17;
          type = { heroUrl: null };
          let hero_url = reward_states2.consumed.hero_url;
          type.heroUrl = hero_url;
          obj15.consumed = type;
          obj14.rewardStates = obj15;
          let tmp41;
          if (null != collectibles.index_page.style) {
            type = { contentTheme: collectibles.index_page.style.content_theme };
            tmp41 = type;
          }
          obj14.style = tmp41;
          obj6.indexPage = obj14;
          tmp27 = parseCollectiblesShared;
          obj6.shared = parseCollectiblesShared(collectibles.shared);
          let merged = obj6;
        } else if (tmp27(8928).StorefrontPromotionCollectAndClaimSubtype.BASIC === type) {
          const obj18 = { type: tmp27(8928).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: tmp27(8928).StorefrontPromotionCollectAndClaimSubtype.BASIC, collectionId: collectibles.collection_id, shopHome: null, indexPage: null, shared: null };
          const obj19 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, style: null };
          let tmp38;
          if (null != collectibles.shop_home.style) {
            let obj20 = { contentTheme: collectibles.shop_home.style.content_theme };
            tmp38 = obj20;
          }
          obj19.style = tmp38;
          obj18.shopHome = obj19;
          const obj21 = { description: collectibles.index_page.description, style: null };
          let tmp39;
          if (null != collectibles.index_page.style) {
            obj20 = { contentTheme: collectibles.index_page.style.content_theme };
            tmp39 = obj20;
          }
          obj21.style = tmp39;
          obj18.indexPage = obj21;
          hero_url = parseCollectiblesShared;
          type = parseCollectiblesShared(collectibles.shared);
          obj18.shared = type;
          merged = obj18;
        }
      } else if (tmp27(8928).StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
        const reward = collectibles.reward;
        let nagbar;
        if (reward != null) {
          const storefront = reward.storefront;
          if (storefront != null) {
            nagbar = storefront.nagbar;
          }
        }
        let offer_notice;
        if (reward != null) {
          const checkout = reward.checkout;
          if (checkout != null) {
            offer_notice = checkout.offer_notice;
          }
        }
        let override_title;
        if (reward != null) {
          obj20 = reward.collected;
          if (obj20 != null) {
            override_title = obj20.override_title;
          }
        }
        progress_steps1 = undefined;
        if (null != override_title) {
          obj20 = "";
          if ("" !== override_title) {
            progress_steps1 = override_title;
          }
        }
        hero_url = undefined;
        if (reward != null) {
          hero_url = reward.flavor;
        }
        if (null == nagbar) {
          if (null == offer_notice) {
            if (null == progress_steps1) {
              if (null == hero_url) {
                type = { type: tmp27(8928).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                let obj22 = type;
              }
              merged = obj22;
            }
          }
        }
        obj22 = { type: tmp27(8928).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: null };
        let tmp35;
        if (null != nagbar) {
          const header_text = nagbar.header_text;
          let obj23 = { headerText: header_text, cta: null, helpCenterId: null, icon: null };
          let tmp36;
          if (null != nagbar.cta) {
            const text = nagbar.cta.text;
            const obj24 = { text };
            tmp36 = obj24;
          }
          obj23.cta = tmp36;
          const help_center_id = nagbar.help_center_id;
          obj23.helpCenterId = help_center_id;
          let text2 = nagbar.icon;
          const obj25 = { nagbar: null };
          obj23.icon = text2;
          obj25.nagbar = obj23;
          tmp35 = obj25;
        }
        type = { storefront: tmp35, checkout: null, collected: null, flavor: null };
        let tmp37;
        if (null != offer_notice) {
          let icon = offer_notice.icon;
          obj23 = { icon, text: null };
          text2 = offer_notice.text;
          offer_notice = { offerNotice: null };
          obj23.text = text2;
          offer_notice.offerNotice = obj23;
          tmp37 = offer_notice;
        }
        type.checkout = tmp37;
        obj20 = undefined;
        if (null != progress_steps1) {
          offer_notice = { overrideTitle: progress_steps1 };
          obj20 = offer_notice;
        }
        type.collected = obj20;
        type.flavor = hero_url;
        obj22.reward = type;
      } else if (tmp27(8928).StorefrontPromotionCollectiblesType.COLLECTION_SALE === type) {
        offer_notice = collectibles.navigation;
        const obj27 = { type: tmp27(8928).StorefrontPromotionCollectiblesType.COLLECTION_SALE, collectionId: null, countdownStyle: null, showCountdownCta: null, countdownPosition: null, showUpsellBlocks: null, navigation: null };
        ({ collection_id: obj8.collectionId, countdown_style: obj8.countdownStyle, show_countdown_cta } = collectibles);
        if (show_countdown_cta == null) {
          show_countdown_cta = true;
        }
        obj27.showCountdownCta = show_countdown_cta;
        let RIGHT2 = collectibles.countdown_position;
        if (RIGHT2 == null) {
          RIGHT2 = tmp27(8933).CollectiblesPromotionCountdownPosition.RIGHT;
        }
        obj27.countdownPosition = RIGHT2;
        let flag2 = collectibles.show_upsell_blocks;
        if (flag2 == null) {
          flag2 = false;
        }
        obj27.showUpsellBlocks = flag2;
        let tab;
        if (offer_notice != null) {
          tab = offer_notice.tab;
        }
        type = undefined;
        if (null != tab) {
          hero_url = { tab: null };
          obj20 = { title: offer_notice.tab.title, icon: null };
          offer_notice = offer_notice.tab.icon;
          obj20.icon = offer_notice;
          hero_url.tab = obj20;
          type = hero_url;
        }
        obj27.navigation = type;
        merged = obj27;
      } else if (tmp27(8928).StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER === type) {
        offer_notice = collectibles.navigation;
        const obj28 = { type: tmp27(8928).StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER, collectionId: null, position: null, countdownStyle: null, showCountdownCta: null, countdownPosition: null, navigation: null };
        ({ collection_id: obj26.collectionId, position: obj26.position, countdown_style } = collectibles);
        if (countdown_style == null) {
          countdown_style = tmp27(8934).CollectionPromotionCountdownStyle.DARK;
        }
        obj28.countdownStyle = countdown_style;
        let flag = collectibles.show_countdown_cta;
        if (flag == null) {
          flag = true;
        }
        obj28.showCountdownCta = flag;
        let RIGHT = collectibles.countdown_position;
        if (RIGHT == null) {
          RIGHT = tmp27(8933).CollectiblesPromotionCountdownPosition.RIGHT;
        }
        obj28.countdownPosition = RIGHT;
        let tab1;
        if (offer_notice != null) {
          tab1 = offer_notice.tab;
        }
        type = undefined;
        if (null != tab1) {
          hero_url = { tab: null };
          obj20 = { title: offer_notice.tab.title, icon: null };
          offer_notice = offer_notice.tab.icon;
          obj20.icon = offer_notice;
          hero_url.tab = obj20;
          type = hero_url;
        }
        obj28.navigation = type;
        merged = obj28;
      }
      target = collectibles.blocks;
      const tmp42 = (function parseCollectiblesBlocks(target) {
        if (null != target) {
          const obj2 = {};
          const _Object2 = Object;
          const values = Object.values(CollectiblesPromotionBlockTarget.CollectiblesPromotionBlockTarget);
          const iter = values[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp5 = target[nextResult];
            let tmp6 = tmp5;
            let style;
            let tmp4 = nextResult;
            if (tmp5 != null) {
              style = tmp5.style;
            }
            if (style == null) {
              style = CollectiblesPromotionBlockStyle2.CollectiblesPromotionBlockStyle.GREEN;
            }
            let tmp12 = style;
            let icon;
            if (tmp6 != null) {
              icon = tmp6.icon;
            }
            if (icon == null) {
              icon = CollectiblesPromotionIcon.CollectiblesPromotionIcon.TAG;
            }
            let tmp19 = icon;
            let label;
            if (tmp6 != null) {
              label = tmp6.label;
            }
            let tmp22 = null != label;
            if (tmp22) {
              tmp22 = "" !== tmp6.label;
            }
            if (tmp22) {
              tmp22 = isEnumValue(CollectiblesPromotionBlockStyle2.CollectiblesPromotionBlockStyle, tmp12);
            }
            if (tmp22) {
              tmp22 = isEnumValue(CollectiblesPromotionIcon.CollectiblesPromotionIcon, tmp19);
            }
            if (!tmp22) {
              continue;
            } else {
              let obj = { label: null, style: null, icon: null, countdownUnit: null };
              obj.label = tmp6.label;
              obj.style = tmp12;
              obj.icon = tmp19;
              if (isEnumValue(CollectiblesPromotionCountdownUnit.CollectiblesPromotionCountdownUnit, tmp6.countdown_unit)) {
                let NONE = tmp6.countdown_unit;
              } else {
                NONE = CollectiblesPromotionCountdownUnit.CollectiblesPromotionCountdownUnit.NONE;
              }
              obj.countdownUnit = NONE;
              obj2[tmp4] = obj;
            }
          }
          const _Object = Object;
          let tmp48;
          if (Object.keys(obj2).length > 0) {
            tmp48 = obj2;
          }
          return tmp48;
        }
      })(target);
      let tmp43 = merged;
      if (null != merged) {
        tmp43 = merged;
        if (null != tmp42) {
          target = {};
          merged = Object.assign(merged);
          target.blocks = tmp42;
          tmp43 = target;
          let tmp12 = target;
          const tmp44 = merged;
        }
      }
      _Date1 = tmp43;
    }
    const obj53 = { collectibles: _Date1 };
    tmp25 = obj53;
  }
  if (typeof prototype === "function") {
    let tmp48 = new prototype(tmp12, tmp44, text, obj24, text2, obj23, progress_steps1, offer_notice, obj20, hero_url, type, tmp27, merged, tmp42, target, _Date1, prototype, new.target, id, application_id);
    tmp48.id = id;
    tmp48.applicationId = application_id;
    tmp48.name = name;
    tmp48.displayName = display_name;
    tmp48.rewardType = reward_type;
    tmp48.rewardStatus = reward_status;
    tmp48.rewardConfig = tmp3;
    const _Array = Array;
    let tmp51 = null;
    if (Array.isArray(sku_ids1)) {
      tmp51 = sku_ids1;
    }
    tmp48.skuIds = tmp51;
    tmp48.appliesToAllSkus = applies_to_all_skus;
    tmp48.includeBundles = include_bundles;
    tmp48.startsAt = date;
    tmp48.endsAt = date1;
    tmp48.redemptionEndsAt = date2;
    tmp48.progress = tmp24;
    tmp48.tenantMetadata = tmp25;
    return tmp48;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
export function doesStorefrontPromotionCoverSku(appliesToAllSkus, arg1) {
  appliesToAllSkus = appliesToAllSkus.appliesToAllSkus;
  if (!appliesToAllSkus) {
    let tmp3 = null != arg1;
    if (tmp3) {
      const skuIds = appliesToAllSkus.skuIds;
      let hasItem;
      if (skuIds != null) {
        hasItem = skuIds.includes(arg1);
      }
      tmp3 = true === hasItem;
    }
    appliesToAllSkus = tmp3;
  }
  return appliesToAllSkus;
}