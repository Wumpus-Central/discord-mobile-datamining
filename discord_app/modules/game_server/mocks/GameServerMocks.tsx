// discord_app/modules/game_server/mocks/GameServerMocks.tsx
import GameServerProviderType from "../../../../discord_common/js/shared/shared-constants/GameServerProviderType.tsx";
import GameServerStatus from "../../../../discord_common/js/shared/shared-constants/GameServerStatus.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let items;
let items10;
let items11;
let items12;
let items13;
let items14;
let items15;
let items16;
let items2;
let items3;
let items4;
let items6;
let items7;
let items8;
let items9;
const f110763 = (cost) => cost.cost;
const obj = { id: "1", name: "GameServer #1", cost: 3, specifications: items };
items = [
  { title: "2", description: "GB" },
  { title: "1", description: "vCPU" },
  { title: "25", description: "GB" },
];
const items1 = [obj, ,];
const obj2 = { id: "2", name: "GameServer #2", cost: 6, specifications: items2 };
items2 = [
  { title: "2", description: "GB" },
  { title: "1", description: "vCPU" },
  { title: "25", description: "GB" },
];
items1[1] = obj2;
const obj3 = { id: "3", name: "GameServer #3", cost: 12, specifications: items3 };
items3 = [
  { title: "2", description: "GB" },
  { title: "1", description: "vCPU" },
  { title: "25", description: "GB" },
];
items1[2] = obj3;
const obj4 = {
  id: "1",
  name: "GameServer Test #1",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items4),
  gameId: "1",
};
items4 = [...items1.map(f110763)];
const items5 = [obj4, , , , , , , , , , ,];
const obj5 = {
  id: "2",
  name: "GameServer Test #2",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items6),
  gameId: "1",
};
items6 = [...items1.map(f110763)];
items5[1] = obj5;
const obj6 = {
  id: "3",
  name: "GameServer Test #3",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items7),
  gameId: "1",
};
items7 = [...items1.map(f110763)];
items5[2] = obj6;
const obj7 = {
  id: "4",
  name: "GameServer Test #4",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items8),
  gameId: "1",
};
items8 = [...items1.map(f110763)];
items5[3] = obj7;
const obj8 = {
  id: "5",
  name: "GameServer Test #5",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items9),
  gameId: "1",
};
items9 = [...items1.map(f110763)];
items5[4] = obj8;
const obj9 = {
  id: "6",
  name: "GameServer Test #6",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items10),
  gameId: "1",
};
items10 = [...items1.map(f110763)];
items5[5] = obj9;
const obj10 = {
  id: "7",
  name: "GameServer Test #7",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items11),
  gameId: "1",
};
items11 = [...items1.map(f110763)];
items5[6] = obj10;
const obj11 = {
  id: "8",
  name: "GameServer Test #8",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items12),
  gameId: "1",
};
items12 = [...items1.map(f110763)];
items5[7] = obj11;
const obj12 = {
  id: "9",
  name: "GameServer Test #9",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items13),
  gameId: "1",
};
items13 = [...items1.map(f110763)];
items5[8] = obj12;
const obj13 = {
  id: "10",
  name: "GameServer Test #10",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items14),
  gameId: "1",
};
items14 = [...items1.map(f110763)];
items5[9] = obj13;
const obj14 = {
  id: "11",
  name: "GameServer Test #11",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items15),
  gameId: "1",
};
items15 = [...items1.map(f110763)];
items5[10] = obj14;
const obj15 = {
  id: "12",
  name: "GameServer Test #12",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: Math.min.apply(items16),
  gameId: "1",
};
items16 = [...items1.map(f110763)];
items5[11] = obj15;
const items17 = [
  {
    id: "1",
    gameId: "1",
    name: "GameServer Test #1",
    port: "25565",
    regionId: "us-east",
    regionName: "US East",
    planId: items1[1].id,
    planName: items1[1].name,
    onlineConnectionsCount: 0,
    maxConnectionsCount: 10,
    status: GameServerStatus.GameServerStatus.ONLINE,
    serverIP: "127.0.0.1",
    gameServerPanelUrl: "https://google.com",
    entitlementId: "1",
  },
  ,
  ,
  ,
  ,
];
({
  id: "1",
  gameId: "1",
  name: "GameServer Test #1",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "1",
});
items17[1] = {
  id: "2",
  gameId: "2",
  name: "GameServer Test #2",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "2",
};
({
  id: "2",
  gameId: "2",
  name: "GameServer Test #2",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "2",
});
items17[2] = {
  id: "3",
  gameId: "3",
  name: "GameServer Test #3",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "3",
};
({
  id: "3",
  gameId: "3",
  name: "GameServer Test #3",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "3",
});
items17[3] = {
  id: "4",
  gameId: "4",
  name: "GameServer Test #4",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "4",
};
({
  id: "4",
  gameId: "4",
  name: "GameServer Test #4",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "4",
});
items17[4] = {
  id: "5",
  gameId: "5",
  name: "GameServer Test #5",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "5",
};
({
  id: "5",
  gameId: "5",
  name: "GameServer Test #5",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "5",
});
items17[5] = {
  id: "6",
  gameId: "6",
  name: "GameServer Test #6",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "6",
};
({
  id: "6",
  gameId: "6",
  name: "GameServer Test #6",
  port: "25565",
  regionId: "us-east",
  regionName: "US East",
  planId: items1[1].id,
  planName: items1[1].name,
  onlineConnectionsCount: 0,
  maxConnectionsCount: 10,
  status: GameServerStatus.GameServerStatus.ONLINE,
  serverIP: "127.0.0.1",
  gameServerPanelUrl: "https://google.com",
  entitlementId: "6",
});
const result = size.fileFinishedImporting("modules/game_server/mocks/GameServerMocks.tsx");

export const GAME_SERVER_GAME_MOCKS = items5;
export const GAME_SERVER_INSTANCE_MOCKS = items17;
