// === Module 12123: storeListingToGuildPowerup ===

// Module 12123 (storeListingToGuildPowerup)
import set from "set" /* 2 */;
import set2 from "set" /* 1925 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4331 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

({ DEFAULT_SOUND_SLOTS: c0, DEFAULT_STICKER_SLOTS: closure_1 } = GuildFeatures);
const GuildPowerupType = BoostedGuildTiers.GuildPowerupType;
const DEFAULT_EMOJI_SLOTS = set2.DEFAULT_EMOJI_SLOTS;
const result = set.fileFinishedImporting("modules/premium/powerups/utils/storeListingToGuildPowerup.tsx");

export default function storeListingToGuildPowerup(arr, powerup_metadata) {
  powerup_metadata = powerup_metadata.powerup_metadata;
  let category_type;
  if (powerup_metadata != null) {
    category_type = powerup_metadata.category_type;
  }
  if (null != category_type) {
    const sku4 = powerup_metadata.sku;
    powerup_metadata = undefined;
    if (sku4 != null) {
      powerup_metadata = sku4.powerup_metadata;
    }
    if (null != powerup_metadata) {
      let obj = { title: null, skuId: null, cost: null, dependencies: null, animatedImageUrl: null, staticImageUrl: null, storeRemovalDate: null, deactivationCooldownPeriodDays: null };
      obj[0] = powerup_metadata.summary;
      obj[1] = powerup_metadata.sku.id;
      obj[2] = powerup_metadata.boost_price;
      if (null != powerup_metadata.sku.dependent_sku_id) {
        const items = [powerup_metadata.sku.dependent_sku_id];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj[3] = items1;
      const powerup_metadata2 = powerup_metadata.powerup_metadata;
      let animated_image_url;
      if (powerup_metadata2 != null) {
        animated_image_url = powerup_metadata2.animated_image_url;
      }
      if (animated_image_url == null) {
        animated_image_url = powerup_metadata.animated_image_url;
      }
      obj[4] = animated_image_url;
      const powerup_metadata3 = powerup_metadata.powerup_metadata;
      let static_image_url;
      if (powerup_metadata3 != null) {
        static_image_url = powerup_metadata3.static_image_url;
      }
      if (static_image_url == null) {
        static_image_url = powerup_metadata.static_image_url;
      }
      obj[5] = static_image_url;
      const powerup_metadata4 = powerup_metadata.powerup_metadata;
      let store_removal_date;
      if (powerup_metadata4 != null) {
        store_removal_date = powerup_metadata4.store_removal_date;
      }
      obj[6] = store_removal_date;
      const powerup_metadata5 = powerup_metadata.powerup_metadata;
      let prop;
      if (powerup_metadata5 != null) {
        prop = powerup_metadata5.deactivation_cooldown_period_days;
      }
      obj[7] = prop;
      if (GuildPowerupType.LEVEL === category_type) {
        const powerup_metadata6 = powerup_metadata.sku.powerup_metadata;
        let guild_features;
        if (powerup_metadata6 != null) {
          guild_features = powerup_metadata6.guild_features;
        }
        if (null != guild_features) {
          const sum = DEFAULT_EMOJI_SLOTS + guild_features.additional_emoji_slots;
          let sum1 = dependent_sku_id + guild_features.additional_sound_slots;
          let sum2 = closure_1 + guild_features.additional_sticker_slots;
          dependent_sku_id = powerup_metadata.sku.dependent_sku_id;
          let tmp22 = sum;
          let tmp23 = sum2;
          let tmp24 = sum1;
          let tmp25 = sum;
          if (null != dependent_sku_id) {
            do {
              let found = arr.find((sku) => dependent_sku_id === sku.sku.id);
              let tmp13 = sum2;
              let tmp14 = sum1;
              let tmp15 = tmp22;
              let num;
              if (found != null) {
                let sku = found.sku;
                if (sku != null) {
                  let powerup_metadata7 = sku.powerup_metadata;
                  if (powerup_metadata7 != null) {
                    guild_features = powerup_metadata7.guild_features;
                    if (guild_features != null) {
                      num = guild_features.additional_emoji_slots;
                    }
                  }
                }
              }
              if (num == null) {
                num = 0;
              }
              let sum3 = tmp22 + num;
              let num2;
              if (found != null) {
                let sku2 = found.sku;
                if (sku2 != null) {
                  let powerup_metadata8 = sku2.powerup_metadata;
                  if (powerup_metadata8 != null) {
                    let guild_features2 = powerup_metadata8.guild_features;
                    if (guild_features2 != null) {
                      num2 = guild_features2.additional_sound_slots;
                    }
                  }
                }
              }
              if (num2 == null) {
                num2 = 0;
              }
              let sum4 = sum1 + num2;
              let num3;
              if (found != null) {
                let sku3 = found.sku;
                if (sku3 != null) {
                  let powerup_metadata9 = sku3.powerup_metadata;
                  if (powerup_metadata9 != null) {
                    let guild_features3 = powerup_metadata9.guild_features;
                    if (guild_features3 != null) {
                      num3 = guild_features3.additional_sticker_slots;
                    }
                  }
                }
              }
              if (num3 == null) {
                num3 = 0;
              }
              let sum5 = sum2 + num3;
              dependent_sku_id = undefined;
              if (found != null) {
                dependent_sku_id = found.sku.dependent_sku_id;
              }
              sum2 = sum5;
              sum1 = sum4;
              tmp22 = sum3;
              tmp23 = sum5;
              tmp24 = sum4;
              tmp25 = sum3;
            } while (null != dependent_sku_id);
          }
          obj = { type: null, features: null };
          obj[0] = GuildPowerupType.LEVEL;
          obj1 = {};
          const merged = Object.assign(guild_features);
          obj1.total_emoji_slots = tmp25;
          obj1.total_sound_slots = tmp24;
          obj1.total_sticker_slots = tmp23;
          obj[1] = obj1;
          const merged1 = Object.assign(obj);
          return obj;
        }
      } else if (tmp7.PERK === category_type) {
        obj = { type: null, description: null };
        obj[0] = tmp7.PERK;
        let str = powerup_metadata.description;
        if (str == null) {
          str = "";
        }
        obj[1] = str;
        const merged2 = Object.assign(obj);
        return obj;
      }
    }
  }
};