// === Module 5096: GuildRoomsExperiment ===

// Module 5096 (GuildRoomsExperiment)
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import createExperiment from "module_4780" /* 4780 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items;
let obj = { kind: "guild", id: "2026-06_guild_rooms", label: "Guild Rooms", defaultConfig: { enabled: false, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: false }, treatments: items };
items = [{ id: 1, label: "Enable Guild Rooms in this guild", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 2, label: "Enable Guild Rooms without Interactions", config: { enabled: true, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 3, label: "Enable Guild Rooms with Room Variants", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }, { id: 4, label: "Enable Guild Rooms without Postures", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: false } }, { id: 5, label: "Enable Guild Rooms with Room 2 Default and Selector", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }];
let closure_3 = createExperiment.createExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, disable) => {
  let first;
  let tmp6;
  let tmp7;
  _require = guildId;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId.guildId) {
    const fn = function u() {
      const tmp2 = null != guildId.guildId && !GuildMemberStore.isCurrentUserGuest(tmp.guildId);
      return tmp2;
    };
    const items1 = [guildId.guildId];
    cResult[1] = guildId.guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let flag;
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (disable != null) {
    flag = disable.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    flag = !stateFromStores;
  }
  if (cResult[4] === disable) {
    let tmp9;
    if (cResult[5] === flag) {
      tmp9 = cResult[6];
    }
    return closure_3.useExperiment(guildId, tmp9);
  }
  const obj2 = { autoTrackExposure: true, disable: flag };
  const merged = Object.assign(disable);
  cResult[4] = disable;
  cResult[5] = flag;
  cResult[6] = obj2;
  tmp9 = obj2;
}) : ((guildId, disable) => {
  let flag;
  _require = guildId;
  const items = [GuildMemberStore];
  const items1 = [guildId.guildId];
  const obj2 = { autoTrackExposure: true, disable: flag };
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != guildId.guildId && !GuildMemberStore.isCurrentUserGuest(tmp.guildId);
    return tmp2;
  }, items1);
  const useExperiment = closure_3.useExperiment;
  const merged = Object.assign(disable);
  flag = undefined;
  if (disable != null) {
    flag = disable.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    flag = !stateFromStores;
  }
  return useExperiment(guildId, obj2);
});
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export const GUILD_ROOMS_EXPERIMENT_ID = "2026-06_guild_rooms";
export const getGuildRoomsConfig = function getGuildRoomsConfig(guildId, disable) {
  let flag;
  const getCurrentConfig = closure_3.getCurrentConfig;
  const obj = { autoTrackExposure: true, disable: flag };
  const merged = Object.assign(disable);
  flag = undefined;
  if (disable != null) {
    flag = disable.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    guildId = guildId.guildId;
    flag = !(null != guildId && !GuildMemberStore.isCurrentUserGuest(guildId));
    const tmp3 = null != guildId && !GuildMemberStore.isCurrentUserGuest(guildId);
  }
  return getCurrentConfig(guildId, obj);
};
export const useGuildRoomsExperiment = tmp2;