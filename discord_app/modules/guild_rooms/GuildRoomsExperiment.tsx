// === Module 7479: GuildRoomsExperiment ===

// Module 7479 (GuildRoomsExperiment)
import GuildMemberStore from "GuildMemberStore" /* 2125 */;

const require = globalThis.__r;

const require = fn;
const createExperiment = fn(5014);
let obj2 = { kind: "guild", id: "2026-06_guild_rooms", label: "Guild Rooms", defaultConfig: { enabled: false, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: false }, treatments: null };
let items = [{ id: 1, label: "Enable Guild Rooms in this guild", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 2, label: "Enable Guild Rooms without Interactions", config: { enabled: true, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 3, label: "Enable Guild Rooms with Room Variants", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }, { id: 4, label: "Enable Guild Rooms without Postures", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: false } }, { id: 5, label: "Enable Guild Rooms with Room 2 Default and Selector", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }];
obj2.treatments = items;
let closure_3 = createExperiment.createExperiment(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export const GUILD_ROOMS_EXPERIMENT_ID = "2026-06_guild_rooms";
export const getGuildRoomsConfig = function getGuildRoomsConfig(guildId, disable) {
  const obj = { autoTrackExposure: true };
  const merged = Object.assign(disable);
  let flag;
  if (disable != null) {
    flag = disable.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    guildId = guildId.guildId;
    let tmp3 = null != guildId;
    if (tmp3) {
      tmp3 = !GuildMemberStore.isCurrentUserGuest(guildId);
    }
    flag = !tmp3;
  }
  obj.disable = flag;
  return closure_3.getCurrentConfig(guildId, obj);
};
export const useGuildRoomsExperiment = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildRoomsExperiment(guildId, disable) {
  _require = guildId;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId.guildId) {
    const fn = function u() {
      let tmp2 = null != guildId.guildId;
      if (tmp2) {
        tmp2 = !GuildMemberStore.isCurrentUserGuest(tmp.guildId);
      }
      return tmp2;
    };
    const items1 = [guildId.guildId];
    cResult[1] = guildId.guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  let flag;
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
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
    if (cResult[5] === flag) {
      let tmp9 = cResult[6];
    }
    return closure_3.useExperiment(guildId, tmp9);
  }
  const obj2 = { autoTrackExposure: true };
  const merged = Object.assign(disable);
  obj2.disable = flag;
  cResult[4] = disable;
  cResult[5] = flag;
  cResult[6] = obj2;
  tmp9 = obj2;
  const tmpResult = require("initialize");
}) : (function useGuildRoomsExperiment(guildId, disable) {
  _require = guildId;
  const items = [GuildMemberStore];
  const items1 = [guildId.guildId];
  const obj2 = { autoTrackExposure: true };
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != guildId.guildId;
    if (tmp2) {
      tmp2 = !GuildMemberStore.isCurrentUserGuest(tmp.guildId);
    }
    return tmp2;
  }, items1);
  const merged = Object.assign(disable);
  let flag;
  if (disable != null) {
    flag = disable.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    flag = !stateFromStores;
  }
  obj2.disable = flag;
  return closure_3.useExperiment(guildId, obj2);
});