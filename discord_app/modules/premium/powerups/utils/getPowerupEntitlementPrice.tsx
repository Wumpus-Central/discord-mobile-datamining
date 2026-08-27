// === Module 4353: getPowerupEntitlementPrice ===

// Module 4353 (getPowerupEntitlementPrice)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/powerups/utils/getPowerupEntitlementPrice.tsx");

export default function getPowerupEntitlementPrice(tenant_metadata) {
  let guild_monetization;
  if (tenant_metadata != null) {
    tenant_metadata = tenant_metadata.tenant_metadata;
    if (tenant_metadata != null) {
      guild_monetization = tenant_metadata.guild_monetization;
    }
  }
  if (tenant_metadata != null) {
    const sku = tenant_metadata.sku;
    if (sku != null) {
      const tenant_metadata2 = sku.tenant_metadata;
      if (tenant_metadata2 != null) {
        guild_monetization = tenant_metadata2.guild_monetization;
      }
    }
  }
  let boost_price;
  if (guild_monetization != null) {
    const game_server = guild_monetization.game_server;
    if (game_server != null) {
      boost_price = game_server.boost_price;
    }
  }
  if (boost_price == null) {
    let boost_price1;
    if (guild_monetization != null) {
      const powerup = guild_monetization.powerup;
      if (powerup != null) {
        boost_price1 = powerup.boost_price;
      }
    }
    boost_price = boost_price1;
  }
  if (boost_price == null) {
    let boost_price2;
    if (guild_monetization != null) {
      const game_server2 = guild_monetization.game_server;
      if (game_server2 != null) {
        boost_price2 = game_server2.boost_price;
      }
    }
    boost_price = boost_price2;
  }
  if (boost_price == null) {
    let boost_price3;
    if (guild_monetization != null) {
      const powerup2 = guild_monetization.powerup;
      if (powerup2 != null) {
        boost_price3 = powerup2.boost_price;
      }
    }
    boost_price = boost_price3;
  }
  return boost_price;
};