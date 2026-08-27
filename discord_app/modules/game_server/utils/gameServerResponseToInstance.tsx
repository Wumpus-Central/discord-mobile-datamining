// === Module 4354: gameServerResponseToInstance ===

// Module 4354 (gameServerResponseToInstance)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/game_server/utils/gameServerResponseToInstance.tsx");

export default function gameServerResponseToInstance(id) {
  const obj = { id: id.id, name: id.name, regionId: id.region_id, regionName: id.region_name, planId: id.sku_id, planName: id.plan_name, onlineConnectionsCount: null, maxConnectionsCount: null, serverIP: null, port: null, entitlementId: null, subscriptionId: null, providerType: null, gameServerPanelUrl: null, status: null, gameId: null, gameConfig: null };
  let num = id.players_count;
  if (num == null) {
    num = 0;
  }
  obj[6] = num;
  ({ max_players_count: obj[7], ip: obj[8], port: obj[9], entitlement_id: obj[10], subscription_id: obj[11], provider_type: obj[12], provider_url: obj[13], status: obj[14], game_id: obj[15], game_config: obj[16] } = id);
  return obj;
};