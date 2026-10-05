// discord_common/js/packages/kv-storage/js/index.tsx
import Dao from "api/Dao.tsx";
import Table from "api/Table.tsx";
import TableId from "types/index.tsx";
import Database from "api/Database.tsx";
import EntityDao from "api/EntityDao.tsx";
import GuildDao from "api/GuildDao.tsx";
import GuildEntityDao from "api/GuildEntityDao.tsx";
import Kv from "api/Kv.tsx";
import MessageDao from "api/MessageDao.tsx";
import api_Stats from "api/Stats.tsx";
import "module_2080";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/index.tsx");
for (const key10020 in Dao) {
  exports[key10020] = Dao[key10020];
  continue;
}
for (const key10024 in Database) {
  exports[key10024] = Database[key10024];
  continue;
}
for (const key10028 in EntityDao) {
  exports[key10028] = EntityDao[key10028];
  continue;
}
for (const key10032 in GuildDao) {
  exports[key10032] = GuildDao[key10032];
  continue;
}
for (const key10036 in GuildEntityDao) {
  exports[key10036] = GuildEntityDao[key10036];
  continue;
}
for (const key10040 in Kv) {
  exports[key10040] = Kv[key10040];
  continue;
}
for (const key10044 in MessageDao) {
  exports[key10044] = MessageDao[key10044];
  continue;
}
for (const key10048 in api_Stats) {
  exports[key10048] = api_Stats[key10048];
  continue;
}
for (const key10052 in Table) {
  exports[key10052] = Table[key10052];
  continue;
}
for (const key10056 in TableId) {
  exports[key10056] = TableId[key10056];
  continue;
}
