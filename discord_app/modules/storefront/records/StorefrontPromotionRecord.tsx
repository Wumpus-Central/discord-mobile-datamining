// discord_app/modules/storefront/records/StorefrontPromotionRecord.tsx
import StorefrontCollectiblesTypes from "../collectibles/StorefrontCollectiblesTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import Record from "../../../lib/Record.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let display_name, navigation;

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
class StorefrontPromotionRecord extends Record {
  constructor(arg0) {
    const tmp = new StorefrontPromotionRecord(new.target, this);
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
  }
  static createFromServer(display_name) {
    let _Date1;
    let application_id;
    let applies_to_all_skus;
    let collectibles;
    let help_center;
    let help_center_id;
    let id;
    let include_bundles;
    let mapped;
    let name;
    let obj10;
    let obj12;
    let obj13;
    let obj14;
    let obj15;
    let obj16;
    let obj22;
    let obj23;
    let obj25;
    let obj26;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    let progress_indicator;
    let progress_steps;
    let progress_steps1;
    let progress_steps2;
    let revealed_url;
    let reward_status;
    let reward_type;
    let sku_ids;
    let target;
    let tmp18;
    let tmp23;
    let tmp24;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp31;
    let tmp32;
    let tmp34;
    let tmp6;
    let type;
    const f97484 = (heroUrl) => ({ heroUrl: heroUrl.hero_url });
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
          tmp5 = {
            id: reward_config.discount.id,
            type: reward_config.discount.type,
            amount: reward_config.discount.amount,
            fiatEnabled: reward_config.discount.fiat_enabled,
            orbsEnabled: reward_config.discount.orbs_enabled,
          };
          const obj = {
            id: reward_config.discount.id,
            type: reward_config.discount.type,
            amount: reward_config.discount.amount,
            fiatEnabled: reward_config.discount.fiat_enabled,
            orbsEnabled: reward_config.discount.orbs_enabled,
          };
        }
        const obj2 = { discount: tmp5, action: tmp6 };
        tmp6 = null;
        if (null != reward_config.action) {
          const obj3 = {
            actionType: reward_config.action.action_type,
            deliveryMode: reward_config.action.delivery_mode,
            skuIds: sku_ids,
          };
          sku_ids = reward_config.action.sku_ids;
          if (sku_ids == null) {
            sku_ids = [];
          }
          tmp6 = obj3;
        }
        tmp4 = obj2;
      }
      tmp3 = tmp4;
    }
    let date = null;
    ({ applies_to_all_skus, include_bundles } = display_name);
    const tmp7 = parseSkuIds(display_name.sku_ids);
    if (null != display_name.starts_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(display_name.starts_at);
    }
    let date1 = null;
    if (null != display_name.ends_at) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date1 = new Date(display_name.ends_at);
    }
    let date2 = null;
    if (null != display_name.redemption_ends_at) {
      _Date1 = Date;
      const self5 = this;
      const self6 = this;
      date2 = new Date(display_name.redemption_ends_at);
    }
    let tmp16 = null;
    if (null != display_name.progress) {
      const progress = display_name.progress;
      const obj5 = { current: null, target, label: progress.label };
      ({ current: obj4.current, target } = progress);
      tmp16 = obj5;
    }
    let tmp17 = null;
    if (null != display_name.tenant_metadata) {
      const tenant_metadata = display_name.tenant_metadata;
      _Date1 = undefined;
      if (null != tenant_metadata.collectibles) {
        let tmp25;
        collectibles = tenant_metadata.collectibles;
        type = collectibles.type;
        obj25 = require;
        tmp18 = dependencyMap;
        if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
          help_center = collectibles.subtype;
          type = obj25(8477).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER;
          target = undefined;
          if (help_center === type) {
            type = {
              type: obj25(8477).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM,
              subtype: obj25(8477).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER,
              collectionId: collectibles.collection_id,
              shopHome: obj6,
              indexPage: obj12,
              shared: collectibles,
            };
            const reward_states2 = collectibles.shop_home.reward_states;
            obj6 = {
              title: collectibles.shop_home.title,
              description: collectibles.shop_home.description,
              rewardStates: obj7,
              style: tmp26,
            };
            obj7 = { inProgress: obj8, earned: obj9, consumed: obj10 };
            obj8 = { progressSteps: progress_steps.map(f97484) };
            progress_steps = reward_states2.in_progress.progress_steps;
            tmp26 = undefined;
            obj10 = { heroUrl: reward_states2.consumed.hero_url };
            obj9 = { heroUrl: reward_states2.earned.hero_url };
            if (null != collectibles.shop_home.style) {
              tmp26 = { contentTheme: collectibles.shop_home.style.content_theme };
              const obj11 = { contentTheme: collectibles.shop_home.style.content_theme };
            }
            const reward_states = collectibles.index_page.reward_states;
            obj12 = { description: collectibles.index_page.description, rewardStates: obj13, style: tmp27 };
            obj13 = { inProgress: obj14, earned: obj15, consumed: obj16 };
            obj14 = { progressSteps: progress_steps1.map(f97484) };
            progress_steps1 = reward_states.in_progress.progress_steps;
            tmp27 = undefined;
            obj15 = { heroUrl: reward_states.earned.hero_url };
            obj16 = { heroUrl: reward_states.consumed.hero_url };
            if (null != collectibles.index_page.style) {
              tmp27 = { contentTheme: collectibles.index_page.style.content_theme };
              const obj17 = { contentTheme: collectibles.index_page.style.content_theme };
            }
            ({ progress_indicator, navigation, help_center } = collectibles.shared);
            const obj18 = { title: null, description: null, rewardStates: tmp28, assets: obj22, style: obj25 };
            ({ title: obj19.title, description: obj19.description } = progress_indicator);
            tmp28 = undefined;
            if (null != progress_indicator.indicator_reward_states) {
              progress_steps1 = progress_indicator.indicator_reward_states;
              let tmp29;
              if (null != progress_steps1.in_progress) {
                progress_steps2 = progress_steps1.in_progress.progress_steps;
                const obj20 = { progressSteps: mapped };
                mapped = progress_steps2.map(parseCollectiblesProgressIndicatorRewardState);
                tmp29 = obj20;
              }
              const obj21 = { inProgress: tmp29, earned: tmp31, consumed: tmp32 };
              tmp31 = undefined;
              if (null != progress_steps1.earned) {
                const earned = progress_steps1.earned;
                mapped = { title: earned.title, description: earned.description };
                tmp31 = mapped;
              }
              tmp32 = undefined;
              if (null != progress_steps1.consumed) {
                const consumed = progress_steps1.consumed;
                progress_steps1 = { title: consumed.title, description: consumed.description };
                tmp32 = progress_steps1;
              }
              tmp28 = obj21;
            }
            obj22 = { backgroundUrl: progress_indicator.assets.background_url, rewardPreview: obj23 };
            obj23 = { hiddenUrl: progress_indicator.assets.reward_preview.hidden_url, revealedUrl: revealed_url };
            revealed_url = progress_indicator.assets.reward_preview.revealed_url;
            obj25 = undefined;
            if (null != progress_indicator.style) {
              const obj24 = { contentTheme: progress_indicator.style.content_theme, progressColor: progress_indicator };
              progress_indicator = progress_indicator.style.progress_color;
              obj25 = obj24;
            }
            collectibles = { progressIndicator: obj18, navigation: tmp34, helpCenter: tmp18 };
            let tab;
            if (navigation != null) {
              tab = navigation.tab;
            }
            tmp34 = undefined;
            if (null != tab) {
              obj25 = { tab: progress_indicator };
              progress_indicator = { title: navigation.tab.title, icon: navigation };
              navigation = navigation.tab.icon;
              tmp34 = obj25;
            }
            tmp18 = undefined;
            if (null != help_center) {
              obj25 = { text: help_center.text, id: help_center };
              help_center = help_center.id;
              tmp18 = obj25;
            }
            target = type;
          }
          tmp25 = target;
        } else {
          target = obj25(8477).StorefrontPromotionCollectiblesType.TARGETED_OFFER;
          if (target === type) {
            const reward = collectibles.reward;
            let nagbar;
            if (reward != null) {
              const storefront = reward.storefront;
              if (storefront != null) {
                nagbar = storefront.nagbar;
              }
            }
            navigation = undefined;
            if (reward != null) {
              const checkout = reward.checkout;
              if (checkout != null) {
                navigation = checkout.offer_notice;
              }
            }
            let override_title;
            if (reward != null) {
              progress_indicator = reward.collected;
              if (progress_indicator != null) {
                override_title = progress_indicator.override_title;
              }
            }
            revealed_url = undefined;
            if (null != override_title) {
              progress_indicator = "";
              if ("" !== override_title) {
                revealed_url = override_title;
              }
            }
            help_center = undefined;
            if (reward != null) {
              help_center = reward.flavor;
            }
            if (null == nagbar) {
              if (null == navigation) {
                if (null == revealed_url) {
                  if (null == help_center) {
                    type = { type: obj25(8477).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                    target = type;
                  }
                  tmp25 = target;
                }
              }
            }
            target = { type: obj25(8477).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: type };
            let tmp22;
            if (null != nagbar) {
              const header_text = nagbar.header_text;
              progress_steps1 = { headerText: header_text, cta: tmp23, helpCenterId: help_center_id, icon: mapped };
              tmp23 = undefined;
              if (null != nagbar.cta) {
                progress_steps2 = nagbar.cta.text;
                obj26 = { text: progress_steps2 };
                tmp23 = obj26;
              }
              help_center_id = nagbar.help_center_id;
              mapped = nagbar.icon;
              tmp22 = { nagbar: progress_steps1 };
              const obj27 = { nagbar: progress_steps1 };
            }
            type = { storefront: tmp22, checkout: tmp24, collected: progress_indicator, flavor: help_center };
            tmp24 = undefined;
            if (null != navigation) {
              const icon = navigation.icon;
              progress_steps1 = { icon, text: mapped };
              mapped = navigation.text;
              navigation = { offerNotice: progress_steps1 };
              tmp24 = navigation;
            }
            progress_indicator = undefined;
            if (null != revealed_url) {
              navigation = { overrideTitle: revealed_url };
              progress_indicator = navigation;
            }
          }
        }
        _Date1 = tmp25;
      }
      tmp17 = { collectibles: _Date1 };
      const obj28 = { collectibles: _Date1 };
    }
    if (typeof StorefrontPromotionRecord === "function") {
      const self7 = this;
      const self8 = this;
      const tmp36 = new StorefrontPromotionRecord(
        tmp10,
        progress_steps2,
        obj26,
        mapped,
        progress_steps1,
        revealed_url,
        navigation,
        progress_indicator,
        help_center,
        obj25,
        tmp18,
        collectibles,
        type,
        target,
        _Date1,
        StorefrontPromotionRecord,
        this,
        id,
        application_id,
        name,
      );
      tmp36.id = id;
      tmp36.applicationId = application_id;
      tmp36.name = name;
      tmp36.displayName = display_name;
      tmp36.rewardType = reward_type;
      tmp36.rewardStatus = reward_status;
      tmp36.rewardConfig = tmp3;
      tmp36.skuIds = tmp7;
      tmp36.appliesToAllSkus = applies_to_all_skus;
      tmp36.includeBundles = include_bundles;
      tmp36.startsAt = date;
      tmp36.endsAt = date1;
      tmp36.redemptionEndsAt = date2;
      tmp36.progress = tmp16;
      tmp36.tenantMetadata = tmp17;
      return tmp36;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default StorefrontPromotionRecord;
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
