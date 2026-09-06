// discord_app/modules/game_server/utils/gameServerResponseToInstance.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_server/utils/gameServerResponseToInstance.tsx");

export default function gameServerResponseToInstance(id) {
  const obj = {
    id: id.id,
    name: id.name,
    regionId: id.region_id,
    regionName: id.region_name,
    planId: id.sku_id,
    planName: id.plan_name,
    onlineConnectionsCount: null,
    maxConnectionsCount: null,
    serverIP: null,
    port: null,
    entitlementId: null,
    subscriptionId: null,
    providerType: null,
    gameServerPanelUrl: null,
    status: null,
    gameId: null,
    gameConfig: null,
  };
  let num = id.players_count;
  if (num == null) {
    num = 0;
  }
  obj.onlineConnectionsCount = num;
  ({
    max_players_count: obj.maxConnectionsCount,
    ip: obj.serverIP,
    port: obj.port,
    entitlement_id: obj.entitlementId,
    subscription_id: obj.subscriptionId,
    provider_type: obj.providerType,
    provider_url: obj.gameServerPanelUrl,
    status: obj.status,
    game_id: obj.gameId,
    game_config: obj.gameConfig,
  } = id);
  return obj;
}
