// === Module 11655: productToGameServerGame ===

// Module 11655 (productToGameServerGame)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/game_server/utils/productToGameServerGame.tsx");

export const productToGameServerGame = function productToGameServerGame(id) {
  const skus = id.skus;
  const mapped = skus.map((id) => {
    const plan_features = id.tenant_metadata.plan_features;
    return { id: id.id, name: id.name, cost: id.tenant_metadata.boost_price, specifications: plan_features.map((title) => ({ title: title.title, description: title.description })) };
  });
  const sorted = mapped.sort((cost, cost2) => cost2.cost - cost.cost);
  let num = 0;
  if (sorted.length > 0) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(sorted.map((cost) => cost.cost), 0);
    const _Math2 = Math;
    num = HermesBuiltin.apply(items, Math);
  }
  const obj = { id: id.id, name: id.name, gameId: null, provider: null, plans: null, baseCost: null, disabled: null, early_access: null, can_market: null };
  const tenant_metadata = id.tenant_metadata;
  let str;
  if (tenant_metadata != null) {
    const guild_monetization = tenant_metadata.guild_monetization;
    if (guild_monetization != null) {
      const game_server = guild_monetization.game_server;
      if (game_server != null) {
        str = game_server.game_application_id;
      }
    }
  }
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  const tenant_metadata2 = id.tenant_metadata;
  let provider;
  if (tenant_metadata2 != null) {
    const guild_monetization2 = tenant_metadata2.guild_monetization;
    if (guild_monetization2 != null) {
      const game_server2 = guild_monetization2.game_server;
      if (game_server2 != null) {
        provider = game_server2.provider;
      }
    }
  }
  obj[3] = provider;
  obj[4] = sorted;
  obj[5] = num;
  const tenant_metadata3 = id.tenant_metadata;
  let disabled;
  if (tenant_metadata3 != null) {
    const guild_monetization3 = tenant_metadata3.guild_monetization;
    if (guild_monetization3 != null) {
      const game_server3 = guild_monetization3.game_server;
      if (game_server3 != null) {
        disabled = game_server3.disabled;
      }
    }
  }
  obj[6] = disabled;
  const tenant_metadata4 = id.tenant_metadata;
  let early_access;
  if (tenant_metadata4 != null) {
    const guild_monetization4 = tenant_metadata4.guild_monetization;
    if (guild_monetization4 != null) {
      const game_server4 = guild_monetization4.game_server;
      if (game_server4 != null) {
        early_access = game_server4.early_access;
      }
    }
  }
  obj[7] = early_access;
  const tenant_metadata5 = id.tenant_metadata;
  let can_market;
  if (tenant_metadata5 != null) {
    const guild_monetization5 = tenant_metadata5.guild_monetization;
    if (guild_monetization5 != null) {
      const game_server5 = guild_monetization5.game_server;
      if (game_server5 != null) {
        can_market = game_server5.can_market;
      }
    }
  }
  obj[8] = can_market;
  return obj;
};