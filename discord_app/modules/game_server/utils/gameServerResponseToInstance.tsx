// === Module 7685: gameServerResponseToInstance ===

// Module 7685 (gameServerResponseToInstance)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_server/utils/gameServerResponseToInstance.tsx");

export default function gameServerResponseToInstance(id) {
  let num;
  const obj = { id: id.id, name: id.name, regionId: id.region_id, regionName: id.region_name, planId: id.sku_id, planName: id.plan_name, onlineConnectionsCount: num, maxConnectionsCount: null, serverIP: null, port: null, entitlementId: null, subscriptionId: null, providerType: null, gameServerPanelUrl: null, status: null, gameId: null, gameConfig: null };
  num = id.players_count;
  if (num == null) {
    num = 0;
  }
  ({ max_players_count: obj.maxConnectionsCount, ip: obj.serverIP, port: obj.port, entitlement_id: obj.entitlementId, subscription_id: obj.subscriptionId, provider_type: obj.providerType, provider_url: obj.gameServerPanelUrl, status: obj.status, game_id: obj.gameId, game_config: obj.gameConfig } = id);
  return obj;
};