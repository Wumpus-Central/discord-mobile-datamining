// discord_app/modules/game_server/utils/productToGameServerGame.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_server/utils/productToGameServerGame.tsx");

export const productToGameServerGame = function productToGameServerGame(id) {
  let can_market;
  let disabled;
  let early_access;
  let provider;
  let str;
  const skus = id.skus;
  const mapped = skus.map((id) => {
    const plan_features = id.tenant_metadata.plan_features;
    const obj = {
      id: id.id,
      name: id.name,
      cost: id.tenant_metadata.boost_price,
      specifications: plan_features.map((title) => ({ title: title.title, description: title.description })),
    };
    return obj;
  });
  const sorted = mapped.sort((cost, cost2) => cost2.cost - cost.cost);
  let num = 0;
  if (sorted.length > 0) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(
      items,
      sorted.map((cost) => cost.cost),
      0,
    );
    const _Math2 = Math;
    num = HermesBuiltin.apply(min, items, Math);
  }
  let obj = {
    id: id.id,
    name: id.name,
    gameId: str,
    provider,
    plans: sorted,
    baseCost: num,
    disabled,
    early_access,
    can_market,
  };
  const tenant_metadata = id.tenant_metadata;
  str = undefined;
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
  const tenant_metadata2 = id.tenant_metadata;
  provider = undefined;
  if (tenant_metadata2 != null) {
    const guild_monetization2 = tenant_metadata2.guild_monetization;
    if (guild_monetization2 != null) {
      const game_server2 = guild_monetization2.game_server;
      if (game_server2 != null) {
        provider = game_server2.provider;
      }
    }
  }
  const tenant_metadata3 = id.tenant_metadata;
  disabled = undefined;
  if (tenant_metadata3 != null) {
    const guild_monetization3 = tenant_metadata3.guild_monetization;
    if (guild_monetization3 != null) {
      const game_server3 = guild_monetization3.game_server;
      if (game_server3 != null) {
        disabled = game_server3.disabled;
      }
    }
  }
  const tenant_metadata4 = id.tenant_metadata;
  early_access = undefined;
  if (tenant_metadata4 != null) {
    const guild_monetization4 = tenant_metadata4.guild_monetization;
    if (guild_monetization4 != null) {
      const game_server4 = guild_monetization4.game_server;
      if (game_server4 != null) {
        early_access = game_server4.early_access;
      }
    }
  }
  const tenant_metadata5 = id.tenant_metadata;
  can_market = undefined;
  if (tenant_metadata5 != null) {
    const guild_monetization5 = tenant_metadata5.guild_monetization;
    if (guild_monetization5 != null) {
      const game_server5 = guild_monetization5.game_server;
      if (game_server5 != null) {
        can_market = game_server5.can_market;
      }
    }
  }
  return obj;
};
