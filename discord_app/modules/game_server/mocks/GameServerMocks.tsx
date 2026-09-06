// discord_app/modules/game_server/mocks/GameServerMocks.tsx
import GameServerProviderType from "../../../../discord_common/js/shared/shared-constants/GameServerProviderType.tsx";
import GameServerStatus from "../../../../discord_common/js/shared/shared-constants/GameServerStatus.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { id: "1", name: "GameServer #1", cost: 3, specifications: null };
const items = [
  { title: "2", description: "GB" },
  { title: "1", description: "vCPU" },
  { title: "25", description: "GB" },
];
obj.specifications = items;
const items1 = [obj, ,];
obj = { id: "2", name: "GameServer #2", cost: 6, specifications: null };
const items2 = [
  { title: "2", description: "GB" },
  { title: "1", description: "vCPU" },
  { title: "25", description: "GB" },
];
obj.specifications = items2;
items1[1] = obj;
obj = { id: "3", name: "GameServer #3", cost: 12, specifications: null };
const items3 = [
  { title: "2", description: "GB" },
  { title: "1", description: "vCPU" },
  { title: "25", description: "GB" },
];
obj.specifications = items3;
items1[2] = obj;
const obj1 = {
  id: "1",
  name: "GameServer Test #1",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items4 = [...items1.map((cost) => cost.cost)];
obj1.baseCost = Math.min.apply(items4);
const items5 = [obj1, , , , , , , , , , ,];
const obj2 = {
  id: "2",
  name: "GameServer Test #2",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items6 = [...items1.map((cost) => cost.cost)];
obj2.baseCost = Math.min.apply(items6);
items5[1] = obj2;
const obj3 = {
  id: "3",
  name: "GameServer Test #3",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items7 = [...items1.map((cost) => cost.cost)];
obj3.baseCost = Math.min.apply(items7);
items5[2] = obj3;
const obj4 = {
  id: "4",
  name: "GameServer Test #4",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items8 = [...items1.map((cost) => cost.cost)];
obj4.baseCost = Math.min.apply(items8);
items5[3] = obj4;
const obj5 = {
  id: "5",
  name: "GameServer Test #5",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items9 = [...items1.map((cost) => cost.cost)];
obj5.baseCost = Math.min.apply(items9);
items5[4] = obj5;
const obj6 = {
  id: "6",
  name: "GameServer Test #6",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items10 = [...items1.map((cost) => cost.cost)];
obj6.baseCost = Math.min.apply(items10);
items5[5] = obj6;
const obj7 = {
  id: "7",
  name: "GameServer Test #7",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items11 = [...items1.map((cost) => cost.cost)];
obj7.baseCost = Math.min.apply(items11);
items5[6] = obj7;
const obj8 = {
  id: "8",
  name: "GameServer Test #8",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items12 = [...items1.map((cost) => cost.cost)];
obj8.baseCost = Math.min.apply(items12);
items5[7] = obj8;
const obj9 = {
  id: "9",
  name: "GameServer Test #9",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items13 = [...items1.map((cost) => cost.cost)];
obj9.baseCost = Math.min.apply(items13);
items5[8] = obj9;
const obj10 = {
  id: "10",
  name: "GameServer Test #10",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items14 = [...items1.map((cost) => cost.cost)];
obj10.baseCost = Math.min.apply(items14);
items5[9] = obj10;
const obj11 = {
  id: "11",
  name: "GameServer Test #11",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items15 = [...items1.map((cost) => cost.cost)];
obj11.baseCost = Math.min.apply(items15);
items5[10] = obj11;
const obj12 = {
  id: "12",
  name: "GameServer Test #12",
  provider: GameServerProviderType.GameServerProviderType.SHOCKBYTE,
  plans: items1,
  baseCost: null,
  gameId: "1",
};
const items16 = [...items1.map((cost) => cost.cost)];
obj12.baseCost = Math.min.apply(items16);
items5[11] = obj12;
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
const obj13 = {
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
};
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
const obj14 = {
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
const obj15 = {
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
const obj16 = {
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
const obj17 = {
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
const result = size.fileFinishedImporting("modules/game_server/mocks/GameServerMocks.tsx");

export const GAME_SERVER_GAME_MOCKS = items5;
export const GAME_SERVER_INSTANCE_MOCKS = items17;
