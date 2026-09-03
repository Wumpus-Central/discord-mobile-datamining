// === Module 4721: GUILD_ROOMS_EXPERIMENT_ID ===

// Module 4721 (GUILD_ROOMS_EXPERIMENT_ID)
import closure_2 from "trackCommunicationDisabled" /* 1991 */;
import createExperiment from "createExperiment" /* 4389 */;

const require = arg1;
let items = [{ id: 1, label: "Enable Guild Rooms in this guild", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 2, label: "Enable Guild Rooms without Interactions", config: { enabled: true, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 3, label: "Enable Guild Rooms with Room Variants", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }, { id: 4, label: "Enable Guild Rooms without Postures", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: false } }, { id: 5, label: "Enable Guild Rooms with Room 2 Default and Selector", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }];
let closure_3 = createExperiment.createExperiment({ kind: "guild", id: "2026-06_guild_rooms", label: "Guild Rooms", defaultConfig: { enabled: false, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

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
      tmp3 = !currentUserGuest.isCurrentUserGuest(guildId);
    }
    flag = !tmp3;
  }
  obj.disable = flag;
  return closure_3.getCurrentConfig(guildId, obj);
};
export const useGuildRoomsExperiment = function useGuildRoomsExperiment(guildId) {
  const _require = guildId;
  let obj = _require(586);
  const items = [closure_2];
  const items1 = [guildId.guildId];
  obj = { autoTrackExposure: true };
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildId.guildId;
    if (tmp2) {
      tmp2 = !closure_1_2.isCurrentUserGuest(tmp.guildId);
    }
    return tmp2;
  }, items1);
  const merged = Object.assign(arg1);
  let flag;
  if (arg1 != null) {
    flag = arg1.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    flag = !stateFromStores;
  }
  obj.disable = flag;
  return closure_3.useExperiment(guildId, obj);
};